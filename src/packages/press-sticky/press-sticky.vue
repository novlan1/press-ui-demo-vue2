<template>
  <view
    ref="sticky"
    class="van-sticky"
    :class="customClass"
    :style="containerStyle"
  >
    <view
      :class="wrapClass"
      :style="wrapStyle"
    >
      <slot />
    </view>
  </view>
</template>
<script>
import utils from '../wxs-js/utils';
import computed from './index.js';

import { getRect } from '../common/utils';
import { isDef } from '../common/validator';
import { pageScrollMixin } from '../mixins/page-scroll';
import { BindEventMixin } from '../mixins/bind-event';
import { getScroller } from '../common/dom/scroll';
import { PressComponent } from '../common/press-component';

const ROOT_ELEMENT = '.van-sticky';

const scrollMixin = pageScrollMixin(function (event) {
  if (this.scrollTop !== null) {
    return;
  }
  this.onScroll(event);
});


export default PressComponent({
  mixins: [
    scrollMixin,
    // #ifdef H5
    BindEventMixin(function (bind, isBind) {
      if (!this.scroller) {
        this.scroller = getScroller(this.$el);
      }
      if (this.observer) {
        const method = isBind ? 'observe' : 'unobserve';
        this.observer[method](this.$el);
      }

      bind(this.scroller, 'scroll', this.onScroll, true);
      this.onScroll();
    }),
    // #endif
  ],
  props: {
    zIndex: {
      type: Number,
      default: 99,
    },
    offsetTop: {
      type: Number,
      default: 0,
      // observer: 'onScroll',
    },
    disabled: {
      type: Boolean,
      // observer: 'onScroll',
    },
    container: {
      type: [Function, null],
      default: null,
      // observer: 'onScroll',
    },
    scrollTop: {
      type: [Number, null],
      default: null,
      // observer(val) {
      //   this.onScroll({ scrollTop: val });
      // },
    },
  },
  data() {
    return {
      height: 0,
      fixed: false,
      transform: 0,

      scrollTopData: this.scrollTop,
    };
  },
  computed: {
    containerStyle() {
      const { fixed, height, zIndex } = this;
      const res = computed.containerStyle({ fixed, height, zIndex });
      return res;
    },
    wrapStyle() {
      const { fixed, offsetTop, transform, zIndex } = this;
      const wrapStyle = computed.wrapStyle({ fixed, offsetTop, transform, zIndex });
      return wrapStyle;
    },
    wrapClass() {
      const { fixed } = this;
      return utils.bem('sticky-wrap', { fixed });
    },
  },
  watch: {
    offsetTop: {
      handler() {
        this.onScroll();
      },
      // immediate: true,
    },
    disabled: {
      handler() {
        this.onScroll();
      },
      // immediate: true,
    },
    container: {
      handler() {
        this.onScroll();
      },
      // immediate: true,
    },
    scrollTop: {
      handler(val) {
        this.onScroll({ scrollTop: val });
        this.scrollTopData = val;
      },
      // immediate: true,
    },
  },
  created() {
    // #ifdef H5
    if (window.IntersectionObserver) {
      this.observer = new IntersectionObserver(
        (/* entries */) => {
          // trigger scroll when visibility changed
          // if (entries[0].intersectionRatio > 0) {
          this.onScroll();
          // }
        },
        { root: document.body },
      );
    }
    // #endif
  },
  mounted() {
    this.scrollTopData = this.scrollTop;
    this.onScroll();
  },
  methods: {
    setData(data) {
      Object.keys(data).forEach((key) => {
        this[key] = data[key];
      });
    },
    onScroll({ scrollTop } = {}) {
      const { container, offsetTop, disabled } = this;
      if (disabled) {
        this.setDataAfterDiff({
          fixed: false,
          transform: 0,
        });
        return;
      }
      this.scrollTopData = scrollTop || this.scrollTopData;
      if (typeof container === 'function') {
        Promise.all([
          getRect(this, ROOT_ELEMENT),
          this.getContainerRect(),
        ]).then(([root, container]) => {
          if (root && container && offsetTop + root.height > container.height + container.top) {
            this.setDataAfterDiff({
              fixed: false,
              transform: container.height - root.height,
            });
          } else if (root && offsetTop >= root.top) {
            this.setDataAfterDiff({
              fixed: true,
              height: root.height,
              transform: 0,
            });
          } else {
            this.setDataAfterDiff({ fixed: false, transform: 0 });
          }
        });
        return;
      }

      getRect(this, ROOT_ELEMENT).then((root) => {
        if (!isDef(root)) {
          return;
        }
        if (offsetTop >= root.top) {
          this.setDataAfterDiff({ fixed: true, height: root.height });
          this.transform = 0;
        } else {
          this.setDataAfterDiff({ fixed: false });
        }
      });
    },
    setDataAfterDiff(data) {
      wx.nextTick(() => {
        const diff = Object.keys(data).reduce((prev, key) => {
          if (data[key] !== this[key]) {
            prev[key] = data[key];
          }
          return prev;
        }, {});
        if (Object.keys(diff).length > 0) {
          this.setData(diff);
        }
        this.$emit('scroll', {
          scrollTop: this.scrollTopData,
          isFixed: data.fixed || this.fixed,
        });
      });
    },
    getContainerRect() {
      const nodesRef = this.container();
      return new Promise(resolve => nodesRef.boundingClientRect(resolve).exec());
    },
  },
});
</script>
<style lang="scss" scoped>
@import "../common/index.scss";

.van-sticky {
  position: relative;

  &-wrap {
    &--fixed {
      position: fixed;
      right: 0;
      left: 0;
    }
  }
}
</style>

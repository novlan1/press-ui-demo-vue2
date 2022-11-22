<template>
  <div
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
  </div>
</template>
<script>
import utils from '../wxs-js/utils';
import computed from './index.js';
import Vue from 'vue';

import { getRect } from '../common/utils';
import { isDef } from '../common/validator';
import { pageScrollMixin } from '../mixins/page-scroll';
import { BindEventMixin } from '../mixins/bind-event';
import { getScroller } from '../common/dom/scroll';
import { defaultProps, defaultOptions } from '../common/press-component';

const ROOT_ELEMENT = '.van-sticky';
const ROOT_REF = 'sticky';

const scrollMixin = pageScrollMixin(function (event) {
  if (this.scrollTop !== null) {
    return;
  }
  this.onScroll(event);
});


export default {
  options: {
    ...defaultOptions,
  },
  mixins: [
    // #ifndef H5
    scrollMixin,
    // #endif

    // #ifdef H5
    BindEventMixin(function (bind /* isBind*/) {
      if (!this.scroller) {
        this.scroller = getScroller(this.$el);
      }

      // if (this.observer) {
      //   const method = isBind ? 'observe' : 'unobserve';
      //   this.observer[method](this.$el);
      // }

      bind(this.scroller, 'scroll', this.onScroll, true);
      bind(this.scroller, 'touchmove', this.onScroll, true);
      this.onScroll();
    }),
    // #endif
  ],
  props: {
    ...defaultProps,
    zIndex: {
      type: Number,
      default: 99,
    },
    offsetTop: {
      type: Number,
      default: 0,
    },
    disabled: {
      type: Boolean,
    },
    container: {
      type: [Function, null],
      default: null,
    },
    scrollTop: {
      type: [Number, null],
      default: null,
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
    },
    disabled: {
      handler() {
        this.onScroll();
      },
    },
    container: {
      handler() {
        this.onScroll();
      },
    },
    scrollTop: {
      handler(val) {
        this.onScroll({ scrollTop: val });
        this.scrollTopData = val;
      },
    },
  },
  created() {
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

      if (typeof container === 'function' && container()) {
        Promise.all([
          getRect(this, ROOT_ELEMENT, ROOT_REF),
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
        })
          .catch((error) => {
            console.warn('error', error);
          });
        return;
      }

      getRect(this, ROOT_ELEMENT, ROOT_REF).then((root) => {
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
      Vue.nextTick(() => {
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
      let res;

      // #ifdef H5
      const rect = nodesRef.getBoundingClientRect();
      res = Promise.resolve(rect);
      // #endif

      // #ifndef H5
      res = new Promise(resolve => nodesRef.boundingClientRect(resolve).exec());
      // #endif
      return res;
    },
  },
};
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

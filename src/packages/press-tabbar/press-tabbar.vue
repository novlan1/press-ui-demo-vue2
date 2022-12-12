<template>
  <uni-shadow-root class="vant-tabbar-index">
    <view
      :class="(border ? 'van-hairline--top-bottom' : '')+
        ' '+(utils.bem('tabbar', { fixed, safe: safeAreaInsetBottom }))+' custom-class'"
      :style="zIndex ? 'z-index: ' + zIndex : ''"
    >
      <slot />
    </view>

    <view
      v-if="fixed && placeholder"
      :style="'height: '+(height)+'px;'"
    />
  </uni-shadow-root>
</template>
<script>
import utils from '../wxs-js/utils';

// import { useChildren } from '../common/relation';
import { getRect } from '../common/utils';
import { defaultOptions, defaultProps } from '../common/press-component';
import { ParentMixin } from '../mixins/relation';

const PARENT = 'radioGroup';

export default {
  options: {
    ...defaultOptions,
    styleIsolation: 'shared',
  },
  mixins: [
    ParentMixin(PARENT),
  ],
  // relation: useChildren('tabbar-item', function () {
  //   this.updateChildren();
  // }),
  props: {
    active: {
      type: [String, Number],
      default: '',
      // observer: 'updateChildren',
    },
    activeColor: {
      type: String,
      default: '',
      // observer: 'updateChildren',
    },
    inactiveColor: {
      type: String,
      default: '',
      // observer: 'updateChildren',
    },
    fixed: {
      type: Boolean,
      default: true,
      // observer: 'setHeight',
    },
    placeholder: {
      type: Boolean,
      // observer: 'setHeight',
    },
    border: {
      type: Boolean,
      default: true,
    },
    zIndex: {
      type: Number,
      default: 1,
    },
    safeAreaInsetBottom: {
      type: Boolean,
      default: true,
    },
    ...defaultProps,
  },
  data() {
    return {
      height: 50,
      utils,
    };
  },
  watch: {
    active: {
      handler() {
        this.updateChildren();
      },
    },
    activeColor: {
      handler() {
        this.updateChildren();
      },
    },
    inactiveColor: {
      handler() {
        this.updateChildren();
      },
    },
    fixed: {
      handler() {
        this.setHeight();
      },
    },
    placeholder: {
      handler() {
        this.setHeight();
      },
    },
  },
  created() {
    this.children = [];
  },
  methods: {
    updateChildren() {
      const { children } = this;
      if (!Array.isArray(children) || !children.length) {
        return;
      }
      children.forEach(child => child.updateFromParent());
    },
    setHeight() {
      if (!this.fixed || !this.placeholder) {
        return;
      }
      this.$nextTick(() => {
        getRect(this, '.van-tabbar').then((res) => {
          this.height = res.height;
          // this.setData({ height: res.height });
        });
      });
    },
  },
};

</script>
<style platform="mp-weixin" lang="scss">
@import "../common/index.scss";
@import "../common/style/var.scss";

.van-tabbar {
  display: flex;
  box-sizing: content-box;
  width: 100%;
  height: var(--tabbar-height, $tabbar-height);
  background-color: var(--tabbar-background-color, $tabbar-background-color);

  &--fixed {
    position: fixed;
    bottom: 0;
    left: 0;
  }

  &--safe {
    padding-bottom: constant(safe-area-inset-bottom);
    padding-bottom: env(safe-area-inset-bottom);
  }
}
</style>

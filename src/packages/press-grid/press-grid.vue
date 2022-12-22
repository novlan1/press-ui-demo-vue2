<template>
  <uni-shadow-root class="vant-grid-index">
    <view
      :class="'van-grid custom-class '+(border && !gutter ? 'van-hairline--top' : '')"
      :style="true ? computed.rootStyle({ gutter }) : ''"
    >
      <slot />
    </view>
  </uni-shadow-root>
</template>
<script>
import computed from './computed';
// import { useChildren } from '../common/relation';
import { defaultOptions, defaultProps } from '../common/press-component';
import { ParentMixin } from '../mixins/relation';
import { PARENT_GRID as PARENT } from '../common/parent-map';


export default {
  options: {
    ...defaultOptions,
    styleIsolation: 'shared',
  },
  mixins: [
    ParentMixin(PARENT),
  ],
  // relation: useChildren('grid-item'),
  props: {
    square: {
      type: Boolean,
      // observer: 'updateChildren',
    },
    gutter: {
      type: [Number, null],
      default: 0,
      // observer: 'updateChildren',
    },
    clickable: {
      type: Boolean,
      // observer: 'updateChildren',
    },
    columnNum: {
      type: Number,
      default: 4,
      // observer: 'updateChildren',
    },
    center: {
      type: Boolean,
      default: true,
      // observer: 'updateChildren',
    },
    border: {
      type: Boolean,
      default: true,
      // observer: 'updateChildren',
    },
    direction: {
      type: String,
      default: '',
      // observer: 'updateChildren',
    },
    iconSize: {
      type: String,
      default: '',
      // observer: 'updateChildren',
    },
    reverse: {
      type: Boolean,
      default: false,
      // observer: 'updateChildren',
    },
    ...defaultProps,
  },
  data() {
    return {
      computed,
    };
  },
  watch: {
    square: {
      handler() {
        this.updateChildren();
      },
      immediate: true,
    },
    gutter: {
      handler() {
        this.updateChildren();
      },
      immediate: true,
    },
    clickable: {
      handler() {
        this.updateChildren();
      },
      immediate: true,
    },
    columnNum: {
      handler() {
        this.updateChildren();
      },
      immediate: true,
    },
    center: {
      handler() {
        this.updateChildren();
      },
      immediate: true,
    },
    border: {
      handler() {
        this.updateChildren();
      },
      immediate: true,
    },
    direction: {
      handler() {
        this.updateChildren();
      },
      immediate: true,
    },
    iconSize: {
      handler() {
        this.updateChildren();
      },
      immediate: true,
    },
    reverse: {
      handler() {
        this.updateChildren();
      },
      immediate: true,
    },
  },
  created() {
    this.children = [];
  },
  methods: {
    updateChildren() {
      if (!this.children) return;
      this.children.forEach((child) => {
        child.updateStyle();
      });
    },
  },
};
</script>
<style platform="mp-weixin" lang="scss">
@import "../common/index.scss";
.van-grid {
  box-sizing: border-box;
  overflow: hidden;
  position: relative;
}
</style>

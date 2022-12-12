<template>
  <uni-shadow-root class="vant-radio-group-index">
    <view :class="'' + utils.bem('radio-group', [direction])">
      <slot />
    </view>
  </uni-shadow-root>
</template>
<script>

// import { useChildren } from '../common/relation';
import utils from '../wxs-js/utils';
import { defaultOptions, defaultProps } from '../common/press-component';
import { ParentMixin } from '../mixins/relation';
import { PARENT_RADIO_GROUP as PARENT } from '../common/parent-map';


export default {
  options: {
    ...defaultOptions,
    styleIsolation: 'shared',
  },
  mixins: [
    ParentMixin(PARENT),
  ],
  field: true,
  // relation: useChildren('radio'),
  props: {
    value: {
      type: [String, Number],
      default: '',
      // observer: 'updateChildren',
    },
    direction: { type: String, default: '' },
    disabled: {
      type: Boolean,
      // observer: 'updateChildren',
    },
    ...defaultProps,
  },
  data() {
    return {
      utils,
    };
  },
  watch: {
    value: {
      handler() {
        this.updateChildren();
      },
    },
    disabled: {
      handler() {
        this.updateChildren();
      },
    },
  },
  created() {
    this.children = [];
  },
  methods: {
    updateChildren() {
      console.log('children', this.children);
      this.children.forEach(child => child.updateFromParent());
    },
  },
};

</script>
<style platform="mp-weixin" lang="scss">
@import "../common/index.scss";
.van-radio-group--horizontal {
  display: flex;
  flex-wrap: wrap;
}
</style>

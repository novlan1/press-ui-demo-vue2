<template>
  <uni-shadow-root class="vant-radio-group-index">
    <div :class="'' + utils.bem('radio-group', [direction])">
      <slot />
    </div>
  </uni-shadow-root>
</template>
<script>

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
  props: {
    value: {
      type: [String, Number],
      default: '',
    },
    direction: { type: String, default: '' },
    disabled: {
      type: Boolean,
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

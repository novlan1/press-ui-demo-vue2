<template>
  <uni-shadow-root class="vant-checkbox-group-index">
    <view :class="groupClass">
      <slot />
    </view>
  </uni-shadow-root>
</template>
<script>
import utils from '../wxs-js/utils';
import { ParentMixin } from '../mixins/relation';

const PARENT = 'checkboxGroup';

export default {
  mixins: [
    ParentMixin(PARENT),
  ],
  props: {
    max: { type: Number, default: 0 },
    value: {
      type: Array,
      default: () => [],
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    direction: {
      type: String,
      default: 'vertical',
    },
  },
  data() {
    return {};
  },
  computed: {
    groupClass() {
      const { direction } = this;
      return utils.bem('checkbox-group', [{ horizontal: direction === 'horizontal' }]);
    },
  },
  watch: {
    disabled: {
      handler() {
        this.updateChildren();
      },
    },
    value: {
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
      this.children.forEach(child => this.updateChild(child));
    },
    updateChild(child) {
      const { value, disabled, direction } = this;
      child.setData({
        dataValue: value.indexOf(child.name) !== -1,
        parentDisabled: disabled,
        direction,
      });
    },
  },
};
</script>
<style platform="mp-weixin">
@import "../common/index.scss";
.van-checkbox-group--horizontal {
  display: flex;
  flex-wrap: wrap;
}
</style>

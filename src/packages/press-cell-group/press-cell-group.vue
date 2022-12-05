<template>
  <uni-shadow-root class="vant-cell-group-index">
    <view
      v-if="title"
      :class="titleClass"
    >
      {{ title }}
    </view>
    <view :class="groupClass">
      <slot />
    </view>
  </uni-shadow-root>
</template>
<script>
import utils from '../wxs-js/utils';

export default {
  props: {
    title: { type: String, default: '' },
    border: {
      type: Boolean,
      default: true,
    },
    inset: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    titleClass() {
      const { inset } = this;
      return utils.bem('cell-group__title', { inset });
    },
    groupClass() {
      const { inset, border } = this;
      return `custom-class ${utils.bem('cell-group', { inset })} ${border ? 'van-hairline--top-bottom' : ''}`;
    },
  },
};
</script>
<style platform="mp-weixin">
@import "../common/index.scss";
.van-cell-group--inset {
  border-radius: var(--cell-group-inset-border-radius, 8px);
  margin: var(--cell-group-inset-padding, 0 16px);
  overflow: hidden;
}
.van-cell-group__title {
  color: var(--cell-group-title-color, #969799);
  font-size: var(--cell-group-title-font-size, 14px);
  line-height: var(--cell-group-title-line-height, 16px);
  padding: var(--cell-group-title-padding, 16px 16px 8px);
}
.van-cell-group__title--inset {
  padding: var(--cell-group-inset-title-padding, 16px 16px 8px 32px);
}
</style>

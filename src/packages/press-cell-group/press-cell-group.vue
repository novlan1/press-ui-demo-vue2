<template>
  <uni-shadow-root class="vant-cell-group-index">
    <div
      v-if="title"
      :class="titleClass"
    >
      {{ title }}
    </div>
    <div :class="groupClass">
      <slot />
    </div>
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
<style platform="mp-weixin" lang="scss">
@import "../common/index.scss";
@import "../common/style/var.scss";

.van-cell-group {
  &--inset {
    margin: var(--cell-group-inset-padding, $cell-group-inset-padding);
    border-radius: var(
      --cell-group-inset-border-radius,
      $cell-group-inset-border-radius
    );
    overflow: hidden;
  }

  &__title {
    padding: var(--cell-group-title-padding, $cell-group-title-padding);
    font-size: var(--cell-group-title-font-size, $cell-group-title-font-size);
    line-height: var(
      --cell-group-title-line-height,
      $cell-group-title-line-height
    );
    color: var(--cell-group-title-color, $cell-group-title-color);

    &--inset {
      padding: var(
        --cell-group-inset-title-padding,
        $cell-group-inset-title-padding
      );
    }
  }
}
</style>

<template>
  <uni-shadow-root class="vant-picker-toolbar">
    <div
      v-if="showToolbar"
      class="van-picker__toolbar toolbar-class"
    >
      <div
        class="van-picker__cancel"
        hover-class="van-picker__cancel--hover"
        hover-stay-time="70"
        data-type="cancel"
        @click="emit"
      >
        {{ cancelButtonText }}
      </div>
      <div
        v-if="title"
        class="van-picker__title van-ellipsis"
      >
        {{
          title
        }}
      </div>
      <div
        class="van-picker__confirm"
        hover-class="van-picker__confirm--hover"
        hover-stay-time="70"
        data-type="confirm"
        @click="emit"
      >
        {{ confirmButtonText }}
      </div>
    </div>
  </uni-shadow-root>
</template>

<script>
import { t } from '../locale';

export default {
  props: {
    title: { type: String, default: '' },
    showToolbar: Boolean,
    cancelButtonText: {
      type: String,
      default: t('picker.cancel'),
    },
    confirmButtonText: {
      type: String,
      default: t('picker.confirm'),
    },
  },
  methods: {
    emit(...args) {
      this.$emit('emit', ...args);
    },
  },
};
</script>

<style platform="mp-weixin" lang="scss">
@import "../common/index.scss";
@import "../common/style/var.scss";

.van-picker {
  &__toolbar {
    display: flex;
    justify-content: space-between;
    height: var(--picker-toolbar-height, $picker-toolbar-height);
    line-height: var(--picker-toolbar-height, $picker-toolbar-height);
  }

  &__cancel,
  &__confirm {
    padding: var(--picker-action-padding, $picker-action-padding);
    font-size: var(--picker-action-font-size, $picker-action-font-size);

    &--hover {
      opacity: $active-opacity;
    }
  }

  &__confirm {
    color: var(--picker-confirm-action-color, $picker-confirm-action-color);
  }

  &__cancel {
    color: var(--picker-cancel-action-color, $picker-cancel-action-color);
  }

  &__title {
    max-width: 50%;
    text-align: center;
    font-weight: var(--font-weight-bold, $font-weight-bold);
    font-size: var(--picker-option-font-size, $picker-option-font-size);
  }
}
</style>

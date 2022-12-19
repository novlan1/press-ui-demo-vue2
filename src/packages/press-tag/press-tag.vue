<template>
  <uni-shadow-root class="vant-tag-index">
    <div
      :class="tagClass"
      :style="tagStyle"
    >
      <slot />
      <van-icon
        v-if="closeable"
        name="cross"
        custom-class="van-tag__close"
        @click="onClose"
      />
    </div>
  </uni-shadow-root>
</template>
<script>
import VanIcon from '../press-icon-plus/press-icon-plus.vue';
import utils from '../wxs-js/utils';
import computed from './computed';
import { defaultProps, defaultOptions } from '../common/press-component';

export default {
  options: {
    ...defaultOptions,
  },
  components: {
    VanIcon,
  },
  props: {
    size: { type: String, default: '' },
    mark: Boolean,
    color: { type: String, default: '' },
    plain: Boolean,
    round: Boolean,
    textColor: { type: String, default: '' },
    type: {
      type: String,
      default: 'default',
    },
    closeable: Boolean,
    ...defaultProps,
  },
  computed: {
    tagClass() {
      const { type, size, mark, plain, round, customClass } = this;
      return `${customClass} ${utils.bem('tag', [type, size, { mark, plain, round }])}`;
    },
    tagStyle() {
      const { plain, color, textColor } = this;
      return computed.rootStyle({ plain, color, textColor });
    },
  },
  methods: {
    onClose() {
      this.$emit('close');
    },
  },
};
</script>
<style platform="mp-weixin" lang="scss">
@import "../common/index.scss";
@import "../common/style/var.scss";

.van-tag {
  position: relative;
  display: inline-flex;
  align-items: center;
  padding: var(--tag-padding, $tag-padding);
  color: var(--tag-text-color, $tag-text-color);
  font-size: var(--tag-font-size, $tag-font-size);
  line-height: var(--tag-line-height, $tag-line-height);
  border-radius: var(--tag-border-radius, $tag-border-radius);

  &--default {
    background-color: var(--tag-default-color, $tag-default-color);

    &.van-tag--plain {
      color: var(--tag-default-color, $tag-default-color);
    }
  }

  &--danger {
    background-color: var(--tag-danger-color, $tag-danger-color);

    &.van-tag--plain {
      color: var(--tag-danger-color, $tag-danger-color);
    }
  }

  &--primary {
    background-color: var(--tag-primary-color, $tag-primary-color);

    &.van-tag--plain {
      color: var(--tag-primary-color, $tag-primary-color);
    }
  }

  &--success {
    background-color: var(--tag-success-color, $tag-success-color);

    &.van-tag--plain {
      color: var(--tag-success-color, $tag-success-color);
    }
  }

  &--warning {
    background-color: var(--tag-warning-color, $tag-warning-color);

    &.van-tag--plain {
      color: var(--tag-warning-color, $tag-warning-color);
    }
  }

  &--plain {
    background-color: var(
      --tag-plain-background-color,
      $tag-plain-background-color
    );

    &::before {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      border: 1px solid currentColor;
      border-radius: inherit;
      content: "";
      pointer-events: none;
    }
  }

  &--medium {
    padding: var(--tag-medium-padding, $tag-medium-padding);
  }

  &--large {
    padding: var(--tag-large-padding, $tag-large-padding);
    font-size: var(--tag-large-font-size, $tag-large-font-size);
    border-radius: var(--tag-large-border-radius, $tag-large-border-radius);
  }

  &--mark {
    border-radius: 0
      var(
        --tag-round-border-radius,
        var(--tag-round-border-radius, $tag-round-border-radius)
      )
      var(
        --tag-round-border-radius,
        var(--tag-round-border-radius, $tag-round-border-radius)
      )
      0;

    &::after {
      display: block;
      width: 2px;
      content: "";
    }
  }

  &--round {
    border-radius: var(--tag-round-border-radius, $tag-round-border-radius);
  }

  &__close {
    min-width: 1em;
    margin-left: 2px;
  }
}
</style>

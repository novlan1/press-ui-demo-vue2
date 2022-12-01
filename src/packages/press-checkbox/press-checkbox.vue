<template>
  <view :class="checkboxClass">
    <view
      v-if="labelPosition === 'left'"
      :class="labelClass"
      @click="onClickLabel"
    >
      <slot />
    </view>
    <view
      class="van-checkbox__icon-wrap"
      @click="toggle"
    >
      <slot
        v-if="useIconSlot"
        name="icon"
      />
      <van-icon
        v-else
        name="success"
        size="0.8em"
        :class="cIconClass"
        :style="iconStyle"
        :custom-class="iconClass"
        custom-style="line-height: 1.25em;"
      />
    </view>
    <view
      v-if="labelPosition === 'right'"
      :class="cLabelClass"
      @click="onClickLabel"
    >
      <slot />
    </view>
  </view>
</template>

<script>
import utils from '../wxs-js/utils';
import VanIcon from '../press-icon-plus/press-icon-plus.vue';
import { defaultProps, defaultOptions } from '../common/press-component';
import computed from './index.js';

function emit(target, value) {
  target.$emit('input', value);
  target.$emit('change', value);
}

export default {
  options: {
    ...defaultOptions,
  },
  components: {
    VanIcon,
  },
  field: true,
  // relation: (0, relation_1.useParent)('checkbox-group'),
  classes: ['icon-class', 'label-class'],
  props: {
    value: Boolean,
    disabled: Boolean,
    useIconSlot: Boolean,
    checkedColor: {
      type: String,
      default: '',
    },
    labelPosition: {
      type: String,
      default: 'right',
    },
    labelDisabled: Boolean,
    shape: {
      type: String,
      default: 'round',
    },
    iconSize: {
      type: [Number],
      default: 20,
    },
    iconClass: {
      type: String,
      default: '',
    },
    labelClass: {
      type: String,
      default: '',
    },
    ...defaultProps,
  },
  data() {
    return {
      parentDisabled: false,
      direction: 'vertical',
    };
  },
  computed: {
    cLabelClass() {
      const { labelClass, labelPosition, disabled, parentDisabled } = this;
      return `${labelClass} ${utils.bem('checkbox__label', [labelPosition, { disabled: disabled || parentDisabled }])}`;
    },
    checkboxClass() {
      const { direction, customClass } = this;
      return `${utils.bem('checkbox', [{ horizontal: direction === 'horizontal' }])} ${customClass}`;
    },
    iconStyle() {
      const { checkedColor, value, disabled, parentDisabled, iconSize } = this;
      return computed.iconStyle(checkedColor, value, disabled, parentDisabled, iconSize);
    },
    cIconClass() {
      const { shape, disabled, parentDisabled, value } = this;
      return `${utils.bem('checkbox__icon', [shape, { disabled: disabled || parentDisabled, checked: value }])}`;
    },
  },
  methods: {
    emitChange(value) {
      if (this.parent) {
        this.setParentValue(this.parent, value);
      } else {
        emit(this, value);
      }
    },
    toggle() {
      const { parentDisabled, disabled, value } = this;
      if (!disabled && !parentDisabled) {
        this.emitChange(!value);
      }
    },
    onClickLabel() {
      const { labelDisabled, parentDisabled, disabled, value } = this;
      if (!disabled && !labelDisabled && !parentDisabled) {
        this.emitChange(!value);
      }
    },
    setParentValue(parent, value) {
      const parentValue = parent.value.slice();
      const { name } = this;
      const { max } = parent;
      if (value) {
        if (max && parentValue.length >= max) {
          return;
        }
        if (parentValue.indexOf(name) === -1) {
          parentValue.push(name);
          emit(parent, parentValue);
        }
      } else {
        const index = parentValue.indexOf(name);
        if (index !== -1) {
          parentValue.splice(index, 1);
          emit(parent, parentValue);
        }
      }
    },
  },
};
</script>
<style platform="mp-weixin" lang="scss">
@import "../common/index.scss";
@import "../common/style/var.scss";

.van-checkbox {
  display: flex;
  align-items: center;
  overflow: hidden;
  user-select: none;

  &--horizontal {
    margin-right: $padding-sm;
  }

  &__icon-wrap,
  &__label {
    line-height: var(--checkbox-size, $checkbox-size);
  }

  &__icon-wrap {
    flex: none;
  }

  &__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    width: 1em;
    height: 1em;
    color: transparent;
    text-align: center;
    transition-property: color, border-color, background-color;
    font-size: var(--checkbox-size, $checkbox-size);
    border: 1px solid var(--checkbox-border-color, $checkbox-border-color);
    transition-duration: var(
      --checkbox-transition-duration,
      $checkbox-transition-duration
    );

    &--round {
      border-radius: 100%;
    }

    &--checked {
      color: $white;
      background-color: var(
        --checkbox-checked-icon-color,
        $checkbox-checked-icon-color
      );
      border-color: var(
        --checkbox-checked-icon-color,
        $checkbox-checked-icon-color
      );
    }

    &--disabled {
      background-color: var(
        --checkbox-disabled-background-color,
        $checkbox-disabled-background-color
      );
      border-color: var(
        --checkbox-disabled-icon-color,
        $checkbox-disabled-icon-color
      );

      &.van-checkbox__icon--checked {
        color: var(
          --checkbox-disabled-icon-color,
          $checkbox-disabled-icon-color
        );
      }
    }
  }

  &__label {
    word-wrap: break-word;
    padding-left: var(--checkbox-label-margin, $checkbox-label-margin);
    color: var(--checkbox-label-color, $checkbox-label-color);

    &--left {
      float: left;
      margin: 0 var(--checkbox-label-margin, $checkbox-label-margin) 0 0;
    }

    &--disabled {
      color: var(
        --checkbox-disabled-label-color,
        $checkbox-disabled-label-color
      );
    }

    &:empty {
      margin: 0;
    }
  }
}
</style>

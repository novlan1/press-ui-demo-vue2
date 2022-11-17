<template>
  <uni-shadow-root class="vant-checkbox-index">
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
          :class="iconClass"
          :style="iconStyle"
          custom-class="icon-class"
          custom-style="line-height: 1.25em;"
        />
      </view>
      <view
        v-if="labelPosition === 'right'"
        :class="labelClass"
        @click="onClickLabel"
      >
        <slot />
      </view>
    </view>
  </uni-shadow-root>
</template>

<script>
// import VanIcon from '../icon/index.vue';
// global.__wxVueOptions = { components: { 'van-icon': VanIcon } };

// global.__wxRoute = 'vant/checkbox/index';
// 'use strict';
// Object.defineProperty(exports, '__esModule', { value: true });
// const relation_1 = require('../common/relation');
// const component_1 = require('../common/component');

import utils from '../wxs-js/utils';
import VanIcon from '../press-icon-plus/press-icon-plus.vue';
import computed from './index.js';

function emit(target, value) {
  target.$emit('input', value);
  target.$emit('change', value);
}
export default {
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
  },
  data() {
    return {
      parentDisabled: false,
      direction: 'vertical',
    };
  },
  computed: {
    labelClass() {
      const { labelPosition, disabled, parentDisabled } = this;
      return `label-class ${utils.bem('checkbox__label', [labelPosition, { disabled: disabled || parentDisabled }])}`;
    },
    checkboxClass() {
      const { direction } = this;
      return `${utils.bem('checkbox', [{ horizontal: direction === 'horizontal' }])} custom-class`;
    },
    iconStyle() {
      const { checkedColor, value, disabled, parentDisabled, iconSize } = this;
      return computed.iconStyle(checkedColor, value, disabled, parentDisabled, iconSize);
    },
    iconClass() {
      const { shape, disabled, parentDisabled, value } = this;
      return utils.bem('checkbox__icon', [shape, { disabled: disabled || parentDisabled, checked: value }]);
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
<style platform="mp-weixin">
@import "../common/index.scss";
.van-checkbox {
  align-items: center;
  display: flex;
  overflow: hidden;
  -webkit-user-select: none;
  user-select: none;
}
.van-checkbox--horizontal {
  margin-right: 12px;
}
.van-checkbox__icon-wrap,
.van-checkbox__label {
  line-height: var(--checkbox-size, 20px);
}
.van-checkbox__icon-wrap {
  flex: none;
}
.van-checkbox__icon {
  align-items: center;
  border: 1px solid var(--checkbox-border-color, #c8c9cc);
  box-sizing: border-box;
  color: transparent;
  display: flex;
  font-size: var(--checkbox-size, 20px);
  height: 1em;
  justify-content: center;
  text-align: center;
  transition-duration: var(--checkbox-transition-duration, 0.2s);
  transition-property: color, border-color, background-color;
  width: 1em;
}
.van-checkbox__icon--round {
  border-radius: 100%;
}
.van-checkbox__icon--checked {
  background-color: var(--checkbox-checked-icon-color, #1989fa);
  border-color: var(--checkbox-checked-icon-color, #1989fa);
  color: #fff;
}
.van-checkbox__icon--disabled {
  background-color: var(--checkbox-disabled-background-color, #ebedf0);
  border-color: var(--checkbox-disabled-icon-color, #c8c9cc);
}
.van-checkbox__icon--disabled.van-checkbox__icon--checked {
  color: var(--checkbox-disabled-icon-color, #c8c9cc);
}
.van-checkbox__label {
  word-wrap: break-word;
  color: var(--checkbox-label-color, #323233);
  padding-left: var(--checkbox-label-margin, 10px);
}
.van-checkbox__label--left {
  float: left;
  margin: 0 var(--checkbox-label-margin, 10px) 0 0;
}
.van-checkbox__label--disabled {
  color: var(--checkbox-disabled-label-color, #c8c9cc);
}
.van-checkbox__label:empty {
  margin: 0;
}
</style>

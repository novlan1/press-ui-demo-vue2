<template>
  <uni-shadow-root class="vant-radio-index">
    <view :class="'' + (utils.bem('radio', [direction]))+' custom-class'">
      <view
        v-if="labelPosition === 'left'"
        :class="radioLabelClass"
        @click="onClickLabel"
      >
        <slot />
      </view>
      <view
        class="van-radio__icon-wrap"
        :style="'font-size: '+(utils.addUnit(iconSize))"
        @click="onChange"
      >
        <slot
          v-if="useIconSlot"
          name="icon"
        />
        <!-- :style="'' + computed.iconStyle({ iconSize, checkedColor, disabled, parentDisabled, value, name })" -->
        <van-icon
          v-else
          name="success"
          :class="radioIconClass"
          custom-class="icon-class"
          :custom-style="'' +
            computed.iconCustomStyle({ iconSize, checkedColor, disabled, parentDisabled, value: dataValue, name })"
        />
      </view>
      <view
        v-if="labelPosition === 'right'"
        :class="'label-class '+(utils.bem('radio__label', [labelPosition, { disabled: disabled || parentDisabled }]))"
        @click="onClickLabel"
      >
        <slot />
      </view>
    </view>
  </uni-shadow-root>
</template>
<script>
import VanIcon from '../press-icon-plus/press-icon-plus.vue';
import { canIUseModel } from '../common/version';
// import { useParent } from '../common/relation';
import utils from '../wxs-js/utils';
import computed from './computed';
import { defaultOptions, defaultProps } from '../common/press-component';
import { ChildrenMixin } from '../mixins/relation';

const PARENT = 'radioGroup';


export default {
  options: {
    ...defaultOptions,
    styleIsolation: 'shared',
  },
  components: {
    VanIcon,
  },
  mixins: [
    ChildrenMixin(PARENT),
  ],
  field: true,
  // relation: useParent('radio-group', function () {
  //   this.updateFromParent();
  // }),
  classes: ['icon-class', 'label-class'],
  props: {
    name: { type: [String, Number], default: '' },
    value: { type: [String, Number], default: '' },
    disabled: Boolean,
    useIconSlot: Boolean,
    checkedColor: { type: String, default: '' },
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
      type: null,
      default: 20,
    },
    ...defaultProps,
  },
  data() {
    return {
      direction: '',
      parentDisabled: false,
      dataValue: this.value,

      utils,
      computed,
    };
  },
  computed: {
    radioIconClass() {
      const {
        shape,
        disabled,
        parentDisabled,
        dataValue: value,
        name,
      } = this;
      return `${utils.bem('radio__icon', [shape, { disabled: disabled || parentDisabled, checked: value === name }])}`;
    },
    radioLabelClass() {
      const {
        labelPosition,
        disabled,
        parentDisabled,
      } = this;
      return `${utils.bem('radio__label', [labelPosition, { disabled: disabled || parentDisabled }])} label-class`;
    },
  },
  mounted() {
    this.updateFromParent();
  },
  methods: {
    updateFromParent() {
      if (!this[PARENT]) {
        return;
      }
      const { value, disabled: parentDisabled, direction } = this[PARENT];
      // this.value = value;
      this.dataValue = value;
      this.direction = direction;
      this.parentDisabled = parentDisabled;
    },
    emitChange(value) {
      const instance = this[PARENT] || this;
      instance.$emit('input', value);
      instance.$emit('change', value);
      if (canIUseModel()) {
        instance.value = value;
        // instance.setData({ value });
      }
    },
    onChange() {
      if (!this.disabled && !this.parentDisabled) {
        this.emitChange(this.name);
      }
    },
    onClickLabel() {
      const { disabled, parentDisabled, labelDisabled, name } = this;
      if (!(disabled || parentDisabled) && !labelDisabled) {
        this.emitChange(name);
      }
    },
  },
};

</script>
<style platform="mp-weixin" lang="scss">
@import "../common/index.scss";
.van-radio {
  align-items: center;
  display: flex;
  overflow: hidden;
  -webkit-user-select: none;
  user-select: none;
}
.van-radio__icon-wrap {
  flex: none;
}
.van-radio--horizontal {
  margin-right: var(--padding-sm, 12px);
}
.van-radio__icon {
  align-items: center;
  border: 1px solid var(--radio-border-color, #c8c9cc);
  box-sizing: border-box;
  color: transparent;
  display: flex;
  font-size: var(--radio-size, 20px);
  height: 1em;
  justify-content: center;
  text-align: center;
  transition-duration: var(--radio-transition-duration, 0.2s);
  transition-property: color, border-color, background-color;
  width: 1em;
}
.van-radio__icon--round {
  border-radius: 100%;
  .van-icon {
    // 【修改点】
    border-radius: 100%;
  }
}
.van-radio__icon--checked {
  background-color: var(--radio-checked-icon-color, #1989fa);
  border-color: var(--radio-checked-icon-color, #1989fa);
  color: #fff;
}
.van-radio__icon--disabled {
  background-color: var(--radio-disabled-background-color, #ebedf0);
  border-color: var(--radio-disabled-icon-color, #c8c9cc);
}
.van-radio__icon--disabled.van-radio__icon--checked {
  color: var(--radio-disabled-icon-color, #c8c9cc);
}
.van-radio__label {
  word-wrap: break-word;
  color: var(--radio-label-color, #323233);
  line-height: var(--radio-size, 20px);
  padding-left: var(--radio-label-margin, 10px);
}
.van-radio__label--left {
  float: left;
  margin: 0 var(--radio-label-margin, 10px) 0 0;
}
.van-radio__label--disabled {
  color: var(--radio-disabled-label-color, #c8c9cc);
}
.van-radio__label:empty {
  margin: 0;
}
</style>

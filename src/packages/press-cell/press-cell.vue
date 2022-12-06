<template>
  <uni-shadow-root class="vant-cell-index">
    <view
      :class="cellClass"
      hover-class="van-cell--hover hover-class"
      hover-stay-time="70"
      :style="customStyle"
      @click="onClick"
    >
      <van-icon
        v-if="icon"
        :name="icon"
        class="van-cell__left-icon-wrap"
        custom-class="van-cell__left-icon"
      />
      <slot
        v-else
        name="icon"
      />

      <view
        :style="cTitleStyle"
        class="van-cell__title"
        :class="titleClass"
      >
        <template v-if="title">
          {{ title }}
        </template>
        <slot
          v-else
          name="title"
        />

        <view
          v-if="label || useLabelSlot"
          class="van-cell__label"
          :class="labelClass"
        >
          <slot
            v-if="useLabelSlot"
            name="label"
          />
          <template v-else-if="label">
            {{ label }}
          </template>
        </view>
      </view>

      <view
        class="van-cell__value"
        :class="valueClass"
      >
        <template v-if="value || value === 0">
          {{ value }}
        </template>
        <slot v-else />
      </view>

      <van-icon
        v-if="isLink"
        :name="arrowDirection ? 'arrow' + '-' + arrowDirection : 'arrow'"
        class="van-cell__right-icon-wrap"
        :class="rightIconClass"
        custom-class="van-cell__right-icon"
      />
      <slot
        v-else
        name="right-icon"
      />

      <slot name="extra" />
    </view>
  </uni-shadow-root>
</template>
<script>

import VanIcon from '../press-icon-plus/press-icon-plus.vue';
import { link } from '../mixins/link';
import utils from '../wxs-js/utils';
import computed from './computed';
import { defaultProps, defaultOptions } from '../common/press-component';

export default {
  components: {
    VanIcon,
  },
  options: {
    ...defaultOptions,
  },
  // classes: [
  //   'title-class',
  //   'label-class',
  //   'value-class',
  //   'right-icon-class',
  //   'hover-class',
  // ],
  mixins: [link],
  props: {
    titleClass: { type: String, default: '' },
    labelClass: { type: String, default: '' },
    valueClass: { type: String, default: '' },
    rightIconClass: { type: String, default: '' },
    hoverClass: { type: String, default: '' },

    title: { type: String, default: '' },
    value: { type: String, default: '' },
    icon: { type: String, default: '' },
    size: { type: String, default: '' },
    label: { type: String, default: '' },
    center: Boolean,
    isLink: Boolean,
    required: Boolean,
    clickable: Boolean,
    titleWidth: { type: String, default: '' },
    customStyle: { type: String, default: '' },
    arrowDirection: { type: String, default: '' },
    useLabelSlot: Boolean,
    border: {
      type: Boolean,
      default: true,
    },
    titleStyle: { type: String, default: '' },
    ...defaultProps,
  },
  computed: {
    cellClass() {
      const {
        size,
        center,
        required,
        border,
        isLink,
        clickable,
        customClass,
      } = this;
      return `${customClass} ${utils.bem('cell', [size, { center, required, borderless: !border, clickable: isLink || clickable }])}`;
    },
    cTitleStyle() {
      const {  titleWidth, titleStyle } = this;
      return computed.titleStyle({ titleWidth, titleStyle });
    },
  },
  methods: {
    onClick(event) {
      this.$emit('click', event.detail);
      this.jumpLink();
    },
  },
};

</script>
<style platform="mp-weixin">
@import "../common/index.scss";
.van-cell {
  background-color: var(--cell-background-color, #fff);
  box-sizing: border-box;
  color: var(--cell-text-color, #323233);
  display: flex;
  font-size: var(--cell-font-size, 14px);
  line-height: var(--cell-line-height, 24px);
  padding: var(--cell-vertical-padding, 10px)
    var(--cell-horizontal-padding, 16px);
  position: relative;
  width: 100%;
}
.van-cell:after {
  border-bottom: 1px solid #ebedf0;
  bottom: 0;
  box-sizing: border-box;
  content: " ";
  left: 16px;
  pointer-events: none;
  position: absolute;
  right: 16px;
  transform: scaleY(0.5);
  transform-origin: center;
}
.van-cell--borderless:after {
  display: none;
}
.van-cell-group {
  background-color: var(--cell-background-color, #fff);
}
.van-cell__label {
  color: var(--cell-label-color, #969799);
  font-size: var(--cell-label-font-size, 12px);
  line-height: var(--cell-label-line-height, 18px);
  margin-top: var(--cell-label-margin-top, 3px);
}
.van-cell__value {
  color: var(--cell-value-color, #969799);
  overflow: hidden;
  text-align: right;
  vertical-align: middle;
}
.van-cell__title,
.van-cell__value {
  flex: 1;
}
.van-cell__title:empty,
.van-cell__value:empty {
  display: none;
}
.van-cell__left-icon-wrap,
.van-cell__right-icon-wrap {
  align-items: center;
  display: flex;
  font-size: var(--cell-icon-size, 16px);
  height: var(--cell-line-height, 24px);
}
.van-cell__left-icon-wrap {
  margin-right: var(--padding-base, 4px);
}
.van-cell__right-icon-wrap {
  color: var(--cell-right-icon-color, #969799);
  margin-left: var(--padding-base, 4px);
}
.van-cell__left-icon {
  vertical-align: middle;
}
.van-cell__left-icon,
.van-cell__right-icon {
  line-height: var(--cell-line-height, 24px);
}
.van-cell--clickable.van-cell--hover {
  background-color: var(--cell-active-color, #f2f3f5);
}
.van-cell--required {
  overflow: visible;
}
.van-cell--required:before {
  color: var(--cell-required-color, #ee0a24);
  content: "*";
  font-size: var(--cell-font-size, 14px);
  left: var(--padding-xs, 8px);
  position: absolute;
}
.van-cell--center {
  align-items: center;
}
.van-cell--large {
  padding-bottom: var(--cell-large-vertical-padding, 12px);
  padding-top: var(--cell-large-vertical-padding, 12px);
}
.van-cell--large .van-cell__title {
  font-size: var(--cell-large-title-font-size, 16px);
}
.van-cell--large .van-cell__value {
  font-size: var(--cell-large-value-font-size, 16px);
}
.van-cell--large .van-cell__label {
  font-size: var(--cell-large-label-font-size, 14px);
}
</style>

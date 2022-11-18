<template>
  <uni-shadow-root class="vant-picker-column-index">
    <view
      class="van-picker-column custom-class"
      :style="columnStyle"
      @touchstart="onTouchStart"
      @touchmove.stop.prevent="onTouchMove"
      @touchend="onTouchEnd"
      @touchcancel="onTouchEnd"
    >
      <view :style="wrapperStyle">
        <view
          v-for="(option,index) in (options)"
          :key="option.index"
          :data-index="index"
          :style="{height: `${itemHeight}px`, lineHeight: `${itemHeight}px`}"
          :class="[
            'van-ellipsis',
            'van-picker-column__item',
            {
              'van-picker-column__item--disabled':option && option.disabled,
              'van-picker-column__item--selected':index === currentIndex,
              activeClass: index === currentIndex
            }
          ]"
          @click="onClickItem"
        >
          {{ computed.optionText(option, valueKey) }}
        </view>
      </view>
    </view>
  </uni-shadow-root>
</template>
<script>
import computed from './index.js';
import Vue from 'vue';
import { range } from '../common/utils';
import { isObj } from '../common/validator';

const DEFAULT_DURATION = 200;
const PARENT = 'pressPicker';

export default {
  inject: {
    [PARENT]: {
      default: null,
    },
  },
  props: {
    activeClass: { type: String, default: '' },
    valueKey: { type: String, default: '' },
    className: { type: String, default: '' },
    itemHeight: { type: Number, default: 44 },
    visibleItemCount: { type: Number, default: 6 },
    initialOptions: {
      type: Array,
      default: () => ([]),
    },
    defaultIndex: {
      type: Number,
      default: 0,
      // observer(value) {
      //   this.setIndex(value);
      // },
    },
  },
  data() {
    return {
      startY: 0,
      offset: 0,
      duration: 0,
      startOffset: 0,
      options: [],
      currentIndex: 0,

      computed,
    };
  },
  computed: {
    columnStyle() {
      const { itemHeight, visibleItemCount } = this;
      return computed.rootStyle({ itemHeight, visibleItemCount });
    },
    wrapperStyle() {
      const { offset, itemHeight, visibleItemCount, duration } = this;
      return computed.wrapperStyle({ offset, itemHeight, visibleItemCount, duration });
    },
  },
  watch: {
    defaultIndex: {
      handler(value) {
        this.setIndex(value);
      },
      immediate: true,
    },
    initialOptions: {
      handler(val) {
        this.options = val;
        this.setIndex(this.defaultIndex);
      },
      deep: true,
    },
  },
  created() {
    const { defaultIndex, initialOptions } = this;
    this.set({
      currentIndex: defaultIndex,
      options: initialOptions,
    }).then(() => {
      this.setIndex(defaultIndex);
    });
    this[PARENT].children.push(this);
  },
  methods: {
    setData(data) {
      Object.keys(data).forEach((key) => {
        this[key] = data[key];
      });
    },
    set(data) {
      this.setData(data);
      // this.data = data;
      this.$forceUpdate();
      // eslint-disable-next-line vue/valid-next-tick
      return new Promise(resolve => Vue.nextTick(resolve));
    },
    getCount() {
      return this.options.length;
    },
    onTouchStart(event) {
      this.setData({
        startY: event.touches[0].clientY,
        startOffset: this.offset,
        duration: 0,
      });
    },
    onTouchMove(event) {
      if (!event.touches[0]) return;
      const deltaY = event.touches[0].clientY - this.startY;
      this.setData({
        offset: range(this.startOffset + deltaY, -(this.getCount() * this.itemHeight), this.itemHeight),
      });
    },
    onTouchEnd() {
      if (this.offset !== this.startOffset) {
        this.setData({ duration: DEFAULT_DURATION });
        const index = range(Math.round(-this.offset / this.itemHeight), 0, this.getCount() - 1);
        this.setIndex(index, true);
      }
    },
    onClickItem(event) {
      const { index } = event.currentTarget.dataset;
      this.setIndex(index, true);
    },
    adjustIndex(index) {
      const count = this.getCount();
      index = range(index, 0, count);
      for (let i = index; i < count; i++) {
        if (!this.isDisabled(this.options[i])) return i;
      }
      for (let i = index - 1; i >= 0; i--) {
        if (!this.isDisabled(this.options[i])) return i;
      }
    },
    isDisabled(option) {
      return isObj(option) && option.disabled;
    },
    getOptionText(option) {
      return isObj(option) && this.valueKey in option
        ? option[this.valueKey]
        : option;
    },
    setIndex(index, userAction) {
      index = this.adjustIndex(index) || 0;
      const offset = -index * this.itemHeight;
      if (index !== this.currentIndex) {
        return this.set({ offset, currentIndex: index }).then(() => {
          userAction && this.$emit('change', index);
        });
      }
      return this.set({ offset });
    },
    setValue(value) {
      const { options } = this;
      for (let i = 0; i < options.length; i++) {
        if (this.getOptionText(options[i]) === value) {
          return this.setIndex(i);
        }
      }
      return Promise.resolve();
    },
    getValue() {
      return this.options[this.currentIndex];
    },
  },
};
// });
// export default global.__wxComponents['vant/picker-column/index'];
</script>
<style platform="mp-weixin">
@import "../common/index.scss";
.van-picker-column {
  color: var(--picker-option-text-color, #000);
  font-size: var(--picker-option-font-size, 16px);
  overflow: hidden;
  text-align: center;
}
.van-picker-column__item {
  padding: 0 5px;
}
.van-picker-column__item--selected {
  color: var(--picker-option-selected-text-color, #323233);
  font-weight: var(--font-weight-bold, 500);
}
.van-picker-column__item--disabled {
  opacity: var(--picker-option-disabled-opacity, 0.3);
}
</style>

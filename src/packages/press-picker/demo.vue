<template>
  <view>
    <view>
      <button @click.stop="onShowPicker('normal')">
        普通使用
      </button>
      <button @click.stop="onShowPicker('tip')">
        顶部提示
      </button>
    </view>
    <press-picker
      v-if="pickerOption.normal.show"
      :title="pickerOption.normal.title"
      :show-back-arrow="pickerOption.normal.showBackArrow"
      :select-list="pickerOption.normal.selectList"
      :tip="pickerOption.normal.tip"
      :select-item="pickerOption.normal.selectItem"
      @onClickConfirm="pickerOption.normal.onClickConfirm"
      @onRemove="pickerOption.normal.onRemove"
    />
    <press-picker
      v-if="pickerOption.tip.show"
      :title="pickerOption.tip.title"
      :show-back-arrow="pickerOption.tip.showBackArrow"
      :select-list="pickerOption.tip.selectList"
      :tip="pickerOption.tip.tip"
      :select-item="pickerOption.tip.selectItem"
      @onClickConfirm="pickerOption.tip.onClickConfirm"
      @onRemove="pickerOption.tip.onRemove"
    />
  </view>
</template>
<script>
const pickerBoList = [
  { label: '一局胜负', value: 1 },
  { label: '三局两胜', value: 3 },
  { label: '五局三胜', value: 5 },
  { label: '七局四胜', value: 7 },
];
const boStrList = [
  '',
  '一局胜负',
  '',
  '三局两胜',
  '',
  '五局三胜',
  '',
  '七局四胜',
];

const bpList = [
  { label: '不禁用英雄', value: 1 },
  { label: '各禁2英雄', value: 3 },
  { label: '各禁3英雄', value: 4 },
  { label: '各禁4英雄', value: 0 },
];

export default {
  data() {
    return {
      show: false,
      pickerOption: {
        normal: {
          show: false,
          title: '决胜方式',
          tip: '',
          showBackArrow: false,
          selectList: pickerBoList,
          selectItem: { label: boStrList[1], value: 1 },
          onClickConfirm: (boItem) => {
            console.log('boItem', boItem);
            this.pickerOption.normal.show = false;
          },
          onRemove: () => {
            this.pickerOption.normal.show = false;
          },
        },
        tip: {
          show: false,
          title: 'Ban位设置',
          tip: '创建比赛后，可按比赛轮次精确设置。',
          showBackArrow: false,
          selectList: bpList,
          selectItem: { label: bpList[0].label, value: 1 },
          onClickConfirm: (boItem) => {
            console.log('boItem', boItem);
            this.pickerOption.tip.show = false;
          },
          onRemove: () => {
            this.pickerOption.tip.show = false;
          },
        },
      },
      selectBoOptions: {

      },
    };
  },
  methods: {
    onShowPicker(type) {
      console.log('onShowPicker.type', type);
      if (this.pickerOption[type]) {
        this.pickerOption[type].show = true;
      }
    },
    onConfirm(...args) {
      console.log('onConfirm.args', args);
      this.pickerOption[args[1]].show = false;
    },
    onChange(...args) {
      console.log('onChange.args', args);
    },
  },
};
</script>

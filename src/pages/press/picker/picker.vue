<template>
  <view>
    <view>
      <button @click.stop="onShowPicker('normal')">
        普通使用
      </button>
      <button @click.stop="onShowPicker('tip')">
        顶部提示
      </button>
      <!-- <button @click.stop="onShowPicker('multiColumn')">
        多列
      </button>
      <button @click.stop="onShowPicker('children')">
        级联选择
      </button>
      <button @click.stop="onShowPicker('async')">
        异步确认
      </button> -->
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

    <!-- <press-picker
      :show="pickerOption.normal.show"
      :columns="pickerOption.normal.columns"
      @confirm="(args)=>onConfirm(args, 'normal')"
      @change="(args)=>onChange(args, 'normal')"
    />
    <press-picker
      :show="pickerOption.default.show"
      :columns="pickerOption.default.columns"
      :default-index="pickerOption.default.defaultIndex"
      @confirm="(args)=>onConfirm(args, 'default')"
      @change="(args)=>onChange(args, 'default')"
    />
    <press-picker
      :show="pickerOption.multiColumn.show"
      :columns="pickerOption.multiColumn.columns"
      @confirm="(args)=>onConfirm(args, 'multiColumn')"
      @change="(args)=>onChange(args, 'multiColumn')"
    />
    <press-picker
      :show="pickerOption.children.show"
      :columns="pickerOption.children.columns"
      @confirm="(args)=>onConfirm(args, 'children')"
      @change="(args)=>onChange(args, 'children')"
    />
    <press-picker
      :show="pickerOption.async.show"
      :columns="pickerOption.async.columns"
      @confirm="(args)=>onConfirm(args, 'async')"
      @change="(args)=>onChange(args, 'async')"
    /> -->
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
      // pickerOption: {
      //   normal: {
      //     show: false,
      //     columns: ['中国', '美国', '日本'],
      //   },
      //   async: {
      //     show: false,
      //     columns: ['中国', '美国', '日本'],
      //   },
      //   default: {
      //     show: false,
      //     columns: ['中国', '美国', '日本'],
      //     defaultIndex: [2],
      //   },
      //   multiColumn: {
      //     show: false,
      //     columns: [
      //       // 第一列
      //       {
      //         values: ['周一', '周二', '周三', '周四', '周五'],
      //         defaultIndex: 2,
      //       },
      //       // 第二列
      //       {
      //         values: ['上午', '下午', '晚上'],
      //         defaultIndex: 1,
      //       },
      //     ],
      //   },
      //   children: {
      //     show: false,
      //     columns: [
      //       {
      //         text: '浙江',
      //         children: [
      //           {
      //             text: '杭州',
      //             children: [{ text: '西湖区' }, { text: '余杭区' }],
      //           },
      //           {
      //             text: '温州',
      //             children: [{ text: '鹿城区' }, { text: '瓯海区' }],
      //           },
      //         ],
      //       },
      //       {
      //         text: '福建',
      //         children: [
      //           {
      //             text: '福州',
      //             children: [{ text: '鼓楼区' }, { text: '台江区' }],
      //           },
      //           {
      //             text: '厦门',
      //             children: [{ text: '思明区' }, { text: '海沧区' }],
      //           },
      //         ],
      //       },
      //     ],
      //   },
      // },
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

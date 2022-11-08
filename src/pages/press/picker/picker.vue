<template>
  <view>
    <view>
      <button @click.stop="onShowPicker('normal')">
        普通使用
      </button>
      <button @click.stop="onShowPicker('default')">
        设置默认项
      </button>
      <button @click.stop="onShowPicker('multiColumn')">
        多列
      </button>
      <button @click.stop="onShowPicker('children')">
        级联选择
      </button>
      <button @click.stop="onShowPicker('async')">
        异步确认
      </button>
    </view>
    <press-picker
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
    />
  </view>
</template>
<script>
export default {
  data() {
    return {
      pickerOption: {
        normal: {
          show: false,
          columns: ['中国', '美国', '日本'],
        },
        async: {
          show: false,
          columns: ['中国', '美国', '日本'],
        },
        default: {
          show: false,
          columns: ['中国', '美国', '日本'],
          defaultIndex: [2],
        },
        multiColumn: {
          show: false,
          columns: [
            // 第一列
            {
              values: ['周一', '周二', '周三', '周四', '周五'],
              defaultIndex: 2,
            },
            // 第二列
            {
              values: ['上午', '下午', '晚上'],
              defaultIndex: 1,
            },
          ],
        },
        children: {
          show: false,
          columns: [
            {
              text: '浙江',
              children: [
                {
                  text: '杭州',
                  children: [{ text: '西湖区' }, { text: '余杭区' }],
                },
                {
                  text: '温州',
                  children: [{ text: '鹿城区' }, { text: '瓯海区' }],
                },
              ],
            },
            {
              text: '福建',
              children: [
                {
                  text: '福州',
                  children: [{ text: '鼓楼区' }, { text: '台江区' }],
                },
                {
                  text: '厦门',
                  children: [{ text: '思明区' }, { text: '海沧区' }],
                },
              ],
            },
          ],
        },
      },
      show: false,
    };
  },
  methods: {
    onShowPicker(type) {
      console.log('onShowPicker.type', type);
      this.pickerOption[type].show = true;
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

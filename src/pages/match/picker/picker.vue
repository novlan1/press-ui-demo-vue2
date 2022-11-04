<template>
  <view>
    <view>
      <button @click.stop="onShowPicker('normal')">
        普通使用
      </button>
      <button @click.stop="onShowPicker('default')">
        设置默认项
      </button>
    </view>
    <match-picker
      :show="pickerOption.normal.show"
      :columns="pickerOption.normal.columns"
      @confirm="(args)=>onConfirm(args, 'normal')"
    />
    <match-picker
      :show="pickerOption.default.show"
      :columns="pickerOption.default.columns"
      :default-index="pickerOption.default.defaultIndex"
      @confirm="(args)=>onConfirm(args, 'default')"
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
          columns: [
            ['中国', '美国', '日本'],
          ],
        },
        default: {
          show: false,
          columns: [
            ['中国', '美国', '日本'],
          ],
          defaultIndex: [2],
        },
      },
      show: false,
    };
  },
  methods: {
    onShowPicker(type) {
      console.log('type', type);
      this.pickerOption[type].show = true;
    },
    onConfirm(...args) {
      console.log('args', args);
      this.pickerOption[args[1]].show = false;
    },
  },
};
</script>

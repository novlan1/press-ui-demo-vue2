<template>
  <div class="wrap">
    <demo-block title="基础用法">
      <press-picker-plus
        :columns="columns"
        @change="onChange"
      />
    </demo-block>

    <demo-block title="默认选中项">
      <press-picker-plus
        :columns="columns"
        :default-index="2"
        @change="onChange"
      />
    </demo-block>

    <demo-block title="展示顶部栏">
      <press-picker-plus
        show-toolbar
        title="标题"
        :columns="columns"
        @cancel="onCancel"
        @confirm="onConfirm"
      />
    </demo-block>

    <demo-block title="多列联动">
      <press-picker-plus
        ref="picker"
        :columns="cColumns"
        @change="onChangePicker"
      />
    </demo-block>

    <demo-block title="禁用选项">
      <press-picker-plus
        :columns="dColumns"
        @change="onChange"
      />
    </demo-block>

    <demo-block title="加载状态">
      <press-picker-plus
        :columns="dColumns"
        loading
        @change="onChange"
      />
    </demo-block>
  </div>
</template>
<script>

const citys = {
  浙江: ['杭州', '宁波', '温州', '嘉兴', '湖州'],
  福建: ['福州', '厦门', '莆田', '三明', '泉州'],
};

export default {
  data() {
    return {
      columns: ['杭州', '宁波', '温州', '嘉兴', '湖州'],
      cColumns: [
        {
          values: Object.keys(citys),
          className: 'column1',
        },
        {
          values: citys['浙江'],
          className: 'column2',
          defaultIndex: 2,
        },
      ],
      dColumns: [
        { text: '杭州', disabled: true },
        { text: '宁波' },
        { text: '温州' },
      ],
    };
  },
  onLoad() {
    // #ifdef MP-QQ
    qq.showShareMenu({
      showShareItems: ['qq', 'qzone', 'wechatFriends', 'wechatMoment'],
    });
    // #endif
  },
  methods: {
    onShow() {

    },
    onChangePicker(val) {
      console.log('onChangePicker.val', val);
      const { value } = val;
      this.$refs.picker.setColumnValues(1, citys[value[0]]);
    },
    onChange(val) {
      console.log('onChange.val', val);
    },
    onCancel(val) {
      console.log('onCancel.val', val);
    },
    onConfirm(val) {
      console.log('onConfirm.val', val);
    },
  },
};
</script>

<style scoped lang="scss">
// .wrap {
//   padding: 20px;
// }
</style>


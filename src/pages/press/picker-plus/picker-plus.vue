<template>
  <view class="wrap">
    <press-picker-plus
      :columns="columns"
      show-toolbar
      @change="onChange"
    />
    <press-picker-plus
      :columns="columns"
      :default-index="2"
      @change="onChange"
    />
    <press-picker-plus
      show-toolbar
      title="标题"
      :columns="columns"
      @cancel="onCancel"
      @confirm="onConfirm"
    />
    <press-picker-plus
      :columns="cColumns"
      @change="onChange"
    />
  </view>
</template>
<script>

const citys = {
  浙江: ['杭州', '宁波', '温州', '嘉兴', '湖州'],
  福建: ['福州', '厦门', '莆田', '三明', '泉州'],
};

export default {
  data() {
    return {
      isOpen: false,
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
.wrap {
  padding: 20px;
}
</style>


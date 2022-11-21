<template>
  <view class="wrap">
    <demo-block title="基础用法">
      <press-checkbox
        :value="checked"
        @change="onChange"
      >
        复选框
      </press-checkbox>
    </demo-block>

    <demo-block title="禁用状态">
      <press-checkbox
        :value="checked"
        disabled
        @change="onChange"
      >
        复选框
      </press-checkbox>
    </demo-block>


    <demo-block title="自定义形状">
      <press-checkbox
        shape="square"
        :value="checked"
        @change="onChange"
      >
        复选框
      </press-checkbox>
    </demo-block>

    <demo-block title="自定义颜色">
      <press-checkbox
        :value="checked"
        checked-color="#07c160"
        @change="onChange"
      >
        复选框
      </press-checkbox>
    </demo-block>

    <demo-block title="自定义大小">
      <press-checkbox
        :value="checked"
        :icon-size="25"
        @change="onChange"
      >
        复选框
      </press-checkbox>
    </demo-block>

    <demo-block title="禁用文本点击">
      <press-checkbox
        :value="checked"
        label-disabled
        @change="onChange"
      >
        复选框
      </press-checkbox>
    </demo-block>
  </view>
</template>
<script>

export default {
  data() {
    return {
      isOpen: false,
      checked: true,
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
    onSwitchChange() {
      this.isOpen = !this.isOpen;
    },
    onChange(val) {
      console.log('onChange.val', val);
      this.checked = val;
    },
  },
};
</script>

<style scoped lang="scss">
</style>


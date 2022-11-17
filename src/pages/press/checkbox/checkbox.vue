<template>
  <view class="wrap">
    <press-checkbox
      :value="checked"
      @change="onChange"
    >
      复选框
    </press-checkbox>

    <press-checkbox
      :value="checked"
      disabled
      @change="onChange"
    >
      复选框
    </press-checkbox>


    <press-checkbox
      shape="square"
      :value="checked"
      @change="onChange"
    >
      复选框
    </press-checkbox>

    <press-checkbox
      :value="checked"
      checked-color="#07c160"
      @change="onChange"
    >
      复选框
    </press-checkbox>

    <press-checkbox
      :value="checked"
      icon-size="25px"
      @change="onChange"
    >
      复选框
    </press-checkbox>

    <press-checkbox
      :value="checked"
      label-disabled
      @change="onChange"
    >
      复选框
    </press-checkbox>
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
.wrap {
  padding: 20px;
}
</style>


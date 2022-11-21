<template>
  <view class="wrap">
    <press-transition name="fade-up" />
  </view>
</template>
<script>

export default {
  data() {
    return {
      isOpen: false,
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
  },
};
</script>

<style scoped lang="scss">
.wrap {
  padding: 20px;
}
</style>


<template>
  <view class="wrap">
    <view>
      <press-loading-icon /> <press-loading-icon type="spinner" />
    </view>
    <view>
      <press-loading-icon color="#1989fa" />
      <press-loading-icon
        type="spinner"
        color="#1989fa"
      />
    </view>

    <view>
      <press-loading-icon size="24px">
        加载中...
      </press-loading-icon>
    </view>

    <view>
      <press-loading-icon
        size="24px"
        vertical
      >
        加载中...
      </press-loading-icon>
    </view>
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


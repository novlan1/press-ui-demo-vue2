<template>
  <view class="wrap">
    <view>
      <press-loading-plus /> <press-loading-plus type="spinner" />
    </view>
    <view>
      <press-loading-plus color="#1989fa" />
      <press-loading-plus
        type="spinner"
        color="#1989fa"
      />
    </view>

    <view>
      <press-loading-plus size="24px">
        加载中...
      </press-loading-plus>
    </view>

    <view>
      <press-loading-plus
        size="24px"
        vertical
      >
        加载中...
      </press-loading-plus>
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


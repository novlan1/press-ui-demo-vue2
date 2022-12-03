<template>
  <view class="wrap">
    <demo-block title="加载类型">
      <view>
        <press-loading-plus />
      </view>
      <view>
        <press-loading-plus
          type="spinner"
          :custom-style="customStyle"
        />
      </view>
    </demo-block>

    <demo-block title="自定义颜色">
      <view>
        <press-loading-plus color="#1989fa" />
      </view>
      <view>
        <press-loading-plus
          type="spinner"
          color="#1989fa"
          :custom-style="customStyle"
        />
      </view>
    </demo-block>

    <demo-block title="自定义大小">
      <view>
        <press-loading-plus size="15" />
      </view>
      <view>
        <press-loading-plus
          type="spinner"
          size="38"
          :custom-style="customStyle"
        />
      </view>
    </demo-block>

    <demo-block title="加载文案">
      <press-loading-plus size="24px">
        加载中...
      </press-loading-plus>
    </demo-block>

    <demo-block title="垂直排列">
      <press-loading-plus
        size="24px"
        vertical
      >
        加载中...
      </press-loading-plus>
    </demo-block>
  </view>
</template>
<script>

export default {
  data() {
    return {
      isOpen: false,
      customStyle: 'margin-left: 20px;',
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
  ::v-deep .section-content {
    display: flex;
    align-items: center;
  }
}
</style>


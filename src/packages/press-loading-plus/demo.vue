<template>
  <div class="wrap">
    <demo-block title="加载类型">
      <div>
        <press-loading-plus />
      </div>
      <div>
        <press-loading-plus
          type="spinner"
          :custom-style="customStyle"
        />
      </div>
    </demo-block>

    <demo-block title="自定义颜色">
      <div>
        <press-loading-plus color="#1989fa" />
      </div>
      <div>
        <press-loading-plus
          type="spinner"
          color="#1989fa"
          :custom-style="customStyle"
        />
      </div>
    </demo-block>

    <demo-block title="自定义大小">
      <div>
        <press-loading-plus size="15" />
      </div>
      <div>
        <press-loading-plus
          type="spinner"
          size="38"
          :custom-style="customStyle"
        />
      </div>
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
  </div>
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


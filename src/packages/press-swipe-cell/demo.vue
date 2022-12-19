<template>
  <div class="demo-wrap">
    <demo-block
      title="基础用法"
      section-style="margin:0;"
    >
      <press-swipe-cell
        :right-width="65"
        :left-width="65"
        @click="onClick"
        @close="onClose"
        @open="onOpen"
      >
        <div
          slot="left"
          class="left"
        >
          选择
        </div>
        <div class="content">
          一些内容
        </div>
        <div
          slot="right"
          class="right"
        >
          删除
        </div>
      </press-swipe-cell>
    </demo-block>
  </div>
</template>
<script>

export default {
  data() {
    return {
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
    onClick(...args) {
      console.log('onClick.args', args);
    },
    onClose(...args) {
      console.log('onClose.args', args);
    },
    onOpen(...args) {
      console.log('onOpen.args', args);
    },
  },
};
</script>

<style scoped lang="scss">
.demo-wrap {
  ::v-deep .press-swipe-cell__left,
  ::v-deep .press-swipe-cell__right {
    background-color: #f44;
  }

  .content {
    height: 44px;
    line-height: 44px;
    padding-left: 20px;
    background: #f7f8fa;
  }
}
</style>


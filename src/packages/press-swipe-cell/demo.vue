<template>
  <view class="wrap">
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
        <div slot="left">
          选择
        </div>
        <div class="content">
          一些内容
        </div>
        <div slot="right">
          删除
        </div>
      </press-swipe-cell>
    </demo-block>
  </view>
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
.content {
  height: 44px;
  line-height: 44px;
  padding-left: 20px;
  background: #f7f8fa;
}
</style>


<template>
  <view class="wrap">
    <press-swipe-cell
      :right-width="65"
      :left-width="65"
      @click="onClick"
      @close="onClose"
      @open="onOpen"
    >
      <view slot="left">
        选择
      </view>
      123
      <!-- <van-cell-group>
        <van-cell
          title="单元格"
          value="内容"
        />
      </van-cell-group> -->
      <view slot="right">
        删除
      </view>
    </press-swipe-cell>
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
    onClick(...args) {
      console.log('onClick.args', args);
    },
    onClose(...args) {
      console.log('onClose.args', args);
    },
    onOpen(...args) {
      console.log('onOpen.args', args);
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


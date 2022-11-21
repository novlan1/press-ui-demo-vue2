<template>
  <view class="wrap">
    <button
      type="primary"
      @click="onClickShow('normal')"
    >
      显示遮罩层
    </button>

    <press-overlay
      :show="options.normal"
      @click="onClickHide('normal')"
    />

    <button
      type="primary"
      @click="onClickShow('content')"
    >
      嵌入内容
    </button>

    <press-overlay
      :show="options.content"
      @click="onClickHide('content')"
    >
      <view class="wrapper">
        <view
          class="block"
          catch:tap="noop"
        />
      </view>
    </press-overlay>
  </view>
</template>
<script>

export default {
  data() {
    return {
      isOpen: false,
      show: false,
      options: {
        normal: false,
        content: false,
      },
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
    onClickShow(type) {
      this.options[type] = true;
    },
    onClickHide(type) {
      this.options[type] = false;
    },
    onSwitchChange() {
      this.isOpen = !this.isOpen;
    },
    noop() {},
  },
};
</script>

<style scoped lang="scss">
.wrap {
  padding: 20px;
}
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.block {
  width: 120px;
  height: 120px;
  background-color: #fff;
}
</style>


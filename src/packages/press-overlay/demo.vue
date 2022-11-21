<template>
  <view class="wrap">
    <demo-block title="基础用法">
      <button
        type="primary"
        @click="onClickShow('normal')"
      >
        显示遮罩层
      </button>
    </demo-block>

    <demo-block title="嵌入内容">
      <button
        type="primary"
        @click="onClickShow('content')"
      >
        嵌入内容
      </button>
    </demo-block>

    <press-overlay
      :show="options.normal"
      @click="onClickHide('normal')"
    />

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
    onClickShow(type) {
      this.options[type] = true;
    },
    onClickHide(type) {
      this.options[type] = false;
    },
    noop() {},
  },
};
</script>

<style scoped lang="scss">
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


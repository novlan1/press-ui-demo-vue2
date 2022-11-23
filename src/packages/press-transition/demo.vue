<template>
  <view class="wrap">
    <demo-block title="动画">
      <button
        v-for="(item,index) of transitionList"
        :key="index"
        @click="onShowTransition(item)"
      >
        {{ item }}
      </button>
    </demo-block>
    <div class="demo-rect">
      <press-transition
        :name="curTransitionType"
        :show="options[curTransitionType] || false"
      >
        <div class="demo-rect--content" />
      </press-transition>
    </div>
  </view>
</template>
<script>

let timer = null;


export default {
  data() {
    const transitionList = [
      'fade',
      'fade-up',
      'fade-down',
      'fade-left',
      'fade-right',
      'slide-up',
      'slide-down',
      'slide-left',
      'slide-right',
    ];

    return {
      curTransitionType: 'fade',
      transitionList,
      options: transitionList.reduce((acc, item) => {
        acc[item] = false;
        return acc;
      }, {}),
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
    onShowTransition(type) {
      this.options[type] = true;
      this.curTransitionType = type;
      clearTimeout(timer);
      timer = setTimeout(() => {
        this.options[type] = false;
      }, 1000);
    },
  },
};
</script>

<style scoped lang="scss">
.demo-rect {
  width: 100%;

  &--content {
    top: 50%;
    left: 50%;
    width: 100px;
    height: 100px;
    margin: 10px auto;
    background-color: #1989fa;
    border-radius: 8px;
  }
}
</style>


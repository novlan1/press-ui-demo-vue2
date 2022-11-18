<template>
  <view class="wrap">
    <button @click="onShowToast">
      普通
    </button>
    <button @click="onShowToastLoading('normal')">
      loading
    </button>
    <button @click="onShowToastLoading('custom')">
      loading自定义图标
    </button>
    <button @click="onShowToastSuccess('success')">
      成功提示
    </button>
    <button @click="onShowToastSuccess('fail')">
      失败提示
    </button>
    <button @click="onShowDynamicToast">
      动态更新提示
    </button>
    <!-- #ifndef H5 -->
    <press-toast id="van-toast" />
    <!-- #endif -->
  </view>
</template>
<script>
import Toast from 'src/packages/press-toast';

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
    onShowToast() {
      Toast('我是提示文案，建议不超过十五字~');
    },
    onShowToastLoading(type) {
      setTimeout(() => {
        Toast.clear();
      }, 5000);
      if (type === 'normal') {
        Toast.loading({
          message: '加载中...',
          forbidClick: true,
        });
        return;
      }
      // 自定义加载图标
      Toast.loading({
        message: '加载中...',
        forbidClick: true,
        loadingType: 'spinner',
      });

      // // 自定义加载图标
      // Toast.loading({
      //   message: '加载中...',
      //   forbidClick: true,
      //   loadingType: 'spinner',
      // });
    },
    onShowToastSuccess(type) {
      if (type === 'success') {
        Toast.success('成功文案');
        return;
      }
      Toast.fail('失败文案');
    },
    onShowDynamicToast() {
      const toast = Toast.loading({
        duration: 0, // 持续展示 toast
        forbidClick: true,
        message: '倒计时 3 秒',
        // selector: '#custom-selector',
      });

      let second = 3;
      const timer = setInterval(() => {
        second -= 1;
        if (second) {
          toast.message = `倒计时 ${second} 秒`;
          // toast.setData({
          //   message: `倒计时 ${second} 秒`,
          // });
        } else {
          console.log('=====');
          clearInterval(timer);
          Toast.clear();
        }
      }, 1000);
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


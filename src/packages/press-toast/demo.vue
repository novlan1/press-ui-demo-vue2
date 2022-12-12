<template>
  <view class="wrap">
    <demo-block title="文字提示">
      <PressButton
        type="e-sport-primary"
        :custom-style="customStyle"
        @click="onShowToast"
      >
        查看
      </PressButton>
    </demo-block>
    <demo-block title="加载提示">
      <PressButton
        type="e-sport-primary"
        :custom-style="customStyle"
        @click="onShowToastLoading('normal')"
      >
        默认
      </PressButton>

      <PressButton
        type="e-sport-primary"
        :custom-style="`${customStyle};margin-left:12px;`"
        @click="onShowToastLoading('spinner')"
      >
        Spinner
      </PressButton>
    </demo-block>
    <demo-block title="成功提示">
      <PressButton
        type="e-sport-primary"
        :custom-style="customStyle"
        @click="onShowToastSuccess('success')"
      >
        查看
      </PressButton>
    </demo-block>
    <demo-block title="失败提示">
      <PressButton
        type="e-sport-primary"
        :custom-style="customStyle"
        @click="onShowToastSuccess('fail')"
      >
        查看
      </PressButton>
    </demo-block>
    <demo-block title="动态更新提示">
      <PressButton
        type="e-sport-primary"
        :custom-style="customStyle"
        @click="onShowDynamicToast"
      >
        查看
      </PressButton>
    </demo-block>

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
      customStyle: '',
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
          toast.set('dataMessage', `倒计时 ${second} 秒`);
        } else {
          clearInterval(timer);
          Toast.clear();
        }
      }, 1000);
    },
  },
};
</script>

<style scoped lang="scss">
</style>


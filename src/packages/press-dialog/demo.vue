<template>
  <view>
    <view>
      <button @click.stop="onShowDialog('normal')">
        提示弹窗
      </button>
      <button @click.stop="onShowDialog('noCancel')">
        没有取消按钮
      </button>
      <button @click.stop="onShowDialog('loading')">
        loading
      </button>
      <button @click.stop="onShowDialog('noCancelLoading')">
        没有取消按钮+loading
      </button>
      <button @click.stop="onShowDialog('html')">
        html content
      </button>
      <button @click.stop="onShowDialog('img')">
        图片
      </button>
      <button @click.stop="onShowDialog('noTouchMove')">
        点击蒙层不可关闭
      </button>
    </view>
    <press-dialog id="tip-match-comm-tips-dialog" />
  </view>
</template>
<script>
import PressDialog from 'src/packages/press-dialog';

const loadingConfirm = function () {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 3000);
  });
};

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
    onShowDialog(type) {
      let cancelText = '取消';
      let dialogType = 1;
      let onConfirmClick = null;
      let content = '仅限队长报名，发给队长来报名吧！';
      let htmlContent = '';
      let src = '';
      let canTouchRemove = true;

      if (type === 'noCancel') {
        cancelText = '';
      } else if (type === 'loading') {
        dialogType = 2;
        onConfirmClick = loadingConfirm;
      } else if (type === 'noCancelLoading') {
        dialogType = 2;
        cancelText = '';
        onConfirmClick = loadingConfirm;
      } else if (type === 'html') {
        content = '',
        htmlContent = '<div>自定义<span style="color: red;">content</span></div>';
      } else if (type === 'img') {
        src = 'https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/press/qrcode/qrcode-wx-mp.png';
      } else if (type === 'noTouchMove') {
        canTouchRemove = false;
      }

      PressDialog.show({
        title: '提示',
        content,
        htmlContent,
        src,
        confirmText: '确认',
        cancelText,
        dialogType,
        onConfirmClick,
        canTouchRemove,
      }).then(() => {})
        .catch(() => {});
    },
  },
};
</script>


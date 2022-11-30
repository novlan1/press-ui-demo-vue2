<template>
  <view>
    <demo-block
      v-for="(item, index) of dialogTypeList"
      :key="index"
      :title="item.title"
      :section-style="sectionStyle"
    >
      <press-button
        type="e-sport-primary-bg"
        @click="onShowDialog(item.name)"
      >
        查看
      </press-button>
    </demo-block>

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
      sectionStyle: '',
      dialogTypeList: [
        {
          name: 'normal',
          title: '基本用法',
        },
        {
          name: 'noCancel',
          title: '没有取消按钮',
        },
        {
          name: 'loading',
          title: '加载中',
        },
        {
          name: 'noCancelLoading',
          title: '没有取消+加载中',
        },
        {
          name: 'img',
          title: '图片',
        },
        {
          name: 'html',
          title: 'HTML内容',
        },
        {
          name: 'noTouchMove',
          title: '点击蒙层不可关闭',
        },
      ],
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
        htmlContent = '<div>自定义<span style="color: red;">内容</span></div>';
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


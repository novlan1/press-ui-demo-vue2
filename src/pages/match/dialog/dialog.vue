<template>
  <view>
    <view>
      <button @click.stop="onShowDialog('normal')">
        提示弹窗
      </button>
      <!-- <button @click.stop="onShowDialog('default')">
        设置默认项
      </button>
      <button @click.stop="onShowDialog('multiColumn')">
        多列
      </button>
      <button @click.stop="onShowDialog('children')">
        级联选择
      </button> -->
    </view>
    <press-dialog id="tip-match-comm-tips-dialog" />
  </view>
</template>
<script>
import PressDialog from 'src/packages/press-dialog/press-dialog.js';

export default {
  data() {
    return {

    };
  },
  methods: {
    onShowDialog() {
      PressDialog.show({
        title: '提示',
        content: '仅限队长报名，发给队长来报名吧！',
        confirmText: '确认',
        cancelText: '取消',
      }).then(() => {})
        .catch(() => {});
    },
  },
};
</script>


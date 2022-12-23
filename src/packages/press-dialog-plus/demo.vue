<template>
  <div class="demo-wrap">
    <demo-block title="基础用法">
      <press-cell
        title="提示弹窗"
        is-link
        @click="onShowDialog('normal')"
      />
      <press-cell
        title="提示弹窗（无标题）"
        is-link
        @click="onShowDialog('noTitle')"
      />
      <press-cell
        title="确认弹窗"
        is-link
        @click="onShowDialog('cancel')"
      />
    </demo-block>

    <demo-block title="异步关闭">
      <press-cell
        title="异步关闭"
        is-link
        @click="onShowDialog('async')"
      />
    </demo-block>

    <demo-block title="组件调用">
      <press-cell
        title="组件调用"
        is-link
        @click="onShowDialog('component')"
      />
    </demo-block>


    <press-dialog-plus id="van-dialog" />

    <press-dialog-plus
      use-slot
      title="标题"
      :show="show"
      show-cancel-button
      confirm-button-open-type="getUserInfo"
      @close="onClose"
      @getuserinfo="getUserInfo"
    >
      <img src="https://img01.yzcdn.cn/vant/apple-3.jpg">
    </press-dialog-plus>
  </div>
</template>
<script>
import PressDialogPlus from 'src/packages/press-dialog-plus/press-dialog-plus.vue';
import Dialog from 'src/packages/press-dialog-plus/handler';
import PressCell from 'src/packages/press-cell/press-cell.vue';


const gBeforeClose = action => new Promise((resolve) => {
  if (action === 'confirm') {
    setTimeout(() => {
      resolve(true);
    }, 1000);
  } else {
    // false可以拦截取消操作
    resolve(true);
  }
});


export default {
  components: {
    PressDialogPlus,
    PressCell,
  },
  data() {
    return {
      show: false,
    };
  },
  methods: {
    onShowDialog(type) {
      if (type === 'component') {
        this.show = true;
        return;
      }

      let title = '标题';
      let showCancelButton = false;
      let beforeClose = null;

      if (type === 'noTitle') {
        title = '';
      } else if (type === 'cancel') {
        showCancelButton = true;
      } else if (type === 'async') {
        showCancelButton = true;
        beforeClose = gBeforeClose;
      }

      Dialog.alert({
        title,
        showCancelButton,
        message: '代码是写出来给人看的，附带能在机器上运行',
        beforeClose,
      }).then(() => {
        // on close
      });
    },
    getUserInfo(res) {
      console.log('getUserInfo.res', res);
    },
    onClose() {
      this.show = false;
    },
  },
};
</script>
<style scoped lang="scss">
@import "src/packages/base/mixin.scss";
</style>

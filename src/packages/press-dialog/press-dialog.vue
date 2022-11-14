<template>
  <div
    v-if="dialogIsShow"
    class="press-dialog"
    :style="{zIndex: `${zIndex}`}"
    @click.stop="touchRemove"
    @touchmove.stop="preventTouchMove"
  >
    <div class="press-dialog--content-wrap">
      <p class="press-dialog--title">
        {{ title }}
      </p>
      <p
        v-if="htmlContent"
        class="press-dialog--content"
        v-html="htmlContent"
      />
      <p
        v-if="!htmlContent"
        class="press-dialog--content"
      >
        {{ content }}
      </p>
      <div
        v-if="src"
        class="press-dialog--img-wrap"
      >
        <img
          v-if="src"
          class="press-dialog--img"
          :show-menu-by-longpress="true"
          :src="src"
        >
      </div>
      <div class="press-dialog--btn--wrap">
        <template v-if="cancelText && cancelText.length > 0">
          <div
            class="press-dialog--btn__secondary-small press-dialog--btn__spacing"
            @click.stop="cancel"
          >
            {{ cancelText }}
          </div>
          <div
            class="press-dialog--btn__primary-small"
            @click.stop="confirm"
          >
            <p>{{ mShowButtonLoading ? '' : confirmText }}</p>
            <press-loading
              v-if="mShowButtonLoading"
              loading-scenes="btn"
            />
          </div>
        </template>
        <template v-else>
          <div
            class="press-dialog--btn__main"
            @click.stop="confirm"
          >
            <p>{{ mShowButtonLoading ? '' : confirmText }}</p>
            <press-loading
              v-if="mShowButtonLoading"
              loading-scenes="btn"
            />
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
<script>
import PressLoading from '../press-loading/press-loading.vue';
function isMp() {
  return typeof getCurrentPages === 'function';
}

export default {
  name: 'PressDialog',
  components: {
    PressLoading,
  },
  props: {
    // dialogType: { // 弹窗类型：1：普通弹窗，2：确认按钮带loading效果弹窗
    //   type: Number,
    //   default: 1,
    //   required: false,
    // },
    // title: {
    //   type: String,
    //   default: '温馨提示',
    //   required: false,
    // },
    // content: {
    //   type: String,
    //   default: '',
    //   required: false,
    // },
    // canTouchRemove: { // 是否可以触摸蒙层隐藏
    //   type: Boolean,
    //   default: true,
    //   required: false,
    // },
    // confirmText: {
    //   type: String,
    //   default: '确定',
    //   required: false,
    // },
    // cancelText: {
    //   type: String,
    //   default: '',
    //   required: false,
    // },
    // onClickCancel: {
    //   type: [Function, null],
    //   default: null,
    //   required: false,
    // },
    // onConfirmClick: {
    //   type: [Function, null],
    //   default: null,
    //   required: false,
    // },
    // htmlContent: {
    //   type: String,
    //   default: '',
    // },
  },
  options: {
    virtualHost: true,
  },
  data() {
    return {
      resolve: '',
      reject: '',
      promise: '',
      mShowButtonLoading: false,

      dialogIsShow: false,
      src: '',
      dialogType: 1,
      title: '温馨提示',
      content: '',
      canTouchRemove: true,
      confirmText: '确定',
      cancelText: '',
      onClickCancel: null,
      onConfirmClick: null,
      htmlContent: '',
      zIndex: '99',
    };
  },

  methods: {
    preventTouchMove() {
      return;
    },
    confirm() {
      if (this.dialogType === 2) {
        if (this.mShowButtonLoading) {
          return;
        }
        this.mShowButtonLoading = true;
        if (typeof this.onConfirmClick === 'function') {
          this.onConfirmClick(this)
            .then(() => {
              this.resolveConfirm();
            })
            .catch(() => {
            });
        }
      } else {
        this.resolveConfirm();
      }
    },
    resolveConfirm() {
      if (this.resolve) {
        this.resolve('confirm');
      }
      this.remove();
    },
    // 取消,将promise断定为reject状态
    cancel() {
      if (typeof this.onClickCancel === 'function') {
        this.onClickCancel(this);
      }
      if (typeof this.reject === 'function') {
        this.reject('cancel');
      }
      this.remove();
    },
    // 弹出messageBox,并创建promise对象
    showDialog(options) {
      this.dialogIsShow = true;

      Object.keys(options).map((key) => {
        this[key] = options[key];
      });
      this.promise = new Promise((resolve, reject) => {
        this.resolve = resolve;
        this.reject = reject;
      });
      // 返回promise对象
      return this.promise;
    },
    touchRemove() {
      if (this.canTouchRemove) {
        this.remove();
      }
    },
    remove() {
      this.dialogIsShow = false;
      setTimeout(() => {
        this.destroy();
      }, 500);
    },
    destroy() {
      if (isMp()) return;
      this.$destroy();
      if (document.body.contains(this.$el)) {
        document.body.removeChild(this.$el);
      }
    },

  },
};

</script>
<style lang="scss" scoped src="./css/index.scss"></style>

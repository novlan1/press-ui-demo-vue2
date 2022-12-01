<template>
  <div
    v-if="dialogIsShow"
    class="press-dialog"
    :style="{zIndex: `${zIndex}`}"
    @click.stop="touchRemove"
    @touchmove.stop="preventTouchMove"
  >
    <div class="press-dialog__content-wrap">
      <p class="press-dialog__title">
        {{ title }}
      </p>
      <p
        v-if="htmlContent"
        class="press-dialog__content"
        v-html="htmlContent"
      />
      <p
        v-if="!htmlContent"
        class="press-dialog__content"
      >
        {{ content }}
      </p>
      <div
        v-if="src"
        class="press-dialog__img-wrap"
      >
        <img
          v-if="src"
          class="press-dialog__img"
          :show-menu-by-longpress="true"
          :src="src"
        >
      </div>
      <div class="press-dialog__btn--wrap">
        <template v-if="cancelText && cancelText.length > 0">
          <div
            class="press-dialog__btn__spacing"
          >
            <PressButton
              type="e-sport-secondary"
              custom-style="width: 100px;height: 36px;"
              @click="cancel"
            >
              {{ cancelText }}
            </PressButton>
          </div>

          <PressButton
            type="e-sport-primary"
            :loading="mShowButtonLoading"
            custom-style="width: 100px;height: 36px;"
            @click="confirm"
          >
            {{ mShowButtonLoading ? '' : confirmText }}
          </PressButton>
        </template>

        <template v-else>
          <PressButton
            type="e-sport-primary-bg"
            :loading="mShowButtonLoading"
            custom-style="width: 148px;height: 36px;"
            @click="confirm"
          >
            {{ mShowButtonLoading ? '' : confirmText }}
          </PressButton>
        </template>
      </div>
    </div>
  </div>
</template>
<script>
// import PressLoading from '../press-loading/press-loading.vue';
import PressButton from '../press-button/press-button.vue';

function isMp() {
  return typeof getCurrentPages === 'function';
}

export default {
  name: 'PressDialog',
  components: {
    // PressLoading,
    PressButton,
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

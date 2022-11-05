<template>
  <div
    v-if="dialogIsShow"
    class="tip-match-center-popup-wrap"
    :style="{zIndex: `${zIndex}`}"
    @click.stop="touchRemove"
    @touchmove.stop="preventTouchMove"
  >
    <div class="tip-match-popup-content">
      <p class="tip-match-popup-title">
        {{ title }}
      </p>
      <p
        v-if="htmlContent"
        class="tip-match-popup-tip-desc"
        v-html="htmlContent"
      />
      <p
        v-if="!htmlContent"
        class="tip-match-popup-tip-desc"
      >
        {{ content }}
      </p>
      <div class="tip-match-popup-btn-wrap">
        <template v-if="cancelText && cancelText.length > 0">
          <div
            class="tip-match-secondary-samll-btn tip-match-btn-spacing"
            @click.stop="cancel"
          >
            {{ cancelText }}
          </div>
          <div
            class="tip-match-primary-samll-btn"
            @click.stop="confirm"
          >
            <p>{{ mShowButtonLoading ? '' : confirmText }}</p>
            <button-loading
              v-if="mShowButtonLoading"
              loading-scenes="btn"
            />
          </div>
        </template>
        <template v-else>
          <div
            class="tip-match-popup-form-btn"
            @click.stop="confirm"
          >
            <p>{{ mShowButtonLoading ? '' : confirmText }}</p>
            <button-loading
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
import ButtonLoading from '../match-loading/match-loading.vue';
export default {
  name: 'PressDialog',
  components: {
    ButtonLoading,
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
          this.onConfirmClick(this);
        }
      } else {
        if (this.resolve) {
          this.resolve('confirm');
        }

        this.remove();
      }
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
      if (this.isMpWeixin) return;
      this.$destroy();
      if (document.body.contains(this.$el)) {
        document.body.removeChild(this.$el);
      }
    },

  },
};

</script>
<style lang="scss" scoped src="./css/index.scss"></style>

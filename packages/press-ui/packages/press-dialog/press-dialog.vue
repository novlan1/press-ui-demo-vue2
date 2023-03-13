<!-- eslint-disable vue/no-v-html vue/no-v-text-v-html-on-component-->
<template>
  <div
    v-if="dataShow"
    class="press-dialog"
    :style="{zIndex: `${dataZIndex}`}"
    @click.stop="touchRemove"
    @touchmove.stop="preventTouchMove"
  >
    <div class="press-dialog__content-wrap">
      <p class="press-dialog__title">
        {{ dataTitle }}
      </p>
      <scroll-view
        v-if="dataUseScrollView && dataHtmlContent"
        scroll-y="true"
        class="press-dialog__content"
        v-html="dataHtmlContent"
      />

      <p
        v-else-if="dataHtmlContent"
        class="press-dialog__content"
        v-html="dataHtmlContent"
      />

      <p
        v-if="!dataHtmlContent"
        class="press-dialog__content"
      >
        {{ dataContent }}
      </p>

      <div
        v-if="dataSrc"
        class="press-dialog__img-wrap"
      >
        <img
          v-if="dataSrc"
          class="press-dialog__img"
          :show-menu-by-longpress="true"
          :src="dataSrc"
        >
      </div>
      <div class="press-dialog__btn--wrap">
        <template v-if="dataCancelText && dataCancelText.length > 0">
          <div
            class="press-dialog__btn--spacing"
          >
            <PressButton
              type="e-sport-secondary"
              custom-style="width: 100px;height: 36px;"
              @click="cancel"
            >
              {{ dataCancelText }}
            </PressButton>
          </div>

          <PressButton
            type="e-sport-primary"
            :loading="mShowButtonLoading"
            custom-style="width: 100px;height: 36px;"
            @click="confirm"
          >
            {{ mShowButtonLoading ? '' : dataConfirmText }}
          </PressButton>
        </template>

        <template v-else>
          <PressButton
            type="e-sport-primary-bg"
            :loading="mShowButtonLoading"
            custom-style="width: 148px;height: 36px;"
            @click="confirm"
          >
            {{ mShowButtonLoading ? '' : dataConfirmText }}
          </PressButton>
        </template>
      </div>
    </div>
  </div>
</template>
<script>
import PressButton from '../press-button/press-button.vue';
import { t } from '../locale';
import { getPropsWatch,  getPropsData, setPropsToData } from '../common/component-handler';

const props = {
  show: {
    type: Boolean,
    default: false,
  },
  src: {
    type: String,
    default: '',
  },
  dialogType: {
    type: [Number, String],
    default: 1,
  },
  title: {
    type: String,
    default: t('dialog.title'),
  },
  content: {
    type: String,
    default: '',
  },
  canTouchRemove: {
    type: Boolean,
    default: true,
  },
  confirmText: {
    type: String,
    default: t('confirm'),
  },
  cancelText: {
    type: String,
    default: '',
  },
  onClickCancel: {
    type: [Function, null],
    default: null,
  },
  onConfirmClick: {
    type: [Function, null],
    default: null,
  },
  htmlContent: {
    type: String,
    default: '',
  },
  zIndex: {
    type: [Number, String],
    default: '99',
  },
  useScrollView: {
    type: Boolean,
    default: false,
  },
};

export default {
  name: 'PressDialog',
  components: {
    PressButton,
  },
  props: {
    ...props,
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

      ...getPropsData(this, props),


      // dialogIsShow: false,
      // src: '',
      // dialogType: 1,
      // title: t('dialog.title'),
      // content: '',
      // canTouchRemove: true,
      // confirmText: t('confirm'),
      // cancelText: '',
      // onClickCancel: null,
      // onConfirmClick: null,
      // htmlContent: '',
      // zIndex: '99',
      // useScrollView: false, // 是否使用scroll-view包裹v-html
    };
  },
  watch: {
    ...getPropsWatch(props),
  },
  methods: {
    setData(data) {
      setPropsToData.call(this, data);
    },
    preventTouchMove() {
      return;
    },
    confirm() {
      if (this.dataDialogType === 2) {
        if (this.mShowButtonLoading) {
          return;
        }
        this.mShowButtonLoading = true;
        if (typeof this.dataOnConfirmClick === 'function') {
          this.dataOnConfirmClick(this)
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
      this.$emit('confirm');
      this.remove();
    },
    // 取消,将promise断定为reject状态
    cancel() {
      if (typeof this.dataOnClickCancel === 'function') {
        this.dataOnClickCancel(this);
      }
      if (typeof this.reject === 'function') {
        this.reject('cancel');
      }
      this.$emit('cancel');
      this.remove();
    },
    // 弹出messageBox,并创建promise对象
    showDialog() {
      this.dataShow = true;

      // Object.keys(options).map((key) => {
      //   this[key] = options[key];
      // });
      this.promise = new Promise((resolve, reject) => {
        this.resolve = resolve;
        this.reject = reject;
      });
      // 返回promise对象
      return this.promise;
    },
    touchRemove() {
      if (this.dataCanTouchRemove) {
        this.remove();
      }
      this.$emit('cancel');
    },
    remove() {
      this.dataShow = false;
      // setTimeout(() => {
      //   this.destroy();
      // }, 500);
    },
    destroy() {
      // #ifdef H5
      // this.$destroy();
      // if (document.body.contains(this.$el)) {
      //   this.$el.parentNode.removeChild(this.$el);
      // }
      // #endif
    },

  },
};

</script>
<style lang="scss" scoped src="./css/index.scss"></style>

<template>
  <div
    :class="['press-popup',popupClass ,isCrossSlab? 'press-popup__hor':'press-popup__vert']"
    :style="{zIndex: `${zIndex}`}"
    @touchmove.stop="preventTouchMove"
  >
    <!-- 透明遮罩 -->
    <div
      :class="['press-popup--mask',
               isShowPopup ? 'press--animation__fade-in':'press--animation__fade-out']"
      @click.stop="onClickTouch"
    />
    <div
      :class="['press-popup--content',
               isShowPopup ?
                 isCrossSlab ? 'press--animation__right-enter':'press--animation__bottom-enter':
                 isCrossSlab ? 'press--animation__right-leave':'press--animation__bottom-leave']"
      :style="{width:isCrossSlab ? `${widthNumber}%` : '100%'}"
    >
      <div
        v-if="isShowTitle"
        class="press-popup--title-wrap"
      >
        <div
          v-if="!isShowpopupClose && !showBackArrow && !isCrossSlab"
          class="press-popup--title-line"
          @click.stop="clickCancel"
        />

        <div
          v-if="isShowpopupClose && !showBackArrow"
          class="press-popup--close iconfont icon-close"
          @click.stop="clickCancel"
        />

        <div
          v-if="isShowpopupClose && showBackArrow"
          class="press-popup--arrow iconfont icon-back"
          @click.stop="clickCancel"
        />

        <p class="press-popup--title">
          {{ popupTitle }}
        </p>

        <div class="press-popup--title-btn-wrap">
          <PressButton
            v-if="popupTitleBtn"
            :type="isBorderBtn ? 'e-sport-border' : 'e-sport-primary'"
            custom-style="width:100%;height:100%;padding:0;font-size:inherit;"
            @click.stop="clickConfirm"
          >
            {{ popupTitleBtn }}
          </PressButton>
        </div>
      </div>
      <slot />
    </div>
  </div>
</template>
<script>
// import PressIcon from '../press-icon/press-icon.vue';
import PressButton from '../press-button/press-button.vue';

export default {
  name: 'PopupContainer',
  components: {
    PressButton,
    // PressIcon,
  },
  props: {
    // 是否显示标题
    isShowTitle: {
      type: Boolean,
      default: true,
      required: false,
    },
    // 横板弹窗宽度百分比
    widthNumber: {
      type: Number,
      default: 100,
      required: false,
    },
    // 是否切换横板样式
    isCrossSlab: {
      type: Boolean,
      default: false,
      required: false,
    },
    // 是否显示关闭按钮
    isShowpopupClose: {
      type: Boolean,
      default: false,
      required: false,
    },
    // 左上角是否显示为返回箭头
    showBackArrow: {
      type: Boolean,
      default: false,
    },
    // 弹窗标题
    popupTitle: {
      type: String,
      default: '',
      required: false,
    },
    // 弹窗标题按钮
    popupTitleBtn: {
      type: String,
      default: '',
      required: false,
    },
    // 标题按钮样式
    isBorderBtn: {
      type: Boolean,
      default: false,
      required: false,
    },
    // 在执行确认动画前，validateConfirm返回false则进行拦截
    validateConfirm: {
      type: [Function, null],
      default: null,
    },
    isShow: {
      type: Boolean,
      default: true,
      required: false,
    },
    // 弹窗层级
    zIndex: {
      type: String,
      default: '99',
      required: false,
    },
    // class
    popupClass: {
      type: String,
      default: '',
      required: false,
    },
    // 是否可以点击蒙版关闭
    canTouchRemove: {
      type: Boolean,
      default: true,
    },
  },
  options: {
    virtualHost: true,
  },
  data() {
    return {
      isShowPopup: true,
      timer: 0,
    };
  },
  watch: {
    isShow(val) {
      this.isShowPopup = val;
    },
    // #ifdef H5
    isShowPopup: {
      handler(val) {
        if (val) {
          document.body.style.overflowY = 'hidden';
        } else {
          document.body.style.overflowY = '';
        }
      },
      immediate: true,
    },
    // #endif
  },
  mounted() {
  },
  destroyed() {
  },
  beforeDestroy() {
    clearTimeout(this.timer);
  },
  methods: {
    preventTouchMove() {
      return;
    },
    onClickTouch() {
      if (this.canTouchRemove) {
        this.clickCancel();
      }
    },
    clickCancel() {
      this.isShowPopup = false;
      this.timer = setTimeout(() => {
        this.$emit('onCancel');
      }, 400);
    },
    clickConfirm() {
      if (this.$parent.validateConfirm && !this.$parent.validateConfirm()) {
        return;
      }
      this.isShowPopup = false;
      this.timer = setTimeout(() => {
        this.$emit('onConfirm');
      }, 400);
    },
  },
};

</script>
<style lang="scss" scoped src="./css/index.scss"></style>

<template>
  <div
    :class="['tip-match-bottom-popup-wrap',popupClass]"
    :style="{zIndex: `${zIndex}`}"
    @touchmove.stop="preventTouchMove"
  >
    <!-- 透明遮罩 -->
    <div
      :class="['tip-match-mask',
               isShowPopup ? 'tip-match-fade-in':'tip-match-fade-out']"
      @click.stop="onClickTouch"
    />
    <div
      :class="['tip-match-popup-content',
               isShowPopup ? 'tip-match-bottom-enter':'tip-match-bottom-leave']"
    >
      <div class="tip-match-popup-title-wrap">
        <div
          v-if="!isShowpopupClose && !showBackArrow"
          class="tip-match-popup-title-line"
          @click.stop="clickCancel"
        />
        <!-- <div
          v-if="isShowpopupClose && !showBackArrow"
          class="tip-match-popup-close iconfont icon-close"
          @click.stop="clickCancel"
        /> -->
        <PressIcon
          v-if="isShowpopupClose && !showBackArrow"
          class="tip-match-popup-close iconfont icon-close"
          @click="clickCancel"
        />
        <div
          v-if="isShowpopupClose && showBackArrow"
          class="tip-match-popup-arrow iconfont icon-back"
          @click.stop="clickCancel"
        />
        <p class="tip-match-popup-title">
          {{ popupTitle }}
        </p>
        <div
          v-if="popupTitleBtn"
          :class="['tip-match-popup-title-btn',
                   isBorderBtn ? 'tip-match-border-btn':'']"
          @click.stop="clickConfirm"
        >
          {{ popupTitleBtn }}
        </div>
      </div>
      <slot />
    </div>
  </div>
</template>
<script>
import PressIcon from '../press-icon/press-icon.vue';

export default {
  name: 'PopupContainer',
  components: {
    PressIcon,
  },
  props: {
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

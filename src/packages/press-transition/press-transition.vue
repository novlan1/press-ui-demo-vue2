<template>
  <!-- <uni-shadow-root
    class="vant-transition-index"
  > -->
  <view
    v-if="inited"
    :class="transitionClass"
    :style="rootStyle"
    @transitionend="onTransitionEnd"
  >
    <slot />
  </view>
  <!-- </uni-shadow-root> -->
</template>
<script>
import computed from './index';
import { transition } from '../mixins/transition';
import { defaultProps, defaultOptions } from '../common/press-component';

export default {
  mixins: [transition(true)],
  props: {
    overlay: {
      type: Boolean,
      default: false,
    },
    enterClass: {
      type: String,
      default: '',
    },
    enterActiveClass: {
      type: String,
      default: '',
    },
    enterToClass: {
      type: String,
      default: '',
    },
    leaveClass: {
      type: String,
      default: '',
    },
    leaveActiveClass: {
      type: String,
      default: '',
    },
    leaveToClass: {
      type: String,
      default: '',
    },
    ...defaultProps,
  },
  data() {
    return {
      classes: '',
    };
  },
  options: {
    ...defaultOptions,
    // virtualHost: true,
  },
  computed: {
    rootStyle() {
      const { currentDuration, display, customStyle } = this;
      const res = computed.rootStyle({ currentDuration, display, customStyle });
      return res;
    },
    transitionClass() {
      const {
        customClass,
        overlay,
        classes,
      } = this;
      return `van-transition ${classes} ${customClass} ${overlay ? 'van-overlay' : ''}`;
    },
  },
  methods: {
    setData(data) {
      Object.keys(data).forEach((key) => {
        this[key] = data[key];
      });
    },
    onClick() {
      this.$emit('click');
    },
  },
};
</script>
<style platform="mp-weixin">
@import "../common/index.scss";
.van-transition {
  transition-timing-function: ease;
}
.van-fade-enter-active,
.van-fade-leave-active {
  transition-property: opacity;
}
.van-fade-enter,
.van-fade-leave-to {
  opacity: 0;
}
.van-fade-down-enter-active,
.van-fade-down-leave-active,
.van-fade-left-enter-active,
.van-fade-left-leave-active,
.van-fade-right-enter-active,
.van-fade-right-leave-active,
.van-fade-up-enter-active,
.van-fade-up-leave-active {
  transition-property: opacity, transform;
}
.van-fade-up-enter,
.van-fade-up-leave-to {
  opacity: 0;
  transform: translate3d(0, 100%, 0);
}
.van-fade-down-enter,
.van-fade-down-leave-to {
  opacity: 0;
  transform: translate3d(0, -100%, 0);
}
.van-fade-left-enter,
.van-fade-left-leave-to {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.van-fade-right-enter,
.van-fade-right-leave-to {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.van-slide-down-enter-active,
.van-slide-down-leave-active,
.van-slide-left-enter-active,
.van-slide-left-leave-active,
.van-slide-right-enter-active,
.van-slide-right-leave-active,
.van-slide-up-enter-active,
.van-slide-up-leave-active {
  transition-property: transform;
}
.van-slide-up-enter,
.van-slide-up-leave-to {
  transform: translate3d(0, 100%, 0);
}
.van-slide-down-enter,
.van-slide-down-leave-to {
  transform: translate3d(0, -100%, 0);
}
.van-slide-left-enter,
.van-slide-left-leave-to {
  transform: translate3d(-100%, 0, 0);
}
.van-slide-right-enter,
.van-slide-right-leave-to {
  transform: translate3d(100%, 0, 0);
}
.van-overlay {
  background-color: var(--overlay-background-color, rgba(0, 0, 0, 0.7));
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
}
</style>

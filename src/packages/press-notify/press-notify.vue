<template>
  <uni-shadow-root class="vant-notify-index">
    <van-transition
      name="slide-down"
      :show="dataShow"
      custom-class="van-notify__container"
      :custom-style="computed.rootStyle({ zIndex: dataZIndex, top: dataTop })"
      @click.native="onTap"
    >
      <view
        :class="'van-notify van-notify--'+(dataType)"
        :style="true ? computed.notifyStyle({ background: dataBackground, color: dataColor }) : ''"
      >
        <view
          v-if="dataSafeAreaInsetTop"
          :style="'height: '+(statusBarHeight)+'px'"
        />
        <text>{{ dataMessage }}</text>
      </view>
    </van-transition>
  </uni-shadow-root>
</template>
<script>
import VanTransition from '../press-transition/press-transition.vue';
import { WHITE } from '../common/color';
import { getSystemInfoSync } from '../common/utils';
import { defaultProps, defaultOptions } from '../common/press-component';
import computed from './computed';


const props = {
  show: { type: Boolean, default: false },
  message: { type: String, default: '' },
  background: { type: String, default: '' },
  type: {
    type: String,
    default: 'danger',
  },
  color: {
    type: String,
    default: WHITE,
  },
  // duration: {
  //   type: Number,
  //   default: 3000,
  // },
  zIndex: {
    type: Number,
    default: 110,
  },
  safeAreaInsetTop: {
    type: Boolean,
    default: false,
  },
  top: {
    type: [null, String, Number],
    default: null,
  },
  ...defaultProps,
};
const formatKey = key => key.replace(/^(\w)/, (a, b) => `data${b.toUpperCase()}`);

const watchProps = Object.keys(props).reduce((acc, item) => {
  acc[item] = {
    handler(val) {
      this[formatKey(item)] = val;
    },
  };
  return acc;
}, {});


export default {
  options: {
    ...defaultOptions,
    styleIsolation: 'shared',
  },
  components: {
    VanTransition,
  },
  props,
  data() {
    const that = this;
    const propsData = Object.keys(props).reduce((acc, item) => {
      acc[formatKey(item)] = that[item];
      return acc;
    }, {});

    return {
      ...propsData,

      // show: false,
      onOpened: null,
      onClose: null,
      onClick: null,
      computed,
    };
  },
  watch: {
    ...watchProps,
  },
  created() {
    const { statusBarHeight } = getSystemInfoSync();
    this.statusBarHeight = statusBarHeight;
    // this.setData({ statusBarHeight });
  },
  methods: {
    setData(data) {
      Object.keys(data).forEach((key) => {
        this[formatKey(key)] = data[key];
      });
    },
    // showNotify() {
    //   const { duration, onOpened } = this;
    //   clearTimeout(this.timer);
    //   // this.setData({ show: true });
    //   this.show = true;
    //   wx.nextTick(onOpened);
    //   if (duration > 0 && duration !== Infinity) {
    //     this.timer = setTimeout(() => {
    //       this.hide();
    //     }, duration);
    //   }
    // },
    // hide() {
    //   const { onClose } = this;
    //   clearTimeout(this.timer);
    //   // this.setData({ show: false });
    //   this.show = false;
    //   wx.nextTick(onClose);
    // },
    onTap(event) {
      const { onClick } = this;
      if (onClick) {
        onClick(event.detail);
      }
    },
  },
};

</script>
<style platform="mp-weixin" lang="scss">
@import "../common/index.scss";
@import "../common/style/var.scss";

.van-notify {
  text-align: center;
  word-wrap: break-word;
  padding: var(--notify-padding, $notify-padding);
  font-size: var(--notify-font-size, $notify-font-size);
  line-height: var(--notify-line-height, $notify-line-height);

  &__container {
    position: fixed;
    top: 0;
    left: 0;
    box-sizing: border-box;
    width: 100%;
  }

  &--primary {
    background-color: var(
      --notify-primary-background-color,
      $notify-primary-background-color
    );
  }

  &--success {
    background-color: var(
      --notify-success-background-color,
      $notify-success-background-color
    );
  }

  &--danger {
    background-color: var(
      --notify-danger-background-color,
      $notify-danger-background-color
    );
  }

  &--warning {
    background-color: var(
      --notify-warning-background-color,
      $notify-warning-background-color
    );
  }
}
</style>

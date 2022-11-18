<template>
  <uni-shadow-root class="vant-toast-index">
    <van-overlay
      v-if="mask || dataForbidClick"
      :show="dataShow"
      :z-index="dataZIndex"
      :custom-style="dataMask ? '' : 'background-color: transparent;'"
    />
    <!-- custom-class="van-toast__container" -->
    <van-transition
      :show="dataShow"
      :custom-style="transitionStyle"
    >
      <view
        :class="toastClass"
        @touchmove.stop.prevent="noop"
      >
        <text v-if="dataType === 'text'">
          {{ dataMessage }}
        </text>


        <rich-text
          v-else-if="dataType === 'html'"
          :nodes="dataMessage"
        />


        <block v-else>
          <!-- custom-class="van-toast__loading" -->
          <van-loading
            v-if="dataType === 'loading'"
            color="white"
            :type="dataLoadingType"
            custom-style="margin: 10px 0;"
          />
          <van-icon
            v-else
            class="van-toast__icon"
            :name="dataType"
          />
          <text
            v-if="dataMessage"
            class="van-toast__text"
          >
            {{ dataMessage }}
          </text>
        </block>

        <slot />
      </view>
    </van-transition>
  </uni-shadow-root>
</template>

<script>
import VanIcon from '../press-icon-plus/press-icon-plus.vue';
import VanLoading from '../press-loading-icon/press-loading-icon.vue';
import VanOverlay from '../press-overlay/press-overlay.vue';
import VanTransition from '../press-transition/press-transition.vue';

const props = {
  show: Boolean,
  mask: Boolean,
  message: {
    type: String,
    default: '',
  },
  forbidClick: Boolean,
  zIndex: {
    type: Number,
    default: 1000,
  },
  type: {
    type: String,
    default: 'text',
  },
  loadingType: {
    type: String,
    default: 'circular',
  },
  position: {
    type: String,
    default: 'middle',
  },
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

// const dataProps = Object.keys(props).reduce((acc, item) => {
//   acc[`data-${item}`] = {
//     handler(val) {
//       this[`data-${item}`] = val;
//     },
//   };
//   return acc;
// }, {});


export default {
  components: {
    VanIcon,
    VanLoading,
    VanOverlay,
    VanTransition,
  },
  props,
  data() {
    return {
      dataShow: this.show,
      dataMask: this.mask,
      dataMessage: this.message,
      dataForbidClick: this.forbidClick,
      dataZIndex: this.zIndex,
      dataType: this.type,
      dataLoadingType: this.loadingType,
      dataPosition: this.position,
    };
  },
  computed: {
    toastClass() {
      const { dataType, dataPosition } = this;
      return `van-toast van-toast--${(dataType === 'text' || dataType === 'html') ? 'text' : 'icon'} van-toast--${dataPosition}`;
    },
    transitionStyle() {
      const { dataZIndex } = this;
      return [
        `z-index: ${dataZIndex}`,
        'left: 50%',
        'max-width: var(--toast-max-width, 70%)',
        'position: fixed',
        'top: 50%',
        'transform: translate(-50%, -50%)',
        'width: -webkit-fit-content',
        'width: fit-content',
      ].join(';');
    },
  },
  watch: {
    ...watchProps,
  },
  methods: {
    setData(data) {
      Object.keys(data).forEach((key) => {
        this[formatKey(key)] = data[key];
      });
    },
    // for prevent touchmove
    noop() { },
  },
};
// export default global.__wxComponents['vant/toast/index'];
</script>
<style platform="mp-weixin">
@import "../common/index.scss";
.van-toast {
  word-wrap: break-word;
  align-items: center;
  background-color: var(--toast-background-color, rgba(0, 0, 0, 0.7));
  border-radius: var(--toast-border-radius, 8px);
  box-sizing: initial;
  color: var(--toast-text-color, #fff);
  display: flex;
  flex-direction: column;
  font-size: var(--toast-font-size, 14px);
  justify-content: center;
  line-height: var(--toast-line-height, 20px);
  white-space: pre-wrap;
}
/* .van-toast__container {
  left: 50%;
  max-width: var(--toast-max-width, 70%);
  position: fixed;
  top: 50%;
  transform: translate(-50%, -50%);
  width: -webkit-fit-content;
  width: fit-content;
} */
.van-toast--text {
  min-width: var(--toast-text-min-width, 96px);
  padding: var(--toast-text-padding, 8px 12px);
}
.van-toast--icon {
  min-height: var(--toast-default-min-height, 88px);
  padding: var(--toast-default-padding, 16px);
  width: var(--toast-default-width, 88px);
}
.van-toast--icon .van-toast__icon {
  font-size: var(--toast-icon-size, 36px);
}
.van-toast--icon .van-toast__text {
  padding-top: 8px;
}
/* .van-toast__loading {
  margin: 10px 0;
} */
.van-toast--top {
  transform: translateY(-30vh);
}
.van-toast--bottom {
  transform: translateY(30vh);
}
</style>

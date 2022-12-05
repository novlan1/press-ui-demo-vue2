<template>
  <uni-shadow-root class="vant-notice-bar-index">
    <view
      v-if="show"
      :class="noticeBarClass"
      :style="noticeBarStyle"
      @click="onClick"
    >
      <van-icon
        v-if="leftIcon"
        :name="leftIcon"
        class="van-notice-bar__left-icon"
      />
      <slot
        v-else
        name="left-icon"
      />

      <view class="van-notice-bar__wrap">
        <view
          :class="'van-notice-bar__content '+(scrollable === false && !wrapable ? 'van-ellipsis' : '')"
          :animation="animationData"
        >
          {{ text }}
          <slot v-if="(!text)" />
        </view>
      </view>

      <van-icon
        v-if="mode === 'closeable'"
        class="van-notice-bar__right-icon"
        name="cross"
        @click.native.stop.prevent="onClickIcon"
      />
      <navigator
        v-else-if="mode === 'link'"
        :url="url"
        :open-type="openType"
      >
        <van-icon
          class="van-notice-bar__right-icon"
          name="arrow"
        />
      </navigator>
      <slot
        v-else
        name="right-icon"
      />
    </view>
  </uni-shadow-root>
</template>
<script>
import VanIcon from '../press-icon-plus/press-icon-plus.vue';
import { getRect, requestAnimationFrame } from '../common/utils';
import utils from '../wxs-js/utils';
import computed from './computed';
import { defaultProps, defaultOptions } from '../common/press-component';

export default {
  options: {
    ...defaultOptions,
  },
  components: {
    VanIcon,
  },
  props: {
    text: {
      type: String,
      default: '',
      // observer: 'init',
    },
    mode: {
      type: String,
      default: '',
    },
    url: {
      type: String,
      default: '',
    },
    openType: {
      type: String,
      default: 'navigate',
    },
    delay: {
      type: Number,
      default: 1,
    },
    speed: {
      type: Number,
      default: 60,
      // observer: 'init',
    },
    scrollable: {
      type: Boolean,
      default: false,
    },
    leftIcon: {
      type: String,
      default: '',
    },
    color: { type: String, default: '' },
    backgroundColor: { type: String, default: '' },
    background: { type: String, default: '' },
    wrapable: Boolean,
    ...defaultProps,
  },
  data() {
    return {
      show: true,
      animationData: {}, // TODO: 纯H5模式下需要重构
    };
  },
  computed: {
    noticeBarClass() {
      const { mode, wrapable, customClass } = this;
      return `${customClass} ${utils.bem('notice-bar', { withicon: mode, wrapable })}`;
    },
    noticeBarStyle() {
      const { color, backgroundColor, background } = this;
      return computed.rootStyle({ color, backgroundColor, background });
    },
  },
  watch: {
    text: {
      handler() {
        this.init();
      },
    },
    speed: {
      handler() {
        this.init();
      },
    },
  },
  created() {
    this.resetAnimation = wx.createAnimation({
      duration: 0,
      timingFunction: 'linear',
    });
  },
  destroyed() {
    this.timer && clearTimeout(this.timer);
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      requestAnimationFrame(() => {
        Promise.all([
          getRect(this, '.van-notice-bar__content'),
          getRect(this, '.van-notice-bar__wrap'),
        ]).then((rects) => {
          const [contentRect, wrapRect] = rects;
          const { speed, scrollable, delay } = this;
          if (contentRect == null
                        || wrapRect == null
                        || !contentRect.width
                        || !wrapRect.width
                        || scrollable === false) {
            return;
          }
          if (scrollable || wrapRect.width < contentRect.width) {
            const duration = ((wrapRect.width + contentRect.width) / speed) * 1000;
            this.wrapWidth = wrapRect.width;
            this.contentWidth = contentRect.width;
            this.duration = duration;
            this.animation = wx.createAnimation({
              duration,
              timingFunction: 'linear',
              delay,
            });
            this.scroll(true);
          }
        });
      });
    },
    scroll(isInit = false) {
      this.timer && clearTimeout(this.timer);
      this.timer = null;
      this.animationData = this.resetAnimation
        .translateX(isInit ? 0 : this.wrapWidth)
        .step()
        .export();
      // });
      requestAnimationFrame(() => {
        this.animationData = this.animation
          .translateX(-this.contentWidth)
          .step()
          .export();
        // });
      });
      this.timer = setTimeout(() => {
        this.scroll();
      }, this.duration);
    },
    onClickIcon(event) {
      if (this.mode === 'closeable') {
        this.timer && clearTimeout(this.timer);
        this.timer = null;
        this.show = false;
        this.$emit('close', event.detail);
      }
    },
    onClick(event) {
      this.$emit('click', event);
    },
  },
};
</script>
<style platform="mp-weixin" lang="scss">
@import "../common/index.scss";
.van-notice-bar {
  align-items: center;
  background-color: var(--notice-bar-background-color, #fffbe8);
  color: var(--notice-bar-text-color, #ed6a0c);
  display: flex;
  font-size: var(--notice-bar-font-size, 14px);
  height: var(--notice-bar-height, 40px);
  line-height: var(--notice-bar-line-height, 24px);
  padding: var(--notice-bar-padding, 0 16px);
}
.van-notice-bar--withicon {
  padding-right: 40px;
  position: relative;
}
.van-notice-bar--wrapable {
  height: auto;
  padding: var(--notice-bar-wrapable-padding, 8px 16px);
}
.van-notice-bar--wrapable .van-notice-bar__wrap {
  height: auto;
}
.van-notice-bar--wrapable .van-notice-bar__content {
  position: relative;
  white-space: normal;
}
.van-notice-bar__left-icon {
  align-items: center;
  display: flex;
  margin-right: 4px;
  vertical-align: middle;
}
.van-notice-bar__left-icon,
.van-notice-bar__right-icon {
  font-size: var(--notice-bar-icon-size, 16px);
  min-width: var(--notice-bar-icon-min-width, 22px);
}
.van-notice-bar__right-icon {
  position: absolute;
  right: 15px;
  top: 10px;
}
.van-notice-bar__wrap {
  flex: 1;
  height: var(--notice-bar-line-height, 24px);
  overflow: hidden;
  position: relative;

  // 【修改点】增加垂直居中
  display: flex;
  align-items: center;
}
.van-notice-bar__content {
  position: absolute;
  white-space: nowrap;
}
.van-notice-bar__content.van-ellipsis {
  max-width: 100%;
}
</style>

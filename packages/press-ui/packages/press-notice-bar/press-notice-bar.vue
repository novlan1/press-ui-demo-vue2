<template>
  <uni-shadow-root class="vant-notice-bar-index">
    <div
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

      <div class="van-notice-bar__wrap">
        <!-- :animation="animationData" -->
        <div
          :class="'van-notice-bar__content '+(scrollable === false && !wrapable ? 'van-ellipsis' : '')"
          :style="animationStyle"
        >
          {{ text }}
          <slot v-if="(!text)" />
        </div>
      </div>

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
    </div>
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

      duration: 0,
      animationDuration: 0,
      contentWidth: 0,
      translateX: 0,
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
    animationStyle() {
      const { animationDuration, delay, translateX } = this;
      const res = [
        `transform: translateX(${translateX}px);`,
        `transition: -webkit-transform ${animationDuration}ms linear ${delay}ms, transform ${animationDuration}ms linear ${delay}ms;`,
        'transform-origin: 50% 50% 0px;',
      ].join(' ');

      return res;
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
    this.resetAnimation = uni.createAnimation({
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
            this.animation = uni.createAnimation({
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

      this.translateX = isInit ? 0 : this.wrapWidth;
      this.animationDuration = 0;
      // this.animationData = this.resetAnimation
      //   .translateX(isInit ? 0 : this.wrapWidth)
      //   .step()
      //   .export();

      requestAnimationFrame(() => {
        this.translateX = -this.contentWidth;
        this.animationDuration = this.duration;
        // this.animationData = this.animation
        //   .translateX(-this.contentWidth)
        //   .step()
        //   .export();
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
@import "../common/style/var.scss";

.van-notice-bar {
  display: flex;
  align-items: center;
  height: var(--notice-bar-height, $notice-bar-height);
  padding: var(--notice-bar-padding, $notice-bar-padding);
  font-size: var(--notice-bar-font-size, $notice-bar-font-size);
  color: var(--notice-bar-text-color, $notice-bar-text-color);
  line-height: var(--notice-bar-line-height, $notice-bar-line-height);
  background-color: var(
    --notice-bar-background-color,
    $notice-bar-background-color
  );

  &--withicon {
    position: relative;
    padding-right: 40px;
  }

  &--wrapable {
    height: auto;
    padding: var(--notice-bar-wrapable-padding, $notice-bar-wrapable-padding);

    .van-notice-bar {
      &__wrap {
        height: auto;
      }

      &__content {
        position: relative;
        white-space: normal;
      }
    }
  }

  &__left-icon {
    display: flex;
    align-items: center;
    margin-right: 4px;
    vertical-align: middle;
    font-size: var(--notice-bar-icon-size, $notice-bar-icon-size);
    min-width: var(--notice-bar-icon-min-width, $notice-bar-icon-min-width);
  }

  &__right-icon {
    position: absolute;
    top: 10px;
    right: 15px;
    font-size: var(--notice-bar-icon-size, $notice-bar-icon-size);
    min-width: var(--notice-bar-icon-min-width, $notice-bar-icon-min-width);
  }

  &__wrap {
    position: relative;
    flex: 1;
    overflow: hidden;
    height: var(--notice-bar-line-height, $notice-bar-line-height);

    // 【修改点】增加垂直居中
    display: flex;
    align-items: center;
  }

  &__content {
    position: absolute;
    white-space: nowrap;

    &.van-ellipsis {
      max-width: 100%;
    }
  }
}
</style>

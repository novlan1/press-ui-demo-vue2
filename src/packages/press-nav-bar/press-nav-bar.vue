<template>
  <uni-shadow-root class="vant-nav-bar-index">
    <div
      v-if="fixed && placeholder"
      :style="'height: '+(height)+'px;'"
    />

    <div
      :class="navBarClass"
      :style="navBarStyle"
    >
      <div class="van-nav-bar__content">
        <div
          class="van-nav-bar__left"
          @click="onClickLeft"
        >
          <block v-if="leftArrow || leftText">
            <van-icon
              v-if="leftArrow"
              size="16px"
              name="arrow-left"
              custom-class="van-nav-bar__arrow"
            />
            <div
              v-if="leftText"
              class="van-nav-bar__text"
              hover-class="van-nav-bar__text--hover"
              hover-stay-time="70"
            >
              {{ leftText }}
            </div>
          </block>
          <slot
            v-else
            name="left"
          />
        </div>
        <div class="van-nav-bar__title title-class van-ellipsis">
          <block v-if="title">
            {{ title }}
          </block>
          <slot
            v-else
            name="title"
          />
        </div>
        <div
          class="van-nav-bar__right"
          @click="onClickRight"
        >
          <div
            v-if="rightText"
            class="van-nav-bar__text"
            hover-class="van-nav-bar__text--hover"
            hover-stay-time="70"
          >
            {{ rightText }}
          </div>
          <slot
            v-else
            name="right"
          />
        </div>
      </div>
    </div>
  </uni-shadow-root>
</template>
<script>
import VanIcon from '../press-icon-plus/press-icon-plus.vue';
import { getRect, getSystemInfoSync } from '../common/utils';
import utils from '../wxs-js/utils';
import computed from './computed';

export default {
  classes: ['title-class'],
  components: {
    VanIcon,
  },
  props: {
    title: { type: String, default: '' },
    fixed: {
      type: Boolean,
      // observer: 'setHeight',
    },
    placeholder: {
      type: Boolean,
      // observer: 'setHeight',
    },
    leftText: { type: String, default: '' },
    rightText: { type: String, default: '' },
    customStyle: { type: String, default: '' },
    leftArrow: Boolean,
    border: {
      type: Boolean,
      default: true,
    },
    zIndex: {
      type: Number,
      default: 1,
    },
    safeAreaInsetTop: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      height: 46,
    };
  },
  computed: {
    navBarClass() {
      const { border, fixed } = this;
      return `${utils.bem('nav-bar', { fixed })} custom-class ${border ? 'van-hairline--bottom' : ''}`;
    },
    navBarStyle() {
      const { zIndex, statusBarHeight, safeAreaInsetTop, customStyle } = this;
      return `${computed.barStyle({ zIndex, statusBarHeight, safeAreaInsetTop })}; ${customStyle}`;
    },
  },
  watch: {
    fixed: {
      handler() {
        this.setHeight();
      },
    },
    placeholder: {
      handler() {
        this.setHeight();
      },
    },
  },
  created() {
    const { statusBarHeight } = getSystemInfoSync();
    this.statusBarHeight = statusBarHeight;
    this.height = 46 + statusBarHeight;
    // this.setData({
    //   statusBarHeight,
    //   height: 46 + statusBarHeight,
    // });
  },
  mounted() {
    this.setHeight();
  },
  methods: {
    onClickLeft() {
      this.$emit('click-left');
    },
    onClickRight() {
      this.$emit('click-right');
    },
    setHeight() {
      if (!this.fixed || !this.placeholder) {
        return;
      }
      wx.nextTick(() => {
        getRect(this, '.van-nav-bar').then((res) => {
          if (res && 'height' in res) {
            this.height = res.height;
            // this.setData({ height: res.height });
          }
        });
      });
    },
  },
};

</script>
<style platform="mp-weixin" lang="scss">
@import "../common/index.scss";
@import "../common/style/var.scss";

.van-nav-bar {
  position: relative;
  text-align: center;
  user-select: none;
  height: var(--nav-bar-height, $nav-bar-height);
  line-height: var(--nav-bar-height, $nav-bar-height);
  background-color: var(--nav-bar-background-color, $nav-bar-background-color);
  box-sizing: content-box;

  &__content {
    position: relative;
    height: 100%;

    // 【修改点】垂直居中
    display: flex;
    align-items: center;
  }

  &__text {
    display: inline-block;
    vertical-align: middle;
    margin: 0 calc(-1 * var(--padding-md, $padding-md));
    padding: 0 var(--padding-md, $padding-md);
    color: var(--nav-bar-text-color, $nav-bar-text-color);

    &--hover {
      background-color: $active-color;
    }
  }

  &__arrow {
    vertical-align: middle;
    font-size: var(--nav-bar-arrow-size, $nav-bar-arrow-size) !important;
    color: var(--nav-bar-icon-color, $nav-bar-icon-color) !important;

    + .van-nav-bar__text {
      margin-left: -20px;
      padding-left: 25px;
    }
  }

  &--fixed {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
  }

  &__title {
    max-width: 60%;
    margin: 0 auto;
    color: var(--nav-bar-title-text-color, $nav-bar-title-text-color);
    font-weight: var(--font-weight-bold, $font-weight-bold);
    font-size: var(--nav-bar-title-font-size, $nav-bar-title-font-size);
  }

  &__left,
  &__right {
    position: absolute;
    top: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    font-size: var(--font-size-md, $font-size-md);
  }

  &__left {
    left: var(--padding-md, $padding-md);
  }

  &__right {
    right: var(--padding-md, $padding-md);
  }
}
</style>

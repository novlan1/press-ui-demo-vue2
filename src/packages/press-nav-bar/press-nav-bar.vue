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
.van-nav-bar {
  background-color: var(--nav-bar-background-color, #fff);
  box-sizing: initial;
  height: var(--nav-bar-height, 46px);
  line-height: var(--nav-bar-height, 46px);
  position: relative;
  text-align: center;
  -webkit-user-select: none;
  user-select: none;
}
.van-nav-bar__content {
  height: 100%;
  position: relative;

  // 【修改点】垂直居中
  display: flex;
  align-items: center;
}
.van-nav-bar__text {
  color: var(--nav-bar-text-color, #1989fa);
  display: inline-block;
  margin: 0 calc(var(--padding-md, 16px) * -1);
  padding: 0 var(--padding-md, 16px);
  vertical-align: middle;
}
.van-nav-bar__text--hover {
  background-color: #f2f3f5;
}
.van-nav-bar__arrow {
  color: var(--nav-bar-icon-color, #1989fa) !important;
  font-size: var(--nav-bar-arrow-size, 16px) !important;
  vertical-align: middle;
}
.van-nav-bar__arrow + .van-nav-bar__text {
  margin-left: -20px;
  padding-left: 25px;
}
.van-nav-bar--fixed {
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
}
.van-nav-bar__title {
  color: var(--nav-bar-title-text-color, #323233);
  font-size: var(--nav-bar-title-font-size, 16px);
  font-weight: var(--font-weight-bold, 500);
  margin: 0 auto;
  max-width: 60%;
}
.van-nav-bar__left,
.van-nav-bar__right {
  align-items: center;
  bottom: 0;
  display: flex;
  font-size: var(--font-size-md, 14px);
  position: absolute;
  top: 0;
}
.van-nav-bar__left {
  left: var(--padding-md, 16px);
}
.van-nav-bar__right {
  right: var(--padding-md, 16px);
}
</style>

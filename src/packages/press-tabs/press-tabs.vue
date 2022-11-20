<template>
  <view :class="tabsClass">
    <van-sticky
      :disabled="(!sticky)"
      :z-index="zIndex"
      :offset-top="offsetTop"
      :container="container"
      @scroll="onTouchScroll"
    >
      <view :class="tabsWrapClass">
        <slot name="nav-left" />

        <scroll-view
          :scroll-x="scrollable"
          :scroll-with-animation="scrollWithAnimation"
          :scroll-left="scrollLeft"
          :class="tabScrollClass"
          :style="color ? 'border-color: ' + color : ''"
        >
          <view
            :class="navClass"
            :style="navStyle"
          >
            <view
              v-if="type === 'line'"
              class="van-tabs__line"
              :style="lineStyle"
            />
            <view
              v-for="(item,index) in (tabs)"
              :key="item.index"
              :data-index="index"
              :class="[
                'tab-class',
                'van-tab',
                {
                  'tab-active-class': index === currentIndex,
                  'van-ellipsis': ellipsis,
                  'van-tab--active': index === currentIndex,
                  'van-tab--disabled': item.disabled,
                  'van-tab--complete': !ellipsis,
                }
              ]"
              :style="type === 'card'? {
                borderColor: color,
                backgroundColor: !item.disabled && active ? color : null,
                color: (index === currentIndex ? titleActiveColor : titleInactiveColor)
                  || (!item.disabled && !active ? color : null),
                flexBasis: realEllipsis ? `${88 / swipeThreshold}%` : null,
              }: {
                color: index === currentIndex ? titleActiveColor : titleInactiveColor,
                flexBasis: realEllipsis ? `${88 / swipeThreshold}%` : null,
              }"
              @click="onTap"
            >
              <view
                :class="ellipsis ? 'van-ellipsis' : ''"
                :style="item.titleStyle"
              >
                {{ item.title }}
                <van-info
                  v-if="item.info !== null || item.dot"
                  :info="item.info"
                  :dot="item.dot"
                  custom-class="van-tab__title__info"
                />
              </view>
            </view>
          </view>
        </scroll-view>

        <slot name="nav-right" />
      </view>
    </van-sticky>

    <view
      class="van-tabs__content"
      @touchstart="onTouchStart"
      @touchmove="onTouchMove"
      @touchend="onTouchEnd"
      @touchcancel="onTouchEnd"
    >
      <view
        :class="trackClass"
        :style="trackStyle"
      >
        <slot />
      </view>
    </view>
  </view>
</template>
<script>
import VanInfo from '../press-info/press-info.vue';
import VanSticky from '../press-sticky/press-sticky.vue';

import { touch } from '../mixins/touch';

import { getAllRect, getRect, groupSetData, nextTick, requestAnimationFrame } from '../common/utils';
import { isDef } from '../common/validator';
// import { useChildren } from '../common/relation';
import { ParentMixin } from '../mixins/relation';
import utils from '../wxs-js/utils';
import computed from './index.js';

const PARENT = 'vanTabs';

export default {
  components: {
    VanInfo,
    VanSticky,
  },
  mixins: [
    // #ifndef H5
    // useChildren('tabs').mixin,
    // #endif

    touch,

    ParentMixin(PARENT),
  ],
  classes: ['nav-class', 'tab-class', 'tab-active-class', 'line-class'],
  // relation: useChildren('tab', function () {
  //   this.updateTabs();
  // }),
  props: {
    sticky: {
      type: Boolean,
      default: false,
    },
    border: {
      type: Boolean,
      default: false,
    },
    swipeable: {
      type: Boolean,
      default: false,
    },
    titleActiveColor: {
      type: String,
      default: '',
    },
    titleInactiveColor: {
      type: String,
      default: '',
    },
    color: {
      type: String,
      default: '',
    },
    animated: {
      type: Boolean,
      default: false,
    },
    lineWidth: {
      type: [Number, null],
      default: 40,
      // observer: 'resize',
    },
    lineHeight: {
      type: [Number, null],
      default: -1,
    },
    active: {
      type: [Number, null],
      default: 0,
      // observer(name) {
      //   if (name !== this.getCurrentName()) {
      //     this.setCurrentIndexByName(name);
      //   }
      // },
    },
    type: {
      type: String,
      default: 'line',
    },
    ellipsis: {
      type: Boolean,
      default: true,
    },
    duration: {
      type: Number,
      default: 0.3,
    },
    zIndex: {
      type: Number,
      default: 1,
    },
    swipeThreshold: {
      type: Number,
      default: 5,
      // observer(value) {
      //   this.setData({
      //     scrollable: this.children.length > value || !this.ellipsis,
      //   });
      // },
    },
    offsetTop: {
      type: Number,
      default: 0,
    },
    lazyRender: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      tabs: [],
      scrollLeft: 0,
      scrollable: false,
      currentIndex: 0,
      container: null,
      skipTransition: true,
      scrollWithAnimation: false,
      lineOffsetLeft: 0,

      computed,
      utils,
    };
  },
  computed: {
    tabsClass() {
      const { type, customClass  } = this;
      return `${utils.bem('tabs', [type])} ${customClass}`;
    },
    tabsWrapClass() {
      const { scrollable, type, border } = this;
      return `${utils.bem('tabs__wrap', { scrollable })} ${type === 'line' && border ? 'van-hairline--top-bottom' : ''}`;
    },
    tabScrollClass() {
      const { type } = this;
      return utils.bem('tabs__scroll', [type]);
    },
    navClass() {
      const { type, ellipsis } = this;
      return `${utils.bem('tabs__nav', [type, { complete: !ellipsis }])} nav-class`;
    },
    navStyle() {
      const { color, type } = this;
      return computed.navStyle(color, type);
    },
    lineStyle() {
      const { color, lineOffsetLeft, lineHeight, skipTransition, duration, lineWidth } = this;
      return computed.lineStyle({ color, lineOffsetLeft, lineHeight, skipTransition, duration, lineWidth });
    },
    trackClass() {
      const { animated } = this;
      return `${utils.bem('tabs__track', [{ animated }])} van-tabs__track`;
    },
    trackStyle() {
      const { duration, currentIndex, animated } = this;
      return computed.trackStyle({ duration, currentIndex, animated });
    },
    realEllipsis() {
      return this.scrollable && this.ellipsis;
    },
  },
  watch: {
    animated: {
      handler() {
        this.children.forEach((child, index) => child.updateRender(index === this.currentIndex, this));
      },
    },
    lineWidth: {
      handler() {
        this.resize();
      },
    },
    active: {
      handler(name) {
        if (name !== this.getCurrentName()) {
          this.setCurrentIndexByName(name);
        }
      },
      // immediate: true,
    },
    swipeThreshold: {
      handler(value) {
        this.setData({
          scrollable: this.children.length > value || !this.ellipsis,
        });
      },
    },
  },
  created() {
    this.children = [];
  },
  mounted() {
    requestAnimationFrame(() => {
      this.swiping = true;
      this.container = () => this.createSelectorQuery().select('.van-tabs');

      this.updateTabs();
      this.resize();
      this.scrollIntoView();
    });
    this.$nextTick(() => {
      // this.updateTabs();
      this.resize();
    });
  },
  methods: {
    setData(data) {
      Object.keys(data).forEach((key) => {
        this[key] = data[key];
      });
    },
    updateTabs() {
      const { children = [] } = this;
      this.tabs = children.map(child => ({
        title: child.title,
        index: child.index,
        disabled: child.disabled,
        info: child.info,
        dot: child.dot,
        titleStyle: child.titleStyle,
      }));
      this.scrollable = children.length > this.swipeThreshold || !this.ellipsis;
      this.setCurrentIndexByName(this.active || this.getCurrentName());
    },
    trigger(eventName, child) {
      const { currentIndex } = this;
      const currentChild = child || this.children[currentIndex];
      if (!isDef(currentChild)) {
        return;
      }
      this.$emit(eventName, {
        index: currentChild.index,
        name: currentChild.getComputedName(),
        title: currentChild.title,
      });
    },
    onTap(event) {
      const { index } = event.currentTarget.dataset;
      const child = this.children[index];
      if (child.disabled) {
        this.trigger('disabled', child);
      } else {
        this.setCurrentIndex(index);
        nextTick(() => {
          this.trigger('click');
        });
      }
    },
    // correct the index of active tab
    setCurrentIndexByName(name) {
      const { children = [] } = this;
      const matched = children.filter(child => child.getComputedName() === name);
      if (matched.length) {
        this.setCurrentIndex(matched[0].index);
      }
    },
    setCurrentIndex(currentIndex) {
      const { children = [] } = this;
      if (!isDef(currentIndex)
                || currentIndex >= children.length
                || currentIndex < 0) {
        return;
      }
      groupSetData(this, () => {
        children.forEach((item, index) => {
          const active = index === currentIndex;
          if (active !== item.active || !item.initialled) {
            item.updateRender(active, this);
          }
        });
      });
      if (currentIndex === this.currentIndex) {
        return;
      }
      const shouldEmitChange = this.currentIndex !== null;
      this.setData({ currentIndex });

      this.$forceUpdate();

      requestAnimationFrame(() => {
        this.resize();
        this.scrollIntoView();
      });
      nextTick(() => {
        this.trigger('input');
        if (shouldEmitChange) {
          this.trigger('change');
        }
      });
    },
    getCurrentName() {
      const activeTab = this.children[this.currentIndex];
      if (activeTab) {
        return activeTab.getComputedName();
      }
    },
    resize() {
      if (this.type !== 'line') {
        return;
      }
      const { currentIndex, ellipsis, skipTransition } = this;
      Promise.all([
        getAllRect(this, '.van-tab'),
        getRect(this, '.van-tabs__line'),
      ]).then(([rects = [], lineRect]) => {
        const rect = rects[currentIndex];
        if (rect == null) {
          return;
        }

        let lineOffsetLeft = rects
          .slice(0, currentIndex)
          .reduce((prev, curr) => prev + curr.width, 0);
        lineOffsetLeft
                    += (rect.width - lineRect.width) / 2 + (ellipsis ? 0 : 8);

        this.setData({ lineOffsetLeft });

        this.swiping = true;
        if (skipTransition) {
          nextTick(() => {
            this.setData({ skipTransition: false });
          });
        }
      })
        .catch((err) => {
          console.log('err', err);
        });
    },
    // scroll active tab into view
    scrollIntoView() {
      const { currentIndex, scrollable, scrollWithAnimation } = this;
      if (!scrollable) {
        return;
      }
      Promise.all([
        getAllRect(this, '.van-tab'),
        getRect(this, '.van-tabs__nav'),
      ]).then(([tabRects, navRect]) => {
        const tabRect = tabRects[currentIndex];
        const offsetLeft = tabRects
          .slice(0, currentIndex)
          .reduce((prev, curr) => prev + curr.width, 0);
        this.setData({
          scrollLeft: offsetLeft - (navRect.width - tabRect.width) / 2,
        });
        if (!scrollWithAnimation) {
          nextTick(() => {
            this.setData({ scrollWithAnimation: true });
          });
        }
      })
        .catch((err) => {
          console.log('error', err);
        });
    },
    onTouchScroll(event) {
      this.$emit('scroll', event.detail);
    },
    onTouchStart(event) {
      if (!this.swipeable) return;
      this.swiping = true;
      this.touchStart(event);
    },
    onTouchMove(event) {
      if (!this.swipeable || !this.swiping) return;
      this.touchMove(event);
    },
    // watch swipe touch end
    onTouchEnd() {
      if (!this.swipeable || !this.swiping) return;
      const { direction, deltaX, offsetX } = this;
      const minSwipeDistance = 50;
      if (direction === 'horizontal' && offsetX >= minSwipeDistance) {
        const index = this.getAvailableTab(deltaX);
        if (index !== -1) {
          this.setCurrentIndex(index);
        }
      }
      this.swiping = false;
    },
    getAvailableTab(direction) {
      const { tabs, currentIndex } = this;
      const step = direction > 0 ? -1 : 1;
      for (let i = step; currentIndex + i < tabs.length && currentIndex + i >= 0; i += step) {
        const index = currentIndex + i;
        if (index >= 0
                    && index < tabs.length
                    && tabs[index]
                    && !tabs[index].disabled) {
          return index;
        }
      }
      return -1;
    },
  },
// });
};
</script>
<style lang="scss">
@import "../common/index.scss";
.van-tabs {
  -webkit-tap-highlight-color: transparent;
  position: relative;
}
.van-tabs__wrap {
  display: flex;
  overflow: hidden;
}
.van-tabs__wrap--scrollable .van-tab {
  flex: 0 0 22%;
}
.van-tabs__wrap--scrollable .van-tab--complete {
  flex: 1 0 auto !important;
  padding: 0 12px;
}
.van-tabs__wrap--scrollable .van-tabs__nav--complete {
  padding-left: 8px;
  padding-right: 8px;
}
.van-tabs__scroll {
  background-color: var(--tabs-nav-background-color, #fff);
}
.van-tabs__scroll--line {
  box-sizing: initial;
  height: calc(100% + 15px);
}
.van-tabs__scroll--card {
  border: 1px solid var(--tabs-default-color, #ee0a24);
  border-radius: 2px;
  box-sizing: border-box;
  margin: 0 var(--padding-md, 16px);
  width: calc(100% - var(--padding-md, 16px) * 2);
}
.van-tabs__scroll::-webkit-scrollbar {
  display: none;
}
.van-tabs__nav {
  display: flex;
  position: relative;
  -webkit-user-select: none;
  user-select: none;
}
.van-tabs__nav--card {
  box-sizing: border-box;
  height: var(--tabs-card-height, 30px);
}
.van-tabs__nav--card .van-tab {
  border-right: 1px solid var(--tabs-default-color, #ee0a24);
  color: var(--tabs-default-color, #ee0a24);
  line-height: calc(var(--tabs-card-height, 30px) - 2px);
}
.van-tabs__nav--card .van-tab:last-child {
  border-right: none;
}
.van-tabs__nav--card .van-tab.van-tab--active {
  background-color: var(--tabs-default-color, #ee0a24);
  color: #fff;
}
.van-tabs__nav--card .van-tab--disabled {
  color: var(--tab-disabled-text-color, #c8c9cc);
}
.van-tabs__line {
  background-color: var(--tabs-bottom-bar-color, #ee0a24);
  border-radius: var(--tabs-bottom-bar-height, 3px);
  bottom: 0;
  height: var(--tabs-bottom-bar-height, 3px);
  left: 0;
  position: absolute;
  z-index: 1;
}
.van-tabs__track {
  height: 100%;
  position: relative;
  width: 100%;
}
.van-tabs__track--animated {
  display: flex;
  transition-property: left;
}
.van-tabs__content {
  overflow: hidden;
}
.van-tabs--line .van-tabs__wrap {
  height: var(--tabs-line-height, 44px);
}
.van-tabs--card .van-tabs__wrap {
  height: var(--tabs-card-height, 30px);
}
.van-tab {
  box-sizing: border-box;
  color: var(--tab-text-color, #646566);
  cursor: pointer;
  flex: 1;
  font-size: var(--tab-font-size, 14px);
  line-height: var(--tabs-line-height, 44px);
  min-width: 0;
  padding: 0 5px;
  position: relative;
  text-align: center;
}
.van-tab--active {
  color: var(--tab-active-text-color, #323233);
  font-weight: var(--font-weight-bold, 500);
}
.van-tab--disabled {
  color: var(--tab-disabled-text-color, #c8c9cc);
}
.van-tab__title__info {
  display: inline-block;
  position: relative !important;
  top: -1px !important;
  transform: translateX(0) !important;
}
</style>

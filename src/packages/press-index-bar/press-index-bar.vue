<template>
  <uni-shadow-root class="vant-index-bar-index">
    <view class="van-index-bar">
      <slot />

      <view
        v-if="showSidebar"
        class="van-index-bar__sidebar"
        @click.stop.prevent="onClick"
        @touchmove.stop.prevent="onTouchMove"
        @touchend.stop.prevent="onTouchStop"
        @touchcancel.stop.prevent="onTouchStop"
      >
        <view
          v-for="(item,index) in (indexList)"
          :key="item.index"
          class="van-index-bar__index"
          :style="'z-index: '+(zIndex + 1)+'; color: '+(activeAnchorIndex === index ? highlightColor : '')"
          :data-index="index"
        >
          {{ item }}
        </view>
      </view>
    </view>
  </uni-shadow-root>
</template>

<script>

import { GREEN } from '../common/color';
// import { useChildren } from '../common/relation';
import { getRect } from '../common/utils';
import { isDef } from '../common/validator';
import { pageScrollMixin } from '../mixins/page-scroll';
import { defaultOptions, defaultProps } from '../common/press-component';
import { ParentMixin } from '../mixins/relation';
import { PARENT_INDEX_BAR  as PARENT } from '../common/parent-map';
import { BindEventMixin } from '../mixins/bind-event';
import { getScroller } from '../common/dom/scroll';


const indexList = () => {
  const indexList = [];
  const charCodeOfA = 'A'.charCodeAt(0);
  for (let i = 0; i < 26; i++) {
    indexList.push(String.fromCharCode(charCodeOfA + i));
  }
  return indexList;
};


export default {
  options: {
    ...defaultOptions,
    styleIsolation: 'shared',
  },
  // mixins: [
  // ],
  // relation: useChildren('index-anchor', function () {
  //   this.updateData();
  // }),
  mixins: [
    // #ifndef H5
    pageScrollMixin(function (event) {
      this.scrollTop = event ? event.scrollTop : 0;
      // this.scrollTop = (event === null || event === void 0 ? void 0 : event.scrollTop) || 0;
      this.onScroll();
    }),
    // #endif

    // #ifdef H5
    BindEventMixin(function (bind /* isBind*/) {
      if (!this.scroller) {
        this.scroller = getScroller(this.$el);
      }
      console.log('scroller,', this.scroller);

      // if (this.observer) {
      //   const method = isBind ? 'observe' : 'unobserve';
      //   this.observer[method](this.$el);
      // }

      bind(this.scroller, 'scroll', this.onScroll, true);
      bind(this.scroller, 'touchmove', this.onScroll, true);
      this.onScroll();
    }),
    // #endif

    ParentMixin(PARENT),
  ],
  props: {
    sticky: {
      type: Boolean,
      default: true,
    },
    zIndex: {
      type: Number,
      default: 1,
    },
    highlightColor: {
      type: String,
      default: GREEN,
    },
    stickyOffsetTop: {
      type: Number,
      default: 0,
    },
    indexList: {
      type: Array,
      default: () => indexList(),
    },
    ...defaultProps,
  },
  data() {
    return {
      activeAnchorIndex: null,
      showSidebar: false,

      sidebar: {},
    };
  },
  created() {
    this.scrollTop = 0;
    this.children = [];
  },
  mounted() {
    this.updateData();
  },
  methods: {
    setData(data) {
      Object.keys(data).forEach((item) => {
        this[item] = data[item];
      });
    },
    updateData() {
      this.$nextTick(() => {
        if (this.timer != null) {
          clearTimeout(this.timer);
        }
        this.timer = setTimeout(() => {
          this.showSidebar = !!this.children.length;
          // this.setData({
          //   showSidebar: !!this.children.length,
          // });
          this.$nextTick(() => {
            this.setRect().then(() => {
              this.onScroll();
            });
          });
        }, 0);
      });
    },
    setRect() {
      return Promise.all([
        this.setAnchorsRect(),
        this.setListRect(),
        this.setSiderbarRect(),
      ]);
    },
    setAnchorsRect() {
      return Promise.all(this.children.map(anchor => getRect(anchor, '.van-index-anchor-wrapper').then((rect) => {
        Object.assign(anchor, {
          height: rect.height,
          top: rect.top + this.scrollTop,
        });
      })));
    },
    setListRect() {
      return getRect(this, '.van-index-bar').then((rect) => {
        if (!isDef(rect)) {
          return;
        }
        console.log('setListRect.res', rect);
        Object.assign(this, {
          height: rect.height,
          top: rect.top + this.scrollTop,
        });
      });
    },
    setSiderbarRect() {
      return getRect(this, '.van-index-bar__sidebar').then((res) => {
        if (!isDef(res)) {
          return;
        }
        console.log('setSiderbarRect.res', res);
        this.sidebar = {
          height: res.height,
          top: res.top,
        };
      });
    },
    setDiffData({ target, data }) {
      const diffData = {};
      Object.keys(data).forEach((key) => {
        if (target[key] !== data[key]) {
          diffData[key] = data[key];
        }
      });
      if (Object.keys(diffData).length) {
        target.setData(diffData);
      }
    },
    getAnchorRect(anchor) {
      return getRect(anchor, '.van-index-anchor-wrapper').then(rect => ({
        height: rect.height,
        top: rect.top,
      }));
    },
    getActiveAnchorIndex() {
      const { children, scrollTop } = this;
      const { sticky, stickyOffsetTop } = this;
      console.log('tt', this.children, scrollTop, stickyOffsetTop);
      for (let i = this.children.length - 1; i >= 0; i--) {
        const preAnchorHeight = i > 0 ? children[i - 1].height : 0;
        const reachTop = sticky ? preAnchorHeight + stickyOffsetTop : 0;
        if (reachTop + scrollTop >= children[i].top) {
          return i;
        }
      }
      return -1;
    },
    onScroll(event) {
      if (event && event.target) {
        this.scrollTop = event.target.scrollTop;
      }
      console.log('onScroll', event, event?.scrollTop, event?.target?.scrollTop);
      const { children = [], scrollTop } = this;
      if (!children.length) {
        return;
      }
      const { sticky, stickyOffsetTop, zIndex, highlightColor } = this;
      const active = this.getActiveAnchorIndex();
      console.log('active', active);
      this.setDiffData({
        target: this,
        data: {
          activeAnchorIndex: active,
        },
      });
      if (sticky) {
        let isActiveAnchorSticky = false;
        if (active !== -1) {
          isActiveAnchorSticky = children[active].top <= stickyOffsetTop + scrollTop;
        }
        children.forEach((item, index) => {
          if (index === active) {
            let wrapperStyle = '';
            let anchorStyle = `
              color: ${highlightColor};
            `;
            if (isActiveAnchorSticky) {
              wrapperStyle = `
                height: ${children[index].height}px;
              `;
              anchorStyle = `
                position: fixed;
                top: ${stickyOffsetTop}px;
                z-index: ${zIndex};
                color: ${highlightColor};
              `;
            }
            this.setDiffData({
              target: item,
              data: {
                active: true,
                anchorStyle,
                wrapperStyle,
              },
            });
          } else if (index === active - 1) {
            const currentAnchor = children[index];
            const currentOffsetTop = currentAnchor.top;
            const targetOffsetTop = index === children.length - 1
              ? this.top
              : children[index + 1].top;
            const parentOffsetHeight = targetOffsetTop - currentOffsetTop;
            const translateY = parentOffsetHeight - currentAnchor.height;
            const anchorStyle = `
              position: relative;
              transform: translate3d(0, ${translateY}px, 0);
              z-index: ${zIndex};
              color: ${highlightColor};
            `;
            this.setDiffData({
              target: item,
              data: {
                active: true,
                anchorStyle,
              },
            });
          } else {
            this.setDiffData({
              target: item,
              data: {
                active: false,
                anchorStyle: '',
                wrapperStyle: '',
              },
            });
          }
        });
      }
    },
    onClick(event) {
      console.log('event', event);
      this.scrollToAnchor(+event.target.dataset.index);
    },
    onTouchMove(event) {
      const sidebarLength = this.children.length;
      const touch = event.touches[0];
      const itemHeight = this.sidebar.height / sidebarLength;
      let index = Math.floor((touch.clientY - this.sidebar.top) / itemHeight);
      if (index < 0) {
        index = 0;
      } else if (index > sidebarLength - 1) {
        index = sidebarLength - 1;
      }
      console.log('index----', index, sidebarLength);
      this.scrollToAnchor(index);
    },
    onTouchStop() {
      this.scrollToAnchorIndex = null;
    },
    scrollToAnchor(index) {
      console.log('index', index, typeof index, this.scrollToAnchorIndex);
      if (typeof index !== 'number' || this.scrollToAnchorIndex === index) {
        return;
      }
      this.scrollToAnchorIndex = index;
      const anchor = this.children.find(item => item.index === this.indexList[index]);
      console.log('anchor', anchor);
      if (anchor) {
        // #ifdef H5
        anchor.$el.scrollIntoView(this.scrollTop);
        // #endif

        // #ifndef H5
        anchor.scrollIntoView(this.scrollTop);
        // #endif

        this.$emit('select', anchor.index);
      }
    },
  },
};

</script>
<style platform="mp-weixin" lang="scss">
@import "../common/index.scss";
@import "../common/style/var.scss";

.van-index-bar {
  position: relative;

  &__sidebar {
    position: fixed;
    top: 50%;
    right: 0;
    display: flex;
    flex-direction: column;
    text-align: center;
    transform: translateY(-50%);
    user-select: none;
  }

  &__index {
    font-weight: 500;
    padding: 0 var(--padding-base, $padding-base) 0
      var(--padding-md, $padding-md);
    font-size: var(--index-bar-index-font-size, $index-bar-index-font-size);
    line-height: var(
      --index-bar-index-line-height,
      $index-bar-index-line-height
    );
  }
}
</style>

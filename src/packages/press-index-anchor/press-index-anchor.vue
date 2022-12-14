<template>
  <uni-shadow-root class="vant-index-anchor-index">
    <view
      class="van-index-anchor-wrapper"
      :style="wrapperStyle"
    >
      <view
        :class="'van-index-anchor '+(active ? 'van-index-anchor--active van-hairline--bottom' : '')"
        :style="anchorStyle"
      >
        <slot v-if="useSlot" />
        <block v-else>
          <text>{{ index }}</text>
        </block>
      </view>
    </view>
  </uni-shadow-root>
</template>

<script>

import { getRect } from '../common/utils';
// import { useParent } from '../common/relation';
import { defaultOptions, defaultProps } from '../common/press-component';
import { ChildrenMixin } from '../mixins/relation';
import { PARENT_INDEX_BAR  as PARENT } from '../common/parent-map';


export default {
  options: {
    ...defaultOptions,
    styleIsolation: 'shared',
  },
  mixins: [
    ChildrenMixin(PARENT, { indexKey: 'tIndex' }),
  ],
  // relation: useParent('index-bar'),
  props: {
    useSlot: Boolean,
    index: {
      type: [Number, String],
      default: '',
    },
    ...defaultProps,
  },
  data() {
    return {
      active: false,
      wrapperStyle: '',
      anchorStyle: '',
    };
  },
  methods: {
    setData(data) {
      Object.keys(data).forEach((item) => {
        this[item] = data[item];
      });
    },
    scrollIntoView(scrollTop) {
      getRect(this, '.van-index-anchor-wrapper').then((rect) => {
        wx.pageScrollTo({
          duration: 0,
          scrollTop: scrollTop + rect.top - this[PARENT].stickyOffsetTop,
        });
      });
    },
  },
};
</script>
<style platform="mp-weixin" lang="scss">
@import "../common/index.scss";

.van-index-anchor {
  background-color: var(--index-anchor-background-color, transparent);
  color: var(--index-anchor-text-color, #323233);
  font-size: var(--index-anchor-font-size, 14px);
  font-weight: var(--index-anchor-font-weight, 500);
  line-height: var(--index-anchor-line-height, 32px);
  padding: var(--index-anchor-padding, 0 16px);
}
.van-index-anchor--active {
  background-color: var(--index-anchor-active-background-color, #fff);
  color: var(--index-anchor-active-text-color, #07c160);
  left: 0;
  right: 0;
}
</style>

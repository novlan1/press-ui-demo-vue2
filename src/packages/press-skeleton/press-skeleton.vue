<template>
  <uni-shadow-root class="vant-skeleton-index">
    <view
      v-if="loading"
      :class="'custom-class '+(utils.bem('skeleton', [{animate}]))"
    >
      <view
        v-if="avatar"
        :class="'avatar-class '+(utils.bem('skeleton__avatar', [avatarShape]))"
        :style="'width:' + avatarSize + ';height:' + avatarSize"
      />
      <view :class="true ? utils.bem('skeleton__content'): ''">
        <view
          v-if="title"
          :class="'title-class '+(utils.bem('skeleton__title'))"
          :style="'width:' + titleWidth"
        />
        <view
          v-for="(item,index) in (rowArray)"
          :key="index"
          :class="'row-class '+(utils.bem('skeleton__row'))"
          :style="'width:' + (isArray ? rowWidth[index] : rowWidth)"
        />
      </view>
    </view>
    <view
      v-else
      :class="true ? utils.bem('skeleton__content') : ''"
    >
      <slot />
    </view>
  </uni-shadow-root>
</template>
<script>
import utils from '../wxs-js/utils';

export default {
  classes: ['avatar-class', 'title-class', 'row-class'],
  props: {
    row: {
      type: Number,
      default: 0,
      // observer(value) {
      //   this.setData({ rowArray: Array.from({ length: value }) });
      // },
    },
    title: Boolean,
    avatar: Boolean,
    loading: {
      type: Boolean,
      default: true,
    },
    animate: {
      type: Boolean,
      default: true,
    },
    avatarSize: {
      type: String,
      default: '32px',
    },
    avatarShape: {
      type: String,
      default: 'round',
    },
    titleWidth: {
      type: String,
      default: '40%',
    },
    rowWidth: {
      type: null,
      default: '100%',
      // observer(val) {
      //   this.setData({ isArray: val instanceof Array });
      // },
    },
  },
  data() {
    return {
      utils,
      isArray: false,
      rowArray: [],
    };
  },
  computed: {

  },
  watch: {
    row: {
      handler(val) {
        this.rowArray = Array.from({ length: val });
      },
      immediate: true,
    },
    rowWidth: {
      handler(val) {
        this.isArray = val instanceof Array;
      },
      immediate: true,
    },
  },
};
</script>

<style platform="mp-weixin" lang="scss">
@import "../common/index.scss";
.van-skeleton {
  box-sizing: border-box;
  display: flex;
  padding: var(--skeleton-padding, 0 16px);
  width: 100%;
}
.van-skeleton__avatar {
  background-color: var(--skeleton-avatar-background-color, #f2f3f5);
  flex-shrink: 0;
  margin-right: var(--padding-md, 16px);
}
.van-skeleton__avatar--round {
  border-radius: 100%;
}
.van-skeleton__content {
  flex: 1;
}
.van-skeleton__avatar + .van-skeleton__content {
  padding-top: var(--padding-xs, 8px);
}
.van-skeleton__row,
.van-skeleton__title {
  background-color: var(--skeleton-row-background-color, #f2f3f5);
  height: var(--skeleton-row-height, 16px);
}
.van-skeleton__title {
  margin: 0;
}
.van-skeleton__row:not(:first-child) {
  margin-top: var(--skeleton-row-margin-top, 12px);
}
.van-skeleton__title + .van-skeleton__row {
  margin-top: 20px;
}
.van-skeleton--animate {
  animation: van-skeleton-blink 1.2s ease-in-out infinite;
}
@keyframes van-skeleton-blink {
  50% {
    opacity: 0.6;
  }
}
</style>

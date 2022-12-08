<template>
  <PlatScrollView
    style="height: 100%"
    :scroll-offset="scrollOffset"
    :scroll-to-element-by-id="scrollToElementById"
    @scrolltolower="scrolltolower"
    @scroll="scroll"
  >
    <slot />
    <p
      v-if="finished==true&&!hideNoMoreText"
      class="loading-bottom"
    >
      {{ finishedText }}
    </p>
    <p
      v-if="loading && !hideLoading"
      class="loading-bottom"
    >
      加载中...
    </p>
  </PlatScrollView>
</template>

<script>
/* eslint-disable import/first */
let PlatScrollView;

// #ifndef H5
import ScrollViewMp from './scroll-view-mp';
PlatScrollView = ScrollViewMp;
// #endif

// #ifdef H5
import ScrollViewWeb from './scroll-view-web';
PlatScrollView = ScrollViewWeb;
// #endif


export default {
  components: { PlatScrollView },
  props: {
    scrollOffset: {
      type: Number,
      default: () => 0,
    },
    finished: {
      type: Boolean,
      default: () => false,
    },
    hideLoading: {  // 是否隐藏loading动画
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: () => false,
    },
    scrollToElementById: { type: String, default: '' },
    hideNoMoreText: {
      type: Boolean,
      default: () => true,
    },
    finishedText: {
      type: String,
      default: () => '没有更多了',
    },
  },
  data() {
    return {};
  },
  mounted() {

  },
  methods: {
    scrolltolower() {
      if (this.finished) {
        return;
      }
      this.$emit('scrolltolower');
      this.$emit('loadmore'); // 监听这个也可以，比较好记
    },
    scroll(...args) {
      this.$emit('scroll', ...args);
    },
  },
};
</script>

<style scoped>
.loading-bottom {
  color: #969799;
  font-size: 14px;
  line-height: 50px;
  text-align: center;
}
</style>

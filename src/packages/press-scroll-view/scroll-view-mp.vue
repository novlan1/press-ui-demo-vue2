<template>
  <scroll-view
    scroll-y="true"
    style="height: 100%"
    :class="customClass"
    :lower-threshold="lowerThreshold"
    :scroll-top="scrollTop"
    :scroll-into-view="scrollToElementById"
    @scrolltolower="scrolltolower"
    @scroll="scroll"
  >
    <slot />
  </scroll-view>
</template>

<script>
import { defaultProps, defaultOptions } from '../common/press-component';


export default {
  options: {
    ...defaultOptions,
  },
  name: 'ScrollViewMp',
  components: {},
  props: {
    lowerThreshold: {
      type: Number,
      default: () => 100,
    },
    scrollOffset: {
      type: Number,
      default: () => 0,
    },
    scrollToElementById: { type: String, default: '' },
    ...defaultProps,
  },
  data() {
    return {
      scrollTop: 0,
      old: {
        scrollTop: 0,
      },
    };
  },
  watch: {
    scrollOffset: {
      handler(newVal) {
        this.scrollTop = this.old.scrollTop;
        this.$nextTick(function () {
          this.scrollTop = newVal;
        });
      },
      immediate: true,
    },
  },
  mounted() {

  },
  methods: {
    scroll(e) {
      this.old.scrollTop = e.detail.scrollTop;
      this.$emit('scroll', e);
      // console.log('3=====>', e.detail.scrollTop);
    },
    scrolltolower() {
      // console.log('===?>lower');
      this.$emit('scrolltolower');
    },
  },
};
</script>

<style scoped>
</style>

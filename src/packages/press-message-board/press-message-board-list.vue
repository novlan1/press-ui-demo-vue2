<template>
  <PressScrollView
    :scroll-offset="scrollOffset"
    style="height: 100%"
  >
    <slot />
  </PressScrollView>
</template>
<script>
import PressScrollView from '../press-scroll-view/press-scroll-view.vue';
import { defaultProps, defaultOptions } from '../common/press-component';

export default {
  options: {
    ...defaultOptions,
    styleIsolation: 'shared',
  },
  components: {
    PressScrollView,
  },
  props: {
    list: {
      type: Array,
      default: () => [],
    },
    captainUid: {
      type: String,
      default: '',
    },
    ...defaultProps,
  },
  data() {
    return {
      scrollOffset: 0,
    };
  },
  mounted() {

  },
  methods: {
    replyClick(...args) {
      this.$emit('replyClick', ...args);
    },
  },
};
</script>
<style lang="scss" scoped></style>

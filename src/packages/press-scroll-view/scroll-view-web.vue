<template>
  <div
    :id="randomId"
    style="height: 100%;overflow-y: auto"
    @scroll="onScroll"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'ScrollViewWeb',
  components: {},
  props: {
    scrollOffset: {
      type: Number,
      default: () => 0,
    },
    scrollToElementById: { type: String, default: '' },
    lowerThreshold: {
      type: Number,
      default: () => 50,
    },
  },
  data() {
    const randomId = `__scrollView_${new Date().getDate()}${Math.random()}`;
    return {
      randomId,
      identifier: randomId,
    };
  },
  watch: {
    scrollOffset: {
      handler(newVal) {
        // console.info('newVal', newVal, this.id);
        const target = document.getElementById(this.identifier);
        if (target) {
          // target.offsetTop = `${newVal}px`;
          target.scrollTo({
            top: newVal,
          });
        }
      },
      immediate: true,
    },
    scrollToElementById: {
      handler(newVal) {
        const target = document.getElementById(newVal);
        if (newVal?.length > 0 && target) {
          document.getElementById(this.identifier).scrollTo({
            top: target.offsetTop,
          });
        }
      },
      immediate: true,
    },
  },
  mounted() {
    if (this.$el.id) this.identifier = this.$el.id;
    this.$nextTick(() => {
      document.getElementById(this.identifier)?.addEventListener('scroll', this.onScroll);
    });
  },
  destroyed() {
    document.getElementById(this.identifier)?.removeEventListener('scroll', this.onScroll);
  },
  methods: {
    onScroll(e) {
      const { scrollTop, clientHeight, scrollHeight } = e.currentTarget;
      if (scrollTop + clientHeight >= scrollHeight - this.lowerThreshold) {
        this.$emit('scrolltolower');
      }
    },
  },
};
</script>

<style scoped>
</style>

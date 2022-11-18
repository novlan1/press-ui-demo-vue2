<template>
  <uni-shadow-root class="vant-overlay-index">
    <van-transition
      v-if="lockScroll"
      :show="show"
      :overlay="true"
      :custom-style="'z-index: '+(zIndex)+'; '+(customStyle)"
      :duration="duration"
      @click.native="onClick"
      @touchmove.native.stop.prevent="noop"
    >
      <slot />
    </van-transition>

    <van-transition
      v-else
      :show="show"
      :overlay="true"
      :custom-style="'z-index: '+(zIndex)+'; '+(customStyle)"
      :duration="duration"
      @click.native="onClick"
    >
      <slot />
    </van-transition>
  </uni-shadow-root>
</template>

<script>
import VanTransition from '../press-transition/press-transition.vue';
// import { VantComponent } from '../common/component';
// global.__wxVueOptions = { components: { 'van-transition': VanTransition } };

// global.__wxRoute = 'vant/overlay/index';
export default {
  components: {
    VanTransition,
  },
  props: {
    show: { type: Boolean, default: false },
    customStyle: { type: String, default: '' },
    duration: {
      type: null,
      default: 300,
    },
    zIndex: {
      type: Number,
      default: 1,
    },
    lockScroll: {
      type: Boolean,
      value: true,
    },
  },
  options: {
    // virtualHost: true,
  },
  methods: {
    onClick() {
      console.log('=====');
      this.$emit('click');
    },
    // for prevent touchmove
    noop() { },
  },
};
</script>
<style lang="scss">
@import "../common/index.scss";
// .vant-overlay-index {
//   color: red;

//   ::v-deep .van-overlay,
//   ::v-deep .van-transition {
//     background-color: var(--overlay-background-color, rgba(0, 0, 0, 0.7));
//     height: 100%;
//     left: 0;
//     position: fixed;
//     top: 0;
//     width: 100%;
//   }
// }
</style>

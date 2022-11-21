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
import { PressComponent } from '../common/press-component';


export default PressComponent({
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
      this.$emit('click');
    },
    // for prevent touchmove
    noop() { },
  },
});
</script>
<style lang="scss">
@import "../common/index.scss";
</style>

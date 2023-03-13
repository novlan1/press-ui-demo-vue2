<!-- 已经废弃 -->
<template>
  <div
    class="press-switch"
    :class="[isOpen === true ? 'press-switch__act' : null]"
    @click="onSwitchChange"
  />
</template>

<script>
import { defaultProps, defaultOptions } from '../common/press-component';

export default {
  options: {
    ...defaultOptions,
    virtualHost: true,
  },
  components: {

  },
  props: {
    ...defaultProps,
    open: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
    };
  },
  computed: {
    isOpen() {
      return this.open;
    },
  },
  mounted() {
  },
  methods: {
    onSwitchChange() {
      this.$emit('onSwitchChange');
    },
  },
};

</script>

<style lang="scss" scoped src="./css/index.scss"></style>

<template>
  <div
    class="press-switch"
    :class="[isOpen === true ? 'press-switch__act' : null]"
    @click="onSwitchChange"
  />
</template>

<script>
export default {
  options: {
    virtualHost: true,
  },
  components: {

  },
  props: {
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

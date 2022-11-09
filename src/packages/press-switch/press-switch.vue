<template>
  <div
    class="btn-switch"
    :class="[isOpen === true ? 'act' : null]"
    @click="handlechange"
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
    open: Boolean,
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
    handlechange() {
      this.$emit('onSwitchChange');
    },
  },
};

</script>

<style lang="scss" scoped src="./css/index.scss"></style>

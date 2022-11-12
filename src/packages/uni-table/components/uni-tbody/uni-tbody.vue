<!-- eslint-disable linebreak-style -->
<!-- eslint-disable vue/no-multiple-template-root -->
<template>
  <!-- #ifdef H5 -->
  <tbody>
    <slot />
  </tbody>
  <!-- #endif -->
  <!-- #ifndef H5 -->
  <view><slot /></view>
  <!-- #endif -->
</template>

<script>
export default {
  name: 'UniBody',
  options: {
    virtualHost: true,
  },
  data() {
    return {

    };
  },
  created() {},
  methods: {},
};
</script>

<style>
</style>

<template>
  <view>
    测试插件
  </view>
</template>

<script>
export default {
  data() {
    return {

    };
  },
  onLoad() {
    const fonts = [];
    const obj = {};
    fonts.forEach((v) => {
      obj[v.name] = `\\u${v.unicode}`;
    });
  },
};
</script>

<style>
</style>

<template>
  <div
    class="tip-match-loading-wrap"
    :style="{background: loadingBg}"
  >
    <img
      :class="loadingScenes == 'btn' ? 'tip-match-btn-loading' : 'tip-match-page-loading'"
      :src="`https://image-1251917893.file.myqcloud.com/Esports/user/img/${loadingScenes}-loading.gif`"
    >
  </div>
</template>
<script>
export default {
  props: {
    // loading背景色，默认透明
    loadingBg: {
      type: String,
      default: '',
      required: false,
    },
    // loading的场景，默认是page，可选项：page/btn
    loadingScenes: {
      type: String,
      default: 'page',
      required: false,
    },
  },
  options: {
    virtualHost: true,
  },
  data() {
    return {
    };
  },
  mounted() {
  },
  methods: {
  },
};

</script>
<style lang="scss" scoped src="./css/index.scss"></style>

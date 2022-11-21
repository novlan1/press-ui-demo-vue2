<template>
  <uni-section
    :title="title"
    type="line"
  >
    <div
      class="section-content"
      :style="sectionStyle"
    >
      <slot />
    </div>
  </uni-section>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    sectionStyle: {
      type: String,
      default: '',
    },
  },
};
</script>
<style scoped lang="scss">
.section-content {
  margin: 0 12px;
}
</style>


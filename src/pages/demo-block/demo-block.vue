<template>
  <uni-section
    :title="title"
    type="line"
  >
    <div class="section-content">
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
  },
};
</script>


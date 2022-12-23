<template>
  <div class="demo-wrap">
    <demo-block title="基础用法">
      <div :style="progressStyle">
        <press-progress :percentage="50" />
      </div>
    </demo-block>

    <demo-block title="线条粗细">
      <div :style="progressStyle">
        <press-progress
          :percentage="50"
          :stroke-width="8"
        />
      </div>
    </demo-block>

    <demo-block title="置灰">
      <div :style="progressStyle">
        <press-progress
          :percentage="50"
          inactive
        />
      </div>
    </demo-block>

    <demo-block title="样式定制">
      <div :style="progressStyle">
        <press-progress
          pivot-text="橙色"
          color="#f2826a"
          :percentage="25"
        />
      </div>

      <div :style="progressStyle">
        <press-progress
          pivot-text="红色"
          color="#ee0a24"
          :percentage="50"
        />
      </div>

      <div :style="progressStyle">
        <press-progress
          :percentage="75"
          pivot-text="紫色"
          pivot-color="#7232dd"
          color="linear-gradient(to right, #be99ff, #7232dd)"
        />
      </div>
    </demo-block>
  </div>
</template>
<script>
import PressProgress from 'src/packages/press-progress/press-progress.vue';


export default {
  components: {
    PressProgress,
  },
  data() {
    return {
      progressStyle: 'margin: 20px 0;',

    };
  },
  methods: {

  },
};
</script>
<style scoped lang="scss">
@import "src/packages/base/mixin.scss";
</style>

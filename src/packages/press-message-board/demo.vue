<template>
  <div class="wrap">
    <PressMessageBoardInput
      @clickInput="clickInput"
    />
  </div>
</template>
<script>
// eslint-disable-next-line import/no-unresolved
import PressMessageBoardInput from '../../../packages/press-message-board/press-message-board-input.vue';
// eslint-disable-next-line import/no-unresolved
// import PressMessageBoardList from '../../../packages/press-message-board/press-message-board-list.vue';


export default {
  components: {
    PressMessageBoardInput,
    // PressMessageBoardList,
  },
  data() {
    return {

    };
  },
  methods: {
    clickInput() {

    },
  },
};
</script>
<style scoped lang="scss">
@import "src/packages/base/mixin.scss";
</style>

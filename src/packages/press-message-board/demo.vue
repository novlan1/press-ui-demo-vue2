<template>
  <div class="wrap">
    <PressMessageBoardInput
      v-model="msgContent"
      :send-btn-enable="sendBtnEnable"
      @clickInput="clickInput"
      @sendMsg="sendMsg"
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
      msgContent: '',
    };
  },
  computed: {
    sendBtnEnable() {
      const res = !!(this.msgContent && this.msgContent.trim().length > 0);
      return res;
    },
  },
  watch: {
    msgContent: {
      handler(val) {
        console.log('val', val);
      },
    },
  },
  methods: {
    clickInput() {

    },
    onChange(value) {
      console.log('onChange.ee', value);
      this.msgContent = value;
    },
    sendMsg() {
      console.log('dd', this.msgContent);
    },
  },
};
</script>
<style scoped lang="scss">
@import "src/packages/base/mixin.scss";
</style>

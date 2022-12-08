<template>
  <div>
    <MessageBoardList />
    <MessageBoardInput />
  </div>
</template>
<script>
import MessageBoardInput from './press-message-board-input.vue';
import MessageBoardList from './press-message-board-list.vue';

export default {
  components: {
    MessageBoardInput,
    MessageBoardList,
  },
  props: {
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
<style lang="scss" scoped src="./index.scss"></style>

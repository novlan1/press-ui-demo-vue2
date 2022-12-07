<template>
  <div class="wrap">
    <PressMessageDetail
      :list="msgList"
    />
  </div>
</template>
<script>
// eslint-disable-next-line import/no-unresolved
import PressMessageDetail from '../../../packages/press-message-detail/press-message-detail.vue';

const MSG_LIST = [
  {
    id: 1,
    msgType: 'TIME',
    content: {
      text: '昨天 11:10',
    },
  },
  {
    id: 2,
    msgType: 'MESSAGE_TEXT',
    avatar: 'https://dummyimage.com/44x44',
    content: {
      text: '123123',
    },
  },
  {
    id: 3,
    msgType: 'MESSAGE_TEXT',
    avatar: 'https://dummyimage.com/44x44',
    content: {
      text: '123123',
    },
  },
  {
    id: 4,
    msgType: 'MESSAGE_TEXT',
    isMine: true,
    avatar: 'https://dummyimage.com/44x44',
    content: {
      text: '123123',
    },
  },
  {
    id: 5,
    msgType: 'MESSAGE_TEXT',
    avatar: 'https://dummyimage.com/44x44',
    content: {
      text: '123123',
    },
  },
];

export default {
  components: {
    PressMessageDetail,
  },
  data() {
    return {
      msgList: MSG_LIST,
    };
  },
  methods: {

  },
};
</script>
<style scoped lang="scss">
@import "src/packages/base/mixin.scss";
.wrap {
  height: 100%;
}
</style>

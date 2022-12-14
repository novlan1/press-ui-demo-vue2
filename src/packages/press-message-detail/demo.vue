<template>
  <div class="wrap">
    <PressMessageDetail
      :list="msgList"
      :is-show-solo="isSolo"
    />
  </div>
</template>
<script>
import PressMessageDetail from 'src/packages/press-message-detail/press-message-detail.vue';

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
    teamInvite: true,
    avatar: 'https://dummyimage.com/44x44',
  },
  {
    id: 6,
    msgType: 'MESSAGE_TEXT',
    teamInvite: false,
    isSolo: true,
    isMine: true,
    avatar: 'https://dummyimage.com/44x44',
    content: {
      text: '来一局1V1看看操作',
    },
  },
  {
    id: 7,
    msgType: 'MESSAGE_TEXT',
    teamInvite: true,
    isMine: true,
    avatar: 'https://dummyimage.com/44x44',
  },
];

export default {
  components: {
    PressMessageDetail,
  },
  data() {
    return {
      msgList: MSG_LIST,
      isSolo: true,
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

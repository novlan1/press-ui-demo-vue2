<template>
  <div class="wrap">
    <PressMessageList
      :list="list"
    />
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        {
          nick: '赛宝小助手',
          content: '这里是消息内容，这里是消息内容消息内容',
          time: '13:02',
        },
        {
          nick: '用户昵称',
          content: '这里是消息内容，这里是消息内容消息内容',
          time: '昨天 11:32',

        },
        {
          nick: '用户昵称',
          content: '这里是消息内容，这里是消息内容消息内容',
          time: '08-20 11:32',

        },
      ],
    };
  },
  methods: {

  },
};
</script>
<style scoped lang="scss">
@import "src/packages/base/mixin.scss";
</style>

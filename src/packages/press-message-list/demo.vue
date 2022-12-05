<template>
  <div class="wrap">
    <PressMessageList
      :list="list"
      :show-loading="loading"
      :use-lazy="false"
      @onClickDetail="onClickDetail"
      @onDelete="onDelete"
    />
  </div>
</template>
<script>
// eslint-disable-next-line import/no-unresolved
import PressMessageList from '../../../packages/press-message-list/press-message-list.vue';


const DEMO_LIST = [{
  nick: 'HOLD LOADING',
  content: '这里是消息内容，这里是消息内容消息内容',
  type: 'HOLD_LOADING',
  time: '13:02',
  avatar: 'https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/press/img/wechat_avatar.png',
},
{
  nick: 'HOLD EMPTY',
  content: '这里是超长内容，这里是超长内容，这里是超长内容，这里是超长内容，这里是超长内容，这里是超长内容，这里是超长内容',
  type: 'HOLD_EMPTY',
  time: '昨天 11:32',
  avatar: 'https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/press/img/wechat_avatar.png',
},
{
  nick: 'HOLD LIST',
  content: '这里是消息内容，这里是消息内容消息内容',
  type: 'HOLD_LIST',
  time: '08-20 11:32',
  avatar: 'https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/press/img/wechat_avatar.png',
}];

let timer;

export default {
  components: {
    PressMessageList,
  },
  data() {
    return {
      list: [],
      loading: false,
    };
  },
  mounted() {
    this.loading = true;
    setTimeout(() => {
      this.list = DEMO_LIST;
      this.loading = false;
    }, 3000);

    // timer = setTimeout(() => {
    //   this.list = [];
    // }, 6000);
  },
  methods: {
    onClickDetail(item) {
      console.log('点击了: ', item);
      if (item.type === 'HOLD_LIST') {
        clearTimeout(timer);
        this.list = DEMO_LIST;
        this.loading = false;
      } else if (item.type === 'HOLD_LOADING') {
        this.loading = true;
        this.list = [];
      } else if (item.type === 'HOLD_EMPTY') {
        this.list = [];
        this.loading = false;
      }
    },
    onDelete(item) {
      console.log('正在删除: ', item);
    },
  },
};
</script>
<style scoped lang="scss">
@import "src/packages/base/mixin.scss";
.wrap {
  height: 100%;
}
</style>

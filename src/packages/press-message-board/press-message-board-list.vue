<template>
  <PressScrollView
    id="message-header"
    :scroll-offset="scrollOffset"
    style="height: 100%"
  >
    <div
      v-for="(item, index) in msgList"
      :id="item.msg_id"
      :key="index"
      class="message-list-item"
    >
      <!-- 玩家留言 -->
      <div
        v-if="item.msg_type ===1"
        class="message-palyer-comment"
      >
        <div class="player-info">
          <!-- <img v-lazy="item.head"> -->
          <p>{{ item.nick }}:</p>
        </div>
        <div class="comment-content">
          {{ item.content_info }}
        </div>
        <div class="message-reply">
          <div class="message-time">
            {{ timeFormat(item.create_time) }}
          </div>
          <p @click.stop="replyClick(item, index)">
            回复
          </p>
        </div>

        <!-- 回复内容 -->
        <div
          v-if="item.comm_list && item.comm_list.length > 0"
          class="replay-content"
        >
          <div
            v-for="(comment, index2) in item.comm_list"
            :key="index2"
            class="replay-content-item"
            @click.stop="replyClick(comment, index)"
          >
            <img
              v-if="teamInfo.captainInfo && comment.uid === teamInfo.captainInfo.uid"
              src="https://image-1251917893.file.myqcloud.com/Esports/new/user/cpatain-blue.png"
            >
            <span
              v-if="comment.parent_comm_id"
            >
              {{ comment.nick }}
              <p>回复</p>
              {{ comment.parent_nick }}：
            </span>
            <span v-else>{{ comment.nick }}：</span>
            <p>{{ comment.content_info }}</p>
          </div>

          <!-- 回复条数大于2时折叠,点击展开 -->
          <!-- <div class="conment-flod">
                更多
              </div> -->
        </div>
        <div :id="item.msg_id" />
      </div>
      <!-- 欢迎 xx 加入战队/进入房间 -->
      <div
        v-else
        class="message-join-tips"
      >
        <p
          class="join-room"
        >
          {{ item.content_info }}
        </p>
        <div class="message-time">
          {{ timeFormat(item.create_time) }}
        </div>
      </div>
    </div>
  </PressScrollView>
</template>
<script>
import PressScrollView from '../press-scroll-view/press-scroll-view.vue';

export default {
  components: {
    PressScrollView,
  },
  props: {
    msgList: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      scrollOffset: 0,
    };
  },
  mounted() {

  },
  methods: {
    replyClick() {

    },
  },
};
</script>
<style lang="scss" scoped src="./index.scss"></style>

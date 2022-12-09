<template>
  <PressScrollView
    :scroll-offset="scrollOffset"
    style="height: 100%"
  >
    <div
      v-for="(item, index) in list"
      :id="item.msg_id"
      :key="index"
      class="press-message-board__list-item"
    >
      <!-- 玩家留言 -->
      <div
        v-if="item.msg_type ===1"
        class="press-message-board__normal-comment"
      >
        <div class="press-message-board__user">
          <!-- <img class="press-message-board-avatar" v-lazy="item.head"> -->
          <p class="press-message-board__nick">
            {{ item.nick }}：
          </p>
        </div>

        <div class="press-message-board__comment-content">
          {{ item.content_info }}
        </div>

        <div class="press-message-board__info">
          <div class="press-message-board__comment-time">
            {{ item.create_time }}
          </div>
          <p
            class="press-message-board__reply-btn"
            @click.stop="replyClick(item, index)"
          >
            回复
          </p>
        </div>

        <!-- 回复内容 -->
        <div
          v-if="item.comm_list && item.comm_list.length > 0"
          class="press-message-board-reply"
        >
          <div
            v-for="(comment, index2) in item.comm_list"
            :key="index2"
            class="press-message-board__reply-item"
            @click.stop="replyClick(comment, index)"
          >
            <img
              v-if="captainUid && comment.uid === captainUid"
              class="press-message-board__reply-avatar"
              src="https://image-1251917893.file.myqcloud.com/Esports/new/user/cpatain-blue.png"
            >

            <span
              v-if="comment.parent_comm_id"
              class="press-message-board__reply-nick"
            >
              {{ comment.nick }}
              <p
                class="press-message-board__reply-word"
              >回复</p>
              {{ comment.parent_nick }}：
            </span>

            <span
              v-else
              class="press-message-board__reply-nick"
            >{{ comment.nick }}：</span>
            <p
              class="press-message-board__reply-content"
            >
              {{ comment.content_info }}
            </p>
          </div>

          <!-- 回复条数大于2时折叠,点击展开 -->
          <!-- <div class="press-message-board-fold">
                更多
              </div> -->
        </div>
        <div :id="item.msg_id" />
      </div>
      <!-- 欢迎 xx 加入战队/进入房间 -->
      <div
        v-else
        class="press-message-board__system-comment"
      >
        <p
          class="press-message-board__comment-content"
        >
          {{ item.content_info }}
        </p>
        <div class="press-message-board__comment-time">
          {{ item.create_time }}
        </div>
      </div>
    </div>
  </PressScrollView>
</template>
<script>
import PressScrollView from '../press-scroll-view/press-scroll-view.vue';
import { defaultProps, defaultOptions } from '../common/press-component';

export default {
  options: {
    ...defaultOptions,
    styleIsolation: 'shared',
  },
  components: {
    PressScrollView,
  },
  props: {
    list: {
      type: Array,
      default: () => [],
    },
    captainUid: {
      type: String,
      default: '',
    },
    ...defaultProps,
  },
  data() {
    return {
      scrollOffset: 0,
    };
  },
  mounted() {

  },
  methods: {
    replyClick(...args) {
      this.$emit('replyClick', ...args);
    },
  },
};
</script>
<style lang="scss" scoped src="./press-message-board-list.scss"></style>

<template>
  <div
    class="room-page-container"
  >
    <div v-if="list.length">
      <div
        v-for="(item) in list"
        :key="item.id"
        @click.stop="onClickDetail(item)"
      >
        <press-swipe-cell
          :right-width="100"
          @open="onOpenCell(item)"
          @close="onCloseCell"
        >
          <div
            class="message-item"
            @click.stop="onClickDetail(item)"
          >
            <div class="message-item-img">
              <img v-lazy="item.avatar">
              <div
                v-if="item.unreadCount"
                class="message-item-icon"
              >
                <div>{{ item.unreadCount > 99 ? '99' : item.unreadCount }}</div>
              </div>
            </div>
            <div class="message-item-box">
              <div class="message-item-title message-item-text-width">
                {{ item.nick }}
              </div>
              <div class="message-item-text message-item-text-width">
                {{ item.content }}
              </div>
            </div>
            <div class="message-item-text">
              {{ item.time }}
            </div>
          </div>
          <template #right>
            <div
              class="message-item-delete"
              @click.stop="e=>onDelete(item, e)"
            >
              {{ isConfirmDelete ? '确认删除' : '删除' }}
            </div>
          </template>
        </press-swipe-cell>
      </div>
    </div>

    <PressLoading
      v-else-if="firstEnter"
    />
    <div
      v-else
      class="message-none"
    >
      <PressEmpty
        :html-empty-content="'暂无消息'"
      />
    </div>
  </div>
</template>
<script>
import PressLoading from '../press-loading/press-loading.vue';
import PressEmpty from '../press-empty/press-empty.vue';
import { defaultProps, defaultOptions } from '../common/press-component';


export default {
  options: {
    ...defaultOptions,
  },
  components: {
    PressLoading,
    PressEmpty,
  },
  props: {
    firstEnter: {
      type: Boolean,
      default: false,
    },
    list: {
      type: Array,
      default: () => ([
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
      ]),
    },
    ...defaultProps,
  },
  data() {
    return {
      isConfirmDelete: false,
      curOpenid: null,
    };
  },
  methods: {
    onClearAll() {
      this.$emit('clearAll');
    },
    onClickDetail(item) {
      this.$emit('onClickDetail', item);
    },
    onDelete(item, event) {
      if (typeof event?.stopPropagation === 'function') {
        event.stopPropagation();
      }

      if (this.isConfirmDelete) {
        this.$emit('onDelete', item, () => {
          this.isConfirmDelete = false;
        });
      } else {
        this.isConfirmDelete = true;
      }
    },
    onOpenCell(item) {
      if (this.curOpenid !== item.id) {
        this.isConfirmDelete = false;
      }
      this.curOpenid = item.id;
    },
    onCloseCell() {
      this.isConfirmDelete = false;
    },
  },
};

</script>
<style lang="scss" scoped src="./index.scss"></style>

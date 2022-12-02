<template>
  <div
    class="press-message-list"
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
            class="press-message-item"
            @click.stop="onClickDetail(item)"
          >
            <div class="press-message-item__img-wrap">
              <img
                v-if="useLazy"
                v-lazy="item.avatar"
                class="press-message-item__img"
              >
              <img
                v-else
                class="press-message-item__img"
                :src="item.avatar"
              >

              <div
                v-if="item.unreadCount"
                class="press-message-unread-wrap"
              >
                <div class="press-message-unread-wrap__num">
                  {{ item.unreadCount > 99 ? '99' : item.unreadCount }}
                </div>
              </div>
            </div>

            <div class="press-message-item__box">
              <div class="press-message-item__box__title press-message-item__box__title--ellipsis">
                {{ item.nick }}
              </div>
              <div class="press-message-item__box__content press-message-item__box__content--ellipsis">
                {{ item.content }}
              </div>
            </div>

            <div class="press-message-item__box__right">
              {{ item.time }}
            </div>
          </div>

          <template #right>
            <div
              class="press-message-item__right"
              @click.stop="e=>onDelete(item, e)"
            >
              {{ isConfirmDelete ? '确认删除' : '删除' }}
            </div>
          </template>
        </press-swipe-cell>
      </div>
    </div>

    <PressLoading
      v-else-if="showLoading"
    />

    <div
      v-else
      class="press-message-list__empty"
    >
      <PressEmpty
        type="e-sport"
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
    useLazy: {
      type: Boolean,
      default: true,
    },
    showLoading: {
      type: Boolean,
      default: false,
    },
    list: {
      type: Array,
      default: () => ([]),
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

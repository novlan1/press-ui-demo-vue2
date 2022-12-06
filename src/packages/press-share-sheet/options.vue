<template>
  <uni-shadow-root class="vant-share-sheet-options">
    <view :class="optionsClass">
      <view
        v-for="(item,index) in (options)"
        :key="item.index"
        class="van-share-sheet__option"
        :data-index="index"
        @click="onSelect"
      >
        <button
          class="van-share-sheet__button"
          :open-type="item.openType"
        >
          <image
            :src="computed.getIconURL(item.icon)"
            class="van-share-sheet__icon"
          />
          <view
            v-if="item.name"
            class="van-share-sheet__name"
          >
            {{ item.name }}
          </view>
          <view
            v-if="item.description"
            class="van-share-sheet__option-description"
          >
            {{ item.description }}
          </view>
        </button>
      </view>
    </view>
  </uni-shadow-root>
</template>
<script>
import { defaultProps, defaultOptions } from '../common/press-component';
import utils from '../wxs-js/utils';
import computed from './options-computed';

export default {
  options: {
    ...defaultOptions,
  },
  components: {

  },
  props: {
    options: { type: Array, default: () => [] },
    showBorder: Boolean,
    ...defaultProps,
  },
  data() {
    return {
      computed,
    };
  },
  computed: {
    optionsClass() {
      const { showBorder } = this;
      return utils.bem('share-sheet__options', { border: showBorder });
    },
  },
  methods: {
    onSelect(event) {
      const { index } = event.currentTarget.dataset;
      const option = this.options[index];
      this.$emit('select', Object.assign(Object.assign({}, option), { index }));
    },
  },
};

</script>
<style platform="mp-weixin" lang="scss">
@import "../common/index.scss";
@import "../common/style/var.scss";
@import "../common/style/mixins/hairline.scss";

.van-share-sheet {
  &__options {
    position: relative;
    display: flex;
    padding: $padding-md 0 $padding-md $padding-xs;
    overflow-x: auto;
    overflow-y: visible;
    -webkit-overflow-scrolling: touch;

    &--border::before {
      @include hairline-top($cell-border-color, $padding-md);
    }

    &::-webkit-scrollbar {
      height: 0;
    }
  }

  &__option {
    display: flex;
    flex-direction: column;
    align-items: center;
    user-select: none;

    &:active {
      opacity: $active-opacity;
    }
  }

  &__button {
    height: auto;
    padding: 0;
    line-height: inherit;
    background-color: transparent;
    border: 0;

    &::after {
      border: 0;
    }
  }

  &__icon {
    width: $share-sheet-icon-size;
    height: $share-sheet-icon-size;
    margin: 0 $padding-md;
  }

  &__name {
    margin-top: $padding-xs;
    padding: 0 $padding-base;
    color: $share-sheet-option-name-color;
    font-size: $share-sheet-option-name-font-size;
  }

  &__option-description {
    padding: 0 $padding-base;
    color: $share-sheet-option-description-color;
    font-size: $share-sheet-option-description-font-size;
  }
}
</style>

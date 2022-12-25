<template>
  <uni-shadow-root class="vant-dropdown-item-index">
    <view
      v-if="showWrapper"
      :class="true ? utils.bem('dropdown-item', direction) : ''"
      :style="wrapperStyle"
    >
      <van-popup
        :show="showPopup"
        :custom-style="'position: absolute;'+(popupStyle)"
        overlay-style="position: absolute;"
        :overlay="overlay"
        :position="direction === 'down' ? 'top' : 'bottom'"
        :duration="transition ? duration : 0"
        :close-on-click-overlay="closeOnClickOverlay"
        @enter="onOpen"
        @leave="onClose"
        @close="toggle"
        @after-enter="onOpened"
        @after-leave="onClosed"
      >
        <van-cell
          v-for="(item, index) in (options)"
          :key="index"
          :class="true ? utils.bem('dropdown-item__option', { active: item.value === innerValue } ) : ''"
          clickable
          :icon="item.icon"
          @click.native="onOptionTap(item)"
        >
          <view
            slot="title"
            class="van-dropdown-item__title"
            :style="item.value === innerValue ? 'color:' + activeColor : ''"
          >
            {{ item.text }}
          </view>
          <van-icon
            v-if="item.value === innerValue"
            name="success"
            class="van-dropdown-item__icon"
            :color="activeColor"
          />
        </van-cell>

        <slot />
      </van-popup>
    </view>
  </uni-shadow-root>
</template>
<script>
import VanPopup from '../press-popup-plus/press-popup-plus.vue';
import VanCell from '../press-cell/press-cell.vue';
import VanIcon from '../press-icon-plus/press-icon-plus.vue';
import utils from '../wxs-js/utils';

import { defaultOptions, defaultProps } from '../common/press-component';
import { ChildrenMixin } from '../mixins/relation';
import { PARENT_DROPDOWN_MENU as PARENT } from '../common/parent-map';


export default {
  options: {
    ...defaultOptions,
    styleIsolation: 'shared',
  },
  components: {
    VanPopup,
    VanCell,
    VanIcon,
  },
  mixins: [
    ChildrenMixin(PARENT),
  ],
  // relation: useParent('dropdown-menu', function () {
  //   this.updateDataFromParent();
  // }),
  props: {
    value: {
      type: [String, Number],
      default: '',
      // observer: 'rerender',
    },
    title: {
      type: String,
      default: '',
      // observer: 'rerender',
    },
    disabled: Boolean,
    titleClass: {
      type: String,
      default: '',
      // observer: 'rerender',
    },
    options: {
      type: Array,
      default: () => [],
      // observer: 'rerender',
    },
    popupStyle: { type: String, default: '' },
    ...defaultProps,
  },
  data() {
    return {
      transition: true,
      showPopup: false,
      showWrapper: false,
      displayTitle: '',

      utils,
      innerValue: this.value,

      direction: 'down',
      closeOnClickOverlay: true,
      activeColor: '',
      duration: 200,
      overlay: true,
    };
  },
  watch: {
    value: {
      handler(val) {
        this.innerValue = val;
        this.rerender();
      },
    },
    title: {
      handler() {
        this.rerender();
      },
    },
    titleClass: {
      handler() {
        this.rerender();
      },
    },
    options: {
      handler() {
        this.rerender();
      },
    },
  },
  mounted() {
    this.rerender();
    this.updateDataFromParent();
  },
  methods: {
    rerender() {
      this.$nextTick(() => {
        this[PARENT]?.updateItemListData();
      });
    },
    updateDataFromParent() {
      if (this[PARENT]) {
        const { overlay, duration, activeColor, closeOnClickOverlay, direction } = this[PARENT];
        this.overlay = overlay;
        this.duration = duration;
        this.activeColor = activeColor;
        this.closeOnClickOverlay = closeOnClickOverlay;
        this.direction = direction;
        console.log('activeColor,', this.activeColor);

        // this.setData({
        //   overlay,
        //   duration,
        //   activeColor,
        //   closeOnClickOverlay,
        //   direction,
        // });
      }
    },
    onOpen() {
      this.$emit('open');
    },
    onOpened() {
      this.$emit('opened');
    },
    onClose() {
      this.$emit('close');
    },
    onClosed() {
      this.$emit('closed');
      this.showWrapper = false;
    },
    onOptionTap(option) {
      // console.log('event', event);
      // const { option } = event.currentTarget.dataset;
      const { value } = option;
      const shouldEmitChange = this.innerValue !== value;
      this.showPopup = false;
      this.innerValue = value;
      // this.setData({ showPopup: false, value });
      this.$emit('close');
      this.rerender();
      if (shouldEmitChange) {
        this.$emit('change', value);
      }
    },
    toggle(show, options = {}) {
      const { showPopup } = this;
      if (typeof show !== 'boolean') {
        show = !showPopup;
      }
      if (show === showPopup) {
        return;
      }
      this.transition = !options.immediate;
      this.showPopup = show;
      // this.setData({
      //   transition: !options.immediate,
      //   showPopup: show,
      // });
      if (show) {
        this[PARENT]?.getChildWrapperStyle().then((wrapperStyle) => {
          // this.setData({ wrapperStyle, showWrapper: true });
          this.wrapperStyle = wrapperStyle;
          this.showWrapper = true;
          this.rerender();
        });
      } else {
        this.rerender();
      }
    },
  },
};
</script>
<style platform="mp-weixin" lang="scss">
@import "../common/index.scss";

.van-dropdown-item {
  left: 0;
  overflow: hidden;
  position: fixed;
  right: 0;
}
.van-dropdown-item__option {
  text-align: left;
}
.van-dropdown-item__option--active .van-dropdown-item__icon,
.van-dropdown-item__option--active .van-dropdown-item__title {
  color: var(--dropdown-menu-option-active-color, #ee0a24);
}
.van-dropdown-item--up {
  top: 0;
}
.van-dropdown-item--down {
  bottom: 0;
}
.van-dropdown-item__icon {
  display: block;
  line-height: inherit;
}
</style>

<template>
  <uni-shadow-root class="vant-dropdown-menu-index">
    <view class="van-dropdown-menu van-dropdown-menu--top-bottom custom-class">
      <view
        v-for="(item,index) in (itemListData)"
        :key="index"
        :data-index="index"
        :class="true ? utils.bem('dropdown-menu__item', { disabled: item.disabled }) : ''"
        @click="onTitleTap"
      >
        <view
          :class="(item.titleClass)+' '
            +(utils.bem('dropdown-menu__title',
                        { active: item.showPopup, down: item.showPopup === (direction === 'down') }))"
          :style="item.showPopup ? 'color:' + activeColor : ''"
        >
          <view class="van-ellipsis">
            {{ computed.displayTitle(item) }}
          </view>
        </view>
      </view>

      <slot />
    </view>
  </uni-shadow-root>
</template>
<script>
// import { useChildren } from '../common/relation';
import { addUnit, getRect, getSystemInfoSync } from '../common/utils';
import utils from '../wxs-js/utils';
import computed from './computed';
import { defaultOptions, defaultProps } from '../common/press-component';
import { ParentMixin } from '../mixins/relation';
import { PARENT_DROPDOWN_MENU as PARENT } from '../common/parent-map';


let ARRAY = [];


export default {
  options: {
    ...defaultOptions,
    styleIsolation: 'shared',
  },
  mixins: [
    ParentMixin(PARENT),
  ],
  field: true,
  // relation: useChildren('dropdown-item', function () {
  //   this.updateItemListData();
  // }),
  props: {
    activeColor: {
      type: String,
      default: '',
    },
    overlay: {
      type: Boolean,
      default: true,
    },
    zIndex: {
      type: Number,
      default: 10,
    },
    duration: {
      type: Number,
      default: 200,
    },
    direction: {
      type: String,
      default: 'down',
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true,
    },
    closeOnClickOutside: {
      type: Boolean,
      default: true,
    },
    ...defaultProps,
  },
  data() {
    return {
      itemListData: [],
      utils,
      computed,
    };
  },
  watch: {
    activeColor: {
      handler() {
        this.updateChildrenData();
      },
    },
    overlay: {
      handler() {
        this.updateChildrenData();
      },
    },
    duration: {
      handler() {
        this.updateChildrenData();
      },
    },
    direction: {
      handler() {
        this.updateChildrenData();
      },
    },
    closeOnClickOverlay: {
      handler() {
        this.updateChildrenData();
      },
    },
  },
  beforeCreate() {
    const { windowHeight } = getSystemInfoSync();
    this.windowHeight = windowHeight;
    ARRAY.push(this);
  },
  created() {
    this.children = [];
  },
  destroyed() {
    ARRAY = ARRAY.filter(item => item !== this);
  },
  methods: {
    updateItemListData() {
      this.itemListData = this.children.map((child) => {
        const { titleClass, showPopup, disabled, innerValue: value, title, text, options } = child;
        return {
          titleClass, showPopup, disabled, value, title, text, options,
        };
      });
      console.log('itemListData', this.itemListData);
      // this.setData({
      //   itemListData: this.children.map(child => child),
      // });
    },
    updateChildrenData() {
      this.children.forEach((child) => {
        child.updateDataFromParent();
      });
    },
    toggleItem(active) {
      this.children.forEach((item, index) => {
        const { showPopup } = item;
        if (index === active) {
          item.toggle();
        } else if (showPopup) {
          item.toggle(false, { immediate: true });
        }
      });
    },
    close() {
      this.children.forEach((child) => {
        child.toggle(false, { immediate: true });
      });
    },
    getChildWrapperStyle() {
      const { zIndex, direction } = this;
      return getRect(this, '.van-dropdown-menu').then((rect) => {
        const { top = 0, bottom = 0 } = rect;
        const offset = direction === 'down' ? bottom : this.windowHeight - top;
        let wrapperStyle = `z-index: ${zIndex};`;
        if (direction === 'down') {
          wrapperStyle += `top: ${addUnit(offset)};`;
        } else {
          wrapperStyle += `bottom: ${addUnit(offset)};`;
        }
        return wrapperStyle;
      });
    },
    onTitleTap(event) {
      const { index } = event.currentTarget.dataset;
      const child = this.children[index];
      if (!child.disabled) {
        ARRAY.forEach((menuItem) => {
          if (menuItem
                        && menuItem.closeOnClickOutside
                        && menuItem !== this) {
            menuItem.close();
          }
        });
        this.toggleItem(index);
      }
    },
  },
};
</script>
<style platform="mp-weixin" lang="scss">
@import "../common/index.scss";

.van-dropdown-menu {
  background-color: var(--dropdown-menu-background-color, #fff);
  box-shadow: var(
    --dropdown-menu-box-shadow,
    0 2px 12px hsla(210, 1%, 40%, 0.12)
  );
  display: flex;
  height: var(--dropdown-menu-height, 50px);
  -webkit-user-select: none;
  user-select: none;
}
.van-dropdown-menu__item {
  align-items: center;
  display: flex;
  flex: 1;
  justify-content: center;
  min-width: 0;
}
.van-dropdown-menu__item:active {
  opacity: 0.7;
}
.van-dropdown-menu__item--disabled:active {
  opacity: 1;
}
.van-dropdown-menu__item--disabled .van-dropdown-menu__title {
  color: var(--dropdown-menu-title-disabled-text-color, #969799);
}
.van-dropdown-menu__title {
  box-sizing: border-box;
  color: var(--dropdown-menu-title-text-color, #323233);
  font-size: var(--dropdown-menu-title-font-size, 15px);
  line-height: var(--dropdown-menu-title-line-height, 18px);
  max-width: 100%;
  padding: var(--dropdown-menu-title-padding, 0 8px);
  position: relative;
}
.van-dropdown-menu__title:after {
  border-color: transparent transparent currentcolor currentcolor;
  border-style: solid;
  border-width: 3px;
  content: "";
  margin-top: -5px;
  opacity: 0.8;
  position: absolute;
  right: -4px;
  top: 50%;
  transform: rotate(-45deg);
}
.van-dropdown-menu__title--active {
  color: var(--dropdown-menu-title-active-text-color, #ee0a24);
}
.van-dropdown-menu__title--down:after {
  margin-top: -1px;
  transform: rotate(135deg);
}
</style>

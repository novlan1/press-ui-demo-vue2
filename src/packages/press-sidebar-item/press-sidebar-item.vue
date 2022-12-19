<template>
  <uni-shadow-root class="vant-sidebar-item-index">
    <div
      :class="sidebarItemClass"
      hover-class="van-sidebar-item--hover"
      hover-stay-time="70"
      @click="onClick"
    >
      <div class="van-sidebar-item__text">
        <van-info
          v-if="badge != null || info !== null || dot"
          :dot="dot"
          :info="badge != null ? badge : info"
        />
        <div v-if="title">
          {{ title }}
        </div>
        <slot
          v-else
          name="title"
        />
      </div>
    </div>
  </uni-shadow-root>
</template>
<script>
import VanInfo from '../press-info/press-info.vue';
// import { useParent } from '../common/relation';
import utils from '../wxs-js/utils';
import { defaultOptions, defaultProps } from '../common/press-component';
import { ChildrenMixin } from '../mixins/relation';
import { PARENT_SIDEBAR as PARENT } from '../common/parent-map';


export default {
  options: {
    ...defaultOptions,
    styleIsolation: 'shared',
  },
  components: {
    VanInfo,
  },
  mixins: [
    ChildrenMixin(PARENT),
  ],
  classes: ['active-class', 'disabled-class'],
  // relation: useParent('sidebar'),
  props: {
    dot: Boolean,
    badge: { type: [String, Number], default: '' },
    info: { type: [String, Number], default: '' },
    title: { type: String, default: '' },
    disabled: Boolean,
    ...defaultProps,
    activeClass: { type: String, default: '' },
    disabledClass: { type: String, default: '' },
  },
  data() {
    return {
      utils,

      selected: false,
    };
  },
  computed: {
    sidebarItemClass() {
      const {
        selected,
        disabled,
        customClass,
        activeClass,
        disabledClass,
      } = this;
      return `${utils.bem('sidebar-item', { selected, disabled })} ${selected ? activeClass : ''} ${disabled ? disabledClass : ''} ${customClass}`;
    },
  },
  mounted() {

  },
  methods: {
    onClick() {
      const parent = this[PARENT];
      if (!parent || this.disabled) {
        return;
      }
      const index = parent.children.indexOf(this);
      parent.setActive(index).then(() => {
        this.$emit('click', index);
        parent.$emit('change', index);
      });
    },
    setActive(selected) {
      this.selected = selected;
      // return this.setData({ selected });
    },
  },
};
</script>

<style platform="mp-weixin" lang="scss">
@import "../common/index.scss";
@import "../common/style/var.scss";

.van-sidebar-item {
  display: block;
  box-sizing: border-box;
  overflow: hidden;
  border-left: 3px solid transparent;
  user-select: none;
  padding: var(--sidebar-padding, $sidebar-padding);
  font-size: var(--sidebar-font-size, $sidebar-font-size);
  line-height: var(--sidebar-line-height, $sidebar-line-height);
  color: var(--sidebar-text-color, $sidebar-text-color);
  background-color: var(--sidebar-background-color, $sidebar-background-color);

  &__text {
    position: relative;
    display: inline-block;
    word-break: break-all;
  }

  &--hover:not(&--disabled) {
    background-color: var(--sidebar-active-color, $sidebar-active-color);
  }

  &::after {
    border-bottom-width: 1px;
  }

  &--selected {
    color: var(--sidebar-selected-text-color, $sidebar-selected-text-color);
    font-weight: var(
      --sidebar-selected-font-weight,
      $sidebar-selected-font-weight
    );
    border-color: var(
      --sidebar-selected-border-color,
      $sidebar-selected-border-color
    );

    &::after {
      border-right-width: 1px;
    }
  }

  &--selected,
  &--selected.van-sidebar-item--hover {
    background-color: var(
      --sidebar-selected-background-color,
      $sidebar-selected-background-color
    );
  }

  &--disabled {
    color: var(--sidebar-disabled-text-color, $sidebar-disabled-text-color);
  }
}
</style>

<template>
  <div class="demo-wrap">
    <div class="popover-wrap">
      <PressPopover
        :show="true"
        placement="bottom"
        custom-class="demo-nav-popover demo-nav-popover--bottom"
      >
        <div
          v-for="(item,index) of list"
          :key="index"
          class="demo-nav-item"
        >
          选项{{ item }}
        </div>
        <div
          class="demo-nav-item"
        >
          bottom
        </div>
      </PressPopover>

      <PressPopover
        :show="true"
        placement="top"
        custom-class="demo-nav-popover demo-nav-popover--top"
      >
        <div
          v-for="(item,index) of list"
          :key="index"
          class="demo-nav-item"
        >
          选项{{ item }}
        </div>
        <div
          class="demo-nav-item"
        >
          top
        </div>
      </PressPopover>

      <PressPopover
        :show="true"
        placement="right"
        custom-class="demo-nav-popover demo-nav-popover--right"
      >
        <div
          v-for="(item,index) of list"
          :key="index"
          class="demo-nav-item"
        >
          选项{{ item }}
        </div>
        <div
          class="demo-nav-item"
        >
          right
        </div>
      </PressPopover>

      <PressPopover
        :show="true"
        placement="left"
        custom-class="demo-nav-popover demo-nav-popover--left"
      >
        <div
          v-for="(item,index) of list"
          :key="index"
          class="demo-nav-item"
        >
          选项{{ item }}
        </div>
        <div
          class="demo-nav-item"
        >
          left
        </div>
      </PressPopover>
    </div>
  </div>
</template>
<script>
import PressPopover from 'src/packages/press-popover/press-popover.vue';


export default {
  components: {
    PressPopover,
  },
  data() {
    return {
      list: [1, 2, 3],

    };
  },
  methods: {

  },
};
</script>
<style lang="scss" scoped>
@import "src/packages/base/mixin.scss";
$GAP: 56px;

.popover-wrap {
  position: relative;
  width: 100%;
  height: 10px;

  ::v-deep .demo-nav-popover {
    top: 30px;
    bottom: auto;
    padding: 0;
    background: #09134e;
    &--left {
      left: auto;
      right: $GAP;
      top: 238px;
    }

    &--right {
      left: $GAP;
      right: auto;
      top: 238px;
    }

    &--top {
      left: $GAP;
      right: auto;
    }
    &--bottom {
      left: auto;
      right: $GAP;
    }
  }
  .demo-nav-item {
    display: flex;
    align-items: center;
    padding: 0 22px;
    height: 40px;
    color: #fff;
  }
}
</style>

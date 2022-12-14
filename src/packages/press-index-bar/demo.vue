<template>
  <div
    class="wrap"
    :style="wrapStyle"
  >
    <press-index-bar
      :sticky-offset-top="stickyOffsetTop"
    >
      <view
        v-for="(item,index) of anchorList"
        :key="index"
      >
        <press-index-anchor :index="item" />
        <press-cell title="文本" />
        <press-cell title="文本" />
        <press-cell title="文本" />
      </view>
    </press-index-bar>
  </div>
</template>
<script>
import PressIndexBar from 'src/packages/press-index-bar/press-index-bar.vue';
import PressIndexAnchor from 'src/packages/press-index-anchor/press-index-anchor.vue';


function getEN() {
  const arr = [];

  for (let i = 65; i < 91; i++) {
    arr.push(String.fromCharCode(i));
  }

  return arr;
}
const ANCHOR_LIST = getEN();

export default {
  components: {
    PressIndexBar,
    PressIndexAnchor,
  },
  data() {
    let wrapStyle = '';
    let stickyOffsetTop = 0;
    // #ifdef H5
    wrapStyle = 'height: 100%; overflow-y: auto;';
    stickyOffsetTop = 44;
    // #endif

    // #ifndef H5
    wrapStyle = '';
    // #endif
    return {
      anchorList: ANCHOR_LIST,

      wrapStyle,
      stickyOffsetTop,
    };
  },
  mounted() {
  },
  methods: {

  },
};
</script>
<style scoped lang="scss">
@import "src/packages/base/mixin.scss";
</style>

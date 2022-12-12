<template>
  <div class="wrap">
    <demo-block
      title="基础用法"
      section-style="margin: 0;"
    >
      <press-sticky>
        <div class="btn1">
          基础用法
        </div>
      </press-sticky>
    </demo-block>

    <demo-block
      title="吸顶距离"
      section-style="margin: 0;"
    >
      <press-sticky
        :offset-top="50"
      >
        <div
          class="btn2"
        >
          吸顶距离
        </div>
      </press-sticky>
    </demo-block>

    <demo-block
      title="指定容器"
      section-style="margin: 0;"
    >
      <div
        id="container"
        ref="container"
        style="height: 150px;background: #eee;"
      >
        <press-sticky :container="container">
          <div class="btn3">
            指定容器
          </div>
        </press-sticky>
      </div>
    </demo-block>

    <!-- #ifdef H5 -->
    <press-button
      type="e-sport-primary"
      custom-style="position:relative;margin: 10px;padding: 0;"
      @click="onToggleShowHeader"
    >
      {{ showHeader ? '隐藏' : '显示' }}头部
    </press-button>
    <!-- #endif -->
  </div>
</template>
<script>
export default {
  data() {
    const that = this;
    return {
      container() {
        let res;

        // #ifdef H5
        res = that.$refs.container;
        // #endif

        // #ifndef H5
        res = uni.createSelectorQuery().select('#container');
        // #endif

        return res;
      },
      showHeader: true,
    };
  },
  mounted() {
  },
  methods: {
    onToggleShowHeader() {
      this.showHeader = !this.showHeader;
      let style = 'none';
      if (this.showHeader) {
        style = 'block';
      }
      const header = document.querySelector('uni-page-head');
      header.style.display = style;
    },
  },
};
</script>
<style scoped lang="scss">
@import "src/packages/base/mixin.scss";
.wrap {
  font-size: 16px;
  height: 1000px;
  background: #fff;
  overflow-y: auto;

  .btn1 {
    margin-left: 10px;
  }
  .btn2 {
    margin-left: 80px;
  }
  .btn3 {
    margin-left: 160px;
  }
}
</style>

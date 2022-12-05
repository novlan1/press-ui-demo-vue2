<template>
  <div class="wrap">
    <demo-block
      title="基础用法"
      :section-style="sectionStyle"
      :header-style="headerStyle"
    >
      <press-nav-bar
        title="标题"
        left-text="返回"
        right-text="按钮"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      />
    </demo-block>

    <demo-block
      title="高级用法"
      :section-style="sectionStyle"
      :header-style="headerStyle"
    >
      <press-nav-bar
        title="标题"
        left-text="返回"
        left-arrow
      >
        <press-icon-plus
          slot="right"
          name="search"
        />
      </press-nav-bar>
    </demo-block>
  </div>
</template>
<script>
export default {
  data() {
    return {
      sectionStyle: 'margin: 0;background: #f7f8fa;',
      headerStyle: 'background: #f7f8fa;',
    };
  },
  methods: {
    onClickLeft() {
      console.log('onClickLeft');
    },
    onClickRight() {
      console.log('onClickRight');
    },
  },
};
</script>
<style scoped lang="scss">
@import "src/packages/base/mixin.scss";
page {
  background: #f7f8fa !important;
}
</style>

<template>
  <div class="wrap">
    <demo-block title="基础用法">
      <press-divider />
    </demo-block>

    <demo-block title="使用 hairline">
      <press-divider hairline />
    </demo-block>

    <demo-block title="虚线">
      <press-divider dashed />
    </demo-block>

    <demo-block title="虚线">
      <press-divider content-position="center">
        文本
      </press-divider>
      <press-divider content-position="left">
        文本
      </press-divider>
      <press-divider content-position="right">
        文本
      </press-divider>
    </demo-block>

    <demo-block title="自定义属性">
      <press-divider
        content-position="center"
        text-color="#1989fa"
      >
        文本颜色
      </press-divider>
      <press-divider
        content-position="center"
        border-color="#1989fa"
      >
        border 颜色
      </press-divider>
      <press-divider
        content-position="center"
        font-size="18"
      >
        字体大小
      </press-divider>
    </demo-block>

    <demo-block title="自定义样式">
      <press-divider
        content-position="center"
        custom-style="color: #1989fa; border-color: #1989fa; font-size: 18px;"
      >
        文本
      </press-divider>
    </demo-block>
  </div>
</template>
<script>
export default {
  data() {
    return {

    };
  },
  methods: {

  },
};
</script>
<style scoped lang="scss">
@import "src/packages/base/mixin.scss";
.wrap {
  padding-bottom: 20px;
}
</style>

<template>
  <div class="demo-wrap">
    <demo-block
      title="基础用法"
      :section-style="sectionStyle"
    >
      <press-notice-bar
        scrollable
        left-icon="volume-o"
        text="在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。"
      />
    </demo-block>

    <demo-block
      title="滚动播放"
      :section-style="sectionStyle"
    >
      <!-- 文字较短时，通过设置 scrollable 属性开启滚动播放 -->
      <press-notice-bar
        scrollable
        text="技术是开发它的人的共同灵魂。"
      />

      <!-- 文字较长时，通过禁用 scrollable 属性关闭滚动播放 -->
      <press-notice-bar
        :scrollable="false"
        text="在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。"
      />
    </demo-block>

    <demo-block
      title="多行展示"
      :section-style="sectionStyle"
    >
      <press-notice-bar
        wrapable
        :scrollable="false"
        text="在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。"
      />
    </demo-block>

    <demo-block
      title="通知栏模式"
      :section-style="sectionStyle"
    >
      <!-- closeable 模式，在右侧显示关闭按钮 -->
      <press-notice-bar
        mode="closeable"
        text="技术是开发它的人的共同灵魂。"
      />

      <!-- link 模式，在右侧显示链接箭头 -->
      <press-notice-bar
        mode="link"
        text="技术是开发它的人的共同灵魂。"
      />
    </demo-block>

    <demo-block
      title="自定义样式"
      :section-style="sectionStyle"
    >
      <press-notice-bar
        color="#1989fa"
        background="#ecf9ff"
        left-icon="info-o"
        text="技术是开发它的人的共同灵魂。"
      />
    </demo-block>

    <demo-block
      title="自定义滚动速率"
      :section-style="sectionStyle"
    >
      <press-notice-bar
        text="技术是开发它的人的共同灵魂。"
        :speed="100"
        scrollable
        left-icon="//img.yzcdn.cn/public_files/2017/8/10/6af5b7168eed548100d9041f07b7c616.png"
      />
    </demo-block>
  </div>
</template>
<script>
export default {
  data() {
    return {
      sectionStyle: 'margin:0;',
    };
  },
  methods: {

  },
};
</script>
<style scoped lang="scss">
@import "src/packages/base/mixin.scss";
.demo-wrap {
  padding-bottom: 30px;
}
</style>

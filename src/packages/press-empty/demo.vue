<template>
  <div class="wrap">
    <demo-block
      title="基础用法"
      :section-style="sectionStyle"
    >
      <press-empty description="描述文字" />
    </demo-block>

    <demo-block
      title="图片类型"
      :section-style="sectionStyle"
    >
      <press-tabs>
        <press-tab
          v-for="(item, index) of imgTypeList"
          :key="index"
          :title="item.title"
        >
          <press-empty
            :image="item.name"
            description="描述文字"
          />
        </press-tab>
      </press-tabs>
    </demo-block>

    <demo-block
      title="自定义图片"
      :section-style="sectionStyle"
    >
      <press-empty
        custom-class="custom-image"
        image="https://img.yzcdn.cn/vant/custom-empty-image.png"
        image-custom-style="width:90px;height:90px"
        description="描述文字"
      />
    </demo-block>

    <demo-block
      title="底部内容"
      :section-style="sectionStyle"
    >
      <press-empty description="描述文字">
        <press-button
          round
          type="danger"
          custom-class="bottom-button"
        >
          按钮
        </press-button>
      </press-empty>
    </demo-block>

    <demo-block
      title="E-SPORT"
      :section-style="sectionStyle"
    >
      <press-empty
        type="e-sport"
      />
    </demo-block>
  </div>
</template>
<script>
export default {
  data() {
    return {
      sectionStyle: '',
      imgTypeList: [
        {
          name: 'error',
          title: '通用错误',
        },
        {
          name: 'network',
          title: '网络错误',
        },
        {
          name: 'search',
          title: '搜索提示',
        },
      ],
    };
  },
  methods: {

  },
};
</script>
<style lang="scss">
@import "src/packages/base/mixin.scss";
.bottom-button {
  width: 160px;
  height: 40px;
}
</style>

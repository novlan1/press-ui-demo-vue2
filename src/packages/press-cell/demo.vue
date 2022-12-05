<template>
  <div class="wrap">
    <demo-block
      title="基础用法"
      :header-style="headerStyle"
      :section-style="sectionStyle"
    >
      <press-cell-group>
        <press-cell
          title="单元格"
          value="内容"
        />
        <press-cell
          title="单元格"
          value="内容"
          label="描述信息"
          :border="false"
        />
      </press-cell-group>
    </demo-block>

    <demo-block
      title="卡片风格"
      :section-style="sectionStyle"
      :header-style="headerStyle"
    >
      <press-cell-group inset>
        <press-cell
          title="单元格"
          value="内容"
        />
        <press-cell
          title="单元格"
          value="内容"
          label="描述信息"
        />
      </press-cell-group>
    </demo-block>

    <demo-block
      title="单元格大小"
      :section-style="sectionStyle"
      :header-style="headerStyle"
    >
      <press-cell
        title="单元格"
        value="内容"
        size="large"
      />
      <press-cell
        title="单元格"
        value="内容"
        size="large"
        label="描述信息"
      />
    </demo-block>

    <demo-block
      title="展示图标"
      :section-style="sectionStyle"
      :header-style="headerStyle"
    >
      <press-cell
        title="单元格"
        icon="location-o"
      />
    </demo-block>

    <demo-block
      title="展示图标"
      :section-style="sectionStyle"
      :header-style="headerStyle"
    >
      <press-cell
        title="单元格"
        is-link
      />
      <press-cell
        title="单元格"
        is-link
        value="内容"
      />
      <press-cell
        title="单元格"
        is-link
        value="内容"
        arrow-direction="down"
      />
    </demo-block>

    <demo-block
      title="页面跳转"
      :section-style="sectionStyle"
      :header-style="headerStyle"
    >
      <press-cell
        is-link
        title="单元格"
        link-type="navigateTo"
        url="/pages/index/index"
      />
    </demo-block>

    <demo-block
      title="分组标题"
      :section-style="sectionStyle"
      :header-style="headerStyle"
    >
      <press-cell-group title="分组1">
        <press-cell
          title="单元格"
          value="内容"
        />
      </press-cell-group>
      <press-cell-group title="分组2">
        <press-cell
          title="单元格"
          value="内容"
        />
      </press-cell-group>
    </demo-block>

    <demo-block
      title="使用插槽"
      :section-style="sectionStyle"
      :header-style="headerStyle"
    >
      <press-cell
        value="内容"
        icon="shop-o"
        is-link
      >
        <view slot="title">
          <view class="press-cell-text">
            单元格
          </view>
          <!-- TODO:tag -->
          <!-- <press-tag type="danger">
            标签
          </press-tag> -->
        </view>
      </press-cell>
      <press-cell title="单元格">
        <press-icon-plus
          slot="right-icon"
          name="search"
          class="custom-icon"
        />
      </press-cell>
    </demo-block>

    <demo-block
      title="垂直居中"
      :section-style="sectionStyle"
      :header-style="headerStyle"
    >
      <press-cell
        center
        title="单元格"
        value="内容"
        label="描述信息"
      />
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

  },
};
</script>
<style scoped lang="scss">
@import "src/packages/base/mixin.scss";
page {
  background: #f7f8fa !important;
}
</style>

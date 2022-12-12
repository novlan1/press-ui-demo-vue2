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
        is-link
      >
        <div slot="title">
          <div class="press-cell-text">
            单元格
          </div>
          <press-tag type="danger">
            标签
          </press-tag>
        </div>
      </press-cell>
      <press-cell
        title="单元格"
        icon="shop-o"
      >
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

    <demo-block
      title="E-SPORT"
      :header-style="headerStyle"
      :section-style="sectionStyle"
    >
      <div class="demo--e-sport-wrap">
        <press-cell
          title="比赛模式"
          value="淘汰赛"
          is-link
          :border="false"
        />
        <press-cell
          title="决胜方式"
          value="默认一局胜负"
          is-link
          :border="false"
        />
        <press-cell
          title="允许比赛中修改队名队徽"
          :border="false"
        >
          <press-switch
            slot="right-icon"
            custom-class="press-switch--e-sport"
            :checked="switchChecked"
            @change="onChangeSwitch"
          />
        </press-cell>

        <press-cell
          title="获取参赛者手机号码"
          label="便于发放奖励和联系参赛者，可在队员信息中查看"
          center
          :border="false"
        >
          <press-switch
            slot="right-icon"
            custom-class="press-switch--e-sport"
            :checked="switchChecked"
            @change="onChangeSwitch"
          />
        </press-cell>
      </div>
    </demo-block>
  </div>
</template>
<script>
// eslint-disable-next-line import/no-unresolved
import PressSwitch from '../../../packages/press-switch/press-switch.vue';

export default {
  components: {
    PressSwitch,
  },
  data() {
    return {
      sectionStyle: 'margin: 0;background: #f7f8fa;',
      headerStyle: 'background: #f7f8fa;',
      switchChecked: false,
    };
  },
  methods: {
    onChangeSwitch(value) {
      this.switchChecked = value;
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
<style lang="scss">
.demo--e-sport-wrap {
  --cell-background-color: rgba(255, 255, 255, 0.85);
  --cell-active-color: #f5f6fa;
  --cell-height: 1.12rem;
  --cell-line-height: unset;

  --cell-vertical-padding: 0.32rem;
  --cell-horizontal-padding: 0.32rem;

  --cell-text-color: #09134e;
  --cell-font-size: 0.32rem;

  --cell-value-font-size: 0.28rem;
  --cell-value-color: #9299c6;

  --cell-label-font-size: 0.2rem;
  --cell-label-color: #9299c6;
  --cell-label-margin-top: 0;

  --cell-icon-size: 0.24rem;
  --cell-right-icon-color: #9299c6;
}
</style>

<template>
  <div class="demo-wrap">
    <demo-block
      title="基础用法"
      :section-style="sectionStyle"
    >
      <press-grid>
        <press-grid-item
          icon="photo-o"
          text="文字"
        />
        <press-grid-item
          icon="photo-o"
          text="文字"
        />
        <press-grid-item
          icon="photo-o"
          text="文字"
        />
        <press-grid-item
          icon="photo-o"
          text="文字"
        />
      </press-grid>
    </demo-block>

    <demo-block
      title="自定义列数"
      :section-style="sectionStyle"
    >
      <press-grid :column-num="3">
        <press-grid-item
          v-for="(item,index) of 6"
          :key="index"
          icon="photo-o"
          text="文字"
        />
      </press-grid>
    </demo-block>

    <demo-block
      title="自定义内容"
      :section-style="sectionStyle"
    >
      <press-grid
        :column-num="3"
        :border="false"
      >
        <press-grid-item
          v-for="(item,index) of 3"
          :key="index"
          use-slot
        >
          <img
            style="width: 100%; height: 90px;"
            :src="`https://img.yzcdn.cn/vant/apple-${index + 1}.jpg`"
          >
        </press-grid-item>
      </press-grid>
    </demo-block>

    <demo-block
      title="正方形格子"
      :section-style="sectionStyle"
    >
      <press-grid square>
        <press-grid-item
          v-for="(item,index) of 8"
          :key="index"
          icon="photo-o"
          text="文字"
        />
      </press-grid>
    </demo-block>

    <demo-block
      title="格子间距"
      :section-style="sectionStyle"
    >
      <press-grid :gutter="10">
        <press-grid-item
          v-for="(item,index) of 8"
          :key="index"
          icon="photo-o"
          text="文字"
        />
      </press-grid>
    </demo-block>

    <demo-block
      title="内容横排"
      :section-style="sectionStyle"
    >
      <press-grid
        direction="horizontal"
        :column-num="2"
      >
        <press-grid-item
          icon="photo-o"
          text="文字"
        />
        <press-grid-item
          icon="photo-o"
          text="文字"
        />
        <press-grid-item
          icon="photo-o"
          text="文字"
        />
      </press-grid>
    </demo-block>

    <demo-block
      title="页面跳转"
      :section-style="sectionStyle"
    >
      <press-grid
        clickable
        :column-num="2"
      >
        <press-grid-item
          icon="home-o"
          link-type="navigateTo"
          url="/pages/index/index"
          text="Navigate 跳转"
        />
        <press-grid-item
          icon="search"
          link-type="reLaunch"
          url="/pages/index/index"
          text="ReLaunch 跳转"
        />
      </press-grid>
    </demo-block>

    <demo-block
      title="提示信息"
      :section-style="sectionStyle"
    >
      <press-grid :column-num="2">
        <press-grid-item
          icon="home-o"
          text="文字"
          dot
        />
        <press-grid-item
          icon="search"
          text="文字"
          badge="99+"
        />
      </press-grid>
    </demo-block>
  </div>
</template>
<script>
import PressGrid from 'src/packages/press-grid/press-grid.vue';
import PressGridItem from 'src/packages/press-grid-item/press-grid-item.vue';


export default {
  components: {
    PressGrid,
    PressGridItem,
  },
  data() {
    return {
      sectionStyle: 'margin: 0;',

    };
  },
  methods: {

  },
};
</script>
<style scoped lang="scss">
@import "src/packages/base/mixin.scss";
</style>

<template>
  <div class="wrap">
    <demo-block
      title="基础用法"
      :section-style="sectionStyle"
    >
      <press-tabbar
        :fixed="false"
        :active="active"
        @change="onChange"
      >
        <press-tabbar-item icon="home-o">
          标签
        </press-tabbar-item>
        <press-tabbar-item icon="search">
          标签
        </press-tabbar-item>
        <press-tabbar-item icon="friends-o">
          标签
        </press-tabbar-item>
        <press-tabbar-item icon="setting-o">
          标签
        </press-tabbar-item>
      </press-tabbar>
    </demo-block>

    <demo-block
      title="通过名称匹配"
      :section-style="sectionStyle"
    >
      <press-tabbar
        :active="activeName"
        :fixed="false"
        @change="onChangeName"
      >
        <press-tabbar-item
          icon="home-o"
          name="home"
        >
          标签
        </press-tabbar-item>
        <press-tabbar-item
          icon="search"
          name="search"
        >
          标签
        </press-tabbar-item>
        <press-tabbar-item
          icon="friends-o"
          name="friends"
        >
          标签
        </press-tabbar-item>
        <press-tabbar-item
          icon="setting-o"
          name="setting"
        >
          标签
        </press-tabbar-item>
      </press-tabbar>
    </demo-block>

    <demo-block
      title="显示徽标"
      :section-style="sectionStyle"
    >
      <press-tabbar
        :active="active"
        :fixed="false"
        @change="onChange"
      >
        <press-tabbar-item icon="home-o">
          标签
        </press-tabbar-item>
        <press-tabbar-item
          icon="search"
          dot
        >
          标签
        </press-tabbar-item>
        <press-tabbar-item
          icon="friends-o"
          info="5"
        >
          标签
        </press-tabbar-item>
        <press-tabbar-item
          icon="setting-o"
          info="20"
        >
          标签
        </press-tabbar-item>
      </press-tabbar>
    </demo-block>

    <demo-block
      title="自定义图标"
      :section-style="sectionStyle"
    >
      <press-tabbar
        :fixed="false"
        :active="active"
        @change="onChange"
      >
        <press-tabbar-item info="3">
          <img
            slot="icon"
            :src="icon.normal"
            mode="aspectFit"
            style="width: 23px; height: 18px;"
          >
          <img
            slot="icon-active"
            :src="icon.active"
            mode="aspectFit"
            style="width: 23px; height: 18px;"
          >
          自定义
        </press-tabbar-item>
        <press-tabbar-item icon="search">
          标签
        </press-tabbar-item>
        <press-tabbar-item icon="setting-o">
          标签
        </press-tabbar-item>
      </press-tabbar>
    </demo-block>

    <demo-block
      title="自定义颜色"
      :section-style="sectionStyle"
    >
      <press-tabbar
        :active="active"
        :fixed="false"
        active-color="#07c160"
        inactive-color="#000"
        @change="onChange"
      >
        <press-tabbar-item icon="home-o">
          标签
        </press-tabbar-item>
        <press-tabbar-item icon="search">
          标签
        </press-tabbar-item>
        <press-tabbar-item icon="friends-o">
          标签
        </press-tabbar-item>
        <press-tabbar-item icon="setting-o">
          标签
        </press-tabbar-item>
      </press-tabbar>
    </demo-block>
  </div>
</template>
<script>
import PressTabbar from 'src/packages/press-tabbar/press-tabbar.vue';
import PressTabbarItem from 'src/packages/press-tabbar-item/press-tabbar-item.vue';


export default {
  components: {
    PressTabbar,
    PressTabbarItem,
  },
  data() {
    return {
      active: 0,
      activeName: 'home',
      sectionStyle: 'margin: 0;',

      icon: {
        normal: '//mike-1255355338.cos.ap-guangzhou.myqcloud.com/press%2Fimg%2Fuser-inactive.png',
        active: '//mike-1255355338.cos.ap-guangzhou.myqcloud.com/press%2Fimg%2Fuser-active.png',
      },
    };
  },
  methods: {
    onChange(val) {
      console.log('val', val);
      this.active = val;
    },
    onChangeName(val) {
      console.log('val', val);
      this.activeName = val;
    },
  },
};
</script>
<style scoped lang="scss">
@import "src/packages/base/mixin.scss";
</style>

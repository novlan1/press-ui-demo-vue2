<template>
  <div class="demo-wrap">
    <demo-block title="基础用法">
      <press-sidebar :active-key="activeKey">
        <press-sidebar-item title="标签名" />
        <press-sidebar-item title="标签名" />
        <press-sidebar-item title="标签名" />
      </press-sidebar>
    </demo-block>

    <demo-block title="徽标提示">
      <press-sidebar :active-key="activeKey">
        <press-sidebar-item
          title="标签名"
          dot
        />
        <press-sidebar-item
          title="标签名"
          badge="5"
        />
        <press-sidebar-item
          title="标签名"
          badge="99+"
        />
      </press-sidebar>
    </demo-block>

    <demo-block title="禁用选项">
      <press-sidebar :active-key="activeKey">
        <press-sidebar-item title="标签名" />
        <press-sidebar-item
          title="标签名"
          disabled
        />
        <press-sidebar-item title="标签名" />
      </press-sidebar>
    </demo-block>

    <demo-block title="监听切换事件">
      <press-sidebar
        :active-key="activeKey"
        @change="onChange"
      >
        <press-sidebar-item title="标签名1" />
        <press-sidebar-item
          title="标签名2"
        />
        <press-sidebar-item title="标签名3" />
      </press-sidebar>
    </demo-block>

    <!-- #ifndef H5 -->
    <PressToast id="van-toast" />
    <!-- #endif -->
  </div>
</template>
<script>
import PressSidebar from 'src/packages/press-sidebar/press-sidebar.vue';
import PressSidebarItem from 'src/packages/press-sidebar-item/press-sidebar-item.vue';
import PressToast from 'src/packages/press-toast/press-toast.vue';

export default {
  components: {
    PressSidebar,
    PressSidebarItem,
    PressToast,
  },
  data() {
    return {
      activeKey: 0,
    };
  },
  methods: {
    onChange(val) {
      console.log('onChange.val', val);
      this.$toast(`你切换到了标签名${val + 1}`);
    },
  },
};
</script>
<style scoped lang="scss">
@import "src/packages/base/mixin.scss";
.demo-wrap {
  padding-bottom: 30px;
}
</style>

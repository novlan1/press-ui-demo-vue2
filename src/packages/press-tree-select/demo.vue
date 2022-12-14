<template>
  <div class="wrap">
    <demo-block
      title="基础用法"
      :section-style="sectionStyle"
    >
      <press-tree-select
        :items="items"
        :main-active-index="mainActiveIndex"
        :active-id="activeId"
        @click-nav="onClickNav"
        @click-item="onClickItem"
      />
    </demo-block>
  </div>
</template>
<script>
import PressTreeSelect from 'src/packages/press-tree-select/press-tree-select.vue';


const config = {
  pro1Name: '浙江',
  pro1: [
    {
      text: '杭州',
      id: 1,
    },
    {
      text: '温州',
      id: 2,
    },
    {
      text: '宁波',
      id: 3,
      disabled: true,
    },
    {
      text: '义乌',
      id: 4,
    },
  ],
  pro2Name: '江苏',
  pro2: [
    {
      text: '南京',
      id: 5,
    },
    {
      text: '无锡',
      id: 6,
    },
    {
      text: '徐州',
      id: 7,
    },
    {
      text: '苏州',
      id: 8,
    },
  ],
  pro3Name: '福建',
  pro3: [
    {
      text: '泉州',
      id: 9,
    },
    {
      text: '厦门',
      id: 10,
    },
  ],
};
const items = [
  {
    text: config.pro1Name,
    children: config.pro1,
  },
  {
    text: config.pro2Name,
    children: config.pro2,
  },
  {
    text: config.pro3Name,
    disabled: true,
    children: config.pro3,
  },
];

export default {
  components: {
    PressTreeSelect,
  },
  data() {
    return {
      items,
      mainActiveIndex: 1,
      activeId: null,
      sectionStyle: 'margin: 0;',
    };
  },
  methods: {
    onClickNav(index) {
      this.mainActiveIndex = index || 0;
      // this.setData({
      // mainActiveIndex: detail.index || 0,
      // });
    },

    onClickItem(detail) {
      console.log('detail', detail);
      const activeId = this.activeId === detail.id ? null : detail.id;
      this.activeId = activeId;
      // this.setData({ activeId });
    },
  },
};
</script>
<style scoped lang="scss">
@import "src/packages/base/mixin.scss";
</style>

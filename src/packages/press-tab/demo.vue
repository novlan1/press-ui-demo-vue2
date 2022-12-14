<template>
  <div class="demo-wrap">
    <demo-block
      title="基础用法"
      header-style="background: #f7f8fa;"
    >
      <press-tabs
        :active="active"
        @change="onChange"
      >
        <press-tab
          v-for="(item,index) of tabs4"
          :key="index"
          :title="`标签 ${index+1}`"
        >
          <div class="content">
            内容 {{ index+1 }}
          </div>
        </press-tab>
      </press-tabs>
    </demo-block>

    <demo-block
      title="通过名称匹配"
      header-style="background: #f7f8fa;"
    >
      <press-tabs
        :active="activeName"
      >
        <press-tab
          v-for="(item, index) of tabsWithName"
          :key="index"
          :title="`标签 ${index+1}`"
          :name="item.name"
        >
          <div class="content">
            内容 {{ index+1 }}
          </div>
        </press-tab>
      </press-tabs>
    </demo-block>

    <demo-block
      title="横向滚动"
      header-style="background: #f7f8fa;"
    >
      <press-tabs>
        <press-tab
          v-for="(item,index) of tabs7"
          :key="index"
          :title="`标签 ${index+1}`"
        >
          <div class="content">
            内容 {{ index+1 }}
          </div>
        </press-tab>
      </press-tabs>
    </demo-block>

    <demo-block
      title="禁用标签"
      header-style="background: #f7f8fa;"
    >
      <press-tabs
        @disabled="onClickDisabled"
      >
        <press-tab
          v-for="(item,index) of tabsDisabled"
          :key="index"
          :title="`标签 ${index+1}`"
          :disabled="!!item.disabled"
        >
          <div class="content">
            内容 {{ index+1 }}
          </div>
        </press-tab>
      </press-tabs>
    </demo-block>

    <demo-block
      title="样式风格"
      header-style="background: #f7f8fa;"
    >
      <press-tabs
        type="card"
      >
        <press-tab
          v-for="(item,index) of tabs4"
          :key="index"
          :title="`标签 ${index+1}`"
        >
          <div class="content">
            内容 {{ index+1 }}
          </div>
        </press-tab>
      </press-tabs>
    </demo-block>

    <demo-block
      title="点击事件"
      header-style="background: #f7f8fa;"
    >
      <press-tabs
        @click="onClick"
      >
        <press-tab
          v-for="(item,index) of tabs2"
          :key="index"
          :title="`标签 ${index+1}`"
        >
          <div class="content">
            内容 {{ index+1 }}
          </div>
        </press-tab>
      </press-tabs>
    </demo-block>

    <demo-block
      title="粘性布局"
      header-style="background: #f7f8fa;"
    >
      <press-tabs
        sticky
      >
        <press-tab
          v-for="(item,index) of tabs4"
          :key="index"
          :title="`标签 ${index+1}`"
        >
          <div class="content">
            内容 {{ index+1 }}
          </div>
        </press-tab>
      </press-tabs>
    </demo-block>

    <demo-block
      title="切换动画"
      header-style="background: #f7f8fa;"
    >
      <press-tabs
        animated
      >
        <press-tab
          v-for="(item,index) of tabs4"
          :key="index"
          :title="`标签 ${index+1}`"
        >
          <div class="content">
            内容 {{ index+1 }}
          </div>
        </press-tab>
      </press-tabs>
    </demo-block>

    <demo-block
      title="滑动切换"
      header-style="background: #f7f8fa;"
    >
      <press-tabs
        swipeable
      >
        <press-tab
          v-for="(item,index) of tabs4"
          :key="index"
          :title="`标签 ${index+1}`"
        >
          <div class="content">
            内容 {{ index+1 }}
          </div>
        </press-tab>
      </press-tabs>
    </demo-block>
  </div>
</template>
<script>

export default {
  data() {
    return {
      active: 2,
      activeName: 'c',
      tabs2: [1, 2],
      tabs4: [1, 2, 3, 4],
      tabs7: [1, 2, 3, 4, 5, 6, 7],
      tabsDisabled: [{}, {}, { disabled: true }, {}],
      tabsWithName: [
        { name: 'a' },
        { name: 'b' },
        { name: 'c' },
      ],
    };
  },
  onLoad() {
    // #ifdef MP-QQ
    qq.showShareMenu({
      showShareItems: ['qq', 'qzone', 'wechatFriends', 'wechatMoment'],
    });
    // #endif
  },
  mounted() {
    this.$nextTick(() => {
      // this.$refs.pressTabs.resize();
    });
  },
  methods: {
    onChange(val) {
      console.log('onChange.val', val);
    },
    onClickDisabled(val) {
      console.log('onClickDisabled.val', val);
    },
    onClick(val) {
      console.log('onClick.val', val);
    },
  },
};
</script>

<style scoped lang="scss">
.demo-wrap {
  font-size: 16px;
  height: 1000px;
  overflow: scroll;
  padding-bottom: 30px;

  .content {
    padding: 20px;
  }
}
</style>


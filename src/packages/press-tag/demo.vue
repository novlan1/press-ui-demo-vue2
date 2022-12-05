<template>
  <div class="wrap">
    <demo-block
      v-for="(demo) of demoList"
      :key="demo.key"
      :title="demo.title"
    >
      <div
        v-for="(item,index) of list"
        :key="index"
        class="demo-part"
      >
        <press-tag
          :type="item.type"
          :plain="demo.plain || false"
          :round="demo.round || false"
          :mark="demo.mark || false"
        >
          标签
        </press-tag>
      </div>
    </demo-block>

    <demo-block
      title="自定义颜色"
    >
      <div class="demo-part">
        <press-tag color="#f2826a">
          标签
        </press-tag>
      </div>
      <div class="demo-part">
        <press-tag color="#7232dd">
          标签
        </press-tag>
      </div>
      <div class="demo-part">
        <press-tag
          color="#7232dd"
          plain
        >
          标签
        </press-tag>
      </div>
      <div class="demo-part">
        <press-tag
          color="#ffe1e1"
          text-color="#ad0000"
        >
          标签
        </press-tag>
      </div>
    </demo-block>

    <demo-block
      title="标签大小"
    >
      <div class="demo-part">
        <press-tag type="danger">
          标签
        </press-tag>
      </div>
      <div class="demo-part">
        <press-tag
          type="danger"
          size="medium"
        >
          标签
        </press-tag>
      </div>
      <div class="demo-part">
        <press-tag
          type="danger"
          size="large"
        >
          标签
        </press-tag>
      </div>
    </demo-block>

    <demo-block
      title="可关闭标签"
    >
      <div
        v-if="show.primary"
        class="demo-part"
      >
        <press-tag
          type="primary"
          closeable
          @close="onClose('primary')"
        >
          标签
        </press-tag>
      </div>
      <div class="demo-part">
        <press-tag
          v-if="show.success"
          type="success"
          closeable
          @close="onClose('success')"
        >
          标签
        </press-tag>
      </div>
    </demo-block>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        {
          type: 'primary',
        },
        {
          type: 'success',
        },
        {
          type: 'danger',
        },
        {
          type: 'warning',
        },
      ],
      demoList: [
        {
          key: 'basic',
          title: '基础用法',
        },
        {
          key: 'plain',
          title: '空心样式',
          plain: true,
        },
        {
          key: 'round',
          title: '圆角样式',
          round: true,
        },
        {
          key: 'mark',
          title: '标记样式',
          mark: true,
        },
      ],
      show: {
        primary: true,
        success: true,
      },
    };
  },
  methods: {
    onClose(type) {
      console.log('type', type);
      this.show[type] = false;
    },
  },
};
</script>
<style scoped lang="scss">
@import "src/packages/base/mixin.scss";
.demo-part {
  margin-right: 12px;
  display: inline-block;
}
</style>

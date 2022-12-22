<template>
  <div class="wrap">
    <demo-block
      title="基础用法"
      :section-style="sectionStyle"
      :header-style="headerStyle"
    >
      <press-collapse
        :value="activeNames"
        @change="onChange"
      >
        <press-collapse-item
          title="标题1"
          name="1"
        >
          代码是写出来给人看的，附带能在机器上运行
        </press-collapse-item>
        <press-collapse-item
          title="标题2"
          name="2"
        >
          代码是写出来给人看的，附带能在机器上运行
        </press-collapse-item>
        <press-collapse-item
          title="标题3"
          name="3"
        >
          代码是写出来给人看的，附带能在机器上运行
        </press-collapse-item>
      </press-collapse>
    </demo-block>

    <demo-block
      title="手风琴"
      :header-style="headerStyle"
      :section-style="sectionStyle"
    >
      <press-collapse
        :value="activeNames2"
        accordion
        @change="onChangeAccordion"
      >
        <press-collapse-item
          title="标题1"
          name="1"
        >
          代码是写出来给人看的，附带能在机器上运行
        </press-collapse-item>
        <press-collapse-item
          title="标题2"
          name="2"
        >
          代码是写出来给人看的，附带能在机器上运行
        </press-collapse-item>
        <press-collapse-item
          title="标题3"
          name="3"
        >
          代码是写出来给人看的，附带能在机器上运行
        </press-collapse-item>
      </press-collapse>
    </demo-block>

    <demo-block
      title="禁用状态"
      :header-style="headerStyle"
      :section-style="sectionStyle"
    >
      <press-collapse
        :value="activeNames3"
        accordion
        @change="onChangeDisabled"
      >
        <press-collapse-item
          title="标题1"
          name="1"
        >
          代码是写出来给人看的，附带能在机器上运行
        </press-collapse-item>
        <press-collapse-item
          title="标题2"
          disabled
          name="2"
        >
          代码是写出来给人看的，附带能在机器上运行
        </press-collapse-item>
        <press-collapse-item
          title="标题3"
          name="3"
          disabled
        >
          代码是写出来给人看的，附带能在机器上运行
        </press-collapse-item>
      </press-collapse>
    </demo-block>

    <demo-block
      title="自定义标题内容"
      :section-style="sectionStyle"
      :header-style="headerStyle"
    >
      <press-collapse
        :value="activeNamesTitle"
        @change="onChangeTitle"
      >
        <press-collapse-item name="1">
          <div slot="title">
            标题1
            <press-icon-plus name="question-o" />
          </div>
          代码是写出来给人看的，附带能在机器上运行
        </press-collapse-item>
        <press-collapse-item
          title="标题2"
          name="2"
          icon="shop-o"
        >
          代码是写出来给人看的，附带能在机器上运行
        </press-collapse-item>
      </press-collapse>
    </demo-block>
  </div>
</template>
<script>
import PressCollapseItem from 'src/packages/press-collapse-item/press-collapse-item.vue';
import PressCollapse from 'src/packages/press-collapse/press-collapse.vue';


export default {
  components: {
    PressCollapseItem,
    PressCollapse,
  },
  data() {
    return {
      activeNames: ['1'],
      activeNames2: '1',
      activeNames3: ['1'],
      activeNamesTitle: ['1'],
      sectionStyle: 'margin: 0;',
      headerStyle: 'background: #f7f8fa;',
    };
  },
  methods: {
    onChange(value) {
      console.log('onChange.value: ', value);
      this.activeNames = value;
    },
    onChangeAccordion(value) {
      this.activeNames2 = value;
    },
    onChangeDisabled(value) {
      this.activeNames3 = value;
    },
    onChangeTitle(value) {
      this.activeNamesTitle = value;
    },
  },
};
</script>
<style scoped lang="scss">
@import "src/packages/base/mixin.scss";
.wrap {
  background: #f7f8fa;
  padding-bottom: 20px;
}
</style>

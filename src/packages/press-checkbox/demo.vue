<template>
  <view class="wrap">
    <demo-block
      title="基础用法"
      :section-style="sectionStyle"
    >
      <press-checkbox
        :value="checkedMap.basic"
        @change="v=>onChange(v, 'basic')"
      >
        复选框
      </press-checkbox>
    </demo-block>

    <demo-block
      title="禁用状态"
      :section-style="sectionStyle"
    >
      <press-checkbox
        :value="checkedMap.disabled"
        disabled
        @change="v=>onChange(v, 'disabled')"
      >
        复选框
      </press-checkbox>
    </demo-block>


    <demo-block
      title="自定义形状"
      :section-style="sectionStyle"
    >
      <press-checkbox
        shape="square"
        :value="checkedMap.shape"
        @change="v=>onChange(v, 'shape')"
      >
        复选框
      </press-checkbox>
    </demo-block>

    <demo-block
      title="自定义颜色"
      :section-style="sectionStyle"
    >
      <press-checkbox
        :value="checkedMap.color"
        checked-color="#07c160"
        @change="v=>onChange(v, 'color')"
      >
        复选框
      </press-checkbox>
    </demo-block>

    <demo-block
      title="自定义大小"
      :section-style="sectionStyle"
    >
      <press-checkbox
        :value="checkedMap.size"
        :icon-size="25"
        @change="v=>onChange(v, 'size')"
      >
        复选框
      </press-checkbox>
    </demo-block>

    <demo-block
      title="禁用文本点击"
      :section-style="sectionStyle"
    >
      <press-checkbox
        :value="checkedMap.noLabel"
        label-disabled
        @change="v=>onChange(v, 'noLabel')"
      >
        复选框
      </press-checkbox>
    </demo-block>

    <demo-block
      title="复选框组"
      :section-style="sectionStyle"
    >
      <press-checkbox-group
        :value="checkedMap.group"
        @change="v=>onChange(v, 'group')"
      >
        <press-checkbox
          name="a"
          :custom-style="customStyle"
        >
          复选框 a
        </press-checkbox>
        <press-checkbox
          name="b"
          :custom-style="customStyle"
        >
          复选框 b
        </press-checkbox>
        <press-checkbox
          name="c"
          :custom-style="customStyle"
        >
          复选框 c
        </press-checkbox>
      </press-checkbox-group>
    </demo-block>

    <demo-block
      title="限制最大可选数"
      :section-style="sectionStyle"
    >
      <press-checkbox-group
        :value="checkedMap.groupMax"
        :max="2"
        @change="v=>onChange(v, 'groupMax')"
      >
        <press-checkbox
          name="a"
          :custom-style="customStyle"
        >
          复选框 a
        </press-checkbox>
        <press-checkbox
          name="b"
          :custom-style="customStyle"
        >
          复选框 b
        </press-checkbox>
        <press-checkbox
          name="c"
          :custom-style="customStyle"
        >
          复选框 c
        </press-checkbox>
      </press-checkbox-group>
    </demo-block>
  </view>
</template>
<script>

export default {
  data() {
    return {
      checkedMap: {
        basic: true,
        shape: true,
        size: true,
        color: true,
        noLabel: true,
        disabled: true,
        group: ['a', 'b'],
        groupMax: [],
      },
      sectionStyle: 'margin: 1px 18px;',
      customStyle: 'margin-bottom: 8px;',
    };
  },
  onLoad() {
    // #ifdef MP-QQ
    qq.showShareMenu({
      showShareItems: ['qq', 'qzone', 'wechatFriends', 'wechatMoment'],
    });
    // #endif
  },
  methods: {
    onChange(val, type) {
      console.log('onChange.val', val, type);
      this.checkedMap[type] = val;
    },
  },
};
</script>

<style scoped lang="scss">
.wrap {
  padding-bottom: 20px;
}
</style>


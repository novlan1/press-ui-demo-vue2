<template>
  <view>
    <uni-card
      :is-shadow="false"
      is-full
    >
      <text class="uni-h6">
        easyinput 组件是对原生input组件的增强 ，是专门为配合表单组件 uni-forms 而设计的，easyinput 内置了边框，图标等，同时包含 input
        所有功能
      </text>
    </uni-card>
    <uni-section
      title="默认"
      sub-title="使用 focus 属性自动获取输入框焦点"
      type="line"
      padding
    >
      <uni-easyinput
        v-model="value"
        error-message
        focus
        placeholder="请输入内容"
        @input="input"
      />
    </uni-section>

    <uni-section
      title="去除空格"
      sub-title="使用 trim 属性 ,可以控制返回内容的空格 "
      type="line"
      padding
    >
      <text class="uni-subtitle">
        输入内容：{{ '"'+value+'"' }}
      </text>
      <uni-easyinput
        v-model="value"
        class="uni-mt-5"
        trim="all"
        placeholder="请输入内容"
        @input="input"
      />
    </uni-section>


    <uni-section
      title="自定义样式"
      sub-title="使用 styles 属性 ,可以自定义输入框样式"
      type="line"
      padding
    >
      <uni-easyinput
        v-model="value"
        :styles="styles"
        :placeholder-style="placeholderStyle"
        placeholder="请输入内容"
        @input="input"
      />
    </uni-section>

    <uni-section
      title="图标"
      sub-title="使用 prefixIcon / suffixIcon 属性 ,可以自定义输入框左右侧图标"
      type="line"
      padding
    >
      <uni-easyinput
        v-model="value"
        prefix-icon="search"
        placeholder="左侧图标"
        @iconClick="iconClick"
      />
      <uni-easyinput
        v-model="value"
        class="uni-mt-5"
        suffix-icon="search"
        placeholder="右侧图标"
        @iconClick="iconClick"
      />
    </uni-section>


    <uni-section
      title="插槽"
      sub-title="使用 prefixIcon / suffixIcon 插槽 ,可以自定义输入框左右侧内容"
      type="line"
      padding
    >
      <uni-easyinput
        v-model="value"
        placeholder="请输入网址"
      >
        <template #prefixIcon>
          <view
            style="background-color: #f2f2f2;padding: 0 10rpx;
					height: 70rpx;line-height: 70rpx;margin-right: 10rpx;"
          >
            https://
          </view>
        </template>
      </uni-easyinput>
      <uni-easyinput
        v-model="value"
        class="uni-mt-5"
        prefix-icon="search"
        placeholder="想看什么,搜索一下"
      >
        <template #suffixIcon>
          <button
            class="uni-btn uni-btn-mini uni-btn-radius"
            type="primary"
            size="mini"
          >
            搜索
          </button>
        </template>
      </uni-easyinput>
    </uni-section>


    <uni-section
      title="禁用"
      sub-title="使用 disabled 属性禁用输入框"
      type="line"
      padding
    >
      <uni-easyinput
        disabled
        value="已禁用"
        placeholder="请输入内容"
      />
    </uni-section>

    <uni-section
      title="密码框"
      sub-title="指定属性 type=password 使用密码框,右侧会显示眼睛图标"
      type="line"
      padding
    >
      <uni-easyinput
        v-model="password"
        type="password"
        placeholder="请输入密码"
      />
    </uni-section>

    <uni-section
      title="多行文本"
      sub-title="指定属性 type=textarea 使用多行文本框"
      type="line"
      padding
    >
      <uni-easyinput
        v-model="value"
        type="textarea"
        placeholder="请输入内容"
      />
    </uni-section>


    <uni-section
      title="多行文本自动高度"
      sub-title="使用属性 autoHeight 使多行文本框自动增高"
      type="line"
      padding
    >
      <uni-easyinput
        v-model="value"
        type="textarea"
        auto-height
        placeholder="请输入内容"
      />
    </uni-section>
  </view>
</template>

<script>
export default {
  data() {
    return {
      value: '',
      password: '',
      placeholderStyle: 'color:#2979FF;font-size:14px',
      styles: {
        color: '#2979FF',
        borderColor: '#2979FF',
      },
    };
  },
  onLoad() {},
  onReady() {},
  methods: {
    input(e) {
      console.log('输入内容：', e);
    },
    iconClick(type) {
      uni.showToast({
        title: `点击了${type === 'prefix' ? '左侧' : '右侧'}的图标`,
        icon: 'none',
      });
    },
  },
};
</script>

<style lang="scss">
.uni-mt-5 {
  margin-top: 5px;
}
</style>

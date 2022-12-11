<template>
  <div class="wrap">
    <demo-block
      title="基础用法"
      :header-style="headerStyle"
      :section-style="sectionStyle"
    >
      <press-field
        :value="value"
        placeholder="请输入用户名"
        :border="false"
        @change="onChange"
      />
    </demo-block>

    <demo-block
      title="自定义类型"
      :header-style="headerStyle"
      :section-style="sectionStyle"
    >
      <press-field
        :value="text"
        required
        clearable
        label="文本"
        icon="question-o"
        placeholder="请输入文本"
        @click-icon="onClickIcon"
      />

      <press-field
        :value="tel"
        placeholder="请输入手机号"
        label="手机号"
        required
        clearable
        type="tel"
        :border="false"
        @change="onChange"
      />


      <press-field
        :value="digit"
        placeholder="请输入整数"
        label="整数"
        required
        clearable
        type="digit"
        :border="false"
        @change="onChange"
      />

      <press-field
        :value="number"
        placeholder="请输入数字（支持小数）"
        label="数字"
        required
        clearable
        type="digit"
        :border="false"
        @change="onChange"
      />

      <press-field
        :value="password"
        placeholder="请输入密码"
        label="密码"
        required
        clearable
        type="password"
        :border="false"
        @change="onChange"
      />
    </demo-block>

    <demo-block
      title="禁用输入框"
      :header-style="headerStyle"
      :section-style="sectionStyle"
    >
      <press-field
        label="用户名"
        left-icon="contact"
        disabled
        placeholder="输入框已禁用"
        :border="false"
        @change="onChange"
      />
    </demo-block>

    <demo-block
      title="错误提示"
      :header-style="headerStyle"
      :section-style="sectionStyle"
    >
      <press-field
        :value="username"
        label="用户名"
        placeholder="请输入用户名"
        error
        :border="false"
        @change="onChange"
      />
      <press-field
        :value="username"
        label="手机号"
        placeholder="请输入手机号"
        error-message="手机号格式错误"
        :border="false"
        @change="onChange"
      />
    </demo-block>

    <demo-block
      title="内容对齐方式"
      :header-style="headerStyle"
      :section-style="sectionStyle"
    >
      <press-field
        label="用户名"
        placeholder="请输入用户名"
        :border="false"
        input-align="right"
        @change="onChange"
      />
    </demo-block>

    <demo-block
      title="高度自适应"
      :header-style="headerStyle"
      :section-style="sectionStyle"
    >
      <press-field
        label="留言"
        type="textarea"
        placeholder="请输入留言"
        :border="false"
        autosize
        @change="onChange"
      />
    </demo-block>

    <demo-block
      title="插入按钮"
      :header-style="headerStyle"
      :section-style="sectionStyle"
    >
      <press-field
        center
        clearable
        label="短信验证码"
        placeholder="请输入短信验证码"
        :border="false"
        autosize
        @change="onChange"
      >
        <press-button
          slot="button"
          size="small"
          type="primary"
        >
          发送验证码
        </press-button>
      </press-field>
    </demo-block>
  </div>
</template>
<script>
import PressField from 'src/packages/press-field/press-field.vue';
export default {
  components: {
    PressField,
  },
  data() {
    return {
      value: '',
      username: '',
      text: '',
      password: '',
      number: '',
      digit: '',
      tel: '',

      headerStyle: 'background: #f7f8fa;',
      sectionStyle: 'background: #f7f8fa;margin: 0;padding: 0;',
    };
  },
  methods: {
    onChange(val) {
      console.log('onChange.val', val);
    },
    onClickIcon() {
      console.log('onClickIcon');
    },
  },
};
</script>
<style scoped lang="scss">
@import "src/packages/base/mixin.scss";
page,
.wrap {
  background: #f7f8fa !important;
  min-height: 100%;
  padding-bottom: 20px;
}
</style>

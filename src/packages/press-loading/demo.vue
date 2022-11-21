<template>
  <div class="wrap">
    <demo-block title="按钮模式">
      <div
        class="primary-btn"
        style="position:relative;margin-left: 10px;"
        @click.stop="onShowLoading('btn')"
      >
        {{ options.btn.show ? '' : "点击加载" }}
        <press-loading
          v-if="options.btn.show"
          loading-scenes="btn"
        />
      </div>
    </demo-block>

    <demo-block title="页面模式">
      <div
        class="primary-btn"
        style="position:relative;margin-left: 10px;"
        @click.stop="onShowLoading('page')"
      >
        点我查看
      </div>
      <div />
    </demo-block>

    <demo-block title="指定背景色">
      <div
        class="primary-btn"
        style="position:relative;margin-left: 10px;"
        @click.stop="onShowLoading('bg')"
      >
        三秒后消失
      </div>
    </demo-block>

    <press-loading
      v-if="options.page.show"
    />
    <press-loading
      v-if="options.bg.show"
      loading-bg="#eee"
    />
  </div>
</template>
<script>
export default {
  data() {
    return {
      options: {
        btn: {
          show: false,
        },
        page: {
          show: false,
        },
        bg: {
          show: false,
        },
      },
    };
  },
  methods: {
    onShowLoading(type) {
      this.options[type].show = true;
      setTimeout(() => {
        this.options[type].show = false;
      }, 3000);
    },
  },
};
</script>
<style scoped lang="scss">
@import "src/packages/base/mixin.scss";

.wrap {
  width: 100%;
  height: 100%;
}

.section-content {
  margin: 0 10px;
}

.primary-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  @include primary-btn(2rem, 0.72rem, 0.32rem);
  @include btn-default-bg;
}

.secondary-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  @include secondary-btn(2rem, 0.72rem, 0.32rem);
}
</style>

<template>
  <div class="wrap">
    <!-- #ifndef H5 -->
    <PressNotify
      id="press-notify"
    />
    <!-- #endif -->


    <demo-block title="基础用法">
      <press-button
        type="e-sport-primary"
        custom-style="width: auto;"
        @click="showNotify('通知内容')"
      >
        基础用法
      </press-button>
    </demo-block>

    <demo-block title="通知类型">
      <div style="margin-bottom: 12px;">
        <press-button
          type="e-sport-primary"
          custom-style="margin: 0 12px 0 0;width: auto;"
          @click="showNotify({ type: 'primary', message: '通知内容' })"
        >
          主要通知
        </press-button>

        <press-button
          type="e-sport-primary"
          custom-style="width: auto;"
          @click="showNotify({ type: 'success', message: '通知内容' })"
        >
          成功通知
        </press-button>
      </div>
      <div>
        <press-button
          type="e-sport-primary"
          custom-style="margin: 0 12px 0 0;width: auto;"
          @click="showNotify({ type: 'danger', message: '通知内容' })"
        >
          危险通知
        </press-button>

        <press-button
          type="e-sport-primary"
          custom-style="width: auto;"
          @click="showNotify({ type: 'warning', message: '通知内容' })"
        >
          警告通知
        </press-button>
      </div>
    </demo-block>

    <demo-block title="自定义配置">
      <press-button
        type="e-sport-primary"
        custom-style="margin: 0 12px 0 0;width: auto;"
        @click="showNotify({
          message: '自定义颜色',
          color: '#ad0000',
          background: '#ffe1e1',
        })"
      >
        自定义颜色
      </press-button>

      <press-button
        type="e-sport-primary"
        custom-style="width: auto;"
        @click="showNotify({
          message: '自定义时长',
          duration: 1000,
        })"
      >
        自定义时长
      </press-button>
    </demo-block>
  </div>
</template>
<script>
import PressNotify from 'src/packages/press-notify/press-notify.vue';
import PressNotifyHandler from 'src/packages/press-notify/';


export default {
  components: {
    PressNotify,
  },
  data() {
    return {

    };
  },
  mounted() {
  },
  methods: {
    showNotify(options) {
      if (process.env.UNI_PLATFORM !== 'h5') {
        PressNotifyHandler(options);
        return;
      }
      let cOptions = options;
      if (typeof options !== 'object') {
        cOptions = { message: options };
      }
      PressNotifyHandler({
        ...cOptions,
        top: 44,
      });
    },
  },
};
</script>
<style scoped lang="scss">
@import "src/packages/base/mixin.scss";
</style>

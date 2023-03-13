<script>
import { updateManager } from './utils/update-manager/update-manager';
import { setLang } from 'packages/set-ui/utils/i18n/i18n';
import { watchMessage } from 'packages/set-ui/utils/post-message/post-message';


export default {
  onLaunch() {
    console.log('App Launch');
    watchMessage();
    updateManager();
  },
  onShow() {
    console.log('App Show');
  },
  onHide() {
    console.log('App Hide');
  },
  watch: {
    $route: {
      handler() {
        setLang();
      },
      immediate: true,
    },
  },
};
</script>

<style>
/*每个页面公共css */
uni-page-body {
  height: 100%;
  background: #fff;
}
page {
  min-height: 100%;
  background: #fff !important;
}
</style>
<style lang="scss" src="packages/set-ui/packages/base/reset.scss"></style>
<style lang="scss" src="packages/set-ui/packages/base/iconfont-mp.scss"></style>

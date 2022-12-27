<script>
import { updateManager } from './utils/update-manager/update-manager';
const CHANGE_IFRAME_STYLE_TYPE = 'CHANGE_IFRAME_STYLE_TYPE';

function onMessage(e) {
  if (e.data.type !== CHANGE_IFRAME_STYLE_TYPE) {
    return ;
  }
  if (!e.data.data) return;

  const { name, value } = e.data.data;
  const html = document.getElementsByTagName('html')[0];
  html.style.setProperty(name, value);
}

export default {
  onLaunch() {
    // #ifdef H5
    window.addEventListener('message', onMessage, false);
    // #endif

    updateManager();

    console.log('App Launch');
  },
  onShow() {
    console.log('App Show');
  },
  onHide() {
    console.log('App Hide');
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
<style lang="scss" src="src/packages/base/reset.scss"></style>
<style lang="scss" src="src/packages/base/iconfont-mp.scss"></style>

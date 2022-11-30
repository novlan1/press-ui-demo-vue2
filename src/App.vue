<script>
export default {
  onLaunch() {
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

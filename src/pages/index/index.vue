<template>
  <div class="home-container">
    <div class="home-header">
      <image
        class="home-header__bg"
        src="https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/press/img/uniui-header-bg.png"
        mode="widthFix"
      />
      <image
        class="home-header__logo"
        src="https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/press/img/press-ui.png"
        mode="aspectFit"
        @longpress.stop="onMorsePwdLongPress"
        @click.stop="onMorsePwdClick"
      />
      <div class="home-header__content">
        <div class="home-header__content-title">
          {{ t('introduce.name') }}
        </div>
        <div class="home-header__content-info">
          <text class="home-header__content-subtitle">
            {{ t('introduce.detail') }}
          </text>
        </div>
      </div>
    </div>

    <div class="home-content">
      <uni-card
        padding="0"
      >
        <template v-for="(item, index) of pages">
          <uni-section
            :key="`section-${index}`"
            :title="getComponentTypeTitle(item)"
            color="#007aff"
            type="line"
            header-style="font-weight: 500;margin-bottom: 6px;"
          />
          <uni-list
            :key="`list-${index}`"
            :border="false"
          >
            <uni-list-item
              v-for="(nav, idx) in item.list"
              :key="`nav-${idx}`"
              custom-class="list-item"
              :border="false"
              show-arrow
              :title="getNavName(nav)"
              link
              :to="`/pages${nav.url}`"
            />
          </uni-list>
        </template>
      </uni-card>
    </div>
  </div>
</template>
<script>
import { morsePwdMixin } from '../../utils/morse-password/morse-password-mixin';
import { toggleI18n } from '../../utils/i18n/toggle-i18n';

const pagesConfig = require('./page-config.json');


export default {
  components: {},
  mixins: [morsePwdMixin([1, 1, 1], toggleI18n)],
  data() {
    return {
      pages: pagesConfig.pages.filter(item => item.list && item.list.length),
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
    getNavName(item) {
      const list = item.url.split('/');
      return this.t(`titleMap.${list[list.length - 1]}`);
    },
    getComponentTypeTitle(item) {
      return this.t(`titleMap.${item.name}`);
    },
  },

};
</script>

<style lang="scss">
.home-container {
  position: relative;
  background-color: #fff;
  overflow: hidden;
}

.home-header {
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  /* #ifndef APP-NVUE */
  box-sizing: border-box;

  /* #endif */
  &__bg {
    display: flex;
    margin-top: 20px;
    /* #ifdef APP-NVUE */
    flex: 1;
    /* #endif */
    /* #ifndef APP-NVUE */
    width: 100%;
    /* #endif */
  }

  &__logo {
    position: absolute;
    top: 22px;
    left: 20px;
    width: 112px;
    height: 22px;
    z-index: 1;
  }

  &__content {
    position: absolute;
    top: 58px;
    left: 48px;
    width: 200px;
    z-index: 1;

    &-title {
      font-size: 16px;
      font-weight: 600;
      color: #1f1f1f;
    }

    &-info {
      /* #ifdef H5 */
      font-size: 16px;
      /* #endif */
    }

    &-subtitle {
      margin-top: 8px;
      font-size: 12px;
      font-weight: 400;
      color: #666;
    }
  }
}

.home-content {
  margin-top: 170px;
  overflow: hidden;

  .list-item {
    background: #f7f8fa;
    border-radius: 99px;
    margin: 0 0 12px;
    padding-left: 20px;
  }
}
</style>

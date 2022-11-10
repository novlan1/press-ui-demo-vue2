<template>
  <view class="home-container">
    <!-- <press-loading /> -->
    <view class="home-header">
      <image
        class="home-header__bg"
        src="https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/press/img/uniui-header-bg.png"
        mode="widthFix"
      />
      <image
        class="home-header__logo"
        src="https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/press/img/press-ui.png"
        mode="aspectFit"
      />
      <view class="home-header__content">
        <view class="home-header__content-title">
          全端兼容 高性能
        </view>
        <view class="home-header__content-info">
          <text class="home-header__content-subtitle">
            press-ui 是一套易用的、灵活的、基于uni-app的组件库
          </text>
        </view>
      </view>
    </view>

    <view class="home-content">
      <uni-card
        is-shadow
        padding="0"
      >
        <!-- <uni-section
          title="辅助样式"
          sub-title="引入 uni-sass 后通过辅助样式提升快捷布局能力"
          color="#007aff"
          type="line"
          style="margin-top: 0;"
        />
        <uni-list>
          <uni-list-item
            v-for="(layout, index) in styles"
            :key="index"
            show-arrow
            :thumb="'https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/press/icon/'+layout.icon+'.png'"
            :title="layout.name"
            link
            :to="`/pages/${layout.url}`"
          />
        </uni-list>
        <uni-section
          title="基础组件"
          sub-title="封装常用功能的组件"
          color="#007aff"
          type="line"
        />
        <uni-list>
          <uni-list-item
            v-for="(view, index) in views"
            :key="index"
            show-arrow
            :thumb="'https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/press/icon/'+view.icon+'.png'"
            :title="view.name"
            link
            :to="`/pages/${view.url}`"
          />
        </uni-list>
        <uni-section
          title="布局组件"
          sub-title="使复杂的布局变得简单"
          color="#007aff"
          type="line"
          style="margin-top: 0;"
        />
        <uni-list>
          <uni-list-item
            v-for="(layout, index) in layouts"
            :key="index"
            show-arrow
            :thumb="'https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/press/icon/'+layout.icon+'.png'"
            :title="layout.name"
            link
            :to="`/pages/${layout.url}`"
          />
        </uni-list>

        <uni-section
          title="表单组件"
          color="#007aff"
          type="line"
        />
        <uni-list>
          <uni-list-item
            v-for="(view, index) in forms"
            :key="index"
            show-arrow
            :thumb="'https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/press/icon/'+view.icon+'.png'"
            :title="view.name"
            link
            :to="`/pages/${view.url}`"
          />
        </uni-list>
        <uni-section
          title="DataCom组件"
          color="#007aff"
          type="line"
        />
        <uni-list>
          <uni-list-item
            v-for="(view, index) in dataComs"
            :key="index"
            show-arrow
            :thumb="'https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/press/icon/'+view.icon+'.png'"
            :title="view.name"
            link
            :to="`/pages/${view.url}`"
          />
        </uni-list>
        <uni-section
          title="功能组件"
          color="#007aff"
          type="line"
        />
        <uni-list>
          <uni-list-item
            v-for="(func, index) in functionals"
            :key="index"
            show-arrow
            :thumb="'https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/press/icon/'+func.icon+'.png'"
            :title="func.name"
            link
            :to="`/pages/${func.url}`"
          />
        </uni-list>
        <uni-section
          title="导航"
          color="#007aff"
          type="line"
        />
        <uni-list>
          <uni-list-item
            v-for="(navi, index) in navigations"
            :key="index"
            show-arrow
            :thumb="'https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/press/icon/'+navi.icon+'.png'"
            :title="navi.name"
            link
            :to="`/pages/${navi.url}`"
          />
        </uni-list> -->
        <uni-section
          title="press"
          color="#007aff"
          type="line"
        />
        <uni-list>
          <uni-list-item
            v-for="(navi, index) in press"
            :key="index"
            show-arrow
            :thumb="'https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/press/icon/'+navi.icon+'.png'"
            :title="navi.name"
            link
            :to="`/pages/${navi.url}`"
          />
        </uni-list>
      </uni-card>
    </view>
  </view>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      styles: [{
        name: '字体',
        url: 'vue/font/font',
        icon: 'font',
      }, {
        name: '颜色',
        url: 'vue/color/color',
        icon: 'color',
      }, {
        name: '间距',
        url: 'vue/space/space',
        icon: 'space',
      }, {
        name: '圆角',
        url: 'vue/radius/radius',
        icon: 'radius',
      }, {
        name: 'Button 按钮',
        url: 'vue/button/button',
        icon: 'button',
      }],
      layouts: [{
        name: 'Card 卡片',
        url: 'vue/card/card',
        icon: 'card',
      },
      {
        name: 'Grid 宫格',
        url: 'vue/grid/grid',
        icon: 'grid',
      },
      {
        name: 'List 列表',
        url: 'vue/list/list',
        icon: 'list',
      },
      {
        name: 'Title 章节标题',
        url: 'vue/title/title',
        icon: 'title',
      },
      {
        name: 'Layout 布局',
        url: 'vue/row/row',
        icon: 'row',
      },
      {
        name: 'Section 标题栏',
        url: 'vue/section/section',
        icon: 'section',
      },
      ],
      views: [{
        name: 'Badge 数字角标',
        url: 'vue/badge/badge',
        icon: 'badge',
      },
      {
        name: 'Fab 悬浮按钮',
        url: 'vue/fab/fab',
        icon: 'fab',
      },
      {
        name: 'Fav 收藏按钮',
        url: 'vue/fav/fav',
        icon: 'fav',
      },
      {
        name: 'Icons 图标',
        url: 'vue/icons/icons',
        icon: 'icons',
      },
      {
        name: 'NoticeBar 通告栏',
        url: 'vue/notice-bar/notice-bar',
        icon: 'notice-bar',
      },
      {
        name: 'Tag 标签',
        url: 'vue/tag/tag',
        icon: 'tag',
      }, {
        name: 'Transition 过渡动画',
        url: 'vue/transition/transition',
        icon: 'transition',
      },
      ],
      forms: [{
        name: 'Easyinput 增强输入框',
        url: 'vue/easyinput/easyinput',
        icon: 'easyinput',
      }, {
        name: 'Form 表单',
        url: 'vue/forms/forms',
        icon: 'forms',
      }, {
        name: 'Group 分组',
        url: 'vue/group/group',
        icon: 'group',
      }, {
        name: 'FilePicker 文件选择上传',
        url: 'vue/file-picker/file-picker',
        icon: 'file-picker',
      }, {
        name: 'NumberBox 数字输入框',
        url: 'vue/number-box/number-box',
        icon: 'number-box',
      },
      ],
      dataComs: [{
        name: 'DataCheckbox 单选复选框',
        url: 'vue/data-checkbox/data-checkbox',
        icon: 'data-checkbox',
      },
      {
        name: 'DataSelect 下拉框选择器',
        url: 'vue/data-select/data-select',
        icon: 'data-select',
      },
      // #ifndef MP-KUAISHOU
      {
        name: 'DataPicker 级联选择',
        url: 'vue/data-picker/data-picker',
        icon: 'data-picker',
      },
      // #endif
      // #ifndef APP-NVUE || MP-KUAISHOU || MP-LARK || MP-TOUTIAO || MP-BAIDU
      {
        name: 'DatetimePicker 日期时间选择',
        url: 'vue/datetime-picker/datetime-picker',
        icon: 'datetime-picker',
      },
        // #endif
      ],
      functionals: [
        // {
        // 	name: 'Calendar 日历',
        // 	url: 'calendar'
        // },
        {
          name: 'Collapse 折叠面板',
          url: 'vue/collapse/collapse',
          icon: 'collapse',
        },
        // #ifndef APP-NVUE
        {
          name: 'Combox 组合输入框',
          url: 'vue/combox/combox',
          icon: 'combox',
        },
        // #endif
        {
          name: 'Drawer 抽屉',
          url: 'vue/drawer/drawer',
          icon: 'drawer',
        },
        {
          name: 'Pagination 分页器',
          url: 'vue/pagination/pagination',
          icon: 'pagination',
        },
        {
          name: 'SwiperDot 轮播图指示点',
          url: 'vue/swiper-dot/swiper-dot',
          icon: 'swiper-dot',
        },
        {
          name: 'Steps 步骤条',
          url: 'vue/steps/steps',
          icon: 'steps',
        },
        {
          name: 'SegmentedControl 分段器',
          url: 'vue/segmented-control/segmented-control',
          icon: 'segmented-control',
        },
        {
          name: 'Countdown 倒计时',
          url: 'vue/countdown/countdown',
          icon: 'countdown',
        },
        {
          name: 'Rate 评分',
          url: 'vue/rate/rate',
          icon: 'rate',
        },
        {
          name: 'Popup 弹出层',
          url: 'vue/popup/popup',
          icon: 'popup',
        },
        {
          name: 'IndexedList 索引列表',
          url: 'vue/indexed-list/indexed-list',
          icon: 'indexed-list',
        },
        {
          name: 'Link 超链接',
          url: 'vue/link/link',
          icon: 'link',
        },
        {
          name: 'LoadMore 加载更多',
          url: 'vue/load-more/load-more',
          icon: 'load-more',
        },
        // #ifndef APP-NVUE || MP-KUAISHOU || MP-LARK
        {
          name: 'SwipeAction 滑动操作',
          url: 'vue/swipe-action/swipe-action',
          icon: 'swipe-action',
        },
        // #endif
        {
          name: 'SearchBar 搜索栏',
          url: 'vue/search-bar/search-bar',
          icon: 'search-bar',
        },
        {
          name: 'Dateformat 日期格式化',
          url: 'vue/dateformat/dateformat',
          icon: 'dateformat',
        },
        {
          name: 'Tooltip 文字提示',
          url: 'vue/tooltip/tooltip',
          icon: 'tooltip',
        },
      ],
      navigations: [{
        name: 'Breadcrumb 面包屑',
        url: 'vue/breadcrumb/breadcrumb',
        icon: 'breadcrumb',
      }, {
        name: 'NavBar 导航栏',
        url: 'vue/nav-bar/nav-bar',
        icon: 'nav-bar',
      },
      {
        name: 'GoodsNav 商品导航',
        url: 'vue/goods-nav/goods-nav',
        icon: 'goods-nav',
      },
      ],
      press: [
        {
          name: 'Picker',
          url: 'press/picker/picker',
          icon: 'drawer',
        },
        {
          name: 'Loading',
          url: 'press/loading/loading',
          icon: 'load-more',
        },
        {
          name: 'Dialog',
          url: 'press/dialog/dialog',
          icon: 'popup',
        },
        {
          name: 'Switch',
          url: 'press/switch/switch',
          icon: 'number-box',
        },
        {
          name: 'Icon',
          url: 'press/icon/icon',
          icon: 'icons',
        },
        {
          name: 'Popup',
          url: 'press/popup/popup',
          icon: 'popup',
        },
      ],
      platform: 'vue',
    };
  },
  methods: {},
  onLoad() {
    // #ifdef MP-QQ
    qq.showShareMenu({
      showShareItems: ['qq', 'qzone', 'wechatFriends', 'wechatMoment'],
    });
    // #endif
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
}
</style>

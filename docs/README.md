# [PressUI](https://git.woa.com/pmd-mobile/support/press-ui)


press-ui是一套易用的、灵活的，基于uni-app的跨端组件库。

也可用于普通h5项目，需要加一个 [loader](https://git.woa.com/pmd-mobile/support/uni-plugin-light/tree/master/loader/ifdef-loader) 去掉条件编译部分。



## 1. 开发


### 1.1. 组件开发


```bash
npm run dev
# h5

npm run dev:mp-weixin
# 微信小程序

npm run dev:mp-qq
# qq小程序
```

**新增一个组件**

```bash
npm run new:comp
```

然后交互式的输入组件英文名、中文名等内容即可。

### 1.2. 文档开发

```
npm run docs:dev
```

### 1.3. 文档构建

```
npm run docs:build
```

### 1.4. 文档部署

需要在.env.local中写入服务器地址和密码：

```
HOST_NAME=xxx
HOST_PWD=xxx
```

然后执行：

```
npm run docs:deploy
```


### 1.5. 监听demo/文档

```
npm run docs:watch
```

### 1.6. 开发最佳实践

多开几个终端

```bash
npm run docs:watch # 必须
npm run dev
npm run dev:mp-weixin
npm run docs:dev
```



### 1.7. 样式规范


BEM方式命名CSS，参考[这篇文章](https://km.woa.com/group/29321/articles/show/503041)。

最外层结构命名为`press-组件名称`，如`press-loading`。

## 2. 目录结构

```bash
- docs            # 文档地址
- plugin          # [demo]工程用到的插件
- script          # 脚本
- src
  - common        # [demo]公共内容
  - packages      # 对外发布的包内容
  - pages         # [demo]页面内容
  - static        # [demo]静态内容
  - App.vue       # [demo]应用入口
  - main.js
  - pages.json
```





## 3. 立即体验

<img src="https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/press/qrcode/press-ui-demo-qrcode-2.png" width="600">




## 4. 如何使用

1. 安装npm包


```bash
npm i @tencent/press-ui
```


2. 在页面中正常引入并使用

比如 `message-detail` 组件：

```js
<template>
  <PressMessageDetail />
</template>
import PressMessageDetail from '@tencent/press-ui/press-message-detail/press-message-detail.vue'

export default {
  components: {
    PressMessageDetail, 
  }
}
```

3. 配置`vue.config.js`

注意，需要在`vue.config.js`中配置下 `transpileDependencies`：

```js
module.exports = {
  transpileDependencies: ['@tencent/press-ui'],
}
```

## 5. rem单位

目前有的组件使用的单位是rem
- 优势：h5端适配更好，更合适
- 劣势：在小程序等其他端需要额外的插件来转换


## 6. 赛宝项目已改动点

### 6.1. dialog

1. src/local-component/module/tip-match/tip-match-comm-tips-dialog 
- 替换为 `@tencent/press-ui/press-dialog`
- 删除原文件


2. src/local-component/ui/tip-match/tip-match-tip-popup/index.vue
- 替换为 `@tencent/press-ui/press-dialog/press-dialog`
- 删除原文件，但css还在用

### 6.2. picker

1. src/local-component/module/tip-match/tip-match-select-list-dialog/tip-match-select-list-dialog
- 替换为 `@tencent/press-ui/press-picker/press-picker`
- 删除原文件


2. src/local-component/ui/yd-component/popup-container
- 替换为 `@tencent/press-ui/press-popup/press-popup`
- 删除原文件






### 6.3. switch

1. src/local-component/ui/tip-match/tip-match-switch
- 替换为 `@tencent/press-ui/press-switch/press-switch`
- 删除原文件

### 6.4. DatetimePicker

van-datetime-picker 替换为 press-dateime-picker

### 6.5. Tab

van-tab 替换为 press-tab

### 6.6. popover

src/local-component/ui/tip-match/tip-match-popver 替换为 press-popover

之前 isShowPopper 属性改为 show，因为 show 简单明了、容易记忆、容易维护。

## 7. TODO

1. src/local-component/module/tip-match/tip-match-select-list-dialog 替换为 `@tencent/press-ui/press-picker/handler`

2. 组件优先级

p0

- dialog 
  - 替换
  - 变量模板定义
- toast 
- picker
  - 重构 
- datetimepicker
- upload
- switch
- loading 多种loading 
- list
- tab
- button
- swiper
- 转场动画transition

p1

- countdown倒计时
- steps

p2

- collapse
- form input 
- popup 弹出层
- 侧滑删除
- empty

## 8. 当前痛点

- 组件夹杂在业务库中，没有分离，没有抽象
  - 难复用
  - 缺乏文档、demo
  - 代码规范缺失
  - 无法沉淀
  - 依赖关系混乱，即使复制粘贴也要很长时间来梳理
  - API混乱，脱离业界标准
- 业务库愈发臃肿，随着需求迭代，越来越难以维护
- 业务用了很多vant组件，但是web和小程序的vant中API并不一致，导致业务中混杂大量兼容代码
- 放在业务库中改动成本太低，有可能一个开发者随手加的一行代码，引起其他页面的雪崩



## 9. 组件依赖最小原则

组件不要依赖太多的外部公共文件，保持独立性

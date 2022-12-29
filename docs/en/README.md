<div align="center">
   <img alt="logo" src="https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/press%2Fimg%2Fpress-ui-avatar-transparent.png" width="150" style=" margin-bottom: -25px;">
</div>
<h3 align="center">Easy-to-use, flexible, uni-app-based cross-end component library</h3>

---

<h2 style="border-bottom: 0">1. Introduction</h2>


press-ui is an easy-to-use, flexible, cross-end component library based on uni-app.


It can also be used in ordinary h5 projects, you need to add a [loader](https://git.woa.com/pmd-mobile/support/uni-plugin-light/tree/master/loader/ifdef-loader) to remove the conditional compilation part .

## 2. Development


### 2.1. Component development

```bash
npm run dev
# h5

npm run dev:mp-weixin
# WeChat applet

npm run dev:mp-qq
# qq applet
```

**Add a new component**

```bash
npm run new:comp
```

Then interactively input the English name, Chinese name and other content of the component.

### 2.2. Document development

```
npm run docs:dev
```

### 2.3. Documentation construction

```
npm run docs:build
```
### 2.4. Document deployment

You need to write the server address and password in .env.local:

```
HOST_NAME=xxx
HOST_PWD=xxx
```

Then execute:

```
npm run docs:deploy
```


### 2.5. Monitor demo/documentation

```
npm run docs:watch
```

### 2.6. Development Best Practices

open more terminals

```bash
npm run docs:watch # required
npm run dev
npm run dev:mp-weixin
npm run docs:dev
```



### 2.7. Style Specification


BEM named CSS, refer to [this article](https://km.woa.com/group/29321/articles/show/503041).

The outermost structure is named `press-component-name`, such as `press-loading`.

## 3. Directory structure

```bash
- docs # document address
- plugin # [demo] Plugins used in the project
- script # script
- src
   - common # [demo] public content
   - packages # Package content released externally
   - pages # [demo] page content
   - static # [demo] static content
   - App.vue # [demo] application entry
   - main.js
   - pages.json
```





## 4. Try Now

<img src="https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/press/qrcode/press-ui-demo-qrcode-3.png" width="600">




## 5. How to use

1. Install the npm package


```bash
npm i @tencent/press-ui
```


2. Introduce and use normally in the page

For example the `message-detail` component:

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

3. Configure `vue.config.js`

Note that you need to configure `transpileDependencies` in `vue.config.js`:

```js
module.exports = {
   transpileDependencies: ['@tencent/press-ui'],
}
```

## 6. rem unit

The unit currently used by some components is rem
-Advantage: the h5 end is better adapted and more suitable
- Disadvantage: Additional plug-ins are required for conversion on other ends such as applets


## 7. The Saibao item has been changed

### 7.1. dialog

1. src/local-component/module/tip-match/tip-match-comm-tips-dialog
- replaced by `@tencent/press-ui/press-dialog`
- delete the original file


2. src/local-component/ui/tip-match/tip-match-tip-popup/index.vue
- replaced by `@tencent/press-ui/press-dialog/press-dialog`
- Delete the original file, but css is still in use

### 7.2. picker

1. src/local-component/module/tip-match/tip-match-select-list-dialog/tip-match-select-list-dialog
- Replaced by `@tencent/press-ui/press-picker/press-picker`
- delete the original file


2. src/local-component/ui/yd-component/popup-container
- Replaced by `@tencent/press-ui/press-popup/press-popup`
- delete the original file






### 7.3. switch

1. src/local-component/ui/tip-match/tip-match-switch
- Replaced by `@tencent/press-ui/press-switch/press-switch`
- delete the original file

### 7.4. DatetimePicker

van-datetime-picker replaced by press-dateime-picker

### 7.5. Tab

van-tab replaced with press-tab

### 7.6. popovers

src/local-component/ui/tip-match/tip-match-popver replaced with press-popover

Previously, the isShowPopper attribute was changed to show, because show is simple, clear, easy to remember, and easy to maintain.

## 8. TODO

1. Replace src/local-component/module/tip-match/tip-match-select-list-dialog with `@tencent/press-ui/press-picker/handler`

2. Component priority

p0

- dialog
  - replace
  - variable template definition
- toast
- picker
  - refactoring
- datetimepicker
- upload
- switch
- loading multiple loading
- list
-tab
- button
- swiper
- Transition animation transition

p1

- countdown countdown
- steps

p2

- collapse
- form input
- popup pop-up layer
- Swipe to delete
-empty

## 9. Current Pain Points

- Components are mixed in the business library, no separation, no abstraction
   - Difficult to reuse
   - Lack of documentation, demo
   - Missing code specification
   - cannot settle
   - The dependencies are messy, even copying and pasting takes a long time to sort out
   - API confusion, deviating from industry standards
- The business library is becoming more and more bloated, and it becomes more and more difficult to maintain as the requirements iterate
- The business uses a lot of vant components, but the APIs in the vant of the web and the applet are not consistent, resulting in a large number of compatible codes mixed in the business
- The cost of modification in the business library is too low, and it is possible that a line of code added by a developer will cause an avalanche of other pages



## 10. Component dependency minimum principle

Components should not rely on too many external public files and maintain independence.

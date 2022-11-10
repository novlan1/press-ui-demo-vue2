# 快速开始

## 使用 npm 安装

在 `vue-cli` 项目中可以使用 `npm` 安装 `press-ui` 库

::: danger 注意
cli 项目默认是不编译 `node_modules` 下的组件的，导致条件编译等功能失效 ，导致组件异常

需要在根目录创建 `vue.config.js` 文件 ，增加 `@tencent/press-ui` 包的编译即可正常

```javascript
// vue.config.js
module.exports = {
		transpileDependencies:['@tencent/press-ui']
}
```
:::


**准备 sass**

`vue-cli` 项目请先安装 sass 及 sass-loader，如在 HBuliderX 中使用，可跳过此步。


**安装 @tencent/press-ui**

```
npm i @tencent/press-ui   或   yarn add @tencent/press-ui
```



在 ``script`` 中引用组件：

```javascript
import PressLoading from '@tencent/press-ui/press-loading/press-loading.vue' 
import PressPopup from '@tencent/press-ui/press-popup/press-popup';
export default {
    components: {
			PressLoading,
			PressPopup
		}
}
```


在 ``template`` 中使用组件： 

```html
<press-loading ></press-loading>
<press-popup ></press-popup>
```



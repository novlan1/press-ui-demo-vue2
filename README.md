# PressUI

## 如何使用

下载`src/uni_modules`到本地，即可使用。




## rem单位

目前有的组件使用的单位是rem
- 优势：h5端适配更好，更合适
- 劣势：在小程序等其他端需要额外的插件来转换


## 赛宝项目改动点

### dialog

src/local-component/module/tip-match/tip-match-comm-tips-dialog 

替换为

@tencent/press-ui/press-dialog

删除了目录： src/local-component/module/tip-match/tip-match-comm-tips-dialog 
 

 ## TODO

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

## 当前痛点

- 组件夹杂在业务库中，没有分离，没有抽象
  - 难复用
  - 缺乏文档、demo
  - 代码规范缺失



(self["webpackChunkpress_ui_demo_vue2"]=self["webpackChunkpress_ui_demo_vue2"]||[]).push([[8675],{66760:function(t,e,i){var n=i(56965);n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.id,n,""]]),n.locals&&(t.exports=n.locals);var a=i(69898).A;a("04ed1e2c",n,!0,{sourceMap:!1,shadowMode:!1})},98723:function(t,e,i){var n=i(74);n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.id,n,""]]),n.locals&&(t.exports=n.locals);var a=i(69898).A;a("3f81e3c9",n,!0,{sourceMap:!1,shadowMode:!1})},76948:function(t,e,i){var n=i(87285);n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.id,n,""]]),n.locals&&(t.exports=n.locals);var a=i(69898).A;a("6400a51a",n,!0,{sourceMap:!1,shadowMode:!1})},64920:function(t,e,i){"use strict";var n;i.d(e,{A:function(){return x}});var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"press-notice-bar-index"},[t.show?i("div",{class:t.noticeBarClass,style:t.noticeBarStyle,on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick.apply(void 0,arguments)}}},[t.leftIcon?i("PressIconPlus",{class:[t.leftIconClass],attrs:{name:t.leftIcon,"custom-class":t.leftIconCustomClass}}):t._t("left-icon"),i("div",{staticClass:"press-notice-bar__wrap"},[i("div",{class:"press-notice-bar__content "+(!1!==t.scrollable||t.wrapable?"":"press-ellipsis"),style:t.animationStyle},[t._v(t._s(t.text)),t.text?t._e():t._t("default")],2)]),"closeable"===t.mode?i("PressIconPlus",{class:[t.rightIconClass],attrs:{"custom-class":t.rightIconCustomClass,name:"cross"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClickIcon.apply(void 0,arguments)}}}):"link"===t.mode?[t.isNotInUni?i("PressIconPlus",{class:[t.rightIconClass],attrs:{"custom-class":t.rightIconCustomClass,name:"arrow"}}):i("v-uni-navigator",{attrs:{url:t.url,"open-type":t.openType}},[i("PressIconPlus",{class:[t.rightIconClass],attrs:{"custom-class":t.rightIconCustomClass,name:"arrow"}})],1)]:t._t("right-icon")],2):t._e()])},o=[],s=i(43639),r=i(11312),c=(i(174),i(11680),i(98127),i(824),i(56389),i(56839)),l=i(87696),d=i(81500),u=i(19393),p=i(66092);function h(t){return(0,p.iF)({color:t.color,"background-color":t.backgroundColor,background:t.background})}var f,b={rootStyle:h},m=i(35296),v=i(31412),g={name:"PressNoticeBar",options:(0,r.A)((0,r.A)({},m.KQ),{},{styleIsolation:"shared"}),components:{PressIconPlus:c.A},props:(0,r.A)({text:{type:String,default:""},mode:{type:String,default:""},url:{type:String,default:""},openType:{type:String,default:"navigate"},delay:{type:Number,default:1},speed:{type:Number,default:60},scrollable:{type:Boolean,default:!1},leftIcon:{type:String,default:""},color:{type:String,default:""},backgroundColor:{type:String,default:""},background:{type:String,default:""},wrapable:Boolean},m.Gs),emits:["close","click"],data:function(){return{show:!0,duration:0,animationDuration:0,contentWidth:0,translateX:0,isNotInUni:(0,u.n1)()}},computed:{noticeBarClass:function(){var t=this.mode,e=this.wrapable,i=this.customClass;return"".concat(i," ").concat(u.Ay.bem2("notice-bar",{withicon:t,wrapable:e}))},noticeBarStyle:function(){var t=this.color,e=this.backgroundColor,i=this.background;return b.rootStyle({color:t,backgroundColor:e,background:i})},animationStyle:function(){var t=this.animationDuration,e=this.delay,i=this.translateX,n=["transform: translateX(".concat(i,"px);"),"transition: -webkit-transform ".concat(t,"ms linear ").concat(e,"ms, transform ").concat(t,"ms linear ").concat(e,"ms;"),"transform-origin: 50% 50% 0px;"].join(" ");return n},leftIconClass:function(){return"press-notice-bar__left-icon"},leftIconCustomClass:function(){var t="";return t},rightIconClass:function(){return"press-notice-bar__right-icon"},rightIconCustomClass:function(){var t="";return t}},watch:{text:{handler:function(){this.init()}},speed:{handler:function(){this.init()}}},created:function(){},mounted:function(){this.init()},destroyed:function(){this.onDestroyed()},unmounted:function(){this.onDestroyed()},methods:{onDestroyed:function(){this.timer&&clearTimeout(this.timer)},init:function(){var t=this;(0,l.xi)((function(){Promise.all([(0,d.l)(t,".press-notice-bar__content"),(0,d.l)(t,".press-notice-bar__wrap")]).then((function(e){var i=(0,s.A)(e,2),n=i[0],a=i[1],o=t.speed,r=t.scrollable;if(null!=n&&null!=a&&n.width&&a.width&&!1!==r&&(r||a.width<n.width)){var c=(a.width+n.width)/o*1e3;t.wrapWidth=a.width,t.contentWidth=n.width,t.duration=c,t.scroll(!0)}}))}))},scroll:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.timer&&clearTimeout(this.timer),this.timer=null,this.translateX=e?0:this.wrapWidth,this.animationDuration=0,(0,l.xi)((function(){t.translateX=-t.contentWidth,t.animationDuration=t.duration})),this.timer=setTimeout((function(){t.scroll()}),this.duration)},onClickIcon:function(t){"closeable"===this.mode&&(this.timer&&clearTimeout(this.timer),this.timer=null,this.show=!1,this.$emit("close",(0,v.YV)(t)))},onClick:function(t){this.$emit("click",t)}}},w=g,_=(i(76948),i(17592)),y=(0,_.A)(w,a,o,!1,null,"16b28d3a",null,!1,n,f),x=y.exports},37556:function(t,e,i){"use strict";var n;i.r(e),i.d(e,{default:function(){return m}});var a,o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"demo-wrap"},[i("demo-block",{attrs:{title:t.t("basicUsage"),"section-style":"margin: 0;"}},[i("press-sticky",[i("div",{staticClass:"btn1"},[t._v(t._s(t.t("basicUsage")))])])],1),i("demo-block",{attrs:{title:t.t("offsetTop"),"section-style":"margin: 0;"}},[i("press-sticky",{attrs:{"offset-top":50}},[i("div",{staticClass:"btn2"},[t._v(t._s(t.t("offsetTop")))])])],1),i("demo-block",{attrs:{title:t.t("setContainer"),"section-style":"margin: 0;"}},[i("div",{ref:"container",staticStyle:{height:"150px",background:"#eee"},attrs:{id:"container"}},[i("press-sticky",{attrs:{container:t.container}},[i("div",{staticClass:"btn3"},[t._v(t._s(t.t("setContainer")))])])],1)]),i("press-button",{attrs:{type:"e-sport-primary","custom-style":"position:relative;margin: 10px;padding: 0;"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onToggleShowHeader.apply(void 0,arguments)}}},[t._v(t._s(t.showHeader?t.t("hide"):t.t("show")))])],1)},s=[],r=i(98657),c=i(81268),l=i(64920),d=i(87696),u=i(18741),p={i18n:{"zh-CN":{offsetTop:"吸顶距离",setContainer:"指定容器",hide:"隐藏头部",show:"显示头部"},"en-US":{offsetTop:"Offset Top",setContainer:"Set Container",hide:"Hide Head",show:"Show Head"}},components:{PressSticky:r.A,PressButton:c.A,PressNoticeBar:l.A},mixins:[(0,u.h)()],data:function(){var t=this;return{container:function(){var e,i=null===(e=t.$refs)||void 0===e?void 0:e.container;return i}}},mounted:function(){var t=this;(0,d.xi)((function(){t.container=function(){return t.$refs.container}}))},methods:{}},h=p,f=(i(66760),i(98723),i(17592)),b=(0,f.A)(h,o,s,!1,null,"495ac76b",null,!1,n,a),m=b.exports},56965:function(t,e,i){"use strict";i.r(e);var n=i(10809),a=i.n(n),o=i(34114),s=i.n(o),r=s()(a());r.push([t.id,".demo-wrap[data-v-495ac76b]{height:200vh}.demo-wrap .btn1[data-v-495ac76b]{margin-left:10px}.demo-wrap .btn2[data-v-495ac76b]{margin-left:80px}.demo-wrap .btn3[data-v-495ac76b]{margin-left:160px}",""]),e["default"]=r},74:function(t,e,i){"use strict";i.r(e);var n=i(10809),a=i.n(n),o=i(34114),s=i.n(o),r=s()(a());r.push([t.id,"uni-page-body[data-v-495ac76b]{height:100%;overflow:auto}",""]),e["default"]=r},87285:function(t,e,i){"use strict";i.r(e);var n=i(10809),a=i.n(n),o=i(34114),s=i.n(o),r=s()(a());r.push([t.id,".press-ellipsis[data-v-16b28d3a]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.press-multi-ellipsis--l2[data-v-16b28d3a],.press-multi-ellipsis--l3[data-v-16b28d3a]{-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden;text-overflow:ellipsis}.press-multi-ellipsis--l2[data-v-16b28d3a]{-webkit-line-clamp:2}.press-multi-ellipsis--l3[data-v-16b28d3a]{-webkit-line-clamp:3}.press-notice-bar[data-v-16b28d3a]{display:flex;align-items:center;height:var(--notice-bar-height,40px);padding:var(--notice-bar-padding,0 16px);font-size:var(--notice-bar-font-size,14px);color:var(--notice-bar-text-color,#ed6a0c);line-height:var(--notice-bar-line-height,24px);background-color:var(--notice-bar-background-color,#fffbe8)}.press-notice-bar--withicon[data-v-16b28d3a]{position:relative;padding-right:40px}.press-notice-bar--wrapable[data-v-16b28d3a]{height:auto;padding:var(--notice-bar-wrapable-padding,8px 16px)}.press-notice-bar--wrapable .press-notice-bar__wrap[data-v-16b28d3a]{height:auto}.press-notice-bar--wrapable .press-notice-bar__content[data-v-16b28d3a]{position:relative;white-space:normal}.press-notice-bar__left-icon[data-v-16b28d3a]{display:flex;align-items:center;margin-right:4px;vertical-align:middle;font-size:var(--notice-bar-icon-size,16px);min-width:var(--notice-bar-icon-min-width,22px)}.press-notice-bar__right-icon[data-v-16b28d3a]{position:absolute;top:10px;right:15px;font-size:var(--notice-bar-icon-size,16px);min-width:var(--notice-bar-icon-min-width,22px)}.press-notice-bar__wrap[data-v-16b28d3a]{position:relative;flex:1;overflow:hidden;height:var(--notice-bar-line-height,24px);display:flex;align-items:center}.press-notice-bar__content[data-v-16b28d3a]{position:absolute;white-space:nowrap}.press-notice-bar__content.press-ellipsis[data-v-16b28d3a]{max-width:100%}",""]),e["default"]=r}}]);
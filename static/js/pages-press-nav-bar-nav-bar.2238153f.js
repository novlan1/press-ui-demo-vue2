(self["webpackChunkpress_ui_demo_vue2"]=self["webpackChunkpress_ui_demo_vue2"]||[]).push([[863],{32942:function(t,e,a){var s=a(6162);s.__esModule&&(s=s.default),"string"===typeof s&&(s=[[t.id,s,""]]),s.locals&&(t.exports=s.locals);var r=a(69898).A;r("4f65eac0",s,!0,{sourceMap:!1,shadowMode:!1})},7055:function(t,e,a){"use strict";var s;a.r(e),a.d(e,{default:function(){return I}});var r,i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"demo-wrap demo-wrap--gray"},[a("demo-block",{attrs:{title:t.t("basicUsage"),"section-style":t.sectionStyle,"header-style":t.headerStyle}},[a("press-nav-bar",{attrs:{title:t.t("title"),"left-text":t.t("back"),"right-text":t.t("button"),"left-arrow":!0,"safe-area-inset-top":!1},on:{"click-left":function(e){arguments[0]=e=t.$handleEvent(e),t.onClickLeft.apply(void 0,arguments)},"click-right":function(e){arguments[0]=e=t.$handleEvent(e),t.onClickRight.apply(void 0,arguments)}}})],1),a("demo-block",{attrs:{title:t.t("useSlot"),"section-style":t.sectionStyle,"header-style":t.headerStyle}},[a("press-nav-bar",{attrs:{title:t.t("title"),"left-text":t.t("back"),"left-arrow":!0,"safe-area-inset-top":!1},scopedSlots:t._u([{key:"right",fn:function(){return[a("press-icon-plus",{attrs:{name:"search"}})]},proxy:!0}])})],1)],1)},n=[],l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"press-nav-bar-index"},[t.fixed&&t.placeholder?a("div",{style:"height: "+t.height+"px;"}):t._e(),a("div",{class:t.navBarClass,style:t.navBarStyle},[a("div",{staticClass:"press-nav-bar__content"},[a("div",{staticClass:"press-nav-bar__left",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClickLeft.apply(void 0,arguments)}}},[t.leftArrow||t.leftText?[t.leftArrow?a("press-icon-plus",{attrs:{size:"16px",name:"arrow-left","custom-class":"press-nav-bar__arrow"}}):t._e(),t.leftText?a("div",{staticClass:"press-nav-bar__text",attrs:{"hover-class":"press-nav-bar__text--hover","hover-stay-time":"70"}},[t._v(t._s(t.leftText))]):t._e()]:t._t("left")],2),a("div",{class:["press-nav-bar__title",t.titleClass,"press-ellipsis"]},[t.title?[t._v(t._s(t.title))]:t._t("title")],2),a("div",{staticClass:"press-nav-bar__right",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClickRight.apply(void 0,arguments)}}},[t.rightText?a("div",{staticClass:"press-nav-bar__text",attrs:{"hover-class":"press-nav-bar__text--hover","hover-stay-time":"70"}},[t._v(t._s(t.rightText))]):t._t("right")],2)])])])},o=[],c=a(11312),p=(a(174),a(11680),a(56839)),d=a(81500),v=a(35296),f=a(19393),h=a(66092);function u(t){return(0,h.iF)({"z-index":t.zIndex,"padding-top":t.safeAreaInsetTop?"".concat(t.statusBarHeight,"px"):0})}var b,g,_={barStyle:u},x=a(87696),m={name:"PressNavBar",options:(0,c.A)((0,c.A)({},v.KQ),{},{styleIsolation:"shared"}),components:{PressIconPlus:p.A},props:(0,c.A)((0,c.A)({},v.Gs),{},{title:{type:String,default:""},fixed:{type:Boolean},placeholder:{type:Boolean},leftText:{type:String,default:""},rightText:{type:String,default:""},customStyle:{type:String,default:""},leftArrow:Boolean,border:{type:Boolean,default:!0},zIndex:{type:Number,default:1},safeAreaInsetTop:{type:Boolean,default:!0},titleClass:{type:String,default:""}}),emits:["click-left","click-right"],data:function(){return{height:46}},computed:{navBarClass:function(){var t=this.border,e=this.fixed;return"".concat(f.Ay.bem2("nav-bar",{fixed:e})," custom-class ").concat(t?"press-hairline--bottom":"")},navBarStyle:function(){var t=this.zIndex,e=this.statusBarHeight,a=this.safeAreaInsetTop,s=this.customStyle;return"".concat(_.barStyle({zIndex:t,statusBarHeight:e,safeAreaInsetTop:a}),"; ").concat(s)}},watch:{fixed:{handler:function(){this.setHeight()}},placeholder:{handler:function(){this.setHeight()}}},created:function(){var t=(0,d.ZA)();this.statusBarHeight=t,this.height=46+t},mounted:function(){this.setHeight()},methods:{onClickLeft:function(){this.$emit("click-left")},onClickRight:function(){this.$emit("click-right")},setHeight:function(){var t=this;this.fixed&&this.placeholder&&(0,x.dY)((function(){(0,d.l)(t,".press-nav-bar").then((function(e){e&&"height"in e&&(t.height=e.height)}))}))}}},y=m,k=(a(32942),a(17592)),w=(0,k.A)(y,l,o,!1,null,"3c05213a",null,!1,r,b),C=w.exports,S=a(98488)["A"],A={i18n:{"zh-CN":{useSlot:"使用插槽"},"en-US":{useSlot:"Use Slot"}},components:{PressNavBar:C,PressIconPlus:p.A},data:function(){return{sectionStyle:"margin: 0;background: #f7f8fa;",headerStyle:"background: #f7f8fa;"}},methods:{onClickLeft:function(){S.log("onClickLeft")},onClickRight:function(){S.log("onClickRight")}}},z=A,B=(0,k.A)(z,i,n,!1,null,"f1c93b86",null,!1,s,g),I=B.exports},6162:function(t,e,a){"use strict";a.r(e);var s=a(10809),r=a.n(s),i=a(34114),n=a.n(i),l=n()(r());l.push([t.id,'.press-hairline--bottom[data-v-3c05213a]{position:relative}.press-hairline--bottom[data-v-3c05213a]:after{border:0 solid #ebedf0;bottom:-50%;box-sizing:border-box;content:" ";left:-50%;pointer-events:none;position:absolute;right:-50%;top:-50%;-webkit-transform:scale(.5);transform:scale(.5);-webkit-transform-origin:center;transform-origin:center;border-bottom-width:1px}.press-ellipsis[data-v-3c05213a]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.press-multi-ellipsis--l2[data-v-3c05213a],.press-multi-ellipsis--l3[data-v-3c05213a]{-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden;text-overflow:ellipsis}.press-multi-ellipsis--l2[data-v-3c05213a]{-webkit-line-clamp:2}.press-multi-ellipsis--l3[data-v-3c05213a]{-webkit-line-clamp:3}.press-nav-bar[data-v-3c05213a]{position:relative;text-align:center;-webkit-user-select:none;user-select:none;height:var(--nav-bar-height,46px);line-height:var(--nav-bar-height,46px);background-color:var(--nav-bar-background-color,#fff);box-sizing:initial}.press-nav-bar__content[data-v-3c05213a]{position:relative;height:100%;display:flex;align-items:center}.press-nav-bar__text[data-v-3c05213a]{display:inline-block;vertical-align:middle;margin:0 calc(-1*var(--padding-md, 16px));padding:0 var(--padding-md,16px);color:var(--nav-bar-text-color,#1989fa)}.press-nav-bar__text--hover[data-v-3c05213a]{background-color:#f2f3f5}.press-nav-bar press-icon-plus[data-v-3c05213a]{display:flex;align-items:center}.press-nav-bar press-icon-plus+.press-nav-bar__text[data-v-3c05213a]{margin-left:-20px;padding-left:25px}[data-v-3c05213a] .press-nav-bar__arrow{vertical-align:middle;font-size:var(--nav-bar-arrow-size,16px);color:var(--nav-bar-icon-color,#1989fa)}[data-v-3c05213a] .press-nav-bar__arrow+.press-nav-bar__text,.press-nav-bar press-icon-plus+.press-nav-bar__text[data-v-3c05213a]{margin-left:-20px;padding-left:25px}.press-nav-bar--fixed[data-v-3c05213a]{position:fixed;top:0;left:0;width:100%}.press-nav-bar__title[data-v-3c05213a]{max-width:60%;margin:0 auto;color:var(--nav-bar-title-text-color,#323233);font-weight:var(--font-weight-bold,500);font-size:var(--nav-bar-title-font-size,16px)}.press-nav-bar__left[data-v-3c05213a],.press-nav-bar__right[data-v-3c05213a]{position:absolute;top:0;bottom:0;display:flex;align-items:center;font-size:var(--font-size-md,14px)}.press-nav-bar__left[data-v-3c05213a]{left:var(--padding-md,16px)}.press-nav-bar__right[data-v-3c05213a]{right:var(--padding-md,16px)}',""]),e["default"]=l}}]);
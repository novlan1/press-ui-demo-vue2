(self["webpackChunkpress_ui_demo_vue2"]=self["webpackChunkpress_ui_demo_vue2"]||[]).push([[8813],{71480:function(t,e,a){var i=a(20699);i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.id,i,""]]),i.locals&&(t.exports=i.locals);var n=a(69898).A;n("8f838300",i,!0,{sourceMap:!1,shadowMode:!1})},64209:function(t,e,a){var i=a(72608);i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.id,i,""]]),i.locals&&(t.exports=i.locals);var n=a(69898).A;n("454e53d5",i,!0,{sourceMap:!1,shadowMode:!1})},36890:function(t,e,a){"use strict";var i;a.r(e),a.d(e,{default:function(){return G}});var n,o,r,s,c,l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"demo-wrap"},[a("demo-block",{attrs:{title:t.t("basicUsage"),"section-style":t.sectionStyle}},[a("press-tabbar",{attrs:{fixed:!1,active:t.active,"safe-area-inset-bottom":!1},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.onChange.apply(void 0,arguments)}}},[a("press-tabbar-item",{attrs:{icon:"home-o"}},[t._v(t._s(t.t("tag")))]),a("press-tabbar-item",{attrs:{icon:"search"}},[t._v(t._s(t.t("tag")))]),a("press-tabbar-item",{attrs:{icon:"friends-o"}},[t._v(t._s(t.t("tag")))]),a("press-tabbar-item",{attrs:{icon:"setting-o"}},[t._v(t._s(t.t("tag")))])],1)],1),a("demo-block",{attrs:{title:t.t("matchByName"),"section-style":t.sectionStyle}},[a("press-tabbar",{attrs:{active:t.activeName,fixed:!1,"safe-area-inset-bottom":!1},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.onChangeName.apply(void 0,arguments)}}},[a("press-tabbar-item",{attrs:{icon:"home-o",name:"home"}},[t._v(t._s(t.t("tag")))]),a("press-tabbar-item",{attrs:{icon:"search",name:"search"}},[t._v(t._s(t.t("tag")))]),a("press-tabbar-item",{attrs:{icon:"friends-o",name:"friends"}},[t._v(t._s(t.t("tag")))]),a("press-tabbar-item",{attrs:{icon:"setting-o",name:"setting"}},[t._v(t._s(t.t("tag")))])],1)],1),a("demo-block",{attrs:{title:t.t("badge"),"section-style":t.sectionStyle}},[a("press-tabbar",{attrs:{active:t.active,fixed:!1,"safe-area-inset-bottom":!1},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.onChange.apply(void 0,arguments)}}},[a("press-tabbar-item",{attrs:{icon:"home-o"}},[t._v(t._s(t.t("tag")))]),a("press-tabbar-item",{attrs:{icon:"search",dot:!0}},[t._v(t._s(t.t("tag")))]),a("press-tabbar-item",{attrs:{icon:"friends-o",info:"5"}},[t._v(t._s(t.t("tag")))]),a("press-tabbar-item",{attrs:{icon:"setting-o",info:"20"}},[t._v(t._s(t.t("tag")))])],1)],1),a("demo-block",{attrs:{title:t.t("customIcon"),"section-style":t.sectionStyle}},[a("press-tabbar",{attrs:{fixed:!1,active:t.active,"safe-area-inset-bottom":!1},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.onChange.apply(void 0,arguments)}}},[a("press-tabbar-item",{attrs:{info:"3"},scopedSlots:t._u([{key:"icon",fn:function(){return[a("img",{staticStyle:{width:"23px",height:"18px"},attrs:{src:t.icon.normal,mode:"aspectFit"}})]},proxy:!0},{key:"icon-active",fn:function(){return[a("img",{staticStyle:{width:"23px",height:"18px"},attrs:{src:t.icon.active,mode:"aspectFit"}})]},proxy:!0}])},[t._v(t._s(t.t("custom")))]),a("press-tabbar-item",{attrs:{icon:"search"}},[t._v(t._s(t.t("tag")))]),a("press-tabbar-item",{attrs:{icon:"setting-o"}},[t._v(t._s(t.t("tag")))])],1)],1),a("demo-block",{attrs:{title:t.t("customColor"),"section-style":t.sectionStyle}},[a("press-tabbar",{attrs:{active:t.active,fixed:!1,"active-color":"#07c160","inactive-color":"#000","safe-area-inset-bottom":!1},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.onChange.apply(void 0,arguments)}}},[a("press-tabbar-item",{attrs:{icon:"home-o"}},[t._v(t._s(t.t("tag"))+"A")]),a("press-tabbar-item",{attrs:{icon:"search"}},[t._v(t._s(t.t("tag"))+"B")]),a("press-tabbar-item",{attrs:{icon:"friends-o"}},[t._v(t._s(t.t("tag"))+"C")]),a("press-tabbar-item",{attrs:{icon:"setting-o"}},[t._v(t._s(t.t("tag"))+"D")])],1)],1)],1)},d=[],u=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{class:[t.border?"press-hairline--top-bottom":"",t.utils.bem2("tabbar",{fixed:t.fixed,safe:t.safeAreaInsetBottom}),t.customClass],style:t.zIndex?"z-index: "+t.zIndex:""},[t._t("default")],2),t.fixed&&t.placeholder?a("div",{style:"height: "+t.height+"px;"}):t._e()])},b=[],f=a(11312),h=(a(11680),a(98127),a(13740),a(32033),a(6344),a(19393)),m=a(81500),p=a(87696),v=a(35296),g=a(2233),_=a(91529),x={name:"PressTabbar",options:(0,f.A)((0,f.A)({},v.KQ),{},{styleIsolation:"shared"}),mixins:[(0,g.G)(_.W9)],props:(0,f.A)({active:{type:[String,Number],default:""},activeColor:{type:String,default:""},inactiveColor:{type:String,default:""},fixed:{type:Boolean,default:!0},placeholder:{type:Boolean},border:{type:Boolean,default:!0},zIndex:{type:Number,default:1},safeAreaInsetBottom:{type:Boolean,default:!0}},v.Gs),emits:["change"],data:function(){return{height:50,utils:h.Ay}},watch:{active:{handler:function(){this.updateChildren()}},activeColor:{handler:function(){this.updateChildren()}},inactiveColor:{handler:function(){this.updateChildren()}},fixed:{handler:function(){this.setHeight()}},placeholder:{handler:function(){this.setHeight()}}},created:function(){this.children=[]},methods:{updateChildren:function(){var t=this.children;Array.isArray(t)&&t.length&&t.forEach((function(t){return t.updateFromParent()}))},setHeight:function(){var t=this;this.fixed&&this.placeholder&&(0,p.dY)((function(){(0,m.l)(t,".press-tabbar").then((function(e){t.height=e.height}))}))}}},y=x,C=(a(64209),a(17592)),k=(0,C.A)(y,u,b,!1,null,"6644c6cd",null,!1,n,o),A=k.exports,w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"press-tabbar-item-index"},[a("div",{class:[t.utils.bem2("tabbar-item",{active:t.active}),t.customClass],style:"color: "+(t.active?t.activeColor:t.inactiveColor),on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick.apply(void 0,arguments)}}},[a("div",{staticClass:"press-tabbar-item__icon"},[t.icon?a("press-icon-plus",{attrs:{name:t.icon,"class-prefix":t.iconPrefix,"custom-class":"press-tabbar-item__icon__inner"}}):[t.active?t._t("icon-active"):t._t("icon")],a("press-info",{attrs:{dot:t.dot,info:t.info,"custom-class":"press-tabbar-item__info"}})],2),a("div",{staticClass:"press-tabbar-item__text"},[t._t("default")],2)])])},I=[],S=(a(28784),a(91364),a(56839)),B=a(45255),$={name:"PressTabbarItem",options:(0,f.A)((0,f.A)({},v.KQ),{},{styleIsolation:"shared"}),components:{PressIconPlus:S.A,PressInfo:B.A},mixins:[(0,g.b)(_.W9)],props:(0,f.A)({info:{type:[String,Number],default:""},name:{type:[String,Number],default:""},icon:{type:String,default:""},dot:Boolean,iconPrefix:{type:String,default:"press-icon-plus"}},v.Gs),emits:["click"],data:function(){return{utils:h.Ay,active:!1,activeColor:"",inactiveColor:""}},mounted:function(){this.updateFromParent()},methods:{setData:function(t){var e=this;Object.keys(t).forEach((function(a){e[a]=t[a]}))},onClick:function(){var t=this[_.W9];if(t){var e=t.children.indexOf(this),a=this.name||e;a!==this.active&&t.$emit("change",a)}this.$emit("click")},updateFromParent:function(){var t=this[_.W9];if(t){var e=t.children.indexOf(this),a=t,i=(this.name||e)===a.active,n={};i!==this.active&&(n.active=i),a.activeColor!==this.activeColor&&(n.activeColor=a.activeColor),a.inactiveColor!==this.inactiveColor&&(n.inactiveColor=a.inactiveColor),Object.keys(n).length>0&&this.setData(n)}}}},E=$,z=(a(71480),(0,C.A)(E,w,I,!1,null,"862231ba",null,!1,r,s)),N=z.exports,P=a(98488)["A"],F={i18n:{"zh-CN":{badge:"徽标提示",customIcon:"自定义图标",customColor:"自定义颜色",matchByName:"通过名称匹配",switchEvent:"监听切换事件",selectTip:"你切换到了"},"en-US":{badge:"Show Badge",customIcon:"Custom Icon",customColor:"Custom Color",matchByName:"Match by name",switchEvent:"Change Event",selectTip:"You select "}},components:{PressTabbar:A,PressTabbarItem:N},data:function(){return{active:0,activeName:"home",sectionStyle:"margin: 0;",icon:{normal:"https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/press%2Fimg%2Fuser-inactive.png",active:"https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/press%2Fimg%2Fuser-active.png"}}},methods:{onChange:function(t){P.log("val",t),this.active=t},onChangeName:function(t){P.log("val",t),this.activeName=t}}},M=F,O=(0,C.A)(M,l,d,!1,null,"6a46ad7d",null,!1,i,c),G=O.exports},91529:function(t,e,a){"use strict";a.d(e,{U6:function(){return u},W9:function(){return c},ZC:function(){return n},eJ:function(){return l},ho:function(){return r},i0:function(){return d},ib:function(){return s},j_:function(){return b},kN:function(){return o},q1:function(){return f},zI:function(){return i}});var i="checkboxGroup",n="collapse",o="picker",r="radioGroup",s="sidebar",c="tabbar",l="tabs",d="indexBar",u="grid",b="dropdown-menu",f="row"},2233:function(t,e,a){"use strict";a.d(e,{b:function(){return c},G:function(){return l}});var i=a(47735),n=a(38398);a(174),a(50524),a(28784),a(98127),a(13740),a(71292),a(15186),a(16206),a(75762),a(32033),a(55026),a(6344);function o(t){var e=[];function a(t){t.forEach((function(t){e.push(t),t.componentInstance&&a(t.componentInstance.$children.map((function(t){return t.$vnode}))),t.children&&a(t.children)}))}return a(t),e}function r(t,e){var a=e.$vnode.componentOptions;if(null!==a&&void 0!==a&&a.children){var i=o(a.children);t.sort((function(t,e){return i.indexOf(t.$vnode)-i.indexOf(e.$vnode)}))}}var s=a(98488)["A"];function c(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=e.indexKey||"index";return{inject:(0,n.A)({},t,{default:null}),computed:(0,n.A)({},a,(function(){var e=this;return e.bindRelation(),e[t]?e[t].children.indexOf(this):null})),watch:{disableBindRelation:function(t){var e=this;t||e.bindRelation()}},created:function(){},mounted:function(){var t=this;t.bindRelation()},beforeDestroy:function(){var t=this;t.onBeforeMount()},methods:{bindRelation:function(){if(this[t]&&-1===this[t].children.indexOf(this)){var e=[].concat((0,i.A)(this[t].children),[this]);try{r(e,this[t])}catch(a){s.log("err",a)}this[t].children=e}},onBeforeMount:function(){var e,a=this;a[t]&&(a[t].children=a[t].children.filter((function(t){return t!==a})),null===a||void 0===a||null===(e=a.destroyCallback)||void 0===e||e.call(a))}}}}function l(t){return{provide:function(){return(0,n.A)({},t,this)},data:function(){return{}}}}},20699:function(t,e,a){"use strict";a.r(e);var i=a(10809),n=a.n(i),o=a(34114),r=a.n(o),s=r()(n());s.push([t.id,".press-tabbar-item-index[data-v-862231ba]{flex:1;height:100%}.press-tabbar-item[data-v-862231ba]{display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;color:var(--tabbar-item-text-color,#646566);font-size:var(--tabbar-item-font-size,12px);line-height:var(--tabbar-item-line-height,1)}.press-tabbar-item__icon[data-v-862231ba]{position:relative;margin-bottom:var(--tabbar-item-margin-bottom,4px);font-size:var(--tabbar-item-icon-size,22px)}.press-tabbar-item__icon__inner[data-v-862231ba]{display:block;min-width:1em}.press-tabbar-item--active[data-v-862231ba]{color:var(--tabbar-item-active-color,#1989fa)}.press-tabbar-item__info[data-v-862231ba]{margin-top:2px}",""]),e["default"]=s},72608:function(t,e,a){"use strict";a.r(e);var i=a(10809),n=a.n(i),o=a(34114),r=a.n(o),s=r()(n());s.push([t.id,'.press-hairline--top-bottom[data-v-6644c6cd]{position:relative}.press-hairline--top-bottom[data-v-6644c6cd]:after{border:0 solid #ebedf0;bottom:-50%;box-sizing:border-box;content:" ";left:-50%;pointer-events:none;position:absolute;right:-50%;top:-50%;-webkit-transform:scale(.5);transform:scale(.5);-webkit-transform-origin:center;transform-origin:center;border-width:1px 0}.press-tabbar[data-v-6644c6cd]{display:flex;box-sizing:initial;width:100%;height:var(--tabbar-height,50px);background-color:var(--tabbar-background-color,#fff)}.press-tabbar--fixed[data-v-6644c6cd]{position:fixed;bottom:0;left:0}.press-tabbar--safe[data-v-6644c6cd]{padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom)}.press-tabbar[data-v-6644c6cd]  press-tabbar-item{flex:1}',""]),e["default"]=s}}]);
(self["webpackChunkpress_ui_demo_vue2"]=self["webpackChunkpress_ui_demo_vue2"]||[]).push([[2968],{64685:function(t,e,n){var i=n(4118);i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.id,i,""]]),i.locals&&(t.exports=i.locals);var a=n(69898).A;a("343e54b7",i,!0,{sourceMap:!1,shadowMode:!1})},11582:function(t,e,n){"use strict";var i;n.r(e),n.d(e,{default:function(){return j}});var a,o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"demo-wrap demo-wrap--gray"},[n("demo-block",{attrs:{title:t.t("basicUsage"),"section-style":t.sectionStyle,"header-style":t.headerStyle}},[n("press-collapse",{attrs:{value:t.activeNames},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.onChange.apply(void 0,arguments)},open:function(e){arguments[0]=e=t.$handleEvent(e),t.onOpen.apply(void 0,arguments)},close:function(e){arguments[0]=e=t.$handleEvent(e),t.onClose.apply(void 0,arguments)}}},[n("press-collapse-item",{attrs:{title:t.t("title")+" 1",name:"1"}},[t._v(t._s(t.t("text")))]),n("press-collapse-item",{attrs:{title:t.t("title")+" 2",name:"2"}},[t._v(t._s(t.t("text")))]),n("press-collapse-item",{attrs:{title:t.t("title")+" 3",name:"3"}},[t._v(t._s(t.t("text")))])],1)],1),n("demo-block",{attrs:{title:t.t("accordion"),"header-style":t.headerStyle,"section-style":t.sectionStyle}},[n("press-collapse",{attrs:{value:t.activeNames2,accordion:!0},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.onChangeAccordion.apply(void 0,arguments)}}},[n("press-collapse-item",{attrs:{title:t.t("title")+" A",name:"1"}},[t._v(t._s(t.t("text")))]),n("press-collapse-item",{attrs:{title:t.t("title")+" B",name:"2"}},[t._v(t._s(t.t("text")))]),n("press-collapse-item",{attrs:{title:t.t("title")+" C",name:"3"}},[t._v(t._s(t.t("text")))])],1)],1),n("demo-block",{attrs:{title:t.t("disabled"),"header-style":t.headerStyle,"section-style":t.sectionStyle}},[n("press-collapse",{attrs:{value:t.activeNames3,accordion:!0},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.onChangeDisabled.apply(void 0,arguments)}}},[n("press-collapse-item",{attrs:{title:t.t("title")+" X",name:"1"}},[t._v(t._s(t.t("text")))]),n("press-collapse-item",{attrs:{title:t.t("title")+" Y",disabled:!0,name:"2"}},[t._v(t._s(t.t("text")))]),n("press-collapse-item",{attrs:{title:t.t("title")+" Z",name:"3",disabled:!0}},[t._v(t._s(t.t("text")))])],1)],1),n("demo-block",{attrs:{title:t.t("titleSlot"),"section-style":t.sectionStyle,"header-style":t.headerStyle}},[n("press-collapse",{attrs:{value:t.activeNamesTitle},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.onChangeTitle.apply(void 0,arguments)}}},[n("press-collapse-item",{attrs:{name:"1"},scopedSlots:t._u([{key:"title",fn:function(){return[n("div",[t._v(t._s(t.t("title"))+" 1"),n("press-icon-plus",{attrs:{name:"question-o"}})],1)]},proxy:!0}])},[t._v(t._s(t.t("text")))]),n("press-collapse-item",{attrs:{title:t.t("title")+" 2",name:"2",icon:"shop-o"}},[t._v(t._s(t.t("text")))])],1)],1)],1)},s=[],l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.customClass+" press-collapse-item "+(0!==t.index?"press-hairline--top":"")},[n("press-cell",{attrs:{size:t.size,title:t.title,"title-class":t.titleClass,icon:t.icon,value:t.value,label:t.label,"is-link":t.isLink,clickable:t.clickable,border:t.border&&t.expanded,"custom-class":t.collapseItemCustomClass,"hover-class":"press-cell--hover",center:!0},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick.apply(void 0,arguments)}},scopedSlots:t._u([{key:"title",fn:function(){return[t._t("title")]},proxy:!0},{key:"right-icon",fn:function(){return[t._t("right-icon")]},proxy:!0}],null,!0)},[t._t("value")],2),n("div",{class:t.wrapperClass,style:t.animationStyle},[n("div",{class:["press-collapse-item__content",t.contentClass]},[t._t("default")],2)])],1)},r=[],c=n(11312),d=(n(28784),n(98127),n(13740),n(92986),n(74395)),u=(n(174),n(87696)),p=n(81500);function f(t){var e=t.height,n=t.duration;return["height: ".concat(e,";"),"transition: height ".concat(n,"ms ease-in-out 0ms, top ").concat(n,"ms ease-in-out 0ms, -webkit-transform ").concat(n,"ms ease-in-out 0ms, transform ").concat(n,"ms ease-in-out 0ms;"),"transform-origin: 50% 50% 0px;"].join("")}function h(t,e,n,i){if(e)if(0===i){var a=0;t.animationStyle=f({height:"auto",duration:a})}else{var o=n?300:1;t.animationStyle=f({height:"".concat(i,"px"),duration:o}),setTimeout((function(){t.animationStyle=f({height:"auto",duration:0})}),o)}else{var s=1;t.animationStyle=f({height:"".concat(i,"px"),duration:s}),(0,u.xi)((function(){t.animationStyle=f({height:0,duration:300})}))}}function m(t,e,n){(0,p.l)(t,".press-collapse-item__content").then((function(t){return t.height})).then((function(i){h(t,e,n,i)}))}var v,b,_,g,y=n(35296),x=n(19393),C=n(2233),k=n(91529),S={name:"PressCollapseItem",options:(0,c.A)((0,c.A)({},y.KQ),{},{styleIsolation:"shared"}),components:{PressCell:d.A},mixins:[(0,C.b)(k.ZC)],props:(0,c.A)({size:{type:String,default:""},name:{type:String,default:""},title:{type:String,default:""},value:{type:String,default:""},icon:{type:String,default:""},label:{type:String,default:""},disabled:{type:Boolean,default:!1},clickable:{type:Boolean,default:!1},border:{type:Boolean,default:!0},isLink:{type:Boolean,default:!0},titleClass:{type:String,default:""},contentClass:{type:String,default:""}},y.Gs),emits:[],data:function(){var t=this[k.ZC].defaultExpandAll;return{expanded:!!t,animation:{},mounted:!1,animationStyle:t?"height: auto;":"height: 0;"}},computed:{collapseItemClass:function(){var t=this.disabled,e=this.expanded;return x.Ay.bem2("collapse-item__title",{disabled:t,expanded:e})},collapseItemCustomClass:function(){var t="";return t=this.collapseItemClass,t},wrapperClass:function(){return x.Ay.bem2("collapse-item__wrapper")}},mounted:function(){this.updateExpanded(),this.mounted=!0},methods:{updateExpanded:function(){if(this[k.ZC]){var t=this[k.ZC],e=t.value,n=t.accordion,i=this[k.ZC].children,a=void 0===i?[]:i,o=this.name,s=a.indexOf(this),l=null==o?s:o,r=n?e===l:(e||[]).some((function(t){return t===l}));r!==this.expanded&&m(this,r,this.mounted),this.expanded=r}},onClick:function(){if(!this.disabled){var t=this.name,e=this.expanded,n=this[k.ZC].children.indexOf(this),i=null==t?n:t;this[k.ZC].switch(i,!e)}}}},A=S,w=(n(64685),n(17592)),E=(0,w.A)(A,l,r,!1,null,"aab003f8",null,!1,a,v),$=E.exports,N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.customClass+" press-collapse "+(t.border?"press-hairline--top-bottom":"")},[t._t("default")],2)},B=[],I=(n(50524),n(71292),n(32033),n(6344),{name:"PressCollapse",options:(0,c.A)({},y.KQ),mixins:[(0,C.G)(k.ZC)],props:(0,c.A)({value:{type:[Array,String],default:function(){return[]}},accordion:{type:Boolean,default:!1},border:{type:Boolean,default:!0},defaultExpandAll:{type:Boolean,default:!1}},y.Gs),watch:{value:{handler:function(){this.updateExpanded()}},accordion:{handler:function(){this.updateExpanded()}}},created:function(){this.children=[]},methods:{updateExpanded:function(){this.children.forEach((function(t){t.updateExpanded()}))},switch:function(t,e){var n=this.accordion,i=this.value,a=t;t=n?e?t:"":e?(i||[]).concat(t):(i||[]).filter((function(e){return e!==t})),e?this.$emit("open",a):this.$emit("close",a),this.$emit("change",t),this.$emit("input",t)}}}),O=I,Z=(0,w.A)(O,N,B,!1,null,"45b4415a",null,!1,b,_),z=Z.exports,G=n(56839),T=n(98488)["A"],P={i18n:{"zh-CN":{accordion:"手风琴",titleSlot:"自定义标题内容",text:"代码是写出来给人看的，附带能在机器上运行"},"en-US":{accordion:"Accordion",titleSlot:"Custom title",text:"Content"}},components:{PressCollapseItem:$,PressCollapse:z,PressIconPlus:G.A},data:function(){return{activeNames:["1"],activeNames2:"1",activeNames3:["1"],activeNamesTitle:["1"],sectionStyle:"margin: 0;",headerStyle:"background: #f7f8fa;"}},methods:{onChange:function(t){T.log("onChange.value: ",t),this.activeNames=t},onOpen:function(t){this.onGTip("open: ".concat(t)),T.log("onOpen.value: ",t)},onClose:function(t){this.onGTip("close: ".concat(t)),T.log("onClose.value: ",t)},onChangeAccordion:function(t){this.activeNames2=t},onChangeDisabled:function(t){this.activeNames3=t},onChangeTitle:function(t){this.activeNamesTitle=t}}},M=P,R=(0,w.A)(M,o,s,!1,null,"3edd3128",null,!1,i,g),j=R.exports},91529:function(t,e,n){"use strict";n.d(e,{U6:function(){return u},W9:function(){return r},ZC:function(){return a},eJ:function(){return c},ho:function(){return s},i0:function(){return d},ib:function(){return l},j_:function(){return p},kN:function(){return o},q1:function(){return f},zI:function(){return i}});var i="checkboxGroup",a="collapse",o="picker",s="radioGroup",l="sidebar",r="tabbar",c="tabs",d="indexBar",u="grid",p="dropdown-menu",f="row"},2233:function(t,e,n){"use strict";n.d(e,{b:function(){return r},G:function(){return c}});var i=n(47735),a=n(38398);n(174),n(50524),n(28784),n(98127),n(13740),n(71292),n(15186),n(16206),n(75762),n(32033),n(55026),n(6344);function o(t){var e=[];function n(t){t.forEach((function(t){e.push(t),t.componentInstance&&n(t.componentInstance.$children.map((function(t){return t.$vnode}))),t.children&&n(t.children)}))}return n(t),e}function s(t,e){var n=e.$vnode.componentOptions;if(null!==n&&void 0!==n&&n.children){var i=o(n.children);t.sort((function(t,e){return i.indexOf(t.$vnode)-i.indexOf(e.$vnode)}))}}var l=n(98488)["A"];function r(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.indexKey||"index";return{inject:(0,a.A)({},t,{default:null}),computed:(0,a.A)({},n,(function(){var e=this;return e.bindRelation(),e[t]?e[t].children.indexOf(this):null})),watch:{disableBindRelation:function(t){var e=this;t||e.bindRelation()}},created:function(){},mounted:function(){var t=this;t.bindRelation()},beforeDestroy:function(){var t=this;t.onBeforeMount()},methods:{bindRelation:function(){if(this[t]&&-1===this[t].children.indexOf(this)){var e=[].concat((0,i.A)(this[t].children),[this]);try{s(e,this[t])}catch(n){l.log("err",n)}this[t].children=e}},onBeforeMount:function(){var e,n=this;n[t]&&(n[t].children=n[t].children.filter((function(t){return t!==n})),null===n||void 0===n||null===(e=n.destroyCallback)||void 0===e||e.call(n))}}}}function c(t){return{provide:function(){return(0,a.A)({},t,this)},data:function(){return{}}}}},4118:function(t,e,n){"use strict";n.r(e);var i=n(10809),a=n.n(i),o=n(34114),s=n.n(o),l=s()(a());l.push([t.id,'.press-hairline--top[data-v-aab003f8]{position:relative}.press-hairline--top[data-v-aab003f8]:after{border:0 solid #ebedf0;bottom:-50%;box-sizing:border-box;content:" ";left:-50%;pointer-events:none;position:absolute;right:-50%;top:-50%;-webkit-transform:scale(.5);transform:scale(.5);-webkit-transform-origin:center;transform-origin:center;border-top-width:1px}[data-v-aab003f8] .press-collapse-item__title .press-cell__right-icon{-webkit-transform:rotate(90deg);transform:rotate(90deg);transition:-webkit-transform var(--collapse-item-transition-duration,.3s);transition:transform var(--collapse-item-transition-duration,.3s);transition:transform var(--collapse-item-transition-duration,.3s),-webkit-transform var(--collapse-item-transition-duration,.3s)}[data-v-aab003f8] .press-collapse-item__title--expanded .press-cell__right-icon{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}[data-v-aab003f8] .press-collapse-item__title--disabled .press-cell__title,[data-v-aab003f8] .press-collapse-item__title--disabled .press-cell__right-icon{color:var(--collapse-item-title-disabled-color,#c8c9cc)!important}[data-v-aab003f8] .press-collapse-item__title--disabled .press-cell--hover{background-color:#fff!important}.press-collapse-item__wrapper[data-v-aab003f8]{overflow:hidden}.press-collapse-item__content[data-v-aab003f8]{padding:var(--collapse-item-content-padding,15px);color:var(--collapse-item-content-text-color,#969799);font-size:var(--collapse-item-content-font-size,13px);line-height:var(--collapse-item-content-line-height,1.5);background-color:var(--collapse-item-content-background-color,#fff)}',""]),e["default"]=l}}]);
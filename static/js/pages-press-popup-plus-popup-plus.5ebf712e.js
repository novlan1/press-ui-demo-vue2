(self["webpackChunkpress_ui_demo_vue2"]=self["webpackChunkpress_ui_demo_vue2"]||[]).push([[1263],{64419:function(o,t,n){var e=n(79498);e.__esModule&&(e=e.default),"string"===typeof e&&(e=[[o.id,e,""]]),e.locals&&(o.exports=e.locals);var s=n(69898).A;s("14b62d91",e,!0,{sourceMap:!1,shadowMode:!1})},68910:function(o,t,n){"use strict";var e;n.r(t),n.d(t,{default:function(){return m}});var s,i=function(){var o=this,t=o.$createElement,n=o._self._c||t;return n("div",{staticClass:"demo-wrap"},[n("demo-block",{attrs:{title:o.t("basicUsage")}},[n("press-cell",{attrs:{title:o.t("basicUsage"),"is-link":!0},on:{click:function(t){arguments[0]=t=o.$handleEvent(t),o.onShowPopup("center")}}})],1),n("demo-block",{attrs:{title:o.t("position")}},[n("press-cell",{attrs:{title:o.t("top"),"is-link":!0},on:{click:function(t){arguments[0]=t=o.$handleEvent(t),o.onShowPopup("top")}}}),n("press-cell",{attrs:{title:o.t("bottom"),"is-link":!0},on:{click:function(t){arguments[0]=t=o.$handleEvent(t),o.onShowPopup("bottom")}}}),n("press-cell",{attrs:{title:o.t("left"),"is-link":!0},on:{click:function(t){arguments[0]=t=o.$handleEvent(t),o.onShowPopup("left")}}}),n("press-cell",{attrs:{title:o.t("right"),"is-link":!0},on:{click:function(t){arguments[0]=t=o.$handleEvent(t),o.onShowPopup("right")}}})],1),n("demo-block",{attrs:{title:o.t("closeIcon")}},[n("press-cell",{attrs:{title:o.t("closeIcon"),"is-link":!0},on:{click:function(t){arguments[0]=t=o.$handleEvent(t),o.onShowPopup("bottom",{closeable:!0})}}}),n("press-cell",{attrs:{title:o.t("customIcon"),"is-link":!0},on:{click:function(t){arguments[0]=t=o.$handleEvent(t),o.onShowPopup("bottom",{closeable:!0,closeIcon:"close"})}}}),n("press-cell",{attrs:{title:o.t("iconPosition"),"is-link":!0},on:{click:function(t){arguments[0]=t=o.$handleEvent(t),o.onShowPopup("bottom",{closeable:!0,closeIconPosition:"top-left"})}}}),n("press-cell",{attrs:{title:o.t("rightCloseIcon"),"is-link":!0},on:{click:function(t){arguments[0]=t=o.$handleEvent(t),o.onShowPopup("right",{closeable:!0})}}})],1),n("demo-block",{attrs:{title:o.t("round")}},[n("press-cell",{attrs:{title:o.t("round"),"is-link":!0},on:{click:function(t){arguments[0]=t=o.$handleEvent(t),o.onShowPopup("bottom",{round:!0})}}})],1),n("press-popup-plus",{attrs:{show:o.show,position:o.popupPosition,"custom-style":o.customStyle,round:o.isRound,closeable:o.isCloseable,"close-icon":o.closeIcon,"close-icon-position":o.closeIconPosition},on:{close:function(t){arguments[0]=t=o.$handleEvent(t),o.onClose.apply(void 0,arguments)}}},[o._v(o._s("center"===o.popupPosition?o.t("content"):""))])],1)},c=[],l=n(74395),p=n(78766),a=n(87696),r="center",u="cross",h="top-right",d={i18n:{"zh-CN":{show:"查看",position:"弹出位置",bottom:"底部弹出",top:"顶部弹出",left:"左侧弹出",right:"右侧弹出",closeIcon:"关闭图标",customIcon:"自定义图标",iconPosition:"图标位置",rightCloseIcon:"右侧弹出关闭图标",round:"圆角弹窗"},"en-US":{show:"Show",position:"Position",bottom:"Bottom",top:"Top",left:"Left",right:"Right",closeIcon:"Close Icon",customIcon:"Custom Icon",iconPosition:"Icon Position",rightCloseIcon:"Right with Icon",round:"Round"}},components:{PressCell:l.A,PressPopupPlus:p.A},data:function(){return{show:!1,popupPosition:r,customStyle:"",isRound:!1,isCloseable:!1,closeIcon:u,closeIconPosition:h}},methods:{onClose:function(){this.show=!1},onShowPopup:function(o){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.popupPosition=o||r;var e="";this.isRound=!!n.round,this.isCloseable=!!n.closeable,this.closeIcon=n.closeIcon||u,this.closeIconPosition=n.closeIconPosition||h;var s="".concat(["width: 30%","height: calc(100% - var(--window-top, 0px))","top: calc(50% + var(--window-top, 0px) / 2)","bottom: 0"].join(";"),";");switch(o){case"top":e="height: 20%;";break;case"bottom":e="height: 20%;";break;case"left":e=s;break;case"right":e=s;break;case"center":e="padding: 30px 50px;";break;default:e=""}this.customStyle=e,(0,a.dY)((function(){t.show=!0}))}}},f=d,b=(n(64419),n(17592)),k=(0,b.A)(f,i,c,!1,null,"7dfcd369",null,!1,e,s),m=k.exports},79498:function(o,t,n){"use strict";n.r(t);var e=n(10809),s=n.n(e),i=n(34114),c=n.n(i),l=c()(s());l.push([o.id,".demo-wrap[data-v-7dfcd369]{padding-bottom:400px;font-size:16px}",""]),t["default"]=l}}]);
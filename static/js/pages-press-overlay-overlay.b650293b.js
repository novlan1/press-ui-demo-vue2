(self["webpackChunkpress_ui_demo_vue2"]=self["webpackChunkpress_ui_demo_vue2"]||[]).push([[2927],{60964:function(t,e,n){var o=n(82073);o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[t.id,o,""]]),o.locals&&(t.exports=o.locals);var s=n(69898).A;s("f912f6a6",o,!0,{sourceMap:!1,shadowMode:!1})},67881:function(t,e,n){"use strict";var o;n.r(e),n.d(e,{default:function(){return f}});var s,i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"demo-wrap"},[n("demo-block",{attrs:{title:t.t("basicUsage")}},[n("press-cell",{attrs:{title:t.t("check"),"is-link":!0},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClickShow("normal")}}})],1),n("demo-block",{attrs:{title:t.t("embeddedContent")}},[n("press-cell",{attrs:{title:t.t("check"),"is-link":!0},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClickShow("content")}}})],1),n("press-overlay",{attrs:{show:t.options.normal},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClickHide("normal")}}}),n("press-overlay",{attrs:{show:t.options.content},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClickHide("content")}}},[n("div",{staticClass:"wrapper"},[n("div",{staticClass:"block",attrs:{"catch:tap":"noop"}})])])],1)},c=[],l=n(74395),a=n(20485),r={i18n:{"zh-CN":{embeddedContent:"嵌入内容"},"en-US":{embeddedContent:"Embedded"}},components:{PressCell:l.A,PressOverlay:a.A},data:function(){return{options:{normal:!1,content:!1}}},methods:{onClickShow:function(t){this.options[t]=!0},onClickHide:function(t){this.options[t]=!1},noop:function(){}}},d=r,u=(n(60964),n(17592)),p=(0,u.A)(d,i,c,!1,null,"3392963f",null,!1,o,s),f=p.exports},82073:function(t,e,n){"use strict";n.r(e);var o=n(10809),s=n.n(o),i=n(34114),c=n.n(i),l=c()(s());l.push([t.id,".wrapper[data-v-3392963f]{display:flex;align-items:center;justify-content:center;height:100%}.block[data-v-3392963f]{width:120px;height:120px;background-color:#fff}",""]),e["default"]=l}}]);
"use strict";(self["webpackChunkpress_ui_demo_vue2"]=self["webpackChunkpress_ui_demo_vue2"]||[]).push([[6157],{16257:function(t,e,n){var i;n.r(e),n.d(e,{default:function(){return k}});var o,r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"demo-wrap"},[n("demo-block",{attrs:{title:t.t("basicUsage")}},[n("press-cell",{attrs:{title:t.t("basicUsage"),"is-link":!0},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onShowPicker("normal")}}}),n("press-cell",{attrs:{title:t.t("topTip"),"is-link":!0},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onShowPicker("tip")}}}),n("press-cell",{attrs:{title:t.t("longList"),"is-link":!0},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onShowPicker("long")}}}),n("press-cell",{attrs:{title:t.t("horizontal"),"is-link":!0},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onShowPicker("horizontal")}}})],1),n("demo-block",{attrs:{title:t.t("functional")}},[n("press-cell",{attrs:{title:t.t("check"),"is-link":!0},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onShowFunctionalPicker.apply(void 0,arguments)}}})],1),t.curPicker.show?n("press-picker",{attrs:{title:t.curPicker.title,"show-back-arrow":t.curPicker.showBackArrow,list:t.curPicker.selectList,tip:t.curPicker.tip,current:t.curPicker.selectItem,horizontal:t.curPicker.horizontal,"virtual-list-threshold":30},on:{onClickConfirm:function(e){arguments[0]=e=t.$handleEvent(e),t.curPicker.onClickConfirm.apply(void 0,arguments)},onRemove:function(e){arguments[0]=e=t.$handleEvent(e),t.curPicker.onRemove.apply(void 0,arguments)}}}):t._e(),n("press-picker",{ref:t.PRESS_PICKER_ID,attrs:{id:t.PRESS_PICKER_ID,mode:"functional"}})],1)},l=[],c=n(11312),a=(n(174),n(17350),n(15186),n(824),n(55026),n(8809)),u=n(74395),s=n(57879),f="press-picker-functional",h={i18n:{"zh-CN":{topTip:"顶部提示",longList:"超长列表",functional:"函数式调用",horizontal:"横版",tipContent:"创建比赛后，可按比赛轮次精确设置。",addVirtualTeam:"添加虚拟队伍",addTeam:function(t){return"添加".concat(t,"队")}},"en-US":{topTip:"Top Tips",longList:"Super Long List",functional:"Functional Mode",horizontal:"Horizontal",tipContent:"Can be set precisely according to the round of the game",addVirtualTeam:"Add Virtual Team",addTeam:function(t){return"Add ".concat(t," Teams")}}},options:{styleIsolation:"shared"},components:{PressPicker:a.A,PressCell:u.A},data:function(){var t=this,e=[{label:this.t("bo1"),value:1},{label:this.t("bo3"),value:3},{label:this.t("bo5"),value:5},{label:this.t("bo7"),value:7},{label:this.t("bo9"),value:9}],n=Array.from({length:8e3}).map((function(e,n){return{label:t.t("addTeam",n+1),value:n+1}})),i={onClickConfirm:function(e){t.onSuccessTip(e),t.curPicker.show=!1,t.pickerOption[t.curType]&&(t.pickerOption[t.curType].selectItem={value:e.value})},onRemove:function(){t.onTip("cancel"),t.curPicker.show=!1}};return{customStyle:"padding:0;",PICKER_BO_LIST:e,pickerOption:{normal:{title:this.t("wayToWin"),tip:"",selectList:e,selectItem:{label:e[3].label,value:7},horizontal:!1},tip:{title:this.t("wayToWin"),tip:this.t("tipContent"),selectList:e,selectItem:{label:e[1].label,value:3},horizontal:!1},long:{title:this.t("addVirtualTeam"),tip:"",selectList:n,selectItem:{value:1},horizontal:!1},horizontal:{title:this.t("wayToWin"),tip:"",selectList:e,selectItem:{label:e[3].label,value:7},horizontal:!0}},PRESS_PICKER_ID:f,pressPickerFunctionalData:{},curPicker:(0,c.A)({},i),curType:""}},computed:{},methods:{onShowPicker:function(t){this.onGHideToast(),this.curType=t,this.curPicker=(0,c.A)((0,c.A)((0,c.A)({},this.curPicker),this.pickerOption[t]),{},{show:!0})},onConfirm:function(){},onTip:function(t){this.onGTip(t)},onSuccessTip:function(t){var e=t.label,n=t.value;this.curPicker.show=!1,this.onTip("value: ".concat(n,", label: ").concat(e))},onShowFunctionalPicker:function(){var t=this,e=this.PICKER_BO_LIST;s.g.call(this,{context:this,selector:"#".concat(f),list:e,arrowIcon:!0,current:{label:e[1].label,value:3},title:this.t("wayToWin"),tip:this.t("tipContent")}).then((function(e){var n=e.item;t.onSuccessTip(n)})).catch((function(){t.onTip("cancel")}))}}},p=h,d=n(17592),v=(0,d.A)(p,r,l,!1,null,null,null,!1,i,o),k=v.exports},7255:function(t,e,n){n.d(e,{XO:function(){return i}});n(174);function i(t,e){var n,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"setData";if(t){var o=(null===(n=t.$vm)||void 0===n?void 0:n[i])||t[i];return"function"===typeof o?o(e):void 0}}},57879:function(t,e,n){n.d(e,{C:function(){return s},g:function(){return f}});var i=n(11312),o=n(48058),r=(n(86810),n(98127),n(59803),n(74861),n(43988),n(19393)),l=n(7255),c="showDialog";function a(){var t=getCurrentPages();return t[t.length-1]}function u(t,e,n){var i=t.$children;if(i){var r,l=(0,o.A)(i);try{for(l.s();!(r=l.n()).done;){var c=r.value;if(c.$attrs[e]===n)return c}}catch(p){l.e(p)}finally{l.f()}var a,s=(0,o.A)(i);try{for(s.s();!(a=s.n()).done;){var f=a.value,h=u(f,e,n);if(h)return h}}catch(p){s.e(p)}finally{s.f()}}}function s(t,e){var n,i;if(e&&t){if("function"===typeof e)return e(t);var o=e;if(o.match(/^[^\w]/)&&(o=o.slice(1)),null!==(n=t.$refs)&&void 0!==n&&n[o])return t.$refs[o];if((0,r.n1)()){var l=e.startsWith("#")?"id":"class",c=u(t,l,o);if(c)return c}if("function"===typeof(null===t||void 0===t?void 0:t.$selectComponent)){var a,s=null===t||void 0===t||null===(a=t.$selectComponent)||void 0===a?void 0:a.call(t,e);return s}return null===t||void 0===t||null===(i=t.selectComponent)||void 0===i?void 0:i.call(t,e)}}function f(t){return new Promise((function(e,n){var o=t.context||a(),r=t.dialog;r||(r=s(o,t.selector));var u=(0,i.A)({callback:function(t,i){"confirm"===t?e(i):n(i)}},t);delete u.dialog,delete u.context;var f=t.showFunction||c;(0,l.XO)(r,u,f)}))}},48058:function(t,e,n){n.d(e,{A:function(){return o}});n(56359),n(24907),n(9527),n(98756),n(96194),n(98127),n(824),n(56389);var i=n(81373);function o(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=(0,i.A)(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var o=0,r=function(){};return{s:r,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,c=!0,a=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return c=t.done,t},e:function(t){a=!0,l=t},f:function(){try{c||null==n["return"]||n["return"]()}finally{if(a)throw l}}}}}}]);
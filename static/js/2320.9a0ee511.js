(self["webpackChunkpress_ui_demo_vue2"]=self["webpackChunkpress_ui_demo_vue2"]||[]).push([[2320],{15451:function(e,t,i){var r=i(9284);r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[e.id,r,""]]),r.locals&&(e.exports=r.locals);var n=i(69898).A;n("1cb74355",r,!0,{sourceMap:!1,shadowMode:!1})},23813:function(e,t,i){"use strict";var r;i.d(t,{A:function(){return w}});var n,o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("PressOverlay",{attrs:{show:e.innerShow,"custom-style":"background: rgba(0, 0, 0, 0.9);z-index: "+e.getPropOrData("zIndex")+";"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onClickOverlay.apply(void 0,arguments)}}},[i("div",{staticClass:"press-image-preview",class:[e.getPropOrData("customClass")],style:e.imagePreviewStyle},[e.getPropOrData("showIndex")?i("div",{staticClass:"press-image-preview__index"},[e._v(e._s(e.active+1)+"/"+e._s(e.getPropOrData("images").length))]):e._e(),i("div",{class:["press-image-preview__close-icon","press-image-preview__close-icon--"+e.getPropOrData("closeIconPosition")],on:{click:function(t){t.stopPropagation(),arguments[0]=t=e.$handleEvent(t),e.onClose.apply(void 0,arguments)}}},[e.getPropOrData("closeable")?i("PressIconPlus",{attrs:{name:e.getPropOrData("closeIcon")}}):e._e()],1),i("v-uni-swiper",{staticClass:"press-image-preview__swipe",attrs:{current:e.active},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.onChange.apply(void 0,arguments)}}},e._l(e.getPropOrData("images"),(function(t,r){return i("v-uni-swiper-item",{key:r,staticClass:"press-image-preview__swipe-item",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onClickSwiperItem.apply(void 0,arguments)}}},[i("div",{staticClass:"press-image-preview__image-wrap"},[i("img",{staticClass:"press-image-preview__image",attrs:{src:t,fit:"contain"}})])])})),1),i("div")],1)])},a=[],s=i(11312),c=(i(11680),i(20485)),l=i(56839),p=i(78835),u=i(87696),v=i(15608),f={images:{type:Array,default:function(){return[]}},startPosition:{type:[Number,String],default:0},transition:{type:String,default:"press-fade"},showIndex:{type:Boolean,default:!0},asyncClose:{type:Boolean,default:!1},customStyle:{type:String,default:""},customClass:{type:String,default:""},closeable:{type:Boolean,default:!1},closeIcon:{type:String,default:"clear"},closeIconPosition:{type:String,default:"top-right"},zIndex:{type:Number,default:10}},d={name:"PressImagePreview",components:{PressOverlay:c.A,PressIconPlus:l.A},mixins:[(0,p.h)(f),v.Y],props:(0,s.A)({},f),emits:["close","change"],data:function(){return{active:0}},computed:{imagePreviewStyle:function(){return this.getPropOrData("customStyle")}},watch:{startPosition:"setActive",show:function(e){e?(this.setActive(+this.getPropOrData("startPosition")),(0,u.dY)((function(){}))):this.$emit("close",{index:this.active,url:this.getPropOrData("images")[this.active]})}},mounted:function(){},methods:{showImagePreview:function(e){this.showDialog(e),this.setActive(e.startPosition||0)},onClosed:function(){},onChange:function(e){var t=e.detail.current,i=void 0===t?0:t;this.setActive(i)},emitClose:function(){this.getPropOrData("asyncClose")?this.promiseCallback("cancel"):(this.$emit("close"),this.innerShow=!1,this.promiseCallback("confirm"))},onClose:function(){this.emitClose()},onClickOverlay:function(){this.onClose()},onClickSwiperItem:function(){this.onClose()},setActive:function(e){e!==this.active&&(this.active=e,this.$emit("change",e))}}},g=d,m=(i(15451),i(17592)),h=(0,m.A)(g,o,a,!1,null,"9eb19b44",null,!1,r,n),w=h.exports},7255:function(e,t,i){"use strict";i.d(t,{XO:function(){return r}});i(174);function r(e,t){var i,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"setData";if(e){var n=(null===(i=e.$vm)||void 0===i?void 0:i[r])||e[r];return"function"===typeof n?n(t):void 0}}},57879:function(e,t,i){"use strict";i.d(t,{C:function(){return p},g:function(){return u}});var r=i(11312),n=i(48058),o=(i(86810),i(98127),i(59803),i(74861),i(43988),i(19393)),a=i(7255),s="showDialog";function c(){var e=getCurrentPages();return e[e.length-1]}function l(e,t,i){var r=e.$children;if(r){var o,a=(0,n.A)(r);try{for(a.s();!(o=a.n()).done;){var s=o.value;if(s.$attrs[t]===i)return s}}catch(f){a.e(f)}finally{a.f()}var c,p=(0,n.A)(r);try{for(p.s();!(c=p.n()).done;){var u=c.value,v=l(u,t,i);if(v)return v}}catch(f){p.e(f)}finally{p.f()}}}function p(e,t){var i,r;if(t&&e){if("function"===typeof t)return t(e);var n=t;if(n.match(/^[^\w]/)&&(n=n.slice(1)),null!==(i=e.$refs)&&void 0!==i&&i[n])return e.$refs[n];if((0,o.n1)()){var a=t.startsWith("#")?"id":"class",s=l(e,a,n);if(s)return s}if("function"===typeof(null===e||void 0===e?void 0:e.$selectComponent)){var c,p=null===e||void 0===e||null===(c=e.$selectComponent)||void 0===c?void 0:c.call(e,t);return p}return null===e||void 0===e||null===(r=e.selectComponent)||void 0===r?void 0:r.call(e,t)}}function u(e){return new Promise((function(t,i){var n=e.context||c(),o=e.dialog;o||(o=p(n,e.selector));var l=(0,r.A)({callback:function(e,r){"confirm"===e?t(r):i(r)}},e);delete l.dialog,delete l.context;var u=e.showFunction||s;(0,a.XO)(o,l,u)}))}},72320:function(e,t,i){"use strict";i.d(t,{W:function(){return l},k:function(){return c}});var r=i(11312),n=i(57879),o=i(63562),a=i(23813),s="pressImagePreview";function c(e){var t;return e.selector||(t=(0,o.f)(a.A,s),t.mode="functional"),(0,n.g)((0,r.A)((0,r.A)({},e),{},{dialog:t,show:!0,showFunction:"showImagePreview"}))}var l=c},9284:function(e,t,i){"use strict";i.r(t);var r=i(10809),n=i.n(r),o=i(34114),a=i.n(o),s=a()(n());s.push([e.id,".press-image-preview[data-v-9eb19b44]{position:fixed;bottom:0;left:0;width:100%;height:calc(100% - var(--window-top, 0px));z-index:2}.press-image-preview__swipe[data-v-9eb19b44]{height:100%}.press-image-preview__cover[data-v-9eb19b44]{position:absolute;top:0;left:0}.press-image-preview__image-wrap[data-v-9eb19b44]{width:100%;height:100%;display:flex;align-items:center;justify-content:center;overflow:hidden}.press-image-preview__image[data-v-9eb19b44]{width:100%;transition-property:-webkit-transform;transition-property:transform;transition-property:transform,-webkit-transform}.press-image-preview__image--vertical[data-v-9eb19b44]{width:auto;height:100%}.press-image-preview__image img[data-v-9eb19b44]{-webkit-user-drag:none}.press-image-preview__image .press-image__error[data-v-9eb19b44]{top:30%;height:40%}.press-image-preview__image .press-image__error-icon[data-v-9eb19b44]{font-size:36px}.press-image-preview__image .press-image__loading[data-v-9eb19b44]{background-color:transparent}.press-image-preview__index[data-v-9eb19b44]{position:absolute;top:16px;left:50%;color:#fff;font-size:14px;line-height:20px;text-shadow:0 1px 1px #323233;-webkit-transform:translate(-50%);transform:translate(-50%)}[data-v-9eb19b44] .press-image-preview__overlay{background-color:rgba(0,0,0,.9)}.press-image-preview__close-icon[data-v-9eb19b44]{position:absolute;z-index:1;color:#c8c9cc;font-size:22px;cursor:pointer}.press-image-preview__close-icon[data-v-9eb19b44]:active{color:#969799}.press-image-preview__close-icon--top-left[data-v-9eb19b44]{top:16px;left:16px}.press-image-preview__close-icon--top-right[data-v-9eb19b44]{top:16px;right:16px}.press-image-preview__close-icon--bottom-left[data-v-9eb19b44]{bottom:16px;left:16px}.press-image-preview__close-icon--bottom-right[data-v-9eb19b44]{right:16px;bottom:16px}",""]),t["default"]=s},48058:function(e,t,i){"use strict";i.d(t,{A:function(){return n}});i(56359),i(24907),i(9527),i(98756),i(96194),i(98127),i(824),i(56389);var r=i(81373);function n(e,t){var i="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!i){if(Array.isArray(e)||(i=(0,r.A)(e))||t&&e&&"number"==typeof e.length){i&&(e=i);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,s=!0,c=!1;return{s:function(){i=i.call(e)},n:function(){var e=i.next();return s=e.done,e},e:function(e){c=!0,a=e},f:function(){try{s||null==i["return"]||i["return"]()}finally{if(c)throw a}}}}}}]);
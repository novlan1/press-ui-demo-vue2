(self["webpackChunkpress_ui_demo_vue2"]=self["webpackChunkpress_ui_demo_vue2"]||[]).push([[15],{71607:function(t,s,e){var i=e(47510);i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.id,i,""]]),i.locals&&(t.exports=i.locals);var n=e(69898).A;n("75289edb",i,!0,{sourceMap:!1,shadowMode:!1})},30617:function(t,s,e){var i=e(57596);i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.id,i,""]]),i.locals&&(t.exports=i.locals);var n=e(69898).A;n("2685233e",i,!0,{sourceMap:!1,shadowMode:!1})},20787:function(t,s,e){"use strict";var i;e.r(s),e.d(s,{default:function(){return X}});var n,a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"demo-wrap demo-pull-refresh"},[e("press-tabs",{attrs:{active:t.active},on:{change:function(s){arguments[0]=s=t.$handleEvent(s),t.onChangeTab.apply(void 0,arguments)}}},[e("press-tab",{attrs:{title:t.t("basicUsage")}},[e("PressPullRefresh",{on:{refresh:function(s){arguments[0]=s=t.$handleEvent(s),t.onRefresh.apply(void 0,arguments)},change:function(s){arguments[0]=s=t.$handleEvent(s),t.onChange.apply(void 0,arguments)}},model:{value:t.isLoading,callback:function(s){t.isLoading=s},expression:"isLoading"}},[e("p",{staticClass:"demo-button"},[t._v(t._s(t.tips))])])],1),e("press-tab",{attrs:{title:t.t("successTip")}},[e("PressPullRefresh",{attrs:{"success-text":t.t("success")},on:{refresh:function(s){arguments[0]=s=t.$handleEvent(s),t.onRefresh(!1)}},model:{value:t.isLoading,callback:function(s){t.isLoading=s},expression:"isLoading"}},[e("p",{staticClass:"demo-button"},[t._v(t._s(t.tips))])])],1),e("press-tab",{attrs:{title:t.t("customTips")}},[e("PressPullRefresh",{attrs:{"head-height":"80"},on:{refresh:function(s){arguments[0]=s=t.$handleEvent(s),t.onRefresh(!0)}},scopedSlots:t._u([{key:"pulling",fn:function(t){var s=t.distance;return[e("img",{staticClass:"doge",style:{transform:"scale("+s/80+")"},attrs:{src:"https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/article/2024/7/own_mike_9ebf38f1fc4354df84.png"}})]}},{key:"loosing",fn:function(){return[e("img",{staticClass:"doge",attrs:{src:"https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/article/2024/7/own_mike_9ebf38f1fc4354df84.png"}})]},proxy:!0},{key:"loading",fn:function(){return[e("img",{staticClass:"doge",attrs:{src:"https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/article/2024/7/own_mike_aecbd81ffaca64b6f4.jpg"}})]},proxy:!0}]),model:{value:t.isLoading,callback:function(s){t.isLoading=s},expression:"isLoading"}},[e("p",{staticClass:"demo-button"},[t._v(t._s(t.tips))])])],1)],1)],1)},o=[],r=(e(174),function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"press-pull-refresh",style:t.customStyle},[e("div",{ref:"track",staticClass:"press-pull-refresh__track",style:t.innerTrackStyle,on:{touchstart:function(s){arguments[0]=s=t.$handleEvent(s),t.onTouchStart.apply(void 0,arguments)},touchmove:function(s){arguments[0]=s=t.$handleEvent(s),t.onTouchMove.apply(void 0,arguments)},touchend:function(s){arguments[0]=s=t.$handleEvent(s),t.onTouchEnd.apply(void 0,arguments)},touchcancel:function(s){arguments[0]=s=t.$handleEvent(s),t.onTouchEnd.apply(void 0,arguments)}}},[e("div",{staticClass:"press-pull-refresh__head",style:t.headStyle},["pulling"===t.status?[t._t("pulling",[t._v(t._s(t.pullingText))],{distance:t.distance})]:"loosing"===t.status?[t._t("loosing",[t._v(t._s(t.loosingText))])]:"success"===t.status?[t._t("success",[t._v(t._s(t.successText))])]:"normal"===t.status?[t._t("normal")]:"loading"===t.status?[t._t("loading",[e("PressLoadingPlus",{attrs:{size:"16"}},[t._v(t._s(t.statusText))])])]:t._e()],2),t._t("default")],2)])}),c=[],u=(e(11680),e(66092)),l=e(22995),h=e(84251),d=e(22371);function f(t,s){return t>s?"horizontal":s>t?"vertical":""}var p={data:function(){return{direction:""}},methods:{touchStart:function(t){this.resetTouchStatus(),this.startX=t.touches[0].clientX,this.startY=t.touches[0].clientY},touchMove:function(t){var s=t.touches[0];this.deltaX=s.clientX<0?0:s.clientX-this.startX,this.deltaY=s.clientY-this.startY,this.offsetX=Math.abs(this.deltaX),this.offsetY=Math.abs(this.deltaY);var e=10;(!this.direction||this.offsetX<e&&this.offsetY<e)&&(this.direction=f(this.offsetX,this.offsetY))},resetTouchStatus:function(){this.direction="",this.deltaX=0,this.deltaY=0,this.offsetX=0,this.offsetY=0}}},g=e(43478),m=e(87696);function v(t){("boolean"!==typeof t.cancelable||t.cancelable)&&t.preventDefault()}var _,y,b=50,T=["pulling","loosing","success"],S={name:"PressPullRefresh",options:{styleIsolation:"shared"},components:{PressLoadingPlus:h.A},mixins:[p,g.VP],props:{disabled:Boolean,successText:{type:String,default:""},pullingText:{type:String,default:""},loosingText:{type:String,default:""},loadingText:{type:String,default:""},pullDistance:{type:[Number,String],default:""},successDuration:{type:[Number,String],default:500},animationDuration:{type:[Number,String],default:300},headHeight:{type:[Number,String],default:b},trackStyle:{type:String,default:""},customStyle:{type:String,default:""}},emits:["change","update:modelValue","refresh"],data:function(){return{status:"normal",distance:0,duration:0,TEXT_STATUS:T}},computed:{statusText:function(){var t=this.status;return this["".concat(t,"Text")]||(0,d.t)(t)},touchable:function(){return"loading"!==this.status&&"success"!==this.status&&!this.disabled},innerTrackStyle:function(){return(0,u.iF)([{transitionDuration:"".concat(this.duration,"ms"),transform:this.distance?"translate3d(0,".concat(this.distance,"px, 0)"):""},this.trackStyle])},headStyle:function(){return this.headHeight!==b?(0,u.iF)({height:"".concat(this.headHeight,"px")}):""}},watch:{realModelValue:function(t){this.duration=this.animationDuration,t?this.setStatus(+this.headHeight,!0):this.successText?this.showSuccessTip():this.setStatus(0,!1)}},mounted:function(){this.scrollEl=(0,l.Rm)(this.$el)},methods:{checkPullStart:function(t){this.ceiling=!0,this.ceiling=0===(0,l.hY)(this.scrollEl),this.ceiling&&(this.duration=0,this.touchStart(t))},onTouchStart:function(t){this.touchable&&this.checkPullStart(t)},onTouchMove:function(t){this.touchable&&(this.ceiling||this.checkPullStart(t),this.touchMove(t),this.ceiling&&this.deltaY>=0&&"vertical"===this.direction&&(v(t),this.setStatus(this.ease(this.deltaY))))},onTouchEnd:function(){var t=this;this.touchable&&this.ceiling&&this.deltaY&&(this.duration=this.animationDuration,"loosing"===this.status?(this.setStatus(+this.headHeight,!0),this.emitModelValue(!0),this.$emit("change",!0),(0,m.dY)((function(){t.$emit("refresh")}))):this.setStatus(0))},ease:function(t){var s=+(this.pullDistance||this.headHeight);return t>s&&(t=t<2*s?s+(t-s)/2:1.5*s+(t-2*s)/4),Math.round(t)},setStatus:function(t,s){var e;e=s?"loading":0===t?"normal":t<(this.pullDistance||this.headHeight)?"pulling":"loosing",this.distance=t,e!==this.status&&(this.status=e),this.$emit("change",{status:this.status,distance:t})},showSuccessTip:function(){var t=this;this.status="success",setTimeout((function(){t.setStatus(0)}),this.successDuration)}}},x=S,k=(e(30617),e(17592)),w=(0,k.A)(x,r,c,!1,null,"6b05d99f",null,!1,n,_),C=w.exports,P=e(74627),Y=e(62538),E=e(98488)["A"],M={i18n:{"zh-CN":{try:"下拉试试",text:"刷新次数",success:"刷新成功",successTip:"成功提示",customTips:"自定义提示"},"en-US":{try:"Try it down",text:"Refresh Count",success:"Refresh success",successTip:"Success Tip",customTips:"Custom Tips"}},components:{PressPullRefresh:C,PressTab:P.A,PressTabs:Y.A},data:function(){return{count:0,isLoading:!1,active:0}},computed:{tips:function(){return this.count?"".concat(this.t("text"),": ").concat(this.count):this.t("try")}},methods:{onRefresh:function(){var t=this;setTimeout((function(){t.onGTip("刷新成功"),t.isLoading=!1,t.count+=1}),1e3)},onChange:function(t){E.log("[onChange]",t)},onChangeTab:function(t){E.log("[onChangeTab]",t)}}},$=M,L=(e(71607),(0,k.A)($,a,o,!1,null,"c0a703ae",null,!1,i,y)),X=L.exports},47510:function(t,s,e){"use strict";e.r(s);var i=e(10809),n=e.n(i),a=e(34114),o=e.n(a),r=o()(n());r.push([t.id,".demo-wrap[data-v-c0a703ae]{overflow:hidden}.demo-pull-refresh[data-v-c0a703ae]  .press-pull-refresh{height:calc(100vh - 50px)}.demo-button[data-v-c0a703ae]{margin:0;padding:16px 0 0 16px}.doge[data-v-c0a703ae]{width:140px;height:72px;border-radius:4px;margin:8px auto}",""]),s["default"]=r},57596:function(t,s,e){"use strict";e.r(s);var i=e(10809),n=e.n(i),a=e(34114),o=e.n(a),r=o()(n());r.push([t.id,".press-pull-refresh[data-v-6b05d99f]{overflow:hidden;-webkit-user-select:none;user-select:none}.press-pull-refresh__track[data-v-6b05d99f]{position:relative;height:100%;transition-property:-webkit-transform;transition-property:transform;transition-property:transform,-webkit-transform}.press-pull-refresh__head[data-v-6b05d99f]{position:absolute;left:0;width:100%;height:50px;overflow:hidden;color:#969799;font-size:14px;line-height:50px;text-align:center;-webkit-transform:translateY(-100%);transform:translateY(-100%);display:flex;align-items:center;justify-content:center}",""]),s["default"]=r}}]);
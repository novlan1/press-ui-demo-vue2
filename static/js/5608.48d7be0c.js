(self["webpackChunkpress_ui_demo_vue2"]=self["webpackChunkpress_ui_demo_vue2"]||[]).push([[5608],{88817:function(t,i,e){var n=e(15290);n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.id,n,""]]),n.locals&&(t.exports=n.locals);var a=e(69898).A;a("3e36f6c7",n,!0,{sourceMap:!1,shadowMode:!1})},1251:function(t,i,e){var n=e(20702);n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.id,n,""]]),n.locals&&(t.exports=n.locals);var a=e(69898).A;a("45b5abbf",n,!0,{sourceMap:!1,shadowMode:!1})},15608:function(t,i,e){"use strict";e.d(i,{Y:function(){return R}});var n=e(11312),a=e(19393),r=(e(174),e(28784),e(16206),e(11680),e(98127),e(60671),e(59803),e(99782),e(35684),e(13740),e(32033),e(6344),function(t,i,e,n){t.addEventListener(i,(function(t){"function"===typeof e&&!1===e(t)&&(t.preventDefault(),t.stopPropagation())}),{capture:n,passive:!1})}),s={beforeDestroy:function(){document.removeEventListener("mousemove",this.__mouseMoveEventListener),document.removeEventListener("mouseup",this.__mouseUpEventListener)},methods:{touchTrack:function(t,i,e){var n,a,s,o=this,u=this,c=0,h=0,l=0,p=0,d=function(t,e,n,a){if(!1===u[i]({target:t.target,currentTarget:t.currentTarget,preventDefault:t.preventDefault.bind(t),stopPropagation:t.stopPropagation.bind(t),touches:t.touches,changedTouches:t.changedTouches,detail:{state:e,x:n,y:a,dx:n-c,dy:a-h,ddx:n-l,ddy:a-p,timeStamp:t.timeStamp}}))return!1},v=null;r(t,"touchstart",(function(t){if(a=!0,1===t.touches.length&&!v)return v=t,l=t.touches[0].pageX,c=l,p=t.touches[0].pageY,h=p,d(t,"start",c,h)})),r(t,"mousedown",(function(t){if(s=!0,!a&&!v)return v=t,l=t.pageX,c=l,p=t.pageY,h=p,d(t,"start",c,h)})),r(t,"touchmove",(function(t){if(1===t.touches.length&&v){var i=d(t,"move",t.touches[0].pageX,t.touches[0].pageY);return l=t.touches[0].pageX,p=t.touches[0].pageY,i}})),this.__clickEventListener=function(t){t.preventDefault(),t.stopPropagation()};var f=this.__clickEventListener;this.__mouseMoveEventListener=function(t){if(!a&&s&&v){!n&&(Math.abs(l-c)>2||Math.abs(p-h)>2)&&(document.addEventListener("click",f,!0),n=!0);var i=d(t,"move",t.pageX,t.pageY);return l=t.pageX,p=t.pageY,i}};var m=this.__mouseMoveEventListener;document.addEventListener("mousemove",m),r(t,"touchend",(function(t){if(0===t.touches.length&&v)return a=!1,v=null,d(t,"end",t.changedTouches[0].pageX,t.changedTouches[0].pageY)})),this.__mouseUpEventListener=function(t){if(s=!1,!a&&v)return n&&setTimeout((function(){document.removeEventListener("click",o.__clickEventListener,!0),n=!1}),0),v=null,d(t,"end",t.pageX,t.pageY)};var g=this.__mouseUpEventListener;document.addEventListener("mouseup",g),r(t,"touchcancel",(function(t){if(v){a=!1;var i=v;return v=null,d(t,e?"cancel":"end",i.touches[0].pageX,i.touches[0].pageY)}}))}}},o=(e(17939),e(43988),e(36866));function u(t){return t.mp=Object.assign({"@warning":"mp is deprecated"},t),t._processed=!0,t}e(46839),e(10730),e(91364);var c=/-(\w)/g;function h(t){return t.replace(c,(function(t,i){return i.toUpperCase()}))}function l(t){var i={},e=t.__vue__;function n(t,e){var n=t.$attrs;for(var a in n)if(a.startsWith("data-")){var r=h(a.substr(5).toLowerCase()),s=n[a];i[r]=e?s:i[r]||s}}if(e){var a=e;while(a&&a.$el===t)n(a),a=a.$children[0];var r=e.$parent;while(r&&r.$el===t)n(r,!0),r=r.$parent}else i=Object.assign({},t.dataset,t.__uniDataset);return p(i)}function p(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=JSON.parse(JSON.stringify(t)),e=Object.keys(i),n=e.length;if(n)for(var a=0;a<n;a++){var r=e[a],s=r.length;"v"!==r.substr(0,1)||9!==s&&10!==s||delete i[r]}return i}function d(t,i){var e={id:t.id,offsetLeft:t.offsetLeft,offsetTop:t.offsetTop,dataset:l(t)};return i&&Object.assign(e,i),e}function v(t){if(t){for(var i=[],e=(0,o.Ay)(),n=e.top,a=0;a<t.length;a++){var r=t[a];i.push({identifier:r.identifier,pageX:r.pageX,pageY:r.pageY-n,clientX:r.clientX,clientY:r.clientY-n,force:r.force||0})}return i}return[]}function f(t){return t.startsWith("mouse")||["contextmenu"].includes(t)}function m(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{};if(i._processed)return i.type=e.type||t,i;if("click"===t){var r=(0,o.Ay)(),s=r.top;e={x:i.x,y:i.y-s},i.changedTouches=[{force:1,identifier:0,clientX:i.clientX,clientY:i.clientY,pageX:i.pageX,pageY:i.pageY}],i.touches=i.changedTouches}var c=u({type:e.type||t,timeStamp:i.timeStamp||0,detail:e,target:d(n,e),currentTarget:d(a,!1,!0),touches:i instanceof Event||i instanceof CustomEvent?v(i.touches):i.touches,changedTouches:i instanceof Event||i instanceof CustomEvent?v(i.changedTouches):i.changedTouches,preventDefault:function(){},stopPropagation:function(){}});if(f(t)){var h=(0,o.Ay)(),l=h.top;c.pageX=i.pageX,c.pageY=i.pageY-l,c.clientX=i.clientX,c.clientY=i.clientY-l}return c}var g,_,w,b,y,S,k={methods:{$trigger:function(t,i,e){this.$emit(t,m.call(this,t,i,e,this.$el,this.$el))}}},M=e(10019),x="h5",T={name:"Swiper",mixins:[s,k],props:(0,n.A)({},M.o),emits:["update:current","update:currentItemId","change","animationfinish","transition"],data:function(){return{currentSync:Math.round(this.current)||0,currentItemIdSync:this.currentItemId||"",userTracking:!1,currentChangeSource:"",items:[],isNavigationAuto:!1,hideNavigation:!1,prevDisabled:!1,nextDisabled:!1}},computed:{intervalNumber:function(){var t=Number(this.interval);return isNaN(t)?5e3:t},durationNumber:function(){var t=Number(this.duration);return isNaN(t)?500:t},displayMultipleItemsNumber:function(){var t=Math.round(this.displayMultipleItems);return isNaN(t)?1:t},slidesStyle:function(){var t={};return(this.nextMargin||this.previousMargin)&&(t=this.vertical?{left:0,right:0,top:this._upx2px(this.previousMargin),bottom:this._upx2px(this.nextMargin)}:{top:0,bottom:0,left:this._upx2px(this.previousMargin),right:this._upx2px(this.nextMargin)}),t},slideFrameStyle:function(){var t="".concat(Math.abs(100/this.displayMultipleItemsNumber),"%");return{width:this.vertical?"100%":t,height:this.vertical?t:"100%"}},swiperEnabled:function(){return this.items.length>this.displayMultipleItemsNumber},circularEnabled:function(){return this.circular&&this.swiperEnabled}},watch:{vertical:function(){this._resetLayout()},circular:function(){this._resetLayout()},intervalNumber:function(){this._timer&&(this._cancelSchedule(),this._scheduleAutoplay())},current:function(){this._currentCheck()},currentSync:function(t,i){this._currentChanged(t,i),this.$emit("update:current",t),this._setNavigationState()},currentItemId:function(){this._currentCheck()},currentItemIdSync:function(t){this.$emit("update:currentItemId",t)},displayMultipleItemsNumber:function(){this._resetLayout()},navigation:{immediate:!0,handler:function(t){this.isNavigationAuto="auto"===t,this.hideNavigation=!0!==t||this.isNavigationAuto,this._navigationSwiperAddMouseEvent()}},items:function(){this._setNavigationState()},swiperEnabled:function(t){t||(this.prevDisabled=!0,this.nextDisabled=!0,this.isNavigationAuto&&(this.hideNavigation=!0))}},created:function(){this._invalid=!0,this._viewportPosition=0,this._viewportMoveRatio=1,this._animating=null,this._requestedAnimation=!1,this._userDirectionChecked=!1,this._contentTrackViewport=0,this._contentTrackSpeed=0,this._contentTrackT=0},mounted:function(){var t=this;this._currentCheck(),this.touchTrack(this.$refs.slidesWrapper,"_handleContentTrack",!0),this._resetLayout(),this.$watch((function(){return t.autoplay&&!t.userTracking}),this._inintAutoplay),this._inintAutoplay(this.autoplay&&!this.userTracking),this.$watch("items.length",this._resetLayout),this._navigationSwiperAddMouseEvent()},beforeDestroy:function(){this._cancelSchedule(),cancelAnimationFrame(this._animationFrame)},methods:{_inintAutoplay:function(t){t?this._scheduleAutoplay():this._cancelSchedule()},_currentCheck:function(){var t=-1;if(this.currentItemId)for(var i=0,e=this.items;i<e.length;i++){var n=e[i].componentInstance;if(n&&n.itemId===this.currentItemId){t=i;break}}t<0&&(t=Math.round(this.current)||0),t=t<0?0:t,this.currentSync!==t&&(this.currentChangeSource="",this.currentSync=t)},_itemReady:function(t,i){t.componentInstance&&t.componentInstance._isMounted?i():(t._callbacks=t._callbacks||[],t._callbacks.push(i))},_currentChanged:function(t,i){var e=this,n=this.currentChangeSource;if(this.currentChangeSource="",!n){var a=this.items.length;this._animateViewport(t,"",this.circularEnabled&&i+(a-t)%a>a/2?1:0)}var r=this.items[t];r&&this._itemReady(r,(function(){e.currentItemIdSync=r.componentInstance.itemId||"";var t=e.currentItemIdSync;e.$trigger("change",{},{current:e.currentSync,currentItemId:t,source:n})}))},_scheduleAutoplay:function(){var t=this;function i(){t._timer=null,t.currentChangeSource="autoplay",t.circularEnabled?t.currentSync=t._normalizeCurrentValue(t.currentSync+1):t.currentSync=t.currentSync+t.displayMultipleItemsNumber<t.items.length?t.currentSync+1:0,t._animateViewport(t.currentSync,"autoplay",t.circularEnabled?1:0),t._timer=setTimeout(i,t.intervalNumber)}this._cancelSchedule(),!this._isMounted||this._invalid||this.items.length<=this.displayMultipleItemsNumber||(this._timer=setTimeout(i,this.intervalNumber))},_cancelSchedule:function(){this._timer&&(clearTimeout(this._timer),this._timer=null)},_normalizeCurrentValue:function(t){var i=this.items.length;if(!i)return-1;var e=(Math.round(t)%i+i)%i;if(this.circularEnabled){if(i<=this.displayMultipleItemsNumber)return 0}else if(e>i-this.displayMultipleItemsNumber)return i-this.displayMultipleItemsNumber;return e},_upx2px:function(t){return/\d+[ur]px$/i.test(t)&&t.replace(/\d+[ur]px$/i,(function(t){return"".concat(uni.upx2px(parseFloat(t)),"px")})),t||""},_resetLayout:function(){if(this._isMounted){this._cancelSchedule(),this._endViewportAnimation();for(var t=this.items,i=0;i<t.length;i++)this._updateItemPos(i,i);if(this._viewportMoveRatio=1,1===this.displayMultipleItemsNumber&&t.length){var e=t[0].componentInstance.$el.getBoundingClientRect(),n=this.$refs.slideFrame.getBoundingClientRect();this._viewportMoveRatio=e.width/n.width,this._viewportMoveRatio>0&&this._viewportMoveRatio<1||(this._viewportMoveRatio=1)}var a=this._viewportPosition;this._viewportPosition=-2;var r=this.currentSync;r>=0?(this._invalid=!1,this.userTracking?(this._updateViewport(a+r-this._contentTrackViewport),this._contentTrackViewport=r):(this._updateViewport(r),this.autoplay&&this._scheduleAutoplay())):(this._invalid=!0,this._updateViewport(-this.displayMultipleItemsNumber-1))}},_checkCircularLayout:function(t){if(!this._invalid)for(var i=this.items,e=i.length,n=t+this.displayMultipleItemsNumber,a=0;a<e;a++){var r=i[a],s=r._position,o=Math.floor(t/e)*e+a,u=o+e,c=o-e,h=Math.max(t-(o+1),o-n,0),l=Math.max(t-(u+1),u-n,0),p=Math.max(t-(c+1),c-n,0),d=Math.min(h,l,p),v=[o,u,c][[h,l,p].indexOf(d)];s!==v&&this._updateItemPos(a,v)}},_updateItemPos:function(t,i){var e=this.vertical?"0":"".concat(100*i,"%"),n=this.vertical?"".concat(100*i,"%"):"0",a="translate(".concat(e,", ").concat(n,") translateZ(0)"),r=this.items[t];this._itemReady(r,(function(){var t=r.componentInstance.$el;t.style["-webkit-transform"]=a,t.style.transform=a,t._position=i}))},_updateViewport:function(t){Math.floor(2*this._viewportPosition)===Math.floor(2*t)&&Math.ceil(2*this._viewportPosition)===Math.ceil(2*t)||this.circularEnabled&&this._checkCircularLayout(t);var i=this.vertical?"0":"".concat(100*-t*this._viewportMoveRatio,"%"),e=this.vertical?"".concat(100*-t*this._viewportMoveRatio,"%"):"0",n="translate(".concat(i,", ").concat(e,") translateZ(0)"),a=this.$refs.slideFrame;if(a&&(a.style["-webkit-transform"]=n,a.style.transform=n),this._viewportPosition=t,!this._transitionStart){if(t%1===0)return;this._transitionStart=t}t-=Math.floor(this._transitionStart),t<=-(this.items.length-1)?t+=this.items.length:t>=this.items.length&&(t-=this.items.length),t=this._transitionStart%1>.5||this._transitionStart<0?t-1:t,this.$trigger("transition",{},{dx:this.vertical?0:t*a.offsetWidth,dy:this.vertical?t*a.offsetHeight:0})},_animateFrameFuncProto:function(){var t=this;if(this._animating){var i=this._animating,e=i.toPos,n=i.acc,a=i.endTime,r=i.source,s=a-Date.now();if(s<=0){this._updateViewport(e),this._animating=null,this._requestedAnimation=!1,this._transitionStart=null;var o=this.items[this.currentSync];o&&this._itemReady(o,(function(){var i=o.componentInstance.itemId||"";t.$trigger("animationfinish",{},{current:t.currentSync,currentItemId:i,source:r})}))}else{var u=n*s*s/2,c=e+u;this._updateViewport(c),this._animationFrame=requestAnimationFrame(this._animateFrameFuncProto.bind(this))}}else this._requestedAnimation=!1},_animateViewport:function(t,i,e){this._cancelViewportAnimation();var n=this.durationNumber,a=this.items.length,r=this._viewportPosition;if(this.circularEnabled)if(e<0){for(;r<t;)r+=a;for(;r-a>t;)r-=a}else if(e>0){for(;r>t;)r-=a;for(;r+a<t;)r+=a;r+a-t<t-r&&(r+=a)}else{for(;r+a<t;)r+=a;for(;r-a>t;)r-=a;r+a-t<t-r&&(r+=a)}else"click"===i&&(t=t+this.displayMultipleItemsNumber-1<a?t:0);this._animating={toPos:t,acc:2*(r-t)/(n*n),endTime:Date.now()+n,source:i},this._requestedAnimation||(this._requestedAnimation=!0,this._animationFrame=requestAnimationFrame(this._animateFrameFuncProto.bind(this)))},_cancelViewportAnimation:function(){this._animating=null},_endViewportAnimation:function(){this._animating&&(this._updateViewport(this._animating.toPos),this._animating=null)},_handleTrackStart:function(){this._cancelSchedule(),this._contentTrackViewport=this._viewportPosition,this._contentTrackSpeed=0,this._contentTrackT=Date.now(),this._cancelViewportAnimation()},_handleTrackMove:function(t){var i=this,e=this._contentTrackT;this._contentTrackT=Date.now();var n=this.items.length,a=n-this.displayMultipleItemsNumber;function r(t){return.5-.25/(t+.5)}function s(t,e){var n=i._contentTrackViewport+t;i._contentTrackSpeed=.6*i._contentTrackSpeed+.4*e,i.circularEnabled||(n<0||n>a)&&(n<0?n=-r(-n):n>a&&(n=a+r(n-a)),i._contentTrackSpeed=0),i._updateViewport(n)}var o=this._contentTrackT-e||1;this.vertical?s(-t.dy/this.$refs.slideFrame.offsetHeight,-t.ddy/o):s(-t.dx/this.$refs.slideFrame.offsetWidth,-t.ddx/o)},_handleTrackEnd:function(t){this.userTracking=!1;var i=this._contentTrackSpeed/Math.abs(this._contentTrackSpeed),e=0;!t&&Math.abs(this._contentTrackSpeed)>.2&&(e=.5*i);var n=this._normalizeCurrentValue(this._viewportPosition+e);t?this._updateViewport(this._contentTrackViewport):(this.currentChangeSource="touch",this.currentSync=n,this._animateViewport(n,"touch",0!==e?e:0===n&&this.circularEnabled&&this._viewportPosition>=1?1:0))},_handleContentTrack:function(t){if(!this.disableTouch&&this.items.length&&!this._invalid){if("start"===t.detail.state)return this.userTracking=!0,this._userDirectionChecked=!1,this._handleTrackStart();if("end"===t.detail.state)return this._handleTrackEnd(!1);if("cancel"===t.detail.state)return this._handleTrackEnd(!0);if(this.userTracking){if(!this._userDirectionChecked){this._userDirectionChecked=!0;var i=Math.abs(t.detail.dx),e=Math.abs(t.detail.dy);if((i>=e&&this.vertical||i<=e&&!this.vertical)&&(this.userTracking=!1),!this.userTracking)return void(this.autoplay&&this._scheduleAutoplay())}return this._handleTrackMove(t.detail),!1}}},_onSwiperDotClick:function(t){this._animateViewport(this.currentSync=t,this.currentChangeSource="click",this.circularEnabled?1:0)},_navigationClick:function(t,i,e){if(t.stopPropagation(),!e){var n=this.items.length,a=this.currentSync;switch(i){case"prev":a-=1,a<0&&this.circularEnabled&&(a=n-1);break;case"next":a+=1,a>=n&&this.circularEnabled&&(a=0);break}this._onSwiperDotClick(a)}},_navigationMouseMove:function(t){var i=this;clearTimeout(this.hideNavigationTimer);var e=t.clientX,n=t.clientY,a=this.$refs.slidesWrapper.getBoundingClientRect(),r=a.left,s=a.right,o=a.top,u=a.bottom,c=a.width,h=a.height,l=!1;l=this.vertical?!(n-o<h/3||u-n<h/3):!(e-r<c/3||s-e<c/3),l?this.hideNavigationTimer=setTimeout((function(){i.hideNavigation=l}),300):this.hideNavigation=l},_navigationMouseOut:function(){this.hideNavigation=!0},_navigationSwiperAddMouseEvent:function(){if("h5"===x){var t=this.$refs.slidesWrapper;t&&(t.removeEventListener("mousemove",this._navigationMouseMove),t.removeEventListener("mouseleave",this._navigationMouseOut),this.isNavigationAuto&&(t.addEventListener("mousemove",this._navigationMouseMove),t.addEventListener("mouseleave",this._navigationMouseOut)))}},_navigationHover:function(t,i){var e=t.currentTarget;e&&(e.style.backgroundColor="over"===i?this.navigationActiveColor:"")},_setNavigationState:function(){var t=this.items.length,i=!this.circularEnabled;this.prevDisabled=0===this.currentSync&&i,this.nextDisabled=this.currentSync===t-1&&i||i&&this.currentSync+this.displayMultipleItemsNumber>=t}},render:function(t){var i=this,e=[],a=[];this.$slots.default&&(0,M.H)(this.$slots.default,t).forEach((function(t){t.componentOptions&&"swiper-item"===t.componentOptions.tag&&a.push(t)}));for(var r=function(n){var a=i.currentSync;e.push(t("div",{on:{click:function(){return i._onSwiperDotClick(n)}},class:{"uni-swiper-dot":!0,"uni-swiper-dot-active":n<a+i.displayMultipleItemsNumber&&n>=a||n<a+i.displayMultipleItemsNumber-o},style:{background:n===a?i.indicatorActiveColor:i.indicatorColor}}))},s=0,o=a.length;s<o;s++)r(s);this.items=a;var u=[t("div",{ref:"slides",style:this.slidesStyle,class:"uni-swiper-slides"},[t("div",{ref:"slideFrame",class:"uni-swiper-slide-frame",style:this.slideFrameStyle},a)])];if(this.indicatorDots&&u.push(t("div",{ref:"slidesDots",class:["uni-swiper-dots",this.vertical?"uni-swiper-dots-vertical":"uni-swiper-dots-horizontal"]},e)),"h5"===x&&this.navigation){var c={"uni-swiper-navigation-hide":this.hideNavigation,"uni-swiper-navigation-vertical":this.vertical},h=t("i",{domProps:{innerHTML:"&#xe601;"},class:"uni-btn-icon",style:{color:this.navigationColor,fontSize:"26px"}}),l={mouseover:function(t){return i._navigationHover(t,"over")},mouseout:function(t){return i._navigationHover(t,"out")}};u.push(t("div",{on:(0,n.A)({click:function(t){return i._navigationClick(t,"prev",i.prevDisabled)}},l),class:["uni-swiper-navigation","uni-swiper-navigation-prev",(0,n.A)({"uni-swiper-navigation-disabled":this.prevDisabled},c)]},[h]),t("div",{on:(0,n.A)({click:function(t){return i._navigationClick(t,"next",i.nextDisabled)}},l),class:["uni-swiper-navigation","uni-swiper-navigation-next",(0,n.A)({"uni-swiper-navigation-disabled":this.nextDisabled},c)]},[h]))}return t("uni-swiper",{on:this.$listeners},[t("div",{ref:"slidesWrapper",class:"uni-swiper-wrapper"},u)])}},I=T,N=(e(1251),e(17592)),C=(0,N.A)(I,g,_,!1,null,"8ab89f3a",null,!1,w,b),E=C.exports,A=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("uni-swiper-item",t._g({},t.$listeners),[t._t("default")],2)},$=[],L=e(16631),D={name:"SwiperItem",props:(0,n.A)({},L.u),mounted:function(){var t=this.$el;t.style.position="absolute",t.style.width="100%",t.style.height="100%";var i=this.$vnode._callbacks;i&&i.forEach((function(t){t()}))}},V=D,P=(e(88817),(0,N.A)(V,A,$,!1,null,"d074406c",null,!1,y,S)),Y=P.exports,X=e(43478),F={};(0,a.n1)()&&(F={Swiper:E,SwiperItem:Y},(0,X.xk)(["uni-swiper","uni-swiper-item"]));var R={components:(0,n.A)({},F)}},16631:function(t,i,e){"use strict";e.d(i,{u:function(){return n}});var n={itemId:{type:String,default:""}}},10019:function(t,i,e){"use strict";e.d(i,{H:function(){return n},o:function(){return a}});e(15186),e(11680),e(55026);function n(t,i){function e(t){var n,a=null===(n=t.children)||void 0===n?void 0:n.map(e),r=i(t.tag,t.data,a);return r.text=t.text,r.isComment=t.isComment,r.componentOptions=t.componentOptions,r.elm=t.elm,r.context=t.context,r.ns=t.ns,r.isStatic=t.isStatic,r.key=t.key,r}return"function"===typeof t.map?t.map(e):t}var a={indicatorDots:{type:[Boolean,String],default:!1},vertical:{type:[Boolean,String],default:!1},autoplay:{type:[Boolean,String],default:!1},circular:{type:[Boolean,String],default:!1},interval:{type:[Number,String],default:5e3},duration:{type:[Number,String],default:500},current:{type:[Number,String],default:0},indicatorColor:{type:String,default:""},indicatorActiveColor:{type:String,default:""},previousMargin:{type:String,default:""},nextMargin:{type:String,default:""},currentItemId:{type:String,default:""},skipHiddenItemLayout:{type:[Boolean,String],default:!1},displayMultipleItems:{type:[Number,String],default:1},disableTouch:{type:[Boolean,String],default:!1},navigation:{type:[Boolean,String],default:!1},navigationColor:{type:String,default:"#fff"},navigationActiveColor:{type:String,default:"rgba(53, 53, 53, 0.6)"}}},15290:function(t,i,e){"use strict";e.r(i);var n=e(10809),a=e.n(n),r=e(34114),s=e.n(r),o=s()(a());o.push([t.id,"uni-swiper-item[data-v-d074406c]{display:block;overflow:hidden;will-change:transform;position:absolute;width:100%;height:100%;cursor:grab}uni-swiper-item[hidden][data-v-d074406c]{display:none}",""]),i["default"]=o},20702:function(t,i,e){"use strict";e.r(i);var n=e(10809),a=e.n(n),r=e(34114),s=e.n(r),o=s()(a());o.push([t.id,"uni-swiper[data-v-8ab89f3a]{display:block;height:150px}uni-swiper[hidden][data-v-8ab89f3a]{display:none}uni-swiper .uni-swiper-wrapper[data-v-8ab89f3a]{overflow:hidden;position:relative;width:100%;height:100%;-webkit-transform:translateZ(0);transform:translateZ(0)}uni-swiper .uni-swiper-slides[data-v-8ab89f3a]{position:absolute;left:0;top:0;right:0;bottom:0}uni-swiper .uni-swiper-slide-frame[data-v-8ab89f3a]{position:absolute;left:0;top:0;width:100%;height:100%;will-change:transform}uni-swiper .uni-swiper-dots[data-v-8ab89f3a]{position:absolute;font-size:0}uni-swiper .uni-swiper-dots-horizontal[data-v-8ab89f3a]{left:50%;bottom:10px;text-align:center;white-space:nowrap;-webkit-transform:translate(-50%);transform:translate(-50%)}uni-swiper .uni-swiper-dots-horizontal .uni-swiper-dot[data-v-8ab89f3a]{margin-right:8px}uni-swiper .uni-swiper-dots-horizontal .uni-swiper-dot[data-v-8ab89f3a]:last-child{margin-right:0}uni-swiper .uni-swiper-dots-vertical[data-v-8ab89f3a]{right:10px;top:50%;text-align:right;-webkit-transform:translateY(-50%);transform:translateY(-50%)}uni-swiper .uni-swiper-dots-vertical .uni-swiper-dot[data-v-8ab89f3a]{display:block;margin-bottom:9px}uni-swiper .uni-swiper-dots-vertical .uni-swiper-dot[data-v-8ab89f3a]:last-child{margin-bottom:0}uni-swiper .uni-swiper-dot[data-v-8ab89f3a]{display:inline-block;width:8px;height:8px;cursor:pointer;transition-property:background-color;transition-timing-function:ease;background:rgba(0,0,0,.3);border-radius:50%}uni-swiper .uni-swiper-dot-active[data-v-8ab89f3a]{background-color:#000}uni-swiper .uni-swiper-navigation[data-v-8ab89f3a]{width:26px;height:26px;cursor:pointer;position:absolute;top:50%;margin-top:-13px;display:flex;align-items:center;transition:all .2s;border-radius:50%;opacity:1}uni-swiper .uni-swiper-navigation-disabled[data-v-8ab89f3a]{opacity:.35;cursor:not-allowed}uni-swiper .uni-swiper-navigation-hide[data-v-8ab89f3a]{opacity:0;cursor:auto;pointer-events:none}uni-swiper .uni-swiper-navigation-prev[data-v-8ab89f3a]{left:10px}uni-swiper .uni-swiper-navigation-prev i[data-v-8ab89f3a]{margin-left:-1px;left:10px}uni-swiper .uni-swiper-navigation-prev.uni-swiper-navigation-vertical[data-v-8ab89f3a]{top:18px;left:50%;margin-left:-13px}uni-swiper .uni-swiper-navigation-prev.uni-swiper-navigation-vertical i[data-v-8ab89f3a]{-webkit-transform:rotate(90deg);transform:rotate(90deg);margin-left:auto;margin-top:-2px}uni-swiper .uni-swiper-navigation-next[data-v-8ab89f3a]{right:10px}uni-swiper .uni-swiper-navigation-next i[data-v-8ab89f3a]{-webkit-transform:rotate(180deg);transform:rotate(180deg)}uni-swiper .uni-swiper-navigation-next.uni-swiper-navigation-vertical[data-v-8ab89f3a]{top:auto;bottom:5px;left:50%;margin-left:-13px}uni-swiper .uni-swiper-navigation-next.uni-swiper-navigation-vertical i[data-v-8ab89f3a]{margin-top:2px;-webkit-transform:rotate(270deg);transform:rotate(270deg)}",""]),i["default"]=o}}]);
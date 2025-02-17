(self.webpackChunktradingview=self.webpackChunktradingview||[]).push([[66289,96048],{650151:(e,t)=>{"use strict";function n(e,t){if(void 0===e)throw new Error("".concat(null!=t?t:"Value"," is undefined"));return e}function i(e,t){if(null===e)throw new Error("".concat(null!=t?t:"Value"," is null"));return e}t.ensureNotNull=t.ensureDefined=t.assert=void 0,t.assert=function(e,t){if(!e)throw new Error("Assertion failed".concat(t?": ".concat(t):""))},t.ensureDefined=n,t.ensureNotNull=i},150335:(e,t)=>{"use strict";function n(e){return Math.round(1e10*e)/1e10}t.isNumber=void 0,t.isNumber=function(e){return"number"==typeof e&&isFinite(e)}},91679:(e,t)=>{"use strict";t.WatchedValue=void 0;var n=function(){function e(e,t){void 0===t&&(t={}),this._listeners=[],void 0!==e&&(this._value=e),this._onDestroy=t.onDestroy}return e.prototype.destroy=function(){this.unsubscribe(),delete this._value,delete this._readonlyInstance,this._onDestroy&&this._onDestroy()},e.prototype.value=function(){return this._value},e.prototype.setValue=function(e,t){var n=this._value===e||Number.isNaN(this._value)&&Number.isNaN(e);!t&&n||(this._value=e,this._notifyListeners())},e.prototype.subscribe=function(e,t){var n,i,r=this;if(!(null===(n=null==t?void 0:t.signal)||void 0===n?void 0:n.aborted)){if((null==t?void 0:t.callWithLast)&&void 0!==this._value){try{e(this._value)}catch(e){t.onError&&t.onError(e)}if(t.once)return}(null==t?void 0:t.signal)&&t.signal.addEventListener("abort",(function(){r.unsubscribe(e)}),{once:!0}),this._listeners.push({callback:e,signal:null==t?void 0:t.signal,once:null!==(i=null==t?void 0:t.once)&&void 0!==i&&i,onError:null==t?void 0:t.onError})}},e.prototype.unsubscribe=function(e){for(var t=this._listeners.length;t--;){e!==this._listeners[t].callback&&void 0!==e||this._listeners.splice(t,1)}},e.prototype.readonly=function(){return this._readonlyInstance||(this._readonlyInstance=new r(this)),this._readonlyInstance},e.prototype.when=function(e,t){var n,i=this;if(!e)return new Promise((function(e,t){if(void 0===i._value){var n=function(t){void 0!==t&&(e(t),i.unsubscribe(n))};i.subscribe(n,{onError:t})}else e(i._value)}));if(!(null===(n=null==t?void 0:t.signal)||void 0===n?void 0:n.aborted))if(void 0===this._value){var r=function(t){void 0!==t&&(e(t),i.unsubscribe(r))};this.subscribe(r,t)}else try{e(this._value)}catch(e){(null==t?void 0:t.onError)&&t.onError(e)}},e.prototype._notifyListeners=function(){for(var e,t,n=0,i=this._listeners;n<i.length;n++){var r=i[n];if((r.once||(null===(e=r.signal)||void 0===e?void 0:e.aborted))&&this.unsubscribe(r.callback),!(null===(t=r.signal)||void 0===t?void 0:t.aborted))try{r.callback(this._value)}catch(e){r.onError&&r.onError(e)}}},e}();t.WatchedValue=n;var i="Using destroyed WatchedValueReadonly instance is not allowed",r=function(){function e(e){this._owner=e}return e.prototype.value=function(){var e;if(!this._owner)throw new Error(i);return null===(e=this._owner)||void 0===e?void 0:e.value()},e.prototype.destroy=function(){delete this._owner},e.prototype.subscribe=function(e,t){
if(!this._owner)throw new Error(i);this._owner.subscribe(e,t)},e.prototype.unsubscribe=function(e){if(!this._owner)throw new Error(i);this._owner.unsubscribe(e)},e.prototype.when=function(e,t){if(!this._owner)throw new Error(i);return void 0!==e?this._owner.when(e,t):this._owner.when()},e}()},64531:(e,t)=>{"use strict";var n,i=!("undefined"==typeof window||!window.document||!window.document.createElement);function r(){if(n)return n;if(!i||!window.document.body)return"indeterminate";var e=window.document.createElement("div");return e.appendChild(document.createTextNode("ABCD")),e.dir="rtl",e.style.fontSize="14px",e.style.width="4px",e.style.height="1px",e.style.position="absolute",e.style.top="-1000px",e.style.overflow="scroll",document.body.appendChild(e),n="reverse",e.scrollLeft>0?n="default":(e.scrollLeft=1,0===e.scrollLeft&&(n="negative")),document.body.removeChild(e),n}},778785:(e,t,n)=>{"use strict";n.d(t,{mobiletouch:()=>r,setClasses:()=>o});var i=n(23482);const r=i.mobiletouch;i.touch;function o(){document.documentElement.classList.add(i.touch?"feature-touch":"feature-no-touch",i.mobiletouch?"feature-mobiletouch":"feature-no-mobiletouch")}},638456:(e,t,n)=>{"use strict";n.r(t),n.d(t,{CheckMobile:()=>f,appVersion:()=>d,checkPageType:()=>w,desktopAppVersion:()=>l,isChrome:()=>b,isDesktopApp:()=>a,isEdge:()=>y,isFF:()=>m,isLinux:()=>u,isMac:()=>o,isSafari:()=>v,isSymphonyEmbed:()=>c,isWindows:()=>s,onGoPro:()=>g,onMainPage:()=>_,onWidget:()=>p,supportTouch:()=>h});var i=n(23482);const r=window.TradingView=window.TradingView||{};function o(){return i.isMac}function s(){return i.isWindows}function u(){return i.isLinux}function a(){return/TVDesktop/i.test(navigator.userAgent)}function c(){return r.isSymphony||!1}function l(){const e=navigator.userAgent.match(/TVDesktop\/([^\s]+)/);return e&&e[1]}function d(){const e=navigator.userAgent.match(/TradingView\/([^\s]+)/);return e&&e[1]}const f={Android:()=>i.isAndroid,BlackBerry:()=>i.isBlackBerry,iOS:()=>i.isIOS,Opera:()=>i.isOperaMini,isIPad:()=>i.isIPad,any:()=>i.isAnyMobile};function p(){const e=["^widgetembed/?$","^cmewidgetembed/?$","^([0-9a-zA-Z-]+)/widgetembed/?$","^([0-9a-zA-Z-]+)/widgetstatic/?$","^([0-9a-zA-Z-]+)?/?mediumwidgetembed/?$","^twitter-chart/?$","^embed/([0-9a-zA-Z]{8})/?$","^widgetpopup/?$","^extension/?$","^idea-popup/?$","^hotlistswidgetembed/?$","^([0-9a-zA-Z-]+)/hotlistswidgetembed/?$","^marketoverviewwidgetembed/?$","^([0-9a-zA-Z-]+)/marketoverviewwidgetembed/?$","^eventswidgetembed/?$","^tickerswidgetembed/?$","^forexcrossrateswidgetembed/?$","^forexheatmapwidgetembed/?$","^marketquoteswidgetembed/?$","^screenerwidget/?$","^cryptomktscreenerwidget/?$","^([0-9a-zA-Z-]+)/cryptomktscreenerwidget/?$","^([0-9a-zA-Z-]+)/marketquoteswidgetembed/?$","^technical-analysis-widget-embed/$","^singlequotewidgetembed/?$","^([0-9a-zA-Z-]+)/singlequotewidgetembed/?$","^embed-widget/([0-9a-zA-Z-]+)/(([0-9a-zA-Z-]+)/)?$"],t=window.location.pathname.replace(/^\//,"");let n;for(let i=e.length-1;i>=0;i--)if(n=new RegExp(e[i]),n.test(t))return!0;return!1}
function h(){return i.mobiletouch||i.touch||i.isAnyMobile}function w(e){return new URLSearchParams(window.location.search).get("page_type")===e}r.isMobile=f,r.onWidget=p;const b=i.isChrome,m=i.isFF,y=i.isEdge,v=i.isSafari;function g(){return"/pricing/"===window.location.pathname}function _(){return"/"===window.location.pathname}},444372:(e,t,n)=>{"use strict";n.d(t,{t:()=>i.t});n(466281);var i=n(195619)},764829:(e,t,n)=>{"use strict";var i;n.r(t),n.d(t,{disable:()=>d,enable:()=>l,enabled:()=>a,getAllFeatures:()=>f,setEnabled:()=>c});var r=n(111119);const o=new Map,s=new Map,u=new Set;function a(e){const t=o.get(e);if(void 0!==t)return t;const n=s.get(e);return!!n&&n.some(a)}function c(e,t){o.set(String(e),Boolean(t))}function l(e){c(e,!0)}function d(e){c(e,!1)}function f(){const e=Object.create(null);for(const t of u)e[t]=a(t);return e}!function(){for(const[e,t]of Object.entries(i||(i=n.t(r,2))))if(u.add(e),"subsets"in t)for(const n of t.subsets){u.add(n);let t=s.get(n);void 0===t&&(t=[],s.set(n,t)),t.push(e)}"object"==typeof __initialDisabledFeaturesets&&Array.isArray(__initialDisabledFeaturesets)&&__initialDisabledFeaturesets.forEach(d),"object"==typeof __initialEnabledFeaturesets&&Array.isArray(__initialEnabledFeaturesets)&&__initialEnabledFeaturesets.forEach(l)}()},124829:function(e,t,n){e=n.nmd(e);const{clone:i,merge:r,isFunction:o,deepEquals:s,isObject:u,isNumber:a}=n(440837);var c,l=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)};function d(e,t){e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}"undefined"!=typeof window?(c=window.TradingView=window.TradingView||{},window.isNumber=a,window.isFunction=o,window.inherit=d,window.isArray=l):c=this.TradingView=this.TradingView||{},c.isNaN=function(e){return!(e<=0||e>0)},c.isAbsent=function(e){return null==e},c.isExistent=function(e){return null!=e},Number.isNaN=Number.isNaN||function(e){return e!=e},c.isSameType=function(e,t){return Number.isNaN(e)||Number.isNaN(t)?Number.isNaN(e)===Number.isNaN(t):{}.toString.call(e)==={}.toString.call(t)},c.isInteger=function(e){return"number"==typeof e&&e%1==0},c.isString=function(e){return null!=e&&e.constructor===String},c.isInherited=function(e,t){if(null==e||null==e.prototype)throw new TypeError("isInherited: child should be a constructor function");if(null==t||null==t.prototype)throw new TypeError("isInherited: parent should be a constructor function");return e.prototype instanceof t||e.prototype===t.prototype},c.clone=i,c.deepEquals=s,c.merge=r,e&&e.exports&&(e.exports={inherit:d,clone:c.clone,merge:c.merge,isNumber:a,isInteger:c.isInteger,isString:c.isString,isObject:u,isHashObject:function(e){return u(e)&&-1!==e.constructor.toString().indexOf("function Object")},isPromise:function(e){return u(e)&&e.then},isNaN:c.isNaN,isAbsent:c.isAbsent,isExistent:c.isExistent,isSameType:c.isSameType,isArray:l,isFunction:o,parseBool:c.parseBool,deepEquals:s,notNull:function(e){return null!==e},notUndefined:function(e){return void 0!==e},
isEven:function(e){return e%2==0},declareClassAsPureInterface:function(e,t){for(var n in e.prototype)"function"==typeof e.prototype[n]&&e.prototype.hasOwnProperty(n)&&(e.prototype[n]=function(){throw new Error(t+"::"+n+" is an interface member declaration and must be overloaded in order to be called")})},requireFullInterfaceImplementation:function(e,t,n,i){for(var r in n.prototype)if("function"==typeof n.prototype[r]&&!e.prototype[r])throw new Error("Interface implementation assertion failed: "+t+" does not implement "+i+"::"+r+" function")}})}}]);
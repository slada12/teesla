(self.webpackChunktradingview=self.webpackChunktradingview||[]).push([[54824],{24654:e=>{"use strict";e.exports=function(e){for(var t=[],r=e.length,a=0;a<r;a++){var o=e.charCodeAt(a);if(o>=55296&&o<=56319&&r>a+1){var _=e.charCodeAt(a+1);_>=56320&&_<=57343&&(o=1024*(o-55296)+_-56320+65536,a+=1)}o<128?t.push(o):o<2048?(t.push(o>>6|192),t.push(63&o|128)):o<55296||o>=57344&&o<65536?(t.push(o>>12|224),t.push(o>>6&63|128),t.push(63&o|128)):o>=65536&&o<=1114111?(t.push(o>>18|240),t.push(o>>12&63|128),t.push(o>>6&63|128),t.push(63&o|128)):t.push(239,191,189)}return new Uint8Array(t).buffer}},9995:(e,t,r)=>{var a=r(939340);e.exports=function(e){return e=a(e^=e>>>16,2246822507),e=a(e^=e>>>13,3266489909),(e^=e>>>16)>>>0}},939340:e=>{"use strict";e.exports=Math.imul||function(e,t){var r=65535&e,a=65535&t;return r*a+((e>>>16&65535)*a+r*(t>>>16&65535)<<16>>>0)|0}},855385:(e,t,r)=>{var a=r(939340),o=r(9995),_=r(24654),s=new Uint32Array([3432918353,461845907]);function n(e,t){return e<<t|e>>>32-t}e.exports=function(e,t){if(t=t?0|t:0,"string"==typeof e&&(e=_(e)),!(e instanceof ArrayBuffer))throw new TypeError("Expected key to be ArrayBuffer or string");var r=new Uint32Array([t]);return function(e,t){for(var r=e.byteLength/4|0,o=new Uint32Array(e,0,r),_=0;_<r;_++)o[_]=a(o[_],s[0]),o[_]=n(o[_],15),o[_]=a(o[_],s[1]),t[0]=t[0]^o[_],t[0]=n(t[0],13),t[0]=a(t[0],5)+3864292196}(e,r),function(e,t){var r=e.byteLength/4|0,o=e.byteLength%4,_=0,i=new Uint8Array(e,4*r,o);switch(o){case 3:_^=i[2]<<16;case 2:_^=i[1]<<8;case 1:_^=i[0],_=n(_=a(_,s[0]),15),_=a(_,s[1]),t[0]=t[0]^_}}(e,r),function(e,t){t[0]=t[0]^e.byteLength,t[0]=o(t[0])}(e,r),r.buffer}},613106:(e,t,r)=>{"use strict";r.d(t,{default:()=>l});var a=r(824824),o=r(770597),_=r(903262),s=r(520334),n=r(537080);function i(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var a=e[t];this.set(a[0],a[1])}}i.prototype.clear=a.default,i.prototype.delete=o.default,i.prototype.get=_.default,i.prototype.has=s.default,i.prototype.set=n.default;const l=i},557699:(e,t,r)=>{"use strict";r.d(t,{default:()=>l});var a=r(898968),o=r(869735),_=r(360648),s=r(454600),n=r(924977);function i(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var a=e[t];this.set(a[0],a[1])}}i.prototype.clear=a.default,i.prototype.delete=o.default,i.prototype.get=_.default,i.prototype.has=s.default,i.prototype.set=n.default;const l=i},19385:(e,t,r)=>{"use strict";r.d(t,{default:()=>_});var a=r(352918),o=r(799615);const _=(0,a.default)(o.default,"Map")},441083:(e,t,r)=>{"use strict";r.d(t,{default:()=>l});var a=r(712380),o=r(967067),_=r(609240),s=r(127323),n=r(853843);function i(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var a=e[t];this.set(a[0],a[1])}}i.prototype.clear=a.default,i.prototype.delete=o.default,i.prototype.get=_.default,i.prototype.has=s.default,i.prototype.set=n.default;const l=i},336169:(e,t,r)=>{"use strict";r.d(t,{default:()=>_});var a=r(352918),o=r(799615);const _=(0,a.default)(o.default,"Set")},87593:(e,t,r)=>{"use strict";r.d(t,{default:()=>d});var a=r(557699);const o=function(){
this.__data__=new a.default,this.size=0};const _=function(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r};const s=function(e){return this.__data__.get(e)};const n=function(e){return this.__data__.has(e)};var i=r(19385),l=r(441083);const u=function(e,t){var r=this.__data__;if(r instanceof a.default){var o=r.__data__;if(!i.default||o.length<199)return o.push([e,t]),this.size=++r.size,this;r=this.__data__=new l.default(o)}return r.set(e,t),this.size=r.size,this};function c(e){var t=this.__data__=new a.default(e);this.size=t.size}c.prototype.clear=o,c.prototype.delete=_,c.prototype.get=s,c.prototype.has=n,c.prototype.set=u;const d=c},366711:(e,t,r)=>{"use strict";r.d(t,{default:()=>a});const a=r(799615).default.Symbol},216299:(e,t,r)=>{"use strict";r.d(t,{default:()=>a});const a=r(799615).default.Uint8Array},860545:(e,t,r)=>{"use strict";r.d(t,{default:()=>u});const a=function(e,t){for(var r=-1,a=Array(e);++r<e;)a[r]=t(r);return a};var o=r(154404),_=r(456052),s=r(232437),n=r(399313),i=r(109125),l=Object.prototype.hasOwnProperty;const u=function(e,t){var r=(0,_.default)(e),u=!r&&(0,o.default)(e),c=!r&&!u&&(0,s.default)(e),d=!r&&!u&&!c&&(0,i.default)(e),f=r||u||c||d,h=f?a(e.length,String):[],p=h.length;for(var b in e)!t&&!l.call(e,b)||f&&("length"==b||c&&("offset"==b||"parent"==b)||d&&("buffer"==b||"byteLength"==b||"byteOffset"==b)||(0,n.default)(b,p))||h.push(b);return h}},218573:(e,t,r)=>{"use strict";r.d(t,{default:()=>a});const a=function(e,t){for(var r=-1,a=t.length,o=e.length;++r<a;)e[o+r]=t[r];return e}},365363:(e,t,r)=>{"use strict";r.d(t,{default:()=>o});var a=r(554523);const o=function(e,t){for(var r=e.length;r--;)if((0,a.default)(e[r][0],t))return r;return-1}},296909:(e,t,r)=>{"use strict";r.d(t,{default:()=>_});var a=r(218573),o=r(456052);const _=function(e,t,r){var _=t(e);return(0,o.default)(e)?_:(0,a.default)(_,r(e))}},194138:(e,t,r)=>{"use strict";r.d(t,{default:()=>n});var a=r(366711),o=r(633161),_=r(495863),s=a.default?a.default.toStringTag:void 0;const n=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":s&&s in Object(e)?(0,o.default)(e):(0,_.default)(e)}},263062:(e,t,r)=>{"use strict";r.d(t,{default:()=>f});var a=r(688987),o=r(832632),_=r(182433),s=r(265114),n=/^\[object .+?Constructor\]$/,i=Function.prototype,l=Object.prototype,u=i.toString,c=l.hasOwnProperty,d=RegExp("^"+u.call(c).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");const f=function(e){return!(!(0,_.default)(e)||(0,o.default)(e))&&((0,a.default)(e)?d:n).test((0,s.default)(e))}},589815:(e,t,r)=>{"use strict";r.d(t,{default:()=>s});var a=r(5196);const o=(0,r(245635).default)(Object.keys,Object);var _=Object.prototype.hasOwnProperty;const s=function(e){if(!(0,a.default)(e))return o(e);var t=[];for(var r in Object(e))_.call(e,r)&&"constructor"!=r&&t.push(r);return t}},805467:(e,t,r)=>{"use strict";r.d(t,{default:()=>a});const a=function(e){return function(t){return e(t)}}},620712:(e,t,r)=>{"use strict";r.d(t,{default:()=>a})
;const a=r(799615).default["__core-js_shared__"]},97889:(e,t,r)=>{"use strict";r.d(t,{default:()=>a});const a="object"==typeof global&&global&&global.Object===Object&&global},438366:(e,t,r)=>{"use strict";r.d(t,{default:()=>s});var a=r(296909),o=r(21578),_=r(377251);const s=function(e){return(0,a.default)(e,_.default,o.default)}},510791:(e,t,r)=>{"use strict";r.d(t,{default:()=>o});var a=r(46861);const o=function(e,t){var r=e.__data__;return(0,a.default)(t)?r["string"==typeof t?"string":"hash"]:r.map}},352918:(e,t,r)=>{"use strict";r.d(t,{default:()=>_});var a=r(263062),o=r(192716);const _=function(e,t){var r=(0,o.default)(e,t);return(0,a.default)(r)?r:void 0}},633161:(e,t,r)=>{"use strict";r.d(t,{default:()=>i});var a=r(366711),o=Object.prototype,_=o.hasOwnProperty,s=o.toString,n=a.default?a.default.toStringTag:void 0;const i=function(e){var t=_.call(e,n),r=e[n];try{e[n]=void 0;var a=!0}catch(e){}var o=s.call(e);return a&&(t?e[n]=r:delete e[n]),o}},21578:(e,t,r)=>{"use strict";r.d(t,{default:()=>n});const a=function(e,t){for(var r=-1,a=null==e?0:e.length,o=0,_=[];++r<a;){var s=e[r];t(s,r,e)&&(_[o++]=s)}return _};var o=r(469043),_=Object.prototype.propertyIsEnumerable,s=Object.getOwnPropertySymbols;const n=s?function(e){return null==e?[]:(e=Object(e),a(s(e),(function(t){return _.call(e,t)})))}:o.default},802226:(e,t,r)=>{"use strict";r.d(t,{default:()=>x});var a=r(352918),o=r(799615);const _=(0,a.default)(o.default,"DataView");var s=r(19385);const n=(0,a.default)(o.default,"Promise");var i=r(336169);const l=(0,a.default)(o.default,"WeakMap");var u=r(194138),c=r(265114),d="[object Map]",f="[object Promise]",h="[object Set]",p="[object WeakMap]",b="[object DataView]",m=(0,c.default)(_),y=(0,c.default)(s.default),g=(0,c.default)(n),v=(0,c.default)(i.default),w=(0,c.default)(l),j=u.default;(_&&j(new _(new ArrayBuffer(1)))!=b||s.default&&j(new s.default)!=d||n&&j(n.resolve())!=f||i.default&&j(new i.default)!=h||l&&j(new l)!=p)&&(j=function(e){var t=(0,u.default)(e),r="[object Object]"==t?e.constructor:void 0,a=r?(0,c.default)(r):"";if(a)switch(a){case m:return b;case y:return d;case g:return f;case v:return h;case w:return p}return t});const x=j},192716:(e,t,r)=>{"use strict";r.d(t,{default:()=>a});const a=function(e,t){return null==e?void 0:e[t]}},824824:(e,t,r)=>{"use strict";r.d(t,{default:()=>o});var a=r(219620);const o=function(){this.__data__=a.default?(0,a.default)(null):{},this.size=0}},770597:(e,t,r)=>{"use strict";r.d(t,{default:()=>a});const a=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}},903262:(e,t,r)=>{"use strict";r.d(t,{default:()=>_});var a=r(219620),o=Object.prototype.hasOwnProperty;const _=function(e){var t=this.__data__;if(a.default){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return o.call(t,e)?t[e]:void 0}},520334:(e,t,r)=>{"use strict";r.d(t,{default:()=>_});var a=r(219620),o=Object.prototype.hasOwnProperty;const _=function(e){var t=this.__data__;return a.default?void 0!==t[e]:o.call(t,e)}},537080:(e,t,r)=>{"use strict";r.d(t,{default:()=>o})
;var a=r(219620);const o=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=a.default&&void 0===t?"__lodash_hash_undefined__":t,this}},399313:(e,t,r)=>{"use strict";r.d(t,{default:()=>o});var a=/^(?:0|[1-9]\d*)$/;const o=function(e,t){var r=typeof e;return!!(t=t??9007199254740991)&&("number"==r||"symbol"!=r&&a.test(e))&&e>-1&&e%1==0&&e<t}},46861:(e,t,r)=>{"use strict";r.d(t,{default:()=>a});const a=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e}},832632:(e,t,r)=>{"use strict";r.d(t,{default:()=>s});var a,o=r(620712),_=(a=/[^.]+$/.exec(o.default&&o.default.keys&&o.default.keys.IE_PROTO||""))?"Symbol(src)_1."+a:"";const s=function(e){return!!_&&_ in e}},5196:(e,t,r)=>{"use strict";r.d(t,{default:()=>o});var a=Object.prototype;const o=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||a)}},898968:(e,t,r)=>{"use strict";r.d(t,{default:()=>a});const a=function(){this.__data__=[],this.size=0}},869735:(e,t,r)=>{"use strict";r.d(t,{default:()=>_});var a=r(365363),o=Array.prototype.splice;const _=function(e){var t=this.__data__,r=(0,a.default)(t,e);return!(r<0)&&(r==t.length-1?t.pop():o.call(t,r,1),--this.size,!0)}},360648:(e,t,r)=>{"use strict";r.d(t,{default:()=>o});var a=r(365363);const o=function(e){var t=this.__data__,r=(0,a.default)(t,e);return r<0?void 0:t[r][1]}},454600:(e,t,r)=>{"use strict";r.d(t,{default:()=>o});var a=r(365363);const o=function(e){return(0,a.default)(this.__data__,e)>-1}},924977:(e,t,r)=>{"use strict";r.d(t,{default:()=>o});var a=r(365363);const o=function(e,t){var r=this.__data__,o=(0,a.default)(r,e);return o<0?(++this.size,r.push([e,t])):r[o][1]=t,this}},712380:(e,t,r)=>{"use strict";r.d(t,{default:()=>s});var a=r(613106),o=r(557699),_=r(19385);const s=function(){this.size=0,this.__data__={hash:new a.default,map:new(_.default||o.default),string:new a.default}}},967067:(e,t,r)=>{"use strict";r.d(t,{default:()=>o});var a=r(510791);const o=function(e){var t=(0,a.default)(this,e).delete(e);return this.size-=t?1:0,t}},609240:(e,t,r)=>{"use strict";r.d(t,{default:()=>o});var a=r(510791);const o=function(e){return(0,a.default)(this,e).get(e)}},127323:(e,t,r)=>{"use strict";r.d(t,{default:()=>o});var a=r(510791);const o=function(e){return(0,a.default)(this,e).has(e)}},853843:(e,t,r)=>{"use strict";r.d(t,{default:()=>o});var a=r(510791);const o=function(e,t){var r=(0,a.default)(this,e),o=r.size;return r.set(e,t),this.size+=r.size==o?0:1,this}},219620:(e,t,r)=>{"use strict";r.d(t,{default:()=>a});const a=(0,r(352918).default)(Object,"create")},292350:(e,t,r)=>{"use strict";r.d(t,{default:()=>n});var a=r(97889),o="object"==typeof exports&&exports&&!exports.nodeType&&exports,_=o&&"object"==typeof module&&module&&!module.nodeType&&module,s=_&&_.exports===o&&a.default.process;const n=function(){try{var e=_&&_.require&&_.require("util").types;return e||s&&s.binding&&s.binding("util")}catch(e){}}()},495863:(e,t,r)=>{"use strict";r.d(t,{default:()=>o});var a=Object.prototype.toString
;const o=function(e){return a.call(e)}},245635:(e,t,r)=>{"use strict";r.d(t,{default:()=>a});const a=function(e,t){return function(r){return e(t(r))}}},799615:(e,t,r)=>{"use strict";r.d(t,{default:()=>_});var a=r(97889),o="object"==typeof self&&self&&self.Object===Object&&self;const _=a.default||o||Function("return this")()},265114:(e,t,r)=>{"use strict";r.d(t,{default:()=>o});var a=Function.prototype.toString;const o=function(e){if(null!=e){try{return a.call(e)}catch(e){}try{return e+""}catch(e){}}return""}},290484:(e,t,r)=>{"use strict";r.d(t,{default:()=>l});var a=r(182433),o=r(799615);const _=function(){return o.default.Date.now()};var s=r(678677),n=Math.max,i=Math.min;const l=function(e,t,r){var o,l,u,c,d,f,h=0,p=!1,b=!1,m=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var r=o,a=l;return o=l=void 0,h=t,c=e.apply(a,r)}function g(e){var r=e-f;return void 0===f||r>=t||r<0||b&&e-h>=u}function v(){var e=_();if(g(e))return w(e);d=setTimeout(v,function(e){var r=t-(e-f);return b?i(r,u-(e-h)):r}(e))}function w(e){return d=void 0,m&&o?y(e):(o=l=void 0,c)}function j(){var e=_(),r=g(e);if(o=arguments,l=this,f=e,r){if(void 0===d)return function(e){return h=e,d=setTimeout(v,t),p?y(e):c}(f);if(b)return clearTimeout(d),d=setTimeout(v,t),y(f)}return void 0===d&&(d=setTimeout(v,t)),c}return t=(0,s.default)(t)||0,(0,a.default)(r)&&(p=!!r.leading,u=(b="maxWait"in r)?n((0,s.default)(r.maxWait)||0,t):u,m="trailing"in r?!!r.trailing:m),j.cancel=function(){void 0!==d&&clearTimeout(d),h=0,o=f=l=d=void 0},j.flush=function(){return void 0===d?c:w(_())},j}},554523:(e,t,r)=>{"use strict";r.d(t,{default:()=>a});const a=function(e,t){return e===t||e!=e&&t!=t}},154404:(e,t,r)=>{"use strict";r.d(t,{default:()=>l});var a=r(194138),o=r(513795);const _=function(e){return(0,o.default)(e)&&"[object Arguments]"==(0,a.default)(e)};var s=Object.prototype,n=s.hasOwnProperty,i=s.propertyIsEnumerable;const l=_(function(){return arguments}())?_:function(e){return(0,o.default)(e)&&n.call(e,"callee")&&!i.call(e,"callee")}},456052:(e,t,r)=>{"use strict";r.d(t,{default:()=>a});const a=Array.isArray},649634:(e,t,r)=>{"use strict";r.d(t,{default:()=>_});var a=r(688987),o=r(965743);const _=function(e){return null!=e&&(0,o.default)(e.length)&&!(0,a.default)(e)}},232437:(e,t,r)=>{"use strict";r.d(t,{default:()=>i});var a=r(799615);const o=function(){return!1};var _="object"==typeof exports&&exports&&!exports.nodeType&&exports,s=_&&"object"==typeof module&&module&&!module.nodeType&&module,n=s&&s.exports===_?a.default.Buffer:void 0;const i=(n?n.isBuffer:void 0)||o},688987:(e,t,r)=>{"use strict";r.d(t,{default:()=>_});var a=r(194138),o=r(182433);const _=function(e){if(!(0,o.default)(e))return!1;var t=(0,a.default)(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t}},965743:(e,t,r)=>{"use strict";r.d(t,{default:()=>a});const a=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991}},182433:(e,t,r)=>{"use strict";r.d(t,{default:()=>a})
;const a=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},513795:(e,t,r)=>{"use strict";r.d(t,{default:()=>a});const a=function(e){return null!=e&&"object"==typeof e}},898111:(e,t,r)=>{"use strict";r.d(t,{default:()=>_});var a=r(194138),o=r(513795);const _=function(e){return"symbol"==typeof e||(0,o.default)(e)&&"[object Symbol]"==(0,a.default)(e)}},109125:(e,t,r)=>{"use strict";r.d(t,{default:()=>c});var a=r(194138),o=r(965743),_=r(513795),s={};s["[object Float32Array]"]=s["[object Float64Array]"]=s["[object Int8Array]"]=s["[object Int16Array]"]=s["[object Int32Array]"]=s["[object Uint8Array]"]=s["[object Uint8ClampedArray]"]=s["[object Uint16Array]"]=s["[object Uint32Array]"]=!0,s["[object Arguments]"]=s["[object Array]"]=s["[object ArrayBuffer]"]=s["[object Boolean]"]=s["[object DataView]"]=s["[object Date]"]=s["[object Error]"]=s["[object Function]"]=s["[object Map]"]=s["[object Number]"]=s["[object Object]"]=s["[object RegExp]"]=s["[object Set]"]=s["[object String]"]=s["[object WeakMap]"]=!1;const n=function(e){return(0,_.default)(e)&&(0,o.default)(e.length)&&!!s[(0,a.default)(e)]};var i=r(805467),l=r(292350),u=l.default&&l.default.isTypedArray;const c=u?(0,i.default)(u):n},377251:(e,t,r)=>{"use strict";r.d(t,{default:()=>s});var a=r(860545),o=r(589815),_=r(649634);const s=function(e){return(0,_.default)(e)?(0,a.default)(e):(0,o.default)(e)}},259332:(e,t,r)=>{"use strict";r.d(t,{default:()=>_});var a=r(441083);function o(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function(){var a=arguments,o=t?t.apply(this,a):a[0],_=r.cache;if(_.has(o))return _.get(o);var s=e.apply(this,a);return r.cache=_.set(o,s)||_,s};return r.cache=new(o.Cache||a.default),r}o.Cache=a.default;const _=o},469043:(e,t,r)=>{"use strict";r.d(t,{default:()=>a});const a=function(){return[]}},920057:(e,t,r)=>{"use strict";r.d(t,{default:()=>_});var a=r(290484),o=r(182433);const _=function(e,t,r){var _=!0,s=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return(0,o.default)(r)&&(_="leading"in r?!!r.leading:_,s="trailing"in r?!!r.trailing:s),(0,a.default)(e,t,{leading:_,maxWait:t,trailing:s})}},678677:(e,t,r)=>{"use strict";r.d(t,{default:()=>f});var a=/\s/;const o=function(e){for(var t=e.length;t--&&a.test(e.charAt(t)););return t};var _=/^\s+/;const s=function(e){return e?e.slice(0,o(e)+1).replace(_,""):e};var n=r(182433),i=r(898111),l=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,c=/^0o[0-7]+$/i,d=parseInt;const f=function(e){if("number"==typeof e)return e;if((0,i.default)(e))return NaN;if((0,n.default)(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=(0,n.default)(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=s(e);var r=u.test(e);return r||c.test(e)?d(e.slice(2),r?2:8):l.test(e)?NaN:+e}},111119:e=>{"use strict"
;e.exports=JSON.parse('{"14851":{},"custom_items_in_context_menu":{},"countdown":{},"symbol_search_parser_mixin":{},"pay_attention_to_ticker_not_symbol":{},"graying_disabled_tools_enabled":{},"update_study_formatter_on_symbol_resolve":{},"constraint_dialogs_movement":{},"phone_verification":{},"show_trading_notifications_history":{},"show_interval_dialog_on_key_press":{},"header_interval_dialog_button":{"subsets":["show_interval_dialog_on_key_press"]},"header_fullscreen_button":{},"header_symbol_search":{},"symbol_search_hot_key":{},"header_resolutions":{"subsets":["header_interval_dialog_button"]},"header_chart_type":{},"header_settings":{},"header_indicators":{},"header_compare":{},"header_undo_redo":{},"header_quick_search":{},"header_screenshot":{},"header_saveload":{},"study_on_study":{},"scales_date_format":{},"scales_time_hours_format":{},"header_widget":{"subsets":["header_widget_dom_node","header_symbol_search","header_resolutions","header_chart_type","header_settings","header_indicators","header_compare","header_undo_redo","header_quick_search","header_fullscreen_button","compare_symbol","header_screenshot"]},"legend_widget":{},"compare_symbol":{"subsets":["header_compare"]},"property_pages":{"subsets":["show_chart_property_page","chart_property_page"]},"show_chart_property_page":{},"chart_property_page":{"subsets":["chart_property_page_scales","chart_property_page_trading","chart_property_page_right_margin_editor"]},"left_toolbar":{},"right_toolbar":{},"hide_left_toolbar_by_default":{},"control_bar":{},"widget_logo":{},"timeframes_toolbar":{},"edit_buttons_in_legend":{"subsets":["show_hide_button_in_legend","format_button_in_legend","study_buttons_in_legend","delete_button_in_legend","legend_inplace_edit"]},"show_hide_button_in_legend":{},"object_tree_legend_mode":{},"format_button_in_legend":{},"study_buttons_in_legend":{},"delete_button_in_legend":{},"legend_inplace_edit":{},"broker_button":{},"buy_sell_buttons":{"subsets":["broker_button"]},"pane_context_menu":{},"scales_context_menu":{},"legend_context_menu":{},"context_menus":{"subsets":["pane_context_menu","scales_context_menu","legend_context_menu","objects_tree_context_menu"]},"items_favoriting":{},"save_chart_properties_to_local_storage":{},"use_localstorage_for_settings":{"subsets":["items_favoriting","save_chart_properties_to_local_storage"]},"handle_scale":{"subsets":["mouse_wheel_scale","pinch_scale","axis_pressed_mouse_move_scale"]},"handle_scroll":{"subsets":["mouse_wheel_scroll","pressed_mouse_move_scroll","horz_touch_drag_scroll","vert_touch_drag_scroll"]},"plain_studymarket":{},"disable_resolution_rebuild":{},"border_around_the_chart":{},"charting_library_debug_mode":{},"saveload_requires_authentication":{},"saveload_storage_customization":{},"volume_force_overlay":{},"create_volume_indicator_by_default":{},"create_volume_indicator_by_default_once":{},"saved_charts_count_restriction":{},"lean_chart_load":{},"stop_study_on_restart":{},"star_some_intervals_by_default":{},"move_logo_to_main_pane":{},"show_animated_logo":{},"link_to_tradingview":{},"logo_without_link":{},"logo_always_maximized":{},"right_bar_stays_on_scroll":{},"chart_content_overrides_by_defaults":{},"snapshot_trading_drawings":{},"allow_supported_resolutions_set_only":{},"widgetbar_tabs":{"subsets":["right_toolbar"]},"show_object_tree":{"subsets":["right_toolbar"]},"dom_widget":{"subsets":["right_toolbar"]},"collapsible_header":{},"study_templates":{},"side_toolbar_in_fullscreen_mode":{},"header_in_fullscreen_mode":{},"remove_library_container_border":{},"whotrades_auth_only":{},"support_multicharts":{},"display_market_status":{},"display_data_mode":{},"datasource_copypaste":{},"drawing_templates":{"subsets":["linetoolpropertieswidget_template_button"]},"expand_symbolsearch_items":{},"symbol_search_three_columns_exchanges":{},"symbol_search_flags":{},"symbol_search_limited_exchanges":{},"bugreport_button":{"subsets":["right_toolbar"]},"footer_publish_idea_button":{},"text_notes":{},"show_source_code":{},"symbol_info":{},"no_bars_status":{},"clear_bars_on_series_error":{},"hide_loading_screen_on_series_error":{},"seconds_resolution":{},"dont_show_boolean_study_arguments":{},"hide_last_na_study_output":{},"price_scale_always_last_bar_value":{},"study_dialog_fundamentals_economy_addons":{},"uppercase_instrument_names":{},"trading_notifications":{},"chart_crosshair_menu":{},"japanese_chart_styles":{},"hide_series_legend_item":{},"hide_study_overlay_legend_item":{},"hide_study_compare_legend_item":{},"linetoolpropertieswidget_template_button":{},"use_overrides_for_overlay":{},"timezone_menu":{},"main_series_scale_menu":{},"show_login_dialog":{},"remove_img_from_rss":{},"bars_marks":{},"chart_scroll":{},"chart_zoom":{},"source_selection_markers":{},"low_density_bars":{},"end_of_period_timescale_marks":{},"open_account_manager":{},"show_order_panel_on_start":{},"order_panel":{"subsets":["order_panel_close_button","order_panel_undock","right_toolbar","order_info"]},"multiple_watchlists":{},"watchlist_import_export":{},"study_overlay_compare_legend_option":{},"mobile_app_action_open_details_webview":{},"custom_resolutions":{},"referral_program_for_widget_owners":{},"mobile_trading":{},"real_brokers":{},"no_min_chart_width":{},"lock_visible_time_range_on_resize":{},"pricescale_currency":{},"cropped_tick_marks":{},"trading_account_manager":{},"disable_sameinterval_aligning":{},"display_legend_on_all_charts":{},"chart_style_hilo":{},"chart_style_hilo_last_price":{},"pricescale_unit":{},"show_spread_operators":{},"hide_exponentiation_spread_operator":{},"hide_reciprocal_spread_operator":{},"compare_symbol_search_spread_operators":{},"studies_symbol_search_spread_operators":{},"hide_resolution_in_legend":{},"hide_unresolved_symbols_in_legend":{},"fix_left_edge":{},"study_symbol_ticker_description":{},"two_character_bar_marks_labels":{},"tick_resolution":{},"secondary_series_extend_time_scale":{},"hide_volume_ma":{},"small_no_display":{},"charting_library_single_symbol_request":{},"use_ticker_on_symbol_info_update":{},"show_zoom_and_move_buttons_on_touch":{},"hide_main_series_symbol_from_indicator_legend":{},"chart_hide_close_position_button":{},"chart_hide_close_order_button":{},"hide_price_scale_global_last_bar_value":{"subsets":["use_last_visible_bar_value_in_legend"]},"keep_object_tree_widget_in_right_toolbar":{},"show_average_close_price_line_and_label":{},"hide_image_invalid_symbol":{},"hide_object_tree_and_price_scale_exchange_label":{},"confirm_overwrite_if_chart_layout_with_name_exists":{},"determine_first_data_request_size_using_visible_range":{},"use_na_string_for_not_available_values":{},"show_last_price_and_change_only_in_series_legend":{},"legend_last_day_change":{},"iframe_loading_compatibility_mode":{},"show_percent_option_for_right_margin":{},"watchlist_context_menu":{},"accessible_keyboard_shortcuts":{},"advanced_emoji_in_titles":{},"app_phone":{},"app_tablet":{},"mobile_app_hide_replay_toolbar":{},"symbol_search_option_chain_selector":{},"tv_production":{"subsets":["advanced_emoji_in_titles","auto_enable_symbol_labels","symbol_search_parser_mixin","header_fullscreen_button","header_widget","dont_show_boolean_study_arguments","left_toolbar","right_toolbar","buy_sell_buttons","control_bar","symbol_search_hot_key","context_menus","edit_buttons_in_legend","object_tree_legend_mode","uppercase_instrument_names","use_localstorage_for_settings","saveload_requires_authentication","volume_force_overlay","saved_charts_count_restriction","create_volume_indicator_by_default","create_volume_indicator_by_default_once","charts_auto_save","save_old_chart_before_save_as","chart_content_overrides_by_defaults","alerts","header_saveload","header_layouttoggle","datasource_copypaste","show_saved_watchlists","watchlists_from_to_file","add_to_watchlist","property_pages","support_multicharts","display_market_status","display_data_mode","show_chart_warn_message","support_manage_drawings","widgetbar_tabs","study_templates","collapsible_header","drawing_templates","footer_publish_idea_button","text_notes","show_source_code","symbol_info","linetoolpropertieswidget_template_button","trading_notifications","symbol_search_three_columns_exchanges","symbol_search_flags","symbol_search_limited_exchanges","phone_verification","custom_resolutions","compare_symbol","study_on_study","japanese_chart_styles","show_login_dialog","dom_widget","bars_marks","chart_scroll","chart_zoom","show_trading_notifications_history","source_selection_markers","study_dialog_fundamentals_economy_addons","multiple_watchlists","marked_symbols","order_panel","pricescale_currency","show_animated_logo","pricescale_currency","show_object_tree","watchlist_import_export","scales_date_format","scales_time_hours_format","popup_hints","show_right_widgets_panel_by_default","compare_recent_symbols_enabled","adaptive_trading_sources","chart_style_hilo_last_price","symbol_search_option_chain_selector"]},"widget":{"subsets":["auto_enable_symbol_labels","symbol_search_parser_mixin","uppercase_instrument_names","left_toolbar","right_toolbar","control_bar","symbol_search_hot_key","context_menus","edit_buttons_in_legend","object_tree_legend_mode","use_localstorage_for_settings","saveload_requires_authentication","volume_force_overlay","create_volume_indicator_by_default","create_volume_indicator_by_default_once","dont_show_boolean_study_arguments","header_widget_dom_node","header_symbol_search","header_resolutions","header_chart_type","header_compare","header_indicators","star_some_intervals_by_default","display_market_status","display_data_mode","show_chart_warn_message","symbol_info","linetoolpropertieswidget_template_button","symbol_search_three_columns_exchanges","symbol_search_flags","symbol_search_limited_exchanges","widgetbar_tabs","compare_symbol","show_login_dialog","plain_studymarket","japanese_chart_styles","bars_marks","chart_scroll","chart_zoom","source_selection_markers","property_pages","show_right_widgets_panel_by_default","chart_style_hilo_last_price"]},"bovespa_widget":{"subsets":["widget","header_settings","linetoolpropertieswidget_template_button","compare_recent_symbols_enabled"]},"charting_library_base":{"subsets":["14851","allow_supported_resolutions_set_only","auto_enable_symbol_labels","border_around_the_chart","collapsible_header","constraint_dialogs_movement","context_menus","control_bar","create_volume_indicator_by_default","custom_items_in_context_menu","datasource_copypaste","uppercase_instrument_names","display_market_status","edit_buttons_in_legend","object_tree_legend_mode","graying_disabled_tools_enabled","header_widget","legend_widget","header_saveload","dont_show_boolean_study_arguments","lean_chart_load","left_toolbar","right_toolbar","link_to_tradingview","pay_attention_to_ticker_not_symbol","plain_studymarket","refresh_saved_charts_list_on_dialog_show","right_bar_stays_on_scroll","saveload_storage_customization","stop_study_on_restart","timeframes_toolbar","symbol_search_hot_key","update_study_formatter_on_symbol_resolve","update_timeframes_set_on_symbol_resolve","use_localstorage_for_settings","volume_force_overlay","widget_logo","countdown","use_overrides_for_overlay","trading_notifications","compare_symbol","symbol_info","timezone_menu","main_series_scale_menu","create_volume_indicator_by_default_once","bars_marks","chart_scroll","chart_zoom","source_selection_markers","property_pages","go_to_date","adaptive_logo","show_animated_logo","handle_scale","handle_scroll","shift_visible_range_on_new_bar","chart_content_overrides_by_defaults","cropped_tick_marks","scales_date_format","scales_time_hours_format","popup_hints","save_shortcut","show_right_widgets_panel_by_default","show_object_tree","insert_indicator_dialog_shortcut","compare_recent_symbols_enabled","hide_main_series_symbol_from_indicator_legend","chart_style_hilo","request_only_visible_range_on_reset","clear_price_scale_on_error_or_empty_bars","show_symbol_logo_in_legend","show_symbol_logo_for_compare_studies","library_custom_color_themes"]},"charting_library":{"subsets":["charting_library_base"]},"static_charts_service":{"subsets":["charting_library","disable_resolution_rebuild"]},"trading_terminal":{"subsets":["charting_library_base","support_multicharts","header_layouttoggle","japanese_chart_styles","chart_property_page_trading","add_to_watchlist","open_account_manager","show_dom_first_time","order_panel","buy_sell_buttons","multiple_watchlists","show_trading_notifications_history","always_pass_called_order_to_modify","show_object_tree","watchlist_import_export","drawing_templates","trading_account_manager","chart_crosshair_menu","compare_recent_symbols_enabled","adaptive_trading_sources","watchlist_context_menu","show_symbol_logo_in_account_manager","watchlist_sections","prefer_quote_short_name","enable_dom_data_for_untradable_symbols","prefer_symbol_name_over_fullname"]}}')
}}]);
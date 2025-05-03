var vS=Object.defineProperty;var yS=(o,t,i)=>t in o?vS(o,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):o[t]=i;var ua=(o,t,i)=>yS(o,typeof t!="symbol"?t+"":t,i);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var Ec=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Wv(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var ch={exports:{}},el={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var __;function SS(){if(__)return el;__=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(r,l,c){var d=null;if(c!==void 0&&(d=""+c),l.key!==void 0&&(d=""+l.key),"key"in l){c={};for(var p in l)p!=="key"&&(c[p]=l[p])}else c=l;return l=c.ref,{$$typeof:o,type:r,key:d,ref:l!==void 0?l:null,props:c}}return el.Fragment=t,el.jsx=i,el.jsxs=i,el}var v_;function xS(){return v_||(v_=1,ch.exports=SS()),ch.exports}var Zr=xS(),uh={exports:{}},nl={},fh={exports:{}},hh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y_;function ES(){return y_||(y_=1,function(o){function t(V,ot){var $=V.length;V.push(ot);t:for(;0<$;){var Lt=$-1>>>1,F=V[Lt];if(0<l(F,ot))V[Lt]=ot,V[$]=F,$=Lt;else break t}}function i(V){return V.length===0?null:V[0]}function r(V){if(V.length===0)return null;var ot=V[0],$=V.pop();if($!==ot){V[0]=$;t:for(var Lt=0,F=V.length,rt=F>>>1;Lt<rt;){var Tt=2*(Lt+1)-1,Dt=V[Tt],at=Tt+1,Mt=V[at];if(0>l(Dt,$))at<F&&0>l(Mt,Dt)?(V[Lt]=Mt,V[at]=$,Lt=at):(V[Lt]=Dt,V[Tt]=$,Lt=Tt);else if(at<F&&0>l(Mt,$))V[Lt]=Mt,V[at]=$,Lt=at;else break t}}return ot}function l(V,ot){var $=V.sortIndex-ot.sortIndex;return $!==0?$:V.id-ot.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;o.unstable_now=function(){return c.now()}}else{var d=Date,p=d.now();o.unstable_now=function(){return d.now()-p}}var g=[],m=[],v=1,y=null,x=3,M=!1,A=!1,C=!1,E=!1,S=typeof setTimeout=="function"?setTimeout:null,G=typeof clearTimeout=="function"?clearTimeout:null,H=typeof setImmediate<"u"?setImmediate:null;function O(V){for(var ot=i(m);ot!==null;){if(ot.callback===null)r(m);else if(ot.startTime<=V)r(m),ot.sortIndex=ot.expirationTime,t(g,ot);else break;ot=i(m)}}function j(V){if(C=!1,O(V),!A)if(i(g)!==null)A=!0,I||(I=!0,gt());else{var ot=i(m);ot!==null&&xt(j,ot.startTime-V)}}var I=!1,k=-1,K=5,P=-1;function N(){return E?!0:!(o.unstable_now()-P<K)}function Y(){if(E=!1,I){var V=o.unstable_now();P=V;var ot=!0;try{t:{A=!1,C&&(C=!1,G(k),k=-1),M=!0;var $=x;try{e:{for(O(V),y=i(g);y!==null&&!(y.expirationTime>V&&N());){var Lt=y.callback;if(typeof Lt=="function"){y.callback=null,x=y.priorityLevel;var F=Lt(y.expirationTime<=V);if(V=o.unstable_now(),typeof F=="function"){y.callback=F,O(V),ot=!0;break e}y===i(g)&&r(g),O(V)}else r(g);y=i(g)}if(y!==null)ot=!0;else{var rt=i(m);rt!==null&&xt(j,rt.startTime-V),ot=!1}}break t}finally{y=null,x=$,M=!1}ot=void 0}}finally{ot?gt():I=!1}}}var gt;if(typeof H=="function")gt=function(){H(Y)};else if(typeof MessageChannel<"u"){var ft=new MessageChannel,vt=ft.port2;ft.port1.onmessage=Y,gt=function(){vt.postMessage(null)}}else gt=function(){S(Y,0)};function xt(V,ot){k=S(function(){V(o.unstable_now())},ot)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(V){V.callback=null},o.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<V?Math.floor(1e3/V):5},o.unstable_getCurrentPriorityLevel=function(){return x},o.unstable_next=function(V){switch(x){case 1:case 2:case 3:var ot=3;break;default:ot=x}var $=x;x=ot;try{return V()}finally{x=$}},o.unstable_requestPaint=function(){E=!0},o.unstable_runWithPriority=function(V,ot){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var $=x;x=V;try{return ot()}finally{x=$}},o.unstable_scheduleCallback=function(V,ot,$){var Lt=o.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?Lt+$:Lt):$=Lt,V){case 1:var F=-1;break;case 2:F=250;break;case 5:F=1073741823;break;case 4:F=1e4;break;default:F=5e3}return F=$+F,V={id:v++,callback:ot,priorityLevel:V,startTime:$,expirationTime:F,sortIndex:-1},$>Lt?(V.sortIndex=$,t(m,V),i(g)===null&&V===i(m)&&(C?(G(k),k=-1):C=!0,xt(j,$-Lt))):(V.sortIndex=F,t(g,V),A||M||(A=!0,I||(I=!0,gt()))),V},o.unstable_shouldYield=N,o.unstable_wrapCallback=function(V){var ot=x;return function(){var $=x;x=ot;try{return V.apply(this,arguments)}finally{x=$}}}}(hh)),hh}var S_;function MS(){return S_||(S_=1,fh.exports=ES()),fh.exports}var dh={exports:{}},Se={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x_;function bS(){if(x_)return Se;x_=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),d=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),y=Symbol.iterator;function x(F){return F===null||typeof F!="object"?null:(F=y&&F[y]||F["@@iterator"],typeof F=="function"?F:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,C={};function E(F,rt,Tt){this.props=F,this.context=rt,this.refs=C,this.updater=Tt||M}E.prototype.isReactComponent={},E.prototype.setState=function(F,rt){if(typeof F!="object"&&typeof F!="function"&&F!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,F,rt,"setState")},E.prototype.forceUpdate=function(F){this.updater.enqueueForceUpdate(this,F,"forceUpdate")};function S(){}S.prototype=E.prototype;function G(F,rt,Tt){this.props=F,this.context=rt,this.refs=C,this.updater=Tt||M}var H=G.prototype=new S;H.constructor=G,A(H,E.prototype),H.isPureReactComponent=!0;var O=Array.isArray,j={H:null,A:null,T:null,S:null,V:null},I=Object.prototype.hasOwnProperty;function k(F,rt,Tt,Dt,at,Mt){return Tt=Mt.ref,{$$typeof:o,type:F,key:rt,ref:Tt!==void 0?Tt:null,props:Mt}}function K(F,rt){return k(F.type,rt,void 0,void 0,void 0,F.props)}function P(F){return typeof F=="object"&&F!==null&&F.$$typeof===o}function N(F){var rt={"=":"=0",":":"=2"};return"$"+F.replace(/[=:]/g,function(Tt){return rt[Tt]})}var Y=/\/+/g;function gt(F,rt){return typeof F=="object"&&F!==null&&F.key!=null?N(""+F.key):rt.toString(36)}function ft(){}function vt(F){switch(F.status){case"fulfilled":return F.value;case"rejected":throw F.reason;default:switch(typeof F.status=="string"?F.then(ft,ft):(F.status="pending",F.then(function(rt){F.status==="pending"&&(F.status="fulfilled",F.value=rt)},function(rt){F.status==="pending"&&(F.status="rejected",F.reason=rt)})),F.status){case"fulfilled":return F.value;case"rejected":throw F.reason}}throw F}function xt(F,rt,Tt,Dt,at){var Mt=typeof F;(Mt==="undefined"||Mt==="boolean")&&(F=null);var Ct=!1;if(F===null)Ct=!0;else switch(Mt){case"bigint":case"string":case"number":Ct=!0;break;case"object":switch(F.$$typeof){case o:case t:Ct=!0;break;case v:return Ct=F._init,xt(Ct(F._payload),rt,Tt,Dt,at)}}if(Ct)return at=at(F),Ct=Dt===""?"."+gt(F,0):Dt,O(at)?(Tt="",Ct!=null&&(Tt=Ct.replace(Y,"$&/")+"/"),xt(at,rt,Tt,"",function(fe){return fe})):at!=null&&(P(at)&&(at=K(at,Tt+(at.key==null||F&&F.key===at.key?"":(""+at.key).replace(Y,"$&/")+"/")+Ct)),rt.push(at)),1;Ct=0;var zt=Dt===""?".":Dt+":";if(O(F))for(var Ot=0;Ot<F.length;Ot++)Dt=F[Ot],Mt=zt+gt(Dt,Ot),Ct+=xt(Dt,rt,Tt,Mt,at);else if(Ot=x(F),typeof Ot=="function")for(F=Ot.call(F),Ot=0;!(Dt=F.next()).done;)Dt=Dt.value,Mt=zt+gt(Dt,Ot++),Ct+=xt(Dt,rt,Tt,Mt,at);else if(Mt==="object"){if(typeof F.then=="function")return xt(vt(F),rt,Tt,Dt,at);throw rt=String(F),Error("Objects are not valid as a React child (found: "+(rt==="[object Object]"?"object with keys {"+Object.keys(F).join(", ")+"}":rt)+"). If you meant to render a collection of children, use an array instead.")}return Ct}function V(F,rt,Tt){if(F==null)return F;var Dt=[],at=0;return xt(F,Dt,"","",function(Mt){return rt.call(Tt,Mt,at++)}),Dt}function ot(F){if(F._status===-1){var rt=F._result;rt=rt(),rt.then(function(Tt){(F._status===0||F._status===-1)&&(F._status=1,F._result=Tt)},function(Tt){(F._status===0||F._status===-1)&&(F._status=2,F._result=Tt)}),F._status===-1&&(F._status=0,F._result=rt)}if(F._status===1)return F._result.default;throw F._result}var $=typeof reportError=="function"?reportError:function(F){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var rt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof F=="object"&&F!==null&&typeof F.message=="string"?String(F.message):String(F),error:F});if(!window.dispatchEvent(rt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",F);return}console.error(F)};function Lt(){}return Se.Children={map:V,forEach:function(F,rt,Tt){V(F,function(){rt.apply(this,arguments)},Tt)},count:function(F){var rt=0;return V(F,function(){rt++}),rt},toArray:function(F){return V(F,function(rt){return rt})||[]},only:function(F){if(!P(F))throw Error("React.Children.only expected to receive a single React element child.");return F}},Se.Component=E,Se.Fragment=i,Se.Profiler=l,Se.PureComponent=G,Se.StrictMode=r,Se.Suspense=g,Se.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=j,Se.__COMPILER_RUNTIME={__proto__:null,c:function(F){return j.H.useMemoCache(F)}},Se.cache=function(F){return function(){return F.apply(null,arguments)}},Se.cloneElement=function(F,rt,Tt){if(F==null)throw Error("The argument must be a React element, but you passed "+F+".");var Dt=A({},F.props),at=F.key,Mt=void 0;if(rt!=null)for(Ct in rt.ref!==void 0&&(Mt=void 0),rt.key!==void 0&&(at=""+rt.key),rt)!I.call(rt,Ct)||Ct==="key"||Ct==="__self"||Ct==="__source"||Ct==="ref"&&rt.ref===void 0||(Dt[Ct]=rt[Ct]);var Ct=arguments.length-2;if(Ct===1)Dt.children=Tt;else if(1<Ct){for(var zt=Array(Ct),Ot=0;Ot<Ct;Ot++)zt[Ot]=arguments[Ot+2];Dt.children=zt}return k(F.type,at,void 0,void 0,Mt,Dt)},Se.createContext=function(F){return F={$$typeof:d,_currentValue:F,_currentValue2:F,_threadCount:0,Provider:null,Consumer:null},F.Provider=F,F.Consumer={$$typeof:c,_context:F},F},Se.createElement=function(F,rt,Tt){var Dt,at={},Mt=null;if(rt!=null)for(Dt in rt.key!==void 0&&(Mt=""+rt.key),rt)I.call(rt,Dt)&&Dt!=="key"&&Dt!=="__self"&&Dt!=="__source"&&(at[Dt]=rt[Dt]);var Ct=arguments.length-2;if(Ct===1)at.children=Tt;else if(1<Ct){for(var zt=Array(Ct),Ot=0;Ot<Ct;Ot++)zt[Ot]=arguments[Ot+2];at.children=zt}if(F&&F.defaultProps)for(Dt in Ct=F.defaultProps,Ct)at[Dt]===void 0&&(at[Dt]=Ct[Dt]);return k(F,Mt,void 0,void 0,null,at)},Se.createRef=function(){return{current:null}},Se.forwardRef=function(F){return{$$typeof:p,render:F}},Se.isValidElement=P,Se.lazy=function(F){return{$$typeof:v,_payload:{_status:-1,_result:F},_init:ot}},Se.memo=function(F,rt){return{$$typeof:m,type:F,compare:rt===void 0?null:rt}},Se.startTransition=function(F){var rt=j.T,Tt={};j.T=Tt;try{var Dt=F(),at=j.S;at!==null&&at(Tt,Dt),typeof Dt=="object"&&Dt!==null&&typeof Dt.then=="function"&&Dt.then(Lt,$)}catch(Mt){$(Mt)}finally{j.T=rt}},Se.unstable_useCacheRefresh=function(){return j.H.useCacheRefresh()},Se.use=function(F){return j.H.use(F)},Se.useActionState=function(F,rt,Tt){return j.H.useActionState(F,rt,Tt)},Se.useCallback=function(F,rt){return j.H.useCallback(F,rt)},Se.useContext=function(F){return j.H.useContext(F)},Se.useDebugValue=function(){},Se.useDeferredValue=function(F,rt){return j.H.useDeferredValue(F,rt)},Se.useEffect=function(F,rt,Tt){var Dt=j.H;if(typeof Tt=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return Dt.useEffect(F,rt)},Se.useId=function(){return j.H.useId()},Se.useImperativeHandle=function(F,rt,Tt){return j.H.useImperativeHandle(F,rt,Tt)},Se.useInsertionEffect=function(F,rt){return j.H.useInsertionEffect(F,rt)},Se.useLayoutEffect=function(F,rt){return j.H.useLayoutEffect(F,rt)},Se.useMemo=function(F,rt){return j.H.useMemo(F,rt)},Se.useOptimistic=function(F,rt){return j.H.useOptimistic(F,rt)},Se.useReducer=function(F,rt,Tt){return j.H.useReducer(F,rt,Tt)},Se.useRef=function(F){return j.H.useRef(F)},Se.useState=function(F){return j.H.useState(F)},Se.useSyncExternalStore=function(F,rt,Tt){return j.H.useSyncExternalStore(F,rt,Tt)},Se.useTransition=function(){return j.H.useTransition()},Se.version="19.1.0",Se}var E_;function zd(){return E_||(E_=1,dh.exports=bS()),dh.exports}var ph={exports:{}},Jn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var M_;function TS(){if(M_)return Jn;M_=1;var o=zd();function t(g){var m="https://react.dev/errors/"+g;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)m+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+g+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(g,m,v){var y=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:y==null?null:""+y,children:g,containerInfo:m,implementation:v}}var d=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(g,m){if(g==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return Jn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Jn.createPortal=function(g,m){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(t(299));return c(g,m,null,v)},Jn.flushSync=function(g){var m=d.T,v=r.p;try{if(d.T=null,r.p=2,g)return g()}finally{d.T=m,r.p=v,r.d.f()}},Jn.preconnect=function(g,m){typeof g=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,r.d.C(g,m))},Jn.prefetchDNS=function(g){typeof g=="string"&&r.d.D(g)},Jn.preinit=function(g,m){if(typeof g=="string"&&m&&typeof m.as=="string"){var v=m.as,y=p(v,m.crossOrigin),x=typeof m.integrity=="string"?m.integrity:void 0,M=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;v==="style"?r.d.S(g,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:y,integrity:x,fetchPriority:M}):v==="script"&&r.d.X(g,{crossOrigin:y,integrity:x,fetchPriority:M,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},Jn.preinitModule=function(g,m){if(typeof g=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var v=p(m.as,m.crossOrigin);r.d.M(g,{crossOrigin:v,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&r.d.M(g)},Jn.preload=function(g,m){if(typeof g=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var v=m.as,y=p(v,m.crossOrigin);r.d.L(g,v,{crossOrigin:y,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},Jn.preloadModule=function(g,m){if(typeof g=="string")if(m){var v=p(m.as,m.crossOrigin);r.d.m(g,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:v,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else r.d.m(g)},Jn.requestFormReset=function(g){r.d.r(g)},Jn.unstable_batchedUpdates=function(g,m){return g(m)},Jn.useFormState=function(g,m,v){return d.H.useFormState(g,m,v)},Jn.useFormStatus=function(){return d.H.useHostTransitionStatus()},Jn.version="19.1.0",Jn}var b_;function AS(){if(b_)return ph.exports;b_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),ph.exports=TS(),ph.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var T_;function RS(){if(T_)return nl;T_=1;var o=MS(),t=zd(),i=AS();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function d(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function p(e){if(c(e)!==e)throw Error(r(188))}function g(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(r(188));return n!==e?null:e}for(var a=e,s=n;;){var u=a.return;if(u===null)break;var h=u.alternate;if(h===null){if(s=u.return,s!==null){a=s;continue}break}if(u.child===h.child){for(h=u.child;h;){if(h===a)return p(u),e;if(h===s)return p(u),n;h=h.sibling}throw Error(r(188))}if(a.return!==s.return)a=u,s=h;else{for(var T=!1,U=u.child;U;){if(U===a){T=!0,a=u,s=h;break}if(U===s){T=!0,s=u,a=h;break}U=U.sibling}if(!T){for(U=h.child;U;){if(U===a){T=!0,a=h,s=u;break}if(U===s){T=!0,s=h,a=u;break}U=U.sibling}if(!T)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:n}function m(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=m(e),n!==null)return n;e=e.sibling}return null}var v=Object.assign,y=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),M=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),C=Symbol.for("react.strict_mode"),E=Symbol.for("react.profiler"),S=Symbol.for("react.provider"),G=Symbol.for("react.consumer"),H=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),j=Symbol.for("react.suspense"),I=Symbol.for("react.suspense_list"),k=Symbol.for("react.memo"),K=Symbol.for("react.lazy"),P=Symbol.for("react.activity"),N=Symbol.for("react.memo_cache_sentinel"),Y=Symbol.iterator;function gt(e){return e===null||typeof e!="object"?null:(e=Y&&e[Y]||e["@@iterator"],typeof e=="function"?e:null)}var ft=Symbol.for("react.client.reference");function vt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ft?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case A:return"Fragment";case E:return"Profiler";case C:return"StrictMode";case j:return"Suspense";case I:return"SuspenseList";case P:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case M:return"Portal";case H:return(e.displayName||"Context")+".Provider";case G:return(e._context.displayName||"Context")+".Consumer";case O:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case k:return n=e.displayName||null,n!==null?n:vt(e.type)||"Memo";case K:n=e._payload,e=e._init;try{return vt(e(n))}catch{}}return null}var xt=Array.isArray,V=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ot=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$={pending:!1,data:null,method:null,action:null},Lt=[],F=-1;function rt(e){return{current:e}}function Tt(e){0>F||(e.current=Lt[F],Lt[F]=null,F--)}function Dt(e,n){F++,Lt[F]=e.current,e.current=n}var at=rt(null),Mt=rt(null),Ct=rt(null),zt=rt(null);function Ot(e,n){switch(Dt(Ct,n),Dt(Mt,e),Dt(at,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Wg(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Wg(n),e=qg(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Tt(at),Dt(at,e)}function fe(){Tt(at),Tt(Mt),Tt(Ct)}function te(e){e.memoizedState!==null&&Dt(zt,e);var n=at.current,a=qg(n,e.type);n!==a&&(Dt(Mt,e),Dt(at,a))}function We(e){Mt.current===e&&(Tt(at),Tt(Mt)),zt.current===e&&(Tt(zt),Ko._currentValue=$)}var Ze=Object.prototype.hasOwnProperty,Me=o.unstable_scheduleCallback,W=o.unstable_cancelCallback,kn=o.unstable_shouldYield,Ce=o.unstable_requestPaint,me=o.unstable_now,ie=o.unstable_getCurrentPriorityLevel,Ye=o.unstable_ImmediatePriority,$t=o.unstable_UserBlockingPriority,z=o.unstable_NormalPriority,D=o.unstable_LowPriority,lt=o.unstable_IdlePriority,Et=o.log,Ut=o.unstable_setDisableYieldValue,yt=null,Wt=null;function Bt(e){if(typeof Et=="function"&&Ut(e),Wt&&typeof Wt.setStrictMode=="function")try{Wt.setStrictMode(yt,e)}catch{}}var Zt=Math.clz32?Math.clz32:jt,Jt=Math.log,Pt=Math.LN2;function jt(e){return e>>>=0,e===0?32:31-(Jt(e)/Pt|0)|0}var Qt=256,ue=4194304;function kt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ge(e,n,a){var s=e.pendingLanes;if(s===0)return 0;var u=0,h=e.suspendedLanes,T=e.pingedLanes;e=e.warmLanes;var U=s&134217727;return U!==0?(s=U&~h,s!==0?u=kt(s):(T&=U,T!==0?u=kt(T):a||(a=U&~e,a!==0&&(u=kt(a))))):(U=s&~h,U!==0?u=kt(U):T!==0?u=kt(T):a||(a=s&~e,a!==0&&(u=kt(a)))),u===0?0:n!==0&&n!==u&&(n&h)===0&&(h=u&-u,a=n&-n,h>=a||h===32&&(a&4194048)!==0)?n:u}function _e(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function je(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Q(){var e=Qt;return Qt<<=1,(Qt&4194048)===0&&(Qt=256),e}function Ht(){var e=ue;return ue<<=1,(ue&62914560)===0&&(ue=4194304),e}function _t(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function At(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function qt(e,n,a,s,u,h){var T=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var U=e.entanglements,X=e.expirationTimes,ut=e.hiddenUpdates;for(a=T&~a;0<a;){var St=31-Zt(a),wt=1<<St;U[St]=0,X[St]=-1;var ht=ut[St];if(ht!==null)for(ut[St]=null,St=0;St<ht.length;St++){var dt=ht[St];dt!==null&&(dt.lane&=-536870913)}a&=~wt}s!==0&&Vt(e,s,0),h!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=h&~(T&~n))}function Vt(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var s=31-Zt(n);e.entangledLanes|=n,e.entanglements[s]=e.entanglements[s]|1073741824|a&4194090}function ye(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var s=31-Zt(a),u=1<<s;u&n|e[s]&n&&(e[s]|=n),a&=~u}}function $e(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function pn(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Fe(){var e=ot.p;return e!==0?e:(e=window.event,e===void 0?32:f_(e.type))}function ei(e,n){var a=ot.p;try{return ot.p=e,n()}finally{ot.p=a}}var bn=Math.random().toString(36).slice(2),Sn="__reactFiber$"+bn,Dn="__reactProps$"+bn,Yn="__reactContainer$"+bn,ga="__reactEvents$"+bn,br="__reactListeners$"+bn,as="__reactHandles$"+bn,$i="__reactResources$"+bn,Fi="__reactMarker$"+bn;function ta(e){delete e[Sn],delete e[Dn],delete e[ga],delete e[br],delete e[as]}function zi(e){var n=e[Sn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Yn]||a[Sn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=Kg(e);e!==null;){if(a=e[Sn])return a;e=Kg(e)}return n}e=a,a=e.parentNode}return null}function Ii(e){if(e=e[Sn]||e[Yn]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function _a(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function ea(e){var n=e[$i];return n||(n=e[$i]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function mn(e){e[Fi]=!0}var rs=new Set,ss={};function Hi(e,n){L(e,n),L(e+"Capture",n)}function L(e,n){for(ss[e]=n,e=0;e<n.length;e++)rs.add(n[e])}var tt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),pt={},mt={};function nt(e){return Ze.call(mt,e)?!0:Ze.call(pt,e)?!1:tt.test(e)?mt[e]=!0:(pt[e]=!0,!1)}function Nt(e,n,a){if(nt(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function It(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Gt(e,n,a,s){if(s===null)e.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+s)}}var Yt,de;function re(e){if(Yt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Yt=n&&n[1]||"",de=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Yt+e+de}var ee=!1;function Ae(e,n){if(!e||ee)return"";ee=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var wt=function(){throw Error()};if(Object.defineProperty(wt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(wt,[])}catch(dt){var ht=dt}Reflect.construct(e,[],wt)}else{try{wt.call()}catch(dt){ht=dt}e.call(wt.prototype)}}else{try{throw Error()}catch(dt){ht=dt}(wt=e())&&typeof wt.catch=="function"&&wt.catch(function(){})}}catch(dt){if(dt&&ht&&typeof dt.stack=="string")return[dt.stack,ht.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=s.DetermineComponentFrameRoot(),T=h[0],U=h[1];if(T&&U){var X=T.split(`
`),ut=U.split(`
`);for(u=s=0;s<X.length&&!X[s].includes("DetermineComponentFrameRoot");)s++;for(;u<ut.length&&!ut[u].includes("DetermineComponentFrameRoot");)u++;if(s===X.length||u===ut.length)for(s=X.length-1,u=ut.length-1;1<=s&&0<=u&&X[s]!==ut[u];)u--;for(;1<=s&&0<=u;s--,u--)if(X[s]!==ut[u]){if(s!==1||u!==1)do if(s--,u--,0>u||X[s]!==ut[u]){var St=`
`+X[s].replace(" at new "," at ");return e.displayName&&St.includes("<anonymous>")&&(St=St.replace("<anonymous>",e.displayName)),St}while(1<=s&&0<=u);break}}}finally{ee=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?re(a):""}function He(e){switch(e.tag){case 26:case 27:case 5:return re(e.type);case 16:return re("Lazy");case 13:return re("Suspense");case 19:return re("SuspenseList");case 0:case 15:return Ae(e.type,!1);case 11:return Ae(e.type.render,!1);case 1:return Ae(e.type,!0);case 31:return re("Activity");default:return""}}function ln(e){try{var n="";do n+=He(e),e=e.return;while(e);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function De(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ue(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function se(e){var n=Ue(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),s=""+e[n];if(!e.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var u=a.get,h=a.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(T){s=""+T,h.call(this,T)}}),Object.defineProperty(e,n,{enumerable:a.enumerable}),{getValue:function(){return s},setValue:function(T){s=""+T},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function un(e){e._valueTracker||(e._valueTracker=se(e))}function ze(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return e&&(s=Ue(e)?e.checked?"true":"false":e.value),e=s,e!==a?(n.setValue(e),!0):!1}function Fn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var na=/[\n"\\]/g;function Ke(e){return e.replace(na,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Le(e,n,a,s,u,h,T,U){e.name="",T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?e.type=T:e.removeAttribute("type"),n!=null?T==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+De(n)):e.value!==""+De(n)&&(e.value=""+De(n)):T!=="submit"&&T!=="reset"||e.removeAttribute("value"),n!=null?Tn(e,T,De(n)):a!=null?Tn(e,T,De(a)):s!=null&&e.removeAttribute("value"),u==null&&h!=null&&(e.defaultChecked=!!h),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),U!=null&&typeof U!="function"&&typeof U!="symbol"&&typeof U!="boolean"?e.name=""+De(U):e.removeAttribute("name")}function Ge(e,n,a,s,u,h,T,U){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(e.type=h),n!=null||a!=null){if(!(h!=="submit"&&h!=="reset"||n!=null))return;a=a!=null?""+De(a):"",n=n!=null?""+De(n):a,U||n===e.value||(e.value=n),e.defaultValue=n}s=s??u,s=typeof s!="function"&&typeof s!="symbol"&&!!s,e.checked=U?e.checked:!!s,e.defaultChecked=!!s,T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"&&(e.name=T)}function Tn(e,n,a){n==="number"&&Fn(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function gn(e,n,a,s){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&s&&(e[a].defaultSelected=!0)}else{for(a=""+De(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,s&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function An(e,n,a){if(n!=null&&(n=""+De(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+De(a):""}function cn(e,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(xt(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=De(n),e.defaultValue=a,s=e.textContent,s===a&&s!==""&&s!==null&&(e.value=s)}function di(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var oe=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function yl(e,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":s?e.setProperty(n,a):typeof a!="number"||a===0||oe.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Sl(e,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?e.setProperty(s,""):s==="float"?e.cssFloat="":e[s]="");for(var u in n)s=n[u],n.hasOwnProperty(u)&&a[u]!==s&&yl(e,u,s)}else for(var h in n)n.hasOwnProperty(h)&&yl(e,h,n[h])}function os(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var pu=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),mu=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ls(e){return mu.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Tr=null;function R(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Xa=null,jn=null;function xl(e){var n=Ii(e);if(n&&(e=n.stateNode)){var a=e[Dn]||null;t:switch(e=n.stateNode,n.type){case"input":if(Le(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Ke(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==e&&s.form===e.form){var u=s[Dn]||null;if(!u)throw Error(r(90));Le(s,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===e.form&&ze(s)}break t;case"textarea":An(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&gn(e,!!a.multiple,n,!1)}}}var cs=!1;function ia(e,n,a){if(cs)return e(n,a);cs=!0;try{var s=e(n);return s}finally{if(cs=!1,(Xa!==null||jn!==null)&&(ec(),Xa&&(n=Xa,e=jn,jn=Xa=null,xl(n),e)))for(n=0;n<e.length;n++)xl(e[n])}}function va(e,n){var a=e.stateNode;if(a===null)return null;var s=a[Dn]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Gi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=!1;if(Gi)try{var _={};Object.defineProperty(_,"passive",{get:function(){f=!0}}),window.addEventListener("test",_,_),window.removeEventListener("test",_,_)}catch{f=!1}var b=null,w=null,B=null;function q(){if(B)return B;var e,n=w,a=n.length,s,u="value"in b?b.value:b.textContent,h=u.length;for(e=0;e<a&&n[e]===u[e];e++);var T=a-e;for(s=1;s<=T&&n[a-s]===u[h-s];s++);return B=u.slice(e,1<s?1-s:void 0)}function J(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function it(){return!0}function Rt(){return!1}function Ft(e){function n(a,s,u,h,T){this._reactName=a,this._targetInst=u,this.type=s,this.nativeEvent=h,this.target=T,this.currentTarget=null;for(var U in e)e.hasOwnProperty(U)&&(a=e[U],this[U]=a?a(h):h[U]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?it:Rt,this.isPropagationStopped=Rt,this}return v(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=it)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=it)},persist:function(){},isPersistent:it}),n}var ne={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},le=Ft(ne),Be=v({},ne,{view:0,detail:0}),ce=Ft(Be),be,xn,Zn,Kn=v({},Be,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:gu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Zn&&(Zn&&e.type==="mousemove"?(be=e.screenX-Zn.screenX,xn=e.screenY-Zn.screenY):xn=be=0,Zn=e),be)},movementY:function(e){return"movementY"in e?e.movementY:xn}}),ri=Ft(Kn),pi=v({},Kn,{dataTransfer:0}),Ar=Ft(pi),Ai=v({},Be,{relatedTarget:0}),aa=Ft(Ai),Un=v({},ne,{animationName:0,elapsedTime:0,pseudoElement:0}),M0=Ft(Un),b0=v({},ne,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),T0=Ft(b0),A0=v({},ne,{data:0}),Jd=Ft(A0),R0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},w0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},C0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function D0(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=C0[e])?!!n[e]:!1}function gu(){return D0}var U0=v({},Be,{key:function(e){if(e.key){var n=R0[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=J(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?w0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:gu,charCode:function(e){return e.type==="keypress"?J(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?J(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),L0=Ft(U0),N0=v({},Kn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),$d=Ft(N0),O0=v({},Be,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:gu}),P0=Ft(O0),B0=v({},ne,{propertyName:0,elapsedTime:0,pseudoElement:0}),F0=Ft(B0),z0=v({},Kn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),I0=Ft(z0),H0=v({},ne,{newState:0,oldState:0}),G0=Ft(H0),V0=[9,13,27,32],_u=Gi&&"CompositionEvent"in window,ho=null;Gi&&"documentMode"in document&&(ho=document.documentMode);var k0=Gi&&"TextEvent"in window&&!ho,tp=Gi&&(!_u||ho&&8<ho&&11>=ho),ep=" ",np=!1;function ip(e,n){switch(e){case"keyup":return V0.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ap(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var us=!1;function X0(e,n){switch(e){case"compositionend":return ap(n);case"keypress":return n.which!==32?null:(np=!0,ep);case"textInput":return e=n.data,e===ep&&np?null:e;default:return null}}function W0(e,n){if(us)return e==="compositionend"||!_u&&ip(e,n)?(e=q(),B=w=b=null,us=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return tp&&n.locale!=="ko"?null:n.data;default:return null}}var q0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function rp(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!q0[e.type]:n==="textarea"}function sp(e,n,a,s){Xa?jn?jn.push(s):jn=[s]:Xa=s,n=oc(n,"onChange"),0<n.length&&(a=new le("onChange","change",null,a,s),e.push({event:a,listeners:n}))}var po=null,mo=null;function Y0(e){Hg(e,0)}function El(e){var n=_a(e);if(ze(n))return e}function op(e,n){if(e==="change")return n}var lp=!1;if(Gi){var vu;if(Gi){var yu="oninput"in document;if(!yu){var cp=document.createElement("div");cp.setAttribute("oninput","return;"),yu=typeof cp.oninput=="function"}vu=yu}else vu=!1;lp=vu&&(!document.documentMode||9<document.documentMode)}function up(){po&&(po.detachEvent("onpropertychange",fp),mo=po=null)}function fp(e){if(e.propertyName==="value"&&El(mo)){var n=[];sp(n,mo,e,R(e)),ia(Y0,n)}}function j0(e,n,a){e==="focusin"?(up(),po=n,mo=a,po.attachEvent("onpropertychange",fp)):e==="focusout"&&up()}function Z0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return El(mo)}function K0(e,n){if(e==="click")return El(n)}function Q0(e,n){if(e==="input"||e==="change")return El(n)}function J0(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var mi=typeof Object.is=="function"?Object.is:J0;function go(e,n){if(mi(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var u=a[s];if(!Ze.call(n,u)||!mi(e[u],n[u]))return!1}return!0}function hp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function dp(e,n){var a=hp(e);e=0;for(var s;a;){if(a.nodeType===3){if(s=e+a.textContent.length,e<=n&&s>=n)return{node:a,offset:n-e};e=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=hp(a)}}function pp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?pp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function mp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Fn(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=Fn(e.document)}return n}function Su(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var $0=Gi&&"documentMode"in document&&11>=document.documentMode,fs=null,xu=null,_o=null,Eu=!1;function gp(e,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Eu||fs==null||fs!==Fn(s)||(s=fs,"selectionStart"in s&&Su(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),_o&&go(_o,s)||(_o=s,s=oc(xu,"onSelect"),0<s.length&&(n=new le("onSelect","select",null,n,a),e.push({event:n,listeners:s}),n.target=fs)))}function Rr(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var hs={animationend:Rr("Animation","AnimationEnd"),animationiteration:Rr("Animation","AnimationIteration"),animationstart:Rr("Animation","AnimationStart"),transitionrun:Rr("Transition","TransitionRun"),transitionstart:Rr("Transition","TransitionStart"),transitioncancel:Rr("Transition","TransitionCancel"),transitionend:Rr("Transition","TransitionEnd")},Mu={},_p={};Gi&&(_p=document.createElement("div").style,"AnimationEvent"in window||(delete hs.animationend.animation,delete hs.animationiteration.animation,delete hs.animationstart.animation),"TransitionEvent"in window||delete hs.transitionend.transition);function wr(e){if(Mu[e])return Mu[e];if(!hs[e])return e;var n=hs[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in _p)return Mu[e]=n[a];return e}var vp=wr("animationend"),yp=wr("animationiteration"),Sp=wr("animationstart"),ty=wr("transitionrun"),ey=wr("transitionstart"),ny=wr("transitioncancel"),xp=wr("transitionend"),Ep=new Map,bu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");bu.push("scrollEnd");function Vi(e,n){Ep.set(e,n),Hi(n,[e])}var Mp=new WeakMap;function Ri(e,n){if(typeof e=="object"&&e!==null){var a=Mp.get(e);return a!==void 0?a:(n={value:e,source:n,stack:ln(n)},Mp.set(e,n),n)}return{value:e,source:n,stack:ln(n)}}var wi=[],ds=0,Tu=0;function Ml(){for(var e=ds,n=Tu=ds=0;n<e;){var a=wi[n];wi[n++]=null;var s=wi[n];wi[n++]=null;var u=wi[n];wi[n++]=null;var h=wi[n];if(wi[n++]=null,s!==null&&u!==null){var T=s.pending;T===null?u.next=u:(u.next=T.next,T.next=u),s.pending=u}h!==0&&bp(a,u,h)}}function bl(e,n,a,s){wi[ds++]=e,wi[ds++]=n,wi[ds++]=a,wi[ds++]=s,Tu|=s,e.lanes|=s,e=e.alternate,e!==null&&(e.lanes|=s)}function Au(e,n,a,s){return bl(e,n,a,s),Tl(e)}function ps(e,n){return bl(e,null,null,n),Tl(e)}function bp(e,n,a){e.lanes|=a;var s=e.alternate;s!==null&&(s.lanes|=a);for(var u=!1,h=e.return;h!==null;)h.childLanes|=a,s=h.alternate,s!==null&&(s.childLanes|=a),h.tag===22&&(e=h.stateNode,e===null||e._visibility&1||(u=!0)),e=h,h=h.return;return e.tag===3?(h=e.stateNode,u&&n!==null&&(u=31-Zt(a),e=h.hiddenUpdates,s=e[u],s===null?e[u]=[n]:s.push(n),n.lane=a|536870912),h):null}function Tl(e){if(50<Vo)throw Vo=0,Nf=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var ms={};function iy(e,n,a,s){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function gi(e,n,a,s){return new iy(e,n,a,s)}function Ru(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ya(e,n){var a=e.alternate;return a===null?(a=gi(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Tp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Al(e,n,a,s,u,h){var T=0;if(s=e,typeof e=="function")Ru(e)&&(T=1);else if(typeof e=="string")T=rS(e,a,at.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case P:return e=gi(31,a,n,u),e.elementType=P,e.lanes=h,e;case A:return Cr(a.children,u,h,n);case C:T=8,u|=24;break;case E:return e=gi(12,a,n,u|2),e.elementType=E,e.lanes=h,e;case j:return e=gi(13,a,n,u),e.elementType=j,e.lanes=h,e;case I:return e=gi(19,a,n,u),e.elementType=I,e.lanes=h,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case S:case H:T=10;break t;case G:T=9;break t;case O:T=11;break t;case k:T=14;break t;case K:T=16,s=null;break t}T=29,a=Error(r(130,e===null?"null":typeof e,"")),s=null}return n=gi(T,a,n,u),n.elementType=e,n.type=s,n.lanes=h,n}function Cr(e,n,a,s){return e=gi(7,e,s,n),e.lanes=a,e}function wu(e,n,a){return e=gi(6,e,null,n),e.lanes=a,e}function Cu(e,n,a){return n=gi(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var gs=[],_s=0,Rl=null,wl=0,Ci=[],Di=0,Dr=null,Sa=1,xa="";function Ur(e,n){gs[_s++]=wl,gs[_s++]=Rl,Rl=e,wl=n}function Ap(e,n,a){Ci[Di++]=Sa,Ci[Di++]=xa,Ci[Di++]=Dr,Dr=e;var s=Sa;e=xa;var u=32-Zt(s)-1;s&=~(1<<u),a+=1;var h=32-Zt(n)+u;if(30<h){var T=u-u%5;h=(s&(1<<T)-1).toString(32),s>>=T,u-=T,Sa=1<<32-Zt(n)+u|a<<u|s,xa=h+e}else Sa=1<<h|a<<u|s,xa=e}function Du(e){e.return!==null&&(Ur(e,1),Ap(e,1,0))}function Uu(e){for(;e===Rl;)Rl=gs[--_s],gs[_s]=null,wl=gs[--_s],gs[_s]=null;for(;e===Dr;)Dr=Ci[--Di],Ci[Di]=null,xa=Ci[--Di],Ci[Di]=null,Sa=Ci[--Di],Ci[Di]=null}var ni=null,_n=null,qe=!1,Lr=null,ra=!1,Lu=Error(r(519));function Nr(e){var n=Error(r(418,""));throw So(Ri(n,e)),Lu}function Rp(e){var n=e.stateNode,a=e.type,s=e.memoizedProps;switch(n[Sn]=e,n[Dn]=s,a){case"dialog":Oe("cancel",n),Oe("close",n);break;case"iframe":case"object":case"embed":Oe("load",n);break;case"video":case"audio":for(a=0;a<Xo.length;a++)Oe(Xo[a],n);break;case"source":Oe("error",n);break;case"img":case"image":case"link":Oe("error",n),Oe("load",n);break;case"details":Oe("toggle",n);break;case"input":Oe("invalid",n),Ge(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0),un(n);break;case"select":Oe("invalid",n);break;case"textarea":Oe("invalid",n),cn(n,s.value,s.defaultValue,s.children),un(n)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||Xg(n.textContent,a)?(s.popover!=null&&(Oe("beforetoggle",n),Oe("toggle",n)),s.onScroll!=null&&Oe("scroll",n),s.onScrollEnd!=null&&Oe("scrollend",n),s.onClick!=null&&(n.onclick=lc),n=!0):n=!1,n||Nr(e)}function wp(e){for(ni=e.return;ni;)switch(ni.tag){case 5:case 13:ra=!1;return;case 27:case 3:ra=!0;return;default:ni=ni.return}}function vo(e){if(e!==ni)return!1;if(!qe)return wp(e),qe=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Zf(e.type,e.memoizedProps)),a=!a),a&&_n&&Nr(e),wp(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));t:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(n===0){_n=Xi(e.nextSibling);break t}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;e=e.nextSibling}_n=null}}else n===27?(n=_n,sr(e.type)?(e=$f,$f=null,_n=e):_n=n):_n=ni?Xi(e.stateNode.nextSibling):null;return!0}function yo(){_n=ni=null,qe=!1}function Cp(){var e=Lr;return e!==null&&(li===null?li=e:li.push.apply(li,e),Lr=null),e}function So(e){Lr===null?Lr=[e]:Lr.push(e)}var Nu=rt(null),Or=null,Ea=null;function Wa(e,n,a){Dt(Nu,n._currentValue),n._currentValue=a}function Ma(e){e._currentValue=Nu.current,Tt(Nu)}function Ou(e,n,a){for(;e!==null;){var s=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),e===a)break;e=e.return}}function Pu(e,n,a,s){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var h=u.dependencies;if(h!==null){var T=u.child;h=h.firstContext;t:for(;h!==null;){var U=h;h=u;for(var X=0;X<n.length;X++)if(U.context===n[X]){h.lanes|=a,U=h.alternate,U!==null&&(U.lanes|=a),Ou(h.return,a,e),s||(T=null);break t}h=U.next}}else if(u.tag===18){if(T=u.return,T===null)throw Error(r(341));T.lanes|=a,h=T.alternate,h!==null&&(h.lanes|=a),Ou(T,a,e),T=null}else T=u.child;if(T!==null)T.return=u;else for(T=u;T!==null;){if(T===e){T=null;break}if(u=T.sibling,u!==null){u.return=T.return,T=u;break}T=T.return}u=T}}function xo(e,n,a,s){e=null;for(var u=n,h=!1;u!==null;){if(!h){if((u.flags&524288)!==0)h=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var T=u.alternate;if(T===null)throw Error(r(387));if(T=T.memoizedProps,T!==null){var U=u.type;mi(u.pendingProps.value,T.value)||(e!==null?e.push(U):e=[U])}}else if(u===zt.current){if(T=u.alternate,T===null)throw Error(r(387));T.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Ko):e=[Ko])}u=u.return}e!==null&&Pu(n,e,a,s),n.flags|=262144}function Cl(e){for(e=e.firstContext;e!==null;){if(!mi(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Pr(e){Or=e,Ea=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Qn(e){return Dp(Or,e)}function Dl(e,n){return Or===null&&Pr(e),Dp(e,n)}function Dp(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Ea===null){if(e===null)throw Error(r(308));Ea=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Ea=Ea.next=n;return a}var ay=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,s){e.push(s)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},ry=o.unstable_scheduleCallback,sy=o.unstable_NormalPriority,Ln={$$typeof:H,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Bu(){return{controller:new ay,data:new Map,refCount:0}}function Eo(e){e.refCount--,e.refCount===0&&ry(sy,function(){e.controller.abort()})}var Mo=null,Fu=0,vs=0,ys=null;function oy(e,n){if(Mo===null){var a=Mo=[];Fu=0,vs=Hf(),ys={status:"pending",value:void 0,then:function(s){a.push(s)}}}return Fu++,n.then(Up,Up),n}function Up(){if(--Fu===0&&Mo!==null){ys!==null&&(ys.status="fulfilled");var e=Mo;Mo=null,vs=0,ys=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function ly(e,n){var a=[],s={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){s.status="fulfilled",s.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(s.status="rejected",s.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),s}var Lp=V.S;V.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&oy(e,n),Lp!==null&&Lp(e,n)};var Br=rt(null);function zu(){var e=Br.current;return e!==null?e:on.pooledCache}function Ul(e,n){n===null?Dt(Br,Br.current):Dt(Br,n.pool)}function Np(){var e=zu();return e===null?null:{parent:Ln._currentValue,pool:e}}var bo=Error(r(460)),Op=Error(r(474)),Ll=Error(r(542)),Iu={then:function(){}};function Pp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Nl(){}function Bp(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Nl,Nl),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,zp(e),e;default:if(typeof n.status=="string")n.then(Nl,Nl);else{if(e=on,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(s){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=s}},function(s){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,zp(e),e}throw To=n,bo}}var To=null;function Fp(){if(To===null)throw Error(r(459));var e=To;return To=null,e}function zp(e){if(e===bo||e===Ll)throw Error(r(483))}var qa=!1;function Hu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Gu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ya(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ja(e,n,a){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,(Qe&2)!==0){var u=s.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),s.pending=n,n=Tl(e),bp(e,null,a),n}return bl(e,s,n,a),Tl(e)}function Ao(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=e.pendingLanes,a|=s,n.lanes=a,ye(e,a)}}function Vu(e,n){var a=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var u=null,h=null;if(a=a.firstBaseUpdate,a!==null){do{var T={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};h===null?u=h=T:h=h.next=T,a=a.next}while(a!==null);h===null?u=h=n:h=h.next=n}else u=h=n;a={baseState:s.baseState,firstBaseUpdate:u,lastBaseUpdate:h,shared:s.shared,callbacks:s.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var ku=!1;function Ro(){if(ku){var e=ys;if(e!==null)throw e}}function wo(e,n,a,s){ku=!1;var u=e.updateQueue;qa=!1;var h=u.firstBaseUpdate,T=u.lastBaseUpdate,U=u.shared.pending;if(U!==null){u.shared.pending=null;var X=U,ut=X.next;X.next=null,T===null?h=ut:T.next=ut,T=X;var St=e.alternate;St!==null&&(St=St.updateQueue,U=St.lastBaseUpdate,U!==T&&(U===null?St.firstBaseUpdate=ut:U.next=ut,St.lastBaseUpdate=X))}if(h!==null){var wt=u.baseState;T=0,St=ut=X=null,U=h;do{var ht=U.lane&-536870913,dt=ht!==U.lane;if(dt?(Ve&ht)===ht:(s&ht)===ht){ht!==0&&ht===vs&&(ku=!0),St!==null&&(St=St.next={lane:0,tag:U.tag,payload:U.payload,callback:null,next:null});t:{var ve=e,he=U;ht=n;var nn=a;switch(he.tag){case 1:if(ve=he.payload,typeof ve=="function"){wt=ve.call(nn,wt,ht);break t}wt=ve;break t;case 3:ve.flags=ve.flags&-65537|128;case 0:if(ve=he.payload,ht=typeof ve=="function"?ve.call(nn,wt,ht):ve,ht==null)break t;wt=v({},wt,ht);break t;case 2:qa=!0}}ht=U.callback,ht!==null&&(e.flags|=64,dt&&(e.flags|=8192),dt=u.callbacks,dt===null?u.callbacks=[ht]:dt.push(ht))}else dt={lane:ht,tag:U.tag,payload:U.payload,callback:U.callback,next:null},St===null?(ut=St=dt,X=wt):St=St.next=dt,T|=ht;if(U=U.next,U===null){if(U=u.shared.pending,U===null)break;dt=U,U=dt.next,dt.next=null,u.lastBaseUpdate=dt,u.shared.pending=null}}while(!0);St===null&&(X=wt),u.baseState=X,u.firstBaseUpdate=ut,u.lastBaseUpdate=St,h===null&&(u.shared.lanes=0),nr|=T,e.lanes=T,e.memoizedState=wt}}function Ip(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function Hp(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Ip(a[e],n)}var Ss=rt(null),Ol=rt(0);function Gp(e,n){e=Da,Dt(Ol,e),Dt(Ss,n),Da=e|n.baseLanes}function Xu(){Dt(Ol,Da),Dt(Ss,Ss.current)}function Wu(){Da=Ol.current,Tt(Ss),Tt(Ol)}var Za=0,Re=null,tn=null,Rn=null,Pl=!1,xs=!1,Fr=!1,Bl=0,Co=0,Es=null,cy=0;function En(){throw Error(r(321))}function qu(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!mi(e[a],n[a]))return!1;return!0}function Yu(e,n,a,s,u,h){return Za=h,Re=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,V.H=e===null||e.memoizedState===null?bm:Tm,Fr=!1,h=a(s,u),Fr=!1,xs&&(h=kp(n,a,s,u)),Vp(e),h}function Vp(e){V.H=Vl;var n=tn!==null&&tn.next!==null;if(Za=0,Rn=tn=Re=null,Pl=!1,Co=0,Es=null,n)throw Error(r(300));e===null||zn||(e=e.dependencies,e!==null&&Cl(e)&&(zn=!0))}function kp(e,n,a,s){Re=e;var u=0;do{if(xs&&(Es=null),Co=0,xs=!1,25<=u)throw Error(r(301));if(u+=1,Rn=tn=null,e.updateQueue!=null){var h=e.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}V.H=gy,h=n(a,s)}while(xs);return h}function uy(){var e=V.H,n=e.useState()[0];return n=typeof n.then=="function"?Do(n):n,e=e.useState()[0],(tn!==null?tn.memoizedState:null)!==e&&(Re.flags|=1024),n}function ju(){var e=Bl!==0;return Bl=0,e}function Zu(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Ku(e){if(Pl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Pl=!1}Za=0,Rn=tn=Re=null,xs=!1,Co=Bl=0,Es=null}function si(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Rn===null?Re.memoizedState=Rn=e:Rn=Rn.next=e,Rn}function wn(){if(tn===null){var e=Re.alternate;e=e!==null?e.memoizedState:null}else e=tn.next;var n=Rn===null?Re.memoizedState:Rn.next;if(n!==null)Rn=n,tn=e;else{if(e===null)throw Re.alternate===null?Error(r(467)):Error(r(310));tn=e,e={memoizedState:tn.memoizedState,baseState:tn.baseState,baseQueue:tn.baseQueue,queue:tn.queue,next:null},Rn===null?Re.memoizedState=Rn=e:Rn=Rn.next=e}return Rn}function Qu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Do(e){var n=Co;return Co+=1,Es===null&&(Es=[]),e=Bp(Es,e,n),n=Re,(Rn===null?n.memoizedState:Rn.next)===null&&(n=n.alternate,V.H=n===null||n.memoizedState===null?bm:Tm),e}function Fl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Do(e);if(e.$$typeof===H)return Qn(e)}throw Error(r(438,String(e)))}function Ju(e){var n=null,a=Re.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=Re.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Qu(),Re.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),s=0;s<e;s++)a[s]=N;return n.index++,a}function ba(e,n){return typeof n=="function"?n(e):n}function zl(e){var n=wn();return $u(n,tn,e)}function $u(e,n,a){var s=e.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var u=e.baseQueue,h=s.pending;if(h!==null){if(u!==null){var T=u.next;u.next=h.next,h.next=T}n.baseQueue=u=h,s.pending=null}if(h=e.baseState,u===null)e.memoizedState=h;else{n=u.next;var U=T=null,X=null,ut=n,St=!1;do{var wt=ut.lane&-536870913;if(wt!==ut.lane?(Ve&wt)===wt:(Za&wt)===wt){var ht=ut.revertLane;if(ht===0)X!==null&&(X=X.next={lane:0,revertLane:0,action:ut.action,hasEagerState:ut.hasEagerState,eagerState:ut.eagerState,next:null}),wt===vs&&(St=!0);else if((Za&ht)===ht){ut=ut.next,ht===vs&&(St=!0);continue}else wt={lane:0,revertLane:ut.revertLane,action:ut.action,hasEagerState:ut.hasEagerState,eagerState:ut.eagerState,next:null},X===null?(U=X=wt,T=h):X=X.next=wt,Re.lanes|=ht,nr|=ht;wt=ut.action,Fr&&a(h,wt),h=ut.hasEagerState?ut.eagerState:a(h,wt)}else ht={lane:wt,revertLane:ut.revertLane,action:ut.action,hasEagerState:ut.hasEagerState,eagerState:ut.eagerState,next:null},X===null?(U=X=ht,T=h):X=X.next=ht,Re.lanes|=wt,nr|=wt;ut=ut.next}while(ut!==null&&ut!==n);if(X===null?T=h:X.next=U,!mi(h,e.memoizedState)&&(zn=!0,St&&(a=ys,a!==null)))throw a;e.memoizedState=h,e.baseState=T,e.baseQueue=X,s.lastRenderedState=h}return u===null&&(s.lanes=0),[e.memoizedState,s.dispatch]}function tf(e){var n=wn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var s=a.dispatch,u=a.pending,h=n.memoizedState;if(u!==null){a.pending=null;var T=u=u.next;do h=e(h,T.action),T=T.next;while(T!==u);mi(h,n.memoizedState)||(zn=!0),n.memoizedState=h,n.baseQueue===null&&(n.baseState=h),a.lastRenderedState=h}return[h,s]}function Xp(e,n,a){var s=Re,u=wn(),h=qe;if(h){if(a===void 0)throw Error(r(407));a=a()}else a=n();var T=!mi((tn||u).memoizedState,a);T&&(u.memoizedState=a,zn=!0),u=u.queue;var U=Yp.bind(null,s,u,e);if(Uo(2048,8,U,[e]),u.getSnapshot!==n||T||Rn!==null&&Rn.memoizedState.tag&1){if(s.flags|=2048,Ms(9,Il(),qp.bind(null,s,u,a,n),null),on===null)throw Error(r(349));h||(Za&124)!==0||Wp(s,n,a)}return a}function Wp(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=Re.updateQueue,n===null?(n=Qu(),Re.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function qp(e,n,a,s){n.value=a,n.getSnapshot=s,jp(n)&&Zp(e)}function Yp(e,n,a){return a(function(){jp(n)&&Zp(e)})}function jp(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!mi(e,a)}catch{return!0}}function Zp(e){var n=ps(e,2);n!==null&&xi(n,e,2)}function ef(e){var n=si();if(typeof e=="function"){var a=e;if(e=a(),Fr){Bt(!0);try{a()}finally{Bt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ba,lastRenderedState:e},n}function Kp(e,n,a,s){return e.baseState=a,$u(e,tn,typeof s=="function"?s:ba)}function fy(e,n,a,s,u){if(Gl(e))throw Error(r(485));if(e=n.action,e!==null){var h={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(T){h.listeners.push(T)}};V.T!==null?a(!0):h.isTransition=!1,s(h),a=n.pending,a===null?(h.next=n.pending=h,Qp(n,h)):(h.next=a.next,n.pending=a.next=h)}}function Qp(e,n){var a=n.action,s=n.payload,u=e.state;if(n.isTransition){var h=V.T,T={};V.T=T;try{var U=a(u,s),X=V.S;X!==null&&X(T,U),Jp(e,n,U)}catch(ut){nf(e,n,ut)}finally{V.T=h}}else try{h=a(u,s),Jp(e,n,h)}catch(ut){nf(e,n,ut)}}function Jp(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){$p(e,n,s)},function(s){return nf(e,n,s)}):$p(e,n,a)}function $p(e,n,a){n.status="fulfilled",n.value=a,tm(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Qp(e,a)))}function nf(e,n,a){var s=e.pending;if(e.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,tm(n),n=n.next;while(n!==s)}e.action=null}function tm(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function em(e,n){return n}function nm(e,n){if(qe){var a=on.formState;if(a!==null){t:{var s=Re;if(qe){if(_n){e:{for(var u=_n,h=ra;u.nodeType!==8;){if(!h){u=null;break e}if(u=Xi(u.nextSibling),u===null){u=null;break e}}h=u.data,u=h==="F!"||h==="F"?u:null}if(u){_n=Xi(u.nextSibling),s=u.data==="F!";break t}}Nr(s)}s=!1}s&&(n=a[0])}}return a=si(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:em,lastRenderedState:n},a.queue=s,a=xm.bind(null,Re,s),s.dispatch=a,s=ef(!1),h=lf.bind(null,Re,!1,s.queue),s=si(),u={state:n,dispatch:null,action:e,pending:null},s.queue=u,a=fy.bind(null,Re,u,h,a),u.dispatch=a,s.memoizedState=e,[n,a,!1]}function im(e){var n=wn();return am(n,tn,e)}function am(e,n,a){if(n=$u(e,n,em)[0],e=zl(ba)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=Do(n)}catch(T){throw T===bo?Ll:T}else s=n;n=wn();var u=n.queue,h=u.dispatch;return a!==n.memoizedState&&(Re.flags|=2048,Ms(9,Il(),hy.bind(null,u,a),null)),[s,h,e]}function hy(e,n){e.action=n}function rm(e){var n=wn(),a=tn;if(a!==null)return am(n,a,e);wn(),n=n.memoizedState,a=wn();var s=a.queue.dispatch;return a.memoizedState=e,[n,s,!1]}function Ms(e,n,a,s){return e={tag:e,create:a,deps:s,inst:n,next:null},n=Re.updateQueue,n===null&&(n=Qu(),Re.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(s=a.next,a.next=e,e.next=s,n.lastEffect=e),e}function Il(){return{destroy:void 0,resource:void 0}}function sm(){return wn().memoizedState}function Hl(e,n,a,s){var u=si();s=s===void 0?null:s,Re.flags|=e,u.memoizedState=Ms(1|n,Il(),a,s)}function Uo(e,n,a,s){var u=wn();s=s===void 0?null:s;var h=u.memoizedState.inst;tn!==null&&s!==null&&qu(s,tn.memoizedState.deps)?u.memoizedState=Ms(n,h,a,s):(Re.flags|=e,u.memoizedState=Ms(1|n,h,a,s))}function om(e,n){Hl(8390656,8,e,n)}function lm(e,n){Uo(2048,8,e,n)}function cm(e,n){return Uo(4,2,e,n)}function um(e,n){return Uo(4,4,e,n)}function fm(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function hm(e,n,a){a=a!=null?a.concat([e]):null,Uo(4,4,fm.bind(null,n,e),a)}function af(){}function dm(e,n){var a=wn();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&qu(n,s[1])?s[0]:(a.memoizedState=[e,n],e)}function pm(e,n){var a=wn();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&qu(n,s[1]))return s[0];if(s=e(),Fr){Bt(!0);try{e()}finally{Bt(!1)}}return a.memoizedState=[s,n],s}function rf(e,n,a){return a===void 0||(Za&1073741824)!==0?e.memoizedState=n:(e.memoizedState=a,e=_g(),Re.lanes|=e,nr|=e,a)}function mm(e,n,a,s){return mi(a,n)?a:Ss.current!==null?(e=rf(e,a,s),mi(e,n)||(zn=!0),e):(Za&42)===0?(zn=!0,e.memoizedState=a):(e=_g(),Re.lanes|=e,nr|=e,n)}function gm(e,n,a,s,u){var h=ot.p;ot.p=h!==0&&8>h?h:8;var T=V.T,U={};V.T=U,lf(e,!1,n,a);try{var X=u(),ut=V.S;if(ut!==null&&ut(U,X),X!==null&&typeof X=="object"&&typeof X.then=="function"){var St=ly(X,s);Lo(e,n,St,Si(e))}else Lo(e,n,s,Si(e))}catch(wt){Lo(e,n,{then:function(){},status:"rejected",reason:wt},Si())}finally{ot.p=h,V.T=T}}function dy(){}function sf(e,n,a,s){if(e.tag!==5)throw Error(r(476));var u=_m(e).queue;gm(e,u,n,$,a===null?dy:function(){return vm(e),a(s)})}function _m(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:$,baseState:$,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ba,lastRenderedState:$},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ba,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function vm(e){var n=_m(e).next.queue;Lo(e,n,{},Si())}function of(){return Qn(Ko)}function ym(){return wn().memoizedState}function Sm(){return wn().memoizedState}function py(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=Si();e=Ya(a);var s=ja(n,e,a);s!==null&&(xi(s,n,a),Ao(s,n,a)),n={cache:Bu()},e.payload=n;return}n=n.return}}function my(e,n,a){var s=Si();a={lane:s,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Gl(e)?Em(n,a):(a=Au(e,n,a,s),a!==null&&(xi(a,e,s),Mm(a,n,s)))}function xm(e,n,a){var s=Si();Lo(e,n,a,s)}function Lo(e,n,a,s){var u={lane:s,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Gl(e))Em(n,u);else{var h=e.alternate;if(e.lanes===0&&(h===null||h.lanes===0)&&(h=n.lastRenderedReducer,h!==null))try{var T=n.lastRenderedState,U=h(T,a);if(u.hasEagerState=!0,u.eagerState=U,mi(U,T))return bl(e,n,u,0),on===null&&Ml(),!1}catch{}finally{}if(a=Au(e,n,u,s),a!==null)return xi(a,e,s),Mm(a,n,s),!0}return!1}function lf(e,n,a,s){if(s={lane:2,revertLane:Hf(),action:s,hasEagerState:!1,eagerState:null,next:null},Gl(e)){if(n)throw Error(r(479))}else n=Au(e,a,s,2),n!==null&&xi(n,e,2)}function Gl(e){var n=e.alternate;return e===Re||n!==null&&n===Re}function Em(e,n){xs=Pl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Mm(e,n,a){if((a&4194048)!==0){var s=n.lanes;s&=e.pendingLanes,a|=s,n.lanes=a,ye(e,a)}}var Vl={readContext:Qn,use:Fl,useCallback:En,useContext:En,useEffect:En,useImperativeHandle:En,useLayoutEffect:En,useInsertionEffect:En,useMemo:En,useReducer:En,useRef:En,useState:En,useDebugValue:En,useDeferredValue:En,useTransition:En,useSyncExternalStore:En,useId:En,useHostTransitionStatus:En,useFormState:En,useActionState:En,useOptimistic:En,useMemoCache:En,useCacheRefresh:En},bm={readContext:Qn,use:Fl,useCallback:function(e,n){return si().memoizedState=[e,n===void 0?null:n],e},useContext:Qn,useEffect:om,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Hl(4194308,4,fm.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Hl(4194308,4,e,n)},useInsertionEffect:function(e,n){Hl(4,2,e,n)},useMemo:function(e,n){var a=si();n=n===void 0?null:n;var s=e();if(Fr){Bt(!0);try{e()}finally{Bt(!1)}}return a.memoizedState=[s,n],s},useReducer:function(e,n,a){var s=si();if(a!==void 0){var u=a(n);if(Fr){Bt(!0);try{a(n)}finally{Bt(!1)}}}else u=n;return s.memoizedState=s.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},s.queue=e,e=e.dispatch=my.bind(null,Re,e),[s.memoizedState,e]},useRef:function(e){var n=si();return e={current:e},n.memoizedState=e},useState:function(e){e=ef(e);var n=e.queue,a=xm.bind(null,Re,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:af,useDeferredValue:function(e,n){var a=si();return rf(a,e,n)},useTransition:function(){var e=ef(!1);return e=gm.bind(null,Re,e.queue,!0,!1),si().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var s=Re,u=si();if(qe){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),on===null)throw Error(r(349));(Ve&124)!==0||Wp(s,n,a)}u.memoizedState=a;var h={value:a,getSnapshot:n};return u.queue=h,om(Yp.bind(null,s,h,e),[e]),s.flags|=2048,Ms(9,Il(),qp.bind(null,s,h,a,n),null),a},useId:function(){var e=si(),n=on.identifierPrefix;if(qe){var a=xa,s=Sa;a=(s&~(1<<32-Zt(s)-1)).toString(32)+a,n="«"+n+"R"+a,a=Bl++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=cy++,n="«"+n+"r"+a.toString(32)+"»";return e.memoizedState=n},useHostTransitionStatus:of,useFormState:nm,useActionState:nm,useOptimistic:function(e){var n=si();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=lf.bind(null,Re,!0,a),a.dispatch=n,[e,n]},useMemoCache:Ju,useCacheRefresh:function(){return si().memoizedState=py.bind(null,Re)}},Tm={readContext:Qn,use:Fl,useCallback:dm,useContext:Qn,useEffect:lm,useImperativeHandle:hm,useInsertionEffect:cm,useLayoutEffect:um,useMemo:pm,useReducer:zl,useRef:sm,useState:function(){return zl(ba)},useDebugValue:af,useDeferredValue:function(e,n){var a=wn();return mm(a,tn.memoizedState,e,n)},useTransition:function(){var e=zl(ba)[0],n=wn().memoizedState;return[typeof e=="boolean"?e:Do(e),n]},useSyncExternalStore:Xp,useId:ym,useHostTransitionStatus:of,useFormState:im,useActionState:im,useOptimistic:function(e,n){var a=wn();return Kp(a,tn,e,n)},useMemoCache:Ju,useCacheRefresh:Sm},gy={readContext:Qn,use:Fl,useCallback:dm,useContext:Qn,useEffect:lm,useImperativeHandle:hm,useInsertionEffect:cm,useLayoutEffect:um,useMemo:pm,useReducer:tf,useRef:sm,useState:function(){return tf(ba)},useDebugValue:af,useDeferredValue:function(e,n){var a=wn();return tn===null?rf(a,e,n):mm(a,tn.memoizedState,e,n)},useTransition:function(){var e=tf(ba)[0],n=wn().memoizedState;return[typeof e=="boolean"?e:Do(e),n]},useSyncExternalStore:Xp,useId:ym,useHostTransitionStatus:of,useFormState:rm,useActionState:rm,useOptimistic:function(e,n){var a=wn();return tn!==null?Kp(a,tn,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Ju,useCacheRefresh:Sm},bs=null,No=0;function kl(e){var n=No;return No+=1,bs===null&&(bs=[]),Bp(bs,e,n)}function Oo(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Xl(e,n){throw n.$$typeof===y?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Am(e){var n=e._init;return n(e._payload)}function Rm(e){function n(et,Z){if(e){var ct=et.deletions;ct===null?(et.deletions=[Z],et.flags|=16):ct.push(Z)}}function a(et,Z){if(!e)return null;for(;Z!==null;)n(et,Z),Z=Z.sibling;return null}function s(et){for(var Z=new Map;et!==null;)et.key!==null?Z.set(et.key,et):Z.set(et.index,et),et=et.sibling;return Z}function u(et,Z){return et=ya(et,Z),et.index=0,et.sibling=null,et}function h(et,Z,ct){return et.index=ct,e?(ct=et.alternate,ct!==null?(ct=ct.index,ct<Z?(et.flags|=67108866,Z):ct):(et.flags|=67108866,Z)):(et.flags|=1048576,Z)}function T(et){return e&&et.alternate===null&&(et.flags|=67108866),et}function U(et,Z,ct,bt){return Z===null||Z.tag!==6?(Z=wu(ct,et.mode,bt),Z.return=et,Z):(Z=u(Z,ct),Z.return=et,Z)}function X(et,Z,ct,bt){var Kt=ct.type;return Kt===A?St(et,Z,ct.props.children,bt,ct.key):Z!==null&&(Z.elementType===Kt||typeof Kt=="object"&&Kt!==null&&Kt.$$typeof===K&&Am(Kt)===Z.type)?(Z=u(Z,ct.props),Oo(Z,ct),Z.return=et,Z):(Z=Al(ct.type,ct.key,ct.props,null,et.mode,bt),Oo(Z,ct),Z.return=et,Z)}function ut(et,Z,ct,bt){return Z===null||Z.tag!==4||Z.stateNode.containerInfo!==ct.containerInfo||Z.stateNode.implementation!==ct.implementation?(Z=Cu(ct,et.mode,bt),Z.return=et,Z):(Z=u(Z,ct.children||[]),Z.return=et,Z)}function St(et,Z,ct,bt,Kt){return Z===null||Z.tag!==7?(Z=Cr(ct,et.mode,bt,Kt),Z.return=et,Z):(Z=u(Z,ct),Z.return=et,Z)}function wt(et,Z,ct){if(typeof Z=="string"&&Z!==""||typeof Z=="number"||typeof Z=="bigint")return Z=wu(""+Z,et.mode,ct),Z.return=et,Z;if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case x:return ct=Al(Z.type,Z.key,Z.props,null,et.mode,ct),Oo(ct,Z),ct.return=et,ct;case M:return Z=Cu(Z,et.mode,ct),Z.return=et,Z;case K:var bt=Z._init;return Z=bt(Z._payload),wt(et,Z,ct)}if(xt(Z)||gt(Z))return Z=Cr(Z,et.mode,ct,null),Z.return=et,Z;if(typeof Z.then=="function")return wt(et,kl(Z),ct);if(Z.$$typeof===H)return wt(et,Dl(et,Z),ct);Xl(et,Z)}return null}function ht(et,Z,ct,bt){var Kt=Z!==null?Z.key:null;if(typeof ct=="string"&&ct!==""||typeof ct=="number"||typeof ct=="bigint")return Kt!==null?null:U(et,Z,""+ct,bt);if(typeof ct=="object"&&ct!==null){switch(ct.$$typeof){case x:return ct.key===Kt?X(et,Z,ct,bt):null;case M:return ct.key===Kt?ut(et,Z,ct,bt):null;case K:return Kt=ct._init,ct=Kt(ct._payload),ht(et,Z,ct,bt)}if(xt(ct)||gt(ct))return Kt!==null?null:St(et,Z,ct,bt,null);if(typeof ct.then=="function")return ht(et,Z,kl(ct),bt);if(ct.$$typeof===H)return ht(et,Z,Dl(et,ct),bt);Xl(et,ct)}return null}function dt(et,Z,ct,bt,Kt){if(typeof bt=="string"&&bt!==""||typeof bt=="number"||typeof bt=="bigint")return et=et.get(ct)||null,U(Z,et,""+bt,Kt);if(typeof bt=="object"&&bt!==null){switch(bt.$$typeof){case x:return et=et.get(bt.key===null?ct:bt.key)||null,X(Z,et,bt,Kt);case M:return et=et.get(bt.key===null?ct:bt.key)||null,ut(Z,et,bt,Kt);case K:var we=bt._init;return bt=we(bt._payload),dt(et,Z,ct,bt,Kt)}if(xt(bt)||gt(bt))return et=et.get(ct)||null,St(Z,et,bt,Kt,null);if(typeof bt.then=="function")return dt(et,Z,ct,kl(bt),Kt);if(bt.$$typeof===H)return dt(et,Z,ct,Dl(Z,bt),Kt);Xl(Z,bt)}return null}function ve(et,Z,ct,bt){for(var Kt=null,we=null,ae=Z,pe=Z=0,Hn=null;ae!==null&&pe<ct.length;pe++){ae.index>pe?(Hn=ae,ae=null):Hn=ae.sibling;var ke=ht(et,ae,ct[pe],bt);if(ke===null){ae===null&&(ae=Hn);break}e&&ae&&ke.alternate===null&&n(et,ae),Z=h(ke,Z,pe),we===null?Kt=ke:we.sibling=ke,we=ke,ae=Hn}if(pe===ct.length)return a(et,ae),qe&&Ur(et,pe),Kt;if(ae===null){for(;pe<ct.length;pe++)ae=wt(et,ct[pe],bt),ae!==null&&(Z=h(ae,Z,pe),we===null?Kt=ae:we.sibling=ae,we=ae);return qe&&Ur(et,pe),Kt}for(ae=s(ae);pe<ct.length;pe++)Hn=dt(ae,et,pe,ct[pe],bt),Hn!==null&&(e&&Hn.alternate!==null&&ae.delete(Hn.key===null?pe:Hn.key),Z=h(Hn,Z,pe),we===null?Kt=Hn:we.sibling=Hn,we=Hn);return e&&ae.forEach(function(fr){return n(et,fr)}),qe&&Ur(et,pe),Kt}function he(et,Z,ct,bt){if(ct==null)throw Error(r(151));for(var Kt=null,we=null,ae=Z,pe=Z=0,Hn=null,ke=ct.next();ae!==null&&!ke.done;pe++,ke=ct.next()){ae.index>pe?(Hn=ae,ae=null):Hn=ae.sibling;var fr=ht(et,ae,ke.value,bt);if(fr===null){ae===null&&(ae=Hn);break}e&&ae&&fr.alternate===null&&n(et,ae),Z=h(fr,Z,pe),we===null?Kt=fr:we.sibling=fr,we=fr,ae=Hn}if(ke.done)return a(et,ae),qe&&Ur(et,pe),Kt;if(ae===null){for(;!ke.done;pe++,ke=ct.next())ke=wt(et,ke.value,bt),ke!==null&&(Z=h(ke,Z,pe),we===null?Kt=ke:we.sibling=ke,we=ke);return qe&&Ur(et,pe),Kt}for(ae=s(ae);!ke.done;pe++,ke=ct.next())ke=dt(ae,et,pe,ke.value,bt),ke!==null&&(e&&ke.alternate!==null&&ae.delete(ke.key===null?pe:ke.key),Z=h(ke,Z,pe),we===null?Kt=ke:we.sibling=ke,we=ke);return e&&ae.forEach(function(_S){return n(et,_S)}),qe&&Ur(et,pe),Kt}function nn(et,Z,ct,bt){if(typeof ct=="object"&&ct!==null&&ct.type===A&&ct.key===null&&(ct=ct.props.children),typeof ct=="object"&&ct!==null){switch(ct.$$typeof){case x:t:{for(var Kt=ct.key;Z!==null;){if(Z.key===Kt){if(Kt=ct.type,Kt===A){if(Z.tag===7){a(et,Z.sibling),bt=u(Z,ct.props.children),bt.return=et,et=bt;break t}}else if(Z.elementType===Kt||typeof Kt=="object"&&Kt!==null&&Kt.$$typeof===K&&Am(Kt)===Z.type){a(et,Z.sibling),bt=u(Z,ct.props),Oo(bt,ct),bt.return=et,et=bt;break t}a(et,Z);break}else n(et,Z);Z=Z.sibling}ct.type===A?(bt=Cr(ct.props.children,et.mode,bt,ct.key),bt.return=et,et=bt):(bt=Al(ct.type,ct.key,ct.props,null,et.mode,bt),Oo(bt,ct),bt.return=et,et=bt)}return T(et);case M:t:{for(Kt=ct.key;Z!==null;){if(Z.key===Kt)if(Z.tag===4&&Z.stateNode.containerInfo===ct.containerInfo&&Z.stateNode.implementation===ct.implementation){a(et,Z.sibling),bt=u(Z,ct.children||[]),bt.return=et,et=bt;break t}else{a(et,Z);break}else n(et,Z);Z=Z.sibling}bt=Cu(ct,et.mode,bt),bt.return=et,et=bt}return T(et);case K:return Kt=ct._init,ct=Kt(ct._payload),nn(et,Z,ct,bt)}if(xt(ct))return ve(et,Z,ct,bt);if(gt(ct)){if(Kt=gt(ct),typeof Kt!="function")throw Error(r(150));return ct=Kt.call(ct),he(et,Z,ct,bt)}if(typeof ct.then=="function")return nn(et,Z,kl(ct),bt);if(ct.$$typeof===H)return nn(et,Z,Dl(et,ct),bt);Xl(et,ct)}return typeof ct=="string"&&ct!==""||typeof ct=="number"||typeof ct=="bigint"?(ct=""+ct,Z!==null&&Z.tag===6?(a(et,Z.sibling),bt=u(Z,ct),bt.return=et,et=bt):(a(et,Z),bt=wu(ct,et.mode,bt),bt.return=et,et=bt),T(et)):a(et,Z)}return function(et,Z,ct,bt){try{No=0;var Kt=nn(et,Z,ct,bt);return bs=null,Kt}catch(ae){if(ae===bo||ae===Ll)throw ae;var we=gi(29,ae,null,et.mode);return we.lanes=bt,we.return=et,we}finally{}}}var Ts=Rm(!0),wm=Rm(!1),Ui=rt(null),sa=null;function Ka(e){var n=e.alternate;Dt(Nn,Nn.current&1),Dt(Ui,e),sa===null&&(n===null||Ss.current!==null||n.memoizedState!==null)&&(sa=e)}function Cm(e){if(e.tag===22){if(Dt(Nn,Nn.current),Dt(Ui,e),sa===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&(sa=e)}}else Qa()}function Qa(){Dt(Nn,Nn.current),Dt(Ui,Ui.current)}function Ta(e){Tt(Ui),sa===e&&(sa=null),Tt(Nn)}var Nn=rt(0);function Wl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Jf(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function cf(e,n,a,s){n=e.memoizedState,a=a(s,n),a=a==null?n:v({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var uf={enqueueSetState:function(e,n,a){e=e._reactInternals;var s=Si(),u=Ya(s);u.payload=n,a!=null&&(u.callback=a),n=ja(e,u,s),n!==null&&(xi(n,e,s),Ao(n,e,s))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var s=Si(),u=Ya(s);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=ja(e,u,s),n!==null&&(xi(n,e,s),Ao(n,e,s))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=Si(),s=Ya(a);s.tag=2,n!=null&&(s.callback=n),n=ja(e,s,a),n!==null&&(xi(n,e,a),Ao(n,e,a))}};function Dm(e,n,a,s,u,h,T){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,h,T):n.prototype&&n.prototype.isPureReactComponent?!go(a,s)||!go(u,h):!0}function Um(e,n,a,s){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==e&&uf.enqueueReplaceState(n,n.state,null)}function zr(e,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(e=e.defaultProps){a===n&&(a=v({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}var ql=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Lm(e){ql(e)}function Nm(e){console.error(e)}function Om(e){ql(e)}function Yl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function Pm(e,n,a){try{var s=e.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function ff(e,n,a){return a=Ya(a),a.tag=3,a.payload={element:null},a.callback=function(){Yl(e,n)},a}function Bm(e){return e=Ya(e),e.tag=3,e}function Fm(e,n,a,s){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var h=s.value;e.payload=function(){return u(h)},e.callback=function(){Pm(n,a,s)}}var T=a.stateNode;T!==null&&typeof T.componentDidCatch=="function"&&(e.callback=function(){Pm(n,a,s),typeof u!="function"&&(ir===null?ir=new Set([this]):ir.add(this));var U=s.stack;this.componentDidCatch(s.value,{componentStack:U!==null?U:""})})}function _y(e,n,a,s,u){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&xo(n,a,u,!0),a=Ui.current,a!==null){switch(a.tag){case 13:return sa===null?Pf():a.alternate===null&&vn===0&&(vn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,s===Iu?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),Ff(e,s,u)),!1;case 22:return a.flags|=65536,s===Iu?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),Ff(e,s,u)),!1}throw Error(r(435,a.tag))}return Ff(e,s,u),Pf(),!1}if(qe)return n=Ui.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,s!==Lu&&(e=Error(r(422),{cause:s}),So(Ri(e,a)))):(s!==Lu&&(n=Error(r(423),{cause:s}),So(Ri(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,s=Ri(s,a),u=ff(e.stateNode,s,u),Vu(e,u),vn!==4&&(vn=2)),!1;var h=Error(r(520),{cause:s});if(h=Ri(h,a),Go===null?Go=[h]:Go.push(h),vn!==4&&(vn=2),n===null)return!0;s=Ri(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=ff(a.stateNode,s,e),Vu(a,e),!1;case 1:if(n=a.type,h=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(ir===null||!ir.has(h))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Bm(u),Fm(u,e,a,s),Vu(a,u),!1}a=a.return}while(a!==null);return!1}var zm=Error(r(461)),zn=!1;function Xn(e,n,a,s){n.child=e===null?wm(n,null,a,s):Ts(n,e.child,a,s)}function Im(e,n,a,s,u){a=a.render;var h=n.ref;if("ref"in s){var T={};for(var U in s)U!=="ref"&&(T[U]=s[U])}else T=s;return Pr(n),s=Yu(e,n,a,T,h,u),U=ju(),e!==null&&!zn?(Zu(e,n,u),Aa(e,n,u)):(qe&&U&&Du(n),n.flags|=1,Xn(e,n,s,u),n.child)}function Hm(e,n,a,s,u){if(e===null){var h=a.type;return typeof h=="function"&&!Ru(h)&&h.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=h,Gm(e,n,h,s,u)):(e=Al(a.type,null,s,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(h=e.child,!yf(e,u)){var T=h.memoizedProps;if(a=a.compare,a=a!==null?a:go,a(T,s)&&e.ref===n.ref)return Aa(e,n,u)}return n.flags|=1,e=ya(h,s),e.ref=n.ref,e.return=n,n.child=e}function Gm(e,n,a,s,u){if(e!==null){var h=e.memoizedProps;if(go(h,s)&&e.ref===n.ref)if(zn=!1,n.pendingProps=s=h,yf(e,u))(e.flags&131072)!==0&&(zn=!0);else return n.lanes=e.lanes,Aa(e,n,u)}return hf(e,n,a,s,u)}function Vm(e,n,a){var s=n.pendingProps,u=s.children,h=e!==null?e.memoizedState:null;if(s.mode==="hidden"){if((n.flags&128)!==0){if(s=h!==null?h.baseLanes|a:a,e!==null){for(u=n.child=e.child,h=0;u!==null;)h=h|u.lanes|u.childLanes,u=u.sibling;n.childLanes=h&~s}else n.childLanes=0,n.child=null;return km(e,n,s,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ul(n,h!==null?h.cachePool:null),h!==null?Gp(n,h):Xu(),Cm(n);else return n.lanes=n.childLanes=536870912,km(e,n,h!==null?h.baseLanes|a:a,a)}else h!==null?(Ul(n,h.cachePool),Gp(n,h),Qa(),n.memoizedState=null):(e!==null&&Ul(n,null),Xu(),Qa());return Xn(e,n,u,a),n.child}function km(e,n,a,s){var u=zu();return u=u===null?null:{parent:Ln._currentValue,pool:u},n.memoizedState={baseLanes:a,cachePool:u},e!==null&&Ul(n,null),Xu(),Cm(n),e!==null&&xo(e,n,s,!0),null}function jl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function hf(e,n,a,s,u){return Pr(n),a=Yu(e,n,a,s,void 0,u),s=ju(),e!==null&&!zn?(Zu(e,n,u),Aa(e,n,u)):(qe&&s&&Du(n),n.flags|=1,Xn(e,n,a,u),n.child)}function Xm(e,n,a,s,u,h){return Pr(n),n.updateQueue=null,a=kp(n,s,a,u),Vp(e),s=ju(),e!==null&&!zn?(Zu(e,n,h),Aa(e,n,h)):(qe&&s&&Du(n),n.flags|=1,Xn(e,n,a,h),n.child)}function Wm(e,n,a,s,u){if(Pr(n),n.stateNode===null){var h=ms,T=a.contextType;typeof T=="object"&&T!==null&&(h=Qn(T)),h=new a(s,h),n.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=uf,n.stateNode=h,h._reactInternals=n,h=n.stateNode,h.props=s,h.state=n.memoizedState,h.refs={},Hu(n),T=a.contextType,h.context=typeof T=="object"&&T!==null?Qn(T):ms,h.state=n.memoizedState,T=a.getDerivedStateFromProps,typeof T=="function"&&(cf(n,a,T,s),h.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(T=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),T!==h.state&&uf.enqueueReplaceState(h,h.state,null),wo(n,s,h,u),Ro(),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(e===null){h=n.stateNode;var U=n.memoizedProps,X=zr(a,U);h.props=X;var ut=h.context,St=a.contextType;T=ms,typeof St=="object"&&St!==null&&(T=Qn(St));var wt=a.getDerivedStateFromProps;St=typeof wt=="function"||typeof h.getSnapshotBeforeUpdate=="function",U=n.pendingProps!==U,St||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(U||ut!==T)&&Um(n,h,s,T),qa=!1;var ht=n.memoizedState;h.state=ht,wo(n,s,h,u),Ro(),ut=n.memoizedState,U||ht!==ut||qa?(typeof wt=="function"&&(cf(n,a,wt,s),ut=n.memoizedState),(X=qa||Dm(n,a,X,s,ht,ut,T))?(St||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(n.flags|=4194308)):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=ut),h.props=s,h.state=ut,h.context=T,s=X):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{h=n.stateNode,Gu(e,n),T=n.memoizedProps,St=zr(a,T),h.props=St,wt=n.pendingProps,ht=h.context,ut=a.contextType,X=ms,typeof ut=="object"&&ut!==null&&(X=Qn(ut)),U=a.getDerivedStateFromProps,(ut=typeof U=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(T!==wt||ht!==X)&&Um(n,h,s,X),qa=!1,ht=n.memoizedState,h.state=ht,wo(n,s,h,u),Ro();var dt=n.memoizedState;T!==wt||ht!==dt||qa||e!==null&&e.dependencies!==null&&Cl(e.dependencies)?(typeof U=="function"&&(cf(n,a,U,s),dt=n.memoizedState),(St=qa||Dm(n,a,St,s,ht,dt,X)||e!==null&&e.dependencies!==null&&Cl(e.dependencies))?(ut||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(s,dt,X),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(s,dt,X)),typeof h.componentDidUpdate=="function"&&(n.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof h.componentDidUpdate!="function"||T===e.memoizedProps&&ht===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||T===e.memoizedProps&&ht===e.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=dt),h.props=s,h.state=dt,h.context=X,s=St):(typeof h.componentDidUpdate!="function"||T===e.memoizedProps&&ht===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||T===e.memoizedProps&&ht===e.memoizedState||(n.flags|=1024),s=!1)}return h=s,jl(e,n),s=(n.flags&128)!==0,h||s?(h=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:h.render(),n.flags|=1,e!==null&&s?(n.child=Ts(n,e.child,null,u),n.child=Ts(n,null,a,u)):Xn(e,n,a,u),n.memoizedState=h.state,e=n.child):e=Aa(e,n,u),e}function qm(e,n,a,s){return yo(),n.flags|=256,Xn(e,n,a,s),n.child}var df={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function pf(e){return{baseLanes:e,cachePool:Np()}}function mf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=Li),e}function Ym(e,n,a){var s=n.pendingProps,u=!1,h=(n.flags&128)!==0,T;if((T=h)||(T=e!==null&&e.memoizedState===null?!1:(Nn.current&2)!==0),T&&(u=!0,n.flags&=-129),T=(n.flags&32)!==0,n.flags&=-33,e===null){if(qe){if(u?Ka(n):Qa(),qe){var U=_n,X;if(X=U){t:{for(X=U,U=ra;X.nodeType!==8;){if(!U){U=null;break t}if(X=Xi(X.nextSibling),X===null){U=null;break t}}U=X}U!==null?(n.memoizedState={dehydrated:U,treeContext:Dr!==null?{id:Sa,overflow:xa}:null,retryLane:536870912,hydrationErrors:null},X=gi(18,null,null,0),X.stateNode=U,X.return=n,n.child=X,ni=n,_n=null,X=!0):X=!1}X||Nr(n)}if(U=n.memoizedState,U!==null&&(U=U.dehydrated,U!==null))return Jf(U)?n.lanes=32:n.lanes=536870912,null;Ta(n)}return U=s.children,s=s.fallback,u?(Qa(),u=n.mode,U=Zl({mode:"hidden",children:U},u),s=Cr(s,u,a,null),U.return=n,s.return=n,U.sibling=s,n.child=U,u=n.child,u.memoizedState=pf(a),u.childLanes=mf(e,T,a),n.memoizedState=df,s):(Ka(n),gf(n,U))}if(X=e.memoizedState,X!==null&&(U=X.dehydrated,U!==null)){if(h)n.flags&256?(Ka(n),n.flags&=-257,n=_f(e,n,a)):n.memoizedState!==null?(Qa(),n.child=e.child,n.flags|=128,n=null):(Qa(),u=s.fallback,U=n.mode,s=Zl({mode:"visible",children:s.children},U),u=Cr(u,U,a,null),u.flags|=2,s.return=n,u.return=n,s.sibling=u,n.child=s,Ts(n,e.child,null,a),s=n.child,s.memoizedState=pf(a),s.childLanes=mf(e,T,a),n.memoizedState=df,n=u);else if(Ka(n),Jf(U)){if(T=U.nextSibling&&U.nextSibling.dataset,T)var ut=T.dgst;T=ut,s=Error(r(419)),s.stack="",s.digest=T,So({value:s,source:null,stack:null}),n=_f(e,n,a)}else if(zn||xo(e,n,a,!1),T=(a&e.childLanes)!==0,zn||T){if(T=on,T!==null&&(s=a&-a,s=(s&42)!==0?1:$e(s),s=(s&(T.suspendedLanes|a))!==0?0:s,s!==0&&s!==X.retryLane))throw X.retryLane=s,ps(e,s),xi(T,e,s),zm;U.data==="$?"||Pf(),n=_f(e,n,a)}else U.data==="$?"?(n.flags|=192,n.child=e.child,n=null):(e=X.treeContext,_n=Xi(U.nextSibling),ni=n,qe=!0,Lr=null,ra=!1,e!==null&&(Ci[Di++]=Sa,Ci[Di++]=xa,Ci[Di++]=Dr,Sa=e.id,xa=e.overflow,Dr=n),n=gf(n,s.children),n.flags|=4096);return n}return u?(Qa(),u=s.fallback,U=n.mode,X=e.child,ut=X.sibling,s=ya(X,{mode:"hidden",children:s.children}),s.subtreeFlags=X.subtreeFlags&65011712,ut!==null?u=ya(ut,u):(u=Cr(u,U,a,null),u.flags|=2),u.return=n,s.return=n,s.sibling=u,n.child=s,s=u,u=n.child,U=e.child.memoizedState,U===null?U=pf(a):(X=U.cachePool,X!==null?(ut=Ln._currentValue,X=X.parent!==ut?{parent:ut,pool:ut}:X):X=Np(),U={baseLanes:U.baseLanes|a,cachePool:X}),u.memoizedState=U,u.childLanes=mf(e,T,a),n.memoizedState=df,s):(Ka(n),a=e.child,e=a.sibling,a=ya(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,e!==null&&(T=n.deletions,T===null?(n.deletions=[e],n.flags|=16):T.push(e)),n.child=a,n.memoizedState=null,a)}function gf(e,n){return n=Zl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Zl(e,n){return e=gi(22,e,null,n),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function _f(e,n,a){return Ts(n,e.child,null,a),e=gf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function jm(e,n,a){e.lanes|=n;var s=e.alternate;s!==null&&(s.lanes|=n),Ou(e.return,n,a)}function vf(e,n,a,s,u){var h=e.memoizedState;h===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:u}:(h.isBackwards=n,h.rendering=null,h.renderingStartTime=0,h.last=s,h.tail=a,h.tailMode=u)}function Zm(e,n,a){var s=n.pendingProps,u=s.revealOrder,h=s.tail;if(Xn(e,n,s.children,a),s=Nn.current,(s&2)!==0)s=s&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&jm(e,a,n);else if(e.tag===19)jm(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}s&=1}switch(Dt(Nn,s),u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&Wl(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),vf(n,!1,u,a,h);break;case"backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&Wl(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}vf(n,!0,a,null,h);break;case"together":vf(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Aa(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),nr|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(xo(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,a=ya(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=ya(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function yf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Cl(e)))}function vy(e,n,a){switch(n.tag){case 3:Ot(n,n.stateNode.containerInfo),Wa(n,Ln,e.memoizedState.cache),yo();break;case 27:case 5:te(n);break;case 4:Ot(n,n.stateNode.containerInfo);break;case 10:Wa(n,n.type,n.memoizedProps.value);break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(Ka(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Ym(e,n,a):(Ka(n),e=Aa(e,n,a),e!==null?e.sibling:null);Ka(n);break;case 19:var u=(e.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(xo(e,n,a,!1),s=(a&n.childLanes)!==0),u){if(s)return Zm(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Dt(Nn,Nn.current),s)break;return null;case 22:case 23:return n.lanes=0,Vm(e,n,a);case 24:Wa(n,Ln,e.memoizedState.cache)}return Aa(e,n,a)}function Km(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)zn=!0;else{if(!yf(e,a)&&(n.flags&128)===0)return zn=!1,vy(e,n,a);zn=(e.flags&131072)!==0}else zn=!1,qe&&(n.flags&1048576)!==0&&Ap(n,wl,n.index);switch(n.lanes=0,n.tag){case 16:t:{e=n.pendingProps;var s=n.elementType,u=s._init;if(s=u(s._payload),n.type=s,typeof s=="function")Ru(s)?(e=zr(s,e),n.tag=1,n=Wm(null,n,s,e,a)):(n.tag=0,n=hf(null,n,s,e,a));else{if(s!=null){if(u=s.$$typeof,u===O){n.tag=11,n=Im(null,n,s,e,a);break t}else if(u===k){n.tag=14,n=Hm(null,n,s,e,a);break t}}throw n=vt(s)||s,Error(r(306,n,""))}}return n;case 0:return hf(e,n,n.type,n.pendingProps,a);case 1:return s=n.type,u=zr(s,n.pendingProps),Wm(e,n,s,u,a);case 3:t:{if(Ot(n,n.stateNode.containerInfo),e===null)throw Error(r(387));s=n.pendingProps;var h=n.memoizedState;u=h.element,Gu(e,n),wo(n,s,null,a);var T=n.memoizedState;if(s=T.cache,Wa(n,Ln,s),s!==h.cache&&Pu(n,[Ln],a,!0),Ro(),s=T.element,h.isDehydrated)if(h={element:s,isDehydrated:!1,cache:T.cache},n.updateQueue.baseState=h,n.memoizedState=h,n.flags&256){n=qm(e,n,s,a);break t}else if(s!==u){u=Ri(Error(r(424)),n),So(u),n=qm(e,n,s,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(_n=Xi(e.firstChild),ni=n,qe=!0,Lr=null,ra=!0,a=wm(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(yo(),s===u){n=Aa(e,n,a);break t}Xn(e,n,s,a)}n=n.child}return n;case 26:return jl(e,n),e===null?(a=t_(n.type,null,n.pendingProps,null))?n.memoizedState=a:qe||(a=n.type,e=n.pendingProps,s=cc(Ct.current).createElement(a),s[Sn]=n,s[Dn]=e,qn(s,a,e),mn(s),n.stateNode=s):n.memoizedState=t_(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return te(n),e===null&&qe&&(s=n.stateNode=Qg(n.type,n.pendingProps,Ct.current),ni=n,ra=!0,u=_n,sr(n.type)?($f=u,_n=Xi(s.firstChild)):_n=u),Xn(e,n,n.pendingProps.children,a),jl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&qe&&((u=s=_n)&&(s=qy(s,n.type,n.pendingProps,ra),s!==null?(n.stateNode=s,ni=n,_n=Xi(s.firstChild),ra=!1,u=!0):u=!1),u||Nr(n)),te(n),u=n.type,h=n.pendingProps,T=e!==null?e.memoizedProps:null,s=h.children,Zf(u,h)?s=null:T!==null&&Zf(u,T)&&(n.flags|=32),n.memoizedState!==null&&(u=Yu(e,n,uy,null,null,a),Ko._currentValue=u),jl(e,n),Xn(e,n,s,a),n.child;case 6:return e===null&&qe&&((e=a=_n)&&(a=Yy(a,n.pendingProps,ra),a!==null?(n.stateNode=a,ni=n,_n=null,e=!0):e=!1),e||Nr(n)),null;case 13:return Ym(e,n,a);case 4:return Ot(n,n.stateNode.containerInfo),s=n.pendingProps,e===null?n.child=Ts(n,null,s,a):Xn(e,n,s,a),n.child;case 11:return Im(e,n,n.type,n.pendingProps,a);case 7:return Xn(e,n,n.pendingProps,a),n.child;case 8:return Xn(e,n,n.pendingProps.children,a),n.child;case 12:return Xn(e,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,Wa(n,n.type,s.value),Xn(e,n,s.children,a),n.child;case 9:return u=n.type._context,s=n.pendingProps.children,Pr(n),u=Qn(u),s=s(u),n.flags|=1,Xn(e,n,s,a),n.child;case 14:return Hm(e,n,n.type,n.pendingProps,a);case 15:return Gm(e,n,n.type,n.pendingProps,a);case 19:return Zm(e,n,a);case 31:return s=n.pendingProps,a=n.mode,s={mode:s.mode,children:s.children},e===null?(a=Zl(s,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=ya(e.child,s),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return Vm(e,n,a);case 24:return Pr(n),s=Qn(Ln),e===null?(u=zu(),u===null&&(u=on,h=Bu(),u.pooledCache=h,h.refCount++,h!==null&&(u.pooledCacheLanes|=a),u=h),n.memoizedState={parent:s,cache:u},Hu(n),Wa(n,Ln,u)):((e.lanes&a)!==0&&(Gu(e,n),wo(n,null,null,a),Ro()),u=e.memoizedState,h=n.memoizedState,u.parent!==s?(u={parent:s,cache:s},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Wa(n,Ln,s)):(s=h.cache,Wa(n,Ln,s),s!==u.cache&&Pu(n,[Ln],a,!0))),Xn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Ra(e){e.flags|=4}function Qm(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!r_(n)){if(n=Ui.current,n!==null&&((Ve&4194048)===Ve?sa!==null:(Ve&62914560)!==Ve&&(Ve&536870912)===0||n!==sa))throw To=Iu,Op;e.flags|=8192}}function Kl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Ht():536870912,e.lanes|=n,Cs|=n)}function Po(e,n){if(!qe)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function dn(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,s=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags&65011712,s|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags,s|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=s,e.childLanes=a,n}function yy(e,n,a){var s=n.pendingProps;switch(Uu(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return dn(n),null;case 1:return dn(n),null;case 3:return a=n.stateNode,s=null,e!==null&&(s=e.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Ma(Ln),fe(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(vo(n)?Ra(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Cp())),dn(n),null;case 26:return a=n.memoizedState,e===null?(Ra(n),a!==null?(dn(n),Qm(n,a)):(dn(n),n.flags&=-16777217)):a?a!==e.memoizedState?(Ra(n),dn(n),Qm(n,a)):(dn(n),n.flags&=-16777217):(e.memoizedProps!==s&&Ra(n),dn(n),n.flags&=-16777217),null;case 27:We(n),a=Ct.current;var u=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==s&&Ra(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return dn(n),null}e=at.current,vo(n)?Rp(n):(e=Qg(u,s,a),n.stateNode=e,Ra(n))}return dn(n),null;case 5:if(We(n),a=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==s&&Ra(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return dn(n),null}if(e=at.current,vo(n))Rp(n);else{switch(u=cc(Ct.current),e){case 1:e=u.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=u.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=u.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof s.is=="string"?u.createElement("select",{is:s.is}):u.createElement("select"),s.multiple?e.multiple=!0:s.size&&(e.size=s.size);break;default:e=typeof s.is=="string"?u.createElement(a,{is:s.is}):u.createElement(a)}}e[Sn]=n,e[Dn]=s;t:for(u=n.child;u!==null;){if(u.tag===5||u.tag===6)e.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===n)break t;for(;u.sibling===null;){if(u.return===null||u.return===n)break t;u=u.return}u.sibling.return=u.return,u=u.sibling}n.stateNode=e;t:switch(qn(e,a,s),a){case"button":case"input":case"select":case"textarea":e=!!s.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&Ra(n)}}return dn(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==s&&Ra(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(e=Ct.current,vo(n)){if(e=n.stateNode,a=n.memoizedProps,s=null,u=ni,u!==null)switch(u.tag){case 27:case 5:s=u.memoizedProps}e[Sn]=n,e=!!(e.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||Xg(e.nodeValue,a)),e||Nr(n)}else e=cc(e).createTextNode(s),e[Sn]=n,n.stateNode=e}return dn(n),null;case 13:if(s=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=vo(n),s!==null&&s.dehydrated!==null){if(e===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[Sn]=n}else yo(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;dn(n),u=!1}else u=Cp(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Ta(n),n):(Ta(n),null)}if(Ta(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=s!==null,e=e!==null&&e.memoizedState!==null,a){s=n.child,u=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(u=s.alternate.memoizedState.cachePool.pool);var h=null;s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(h=s.memoizedState.cachePool.pool),h!==u&&(s.flags|=2048)}return a!==e&&a&&(n.child.flags|=8192),Kl(n,n.updateQueue),dn(n),null;case 4:return fe(),e===null&&Xf(n.stateNode.containerInfo),dn(n),null;case 10:return Ma(n.type),dn(n),null;case 19:if(Tt(Nn),u=n.memoizedState,u===null)return dn(n),null;if(s=(n.flags&128)!==0,h=u.rendering,h===null)if(s)Po(u,!1);else{if(vn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(h=Wl(e),h!==null){for(n.flags|=128,Po(u,!1),e=h.updateQueue,n.updateQueue=e,Kl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Tp(a,e),a=a.sibling;return Dt(Nn,Nn.current&1|2),n.child}e=e.sibling}u.tail!==null&&me()>$l&&(n.flags|=128,s=!0,Po(u,!1),n.lanes=4194304)}else{if(!s)if(e=Wl(h),e!==null){if(n.flags|=128,s=!0,e=e.updateQueue,n.updateQueue=e,Kl(n,e),Po(u,!0),u.tail===null&&u.tailMode==="hidden"&&!h.alternate&&!qe)return dn(n),null}else 2*me()-u.renderingStartTime>$l&&a!==536870912&&(n.flags|=128,s=!0,Po(u,!1),n.lanes=4194304);u.isBackwards?(h.sibling=n.child,n.child=h):(e=u.last,e!==null?e.sibling=h:n.child=h,u.last=h)}return u.tail!==null?(n=u.tail,u.rendering=n,u.tail=n.sibling,u.renderingStartTime=me(),n.sibling=null,e=Nn.current,Dt(Nn,s?e&1|2:e&1),n):(dn(n),null);case 22:case 23:return Ta(n),Wu(),s=n.memoizedState!==null,e!==null?e.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(dn(n),n.subtreeFlags&6&&(n.flags|=8192)):dn(n),a=n.updateQueue,a!==null&&Kl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),e!==null&&Tt(Br),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Ma(Ln),dn(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function Sy(e,n){switch(Uu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Ma(Ln),fe(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return We(n),null;case 13:if(Ta(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));yo()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return Tt(Nn),null;case 4:return fe(),null;case 10:return Ma(n.type),null;case 22:case 23:return Ta(n),Wu(),e!==null&&Tt(Br),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Ma(Ln),null;case 25:return null;default:return null}}function Jm(e,n){switch(Uu(n),n.tag){case 3:Ma(Ln),fe();break;case 26:case 27:case 5:We(n);break;case 4:fe();break;case 13:Ta(n);break;case 19:Tt(Nn);break;case 10:Ma(n.type);break;case 22:case 23:Ta(n),Wu(),e!==null&&Tt(Br);break;case 24:Ma(Ln)}}function Bo(e,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var u=s.next;a=u;do{if((a.tag&e)===e){s=void 0;var h=a.create,T=a.inst;s=h(),T.destroy=s}a=a.next}while(a!==u)}}catch(U){sn(n,n.return,U)}}function Ja(e,n,a){try{var s=n.updateQueue,u=s!==null?s.lastEffect:null;if(u!==null){var h=u.next;s=h;do{if((s.tag&e)===e){var T=s.inst,U=T.destroy;if(U!==void 0){T.destroy=void 0,u=n;var X=a,ut=U;try{ut()}catch(St){sn(u,X,St)}}}s=s.next}while(s!==h)}}catch(St){sn(n,n.return,St)}}function $m(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Hp(n,a)}catch(s){sn(e,e.return,s)}}}function tg(e,n,a){a.props=zr(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(s){sn(e,n,s)}}function Fo(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var s=e.stateNode;break;case 30:s=e.stateNode;break;default:s=e.stateNode}typeof a=="function"?e.refCleanup=a(s):a.current=s}}catch(u){sn(e,n,u)}}function oa(e,n){var a=e.ref,s=e.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(u){sn(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){sn(e,n,u)}else a.current=null}function eg(e){var n=e.type,a=e.memoizedProps,s=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(u){sn(e,e.return,u)}}function Sf(e,n,a){try{var s=e.stateNode;Gy(s,e.type,a,n),s[Dn]=n}catch(u){sn(e,e.return,u)}}function ng(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&sr(e.type)||e.tag===4}function xf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||ng(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&sr(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ef(e,n,a){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=lc));else if(s!==4&&(s===27&&sr(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(Ef(e,n,a),e=e.sibling;e!==null;)Ef(e,n,a),e=e.sibling}function Ql(e,n,a){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(s!==4&&(s===27&&sr(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Ql(e,n,a),e=e.sibling;e!==null;)Ql(e,n,a),e=e.sibling}function ig(e){var n=e.stateNode,a=e.memoizedProps;try{for(var s=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);qn(n,s,a),n[Sn]=e,n[Dn]=a}catch(h){sn(e,e.return,h)}}var wa=!1,Mn=!1,Mf=!1,ag=typeof WeakSet=="function"?WeakSet:Set,In=null;function xy(e,n){if(e=e.containerInfo,Yf=mc,e=mp(e),Su(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var u=s.anchorOffset,h=s.focusNode;s=s.focusOffset;try{a.nodeType,h.nodeType}catch{a=null;break t}var T=0,U=-1,X=-1,ut=0,St=0,wt=e,ht=null;e:for(;;){for(var dt;wt!==a||u!==0&&wt.nodeType!==3||(U=T+u),wt!==h||s!==0&&wt.nodeType!==3||(X=T+s),wt.nodeType===3&&(T+=wt.nodeValue.length),(dt=wt.firstChild)!==null;)ht=wt,wt=dt;for(;;){if(wt===e)break e;if(ht===a&&++ut===u&&(U=T),ht===h&&++St===s&&(X=T),(dt=wt.nextSibling)!==null)break;wt=ht,ht=wt.parentNode}wt=dt}a=U===-1||X===-1?null:{start:U,end:X}}else a=null}a=a||{start:0,end:0}}else a=null;for(jf={focusedElem:e,selectionRange:a},mc=!1,In=n;In!==null;)if(n=In,e=n.child,(n.subtreeFlags&1024)!==0&&e!==null)e.return=n,In=e;else for(;In!==null;){switch(n=In,h=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&h!==null){e=void 0,a=n,u=h.memoizedProps,h=h.memoizedState,s=a.stateNode;try{var ve=zr(a.type,u,a.elementType===a.type);e=s.getSnapshotBeforeUpdate(ve,h),s.__reactInternalSnapshotBeforeUpdate=e}catch(he){sn(a,a.return,he)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Qf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Qf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=n.sibling,e!==null){e.return=n.return,In=e;break}In=n.return}}function rg(e,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:$a(e,a),s&4&&Bo(5,a);break;case 1:if($a(e,a),s&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(T){sn(a,a.return,T)}else{var u=zr(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(T){sn(a,a.return,T)}}s&64&&$m(a),s&512&&Fo(a,a.return);break;case 3:if($a(e,a),s&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Hp(e,n)}catch(T){sn(a,a.return,T)}}break;case 27:n===null&&s&4&&ig(a);case 26:case 5:$a(e,a),n===null&&s&4&&eg(a),s&512&&Fo(a,a.return);break;case 12:$a(e,a);break;case 13:$a(e,a),s&4&&lg(e,a),s&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Dy.bind(null,a),jy(e,a))));break;case 22:if(s=a.memoizedState!==null||wa,!s){n=n!==null&&n.memoizedState!==null||Mn,u=wa;var h=Mn;wa=s,(Mn=n)&&!h?tr(e,a,(a.subtreeFlags&8772)!==0):$a(e,a),wa=u,Mn=h}break;case 30:break;default:$a(e,a)}}function sg(e){var n=e.alternate;n!==null&&(e.alternate=null,sg(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&ta(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var fn=null,oi=!1;function Ca(e,n,a){for(a=a.child;a!==null;)og(e,n,a),a=a.sibling}function og(e,n,a){if(Wt&&typeof Wt.onCommitFiberUnmount=="function")try{Wt.onCommitFiberUnmount(yt,a)}catch{}switch(a.tag){case 26:Mn||oa(a,n),Ca(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Mn||oa(a,n);var s=fn,u=oi;sr(a.type)&&(fn=a.stateNode,oi=!1),Ca(e,n,a),qo(a.stateNode),fn=s,oi=u;break;case 5:Mn||oa(a,n);case 6:if(s=fn,u=oi,fn=null,Ca(e,n,a),fn=s,oi=u,fn!==null)if(oi)try{(fn.nodeType===9?fn.body:fn.nodeName==="HTML"?fn.ownerDocument.body:fn).removeChild(a.stateNode)}catch(h){sn(a,n,h)}else try{fn.removeChild(a.stateNode)}catch(h){sn(a,n,h)}break;case 18:fn!==null&&(oi?(e=fn,Zg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),tl(e)):Zg(fn,a.stateNode));break;case 4:s=fn,u=oi,fn=a.stateNode.containerInfo,oi=!0,Ca(e,n,a),fn=s,oi=u;break;case 0:case 11:case 14:case 15:Mn||Ja(2,a,n),Mn||Ja(4,a,n),Ca(e,n,a);break;case 1:Mn||(oa(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&tg(a,n,s)),Ca(e,n,a);break;case 21:Ca(e,n,a);break;case 22:Mn=(s=Mn)||a.memoizedState!==null,Ca(e,n,a),Mn=s;break;default:Ca(e,n,a)}}function lg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{tl(e)}catch(a){sn(n,n.return,a)}}function Ey(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new ag),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new ag),n;default:throw Error(r(435,e.tag))}}function bf(e,n){var a=Ey(e);n.forEach(function(s){var u=Uy.bind(null,e,s);a.has(s)||(a.add(s),s.then(u,u))})}function _i(e,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var u=a[s],h=e,T=n,U=T;t:for(;U!==null;){switch(U.tag){case 27:if(sr(U.type)){fn=U.stateNode,oi=!1;break t}break;case 5:fn=U.stateNode,oi=!1;break t;case 3:case 4:fn=U.stateNode.containerInfo,oi=!0;break t}U=U.return}if(fn===null)throw Error(r(160));og(h,T,u),fn=null,oi=!1,h=u.alternate,h!==null&&(h.return=null),u.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)cg(n,e),n=n.sibling}var ki=null;function cg(e,n){var a=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:_i(n,e),vi(e),s&4&&(Ja(3,e,e.return),Bo(3,e),Ja(5,e,e.return));break;case 1:_i(n,e),vi(e),s&512&&(Mn||a===null||oa(a,a.return)),s&64&&wa&&(e=e.updateQueue,e!==null&&(s=e.callbacks,s!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var u=ki;if(_i(n,e),vi(e),s&512&&(Mn||a===null||oa(a,a.return)),s&4){var h=a!==null?a.memoizedState:null;if(s=e.memoizedState,a===null)if(s===null)if(e.stateNode===null){t:{s=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(s){case"title":h=u.getElementsByTagName("title")[0],(!h||h[Fi]||h[Sn]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=u.createElement(s),u.head.insertBefore(h,u.querySelector("head > title"))),qn(h,s,a),h[Sn]=e,mn(h),s=h;break t;case"link":var T=i_("link","href",u).get(s+(a.href||""));if(T){for(var U=0;U<T.length;U++)if(h=T[U],h.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&h.getAttribute("rel")===(a.rel==null?null:a.rel)&&h.getAttribute("title")===(a.title==null?null:a.title)&&h.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){T.splice(U,1);break e}}h=u.createElement(s),qn(h,s,a),u.head.appendChild(h);break;case"meta":if(T=i_("meta","content",u).get(s+(a.content||""))){for(U=0;U<T.length;U++)if(h=T[U],h.getAttribute("content")===(a.content==null?null:""+a.content)&&h.getAttribute("name")===(a.name==null?null:a.name)&&h.getAttribute("property")===(a.property==null?null:a.property)&&h.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&h.getAttribute("charset")===(a.charSet==null?null:a.charSet)){T.splice(U,1);break e}}h=u.createElement(s),qn(h,s,a),u.head.appendChild(h);break;default:throw Error(r(468,s))}h[Sn]=e,mn(h),s=h}e.stateNode=s}else a_(u,e.type,e.stateNode);else e.stateNode=n_(u,s,e.memoizedProps);else h!==s?(h===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):h.count--,s===null?a_(u,e.type,e.stateNode):n_(u,s,e.memoizedProps)):s===null&&e.stateNode!==null&&Sf(e,e.memoizedProps,a.memoizedProps)}break;case 27:_i(n,e),vi(e),s&512&&(Mn||a===null||oa(a,a.return)),a!==null&&s&4&&Sf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(_i(n,e),vi(e),s&512&&(Mn||a===null||oa(a,a.return)),e.flags&32){u=e.stateNode;try{di(u,"")}catch(dt){sn(e,e.return,dt)}}s&4&&e.stateNode!=null&&(u=e.memoizedProps,Sf(e,u,a!==null?a.memoizedProps:u)),s&1024&&(Mf=!0);break;case 6:if(_i(n,e),vi(e),s&4){if(e.stateNode===null)throw Error(r(162));s=e.memoizedProps,a=e.stateNode;try{a.nodeValue=s}catch(dt){sn(e,e.return,dt)}}break;case 3:if(hc=null,u=ki,ki=uc(n.containerInfo),_i(n,e),ki=u,vi(e),s&4&&a!==null&&a.memoizedState.isDehydrated)try{tl(n.containerInfo)}catch(dt){sn(e,e.return,dt)}Mf&&(Mf=!1,ug(e));break;case 4:s=ki,ki=uc(e.stateNode.containerInfo),_i(n,e),vi(e),ki=s;break;case 12:_i(n,e),vi(e);break;case 13:_i(n,e),vi(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Df=me()),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,bf(e,s)));break;case 22:u=e.memoizedState!==null;var X=a!==null&&a.memoizedState!==null,ut=wa,St=Mn;if(wa=ut||u,Mn=St||X,_i(n,e),Mn=St,wa=ut,vi(e),s&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||X||wa||Mn||Ir(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){X=a=n;try{if(h=X.stateNode,u)T=h.style,typeof T.setProperty=="function"?T.setProperty("display","none","important"):T.display="none";else{U=X.stateNode;var wt=X.memoizedProps.style,ht=wt!=null&&wt.hasOwnProperty("display")?wt.display:null;U.style.display=ht==null||typeof ht=="boolean"?"":(""+ht).trim()}}catch(dt){sn(X,X.return,dt)}}}else if(n.tag===6){if(a===null){X=n;try{X.stateNode.nodeValue=u?"":X.memoizedProps}catch(dt){sn(X,X.return,dt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=e.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,bf(e,a))));break;case 19:_i(n,e),vi(e),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,bf(e,s)));break;case 30:break;case 21:break;default:_i(n,e),vi(e)}}function vi(e){var n=e.flags;if(n&2){try{for(var a,s=e.return;s!==null;){if(ng(s)){a=s;break}s=s.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,h=xf(e);Ql(e,h,u);break;case 5:var T=a.stateNode;a.flags&32&&(di(T,""),a.flags&=-33);var U=xf(e);Ql(e,U,T);break;case 3:case 4:var X=a.stateNode.containerInfo,ut=xf(e);Ef(e,ut,X);break;default:throw Error(r(161))}}catch(St){sn(e,e.return,St)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function ug(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;ug(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function $a(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)rg(e,n.alternate,n),n=n.sibling}function Ir(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Ja(4,n,n.return),Ir(n);break;case 1:oa(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&tg(n,n.return,a),Ir(n);break;case 27:qo(n.stateNode);case 26:case 5:oa(n,n.return),Ir(n);break;case 22:n.memoizedState===null&&Ir(n);break;case 30:Ir(n);break;default:Ir(n)}e=e.sibling}}function tr(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,u=e,h=n,T=h.flags;switch(h.tag){case 0:case 11:case 15:tr(u,h,a),Bo(4,h);break;case 1:if(tr(u,h,a),s=h,u=s.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(ut){sn(s,s.return,ut)}if(s=h,u=s.updateQueue,u!==null){var U=s.stateNode;try{var X=u.shared.hiddenCallbacks;if(X!==null)for(u.shared.hiddenCallbacks=null,u=0;u<X.length;u++)Ip(X[u],U)}catch(ut){sn(s,s.return,ut)}}a&&T&64&&$m(h),Fo(h,h.return);break;case 27:ig(h);case 26:case 5:tr(u,h,a),a&&s===null&&T&4&&eg(h),Fo(h,h.return);break;case 12:tr(u,h,a);break;case 13:tr(u,h,a),a&&T&4&&lg(u,h);break;case 22:h.memoizedState===null&&tr(u,h,a),Fo(h,h.return);break;case 30:break;default:tr(u,h,a)}n=n.sibling}}function Tf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Eo(a))}function Af(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Eo(e))}function la(e,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)fg(e,n,a,s),n=n.sibling}function fg(e,n,a,s){var u=n.flags;switch(n.tag){case 0:case 11:case 15:la(e,n,a,s),u&2048&&Bo(9,n);break;case 1:la(e,n,a,s);break;case 3:la(e,n,a,s),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Eo(e)));break;case 12:if(u&2048){la(e,n,a,s),e=n.stateNode;try{var h=n.memoizedProps,T=h.id,U=h.onPostCommit;typeof U=="function"&&U(T,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(X){sn(n,n.return,X)}}else la(e,n,a,s);break;case 13:la(e,n,a,s);break;case 23:break;case 22:h=n.stateNode,T=n.alternate,n.memoizedState!==null?h._visibility&2?la(e,n,a,s):zo(e,n):h._visibility&2?la(e,n,a,s):(h._visibility|=2,As(e,n,a,s,(n.subtreeFlags&10256)!==0)),u&2048&&Tf(T,n);break;case 24:la(e,n,a,s),u&2048&&Af(n.alternate,n);break;default:la(e,n,a,s)}}function As(e,n,a,s,u){for(u=u&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var h=e,T=n,U=a,X=s,ut=T.flags;switch(T.tag){case 0:case 11:case 15:As(h,T,U,X,u),Bo(8,T);break;case 23:break;case 22:var St=T.stateNode;T.memoizedState!==null?St._visibility&2?As(h,T,U,X,u):zo(h,T):(St._visibility|=2,As(h,T,U,X,u)),u&&ut&2048&&Tf(T.alternate,T);break;case 24:As(h,T,U,X,u),u&&ut&2048&&Af(T.alternate,T);break;default:As(h,T,U,X,u)}n=n.sibling}}function zo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,s=n,u=s.flags;switch(s.tag){case 22:zo(a,s),u&2048&&Tf(s.alternate,s);break;case 24:zo(a,s),u&2048&&Af(s.alternate,s);break;default:zo(a,s)}n=n.sibling}}var Io=8192;function Rs(e){if(e.subtreeFlags&Io)for(e=e.child;e!==null;)hg(e),e=e.sibling}function hg(e){switch(e.tag){case 26:Rs(e),e.flags&Io&&e.memoizedState!==null&&oS(ki,e.memoizedState,e.memoizedProps);break;case 5:Rs(e);break;case 3:case 4:var n=ki;ki=uc(e.stateNode.containerInfo),Rs(e),ki=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=Io,Io=16777216,Rs(e),Io=n):Rs(e));break;default:Rs(e)}}function dg(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Ho(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];In=s,mg(s,e)}dg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)pg(e),e=e.sibling}function pg(e){switch(e.tag){case 0:case 11:case 15:Ho(e),e.flags&2048&&Ja(9,e,e.return);break;case 3:Ho(e);break;case 12:Ho(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Jl(e)):Ho(e);break;default:Ho(e)}}function Jl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];In=s,mg(s,e)}dg(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Ja(8,n,n.return),Jl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Jl(n));break;default:Jl(n)}e=e.sibling}}function mg(e,n){for(;In!==null;){var a=In;switch(a.tag){case 0:case 11:case 15:Ja(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:Eo(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,In=s;else t:for(a=e;In!==null;){s=In;var u=s.sibling,h=s.return;if(sg(s),s===a){In=null;break t}if(u!==null){u.return=h,In=u;break t}In=h}}}var My={getCacheForType:function(e){var n=Qn(Ln),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a}},by=typeof WeakMap=="function"?WeakMap:Map,Qe=0,on=null,Ne=null,Ve=0,Je=0,yi=null,er=!1,ws=!1,Rf=!1,Da=0,vn=0,nr=0,Hr=0,wf=0,Li=0,Cs=0,Go=null,li=null,Cf=!1,Df=0,$l=1/0,tc=null,ir=null,Wn=0,ar=null,Ds=null,Us=0,Uf=0,Lf=null,gg=null,Vo=0,Nf=null;function Si(){if((Qe&2)!==0&&Ve!==0)return Ve&-Ve;if(V.T!==null){var e=vs;return e!==0?e:Hf()}return Fe()}function _g(){Li===0&&(Li=(Ve&536870912)===0||qe?Q():536870912);var e=Ui.current;return e!==null&&(e.flags|=32),Li}function xi(e,n,a){(e===on&&(Je===2||Je===9)||e.cancelPendingCommit!==null)&&(Ls(e,0),rr(e,Ve,Li,!1)),At(e,a),((Qe&2)===0||e!==on)&&(e===on&&((Qe&2)===0&&(Hr|=a),vn===4&&rr(e,Ve,Li,!1)),ca(e))}function vg(e,n,a){if((Qe&6)!==0)throw Error(r(327));var s=!a&&(n&124)===0&&(n&e.expiredLanes)===0||_e(e,n),u=s?Ry(e,n):Bf(e,n,!0),h=s;do{if(u===0){ws&&!s&&rr(e,n,0,!1);break}else{if(a=e.current.alternate,h&&!Ty(a)){u=Bf(e,n,!1),h=!1;continue}if(u===2){if(h=n,e.errorRecoveryDisabledLanes&h)var T=0;else T=e.pendingLanes&-536870913,T=T!==0?T:T&536870912?536870912:0;if(T!==0){n=T;t:{var U=e;u=Go;var X=U.current.memoizedState.isDehydrated;if(X&&(Ls(U,T).flags|=256),T=Bf(U,T,!1),T!==2){if(Rf&&!X){U.errorRecoveryDisabledLanes|=h,Hr|=h,u=4;break t}h=li,li=u,h!==null&&(li===null?li=h:li.push.apply(li,h))}u=T}if(h=!1,u!==2)continue}}if(u===1){Ls(e,0),rr(e,n,0,!0);break}t:{switch(s=e,h=u,h){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:rr(s,n,Li,!er);break t;case 2:li=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=Df+300-me(),10<u)){if(rr(s,n,Li,!er),ge(s,0,!0)!==0)break t;s.timeoutHandle=Yg(yg.bind(null,s,a,li,tc,Cf,n,Li,Hr,Cs,er,h,2,-0,0),u);break t}yg(s,a,li,tc,Cf,n,Li,Hr,Cs,er,h,0,-0,0)}}break}while(!0);ca(e)}function yg(e,n,a,s,u,h,T,U,X,ut,St,wt,ht,dt){if(e.timeoutHandle=-1,wt=n.subtreeFlags,(wt&8192||(wt&16785408)===16785408)&&(Zo={stylesheets:null,count:0,unsuspend:sS},hg(n),wt=lS(),wt!==null)){e.cancelPendingCommit=wt(Ag.bind(null,e,n,h,a,s,u,T,U,X,St,1,ht,dt)),rr(e,h,T,!ut);return}Ag(e,n,h,a,s,u,T,U,X)}function Ty(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var u=a[s],h=u.getSnapshot;u=u.value;try{if(!mi(h(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function rr(e,n,a,s){n&=~wf,n&=~Hr,e.suspendedLanes|=n,e.pingedLanes&=~n,s&&(e.warmLanes|=n),s=e.expirationTimes;for(var u=n;0<u;){var h=31-Zt(u),T=1<<h;s[h]=-1,u&=~T}a!==0&&Vt(e,a,n)}function ec(){return(Qe&6)===0?(ko(0),!1):!0}function Of(){if(Ne!==null){if(Je===0)var e=Ne.return;else e=Ne,Ea=Or=null,Ku(e),bs=null,No=0,e=Ne;for(;e!==null;)Jm(e.alternate,e),e=e.return;Ne=null}}function Ls(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,ky(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Of(),on=e,Ne=a=ya(e.current,null),Ve=n,Je=0,yi=null,er=!1,ws=_e(e,n),Rf=!1,Cs=Li=wf=Hr=nr=vn=0,li=Go=null,Cf=!1,(n&8)!==0&&(n|=n&32);var s=e.entangledLanes;if(s!==0)for(e=e.entanglements,s&=n;0<s;){var u=31-Zt(s),h=1<<u;n|=e[u],s&=~h}return Da=n,Ml(),a}function Sg(e,n){Re=null,V.H=Vl,n===bo||n===Ll?(n=Fp(),Je=3):n===Op?(n=Fp(),Je=4):Je=n===zm?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,yi=n,Ne===null&&(vn=1,Yl(e,Ri(n,e.current)))}function xg(){var e=V.H;return V.H=Vl,e===null?Vl:e}function Eg(){var e=V.A;return V.A=My,e}function Pf(){vn=4,er||(Ve&4194048)!==Ve&&Ui.current!==null||(ws=!0),(nr&134217727)===0&&(Hr&134217727)===0||on===null||rr(on,Ve,Li,!1)}function Bf(e,n,a){var s=Qe;Qe|=2;var u=xg(),h=Eg();(on!==e||Ve!==n)&&(tc=null,Ls(e,n)),n=!1;var T=vn;t:do try{if(Je!==0&&Ne!==null){var U=Ne,X=yi;switch(Je){case 8:Of(),T=6;break t;case 3:case 2:case 9:case 6:Ui.current===null&&(n=!0);var ut=Je;if(Je=0,yi=null,Ns(e,U,X,ut),a&&ws){T=0;break t}break;default:ut=Je,Je=0,yi=null,Ns(e,U,X,ut)}}Ay(),T=vn;break}catch(St){Sg(e,St)}while(!0);return n&&e.shellSuspendCounter++,Ea=Or=null,Qe=s,V.H=u,V.A=h,Ne===null&&(on=null,Ve=0,Ml()),T}function Ay(){for(;Ne!==null;)Mg(Ne)}function Ry(e,n){var a=Qe;Qe|=2;var s=xg(),u=Eg();on!==e||Ve!==n?(tc=null,$l=me()+500,Ls(e,n)):ws=_e(e,n);t:do try{if(Je!==0&&Ne!==null){n=Ne;var h=yi;e:switch(Je){case 1:Je=0,yi=null,Ns(e,n,h,1);break;case 2:case 9:if(Pp(h)){Je=0,yi=null,bg(n);break}n=function(){Je!==2&&Je!==9||on!==e||(Je=7),ca(e)},h.then(n,n);break t;case 3:Je=7;break t;case 4:Je=5;break t;case 7:Pp(h)?(Je=0,yi=null,bg(n)):(Je=0,yi=null,Ns(e,n,h,7));break;case 5:var T=null;switch(Ne.tag){case 26:T=Ne.memoizedState;case 5:case 27:var U=Ne;if(!T||r_(T)){Je=0,yi=null;var X=U.sibling;if(X!==null)Ne=X;else{var ut=U.return;ut!==null?(Ne=ut,nc(ut)):Ne=null}break e}}Je=0,yi=null,Ns(e,n,h,5);break;case 6:Je=0,yi=null,Ns(e,n,h,6);break;case 8:Of(),vn=6;break t;default:throw Error(r(462))}}wy();break}catch(St){Sg(e,St)}while(!0);return Ea=Or=null,V.H=s,V.A=u,Qe=a,Ne!==null?0:(on=null,Ve=0,Ml(),vn)}function wy(){for(;Ne!==null&&!kn();)Mg(Ne)}function Mg(e){var n=Km(e.alternate,e,Da);e.memoizedProps=e.pendingProps,n===null?nc(e):Ne=n}function bg(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=Xm(a,n,n.pendingProps,n.type,void 0,Ve);break;case 11:n=Xm(a,n,n.pendingProps,n.type.render,n.ref,Ve);break;case 5:Ku(n);default:Jm(a,n),n=Ne=Tp(n,Da),n=Km(a,n,Da)}e.memoizedProps=e.pendingProps,n===null?nc(e):Ne=n}function Ns(e,n,a,s){Ea=Or=null,Ku(n),bs=null,No=0;var u=n.return;try{if(_y(e,u,n,a,Ve)){vn=1,Yl(e,Ri(a,e.current)),Ne=null;return}}catch(h){if(u!==null)throw Ne=u,h;vn=1,Yl(e,Ri(a,e.current)),Ne=null;return}n.flags&32768?(qe||s===1?e=!0:ws||(Ve&536870912)!==0?e=!1:(er=e=!0,(s===2||s===9||s===3||s===6)&&(s=Ui.current,s!==null&&s.tag===13&&(s.flags|=16384))),Tg(n,e)):nc(n)}function nc(e){var n=e;do{if((n.flags&32768)!==0){Tg(n,er);return}e=n.return;var a=yy(n.alternate,n,Da);if(a!==null){Ne=a;return}if(n=n.sibling,n!==null){Ne=n;return}Ne=n=e}while(n!==null);vn===0&&(vn=5)}function Tg(e,n){do{var a=Sy(e.alternate,e);if(a!==null){a.flags&=32767,Ne=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){Ne=e;return}Ne=e=a}while(e!==null);vn=6,Ne=null}function Ag(e,n,a,s,u,h,T,U,X){e.cancelPendingCommit=null;do ic();while(Wn!==0);if((Qe&6)!==0)throw Error(r(327));if(n!==null){if(n===e.current)throw Error(r(177));if(h=n.lanes|n.childLanes,h|=Tu,qt(e,a,h,T,U,X),e===on&&(Ne=on=null,Ve=0),Ds=n,ar=e,Us=a,Uf=h,Lf=u,gg=s,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Ly(z,function(){return Ug(),null})):(e.callbackNode=null,e.callbackPriority=0),s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=V.T,V.T=null,u=ot.p,ot.p=2,T=Qe,Qe|=4;try{xy(e,n,a)}finally{Qe=T,ot.p=u,V.T=s}}Wn=1,Rg(),wg(),Cg()}}function Rg(){if(Wn===1){Wn=0;var e=ar,n=Ds,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=V.T,V.T=null;var s=ot.p;ot.p=2;var u=Qe;Qe|=4;try{cg(n,e);var h=jf,T=mp(e.containerInfo),U=h.focusedElem,X=h.selectionRange;if(T!==U&&U&&U.ownerDocument&&pp(U.ownerDocument.documentElement,U)){if(X!==null&&Su(U)){var ut=X.start,St=X.end;if(St===void 0&&(St=ut),"selectionStart"in U)U.selectionStart=ut,U.selectionEnd=Math.min(St,U.value.length);else{var wt=U.ownerDocument||document,ht=wt&&wt.defaultView||window;if(ht.getSelection){var dt=ht.getSelection(),ve=U.textContent.length,he=Math.min(X.start,ve),nn=X.end===void 0?he:Math.min(X.end,ve);!dt.extend&&he>nn&&(T=nn,nn=he,he=T);var et=dp(U,he),Z=dp(U,nn);if(et&&Z&&(dt.rangeCount!==1||dt.anchorNode!==et.node||dt.anchorOffset!==et.offset||dt.focusNode!==Z.node||dt.focusOffset!==Z.offset)){var ct=wt.createRange();ct.setStart(et.node,et.offset),dt.removeAllRanges(),he>nn?(dt.addRange(ct),dt.extend(Z.node,Z.offset)):(ct.setEnd(Z.node,Z.offset),dt.addRange(ct))}}}}for(wt=[],dt=U;dt=dt.parentNode;)dt.nodeType===1&&wt.push({element:dt,left:dt.scrollLeft,top:dt.scrollTop});for(typeof U.focus=="function"&&U.focus(),U=0;U<wt.length;U++){var bt=wt[U];bt.element.scrollLeft=bt.left,bt.element.scrollTop=bt.top}}mc=!!Yf,jf=Yf=null}finally{Qe=u,ot.p=s,V.T=a}}e.current=n,Wn=2}}function wg(){if(Wn===2){Wn=0;var e=ar,n=Ds,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=V.T,V.T=null;var s=ot.p;ot.p=2;var u=Qe;Qe|=4;try{rg(e,n.alternate,n)}finally{Qe=u,ot.p=s,V.T=a}}Wn=3}}function Cg(){if(Wn===4||Wn===3){Wn=0,Ce();var e=ar,n=Ds,a=Us,s=gg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Wn=5:(Wn=0,Ds=ar=null,Dg(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(ir=null),pn(a),n=n.stateNode,Wt&&typeof Wt.onCommitFiberRoot=="function")try{Wt.onCommitFiberRoot(yt,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=V.T,u=ot.p,ot.p=2,V.T=null;try{for(var h=e.onRecoverableError,T=0;T<s.length;T++){var U=s[T];h(U.value,{componentStack:U.stack})}}finally{V.T=n,ot.p=u}}(Us&3)!==0&&ic(),ca(e),u=e.pendingLanes,(a&4194090)!==0&&(u&42)!==0?e===Nf?Vo++:(Vo=0,Nf=e):Vo=0,ko(0)}}function Dg(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Eo(n)))}function ic(e){return Rg(),wg(),Cg(),Ug()}function Ug(){if(Wn!==5)return!1;var e=ar,n=Uf;Uf=0;var a=pn(Us),s=V.T,u=ot.p;try{ot.p=32>a?32:a,V.T=null,a=Lf,Lf=null;var h=ar,T=Us;if(Wn=0,Ds=ar=null,Us=0,(Qe&6)!==0)throw Error(r(331));var U=Qe;if(Qe|=4,pg(h.current),fg(h,h.current,T,a),Qe=U,ko(0,!1),Wt&&typeof Wt.onPostCommitFiberRoot=="function")try{Wt.onPostCommitFiberRoot(yt,h)}catch{}return!0}finally{ot.p=u,V.T=s,Dg(e,n)}}function Lg(e,n,a){n=Ri(a,n),n=ff(e.stateNode,n,2),e=ja(e,n,2),e!==null&&(At(e,2),ca(e))}function sn(e,n,a){if(e.tag===3)Lg(e,e,a);else for(;n!==null;){if(n.tag===3){Lg(n,e,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(ir===null||!ir.has(s))){e=Ri(a,e),a=Bm(2),s=ja(n,a,2),s!==null&&(Fm(a,s,n,e),At(s,2),ca(s));break}}n=n.return}}function Ff(e,n,a){var s=e.pingCache;if(s===null){s=e.pingCache=new by;var u=new Set;s.set(n,u)}else u=s.get(n),u===void 0&&(u=new Set,s.set(n,u));u.has(a)||(Rf=!0,u.add(a),e=Cy.bind(null,e,n,a),n.then(e,e))}function Cy(e,n,a){var s=e.pingCache;s!==null&&s.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,on===e&&(Ve&a)===a&&(vn===4||vn===3&&(Ve&62914560)===Ve&&300>me()-Df?(Qe&2)===0&&Ls(e,0):wf|=a,Cs===Ve&&(Cs=0)),ca(e)}function Ng(e,n){n===0&&(n=Ht()),e=ps(e,n),e!==null&&(At(e,n),ca(e))}function Dy(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),Ng(e,a)}function Uy(e,n){var a=0;switch(e.tag){case 13:var s=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:s=e.stateNode;break;case 22:s=e.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),Ng(e,a)}function Ly(e,n){return Me(e,n)}var ac=null,Os=null,zf=!1,rc=!1,If=!1,Gr=0;function ca(e){e!==Os&&e.next===null&&(Os===null?ac=Os=e:Os=Os.next=e),rc=!0,zf||(zf=!0,Oy())}function ko(e,n){if(!If&&rc){If=!0;do for(var a=!1,s=ac;s!==null;){if(e!==0){var u=s.pendingLanes;if(u===0)var h=0;else{var T=s.suspendedLanes,U=s.pingedLanes;h=(1<<31-Zt(42|e)+1)-1,h&=u&~(T&~U),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(a=!0,Fg(s,h))}else h=Ve,h=ge(s,s===on?h:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(h&3)===0||_e(s,h)||(a=!0,Fg(s,h));s=s.next}while(a);If=!1}}function Ny(){Og()}function Og(){rc=zf=!1;var e=0;Gr!==0&&(Vy()&&(e=Gr),Gr=0);for(var n=me(),a=null,s=ac;s!==null;){var u=s.next,h=Pg(s,n);h===0?(s.next=null,a===null?ac=u:a.next=u,u===null&&(Os=a)):(a=s,(e!==0||(h&3)!==0)&&(rc=!0)),s=u}ko(e)}function Pg(e,n){for(var a=e.suspendedLanes,s=e.pingedLanes,u=e.expirationTimes,h=e.pendingLanes&-62914561;0<h;){var T=31-Zt(h),U=1<<T,X=u[T];X===-1?((U&a)===0||(U&s)!==0)&&(u[T]=je(U,n)):X<=n&&(e.expiredLanes|=U),h&=~U}if(n=on,a=Ve,a=ge(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s=e.callbackNode,a===0||e===n&&(Je===2||Je===9)||e.cancelPendingCommit!==null)return s!==null&&s!==null&&W(s),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||_e(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(s!==null&&W(s),pn(a)){case 2:case 8:a=$t;break;case 32:a=z;break;case 268435456:a=lt;break;default:a=z}return s=Bg.bind(null,e),a=Me(a,s),e.callbackPriority=n,e.callbackNode=a,n}return s!==null&&s!==null&&W(s),e.callbackPriority=2,e.callbackNode=null,2}function Bg(e,n){if(Wn!==0&&Wn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(ic()&&e.callbackNode!==a)return null;var s=Ve;return s=ge(e,e===on?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s===0?null:(vg(e,s,n),Pg(e,me()),e.callbackNode!=null&&e.callbackNode===a?Bg.bind(null,e):null)}function Fg(e,n){if(ic())return null;vg(e,n,!0)}function Oy(){Xy(function(){(Qe&6)!==0?Me(Ye,Ny):Og()})}function Hf(){return Gr===0&&(Gr=Q()),Gr}function zg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ls(""+e)}function Ig(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function Py(e,n,a,s,u){if(n==="submit"&&a&&a.stateNode===u){var h=zg((u[Dn]||null).action),T=s.submitter;T&&(n=(n=T[Dn]||null)?zg(n.formAction):T.getAttribute("formAction"),n!==null&&(h=n,T=null));var U=new le("action","action",null,s,u);e.push({event:U,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(Gr!==0){var X=T?Ig(u,T):new FormData(u);sf(a,{pending:!0,data:X,method:u.method,action:h},null,X)}}else typeof h=="function"&&(U.preventDefault(),X=T?Ig(u,T):new FormData(u),sf(a,{pending:!0,data:X,method:u.method,action:h},h,X))},currentTarget:u}]})}}for(var Gf=0;Gf<bu.length;Gf++){var Vf=bu[Gf],By=Vf.toLowerCase(),Fy=Vf[0].toUpperCase()+Vf.slice(1);Vi(By,"on"+Fy)}Vi(vp,"onAnimationEnd"),Vi(yp,"onAnimationIteration"),Vi(Sp,"onAnimationStart"),Vi("dblclick","onDoubleClick"),Vi("focusin","onFocus"),Vi("focusout","onBlur"),Vi(ty,"onTransitionRun"),Vi(ey,"onTransitionStart"),Vi(ny,"onTransitionCancel"),Vi(xp,"onTransitionEnd"),L("onMouseEnter",["mouseout","mouseover"]),L("onMouseLeave",["mouseout","mouseover"]),L("onPointerEnter",["pointerout","pointerover"]),L("onPointerLeave",["pointerout","pointerover"]),Hi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Hi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Hi("onBeforeInput",["compositionend","keypress","textInput","paste"]),Hi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Hi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Hi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),zy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Xo));function Hg(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var s=e[a],u=s.event;s=s.listeners;t:{var h=void 0;if(n)for(var T=s.length-1;0<=T;T--){var U=s[T],X=U.instance,ut=U.currentTarget;if(U=U.listener,X!==h&&u.isPropagationStopped())break t;h=U,u.currentTarget=ut;try{h(u)}catch(St){ql(St)}u.currentTarget=null,h=X}else for(T=0;T<s.length;T++){if(U=s[T],X=U.instance,ut=U.currentTarget,U=U.listener,X!==h&&u.isPropagationStopped())break t;h=U,u.currentTarget=ut;try{h(u)}catch(St){ql(St)}u.currentTarget=null,h=X}}}}function Oe(e,n){var a=n[ga];a===void 0&&(a=n[ga]=new Set);var s=e+"__bubble";a.has(s)||(Gg(n,e,2,!1),a.add(s))}function kf(e,n,a){var s=0;n&&(s|=4),Gg(a,e,s,n)}var sc="_reactListening"+Math.random().toString(36).slice(2);function Xf(e){if(!e[sc]){e[sc]=!0,rs.forEach(function(a){a!=="selectionchange"&&(zy.has(a)||kf(a,!1,e),kf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[sc]||(n[sc]=!0,kf("selectionchange",!1,n))}}function Gg(e,n,a,s){switch(f_(n)){case 2:var u=fS;break;case 8:u=hS;break;default:u=ah}a=u.bind(null,n,a,e),u=void 0,!f||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),s?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function Wf(e,n,a,s,u){var h=s;if((n&1)===0&&(n&2)===0&&s!==null)t:for(;;){if(s===null)return;var T=s.tag;if(T===3||T===4){var U=s.stateNode.containerInfo;if(U===u)break;if(T===4)for(T=s.return;T!==null;){var X=T.tag;if((X===3||X===4)&&T.stateNode.containerInfo===u)return;T=T.return}for(;U!==null;){if(T=zi(U),T===null)return;if(X=T.tag,X===5||X===6||X===26||X===27){s=h=T;continue t}U=U.parentNode}}s=s.return}ia(function(){var ut=h,St=R(a),wt=[];t:{var ht=Ep.get(e);if(ht!==void 0){var dt=le,ve=e;switch(e){case"keypress":if(J(a)===0)break t;case"keydown":case"keyup":dt=L0;break;case"focusin":ve="focus",dt=aa;break;case"focusout":ve="blur",dt=aa;break;case"beforeblur":case"afterblur":dt=aa;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":dt=ri;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":dt=Ar;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":dt=P0;break;case vp:case yp:case Sp:dt=M0;break;case xp:dt=F0;break;case"scroll":case"scrollend":dt=ce;break;case"wheel":dt=I0;break;case"copy":case"cut":case"paste":dt=T0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":dt=$d;break;case"toggle":case"beforetoggle":dt=G0}var he=(n&4)!==0,nn=!he&&(e==="scroll"||e==="scrollend"),et=he?ht!==null?ht+"Capture":null:ht;he=[];for(var Z=ut,ct;Z!==null;){var bt=Z;if(ct=bt.stateNode,bt=bt.tag,bt!==5&&bt!==26&&bt!==27||ct===null||et===null||(bt=va(Z,et),bt!=null&&he.push(Wo(Z,bt,ct))),nn)break;Z=Z.return}0<he.length&&(ht=new dt(ht,ve,null,a,St),wt.push({event:ht,listeners:he}))}}if((n&7)===0){t:{if(ht=e==="mouseover"||e==="pointerover",dt=e==="mouseout"||e==="pointerout",ht&&a!==Tr&&(ve=a.relatedTarget||a.fromElement)&&(zi(ve)||ve[Yn]))break t;if((dt||ht)&&(ht=St.window===St?St:(ht=St.ownerDocument)?ht.defaultView||ht.parentWindow:window,dt?(ve=a.relatedTarget||a.toElement,dt=ut,ve=ve?zi(ve):null,ve!==null&&(nn=c(ve),he=ve.tag,ve!==nn||he!==5&&he!==27&&he!==6)&&(ve=null)):(dt=null,ve=ut),dt!==ve)){if(he=ri,bt="onMouseLeave",et="onMouseEnter",Z="mouse",(e==="pointerout"||e==="pointerover")&&(he=$d,bt="onPointerLeave",et="onPointerEnter",Z="pointer"),nn=dt==null?ht:_a(dt),ct=ve==null?ht:_a(ve),ht=new he(bt,Z+"leave",dt,a,St),ht.target=nn,ht.relatedTarget=ct,bt=null,zi(St)===ut&&(he=new he(et,Z+"enter",ve,a,St),he.target=ct,he.relatedTarget=nn,bt=he),nn=bt,dt&&ve)e:{for(he=dt,et=ve,Z=0,ct=he;ct;ct=Ps(ct))Z++;for(ct=0,bt=et;bt;bt=Ps(bt))ct++;for(;0<Z-ct;)he=Ps(he),Z--;for(;0<ct-Z;)et=Ps(et),ct--;for(;Z--;){if(he===et||et!==null&&he===et.alternate)break e;he=Ps(he),et=Ps(et)}he=null}else he=null;dt!==null&&Vg(wt,ht,dt,he,!1),ve!==null&&nn!==null&&Vg(wt,nn,ve,he,!0)}}t:{if(ht=ut?_a(ut):window,dt=ht.nodeName&&ht.nodeName.toLowerCase(),dt==="select"||dt==="input"&&ht.type==="file")var Kt=op;else if(rp(ht))if(lp)Kt=Q0;else{Kt=Z0;var we=j0}else dt=ht.nodeName,!dt||dt.toLowerCase()!=="input"||ht.type!=="checkbox"&&ht.type!=="radio"?ut&&os(ut.elementType)&&(Kt=op):Kt=K0;if(Kt&&(Kt=Kt(e,ut))){sp(wt,Kt,a,St);break t}we&&we(e,ht,ut),e==="focusout"&&ut&&ht.type==="number"&&ut.memoizedProps.value!=null&&Tn(ht,"number",ht.value)}switch(we=ut?_a(ut):window,e){case"focusin":(rp(we)||we.contentEditable==="true")&&(fs=we,xu=ut,_o=null);break;case"focusout":_o=xu=fs=null;break;case"mousedown":Eu=!0;break;case"contextmenu":case"mouseup":case"dragend":Eu=!1,gp(wt,a,St);break;case"selectionchange":if($0)break;case"keydown":case"keyup":gp(wt,a,St)}var ae;if(_u)t:{switch(e){case"compositionstart":var pe="onCompositionStart";break t;case"compositionend":pe="onCompositionEnd";break t;case"compositionupdate":pe="onCompositionUpdate";break t}pe=void 0}else us?ip(e,a)&&(pe="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(pe="onCompositionStart");pe&&(tp&&a.locale!=="ko"&&(us||pe!=="onCompositionStart"?pe==="onCompositionEnd"&&us&&(ae=q()):(b=St,w="value"in b?b.value:b.textContent,us=!0)),we=oc(ut,pe),0<we.length&&(pe=new Jd(pe,e,null,a,St),wt.push({event:pe,listeners:we}),ae?pe.data=ae:(ae=ap(a),ae!==null&&(pe.data=ae)))),(ae=k0?X0(e,a):W0(e,a))&&(pe=oc(ut,"onBeforeInput"),0<pe.length&&(we=new Jd("onBeforeInput","beforeinput",null,a,St),wt.push({event:we,listeners:pe}),we.data=ae)),Py(wt,e,ut,a,St)}Hg(wt,n)})}function Wo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function oc(e,n){for(var a=n+"Capture",s=[];e!==null;){var u=e,h=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||h===null||(u=va(e,a),u!=null&&s.unshift(Wo(e,u,h)),u=va(e,n),u!=null&&s.push(Wo(e,u,h))),e.tag===3)return s;e=e.return}return[]}function Ps(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Vg(e,n,a,s,u){for(var h=n._reactName,T=[];a!==null&&a!==s;){var U=a,X=U.alternate,ut=U.stateNode;if(U=U.tag,X!==null&&X===s)break;U!==5&&U!==26&&U!==27||ut===null||(X=ut,u?(ut=va(a,h),ut!=null&&T.unshift(Wo(a,ut,X))):u||(ut=va(a,h),ut!=null&&T.push(Wo(a,ut,X)))),a=a.return}T.length!==0&&e.push({event:n,listeners:T})}var Iy=/\r\n?/g,Hy=/\u0000|\uFFFD/g;function kg(e){return(typeof e=="string"?e:""+e).replace(Iy,`
`).replace(Hy,"")}function Xg(e,n){return n=kg(n),kg(e)===n}function lc(){}function en(e,n,a,s,u,h){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||di(e,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&di(e,""+s);break;case"className":It(e,"class",s);break;case"tabIndex":It(e,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":It(e,a,s);break;case"style":Sl(e,s,h);break;case"data":if(n!=="object"){It(e,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(a);break}s=ls(""+s),e.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(a==="formAction"?(n!=="input"&&en(e,n,"name",u.name,u,null),en(e,n,"formEncType",u.formEncType,u,null),en(e,n,"formMethod",u.formMethod,u,null),en(e,n,"formTarget",u.formTarget,u,null)):(en(e,n,"encType",u.encType,u,null),en(e,n,"method",u.method,u,null),en(e,n,"target",u.target,u,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(a);break}s=ls(""+s),e.setAttribute(a,s);break;case"onClick":s!=null&&(e.onclick=lc);break;case"onScroll":s!=null&&Oe("scroll",e);break;case"onScrollEnd":s!=null&&Oe("scrollend",e);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":e.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){e.removeAttribute("xlink:href");break}a=ls(""+s),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,""+s):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":s===!0?e.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,s):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?e.setAttribute(a,s):e.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?e.removeAttribute(a):e.setAttribute(a,s);break;case"popover":Oe("beforetoggle",e),Oe("toggle",e),Nt(e,"popover",s);break;case"xlinkActuate":Gt(e,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":Gt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":Gt(e,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":Gt(e,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":Gt(e,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":Gt(e,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":Gt(e,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":Gt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":Gt(e,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":Nt(e,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=pu.get(a)||a,Nt(e,a,s))}}function qf(e,n,a,s,u,h){switch(a){case"style":Sl(e,s,h);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof s=="string"?di(e,s):(typeof s=="number"||typeof s=="bigint")&&di(e,""+s);break;case"onScroll":s!=null&&Oe("scroll",e);break;case"onScrollEnd":s!=null&&Oe("scrollend",e);break;case"onClick":s!=null&&(e.onclick=lc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ss.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),h=e[Dn]||null,h=h!=null?h[a]:null,typeof h=="function"&&e.removeEventListener(n,h,u),typeof s=="function")){typeof h!="function"&&h!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,s,u);break t}a in e?e[a]=s:s===!0?e.setAttribute(a,""):Nt(e,a,s)}}}function qn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Oe("error",e),Oe("load",e);var s=!1,u=!1,h;for(h in a)if(a.hasOwnProperty(h)){var T=a[h];if(T!=null)switch(h){case"src":s=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:en(e,n,h,T,a,null)}}u&&en(e,n,"srcSet",a.srcSet,a,null),s&&en(e,n,"src",a.src,a,null);return;case"input":Oe("invalid",e);var U=h=T=u=null,X=null,ut=null;for(s in a)if(a.hasOwnProperty(s)){var St=a[s];if(St!=null)switch(s){case"name":u=St;break;case"type":T=St;break;case"checked":X=St;break;case"defaultChecked":ut=St;break;case"value":h=St;break;case"defaultValue":U=St;break;case"children":case"dangerouslySetInnerHTML":if(St!=null)throw Error(r(137,n));break;default:en(e,n,s,St,a,null)}}Ge(e,h,U,X,ut,T,u,!1),un(e);return;case"select":Oe("invalid",e),s=T=h=null;for(u in a)if(a.hasOwnProperty(u)&&(U=a[u],U!=null))switch(u){case"value":h=U;break;case"defaultValue":T=U;break;case"multiple":s=U;default:en(e,n,u,U,a,null)}n=h,a=T,e.multiple=!!s,n!=null?gn(e,!!s,n,!1):a!=null&&gn(e,!!s,a,!0);return;case"textarea":Oe("invalid",e),h=u=s=null;for(T in a)if(a.hasOwnProperty(T)&&(U=a[T],U!=null))switch(T){case"value":s=U;break;case"defaultValue":u=U;break;case"children":h=U;break;case"dangerouslySetInnerHTML":if(U!=null)throw Error(r(91));break;default:en(e,n,T,U,a,null)}cn(e,s,u,h),un(e);return;case"option":for(X in a)if(a.hasOwnProperty(X)&&(s=a[X],s!=null))switch(X){case"selected":e.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:en(e,n,X,s,a,null)}return;case"dialog":Oe("beforetoggle",e),Oe("toggle",e),Oe("cancel",e),Oe("close",e);break;case"iframe":case"object":Oe("load",e);break;case"video":case"audio":for(s=0;s<Xo.length;s++)Oe(Xo[s],e);break;case"image":Oe("error",e),Oe("load",e);break;case"details":Oe("toggle",e);break;case"embed":case"source":case"link":Oe("error",e),Oe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ut in a)if(a.hasOwnProperty(ut)&&(s=a[ut],s!=null))switch(ut){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:en(e,n,ut,s,a,null)}return;default:if(os(n)){for(St in a)a.hasOwnProperty(St)&&(s=a[St],s!==void 0&&qf(e,n,St,s,a,void 0));return}}for(U in a)a.hasOwnProperty(U)&&(s=a[U],s!=null&&en(e,n,U,s,a,null))}function Gy(e,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,h=null,T=null,U=null,X=null,ut=null,St=null;for(dt in a){var wt=a[dt];if(a.hasOwnProperty(dt)&&wt!=null)switch(dt){case"checked":break;case"value":break;case"defaultValue":X=wt;default:s.hasOwnProperty(dt)||en(e,n,dt,null,s,wt)}}for(var ht in s){var dt=s[ht];if(wt=a[ht],s.hasOwnProperty(ht)&&(dt!=null||wt!=null))switch(ht){case"type":h=dt;break;case"name":u=dt;break;case"checked":ut=dt;break;case"defaultChecked":St=dt;break;case"value":T=dt;break;case"defaultValue":U=dt;break;case"children":case"dangerouslySetInnerHTML":if(dt!=null)throw Error(r(137,n));break;default:dt!==wt&&en(e,n,ht,dt,s,wt)}}Le(e,T,U,X,ut,St,h,u);return;case"select":dt=T=U=ht=null;for(h in a)if(X=a[h],a.hasOwnProperty(h)&&X!=null)switch(h){case"value":break;case"multiple":dt=X;default:s.hasOwnProperty(h)||en(e,n,h,null,s,X)}for(u in s)if(h=s[u],X=a[u],s.hasOwnProperty(u)&&(h!=null||X!=null))switch(u){case"value":ht=h;break;case"defaultValue":U=h;break;case"multiple":T=h;default:h!==X&&en(e,n,u,h,s,X)}n=U,a=T,s=dt,ht!=null?gn(e,!!a,ht,!1):!!s!=!!a&&(n!=null?gn(e,!!a,n,!0):gn(e,!!a,a?[]:"",!1));return;case"textarea":dt=ht=null;for(U in a)if(u=a[U],a.hasOwnProperty(U)&&u!=null&&!s.hasOwnProperty(U))switch(U){case"value":break;case"children":break;default:en(e,n,U,null,s,u)}for(T in s)if(u=s[T],h=a[T],s.hasOwnProperty(T)&&(u!=null||h!=null))switch(T){case"value":ht=u;break;case"defaultValue":dt=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==h&&en(e,n,T,u,s,h)}An(e,ht,dt);return;case"option":for(var ve in a)if(ht=a[ve],a.hasOwnProperty(ve)&&ht!=null&&!s.hasOwnProperty(ve))switch(ve){case"selected":e.selected=!1;break;default:en(e,n,ve,null,s,ht)}for(X in s)if(ht=s[X],dt=a[X],s.hasOwnProperty(X)&&ht!==dt&&(ht!=null||dt!=null))switch(X){case"selected":e.selected=ht&&typeof ht!="function"&&typeof ht!="symbol";break;default:en(e,n,X,ht,s,dt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var he in a)ht=a[he],a.hasOwnProperty(he)&&ht!=null&&!s.hasOwnProperty(he)&&en(e,n,he,null,s,ht);for(ut in s)if(ht=s[ut],dt=a[ut],s.hasOwnProperty(ut)&&ht!==dt&&(ht!=null||dt!=null))switch(ut){case"children":case"dangerouslySetInnerHTML":if(ht!=null)throw Error(r(137,n));break;default:en(e,n,ut,ht,s,dt)}return;default:if(os(n)){for(var nn in a)ht=a[nn],a.hasOwnProperty(nn)&&ht!==void 0&&!s.hasOwnProperty(nn)&&qf(e,n,nn,void 0,s,ht);for(St in s)ht=s[St],dt=a[St],!s.hasOwnProperty(St)||ht===dt||ht===void 0&&dt===void 0||qf(e,n,St,ht,s,dt);return}}for(var et in a)ht=a[et],a.hasOwnProperty(et)&&ht!=null&&!s.hasOwnProperty(et)&&en(e,n,et,null,s,ht);for(wt in s)ht=s[wt],dt=a[wt],!s.hasOwnProperty(wt)||ht===dt||ht==null&&dt==null||en(e,n,wt,ht,s,dt)}var Yf=null,jf=null;function cc(e){return e.nodeType===9?e:e.ownerDocument}function Wg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function qg(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Zf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Kf=null;function Vy(){var e=window.event;return e&&e.type==="popstate"?e===Kf?!1:(Kf=e,!0):(Kf=null,!1)}var Yg=typeof setTimeout=="function"?setTimeout:void 0,ky=typeof clearTimeout=="function"?clearTimeout:void 0,jg=typeof Promise=="function"?Promise:void 0,Xy=typeof queueMicrotask=="function"?queueMicrotask:typeof jg<"u"?function(e){return jg.resolve(null).then(e).catch(Wy)}:Yg;function Wy(e){setTimeout(function(){throw e})}function sr(e){return e==="head"}function Zg(e,n){var a=n,s=0,u=0;do{var h=a.nextSibling;if(e.removeChild(a),h&&h.nodeType===8)if(a=h.data,a==="/$"){if(0<s&&8>s){a=s;var T=e.ownerDocument;if(a&1&&qo(T.documentElement),a&2&&qo(T.body),a&4)for(a=T.head,qo(a),T=a.firstChild;T;){var U=T.nextSibling,X=T.nodeName;T[Fi]||X==="SCRIPT"||X==="STYLE"||X==="LINK"&&T.rel.toLowerCase()==="stylesheet"||a.removeChild(T),T=U}}if(u===0){e.removeChild(h),tl(n);return}u--}else a==="$"||a==="$?"||a==="$!"?u++:s=a.charCodeAt(0)-48;else s=0;a=h}while(a);tl(n)}function Qf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Qf(a),ta(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function qy(e,n,a,s){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(s){if(!e[Fi])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(h=e.getAttribute("rel"),h==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(h!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(h=e.getAttribute("src"),(h!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&h&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var h=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===h)return e}else return e;if(e=Xi(e.nextSibling),e===null)break}return null}function Yy(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Xi(e.nextSibling),e===null))return null;return e}function Jf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function jy(e,n){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),e._reactRetry=s}}function Xi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}var $f=null;function Kg(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return e;n--}else a==="/$"&&n++}e=e.previousSibling}return null}function Qg(e,n,a){switch(n=cc(a),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function qo(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);ta(e)}var Ni=new Map,Jg=new Set;function uc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Ua=ot.d;ot.d={f:Zy,r:Ky,D:Qy,C:Jy,L:$y,m:tS,X:nS,S:eS,M:iS};function Zy(){var e=Ua.f(),n=ec();return e||n}function Ky(e){var n=Ii(e);n!==null&&n.tag===5&&n.type==="form"?vm(n):Ua.r(e)}var Bs=typeof document>"u"?null:document;function $g(e,n,a){var s=Bs;if(s&&typeof n=="string"&&n){var u=Ke(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),Jg.has(u)||(Jg.add(u),e={rel:e,crossOrigin:a,href:n},s.querySelector(u)===null&&(n=s.createElement("link"),qn(n,"link",e),mn(n),s.head.appendChild(n)))}}function Qy(e){Ua.D(e),$g("dns-prefetch",e,null)}function Jy(e,n){Ua.C(e,n),$g("preconnect",e,n)}function $y(e,n,a){Ua.L(e,n,a);var s=Bs;if(s&&e&&n){var u='link[rel="preload"][as="'+Ke(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Ke(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Ke(a.imageSizes)+'"]')):u+='[href="'+Ke(e)+'"]';var h=u;switch(n){case"style":h=Fs(e);break;case"script":h=zs(e)}Ni.has(h)||(e=v({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),Ni.set(h,e),s.querySelector(u)!==null||n==="style"&&s.querySelector(Yo(h))||n==="script"&&s.querySelector(jo(h))||(n=s.createElement("link"),qn(n,"link",e),mn(n),s.head.appendChild(n)))}}function tS(e,n){Ua.m(e,n);var a=Bs;if(a&&e){var s=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Ke(s)+'"][href="'+Ke(e)+'"]',h=u;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=zs(e)}if(!Ni.has(h)&&(e=v({rel:"modulepreload",href:e},n),Ni.set(h,e),a.querySelector(u)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(jo(h)))return}s=a.createElement("link"),qn(s,"link",e),mn(s),a.head.appendChild(s)}}}function eS(e,n,a){Ua.S(e,n,a);var s=Bs;if(s&&e){var u=ea(s).hoistableStyles,h=Fs(e);n=n||"default";var T=u.get(h);if(!T){var U={loading:0,preload:null};if(T=s.querySelector(Yo(h)))U.loading=5;else{e=v({rel:"stylesheet",href:e,"data-precedence":n},a),(a=Ni.get(h))&&th(e,a);var X=T=s.createElement("link");mn(X),qn(X,"link",e),X._p=new Promise(function(ut,St){X.onload=ut,X.onerror=St}),X.addEventListener("load",function(){U.loading|=1}),X.addEventListener("error",function(){U.loading|=2}),U.loading|=4,fc(T,n,s)}T={type:"stylesheet",instance:T,count:1,state:U},u.set(h,T)}}}function nS(e,n){Ua.X(e,n);var a=Bs;if(a&&e){var s=ea(a).hoistableScripts,u=zs(e),h=s.get(u);h||(h=a.querySelector(jo(u)),h||(e=v({src:e,async:!0},n),(n=Ni.get(u))&&eh(e,n),h=a.createElement("script"),mn(h),qn(h,"link",e),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},s.set(u,h))}}function iS(e,n){Ua.M(e,n);var a=Bs;if(a&&e){var s=ea(a).hoistableScripts,u=zs(e),h=s.get(u);h||(h=a.querySelector(jo(u)),h||(e=v({src:e,async:!0,type:"module"},n),(n=Ni.get(u))&&eh(e,n),h=a.createElement("script"),mn(h),qn(h,"link",e),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},s.set(u,h))}}function t_(e,n,a,s){var u=(u=Ct.current)?uc(u):null;if(!u)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Fs(a.href),a=ea(u).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Fs(a.href);var h=ea(u).hoistableStyles,T=h.get(e);if(T||(u=u.ownerDocument||u,T={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(e,T),(h=u.querySelector(Yo(e)))&&!h._p&&(T.instance=h,T.state.loading=5),Ni.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Ni.set(e,a),h||aS(u,e,a,T.state))),n&&s===null)throw Error(r(528,""));return T}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=zs(a),a=ea(u).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function Fs(e){return'href="'+Ke(e)+'"'}function Yo(e){return'link[rel="stylesheet"]['+e+"]"}function e_(e){return v({},e,{"data-precedence":e.precedence,precedence:null})}function aS(e,n,a,s){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=e.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),qn(n,"link",a),mn(n),e.head.appendChild(n))}function zs(e){return'[src="'+Ke(e)+'"]'}function jo(e){return"script[async]"+e}function n_(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=e.querySelector('style[data-href~="'+Ke(a.href)+'"]');if(s)return n.instance=s,mn(s),s;var u=v({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(e.ownerDocument||e).createElement("style"),mn(s),qn(s,"style",u),fc(s,a.precedence,e),n.instance=s;case"stylesheet":u=Fs(a.href);var h=e.querySelector(Yo(u));if(h)return n.state.loading|=4,n.instance=h,mn(h),h;s=e_(a),(u=Ni.get(u))&&th(s,u),h=(e.ownerDocument||e).createElement("link"),mn(h);var T=h;return T._p=new Promise(function(U,X){T.onload=U,T.onerror=X}),qn(h,"link",s),n.state.loading|=4,fc(h,a.precedence,e),n.instance=h;case"script":return h=zs(a.src),(u=e.querySelector(jo(h)))?(n.instance=u,mn(u),u):(s=a,(u=Ni.get(h))&&(s=v({},a),eh(s,u)),e=e.ownerDocument||e,u=e.createElement("script"),mn(u),qn(u,"link",s),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,fc(s,a.precedence,e));return n.instance}function fc(e,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=s.length?s[s.length-1]:null,h=u,T=0;T<s.length;T++){var U=s[T];if(U.dataset.precedence===n)h=U;else if(h!==u)break}h?h.parentNode.insertBefore(e,h.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function th(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function eh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var hc=null;function i_(e,n,a){if(hc===null){var s=new Map,u=hc=new Map;u.set(a,s)}else u=hc,s=u.get(a),s||(s=new Map,u.set(a,s));if(s.has(e))return s;for(s.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var h=a[u];if(!(h[Fi]||h[Sn]||e==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var T=h.getAttribute(n)||"";T=e+T;var U=s.get(T);U?U.push(h):s.set(T,[h])}}return s}function a_(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function rS(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function r_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Zo=null;function sS(){}function oS(e,n,a){if(Zo===null)throw Error(r(475));var s=Zo;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var u=Fs(a.href),h=e.querySelector(Yo(u));if(h){e=h._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(s.count++,s=dc.bind(s),e.then(s,s)),n.state.loading|=4,n.instance=h,mn(h);return}h=e.ownerDocument||e,a=e_(a),(u=Ni.get(u))&&th(a,u),h=h.createElement("link"),mn(h);var T=h;T._p=new Promise(function(U,X){T.onload=U,T.onerror=X}),qn(h,"link",a),n.instance=h}s.stylesheets===null&&(s.stylesheets=new Map),s.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(s.count++,n=dc.bind(s),e.addEventListener("load",n),e.addEventListener("error",n))}}function lS(){if(Zo===null)throw Error(r(475));var e=Zo;return e.stylesheets&&e.count===0&&nh(e,e.stylesheets),0<e.count?function(n){var a=setTimeout(function(){if(e.stylesheets&&nh(e,e.stylesheets),e.unsuspend){var s=e.unsuspend;e.unsuspend=null,s()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a)}}:null}function dc(){if(this.count--,this.count===0){if(this.stylesheets)nh(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var pc=null;function nh(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,pc=new Map,n.forEach(cS,e),pc=null,dc.call(e))}function cS(e,n){if(!(n.state.loading&4)){var a=pc.get(e);if(a)var s=a.get(null);else{a=new Map,pc.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<u.length;h++){var T=u[h];(T.nodeName==="LINK"||T.getAttribute("media")!=="not all")&&(a.set(T.dataset.precedence,T),s=T)}s&&a.set(null,s)}u=n.instance,T=u.getAttribute("data-precedence"),h=a.get(T)||s,h===s&&a.set(null,u),a.set(T,u),this.count++,s=dc.bind(this),u.addEventListener("load",s),u.addEventListener("error",s),h?h.parentNode.insertBefore(u,h.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Ko={$$typeof:H,Provider:null,Consumer:null,_currentValue:$,_currentValue2:$,_threadCount:0};function uS(e,n,a,s,u,h,T,U){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=_t(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_t(0),this.hiddenUpdates=_t(null),this.identifierPrefix=s,this.onUncaughtError=u,this.onCaughtError=h,this.onRecoverableError=T,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=U,this.incompleteTransitions=new Map}function s_(e,n,a,s,u,h,T,U,X,ut,St,wt){return e=new uS(e,n,a,T,U,X,ut,wt),n=1,h===!0&&(n|=24),h=gi(3,null,null,n),e.current=h,h.stateNode=e,n=Bu(),n.refCount++,e.pooledCache=n,n.refCount++,h.memoizedState={element:s,isDehydrated:a,cache:n},Hu(h),e}function o_(e){return e?(e=ms,e):ms}function l_(e,n,a,s,u,h){u=o_(u),s.context===null?s.context=u:s.pendingContext=u,s=Ya(n),s.payload={element:a},h=h===void 0?null:h,h!==null&&(s.callback=h),a=ja(e,s,n),a!==null&&(xi(a,e,n),Ao(a,e,n))}function c_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function ih(e,n){c_(e,n),(e=e.alternate)&&c_(e,n)}function u_(e){if(e.tag===13){var n=ps(e,67108864);n!==null&&xi(n,e,67108864),ih(e,67108864)}}var mc=!0;function fS(e,n,a,s){var u=V.T;V.T=null;var h=ot.p;try{ot.p=2,ah(e,n,a,s)}finally{ot.p=h,V.T=u}}function hS(e,n,a,s){var u=V.T;V.T=null;var h=ot.p;try{ot.p=8,ah(e,n,a,s)}finally{ot.p=h,V.T=u}}function ah(e,n,a,s){if(mc){var u=rh(s);if(u===null)Wf(e,n,s,gc,a),h_(e,s);else if(pS(u,e,n,a,s))s.stopPropagation();else if(h_(e,s),n&4&&-1<dS.indexOf(e)){for(;u!==null;){var h=Ii(u);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var T=kt(h.pendingLanes);if(T!==0){var U=h;for(U.pendingLanes|=2,U.entangledLanes|=2;T;){var X=1<<31-Zt(T);U.entanglements[1]|=X,T&=~X}ca(h),(Qe&6)===0&&($l=me()+500,ko(0))}}break;case 13:U=ps(h,2),U!==null&&xi(U,h,2),ec(),ih(h,2)}if(h=rh(s),h===null&&Wf(e,n,s,gc,a),h===u)break;u=h}u!==null&&s.stopPropagation()}else Wf(e,n,s,null,a)}}function rh(e){return e=R(e),sh(e)}var gc=null;function sh(e){if(gc=null,e=zi(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=d(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return gc=e,null}function f_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ie()){case Ye:return 2;case $t:return 8;case z:case D:return 32;case lt:return 268435456;default:return 32}default:return 32}}var oh=!1,or=null,lr=null,cr=null,Qo=new Map,Jo=new Map,ur=[],dS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function h_(e,n){switch(e){case"focusin":case"focusout":or=null;break;case"dragenter":case"dragleave":lr=null;break;case"mouseover":case"mouseout":cr=null;break;case"pointerover":case"pointerout":Qo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Jo.delete(n.pointerId)}}function $o(e,n,a,s,u,h){return e===null||e.nativeEvent!==h?(e={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:h,targetContainers:[u]},n!==null&&(n=Ii(n),n!==null&&u_(n)),e):(e.eventSystemFlags|=s,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function pS(e,n,a,s,u){switch(n){case"focusin":return or=$o(or,e,n,a,s,u),!0;case"dragenter":return lr=$o(lr,e,n,a,s,u),!0;case"mouseover":return cr=$o(cr,e,n,a,s,u),!0;case"pointerover":var h=u.pointerId;return Qo.set(h,$o(Qo.get(h)||null,e,n,a,s,u)),!0;case"gotpointercapture":return h=u.pointerId,Jo.set(h,$o(Jo.get(h)||null,e,n,a,s,u)),!0}return!1}function d_(e){var n=zi(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){e.blockedOn=n,ei(e.priority,function(){if(a.tag===13){var s=Si();s=$e(s);var u=ps(a,s);u!==null&&xi(u,a,s),ih(a,s)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function _c(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=rh(e.nativeEvent);if(a===null){a=e.nativeEvent;var s=new a.constructor(a.type,a);Tr=s,a.target.dispatchEvent(s),Tr=null}else return n=Ii(a),n!==null&&u_(n),e.blockedOn=a,!1;n.shift()}return!0}function p_(e,n,a){_c(e)&&a.delete(n)}function mS(){oh=!1,or!==null&&_c(or)&&(or=null),lr!==null&&_c(lr)&&(lr=null),cr!==null&&_c(cr)&&(cr=null),Qo.forEach(p_),Jo.forEach(p_)}function vc(e,n){e.blockedOn===n&&(e.blockedOn=null,oh||(oh=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,mS)))}var yc=null;function m_(e){yc!==e&&(yc=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){yc===e&&(yc=null);for(var n=0;n<e.length;n+=3){var a=e[n],s=e[n+1],u=e[n+2];if(typeof s!="function"){if(sh(s||a)===null)continue;break}var h=Ii(a);h!==null&&(e.splice(n,3),n-=3,sf(h,{pending:!0,data:u,method:a.method,action:s},s,u))}}))}function tl(e){function n(X){return vc(X,e)}or!==null&&vc(or,e),lr!==null&&vc(lr,e),cr!==null&&vc(cr,e),Qo.forEach(n),Jo.forEach(n);for(var a=0;a<ur.length;a++){var s=ur[a];s.blockedOn===e&&(s.blockedOn=null)}for(;0<ur.length&&(a=ur[0],a.blockedOn===null);)d_(a),a.blockedOn===null&&ur.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var u=a[s],h=a[s+1],T=u[Dn]||null;if(typeof h=="function")T||m_(a);else if(T){var U=null;if(h&&h.hasAttribute("formAction")){if(u=h,T=h[Dn]||null)U=T.formAction;else if(sh(u)!==null)continue}else U=T.action;typeof U=="function"?a[s+1]=U:(a.splice(s,3),s-=3),m_(a)}}}function lh(e){this._internalRoot=e}Sc.prototype.render=lh.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=Si();l_(a,s,e,n,null,null)},Sc.prototype.unmount=lh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;l_(e.current,2,null,e,null,null),ec(),n[Yn]=null}};function Sc(e){this._internalRoot=e}Sc.prototype.unstable_scheduleHydration=function(e){if(e){var n=Fe();e={blockedOn:null,target:e,priority:n};for(var a=0;a<ur.length&&n!==0&&n<ur[a].priority;a++);ur.splice(a,0,e),a===0&&d_(e)}};var g_=t.version;if(g_!=="19.1.0")throw Error(r(527,g_,"19.1.0"));ot.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=g(n),e=e!==null?m(e):null,e=e===null?null:e.stateNode,e};var gS={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:V,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var xc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xc.isDisabled&&xc.supportsFiber)try{yt=xc.inject(gS),Wt=xc}catch{}}return nl.createRoot=function(e,n){if(!l(e))throw Error(r(299));var a=!1,s="",u=Lm,h=Nm,T=Om,U=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(h=n.onCaughtError),n.onRecoverableError!==void 0&&(T=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(U=n.unstable_transitionCallbacks)),n=s_(e,1,!1,null,null,a,s,u,h,T,U,null),e[Yn]=n.current,Xf(e),new lh(n)},nl.hydrateRoot=function(e,n,a){if(!l(e))throw Error(r(299));var s=!1,u="",h=Lm,T=Nm,U=Om,X=null,ut=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(h=a.onUncaughtError),a.onCaughtError!==void 0&&(T=a.onCaughtError),a.onRecoverableError!==void 0&&(U=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(X=a.unstable_transitionCallbacks),a.formState!==void 0&&(ut=a.formState)),n=s_(e,1,!0,n,a??null,s,u,h,T,U,X,ut),n.context=o_(null),a=n.current,s=Si(),s=$e(s),u=Ya(s),u.callback=null,ja(a,u,s),a=s,n.current.lanes=a,At(n,a),ca(n),e[Yn]=n.current,Xf(e),new Sc(n)},nl.version="19.1.0",nl}var A_;function wS(){if(A_)return uh.exports;A_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),uh.exports=RS(),uh.exports}var CS=wS(),bi=zd();const R_=Wv(bi);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Id="176",eo={ROTATE:0,DOLLY:1,PAN:2},$s={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},DS=0,w_=1,US=2,qv=1,LS=2,za=3,Er=0,fi=1,Ia=2,Sr=0,no=1,C_=2,D_=3,U_=4,NS=5,Kr=100,OS=101,PS=102,BS=103,FS=104,zS=200,IS=201,HS=202,GS=203,Kh=204,Qh=205,VS=206,kS=207,XS=208,WS=209,qS=210,YS=211,jS=212,ZS=213,KS=214,Jh=0,$h=1,td=2,ao=3,ed=4,nd=5,id=6,ad=7,Hd=0,QS=1,JS=2,xr=0,$S=1,tx=2,ex=3,nx=4,ix=5,ax=6,rx=7,Yv=300,ro=301,so=302,rd=303,sd=304,uu=306,od=1e3,Jr=1001,ld=1002,Qi=1003,sx=1004,Mc=1005,ha=1006,mh=1007,$r=1008,pa=1009,jv=1010,Zv=1011,hl=1012,Gd=1013,ts=1014,Ha=1015,gl=1016,Vd=1017,kd=1018,dl=1020,Kv=35902,Qv=1021,Jv=1022,Zi=1023,pl=1026,ml=1027,$v=1028,Xd=1029,t0=1030,Wd=1031,qd=1033,Kc=33776,Qc=33777,Jc=33778,$c=33779,cd=35840,ud=35841,fd=35842,hd=35843,dd=36196,pd=37492,md=37496,gd=37808,_d=37809,vd=37810,yd=37811,Sd=37812,xd=37813,Ed=37814,Md=37815,bd=37816,Td=37817,Ad=37818,Rd=37819,wd=37820,Cd=37821,tu=36492,Dd=36494,Ud=36495,e0=36283,Ld=36284,Nd=36285,Od=36286,ox=3200,lx=3201,n0=0,cx=1,yr="",Ti="srgb",oo="srgb-linear",ru="linear",an="srgb",Is=7680,L_=519,ux=512,fx=513,hx=514,i0=515,dx=516,px=517,mx=518,gx=519,N_=35044,O_="300 es",Ga=2e3,su=2001;class is{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(i)===-1&&r[t].push(i)}hasEventListener(t,i){const r=this._listeners;return r===void 0?!1:r[t]!==void 0&&r[t].indexOf(i)!==-1}removeEventListener(t,i){const r=this._listeners;if(r===void 0)return;const l=r[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const r=i[t.type];if(r!==void 0){t.target=this;const l=r.slice(0);for(let c=0,d=l.length;c<d;c++)l[c].call(this,t);t.target=null}}}const $n=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],eu=Math.PI/180,Pd=180/Math.PI;function _l(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return($n[o&255]+$n[o>>8&255]+$n[o>>16&255]+$n[o>>24&255]+"-"+$n[t&255]+$n[t>>8&255]+"-"+$n[t>>16&15|64]+$n[t>>24&255]+"-"+$n[i&63|128]+$n[i>>8&255]+"-"+$n[i>>16&255]+$n[i>>24&255]+$n[r&255]+$n[r>>8&255]+$n[r>>16&255]+$n[r>>24&255]).toLowerCase()}function Pe(o,t,i){return Math.max(t,Math.min(i,o))}function _x(o,t){return(o%t+t)%t}function gh(o,t,i){return(1-i)*o+i*t}function il(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function ci(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const vx={DEG2RAD:eu};class Ee{constructor(t=0,i=0){Ee.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,r=this.y,l=t.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Pe(this.x,t.x,i.x),this.y=Pe(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Pe(this.x,t,i),this.y=Pe(this.y,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Pe(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(Pe(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-t.x,d=this.y-t.y;return this.x=c*r-d*l+t.x,this.y=c*l+d*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class xe{constructor(t,i,r,l,c,d,p,g,m){xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,l,c,d,p,g,m)}set(t,i,r,l,c,d,p,g,m){const v=this.elements;return v[0]=t,v[1]=l,v[2]=p,v[3]=i,v[4]=c,v[5]=g,v[6]=r,v[7]=d,v[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,c=this.elements,d=r[0],p=r[3],g=r[6],m=r[1],v=r[4],y=r[7],x=r[2],M=r[5],A=r[8],C=l[0],E=l[3],S=l[6],G=l[1],H=l[4],O=l[7],j=l[2],I=l[5],k=l[8];return c[0]=d*C+p*G+g*j,c[3]=d*E+p*H+g*I,c[6]=d*S+p*O+g*k,c[1]=m*C+v*G+y*j,c[4]=m*E+v*H+y*I,c[7]=m*S+v*O+y*k,c[2]=x*C+M*G+A*j,c[5]=x*E+M*H+A*I,c[8]=x*S+M*O+A*k,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],d=t[4],p=t[5],g=t[6],m=t[7],v=t[8];return i*d*v-i*p*m-r*c*v+r*p*g+l*c*m-l*d*g}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],d=t[4],p=t[5],g=t[6],m=t[7],v=t[8],y=v*d-p*m,x=p*g-v*c,M=m*c-d*g,A=i*y+r*x+l*M;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/A;return t[0]=y*C,t[1]=(l*m-v*r)*C,t[2]=(p*r-l*d)*C,t[3]=x*C,t[4]=(v*i-l*g)*C,t[5]=(l*c-p*i)*C,t[6]=M*C,t[7]=(r*g-m*i)*C,t[8]=(d*i-r*c)*C,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,l,c,d,p){const g=Math.cos(c),m=Math.sin(c);return this.set(r*g,r*m,-r*(g*d+m*p)+d+t,-l*m,l*g,-l*(-m*d+g*p)+p+i,0,0,1),this}scale(t,i){return this.premultiply(_h.makeScale(t,i)),this}rotate(t){return this.premultiply(_h.makeRotation(-t)),this}translate(t,i){return this.premultiply(_h.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const _h=new xe;function a0(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function ou(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function yx(){const o=ou("canvas");return o.style.display="block",o}const P_={};function nu(o){o in P_||(P_[o]=!0,console.warn(o))}function Sx(o,t,i){return new Promise(function(r,l){function c(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}function xx(o){const t=o.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Ex(o){const t=o.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const B_=new xe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),F_=new xe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Mx(){const o={enabled:!0,workingColorSpace:oo,spaces:{},convert:function(l,c,d){return this.enabled===!1||c===d||!c||!d||(this.spaces[c].transfer===an&&(l.r=Va(l.r),l.g=Va(l.g),l.b=Va(l.b)),this.spaces[c].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===an&&(l.r=io(l.r),l.g=io(l.g),l.b=io(l.b))),l},fromWorkingColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},toWorkingColorSpace:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===yr?ru:this.spaces[l].transfer},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,d){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[oo]:{primaries:t,whitePoint:r,transfer:ru,toXYZ:B_,fromXYZ:F_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Ti},outputColorSpaceConfig:{drawingBufferColorSpace:Ti}},[Ti]:{primaries:t,whitePoint:r,transfer:an,toXYZ:B_,fromXYZ:F_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Ti}}}),o}const Xe=Mx();function Va(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function io(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Hs;class bx{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let r;if(t instanceof HTMLCanvasElement)r=t;else{Hs===void 0&&(Hs=ou("canvas")),Hs.width=t.width,Hs.height=t.height;const l=Hs.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),r=Hs}return r.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=ou("canvas");i.width=t.width,i.height=t.height;const r=i.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const l=r.getImageData(0,0,t.width,t.height),c=l.data;for(let d=0;d<c.length;d++)c[d]=Va(c[d]/255)*255;return r.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(Va(i[r]/255)*255):i[r]=Va(i[r]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Tx=0;class Yd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Tx++}),this.uuid=_l(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let d=0,p=l.length;d<p;d++)l[d].isDataTexture?c.push(vh(l[d].image)):c.push(vh(l[d]))}else c=vh(l);r.url=c}return i||(t.images[this.uuid]=r),r}}function vh(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?bx.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ax=0;class hi extends is{constructor(t=hi.DEFAULT_IMAGE,i=hi.DEFAULT_MAPPING,r=Jr,l=Jr,c=ha,d=$r,p=Zi,g=pa,m=hi.DEFAULT_ANISOTROPY,v=yr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ax++}),this.uuid=_l(),this.name="",this.source=new Yd(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=d,this.anisotropy=m,this.format=p,this.internalFormat=null,this.type=g,this.offset=new Ee(0,0),this.repeat=new Ee(1,1),this.center=new Ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isTextureArray=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isTextureArray=t.isTextureArray,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Yv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case od:t.x=t.x-Math.floor(t.x);break;case Jr:t.x=t.x<0?0:1;break;case ld:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case od:t.y=t.y-Math.floor(t.y);break;case Jr:t.y=t.y<0?0:1;break;case ld:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}hi.DEFAULT_IMAGE=null;hi.DEFAULT_MAPPING=Yv;hi.DEFAULT_ANISOTROPY=1;class yn{constructor(t=0,i=0,r=0,l=1){yn.prototype.isVector4=!0,this.x=t,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,l){return this.x=t,this.y=i,this.z=r,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,c=this.w,d=t.elements;return this.x=d[0]*i+d[4]*r+d[8]*l+d[12]*c,this.y=d[1]*i+d[5]*r+d[9]*l+d[13]*c,this.z=d[2]*i+d[6]*r+d[10]*l+d[14]*c,this.w=d[3]*i+d[7]*r+d[11]*l+d[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,l,c;const g=t.elements,m=g[0],v=g[4],y=g[8],x=g[1],M=g[5],A=g[9],C=g[2],E=g[6],S=g[10];if(Math.abs(v-x)<.01&&Math.abs(y-C)<.01&&Math.abs(A-E)<.01){if(Math.abs(v+x)<.1&&Math.abs(y+C)<.1&&Math.abs(A+E)<.1&&Math.abs(m+M+S-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const H=(m+1)/2,O=(M+1)/2,j=(S+1)/2,I=(v+x)/4,k=(y+C)/4,K=(A+E)/4;return H>O&&H>j?H<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(H),l=I/r,c=k/r):O>j?O<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(O),r=I/l,c=K/l):j<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(j),r=k/c,l=K/c),this.set(r,l,c,i),this}let G=Math.sqrt((E-A)*(E-A)+(y-C)*(y-C)+(x-v)*(x-v));return Math.abs(G)<.001&&(G=1),this.x=(E-A)/G,this.y=(y-C)/G,this.z=(x-v)/G,this.w=Math.acos((m+M+S-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Pe(this.x,t.x,i.x),this.y=Pe(this.y,t.y,i.y),this.z=Pe(this.z,t.z,i.z),this.w=Pe(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Pe(this.x,t,i),this.y=Pe(this.y,t,i),this.z=Pe(this.z,t,i),this.w=Pe(this.w,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Pe(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Rx extends is{constructor(t=1,i=1,r={}){super(),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=r.depth?r.depth:1,this.scissor=new yn(0,0,t,i),this.scissorTest=!1,this.viewport=new yn(0,0,t,i);const l={width:t,height:i,depth:this.depth};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ha,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,multiview:!1},r);const c=new hi(l,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);c.flipY=!1,c.generateMipmaps=r.generateMipmaps,c.internalFormat=r.internalFormat,this.textures=[];const d=r.count;for(let p=0;p<d;p++)this.textures[p]=c.clone(),this.textures[p].isRenderTargetTexture=!0,this.textures[p].renderTarget=this;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,r=1){if(this.width!==t||this.height!==i||this.depth!==r){this.width=t,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=r;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Yd(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class es extends Rx{constructor(t=1,i=1,r={}){super(t,i,r),this.isWebGLRenderTarget=!0}}class r0 extends hi{constructor(t=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=Qi,this.minFilter=Qi,this.wrapR=Jr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class wx extends hi{constructor(t=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=Qi,this.minFilter=Qi,this.wrapR=Jr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ns{constructor(t=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=r,this._w=l}static slerpFlat(t,i,r,l,c,d,p){let g=r[l+0],m=r[l+1],v=r[l+2],y=r[l+3];const x=c[d+0],M=c[d+1],A=c[d+2],C=c[d+3];if(p===0){t[i+0]=g,t[i+1]=m,t[i+2]=v,t[i+3]=y;return}if(p===1){t[i+0]=x,t[i+1]=M,t[i+2]=A,t[i+3]=C;return}if(y!==C||g!==x||m!==M||v!==A){let E=1-p;const S=g*x+m*M+v*A+y*C,G=S>=0?1:-1,H=1-S*S;if(H>Number.EPSILON){const j=Math.sqrt(H),I=Math.atan2(j,S*G);E=Math.sin(E*I)/j,p=Math.sin(p*I)/j}const O=p*G;if(g=g*E+x*O,m=m*E+M*O,v=v*E+A*O,y=y*E+C*O,E===1-p){const j=1/Math.sqrt(g*g+m*m+v*v+y*y);g*=j,m*=j,v*=j,y*=j}}t[i]=g,t[i+1]=m,t[i+2]=v,t[i+3]=y}static multiplyQuaternionsFlat(t,i,r,l,c,d){const p=r[l],g=r[l+1],m=r[l+2],v=r[l+3],y=c[d],x=c[d+1],M=c[d+2],A=c[d+3];return t[i]=p*A+v*y+g*M-m*x,t[i+1]=g*A+v*x+m*y-p*M,t[i+2]=m*A+v*M+p*x-g*y,t[i+3]=v*A-p*y-g*x-m*M,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,r,l){return this._x=t,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const r=t._x,l=t._y,c=t._z,d=t._order,p=Math.cos,g=Math.sin,m=p(r/2),v=p(l/2),y=p(c/2),x=g(r/2),M=g(l/2),A=g(c/2);switch(d){case"XYZ":this._x=x*v*y+m*M*A,this._y=m*M*y-x*v*A,this._z=m*v*A+x*M*y,this._w=m*v*y-x*M*A;break;case"YXZ":this._x=x*v*y+m*M*A,this._y=m*M*y-x*v*A,this._z=m*v*A-x*M*y,this._w=m*v*y+x*M*A;break;case"ZXY":this._x=x*v*y-m*M*A,this._y=m*M*y+x*v*A,this._z=m*v*A+x*M*y,this._w=m*v*y-x*M*A;break;case"ZYX":this._x=x*v*y-m*M*A,this._y=m*M*y+x*v*A,this._z=m*v*A-x*M*y,this._w=m*v*y+x*M*A;break;case"YZX":this._x=x*v*y+m*M*A,this._y=m*M*y+x*v*A,this._z=m*v*A-x*M*y,this._w=m*v*y-x*M*A;break;case"XZY":this._x=x*v*y-m*M*A,this._y=m*M*y-x*v*A,this._z=m*v*A+x*M*y,this._w=m*v*y+x*M*A;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const r=i/2,l=Math.sin(r);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,r=i[0],l=i[4],c=i[8],d=i[1],p=i[5],g=i[9],m=i[2],v=i[6],y=i[10],x=r+p+y;if(x>0){const M=.5/Math.sqrt(x+1);this._w=.25/M,this._x=(v-g)*M,this._y=(c-m)*M,this._z=(d-l)*M}else if(r>p&&r>y){const M=2*Math.sqrt(1+r-p-y);this._w=(v-g)/M,this._x=.25*M,this._y=(l+d)/M,this._z=(c+m)/M}else if(p>y){const M=2*Math.sqrt(1+p-r-y);this._w=(c-m)/M,this._x=(l+d)/M,this._y=.25*M,this._z=(g+v)/M}else{const M=2*Math.sqrt(1+y-r-p);this._w=(d-l)/M,this._x=(c+m)/M,this._y=(g+v)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let r=t.dot(i)+1;return r<Number.EPSILON?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Pe(this.dot(t),-1,1)))}rotateTowards(t,i){const r=this.angleTo(t);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const r=t._x,l=t._y,c=t._z,d=t._w,p=i._x,g=i._y,m=i._z,v=i._w;return this._x=r*v+d*p+l*m-c*g,this._y=l*v+d*g+c*p-r*m,this._z=c*v+d*m+r*g-l*p,this._w=d*v-r*p-l*g-c*m,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const r=this._x,l=this._y,c=this._z,d=this._w;let p=d*t._w+r*t._x+l*t._y+c*t._z;if(p<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,p=-p):this.copy(t),p>=1)return this._w=d,this._x=r,this._y=l,this._z=c,this;const g=1-p*p;if(g<=Number.EPSILON){const M=1-i;return this._w=M*d+i*this._w,this._x=M*r+i*this._x,this._y=M*l+i*this._y,this._z=M*c+i*this._z,this.normalize(),this}const m=Math.sqrt(g),v=Math.atan2(m,p),y=Math.sin((1-i)*v)/m,x=Math.sin(i*v)/m;return this._w=d*y+this._w*x,this._x=r*y+this._x*x,this._y=l*y+this._y*x,this._z=c*y+this._z*x,this._onChangeCallback(),this}slerpQuaternions(t,i,r){return this.copy(t).slerp(i,r)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class st{constructor(t=0,i=0,r=0){st.prototype.isVector3=!0,this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(z_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(z_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,c=t.elements,d=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*d,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*d,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*d,this}applyQuaternion(t){const i=this.x,r=this.y,l=this.z,c=t.x,d=t.y,p=t.z,g=t.w,m=2*(d*l-p*r),v=2*(p*i-c*l),y=2*(c*r-d*i);return this.x=i+g*m+d*y-p*v,this.y=r+g*v+p*m-c*y,this.z=l+g*y+c*v-d*m,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Pe(this.x,t.x,i.x),this.y=Pe(this.y,t.y,i.y),this.z=Pe(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Pe(this.x,t,i),this.y=Pe(this.y,t,i),this.z=Pe(this.z,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Pe(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const r=t.x,l=t.y,c=t.z,d=i.x,p=i.y,g=i.z;return this.x=l*g-c*p,this.y=c*d-r*g,this.z=r*p-l*d,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return yh.copy(this).projectOnVector(t),this.sub(yh)}reflect(t){return this.sub(yh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(Pe(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y,l=this.z-t.z;return i*i+r*r+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){const l=Math.sin(i)*t;return this.x=l*Math.sin(r),this.y=Math.cos(i)*t,this.z=l*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const yh=new st,z_=new ns;class co{constructor(t=new st(1/0,1/0,1/0),i=new st(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i+=3)this.expandByPoint(Wi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,r=t.count;i<r;i++)this.expandByPoint(Wi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const r=Wi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let d=0,p=c.count;d<p;d++)t.isMesh===!0?t.getVertexPosition(d,Wi):Wi.fromBufferAttribute(c,d),Wi.applyMatrix4(t.matrixWorld),this.expandByPoint(Wi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),bc.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),bc.copy(r.boundingBox)),bc.applyMatrix4(t.matrixWorld),this.union(bc)}const l=t.children;for(let c=0,d=l.length;c<d;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Wi),Wi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,r;return t.normal.x>0?(i=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),i<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(al),Tc.subVectors(this.max,al),Gs.subVectors(t.a,al),Vs.subVectors(t.b,al),ks.subVectors(t.c,al),hr.subVectors(Vs,Gs),dr.subVectors(ks,Vs),Vr.subVectors(Gs,ks);let i=[0,-hr.z,hr.y,0,-dr.z,dr.y,0,-Vr.z,Vr.y,hr.z,0,-hr.x,dr.z,0,-dr.x,Vr.z,0,-Vr.x,-hr.y,hr.x,0,-dr.y,dr.x,0,-Vr.y,Vr.x,0];return!Sh(i,Gs,Vs,ks,Tc)||(i=[1,0,0,0,1,0,0,0,1],!Sh(i,Gs,Vs,ks,Tc))?!1:(Ac.crossVectors(hr,dr),i=[Ac.x,Ac.y,Ac.z],Sh(i,Gs,Vs,ks,Tc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Wi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Wi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(La[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),La[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),La[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),La[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),La[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),La[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),La[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),La[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(La),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const La=[new st,new st,new st,new st,new st,new st,new st,new st],Wi=new st,bc=new co,Gs=new st,Vs=new st,ks=new st,hr=new st,dr=new st,Vr=new st,al=new st,Tc=new st,Ac=new st,kr=new st;function Sh(o,t,i,r,l){for(let c=0,d=o.length-3;c<=d;c+=3){kr.fromArray(o,c);const p=l.x*Math.abs(kr.x)+l.y*Math.abs(kr.y)+l.z*Math.abs(kr.z),g=t.dot(kr),m=i.dot(kr),v=r.dot(kr);if(Math.max(-Math.max(g,m,v),Math.min(g,m,v))>p)return!1}return!0}const Cx=new co,rl=new st,xh=new st;class uo{constructor(t=new st,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const r=this.center;i!==void 0?r.copy(i):Cx.setFromPoints(t).getCenter(r);let l=0;for(let c=0,d=t.length;c<d;c++)l=Math.max(l,r.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const r=this.center.distanceToSquared(t);return i.copy(t),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;rl.subVectors(t,this.center);const i=rl.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(rl,l/r),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(xh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(rl.copy(t.center).add(xh)),this.expandByPoint(rl.copy(t.center).sub(xh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Na=new st,Eh=new st,Rc=new st,pr=new st,Mh=new st,wc=new st,bh=new st;class fu{constructor(t=new st,i=new st(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Na)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=Na.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(Na.copy(this.origin).addScaledVector(this.direction,i),Na.distanceToSquared(t))}distanceSqToSegment(t,i,r,l){Eh.copy(t).add(i).multiplyScalar(.5),Rc.copy(i).sub(t).normalize(),pr.copy(this.origin).sub(Eh);const c=t.distanceTo(i)*.5,d=-this.direction.dot(Rc),p=pr.dot(this.direction),g=-pr.dot(Rc),m=pr.lengthSq(),v=Math.abs(1-d*d);let y,x,M,A;if(v>0)if(y=d*g-p,x=d*p-g,A=c*v,y>=0)if(x>=-A)if(x<=A){const C=1/v;y*=C,x*=C,M=y*(y+d*x+2*p)+x*(d*y+x+2*g)+m}else x=c,y=Math.max(0,-(d*x+p)),M=-y*y+x*(x+2*g)+m;else x=-c,y=Math.max(0,-(d*x+p)),M=-y*y+x*(x+2*g)+m;else x<=-A?(y=Math.max(0,-(-d*c+p)),x=y>0?-c:Math.min(Math.max(-c,-g),c),M=-y*y+x*(x+2*g)+m):x<=A?(y=0,x=Math.min(Math.max(-c,-g),c),M=x*(x+2*g)+m):(y=Math.max(0,-(d*c+p)),x=y>0?c:Math.min(Math.max(-c,-g),c),M=-y*y+x*(x+2*g)+m);else x=d>0?-c:c,y=Math.max(0,-(d*x+p)),M=-y*y+x*(x+2*g)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,y),l&&l.copy(Eh).addScaledVector(Rc,x),M}intersectSphere(t,i){Na.subVectors(t.center,this.origin);const r=Na.dot(this.direction),l=Na.dot(Na)-r*r,c=t.radius*t.radius;if(l>c)return null;const d=Math.sqrt(c-l),p=r-d,g=r+d;return g<0?null:p<0?this.at(g,i):this.at(p,i)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/i;return r>=0?r:null}intersectPlane(t,i){const r=this.distanceToPlane(t);return r===null?null:this.at(r,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let r,l,c,d,p,g;const m=1/this.direction.x,v=1/this.direction.y,y=1/this.direction.z,x=this.origin;return m>=0?(r=(t.min.x-x.x)*m,l=(t.max.x-x.x)*m):(r=(t.max.x-x.x)*m,l=(t.min.x-x.x)*m),v>=0?(c=(t.min.y-x.y)*v,d=(t.max.y-x.y)*v):(c=(t.max.y-x.y)*v,d=(t.min.y-x.y)*v),r>d||c>l||((c>r||isNaN(r))&&(r=c),(d<l||isNaN(l))&&(l=d),y>=0?(p=(t.min.z-x.z)*y,g=(t.max.z-x.z)*y):(p=(t.max.z-x.z)*y,g=(t.min.z-x.z)*y),r>g||p>l)||((p>r||r!==r)&&(r=p),(g<l||l!==l)&&(l=g),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(t){return this.intersectBox(t,Na)!==null}intersectTriangle(t,i,r,l,c){Mh.subVectors(i,t),wc.subVectors(r,t),bh.crossVectors(Mh,wc);let d=this.direction.dot(bh),p;if(d>0){if(l)return null;p=1}else if(d<0)p=-1,d=-d;else return null;pr.subVectors(this.origin,t);const g=p*this.direction.dot(wc.crossVectors(pr,wc));if(g<0)return null;const m=p*this.direction.dot(Mh.cross(pr));if(m<0||g+m>d)return null;const v=-p*pr.dot(bh);return v<0?null:this.at(v/d,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class hn{constructor(t,i,r,l,c,d,p,g,m,v,y,x,M,A,C,E){hn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,l,c,d,p,g,m,v,y,x,M,A,C,E)}set(t,i,r,l,c,d,p,g,m,v,y,x,M,A,C,E){const S=this.elements;return S[0]=t,S[4]=i,S[8]=r,S[12]=l,S[1]=c,S[5]=d,S[9]=p,S[13]=g,S[2]=m,S[6]=v,S[10]=y,S[14]=x,S[3]=M,S[7]=A,S[11]=C,S[15]=E,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new hn().fromArray(this.elements)}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){const i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,r=t.elements,l=1/Xs.setFromMatrixColumn(t,0).length(),c=1/Xs.setFromMatrixColumn(t,1).length(),d=1/Xs.setFromMatrixColumn(t,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*d,i[9]=r[9]*d,i[10]=r[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,r=t.x,l=t.y,c=t.z,d=Math.cos(r),p=Math.sin(r),g=Math.cos(l),m=Math.sin(l),v=Math.cos(c),y=Math.sin(c);if(t.order==="XYZ"){const x=d*v,M=d*y,A=p*v,C=p*y;i[0]=g*v,i[4]=-g*y,i[8]=m,i[1]=M+A*m,i[5]=x-C*m,i[9]=-p*g,i[2]=C-x*m,i[6]=A+M*m,i[10]=d*g}else if(t.order==="YXZ"){const x=g*v,M=g*y,A=m*v,C=m*y;i[0]=x+C*p,i[4]=A*p-M,i[8]=d*m,i[1]=d*y,i[5]=d*v,i[9]=-p,i[2]=M*p-A,i[6]=C+x*p,i[10]=d*g}else if(t.order==="ZXY"){const x=g*v,M=g*y,A=m*v,C=m*y;i[0]=x-C*p,i[4]=-d*y,i[8]=A+M*p,i[1]=M+A*p,i[5]=d*v,i[9]=C-x*p,i[2]=-d*m,i[6]=p,i[10]=d*g}else if(t.order==="ZYX"){const x=d*v,M=d*y,A=p*v,C=p*y;i[0]=g*v,i[4]=A*m-M,i[8]=x*m+C,i[1]=g*y,i[5]=C*m+x,i[9]=M*m-A,i[2]=-m,i[6]=p*g,i[10]=d*g}else if(t.order==="YZX"){const x=d*g,M=d*m,A=p*g,C=p*m;i[0]=g*v,i[4]=C-x*y,i[8]=A*y+M,i[1]=y,i[5]=d*v,i[9]=-p*v,i[2]=-m*v,i[6]=M*y+A,i[10]=x-C*y}else if(t.order==="XZY"){const x=d*g,M=d*m,A=p*g,C=p*m;i[0]=g*v,i[4]=-y,i[8]=m*v,i[1]=x*y+C,i[5]=d*v,i[9]=M*y-A,i[2]=A*y-M,i[6]=p*v,i[10]=C*y+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Dx,t,Ux)}lookAt(t,i,r){const l=this.elements;return Ei.subVectors(t,i),Ei.lengthSq()===0&&(Ei.z=1),Ei.normalize(),mr.crossVectors(r,Ei),mr.lengthSq()===0&&(Math.abs(r.z)===1?Ei.x+=1e-4:Ei.z+=1e-4,Ei.normalize(),mr.crossVectors(r,Ei)),mr.normalize(),Cc.crossVectors(Ei,mr),l[0]=mr.x,l[4]=Cc.x,l[8]=Ei.x,l[1]=mr.y,l[5]=Cc.y,l[9]=Ei.y,l[2]=mr.z,l[6]=Cc.z,l[10]=Ei.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,c=this.elements,d=r[0],p=r[4],g=r[8],m=r[12],v=r[1],y=r[5],x=r[9],M=r[13],A=r[2],C=r[6],E=r[10],S=r[14],G=r[3],H=r[7],O=r[11],j=r[15],I=l[0],k=l[4],K=l[8],P=l[12],N=l[1],Y=l[5],gt=l[9],ft=l[13],vt=l[2],xt=l[6],V=l[10],ot=l[14],$=l[3],Lt=l[7],F=l[11],rt=l[15];return c[0]=d*I+p*N+g*vt+m*$,c[4]=d*k+p*Y+g*xt+m*Lt,c[8]=d*K+p*gt+g*V+m*F,c[12]=d*P+p*ft+g*ot+m*rt,c[1]=v*I+y*N+x*vt+M*$,c[5]=v*k+y*Y+x*xt+M*Lt,c[9]=v*K+y*gt+x*V+M*F,c[13]=v*P+y*ft+x*ot+M*rt,c[2]=A*I+C*N+E*vt+S*$,c[6]=A*k+C*Y+E*xt+S*Lt,c[10]=A*K+C*gt+E*V+S*F,c[14]=A*P+C*ft+E*ot+S*rt,c[3]=G*I+H*N+O*vt+j*$,c[7]=G*k+H*Y+O*xt+j*Lt,c[11]=G*K+H*gt+O*V+j*F,c[15]=G*P+H*ft+O*ot+j*rt,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[4],l=t[8],c=t[12],d=t[1],p=t[5],g=t[9],m=t[13],v=t[2],y=t[6],x=t[10],M=t[14],A=t[3],C=t[7],E=t[11],S=t[15];return A*(+c*g*y-l*m*y-c*p*x+r*m*x+l*p*M-r*g*M)+C*(+i*g*M-i*m*x+c*d*x-l*d*M+l*m*v-c*g*v)+E*(+i*m*y-i*p*M-c*d*y+r*d*M+c*p*v-r*m*v)+S*(-l*p*v-i*g*y+i*p*x+l*d*y-r*d*x+r*g*v)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=r),this}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],d=t[4],p=t[5],g=t[6],m=t[7],v=t[8],y=t[9],x=t[10],M=t[11],A=t[12],C=t[13],E=t[14],S=t[15],G=y*E*m-C*x*m+C*g*M-p*E*M-y*g*S+p*x*S,H=A*x*m-v*E*m-A*g*M+d*E*M+v*g*S-d*x*S,O=v*C*m-A*y*m+A*p*M-d*C*M-v*p*S+d*y*S,j=A*y*g-v*C*g-A*p*x+d*C*x+v*p*E-d*y*E,I=i*G+r*H+l*O+c*j;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/I;return t[0]=G*k,t[1]=(C*x*c-y*E*c-C*l*M+r*E*M+y*l*S-r*x*S)*k,t[2]=(p*E*c-C*g*c+C*l*m-r*E*m-p*l*S+r*g*S)*k,t[3]=(y*g*c-p*x*c-y*l*m+r*x*m+p*l*M-r*g*M)*k,t[4]=H*k,t[5]=(v*E*c-A*x*c+A*l*M-i*E*M-v*l*S+i*x*S)*k,t[6]=(A*g*c-d*E*c-A*l*m+i*E*m+d*l*S-i*g*S)*k,t[7]=(d*x*c-v*g*c+v*l*m-i*x*m-d*l*M+i*g*M)*k,t[8]=O*k,t[9]=(A*y*c-v*C*c-A*r*M+i*C*M+v*r*S-i*y*S)*k,t[10]=(d*C*c-A*p*c+A*r*m-i*C*m-d*r*S+i*p*S)*k,t[11]=(v*p*c-d*y*c-v*r*m+i*y*m+d*r*M-i*p*M)*k,t[12]=j*k,t[13]=(v*C*l-A*y*l+A*r*x-i*C*x-v*r*E+i*y*E)*k,t[14]=(A*p*l-d*C*l-A*r*g+i*C*g+d*r*E-i*p*E)*k,t[15]=(d*y*l-v*p*l+v*r*g-i*y*g-d*r*x+i*p*x)*k,this}scale(t){const i=this.elements,r=t.x,l=t.y,c=t.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,d=t.x,p=t.y,g=t.z,m=c*d,v=c*p;return this.set(m*d+r,m*p-l*g,m*g+l*p,0,m*p+l*g,v*p+r,v*g-l*d,0,m*g-l*p,v*g+l*d,c*g*g+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,l,c,d){return this.set(1,r,c,0,t,1,d,0,i,l,1,0,0,0,0,1),this}compose(t,i,r){const l=this.elements,c=i._x,d=i._y,p=i._z,g=i._w,m=c+c,v=d+d,y=p+p,x=c*m,M=c*v,A=c*y,C=d*v,E=d*y,S=p*y,G=g*m,H=g*v,O=g*y,j=r.x,I=r.y,k=r.z;return l[0]=(1-(C+S))*j,l[1]=(M+O)*j,l[2]=(A-H)*j,l[3]=0,l[4]=(M-O)*I,l[5]=(1-(x+S))*I,l[6]=(E+G)*I,l[7]=0,l[8]=(A+H)*k,l[9]=(E-G)*k,l[10]=(1-(x+C))*k,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,r){const l=this.elements;let c=Xs.set(l[0],l[1],l[2]).length();const d=Xs.set(l[4],l[5],l[6]).length(),p=Xs.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),t.x=l[12],t.y=l[13],t.z=l[14],qi.copy(this);const m=1/c,v=1/d,y=1/p;return qi.elements[0]*=m,qi.elements[1]*=m,qi.elements[2]*=m,qi.elements[4]*=v,qi.elements[5]*=v,qi.elements[6]*=v,qi.elements[8]*=y,qi.elements[9]*=y,qi.elements[10]*=y,i.setFromRotationMatrix(qi),r.x=c,r.y=d,r.z=p,this}makePerspective(t,i,r,l,c,d,p=Ga){const g=this.elements,m=2*c/(i-t),v=2*c/(r-l),y=(i+t)/(i-t),x=(r+l)/(r-l);let M,A;if(p===Ga)M=-(d+c)/(d-c),A=-2*d*c/(d-c);else if(p===su)M=-d/(d-c),A=-d*c/(d-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+p);return g[0]=m,g[4]=0,g[8]=y,g[12]=0,g[1]=0,g[5]=v,g[9]=x,g[13]=0,g[2]=0,g[6]=0,g[10]=M,g[14]=A,g[3]=0,g[7]=0,g[11]=-1,g[15]=0,this}makeOrthographic(t,i,r,l,c,d,p=Ga){const g=this.elements,m=1/(i-t),v=1/(r-l),y=1/(d-c),x=(i+t)*m,M=(r+l)*v;let A,C;if(p===Ga)A=(d+c)*y,C=-2*y;else if(p===su)A=c*y,C=-1*y;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+p);return g[0]=2*m,g[4]=0,g[8]=0,g[12]=-x,g[1]=0,g[5]=2*v,g[9]=0,g[13]=-M,g[2]=0,g[6]=0,g[10]=C,g[14]=-A,g[3]=0,g[7]=0,g[11]=0,g[15]=1,this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}}const Xs=new st,qi=new hn,Dx=new st(0,0,0),Ux=new st(1,1,1),mr=new st,Cc=new st,Ei=new st,I_=new hn,H_=new ns;class ma{constructor(t=0,i=0,r=0,l=ma.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,l=this._order){return this._x=t,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){const l=t.elements,c=l[0],d=l[4],p=l[8],g=l[1],m=l[5],v=l[9],y=l[2],x=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(Pe(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-v,M),this._z=Math.atan2(-d,c)):(this._x=Math.atan2(x,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Pe(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(p,M),this._z=Math.atan2(g,m)):(this._y=Math.atan2(-y,c),this._z=0);break;case"ZXY":this._x=Math.asin(Pe(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-y,M),this._z=Math.atan2(-d,m)):(this._y=0,this._z=Math.atan2(g,c));break;case"ZYX":this._y=Math.asin(-Pe(y,-1,1)),Math.abs(y)<.9999999?(this._x=Math.atan2(x,M),this._z=Math.atan2(g,c)):(this._x=0,this._z=Math.atan2(-d,m));break;case"YZX":this._z=Math.asin(Pe(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(-v,m),this._y=Math.atan2(-y,c)):(this._x=0,this._y=Math.atan2(p,M));break;case"XZY":this._z=Math.asin(-Pe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(x,m),this._y=Math.atan2(p,c)):(this._x=Math.atan2(-v,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return I_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(I_,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return H_.setFromEuler(this),this.setFromQuaternion(H_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ma.DEFAULT_ORDER="XYZ";class s0{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Lx=0;const G_=new st,Ws=new ns,Oa=new hn,Dc=new st,sl=new st,Nx=new st,Ox=new ns,V_=new st(1,0,0),k_=new st(0,1,0),X_=new st(0,0,1),W_={type:"added"},Px={type:"removed"},qs={type:"childadded",child:null},Th={type:"childremoved",child:null};class Vn extends is{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Lx++}),this.uuid=_l(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Vn.DEFAULT_UP.clone();const t=new st,i=new ma,r=new ns,l=new st(1,1,1);function c(){r.setFromEuler(i,!1)}function d(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new hn},normalMatrix:{value:new xe}}),this.matrix=new hn,this.matrixWorld=new hn,this.matrixAutoUpdate=Vn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new s0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Ws.setFromAxisAngle(t,i),this.quaternion.multiply(Ws),this}rotateOnWorldAxis(t,i){return Ws.setFromAxisAngle(t,i),this.quaternion.premultiply(Ws),this}rotateX(t){return this.rotateOnAxis(V_,t)}rotateY(t){return this.rotateOnAxis(k_,t)}rotateZ(t){return this.rotateOnAxis(X_,t)}translateOnAxis(t,i){return G_.copy(t).applyQuaternion(this.quaternion),this.position.add(G_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(V_,t)}translateY(t){return this.translateOnAxis(k_,t)}translateZ(t){return this.translateOnAxis(X_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Oa.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?Dc.copy(t):Dc.set(t,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),sl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Oa.lookAt(sl,Dc,this.up):Oa.lookAt(Dc,sl,this.up),this.quaternion.setFromRotationMatrix(Oa),l&&(Oa.extractRotation(l.matrixWorld),Ws.setFromRotationMatrix(Oa),this.quaternion.premultiply(Ws.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(W_),qs.child=t,this.dispatchEvent(qs),qs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(Px),Th.child=t,this.dispatchEvent(Th),Th.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Oa.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Oa.multiply(t.parent.matrixWorld)),t.applyMatrix4(Oa),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(W_),qs.child=t,this.dispatchEvent(qs),qs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const d=this.children[r].getObjectByProperty(t,i);if(d!==void 0)return d}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sl,t,Nx),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sl,Ox,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(p=>({...p,boundingBox:p.boundingBox?{min:p.boundingBox.min.toArray(),max:p.boundingBox.max.toArray()}:void 0,boundingSphere:p.boundingSphere?{radius:p.boundingSphere.radius,center:p.boundingSphere.center.toArray()}:void 0})),l.instanceInfo=this._instanceInfo.map(p=>({...p})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere={center:this.boundingSphere.center.toArray(),radius:this.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:this.boundingBox.min.toArray(),max:this.boundingBox.max.toArray()}));function c(p,g){return p[g.uuid]===void 0&&(p[g.uuid]=g.toJSON(t)),g.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){const g=p.shapes;if(Array.isArray(g))for(let m=0,v=g.length;m<v;m++){const y=g[m];c(t.shapes,y)}else c(t.shapes,g)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const p=[];for(let g=0,m=this.material.length;g<m;g++)p.push(c(t.materials,this.material[g]));l.material=p}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let p=0;p<this.children.length;p++)l.children.push(this.children[p].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let p=0;p<this.animations.length;p++){const g=this.animations[p];l.animations.push(c(t.animations,g))}}if(i){const p=d(t.geometries),g=d(t.materials),m=d(t.textures),v=d(t.images),y=d(t.shapes),x=d(t.skeletons),M=d(t.animations),A=d(t.nodes);p.length>0&&(r.geometries=p),g.length>0&&(r.materials=g),m.length>0&&(r.textures=m),v.length>0&&(r.images=v),y.length>0&&(r.shapes=y),x.length>0&&(r.skeletons=x),M.length>0&&(r.animations=M),A.length>0&&(r.nodes=A)}return r.object=l,r;function d(p){const g=[];for(const m in p){const v=p[m];delete v.metadata,g.push(v)}return g}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){const l=t.children[r];this.add(l.clone())}return this}}Vn.DEFAULT_UP=new st(0,1,0);Vn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Yi=new st,Pa=new st,Ah=new st,Ba=new st,Ys=new st,js=new st,q_=new st,Rh=new st,wh=new st,Ch=new st,Dh=new yn,Uh=new yn,Lh=new yn;class ji{constructor(t=new st,i=new st,r=new st){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,l){l.subVectors(r,i),Yi.subVectors(t,i),l.cross(Yi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,r,l,c){Yi.subVectors(l,i),Pa.subVectors(r,i),Ah.subVectors(t,i);const d=Yi.dot(Yi),p=Yi.dot(Pa),g=Yi.dot(Ah),m=Pa.dot(Pa),v=Pa.dot(Ah),y=d*m-p*p;if(y===0)return c.set(0,0,0),null;const x=1/y,M=(m*g-p*v)*x,A=(d*v-p*g)*x;return c.set(1-M-A,A,M)}static containsPoint(t,i,r,l){return this.getBarycoord(t,i,r,l,Ba)===null?!1:Ba.x>=0&&Ba.y>=0&&Ba.x+Ba.y<=1}static getInterpolation(t,i,r,l,c,d,p,g){return this.getBarycoord(t,i,r,l,Ba)===null?(g.x=0,g.y=0,"z"in g&&(g.z=0),"w"in g&&(g.w=0),null):(g.setScalar(0),g.addScaledVector(c,Ba.x),g.addScaledVector(d,Ba.y),g.addScaledVector(p,Ba.z),g)}static getInterpolatedAttribute(t,i,r,l,c,d){return Dh.setScalar(0),Uh.setScalar(0),Lh.setScalar(0),Dh.fromBufferAttribute(t,i),Uh.fromBufferAttribute(t,r),Lh.fromBufferAttribute(t,l),d.setScalar(0),d.addScaledVector(Dh,c.x),d.addScaledVector(Uh,c.y),d.addScaledVector(Lh,c.z),d}static isFrontFacing(t,i,r,l){return Yi.subVectors(r,i),Pa.subVectors(t,i),Yi.cross(Pa).dot(l)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,l){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,r,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Yi.subVectors(this.c,this.b),Pa.subVectors(this.a,this.b),Yi.cross(Pa).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ji.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return ji.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,l,c){return ji.getInterpolation(t,this.a,this.b,this.c,i,r,l,c)}containsPoint(t){return ji.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ji.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const r=this.a,l=this.b,c=this.c;let d,p;Ys.subVectors(l,r),js.subVectors(c,r),Rh.subVectors(t,r);const g=Ys.dot(Rh),m=js.dot(Rh);if(g<=0&&m<=0)return i.copy(r);wh.subVectors(t,l);const v=Ys.dot(wh),y=js.dot(wh);if(v>=0&&y<=v)return i.copy(l);const x=g*y-v*m;if(x<=0&&g>=0&&v<=0)return d=g/(g-v),i.copy(r).addScaledVector(Ys,d);Ch.subVectors(t,c);const M=Ys.dot(Ch),A=js.dot(Ch);if(A>=0&&M<=A)return i.copy(c);const C=M*m-g*A;if(C<=0&&m>=0&&A<=0)return p=m/(m-A),i.copy(r).addScaledVector(js,p);const E=v*A-M*y;if(E<=0&&y-v>=0&&M-A>=0)return q_.subVectors(c,l),p=(y-v)/(y-v+(M-A)),i.copy(l).addScaledVector(q_,p);const S=1/(E+C+x);return d=C*S,p=x*S,i.copy(r).addScaledVector(Ys,d).addScaledVector(js,p)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const o0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gr={h:0,s:0,l:0},Uc={h:0,s:0,l:0};function Nh(o,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(t-o)*6*i:i<1/2?t:i<2/3?o+(t-o)*6*(2/3-i):o}class Ie{constructor(t,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,r)}set(t,i,r){if(i===void 0&&r===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=Ti){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Xe.toWorkingColorSpace(this,i),this}setRGB(t,i,r,l=Xe.workingColorSpace){return this.r=t,this.g=i,this.b=r,Xe.toWorkingColorSpace(this,l),this}setHSL(t,i,r,l=Xe.workingColorSpace){if(t=_x(t,1),i=Pe(i,0,1),r=Pe(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,d=2*r-c;this.r=Nh(d,c,t+1/3),this.g=Nh(d,c,t),this.b=Nh(d,c,t-1/3)}return Xe.toWorkingColorSpace(this,l),this}setStyle(t,i=Ti){function r(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const d=l[1],p=l[2];switch(d){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],d=c.length;if(d===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=Ti){const r=o0[t.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Va(t.r),this.g=Va(t.g),this.b=Va(t.b),this}copyLinearToSRGB(t){return this.r=io(t.r),this.g=io(t.g),this.b=io(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ti){return Xe.fromWorkingColorSpace(ti.copy(this),t),Math.round(Pe(ti.r*255,0,255))*65536+Math.round(Pe(ti.g*255,0,255))*256+Math.round(Pe(ti.b*255,0,255))}getHexString(t=Ti){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Xe.workingColorSpace){Xe.fromWorkingColorSpace(ti.copy(this),i);const r=ti.r,l=ti.g,c=ti.b,d=Math.max(r,l,c),p=Math.min(r,l,c);let g,m;const v=(p+d)/2;if(p===d)g=0,m=0;else{const y=d-p;switch(m=v<=.5?y/(d+p):y/(2-d-p),d){case r:g=(l-c)/y+(l<c?6:0);break;case l:g=(c-r)/y+2;break;case c:g=(r-l)/y+4;break}g/=6}return t.h=g,t.s=m,t.l=v,t}getRGB(t,i=Xe.workingColorSpace){return Xe.fromWorkingColorSpace(ti.copy(this),i),t.r=ti.r,t.g=ti.g,t.b=ti.b,t}getStyle(t=Ti){Xe.fromWorkingColorSpace(ti.copy(this),t);const i=ti.r,r=ti.g,l=ti.b;return t!==Ti?`color(${t} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(t,i,r){return this.getHSL(gr),this.setHSL(gr.h+t,gr.s+i,gr.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,r){return this.r=t.r+(i.r-t.r)*r,this.g=t.g+(i.g-t.g)*r,this.b=t.b+(i.b-t.b)*r,this}lerpHSL(t,i){this.getHSL(gr),t.getHSL(Uc);const r=gh(gr.h,Uc.h,i),l=gh(gr.s,Uc.s,i),c=gh(gr.l,Uc.l,i);return this.setHSL(r,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,r=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ti=new Ie;Ie.NAMES=o0;let Bx=0;class ka extends is{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Bx++}),this.uuid=_l(),this.name="",this.type="Material",this.blending=no,this.side=Er,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Kh,this.blendDst=Qh,this.blendEquation=Kr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ie(0,0,0),this.blendAlpha=0,this.depthFunc=ao,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=L_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Is,this.stencilZFail=Is,this.stencilZPass=Is,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const r=t[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==no&&(r.blending=this.blending),this.side!==Er&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Kh&&(r.blendSrc=this.blendSrc),this.blendDst!==Qh&&(r.blendDst=this.blendDst),this.blendEquation!==Kr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==ao&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==L_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Is&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Is&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Is&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const d=[];for(const p in c){const g=c[p];delete g.metadata,d.push(g)}return d}if(i){const c=l(t.textures),d=l(t.images);c.length>0&&(r.textures=c),d.length>0&&(r.images=d)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class l0 extends ka{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ma,this.combine=Hd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Cn=new st,Lc=new Ee;let Fx=0;class da{constructor(t,i,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Fx++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=r,this.usage=N_,this.updateRanges=[],this.gpuType=Ha,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,r){t*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[r+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)Lc.fromBufferAttribute(this,i),Lc.applyMatrix3(t),this.setXY(i,Lc.x,Lc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)Cn.fromBufferAttribute(this,i),Cn.applyMatrix3(t),this.setXYZ(i,Cn.x,Cn.y,Cn.z);return this}applyMatrix4(t){for(let i=0,r=this.count;i<r;i++)Cn.fromBufferAttribute(this,i),Cn.applyMatrix4(t),this.setXYZ(i,Cn.x,Cn.y,Cn.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)Cn.fromBufferAttribute(this,i),Cn.applyNormalMatrix(t),this.setXYZ(i,Cn.x,Cn.y,Cn.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)Cn.fromBufferAttribute(this,i),Cn.transformDirection(t),this.setXYZ(i,Cn.x,Cn.y,Cn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let r=this.array[t*this.itemSize+i];return this.normalized&&(r=il(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=ci(r,this.array)),this.array[t*this.itemSize+i]=r,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=il(i,this.array)),i}setX(t,i){return this.normalized&&(i=ci(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=il(i,this.array)),i}setY(t,i){return this.normalized&&(i=ci(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=il(i,this.array)),i}setZ(t,i){return this.normalized&&(i=ci(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=il(i,this.array)),i}setW(t,i){return this.normalized&&(i=ci(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,r){return t*=this.itemSize,this.normalized&&(i=ci(i,this.array),r=ci(r,this.array)),this.array[t+0]=i,this.array[t+1]=r,this}setXYZ(t,i,r,l){return t*=this.itemSize,this.normalized&&(i=ci(i,this.array),r=ci(r,this.array),l=ci(l,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this}setXYZW(t,i,r,l,c){return t*=this.itemSize,this.normalized&&(i=ci(i,this.array),r=ci(r,this.array),l=ci(l,this.array),c=ci(c,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==N_&&(t.usage=this.usage),t}}class c0 extends da{constructor(t,i,r){super(new Uint16Array(t),i,r)}}class u0 extends da{constructor(t,i,r){super(new Uint32Array(t),i,r)}}class ai extends da{constructor(t,i,r){super(new Float32Array(t),i,r)}}let zx=0;const Oi=new hn,Oh=new Vn,Zs=new st,Mi=new co,ol=new co,Gn=new st;class Ji extends is{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zx++}),this.uuid=_l(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(a0(t)?u0:c0)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new xe().getNormalMatrix(t);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Oi.makeRotationFromQuaternion(t),this.applyMatrix4(Oi),this}rotateX(t){return Oi.makeRotationX(t),this.applyMatrix4(Oi),this}rotateY(t){return Oi.makeRotationY(t),this.applyMatrix4(Oi),this}rotateZ(t){return Oi.makeRotationZ(t),this.applyMatrix4(Oi),this}translate(t,i,r){return Oi.makeTranslation(t,i,r),this.applyMatrix4(Oi),this}scale(t,i,r){return Oi.makeScale(t,i,r),this.applyMatrix4(Oi),this}lookAt(t){return Oh.lookAt(t),Oh.updateMatrix(),this.applyMatrix4(Oh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zs).negate(),this.translate(Zs.x,Zs.y,Zs.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=t.length;l<c;l++){const d=t[l];r.push(d.x,d.y,d.z||0)}this.setAttribute("position",new ai(r,3))}else{const r=Math.min(t.length,i.count);for(let l=0;l<r;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new co);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new st(-1/0,-1/0,-1/0),new st(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];Mi.setFromBufferAttribute(c),this.morphTargetsRelative?(Gn.addVectors(this.boundingBox.min,Mi.min),this.boundingBox.expandByPoint(Gn),Gn.addVectors(this.boundingBox.max,Mi.max),this.boundingBox.expandByPoint(Gn)):(this.boundingBox.expandByPoint(Mi.min),this.boundingBox.expandByPoint(Mi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new uo);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new st,1/0);return}if(t){const r=this.boundingSphere.center;if(Mi.setFromBufferAttribute(t),i)for(let c=0,d=i.length;c<d;c++){const p=i[c];ol.setFromBufferAttribute(p),this.morphTargetsRelative?(Gn.addVectors(Mi.min,ol.min),Mi.expandByPoint(Gn),Gn.addVectors(Mi.max,ol.max),Mi.expandByPoint(Gn)):(Mi.expandByPoint(ol.min),Mi.expandByPoint(ol.max))}Mi.getCenter(r);let l=0;for(let c=0,d=t.count;c<d;c++)Gn.fromBufferAttribute(t,c),l=Math.max(l,r.distanceToSquared(Gn));if(i)for(let c=0,d=i.length;c<d;c++){const p=i[c],g=this.morphTargetsRelative;for(let m=0,v=p.count;m<v;m++)Gn.fromBufferAttribute(p,m),g&&(Zs.fromBufferAttribute(t,m),Gn.add(Zs)),l=Math.max(l,r.distanceToSquared(Gn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new da(new Float32Array(4*r.count),4));const d=this.getAttribute("tangent"),p=[],g=[];for(let K=0;K<r.count;K++)p[K]=new st,g[K]=new st;const m=new st,v=new st,y=new st,x=new Ee,M=new Ee,A=new Ee,C=new st,E=new st;function S(K,P,N){m.fromBufferAttribute(r,K),v.fromBufferAttribute(r,P),y.fromBufferAttribute(r,N),x.fromBufferAttribute(c,K),M.fromBufferAttribute(c,P),A.fromBufferAttribute(c,N),v.sub(m),y.sub(m),M.sub(x),A.sub(x);const Y=1/(M.x*A.y-A.x*M.y);isFinite(Y)&&(C.copy(v).multiplyScalar(A.y).addScaledVector(y,-M.y).multiplyScalar(Y),E.copy(y).multiplyScalar(M.x).addScaledVector(v,-A.x).multiplyScalar(Y),p[K].add(C),p[P].add(C),p[N].add(C),g[K].add(E),g[P].add(E),g[N].add(E))}let G=this.groups;G.length===0&&(G=[{start:0,count:t.count}]);for(let K=0,P=G.length;K<P;++K){const N=G[K],Y=N.start,gt=N.count;for(let ft=Y,vt=Y+gt;ft<vt;ft+=3)S(t.getX(ft+0),t.getX(ft+1),t.getX(ft+2))}const H=new st,O=new st,j=new st,I=new st;function k(K){j.fromBufferAttribute(l,K),I.copy(j);const P=p[K];H.copy(P),H.sub(j.multiplyScalar(j.dot(P))).normalize(),O.crossVectors(I,P);const Y=O.dot(g[K])<0?-1:1;d.setXYZW(K,H.x,H.y,H.z,Y)}for(let K=0,P=G.length;K<P;++K){const N=G[K],Y=N.start,gt=N.count;for(let ft=Y,vt=Y+gt;ft<vt;ft+=3)k(t.getX(ft+0)),k(t.getX(ft+1)),k(t.getX(ft+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new da(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let x=0,M=r.count;x<M;x++)r.setXYZ(x,0,0,0);const l=new st,c=new st,d=new st,p=new st,g=new st,m=new st,v=new st,y=new st;if(t)for(let x=0,M=t.count;x<M;x+=3){const A=t.getX(x+0),C=t.getX(x+1),E=t.getX(x+2);l.fromBufferAttribute(i,A),c.fromBufferAttribute(i,C),d.fromBufferAttribute(i,E),v.subVectors(d,c),y.subVectors(l,c),v.cross(y),p.fromBufferAttribute(r,A),g.fromBufferAttribute(r,C),m.fromBufferAttribute(r,E),p.add(v),g.add(v),m.add(v),r.setXYZ(A,p.x,p.y,p.z),r.setXYZ(C,g.x,g.y,g.z),r.setXYZ(E,m.x,m.y,m.z)}else for(let x=0,M=i.count;x<M;x+=3)l.fromBufferAttribute(i,x+0),c.fromBufferAttribute(i,x+1),d.fromBufferAttribute(i,x+2),v.subVectors(d,c),y.subVectors(l,c),v.cross(y),r.setXYZ(x+0,v.x,v.y,v.z),r.setXYZ(x+1,v.x,v.y,v.z),r.setXYZ(x+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)Gn.fromBufferAttribute(t,i),Gn.normalize(),t.setXYZ(i,Gn.x,Gn.y,Gn.z)}toNonIndexed(){function t(p,g){const m=p.array,v=p.itemSize,y=p.normalized,x=new m.constructor(g.length*v);let M=0,A=0;for(let C=0,E=g.length;C<E;C++){p.isInterleavedBufferAttribute?M=g[C]*p.data.stride+p.offset:M=g[C]*v;for(let S=0;S<v;S++)x[A++]=m[M++]}return new da(x,v,y)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Ji,r=this.index.array,l=this.attributes;for(const p in l){const g=l[p],m=t(g,r);i.setAttribute(p,m)}const c=this.morphAttributes;for(const p in c){const g=[],m=c[p];for(let v=0,y=m.length;v<y;v++){const x=m[v],M=t(x,r);g.push(M)}i.morphAttributes[p]=g}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let p=0,g=d.length;p<g;p++){const m=d[p];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const g=this.parameters;for(const m in g)g[m]!==void 0&&(t[m]=g[m]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const g in r){const m=r[g];t.data.attributes[g]=m.toJSON(t.data)}const l={};let c=!1;for(const g in this.morphAttributes){const m=this.morphAttributes[g],v=[];for(let y=0,x=m.length;y<x;y++){const M=m[y];v.push(M.toJSON(t.data))}v.length>0&&(l[g]=v,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(t.data.groups=JSON.parse(JSON.stringify(d)));const p=this.boundingSphere;return p!==null&&(t.data.boundingSphere={center:p.center.toArray(),radius:p.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone());const l=t.attributes;for(const m in l){const v=l[m];this.setAttribute(m,v.clone(i))}const c=t.morphAttributes;for(const m in c){const v=[],y=c[m];for(let x=0,M=y.length;x<M;x++)v.push(y[x].clone(i));this.morphAttributes[m]=v}this.morphTargetsRelative=t.morphTargetsRelative;const d=t.groups;for(let m=0,v=d.length;m<v;m++){const y=d[m];this.addGroup(y.start,y.count,y.materialIndex)}const p=t.boundingBox;p!==null&&(this.boundingBox=p.clone());const g=t.boundingSphere;return g!==null&&(this.boundingSphere=g.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Y_=new hn,Xr=new fu,Nc=new uo,j_=new st,Oc=new st,Pc=new st,Bc=new st,Ph=new st,Fc=new st,Z_=new st,zc=new st;class Ki extends Vn{constructor(t=new Ji,i=new l0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}getVertexPosition(t,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,d=r.morphTargetsRelative;i.fromBufferAttribute(l,t);const p=this.morphTargetInfluences;if(c&&p){Fc.set(0,0,0);for(let g=0,m=c.length;g<m;g++){const v=p[g],y=c[g];v!==0&&(Ph.fromBufferAttribute(y,t),d?Fc.addScaledVector(Ph,v):Fc.addScaledVector(Ph.sub(i),v))}i.add(Fc)}return i}raycast(t,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Nc.copy(r.boundingSphere),Nc.applyMatrix4(c),Xr.copy(t.ray).recast(t.near),!(Nc.containsPoint(Xr.origin)===!1&&(Xr.intersectSphere(Nc,j_)===null||Xr.origin.distanceToSquared(j_)>(t.far-t.near)**2))&&(Y_.copy(c).invert(),Xr.copy(t.ray).applyMatrix4(Y_),!(r.boundingBox!==null&&Xr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,i,Xr)))}_computeIntersections(t,i,r){let l;const c=this.geometry,d=this.material,p=c.index,g=c.attributes.position,m=c.attributes.uv,v=c.attributes.uv1,y=c.attributes.normal,x=c.groups,M=c.drawRange;if(p!==null)if(Array.isArray(d))for(let A=0,C=x.length;A<C;A++){const E=x[A],S=d[E.materialIndex],G=Math.max(E.start,M.start),H=Math.min(p.count,Math.min(E.start+E.count,M.start+M.count));for(let O=G,j=H;O<j;O+=3){const I=p.getX(O),k=p.getX(O+1),K=p.getX(O+2);l=Ic(this,S,t,r,m,v,y,I,k,K),l&&(l.faceIndex=Math.floor(O/3),l.face.materialIndex=E.materialIndex,i.push(l))}}else{const A=Math.max(0,M.start),C=Math.min(p.count,M.start+M.count);for(let E=A,S=C;E<S;E+=3){const G=p.getX(E),H=p.getX(E+1),O=p.getX(E+2);l=Ic(this,d,t,r,m,v,y,G,H,O),l&&(l.faceIndex=Math.floor(E/3),i.push(l))}}else if(g!==void 0)if(Array.isArray(d))for(let A=0,C=x.length;A<C;A++){const E=x[A],S=d[E.materialIndex],G=Math.max(E.start,M.start),H=Math.min(g.count,Math.min(E.start+E.count,M.start+M.count));for(let O=G,j=H;O<j;O+=3){const I=O,k=O+1,K=O+2;l=Ic(this,S,t,r,m,v,y,I,k,K),l&&(l.faceIndex=Math.floor(O/3),l.face.materialIndex=E.materialIndex,i.push(l))}}else{const A=Math.max(0,M.start),C=Math.min(g.count,M.start+M.count);for(let E=A,S=C;E<S;E+=3){const G=E,H=E+1,O=E+2;l=Ic(this,d,t,r,m,v,y,G,H,O),l&&(l.faceIndex=Math.floor(E/3),i.push(l))}}}}function Ix(o,t,i,r,l,c,d,p){let g;if(t.side===fi?g=r.intersectTriangle(d,c,l,!0,p):g=r.intersectTriangle(l,c,d,t.side===Er,p),g===null)return null;zc.copy(p),zc.applyMatrix4(o.matrixWorld);const m=i.ray.origin.distanceTo(zc);return m<i.near||m>i.far?null:{distance:m,point:zc.clone(),object:o}}function Ic(o,t,i,r,l,c,d,p,g,m){o.getVertexPosition(p,Oc),o.getVertexPosition(g,Pc),o.getVertexPosition(m,Bc);const v=Ix(o,t,i,r,Oc,Pc,Bc,Z_);if(v){const y=new st;ji.getBarycoord(Z_,Oc,Pc,Bc,y),l&&(v.uv=ji.getInterpolatedAttribute(l,p,g,m,y,new Ee)),c&&(v.uv1=ji.getInterpolatedAttribute(c,p,g,m,y,new Ee)),d&&(v.normal=ji.getInterpolatedAttribute(d,p,g,m,y,new st),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const x={a:p,b:g,c:m,normal:new st,materialIndex:0};ji.getNormal(Oc,Pc,Bc,x.normal),v.face=x,v.barycoord=y}return v}class vl extends Ji{constructor(t=1,i=1,r=1,l=1,c=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:d};const p=this;l=Math.floor(l),c=Math.floor(c),d=Math.floor(d);const g=[],m=[],v=[],y=[];let x=0,M=0;A("z","y","x",-1,-1,r,i,t,d,c,0),A("z","y","x",1,-1,r,i,-t,d,c,1),A("x","z","y",1,1,t,r,i,l,d,2),A("x","z","y",1,-1,t,r,-i,l,d,3),A("x","y","z",1,-1,t,i,r,l,c,4),A("x","y","z",-1,-1,t,i,-r,l,c,5),this.setIndex(g),this.setAttribute("position",new ai(m,3)),this.setAttribute("normal",new ai(v,3)),this.setAttribute("uv",new ai(y,2));function A(C,E,S,G,H,O,j,I,k,K,P){const N=O/k,Y=j/K,gt=O/2,ft=j/2,vt=I/2,xt=k+1,V=K+1;let ot=0,$=0;const Lt=new st;for(let F=0;F<V;F++){const rt=F*Y-ft;for(let Tt=0;Tt<xt;Tt++){const Dt=Tt*N-gt;Lt[C]=Dt*G,Lt[E]=rt*H,Lt[S]=vt,m.push(Lt.x,Lt.y,Lt.z),Lt[C]=0,Lt[E]=0,Lt[S]=I>0?1:-1,v.push(Lt.x,Lt.y,Lt.z),y.push(Tt/k),y.push(1-F/K),ot+=1}}for(let F=0;F<K;F++)for(let rt=0;rt<k;rt++){const Tt=x+rt+xt*F,Dt=x+rt+xt*(F+1),at=x+(rt+1)+xt*(F+1),Mt=x+(rt+1)+xt*F;g.push(Tt,Dt,Mt),g.push(Dt,at,Mt),$+=6}p.addGroup(M,$,P),M+=$,x+=ot}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vl(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function lo(o){const t={};for(const i in o){t[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=l.clone():Array.isArray(l)?t[i][r]=l.slice():t[i][r]=l}}return t}function ii(o){const t={};for(let i=0;i<o.length;i++){const r=lo(o[i]);for(const l in r)t[l]=r[l]}return t}function Hx(o){const t=[];for(let i=0;i<o.length;i++)t.push(o[i].clone());return t}function f0(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Xe.workingColorSpace}const Gx={clone:lo,merge:ii};var Vx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,kx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Mr extends ka{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Vx,this.fragmentShader=kx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=lo(t.uniforms),this.uniformsGroups=Hx(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(t).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class h0 extends Vn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new hn,this.projectionMatrix=new hn,this.projectionMatrixInverse=new hn,this.coordinateSystem=Ga}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const _r=new st,K_=new Ee,Q_=new Ee;class Bi extends h0{constructor(t=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Pd*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(eu*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Pd*2*Math.atan(Math.tan(eu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,r){_r.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(_r.x,_r.y).multiplyScalar(-t/_r.z),_r.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(_r.x,_r.y).multiplyScalar(-t/_r.z)}getViewSize(t,i){return this.getViewBounds(t,K_,Q_),i.subVectors(Q_,K_)}setViewOffset(t,i,r,l,c,d){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(eu*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const g=d.fullWidth,m=d.fullHeight;c+=d.offsetX*l/g,i-=d.offsetY*r/m,l*=d.width/g,r*=d.height/m}const p=this.filmOffset;p!==0&&(c+=t*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Ks=-90,Qs=1;class Xx extends Vn{constructor(t,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Bi(Ks,Qs,t,i);l.layers=this.layers,this.add(l);const c=new Bi(Ks,Qs,t,i);c.layers=this.layers,this.add(c);const d=new Bi(Ks,Qs,t,i);d.layers=this.layers,this.add(d);const p=new Bi(Ks,Qs,t,i);p.layers=this.layers,this.add(p);const g=new Bi(Ks,Qs,t,i);g.layers=this.layers,this.add(g);const m=new Bi(Ks,Qs,t,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[r,l,c,d,p,g]=i;for(const m of i)this.remove(m);if(t===Ga)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),p.up.set(0,1,0),p.lookAt(0,0,1),g.up.set(0,1,0),g.lookAt(0,0,-1);else if(t===su)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),p.up.set(0,-1,0),p.lookAt(0,0,1),g.up.set(0,-1,0),g.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const m of i)this.add(m),m.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,d,p,g,m,v]=this.children,y=t.getRenderTarget(),x=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),A=t.xr.enabled;t.xr.enabled=!1;const C=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,t.setRenderTarget(r,0,l),t.render(i,c),t.setRenderTarget(r,1,l),t.render(i,d),t.setRenderTarget(r,2,l),t.render(i,p),t.setRenderTarget(r,3,l),t.render(i,g),t.setRenderTarget(r,4,l),t.render(i,m),r.texture.generateMipmaps=C,t.setRenderTarget(r,5,l),t.render(i,v),t.setRenderTarget(y,x,M),t.xr.enabled=A,r.texture.needsPMREMUpdate=!0}}class d0 extends hi{constructor(t=[],i=ro,r,l,c,d,p,g,m,v){super(t,i,r,l,c,d,p,g,m,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Wx extends es{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},l=[r,r,r,r,r,r];this.texture=new d0(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:ha}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new vl(5,5,5),c=new Mr({name:"CubemapFromEquirect",uniforms:lo(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:fi,blending:Sr});c.uniforms.tEquirect.value=i;const d=new Ki(l,c),p=i.minFilter;return i.minFilter===$r&&(i.minFilter=ha),new Xx(1,10,this).update(t,d),i.minFilter=p,d.geometry.dispose(),d.material.dispose(),this}clear(t,i=!0,r=!0,l=!0){const c=t.getRenderTarget();for(let d=0;d<6;d++)t.setRenderTarget(this,d),t.clear(i,r,l);t.setRenderTarget(c)}}class cl extends Vn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const qx={type:"move"};class Bh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new cl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new cl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new st,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new st),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new cl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new st,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new st),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const r of t.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,r){let l=null,c=null,d=null;const p=this._targetRay,g=this._grip,m=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(m&&t.hand){d=!0;for(const C of t.hand.values()){const E=i.getJointPose(C,r),S=this._getHandJoint(m,C);E!==null&&(S.matrix.fromArray(E.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=E.radius),S.visible=E!==null}const v=m.joints["index-finger-tip"],y=m.joints["thumb-tip"],x=v.position.distanceTo(y.position),M=.02,A=.005;m.inputState.pinching&&x>M+A?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!m.inputState.pinching&&x<=M-A&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else g!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,r),c!==null&&(g.matrix.fromArray(c.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,c.linearVelocity?(g.hasLinearVelocity=!0,g.linearVelocity.copy(c.linearVelocity)):g.hasLinearVelocity=!1,c.angularVelocity?(g.hasAngularVelocity=!0,g.angularVelocity.copy(c.angularVelocity)):g.hasAngularVelocity=!1));p!==null&&(l=i.getPose(t.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(qx)))}return p!==null&&(p.visible=l!==null),g!==null&&(g.visible=c!==null),m!==null&&(m.visible=d!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const r=new cl;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[i.jointName]=r,t.add(r)}return t.joints[i.jointName]}}class Yx extends Vn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ma,this.environmentIntensity=1,this.environmentRotation=new ma,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Fh=new st,jx=new st,Zx=new xe;class vr{constructor(t=new st(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,r,l){return this.normal.set(t,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,r){const l=Fh.subVectors(r,i).cross(jx.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const r=t.delta(Fh),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(r,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return i<0&&r>0||r<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const r=i||Zx.getNormalMatrix(t),l=this.coplanarPoint(Fh).applyMatrix4(t),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Wr=new uo,Hc=new st;class jd{constructor(t=new vr,i=new vr,r=new vr,l=new vr,c=new vr,d=new vr){this.planes=[t,i,r,l,c,d]}set(t,i,r,l,c,d){const p=this.planes;return p[0].copy(t),p[1].copy(i),p[2].copy(r),p[3].copy(l),p[4].copy(c),p[5].copy(d),this}copy(t){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,i=Ga){const r=this.planes,l=t.elements,c=l[0],d=l[1],p=l[2],g=l[3],m=l[4],v=l[5],y=l[6],x=l[7],M=l[8],A=l[9],C=l[10],E=l[11],S=l[12],G=l[13],H=l[14],O=l[15];if(r[0].setComponents(g-c,x-m,E-M,O-S).normalize(),r[1].setComponents(g+c,x+m,E+M,O+S).normalize(),r[2].setComponents(g+d,x+v,E+A,O+G).normalize(),r[3].setComponents(g-d,x-v,E-A,O-G).normalize(),r[4].setComponents(g-p,x-y,E-C,O-H).normalize(),i===Ga)r[5].setComponents(g+p,x+y,E+C,O+H).normalize();else if(i===su)r[5].setComponents(p,y,C,H).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Wr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Wr.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Wr)}intersectsSprite(t){return Wr.center.set(0,0,0),Wr.radius=.7071067811865476,Wr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Wr)}intersectsSphere(t){const i=this.planes,r=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Hc.x=l.normal.x>0?t.max.x:t.min.x,Hc.y=l.normal.y>0?t.max.y:t.min.y,Hc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Hc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class iu extends ka{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ie(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const lu=new st,cu=new st,J_=new hn,ll=new fu,Gc=new uo,zh=new st,$_=new st;class Kx extends Vn{constructor(t=new Ji,i=new iu){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,r=[0];for(let l=1,c=i.count;l<c;l++)lu.fromBufferAttribute(i,l-1),cu.fromBufferAttribute(i,l),r[l]=r[l-1],r[l]+=lu.distanceTo(cu);t.setAttribute("lineDistance",new ai(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const r=this.geometry,l=this.matrixWorld,c=t.params.Line.threshold,d=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Gc.copy(r.boundingSphere),Gc.applyMatrix4(l),Gc.radius+=c,t.ray.intersectsSphere(Gc)===!1)return;J_.copy(l).invert(),ll.copy(t.ray).applyMatrix4(J_);const p=c/((this.scale.x+this.scale.y+this.scale.z)/3),g=p*p,m=this.isLineSegments?2:1,v=r.index,x=r.attributes.position;if(v!==null){const M=Math.max(0,d.start),A=Math.min(v.count,d.start+d.count);for(let C=M,E=A-1;C<E;C+=m){const S=v.getX(C),G=v.getX(C+1),H=Vc(this,t,ll,g,S,G,C);H&&i.push(H)}if(this.isLineLoop){const C=v.getX(A-1),E=v.getX(M),S=Vc(this,t,ll,g,C,E,A-1);S&&i.push(S)}}else{const M=Math.max(0,d.start),A=Math.min(x.count,d.start+d.count);for(let C=M,E=A-1;C<E;C+=m){const S=Vc(this,t,ll,g,C,C+1,C);S&&i.push(S)}if(this.isLineLoop){const C=Vc(this,t,ll,g,A-1,M,A-1);C&&i.push(C)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}}function Vc(o,t,i,r,l,c,d){const p=o.geometry.attributes.position;if(lu.fromBufferAttribute(p,l),cu.fromBufferAttribute(p,c),i.distanceSqToSegment(lu,cu,zh,$_)>r)return;zh.applyMatrix4(o.matrixWorld);const m=t.ray.origin.distanceTo(zh);if(!(m<t.near||m>t.far))return{distance:m,point:$_.clone().applyMatrix4(o.matrixWorld),index:d,face:null,faceIndex:null,barycoord:null,object:o}}const tv=new st,ev=new st;class nv extends Kx{constructor(t,i){super(t,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,r=[];for(let l=0,c=i.count;l<c;l+=2)tv.fromBufferAttribute(i,l),ev.fromBufferAttribute(i,l+1),r[l]=l===0?0:r[l-1],r[l+1]=r[l]+tv.distanceTo(ev);t.setAttribute("lineDistance",new ai(r,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ul extends ka{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ie(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const iv=new hn,Bd=new fu,kc=new uo,Xc=new st;class Ih extends Vn{constructor(t=new Ji,i=new ul){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,i){const r=this.geometry,l=this.matrixWorld,c=t.params.Points.threshold,d=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),kc.copy(r.boundingSphere),kc.applyMatrix4(l),kc.radius+=c,t.ray.intersectsSphere(kc)===!1)return;iv.copy(l).invert(),Bd.copy(t.ray).applyMatrix4(iv);const p=c/((this.scale.x+this.scale.y+this.scale.z)/3),g=p*p,m=r.index,y=r.attributes.position;if(m!==null){const x=Math.max(0,d.start),M=Math.min(m.count,d.start+d.count);for(let A=x,C=M;A<C;A++){const E=m.getX(A);Xc.fromBufferAttribute(y,E),av(Xc,E,g,l,t,i,this)}}else{const x=Math.max(0,d.start),M=Math.min(y.count,d.start+d.count);for(let A=x,C=M;A<C;A++)Xc.fromBufferAttribute(y,A),av(Xc,A,g,l,t,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}}function av(o,t,i,r,l,c,d){const p=Bd.distanceSqToPoint(o);if(p<i){const g=new st;Bd.closestPointToPoint(o,g),g.applyMatrix4(r);const m=l.ray.origin.distanceTo(g);if(m<l.near||m>l.far)return;c.push({distance:m,distanceToRay:Math.sqrt(p),point:g,index:t,face:null,faceIndex:null,barycoord:null,object:d})}}class p0 extends hi{constructor(t,i,r=ts,l,c,d,p=Qi,g=Qi,m,v=pl){if(v!==pl&&v!==ml)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,l,c,d,p,g,v,r,m),this.isDepthTexture=!0,this.image={width:t,height:i},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Yd(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class hu extends Ji{constructor(t=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:l};const c=t/2,d=i/2,p=Math.floor(r),g=Math.floor(l),m=p+1,v=g+1,y=t/p,x=i/g,M=[],A=[],C=[],E=[];for(let S=0;S<v;S++){const G=S*x-d;for(let H=0;H<m;H++){const O=H*y-c;A.push(O,-G,0),C.push(0,0,1),E.push(H/p),E.push(1-S/g)}}for(let S=0;S<g;S++)for(let G=0;G<p;G++){const H=G+m*S,O=G+m*(S+1),j=G+1+m*(S+1),I=G+1+m*S;M.push(H,O,I),M.push(O,j,I)}this.setIndex(M),this.setAttribute("position",new ai(A,3)),this.setAttribute("normal",new ai(C,3)),this.setAttribute("uv",new ai(E,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hu(t.width,t.height,t.widthSegments,t.heightSegments)}}class Qx extends ka{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ie(16777215),this.specular=new Ie(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=n0,this.normalScale=new Ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ma,this.combine=Hd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Jx extends ka{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ox,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class $x extends ka{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const rv={enabled:!1,files:{},add:function(o,t){this.enabled!==!1&&(this.files[o]=t)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class tE{constructor(t,i,r){const l=this;let c=!1,d=0,p=0,g;const m=[];this.onStart=void 0,this.onLoad=t,this.onProgress=i,this.onError=r,this.itemStart=function(v){p++,c===!1&&l.onStart!==void 0&&l.onStart(v,d,p),c=!0},this.itemEnd=function(v){d++,l.onProgress!==void 0&&l.onProgress(v,d,p),d===p&&(c=!1,l.onLoad!==void 0&&l.onLoad())},this.itemError=function(v){l.onError!==void 0&&l.onError(v)},this.resolveURL=function(v){return g?g(v):v},this.setURLModifier=function(v){return g=v,this},this.addHandler=function(v,y){return m.push(v,y),this},this.removeHandler=function(v){const y=m.indexOf(v);return y!==-1&&m.splice(y,2),this},this.getHandler=function(v){for(let y=0,x=m.length;y<x;y+=2){const M=m[y],A=m[y+1];if(M.global&&(M.lastIndex=0),M.test(v))return A}return null}}}const eE=new tE;class Zd{constructor(t){this.manager=t!==void 0?t:eE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,i){const r=this;return new Promise(function(l,c){r.load(t,l,i,c)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Zd.DEFAULT_MATERIAL_NAME="__DEFAULT";const Fa={};class nE extends Error{constructor(t,i){super(t),this.response=i}}class iE extends Zd{constructor(t){super(t),this.mimeType="",this.responseType=""}load(t,i,r,l){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const c=rv.get(t);if(c!==void 0)return this.manager.itemStart(t),setTimeout(()=>{i&&i(c),this.manager.itemEnd(t)},0),c;if(Fa[t]!==void 0){Fa[t].push({onLoad:i,onProgress:r,onError:l});return}Fa[t]=[],Fa[t].push({onLoad:i,onProgress:r,onError:l});const d=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),p=this.mimeType,g=this.responseType;fetch(d).then(m=>{if(m.status===200||m.status===0){if(m.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||m.body===void 0||m.body.getReader===void 0)return m;const v=Fa[t],y=m.body.getReader(),x=m.headers.get("X-File-Size")||m.headers.get("Content-Length"),M=x?parseInt(x):0,A=M!==0;let C=0;const E=new ReadableStream({start(S){G();function G(){y.read().then(({done:H,value:O})=>{if(H)S.close();else{C+=O.byteLength;const j=new ProgressEvent("progress",{lengthComputable:A,loaded:C,total:M});for(let I=0,k=v.length;I<k;I++){const K=v[I];K.onProgress&&K.onProgress(j)}S.enqueue(O),G()}},H=>{S.error(H)})}}});return new Response(E)}else throw new nE(`fetch for "${m.url}" responded with ${m.status}: ${m.statusText}`,m)}).then(m=>{switch(g){case"arraybuffer":return m.arrayBuffer();case"blob":return m.blob();case"document":return m.text().then(v=>new DOMParser().parseFromString(v,p));case"json":return m.json();default:if(p==="")return m.text();{const y=/charset="?([^;"\s]*)"?/i.exec(p),x=y&&y[1]?y[1].toLowerCase():void 0,M=new TextDecoder(x);return m.arrayBuffer().then(A=>M.decode(A))}}}).then(m=>{rv.add(t,m);const v=Fa[t];delete Fa[t];for(let y=0,x=v.length;y<x;y++){const M=v[y];M.onLoad&&M.onLoad(m)}}).catch(m=>{const v=Fa[t];if(v===void 0)throw this.manager.itemError(t),m;delete Fa[t];for(let y=0,x=v.length;y<x;y++){const M=v[y];M.onError&&M.onError(m)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class aE extends Vn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Ie(t),this.intensity=i}dispose(){}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}const Hh=new hn,sv=new st,ov=new st;class rE{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ee(512,512),this.mapType=pa,this.map=null,this.mapPass=null,this.matrix=new hn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new jd,this._frameExtents=new Ee(1,1),this._viewportCount=1,this._viewports=[new yn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,r=this.matrix;sv.setFromMatrixPosition(t.matrixWorld),i.position.copy(sv),ov.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(ov),i.updateMatrixWorld(),Hh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Hh),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Hh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class m0 extends h0{constructor(t=-1,i=1,r=1,l=-1,c=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=d,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,r,l,c,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-t,d=r+t,p=l+i,g=l-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=m*this.view.offsetX,d=c+m*this.view.width,p-=v*this.view.offsetY,g=p-v*this.view.height}this.projectionMatrix.makeOrthographic(c,d,p,g,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class sE extends rE{constructor(){super(new m0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class lv extends aE{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Vn.DEFAULT_UP),this.updateMatrix(),this.target=new Vn,this.shadow=new sE}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class oE extends Bi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class cv{constructor(t=1,i=0,r=0){this.radius=t,this.phi=i,this.theta=r}set(t,i,r){return this.radius=t,this.phi=i,this.theta=r,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Pe(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,i,r){return this.radius=Math.sqrt(t*t+i*i+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,r),this.phi=Math.acos(Pe(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class lE extends is{constructor(t,i=null){super(),this.object=t,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function uv(o,t,i,r){const l=cE(r);switch(i){case Qv:return o*t;case $v:return o*t/l.components*l.byteLength;case Xd:return o*t/l.components*l.byteLength;case t0:return o*t*2/l.components*l.byteLength;case Wd:return o*t*2/l.components*l.byteLength;case Jv:return o*t*3/l.components*l.byteLength;case Zi:return o*t*4/l.components*l.byteLength;case qd:return o*t*4/l.components*l.byteLength;case Kc:case Qc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Jc:case $c:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case ud:case hd:return Math.max(o,16)*Math.max(t,8)/4;case cd:case fd:return Math.max(o,8)*Math.max(t,8)/2;case dd:case pd:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case md:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case gd:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case _d:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case vd:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case yd:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case Sd:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case xd:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case Ed:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case Md:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case bd:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case Td:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case Ad:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case Rd:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case wd:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case Cd:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case tu:case Dd:case Ud:return Math.ceil(o/4)*Math.ceil(t/4)*16;case e0:case Ld:return Math.ceil(o/4)*Math.ceil(t/4)*8;case Nd:case Od:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function cE(o){switch(o){case pa:case jv:return{byteLength:1,components:1};case hl:case Zv:case gl:return{byteLength:2,components:1};case Vd:case kd:return{byteLength:2,components:4};case ts:case Gd:case Ha:return{byteLength:4,components:1};case Kv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Id}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Id);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function g0(){let o=null,t=!1,i=null,r=null;function l(c,d){i(c,d),r=o.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(r=o.requestAnimationFrame(l),t=!0)},stop:function(){o.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){o=c}}}function uE(o){const t=new WeakMap;function i(p,g){const m=p.array,v=p.usage,y=m.byteLength,x=o.createBuffer();o.bindBuffer(g,x),o.bufferData(g,m,v),p.onUploadCallback();let M;if(m instanceof Float32Array)M=o.FLOAT;else if(m instanceof Uint16Array)p.isFloat16BufferAttribute?M=o.HALF_FLOAT:M=o.UNSIGNED_SHORT;else if(m instanceof Int16Array)M=o.SHORT;else if(m instanceof Uint32Array)M=o.UNSIGNED_INT;else if(m instanceof Int32Array)M=o.INT;else if(m instanceof Int8Array)M=o.BYTE;else if(m instanceof Uint8Array)M=o.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)M=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:x,type:M,bytesPerElement:m.BYTES_PER_ELEMENT,version:p.version,size:y}}function r(p,g,m){const v=g.array,y=g.updateRanges;if(o.bindBuffer(m,p),y.length===0)o.bufferSubData(m,0,v);else{y.sort((M,A)=>M.start-A.start);let x=0;for(let M=1;M<y.length;M++){const A=y[x],C=y[M];C.start<=A.start+A.count+1?A.count=Math.max(A.count,C.start+C.count-A.start):(++x,y[x]=C)}y.length=x+1;for(let M=0,A=y.length;M<A;M++){const C=y[M];o.bufferSubData(m,C.start*v.BYTES_PER_ELEMENT,v,C.start,C.count)}g.clearUpdateRanges()}g.onUploadCallback()}function l(p){return p.isInterleavedBufferAttribute&&(p=p.data),t.get(p)}function c(p){p.isInterleavedBufferAttribute&&(p=p.data);const g=t.get(p);g&&(o.deleteBuffer(g.buffer),t.delete(p))}function d(p,g){if(p.isInterleavedBufferAttribute&&(p=p.data),p.isGLBufferAttribute){const v=t.get(p);(!v||v.version<p.version)&&t.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}const m=t.get(p);if(m===void 0)t.set(p,i(p,g));else if(m.version<p.version){if(m.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,p,g),m.version=p.version}}return{get:l,remove:c,update:d}}var fE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,hE=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,dE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,pE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,gE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_E=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,vE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,yE=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,SE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,xE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,EE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ME=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,bE=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,TE=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,AE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,RE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,CE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,DE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,UE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,LE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,NE=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,OE=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,PE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,BE=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,FE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,IE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,HE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,GE="gl_FragColor = linearToOutputTexel( gl_FragColor );",VE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,kE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,XE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,WE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,qE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,YE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,jE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ZE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,KE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,QE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,JE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,$E=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,tM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,eM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,nM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,iM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,aM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,rM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,sM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,oM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,cM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,uM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,fM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,hM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,dM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,pM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,_M=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,SM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,EM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,MM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,bM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,TM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,AM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,RM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,CM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,DM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,UM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,LM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,NM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,OM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,PM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,BM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,FM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,IM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,HM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,GM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,VM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,kM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,XM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,WM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,qM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,YM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,jM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ZM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,KM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,QM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,JM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$M=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,tb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,eb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,nb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ib=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ab=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,rb=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,sb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ob=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,lb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,cb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ub=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fb=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,db=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,_b=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,vb=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,yb=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Sb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Eb=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Mb=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,bb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Tb=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ab=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wb=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Cb=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Db=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Ub=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Lb=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Nb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ob=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Pb=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bb=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Fb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zb=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Ib=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Hb=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Gb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Vb=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,kb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Te={alphahash_fragment:fE,alphahash_pars_fragment:hE,alphamap_fragment:dE,alphamap_pars_fragment:pE,alphatest_fragment:mE,alphatest_pars_fragment:gE,aomap_fragment:_E,aomap_pars_fragment:vE,batching_pars_vertex:yE,batching_vertex:SE,begin_vertex:xE,beginnormal_vertex:EE,bsdfs:ME,iridescence_fragment:bE,bumpmap_pars_fragment:TE,clipping_planes_fragment:AE,clipping_planes_pars_fragment:RE,clipping_planes_pars_vertex:wE,clipping_planes_vertex:CE,color_fragment:DE,color_pars_fragment:UE,color_pars_vertex:LE,color_vertex:NE,common:OE,cube_uv_reflection_fragment:PE,defaultnormal_vertex:BE,displacementmap_pars_vertex:FE,displacementmap_vertex:zE,emissivemap_fragment:IE,emissivemap_pars_fragment:HE,colorspace_fragment:GE,colorspace_pars_fragment:VE,envmap_fragment:kE,envmap_common_pars_fragment:XE,envmap_pars_fragment:WE,envmap_pars_vertex:qE,envmap_physical_pars_fragment:iM,envmap_vertex:YE,fog_vertex:jE,fog_pars_vertex:ZE,fog_fragment:KE,fog_pars_fragment:QE,gradientmap_pars_fragment:JE,lightmap_pars_fragment:$E,lights_lambert_fragment:tM,lights_lambert_pars_fragment:eM,lights_pars_begin:nM,lights_toon_fragment:aM,lights_toon_pars_fragment:rM,lights_phong_fragment:sM,lights_phong_pars_fragment:oM,lights_physical_fragment:lM,lights_physical_pars_fragment:cM,lights_fragment_begin:uM,lights_fragment_maps:fM,lights_fragment_end:hM,logdepthbuf_fragment:dM,logdepthbuf_pars_fragment:pM,logdepthbuf_pars_vertex:mM,logdepthbuf_vertex:gM,map_fragment:_M,map_pars_fragment:vM,map_particle_fragment:yM,map_particle_pars_fragment:SM,metalnessmap_fragment:xM,metalnessmap_pars_fragment:EM,morphinstance_vertex:MM,morphcolor_vertex:bM,morphnormal_vertex:TM,morphtarget_pars_vertex:AM,morphtarget_vertex:RM,normal_fragment_begin:wM,normal_fragment_maps:CM,normal_pars_fragment:DM,normal_pars_vertex:UM,normal_vertex:LM,normalmap_pars_fragment:NM,clearcoat_normal_fragment_begin:OM,clearcoat_normal_fragment_maps:PM,clearcoat_pars_fragment:BM,iridescence_pars_fragment:FM,opaque_fragment:zM,packing:IM,premultiplied_alpha_fragment:HM,project_vertex:GM,dithering_fragment:VM,dithering_pars_fragment:kM,roughnessmap_fragment:XM,roughnessmap_pars_fragment:WM,shadowmap_pars_fragment:qM,shadowmap_pars_vertex:YM,shadowmap_vertex:jM,shadowmask_pars_fragment:ZM,skinbase_vertex:KM,skinning_pars_vertex:QM,skinning_vertex:JM,skinnormal_vertex:$M,specularmap_fragment:tb,specularmap_pars_fragment:eb,tonemapping_fragment:nb,tonemapping_pars_fragment:ib,transmission_fragment:ab,transmission_pars_fragment:rb,uv_pars_fragment:sb,uv_pars_vertex:ob,uv_vertex:lb,worldpos_vertex:cb,background_vert:ub,background_frag:fb,backgroundCube_vert:hb,backgroundCube_frag:db,cube_vert:pb,cube_frag:mb,depth_vert:gb,depth_frag:_b,distanceRGBA_vert:vb,distanceRGBA_frag:yb,equirect_vert:Sb,equirect_frag:xb,linedashed_vert:Eb,linedashed_frag:Mb,meshbasic_vert:bb,meshbasic_frag:Tb,meshlambert_vert:Ab,meshlambert_frag:Rb,meshmatcap_vert:wb,meshmatcap_frag:Cb,meshnormal_vert:Db,meshnormal_frag:Ub,meshphong_vert:Lb,meshphong_frag:Nb,meshphysical_vert:Ob,meshphysical_frag:Pb,meshtoon_vert:Bb,meshtoon_frag:Fb,points_vert:zb,points_frag:Ib,shadow_vert:Hb,shadow_frag:Gb,sprite_vert:Vb,sprite_frag:kb},Xt={common:{diffuse:{value:new Ie(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new xe},alphaMap:{value:null},alphaMapTransform:{value:new xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new xe}},envmap:{envMap:{value:null},envMapRotation:{value:new xe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new xe},normalScale:{value:new Ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new xe},alphaTest:{value:0},uvTransform:{value:new xe}},sprite:{diffuse:{value:new Ie(16777215)},opacity:{value:1},center:{value:new Ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new xe},alphaMap:{value:null},alphaMapTransform:{value:new xe},alphaTest:{value:0}}},fa={basic:{uniforms:ii([Xt.common,Xt.specularmap,Xt.envmap,Xt.aomap,Xt.lightmap,Xt.fog]),vertexShader:Te.meshbasic_vert,fragmentShader:Te.meshbasic_frag},lambert:{uniforms:ii([Xt.common,Xt.specularmap,Xt.envmap,Xt.aomap,Xt.lightmap,Xt.emissivemap,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,Xt.fog,Xt.lights,{emissive:{value:new Ie(0)}}]),vertexShader:Te.meshlambert_vert,fragmentShader:Te.meshlambert_frag},phong:{uniforms:ii([Xt.common,Xt.specularmap,Xt.envmap,Xt.aomap,Xt.lightmap,Xt.emissivemap,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,Xt.fog,Xt.lights,{emissive:{value:new Ie(0)},specular:{value:new Ie(1118481)},shininess:{value:30}}]),vertexShader:Te.meshphong_vert,fragmentShader:Te.meshphong_frag},standard:{uniforms:ii([Xt.common,Xt.envmap,Xt.aomap,Xt.lightmap,Xt.emissivemap,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,Xt.roughnessmap,Xt.metalnessmap,Xt.fog,Xt.lights,{emissive:{value:new Ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Te.meshphysical_vert,fragmentShader:Te.meshphysical_frag},toon:{uniforms:ii([Xt.common,Xt.aomap,Xt.lightmap,Xt.emissivemap,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,Xt.gradientmap,Xt.fog,Xt.lights,{emissive:{value:new Ie(0)}}]),vertexShader:Te.meshtoon_vert,fragmentShader:Te.meshtoon_frag},matcap:{uniforms:ii([Xt.common,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,Xt.fog,{matcap:{value:null}}]),vertexShader:Te.meshmatcap_vert,fragmentShader:Te.meshmatcap_frag},points:{uniforms:ii([Xt.points,Xt.fog]),vertexShader:Te.points_vert,fragmentShader:Te.points_frag},dashed:{uniforms:ii([Xt.common,Xt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Te.linedashed_vert,fragmentShader:Te.linedashed_frag},depth:{uniforms:ii([Xt.common,Xt.displacementmap]),vertexShader:Te.depth_vert,fragmentShader:Te.depth_frag},normal:{uniforms:ii([Xt.common,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,{opacity:{value:1}}]),vertexShader:Te.meshnormal_vert,fragmentShader:Te.meshnormal_frag},sprite:{uniforms:ii([Xt.sprite,Xt.fog]),vertexShader:Te.sprite_vert,fragmentShader:Te.sprite_frag},background:{uniforms:{uvTransform:{value:new xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Te.background_vert,fragmentShader:Te.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new xe}},vertexShader:Te.backgroundCube_vert,fragmentShader:Te.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Te.cube_vert,fragmentShader:Te.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Te.equirect_vert,fragmentShader:Te.equirect_frag},distanceRGBA:{uniforms:ii([Xt.common,Xt.displacementmap,{referencePosition:{value:new st},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Te.distanceRGBA_vert,fragmentShader:Te.distanceRGBA_frag},shadow:{uniforms:ii([Xt.lights,Xt.fog,{color:{value:new Ie(0)},opacity:{value:1}}]),vertexShader:Te.shadow_vert,fragmentShader:Te.shadow_frag}};fa.physical={uniforms:ii([fa.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new xe},clearcoatNormalScale:{value:new Ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new xe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new xe},sheen:{value:0},sheenColor:{value:new Ie(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new xe},transmissionSamplerSize:{value:new Ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new xe},attenuationDistance:{value:0},attenuationColor:{value:new Ie(0)},specularColor:{value:new Ie(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new xe},anisotropyVector:{value:new Ee},anisotropyMap:{value:null},anisotropyMapTransform:{value:new xe}}]),vertexShader:Te.meshphysical_vert,fragmentShader:Te.meshphysical_frag};const Wc={r:0,b:0,g:0},qr=new ma,Xb=new hn;function Wb(o,t,i,r,l,c,d){const p=new Ie(0);let g=c===!0?0:1,m,v,y=null,x=0,M=null;function A(H){let O=H.isScene===!0?H.background:null;return O&&O.isTexture&&(O=(H.backgroundBlurriness>0?i:t).get(O)),O}function C(H){let O=!1;const j=A(H);j===null?S(p,g):j&&j.isColor&&(S(j,1),O=!0);const I=o.xr.getEnvironmentBlendMode();I==="additive"?r.buffers.color.setClear(0,0,0,1,d):I==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,d),(o.autoClear||O)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function E(H,O){const j=A(O);j&&(j.isCubeTexture||j.mapping===uu)?(v===void 0&&(v=new Ki(new vl(1,1,1),new Mr({name:"BackgroundCubeMaterial",uniforms:lo(fa.backgroundCube.uniforms),vertexShader:fa.backgroundCube.vertexShader,fragmentShader:fa.backgroundCube.fragmentShader,side:fi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(I,k,K){this.matrixWorld.copyPosition(K.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(v)),qr.copy(O.backgroundRotation),qr.x*=-1,qr.y*=-1,qr.z*=-1,j.isCubeTexture&&j.isRenderTargetTexture===!1&&(qr.y*=-1,qr.z*=-1),v.material.uniforms.envMap.value=j,v.material.uniforms.flipEnvMap.value=j.isCubeTexture&&j.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=O.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(Xb.makeRotationFromEuler(qr)),v.material.toneMapped=Xe.getTransfer(j.colorSpace)!==an,(y!==j||x!==j.version||M!==o.toneMapping)&&(v.material.needsUpdate=!0,y=j,x=j.version,M=o.toneMapping),v.layers.enableAll(),H.unshift(v,v.geometry,v.material,0,0,null)):j&&j.isTexture&&(m===void 0&&(m=new Ki(new hu(2,2),new Mr({name:"BackgroundMaterial",uniforms:lo(fa.background.uniforms),vertexShader:fa.background.vertexShader,fragmentShader:fa.background.fragmentShader,side:Er,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(m)),m.material.uniforms.t2D.value=j,m.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,m.material.toneMapped=Xe.getTransfer(j.colorSpace)!==an,j.matrixAutoUpdate===!0&&j.updateMatrix(),m.material.uniforms.uvTransform.value.copy(j.matrix),(y!==j||x!==j.version||M!==o.toneMapping)&&(m.material.needsUpdate=!0,y=j,x=j.version,M=o.toneMapping),m.layers.enableAll(),H.unshift(m,m.geometry,m.material,0,0,null))}function S(H,O){H.getRGB(Wc,f0(o)),r.buffers.color.setClear(Wc.r,Wc.g,Wc.b,O,d)}function G(){v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return p},setClearColor:function(H,O=1){p.set(H),g=O,S(p,g)},getClearAlpha:function(){return g},setClearAlpha:function(H){g=H,S(p,g)},render:C,addToRenderList:E,dispose:G}}function qb(o,t){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=x(null);let c=l,d=!1;function p(N,Y,gt,ft,vt){let xt=!1;const V=y(ft,gt,Y);c!==V&&(c=V,m(c.object)),xt=M(N,ft,gt,vt),xt&&A(N,ft,gt,vt),vt!==null&&t.update(vt,o.ELEMENT_ARRAY_BUFFER),(xt||d)&&(d=!1,O(N,Y,gt,ft),vt!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(vt).buffer))}function g(){return o.createVertexArray()}function m(N){return o.bindVertexArray(N)}function v(N){return o.deleteVertexArray(N)}function y(N,Y,gt){const ft=gt.wireframe===!0;let vt=r[N.id];vt===void 0&&(vt={},r[N.id]=vt);let xt=vt[Y.id];xt===void 0&&(xt={},vt[Y.id]=xt);let V=xt[ft];return V===void 0&&(V=x(g()),xt[ft]=V),V}function x(N){const Y=[],gt=[],ft=[];for(let vt=0;vt<i;vt++)Y[vt]=0,gt[vt]=0,ft[vt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Y,enabledAttributes:gt,attributeDivisors:ft,object:N,attributes:{},index:null}}function M(N,Y,gt,ft){const vt=c.attributes,xt=Y.attributes;let V=0;const ot=gt.getAttributes();for(const $ in ot)if(ot[$].location>=0){const F=vt[$];let rt=xt[$];if(rt===void 0&&($==="instanceMatrix"&&N.instanceMatrix&&(rt=N.instanceMatrix),$==="instanceColor"&&N.instanceColor&&(rt=N.instanceColor)),F===void 0||F.attribute!==rt||rt&&F.data!==rt.data)return!0;V++}return c.attributesNum!==V||c.index!==ft}function A(N,Y,gt,ft){const vt={},xt=Y.attributes;let V=0;const ot=gt.getAttributes();for(const $ in ot)if(ot[$].location>=0){let F=xt[$];F===void 0&&($==="instanceMatrix"&&N.instanceMatrix&&(F=N.instanceMatrix),$==="instanceColor"&&N.instanceColor&&(F=N.instanceColor));const rt={};rt.attribute=F,F&&F.data&&(rt.data=F.data),vt[$]=rt,V++}c.attributes=vt,c.attributesNum=V,c.index=ft}function C(){const N=c.newAttributes;for(let Y=0,gt=N.length;Y<gt;Y++)N[Y]=0}function E(N){S(N,0)}function S(N,Y){const gt=c.newAttributes,ft=c.enabledAttributes,vt=c.attributeDivisors;gt[N]=1,ft[N]===0&&(o.enableVertexAttribArray(N),ft[N]=1),vt[N]!==Y&&(o.vertexAttribDivisor(N,Y),vt[N]=Y)}function G(){const N=c.newAttributes,Y=c.enabledAttributes;for(let gt=0,ft=Y.length;gt<ft;gt++)Y[gt]!==N[gt]&&(o.disableVertexAttribArray(gt),Y[gt]=0)}function H(N,Y,gt,ft,vt,xt,V){V===!0?o.vertexAttribIPointer(N,Y,gt,vt,xt):o.vertexAttribPointer(N,Y,gt,ft,vt,xt)}function O(N,Y,gt,ft){C();const vt=ft.attributes,xt=gt.getAttributes(),V=Y.defaultAttributeValues;for(const ot in xt){const $=xt[ot];if($.location>=0){let Lt=vt[ot];if(Lt===void 0&&(ot==="instanceMatrix"&&N.instanceMatrix&&(Lt=N.instanceMatrix),ot==="instanceColor"&&N.instanceColor&&(Lt=N.instanceColor)),Lt!==void 0){const F=Lt.normalized,rt=Lt.itemSize,Tt=t.get(Lt);if(Tt===void 0)continue;const Dt=Tt.buffer,at=Tt.type,Mt=Tt.bytesPerElement,Ct=at===o.INT||at===o.UNSIGNED_INT||Lt.gpuType===Gd;if(Lt.isInterleavedBufferAttribute){const zt=Lt.data,Ot=zt.stride,fe=Lt.offset;if(zt.isInstancedInterleavedBuffer){for(let te=0;te<$.locationSize;te++)S($.location+te,zt.meshPerAttribute);N.isInstancedMesh!==!0&&ft._maxInstanceCount===void 0&&(ft._maxInstanceCount=zt.meshPerAttribute*zt.count)}else for(let te=0;te<$.locationSize;te++)E($.location+te);o.bindBuffer(o.ARRAY_BUFFER,Dt);for(let te=0;te<$.locationSize;te++)H($.location+te,rt/$.locationSize,at,F,Ot*Mt,(fe+rt/$.locationSize*te)*Mt,Ct)}else{if(Lt.isInstancedBufferAttribute){for(let zt=0;zt<$.locationSize;zt++)S($.location+zt,Lt.meshPerAttribute);N.isInstancedMesh!==!0&&ft._maxInstanceCount===void 0&&(ft._maxInstanceCount=Lt.meshPerAttribute*Lt.count)}else for(let zt=0;zt<$.locationSize;zt++)E($.location+zt);o.bindBuffer(o.ARRAY_BUFFER,Dt);for(let zt=0;zt<$.locationSize;zt++)H($.location+zt,rt/$.locationSize,at,F,rt*Mt,rt/$.locationSize*zt*Mt,Ct)}}else if(V!==void 0){const F=V[ot];if(F!==void 0)switch(F.length){case 2:o.vertexAttrib2fv($.location,F);break;case 3:o.vertexAttrib3fv($.location,F);break;case 4:o.vertexAttrib4fv($.location,F);break;default:o.vertexAttrib1fv($.location,F)}}}}G()}function j(){K();for(const N in r){const Y=r[N];for(const gt in Y){const ft=Y[gt];for(const vt in ft)v(ft[vt].object),delete ft[vt];delete Y[gt]}delete r[N]}}function I(N){if(r[N.id]===void 0)return;const Y=r[N.id];for(const gt in Y){const ft=Y[gt];for(const vt in ft)v(ft[vt].object),delete ft[vt];delete Y[gt]}delete r[N.id]}function k(N){for(const Y in r){const gt=r[Y];if(gt[N.id]===void 0)continue;const ft=gt[N.id];for(const vt in ft)v(ft[vt].object),delete ft[vt];delete gt[N.id]}}function K(){P(),d=!0,c!==l&&(c=l,m(c.object))}function P(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:K,resetDefaultState:P,dispose:j,releaseStatesOfGeometry:I,releaseStatesOfProgram:k,initAttributes:C,enableAttribute:E,disableUnusedAttributes:G}}function Yb(o,t,i){let r;function l(m){r=m}function c(m,v){o.drawArrays(r,m,v),i.update(v,r,1)}function d(m,v,y){y!==0&&(o.drawArraysInstanced(r,m,v,y),i.update(v,r,y))}function p(m,v,y){if(y===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,v,0,y);let M=0;for(let A=0;A<y;A++)M+=v[A];i.update(M,r,1)}function g(m,v,y,x){if(y===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let A=0;A<m.length;A++)d(m[A],v[A],x[A]);else{M.multiDrawArraysInstancedWEBGL(r,m,0,v,0,x,0,y);let A=0;for(let C=0;C<y;C++)A+=v[C]*x[C];i.update(A,r,1)}}this.setMode=l,this.render=c,this.renderInstances=d,this.renderMultiDraw=p,this.renderMultiDrawInstances=g}function jb(o,t,i,r){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const k=t.get("EXT_texture_filter_anisotropic");l=o.getParameter(k.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(k){return!(k!==Zi&&r.convert(k)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function p(k){const K=k===gl&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(k!==pa&&r.convert(k)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&k!==Ha&&!K)}function g(k){if(k==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";k="mediump"}return k==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=i.precision!==void 0?i.precision:"highp";const v=g(m);v!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",v,"instead."),m=v);const y=i.logarithmicDepthBuffer===!0,x=i.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),M=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),A=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=o.getParameter(o.MAX_TEXTURE_SIZE),E=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),S=o.getParameter(o.MAX_VERTEX_ATTRIBS),G=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),H=o.getParameter(o.MAX_VARYING_VECTORS),O=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),j=A>0,I=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:g,textureFormatReadable:d,textureTypeReadable:p,precision:m,logarithmicDepthBuffer:y,reverseDepthBuffer:x,maxTextures:M,maxVertexTextures:A,maxTextureSize:C,maxCubemapSize:E,maxAttributes:S,maxVertexUniforms:G,maxVaryings:H,maxFragmentUniforms:O,vertexTextures:j,maxSamples:I}}function Zb(o){const t=this;let i=null,r=0,l=!1,c=!1;const d=new vr,p=new xe,g={value:null,needsUpdate:!1};this.uniform=g,this.numPlanes=0,this.numIntersection=0,this.init=function(y,x){const M=y.length!==0||x||r!==0||l;return l=x,r=y.length,M},this.beginShadows=function(){c=!0,v(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(y,x){i=v(y,x,0)},this.setState=function(y,x,M){const A=y.clippingPlanes,C=y.clipIntersection,E=y.clipShadows,S=o.get(y);if(!l||A===null||A.length===0||c&&!E)c?v(null):m();else{const G=c?0:r,H=G*4;let O=S.clippingState||null;g.value=O,O=v(A,x,H,M);for(let j=0;j!==H;++j)O[j]=i[j];S.clippingState=O,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=G}};function m(){g.value!==i&&(g.value=i,g.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function v(y,x,M,A){const C=y!==null?y.length:0;let E=null;if(C!==0){if(E=g.value,A!==!0||E===null){const S=M+C*4,G=x.matrixWorldInverse;p.getNormalMatrix(G),(E===null||E.length<S)&&(E=new Float32Array(S));for(let H=0,O=M;H!==C;++H,O+=4)d.copy(y[H]).applyMatrix4(G,p),d.normal.toArray(E,O),E[O+3]=d.constant}g.value=E,g.needsUpdate=!0}return t.numPlanes=C,t.numIntersection=0,E}}function Kb(o){let t=new WeakMap;function i(d,p){return p===rd?d.mapping=ro:p===sd&&(d.mapping=so),d}function r(d){if(d&&d.isTexture){const p=d.mapping;if(p===rd||p===sd)if(t.has(d)){const g=t.get(d).texture;return i(g,d.mapping)}else{const g=d.image;if(g&&g.height>0){const m=new Wx(g.height);return m.fromEquirectangularTexture(o,d),t.set(d,m),d.addEventListener("dispose",l),i(m.texture,d.mapping)}else return null}}return d}function l(d){const p=d.target;p.removeEventListener("dispose",l);const g=t.get(p);g!==void 0&&(t.delete(p),g.dispose())}function c(){t=new WeakMap}return{get:r,dispose:c}}const to=4,fv=[.125,.215,.35,.446,.526,.582],Qr=20,Gh=new m0,hv=new Ie;let Vh=null,kh=0,Xh=0,Wh=!1;const jr=(1+Math.sqrt(5))/2,Js=1/jr,dv=[new st(-jr,Js,0),new st(jr,Js,0),new st(-Js,0,jr),new st(Js,0,jr),new st(0,jr,-Js),new st(0,jr,Js),new st(-1,1,-1),new st(1,1,-1),new st(-1,1,1),new st(1,1,1)],Qb=new st;class pv{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,r=.1,l=100,c={}){const{size:d=256,position:p=Qb}=c;Vh=this._renderer.getRenderTarget(),kh=this._renderer.getActiveCubeFace(),Xh=this._renderer.getActiveMipmapLevel(),Wh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const g=this._allocateTargets();return g.depthBuffer=!0,this._sceneToCubeUV(t,r,l,g,p),i>0&&this._blur(g,0,0,i),this._applyPMREM(g),this._cleanup(g),g}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_v(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=gv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Vh,kh,Xh),this._renderer.xr.enabled=Wh,t.scissorTest=!1,qc(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===ro||t.mapping===so?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Vh=this._renderer.getRenderTarget(),kh=this._renderer.getActiveCubeFace(),Xh=this._renderer.getActiveMipmapLevel(),Wh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:ha,minFilter:ha,generateMipmaps:!1,type:gl,format:Zi,colorSpace:oo,depthBuffer:!1},l=mv(t,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=mv(t,i,r);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Jb(c)),this._blurMaterial=$b(c,t,i)}return l}_compileMaterial(t){const i=new Ki(this._lodPlanes[0],t);this._renderer.compile(i,Gh)}_sceneToCubeUV(t,i,r,l,c){const g=new Bi(90,1,i,r),m=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],y=this._renderer,x=y.autoClear,M=y.toneMapping;y.getClearColor(hv),y.toneMapping=xr,y.autoClear=!1;const A=new l0({name:"PMREM.Background",side:fi,depthWrite:!1,depthTest:!1}),C=new Ki(new vl,A);let E=!1;const S=t.background;S?S.isColor&&(A.color.copy(S),t.background=null,E=!0):(A.color.copy(hv),E=!0);for(let G=0;G<6;G++){const H=G%3;H===0?(g.up.set(0,m[G],0),g.position.set(c.x,c.y,c.z),g.lookAt(c.x+v[G],c.y,c.z)):H===1?(g.up.set(0,0,m[G]),g.position.set(c.x,c.y,c.z),g.lookAt(c.x,c.y+v[G],c.z)):(g.up.set(0,m[G],0),g.position.set(c.x,c.y,c.z),g.lookAt(c.x,c.y,c.z+v[G]));const O=this._cubeSize;qc(l,H*O,G>2?O:0,O,O),y.setRenderTarget(l),E&&y.render(C,g),y.render(t,g)}C.geometry.dispose(),C.material.dispose(),y.toneMapping=M,y.autoClear=x,t.background=S}_textureToCubeUV(t,i){const r=this._renderer,l=t.mapping===ro||t.mapping===so;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=_v()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=gv());const c=l?this._cubemapMaterial:this._equirectMaterial,d=new Ki(this._lodPlanes[0],c),p=c.uniforms;p.envMap.value=t;const g=this._cubeSize;qc(i,0,0,3*g,2*g),r.setRenderTarget(i),r.render(d,Gh)}_applyPMREM(t){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const d=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),p=dv[(l-c-1)%dv.length];this._blur(t,c-1,c,d,p)}i.autoClear=r}_blur(t,i,r,l,c){const d=this._pingPongRenderTarget;this._halfBlur(t,d,i,r,l,"latitudinal",c),this._halfBlur(d,t,r,r,l,"longitudinal",c)}_halfBlur(t,i,r,l,c,d,p){const g=this._renderer,m=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,y=new Ki(this._lodPlanes[l],m),x=m.uniforms,M=this._sizeLods[r]-1,A=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*Qr-1),C=c/A,E=isFinite(c)?1+Math.floor(v*C):Qr;E>Qr&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${E} samples when the maximum is set to ${Qr}`);const S=[];let G=0;for(let k=0;k<Qr;++k){const K=k/C,P=Math.exp(-K*K/2);S.push(P),k===0?G+=P:k<E&&(G+=2*P)}for(let k=0;k<S.length;k++)S[k]=S[k]/G;x.envMap.value=t.texture,x.samples.value=E,x.weights.value=S,x.latitudinal.value=d==="latitudinal",p&&(x.poleAxis.value=p);const{_lodMax:H}=this;x.dTheta.value=A,x.mipInt.value=H-r;const O=this._sizeLods[l],j=3*O*(l>H-to?l-H+to:0),I=4*(this._cubeSize-O);qc(i,j,I,3*O,2*O),g.setRenderTarget(i),g.render(y,Gh)}}function Jb(o){const t=[],i=[],r=[];let l=o;const c=o-to+1+fv.length;for(let d=0;d<c;d++){const p=Math.pow(2,l);i.push(p);let g=1/p;d>o-to?g=fv[d-o+to-1]:d===0&&(g=0),r.push(g);const m=1/(p-2),v=-m,y=1+m,x=[v,v,y,v,y,y,v,v,y,y,v,y],M=6,A=6,C=3,E=2,S=1,G=new Float32Array(C*A*M),H=new Float32Array(E*A*M),O=new Float32Array(S*A*M);for(let I=0;I<M;I++){const k=I%3*2/3-1,K=I>2?0:-1,P=[k,K,0,k+2/3,K,0,k+2/3,K+1,0,k,K,0,k+2/3,K+1,0,k,K+1,0];G.set(P,C*A*I),H.set(x,E*A*I);const N=[I,I,I,I,I,I];O.set(N,S*A*I)}const j=new Ji;j.setAttribute("position",new da(G,C)),j.setAttribute("uv",new da(H,E)),j.setAttribute("faceIndex",new da(O,S)),t.push(j),l>to&&l--}return{lodPlanes:t,sizeLods:i,sigmas:r}}function mv(o,t,i){const r=new es(o,t,i);return r.texture.mapping=uu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function qc(o,t,i,r,l){o.viewport.set(t,i,r,l),o.scissor.set(t,i,r,l)}function $b(o,t,i){const r=new Float32Array(Qr),l=new st(0,1,0);return new Mr({name:"SphericalGaussianBlur",defines:{n:Qr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Kd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Sr,depthTest:!1,depthWrite:!1})}function gv(){return new Mr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Kd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Sr,depthTest:!1,depthWrite:!1})}function _v(){return new Mr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Kd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Sr,depthTest:!1,depthWrite:!1})}function Kd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function tT(o){let t=new WeakMap,i=null;function r(p){if(p&&p.isTexture){const g=p.mapping,m=g===rd||g===sd,v=g===ro||g===so;if(m||v){let y=t.get(p);const x=y!==void 0?y.texture.pmremVersion:0;if(p.isRenderTargetTexture&&p.pmremVersion!==x)return i===null&&(i=new pv(o)),y=m?i.fromEquirectangular(p,y):i.fromCubemap(p,y),y.texture.pmremVersion=p.pmremVersion,t.set(p,y),y.texture;if(y!==void 0)return y.texture;{const M=p.image;return m&&M&&M.height>0||v&&M&&l(M)?(i===null&&(i=new pv(o)),y=m?i.fromEquirectangular(p):i.fromCubemap(p),y.texture.pmremVersion=p.pmremVersion,t.set(p,y),p.addEventListener("dispose",c),y.texture):null}}}return p}function l(p){let g=0;const m=6;for(let v=0;v<m;v++)p[v]!==void 0&&g++;return g===m}function c(p){const g=p.target;g.removeEventListener("dispose",c);const m=t.get(g);m!==void 0&&(t.delete(g),m.dispose())}function d(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function eT(o){const t={};function i(r){if(t[r]!==void 0)return t[r];let l;switch(r){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(r)}return t[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&nu("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function nT(o,t,i,r){const l={},c=new WeakMap;function d(y){const x=y.target;x.index!==null&&t.remove(x.index);for(const A in x.attributes)t.remove(x.attributes[A]);x.removeEventListener("dispose",d),delete l[x.id];const M=c.get(x);M&&(t.remove(M),c.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function p(y,x){return l[x.id]===!0||(x.addEventListener("dispose",d),l[x.id]=!0,i.memory.geometries++),x}function g(y){const x=y.attributes;for(const M in x)t.update(x[M],o.ARRAY_BUFFER)}function m(y){const x=[],M=y.index,A=y.attributes.position;let C=0;if(M!==null){const G=M.array;C=M.version;for(let H=0,O=G.length;H<O;H+=3){const j=G[H+0],I=G[H+1],k=G[H+2];x.push(j,I,I,k,k,j)}}else if(A!==void 0){const G=A.array;C=A.version;for(let H=0,O=G.length/3-1;H<O;H+=3){const j=H+0,I=H+1,k=H+2;x.push(j,I,I,k,k,j)}}else return;const E=new(a0(x)?u0:c0)(x,1);E.version=C;const S=c.get(y);S&&t.remove(S),c.set(y,E)}function v(y){const x=c.get(y);if(x){const M=y.index;M!==null&&x.version<M.version&&m(y)}else m(y);return c.get(y)}return{get:p,update:g,getWireframeAttribute:v}}function iT(o,t,i){let r;function l(x){r=x}let c,d;function p(x){c=x.type,d=x.bytesPerElement}function g(x,M){o.drawElements(r,M,c,x*d),i.update(M,r,1)}function m(x,M,A){A!==0&&(o.drawElementsInstanced(r,M,c,x*d,A),i.update(M,r,A))}function v(x,M,A){if(A===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,c,x,0,A);let E=0;for(let S=0;S<A;S++)E+=M[S];i.update(E,r,1)}function y(x,M,A,C){if(A===0)return;const E=t.get("WEBGL_multi_draw");if(E===null)for(let S=0;S<x.length;S++)m(x[S]/d,M[S],C[S]);else{E.multiDrawElementsInstancedWEBGL(r,M,0,c,x,0,C,0,A);let S=0;for(let G=0;G<A;G++)S+=M[G]*C[G];i.update(S,r,1)}}this.setMode=l,this.setIndex=p,this.render=g,this.renderInstances=m,this.renderMultiDraw=v,this.renderMultiDrawInstances=y}function aT(o){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,d,p){switch(i.calls++,d){case o.TRIANGLES:i.triangles+=p*(c/3);break;case o.LINES:i.lines+=p*(c/2);break;case o.LINE_STRIP:i.lines+=p*(c-1);break;case o.LINE_LOOP:i.lines+=p*c;break;case o.POINTS:i.points+=p*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:r}}function rT(o,t,i){const r=new WeakMap,l=new yn;function c(d,p,g){const m=d.morphTargetInfluences,v=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,y=v!==void 0?v.length:0;let x=r.get(p);if(x===void 0||x.count!==y){let P=function(){k.dispose(),r.delete(p),p.removeEventListener("dispose",P)};x!==void 0&&x.texture.dispose();const M=p.morphAttributes.position!==void 0,A=p.morphAttributes.normal!==void 0,C=p.morphAttributes.color!==void 0,E=p.morphAttributes.position||[],S=p.morphAttributes.normal||[],G=p.morphAttributes.color||[];let H=0;M===!0&&(H=1),A===!0&&(H=2),C===!0&&(H=3);let O=p.attributes.position.count*H,j=1;O>t.maxTextureSize&&(j=Math.ceil(O/t.maxTextureSize),O=t.maxTextureSize);const I=new Float32Array(O*j*4*y),k=new r0(I,O,j,y);k.type=Ha,k.needsUpdate=!0;const K=H*4;for(let N=0;N<y;N++){const Y=E[N],gt=S[N],ft=G[N],vt=O*j*4*N;for(let xt=0;xt<Y.count;xt++){const V=xt*K;M===!0&&(l.fromBufferAttribute(Y,xt),I[vt+V+0]=l.x,I[vt+V+1]=l.y,I[vt+V+2]=l.z,I[vt+V+3]=0),A===!0&&(l.fromBufferAttribute(gt,xt),I[vt+V+4]=l.x,I[vt+V+5]=l.y,I[vt+V+6]=l.z,I[vt+V+7]=0),C===!0&&(l.fromBufferAttribute(ft,xt),I[vt+V+8]=l.x,I[vt+V+9]=l.y,I[vt+V+10]=l.z,I[vt+V+11]=ft.itemSize===4?l.w:1)}}x={count:y,texture:k,size:new Ee(O,j)},r.set(p,x),p.addEventListener("dispose",P)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)g.getUniforms().setValue(o,"morphTexture",d.morphTexture,i);else{let M=0;for(let C=0;C<m.length;C++)M+=m[C];const A=p.morphTargetsRelative?1:1-M;g.getUniforms().setValue(o,"morphTargetBaseInfluence",A),g.getUniforms().setValue(o,"morphTargetInfluences",m)}g.getUniforms().setValue(o,"morphTargetsTexture",x.texture,i),g.getUniforms().setValue(o,"morphTargetsTextureSize",x.size)}return{update:c}}function sT(o,t,i,r){let l=new WeakMap;function c(g){const m=r.render.frame,v=g.geometry,y=t.get(g,v);if(l.get(y)!==m&&(t.update(y),l.set(y,m)),g.isInstancedMesh&&(g.hasEventListener("dispose",p)===!1&&g.addEventListener("dispose",p),l.get(g)!==m&&(i.update(g.instanceMatrix,o.ARRAY_BUFFER),g.instanceColor!==null&&i.update(g.instanceColor,o.ARRAY_BUFFER),l.set(g,m))),g.isSkinnedMesh){const x=g.skeleton;l.get(x)!==m&&(x.update(),l.set(x,m))}return y}function d(){l=new WeakMap}function p(g){const m=g.target;m.removeEventListener("dispose",p),i.remove(m.instanceMatrix),m.instanceColor!==null&&i.remove(m.instanceColor)}return{update:c,dispose:d}}const _0=new hi,vv=new p0(1,1),v0=new r0,y0=new wx,S0=new d0,yv=[],Sv=[],xv=new Float32Array(16),Ev=new Float32Array(9),Mv=new Float32Array(4);function fo(o,t,i){const r=o[0];if(r<=0||r>0)return o;const l=t*i;let c=yv[l];if(c===void 0&&(c=new Float32Array(l),yv[l]=c),t!==0){r.toArray(c,0);for(let d=1,p=0;d!==t;++d)p+=i,o[d].toArray(c,p)}return c}function Pn(o,t){if(o.length!==t.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==t[i])return!1;return!0}function Bn(o,t){for(let i=0,r=t.length;i<r;i++)o[i]=t[i]}function du(o,t){let i=Sv[t];i===void 0&&(i=new Int32Array(t),Sv[t]=i);for(let r=0;r!==t;++r)i[r]=o.allocateTextureUnit();return i}function oT(o,t){const i=this.cache;i[0]!==t&&(o.uniform1f(this.addr,t),i[0]=t)}function lT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Pn(i,t))return;o.uniform2fv(this.addr,t),Bn(i,t)}}function cT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(Pn(i,t))return;o.uniform3fv(this.addr,t),Bn(i,t)}}function uT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Pn(i,t))return;o.uniform4fv(this.addr,t),Bn(i,t)}}function fT(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(Pn(i,t))return;o.uniformMatrix2fv(this.addr,!1,t),Bn(i,t)}else{if(Pn(i,r))return;Mv.set(r),o.uniformMatrix2fv(this.addr,!1,Mv),Bn(i,r)}}function hT(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(Pn(i,t))return;o.uniformMatrix3fv(this.addr,!1,t),Bn(i,t)}else{if(Pn(i,r))return;Ev.set(r),o.uniformMatrix3fv(this.addr,!1,Ev),Bn(i,r)}}function dT(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(Pn(i,t))return;o.uniformMatrix4fv(this.addr,!1,t),Bn(i,t)}else{if(Pn(i,r))return;xv.set(r),o.uniformMatrix4fv(this.addr,!1,xv),Bn(i,r)}}function pT(o,t){const i=this.cache;i[0]!==t&&(o.uniform1i(this.addr,t),i[0]=t)}function mT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Pn(i,t))return;o.uniform2iv(this.addr,t),Bn(i,t)}}function gT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Pn(i,t))return;o.uniform3iv(this.addr,t),Bn(i,t)}}function _T(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Pn(i,t))return;o.uniform4iv(this.addr,t),Bn(i,t)}}function vT(o,t){const i=this.cache;i[0]!==t&&(o.uniform1ui(this.addr,t),i[0]=t)}function yT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Pn(i,t))return;o.uniform2uiv(this.addr,t),Bn(i,t)}}function ST(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Pn(i,t))return;o.uniform3uiv(this.addr,t),Bn(i,t)}}function xT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Pn(i,t))return;o.uniform4uiv(this.addr,t),Bn(i,t)}}function ET(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let c;this.type===o.SAMPLER_2D_SHADOW?(vv.compareFunction=i0,c=vv):c=_0,i.setTexture2D(t||c,l)}function MT(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(t||y0,l)}function bT(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(t||S0,l)}function TT(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(t||v0,l)}function AT(o){switch(o){case 5126:return oT;case 35664:return lT;case 35665:return cT;case 35666:return uT;case 35674:return fT;case 35675:return hT;case 35676:return dT;case 5124:case 35670:return pT;case 35667:case 35671:return mT;case 35668:case 35672:return gT;case 35669:case 35673:return _T;case 5125:return vT;case 36294:return yT;case 36295:return ST;case 36296:return xT;case 35678:case 36198:case 36298:case 36306:case 35682:return ET;case 35679:case 36299:case 36307:return MT;case 35680:case 36300:case 36308:case 36293:return bT;case 36289:case 36303:case 36311:case 36292:return TT}}function RT(o,t){o.uniform1fv(this.addr,t)}function wT(o,t){const i=fo(t,this.size,2);o.uniform2fv(this.addr,i)}function CT(o,t){const i=fo(t,this.size,3);o.uniform3fv(this.addr,i)}function DT(o,t){const i=fo(t,this.size,4);o.uniform4fv(this.addr,i)}function UT(o,t){const i=fo(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function LT(o,t){const i=fo(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function NT(o,t){const i=fo(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function OT(o,t){o.uniform1iv(this.addr,t)}function PT(o,t){o.uniform2iv(this.addr,t)}function BT(o,t){o.uniform3iv(this.addr,t)}function FT(o,t){o.uniform4iv(this.addr,t)}function zT(o,t){o.uniform1uiv(this.addr,t)}function IT(o,t){o.uniform2uiv(this.addr,t)}function HT(o,t){o.uniform3uiv(this.addr,t)}function GT(o,t){o.uniform4uiv(this.addr,t)}function VT(o,t,i){const r=this.cache,l=t.length,c=du(i,l);Pn(r,c)||(o.uniform1iv(this.addr,c),Bn(r,c));for(let d=0;d!==l;++d)i.setTexture2D(t[d]||_0,c[d])}function kT(o,t,i){const r=this.cache,l=t.length,c=du(i,l);Pn(r,c)||(o.uniform1iv(this.addr,c),Bn(r,c));for(let d=0;d!==l;++d)i.setTexture3D(t[d]||y0,c[d])}function XT(o,t,i){const r=this.cache,l=t.length,c=du(i,l);Pn(r,c)||(o.uniform1iv(this.addr,c),Bn(r,c));for(let d=0;d!==l;++d)i.setTextureCube(t[d]||S0,c[d])}function WT(o,t,i){const r=this.cache,l=t.length,c=du(i,l);Pn(r,c)||(o.uniform1iv(this.addr,c),Bn(r,c));for(let d=0;d!==l;++d)i.setTexture2DArray(t[d]||v0,c[d])}function qT(o){switch(o){case 5126:return RT;case 35664:return wT;case 35665:return CT;case 35666:return DT;case 35674:return UT;case 35675:return LT;case 35676:return NT;case 5124:case 35670:return OT;case 35667:case 35671:return PT;case 35668:case 35672:return BT;case 35669:case 35673:return FT;case 5125:return zT;case 36294:return IT;case 36295:return HT;case 36296:return GT;case 35678:case 36198:case 36298:case 36306:case 35682:return VT;case 35679:case 36299:case 36307:return kT;case 35680:case 36300:case 36308:case 36293:return XT;case 36289:case 36303:case 36311:case 36292:return WT}}class YT{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.setValue=AT(i.type)}}class jT{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=qT(i.type)}}class ZT{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,r){const l=this.seq;for(let c=0,d=l.length;c!==d;++c){const p=l[c];p.setValue(t,i[p.id],r)}}}const qh=/(\w+)(\])?(\[|\.)?/g;function bv(o,t){o.seq.push(t),o.map[t.id]=t}function KT(o,t,i){const r=o.name,l=r.length;for(qh.lastIndex=0;;){const c=qh.exec(r),d=qh.lastIndex;let p=c[1];const g=c[2]==="]",m=c[3];if(g&&(p=p|0),m===void 0||m==="["&&d+2===l){bv(i,m===void 0?new YT(p,o,t):new jT(p,o,t));break}else{let y=i.map[p];y===void 0&&(y=new ZT(p),bv(i,y)),i=y}}}class au{constructor(t,i){this.seq=[],this.map={};const r=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const c=t.getActiveUniform(i,l),d=t.getUniformLocation(i,c.name);KT(c,d,this)}}setValue(t,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(t,r,l)}setOptional(t,i,r){const l=i[r];l!==void 0&&this.setValue(t,r,l)}static upload(t,i,r,l){for(let c=0,d=i.length;c!==d;++c){const p=i[c],g=r[p.id];g.needsUpdate!==!1&&p.setValue(t,g.value,l)}}static seqWithValue(t,i){const r=[];for(let l=0,c=t.length;l!==c;++l){const d=t[l];d.id in i&&r.push(d)}return r}}function Tv(o,t,i){const r=o.createShader(t);return o.shaderSource(r,i),o.compileShader(r),r}const QT=37297;let JT=0;function $T(o,t){const i=o.split(`
`),r=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let d=l;d<c;d++){const p=d+1;r.push(`${p===t?">":" "} ${p}: ${i[d]}`)}return r.join(`
`)}const Av=new xe;function tA(o){Xe._getMatrix(Av,Xe.workingColorSpace,o);const t=`mat3( ${Av.elements.map(i=>i.toFixed(4))} )`;switch(Xe.getTransfer(o)){case ru:return[t,"LinearTransferOETF"];case an:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function Rv(o,t,i){const r=o.getShaderParameter(t,o.COMPILE_STATUS),l=o.getShaderInfoLog(t).trim();if(r&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const d=parseInt(c[1]);return i.toUpperCase()+`

`+l+`

`+$T(o.getShaderSource(t),d)}else return l}function eA(o,t){const i=tA(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function nA(o,t){let i;switch(t){case $S:i="Linear";break;case tx:i="Reinhard";break;case ex:i="Cineon";break;case nx:i="ACESFilmic";break;case ax:i="AgX";break;case rx:i="Neutral";break;case ix:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Yc=new st;function iA(){Xe.getLuminanceCoefficients(Yc);const o=Yc.x.toFixed(4),t=Yc.y.toFixed(4),i=Yc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function aA(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fl).join(`
`)}function rA(o){const t=[];for(const i in o){const r=o[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function sA(o,t){const i={},r=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=o.getActiveAttrib(t,l),d=c.name;let p=1;c.type===o.FLOAT_MAT2&&(p=2),c.type===o.FLOAT_MAT3&&(p=3),c.type===o.FLOAT_MAT4&&(p=4),i[d]={type:c.type,location:o.getAttribLocation(t,d),locationSize:p}}return i}function fl(o){return o!==""}function wv(o,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Cv(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const oA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fd(o){return o.replace(oA,cA)}const lA=new Map;function cA(o,t){let i=Te[t];if(i===void 0){const r=lA.get(t);if(r!==void 0)i=Te[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return Fd(i)}const uA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Dv(o){return o.replace(uA,fA)}function fA(o,t,i,r){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function Uv(o){let t=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function hA(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===qv?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===LS?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===za&&(t="SHADOWMAP_TYPE_VSM"),t}function dA(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case ro:case so:t="ENVMAP_TYPE_CUBE";break;case uu:t="ENVMAP_TYPE_CUBE_UV";break}return t}function pA(o){let t="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case so:t="ENVMAP_MODE_REFRACTION";break}return t}function mA(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case Hd:t="ENVMAP_BLENDING_MULTIPLY";break;case QS:t="ENVMAP_BLENDING_MIX";break;case JS:t="ENVMAP_BLENDING_ADD";break}return t}function gA(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),7*16)),texelHeight:r,maxMip:i}}function _A(o,t,i,r){const l=o.getContext(),c=i.defines;let d=i.vertexShader,p=i.fragmentShader;const g=hA(i),m=dA(i),v=pA(i),y=mA(i),x=gA(i),M=aA(i),A=rA(c),C=l.createProgram();let E,S,G=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(E=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(fl).join(`
`),E.length>0&&(E+=`
`),S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(fl).join(`
`),S.length>0&&(S+=`
`)):(E=[Uv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+g:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fl).join(`
`),S=[Uv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+v:"",i.envMap?"#define "+y:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+g:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==xr?"#define TONE_MAPPING":"",i.toneMapping!==xr?Te.tonemapping_pars_fragment:"",i.toneMapping!==xr?nA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Te.colorspace_pars_fragment,eA("linearToOutputTexel",i.outputColorSpace),iA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(fl).join(`
`)),d=Fd(d),d=wv(d,i),d=Cv(d,i),p=Fd(p),p=wv(p,i),p=Cv(p,i),d=Dv(d),p=Dv(p),i.isRawShaderMaterial!==!0&&(G=`#version 300 es
`,E=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+E,S=["#define varying in",i.glslVersion===O_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===O_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const H=G+E+d,O=G+S+p,j=Tv(l,l.VERTEX_SHADER,H),I=Tv(l,l.FRAGMENT_SHADER,O);l.attachShader(C,j),l.attachShader(C,I),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function k(Y){if(o.debug.checkShaderErrors){const gt=l.getProgramInfoLog(C).trim(),ft=l.getShaderInfoLog(j).trim(),vt=l.getShaderInfoLog(I).trim();let xt=!0,V=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(xt=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,C,j,I);else{const ot=Rv(l,j,"vertex"),$=Rv(l,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+Y.name+`
Material Type: `+Y.type+`

Program Info Log: `+gt+`
`+ot+`
`+$)}else gt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",gt):(ft===""||vt==="")&&(V=!1);V&&(Y.diagnostics={runnable:xt,programLog:gt,vertexShader:{log:ft,prefix:E},fragmentShader:{log:vt,prefix:S}})}l.deleteShader(j),l.deleteShader(I),K=new au(l,C),P=sA(l,C)}let K;this.getUniforms=function(){return K===void 0&&k(this),K};let P;this.getAttributes=function(){return P===void 0&&k(this),P};let N=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=l.getProgramParameter(C,QT)),N},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=JT++,this.cacheKey=t,this.usedTimes=1,this.program=C,this.vertexShader=j,this.fragmentShader=I,this}let vA=0;class yA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,r=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(r),d=this._getShaderCacheForMaterial(t);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(c)===!1&&(d.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let r=i.get(t);return r===void 0&&(r=new Set,i.set(t,r)),r}_getShaderStage(t){const i=this.shaderCache;let r=i.get(t);return r===void 0&&(r=new SA(t),i.set(t,r)),r}}class SA{constructor(t){this.id=vA++,this.code=t,this.usedTimes=0}}function xA(o,t,i,r,l,c,d){const p=new s0,g=new yA,m=new Set,v=[],y=l.logarithmicDepthBuffer,x=l.vertexTextures;let M=l.precision;const A={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(P){return m.add(P),P===0?"uv":`uv${P}`}function E(P,N,Y,gt,ft){const vt=gt.fog,xt=ft.geometry,V=P.isMeshStandardMaterial?gt.environment:null,ot=(P.isMeshStandardMaterial?i:t).get(P.envMap||V),$=ot&&ot.mapping===uu?ot.image.height:null,Lt=A[P.type];P.precision!==null&&(M=l.getMaxPrecision(P.precision),M!==P.precision&&console.warn("THREE.WebGLProgram.getParameters:",P.precision,"not supported, using",M,"instead."));const F=xt.morphAttributes.position||xt.morphAttributes.normal||xt.morphAttributes.color,rt=F!==void 0?F.length:0;let Tt=0;xt.morphAttributes.position!==void 0&&(Tt=1),xt.morphAttributes.normal!==void 0&&(Tt=2),xt.morphAttributes.color!==void 0&&(Tt=3);let Dt,at,Mt,Ct;if(Lt){const Fe=fa[Lt];Dt=Fe.vertexShader,at=Fe.fragmentShader}else Dt=P.vertexShader,at=P.fragmentShader,g.update(P),Mt=g.getVertexShaderID(P),Ct=g.getFragmentShaderID(P);const zt=o.getRenderTarget(),Ot=o.state.buffers.depth.getReversed(),fe=ft.isInstancedMesh===!0,te=ft.isBatchedMesh===!0,We=!!P.map,Ze=!!P.matcap,Me=!!ot,W=!!P.aoMap,kn=!!P.lightMap,Ce=!!P.bumpMap,me=!!P.normalMap,ie=!!P.displacementMap,Ye=!!P.emissiveMap,$t=!!P.metalnessMap,z=!!P.roughnessMap,D=P.anisotropy>0,lt=P.clearcoat>0,Et=P.dispersion>0,Ut=P.iridescence>0,yt=P.sheen>0,Wt=P.transmission>0,Bt=D&&!!P.anisotropyMap,Zt=lt&&!!P.clearcoatMap,Jt=lt&&!!P.clearcoatNormalMap,Pt=lt&&!!P.clearcoatRoughnessMap,jt=Ut&&!!P.iridescenceMap,Qt=Ut&&!!P.iridescenceThicknessMap,ue=yt&&!!P.sheenColorMap,kt=yt&&!!P.sheenRoughnessMap,ge=!!P.specularMap,_e=!!P.specularColorMap,je=!!P.specularIntensityMap,Q=Wt&&!!P.transmissionMap,Ht=Wt&&!!P.thicknessMap,_t=!!P.gradientMap,At=!!P.alphaMap,qt=P.alphaTest>0,Vt=!!P.alphaHash,ye=!!P.extensions;let $e=xr;P.toneMapped&&(zt===null||zt.isXRRenderTarget===!0)&&($e=o.toneMapping);const pn={shaderID:Lt,shaderType:P.type,shaderName:P.name,vertexShader:Dt,fragmentShader:at,defines:P.defines,customVertexShaderID:Mt,customFragmentShaderID:Ct,isRawShaderMaterial:P.isRawShaderMaterial===!0,glslVersion:P.glslVersion,precision:M,batching:te,batchingColor:te&&ft._colorsTexture!==null,instancing:fe,instancingColor:fe&&ft.instanceColor!==null,instancingMorph:fe&&ft.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:zt===null?o.outputColorSpace:zt.isXRRenderTarget===!0?zt.texture.colorSpace:oo,alphaToCoverage:!!P.alphaToCoverage,map:We,matcap:Ze,envMap:Me,envMapMode:Me&&ot.mapping,envMapCubeUVHeight:$,aoMap:W,lightMap:kn,bumpMap:Ce,normalMap:me,displacementMap:x&&ie,emissiveMap:Ye,normalMapObjectSpace:me&&P.normalMapType===cx,normalMapTangentSpace:me&&P.normalMapType===n0,metalnessMap:$t,roughnessMap:z,anisotropy:D,anisotropyMap:Bt,clearcoat:lt,clearcoatMap:Zt,clearcoatNormalMap:Jt,clearcoatRoughnessMap:Pt,dispersion:Et,iridescence:Ut,iridescenceMap:jt,iridescenceThicknessMap:Qt,sheen:yt,sheenColorMap:ue,sheenRoughnessMap:kt,specularMap:ge,specularColorMap:_e,specularIntensityMap:je,transmission:Wt,transmissionMap:Q,thicknessMap:Ht,gradientMap:_t,opaque:P.transparent===!1&&P.blending===no&&P.alphaToCoverage===!1,alphaMap:At,alphaTest:qt,alphaHash:Vt,combine:P.combine,mapUv:We&&C(P.map.channel),aoMapUv:W&&C(P.aoMap.channel),lightMapUv:kn&&C(P.lightMap.channel),bumpMapUv:Ce&&C(P.bumpMap.channel),normalMapUv:me&&C(P.normalMap.channel),displacementMapUv:ie&&C(P.displacementMap.channel),emissiveMapUv:Ye&&C(P.emissiveMap.channel),metalnessMapUv:$t&&C(P.metalnessMap.channel),roughnessMapUv:z&&C(P.roughnessMap.channel),anisotropyMapUv:Bt&&C(P.anisotropyMap.channel),clearcoatMapUv:Zt&&C(P.clearcoatMap.channel),clearcoatNormalMapUv:Jt&&C(P.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Pt&&C(P.clearcoatRoughnessMap.channel),iridescenceMapUv:jt&&C(P.iridescenceMap.channel),iridescenceThicknessMapUv:Qt&&C(P.iridescenceThicknessMap.channel),sheenColorMapUv:ue&&C(P.sheenColorMap.channel),sheenRoughnessMapUv:kt&&C(P.sheenRoughnessMap.channel),specularMapUv:ge&&C(P.specularMap.channel),specularColorMapUv:_e&&C(P.specularColorMap.channel),specularIntensityMapUv:je&&C(P.specularIntensityMap.channel),transmissionMapUv:Q&&C(P.transmissionMap.channel),thicknessMapUv:Ht&&C(P.thicknessMap.channel),alphaMapUv:At&&C(P.alphaMap.channel),vertexTangents:!!xt.attributes.tangent&&(me||D),vertexColors:P.vertexColors,vertexAlphas:P.vertexColors===!0&&!!xt.attributes.color&&xt.attributes.color.itemSize===4,pointsUvs:ft.isPoints===!0&&!!xt.attributes.uv&&(We||At),fog:!!vt,useFog:P.fog===!0,fogExp2:!!vt&&vt.isFogExp2,flatShading:P.flatShading===!0,sizeAttenuation:P.sizeAttenuation===!0,logarithmicDepthBuffer:y,reverseDepthBuffer:Ot,skinning:ft.isSkinnedMesh===!0,morphTargets:xt.morphAttributes.position!==void 0,morphNormals:xt.morphAttributes.normal!==void 0,morphColors:xt.morphAttributes.color!==void 0,morphTargetsCount:rt,morphTextureStride:Tt,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:P.dithering,shadowMapEnabled:o.shadowMap.enabled&&Y.length>0,shadowMapType:o.shadowMap.type,toneMapping:$e,decodeVideoTexture:We&&P.map.isVideoTexture===!0&&Xe.getTransfer(P.map.colorSpace)===an,decodeVideoTextureEmissive:Ye&&P.emissiveMap.isVideoTexture===!0&&Xe.getTransfer(P.emissiveMap.colorSpace)===an,premultipliedAlpha:P.premultipliedAlpha,doubleSided:P.side===Ia,flipSided:P.side===fi,useDepthPacking:P.depthPacking>=0,depthPacking:P.depthPacking||0,index0AttributeName:P.index0AttributeName,extensionClipCullDistance:ye&&P.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ye&&P.extensions.multiDraw===!0||te)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:P.customProgramCacheKey()};return pn.vertexUv1s=m.has(1),pn.vertexUv2s=m.has(2),pn.vertexUv3s=m.has(3),m.clear(),pn}function S(P){const N=[];if(P.shaderID?N.push(P.shaderID):(N.push(P.customVertexShaderID),N.push(P.customFragmentShaderID)),P.defines!==void 0)for(const Y in P.defines)N.push(Y),N.push(P.defines[Y]);return P.isRawShaderMaterial===!1&&(G(N,P),H(N,P),N.push(o.outputColorSpace)),N.push(P.customProgramCacheKey),N.join()}function G(P,N){P.push(N.precision),P.push(N.outputColorSpace),P.push(N.envMapMode),P.push(N.envMapCubeUVHeight),P.push(N.mapUv),P.push(N.alphaMapUv),P.push(N.lightMapUv),P.push(N.aoMapUv),P.push(N.bumpMapUv),P.push(N.normalMapUv),P.push(N.displacementMapUv),P.push(N.emissiveMapUv),P.push(N.metalnessMapUv),P.push(N.roughnessMapUv),P.push(N.anisotropyMapUv),P.push(N.clearcoatMapUv),P.push(N.clearcoatNormalMapUv),P.push(N.clearcoatRoughnessMapUv),P.push(N.iridescenceMapUv),P.push(N.iridescenceThicknessMapUv),P.push(N.sheenColorMapUv),P.push(N.sheenRoughnessMapUv),P.push(N.specularMapUv),P.push(N.specularColorMapUv),P.push(N.specularIntensityMapUv),P.push(N.transmissionMapUv),P.push(N.thicknessMapUv),P.push(N.combine),P.push(N.fogExp2),P.push(N.sizeAttenuation),P.push(N.morphTargetsCount),P.push(N.morphAttributeCount),P.push(N.numDirLights),P.push(N.numPointLights),P.push(N.numSpotLights),P.push(N.numSpotLightMaps),P.push(N.numHemiLights),P.push(N.numRectAreaLights),P.push(N.numDirLightShadows),P.push(N.numPointLightShadows),P.push(N.numSpotLightShadows),P.push(N.numSpotLightShadowsWithMaps),P.push(N.numLightProbes),P.push(N.shadowMapType),P.push(N.toneMapping),P.push(N.numClippingPlanes),P.push(N.numClipIntersection),P.push(N.depthPacking)}function H(P,N){p.disableAll(),N.supportsVertexTextures&&p.enable(0),N.instancing&&p.enable(1),N.instancingColor&&p.enable(2),N.instancingMorph&&p.enable(3),N.matcap&&p.enable(4),N.envMap&&p.enable(5),N.normalMapObjectSpace&&p.enable(6),N.normalMapTangentSpace&&p.enable(7),N.clearcoat&&p.enable(8),N.iridescence&&p.enable(9),N.alphaTest&&p.enable(10),N.vertexColors&&p.enable(11),N.vertexAlphas&&p.enable(12),N.vertexUv1s&&p.enable(13),N.vertexUv2s&&p.enable(14),N.vertexUv3s&&p.enable(15),N.vertexTangents&&p.enable(16),N.anisotropy&&p.enable(17),N.alphaHash&&p.enable(18),N.batching&&p.enable(19),N.dispersion&&p.enable(20),N.batchingColor&&p.enable(21),P.push(p.mask),p.disableAll(),N.fog&&p.enable(0),N.useFog&&p.enable(1),N.flatShading&&p.enable(2),N.logarithmicDepthBuffer&&p.enable(3),N.reverseDepthBuffer&&p.enable(4),N.skinning&&p.enable(5),N.morphTargets&&p.enable(6),N.morphNormals&&p.enable(7),N.morphColors&&p.enable(8),N.premultipliedAlpha&&p.enable(9),N.shadowMapEnabled&&p.enable(10),N.doubleSided&&p.enable(11),N.flipSided&&p.enable(12),N.useDepthPacking&&p.enable(13),N.dithering&&p.enable(14),N.transmission&&p.enable(15),N.sheen&&p.enable(16),N.opaque&&p.enable(17),N.pointsUvs&&p.enable(18),N.decodeVideoTexture&&p.enable(19),N.decodeVideoTextureEmissive&&p.enable(20),N.alphaToCoverage&&p.enable(21),P.push(p.mask)}function O(P){const N=A[P.type];let Y;if(N){const gt=fa[N];Y=Gx.clone(gt.uniforms)}else Y=P.uniforms;return Y}function j(P,N){let Y;for(let gt=0,ft=v.length;gt<ft;gt++){const vt=v[gt];if(vt.cacheKey===N){Y=vt,++Y.usedTimes;break}}return Y===void 0&&(Y=new _A(o,N,P,c),v.push(Y)),Y}function I(P){if(--P.usedTimes===0){const N=v.indexOf(P);v[N]=v[v.length-1],v.pop(),P.destroy()}}function k(P){g.remove(P)}function K(){g.dispose()}return{getParameters:E,getProgramCacheKey:S,getUniforms:O,acquireProgram:j,releaseProgram:I,releaseShaderCache:k,programs:v,dispose:K}}function EA(){let o=new WeakMap;function t(d){return o.has(d)}function i(d){let p=o.get(d);return p===void 0&&(p={},o.set(d,p)),p}function r(d){o.delete(d)}function l(d,p,g){o.get(d)[p]=g}function c(){o=new WeakMap}return{has:t,get:i,remove:r,update:l,dispose:c}}function MA(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function Lv(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function Nv(){const o=[];let t=0;const i=[],r=[],l=[];function c(){t=0,i.length=0,r.length=0,l.length=0}function d(y,x,M,A,C,E){let S=o[t];return S===void 0?(S={id:y.id,object:y,geometry:x,material:M,groupOrder:A,renderOrder:y.renderOrder,z:C,group:E},o[t]=S):(S.id=y.id,S.object=y,S.geometry=x,S.material=M,S.groupOrder=A,S.renderOrder=y.renderOrder,S.z=C,S.group=E),t++,S}function p(y,x,M,A,C,E){const S=d(y,x,M,A,C,E);M.transmission>0?r.push(S):M.transparent===!0?l.push(S):i.push(S)}function g(y,x,M,A,C,E){const S=d(y,x,M,A,C,E);M.transmission>0?r.unshift(S):M.transparent===!0?l.unshift(S):i.unshift(S)}function m(y,x){i.length>1&&i.sort(y||MA),r.length>1&&r.sort(x||Lv),l.length>1&&l.sort(x||Lv)}function v(){for(let y=t,x=o.length;y<x;y++){const M=o[y];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:p,unshift:g,finish:v,sort:m}}function bA(){let o=new WeakMap;function t(r,l){const c=o.get(r);let d;return c===void 0?(d=new Nv,o.set(r,[d])):l>=c.length?(d=new Nv,c.push(d)):d=c[l],d}function i(){o=new WeakMap}return{get:t,dispose:i}}function TA(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new st,color:new Ie};break;case"SpotLight":i={position:new st,direction:new st,color:new Ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new st,color:new Ie,distance:0,decay:0};break;case"HemisphereLight":i={direction:new st,skyColor:new Ie,groundColor:new Ie};break;case"RectAreaLight":i={color:new Ie,position:new st,halfWidth:new st,halfHeight:new st};break}return o[t.id]=i,i}}}function AA(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=i,i}}}let RA=0;function wA(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function CA(o){const t=new TA,i=AA(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new st);const l=new st,c=new hn,d=new hn;function p(m){let v=0,y=0,x=0;for(let P=0;P<9;P++)r.probe[P].set(0,0,0);let M=0,A=0,C=0,E=0,S=0,G=0,H=0,O=0,j=0,I=0,k=0;m.sort(wA);for(let P=0,N=m.length;P<N;P++){const Y=m[P],gt=Y.color,ft=Y.intensity,vt=Y.distance,xt=Y.shadow&&Y.shadow.map?Y.shadow.map.texture:null;if(Y.isAmbientLight)v+=gt.r*ft,y+=gt.g*ft,x+=gt.b*ft;else if(Y.isLightProbe){for(let V=0;V<9;V++)r.probe[V].addScaledVector(Y.sh.coefficients[V],ft);k++}else if(Y.isDirectionalLight){const V=t.get(Y);if(V.color.copy(Y.color).multiplyScalar(Y.intensity),Y.castShadow){const ot=Y.shadow,$=i.get(Y);$.shadowIntensity=ot.intensity,$.shadowBias=ot.bias,$.shadowNormalBias=ot.normalBias,$.shadowRadius=ot.radius,$.shadowMapSize=ot.mapSize,r.directionalShadow[M]=$,r.directionalShadowMap[M]=xt,r.directionalShadowMatrix[M]=Y.shadow.matrix,G++}r.directional[M]=V,M++}else if(Y.isSpotLight){const V=t.get(Y);V.position.setFromMatrixPosition(Y.matrixWorld),V.color.copy(gt).multiplyScalar(ft),V.distance=vt,V.coneCos=Math.cos(Y.angle),V.penumbraCos=Math.cos(Y.angle*(1-Y.penumbra)),V.decay=Y.decay,r.spot[C]=V;const ot=Y.shadow;if(Y.map&&(r.spotLightMap[j]=Y.map,j++,ot.updateMatrices(Y),Y.castShadow&&I++),r.spotLightMatrix[C]=ot.matrix,Y.castShadow){const $=i.get(Y);$.shadowIntensity=ot.intensity,$.shadowBias=ot.bias,$.shadowNormalBias=ot.normalBias,$.shadowRadius=ot.radius,$.shadowMapSize=ot.mapSize,r.spotShadow[C]=$,r.spotShadowMap[C]=xt,O++}C++}else if(Y.isRectAreaLight){const V=t.get(Y);V.color.copy(gt).multiplyScalar(ft),V.halfWidth.set(Y.width*.5,0,0),V.halfHeight.set(0,Y.height*.5,0),r.rectArea[E]=V,E++}else if(Y.isPointLight){const V=t.get(Y);if(V.color.copy(Y.color).multiplyScalar(Y.intensity),V.distance=Y.distance,V.decay=Y.decay,Y.castShadow){const ot=Y.shadow,$=i.get(Y);$.shadowIntensity=ot.intensity,$.shadowBias=ot.bias,$.shadowNormalBias=ot.normalBias,$.shadowRadius=ot.radius,$.shadowMapSize=ot.mapSize,$.shadowCameraNear=ot.camera.near,$.shadowCameraFar=ot.camera.far,r.pointShadow[A]=$,r.pointShadowMap[A]=xt,r.pointShadowMatrix[A]=Y.shadow.matrix,H++}r.point[A]=V,A++}else if(Y.isHemisphereLight){const V=t.get(Y);V.skyColor.copy(Y.color).multiplyScalar(ft),V.groundColor.copy(Y.groundColor).multiplyScalar(ft),r.hemi[S]=V,S++}}E>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Xt.LTC_FLOAT_1,r.rectAreaLTC2=Xt.LTC_FLOAT_2):(r.rectAreaLTC1=Xt.LTC_HALF_1,r.rectAreaLTC2=Xt.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=y,r.ambient[2]=x;const K=r.hash;(K.directionalLength!==M||K.pointLength!==A||K.spotLength!==C||K.rectAreaLength!==E||K.hemiLength!==S||K.numDirectionalShadows!==G||K.numPointShadows!==H||K.numSpotShadows!==O||K.numSpotMaps!==j||K.numLightProbes!==k)&&(r.directional.length=M,r.spot.length=C,r.rectArea.length=E,r.point.length=A,r.hemi.length=S,r.directionalShadow.length=G,r.directionalShadowMap.length=G,r.pointShadow.length=H,r.pointShadowMap.length=H,r.spotShadow.length=O,r.spotShadowMap.length=O,r.directionalShadowMatrix.length=G,r.pointShadowMatrix.length=H,r.spotLightMatrix.length=O+j-I,r.spotLightMap.length=j,r.numSpotLightShadowsWithMaps=I,r.numLightProbes=k,K.directionalLength=M,K.pointLength=A,K.spotLength=C,K.rectAreaLength=E,K.hemiLength=S,K.numDirectionalShadows=G,K.numPointShadows=H,K.numSpotShadows=O,K.numSpotMaps=j,K.numLightProbes=k,r.version=RA++)}function g(m,v){let y=0,x=0,M=0,A=0,C=0;const E=v.matrixWorldInverse;for(let S=0,G=m.length;S<G;S++){const H=m[S];if(H.isDirectionalLight){const O=r.directional[y];O.direction.setFromMatrixPosition(H.matrixWorld),l.setFromMatrixPosition(H.target.matrixWorld),O.direction.sub(l),O.direction.transformDirection(E),y++}else if(H.isSpotLight){const O=r.spot[M];O.position.setFromMatrixPosition(H.matrixWorld),O.position.applyMatrix4(E),O.direction.setFromMatrixPosition(H.matrixWorld),l.setFromMatrixPosition(H.target.matrixWorld),O.direction.sub(l),O.direction.transformDirection(E),M++}else if(H.isRectAreaLight){const O=r.rectArea[A];O.position.setFromMatrixPosition(H.matrixWorld),O.position.applyMatrix4(E),d.identity(),c.copy(H.matrixWorld),c.premultiply(E),d.extractRotation(c),O.halfWidth.set(H.width*.5,0,0),O.halfHeight.set(0,H.height*.5,0),O.halfWidth.applyMatrix4(d),O.halfHeight.applyMatrix4(d),A++}else if(H.isPointLight){const O=r.point[x];O.position.setFromMatrixPosition(H.matrixWorld),O.position.applyMatrix4(E),x++}else if(H.isHemisphereLight){const O=r.hemi[C];O.direction.setFromMatrixPosition(H.matrixWorld),O.direction.transformDirection(E),C++}}}return{setup:p,setupView:g,state:r}}function Ov(o){const t=new CA(o),i=[],r=[];function l(v){m.camera=v,i.length=0,r.length=0}function c(v){i.push(v)}function d(v){r.push(v)}function p(){t.setup(i)}function g(v){t.setupView(i,v)}const m={lightsArray:i,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:m,setupLights:p,setupLightsView:g,pushLight:c,pushShadow:d}}function DA(o){let t=new WeakMap;function i(l,c=0){const d=t.get(l);let p;return d===void 0?(p=new Ov(o),t.set(l,[p])):c>=d.length?(p=new Ov(o),d.push(p)):p=d[c],p}function r(){t=new WeakMap}return{get:i,dispose:r}}const UA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,LA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function NA(o,t,i){let r=new jd;const l=new Ee,c=new Ee,d=new yn,p=new Jx({depthPacking:lx}),g=new $x,m={},v=i.maxTextureSize,y={[Er]:fi,[fi]:Er,[Ia]:Ia},x=new Mr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ee},radius:{value:4}},vertexShader:UA,fragmentShader:LA}),M=x.clone();M.defines.HORIZONTAL_PASS=1;const A=new Ji;A.setAttribute("position",new da(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new Ki(A,x),E=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=qv;let S=this.type;this.render=function(I,k,K){if(E.enabled===!1||E.autoUpdate===!1&&E.needsUpdate===!1||I.length===0)return;const P=o.getRenderTarget(),N=o.getActiveCubeFace(),Y=o.getActiveMipmapLevel(),gt=o.state;gt.setBlending(Sr),gt.buffers.color.setClear(1,1,1,1),gt.buffers.depth.setTest(!0),gt.setScissorTest(!1);const ft=S!==za&&this.type===za,vt=S===za&&this.type!==za;for(let xt=0,V=I.length;xt<V;xt++){const ot=I[xt],$=ot.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",ot,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;l.copy($.mapSize);const Lt=$.getFrameExtents();if(l.multiply(Lt),c.copy($.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(c.x=Math.floor(v/Lt.x),l.x=c.x*Lt.x,$.mapSize.x=c.x),l.y>v&&(c.y=Math.floor(v/Lt.y),l.y=c.y*Lt.y,$.mapSize.y=c.y)),$.map===null||ft===!0||vt===!0){const rt=this.type!==za?{minFilter:Qi,magFilter:Qi}:{};$.map!==null&&$.map.dispose(),$.map=new es(l.x,l.y,rt),$.map.texture.name=ot.name+".shadowMap",$.camera.updateProjectionMatrix()}o.setRenderTarget($.map),o.clear();const F=$.getViewportCount();for(let rt=0;rt<F;rt++){const Tt=$.getViewport(rt);d.set(c.x*Tt.x,c.y*Tt.y,c.x*Tt.z,c.y*Tt.w),gt.viewport(d),$.updateMatrices(ot,rt),r=$.getFrustum(),O(k,K,$.camera,ot,this.type)}$.isPointLightShadow!==!0&&this.type===za&&G($,K),$.needsUpdate=!1}S=this.type,E.needsUpdate=!1,o.setRenderTarget(P,N,Y)};function G(I,k){const K=t.update(C);x.defines.VSM_SAMPLES!==I.blurSamples&&(x.defines.VSM_SAMPLES=I.blurSamples,M.defines.VSM_SAMPLES=I.blurSamples,x.needsUpdate=!0,M.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new es(l.x,l.y)),x.uniforms.shadow_pass.value=I.map.texture,x.uniforms.resolution.value=I.mapSize,x.uniforms.radius.value=I.radius,o.setRenderTarget(I.mapPass),o.clear(),o.renderBufferDirect(k,null,K,x,C,null),M.uniforms.shadow_pass.value=I.mapPass.texture,M.uniforms.resolution.value=I.mapSize,M.uniforms.radius.value=I.radius,o.setRenderTarget(I.map),o.clear(),o.renderBufferDirect(k,null,K,M,C,null)}function H(I,k,K,P){let N=null;const Y=K.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(Y!==void 0)N=Y;else if(N=K.isPointLight===!0?g:p,o.localClippingEnabled&&k.clipShadows===!0&&Array.isArray(k.clippingPlanes)&&k.clippingPlanes.length!==0||k.displacementMap&&k.displacementScale!==0||k.alphaMap&&k.alphaTest>0||k.map&&k.alphaTest>0||k.alphaToCoverage===!0){const gt=N.uuid,ft=k.uuid;let vt=m[gt];vt===void 0&&(vt={},m[gt]=vt);let xt=vt[ft];xt===void 0&&(xt=N.clone(),vt[ft]=xt,k.addEventListener("dispose",j)),N=xt}if(N.visible=k.visible,N.wireframe=k.wireframe,P===za?N.side=k.shadowSide!==null?k.shadowSide:k.side:N.side=k.shadowSide!==null?k.shadowSide:y[k.side],N.alphaMap=k.alphaMap,N.alphaTest=k.alphaToCoverage===!0?.5:k.alphaTest,N.map=k.map,N.clipShadows=k.clipShadows,N.clippingPlanes=k.clippingPlanes,N.clipIntersection=k.clipIntersection,N.displacementMap=k.displacementMap,N.displacementScale=k.displacementScale,N.displacementBias=k.displacementBias,N.wireframeLinewidth=k.wireframeLinewidth,N.linewidth=k.linewidth,K.isPointLight===!0&&N.isMeshDistanceMaterial===!0){const gt=o.properties.get(N);gt.light=K}return N}function O(I,k,K,P,N){if(I.visible===!1)return;if(I.layers.test(k.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&N===za)&&(!I.frustumCulled||r.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,I.matrixWorld);const ft=t.update(I),vt=I.material;if(Array.isArray(vt)){const xt=ft.groups;for(let V=0,ot=xt.length;V<ot;V++){const $=xt[V],Lt=vt[$.materialIndex];if(Lt&&Lt.visible){const F=H(I,Lt,P,N);I.onBeforeShadow(o,I,k,K,ft,F,$),o.renderBufferDirect(K,null,ft,F,I,$),I.onAfterShadow(o,I,k,K,ft,F,$)}}}else if(vt.visible){const xt=H(I,vt,P,N);I.onBeforeShadow(o,I,k,K,ft,xt,null),o.renderBufferDirect(K,null,ft,xt,I,null),I.onAfterShadow(o,I,k,K,ft,xt,null)}}const gt=I.children;for(let ft=0,vt=gt.length;ft<vt;ft++)O(gt[ft],k,K,P,N)}function j(I){I.target.removeEventListener("dispose",j);for(const K in m){const P=m[K],N=I.target.uuid;N in P&&(P[N].dispose(),delete P[N])}}}const OA={[Jh]:$h,[td]:id,[ed]:ad,[ao]:nd,[$h]:Jh,[id]:td,[ad]:ed,[nd]:ao};function PA(o,t){function i(){let Q=!1;const Ht=new yn;let _t=null;const At=new yn(0,0,0,0);return{setMask:function(qt){_t!==qt&&!Q&&(o.colorMask(qt,qt,qt,qt),_t=qt)},setLocked:function(qt){Q=qt},setClear:function(qt,Vt,ye,$e,pn){pn===!0&&(qt*=$e,Vt*=$e,ye*=$e),Ht.set(qt,Vt,ye,$e),At.equals(Ht)===!1&&(o.clearColor(qt,Vt,ye,$e),At.copy(Ht))},reset:function(){Q=!1,_t=null,At.set(-1,0,0,0)}}}function r(){let Q=!1,Ht=!1,_t=null,At=null,qt=null;return{setReversed:function(Vt){if(Ht!==Vt){const ye=t.get("EXT_clip_control");Vt?ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.ZERO_TO_ONE_EXT):ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.NEGATIVE_ONE_TO_ONE_EXT),Ht=Vt;const $e=qt;qt=null,this.setClear($e)}},getReversed:function(){return Ht},setTest:function(Vt){Vt?zt(o.DEPTH_TEST):Ot(o.DEPTH_TEST)},setMask:function(Vt){_t!==Vt&&!Q&&(o.depthMask(Vt),_t=Vt)},setFunc:function(Vt){if(Ht&&(Vt=OA[Vt]),At!==Vt){switch(Vt){case Jh:o.depthFunc(o.NEVER);break;case $h:o.depthFunc(o.ALWAYS);break;case td:o.depthFunc(o.LESS);break;case ao:o.depthFunc(o.LEQUAL);break;case ed:o.depthFunc(o.EQUAL);break;case nd:o.depthFunc(o.GEQUAL);break;case id:o.depthFunc(o.GREATER);break;case ad:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}At=Vt}},setLocked:function(Vt){Q=Vt},setClear:function(Vt){qt!==Vt&&(Ht&&(Vt=1-Vt),o.clearDepth(Vt),qt=Vt)},reset:function(){Q=!1,_t=null,At=null,qt=null,Ht=!1}}}function l(){let Q=!1,Ht=null,_t=null,At=null,qt=null,Vt=null,ye=null,$e=null,pn=null;return{setTest:function(Fe){Q||(Fe?zt(o.STENCIL_TEST):Ot(o.STENCIL_TEST))},setMask:function(Fe){Ht!==Fe&&!Q&&(o.stencilMask(Fe),Ht=Fe)},setFunc:function(Fe,ei,bn){(_t!==Fe||At!==ei||qt!==bn)&&(o.stencilFunc(Fe,ei,bn),_t=Fe,At=ei,qt=bn)},setOp:function(Fe,ei,bn){(Vt!==Fe||ye!==ei||$e!==bn)&&(o.stencilOp(Fe,ei,bn),Vt=Fe,ye=ei,$e=bn)},setLocked:function(Fe){Q=Fe},setClear:function(Fe){pn!==Fe&&(o.clearStencil(Fe),pn=Fe)},reset:function(){Q=!1,Ht=null,_t=null,At=null,qt=null,Vt=null,ye=null,$e=null,pn=null}}}const c=new i,d=new r,p=new l,g=new WeakMap,m=new WeakMap;let v={},y={},x=new WeakMap,M=[],A=null,C=!1,E=null,S=null,G=null,H=null,O=null,j=null,I=null,k=new Ie(0,0,0),K=0,P=!1,N=null,Y=null,gt=null,ft=null,vt=null;const xt=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,ot=0;const $=o.getParameter(o.VERSION);$.indexOf("WebGL")!==-1?(ot=parseFloat(/^WebGL (\d)/.exec($)[1]),V=ot>=1):$.indexOf("OpenGL ES")!==-1&&(ot=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),V=ot>=2);let Lt=null,F={};const rt=o.getParameter(o.SCISSOR_BOX),Tt=o.getParameter(o.VIEWPORT),Dt=new yn().fromArray(rt),at=new yn().fromArray(Tt);function Mt(Q,Ht,_t,At){const qt=new Uint8Array(4),Vt=o.createTexture();o.bindTexture(Q,Vt),o.texParameteri(Q,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(Q,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let ye=0;ye<_t;ye++)Q===o.TEXTURE_3D||Q===o.TEXTURE_2D_ARRAY?o.texImage3D(Ht,0,o.RGBA,1,1,At,0,o.RGBA,o.UNSIGNED_BYTE,qt):o.texImage2D(Ht+ye,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,qt);return Vt}const Ct={};Ct[o.TEXTURE_2D]=Mt(o.TEXTURE_2D,o.TEXTURE_2D,1),Ct[o.TEXTURE_CUBE_MAP]=Mt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ct[o.TEXTURE_2D_ARRAY]=Mt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),Ct[o.TEXTURE_3D]=Mt(o.TEXTURE_3D,o.TEXTURE_3D,1,1),c.setClear(0,0,0,1),d.setClear(1),p.setClear(0),zt(o.DEPTH_TEST),d.setFunc(ao),Ce(!1),me(w_),zt(o.CULL_FACE),W(Sr);function zt(Q){v[Q]!==!0&&(o.enable(Q),v[Q]=!0)}function Ot(Q){v[Q]!==!1&&(o.disable(Q),v[Q]=!1)}function fe(Q,Ht){return y[Q]!==Ht?(o.bindFramebuffer(Q,Ht),y[Q]=Ht,Q===o.DRAW_FRAMEBUFFER&&(y[o.FRAMEBUFFER]=Ht),Q===o.FRAMEBUFFER&&(y[o.DRAW_FRAMEBUFFER]=Ht),!0):!1}function te(Q,Ht){let _t=M,At=!1;if(Q){_t=x.get(Ht),_t===void 0&&(_t=[],x.set(Ht,_t));const qt=Q.textures;if(_t.length!==qt.length||_t[0]!==o.COLOR_ATTACHMENT0){for(let Vt=0,ye=qt.length;Vt<ye;Vt++)_t[Vt]=o.COLOR_ATTACHMENT0+Vt;_t.length=qt.length,At=!0}}else _t[0]!==o.BACK&&(_t[0]=o.BACK,At=!0);At&&o.drawBuffers(_t)}function We(Q){return A!==Q?(o.useProgram(Q),A=Q,!0):!1}const Ze={[Kr]:o.FUNC_ADD,[OS]:o.FUNC_SUBTRACT,[PS]:o.FUNC_REVERSE_SUBTRACT};Ze[BS]=o.MIN,Ze[FS]=o.MAX;const Me={[zS]:o.ZERO,[IS]:o.ONE,[HS]:o.SRC_COLOR,[Kh]:o.SRC_ALPHA,[qS]:o.SRC_ALPHA_SATURATE,[XS]:o.DST_COLOR,[VS]:o.DST_ALPHA,[GS]:o.ONE_MINUS_SRC_COLOR,[Qh]:o.ONE_MINUS_SRC_ALPHA,[WS]:o.ONE_MINUS_DST_COLOR,[kS]:o.ONE_MINUS_DST_ALPHA,[YS]:o.CONSTANT_COLOR,[jS]:o.ONE_MINUS_CONSTANT_COLOR,[ZS]:o.CONSTANT_ALPHA,[KS]:o.ONE_MINUS_CONSTANT_ALPHA};function W(Q,Ht,_t,At,qt,Vt,ye,$e,pn,Fe){if(Q===Sr){C===!0&&(Ot(o.BLEND),C=!1);return}if(C===!1&&(zt(o.BLEND),C=!0),Q!==NS){if(Q!==E||Fe!==P){if((S!==Kr||O!==Kr)&&(o.blendEquation(o.FUNC_ADD),S=Kr,O=Kr),Fe)switch(Q){case no:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case C_:o.blendFunc(o.ONE,o.ONE);break;case D_:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case U_:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",Q);break}else switch(Q){case no:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case C_:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case D_:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case U_:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",Q);break}G=null,H=null,j=null,I=null,k.set(0,0,0),K=0,E=Q,P=Fe}return}qt=qt||Ht,Vt=Vt||_t,ye=ye||At,(Ht!==S||qt!==O)&&(o.blendEquationSeparate(Ze[Ht],Ze[qt]),S=Ht,O=qt),(_t!==G||At!==H||Vt!==j||ye!==I)&&(o.blendFuncSeparate(Me[_t],Me[At],Me[Vt],Me[ye]),G=_t,H=At,j=Vt,I=ye),($e.equals(k)===!1||pn!==K)&&(o.blendColor($e.r,$e.g,$e.b,pn),k.copy($e),K=pn),E=Q,P=!1}function kn(Q,Ht){Q.side===Ia?Ot(o.CULL_FACE):zt(o.CULL_FACE);let _t=Q.side===fi;Ht&&(_t=!_t),Ce(_t),Q.blending===no&&Q.transparent===!1?W(Sr):W(Q.blending,Q.blendEquation,Q.blendSrc,Q.blendDst,Q.blendEquationAlpha,Q.blendSrcAlpha,Q.blendDstAlpha,Q.blendColor,Q.blendAlpha,Q.premultipliedAlpha),d.setFunc(Q.depthFunc),d.setTest(Q.depthTest),d.setMask(Q.depthWrite),c.setMask(Q.colorWrite);const At=Q.stencilWrite;p.setTest(At),At&&(p.setMask(Q.stencilWriteMask),p.setFunc(Q.stencilFunc,Q.stencilRef,Q.stencilFuncMask),p.setOp(Q.stencilFail,Q.stencilZFail,Q.stencilZPass)),Ye(Q.polygonOffset,Q.polygonOffsetFactor,Q.polygonOffsetUnits),Q.alphaToCoverage===!0?zt(o.SAMPLE_ALPHA_TO_COVERAGE):Ot(o.SAMPLE_ALPHA_TO_COVERAGE)}function Ce(Q){N!==Q&&(Q?o.frontFace(o.CW):o.frontFace(o.CCW),N=Q)}function me(Q){Q!==DS?(zt(o.CULL_FACE),Q!==Y&&(Q===w_?o.cullFace(o.BACK):Q===US?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Ot(o.CULL_FACE),Y=Q}function ie(Q){Q!==gt&&(V&&o.lineWidth(Q),gt=Q)}function Ye(Q,Ht,_t){Q?(zt(o.POLYGON_OFFSET_FILL),(ft!==Ht||vt!==_t)&&(o.polygonOffset(Ht,_t),ft=Ht,vt=_t)):Ot(o.POLYGON_OFFSET_FILL)}function $t(Q){Q?zt(o.SCISSOR_TEST):Ot(o.SCISSOR_TEST)}function z(Q){Q===void 0&&(Q=o.TEXTURE0+xt-1),Lt!==Q&&(o.activeTexture(Q),Lt=Q)}function D(Q,Ht,_t){_t===void 0&&(Lt===null?_t=o.TEXTURE0+xt-1:_t=Lt);let At=F[_t];At===void 0&&(At={type:void 0,texture:void 0},F[_t]=At),(At.type!==Q||At.texture!==Ht)&&(Lt!==_t&&(o.activeTexture(_t),Lt=_t),o.bindTexture(Q,Ht||Ct[Q]),At.type=Q,At.texture=Ht)}function lt(){const Q=F[Lt];Q!==void 0&&Q.type!==void 0&&(o.bindTexture(Q.type,null),Q.type=void 0,Q.texture=void 0)}function Et(){try{o.compressedTexImage2D(...arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}}function Ut(){try{o.compressedTexImage3D(...arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}}function yt(){try{o.texSubImage2D(...arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}}function Wt(){try{o.texSubImage3D(...arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}}function Bt(){try{o.compressedTexSubImage2D(...arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}}function Zt(){try{o.compressedTexSubImage3D(...arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}}function Jt(){try{o.texStorage2D(...arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}}function Pt(){try{o.texStorage3D(...arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}}function jt(){try{o.texImage2D(...arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}}function Qt(){try{o.texImage3D(...arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}}function ue(Q){Dt.equals(Q)===!1&&(o.scissor(Q.x,Q.y,Q.z,Q.w),Dt.copy(Q))}function kt(Q){at.equals(Q)===!1&&(o.viewport(Q.x,Q.y,Q.z,Q.w),at.copy(Q))}function ge(Q,Ht){let _t=m.get(Ht);_t===void 0&&(_t=new WeakMap,m.set(Ht,_t));let At=_t.get(Q);At===void 0&&(At=o.getUniformBlockIndex(Ht,Q.name),_t.set(Q,At))}function _e(Q,Ht){const At=m.get(Ht).get(Q);g.get(Ht)!==At&&(o.uniformBlockBinding(Ht,At,Q.__bindingPointIndex),g.set(Ht,At))}function je(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),d.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),v={},Lt=null,F={},y={},x=new WeakMap,M=[],A=null,C=!1,E=null,S=null,G=null,H=null,O=null,j=null,I=null,k=new Ie(0,0,0),K=0,P=!1,N=null,Y=null,gt=null,ft=null,vt=null,Dt.set(0,0,o.canvas.width,o.canvas.height),at.set(0,0,o.canvas.width,o.canvas.height),c.reset(),d.reset(),p.reset()}return{buffers:{color:c,depth:d,stencil:p},enable:zt,disable:Ot,bindFramebuffer:fe,drawBuffers:te,useProgram:We,setBlending:W,setMaterial:kn,setFlipSided:Ce,setCullFace:me,setLineWidth:ie,setPolygonOffset:Ye,setScissorTest:$t,activeTexture:z,bindTexture:D,unbindTexture:lt,compressedTexImage2D:Et,compressedTexImage3D:Ut,texImage2D:jt,texImage3D:Qt,updateUBOMapping:ge,uniformBlockBinding:_e,texStorage2D:Jt,texStorage3D:Pt,texSubImage2D:yt,texSubImage3D:Wt,compressedTexSubImage2D:Bt,compressedTexSubImage3D:Zt,scissor:ue,viewport:kt,reset:je}}function BA(o,t,i,r,l,c,d){const p=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,g=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new Ee,v=new WeakMap;let y;const x=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(z,D){return M?new OffscreenCanvas(z,D):ou("canvas")}function C(z,D,lt){let Et=1;const Ut=$t(z);if((Ut.width>lt||Ut.height>lt)&&(Et=lt/Math.max(Ut.width,Ut.height)),Et<1)if(typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&z instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&z instanceof ImageBitmap||typeof VideoFrame<"u"&&z instanceof VideoFrame){const yt=Math.floor(Et*Ut.width),Wt=Math.floor(Et*Ut.height);y===void 0&&(y=A(yt,Wt));const Bt=D?A(yt,Wt):y;return Bt.width=yt,Bt.height=Wt,Bt.getContext("2d").drawImage(z,0,0,yt,Wt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Ut.width+"x"+Ut.height+") to ("+yt+"x"+Wt+")."),Bt}else return"data"in z&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Ut.width+"x"+Ut.height+")."),z;return z}function E(z){return z.generateMipmaps}function S(z){o.generateMipmap(z)}function G(z){return z.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:z.isWebGL3DRenderTarget?o.TEXTURE_3D:z.isWebGLArrayRenderTarget||z.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function H(z,D,lt,Et,Ut=!1){if(z!==null){if(o[z]!==void 0)return o[z];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+z+"'")}let yt=D;if(D===o.RED&&(lt===o.FLOAT&&(yt=o.R32F),lt===o.HALF_FLOAT&&(yt=o.R16F),lt===o.UNSIGNED_BYTE&&(yt=o.R8)),D===o.RED_INTEGER&&(lt===o.UNSIGNED_BYTE&&(yt=o.R8UI),lt===o.UNSIGNED_SHORT&&(yt=o.R16UI),lt===o.UNSIGNED_INT&&(yt=o.R32UI),lt===o.BYTE&&(yt=o.R8I),lt===o.SHORT&&(yt=o.R16I),lt===o.INT&&(yt=o.R32I)),D===o.RG&&(lt===o.FLOAT&&(yt=o.RG32F),lt===o.HALF_FLOAT&&(yt=o.RG16F),lt===o.UNSIGNED_BYTE&&(yt=o.RG8)),D===o.RG_INTEGER&&(lt===o.UNSIGNED_BYTE&&(yt=o.RG8UI),lt===o.UNSIGNED_SHORT&&(yt=o.RG16UI),lt===o.UNSIGNED_INT&&(yt=o.RG32UI),lt===o.BYTE&&(yt=o.RG8I),lt===o.SHORT&&(yt=o.RG16I),lt===o.INT&&(yt=o.RG32I)),D===o.RGB_INTEGER&&(lt===o.UNSIGNED_BYTE&&(yt=o.RGB8UI),lt===o.UNSIGNED_SHORT&&(yt=o.RGB16UI),lt===o.UNSIGNED_INT&&(yt=o.RGB32UI),lt===o.BYTE&&(yt=o.RGB8I),lt===o.SHORT&&(yt=o.RGB16I),lt===o.INT&&(yt=o.RGB32I)),D===o.RGBA_INTEGER&&(lt===o.UNSIGNED_BYTE&&(yt=o.RGBA8UI),lt===o.UNSIGNED_SHORT&&(yt=o.RGBA16UI),lt===o.UNSIGNED_INT&&(yt=o.RGBA32UI),lt===o.BYTE&&(yt=o.RGBA8I),lt===o.SHORT&&(yt=o.RGBA16I),lt===o.INT&&(yt=o.RGBA32I)),D===o.RGB&&lt===o.UNSIGNED_INT_5_9_9_9_REV&&(yt=o.RGB9_E5),D===o.RGBA){const Wt=Ut?ru:Xe.getTransfer(Et);lt===o.FLOAT&&(yt=o.RGBA32F),lt===o.HALF_FLOAT&&(yt=o.RGBA16F),lt===o.UNSIGNED_BYTE&&(yt=Wt===an?o.SRGB8_ALPHA8:o.RGBA8),lt===o.UNSIGNED_SHORT_4_4_4_4&&(yt=o.RGBA4),lt===o.UNSIGNED_SHORT_5_5_5_1&&(yt=o.RGB5_A1)}return(yt===o.R16F||yt===o.R32F||yt===o.RG16F||yt===o.RG32F||yt===o.RGBA16F||yt===o.RGBA32F)&&t.get("EXT_color_buffer_float"),yt}function O(z,D){let lt;return z?D===null||D===ts||D===dl?lt=o.DEPTH24_STENCIL8:D===Ha?lt=o.DEPTH32F_STENCIL8:D===hl&&(lt=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):D===null||D===ts||D===dl?lt=o.DEPTH_COMPONENT24:D===Ha?lt=o.DEPTH_COMPONENT32F:D===hl&&(lt=o.DEPTH_COMPONENT16),lt}function j(z,D){return E(z)===!0||z.isFramebufferTexture&&z.minFilter!==Qi&&z.minFilter!==ha?Math.log2(Math.max(D.width,D.height))+1:z.mipmaps!==void 0&&z.mipmaps.length>0?z.mipmaps.length:z.isCompressedTexture&&Array.isArray(z.image)?D.mipmaps.length:1}function I(z){const D=z.target;D.removeEventListener("dispose",I),K(D),D.isVideoTexture&&v.delete(D)}function k(z){const D=z.target;D.removeEventListener("dispose",k),N(D)}function K(z){const D=r.get(z);if(D.__webglInit===void 0)return;const lt=z.source,Et=x.get(lt);if(Et){const Ut=Et[D.__cacheKey];Ut.usedTimes--,Ut.usedTimes===0&&P(z),Object.keys(Et).length===0&&x.delete(lt)}r.remove(z)}function P(z){const D=r.get(z);o.deleteTexture(D.__webglTexture);const lt=z.source,Et=x.get(lt);delete Et[D.__cacheKey],d.memory.textures--}function N(z){const D=r.get(z);if(z.depthTexture&&(z.depthTexture.dispose(),r.remove(z.depthTexture)),z.isWebGLCubeRenderTarget)for(let Et=0;Et<6;Et++){if(Array.isArray(D.__webglFramebuffer[Et]))for(let Ut=0;Ut<D.__webglFramebuffer[Et].length;Ut++)o.deleteFramebuffer(D.__webglFramebuffer[Et][Ut]);else o.deleteFramebuffer(D.__webglFramebuffer[Et]);D.__webglDepthbuffer&&o.deleteRenderbuffer(D.__webglDepthbuffer[Et])}else{if(Array.isArray(D.__webglFramebuffer))for(let Et=0;Et<D.__webglFramebuffer.length;Et++)o.deleteFramebuffer(D.__webglFramebuffer[Et]);else o.deleteFramebuffer(D.__webglFramebuffer);if(D.__webglDepthbuffer&&o.deleteRenderbuffer(D.__webglDepthbuffer),D.__webglMultisampledFramebuffer&&o.deleteFramebuffer(D.__webglMultisampledFramebuffer),D.__webglColorRenderbuffer)for(let Et=0;Et<D.__webglColorRenderbuffer.length;Et++)D.__webglColorRenderbuffer[Et]&&o.deleteRenderbuffer(D.__webglColorRenderbuffer[Et]);D.__webglDepthRenderbuffer&&o.deleteRenderbuffer(D.__webglDepthRenderbuffer)}const lt=z.textures;for(let Et=0,Ut=lt.length;Et<Ut;Et++){const yt=r.get(lt[Et]);yt.__webglTexture&&(o.deleteTexture(yt.__webglTexture),d.memory.textures--),r.remove(lt[Et])}r.remove(z)}let Y=0;function gt(){Y=0}function ft(){const z=Y;return z>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+z+" texture units while this GPU supports only "+l.maxTextures),Y+=1,z}function vt(z){const D=[];return D.push(z.wrapS),D.push(z.wrapT),D.push(z.wrapR||0),D.push(z.magFilter),D.push(z.minFilter),D.push(z.anisotropy),D.push(z.internalFormat),D.push(z.format),D.push(z.type),D.push(z.generateMipmaps),D.push(z.premultiplyAlpha),D.push(z.flipY),D.push(z.unpackAlignment),D.push(z.colorSpace),D.join()}function xt(z,D){const lt=r.get(z);if(z.isVideoTexture&&ie(z),z.isRenderTargetTexture===!1&&z.version>0&&lt.__version!==z.version){const Et=z.image;if(Et===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Et.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{at(lt,z,D);return}}i.bindTexture(o.TEXTURE_2D,lt.__webglTexture,o.TEXTURE0+D)}function V(z,D){const lt=r.get(z);if(z.version>0&&lt.__version!==z.version){at(lt,z,D);return}i.bindTexture(o.TEXTURE_2D_ARRAY,lt.__webglTexture,o.TEXTURE0+D)}function ot(z,D){const lt=r.get(z);if(z.version>0&&lt.__version!==z.version){at(lt,z,D);return}i.bindTexture(o.TEXTURE_3D,lt.__webglTexture,o.TEXTURE0+D)}function $(z,D){const lt=r.get(z);if(z.version>0&&lt.__version!==z.version){Mt(lt,z,D);return}i.bindTexture(o.TEXTURE_CUBE_MAP,lt.__webglTexture,o.TEXTURE0+D)}const Lt={[od]:o.REPEAT,[Jr]:o.CLAMP_TO_EDGE,[ld]:o.MIRRORED_REPEAT},F={[Qi]:o.NEAREST,[sx]:o.NEAREST_MIPMAP_NEAREST,[Mc]:o.NEAREST_MIPMAP_LINEAR,[ha]:o.LINEAR,[mh]:o.LINEAR_MIPMAP_NEAREST,[$r]:o.LINEAR_MIPMAP_LINEAR},rt={[ux]:o.NEVER,[gx]:o.ALWAYS,[fx]:o.LESS,[i0]:o.LEQUAL,[hx]:o.EQUAL,[mx]:o.GEQUAL,[dx]:o.GREATER,[px]:o.NOTEQUAL};function Tt(z,D){if(D.type===Ha&&t.has("OES_texture_float_linear")===!1&&(D.magFilter===ha||D.magFilter===mh||D.magFilter===Mc||D.magFilter===$r||D.minFilter===ha||D.minFilter===mh||D.minFilter===Mc||D.minFilter===$r)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(z,o.TEXTURE_WRAP_S,Lt[D.wrapS]),o.texParameteri(z,o.TEXTURE_WRAP_T,Lt[D.wrapT]),(z===o.TEXTURE_3D||z===o.TEXTURE_2D_ARRAY)&&o.texParameteri(z,o.TEXTURE_WRAP_R,Lt[D.wrapR]),o.texParameteri(z,o.TEXTURE_MAG_FILTER,F[D.magFilter]),o.texParameteri(z,o.TEXTURE_MIN_FILTER,F[D.minFilter]),D.compareFunction&&(o.texParameteri(z,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(z,o.TEXTURE_COMPARE_FUNC,rt[D.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(D.magFilter===Qi||D.minFilter!==Mc&&D.minFilter!==$r||D.type===Ha&&t.has("OES_texture_float_linear")===!1)return;if(D.anisotropy>1||r.get(D).__currentAnisotropy){const lt=t.get("EXT_texture_filter_anisotropic");o.texParameterf(z,lt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(D.anisotropy,l.getMaxAnisotropy())),r.get(D).__currentAnisotropy=D.anisotropy}}}function Dt(z,D){let lt=!1;z.__webglInit===void 0&&(z.__webglInit=!0,D.addEventListener("dispose",I));const Et=D.source;let Ut=x.get(Et);Ut===void 0&&(Ut={},x.set(Et,Ut));const yt=vt(D);if(yt!==z.__cacheKey){Ut[yt]===void 0&&(Ut[yt]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,lt=!0),Ut[yt].usedTimes++;const Wt=Ut[z.__cacheKey];Wt!==void 0&&(Ut[z.__cacheKey].usedTimes--,Wt.usedTimes===0&&P(D)),z.__cacheKey=yt,z.__webglTexture=Ut[yt].texture}return lt}function at(z,D,lt){let Et=o.TEXTURE_2D;(D.isDataArrayTexture||D.isCompressedArrayTexture)&&(Et=o.TEXTURE_2D_ARRAY),D.isData3DTexture&&(Et=o.TEXTURE_3D);const Ut=Dt(z,D),yt=D.source;i.bindTexture(Et,z.__webglTexture,o.TEXTURE0+lt);const Wt=r.get(yt);if(yt.version!==Wt.__version||Ut===!0){i.activeTexture(o.TEXTURE0+lt);const Bt=Xe.getPrimaries(Xe.workingColorSpace),Zt=D.colorSpace===yr?null:Xe.getPrimaries(D.colorSpace),Jt=D.colorSpace===yr||Bt===Zt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,D.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,D.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Jt);let Pt=C(D.image,!1,l.maxTextureSize);Pt=Ye(D,Pt);const jt=c.convert(D.format,D.colorSpace),Qt=c.convert(D.type);let ue=H(D.internalFormat,jt,Qt,D.colorSpace,D.isVideoTexture);Tt(Et,D);let kt;const ge=D.mipmaps,_e=D.isVideoTexture!==!0,je=Wt.__version===void 0||Ut===!0,Q=yt.dataReady,Ht=j(D,Pt);if(D.isDepthTexture)ue=O(D.format===ml,D.type),je&&(_e?i.texStorage2D(o.TEXTURE_2D,1,ue,Pt.width,Pt.height):i.texImage2D(o.TEXTURE_2D,0,ue,Pt.width,Pt.height,0,jt,Qt,null));else if(D.isDataTexture)if(ge.length>0){_e&&je&&i.texStorage2D(o.TEXTURE_2D,Ht,ue,ge[0].width,ge[0].height);for(let _t=0,At=ge.length;_t<At;_t++)kt=ge[_t],_e?Q&&i.texSubImage2D(o.TEXTURE_2D,_t,0,0,kt.width,kt.height,jt,Qt,kt.data):i.texImage2D(o.TEXTURE_2D,_t,ue,kt.width,kt.height,0,jt,Qt,kt.data);D.generateMipmaps=!1}else _e?(je&&i.texStorage2D(o.TEXTURE_2D,Ht,ue,Pt.width,Pt.height),Q&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Pt.width,Pt.height,jt,Qt,Pt.data)):i.texImage2D(o.TEXTURE_2D,0,ue,Pt.width,Pt.height,0,jt,Qt,Pt.data);else if(D.isCompressedTexture)if(D.isCompressedArrayTexture){_e&&je&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Ht,ue,ge[0].width,ge[0].height,Pt.depth);for(let _t=0,At=ge.length;_t<At;_t++)if(kt=ge[_t],D.format!==Zi)if(jt!==null)if(_e){if(Q)if(D.layerUpdates.size>0){const qt=uv(kt.width,kt.height,D.format,D.type);for(const Vt of D.layerUpdates){const ye=kt.data.subarray(Vt*qt/kt.data.BYTES_PER_ELEMENT,(Vt+1)*qt/kt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,_t,0,0,Vt,kt.width,kt.height,1,jt,ye)}D.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,_t,0,0,0,kt.width,kt.height,Pt.depth,jt,kt.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,_t,ue,kt.width,kt.height,Pt.depth,0,kt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else _e?Q&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,_t,0,0,0,kt.width,kt.height,Pt.depth,jt,Qt,kt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,_t,ue,kt.width,kt.height,Pt.depth,0,jt,Qt,kt.data)}else{_e&&je&&i.texStorage2D(o.TEXTURE_2D,Ht,ue,ge[0].width,ge[0].height);for(let _t=0,At=ge.length;_t<At;_t++)kt=ge[_t],D.format!==Zi?jt!==null?_e?Q&&i.compressedTexSubImage2D(o.TEXTURE_2D,_t,0,0,kt.width,kt.height,jt,kt.data):i.compressedTexImage2D(o.TEXTURE_2D,_t,ue,kt.width,kt.height,0,kt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):_e?Q&&i.texSubImage2D(o.TEXTURE_2D,_t,0,0,kt.width,kt.height,jt,Qt,kt.data):i.texImage2D(o.TEXTURE_2D,_t,ue,kt.width,kt.height,0,jt,Qt,kt.data)}else if(D.isDataArrayTexture)if(_e){if(je&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Ht,ue,Pt.width,Pt.height,Pt.depth),Q)if(D.layerUpdates.size>0){const _t=uv(Pt.width,Pt.height,D.format,D.type);for(const At of D.layerUpdates){const qt=Pt.data.subarray(At*_t/Pt.data.BYTES_PER_ELEMENT,(At+1)*_t/Pt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,At,Pt.width,Pt.height,1,jt,Qt,qt)}D.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Pt.width,Pt.height,Pt.depth,jt,Qt,Pt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,ue,Pt.width,Pt.height,Pt.depth,0,jt,Qt,Pt.data);else if(D.isData3DTexture)_e?(je&&i.texStorage3D(o.TEXTURE_3D,Ht,ue,Pt.width,Pt.height,Pt.depth),Q&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Pt.width,Pt.height,Pt.depth,jt,Qt,Pt.data)):i.texImage3D(o.TEXTURE_3D,0,ue,Pt.width,Pt.height,Pt.depth,0,jt,Qt,Pt.data);else if(D.isFramebufferTexture){if(je)if(_e)i.texStorage2D(o.TEXTURE_2D,Ht,ue,Pt.width,Pt.height);else{let _t=Pt.width,At=Pt.height;for(let qt=0;qt<Ht;qt++)i.texImage2D(o.TEXTURE_2D,qt,ue,_t,At,0,jt,Qt,null),_t>>=1,At>>=1}}else if(ge.length>0){if(_e&&je){const _t=$t(ge[0]);i.texStorage2D(o.TEXTURE_2D,Ht,ue,_t.width,_t.height)}for(let _t=0,At=ge.length;_t<At;_t++)kt=ge[_t],_e?Q&&i.texSubImage2D(o.TEXTURE_2D,_t,0,0,jt,Qt,kt):i.texImage2D(o.TEXTURE_2D,_t,ue,jt,Qt,kt);D.generateMipmaps=!1}else if(_e){if(je){const _t=$t(Pt);i.texStorage2D(o.TEXTURE_2D,Ht,ue,_t.width,_t.height)}Q&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,jt,Qt,Pt)}else i.texImage2D(o.TEXTURE_2D,0,ue,jt,Qt,Pt);E(D)&&S(Et),Wt.__version=yt.version,D.onUpdate&&D.onUpdate(D)}z.__version=D.version}function Mt(z,D,lt){if(D.image.length!==6)return;const Et=Dt(z,D),Ut=D.source;i.bindTexture(o.TEXTURE_CUBE_MAP,z.__webglTexture,o.TEXTURE0+lt);const yt=r.get(Ut);if(Ut.version!==yt.__version||Et===!0){i.activeTexture(o.TEXTURE0+lt);const Wt=Xe.getPrimaries(Xe.workingColorSpace),Bt=D.colorSpace===yr?null:Xe.getPrimaries(D.colorSpace),Zt=D.colorSpace===yr||Wt===Bt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,D.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,D.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Zt);const Jt=D.isCompressedTexture||D.image[0].isCompressedTexture,Pt=D.image[0]&&D.image[0].isDataTexture,jt=[];for(let At=0;At<6;At++)!Jt&&!Pt?jt[At]=C(D.image[At],!0,l.maxCubemapSize):jt[At]=Pt?D.image[At].image:D.image[At],jt[At]=Ye(D,jt[At]);const Qt=jt[0],ue=c.convert(D.format,D.colorSpace),kt=c.convert(D.type),ge=H(D.internalFormat,ue,kt,D.colorSpace),_e=D.isVideoTexture!==!0,je=yt.__version===void 0||Et===!0,Q=Ut.dataReady;let Ht=j(D,Qt);Tt(o.TEXTURE_CUBE_MAP,D);let _t;if(Jt){_e&&je&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Ht,ge,Qt.width,Qt.height);for(let At=0;At<6;At++){_t=jt[At].mipmaps;for(let qt=0;qt<_t.length;qt++){const Vt=_t[qt];D.format!==Zi?ue!==null?_e?Q&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+At,qt,0,0,Vt.width,Vt.height,ue,Vt.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+At,qt,ge,Vt.width,Vt.height,0,Vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):_e?Q&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+At,qt,0,0,Vt.width,Vt.height,ue,kt,Vt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+At,qt,ge,Vt.width,Vt.height,0,ue,kt,Vt.data)}}}else{if(_t=D.mipmaps,_e&&je){_t.length>0&&Ht++;const At=$t(jt[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Ht,ge,At.width,At.height)}for(let At=0;At<6;At++)if(Pt){_e?Q&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+At,0,0,0,jt[At].width,jt[At].height,ue,kt,jt[At].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+At,0,ge,jt[At].width,jt[At].height,0,ue,kt,jt[At].data);for(let qt=0;qt<_t.length;qt++){const ye=_t[qt].image[At].image;_e?Q&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+At,qt+1,0,0,ye.width,ye.height,ue,kt,ye.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+At,qt+1,ge,ye.width,ye.height,0,ue,kt,ye.data)}}else{_e?Q&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+At,0,0,0,ue,kt,jt[At]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+At,0,ge,ue,kt,jt[At]);for(let qt=0;qt<_t.length;qt++){const Vt=_t[qt];_e?Q&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+At,qt+1,0,0,ue,kt,Vt.image[At]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+At,qt+1,ge,ue,kt,Vt.image[At])}}}E(D)&&S(o.TEXTURE_CUBE_MAP),yt.__version=Ut.version,D.onUpdate&&D.onUpdate(D)}z.__version=D.version}function Ct(z,D,lt,Et,Ut,yt){const Wt=c.convert(lt.format,lt.colorSpace),Bt=c.convert(lt.type),Zt=H(lt.internalFormat,Wt,Bt,lt.colorSpace),Jt=r.get(D),Pt=r.get(lt);if(Pt.__renderTarget=D,!Jt.__hasExternalTextures){const jt=Math.max(1,D.width>>yt),Qt=Math.max(1,D.height>>yt);Ut===o.TEXTURE_3D||Ut===o.TEXTURE_2D_ARRAY?i.texImage3D(Ut,yt,Zt,jt,Qt,D.depth,0,Wt,Bt,null):i.texImage2D(Ut,yt,Zt,jt,Qt,0,Wt,Bt,null)}i.bindFramebuffer(o.FRAMEBUFFER,z),me(D)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Et,Ut,Pt.__webglTexture,0,Ce(D)):(Ut===o.TEXTURE_2D||Ut>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&Ut<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,Et,Ut,Pt.__webglTexture,yt),i.bindFramebuffer(o.FRAMEBUFFER,null)}function zt(z,D,lt){if(o.bindRenderbuffer(o.RENDERBUFFER,z),D.depthBuffer){const Et=D.depthTexture,Ut=Et&&Et.isDepthTexture?Et.type:null,yt=O(D.stencilBuffer,Ut),Wt=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Bt=Ce(D);me(D)?p.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Bt,yt,D.width,D.height):lt?o.renderbufferStorageMultisample(o.RENDERBUFFER,Bt,yt,D.width,D.height):o.renderbufferStorage(o.RENDERBUFFER,yt,D.width,D.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Wt,o.RENDERBUFFER,z)}else{const Et=D.textures;for(let Ut=0;Ut<Et.length;Ut++){const yt=Et[Ut],Wt=c.convert(yt.format,yt.colorSpace),Bt=c.convert(yt.type),Zt=H(yt.internalFormat,Wt,Bt,yt.colorSpace),Jt=Ce(D);lt&&me(D)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Jt,Zt,D.width,D.height):me(D)?p.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Jt,Zt,D.width,D.height):o.renderbufferStorage(o.RENDERBUFFER,Zt,D.width,D.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Ot(z,D){if(D&&D.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,z),!(D.depthTexture&&D.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Et=r.get(D.depthTexture);Et.__renderTarget=D,(!Et.__webglTexture||D.depthTexture.image.width!==D.width||D.depthTexture.image.height!==D.height)&&(D.depthTexture.image.width=D.width,D.depthTexture.image.height=D.height,D.depthTexture.needsUpdate=!0),xt(D.depthTexture,0);const Ut=Et.__webglTexture,yt=Ce(D);if(D.depthTexture.format===pl)me(D)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Ut,0,yt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Ut,0);else if(D.depthTexture.format===ml)me(D)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Ut,0,yt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Ut,0);else throw new Error("Unknown depthTexture format")}function fe(z){const D=r.get(z),lt=z.isWebGLCubeRenderTarget===!0;if(D.__boundDepthTexture!==z.depthTexture){const Et=z.depthTexture;if(D.__depthDisposeCallback&&D.__depthDisposeCallback(),Et){const Ut=()=>{delete D.__boundDepthTexture,delete D.__depthDisposeCallback,Et.removeEventListener("dispose",Ut)};Et.addEventListener("dispose",Ut),D.__depthDisposeCallback=Ut}D.__boundDepthTexture=Et}if(z.depthTexture&&!D.__autoAllocateDepthBuffer){if(lt)throw new Error("target.depthTexture not supported in Cube render targets");const Et=z.texture.mipmaps;Et&&Et.length>0?Ot(D.__webglFramebuffer[0],z):Ot(D.__webglFramebuffer,z)}else if(lt){D.__webglDepthbuffer=[];for(let Et=0;Et<6;Et++)if(i.bindFramebuffer(o.FRAMEBUFFER,D.__webglFramebuffer[Et]),D.__webglDepthbuffer[Et]===void 0)D.__webglDepthbuffer[Et]=o.createRenderbuffer(),zt(D.__webglDepthbuffer[Et],z,!1);else{const Ut=z.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,yt=D.__webglDepthbuffer[Et];o.bindRenderbuffer(o.RENDERBUFFER,yt),o.framebufferRenderbuffer(o.FRAMEBUFFER,Ut,o.RENDERBUFFER,yt)}}else{const Et=z.texture.mipmaps;if(Et&&Et.length>0?i.bindFramebuffer(o.FRAMEBUFFER,D.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,D.__webglFramebuffer),D.__webglDepthbuffer===void 0)D.__webglDepthbuffer=o.createRenderbuffer(),zt(D.__webglDepthbuffer,z,!1);else{const Ut=z.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,yt=D.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,yt),o.framebufferRenderbuffer(o.FRAMEBUFFER,Ut,o.RENDERBUFFER,yt)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function te(z,D,lt){const Et=r.get(z);D!==void 0&&Ct(Et.__webglFramebuffer,z,z.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),lt!==void 0&&fe(z)}function We(z){const D=z.texture,lt=r.get(z),Et=r.get(D);z.addEventListener("dispose",k);const Ut=z.textures,yt=z.isWebGLCubeRenderTarget===!0,Wt=Ut.length>1;if(Wt||(Et.__webglTexture===void 0&&(Et.__webglTexture=o.createTexture()),Et.__version=D.version,d.memory.textures++),yt){lt.__webglFramebuffer=[];for(let Bt=0;Bt<6;Bt++)if(D.mipmaps&&D.mipmaps.length>0){lt.__webglFramebuffer[Bt]=[];for(let Zt=0;Zt<D.mipmaps.length;Zt++)lt.__webglFramebuffer[Bt][Zt]=o.createFramebuffer()}else lt.__webglFramebuffer[Bt]=o.createFramebuffer()}else{if(D.mipmaps&&D.mipmaps.length>0){lt.__webglFramebuffer=[];for(let Bt=0;Bt<D.mipmaps.length;Bt++)lt.__webglFramebuffer[Bt]=o.createFramebuffer()}else lt.__webglFramebuffer=o.createFramebuffer();if(Wt)for(let Bt=0,Zt=Ut.length;Bt<Zt;Bt++){const Jt=r.get(Ut[Bt]);Jt.__webglTexture===void 0&&(Jt.__webglTexture=o.createTexture(),d.memory.textures++)}if(z.samples>0&&me(z)===!1){lt.__webglMultisampledFramebuffer=o.createFramebuffer(),lt.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,lt.__webglMultisampledFramebuffer);for(let Bt=0;Bt<Ut.length;Bt++){const Zt=Ut[Bt];lt.__webglColorRenderbuffer[Bt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,lt.__webglColorRenderbuffer[Bt]);const Jt=c.convert(Zt.format,Zt.colorSpace),Pt=c.convert(Zt.type),jt=H(Zt.internalFormat,Jt,Pt,Zt.colorSpace,z.isXRRenderTarget===!0),Qt=Ce(z);o.renderbufferStorageMultisample(o.RENDERBUFFER,Qt,jt,z.width,z.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Bt,o.RENDERBUFFER,lt.__webglColorRenderbuffer[Bt])}o.bindRenderbuffer(o.RENDERBUFFER,null),z.depthBuffer&&(lt.__webglDepthRenderbuffer=o.createRenderbuffer(),zt(lt.__webglDepthRenderbuffer,z,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(yt){i.bindTexture(o.TEXTURE_CUBE_MAP,Et.__webglTexture),Tt(o.TEXTURE_CUBE_MAP,D);for(let Bt=0;Bt<6;Bt++)if(D.mipmaps&&D.mipmaps.length>0)for(let Zt=0;Zt<D.mipmaps.length;Zt++)Ct(lt.__webglFramebuffer[Bt][Zt],z,D,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Bt,Zt);else Ct(lt.__webglFramebuffer[Bt],z,D,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Bt,0);E(D)&&S(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Wt){for(let Bt=0,Zt=Ut.length;Bt<Zt;Bt++){const Jt=Ut[Bt],Pt=r.get(Jt);i.bindTexture(o.TEXTURE_2D,Pt.__webglTexture),Tt(o.TEXTURE_2D,Jt),Ct(lt.__webglFramebuffer,z,Jt,o.COLOR_ATTACHMENT0+Bt,o.TEXTURE_2D,0),E(Jt)&&S(o.TEXTURE_2D)}i.unbindTexture()}else{let Bt=o.TEXTURE_2D;if((z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(Bt=z.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Bt,Et.__webglTexture),Tt(Bt,D),D.mipmaps&&D.mipmaps.length>0)for(let Zt=0;Zt<D.mipmaps.length;Zt++)Ct(lt.__webglFramebuffer[Zt],z,D,o.COLOR_ATTACHMENT0,Bt,Zt);else Ct(lt.__webglFramebuffer,z,D,o.COLOR_ATTACHMENT0,Bt,0);E(D)&&S(Bt),i.unbindTexture()}z.depthBuffer&&fe(z)}function Ze(z){const D=z.textures;for(let lt=0,Et=D.length;lt<Et;lt++){const Ut=D[lt];if(E(Ut)){const yt=G(z),Wt=r.get(Ut).__webglTexture;i.bindTexture(yt,Wt),S(yt),i.unbindTexture()}}}const Me=[],W=[];function kn(z){if(z.samples>0){if(me(z)===!1){const D=z.textures,lt=z.width,Et=z.height;let Ut=o.COLOR_BUFFER_BIT;const yt=z.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Wt=r.get(z),Bt=D.length>1;if(Bt)for(let Jt=0;Jt<D.length;Jt++)i.bindFramebuffer(o.FRAMEBUFFER,Wt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Jt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Wt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Jt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Wt.__webglMultisampledFramebuffer);const Zt=z.texture.mipmaps;Zt&&Zt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Wt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Wt.__webglFramebuffer);for(let Jt=0;Jt<D.length;Jt++){if(z.resolveDepthBuffer&&(z.depthBuffer&&(Ut|=o.DEPTH_BUFFER_BIT),z.stencilBuffer&&z.resolveStencilBuffer&&(Ut|=o.STENCIL_BUFFER_BIT)),Bt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Wt.__webglColorRenderbuffer[Jt]);const Pt=r.get(D[Jt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Pt,0)}o.blitFramebuffer(0,0,lt,Et,0,0,lt,Et,Ut,o.NEAREST),g===!0&&(Me.length=0,W.length=0,Me.push(o.COLOR_ATTACHMENT0+Jt),z.depthBuffer&&z.resolveDepthBuffer===!1&&(Me.push(yt),W.push(yt),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,W)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Me))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Bt)for(let Jt=0;Jt<D.length;Jt++){i.bindFramebuffer(o.FRAMEBUFFER,Wt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Jt,o.RENDERBUFFER,Wt.__webglColorRenderbuffer[Jt]);const Pt=r.get(D[Jt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Wt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Jt,o.TEXTURE_2D,Pt,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Wt.__webglMultisampledFramebuffer)}else if(z.depthBuffer&&z.resolveDepthBuffer===!1&&g){const D=z.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[D])}}}function Ce(z){return Math.min(l.maxSamples,z.samples)}function me(z){const D=r.get(z);return z.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&D.__useRenderToTexture!==!1}function ie(z){const D=d.render.frame;v.get(z)!==D&&(v.set(z,D),z.update())}function Ye(z,D){const lt=z.colorSpace,Et=z.format,Ut=z.type;return z.isCompressedTexture===!0||z.isVideoTexture===!0||lt!==oo&&lt!==yr&&(Xe.getTransfer(lt)===an?(Et!==Zi||Ut!==pa)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",lt)),D}function $t(z){return typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement?(m.width=z.naturalWidth||z.width,m.height=z.naturalHeight||z.height):typeof VideoFrame<"u"&&z instanceof VideoFrame?(m.width=z.displayWidth,m.height=z.displayHeight):(m.width=z.width,m.height=z.height),m}this.allocateTextureUnit=ft,this.resetTextureUnits=gt,this.setTexture2D=xt,this.setTexture2DArray=V,this.setTexture3D=ot,this.setTextureCube=$,this.rebindTextures=te,this.setupRenderTarget=We,this.updateRenderTargetMipmap=Ze,this.updateMultisampleRenderTarget=kn,this.setupDepthRenderbuffer=fe,this.setupFrameBufferTexture=Ct,this.useMultisampledRTT=me}function FA(o,t){function i(r,l=yr){let c;const d=Xe.getTransfer(l);if(r===pa)return o.UNSIGNED_BYTE;if(r===Vd)return o.UNSIGNED_SHORT_4_4_4_4;if(r===kd)return o.UNSIGNED_SHORT_5_5_5_1;if(r===Kv)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===jv)return o.BYTE;if(r===Zv)return o.SHORT;if(r===hl)return o.UNSIGNED_SHORT;if(r===Gd)return o.INT;if(r===ts)return o.UNSIGNED_INT;if(r===Ha)return o.FLOAT;if(r===gl)return o.HALF_FLOAT;if(r===Qv)return o.ALPHA;if(r===Jv)return o.RGB;if(r===Zi)return o.RGBA;if(r===pl)return o.DEPTH_COMPONENT;if(r===ml)return o.DEPTH_STENCIL;if(r===$v)return o.RED;if(r===Xd)return o.RED_INTEGER;if(r===t0)return o.RG;if(r===Wd)return o.RG_INTEGER;if(r===qd)return o.RGBA_INTEGER;if(r===Kc||r===Qc||r===Jc||r===$c)if(d===an)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Kc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Qc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Jc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===$c)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Kc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Qc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Jc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===$c)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===cd||r===ud||r===fd||r===hd)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===cd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===ud)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===fd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===hd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===dd||r===pd||r===md)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(r===dd||r===pd)return d===an?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===md)return d===an?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===gd||r===_d||r===vd||r===yd||r===Sd||r===xd||r===Ed||r===Md||r===bd||r===Td||r===Ad||r===Rd||r===wd||r===Cd)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(r===gd)return d===an?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===_d)return d===an?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===vd)return d===an?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===yd)return d===an?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Sd)return d===an?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===xd)return d===an?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Ed)return d===an?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Md)return d===an?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===bd)return d===an?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Td)return d===an?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Ad)return d===an?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Rd)return d===an?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===wd)return d===an?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Cd)return d===an?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===tu||r===Dd||r===Ud)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(r===tu)return d===an?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Dd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Ud)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===e0||r===Ld||r===Nd||r===Od)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(r===tu)return c.COMPRESSED_RED_RGTC1_EXT;if(r===Ld)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Nd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Od)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===dl?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}const zA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,IA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class HA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i,r){if(this.texture===null){const l=new hi,c=t.properties.get(l);c.__webglTexture=i.texture,(i.depthNear!==r.depthNear||i.depthFar!==r.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,r=new Mr({vertexShader:zA,fragmentShader:IA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ki(new hu(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class GA extends is{constructor(t,i){super();const r=this;let l=null,c=1,d=null,p="local-floor",g=1,m=null,v=null,y=null,x=null,M=null,A=null;const C=new HA,E=i.getContextAttributes();let S=null,G=null;const H=[],O=[],j=new Ee;let I=null;const k=new Bi;k.viewport=new yn;const K=new Bi;K.viewport=new yn;const P=[k,K],N=new oE;let Y=null,gt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(at){let Mt=H[at];return Mt===void 0&&(Mt=new Bh,H[at]=Mt),Mt.getTargetRaySpace()},this.getControllerGrip=function(at){let Mt=H[at];return Mt===void 0&&(Mt=new Bh,H[at]=Mt),Mt.getGripSpace()},this.getHand=function(at){let Mt=H[at];return Mt===void 0&&(Mt=new Bh,H[at]=Mt),Mt.getHandSpace()};function ft(at){const Mt=O.indexOf(at.inputSource);if(Mt===-1)return;const Ct=H[Mt];Ct!==void 0&&(Ct.update(at.inputSource,at.frame,m||d),Ct.dispatchEvent({type:at.type,data:at.inputSource}))}function vt(){l.removeEventListener("select",ft),l.removeEventListener("selectstart",ft),l.removeEventListener("selectend",ft),l.removeEventListener("squeeze",ft),l.removeEventListener("squeezestart",ft),l.removeEventListener("squeezeend",ft),l.removeEventListener("end",vt),l.removeEventListener("inputsourceschange",xt);for(let at=0;at<H.length;at++){const Mt=O[at];Mt!==null&&(O[at]=null,H[at].disconnect(Mt))}Y=null,gt=null,C.reset(),t.setRenderTarget(S),M=null,x=null,y=null,l=null,G=null,Dt.stop(),r.isPresenting=!1,t.setPixelRatio(I),t.setSize(j.width,j.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(at){c=at,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(at){p=at,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||d},this.setReferenceSpace=function(at){m=at},this.getBaseLayer=function(){return x!==null?x:M},this.getBinding=function(){return y},this.getFrame=function(){return A},this.getSession=function(){return l},this.setSession=async function(at){if(l=at,l!==null){if(S=t.getRenderTarget(),l.addEventListener("select",ft),l.addEventListener("selectstart",ft),l.addEventListener("selectend",ft),l.addEventListener("squeeze",ft),l.addEventListener("squeezestart",ft),l.addEventListener("squeezeend",ft),l.addEventListener("end",vt),l.addEventListener("inputsourceschange",xt),E.xrCompatible!==!0&&await i.makeXRCompatible(),I=t.getPixelRatio(),t.getSize(j),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ct=null,zt=null,Ot=null;E.depth&&(Ot=E.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Ct=E.stencil?ml:pl,zt=E.stencil?dl:ts);const fe={colorFormat:i.RGBA8,depthFormat:Ot,scaleFactor:c};y=new XRWebGLBinding(l,i),x=y.createProjectionLayer(fe),l.updateRenderState({layers:[x]}),t.setPixelRatio(1),t.setSize(x.textureWidth,x.textureHeight,!1),G=new es(x.textureWidth,x.textureHeight,{format:Zi,type:pa,depthTexture:new p0(x.textureWidth,x.textureHeight,zt,void 0,void 0,void 0,void 0,void 0,void 0,Ct),stencilBuffer:E.stencil,colorSpace:t.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const Ct={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(l,i,Ct),l.updateRenderState({baseLayer:M}),t.setPixelRatio(1),t.setSize(M.framebufferWidth,M.framebufferHeight,!1),G=new es(M.framebufferWidth,M.framebufferHeight,{format:Zi,type:pa,colorSpace:t.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}G.isXRRenderTarget=!0,this.setFoveation(g),m=null,d=await l.requestReferenceSpace(p),Dt.setContext(l),Dt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return C.getDepthTexture()};function xt(at){for(let Mt=0;Mt<at.removed.length;Mt++){const Ct=at.removed[Mt],zt=O.indexOf(Ct);zt>=0&&(O[zt]=null,H[zt].disconnect(Ct))}for(let Mt=0;Mt<at.added.length;Mt++){const Ct=at.added[Mt];let zt=O.indexOf(Ct);if(zt===-1){for(let fe=0;fe<H.length;fe++)if(fe>=O.length){O.push(Ct),zt=fe;break}else if(O[fe]===null){O[fe]=Ct,zt=fe;break}if(zt===-1)break}const Ot=H[zt];Ot&&Ot.connect(Ct)}}const V=new st,ot=new st;function $(at,Mt,Ct){V.setFromMatrixPosition(Mt.matrixWorld),ot.setFromMatrixPosition(Ct.matrixWorld);const zt=V.distanceTo(ot),Ot=Mt.projectionMatrix.elements,fe=Ct.projectionMatrix.elements,te=Ot[14]/(Ot[10]-1),We=Ot[14]/(Ot[10]+1),Ze=(Ot[9]+1)/Ot[5],Me=(Ot[9]-1)/Ot[5],W=(Ot[8]-1)/Ot[0],kn=(fe[8]+1)/fe[0],Ce=te*W,me=te*kn,ie=zt/(-W+kn),Ye=ie*-W;if(Mt.matrixWorld.decompose(at.position,at.quaternion,at.scale),at.translateX(Ye),at.translateZ(ie),at.matrixWorld.compose(at.position,at.quaternion,at.scale),at.matrixWorldInverse.copy(at.matrixWorld).invert(),Ot[10]===-1)at.projectionMatrix.copy(Mt.projectionMatrix),at.projectionMatrixInverse.copy(Mt.projectionMatrixInverse);else{const $t=te+ie,z=We+ie,D=Ce-Ye,lt=me+(zt-Ye),Et=Ze*We/z*$t,Ut=Me*We/z*$t;at.projectionMatrix.makePerspective(D,lt,Et,Ut,$t,z),at.projectionMatrixInverse.copy(at.projectionMatrix).invert()}}function Lt(at,Mt){Mt===null?at.matrixWorld.copy(at.matrix):at.matrixWorld.multiplyMatrices(Mt.matrixWorld,at.matrix),at.matrixWorldInverse.copy(at.matrixWorld).invert()}this.updateCamera=function(at){if(l===null)return;let Mt=at.near,Ct=at.far;C.texture!==null&&(C.depthNear>0&&(Mt=C.depthNear),C.depthFar>0&&(Ct=C.depthFar)),N.near=K.near=k.near=Mt,N.far=K.far=k.far=Ct,(Y!==N.near||gt!==N.far)&&(l.updateRenderState({depthNear:N.near,depthFar:N.far}),Y=N.near,gt=N.far),k.layers.mask=at.layers.mask|2,K.layers.mask=at.layers.mask|4,N.layers.mask=k.layers.mask|K.layers.mask;const zt=at.parent,Ot=N.cameras;Lt(N,zt);for(let fe=0;fe<Ot.length;fe++)Lt(Ot[fe],zt);Ot.length===2?$(N,k,K):N.projectionMatrix.copy(k.projectionMatrix),F(at,N,zt)};function F(at,Mt,Ct){Ct===null?at.matrix.copy(Mt.matrixWorld):(at.matrix.copy(Ct.matrixWorld),at.matrix.invert(),at.matrix.multiply(Mt.matrixWorld)),at.matrix.decompose(at.position,at.quaternion,at.scale),at.updateMatrixWorld(!0),at.projectionMatrix.copy(Mt.projectionMatrix),at.projectionMatrixInverse.copy(Mt.projectionMatrixInverse),at.isPerspectiveCamera&&(at.fov=Pd*2*Math.atan(1/at.projectionMatrix.elements[5]),at.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(x===null&&M===null))return g},this.setFoveation=function(at){g=at,x!==null&&(x.fixedFoveation=at),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=at)},this.hasDepthSensing=function(){return C.texture!==null},this.getDepthSensingMesh=function(){return C.getMesh(N)};let rt=null;function Tt(at,Mt){if(v=Mt.getViewerPose(m||d),A=Mt,v!==null){const Ct=v.views;M!==null&&(t.setRenderTargetFramebuffer(G,M.framebuffer),t.setRenderTarget(G));let zt=!1;Ct.length!==N.cameras.length&&(N.cameras.length=0,zt=!0);for(let te=0;te<Ct.length;te++){const We=Ct[te];let Ze=null;if(M!==null)Ze=M.getViewport(We);else{const W=y.getViewSubImage(x,We);Ze=W.viewport,te===0&&(t.setRenderTargetTextures(G,W.colorTexture,W.depthStencilTexture),t.setRenderTarget(G))}let Me=P[te];Me===void 0&&(Me=new Bi,Me.layers.enable(te),Me.viewport=new yn,P[te]=Me),Me.matrix.fromArray(We.transform.matrix),Me.matrix.decompose(Me.position,Me.quaternion,Me.scale),Me.projectionMatrix.fromArray(We.projectionMatrix),Me.projectionMatrixInverse.copy(Me.projectionMatrix).invert(),Me.viewport.set(Ze.x,Ze.y,Ze.width,Ze.height),te===0&&(N.matrix.copy(Me.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),zt===!0&&N.cameras.push(Me)}const Ot=l.enabledFeatures;if(Ot&&Ot.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&y){const te=y.getDepthInformation(Ct[0]);te&&te.isValid&&te.texture&&C.init(t,te,l.renderState)}}for(let Ct=0;Ct<H.length;Ct++){const zt=O[Ct],Ot=H[Ct];zt!==null&&Ot!==void 0&&Ot.update(zt,Mt,m||d)}rt&&rt(at,Mt),Mt.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:Mt}),A=null}const Dt=new g0;Dt.setAnimationLoop(Tt),this.setAnimationLoop=function(at){rt=at},this.dispose=function(){}}}const Yr=new ma,VA=new hn;function kA(o,t){function i(E,S){E.matrixAutoUpdate===!0&&E.updateMatrix(),S.value.copy(E.matrix)}function r(E,S){S.color.getRGB(E.fogColor.value,f0(o)),S.isFog?(E.fogNear.value=S.near,E.fogFar.value=S.far):S.isFogExp2&&(E.fogDensity.value=S.density)}function l(E,S,G,H,O){S.isMeshBasicMaterial||S.isMeshLambertMaterial?c(E,S):S.isMeshToonMaterial?(c(E,S),y(E,S)):S.isMeshPhongMaterial?(c(E,S),v(E,S)):S.isMeshStandardMaterial?(c(E,S),x(E,S),S.isMeshPhysicalMaterial&&M(E,S,O)):S.isMeshMatcapMaterial?(c(E,S),A(E,S)):S.isMeshDepthMaterial?c(E,S):S.isMeshDistanceMaterial?(c(E,S),C(E,S)):S.isMeshNormalMaterial?c(E,S):S.isLineBasicMaterial?(d(E,S),S.isLineDashedMaterial&&p(E,S)):S.isPointsMaterial?g(E,S,G,H):S.isSpriteMaterial?m(E,S):S.isShadowMaterial?(E.color.value.copy(S.color),E.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function c(E,S){E.opacity.value=S.opacity,S.color&&E.diffuse.value.copy(S.color),S.emissive&&E.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(E.map.value=S.map,i(S.map,E.mapTransform)),S.alphaMap&&(E.alphaMap.value=S.alphaMap,i(S.alphaMap,E.alphaMapTransform)),S.bumpMap&&(E.bumpMap.value=S.bumpMap,i(S.bumpMap,E.bumpMapTransform),E.bumpScale.value=S.bumpScale,S.side===fi&&(E.bumpScale.value*=-1)),S.normalMap&&(E.normalMap.value=S.normalMap,i(S.normalMap,E.normalMapTransform),E.normalScale.value.copy(S.normalScale),S.side===fi&&E.normalScale.value.negate()),S.displacementMap&&(E.displacementMap.value=S.displacementMap,i(S.displacementMap,E.displacementMapTransform),E.displacementScale.value=S.displacementScale,E.displacementBias.value=S.displacementBias),S.emissiveMap&&(E.emissiveMap.value=S.emissiveMap,i(S.emissiveMap,E.emissiveMapTransform)),S.specularMap&&(E.specularMap.value=S.specularMap,i(S.specularMap,E.specularMapTransform)),S.alphaTest>0&&(E.alphaTest.value=S.alphaTest);const G=t.get(S),H=G.envMap,O=G.envMapRotation;H&&(E.envMap.value=H,Yr.copy(O),Yr.x*=-1,Yr.y*=-1,Yr.z*=-1,H.isCubeTexture&&H.isRenderTargetTexture===!1&&(Yr.y*=-1,Yr.z*=-1),E.envMapRotation.value.setFromMatrix4(VA.makeRotationFromEuler(Yr)),E.flipEnvMap.value=H.isCubeTexture&&H.isRenderTargetTexture===!1?-1:1,E.reflectivity.value=S.reflectivity,E.ior.value=S.ior,E.refractionRatio.value=S.refractionRatio),S.lightMap&&(E.lightMap.value=S.lightMap,E.lightMapIntensity.value=S.lightMapIntensity,i(S.lightMap,E.lightMapTransform)),S.aoMap&&(E.aoMap.value=S.aoMap,E.aoMapIntensity.value=S.aoMapIntensity,i(S.aoMap,E.aoMapTransform))}function d(E,S){E.diffuse.value.copy(S.color),E.opacity.value=S.opacity,S.map&&(E.map.value=S.map,i(S.map,E.mapTransform))}function p(E,S){E.dashSize.value=S.dashSize,E.totalSize.value=S.dashSize+S.gapSize,E.scale.value=S.scale}function g(E,S,G,H){E.diffuse.value.copy(S.color),E.opacity.value=S.opacity,E.size.value=S.size*G,E.scale.value=H*.5,S.map&&(E.map.value=S.map,i(S.map,E.uvTransform)),S.alphaMap&&(E.alphaMap.value=S.alphaMap,i(S.alphaMap,E.alphaMapTransform)),S.alphaTest>0&&(E.alphaTest.value=S.alphaTest)}function m(E,S){E.diffuse.value.copy(S.color),E.opacity.value=S.opacity,E.rotation.value=S.rotation,S.map&&(E.map.value=S.map,i(S.map,E.mapTransform)),S.alphaMap&&(E.alphaMap.value=S.alphaMap,i(S.alphaMap,E.alphaMapTransform)),S.alphaTest>0&&(E.alphaTest.value=S.alphaTest)}function v(E,S){E.specular.value.copy(S.specular),E.shininess.value=Math.max(S.shininess,1e-4)}function y(E,S){S.gradientMap&&(E.gradientMap.value=S.gradientMap)}function x(E,S){E.metalness.value=S.metalness,S.metalnessMap&&(E.metalnessMap.value=S.metalnessMap,i(S.metalnessMap,E.metalnessMapTransform)),E.roughness.value=S.roughness,S.roughnessMap&&(E.roughnessMap.value=S.roughnessMap,i(S.roughnessMap,E.roughnessMapTransform)),S.envMap&&(E.envMapIntensity.value=S.envMapIntensity)}function M(E,S,G){E.ior.value=S.ior,S.sheen>0&&(E.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),E.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(E.sheenColorMap.value=S.sheenColorMap,i(S.sheenColorMap,E.sheenColorMapTransform)),S.sheenRoughnessMap&&(E.sheenRoughnessMap.value=S.sheenRoughnessMap,i(S.sheenRoughnessMap,E.sheenRoughnessMapTransform))),S.clearcoat>0&&(E.clearcoat.value=S.clearcoat,E.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(E.clearcoatMap.value=S.clearcoatMap,i(S.clearcoatMap,E.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(E.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,i(S.clearcoatRoughnessMap,E.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(E.clearcoatNormalMap.value=S.clearcoatNormalMap,i(S.clearcoatNormalMap,E.clearcoatNormalMapTransform),E.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===fi&&E.clearcoatNormalScale.value.negate())),S.dispersion>0&&(E.dispersion.value=S.dispersion),S.iridescence>0&&(E.iridescence.value=S.iridescence,E.iridescenceIOR.value=S.iridescenceIOR,E.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],E.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(E.iridescenceMap.value=S.iridescenceMap,i(S.iridescenceMap,E.iridescenceMapTransform)),S.iridescenceThicknessMap&&(E.iridescenceThicknessMap.value=S.iridescenceThicknessMap,i(S.iridescenceThicknessMap,E.iridescenceThicknessMapTransform))),S.transmission>0&&(E.transmission.value=S.transmission,E.transmissionSamplerMap.value=G.texture,E.transmissionSamplerSize.value.set(G.width,G.height),S.transmissionMap&&(E.transmissionMap.value=S.transmissionMap,i(S.transmissionMap,E.transmissionMapTransform)),E.thickness.value=S.thickness,S.thicknessMap&&(E.thicknessMap.value=S.thicknessMap,i(S.thicknessMap,E.thicknessMapTransform)),E.attenuationDistance.value=S.attenuationDistance,E.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(E.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(E.anisotropyMap.value=S.anisotropyMap,i(S.anisotropyMap,E.anisotropyMapTransform))),E.specularIntensity.value=S.specularIntensity,E.specularColor.value.copy(S.specularColor),S.specularColorMap&&(E.specularColorMap.value=S.specularColorMap,i(S.specularColorMap,E.specularColorMapTransform)),S.specularIntensityMap&&(E.specularIntensityMap.value=S.specularIntensityMap,i(S.specularIntensityMap,E.specularIntensityMapTransform))}function A(E,S){S.matcap&&(E.matcap.value=S.matcap)}function C(E,S){const G=t.get(S).light;E.referencePosition.value.setFromMatrixPosition(G.matrixWorld),E.nearDistance.value=G.shadow.camera.near,E.farDistance.value=G.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function XA(o,t,i,r){let l={},c={},d=[];const p=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function g(G,H){const O=H.program;r.uniformBlockBinding(G,O)}function m(G,H){let O=l[G.id];O===void 0&&(A(G),O=v(G),l[G.id]=O,G.addEventListener("dispose",E));const j=H.program;r.updateUBOMapping(G,j);const I=t.render.frame;c[G.id]!==I&&(x(G),c[G.id]=I)}function v(G){const H=y();G.__bindingPointIndex=H;const O=o.createBuffer(),j=G.__size,I=G.usage;return o.bindBuffer(o.UNIFORM_BUFFER,O),o.bufferData(o.UNIFORM_BUFFER,j,I),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,H,O),O}function y(){for(let G=0;G<p;G++)if(d.indexOf(G)===-1)return d.push(G),G;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(G){const H=l[G.id],O=G.uniforms,j=G.__cache;o.bindBuffer(o.UNIFORM_BUFFER,H);for(let I=0,k=O.length;I<k;I++){const K=Array.isArray(O[I])?O[I]:[O[I]];for(let P=0,N=K.length;P<N;P++){const Y=K[P];if(M(Y,I,P,j)===!0){const gt=Y.__offset,ft=Array.isArray(Y.value)?Y.value:[Y.value];let vt=0;for(let xt=0;xt<ft.length;xt++){const V=ft[xt],ot=C(V);typeof V=="number"||typeof V=="boolean"?(Y.__data[0]=V,o.bufferSubData(o.UNIFORM_BUFFER,gt+vt,Y.__data)):V.isMatrix3?(Y.__data[0]=V.elements[0],Y.__data[1]=V.elements[1],Y.__data[2]=V.elements[2],Y.__data[3]=0,Y.__data[4]=V.elements[3],Y.__data[5]=V.elements[4],Y.__data[6]=V.elements[5],Y.__data[7]=0,Y.__data[8]=V.elements[6],Y.__data[9]=V.elements[7],Y.__data[10]=V.elements[8],Y.__data[11]=0):(V.toArray(Y.__data,vt),vt+=ot.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,gt,Y.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function M(G,H,O,j){const I=G.value,k=H+"_"+O;if(j[k]===void 0)return typeof I=="number"||typeof I=="boolean"?j[k]=I:j[k]=I.clone(),!0;{const K=j[k];if(typeof I=="number"||typeof I=="boolean"){if(K!==I)return j[k]=I,!0}else if(K.equals(I)===!1)return K.copy(I),!0}return!1}function A(G){const H=G.uniforms;let O=0;const j=16;for(let k=0,K=H.length;k<K;k++){const P=Array.isArray(H[k])?H[k]:[H[k]];for(let N=0,Y=P.length;N<Y;N++){const gt=P[N],ft=Array.isArray(gt.value)?gt.value:[gt.value];for(let vt=0,xt=ft.length;vt<xt;vt++){const V=ft[vt],ot=C(V),$=O%j,Lt=$%ot.boundary,F=$+Lt;O+=Lt,F!==0&&j-F<ot.storage&&(O+=j-F),gt.__data=new Float32Array(ot.storage/Float32Array.BYTES_PER_ELEMENT),gt.__offset=O,O+=ot.storage}}}const I=O%j;return I>0&&(O+=j-I),G.__size=O,G.__cache={},this}function C(G){const H={boundary:0,storage:0};return typeof G=="number"||typeof G=="boolean"?(H.boundary=4,H.storage=4):G.isVector2?(H.boundary=8,H.storage=8):G.isVector3||G.isColor?(H.boundary=16,H.storage=12):G.isVector4?(H.boundary=16,H.storage=16):G.isMatrix3?(H.boundary=48,H.storage=48):G.isMatrix4?(H.boundary=64,H.storage=64):G.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",G),H}function E(G){const H=G.target;H.removeEventListener("dispose",E);const O=d.indexOf(H.__bindingPointIndex);d.splice(O,1),o.deleteBuffer(l[H.id]),delete l[H.id],delete c[H.id]}function S(){for(const G in l)o.deleteBuffer(l[G]);d=[],l={},c={}}return{bind:g,update:m,dispose:S}}class WA{constructor(t={}){const{canvas:i=yx(),context:r=null,depth:l=!0,stencil:c=!1,alpha:d=!1,antialias:p=!1,premultipliedAlpha:g=!0,preserveDrawingBuffer:m=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:y=!1,reverseDepthBuffer:x=!1}=t;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=d;const A=new Uint32Array(4),C=new Int32Array(4);let E=null,S=null;const G=[],H=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=xr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const O=this;let j=!1;this._outputColorSpace=Ti;let I=0,k=0,K=null,P=-1,N=null;const Y=new yn,gt=new yn;let ft=null;const vt=new Ie(0);let xt=0,V=i.width,ot=i.height,$=1,Lt=null,F=null;const rt=new yn(0,0,V,ot),Tt=new yn(0,0,V,ot);let Dt=!1;const at=new jd;let Mt=!1,Ct=!1;const zt=new hn,Ot=new hn,fe=new st,te=new yn,We={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ze=!1;function Me(){return K===null?$:1}let W=r;function kn(L,tt){return i.getContext(L,tt)}try{const L={alpha:!0,depth:l,stencil:c,antialias:p,premultipliedAlpha:g,preserveDrawingBuffer:m,powerPreference:v,failIfMajorPerformanceCaveat:y};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Id}`),i.addEventListener("webglcontextlost",At,!1),i.addEventListener("webglcontextrestored",qt,!1),i.addEventListener("webglcontextcreationerror",Vt,!1),W===null){const tt="webgl2";if(W=kn(tt,L),W===null)throw kn(tt)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}let Ce,me,ie,Ye,$t,z,D,lt,Et,Ut,yt,Wt,Bt,Zt,Jt,Pt,jt,Qt,ue,kt,ge,_e,je,Q;function Ht(){Ce=new eT(W),Ce.init(),_e=new FA(W,Ce),me=new jb(W,Ce,t,_e),ie=new PA(W,Ce),me.reverseDepthBuffer&&x&&ie.buffers.depth.setReversed(!0),Ye=new aT(W),$t=new EA,z=new BA(W,Ce,ie,$t,me,_e,Ye),D=new Kb(O),lt=new tT(O),Et=new uE(W),je=new qb(W,Et),Ut=new nT(W,Et,Ye,je),yt=new sT(W,Ut,Et,Ye),ue=new rT(W,me,z),Pt=new Zb($t),Wt=new xA(O,D,lt,Ce,me,je,Pt),Bt=new kA(O,$t),Zt=new bA,Jt=new DA(Ce),Qt=new Wb(O,D,lt,ie,yt,M,g),jt=new NA(O,yt,me),Q=new XA(W,Ye,me,ie),kt=new Yb(W,Ce,Ye),ge=new iT(W,Ce,Ye),Ye.programs=Wt.programs,O.capabilities=me,O.extensions=Ce,O.properties=$t,O.renderLists=Zt,O.shadowMap=jt,O.state=ie,O.info=Ye}Ht();const _t=new GA(O,W);this.xr=_t,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const L=Ce.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=Ce.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(L){L!==void 0&&($=L,this.setSize(V,ot,!1))},this.getSize=function(L){return L.set(V,ot)},this.setSize=function(L,tt,pt=!0){if(_t.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=L,ot=tt,i.width=Math.floor(L*$),i.height=Math.floor(tt*$),pt===!0&&(i.style.width=L+"px",i.style.height=tt+"px"),this.setViewport(0,0,L,tt)},this.getDrawingBufferSize=function(L){return L.set(V*$,ot*$).floor()},this.setDrawingBufferSize=function(L,tt,pt){V=L,ot=tt,$=pt,i.width=Math.floor(L*pt),i.height=Math.floor(tt*pt),this.setViewport(0,0,L,tt)},this.getCurrentViewport=function(L){return L.copy(Y)},this.getViewport=function(L){return L.copy(rt)},this.setViewport=function(L,tt,pt,mt){L.isVector4?rt.set(L.x,L.y,L.z,L.w):rt.set(L,tt,pt,mt),ie.viewport(Y.copy(rt).multiplyScalar($).round())},this.getScissor=function(L){return L.copy(Tt)},this.setScissor=function(L,tt,pt,mt){L.isVector4?Tt.set(L.x,L.y,L.z,L.w):Tt.set(L,tt,pt,mt),ie.scissor(gt.copy(Tt).multiplyScalar($).round())},this.getScissorTest=function(){return Dt},this.setScissorTest=function(L){ie.setScissorTest(Dt=L)},this.setOpaqueSort=function(L){Lt=L},this.setTransparentSort=function(L){F=L},this.getClearColor=function(L){return L.copy(Qt.getClearColor())},this.setClearColor=function(){Qt.setClearColor(...arguments)},this.getClearAlpha=function(){return Qt.getClearAlpha()},this.setClearAlpha=function(){Qt.setClearAlpha(...arguments)},this.clear=function(L=!0,tt=!0,pt=!0){let mt=0;if(L){let nt=!1;if(K!==null){const Nt=K.texture.format;nt=Nt===qd||Nt===Wd||Nt===Xd}if(nt){const Nt=K.texture.type,It=Nt===pa||Nt===ts||Nt===hl||Nt===dl||Nt===Vd||Nt===kd,Gt=Qt.getClearColor(),Yt=Qt.getClearAlpha(),de=Gt.r,re=Gt.g,ee=Gt.b;It?(A[0]=de,A[1]=re,A[2]=ee,A[3]=Yt,W.clearBufferuiv(W.COLOR,0,A)):(C[0]=de,C[1]=re,C[2]=ee,C[3]=Yt,W.clearBufferiv(W.COLOR,0,C))}else mt|=W.COLOR_BUFFER_BIT}tt&&(mt|=W.DEPTH_BUFFER_BIT),pt&&(mt|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W.clear(mt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",At,!1),i.removeEventListener("webglcontextrestored",qt,!1),i.removeEventListener("webglcontextcreationerror",Vt,!1),Qt.dispose(),Zt.dispose(),Jt.dispose(),$t.dispose(),D.dispose(),lt.dispose(),yt.dispose(),je.dispose(),Q.dispose(),Wt.dispose(),_t.dispose(),_t.removeEventListener("sessionstart",Sn),_t.removeEventListener("sessionend",Dn),Yn.stop()};function At(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),j=!0}function qt(){console.log("THREE.WebGLRenderer: Context Restored."),j=!1;const L=Ye.autoReset,tt=jt.enabled,pt=jt.autoUpdate,mt=jt.needsUpdate,nt=jt.type;Ht(),Ye.autoReset=L,jt.enabled=tt,jt.autoUpdate=pt,jt.needsUpdate=mt,jt.type=nt}function Vt(L){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function ye(L){const tt=L.target;tt.removeEventListener("dispose",ye),$e(tt)}function $e(L){pn(L),$t.remove(L)}function pn(L){const tt=$t.get(L).programs;tt!==void 0&&(tt.forEach(function(pt){Wt.releaseProgram(pt)}),L.isShaderMaterial&&Wt.releaseShaderCache(L))}this.renderBufferDirect=function(L,tt,pt,mt,nt,Nt){tt===null&&(tt=We);const It=nt.isMesh&&nt.matrixWorld.determinant()<0,Gt=_a(L,tt,pt,mt,nt);ie.setMaterial(mt,It);let Yt=pt.index,de=1;if(mt.wireframe===!0){if(Yt=Ut.getWireframeAttribute(pt),Yt===void 0)return;de=2}const re=pt.drawRange,ee=pt.attributes.position;let Ae=re.start*de,He=(re.start+re.count)*de;Nt!==null&&(Ae=Math.max(Ae,Nt.start*de),He=Math.min(He,(Nt.start+Nt.count)*de)),Yt!==null?(Ae=Math.max(Ae,0),He=Math.min(He,Yt.count)):ee!=null&&(Ae=Math.max(Ae,0),He=Math.min(He,ee.count));const ln=He-Ae;if(ln<0||ln===1/0)return;je.setup(nt,mt,Gt,pt,Yt);let De,Ue=kt;if(Yt!==null&&(De=Et.get(Yt),Ue=ge,Ue.setIndex(De)),nt.isMesh)mt.wireframe===!0?(ie.setLineWidth(mt.wireframeLinewidth*Me()),Ue.setMode(W.LINES)):Ue.setMode(W.TRIANGLES);else if(nt.isLine){let se=mt.linewidth;se===void 0&&(se=1),ie.setLineWidth(se*Me()),nt.isLineSegments?Ue.setMode(W.LINES):nt.isLineLoop?Ue.setMode(W.LINE_LOOP):Ue.setMode(W.LINE_STRIP)}else nt.isPoints?Ue.setMode(W.POINTS):nt.isSprite&&Ue.setMode(W.TRIANGLES);if(nt.isBatchedMesh)if(nt._multiDrawInstances!==null)nu("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ue.renderMultiDrawInstances(nt._multiDrawStarts,nt._multiDrawCounts,nt._multiDrawCount,nt._multiDrawInstances);else if(Ce.get("WEBGL_multi_draw"))Ue.renderMultiDraw(nt._multiDrawStarts,nt._multiDrawCounts,nt._multiDrawCount);else{const se=nt._multiDrawStarts,un=nt._multiDrawCounts,ze=nt._multiDrawCount,Fn=Yt?Et.get(Yt).bytesPerElement:1,na=$t.get(mt).currentProgram.getUniforms();for(let Ke=0;Ke<ze;Ke++)na.setValue(W,"_gl_DrawID",Ke),Ue.render(se[Ke]/Fn,un[Ke])}else if(nt.isInstancedMesh)Ue.renderInstances(Ae,ln,nt.count);else if(pt.isInstancedBufferGeometry){const se=pt._maxInstanceCount!==void 0?pt._maxInstanceCount:1/0,un=Math.min(pt.instanceCount,se);Ue.renderInstances(Ae,ln,un)}else Ue.render(Ae,ln)};function Fe(L,tt,pt){L.transparent===!0&&L.side===Ia&&L.forceSinglePass===!1?(L.side=fi,L.needsUpdate=!0,ta(L,tt,pt),L.side=Er,L.needsUpdate=!0,ta(L,tt,pt),L.side=Ia):ta(L,tt,pt)}this.compile=function(L,tt,pt=null){pt===null&&(pt=L),S=Jt.get(pt),S.init(tt),H.push(S),pt.traverseVisible(function(nt){nt.isLight&&nt.layers.test(tt.layers)&&(S.pushLight(nt),nt.castShadow&&S.pushShadow(nt))}),L!==pt&&L.traverseVisible(function(nt){nt.isLight&&nt.layers.test(tt.layers)&&(S.pushLight(nt),nt.castShadow&&S.pushShadow(nt))}),S.setupLights();const mt=new Set;return L.traverse(function(nt){if(!(nt.isMesh||nt.isPoints||nt.isLine||nt.isSprite))return;const Nt=nt.material;if(Nt)if(Array.isArray(Nt))for(let It=0;It<Nt.length;It++){const Gt=Nt[It];Fe(Gt,pt,nt),mt.add(Gt)}else Fe(Nt,pt,nt),mt.add(Nt)}),S=H.pop(),mt},this.compileAsync=function(L,tt,pt=null){const mt=this.compile(L,tt,pt);return new Promise(nt=>{function Nt(){if(mt.forEach(function(It){$t.get(It).currentProgram.isReady()&&mt.delete(It)}),mt.size===0){nt(L);return}setTimeout(Nt,10)}Ce.get("KHR_parallel_shader_compile")!==null?Nt():setTimeout(Nt,10)})};let ei=null;function bn(L){ei&&ei(L)}function Sn(){Yn.stop()}function Dn(){Yn.start()}const Yn=new g0;Yn.setAnimationLoop(bn),typeof self<"u"&&Yn.setContext(self),this.setAnimationLoop=function(L){ei=L,_t.setAnimationLoop(L),L===null?Yn.stop():Yn.start()},_t.addEventListener("sessionstart",Sn),_t.addEventListener("sessionend",Dn),this.render=function(L,tt){if(tt!==void 0&&tt.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(j===!0)return;if(L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),tt.parent===null&&tt.matrixWorldAutoUpdate===!0&&tt.updateMatrixWorld(),_t.enabled===!0&&_t.isPresenting===!0&&(_t.cameraAutoUpdate===!0&&_t.updateCamera(tt),tt=_t.getCamera()),L.isScene===!0&&L.onBeforeRender(O,L,tt,K),S=Jt.get(L,H.length),S.init(tt),H.push(S),Ot.multiplyMatrices(tt.projectionMatrix,tt.matrixWorldInverse),at.setFromProjectionMatrix(Ot),Ct=this.localClippingEnabled,Mt=Pt.init(this.clippingPlanes,Ct),E=Zt.get(L,G.length),E.init(),G.push(E),_t.enabled===!0&&_t.isPresenting===!0){const Nt=O.xr.getDepthSensingMesh();Nt!==null&&ga(Nt,tt,-1/0,O.sortObjects)}ga(L,tt,0,O.sortObjects),E.finish(),O.sortObjects===!0&&E.sort(Lt,F),Ze=_t.enabled===!1||_t.isPresenting===!1||_t.hasDepthSensing()===!1,Ze&&Qt.addToRenderList(E,L),this.info.render.frame++,Mt===!0&&Pt.beginShadows();const pt=S.state.shadowsArray;jt.render(pt,L,tt),Mt===!0&&Pt.endShadows(),this.info.autoReset===!0&&this.info.reset();const mt=E.opaque,nt=E.transmissive;if(S.setupLights(),tt.isArrayCamera){const Nt=tt.cameras;if(nt.length>0)for(let It=0,Gt=Nt.length;It<Gt;It++){const Yt=Nt[It];as(mt,nt,L,Yt)}Ze&&Qt.render(L);for(let It=0,Gt=Nt.length;It<Gt;It++){const Yt=Nt[It];br(E,L,Yt,Yt.viewport)}}else nt.length>0&&as(mt,nt,L,tt),Ze&&Qt.render(L),br(E,L,tt);K!==null&&k===0&&(z.updateMultisampleRenderTarget(K),z.updateRenderTargetMipmap(K)),L.isScene===!0&&L.onAfterRender(O,L,tt),je.resetDefaultState(),P=-1,N=null,H.pop(),H.length>0?(S=H[H.length-1],Mt===!0&&Pt.setGlobalState(O.clippingPlanes,S.state.camera)):S=null,G.pop(),G.length>0?E=G[G.length-1]:E=null};function ga(L,tt,pt,mt){if(L.visible===!1)return;if(L.layers.test(tt.layers)){if(L.isGroup)pt=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(tt);else if(L.isLight)S.pushLight(L),L.castShadow&&S.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||at.intersectsSprite(L)){mt&&te.setFromMatrixPosition(L.matrixWorld).applyMatrix4(Ot);const It=yt.update(L),Gt=L.material;Gt.visible&&E.push(L,It,Gt,pt,te.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||at.intersectsObject(L))){const It=yt.update(L),Gt=L.material;if(mt&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),te.copy(L.boundingSphere.center)):(It.boundingSphere===null&&It.computeBoundingSphere(),te.copy(It.boundingSphere.center)),te.applyMatrix4(L.matrixWorld).applyMatrix4(Ot)),Array.isArray(Gt)){const Yt=It.groups;for(let de=0,re=Yt.length;de<re;de++){const ee=Yt[de],Ae=Gt[ee.materialIndex];Ae&&Ae.visible&&E.push(L,It,Ae,pt,te.z,ee)}}else Gt.visible&&E.push(L,It,Gt,pt,te.z,null)}}const Nt=L.children;for(let It=0,Gt=Nt.length;It<Gt;It++)ga(Nt[It],tt,pt,mt)}function br(L,tt,pt,mt){const nt=L.opaque,Nt=L.transmissive,It=L.transparent;S.setupLightsView(pt),Mt===!0&&Pt.setGlobalState(O.clippingPlanes,pt),mt&&ie.viewport(Y.copy(mt)),nt.length>0&&$i(nt,tt,pt),Nt.length>0&&$i(Nt,tt,pt),It.length>0&&$i(It,tt,pt),ie.buffers.depth.setTest(!0),ie.buffers.depth.setMask(!0),ie.buffers.color.setMask(!0),ie.setPolygonOffset(!1)}function as(L,tt,pt,mt){if((pt.isScene===!0?pt.overrideMaterial:null)!==null)return;S.state.transmissionRenderTarget[mt.id]===void 0&&(S.state.transmissionRenderTarget[mt.id]=new es(1,1,{generateMipmaps:!0,type:Ce.has("EXT_color_buffer_half_float")||Ce.has("EXT_color_buffer_float")?gl:pa,minFilter:$r,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Xe.workingColorSpace}));const Nt=S.state.transmissionRenderTarget[mt.id],It=mt.viewport||Y;Nt.setSize(It.z*O.transmissionResolutionScale,It.w*O.transmissionResolutionScale);const Gt=O.getRenderTarget();O.setRenderTarget(Nt),O.getClearColor(vt),xt=O.getClearAlpha(),xt<1&&O.setClearColor(16777215,.5),O.clear(),Ze&&Qt.render(pt);const Yt=O.toneMapping;O.toneMapping=xr;const de=mt.viewport;if(mt.viewport!==void 0&&(mt.viewport=void 0),S.setupLightsView(mt),Mt===!0&&Pt.setGlobalState(O.clippingPlanes,mt),$i(L,pt,mt),z.updateMultisampleRenderTarget(Nt),z.updateRenderTargetMipmap(Nt),Ce.has("WEBGL_multisampled_render_to_texture")===!1){let re=!1;for(let ee=0,Ae=tt.length;ee<Ae;ee++){const He=tt[ee],ln=He.object,De=He.geometry,Ue=He.material,se=He.group;if(Ue.side===Ia&&ln.layers.test(mt.layers)){const un=Ue.side;Ue.side=fi,Ue.needsUpdate=!0,Fi(ln,pt,mt,De,Ue,se),Ue.side=un,Ue.needsUpdate=!0,re=!0}}re===!0&&(z.updateMultisampleRenderTarget(Nt),z.updateRenderTargetMipmap(Nt))}O.setRenderTarget(Gt),O.setClearColor(vt,xt),de!==void 0&&(mt.viewport=de),O.toneMapping=Yt}function $i(L,tt,pt){const mt=tt.isScene===!0?tt.overrideMaterial:null;for(let nt=0,Nt=L.length;nt<Nt;nt++){const It=L[nt],Gt=It.object,Yt=It.geometry,de=It.group;let re=It.material;re.allowOverride===!0&&mt!==null&&(re=mt),Gt.layers.test(pt.layers)&&Fi(Gt,tt,pt,Yt,re,de)}}function Fi(L,tt,pt,mt,nt,Nt){L.onBeforeRender(O,tt,pt,mt,nt,Nt),L.modelViewMatrix.multiplyMatrices(pt.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),nt.onBeforeRender(O,tt,pt,mt,L,Nt),nt.transparent===!0&&nt.side===Ia&&nt.forceSinglePass===!1?(nt.side=fi,nt.needsUpdate=!0,O.renderBufferDirect(pt,tt,mt,nt,L,Nt),nt.side=Er,nt.needsUpdate=!0,O.renderBufferDirect(pt,tt,mt,nt,L,Nt),nt.side=Ia):O.renderBufferDirect(pt,tt,mt,nt,L,Nt),L.onAfterRender(O,tt,pt,mt,nt,Nt)}function ta(L,tt,pt){tt.isScene!==!0&&(tt=We);const mt=$t.get(L),nt=S.state.lights,Nt=S.state.shadowsArray,It=nt.state.version,Gt=Wt.getParameters(L,nt.state,Nt,tt,pt),Yt=Wt.getProgramCacheKey(Gt);let de=mt.programs;mt.environment=L.isMeshStandardMaterial?tt.environment:null,mt.fog=tt.fog,mt.envMap=(L.isMeshStandardMaterial?lt:D).get(L.envMap||mt.environment),mt.envMapRotation=mt.environment!==null&&L.envMap===null?tt.environmentRotation:L.envMapRotation,de===void 0&&(L.addEventListener("dispose",ye),de=new Map,mt.programs=de);let re=de.get(Yt);if(re!==void 0){if(mt.currentProgram===re&&mt.lightsStateVersion===It)return Ii(L,Gt),re}else Gt.uniforms=Wt.getUniforms(L),L.onBeforeCompile(Gt,O),re=Wt.acquireProgram(Gt,Yt),de.set(Yt,re),mt.uniforms=Gt.uniforms;const ee=mt.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(ee.clippingPlanes=Pt.uniform),Ii(L,Gt),mt.needsLights=mn(L),mt.lightsStateVersion=It,mt.needsLights&&(ee.ambientLightColor.value=nt.state.ambient,ee.lightProbe.value=nt.state.probe,ee.directionalLights.value=nt.state.directional,ee.directionalLightShadows.value=nt.state.directionalShadow,ee.spotLights.value=nt.state.spot,ee.spotLightShadows.value=nt.state.spotShadow,ee.rectAreaLights.value=nt.state.rectArea,ee.ltc_1.value=nt.state.rectAreaLTC1,ee.ltc_2.value=nt.state.rectAreaLTC2,ee.pointLights.value=nt.state.point,ee.pointLightShadows.value=nt.state.pointShadow,ee.hemisphereLights.value=nt.state.hemi,ee.directionalShadowMap.value=nt.state.directionalShadowMap,ee.directionalShadowMatrix.value=nt.state.directionalShadowMatrix,ee.spotShadowMap.value=nt.state.spotShadowMap,ee.spotLightMatrix.value=nt.state.spotLightMatrix,ee.spotLightMap.value=nt.state.spotLightMap,ee.pointShadowMap.value=nt.state.pointShadowMap,ee.pointShadowMatrix.value=nt.state.pointShadowMatrix),mt.currentProgram=re,mt.uniformsList=null,re}function zi(L){if(L.uniformsList===null){const tt=L.currentProgram.getUniforms();L.uniformsList=au.seqWithValue(tt.seq,L.uniforms)}return L.uniformsList}function Ii(L,tt){const pt=$t.get(L);pt.outputColorSpace=tt.outputColorSpace,pt.batching=tt.batching,pt.batchingColor=tt.batchingColor,pt.instancing=tt.instancing,pt.instancingColor=tt.instancingColor,pt.instancingMorph=tt.instancingMorph,pt.skinning=tt.skinning,pt.morphTargets=tt.morphTargets,pt.morphNormals=tt.morphNormals,pt.morphColors=tt.morphColors,pt.morphTargetsCount=tt.morphTargetsCount,pt.numClippingPlanes=tt.numClippingPlanes,pt.numIntersection=tt.numClipIntersection,pt.vertexAlphas=tt.vertexAlphas,pt.vertexTangents=tt.vertexTangents,pt.toneMapping=tt.toneMapping}function _a(L,tt,pt,mt,nt){tt.isScene!==!0&&(tt=We),z.resetTextureUnits();const Nt=tt.fog,It=mt.isMeshStandardMaterial?tt.environment:null,Gt=K===null?O.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:oo,Yt=(mt.isMeshStandardMaterial?lt:D).get(mt.envMap||It),de=mt.vertexColors===!0&&!!pt.attributes.color&&pt.attributes.color.itemSize===4,re=!!pt.attributes.tangent&&(!!mt.normalMap||mt.anisotropy>0),ee=!!pt.morphAttributes.position,Ae=!!pt.morphAttributes.normal,He=!!pt.morphAttributes.color;let ln=xr;mt.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(ln=O.toneMapping);const De=pt.morphAttributes.position||pt.morphAttributes.normal||pt.morphAttributes.color,Ue=De!==void 0?De.length:0,se=$t.get(mt),un=S.state.lights;if(Mt===!0&&(Ct===!0||L!==N)){const An=L===N&&mt.id===P;Pt.setState(mt,L,An)}let ze=!1;mt.version===se.__version?(se.needsLights&&se.lightsStateVersion!==un.state.version||se.outputColorSpace!==Gt||nt.isBatchedMesh&&se.batching===!1||!nt.isBatchedMesh&&se.batching===!0||nt.isBatchedMesh&&se.batchingColor===!0&&nt.colorTexture===null||nt.isBatchedMesh&&se.batchingColor===!1&&nt.colorTexture!==null||nt.isInstancedMesh&&se.instancing===!1||!nt.isInstancedMesh&&se.instancing===!0||nt.isSkinnedMesh&&se.skinning===!1||!nt.isSkinnedMesh&&se.skinning===!0||nt.isInstancedMesh&&se.instancingColor===!0&&nt.instanceColor===null||nt.isInstancedMesh&&se.instancingColor===!1&&nt.instanceColor!==null||nt.isInstancedMesh&&se.instancingMorph===!0&&nt.morphTexture===null||nt.isInstancedMesh&&se.instancingMorph===!1&&nt.morphTexture!==null||se.envMap!==Yt||mt.fog===!0&&se.fog!==Nt||se.numClippingPlanes!==void 0&&(se.numClippingPlanes!==Pt.numPlanes||se.numIntersection!==Pt.numIntersection)||se.vertexAlphas!==de||se.vertexTangents!==re||se.morphTargets!==ee||se.morphNormals!==Ae||se.morphColors!==He||se.toneMapping!==ln||se.morphTargetsCount!==Ue)&&(ze=!0):(ze=!0,se.__version=mt.version);let Fn=se.currentProgram;ze===!0&&(Fn=ta(mt,tt,nt));let na=!1,Ke=!1,Le=!1;const Ge=Fn.getUniforms(),Tn=se.uniforms;if(ie.useProgram(Fn.program)&&(na=!0,Ke=!0,Le=!0),mt.id!==P&&(P=mt.id,Ke=!0),na||N!==L){ie.buffers.depth.getReversed()?(zt.copy(L.projectionMatrix),xx(zt),Ex(zt),Ge.setValue(W,"projectionMatrix",zt)):Ge.setValue(W,"projectionMatrix",L.projectionMatrix),Ge.setValue(W,"viewMatrix",L.matrixWorldInverse);const cn=Ge.map.cameraPosition;cn!==void 0&&cn.setValue(W,fe.setFromMatrixPosition(L.matrixWorld)),me.logarithmicDepthBuffer&&Ge.setValue(W,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(mt.isMeshPhongMaterial||mt.isMeshToonMaterial||mt.isMeshLambertMaterial||mt.isMeshBasicMaterial||mt.isMeshStandardMaterial||mt.isShaderMaterial)&&Ge.setValue(W,"isOrthographic",L.isOrthographicCamera===!0),N!==L&&(N=L,Ke=!0,Le=!0)}if(nt.isSkinnedMesh){Ge.setOptional(W,nt,"bindMatrix"),Ge.setOptional(W,nt,"bindMatrixInverse");const An=nt.skeleton;An&&(An.boneTexture===null&&An.computeBoneTexture(),Ge.setValue(W,"boneTexture",An.boneTexture,z))}nt.isBatchedMesh&&(Ge.setOptional(W,nt,"batchingTexture"),Ge.setValue(W,"batchingTexture",nt._matricesTexture,z),Ge.setOptional(W,nt,"batchingIdTexture"),Ge.setValue(W,"batchingIdTexture",nt._indirectTexture,z),Ge.setOptional(W,nt,"batchingColorTexture"),nt._colorsTexture!==null&&Ge.setValue(W,"batchingColorTexture",nt._colorsTexture,z));const gn=pt.morphAttributes;if((gn.position!==void 0||gn.normal!==void 0||gn.color!==void 0)&&ue.update(nt,pt,Fn),(Ke||se.receiveShadow!==nt.receiveShadow)&&(se.receiveShadow=nt.receiveShadow,Ge.setValue(W,"receiveShadow",nt.receiveShadow)),mt.isMeshGouraudMaterial&&mt.envMap!==null&&(Tn.envMap.value=Yt,Tn.flipEnvMap.value=Yt.isCubeTexture&&Yt.isRenderTargetTexture===!1?-1:1),mt.isMeshStandardMaterial&&mt.envMap===null&&tt.environment!==null&&(Tn.envMapIntensity.value=tt.environmentIntensity),Ke&&(Ge.setValue(W,"toneMappingExposure",O.toneMappingExposure),se.needsLights&&ea(Tn,Le),Nt&&mt.fog===!0&&Bt.refreshFogUniforms(Tn,Nt),Bt.refreshMaterialUniforms(Tn,mt,$,ot,S.state.transmissionRenderTarget[L.id]),au.upload(W,zi(se),Tn,z)),mt.isShaderMaterial&&mt.uniformsNeedUpdate===!0&&(au.upload(W,zi(se),Tn,z),mt.uniformsNeedUpdate=!1),mt.isSpriteMaterial&&Ge.setValue(W,"center",nt.center),Ge.setValue(W,"modelViewMatrix",nt.modelViewMatrix),Ge.setValue(W,"normalMatrix",nt.normalMatrix),Ge.setValue(W,"modelMatrix",nt.matrixWorld),mt.isShaderMaterial||mt.isRawShaderMaterial){const An=mt.uniformsGroups;for(let cn=0,di=An.length;cn<di;cn++){const oe=An[cn];Q.update(oe,Fn),Q.bind(oe,Fn)}}return Fn}function ea(L,tt){L.ambientLightColor.needsUpdate=tt,L.lightProbe.needsUpdate=tt,L.directionalLights.needsUpdate=tt,L.directionalLightShadows.needsUpdate=tt,L.pointLights.needsUpdate=tt,L.pointLightShadows.needsUpdate=tt,L.spotLights.needsUpdate=tt,L.spotLightShadows.needsUpdate=tt,L.rectAreaLights.needsUpdate=tt,L.hemisphereLights.needsUpdate=tt}function mn(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return K},this.setRenderTargetTextures=function(L,tt,pt){const mt=$t.get(L);mt.__autoAllocateDepthBuffer=L.resolveDepthBuffer===!1,mt.__autoAllocateDepthBuffer===!1&&(mt.__useRenderToTexture=!1),$t.get(L.texture).__webglTexture=tt,$t.get(L.depthTexture).__webglTexture=mt.__autoAllocateDepthBuffer?void 0:pt,mt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(L,tt){const pt=$t.get(L);pt.__webglFramebuffer=tt,pt.__useDefaultFramebuffer=tt===void 0};const rs=W.createFramebuffer();this.setRenderTarget=function(L,tt=0,pt=0){K=L,I=tt,k=pt;let mt=!0,nt=null,Nt=!1,It=!1;if(L){const Yt=$t.get(L);if(Yt.__useDefaultFramebuffer!==void 0)ie.bindFramebuffer(W.FRAMEBUFFER,null),mt=!1;else if(Yt.__webglFramebuffer===void 0)z.setupRenderTarget(L);else if(Yt.__hasExternalTextures)z.rebindTextures(L,$t.get(L.texture).__webglTexture,$t.get(L.depthTexture).__webglTexture);else if(L.depthBuffer){const ee=L.depthTexture;if(Yt.__boundDepthTexture!==ee){if(ee!==null&&$t.has(ee)&&(L.width!==ee.image.width||L.height!==ee.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");z.setupDepthRenderbuffer(L)}}const de=L.texture;(de.isData3DTexture||de.isDataArrayTexture||de.isCompressedArrayTexture)&&(It=!0);const re=$t.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(re[tt])?nt=re[tt][pt]:nt=re[tt],Nt=!0):L.samples>0&&z.useMultisampledRTT(L)===!1?nt=$t.get(L).__webglMultisampledFramebuffer:Array.isArray(re)?nt=re[pt]:nt=re,Y.copy(L.viewport),gt.copy(L.scissor),ft=L.scissorTest}else Y.copy(rt).multiplyScalar($).floor(),gt.copy(Tt).multiplyScalar($).floor(),ft=Dt;if(pt!==0&&(nt=rs),ie.bindFramebuffer(W.FRAMEBUFFER,nt)&&mt&&ie.drawBuffers(L,nt),ie.viewport(Y),ie.scissor(gt),ie.setScissorTest(ft),Nt){const Yt=$t.get(L.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Yt.__webglTexture,pt)}else if(It){const Yt=$t.get(L.texture),de=tt;W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,Yt.__webglTexture,pt,de)}else if(L!==null&&pt!==0){const Yt=$t.get(L.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Yt.__webglTexture,pt)}P=-1},this.readRenderTargetPixels=function(L,tt,pt,mt,nt,Nt,It){if(!(L&&L.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Gt=$t.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&It!==void 0&&(Gt=Gt[It]),Gt){ie.bindFramebuffer(W.FRAMEBUFFER,Gt);try{const Yt=L.texture,de=Yt.format,re=Yt.type;if(!me.textureFormatReadable(de)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!me.textureTypeReadable(re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}tt>=0&&tt<=L.width-mt&&pt>=0&&pt<=L.height-nt&&W.readPixels(tt,pt,mt,nt,_e.convert(de),_e.convert(re),Nt)}finally{const Yt=K!==null?$t.get(K).__webglFramebuffer:null;ie.bindFramebuffer(W.FRAMEBUFFER,Yt)}}},this.readRenderTargetPixelsAsync=async function(L,tt,pt,mt,nt,Nt,It){if(!(L&&L.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Gt=$t.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&It!==void 0&&(Gt=Gt[It]),Gt)if(tt>=0&&tt<=L.width-mt&&pt>=0&&pt<=L.height-nt){ie.bindFramebuffer(W.FRAMEBUFFER,Gt);const Yt=L.texture,de=Yt.format,re=Yt.type;if(!me.textureFormatReadable(de))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!me.textureTypeReadable(re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ee=W.createBuffer();W.bindBuffer(W.PIXEL_PACK_BUFFER,ee),W.bufferData(W.PIXEL_PACK_BUFFER,Nt.byteLength,W.STREAM_READ),W.readPixels(tt,pt,mt,nt,_e.convert(de),_e.convert(re),0);const Ae=K!==null?$t.get(K).__webglFramebuffer:null;ie.bindFramebuffer(W.FRAMEBUFFER,Ae);const He=W.fenceSync(W.SYNC_GPU_COMMANDS_COMPLETE,0);return W.flush(),await Sx(W,He,4),W.bindBuffer(W.PIXEL_PACK_BUFFER,ee),W.getBufferSubData(W.PIXEL_PACK_BUFFER,0,Nt),W.deleteBuffer(ee),W.deleteSync(He),Nt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(L,tt=null,pt=0){const mt=Math.pow(2,-pt),nt=Math.floor(L.image.width*mt),Nt=Math.floor(L.image.height*mt),It=tt!==null?tt.x:0,Gt=tt!==null?tt.y:0;z.setTexture2D(L,0),W.copyTexSubImage2D(W.TEXTURE_2D,pt,0,0,It,Gt,nt,Nt),ie.unbindTexture()};const ss=W.createFramebuffer(),Hi=W.createFramebuffer();this.copyTextureToTexture=function(L,tt,pt=null,mt=null,nt=0,Nt=null){Nt===null&&(nt!==0?(nu("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Nt=nt,nt=0):Nt=0);let It,Gt,Yt,de,re,ee,Ae,He,ln;const De=L.isCompressedTexture?L.mipmaps[Nt]:L.image;if(pt!==null)It=pt.max.x-pt.min.x,Gt=pt.max.y-pt.min.y,Yt=pt.isBox3?pt.max.z-pt.min.z:1,de=pt.min.x,re=pt.min.y,ee=pt.isBox3?pt.min.z:0;else{const gn=Math.pow(2,-nt);It=Math.floor(De.width*gn),Gt=Math.floor(De.height*gn),L.isDataArrayTexture?Yt=De.depth:L.isData3DTexture?Yt=Math.floor(De.depth*gn):Yt=1,de=0,re=0,ee=0}mt!==null?(Ae=mt.x,He=mt.y,ln=mt.z):(Ae=0,He=0,ln=0);const Ue=_e.convert(tt.format),se=_e.convert(tt.type);let un;tt.isData3DTexture?(z.setTexture3D(tt,0),un=W.TEXTURE_3D):tt.isDataArrayTexture||tt.isCompressedArrayTexture?(z.setTexture2DArray(tt,0),un=W.TEXTURE_2D_ARRAY):(z.setTexture2D(tt,0),un=W.TEXTURE_2D),W.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,tt.flipY),W.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,tt.premultiplyAlpha),W.pixelStorei(W.UNPACK_ALIGNMENT,tt.unpackAlignment);const ze=W.getParameter(W.UNPACK_ROW_LENGTH),Fn=W.getParameter(W.UNPACK_IMAGE_HEIGHT),na=W.getParameter(W.UNPACK_SKIP_PIXELS),Ke=W.getParameter(W.UNPACK_SKIP_ROWS),Le=W.getParameter(W.UNPACK_SKIP_IMAGES);W.pixelStorei(W.UNPACK_ROW_LENGTH,De.width),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,De.height),W.pixelStorei(W.UNPACK_SKIP_PIXELS,de),W.pixelStorei(W.UNPACK_SKIP_ROWS,re),W.pixelStorei(W.UNPACK_SKIP_IMAGES,ee);const Ge=L.isDataArrayTexture||L.isData3DTexture,Tn=tt.isDataArrayTexture||tt.isData3DTexture;if(L.isDepthTexture){const gn=$t.get(L),An=$t.get(tt),cn=$t.get(gn.__renderTarget),di=$t.get(An.__renderTarget);ie.bindFramebuffer(W.READ_FRAMEBUFFER,cn.__webglFramebuffer),ie.bindFramebuffer(W.DRAW_FRAMEBUFFER,di.__webglFramebuffer);for(let oe=0;oe<Yt;oe++)Ge&&(W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,$t.get(L).__webglTexture,nt,ee+oe),W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,$t.get(tt).__webglTexture,Nt,ln+oe)),W.blitFramebuffer(de,re,It,Gt,Ae,He,It,Gt,W.DEPTH_BUFFER_BIT,W.NEAREST);ie.bindFramebuffer(W.READ_FRAMEBUFFER,null),ie.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else if(nt!==0||L.isRenderTargetTexture||$t.has(L)){const gn=$t.get(L),An=$t.get(tt);ie.bindFramebuffer(W.READ_FRAMEBUFFER,ss),ie.bindFramebuffer(W.DRAW_FRAMEBUFFER,Hi);for(let cn=0;cn<Yt;cn++)Ge?W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,gn.__webglTexture,nt,ee+cn):W.framebufferTexture2D(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,gn.__webglTexture,nt),Tn?W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,An.__webglTexture,Nt,ln+cn):W.framebufferTexture2D(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,An.__webglTexture,Nt),nt!==0?W.blitFramebuffer(de,re,It,Gt,Ae,He,It,Gt,W.COLOR_BUFFER_BIT,W.NEAREST):Tn?W.copyTexSubImage3D(un,Nt,Ae,He,ln+cn,de,re,It,Gt):W.copyTexSubImage2D(un,Nt,Ae,He,de,re,It,Gt);ie.bindFramebuffer(W.READ_FRAMEBUFFER,null),ie.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else Tn?L.isDataTexture||L.isData3DTexture?W.texSubImage3D(un,Nt,Ae,He,ln,It,Gt,Yt,Ue,se,De.data):tt.isCompressedArrayTexture?W.compressedTexSubImage3D(un,Nt,Ae,He,ln,It,Gt,Yt,Ue,De.data):W.texSubImage3D(un,Nt,Ae,He,ln,It,Gt,Yt,Ue,se,De):L.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,Nt,Ae,He,It,Gt,Ue,se,De.data):L.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,Nt,Ae,He,De.width,De.height,Ue,De.data):W.texSubImage2D(W.TEXTURE_2D,Nt,Ae,He,It,Gt,Ue,se,De);W.pixelStorei(W.UNPACK_ROW_LENGTH,ze),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,Fn),W.pixelStorei(W.UNPACK_SKIP_PIXELS,na),W.pixelStorei(W.UNPACK_SKIP_ROWS,Ke),W.pixelStorei(W.UNPACK_SKIP_IMAGES,Le),Nt===0&&tt.generateMipmaps&&W.generateMipmap(un),ie.unbindTexture()},this.copyTextureToTexture3D=function(L,tt,pt=null,mt=null,nt=0){return nu('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(L,tt,pt,mt,nt)},this.initRenderTarget=function(L){$t.get(L).__webglFramebuffer===void 0&&z.setupRenderTarget(L)},this.initTexture=function(L){L.isCubeTexture?z.setTextureCube(L,0):L.isData3DTexture?z.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?z.setTexture2DArray(L,0):z.setTexture2D(L,0),ie.unbindTexture()},this.resetState=function(){I=0,k=0,K=null,ie.reset(),je.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ga}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Xe._getDrawingBufferColorSpace(t),i.unpackColorSpace=Xe._getUnpackColorSpace()}}const qA=/^[og]\s*(.+)?/,YA=/^mtllib /,jA=/^usemtl /,ZA=/^usemap /,Pv=/\s+/,Bv=new st,Yh=new st,Fv=new st,zv=new st,Pi=new st,jc=new Ie;function KA(){const o={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(t,i){if(this.object&&this.object.fromDeclaration===!1){this.object.name=t,this.object.fromDeclaration=i!==!1;return}const r=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:t||"",fromDeclaration:i!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(l,c){const d=this._finalize(!1);d&&(d.inherited||d.groupCount<=0)&&this.materials.splice(d.index,1);const p={index:this.materials.length,name:l||"",mtllib:Array.isArray(c)&&c.length>0?c[c.length-1]:"",smooth:d!==void 0?d.smooth:this.smooth,groupStart:d!==void 0?d.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(g){const m={index:typeof g=="number"?g:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return m.clone=this.clone.bind(m),m}};return this.materials.push(p),p},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(l){const c=this.currentMaterial();if(c&&c.groupEnd===-1&&(c.groupEnd=this.geometry.vertices.length/3,c.groupCount=c.groupEnd-c.groupStart,c.inherited=!1),l&&this.materials.length>1)for(let d=this.materials.length-1;d>=0;d--)this.materials[d].groupCount<=0&&this.materials.splice(d,1);return l&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),c}},r&&r.name&&typeof r.clone=="function"){const l=r.clone(0);l.inherited=!0,this.object.materials.push(l)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(t,i){const r=parseInt(t,10);return(r>=0?r-1:r+i/3)*3},parseNormalIndex:function(t,i){const r=parseInt(t,10);return(r>=0?r-1:r+i/3)*3},parseUVIndex:function(t,i){const r=parseInt(t,10);return(r>=0?r-1:r+i/2)*2},addVertex:function(t,i,r){const l=this.vertices,c=this.object.geometry.vertices;c.push(l[t+0],l[t+1],l[t+2]),c.push(l[i+0],l[i+1],l[i+2]),c.push(l[r+0],l[r+1],l[r+2])},addVertexPoint:function(t){const i=this.vertices;this.object.geometry.vertices.push(i[t+0],i[t+1],i[t+2])},addVertexLine:function(t){const i=this.vertices;this.object.geometry.vertices.push(i[t+0],i[t+1],i[t+2])},addNormal:function(t,i,r){const l=this.normals,c=this.object.geometry.normals;c.push(l[t+0],l[t+1],l[t+2]),c.push(l[i+0],l[i+1],l[i+2]),c.push(l[r+0],l[r+1],l[r+2])},addFaceNormal:function(t,i,r){const l=this.vertices,c=this.object.geometry.normals;Bv.fromArray(l,t),Yh.fromArray(l,i),Fv.fromArray(l,r),Pi.subVectors(Fv,Yh),zv.subVectors(Bv,Yh),Pi.cross(zv),Pi.normalize(),c.push(Pi.x,Pi.y,Pi.z),c.push(Pi.x,Pi.y,Pi.z),c.push(Pi.x,Pi.y,Pi.z)},addColor:function(t,i,r){const l=this.colors,c=this.object.geometry.colors;l[t]!==void 0&&c.push(l[t+0],l[t+1],l[t+2]),l[i]!==void 0&&c.push(l[i+0],l[i+1],l[i+2]),l[r]!==void 0&&c.push(l[r+0],l[r+1],l[r+2])},addUV:function(t,i,r){const l=this.uvs,c=this.object.geometry.uvs;c.push(l[t+0],l[t+1]),c.push(l[i+0],l[i+1]),c.push(l[r+0],l[r+1])},addDefaultUV:function(){const t=this.object.geometry.uvs;t.push(0,0),t.push(0,0),t.push(0,0)},addUVLine:function(t){const i=this.uvs;this.object.geometry.uvs.push(i[t+0],i[t+1])},addFace:function(t,i,r,l,c,d,p,g,m){const v=this.vertices.length;let y=this.parseVertexIndex(t,v),x=this.parseVertexIndex(i,v),M=this.parseVertexIndex(r,v);if(this.addVertex(y,x,M),this.addColor(y,x,M),p!==void 0&&p!==""){const A=this.normals.length;y=this.parseNormalIndex(p,A),x=this.parseNormalIndex(g,A),M=this.parseNormalIndex(m,A),this.addNormal(y,x,M)}else this.addFaceNormal(y,x,M);if(l!==void 0&&l!==""){const A=this.uvs.length;y=this.parseUVIndex(l,A),x=this.parseUVIndex(c,A),M=this.parseUVIndex(d,A),this.addUV(y,x,M),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(t){this.object.geometry.type="Points";const i=this.vertices.length;for(let r=0,l=t.length;r<l;r++){const c=this.parseVertexIndex(t[r],i);this.addVertexPoint(c),this.addColor(c)}},addLineGeometry:function(t,i){this.object.geometry.type="Line";const r=this.vertices.length,l=this.uvs.length;for(let c=0,d=t.length;c<d;c++)this.addVertexLine(this.parseVertexIndex(t[c],r));for(let c=0,d=i.length;c<d;c++)this.addUVLine(this.parseUVIndex(i[c],l))}};return o.startObject("",!1),o}class QA extends Zd{constructor(t){super(t),this.materials=null}load(t,i,r,l){const c=this,d=new iE(this.manager);d.setPath(this.path),d.setRequestHeader(this.requestHeader),d.setWithCredentials(this.withCredentials),d.load(t,function(p){try{i(c.parse(p))}catch(g){l?l(g):console.error(g),c.manager.itemError(t)}},r,l)}setMaterials(t){return this.materials=t,this}parse(t){const i=new KA;t.indexOf(`\r
`)!==-1&&(t=t.replace(/\r\n/g,`
`)),t.indexOf(`\\
`)!==-1&&(t=t.replace(/\\\n/g,""));const r=t.split(`
`);let l=[];for(let p=0,g=r.length;p<g;p++){const m=r[p].trimStart();if(m.length===0)continue;const v=m.charAt(0);if(v!=="#")if(v==="v"){const y=m.split(Pv);switch(y[0]){case"v":i.vertices.push(parseFloat(y[1]),parseFloat(y[2]),parseFloat(y[3])),y.length>=7?(jc.setRGB(parseFloat(y[4]),parseFloat(y[5]),parseFloat(y[6]),Ti),i.colors.push(jc.r,jc.g,jc.b)):i.colors.push(void 0,void 0,void 0);break;case"vn":i.normals.push(parseFloat(y[1]),parseFloat(y[2]),parseFloat(y[3]));break;case"vt":i.uvs.push(parseFloat(y[1]),parseFloat(y[2]));break}}else if(v==="f"){const x=m.slice(1).trim().split(Pv),M=[];for(let C=0,E=x.length;C<E;C++){const S=x[C];if(S.length>0){const G=S.split("/");M.push(G)}}const A=M[0];for(let C=1,E=M.length-1;C<E;C++){const S=M[C],G=M[C+1];i.addFace(A[0],S[0],G[0],A[1],S[1],G[1],A[2],S[2],G[2])}}else if(v==="l"){const y=m.substring(1).trim().split(" ");let x=[];const M=[];if(m.indexOf("/")===-1)x=y;else for(let A=0,C=y.length;A<C;A++){const E=y[A].split("/");E[0]!==""&&x.push(E[0]),E[1]!==""&&M.push(E[1])}i.addLineGeometry(x,M)}else if(v==="p"){const x=m.slice(1).trim().split(" ");i.addPointGeometry(x)}else if((l=qA.exec(m))!==null){const y=(" "+l[0].slice(1).trim()).slice(1);i.startObject(y)}else if(jA.test(m))i.object.startMaterial(m.substring(7).trim(),i.materialLibraries);else if(YA.test(m))i.materialLibraries.push(m.substring(7).trim());else if(ZA.test(m))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(v==="s"){if(l=m.split(" "),l.length>1){const x=l[1].trim().toLowerCase();i.object.smooth=x!=="0"&&x!=="off"}else i.object.smooth=!0;const y=i.object.currentMaterial();y&&(y.smooth=i.object.smooth)}else{if(m==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+m+'"')}}i.finalize();const c=new cl;if(c.materialLibraries=[].concat(i.materialLibraries),!(i.objects.length===1&&i.objects[0].geometry.vertices.length===0)===!0)for(let p=0,g=i.objects.length;p<g;p++){const m=i.objects[p],v=m.geometry,y=m.materials,x=v.type==="Line",M=v.type==="Points";let A=!1;if(v.vertices.length===0)continue;const C=new Ji;C.setAttribute("position",new ai(v.vertices,3)),v.normals.length>0&&C.setAttribute("normal",new ai(v.normals,3)),v.colors.length>0&&(A=!0,C.setAttribute("color",new ai(v.colors,3))),v.hasUVIndices===!0&&C.setAttribute("uv",new ai(v.uvs,2));const E=[];for(let G=0,H=y.length;G<H;G++){const O=y[G],j=O.name+"_"+O.smooth+"_"+A;let I=i.materials[j];if(this.materials!==null){if(I=this.materials.create(O.name),x&&I&&!(I instanceof iu)){const k=new iu;ka.prototype.copy.call(k,I),k.color.copy(I.color),I=k}else if(M&&I&&!(I instanceof ul)){const k=new ul({size:10,sizeAttenuation:!1});ka.prototype.copy.call(k,I),k.color.copy(I.color),k.map=I.map,I=k}}I===void 0&&(x?I=new iu:M?I=new ul({size:1,sizeAttenuation:!1}):I=new Qx,I.name=O.name,I.flatShading=!O.smooth,I.vertexColors=A,i.materials[j]=I),E.push(I)}let S;if(E.length>1){for(let G=0,H=y.length;G<H;G++){const O=y[G];C.addGroup(O.groupStart,O.groupCount,G)}x?S=new nv(C,E):M?S=new Ih(C,E):S=new Ki(C,E)}else x?S=new nv(C,E[0]):M?S=new Ih(C,E[0]):S=new Ki(C,E[0]);S.name=m.name,c.add(S)}else if(i.vertices.length>0){const p=new ul({size:1,sizeAttenuation:!1}),g=new Ji;g.setAttribute("position",new ai(i.vertices,3)),i.colors.length>0&&i.colors[0]!==void 0&&(g.setAttribute("color",new ai(i.colors,3)),p.vertexColors=!0);const m=new Ih(g,p);c.add(m)}return c}}const Iv={type:"change"},Qd={type:"start"},x0={type:"end"},Zc=new fu,Hv=new vr,JA=Math.cos(70*vx.DEG2RAD),On=new st,ui=2*Math.PI,rn={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},jh=1e-6;class $A extends lE{constructor(t,i=null){super(t,i),this.state=rn.NONE,this.target=new st,this.cursor=new st,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:eo.ROTATE,MIDDLE:eo.DOLLY,RIGHT:eo.PAN},this.touches={ONE:$s.ROTATE,TWO:$s.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new st,this._lastQuaternion=new ns,this._lastTargetPosition=new st,this._quat=new ns().setFromUnitVectors(t.up,new st(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new cv,this._sphericalDelta=new cv,this._scale=1,this._panOffset=new st,this._rotateStart=new Ee,this._rotateEnd=new Ee,this._rotateDelta=new Ee,this._panStart=new Ee,this._panEnd=new Ee,this._panDelta=new Ee,this._dollyStart=new Ee,this._dollyEnd=new Ee,this._dollyDelta=new Ee,this._dollyDirection=new st,this._mouse=new Ee,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=e1.bind(this),this._onPointerDown=t1.bind(this),this._onPointerUp=n1.bind(this),this._onContextMenu=c1.bind(this),this._onMouseWheel=r1.bind(this),this._onKeyDown=s1.bind(this),this._onTouchStart=o1.bind(this),this._onTouchMove=l1.bind(this),this._onMouseDown=i1.bind(this),this._onMouseMove=a1.bind(this),this._interceptControlDown=u1.bind(this),this._interceptControlUp=f1.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Iv),this.update(),this.state=rn.NONE}update(t=null){const i=this.object.position;On.copy(i).sub(this.target),On.applyQuaternion(this._quat),this._spherical.setFromVector3(On),this.autoRotate&&this.state===rn.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let r=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(r)&&isFinite(l)&&(r<-Math.PI?r+=ui:r>Math.PI&&(r-=ui),l<-Math.PI?l+=ui:l>Math.PI&&(l-=ui),r<=l?this._spherical.theta=Math.max(r,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(r+l)/2?Math.max(r,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const d=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=d!=this._spherical.radius}if(On.setFromSpherical(this._spherical),On.applyQuaternion(this._quatInverse),i.copy(this.target).add(On),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let d=null;if(this.object.isPerspectiveCamera){const p=On.length();d=this._clampDistance(p*this._scale);const g=p-d;this.object.position.addScaledVector(this._dollyDirection,g),this.object.updateMatrixWorld(),c=!!g}else if(this.object.isOrthographicCamera){const p=new st(this._mouse.x,this._mouse.y,0);p.unproject(this.object);const g=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=g!==this.object.zoom;const m=new st(this._mouse.x,this._mouse.y,0);m.unproject(this.object),this.object.position.sub(m).add(p),this.object.updateMatrixWorld(),d=On.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;d!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(d).add(this.object.position):(Zc.origin.copy(this.object.position),Zc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Zc.direction))<JA?this.object.lookAt(this.target):(Hv.setFromNormalAndCoplanarPoint(this.object.up,this.target),Zc.intersectPlane(Hv,this.target))))}else if(this.object.isOrthographicCamera){const d=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),d!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>jh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>jh||this._lastTargetPosition.distanceToSquared(this.target)>jh?(this.dispatchEvent(Iv),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?ui/60*this.autoRotateSpeed*t:ui/60/60*this.autoRotateSpeed}_getZoomScale(t){const i=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,i){On.setFromMatrixColumn(i,0),On.multiplyScalar(-t),this._panOffset.add(On)}_panUp(t,i){this.screenSpacePanning===!0?On.setFromMatrixColumn(i,1):(On.setFromMatrixColumn(i,0),On.crossVectors(this.object.up,On)),On.multiplyScalar(t),this._panOffset.add(On)}_pan(t,i){const r=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;On.copy(l).sub(this.target);let c=On.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*c/r.clientHeight,this.object.matrix),this._panUp(2*i*c/r.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/r.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/r.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const r=this.domElement.getBoundingClientRect(),l=t-r.left,c=i-r.top,d=r.width,p=r.height;this._mouse.x=l/d*2-1,this._mouse.y=-(c/p)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(ui*this._rotateDelta.x/i.clientHeight),this._rotateUp(ui*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let i=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(ui*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-ui*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(ui*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-ui*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),r=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._rotateStart.set(r,l)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),r=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panStart.set(r,l)}}_handleTouchStartDolly(t){const i=this._getSecondPointerPosition(t),r=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(r*r+l*l);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const r=this._getSecondPointerPosition(t),l=.5*(t.pageX+r.x),c=.5*(t.pageY+r.y);this._rotateEnd.set(l,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(ui*this._rotateDelta.x/i.clientHeight),this._rotateUp(ui*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),r=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panEnd.set(r,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const i=this._getSecondPointerPosition(t),r=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(r*r+l*l);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const d=(t.pageX+i.x)*.5,p=(t.pageY+i.y)*.5;this._updateZoomParameters(d,p)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(t){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId)return!0;return!1}_trackPointer(t){let i=this._pointerPositions[t.pointerId];i===void 0&&(i=new Ee,this._pointerPositions[t.pointerId]=i),i.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const i=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(t){const i=t.deltaMode,r={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(i){case 1:r.deltaY*=16;break;case 2:r.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(r.deltaY*=10),r}}function t1(o){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(o.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(o)&&(this._addPointer(o),o.pointerType==="touch"?this._onTouchStart(o):this._onMouseDown(o)))}function e1(o){this.enabled!==!1&&(o.pointerType==="touch"?this._onTouchMove(o):this._onMouseMove(o))}function n1(o){switch(this._removePointer(o),this._pointers.length){case 0:this.domElement.releasePointerCapture(o.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(x0),this.state=rn.NONE;break;case 1:const t=this._pointers[0],i=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:i.x,pageY:i.y});break}}function i1(o){let t;switch(o.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case eo.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(o),this.state=rn.DOLLY;break;case eo.ROTATE:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=rn.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=rn.ROTATE}break;case eo.PAN:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=rn.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=rn.PAN}break;default:this.state=rn.NONE}this.state!==rn.NONE&&this.dispatchEvent(Qd)}function a1(o){switch(this.state){case rn.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(o);break;case rn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(o);break;case rn.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(o);break}}function r1(o){this.enabled===!1||this.enableZoom===!1||this.state!==rn.NONE||(o.preventDefault(),this.dispatchEvent(Qd),this._handleMouseWheel(this._customWheelEvent(o)),this.dispatchEvent(x0))}function s1(o){this.enabled!==!1&&this._handleKeyDown(o)}function o1(o){switch(this._trackPointer(o),this._pointers.length){case 1:switch(this.touches.ONE){case $s.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(o),this.state=rn.TOUCH_ROTATE;break;case $s.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(o),this.state=rn.TOUCH_PAN;break;default:this.state=rn.NONE}break;case 2:switch(this.touches.TWO){case $s.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(o),this.state=rn.TOUCH_DOLLY_PAN;break;case $s.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(o),this.state=rn.TOUCH_DOLLY_ROTATE;break;default:this.state=rn.NONE}break;default:this.state=rn.NONE}this.state!==rn.NONE&&this.dispatchEvent(Qd)}function l1(o){switch(this._trackPointer(o),this.state){case rn.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(o),this.update();break;case rn.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(o),this.update();break;case rn.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(o),this.update();break;case rn.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(o),this.update();break;default:this.state=rn.NONE}}function c1(o){this.enabled!==!1&&o.preventDefault()}function u1(o){o.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function f1(o){o.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Zh,Gv;function h1(){if(Gv)return Zh;Gv=1;var o="Expected a function",t=NaN,i="[object Symbol]",r=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,d=/^0o[0-7]+$/i,p=parseInt,g=typeof Ec=="object"&&Ec&&Ec.Object===Object&&Ec,m=typeof self=="object"&&self&&self.Object===Object&&self,v=g||m||Function("return this")(),y=Object.prototype,x=y.toString,M=Math.max,A=Math.min,C=function(){return v.Date.now()};function E(I,k,K){var P,N,Y,gt,ft,vt,xt=0,V=!1,ot=!1,$=!0;if(typeof I!="function")throw new TypeError(o);k=j(k)||0,G(K)&&(V=!!K.leading,ot="maxWait"in K,Y=ot?M(j(K.maxWait)||0,k):Y,$="trailing"in K?!!K.trailing:$);function Lt(Ot){var fe=P,te=N;return P=N=void 0,xt=Ot,gt=I.apply(te,fe),gt}function F(Ot){return xt=Ot,ft=setTimeout(Dt,k),V?Lt(Ot):gt}function rt(Ot){var fe=Ot-vt,te=Ot-xt,We=k-fe;return ot?A(We,Y-te):We}function Tt(Ot){var fe=Ot-vt,te=Ot-xt;return vt===void 0||fe>=k||fe<0||ot&&te>=Y}function Dt(){var Ot=C();if(Tt(Ot))return at(Ot);ft=setTimeout(Dt,rt(Ot))}function at(Ot){return ft=void 0,$&&P?Lt(Ot):(P=N=void 0,gt)}function Mt(){ft!==void 0&&clearTimeout(ft),xt=0,P=vt=N=ft=void 0}function Ct(){return ft===void 0?gt:at(C())}function zt(){var Ot=C(),fe=Tt(Ot);if(P=arguments,N=this,vt=Ot,fe){if(ft===void 0)return F(vt);if(ot)return ft=setTimeout(Dt,k),Lt(vt)}return ft===void 0&&(ft=setTimeout(Dt,k)),gt}return zt.cancel=Mt,zt.flush=Ct,zt}function S(I,k,K){var P=!0,N=!0;if(typeof I!="function")throw new TypeError(o);return G(K)&&(P="leading"in K?!!K.leading:P,N="trailing"in K?!!K.trailing:N),E(I,k,{leading:P,maxWait:k,trailing:N})}function G(I){var k=typeof I;return!!I&&(k=="object"||k=="function")}function H(I){return!!I&&typeof I=="object"}function O(I){return typeof I=="symbol"||H(I)&&x.call(I)==i}function j(I){if(typeof I=="number")return I;if(O(I))return t;if(G(I)){var k=typeof I.valueOf=="function"?I.valueOf():I;I=G(k)?k+"":k}if(typeof I!="string")return I===0?I:+I;I=I.replace(r,"");var K=c.test(I);return K||d.test(I)?p(I.slice(2),K?2:8):l.test(I)?t:+I}return Zh=S,Zh}var d1=h1();const p1=Wv(d1),Vv=o=>{let t;const i=new Set,r=(m,v)=>{const y=typeof m=="function"?m(t):m;if(!Object.is(y,t)){const x=t;t=v??(typeof y!="object"||y===null)?y:Object.assign({},t,y),i.forEach(M=>M(t,x))}},l=()=>t,p={setState:r,getState:l,getInitialState:()=>g,subscribe:m=>(i.add(m),()=>i.delete(m))},g=t=o(r,l,p);return p},m1=o=>o?Vv(o):Vv,g1=o=>o;function _1(o,t=g1){const i=R_.useSyncExternalStore(o.subscribe,()=>t(o.getState()),()=>t(o.getInitialState()));return R_.useDebugValue(i),i}const kv=o=>{const t=m1(o),i=r=>_1(t,r);return Object.assign(i,t),i},v1=o=>o?kv(o):kv,E0=v1(o=>({position:void 0,setPosition:t=>{o({position:t==null?void 0:t.clone()})}}));function y1({file:o}){const t=E0(v=>v.setPosition),i=p1(v=>{t(v)},100),r=bi.useRef(null),l=bi.useRef(null),c=bi.useRef(null),d=bi.useRef(null),p=bi.useRef(null),g=bi.useRef(null),m=bi.useCallback(v=>{if(!l.current)return;const y=new FileReader;y.onload=()=>{if(!l.current||!c.current||!p.current||!g.current)return;const x=y.result;if(typeof x!="string")return;const A=new QA().parse(x);l.current.add(A);const C=new co().setFromObject(A),E=new uo;C.getBoundingSphere(E);const S=E.radius,G=c.current.fov*(Math.PI/180),H=2*Math.atan(c.current.aspect*Math.tan(G/2)),O=S/Math.tan(G/2),j=S/Math.tan(H/2),I=Math.max(O,j)*1.5;c.current.position.copy(E.center).add(new st(0,0,I)),c.current.lookAt(E.center),p.current.dirLightXPlus.position.copy(E.center).add(new st(S,0,0)),p.current.dirLightXPlus.target.position.copy(E.center),p.current.dirLightXMinus.position.copy(E.center).add(new st(-S,0,0)),p.current.dirLightXMinus.target.position.copy(E.center),g.current.target.copy(E.center),g.current.update()},y.readAsText(v)},[]);return bi.useEffect(()=>{if(!r.current)return;const v=r.current.clientWidth,y=r.current.clientHeight,x=new Yx,M=new Bi(90,v/y,.1,1e3),A=new WA({antialias:!0,alpha:!0});A.setSize(v,y),r.current.appendChild(A.domElement);const C=new $A(M,A.domElement),E=new lv(16777215,1),S=new lv(16777215,1);x.add(E),x.add(S),l.current=x,c.current=M,d.current=A,p.current={dirLightXPlus:E,dirLightXMinus:S},g.current=C;const G=()=>{var H,O;requestAnimationFrame(G),A.render(x,M),(H=g.current)==null||H.update(),i((O=c.current)==null?void 0:O.position)};return G(),()=>{var H,O,j;i.cancel(),(H=g.current)==null||H.dispose(),(O=d.current)==null||O.dispose(),(j=r.current)==null||j.removeChild(A.domElement)}},[]),bi.useEffect(()=>{o&&m(o)},[o]),Zr.jsx("div",{ref:r,style:{width:"500px",height:"500px"}})}const S1=bi.memo(y1),x1="modulepreload",E1=function(o,t){return new URL(o,t).href},Xv={},M1=function(t,i,r){let l=Promise.resolve();if(i&&i.length>0){let d=function(v){return Promise.all(v.map(y=>Promise.resolve(y).then(x=>({status:"fulfilled",value:x}),x=>({status:"rejected",reason:x}))))};const p=document.getElementsByTagName("link"),g=document.querySelector("meta[property=csp-nonce]"),m=(g==null?void 0:g.nonce)||(g==null?void 0:g.getAttribute("nonce"));l=d(i.map(v=>{if(v=E1(v,r),v in Xv)return;Xv[v]=!0;const y=v.endsWith(".css"),x=y?'[rel="stylesheet"]':"";if(!!r)for(let C=p.length-1;C>=0;C--){const E=p[C];if(E.href===v&&(!y||E.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${v}"]${x}`))return;const A=document.createElement("link");if(A.rel=y?"stylesheet":x1,y||(A.as="script"),A.crossOrigin="",A.href=v,m&&A.setAttribute("nonce",m),document.head.appendChild(A),y)return new Promise((C,E)=>{A.addEventListener("load",C),A.addEventListener("error",()=>E(new Error(`Unable to preload CSS for ${v}`)))})}))}function c(d){const p=new Event("vite:preloadError",{cancelable:!0});if(p.payload=d,window.dispatchEvent(p),!p.defaultPrevented)throw d}return l.then(d=>{for(const p of d||[])p.status==="rejected"&&c(p.reason);return t().catch(c)})};var b1=async function(o={}){var t,i=o,r,l,c=new Promise((f,_)=>{r=f,l=_}),d=typeof window=="object",p=typeof WorkerGlobalScope<"u",g=typeof process=="object"&&typeof process.versions=="object"&&typeof process.versions.node=="string"&&process.type!="renderer";if(g){const{createRequire:f}=await M1(()=>import("./__vite-browser-external-BIHI7g3E.js"),[],import.meta.url);var m=f(import.meta.url)}var v=import.meta.url,y="";function x(f){return i.locateFile?i.locateFile(f,y):y+f}var M,A;if(g){var C=m("fs"),E=m("path");v.startsWith("file:")&&(y=E.dirname(m("url").fileURLToPath(v))+"/"),A=f=>{f=V(f)?new URL(f):f;var _=C.readFileSync(f);return _},M=async(f,_=!0)=>{f=V(f)?new URL(f):f;var b=C.readFileSync(f,_?void 0:"utf8");return b},process.argv.length>1&&process.argv[1].replace(/\\/g,"/"),process.argv.slice(2)}else if(d||p){try{y=new URL(".",v).href}catch{}p&&(A=f=>{var _=new XMLHttpRequest;return _.open("GET",f,!1),_.responseType="arraybuffer",_.send(null),new Uint8Array(_.response)}),M=async f=>{if(V(f))return new Promise((b,w)=>{var B=new XMLHttpRequest;B.open("GET",f,!0),B.responseType="arraybuffer",B.onload=()=>{if(B.status==200||B.status==0&&B.response){b(B.response);return}w(B.status)},B.onerror=w,B.send(null)});var _=await fetch(f,{credentials:"same-origin"});if(_.ok)return _.arrayBuffer();throw new Error(_.status+" : "+_.url)}}var S=console.log.bind(console),G=console.error.bind(console),H,O,j=!1,I,k,K,P,N,Y,gt,ft,vt,xt,V=f=>f.startsWith("file://");function ot(){var f=O.buffer;I=new Int8Array(f),K=new Int16Array(f),k=new Uint8Array(f),P=new Uint16Array(f),N=new Int32Array(f),Y=new Uint32Array(f),gt=new Float32Array(f),xt=new Float64Array(f),ft=new BigInt64Array(f),vt=new BigUint64Array(f)}function $(){if(i.preRun)for(typeof i.preRun=="function"&&(i.preRun=[i.preRun]);i.preRun.length;)ie(i.preRun.shift());W(me)}function Lt(){!i.noFSInit&&!R.initialized&&R.init(),jn.n(),R.ignorePermissions=!1}function F(){if(i.postRun)for(typeof i.postRun=="function"&&(i.postRun=[i.postRun]);i.postRun.length;)Ce(i.postRun.shift());W(kn)}var rt=0,Tt=null;function Dt(f){var _;rt++,(_=i.monitorRunDependencies)==null||_.call(i,rt)}function at(f){var b;if(rt--,(b=i.monitorRunDependencies)==null||b.call(i,rt),rt==0&&Tt){var _=Tt;Tt=null,_()}}function Mt(f){var b;(b=i.onAbort)==null||b.call(i,f),f="Aborted("+f+")",G(f),j=!0,f+=". Build with -sASSERTIONS for more info.";var _=new WebAssembly.RuntimeError(f);throw l(_),_}var Ct;function zt(){return i.locateFile?x("ray-tracing.wasm"):new URL(""+new URL("ray-tracing-BeJiNX5Z.wasm",import.meta.url).href,import.meta.url).href}function Ot(f){if(f==Ct&&H)return new Uint8Array(H);if(A)return A(f);throw"both async and sync fetching of the wasm failed"}async function fe(f){if(!H)try{var _=await M(f);return new Uint8Array(_)}catch{}return Ot(f)}async function te(f,_){try{var b=await fe(f),w=await WebAssembly.instantiate(b,_);return w}catch(B){G(`failed to asynchronously prepare wasm: ${B}`),Mt(B)}}async function We(f,_,b){if(!f&&typeof WebAssembly.instantiateStreaming=="function"&&!V(_)&&!g)try{var w=fetch(_,{credentials:"same-origin"}),B=await WebAssembly.instantiateStreaming(w,b);return B}catch(q){G(`wasm streaming compile failed: ${q}`),G("falling back to ArrayBuffer instantiation")}return te(_,b)}function Ze(){return{a:Xa}}async function Me(){function f(q,J){return jn=q.exports,O=jn.m,ot(),Fi=jn.o,at(),jn}Dt();function _(q){return f(q.instance)}var b=Ze();if(i.instantiateWasm)return new Promise((q,J)=>{i.instantiateWasm(b,(it,Rt)=>{q(f(it))})});Ct??(Ct=zt());try{var w=await We(H,Ct,b),B=_(w);return B}catch(q){return l(q),Promise.reject(q)}}var W=f=>{for(;f.length>0;)f.shift()(i)},kn=[],Ce=f=>kn.push(f),me=[],ie=f=>me.push(f),Ye=()=>Mt(""),$t=f=>{if(f===null)return"null";var _=typeof f;return _==="object"||_==="array"||_==="function"?f.toString():""+f},z=()=>{for(var f=new Array(256),_=0;_<256;++_)f[_]=String.fromCharCode(_);D=f},D,lt=f=>{for(var _="",b=f;k[b];)_+=D[k[b++]];return _},Et={},Ut={},yt={},Wt=i.BindingError=class extends Error{constructor(_){super(_),this.name="BindingError"}},Bt=f=>{throw new Wt(f)};function Zt(f,_,b={}){var w=_.name;if(f||Bt(`type "${w}" must have a positive integer typeid pointer`),Ut.hasOwnProperty(f)){if(b.ignoreDuplicateRegistrations)return;Bt(`Cannot register type '${w}' twice`)}if(Ut[f]=_,delete yt[f],Et.hasOwnProperty(f)){var B=Et[f];delete Et[f],B.forEach(q=>q())}}function Jt(f,_,b={}){return Zt(f,_,b)}var Pt=(f,_,b)=>{switch(_){case 1:return b?w=>I[w]:w=>k[w];case 2:return b?w=>K[w>>1]:w=>P[w>>1];case 4:return b?w=>N[w>>2]:w=>Y[w>>2];case 8:return b?w=>ft[w>>3]:w=>vt[w>>3];default:throw new TypeError(`invalid integer width (${_}): ${f}`)}},jt=(f,_,b,w,B)=>{_=lt(_);var q=_.indexOf("u")!=-1;Jt(f,{name:_,fromWireType:J=>J,toWireType:function(J,it){if(typeof it!="bigint"&&typeof it!="number")throw new TypeError(`Cannot convert "${$t(it)}" to ${this.name}`);return typeof it=="number"&&(it=BigInt(it)),it},argPackAdvance:Qt,readValueFromPointer:Pt(_,b,!q),destructorFunction:null})},Qt=8,ue=(f,_,b,w)=>{_=lt(_),Jt(f,{name:_,fromWireType:function(B){return!!B},toWireType:function(B,q){return q?b:w},argPackAdvance:Qt,readValueFromPointer:function(B){return this.fromWireType(k[B])},destructorFunction:null})},kt=[],ge=[],_e=f=>{f>9&&--ge[f+1]===0&&(ge[f]=void 0,kt.push(f))},je=()=>ge.length/2-5-kt.length,Q=()=>{ge.push(0,1,void 0,1,null,1,!0,1,!1,1),i.count_emval_handles=je},Ht={toValue:f=>(f||Bt(`Cannot use deleted val. handle = ${f}`),ge[f]),toHandle:f=>{switch(f){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:{const _=kt.pop()||ge.length;return ge[_]=f,ge[_+1]=1,_}}}};function _t(f){return this.fromWireType(Y[f>>2])}var At={name:"emscripten::val",fromWireType:f=>{var _=Ht.toValue(f);return _e(f),_},toWireType:(f,_)=>Ht.toHandle(_),argPackAdvance:Qt,readValueFromPointer:_t,destructorFunction:null},qt=f=>Jt(f,At),Vt=(f,_)=>{switch(_){case 4:return function(b){return this.fromWireType(gt[b>>2])};case 8:return function(b){return this.fromWireType(xt[b>>3])};default:throw new TypeError(`invalid float width (${_}): ${f}`)}},ye=(f,_,b)=>{_=lt(_),Jt(f,{name:_,fromWireType:w=>w,toWireType:(w,B)=>B,argPackAdvance:Qt,readValueFromPointer:Vt(_,b),destructorFunction:null})},$e=(f,_)=>Object.defineProperty(_,"name",{value:f}),pn=f=>{for(;f.length;){var _=f.pop(),b=f.pop();b(_)}};function Fe(f){for(var _=1;_<f.length;++_)if(f[_]!==null&&f[_].destructorFunction===void 0)return!0;return!1}function ei(f,_,b,w){for(var B=Fe(f),q=f.length-2,J=[],it=["fn"],Rt=0;Rt<q;++Rt)J.push(`arg${Rt}`),it.push(`arg${Rt}Wired`);J=J.join(","),it=it.join(",");var Ft=`return function (${J}) {
`;B&&(Ft+=`var destructors = [];
`);for(var ne=B?"destructors":"null",le=["humanName","throwBindingError","invoker","fn","runDestructors","retType","classParam"],Rt=0;Rt<q;++Rt)Ft+=`var arg${Rt}Wired = argType${Rt}['toWireType'](${ne}, arg${Rt});
`,le.push(`argType${Rt}`);if(Ft+=(b||w?"var rv = ":"")+`invoker(${it});
`,B)Ft+=`runDestructors(destructors);
`;else for(var Rt=2;Rt<f.length;++Rt){var Be=Rt===1?"thisWired":"arg"+(Rt-2)+"Wired";f[Rt].destructorFunction!==null&&(Ft+=`${Be}_dtor(${Be});
`,le.push(`${Be}_dtor`))}return b&&(Ft+=`var ret = retType['fromWireType'](rv);
return ret;
`),Ft+=`}
`,[le,Ft]}function bn(f,_,b,w,B,q){var J=_.length;J<2&&Bt("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var it=_[1]!==null&&b!==null,Rt=Fe(_),Ft=_[0].name!=="void",ne=[f,Bt,w,B,pn,_[0],_[1]],le=0;le<J-2;++le)ne.push(_[le+2]);if(!Rt)for(var le=2;le<_.length;++le)_[le].destructorFunction!==null&&ne.push(_[le].destructorFunction);let[Be,ce]=ei(_,it,Ft,q);var be=new Function(...Be,ce)(...ne);return $e(f,be)}var Sn=(f,_,b)=>{if(f[_].overloadTable===void 0){var w=f[_];f[_]=function(...B){return f[_].overloadTable.hasOwnProperty(B.length)||Bt(`Function '${b}' called with an invalid number of arguments (${B.length}) - expects one of (${f[_].overloadTable})!`),f[_].overloadTable[B.length].apply(this,B)},f[_].overloadTable=[],f[_].overloadTable[w.argCount]=w}},Dn=(f,_,b)=>{i.hasOwnProperty(f)?((b===void 0||i[f].overloadTable!==void 0&&i[f].overloadTable[b]!==void 0)&&Bt(`Cannot register public name '${f}' twice`),Sn(i,f,f),i[f].overloadTable.hasOwnProperty(b)&&Bt(`Cannot register multiple overloads of a function with the same number of arguments (${b})!`),i[f].overloadTable[b]=_):(i[f]=_,i[f].argCount=b)},Yn=(f,_)=>{for(var b=[],w=0;w<f;w++)b.push(Y[_+w*4>>2]);return b},ga=i.InternalError=class extends Error{constructor(_){super(_),this.name="InternalError"}},br=f=>{throw new ga(f)},as=(f,_,b)=>{i.hasOwnProperty(f)||br("Replacing nonexistent public symbol"),i[f].overloadTable!==void 0&&b!==void 0?i[f].overloadTable[b]=_:(i[f]=_,i[f].argCount=b)},$i=[],Fi,ta=f=>{var _=$i[f];return _||($i[f]=_=Fi.get(f)),_},zi=(f,_,b=!1)=>{f=lt(f);function w(){var q=ta(_);return q}var B=w();return typeof B!="function"&&Bt(`unknown function pointer with signature ${f}: ${_}`),B};class Ii extends Error{}var _a=f=>{var _=xl(f),b=lt(_);return ia(_),b},ea=(f,_)=>{var b=[],w={};function B(q){if(!w[q]&&!Ut[q]){if(yt[q]){yt[q].forEach(B);return}b.push(q),w[q]=!0}}throw _.forEach(B),new Ii(`${f}: `+b.map(_a).join([", "]))},mn=(f,_,b)=>{f.forEach(it=>yt[it]=_);function w(it){var Rt=b(it);Rt.length!==f.length&&br("Mismatched type converter count");for(var Ft=0;Ft<f.length;++Ft)Jt(f[Ft],Rt[Ft])}var B=new Array(_.length),q=[],J=0;_.forEach((it,Rt)=>{Ut.hasOwnProperty(it)?B[Rt]=Ut[it]:(q.push(it),Et.hasOwnProperty(it)||(Et[it]=[]),Et[it].push(()=>{B[Rt]=Ut[it],++J,J===q.length&&w(B)}))}),q.length===0&&w(B)},rs=f=>{f=f.trim();const _=f.indexOf("(");return _===-1?f:f.slice(0,_)},ss=(f,_,b,w,B,q,J,it)=>{var Rt=Yn(_,b);f=lt(f),f=rs(f),B=zi(w,B,J),Dn(f,function(){ea(`Cannot call ${f} due to unbound types`,Rt)},_-1),mn([],Rt,Ft=>{var ne=[Ft[0],null].concat(Ft.slice(1));return as(f,bn(f,ne,null,B,q,J),_-1),[]})},Hi=(f,_,b,w,B)=>{_=lt(_);var q=ne=>ne;if(w===0){var J=32-8*b;q=ne=>ne<<J>>>J}var it=_.includes("unsigned"),Rt=(ne,le)=>{},Ft;it?Ft=function(ne,le){return Rt(le,this.name),le>>>0}:Ft=function(ne,le){return Rt(le,this.name),le},Jt(f,{name:_,fromWireType:q,toWireType:Ft,argPackAdvance:Qt,readValueFromPointer:Pt(_,b,w!==0),destructorFunction:null})},L=(f,_,b)=>{var w=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array],B=w[_];function q(J){var it=Y[J>>2],Rt=Y[J+4>>2];return new B(I.buffer,Rt,it)}b=lt(b),Jt(f,{name:b,fromWireType:q,argPackAdvance:Qt,readValueFromPointer:q},{ignoreDuplicateRegistrations:!0})},tt=(f,_,b,w)=>{if(!(w>0))return 0;for(var B=b,q=b+w-1,J=0;J<f.length;++J){var it=f.charCodeAt(J);if(it>=55296&&it<=57343){var Rt=f.charCodeAt(++J);it=65536+((it&1023)<<10)|Rt&1023}if(it<=127){if(b>=q)break;_[b++]=it}else if(it<=2047){if(b+1>=q)break;_[b++]=192|it>>6,_[b++]=128|it&63}else if(it<=65535){if(b+2>=q)break;_[b++]=224|it>>12,_[b++]=128|it>>6&63,_[b++]=128|it&63}else{if(b+3>=q)break;_[b++]=240|it>>18,_[b++]=128|it>>12&63,_[b++]=128|it>>6&63,_[b++]=128|it&63}}return _[b]=0,b-B},pt=(f,_,b)=>tt(f,k,_,b),mt=f=>{for(var _=0,b=0;b<f.length;++b){var w=f.charCodeAt(b);w<=127?_++:w<=2047?_+=2:w>=55296&&w<=57343?(_+=4,++b):_+=3}return _},nt=typeof TextDecoder<"u"?new TextDecoder:void 0,Nt=(f,_=0,b=NaN)=>{for(var w=_+b,B=_;f[B]&&!(B>=w);)++B;if(B-_>16&&f.buffer&&nt)return nt.decode(f.subarray(_,B));for(var q="";_<B;){var J=f[_++];if(!(J&128)){q+=String.fromCharCode(J);continue}var it=f[_++]&63;if((J&224)==192){q+=String.fromCharCode((J&31)<<6|it);continue}var Rt=f[_++]&63;if((J&240)==224?J=(J&15)<<12|it<<6|Rt:J=(J&7)<<18|it<<12|Rt<<6|f[_++]&63,J<65536)q+=String.fromCharCode(J);else{var Ft=J-65536;q+=String.fromCharCode(55296|Ft>>10,56320|Ft&1023)}}return q},It=(f,_)=>f?Nt(k,f,_):"",Gt=(f,_)=>{_=lt(_),Jt(f,{name:_,fromWireType(b){for(var w=Y[b>>2],B=b+4,q,J,it=B,J=0;J<=w;++J){var Rt=B+J;if(J==w||k[Rt]==0){var Ft=Rt-it,ne=It(it,Ft);q===void 0?q=ne:(q+="\0",q+=ne),it=Rt+1}}return ia(b),q},toWireType(b,w){w instanceof ArrayBuffer&&(w=new Uint8Array(w));var B,q=typeof w=="string";q||ArrayBuffer.isView(w)&&w.BYTES_PER_ELEMENT==1||Bt("Cannot pass non-string to std::string"),q?B=mt(w):B=w.length;var J=cs(4+B+1),it=J+4;return Y[J>>2]=B,q?pt(w,it,B+1):k.set(w,it),b!==null&&b.push(ia,J),J},argPackAdvance:Qt,readValueFromPointer:_t,destructorFunction(b){ia(b)}})},Yt=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0,de=(f,_)=>{for(var b=f,w=b>>1,B=w+_/2;!(w>=B)&&P[w];)++w;if(b=w<<1,b-f>32&&Yt)return Yt.decode(k.subarray(f,b));for(var q="",J=0;!(J>=_/2);++J){var it=K[f+J*2>>1];if(it==0)break;q+=String.fromCharCode(it)}return q},re=(f,_,b)=>{if(b??(b=2147483647),b<2)return 0;b-=2;for(var w=_,B=b<f.length*2?b/2:f.length,q=0;q<B;++q){var J=f.charCodeAt(q);K[_>>1]=J,_+=2}return K[_>>1]=0,_-w},ee=f=>f.length*2,Ae=(f,_)=>{for(var b=0,w="";!(b>=_/4);){var B=N[f+b*4>>2];if(B==0)break;if(++b,B>=65536){var q=B-65536;w+=String.fromCharCode(55296|q>>10,56320|q&1023)}else w+=String.fromCharCode(B)}return w},He=(f,_,b)=>{if(b??(b=2147483647),b<4)return 0;for(var w=_,B=w+b-4,q=0;q<f.length;++q){var J=f.charCodeAt(q);if(J>=55296&&J<=57343){var it=f.charCodeAt(++q);J=65536+((J&1023)<<10)|it&1023}if(N[_>>2]=J,_+=4,_+4>B)break}return N[_>>2]=0,_-w},ln=f=>{for(var _=0,b=0;b<f.length;++b){var w=f.charCodeAt(b);w>=55296&&w<=57343&&++b,_+=4}return _},De=(f,_,b)=>{b=lt(b);var w,B,q,J;_===2?(w=de,B=re,J=ee,q=it=>P[it>>1]):_===4&&(w=Ae,B=He,J=ln,q=it=>Y[it>>2]),Jt(f,{name:b,fromWireType:it=>{for(var Rt=Y[it>>2],Ft,ne=it+4,le=0;le<=Rt;++le){var Be=it+4+le*_;if(le==Rt||q(Be)==0){var ce=Be-ne,be=w(ne,ce);Ft===void 0?Ft=be:(Ft+="\0",Ft+=be),ne=Be+_}}return ia(it),Ft},toWireType:(it,Rt)=>{typeof Rt!="string"&&Bt(`Cannot pass non-string to C++ string type ${b}`);var Ft=J(Rt),ne=cs(4+Ft+_);return Y[ne>>2]=Ft/_,B(Rt,ne+4,Ft+_),it!==null&&it.push(ia,ne),ne},argPackAdvance:Qt,readValueFromPointer:_t,destructorFunction(it){ia(it)}})},Ue=(f,_)=>{_=lt(_),Jt(f,{isVoid:!0,name:_,argPackAdvance:0,fromWireType:()=>{},toWireType:(b,w)=>{}})},se=()=>2147483648,un=(f,_)=>Math.ceil(f/_)*_,ze=f=>{var _=O.buffer,b=(f-_.byteLength+65535)/65536|0;try{return O.grow(b),ot(),1}catch{}},Fn=f=>{var _=k.length;f>>>=0;var b=se();if(f>b)return!1;for(var w=1;w<=4;w*=2){var B=_*(1+.2/w);B=Math.min(B,f+100663296);var q=Math.min(b,un(Math.max(f,B),65536)),J=ze(q);if(J)return!0}return!1},na=()=>{if(g){var f=m("crypto");return _=>f.randomFillSync(_)}return _=>crypto.getRandomValues(_)},Ke=f=>{(Ke=na())(f)},Le={isAbs:f=>f.charAt(0)==="/",splitPath:f=>{var _=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;return _.exec(f).slice(1)},normalizeArray:(f,_)=>{for(var b=0,w=f.length-1;w>=0;w--){var B=f[w];B==="."?f.splice(w,1):B===".."?(f.splice(w,1),b++):b&&(f.splice(w,1),b--)}if(_)for(;b;b--)f.unshift("..");return f},normalize:f=>{var _=Le.isAbs(f),b=f.slice(-1)==="/";return f=Le.normalizeArray(f.split("/").filter(w=>!!w),!_).join("/"),!f&&!_&&(f="."),f&&b&&(f+="/"),(_?"/":"")+f},dirname:f=>{var _=Le.splitPath(f),b=_[0],w=_[1];return!b&&!w?".":(w&&(w=w.slice(0,-1)),b+w)},basename:f=>f&&f.match(/([^\/]+|\/)\/*$/)[1],join:(...f)=>Le.normalize(f.join("/")),join2:(f,_)=>Le.normalize(f+"/"+_)},Ge={resolve:(...f)=>{for(var _="",b=!1,w=f.length-1;w>=-1&&!b;w--){var B=w>=0?f[w]:R.cwd();if(typeof B!="string")throw new TypeError("Arguments to path.resolve must be strings");if(!B)return"";_=B+"/"+_,b=Le.isAbs(B)}return _=Le.normalizeArray(_.split("/").filter(q=>!!q),!b).join("/"),(b?"/":"")+_||"."},relative:(f,_)=>{f=Ge.resolve(f).slice(1),_=Ge.resolve(_).slice(1);function b(Ft){for(var ne=0;ne<Ft.length&&Ft[ne]==="";ne++);for(var le=Ft.length-1;le>=0&&Ft[le]==="";le--);return ne>le?[]:Ft.slice(ne,le-ne+1)}for(var w=b(f.split("/")),B=b(_.split("/")),q=Math.min(w.length,B.length),J=q,it=0;it<q;it++)if(w[it]!==B[it]){J=it;break}for(var Rt=[],it=J;it<w.length;it++)Rt.push("..");return Rt=Rt.concat(B.slice(J)),Rt.join("/")}},Tn=[],gn=(f,_,b)=>{var w=mt(f)+1,B=new Array(w),q=tt(f,B,0,B.length);return B.length=q,B},An=()=>{if(!Tn.length){var f=null;if(g){var _=256,b=Buffer.alloc(_),w=0,B=process.stdin.fd;try{w=C.readSync(B,b,0,_)}catch(q){if(q.toString().includes("EOF"))w=0;else throw q}w>0&&(f=b.slice(0,w).toString("utf-8"))}else typeof window<"u"&&typeof window.prompt=="function"&&(f=window.prompt("Input: "),f!==null&&(f+=`
`));if(!f)return null;Tn=gn(f)}return Tn.shift()},cn={ttys:[],init(){},shutdown(){},register(f,_){cn.ttys[f]={input:[],output:[],ops:_},R.registerDevice(f,cn.stream_ops)},stream_ops:{open(f){var _=cn.ttys[f.node.rdev];if(!_)throw new R.ErrnoError(43);f.tty=_,f.seekable=!1},close(f){f.tty.ops.fsync(f.tty)},fsync(f){f.tty.ops.fsync(f.tty)},read(f,_,b,w,B){if(!f.tty||!f.tty.ops.get_char)throw new R.ErrnoError(60);for(var q=0,J=0;J<w;J++){var it;try{it=f.tty.ops.get_char(f.tty)}catch{throw new R.ErrnoError(29)}if(it===void 0&&q===0)throw new R.ErrnoError(6);if(it==null)break;q++,_[b+J]=it}return q&&(f.node.atime=Date.now()),q},write(f,_,b,w,B){if(!f.tty||!f.tty.ops.put_char)throw new R.ErrnoError(60);try{for(var q=0;q<w;q++)f.tty.ops.put_char(f.tty,_[b+q])}catch{throw new R.ErrnoError(29)}return w&&(f.node.mtime=f.node.ctime=Date.now()),q}},default_tty_ops:{get_char(f){return An()},put_char(f,_){_===null||_===10?(S(Nt(f.output)),f.output=[]):_!=0&&f.output.push(_)},fsync(f){var _;((_=f.output)==null?void 0:_.length)>0&&(S(Nt(f.output)),f.output=[])},ioctl_tcgets(f){return{c_iflag:25856,c_oflag:5,c_cflag:191,c_lflag:35387,c_cc:[3,28,127,21,4,0,1,0,17,19,26,0,18,15,23,22,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}},ioctl_tcsets(f,_,b){return 0},ioctl_tiocgwinsz(f){return[24,80]}},default_tty1_ops:{put_char(f,_){_===null||_===10?(G(Nt(f.output)),f.output=[]):_!=0&&f.output.push(_)},fsync(f){var _;((_=f.output)==null?void 0:_.length)>0&&(G(Nt(f.output)),f.output=[])}}},di=f=>{Mt()},oe={ops_table:null,mount(f){return oe.createNode(null,"/",16895,0)},createNode(f,_,b,w){if(R.isBlkdev(b)||R.isFIFO(b))throw new R.ErrnoError(63);oe.ops_table||(oe.ops_table={dir:{node:{getattr:oe.node_ops.getattr,setattr:oe.node_ops.setattr,lookup:oe.node_ops.lookup,mknod:oe.node_ops.mknod,rename:oe.node_ops.rename,unlink:oe.node_ops.unlink,rmdir:oe.node_ops.rmdir,readdir:oe.node_ops.readdir,symlink:oe.node_ops.symlink},stream:{llseek:oe.stream_ops.llseek}},file:{node:{getattr:oe.node_ops.getattr,setattr:oe.node_ops.setattr},stream:{llseek:oe.stream_ops.llseek,read:oe.stream_ops.read,write:oe.stream_ops.write,mmap:oe.stream_ops.mmap,msync:oe.stream_ops.msync}},link:{node:{getattr:oe.node_ops.getattr,setattr:oe.node_ops.setattr,readlink:oe.node_ops.readlink},stream:{}},chrdev:{node:{getattr:oe.node_ops.getattr,setattr:oe.node_ops.setattr},stream:R.chrdev_stream_ops}});var B=R.createNode(f,_,b,w);return R.isDir(B.mode)?(B.node_ops=oe.ops_table.dir.node,B.stream_ops=oe.ops_table.dir.stream,B.contents={}):R.isFile(B.mode)?(B.node_ops=oe.ops_table.file.node,B.stream_ops=oe.ops_table.file.stream,B.usedBytes=0,B.contents=null):R.isLink(B.mode)?(B.node_ops=oe.ops_table.link.node,B.stream_ops=oe.ops_table.link.stream):R.isChrdev(B.mode)&&(B.node_ops=oe.ops_table.chrdev.node,B.stream_ops=oe.ops_table.chrdev.stream),B.atime=B.mtime=B.ctime=Date.now(),f&&(f.contents[_]=B,f.atime=f.mtime=f.ctime=B.atime),B},getFileDataAsTypedArray(f){return f.contents?f.contents.subarray?f.contents.subarray(0,f.usedBytes):new Uint8Array(f.contents):new Uint8Array(0)},expandFileStorage(f,_){var b=f.contents?f.contents.length:0;if(!(b>=_)){var w=1024*1024;_=Math.max(_,b*(b<w?2:1.125)>>>0),b!=0&&(_=Math.max(_,256));var B=f.contents;f.contents=new Uint8Array(_),f.usedBytes>0&&f.contents.set(B.subarray(0,f.usedBytes),0)}},resizeFileStorage(f,_){if(f.usedBytes!=_)if(_==0)f.contents=null,f.usedBytes=0;else{var b=f.contents;f.contents=new Uint8Array(_),b&&f.contents.set(b.subarray(0,Math.min(_,f.usedBytes))),f.usedBytes=_}},node_ops:{getattr(f){var _={};return _.dev=R.isChrdev(f.mode)?f.id:1,_.ino=f.id,_.mode=f.mode,_.nlink=1,_.uid=0,_.gid=0,_.rdev=f.rdev,R.isDir(f.mode)?_.size=4096:R.isFile(f.mode)?_.size=f.usedBytes:R.isLink(f.mode)?_.size=f.link.length:_.size=0,_.atime=new Date(f.atime),_.mtime=new Date(f.mtime),_.ctime=new Date(f.ctime),_.blksize=4096,_.blocks=Math.ceil(_.size/_.blksize),_},setattr(f,_){for(const b of["mode","atime","mtime","ctime"])_[b]!=null&&(f[b]=_[b]);_.size!==void 0&&oe.resizeFileStorage(f,_.size)},lookup(f,_){throw oe.doesNotExistError},mknod(f,_,b,w){return oe.createNode(f,_,b,w)},rename(f,_,b){var w;try{w=R.lookupNode(_,b)}catch{}if(w){if(R.isDir(f.mode))for(var B in w.contents)throw new R.ErrnoError(55);R.hashRemoveNode(w)}delete f.parent.contents[f.name],_.contents[b]=f,f.name=b,_.ctime=_.mtime=f.parent.ctime=f.parent.mtime=Date.now()},unlink(f,_){delete f.contents[_],f.ctime=f.mtime=Date.now()},rmdir(f,_){var b=R.lookupNode(f,_);for(var w in b.contents)throw new R.ErrnoError(55);delete f.contents[_],f.ctime=f.mtime=Date.now()},readdir(f){return[".","..",...Object.keys(f.contents)]},symlink(f,_,b){var w=oe.createNode(f,_,41471,0);return w.link=b,w},readlink(f){if(!R.isLink(f.mode))throw new R.ErrnoError(28);return f.link}},stream_ops:{read(f,_,b,w,B){var q=f.node.contents;if(B>=f.node.usedBytes)return 0;var J=Math.min(f.node.usedBytes-B,w);if(J>8&&q.subarray)_.set(q.subarray(B,B+J),b);else for(var it=0;it<J;it++)_[b+it]=q[B+it];return J},write(f,_,b,w,B,q){if(_.buffer===I.buffer&&(q=!1),!w)return 0;var J=f.node;if(J.mtime=J.ctime=Date.now(),_.subarray&&(!J.contents||J.contents.subarray)){if(q)return J.contents=_.subarray(b,b+w),J.usedBytes=w,w;if(J.usedBytes===0&&B===0)return J.contents=_.slice(b,b+w),J.usedBytes=w,w;if(B+w<=J.usedBytes)return J.contents.set(_.subarray(b,b+w),B),w}if(oe.expandFileStorage(J,B+w),J.contents.subarray&&_.subarray)J.contents.set(_.subarray(b,b+w),B);else for(var it=0;it<w;it++)J.contents[B+it]=_[b+it];return J.usedBytes=Math.max(J.usedBytes,B+w),w},llseek(f,_,b){var w=_;if(b===1?w+=f.position:b===2&&R.isFile(f.node.mode)&&(w+=f.node.usedBytes),w<0)throw new R.ErrnoError(28);return w},mmap(f,_,b,w,B){if(!R.isFile(f.node.mode))throw new R.ErrnoError(43);var q,J,it=f.node.contents;if(!(B&2)&&it&&it.buffer===I.buffer)J=!1,q=it.byteOffset;else{if(J=!0,q=di(),!q)throw new R.ErrnoError(48);it&&((b>0||b+_<it.length)&&(it.subarray?it=it.subarray(b,b+_):it=Array.prototype.slice.call(it,b,b+_)),I.set(it,q))}return{ptr:q,allocated:J}},msync(f,_,b,w,B){return oe.stream_ops.write(f,_,0,w,b,!1),0}}},yl=async f=>{var _=await M(f);return new Uint8Array(_)},Sl=(...f)=>R.createDataFile(...f),os=[],pu=(f,_,b,w)=>{typeof Browser<"u"&&Browser.init();var B=!1;return os.forEach(q=>{B||q.canHandle(_)&&(q.handle(f,_,b,w),B=!0)}),B},mu=(f,_,b,w,B,q,J,it,Rt,Ft)=>{var ne=_?Ge.resolve(Le.join2(f,_)):f;function le(Be){function ce(be){Ft==null||Ft(),it||Sl(f,_,be,w,B,Rt),q==null||q(),at()}pu(Be,ne,ce,()=>{J==null||J(),at()})||ce(Be)}Dt(),typeof b=="string"?yl(b).then(le,J):le(b)},ls=f=>{var _={r:0,"r+":2,w:577,"w+":578,a:1089,"a+":1090},b=_[f];if(typeof b>"u")throw new Error(`Unknown file open mode: ${f}`);return b},Tr=(f,_)=>{var b=0;return f&&(b|=365),_&&(b|=146),b},R={root:null,mounts:[],devices:{},streams:[],nextInode:1,nameTable:null,currentPath:"/",initialized:!1,ignorePermissions:!0,filesystems:null,syncFSRequests:0,readFiles:{},ErrnoError:class{constructor(f){ua(this,"name","ErrnoError");this.errno=f}},FSStream:class{constructor(){ua(this,"shared",{})}get object(){return this.node}set object(f){this.node=f}get isRead(){return(this.flags&2097155)!==1}get isWrite(){return(this.flags&2097155)!==0}get isAppend(){return this.flags&1024}get flags(){return this.shared.flags}set flags(f){this.shared.flags=f}get position(){return this.shared.position}set position(f){this.shared.position=f}},FSNode:class{constructor(f,_,b,w){ua(this,"node_ops",{});ua(this,"stream_ops",{});ua(this,"readMode",365);ua(this,"writeMode",146);ua(this,"mounted",null);f||(f=this),this.parent=f,this.mount=f.mount,this.id=R.nextInode++,this.name=_,this.mode=b,this.rdev=w,this.atime=this.mtime=this.ctime=Date.now()}get read(){return(this.mode&this.readMode)===this.readMode}set read(f){f?this.mode|=this.readMode:this.mode&=~this.readMode}get write(){return(this.mode&this.writeMode)===this.writeMode}set write(f){f?this.mode|=this.writeMode:this.mode&=~this.writeMode}get isFolder(){return R.isDir(this.mode)}get isDevice(){return R.isChrdev(this.mode)}},lookupPath(f,_={}){if(!f)throw new R.ErrnoError(44);_.follow_mount??(_.follow_mount=!0),Le.isAbs(f)||(f=R.cwd()+"/"+f);t:for(var b=0;b<40;b++){for(var w=f.split("/").filter(Ft=>!!Ft),B=R.root,q="/",J=0;J<w.length;J++){var it=J===w.length-1;if(it&&_.parent)break;if(w[J]!=="."){if(w[J]===".."){if(q=Le.dirname(q),R.isRoot(B)){f=q+"/"+w.slice(J+1).join("/");continue t}else B=B.parent;continue}q=Le.join2(q,w[J]);try{B=R.lookupNode(B,w[J])}catch(Ft){if((Ft==null?void 0:Ft.errno)===44&&it&&_.noent_okay)return{path:q};throw Ft}if(R.isMountpoint(B)&&(!it||_.follow_mount)&&(B=B.mounted.root),R.isLink(B.mode)&&(!it||_.follow)){if(!B.node_ops.readlink)throw new R.ErrnoError(52);var Rt=B.node_ops.readlink(B);Le.isAbs(Rt)||(Rt=Le.dirname(q)+"/"+Rt),f=Rt+"/"+w.slice(J+1).join("/");continue t}}}return{path:q,node:B}}throw new R.ErrnoError(32)},getPath(f){for(var _;;){if(R.isRoot(f)){var b=f.mount.mountpoint;return _?b[b.length-1]!=="/"?`${b}/${_}`:b+_:b}_=_?`${f.name}/${_}`:f.name,f=f.parent}},hashName(f,_){for(var b=0,w=0;w<_.length;w++)b=(b<<5)-b+_.charCodeAt(w)|0;return(f+b>>>0)%R.nameTable.length},hashAddNode(f){var _=R.hashName(f.parent.id,f.name);f.name_next=R.nameTable[_],R.nameTable[_]=f},hashRemoveNode(f){var _=R.hashName(f.parent.id,f.name);if(R.nameTable[_]===f)R.nameTable[_]=f.name_next;else for(var b=R.nameTable[_];b;){if(b.name_next===f){b.name_next=f.name_next;break}b=b.name_next}},lookupNode(f,_){var b=R.mayLookup(f);if(b)throw new R.ErrnoError(b);for(var w=R.hashName(f.id,_),B=R.nameTable[w];B;B=B.name_next){var q=B.name;if(B.parent.id===f.id&&q===_)return B}return R.lookup(f,_)},createNode(f,_,b,w){var B=new R.FSNode(f,_,b,w);return R.hashAddNode(B),B},destroyNode(f){R.hashRemoveNode(f)},isRoot(f){return f===f.parent},isMountpoint(f){return!!f.mounted},isFile(f){return(f&61440)===32768},isDir(f){return(f&61440)===16384},isLink(f){return(f&61440)===40960},isChrdev(f){return(f&61440)===8192},isBlkdev(f){return(f&61440)===24576},isFIFO(f){return(f&61440)===4096},isSocket(f){return(f&49152)===49152},flagsToPermissionString(f){var _=["r","w","rw"][f&3];return f&512&&(_+="w"),_},nodePermissions(f,_){return R.ignorePermissions?0:_.includes("r")&&!(f.mode&292)||_.includes("w")&&!(f.mode&146)||_.includes("x")&&!(f.mode&73)?2:0},mayLookup(f){if(!R.isDir(f.mode))return 54;var _=R.nodePermissions(f,"x");return _||(f.node_ops.lookup?0:2)},mayCreate(f,_){if(!R.isDir(f.mode))return 54;try{var b=R.lookupNode(f,_);return 20}catch{}return R.nodePermissions(f,"wx")},mayDelete(f,_,b){var w;try{w=R.lookupNode(f,_)}catch(q){return q.errno}var B=R.nodePermissions(f,"wx");if(B)return B;if(b){if(!R.isDir(w.mode))return 54;if(R.isRoot(w)||R.getPath(w)===R.cwd())return 10}else if(R.isDir(w.mode))return 31;return 0},mayOpen(f,_){return f?R.isLink(f.mode)?32:R.isDir(f.mode)&&(R.flagsToPermissionString(_)!=="r"||_&576)?31:R.nodePermissions(f,R.flagsToPermissionString(_)):44},checkOpExists(f,_){if(!f)throw new R.ErrnoError(_);return f},MAX_OPEN_FDS:4096,nextfd(){for(var f=0;f<=R.MAX_OPEN_FDS;f++)if(!R.streams[f])return f;throw new R.ErrnoError(33)},getStreamChecked(f){var _=R.getStream(f);if(!_)throw new R.ErrnoError(8);return _},getStream:f=>R.streams[f],createStream(f,_=-1){return f=Object.assign(new R.FSStream,f),_==-1&&(_=R.nextfd()),f.fd=_,R.streams[_]=f,f},closeStream(f){R.streams[f]=null},dupStream(f,_=-1){var w,B;var b=R.createStream(f,_);return(B=(w=b.stream_ops)==null?void 0:w.dup)==null||B.call(w,b),b},doSetAttr(f,_,b){var w=f==null?void 0:f.stream_ops.setattr,B=w?f:_;w??(w=_.node_ops.setattr),R.checkOpExists(w,63),w(B,b)},chrdev_stream_ops:{open(f){var b,w;var _=R.getDevice(f.node.rdev);f.stream_ops=_.stream_ops,(w=(b=f.stream_ops).open)==null||w.call(b,f)},llseek(){throw new R.ErrnoError(70)}},major:f=>f>>8,minor:f=>f&255,makedev:(f,_)=>f<<8|_,registerDevice(f,_){R.devices[f]={stream_ops:_}},getDevice:f=>R.devices[f],getMounts(f){for(var _=[],b=[f];b.length;){var w=b.pop();_.push(w),b.push(...w.mounts)}return _},syncfs(f,_){typeof f=="function"&&(_=f,f=!1),R.syncFSRequests++,R.syncFSRequests>1&&G(`warning: ${R.syncFSRequests} FS.syncfs operations in flight at once, probably just doing extra work`);var b=R.getMounts(R.root.mount),w=0;function B(J){return R.syncFSRequests--,_(J)}function q(J){if(J)return q.errored?void 0:(q.errored=!0,B(J));++w>=b.length&&B(null)}b.forEach(J=>{if(!J.type.syncfs)return q(null);J.type.syncfs(J,f,q)})},mount(f,_,b){var w=b==="/",B=!b,q;if(w&&R.root)throw new R.ErrnoError(10);if(!w&&!B){var J=R.lookupPath(b,{follow_mount:!1});if(b=J.path,q=J.node,R.isMountpoint(q))throw new R.ErrnoError(10);if(!R.isDir(q.mode))throw new R.ErrnoError(54)}var it={type:f,opts:_,mountpoint:b,mounts:[]},Rt=f.mount(it);return Rt.mount=it,it.root=Rt,w?R.root=Rt:q&&(q.mounted=it,q.mount&&q.mount.mounts.push(it)),Rt},unmount(f){var _=R.lookupPath(f,{follow_mount:!1});if(!R.isMountpoint(_.node))throw new R.ErrnoError(28);var b=_.node,w=b.mounted,B=R.getMounts(w);Object.keys(R.nameTable).forEach(J=>{for(var it=R.nameTable[J];it;){var Rt=it.name_next;B.includes(it.mount)&&R.destroyNode(it),it=Rt}}),b.mounted=null;var q=b.mount.mounts.indexOf(w);b.mount.mounts.splice(q,1)},lookup(f,_){return f.node_ops.lookup(f,_)},mknod(f,_,b){var w=R.lookupPath(f,{parent:!0}),B=w.node,q=Le.basename(f);if(!q)throw new R.ErrnoError(28);if(q==="."||q==="..")throw new R.ErrnoError(20);var J=R.mayCreate(B,q);if(J)throw new R.ErrnoError(J);if(!B.node_ops.mknod)throw new R.ErrnoError(63);return B.node_ops.mknod(B,q,_,b)},statfs(f){return R.statfsNode(R.lookupPath(f,{follow:!0}).node)},statfsStream(f){return R.statfsNode(f.node)},statfsNode(f){var _={bsize:4096,frsize:4096,blocks:1e6,bfree:5e5,bavail:5e5,files:R.nextInode,ffree:R.nextInode-1,fsid:42,flags:2,namelen:255};return f.node_ops.statfs&&Object.assign(_,f.node_ops.statfs(f.mount.opts.root)),_},create(f,_=438){return _&=4095,_|=32768,R.mknod(f,_,0)},mkdir(f,_=511){return _&=1023,_|=16384,R.mknod(f,_,0)},mkdirTree(f,_){var b=f.split("/"),w="";for(var B of b)if(B){(w||Le.isAbs(f))&&(w+="/"),w+=B;try{R.mkdir(w,_)}catch(q){if(q.errno!=20)throw q}}},mkdev(f,_,b){return typeof b>"u"&&(b=_,_=438),_|=8192,R.mknod(f,_,b)},symlink(f,_){if(!Ge.resolve(f))throw new R.ErrnoError(44);var b=R.lookupPath(_,{parent:!0}),w=b.node;if(!w)throw new R.ErrnoError(44);var B=Le.basename(_),q=R.mayCreate(w,B);if(q)throw new R.ErrnoError(q);if(!w.node_ops.symlink)throw new R.ErrnoError(63);return w.node_ops.symlink(w,B,f)},rename(f,_){var b=Le.dirname(f),w=Le.dirname(_),B=Le.basename(f),q=Le.basename(_),J,it,Rt;if(J=R.lookupPath(f,{parent:!0}),it=J.node,J=R.lookupPath(_,{parent:!0}),Rt=J.node,!it||!Rt)throw new R.ErrnoError(44);if(it.mount!==Rt.mount)throw new R.ErrnoError(75);var Ft=R.lookupNode(it,B),ne=Ge.relative(f,w);if(ne.charAt(0)!==".")throw new R.ErrnoError(28);if(ne=Ge.relative(_,b),ne.charAt(0)!==".")throw new R.ErrnoError(55);var le;try{le=R.lookupNode(Rt,q)}catch{}if(Ft!==le){var Be=R.isDir(Ft.mode),ce=R.mayDelete(it,B,Be);if(ce)throw new R.ErrnoError(ce);if(ce=le?R.mayDelete(Rt,q,Be):R.mayCreate(Rt,q),ce)throw new R.ErrnoError(ce);if(!it.node_ops.rename)throw new R.ErrnoError(63);if(R.isMountpoint(Ft)||le&&R.isMountpoint(le))throw new R.ErrnoError(10);if(Rt!==it&&(ce=R.nodePermissions(it,"w"),ce))throw new R.ErrnoError(ce);R.hashRemoveNode(Ft);try{it.node_ops.rename(Ft,Rt,q),Ft.parent=Rt}catch(be){throw be}finally{R.hashAddNode(Ft)}}},rmdir(f){var _=R.lookupPath(f,{parent:!0}),b=_.node,w=Le.basename(f),B=R.lookupNode(b,w),q=R.mayDelete(b,w,!0);if(q)throw new R.ErrnoError(q);if(!b.node_ops.rmdir)throw new R.ErrnoError(63);if(R.isMountpoint(B))throw new R.ErrnoError(10);b.node_ops.rmdir(b,w),R.destroyNode(B)},readdir(f){var _=R.lookupPath(f,{follow:!0}),b=_.node,w=R.checkOpExists(b.node_ops.readdir,54);return w(b)},unlink(f){var _=R.lookupPath(f,{parent:!0}),b=_.node;if(!b)throw new R.ErrnoError(44);var w=Le.basename(f),B=R.lookupNode(b,w),q=R.mayDelete(b,w,!1);if(q)throw new R.ErrnoError(q);if(!b.node_ops.unlink)throw new R.ErrnoError(63);if(R.isMountpoint(B))throw new R.ErrnoError(10);b.node_ops.unlink(b,w),R.destroyNode(B)},readlink(f){var _=R.lookupPath(f),b=_.node;if(!b)throw new R.ErrnoError(44);if(!b.node_ops.readlink)throw new R.ErrnoError(28);return b.node_ops.readlink(b)},stat(f,_){var b=R.lookupPath(f,{follow:!_}),w=b.node,B=R.checkOpExists(w.node_ops.getattr,63);return B(w)},fstat(f){var _=R.getStreamChecked(f),b=_.node,w=_.stream_ops.getattr,B=w?_:b;return w??(w=b.node_ops.getattr),R.checkOpExists(w,63),w(B)},lstat(f){return R.stat(f,!0)},doChmod(f,_,b,w){R.doSetAttr(f,_,{mode:b&4095|_.mode&-4096,ctime:Date.now(),dontFollow:w})},chmod(f,_,b){var w;if(typeof f=="string"){var B=R.lookupPath(f,{follow:!b});w=B.node}else w=f;R.doChmod(null,w,_,b)},lchmod(f,_){R.chmod(f,_,!0)},fchmod(f,_){var b=R.getStreamChecked(f);R.doChmod(b,b.node,_,!1)},doChown(f,_,b){R.doSetAttr(f,_,{timestamp:Date.now(),dontFollow:b})},chown(f,_,b,w){var B;if(typeof f=="string"){var q=R.lookupPath(f,{follow:!w});B=q.node}else B=f;R.doChown(null,B,w)},lchown(f,_,b){R.chown(f,_,b,!0)},fchown(f,_,b){var w=R.getStreamChecked(f);R.doChown(w,w.node,!1)},doTruncate(f,_,b){if(R.isDir(_.mode))throw new R.ErrnoError(31);if(!R.isFile(_.mode))throw new R.ErrnoError(28);var w=R.nodePermissions(_,"w");if(w)throw new R.ErrnoError(w);R.doSetAttr(f,_,{size:b,timestamp:Date.now()})},truncate(f,_){if(_<0)throw new R.ErrnoError(28);var b;if(typeof f=="string"){var w=R.lookupPath(f,{follow:!0});b=w.node}else b=f;R.doTruncate(null,b,_)},ftruncate(f,_){var b=R.getStreamChecked(f);if(_<0||(b.flags&2097155)===0)throw new R.ErrnoError(28);R.doTruncate(b,b.node,_)},utime(f,_,b){var w=R.lookupPath(f,{follow:!0}),B=w.node,q=R.checkOpExists(B.node_ops.setattr,63);q(B,{atime:_,mtime:b})},open(f,_,b=438){if(f==="")throw new R.ErrnoError(44);_=typeof _=="string"?ls(_):_,_&64?b=b&4095|32768:b=0;var w,B;if(typeof f=="object")w=f;else{B=f.endsWith("/");var q=R.lookupPath(f,{follow:!(_&131072),noent_okay:!0});w=q.node,f=q.path}var J=!1;if(_&64)if(w){if(_&128)throw new R.ErrnoError(20)}else{if(B)throw new R.ErrnoError(31);w=R.mknod(f,b|511,0),J=!0}if(!w)throw new R.ErrnoError(44);if(R.isChrdev(w.mode)&&(_&=-513),_&65536&&!R.isDir(w.mode))throw new R.ErrnoError(54);if(!J){var it=R.mayOpen(w,_);if(it)throw new R.ErrnoError(it)}_&512&&!J&&R.truncate(w,0),_&=-131713;var Rt=R.createStream({node:w,path:R.getPath(w),flags:_,seekable:!0,position:0,stream_ops:w.stream_ops,ungotten:[],error:!1});return Rt.stream_ops.open&&Rt.stream_ops.open(Rt),J&&R.chmod(w,b&511),i.logReadFiles&&!(_&1)&&(f in R.readFiles||(R.readFiles[f]=1)),Rt},close(f){if(R.isClosed(f))throw new R.ErrnoError(8);f.getdents&&(f.getdents=null);try{f.stream_ops.close&&f.stream_ops.close(f)}catch(_){throw _}finally{R.closeStream(f.fd)}f.fd=null},isClosed(f){return f.fd===null},llseek(f,_,b){if(R.isClosed(f))throw new R.ErrnoError(8);if(!f.seekable||!f.stream_ops.llseek)throw new R.ErrnoError(70);if(b!=0&&b!=1&&b!=2)throw new R.ErrnoError(28);return f.position=f.stream_ops.llseek(f,_,b),f.ungotten=[],f.position},read(f,_,b,w,B){if(w<0||B<0)throw new R.ErrnoError(28);if(R.isClosed(f))throw new R.ErrnoError(8);if((f.flags&2097155)===1)throw new R.ErrnoError(8);if(R.isDir(f.node.mode))throw new R.ErrnoError(31);if(!f.stream_ops.read)throw new R.ErrnoError(28);var q=typeof B<"u";if(!q)B=f.position;else if(!f.seekable)throw new R.ErrnoError(70);var J=f.stream_ops.read(f,_,b,w,B);return q||(f.position+=J),J},write(f,_,b,w,B,q){if(w<0||B<0)throw new R.ErrnoError(28);if(R.isClosed(f))throw new R.ErrnoError(8);if((f.flags&2097155)===0)throw new R.ErrnoError(8);if(R.isDir(f.node.mode))throw new R.ErrnoError(31);if(!f.stream_ops.write)throw new R.ErrnoError(28);f.seekable&&f.flags&1024&&R.llseek(f,0,2);var J=typeof B<"u";if(!J)B=f.position;else if(!f.seekable)throw new R.ErrnoError(70);var it=f.stream_ops.write(f,_,b,w,B,q);return J||(f.position+=it),it},mmap(f,_,b,w,B){if((w&2)!==0&&(B&2)===0&&(f.flags&2097155)!==2)throw new R.ErrnoError(2);if((f.flags&2097155)===1)throw new R.ErrnoError(2);if(!f.stream_ops.mmap)throw new R.ErrnoError(43);if(!_)throw new R.ErrnoError(28);return f.stream_ops.mmap(f,_,b,w,B)},msync(f,_,b,w,B){return f.stream_ops.msync?f.stream_ops.msync(f,_,b,w,B):0},ioctl(f,_,b){if(!f.stream_ops.ioctl)throw new R.ErrnoError(59);return f.stream_ops.ioctl(f,_,b)},readFile(f,_={}){if(_.flags=_.flags||0,_.encoding=_.encoding||"binary",_.encoding!=="utf8"&&_.encoding!=="binary")throw new Error(`Invalid encoding type "${_.encoding}"`);var b,w=R.open(f,_.flags),B=R.stat(f),q=B.size,J=new Uint8Array(q);return R.read(w,J,0,q,0),_.encoding==="utf8"?b=Nt(J):_.encoding==="binary"&&(b=J),R.close(w),b},writeFile(f,_,b={}){b.flags=b.flags||577;var w=R.open(f,b.flags,b.mode);if(typeof _=="string"){var B=new Uint8Array(mt(_)+1),q=tt(_,B,0,B.length);R.write(w,B,0,q,void 0,b.canOwn)}else if(ArrayBuffer.isView(_))R.write(w,_,0,_.byteLength,void 0,b.canOwn);else throw new Error("Unsupported data type");R.close(w)},cwd:()=>R.currentPath,chdir(f){var _=R.lookupPath(f,{follow:!0});if(_.node===null)throw new R.ErrnoError(44);if(!R.isDir(_.node.mode))throw new R.ErrnoError(54);var b=R.nodePermissions(_.node,"x");if(b)throw new R.ErrnoError(b);R.currentPath=_.path},createDefaultDirectories(){R.mkdir("/tmp"),R.mkdir("/home"),R.mkdir("/home/web_user")},createDefaultDevices(){R.mkdir("/dev"),R.registerDevice(R.makedev(1,3),{read:()=>0,write:(w,B,q,J,it)=>J,llseek:()=>0}),R.mkdev("/dev/null",R.makedev(1,3)),cn.register(R.makedev(5,0),cn.default_tty_ops),cn.register(R.makedev(6,0),cn.default_tty1_ops),R.mkdev("/dev/tty",R.makedev(5,0)),R.mkdev("/dev/tty1",R.makedev(6,0));var f=new Uint8Array(1024),_=0,b=()=>(_===0&&(Ke(f),_=f.byteLength),f[--_]);R.createDevice("/dev","random",b),R.createDevice("/dev","urandom",b),R.mkdir("/dev/shm"),R.mkdir("/dev/shm/tmp")},createSpecialDirectories(){R.mkdir("/proc");var f=R.mkdir("/proc/self");R.mkdir("/proc/self/fd"),R.mount({mount(){var _=R.createNode(f,"fd",16895,73);return _.stream_ops={llseek:oe.stream_ops.llseek},_.node_ops={lookup(b,w){var B=+w,q=R.getStreamChecked(B),J={parent:null,mount:{mountpoint:"fake"},node_ops:{readlink:()=>q.path},id:B+1};return J.parent=J,J},readdir(){return Array.from(R.streams.entries()).filter(([b,w])=>w).map(([b,w])=>b.toString())}},_}},{},"/proc/self/fd")},createStandardStreams(f,_,b){f?R.createDevice("/dev","stdin",f):R.symlink("/dev/tty","/dev/stdin"),_?R.createDevice("/dev","stdout",null,_):R.symlink("/dev/tty","/dev/stdout"),b?R.createDevice("/dev","stderr",null,b):R.symlink("/dev/tty1","/dev/stderr"),R.open("/dev/stdin",0),R.open("/dev/stdout",1),R.open("/dev/stderr",1)},staticInit(){R.nameTable=new Array(4096),R.mount(oe,{},"/"),R.createDefaultDirectories(),R.createDefaultDevices(),R.createSpecialDirectories(),R.filesystems={MEMFS:oe}},init(f,_,b){R.initialized=!0,f??(f=i.stdin),_??(_=i.stdout),b??(b=i.stderr),R.createStandardStreams(f,_,b)},quit(){R.initialized=!1;for(var f of R.streams)f&&R.close(f)},findObject(f,_){var b=R.analyzePath(f,_);return b.exists?b.object:null},analyzePath(f,_){try{var b=R.lookupPath(f,{follow:!_});f=b.path}catch{}var w={isRoot:!1,exists:!1,error:0,name:null,path:null,object:null,parentExists:!1,parentPath:null,parentObject:null};try{var b=R.lookupPath(f,{parent:!0});w.parentExists=!0,w.parentPath=b.path,w.parentObject=b.node,w.name=Le.basename(f),b=R.lookupPath(f,{follow:!_}),w.exists=!0,w.path=b.path,w.object=b.node,w.name=b.node.name,w.isRoot=b.path==="/"}catch(B){w.error=B.errno}return w},createPath(f,_,b,w){f=typeof f=="string"?f:R.getPath(f);for(var B=_.split("/").reverse();B.length;){var q=B.pop();if(q){var J=Le.join2(f,q);try{R.mkdir(J)}catch(it){if(it.errno!=20)throw it}f=J}}return J},createFile(f,_,b,w,B){var q=Le.join2(typeof f=="string"?f:R.getPath(f),_),J=Tr(w,B);return R.create(q,J)},createDataFile(f,_,b,w,B,q){var J=_;f&&(f=typeof f=="string"?f:R.getPath(f),J=_?Le.join2(f,_):f);var it=Tr(w,B),Rt=R.create(J,it);if(b){if(typeof b=="string"){for(var Ft=new Array(b.length),ne=0,le=b.length;ne<le;++ne)Ft[ne]=b.charCodeAt(ne);b=Ft}R.chmod(Rt,it|146);var Be=R.open(Rt,577);R.write(Be,b,0,b.length,0,q),R.close(Be),R.chmod(Rt,it)}},createDevice(f,_,b,w){var it;var B=Le.join2(typeof f=="string"?f:R.getPath(f),_),q=Tr(!!b,!!w);(it=R.createDevice).major??(it.major=64);var J=R.makedev(R.createDevice.major++,0);return R.registerDevice(J,{open(Rt){Rt.seekable=!1},close(Rt){var Ft;(Ft=w==null?void 0:w.buffer)!=null&&Ft.length&&w(10)},read(Rt,Ft,ne,le,Be){for(var ce=0,be=0;be<le;be++){var xn;try{xn=b()}catch{throw new R.ErrnoError(29)}if(xn===void 0&&ce===0)throw new R.ErrnoError(6);if(xn==null)break;ce++,Ft[ne+be]=xn}return ce&&(Rt.node.atime=Date.now()),ce},write(Rt,Ft,ne,le,Be){for(var ce=0;ce<le;ce++)try{w(Ft[ne+ce])}catch{throw new R.ErrnoError(29)}return le&&(Rt.node.mtime=Rt.node.ctime=Date.now()),ce}}),R.mkdev(B,q,J)},forceLoadFile(f){if(f.isDevice||f.isFolder||f.link||f.contents)return!0;if(typeof XMLHttpRequest<"u")throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");try{f.contents=A(f.url),f.usedBytes=f.contents.length}catch{throw new R.ErrnoError(29)}},createLazyFile(f,_,b,w,B){class q{constructor(){ua(this,"lengthKnown",!1);ua(this,"chunks",[])}get(ce){if(!(ce>this.length-1||ce<0)){var be=ce%this.chunkSize,xn=ce/this.chunkSize|0;return this.getter(xn)[be]}}setDataGetter(ce){this.getter=ce}cacheLength(){var ce=new XMLHttpRequest;if(ce.open("HEAD",b,!1),ce.send(null),!(ce.status>=200&&ce.status<300||ce.status===304))throw new Error("Couldn't load "+b+". Status: "+ce.status);var be=Number(ce.getResponseHeader("Content-length")),xn,Zn=(xn=ce.getResponseHeader("Accept-Ranges"))&&xn==="bytes",Kn=(xn=ce.getResponseHeader("Content-Encoding"))&&xn==="gzip",ri=1024*1024;Zn||(ri=be);var pi=(Ai,aa)=>{if(Ai>aa)throw new Error("invalid range ("+Ai+", "+aa+") or no bytes requested!");if(aa>be-1)throw new Error("only "+be+" bytes available! programmer error!");var Un=new XMLHttpRequest;if(Un.open("GET",b,!1),be!==ri&&Un.setRequestHeader("Range","bytes="+Ai+"-"+aa),Un.responseType="arraybuffer",Un.overrideMimeType&&Un.overrideMimeType("text/plain; charset=x-user-defined"),Un.send(null),!(Un.status>=200&&Un.status<300||Un.status===304))throw new Error("Couldn't load "+b+". Status: "+Un.status);return Un.response!==void 0?new Uint8Array(Un.response||[]):gn(Un.responseText||"")},Ar=this;Ar.setDataGetter(Ai=>{var aa=Ai*ri,Un=(Ai+1)*ri-1;if(Un=Math.min(Un,be-1),typeof Ar.chunks[Ai]>"u"&&(Ar.chunks[Ai]=pi(aa,Un)),typeof Ar.chunks[Ai]>"u")throw new Error("doXHR failed!");return Ar.chunks[Ai]}),(Kn||!be)&&(ri=be=1,be=this.getter(0).length,ri=be,S("LazyFiles on gzip forces download of the whole file when length is accessed")),this._length=be,this._chunkSize=ri,this.lengthKnown=!0}get length(){return this.lengthKnown||this.cacheLength(),this._length}get chunkSize(){return this.lengthKnown||this.cacheLength(),this._chunkSize}}if(typeof XMLHttpRequest<"u"){if(!p)throw"Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";var J=new q,it={isDevice:!1,contents:J}}else var it={isDevice:!1,url:b};var Rt=R.createFile(f,_,it,w,B);it.contents?Rt.contents=it.contents:it.url&&(Rt.contents=null,Rt.url=it.url),Object.defineProperties(Rt,{usedBytes:{get:function(){return this.contents.length}}});var Ft={},ne=Object.keys(Rt.stream_ops);ne.forEach(Be=>{var ce=Rt.stream_ops[Be];Ft[Be]=(...be)=>(R.forceLoadFile(Rt),ce(...be))});function le(Be,ce,be,xn,Zn){var Kn=Be.node.contents;if(Zn>=Kn.length)return 0;var ri=Math.min(Kn.length-Zn,xn);if(Kn.slice)for(var pi=0;pi<ri;pi++)ce[be+pi]=Kn[Zn+pi];else for(var pi=0;pi<ri;pi++)ce[be+pi]=Kn.get(Zn+pi);return ri}return Ft.read=(Be,ce,be,xn,Zn)=>(R.forceLoadFile(Rt),le(Be,ce,be,xn,Zn)),Ft.mmap=(Be,ce,be,xn,Zn)=>{R.forceLoadFile(Rt);var Kn=di();if(!Kn)throw new R.ErrnoError(48);return le(Be,I,Kn,ce,be),{ptr:Kn,allocated:!0}},Rt.stream_ops=Ft,Rt}};z(),Q(),R.createPreloadedFile=mu,R.staticInit(),oe.doesNotExistError=new R.ErrnoError(44),oe.doesNotExistError.stack="<generic error, no stack>",i.noExitRuntime&&i.noExitRuntime,i.preloadPlugins&&(os=i.preloadPlugins),i.print&&(S=i.print),i.printErr&&(G=i.printErr),i.wasmBinary&&(H=i.wasmBinary),i.arguments&&i.arguments,i.thisProgram&&i.thisProgram,i.FS=R;var Xa={j:Ye,f:jt,i:ue,g:qt,e:ye,c:ss,b:Hi,a:L,h:Gt,d:De,l:Ue,k:Fn},jn=await Me();jn.n;var xl=jn.p,cs=jn.q,ia=jn.r;function va(){if(rt>0){Tt=va;return}if($(),rt>0){Tt=va;return}function f(){var _;i.calledRun=!0,!j&&(Lt(),r(i),(_=i.onRuntimeInitialized)==null||_.call(i),F())}i.setStatus?(i.setStatus("Running..."),setTimeout(()=>{setTimeout(()=>i.setStatus(""),1),f()},1)):f()}function Gi(){if(i.preInit)for(typeof i.preInit=="function"&&(i.preInit=[i.preInit]);i.preInit.length>0;)i.preInit.shift()()}return Gi(),va(),t=c,t};function T1(){const o=E0(l=>l.position),[t,i]=bi.useState(),r=l=>{if(!l.target.files||l.target.files.length==0){i(void 0);return}const c=l.target.files[0];i(c)};return bi.useEffect(()=>{(async()=>{const c=await b1();console.log(c.add(2,3)),console.log(c.square(3))})()},[]),Zr.jsxs(Zr.Fragment,{children:[Zr.jsx("input",{type:"file",id:"obj-uploader",accept:".obj",onChange:r}),t&&Zr.jsx(S1,{file:t}),o&&Zr.jsx("span",{children:`${o.x.toFixed(5)},
                ${o.y.toFixed(5)},
                ${o.z.toFixed(5)}`})]})}CS.createRoot(document.getElementById("root")).render(Zr.jsx(T1,{}));

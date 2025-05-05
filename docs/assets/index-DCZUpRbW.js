var ES=Object.defineProperty;var MS=(s,t,i)=>t in s?ES(s,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):s[t]=i;var ha=(s,t,i)=>MS(s,typeof t!="symbol"?t+"":t,i);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var Xc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function y0(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var qh={exports:{}},yl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var k_;function bS(){if(k_)return yl;k_=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(r,l,c){var d=null;if(c!==void 0&&(d=""+c),l.key!==void 0&&(d=""+l.key),"key"in l){c={};for(var m in l)m!=="key"&&(c[m]=l[m])}else c=l;return l=c.ref,{$$typeof:s,type:r,key:d,ref:l!==void 0?l:null,props:c}}return yl.Fragment=t,yl.jsx=i,yl.jsxs=i,yl}var X_;function TS(){return X_||(X_=1,qh.exports=bS()),qh.exports}var Gn=TS(),Yh={exports:{}},Sl={},jh={exports:{}},Zh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var W_;function AS(){return W_||(W_=1,function(s){function t(X,st){var et=X.length;X.push(st);t:for(;0<et;){var Nt=et-1>>>1,B=X[Nt];if(0<l(B,st))X[Nt]=st,X[et]=B,et=Nt;else break t}}function i(X){return X.length===0?null:X[0]}function r(X){if(X.length===0)return null;var st=X[0],et=X.pop();if(et!==st){X[0]=et;t:for(var Nt=0,B=X.length,ct=B>>>1;Nt<ct;){var Rt=2*(Nt+1)-1,Ut=X[Rt],at=Rt+1,Tt=X[at];if(0>l(Ut,et))at<B&&0>l(Tt,Ut)?(X[Nt]=Tt,X[at]=et,Nt=at):(X[Nt]=Ut,X[Rt]=et,Nt=Rt);else if(at<B&&0>l(Tt,et))X[Nt]=Tt,X[at]=et,Nt=at;else break t}}return st}function l(X,st){var et=X.sortIndex-st.sortIndex;return et!==0?et:X.id-st.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var d=Date,m=d.now();s.unstable_now=function(){return d.now()-m}}var _=[],g=[],v=1,y=null,E=3,b=!1,w=!1,C=!1,M=!1,x=typeof setTimeout=="function"?setTimeout:null,V=typeof clearTimeout=="function"?clearTimeout:null,G=typeof setImmediate<"u"?setImmediate:null;function P(X){for(var st=i(g);st!==null;){if(st.callback===null)r(g);else if(st.startTime<=X)r(g),st.sortIndex=st.expirationTime,t(_,st);else break;st=i(g)}}function Y(X){if(C=!1,P(X),!w)if(i(_)!==null)w=!0,z||(z=!0,rt());else{var st=i(g);st!==null&&Mt(Y,st.startTime-X)}}var z=!1,k=-1,K=5,F=-1;function O(){return M?!0:!(s.unstable_now()-F<K)}function q(){if(M=!1,z){var X=s.unstable_now();F=X;var st=!0;try{t:{w=!1,C&&(C=!1,V(k),k=-1),b=!0;var et=E;try{e:{for(P(X),y=i(_);y!==null&&!(y.expirationTime>X&&O());){var Nt=y.callback;if(typeof Nt=="function"){y.callback=null,E=y.priorityLevel;var B=Nt(y.expirationTime<=X);if(X=s.unstable_now(),typeof B=="function"){y.callback=B,P(X),st=!0;break e}y===i(_)&&r(_),P(X)}else r(_);y=i(_)}if(y!==null)st=!0;else{var ct=i(g);ct!==null&&Mt(Y,ct.startTime-X),st=!1}}break t}finally{y=null,E=et,b=!1}st=void 0}}finally{st?rt():z=!1}}}var rt;if(typeof G=="function")rt=function(){G(q)};else if(typeof MessageChannel<"u"){var ht=new MessageChannel,_t=ht.port2;ht.port1.onmessage=q,rt=function(){_t.postMessage(null)}}else rt=function(){x(q,0)};function Mt(X,st){k=x(function(){X(s.unstable_now())},st)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(X){X.callback=null},s.unstable_forceFrameRate=function(X){0>X||125<X?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<X?Math.floor(1e3/X):5},s.unstable_getCurrentPriorityLevel=function(){return E},s.unstable_next=function(X){switch(E){case 1:case 2:case 3:var st=3;break;default:st=E}var et=E;E=st;try{return X()}finally{E=et}},s.unstable_requestPaint=function(){M=!0},s.unstable_runWithPriority=function(X,st){switch(X){case 1:case 2:case 3:case 4:case 5:break;default:X=3}var et=E;E=X;try{return st()}finally{E=et}},s.unstable_scheduleCallback=function(X,st,et){var Nt=s.unstable_now();switch(typeof et=="object"&&et!==null?(et=et.delay,et=typeof et=="number"&&0<et?Nt+et:Nt):et=Nt,X){case 1:var B=-1;break;case 2:B=250;break;case 5:B=1073741823;break;case 4:B=1e4;break;default:B=5e3}return B=et+B,X={id:v++,callback:st,priorityLevel:X,startTime:et,expirationTime:B,sortIndex:-1},et>Nt?(X.sortIndex=et,t(g,X),i(_)===null&&X===i(g)&&(C?(V(k),k=-1):C=!0,Mt(Y,et-Nt))):(X.sortIndex=B,t(_,X),w||b||(w=!0,z||(z=!0,rt()))),X},s.unstable_shouldYield=O,s.unstable_wrapCallback=function(X){var st=E;return function(){var et=E;E=st;try{return X.apply(this,arguments)}finally{E=et}}}}(Zh)),Zh}var q_;function RS(){return q_||(q_=1,jh.exports=AS()),jh.exports}var Kh={exports:{}},Me={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Y_;function wS(){if(Y_)return Me;Y_=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),d=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),_=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),y=Symbol.iterator;function E(B){return B===null||typeof B!="object"?null:(B=y&&B[y]||B["@@iterator"],typeof B=="function"?B:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,C={};function M(B,ct,Rt){this.props=B,this.context=ct,this.refs=C,this.updater=Rt||b}M.prototype.isReactComponent={},M.prototype.setState=function(B,ct){if(typeof B!="object"&&typeof B!="function"&&B!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,B,ct,"setState")},M.prototype.forceUpdate=function(B){this.updater.enqueueForceUpdate(this,B,"forceUpdate")};function x(){}x.prototype=M.prototype;function V(B,ct,Rt){this.props=B,this.context=ct,this.refs=C,this.updater=Rt||b}var G=V.prototype=new x;G.constructor=V,w(G,M.prototype),G.isPureReactComponent=!0;var P=Array.isArray,Y={H:null,A:null,T:null,S:null,V:null},z=Object.prototype.hasOwnProperty;function k(B,ct,Rt,Ut,at,Tt){return Rt=Tt.ref,{$$typeof:s,type:B,key:ct,ref:Rt!==void 0?Rt:null,props:Tt}}function K(B,ct){return k(B.type,ct,void 0,void 0,void 0,B.props)}function F(B){return typeof B=="object"&&B!==null&&B.$$typeof===s}function O(B){var ct={"=":"=0",":":"=2"};return"$"+B.replace(/[=:]/g,function(Rt){return ct[Rt]})}var q=/\/+/g;function rt(B,ct){return typeof B=="object"&&B!==null&&B.key!=null?O(""+B.key):ct.toString(36)}function ht(){}function _t(B){switch(B.status){case"fulfilled":return B.value;case"rejected":throw B.reason;default:switch(typeof B.status=="string"?B.then(ht,ht):(B.status="pending",B.then(function(ct){B.status==="pending"&&(B.status="fulfilled",B.value=ct)},function(ct){B.status==="pending"&&(B.status="rejected",B.reason=ct)})),B.status){case"fulfilled":return B.value;case"rejected":throw B.reason}}throw B}function Mt(B,ct,Rt,Ut,at){var Tt=typeof B;(Tt==="undefined"||Tt==="boolean")&&(B=null);var Lt=!1;if(B===null)Lt=!0;else switch(Tt){case"bigint":case"string":case"number":Lt=!0;break;case"object":switch(B.$$typeof){case s:case t:Lt=!0;break;case v:return Lt=B._init,Mt(Lt(B._payload),ct,Rt,Ut,at)}}if(Lt)return at=at(B),Lt=Ut===""?"."+rt(B,0):Ut,P(at)?(Rt="",Lt!=null&&(Rt=Lt.replace(q,"$&/")+"/"),Mt(at,ct,Rt,"",function(fe){return fe})):at!=null&&(F(at)&&(at=K(at,Rt+(at.key==null||B&&B.key===at.key?"":(""+at.key).replace(q,"$&/")+"/")+Lt)),ct.push(at)),1;Lt=0;var Ft=Ut===""?".":Ut+":";if(P(B))for(var Ot=0;Ot<B.length;Ot++)Ut=B[Ot],Tt=Ft+rt(Ut,Ot),Lt+=Mt(Ut,ct,Rt,Tt,at);else if(Ot=E(B),typeof Ot=="function")for(B=Ot.call(B),Ot=0;!(Ut=B.next()).done;)Ut=Ut.value,Tt=Ft+rt(Ut,Ot++),Lt+=Mt(Ut,ct,Rt,Tt,at);else if(Tt==="object"){if(typeof B.then=="function")return Mt(_t(B),ct,Rt,Ut,at);throw ct=String(B),Error("Objects are not valid as a React child (found: "+(ct==="[object Object]"?"object with keys {"+Object.keys(B).join(", ")+"}":ct)+"). If you meant to render a collection of children, use an array instead.")}return Lt}function X(B,ct,Rt){if(B==null)return B;var Ut=[],at=0;return Mt(B,Ut,"","",function(Tt){return ct.call(Rt,Tt,at++)}),Ut}function st(B){if(B._status===-1){var ct=B._result;ct=ct(),ct.then(function(Rt){(B._status===0||B._status===-1)&&(B._status=1,B._result=Rt)},function(Rt){(B._status===0||B._status===-1)&&(B._status=2,B._result=Rt)}),B._status===-1&&(B._status=0,B._result=ct)}if(B._status===1)return B._result.default;throw B._result}var et=typeof reportError=="function"?reportError:function(B){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ct=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof B=="object"&&B!==null&&typeof B.message=="string"?String(B.message):String(B),error:B});if(!window.dispatchEvent(ct))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",B);return}console.error(B)};function Nt(){}return Me.Children={map:X,forEach:function(B,ct,Rt){X(B,function(){ct.apply(this,arguments)},Rt)},count:function(B){var ct=0;return X(B,function(){ct++}),ct},toArray:function(B){return X(B,function(ct){return ct})||[]},only:function(B){if(!F(B))throw Error("React.Children.only expected to receive a single React element child.");return B}},Me.Component=M,Me.Fragment=i,Me.Profiler=l,Me.PureComponent=V,Me.StrictMode=r,Me.Suspense=_,Me.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Y,Me.__COMPILER_RUNTIME={__proto__:null,c:function(B){return Y.H.useMemoCache(B)}},Me.cache=function(B){return function(){return B.apply(null,arguments)}},Me.cloneElement=function(B,ct,Rt){if(B==null)throw Error("The argument must be a React element, but you passed "+B+".");var Ut=w({},B.props),at=B.key,Tt=void 0;if(ct!=null)for(Lt in ct.ref!==void 0&&(Tt=void 0),ct.key!==void 0&&(at=""+ct.key),ct)!z.call(ct,Lt)||Lt==="key"||Lt==="__self"||Lt==="__source"||Lt==="ref"&&ct.ref===void 0||(Ut[Lt]=ct[Lt]);var Lt=arguments.length-2;if(Lt===1)Ut.children=Rt;else if(1<Lt){for(var Ft=Array(Lt),Ot=0;Ot<Lt;Ot++)Ft[Ot]=arguments[Ot+2];Ut.children=Ft}return k(B.type,at,void 0,void 0,Tt,Ut)},Me.createContext=function(B){return B={$$typeof:d,_currentValue:B,_currentValue2:B,_threadCount:0,Provider:null,Consumer:null},B.Provider=B,B.Consumer={$$typeof:c,_context:B},B},Me.createElement=function(B,ct,Rt){var Ut,at={},Tt=null;if(ct!=null)for(Ut in ct.key!==void 0&&(Tt=""+ct.key),ct)z.call(ct,Ut)&&Ut!=="key"&&Ut!=="__self"&&Ut!=="__source"&&(at[Ut]=ct[Ut]);var Lt=arguments.length-2;if(Lt===1)at.children=Rt;else if(1<Lt){for(var Ft=Array(Lt),Ot=0;Ot<Lt;Ot++)Ft[Ot]=arguments[Ot+2];at.children=Ft}if(B&&B.defaultProps)for(Ut in Lt=B.defaultProps,Lt)at[Ut]===void 0&&(at[Ut]=Lt[Ut]);return k(B,Tt,void 0,void 0,null,at)},Me.createRef=function(){return{current:null}},Me.forwardRef=function(B){return{$$typeof:m,render:B}},Me.isValidElement=F,Me.lazy=function(B){return{$$typeof:v,_payload:{_status:-1,_result:B},_init:st}},Me.memo=function(B,ct){return{$$typeof:g,type:B,compare:ct===void 0?null:ct}},Me.startTransition=function(B){var ct=Y.T,Rt={};Y.T=Rt;try{var Ut=B(),at=Y.S;at!==null&&at(Rt,Ut),typeof Ut=="object"&&Ut!==null&&typeof Ut.then=="function"&&Ut.then(Nt,et)}catch(Tt){et(Tt)}finally{Y.T=ct}},Me.unstable_useCacheRefresh=function(){return Y.H.useCacheRefresh()},Me.use=function(B){return Y.H.use(B)},Me.useActionState=function(B,ct,Rt){return Y.H.useActionState(B,ct,Rt)},Me.useCallback=function(B,ct){return Y.H.useCallback(B,ct)},Me.useContext=function(B){return Y.H.useContext(B)},Me.useDebugValue=function(){},Me.useDeferredValue=function(B,ct){return Y.H.useDeferredValue(B,ct)},Me.useEffect=function(B,ct,Rt){var Ut=Y.H;if(typeof Rt=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return Ut.useEffect(B,ct)},Me.useId=function(){return Y.H.useId()},Me.useImperativeHandle=function(B,ct,Rt){return Y.H.useImperativeHandle(B,ct,Rt)},Me.useInsertionEffect=function(B,ct){return Y.H.useInsertionEffect(B,ct)},Me.useLayoutEffect=function(B,ct){return Y.H.useLayoutEffect(B,ct)},Me.useMemo=function(B,ct){return Y.H.useMemo(B,ct)},Me.useOptimistic=function(B,ct){return Y.H.useOptimistic(B,ct)},Me.useReducer=function(B,ct,Rt){return Y.H.useReducer(B,ct,Rt)},Me.useRef=function(B){return Y.H.useRef(B)},Me.useState=function(B){return Y.H.useState(B)},Me.useSyncExternalStore=function(B,ct,Rt){return Y.H.useSyncExternalStore(B,ct,Rt)},Me.useTransition=function(){return Y.H.useTransition()},Me.version="19.1.0",Me}var j_;function xp(){return j_||(j_=1,Kh.exports=wS()),Kh.exports}var Qh={exports:{}},ni={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Z_;function CS(){if(Z_)return ni;Z_=1;var s=xp();function t(_){var g="https://react.dev/errors/"+_;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)g+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+_+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(_,g,v){var y=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:y==null?null:""+y,children:_,containerInfo:g,implementation:v}}var d=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(_,g){if(_==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return ni.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,ni.createPortal=function(_,g){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(t(299));return c(_,g,null,v)},ni.flushSync=function(_){var g=d.T,v=r.p;try{if(d.T=null,r.p=2,_)return _()}finally{d.T=g,r.p=v,r.d.f()}},ni.preconnect=function(_,g){typeof _=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,r.d.C(_,g))},ni.prefetchDNS=function(_){typeof _=="string"&&r.d.D(_)},ni.preinit=function(_,g){if(typeof _=="string"&&g&&typeof g.as=="string"){var v=g.as,y=m(v,g.crossOrigin),E=typeof g.integrity=="string"?g.integrity:void 0,b=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;v==="style"?r.d.S(_,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:y,integrity:E,fetchPriority:b}):v==="script"&&r.d.X(_,{crossOrigin:y,integrity:E,fetchPriority:b,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},ni.preinitModule=function(_,g){if(typeof _=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var v=m(g.as,g.crossOrigin);r.d.M(_,{crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&r.d.M(_)},ni.preload=function(_,g){if(typeof _=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var v=g.as,y=m(v,g.crossOrigin);r.d.L(_,v,{crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},ni.preloadModule=function(_,g){if(typeof _=="string")if(g){var v=m(g.as,g.crossOrigin);r.d.m(_,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else r.d.m(_)},ni.requestFormReset=function(_){r.d.r(_)},ni.unstable_batchedUpdates=function(_,g){return _(g)},ni.useFormState=function(_,g,v){return d.H.useFormState(_,g,v)},ni.useFormStatus=function(){return d.H.useHostTransitionStatus()},ni.version="19.1.0",ni}var K_;function DS(){if(K_)return Qh.exports;K_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),Qh.exports=CS(),Qh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Q_;function US(){if(Q_)return Sl;Q_=1;var s=RS(),t=xp(),i=DS();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function d(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(r(188))}function _(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(r(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var h=u.alternate;if(h===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===h.child){for(h=u.child;h;){if(h===a)return m(u),e;if(h===o)return m(u),n;h=h.sibling}throw Error(r(188))}if(a.return!==o.return)a=u,o=h;else{for(var T=!1,D=u.child;D;){if(D===a){T=!0,a=u,o=h;break}if(D===o){T=!0,o=u,a=h;break}D=D.sibling}if(!T){for(D=h.child;D;){if(D===a){T=!0,a=h,o=u;break}if(D===o){T=!0,o=h,a=u;break}D=D.sibling}if(!T)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:n}function g(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=g(e),n!==null)return n;e=e.sibling}return null}var v=Object.assign,y=Symbol.for("react.element"),E=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),w=Symbol.for("react.fragment"),C=Symbol.for("react.strict_mode"),M=Symbol.for("react.profiler"),x=Symbol.for("react.provider"),V=Symbol.for("react.consumer"),G=Symbol.for("react.context"),P=Symbol.for("react.forward_ref"),Y=Symbol.for("react.suspense"),z=Symbol.for("react.suspense_list"),k=Symbol.for("react.memo"),K=Symbol.for("react.lazy"),F=Symbol.for("react.activity"),O=Symbol.for("react.memo_cache_sentinel"),q=Symbol.iterator;function rt(e){return e===null||typeof e!="object"?null:(e=q&&e[q]||e["@@iterator"],typeof e=="function"?e:null)}var ht=Symbol.for("react.client.reference");function _t(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ht?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case w:return"Fragment";case M:return"Profiler";case C:return"StrictMode";case Y:return"Suspense";case z:return"SuspenseList";case F:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case b:return"Portal";case G:return(e.displayName||"Context")+".Provider";case V:return(e._context.displayName||"Context")+".Consumer";case P:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case k:return n=e.displayName||null,n!==null?n:_t(e.type)||"Memo";case K:n=e._payload,e=e._init;try{return _t(e(n))}catch{}}return null}var Mt=Array.isArray,X=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,st=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,et={pending:!1,data:null,method:null,action:null},Nt=[],B=-1;function ct(e){return{current:e}}function Rt(e){0>B||(e.current=Nt[B],Nt[B]=null,B--)}function Ut(e,n){B++,Nt[B]=e.current,e.current=n}var at=ct(null),Tt=ct(null),Lt=ct(null),Ft=ct(null);function Ot(e,n){switch(Ut(Lt,n),Ut(Tt,e),Ut(at,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?__(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=__(n),e=v_(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Rt(at),Ut(at,e)}function fe(){Rt(at),Rt(Tt),Rt(Lt)}function ie(e){e.memoizedState!==null&&Ut(Ft,e);var n=at.current,a=v_(n,e.type);n!==a&&(Ut(Tt,e),Ut(at,a))}function ke(e){Tt.current===e&&(Rt(at),Rt(Tt)),Ft.current===e&&(Rt(Ft),pl._currentValue=et)}var qe=Object.prototype.hasOwnProperty,Ae=s.unstable_scheduleCallback,j=s.unstable_cancelCallback,Xn=s.unstable_shouldYield,De=s.unstable_requestPaint,ve=s.unstable_now,ae=s.unstable_getCurrentPriorityLevel,We=s.unstable_ImmediatePriority,ee=s.unstable_UserBlockingPriority,I=s.unstable_NormalPriority,U=s.unstable_LowPriority,ft=s.unstable_IdlePriority,bt=s.log,St=s.unstable_setDisableYieldValue,xt=null,Xt=null;function It(e){if(typeof bt=="function"&&St(e),Xt&&typeof Xt.setStrictMode=="function")try{Xt.setStrictMode(xt,e)}catch{}}var Qt=Math.clz32?Math.clz32:jt,se=Math.log,Pt=Math.LN2;function jt(e){return e>>>=0,e===0?32:31-(se(e)/Pt|0)|0}var oe=256,ue=4194304;function qt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ye(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,h=e.suspendedLanes,T=e.pingedLanes;e=e.warmLanes;var D=o&134217727;return D!==0?(o=D&~h,o!==0?u=qt(o):(T&=D,T!==0?u=qt(T):a||(a=D&~e,a!==0&&(u=qt(a))))):(D=o&~h,D!==0?u=qt(D):T!==0?u=qt(T):a||(a=o&~e,a!==0&&(u=qt(a)))),u===0?0:n!==0&&n!==u&&(n&h)===0&&(h=u&-u,a=n&-n,h>=a||h===32&&(a&4194048)!==0)?n:u}function me(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Wt(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $(){var e=oe;return oe<<=1,(oe&4194048)===0&&(oe=256),e}function Gt(){var e=ue;return ue<<=1,(ue&62914560)===0&&(ue=4194304),e}function vt(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function wt(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Yt(e,n,a,o,u,h){var T=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var D=e.entanglements,W=e.expirationTimes,ut=e.hiddenUpdates;for(a=T&~a;0<a;){var Et=31-Qt(a),Dt=1<<Et;D[Et]=0,W[Et]=-1;var dt=ut[Et];if(dt!==null)for(ut[Et]=null,Et=0;Et<dt.length;Et++){var mt=dt[Et];mt!==null&&(mt.lane&=-536870913)}a&=~Dt}o!==0&&Vt(e,o,0),h!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=h&~(T&~n))}function Vt(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-Qt(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&4194090}function ge(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-Qt(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function R(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function cn(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Se(){var e=st.p;return e!==0?e:(e=window.event,e===void 0?32:B_(e.type))}function ri(e,n){var a=st.p;try{return st.p=e,n()}finally{st.p=a}}var En=Math.random().toString(36).slice(2),_n="__reactFiber$"+En,Rn="__reactProps$"+En,Qn="__reactContainer$"+En,va="__reactEvents$"+En,Dr="__reactListeners$"+En,Wn="__reactHandles$"+En,fi="__reactResources$"+En,Jn="__reactMarker$"+En;function yi(e){delete e[_n],delete e[Rn],delete e[va],delete e[Dr],delete e[Wn]}function qi(e){var n=e[_n];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Qn]||a[_n]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=E_(e);e!==null;){if(a=e[_n])return a;e=E_(e)}return n}e=a,a=e.parentNode}return null}function hn(e){if(e=e[_n]||e[Qn]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function ya(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function wn(e){var n=e[fi];return n||(n=e[fi]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function un(e){e[Jn]=!0}var gs=new Set,Si={};function Yi(e,n){N(e,n),N(e+"Capture",n)}function N(e,n){for(Si[e]=n,e=0;e<n.length;e++)gs.add(n[e])}var tt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),pt={},gt={};function it(e){return qe.call(gt,e)?!0:qe.call(pt,e)?!1:tt.test(e)?gt[e]=!0:(pt[e]=!0,!1)}function Ct(e,n,a){if(it(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function zt(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Ht(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}var Zt,de;function le(e){if(Zt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Zt=n&&n[1]||"",de=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Zt+e+de}var ne=!1;function Re(e,n){if(!e||ne)return"";ne=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var Dt=function(){throw Error()};if(Object.defineProperty(Dt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Dt,[])}catch(mt){var dt=mt}Reflect.construct(e,[],Dt)}else{try{Dt.call()}catch(mt){dt=mt}e.call(Dt.prototype)}}else{try{throw Error()}catch(mt){dt=mt}(Dt=e())&&typeof Dt.catch=="function"&&Dt.catch(function(){})}}catch(mt){if(mt&&dt&&typeof mt.stack=="string")return[mt.stack,dt.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=o.DetermineComponentFrameRoot(),T=h[0],D=h[1];if(T&&D){var W=T.split(`
`),ut=D.split(`
`);for(u=o=0;o<W.length&&!W[o].includes("DetermineComponentFrameRoot");)o++;for(;u<ut.length&&!ut[u].includes("DetermineComponentFrameRoot");)u++;if(o===W.length||u===ut.length)for(o=W.length-1,u=ut.length-1;1<=o&&0<=u&&W[o]!==ut[u];)u--;for(;1<=o&&0<=u;o--,u--)if(W[o]!==ut[u]){if(o!==1||u!==1)do if(o--,u--,0>u||W[o]!==ut[u]){var Et=`
`+W[o].replace(" at new "," at ");return e.displayName&&Et.includes("<anonymous>")&&(Et=Et.replace("<anonymous>",e.displayName)),Et}while(1<=o&&0<=u);break}}}finally{ne=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?le(a):""}function Be(e){switch(e.tag){case 26:case 27:case 5:return le(e.type);case 16:return le("Lazy");case 13:return le("Suspense");case 19:return le("SuspenseList");case 0:case 15:return Re(e.type,!1);case 11:return Re(e.type.render,!1);case 1:return Re(e.type,!0);case 31:return le("Activity");default:return""}}function rn(e){try{var n="";do n+=Be(e),e=e.return;while(e);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function Le(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ne(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function ce(e){var n=Ne(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),o=""+e[n];if(!e.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var u=a.get,h=a.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(T){o=""+T,h.call(this,T)}}),Object.defineProperty(e,n,{enumerable:a.enumerable}),{getValue:function(){return o},setValue:function(T){o=""+T},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function sn(e){e._valueTracker||(e._valueTracker=ce(e))}function Ie(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=Ne(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function Cn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var sa=/[\n"\\]/g;function Ye(e){return e.replace(sa,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Li(e,n,a,o,u,h,T,D){e.name="",T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?e.type=T:e.removeAttribute("type"),n!=null?T==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+Le(n)):e.value!==""+Le(n)&&(e.value=""+Le(n)):T!=="submit"&&T!=="reset"||e.removeAttribute("value"),n!=null?Fn(e,T,Le(n)):a!=null?Fn(e,T,Le(a)):o!=null&&e.removeAttribute("value"),u==null&&h!=null&&(e.defaultChecked=!!h),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),D!=null&&typeof D!="function"&&typeof D!="symbol"&&typeof D!="boolean"?e.name=""+Le(D):e.removeAttribute("name")}function je(e,n,a,o,u,h,T,D){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(e.type=h),n!=null||a!=null){if(!(h!=="submit"&&h!=="reset"||n!=null))return;a=a!=null?""+Le(a):"",n=n!=null?""+Le(n):a,D||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=D?e.checked:!!o,e.defaultChecked=!!o,T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"&&(e.name=T)}function Fn(e,n,a){n==="number"&&Cn(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function vn(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+Le(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function yn(e,n,a){if(n!=null&&(n=""+Le(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+Le(a):""}function Dn(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(r(92));if(Mt(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=Le(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o)}function Ni(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var ji=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Bl(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||ji.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Il(e,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&Bl(e,u,o)}else for(var h in n)n.hasOwnProperty(h)&&Bl(e,h,n[h])}function bo(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ja=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Bu=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ur(e){return Bu.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var To=null;function Ao(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Za=null,Ka=null;function zl(e){var n=hn(e);if(n&&(e=n.stateNode)){var a=e[Rn]||null;t:switch(e=n.stateNode,n.type){case"input":if(Li(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Ye(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[Rn]||null;if(!u)throw Error(r(90));Li(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&Ie(o)}break t;case"textarea":yn(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&vn(e,!!a.multiple,n,!1)}}}var Ro=!1;function Hl(e,n,a){if(Ro)return e(n,a);Ro=!0;try{var o=e(n);return o}finally{if(Ro=!1,(Za!==null||Ka!==null)&&(Mc(),Za&&(n=Za,e=Ka,Ka=Za=null,zl(n),e)))for(n=0;n<e.length;n++)zl(e[n])}}function Lr(e,n){var a=e.stateNode;if(a===null)return null;var o=a[Rn]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var xi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_s=!1;if(xi)try{var Nr={};Object.defineProperty(Nr,"passive",{get:function(){_s=!0}}),window.addEventListener("test",Nr,Nr),window.removeEventListener("test",Nr,Nr)}catch{_s=!1}var Oi=null,wo=null,vs=null;function Co(){if(vs)return vs;var e,n=wo,a=n.length,o,u="value"in Oi?Oi.value:Oi.textContent,h=u.length;for(e=0;e<a&&n[e]===u[e];e++);var T=a-e;for(o=1;o<=T&&n[a-o]===u[h-o];o++);return vs=u.slice(e,1<o?1-o:void 0)}function Or(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function ys(){return!0}function Gl(){return!1}function $n(e){function n(a,o,u,h,T){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=h,this.target=T,this.currentTarget=null;for(var D in e)e.hasOwnProperty(D)&&(a=e[D],this[D]=a?a(h):h[D]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?ys:Gl,this.isPropagationStopped=Gl,this}return v(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ys)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ys)},persist:function(){},isPersistent:ys}),n}var Sa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ss=$n(Sa),Pr=v({},Sa,{view:0,detail:0}),Iu=$n(Pr),Do,Uo,Fr,xs=v({},Pr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Lo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Fr&&(Fr&&e.type==="mousemove"?(Do=e.screenX-Fr.screenX,Uo=e.screenY-Fr.screenY):Uo=Do=0,Fr=e),Do)},movementY:function(e){return"movementY"in e?e.movementY:Uo}}),Vl=$n(xs),zu=v({},xs,{dataTransfer:0}),Hu=$n(zu),Gu=v({},Pr,{relatedTarget:0}),Br=$n(Gu),Vu=v({},Sa,{animationName:0,elapsedTime:0,pseudoElement:0}),Ir=$n(Vu),ku=v({},Sa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Xu=$n(ku),Wu=v({},Sa,{data:0}),kl=$n(Wu),qu={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Yu={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ju={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Zu(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=ju[e])?!!n[e]:!1}function Lo(){return Zu}var Ku=v({},Pr,{key:function(e){if(e.key){var n=qu[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Or(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Yu[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Lo,charCode:function(e){return e.type==="keypress"?Or(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Or(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Qu=$n(Ku),Ju=v({},xs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Pi=$n(Ju),$u=v({},Pr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Lo}),Xl=$n($u),xa=v({},Sa,{propertyName:0,elapsedTime:0,pseudoElement:0}),No=$n(xa),tf=v({},xs,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),f=$n(tf),p=v({},Sa,{newState:0,oldState:0}),S=$n(p),A=[9,13,27,32],L=xi&&"CompositionEvent"in window,H=null;xi&&"documentMode"in document&&(H=document.documentMode);var Z=xi&&"TextEvent"in window&&!H,J=xi&&(!L||H&&8<H&&11>=H),yt=" ",Bt=!1;function Kt(e,n){switch(e){case"keyup":return A.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function te(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var xe=!1;function $t(e,n){switch(e){case"compositionend":return te(n);case"keypress":return n.which!==32?null:(Bt=!0,yt);case"textInput":return e=n.data,e===yt&&Bt?null:e;default:return null}}function Ee(e,n){if(xe)return e==="compositionend"||!L&&Kt(e,n)?(e=Co(),vs=wo=Oi=null,xe=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return J&&n.locale!=="ko"?null:n.data;default:return null}}var dn={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function si(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!dn[e.type]:n==="textarea"}function ti(e,n,a,o){Za?Ka?Ka.push(o):Ka=[o]:Za=o,n=Cc(n,"onChange"),0<n.length&&(a=new Ss("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var qn=null,Yn=null;function zr(e){h_(e,0)}function oi(e){var n=ya(e);if(Ie(n))return e}function Ea(e,n){if(e==="change")return n}var Mn=!1;if(xi){var ef;if(xi){var nf="oninput"in document;if(!nf){var Pp=document.createElement("div");Pp.setAttribute("oninput","return;"),nf=typeof Pp.oninput=="function"}ef=nf}else ef=!1;Mn=ef&&(!document.documentMode||9<document.documentMode)}function Fp(){qn&&(qn.detachEvent("onpropertychange",Bp),Yn=qn=null)}function Bp(e){if(e.propertyName==="value"&&oi(Yn)){var n=[];ti(n,Yn,e,Ao(e)),Hl(zr,n)}}function J0(e,n,a){e==="focusin"?(Fp(),qn=n,Yn=a,qn.attachEvent("onpropertychange",Bp)):e==="focusout"&&Fp()}function $0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return oi(Yn)}function ty(e,n){if(e==="click")return oi(n)}function ey(e,n){if(e==="input"||e==="change")return oi(n)}function ny(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Ei=typeof Object.is=="function"?Object.is:ny;function Oo(e,n){if(Ei(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!qe.call(n,u)||!Ei(e[u],n[u]))return!1}return!0}function Ip(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function zp(e,n){var a=Ip(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Ip(a)}}function Hp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Hp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Gp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Cn(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=Cn(e.document)}return n}function af(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var iy=xi&&"documentMode"in document&&11>=document.documentMode,Es=null,rf=null,Po=null,sf=!1;function Vp(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;sf||Es==null||Es!==Cn(o)||(o=Es,"selectionStart"in o&&af(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Po&&Oo(Po,o)||(Po=o,o=Cc(rf,"onSelect"),0<o.length&&(n=new Ss("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=Es)))}function Hr(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Ms={animationend:Hr("Animation","AnimationEnd"),animationiteration:Hr("Animation","AnimationIteration"),animationstart:Hr("Animation","AnimationStart"),transitionrun:Hr("Transition","TransitionRun"),transitionstart:Hr("Transition","TransitionStart"),transitioncancel:Hr("Transition","TransitionCancel"),transitionend:Hr("Transition","TransitionEnd")},of={},kp={};xi&&(kp=document.createElement("div").style,"AnimationEvent"in window||(delete Ms.animationend.animation,delete Ms.animationiteration.animation,delete Ms.animationstart.animation),"TransitionEvent"in window||delete Ms.transitionend.transition);function Gr(e){if(of[e])return of[e];if(!Ms[e])return e;var n=Ms[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in kp)return of[e]=n[a];return e}var Xp=Gr("animationend"),Wp=Gr("animationiteration"),qp=Gr("animationstart"),ay=Gr("transitionrun"),ry=Gr("transitionstart"),sy=Gr("transitioncancel"),Yp=Gr("transitionend"),jp=new Map,lf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");lf.push("scrollEnd");function Zi(e,n){jp.set(e,n),Yi(n,[e])}var Zp=new WeakMap;function Fi(e,n){if(typeof e=="object"&&e!==null){var a=Zp.get(e);return a!==void 0?a:(n={value:e,source:n,stack:rn(n)},Zp.set(e,n),n)}return{value:e,source:n,stack:rn(n)}}var Bi=[],bs=0,cf=0;function Wl(){for(var e=bs,n=cf=bs=0;n<e;){var a=Bi[n];Bi[n++]=null;var o=Bi[n];Bi[n++]=null;var u=Bi[n];Bi[n++]=null;var h=Bi[n];if(Bi[n++]=null,o!==null&&u!==null){var T=o.pending;T===null?u.next=u:(u.next=T.next,T.next=u),o.pending=u}h!==0&&Kp(a,u,h)}}function ql(e,n,a,o){Bi[bs++]=e,Bi[bs++]=n,Bi[bs++]=a,Bi[bs++]=o,cf|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function uf(e,n,a,o){return ql(e,n,a,o),Yl(e)}function Ts(e,n){return ql(e,null,null,n),Yl(e)}function Kp(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,h=e.return;h!==null;)h.childLanes|=a,o=h.alternate,o!==null&&(o.childLanes|=a),h.tag===22&&(e=h.stateNode,e===null||e._visibility&1||(u=!0)),e=h,h=h.return;return e.tag===3?(h=e.stateNode,u&&n!==null&&(u=31-Qt(a),e=h.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),h):null}function Yl(e){if(50<sl)throw sl=0,gh=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var As={};function oy(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Mi(e,n,a,o){return new oy(e,n,a,o)}function ff(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ma(e,n){var a=e.alternate;return a===null?(a=Mi(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Qp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function jl(e,n,a,o,u,h){var T=0;if(o=e,typeof e=="function")ff(e)&&(T=1);else if(typeof e=="string")T=cS(e,a,at.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case F:return e=Mi(31,a,n,u),e.elementType=F,e.lanes=h,e;case w:return Vr(a.children,u,h,n);case C:T=8,u|=24;break;case M:return e=Mi(12,a,n,u|2),e.elementType=M,e.lanes=h,e;case Y:return e=Mi(13,a,n,u),e.elementType=Y,e.lanes=h,e;case z:return e=Mi(19,a,n,u),e.elementType=z,e.lanes=h,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case x:case G:T=10;break t;case V:T=9;break t;case P:T=11;break t;case k:T=14;break t;case K:T=16,o=null;break t}T=29,a=Error(r(130,e===null?"null":typeof e,"")),o=null}return n=Mi(T,a,n,u),n.elementType=e,n.type=o,n.lanes=h,n}function Vr(e,n,a,o){return e=Mi(7,e,o,n),e.lanes=a,e}function hf(e,n,a){return e=Mi(6,e,null,n),e.lanes=a,e}function df(e,n,a){return n=Mi(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Rs=[],ws=0,Zl=null,Kl=0,Ii=[],zi=0,kr=null,ba=1,Ta="";function Xr(e,n){Rs[ws++]=Kl,Rs[ws++]=Zl,Zl=e,Kl=n}function Jp(e,n,a){Ii[zi++]=ba,Ii[zi++]=Ta,Ii[zi++]=kr,kr=e;var o=ba;e=Ta;var u=32-Qt(o)-1;o&=~(1<<u),a+=1;var h=32-Qt(n)+u;if(30<h){var T=u-u%5;h=(o&(1<<T)-1).toString(32),o>>=T,u-=T,ba=1<<32-Qt(n)+u|a<<u|o,Ta=h+e}else ba=1<<h|a<<u|o,Ta=e}function pf(e){e.return!==null&&(Xr(e,1),Jp(e,1,0))}function mf(e){for(;e===Zl;)Zl=Rs[--ws],Rs[ws]=null,Kl=Rs[--ws],Rs[ws]=null;for(;e===kr;)kr=Ii[--zi],Ii[zi]=null,Ta=Ii[--zi],Ii[zi]=null,ba=Ii[--zi],Ii[zi]=null}var li=null,pn=null,Xe=!1,Wr=null,oa=!1,gf=Error(r(519));function qr(e){var n=Error(r(418,""));throw Io(Fi(n,e)),gf}function $p(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[_n]=e,n[Rn]=o,a){case"dialog":Pe("cancel",n),Pe("close",n);break;case"iframe":case"object":case"embed":Pe("load",n);break;case"video":case"audio":for(a=0;a<ll.length;a++)Pe(ll[a],n);break;case"source":Pe("error",n);break;case"img":case"image":case"link":Pe("error",n),Pe("load",n);break;case"details":Pe("toggle",n);break;case"input":Pe("invalid",n),je(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),sn(n);break;case"select":Pe("invalid",n);break;case"textarea":Pe("invalid",n),Dn(n,o.value,o.defaultValue,o.children),sn(n)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||g_(n.textContent,a)?(o.popover!=null&&(Pe("beforetoggle",n),Pe("toggle",n)),o.onScroll!=null&&Pe("scroll",n),o.onScrollEnd!=null&&Pe("scrollend",n),o.onClick!=null&&(n.onclick=Dc),n=!0):n=!1,n||qr(e)}function tm(e){for(li=e.return;li;)switch(li.tag){case 5:case 13:oa=!1;return;case 27:case 3:oa=!0;return;default:li=li.return}}function Fo(e){if(e!==li)return!1;if(!Xe)return tm(e),Xe=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Lh(e.type,e.memoizedProps)),a=!a),a&&pn&&qr(e),tm(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));t:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(n===0){pn=Qi(e.nextSibling);break t}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;e=e.nextSibling}pn=null}}else n===27?(n=pn,hr(e.type)?(e=Fh,Fh=null,pn=e):pn=n):pn=li?Qi(e.stateNode.nextSibling):null;return!0}function Bo(){pn=li=null,Xe=!1}function em(){var e=Wr;return e!==null&&(pi===null?pi=e:pi.push.apply(pi,e),Wr=null),e}function Io(e){Wr===null?Wr=[e]:Wr.push(e)}var _f=ct(null),Yr=null,Aa=null;function Qa(e,n,a){Ut(_f,n._currentValue),n._currentValue=a}function Ra(e){e._currentValue=_f.current,Rt(_f)}function vf(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function yf(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var h=u.dependencies;if(h!==null){var T=u.child;h=h.firstContext;t:for(;h!==null;){var D=h;h=u;for(var W=0;W<n.length;W++)if(D.context===n[W]){h.lanes|=a,D=h.alternate,D!==null&&(D.lanes|=a),vf(h.return,a,e),o||(T=null);break t}h=D.next}}else if(u.tag===18){if(T=u.return,T===null)throw Error(r(341));T.lanes|=a,h=T.alternate,h!==null&&(h.lanes|=a),vf(T,a,e),T=null}else T=u.child;if(T!==null)T.return=u;else for(T=u;T!==null;){if(T===e){T=null;break}if(u=T.sibling,u!==null){u.return=T.return,T=u;break}T=T.return}u=T}}function zo(e,n,a,o){e=null;for(var u=n,h=!1;u!==null;){if(!h){if((u.flags&524288)!==0)h=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var T=u.alternate;if(T===null)throw Error(r(387));if(T=T.memoizedProps,T!==null){var D=u.type;Ei(u.pendingProps.value,T.value)||(e!==null?e.push(D):e=[D])}}else if(u===Ft.current){if(T=u.alternate,T===null)throw Error(r(387));T.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(pl):e=[pl])}u=u.return}e!==null&&yf(n,e,a,o),n.flags|=262144}function Ql(e){for(e=e.firstContext;e!==null;){if(!Ei(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function jr(e){Yr=e,Aa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ei(e){return nm(Yr,e)}function Jl(e,n){return Yr===null&&jr(e),nm(e,n)}function nm(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Aa===null){if(e===null)throw Error(r(308));Aa=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Aa=Aa.next=n;return a}var ly=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},cy=s.unstable_scheduleCallback,uy=s.unstable_NormalPriority,Un={$$typeof:G,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Sf(){return{controller:new ly,data:new Map,refCount:0}}function Ho(e){e.refCount--,e.refCount===0&&cy(uy,function(){e.controller.abort()})}var Go=null,xf=0,Cs=0,Ds=null;function fy(e,n){if(Go===null){var a=Go=[];xf=0,Cs=Mh(),Ds={status:"pending",value:void 0,then:function(o){a.push(o)}}}return xf++,n.then(im,im),n}function im(){if(--xf===0&&Go!==null){Ds!==null&&(Ds.status="fulfilled");var e=Go;Go=null,Cs=0,Ds=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function hy(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var am=X.S;X.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&fy(e,n),am!==null&&am(e,n)};var Zr=ct(null);function Ef(){var e=Zr.current;return e!==null?e:an.pooledCache}function $l(e,n){n===null?Ut(Zr,Zr.current):Ut(Zr,n.pool)}function rm(){var e=Ef();return e===null?null:{parent:Un._currentValue,pool:e}}var Vo=Error(r(460)),sm=Error(r(474)),tc=Error(r(542)),Mf={then:function(){}};function om(e){return e=e.status,e==="fulfilled"||e==="rejected"}function ec(){}function lm(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(ec,ec),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,um(e),e;default:if(typeof n.status=="string")n.then(ec,ec);else{if(e=an,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,um(e),e}throw ko=n,Vo}}var ko=null;function cm(){if(ko===null)throw Error(r(459));var e=ko;return ko=null,e}function um(e){if(e===Vo||e===tc)throw Error(r(483))}var Ja=!1;function bf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Tf(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function $a(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function tr(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Ze&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=Yl(e),Kp(e,null,a),n}return ql(e,o,n,a),Yl(e)}function Xo(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,ge(e,a)}}function Af(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,h=null;if(a=a.firstBaseUpdate,a!==null){do{var T={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};h===null?u=h=T:h=h.next=T,a=a.next}while(a!==null);h===null?u=h=n:h=h.next=n}else u=h=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:h,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Rf=!1;function Wo(){if(Rf){var e=Ds;if(e!==null)throw e}}function qo(e,n,a,o){Rf=!1;var u=e.updateQueue;Ja=!1;var h=u.firstBaseUpdate,T=u.lastBaseUpdate,D=u.shared.pending;if(D!==null){u.shared.pending=null;var W=D,ut=W.next;W.next=null,T===null?h=ut:T.next=ut,T=W;var Et=e.alternate;Et!==null&&(Et=Et.updateQueue,D=Et.lastBaseUpdate,D!==T&&(D===null?Et.firstBaseUpdate=ut:D.next=ut,Et.lastBaseUpdate=W))}if(h!==null){var Dt=u.baseState;T=0,Et=ut=W=null,D=h;do{var dt=D.lane&-536870913,mt=dt!==D.lane;if(mt?(He&dt)===dt:(o&dt)===dt){dt!==0&&dt===Cs&&(Rf=!0),Et!==null&&(Et=Et.next={lane:0,tag:D.tag,payload:D.payload,callback:null,next:null});t:{var _e=e,he=D;dt=n;var $e=a;switch(he.tag){case 1:if(_e=he.payload,typeof _e=="function"){Dt=_e.call($e,Dt,dt);break t}Dt=_e;break t;case 3:_e.flags=_e.flags&-65537|128;case 0:if(_e=he.payload,dt=typeof _e=="function"?_e.call($e,Dt,dt):_e,dt==null)break t;Dt=v({},Dt,dt);break t;case 2:Ja=!0}}dt=D.callback,dt!==null&&(e.flags|=64,mt&&(e.flags|=8192),mt=u.callbacks,mt===null?u.callbacks=[dt]:mt.push(dt))}else mt={lane:dt,tag:D.tag,payload:D.payload,callback:D.callback,next:null},Et===null?(ut=Et=mt,W=Dt):Et=Et.next=mt,T|=dt;if(D=D.next,D===null){if(D=u.shared.pending,D===null)break;mt=D,D=mt.next,mt.next=null,u.lastBaseUpdate=mt,u.shared.pending=null}}while(!0);Et===null&&(W=Dt),u.baseState=W,u.firstBaseUpdate=ut,u.lastBaseUpdate=Et,h===null&&(u.shared.lanes=0),lr|=T,e.lanes=T,e.memoizedState=Dt}}function fm(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function hm(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)fm(a[e],n)}var Us=ct(null),nc=ct(0);function dm(e,n){e=Oa,Ut(nc,e),Ut(Us,n),Oa=e|n.baseLanes}function wf(){Ut(nc,Oa),Ut(Us,Us.current)}function Cf(){Oa=nc.current,Rt(Us),Rt(nc)}var er=0,Ce=null,Qe=null,bn=null,ic=!1,Ls=!1,Kr=!1,ac=0,Yo=0,Ns=null,dy=0;function Sn(){throw Error(r(321))}function Df(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Ei(e[a],n[a]))return!1;return!0}function Uf(e,n,a,o,u,h){return er=h,Ce=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,X.H=e===null||e.memoizedState===null?Km:Qm,Kr=!1,h=a(o,u),Kr=!1,Ls&&(h=mm(n,a,o,u)),pm(e),h}function pm(e){X.H=uc;var n=Qe!==null&&Qe.next!==null;if(er=0,bn=Qe=Ce=null,ic=!1,Yo=0,Ns=null,n)throw Error(r(300));e===null||Bn||(e=e.dependencies,e!==null&&Ql(e)&&(Bn=!0))}function mm(e,n,a,o){Ce=e;var u=0;do{if(Ls&&(Ns=null),Yo=0,Ls=!1,25<=u)throw Error(r(301));if(u+=1,bn=Qe=null,e.updateQueue!=null){var h=e.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}X.H=Sy,h=n(a,o)}while(Ls);return h}function py(){var e=X.H,n=e.useState()[0];return n=typeof n.then=="function"?jo(n):n,e=e.useState()[0],(Qe!==null?Qe.memoizedState:null)!==e&&(Ce.flags|=1024),n}function Lf(){var e=ac!==0;return ac=0,e}function Nf(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Of(e){if(ic){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}ic=!1}er=0,bn=Qe=Ce=null,Ls=!1,Yo=ac=0,Ns=null}function hi(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return bn===null?Ce.memoizedState=bn=e:bn=bn.next=e,bn}function Tn(){if(Qe===null){var e=Ce.alternate;e=e!==null?e.memoizedState:null}else e=Qe.next;var n=bn===null?Ce.memoizedState:bn.next;if(n!==null)bn=n,Qe=e;else{if(e===null)throw Ce.alternate===null?Error(r(467)):Error(r(310));Qe=e,e={memoizedState:Qe.memoizedState,baseState:Qe.baseState,baseQueue:Qe.baseQueue,queue:Qe.queue,next:null},bn===null?Ce.memoizedState=bn=e:bn=bn.next=e}return bn}function Pf(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function jo(e){var n=Yo;return Yo+=1,Ns===null&&(Ns=[]),e=lm(Ns,e,n),n=Ce,(bn===null?n.memoizedState:bn.next)===null&&(n=n.alternate,X.H=n===null||n.memoizedState===null?Km:Qm),e}function rc(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return jo(e);if(e.$$typeof===G)return ei(e)}throw Error(r(438,String(e)))}function Ff(e){var n=null,a=Ce.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=Ce.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Pf(),Ce.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=O;return n.index++,a}function wa(e,n){return typeof n=="function"?n(e):n}function sc(e){var n=Tn();return Bf(n,Qe,e)}function Bf(e,n,a){var o=e.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var u=e.baseQueue,h=o.pending;if(h!==null){if(u!==null){var T=u.next;u.next=h.next,h.next=T}n.baseQueue=u=h,o.pending=null}if(h=e.baseState,u===null)e.memoizedState=h;else{n=u.next;var D=T=null,W=null,ut=n,Et=!1;do{var Dt=ut.lane&-536870913;if(Dt!==ut.lane?(He&Dt)===Dt:(er&Dt)===Dt){var dt=ut.revertLane;if(dt===0)W!==null&&(W=W.next={lane:0,revertLane:0,action:ut.action,hasEagerState:ut.hasEagerState,eagerState:ut.eagerState,next:null}),Dt===Cs&&(Et=!0);else if((er&dt)===dt){ut=ut.next,dt===Cs&&(Et=!0);continue}else Dt={lane:0,revertLane:ut.revertLane,action:ut.action,hasEagerState:ut.hasEagerState,eagerState:ut.eagerState,next:null},W===null?(D=W=Dt,T=h):W=W.next=Dt,Ce.lanes|=dt,lr|=dt;Dt=ut.action,Kr&&a(h,Dt),h=ut.hasEagerState?ut.eagerState:a(h,Dt)}else dt={lane:Dt,revertLane:ut.revertLane,action:ut.action,hasEagerState:ut.hasEagerState,eagerState:ut.eagerState,next:null},W===null?(D=W=dt,T=h):W=W.next=dt,Ce.lanes|=Dt,lr|=Dt;ut=ut.next}while(ut!==null&&ut!==n);if(W===null?T=h:W.next=D,!Ei(h,e.memoizedState)&&(Bn=!0,Et&&(a=Ds,a!==null)))throw a;e.memoizedState=h,e.baseState=T,e.baseQueue=W,o.lastRenderedState=h}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function If(e){var n=Tn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,h=n.memoizedState;if(u!==null){a.pending=null;var T=u=u.next;do h=e(h,T.action),T=T.next;while(T!==u);Ei(h,n.memoizedState)||(Bn=!0),n.memoizedState=h,n.baseQueue===null&&(n.baseState=h),a.lastRenderedState=h}return[h,o]}function gm(e,n,a){var o=Ce,u=Tn(),h=Xe;if(h){if(a===void 0)throw Error(r(407));a=a()}else a=n();var T=!Ei((Qe||u).memoizedState,a);T&&(u.memoizedState=a,Bn=!0),u=u.queue;var D=ym.bind(null,o,u,e);if(Zo(2048,8,D,[e]),u.getSnapshot!==n||T||bn!==null&&bn.memoizedState.tag&1){if(o.flags|=2048,Os(9,oc(),vm.bind(null,o,u,a,n),null),an===null)throw Error(r(349));h||(er&124)!==0||_m(o,n,a)}return a}function _m(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=Ce.updateQueue,n===null?(n=Pf(),Ce.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function vm(e,n,a,o){n.value=a,n.getSnapshot=o,Sm(n)&&xm(e)}function ym(e,n,a){return a(function(){Sm(n)&&xm(e)})}function Sm(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Ei(e,a)}catch{return!0}}function xm(e){var n=Ts(e,2);n!==null&&wi(n,e,2)}function zf(e){var n=hi();if(typeof e=="function"){var a=e;if(e=a(),Kr){It(!0);try{a()}finally{It(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:wa,lastRenderedState:e},n}function Em(e,n,a,o){return e.baseState=a,Bf(e,Qe,typeof o=="function"?o:wa)}function my(e,n,a,o,u){if(cc(e))throw Error(r(485));if(e=n.action,e!==null){var h={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(T){h.listeners.push(T)}};X.T!==null?a(!0):h.isTransition=!1,o(h),a=n.pending,a===null?(h.next=n.pending=h,Mm(n,h)):(h.next=a.next,n.pending=a.next=h)}}function Mm(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var h=X.T,T={};X.T=T;try{var D=a(u,o),W=X.S;W!==null&&W(T,D),bm(e,n,D)}catch(ut){Hf(e,n,ut)}finally{X.T=h}}else try{h=a(u,o),bm(e,n,h)}catch(ut){Hf(e,n,ut)}}function bm(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Tm(e,n,o)},function(o){return Hf(e,n,o)}):Tm(e,n,a)}function Tm(e,n,a){n.status="fulfilled",n.value=a,Am(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Mm(e,a)))}function Hf(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Am(n),n=n.next;while(n!==o)}e.action=null}function Am(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Rm(e,n){return n}function wm(e,n){if(Xe){var a=an.formState;if(a!==null){t:{var o=Ce;if(Xe){if(pn){e:{for(var u=pn,h=oa;u.nodeType!==8;){if(!h){u=null;break e}if(u=Qi(u.nextSibling),u===null){u=null;break e}}h=u.data,u=h==="F!"||h==="F"?u:null}if(u){pn=Qi(u.nextSibling),o=u.data==="F!";break t}}qr(o)}o=!1}o&&(n=a[0])}}return a=hi(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Rm,lastRenderedState:n},a.queue=o,a=Ym.bind(null,Ce,o),o.dispatch=a,o=zf(!1),h=Wf.bind(null,Ce,!1,o.queue),o=hi(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=my.bind(null,Ce,u,h,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function Cm(e){var n=Tn();return Dm(n,Qe,e)}function Dm(e,n,a){if(n=Bf(e,n,Rm)[0],e=sc(wa)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=jo(n)}catch(T){throw T===Vo?tc:T}else o=n;n=Tn();var u=n.queue,h=u.dispatch;return a!==n.memoizedState&&(Ce.flags|=2048,Os(9,oc(),gy.bind(null,u,a),null)),[o,h,e]}function gy(e,n){e.action=n}function Um(e){var n=Tn(),a=Qe;if(a!==null)return Dm(n,a,e);Tn(),n=n.memoizedState,a=Tn();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function Os(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=Ce.updateQueue,n===null&&(n=Pf(),Ce.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function oc(){return{destroy:void 0,resource:void 0}}function Lm(){return Tn().memoizedState}function lc(e,n,a,o){var u=hi();o=o===void 0?null:o,Ce.flags|=e,u.memoizedState=Os(1|n,oc(),a,o)}function Zo(e,n,a,o){var u=Tn();o=o===void 0?null:o;var h=u.memoizedState.inst;Qe!==null&&o!==null&&Df(o,Qe.memoizedState.deps)?u.memoizedState=Os(n,h,a,o):(Ce.flags|=e,u.memoizedState=Os(1|n,h,a,o))}function Nm(e,n){lc(8390656,8,e,n)}function Om(e,n){Zo(2048,8,e,n)}function Pm(e,n){return Zo(4,2,e,n)}function Fm(e,n){return Zo(4,4,e,n)}function Bm(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Im(e,n,a){a=a!=null?a.concat([e]):null,Zo(4,4,Bm.bind(null,n,e),a)}function Gf(){}function zm(e,n){var a=Tn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Df(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function Hm(e,n){var a=Tn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Df(n,o[1]))return o[0];if(o=e(),Kr){It(!0);try{e()}finally{It(!1)}}return a.memoizedState=[o,n],o}function Vf(e,n,a){return a===void 0||(er&1073741824)!==0?e.memoizedState=n:(e.memoizedState=a,e=kg(),Ce.lanes|=e,lr|=e,a)}function Gm(e,n,a,o){return Ei(a,n)?a:Us.current!==null?(e=Vf(e,a,o),Ei(e,n)||(Bn=!0),e):(er&42)===0?(Bn=!0,e.memoizedState=a):(e=kg(),Ce.lanes|=e,lr|=e,n)}function Vm(e,n,a,o,u){var h=st.p;st.p=h!==0&&8>h?h:8;var T=X.T,D={};X.T=D,Wf(e,!1,n,a);try{var W=u(),ut=X.S;if(ut!==null&&ut(D,W),W!==null&&typeof W=="object"&&typeof W.then=="function"){var Et=hy(W,o);Ko(e,n,Et,Ri(e))}else Ko(e,n,o,Ri(e))}catch(Dt){Ko(e,n,{then:function(){},status:"rejected",reason:Dt},Ri())}finally{st.p=h,X.T=T}}function _y(){}function kf(e,n,a,o){if(e.tag!==5)throw Error(r(476));var u=km(e).queue;Vm(e,u,n,et,a===null?_y:function(){return Xm(e),a(o)})}function km(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:et,baseState:et,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:wa,lastRenderedState:et},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:wa,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Xm(e){var n=km(e).next.queue;Ko(e,n,{},Ri())}function Xf(){return ei(pl)}function Wm(){return Tn().memoizedState}function qm(){return Tn().memoizedState}function vy(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=Ri();e=$a(a);var o=tr(n,e,a);o!==null&&(wi(o,n,a),Xo(o,n,a)),n={cache:Sf()},e.payload=n;return}n=n.return}}function yy(e,n,a){var o=Ri();a={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},cc(e)?jm(n,a):(a=uf(e,n,a,o),a!==null&&(wi(a,e,o),Zm(a,n,o)))}function Ym(e,n,a){var o=Ri();Ko(e,n,a,o)}function Ko(e,n,a,o){var u={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(cc(e))jm(n,u);else{var h=e.alternate;if(e.lanes===0&&(h===null||h.lanes===0)&&(h=n.lastRenderedReducer,h!==null))try{var T=n.lastRenderedState,D=h(T,a);if(u.hasEagerState=!0,u.eagerState=D,Ei(D,T))return ql(e,n,u,0),an===null&&Wl(),!1}catch{}finally{}if(a=uf(e,n,u,o),a!==null)return wi(a,e,o),Zm(a,n,o),!0}return!1}function Wf(e,n,a,o){if(o={lane:2,revertLane:Mh(),action:o,hasEagerState:!1,eagerState:null,next:null},cc(e)){if(n)throw Error(r(479))}else n=uf(e,a,o,2),n!==null&&wi(n,e,2)}function cc(e){var n=e.alternate;return e===Ce||n!==null&&n===Ce}function jm(e,n){Ls=ic=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Zm(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,ge(e,a)}}var uc={readContext:ei,use:rc,useCallback:Sn,useContext:Sn,useEffect:Sn,useImperativeHandle:Sn,useLayoutEffect:Sn,useInsertionEffect:Sn,useMemo:Sn,useReducer:Sn,useRef:Sn,useState:Sn,useDebugValue:Sn,useDeferredValue:Sn,useTransition:Sn,useSyncExternalStore:Sn,useId:Sn,useHostTransitionStatus:Sn,useFormState:Sn,useActionState:Sn,useOptimistic:Sn,useMemoCache:Sn,useCacheRefresh:Sn},Km={readContext:ei,use:rc,useCallback:function(e,n){return hi().memoizedState=[e,n===void 0?null:n],e},useContext:ei,useEffect:Nm,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,lc(4194308,4,Bm.bind(null,n,e),a)},useLayoutEffect:function(e,n){return lc(4194308,4,e,n)},useInsertionEffect:function(e,n){lc(4,2,e,n)},useMemo:function(e,n){var a=hi();n=n===void 0?null:n;var o=e();if(Kr){It(!0);try{e()}finally{It(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=hi();if(a!==void 0){var u=a(n);if(Kr){It(!0);try{a(n)}finally{It(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=yy.bind(null,Ce,e),[o.memoizedState,e]},useRef:function(e){var n=hi();return e={current:e},n.memoizedState=e},useState:function(e){e=zf(e);var n=e.queue,a=Ym.bind(null,Ce,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Gf,useDeferredValue:function(e,n){var a=hi();return Vf(a,e,n)},useTransition:function(){var e=zf(!1);return e=Vm.bind(null,Ce,e.queue,!0,!1),hi().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=Ce,u=hi();if(Xe){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),an===null)throw Error(r(349));(He&124)!==0||_m(o,n,a)}u.memoizedState=a;var h={value:a,getSnapshot:n};return u.queue=h,Nm(ym.bind(null,o,h,e),[e]),o.flags|=2048,Os(9,oc(),vm.bind(null,o,h,a,n),null),a},useId:function(){var e=hi(),n=an.identifierPrefix;if(Xe){var a=Ta,o=ba;a=(o&~(1<<32-Qt(o)-1)).toString(32)+a,n="«"+n+"R"+a,a=ac++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=dy++,n="«"+n+"r"+a.toString(32)+"»";return e.memoizedState=n},useHostTransitionStatus:Xf,useFormState:wm,useActionState:wm,useOptimistic:function(e){var n=hi();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Wf.bind(null,Ce,!0,a),a.dispatch=n,[e,n]},useMemoCache:Ff,useCacheRefresh:function(){return hi().memoizedState=vy.bind(null,Ce)}},Qm={readContext:ei,use:rc,useCallback:zm,useContext:ei,useEffect:Om,useImperativeHandle:Im,useInsertionEffect:Pm,useLayoutEffect:Fm,useMemo:Hm,useReducer:sc,useRef:Lm,useState:function(){return sc(wa)},useDebugValue:Gf,useDeferredValue:function(e,n){var a=Tn();return Gm(a,Qe.memoizedState,e,n)},useTransition:function(){var e=sc(wa)[0],n=Tn().memoizedState;return[typeof e=="boolean"?e:jo(e),n]},useSyncExternalStore:gm,useId:Wm,useHostTransitionStatus:Xf,useFormState:Cm,useActionState:Cm,useOptimistic:function(e,n){var a=Tn();return Em(a,Qe,e,n)},useMemoCache:Ff,useCacheRefresh:qm},Sy={readContext:ei,use:rc,useCallback:zm,useContext:ei,useEffect:Om,useImperativeHandle:Im,useInsertionEffect:Pm,useLayoutEffect:Fm,useMemo:Hm,useReducer:If,useRef:Lm,useState:function(){return If(wa)},useDebugValue:Gf,useDeferredValue:function(e,n){var a=Tn();return Qe===null?Vf(a,e,n):Gm(a,Qe.memoizedState,e,n)},useTransition:function(){var e=If(wa)[0],n=Tn().memoizedState;return[typeof e=="boolean"?e:jo(e),n]},useSyncExternalStore:gm,useId:Wm,useHostTransitionStatus:Xf,useFormState:Um,useActionState:Um,useOptimistic:function(e,n){var a=Tn();return Qe!==null?Em(a,Qe,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Ff,useCacheRefresh:qm},Ps=null,Qo=0;function fc(e){var n=Qo;return Qo+=1,Ps===null&&(Ps=[]),lm(Ps,e,n)}function Jo(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function hc(e,n){throw n.$$typeof===y?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Jm(e){var n=e._init;return n(e._payload)}function $m(e){function n(nt,Q){if(e){var lt=nt.deletions;lt===null?(nt.deletions=[Q],nt.flags|=16):lt.push(Q)}}function a(nt,Q){if(!e)return null;for(;Q!==null;)n(nt,Q),Q=Q.sibling;return null}function o(nt){for(var Q=new Map;nt!==null;)nt.key!==null?Q.set(nt.key,nt):Q.set(nt.index,nt),nt=nt.sibling;return Q}function u(nt,Q){return nt=Ma(nt,Q),nt.index=0,nt.sibling=null,nt}function h(nt,Q,lt){return nt.index=lt,e?(lt=nt.alternate,lt!==null?(lt=lt.index,lt<Q?(nt.flags|=67108866,Q):lt):(nt.flags|=67108866,Q)):(nt.flags|=1048576,Q)}function T(nt){return e&&nt.alternate===null&&(nt.flags|=67108866),nt}function D(nt,Q,lt,At){return Q===null||Q.tag!==6?(Q=hf(lt,nt.mode,At),Q.return=nt,Q):(Q=u(Q,lt),Q.return=nt,Q)}function W(nt,Q,lt,At){var Jt=lt.type;return Jt===w?Et(nt,Q,lt.props.children,At,lt.key):Q!==null&&(Q.elementType===Jt||typeof Jt=="object"&&Jt!==null&&Jt.$$typeof===K&&Jm(Jt)===Q.type)?(Q=u(Q,lt.props),Jo(Q,lt),Q.return=nt,Q):(Q=jl(lt.type,lt.key,lt.props,null,nt.mode,At),Jo(Q,lt),Q.return=nt,Q)}function ut(nt,Q,lt,At){return Q===null||Q.tag!==4||Q.stateNode.containerInfo!==lt.containerInfo||Q.stateNode.implementation!==lt.implementation?(Q=df(lt,nt.mode,At),Q.return=nt,Q):(Q=u(Q,lt.children||[]),Q.return=nt,Q)}function Et(nt,Q,lt,At,Jt){return Q===null||Q.tag!==7?(Q=Vr(lt,nt.mode,At,Jt),Q.return=nt,Q):(Q=u(Q,lt),Q.return=nt,Q)}function Dt(nt,Q,lt){if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return Q=hf(""+Q,nt.mode,lt),Q.return=nt,Q;if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case E:return lt=jl(Q.type,Q.key,Q.props,null,nt.mode,lt),Jo(lt,Q),lt.return=nt,lt;case b:return Q=df(Q,nt.mode,lt),Q.return=nt,Q;case K:var At=Q._init;return Q=At(Q._payload),Dt(nt,Q,lt)}if(Mt(Q)||rt(Q))return Q=Vr(Q,nt.mode,lt,null),Q.return=nt,Q;if(typeof Q.then=="function")return Dt(nt,fc(Q),lt);if(Q.$$typeof===G)return Dt(nt,Jl(nt,Q),lt);hc(nt,Q)}return null}function dt(nt,Q,lt,At){var Jt=Q!==null?Q.key:null;if(typeof lt=="string"&&lt!==""||typeof lt=="number"||typeof lt=="bigint")return Jt!==null?null:D(nt,Q,""+lt,At);if(typeof lt=="object"&&lt!==null){switch(lt.$$typeof){case E:return lt.key===Jt?W(nt,Q,lt,At):null;case b:return lt.key===Jt?ut(nt,Q,lt,At):null;case K:return Jt=lt._init,lt=Jt(lt._payload),dt(nt,Q,lt,At)}if(Mt(lt)||rt(lt))return Jt!==null?null:Et(nt,Q,lt,At,null);if(typeof lt.then=="function")return dt(nt,Q,fc(lt),At);if(lt.$$typeof===G)return dt(nt,Q,Jl(nt,lt),At);hc(nt,lt)}return null}function mt(nt,Q,lt,At,Jt){if(typeof At=="string"&&At!==""||typeof At=="number"||typeof At=="bigint")return nt=nt.get(lt)||null,D(Q,nt,""+At,Jt);if(typeof At=="object"&&At!==null){switch(At.$$typeof){case E:return nt=nt.get(At.key===null?lt:At.key)||null,W(Q,nt,At,Jt);case b:return nt=nt.get(At.key===null?lt:At.key)||null,ut(Q,nt,At,Jt);case K:var Ue=At._init;return At=Ue(At._payload),mt(nt,Q,lt,At,Jt)}if(Mt(At)||rt(At))return nt=nt.get(lt)||null,Et(Q,nt,At,Jt,null);if(typeof At.then=="function")return mt(nt,Q,lt,fc(At),Jt);if(At.$$typeof===G)return mt(nt,Q,lt,Jl(Q,At),Jt);hc(Q,At)}return null}function _e(nt,Q,lt,At){for(var Jt=null,Ue=null,re=Q,pe=Q=0,zn=null;re!==null&&pe<lt.length;pe++){re.index>pe?(zn=re,re=null):zn=re.sibling;var Ge=dt(nt,re,lt[pe],At);if(Ge===null){re===null&&(re=zn);break}e&&re&&Ge.alternate===null&&n(nt,re),Q=h(Ge,Q,pe),Ue===null?Jt=Ge:Ue.sibling=Ge,Ue=Ge,re=zn}if(pe===lt.length)return a(nt,re),Xe&&Xr(nt,pe),Jt;if(re===null){for(;pe<lt.length;pe++)re=Dt(nt,lt[pe],At),re!==null&&(Q=h(re,Q,pe),Ue===null?Jt=re:Ue.sibling=re,Ue=re);return Xe&&Xr(nt,pe),Jt}for(re=o(re);pe<lt.length;pe++)zn=mt(re,nt,pe,lt[pe],At),zn!==null&&(e&&zn.alternate!==null&&re.delete(zn.key===null?pe:zn.key),Q=h(zn,Q,pe),Ue===null?Jt=zn:Ue.sibling=zn,Ue=zn);return e&&re.forEach(function(_r){return n(nt,_r)}),Xe&&Xr(nt,pe),Jt}function he(nt,Q,lt,At){if(lt==null)throw Error(r(151));for(var Jt=null,Ue=null,re=Q,pe=Q=0,zn=null,Ge=lt.next();re!==null&&!Ge.done;pe++,Ge=lt.next()){re.index>pe?(zn=re,re=null):zn=re.sibling;var _r=dt(nt,re,Ge.value,At);if(_r===null){re===null&&(re=zn);break}e&&re&&_r.alternate===null&&n(nt,re),Q=h(_r,Q,pe),Ue===null?Jt=_r:Ue.sibling=_r,Ue=_r,re=zn}if(Ge.done)return a(nt,re),Xe&&Xr(nt,pe),Jt;if(re===null){for(;!Ge.done;pe++,Ge=lt.next())Ge=Dt(nt,Ge.value,At),Ge!==null&&(Q=h(Ge,Q,pe),Ue===null?Jt=Ge:Ue.sibling=Ge,Ue=Ge);return Xe&&Xr(nt,pe),Jt}for(re=o(re);!Ge.done;pe++,Ge=lt.next())Ge=mt(re,nt,pe,Ge.value,At),Ge!==null&&(e&&Ge.alternate!==null&&re.delete(Ge.key===null?pe:Ge.key),Q=h(Ge,Q,pe),Ue===null?Jt=Ge:Ue.sibling=Ge,Ue=Ge);return e&&re.forEach(function(xS){return n(nt,xS)}),Xe&&Xr(nt,pe),Jt}function $e(nt,Q,lt,At){if(typeof lt=="object"&&lt!==null&&lt.type===w&&lt.key===null&&(lt=lt.props.children),typeof lt=="object"&&lt!==null){switch(lt.$$typeof){case E:t:{for(var Jt=lt.key;Q!==null;){if(Q.key===Jt){if(Jt=lt.type,Jt===w){if(Q.tag===7){a(nt,Q.sibling),At=u(Q,lt.props.children),At.return=nt,nt=At;break t}}else if(Q.elementType===Jt||typeof Jt=="object"&&Jt!==null&&Jt.$$typeof===K&&Jm(Jt)===Q.type){a(nt,Q.sibling),At=u(Q,lt.props),Jo(At,lt),At.return=nt,nt=At;break t}a(nt,Q);break}else n(nt,Q);Q=Q.sibling}lt.type===w?(At=Vr(lt.props.children,nt.mode,At,lt.key),At.return=nt,nt=At):(At=jl(lt.type,lt.key,lt.props,null,nt.mode,At),Jo(At,lt),At.return=nt,nt=At)}return T(nt);case b:t:{for(Jt=lt.key;Q!==null;){if(Q.key===Jt)if(Q.tag===4&&Q.stateNode.containerInfo===lt.containerInfo&&Q.stateNode.implementation===lt.implementation){a(nt,Q.sibling),At=u(Q,lt.children||[]),At.return=nt,nt=At;break t}else{a(nt,Q);break}else n(nt,Q);Q=Q.sibling}At=df(lt,nt.mode,At),At.return=nt,nt=At}return T(nt);case K:return Jt=lt._init,lt=Jt(lt._payload),$e(nt,Q,lt,At)}if(Mt(lt))return _e(nt,Q,lt,At);if(rt(lt)){if(Jt=rt(lt),typeof Jt!="function")throw Error(r(150));return lt=Jt.call(lt),he(nt,Q,lt,At)}if(typeof lt.then=="function")return $e(nt,Q,fc(lt),At);if(lt.$$typeof===G)return $e(nt,Q,Jl(nt,lt),At);hc(nt,lt)}return typeof lt=="string"&&lt!==""||typeof lt=="number"||typeof lt=="bigint"?(lt=""+lt,Q!==null&&Q.tag===6?(a(nt,Q.sibling),At=u(Q,lt),At.return=nt,nt=At):(a(nt,Q),At=hf(lt,nt.mode,At),At.return=nt,nt=At),T(nt)):a(nt,Q)}return function(nt,Q,lt,At){try{Qo=0;var Jt=$e(nt,Q,lt,At);return Ps=null,Jt}catch(re){if(re===Vo||re===tc)throw re;var Ue=Mi(29,re,null,nt.mode);return Ue.lanes=At,Ue.return=nt,Ue}finally{}}}var Fs=$m(!0),tg=$m(!1),Hi=ct(null),la=null;function nr(e){var n=e.alternate;Ut(Ln,Ln.current&1),Ut(Hi,e),la===null&&(n===null||Us.current!==null||n.memoizedState!==null)&&(la=e)}function eg(e){if(e.tag===22){if(Ut(Ln,Ln.current),Ut(Hi,e),la===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&(la=e)}}else ir()}function ir(){Ut(Ln,Ln.current),Ut(Hi,Hi.current)}function Ca(e){Rt(Hi),la===e&&(la=null),Rt(Ln)}var Ln=ct(0);function dc(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Ph(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function qf(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:v({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Yf={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=Ri(),u=$a(o);u.payload=n,a!=null&&(u.callback=a),n=tr(e,u,o),n!==null&&(wi(n,e,o),Xo(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=Ri(),u=$a(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=tr(e,u,o),n!==null&&(wi(n,e,o),Xo(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=Ri(),o=$a(a);o.tag=2,n!=null&&(o.callback=n),n=tr(e,o,a),n!==null&&(wi(n,e,a),Xo(n,e,a))}};function ng(e,n,a,o,u,h,T){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,h,T):n.prototype&&n.prototype.isPureReactComponent?!Oo(a,o)||!Oo(u,h):!0}function ig(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&Yf.enqueueReplaceState(n,n.state,null)}function Qr(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=v({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}var pc=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function ag(e){pc(e)}function rg(e){console.error(e)}function sg(e){pc(e)}function mc(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function og(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function jf(e,n,a){return a=$a(a),a.tag=3,a.payload={element:null},a.callback=function(){mc(e,n)},a}function lg(e){return e=$a(e),e.tag=3,e}function cg(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var h=o.value;e.payload=function(){return u(h)},e.callback=function(){og(n,a,o)}}var T=a.stateNode;T!==null&&typeof T.componentDidCatch=="function"&&(e.callback=function(){og(n,a,o),typeof u!="function"&&(cr===null?cr=new Set([this]):cr.add(this));var D=o.stack;this.componentDidCatch(o.value,{componentStack:D!==null?D:""})})}function xy(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&zo(n,a,u,!0),a=Hi.current,a!==null){switch(a.tag){case 13:return la===null?vh():a.alternate===null&&mn===0&&(mn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Mf?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Sh(e,o,u)),!1;case 22:return a.flags|=65536,o===Mf?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Sh(e,o,u)),!1}throw Error(r(435,a.tag))}return Sh(e,o,u),vh(),!1}if(Xe)return n=Hi.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==gf&&(e=Error(r(422),{cause:o}),Io(Fi(e,a)))):(o!==gf&&(n=Error(r(423),{cause:o}),Io(Fi(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=Fi(o,a),u=jf(e.stateNode,o,u),Af(e,u),mn!==4&&(mn=2)),!1;var h=Error(r(520),{cause:o});if(h=Fi(h,a),rl===null?rl=[h]:rl.push(h),mn!==4&&(mn=2),n===null)return!0;o=Fi(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=jf(a.stateNode,o,e),Af(a,e),!1;case 1:if(n=a.type,h=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(cr===null||!cr.has(h))))return a.flags|=65536,u&=-u,a.lanes|=u,u=lg(u),cg(u,e,a,o),Af(a,u),!1}a=a.return}while(a!==null);return!1}var ug=Error(r(461)),Bn=!1;function jn(e,n,a,o){n.child=e===null?tg(n,null,a,o):Fs(n,e.child,a,o)}function fg(e,n,a,o,u){a=a.render;var h=n.ref;if("ref"in o){var T={};for(var D in o)D!=="ref"&&(T[D]=o[D])}else T=o;return jr(n),o=Uf(e,n,a,T,h,u),D=Lf(),e!==null&&!Bn?(Nf(e,n,u),Da(e,n,u)):(Xe&&D&&pf(n),n.flags|=1,jn(e,n,o,u),n.child)}function hg(e,n,a,o,u){if(e===null){var h=a.type;return typeof h=="function"&&!ff(h)&&h.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=h,dg(e,n,h,o,u)):(e=jl(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(h=e.child,!nh(e,u)){var T=h.memoizedProps;if(a=a.compare,a=a!==null?a:Oo,a(T,o)&&e.ref===n.ref)return Da(e,n,u)}return n.flags|=1,e=Ma(h,o),e.ref=n.ref,e.return=n,n.child=e}function dg(e,n,a,o,u){if(e!==null){var h=e.memoizedProps;if(Oo(h,o)&&e.ref===n.ref)if(Bn=!1,n.pendingProps=o=h,nh(e,u))(e.flags&131072)!==0&&(Bn=!0);else return n.lanes=e.lanes,Da(e,n,u)}return Zf(e,n,a,o,u)}function pg(e,n,a){var o=n.pendingProps,u=o.children,h=e!==null?e.memoizedState:null;if(o.mode==="hidden"){if((n.flags&128)!==0){if(o=h!==null?h.baseLanes|a:a,e!==null){for(u=n.child=e.child,h=0;u!==null;)h=h|u.lanes|u.childLanes,u=u.sibling;n.childLanes=h&~o}else n.childLanes=0,n.child=null;return mg(e,n,o,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&$l(n,h!==null?h.cachePool:null),h!==null?dm(n,h):wf(),eg(n);else return n.lanes=n.childLanes=536870912,mg(e,n,h!==null?h.baseLanes|a:a,a)}else h!==null?($l(n,h.cachePool),dm(n,h),ir(),n.memoizedState=null):(e!==null&&$l(n,null),wf(),ir());return jn(e,n,u,a),n.child}function mg(e,n,a,o){var u=Ef();return u=u===null?null:{parent:Un._currentValue,pool:u},n.memoizedState={baseLanes:a,cachePool:u},e!==null&&$l(n,null),wf(),eg(n),e!==null&&zo(e,n,o,!0),null}function gc(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function Zf(e,n,a,o,u){return jr(n),a=Uf(e,n,a,o,void 0,u),o=Lf(),e!==null&&!Bn?(Nf(e,n,u),Da(e,n,u)):(Xe&&o&&pf(n),n.flags|=1,jn(e,n,a,u),n.child)}function gg(e,n,a,o,u,h){return jr(n),n.updateQueue=null,a=mm(n,o,a,u),pm(e),o=Lf(),e!==null&&!Bn?(Nf(e,n,h),Da(e,n,h)):(Xe&&o&&pf(n),n.flags|=1,jn(e,n,a,h),n.child)}function _g(e,n,a,o,u){if(jr(n),n.stateNode===null){var h=As,T=a.contextType;typeof T=="object"&&T!==null&&(h=ei(T)),h=new a(o,h),n.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=Yf,n.stateNode=h,h._reactInternals=n,h=n.stateNode,h.props=o,h.state=n.memoizedState,h.refs={},bf(n),T=a.contextType,h.context=typeof T=="object"&&T!==null?ei(T):As,h.state=n.memoizedState,T=a.getDerivedStateFromProps,typeof T=="function"&&(qf(n,a,T,o),h.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(T=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),T!==h.state&&Yf.enqueueReplaceState(h,h.state,null),qo(n,o,h,u),Wo(),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){h=n.stateNode;var D=n.memoizedProps,W=Qr(a,D);h.props=W;var ut=h.context,Et=a.contextType;T=As,typeof Et=="object"&&Et!==null&&(T=ei(Et));var Dt=a.getDerivedStateFromProps;Et=typeof Dt=="function"||typeof h.getSnapshotBeforeUpdate=="function",D=n.pendingProps!==D,Et||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(D||ut!==T)&&ig(n,h,o,T),Ja=!1;var dt=n.memoizedState;h.state=dt,qo(n,o,h,u),Wo(),ut=n.memoizedState,D||dt!==ut||Ja?(typeof Dt=="function"&&(qf(n,a,Dt,o),ut=n.memoizedState),(W=Ja||ng(n,a,W,o,dt,ut,T))?(Et||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(n.flags|=4194308)):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=ut),h.props=o,h.state=ut,h.context=T,o=W):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{h=n.stateNode,Tf(e,n),T=n.memoizedProps,Et=Qr(a,T),h.props=Et,Dt=n.pendingProps,dt=h.context,ut=a.contextType,W=As,typeof ut=="object"&&ut!==null&&(W=ei(ut)),D=a.getDerivedStateFromProps,(ut=typeof D=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(T!==Dt||dt!==W)&&ig(n,h,o,W),Ja=!1,dt=n.memoizedState,h.state=dt,qo(n,o,h,u),Wo();var mt=n.memoizedState;T!==Dt||dt!==mt||Ja||e!==null&&e.dependencies!==null&&Ql(e.dependencies)?(typeof D=="function"&&(qf(n,a,D,o),mt=n.memoizedState),(Et=Ja||ng(n,a,Et,o,dt,mt,W)||e!==null&&e.dependencies!==null&&Ql(e.dependencies))?(ut||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(o,mt,W),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(o,mt,W)),typeof h.componentDidUpdate=="function"&&(n.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof h.componentDidUpdate!="function"||T===e.memoizedProps&&dt===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||T===e.memoizedProps&&dt===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=mt),h.props=o,h.state=mt,h.context=W,o=Et):(typeof h.componentDidUpdate!="function"||T===e.memoizedProps&&dt===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||T===e.memoizedProps&&dt===e.memoizedState||(n.flags|=1024),o=!1)}return h=o,gc(e,n),o=(n.flags&128)!==0,h||o?(h=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:h.render(),n.flags|=1,e!==null&&o?(n.child=Fs(n,e.child,null,u),n.child=Fs(n,null,a,u)):jn(e,n,a,u),n.memoizedState=h.state,e=n.child):e=Da(e,n,u),e}function vg(e,n,a,o){return Bo(),n.flags|=256,jn(e,n,a,o),n.child}var Kf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Qf(e){return{baseLanes:e,cachePool:rm()}}function Jf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=Gi),e}function yg(e,n,a){var o=n.pendingProps,u=!1,h=(n.flags&128)!==0,T;if((T=h)||(T=e!==null&&e.memoizedState===null?!1:(Ln.current&2)!==0),T&&(u=!0,n.flags&=-129),T=(n.flags&32)!==0,n.flags&=-33,e===null){if(Xe){if(u?nr(n):ir(),Xe){var D=pn,W;if(W=D){t:{for(W=D,D=oa;W.nodeType!==8;){if(!D){D=null;break t}if(W=Qi(W.nextSibling),W===null){D=null;break t}}D=W}D!==null?(n.memoizedState={dehydrated:D,treeContext:kr!==null?{id:ba,overflow:Ta}:null,retryLane:536870912,hydrationErrors:null},W=Mi(18,null,null,0),W.stateNode=D,W.return=n,n.child=W,li=n,pn=null,W=!0):W=!1}W||qr(n)}if(D=n.memoizedState,D!==null&&(D=D.dehydrated,D!==null))return Ph(D)?n.lanes=32:n.lanes=536870912,null;Ca(n)}return D=o.children,o=o.fallback,u?(ir(),u=n.mode,D=_c({mode:"hidden",children:D},u),o=Vr(o,u,a,null),D.return=n,o.return=n,D.sibling=o,n.child=D,u=n.child,u.memoizedState=Qf(a),u.childLanes=Jf(e,T,a),n.memoizedState=Kf,o):(nr(n),$f(n,D))}if(W=e.memoizedState,W!==null&&(D=W.dehydrated,D!==null)){if(h)n.flags&256?(nr(n),n.flags&=-257,n=th(e,n,a)):n.memoizedState!==null?(ir(),n.child=e.child,n.flags|=128,n=null):(ir(),u=o.fallback,D=n.mode,o=_c({mode:"visible",children:o.children},D),u=Vr(u,D,a,null),u.flags|=2,o.return=n,u.return=n,o.sibling=u,n.child=o,Fs(n,e.child,null,a),o=n.child,o.memoizedState=Qf(a),o.childLanes=Jf(e,T,a),n.memoizedState=Kf,n=u);else if(nr(n),Ph(D)){if(T=D.nextSibling&&D.nextSibling.dataset,T)var ut=T.dgst;T=ut,o=Error(r(419)),o.stack="",o.digest=T,Io({value:o,source:null,stack:null}),n=th(e,n,a)}else if(Bn||zo(e,n,a,!1),T=(a&e.childLanes)!==0,Bn||T){if(T=an,T!==null&&(o=a&-a,o=(o&42)!==0?1:R(o),o=(o&(T.suspendedLanes|a))!==0?0:o,o!==0&&o!==W.retryLane))throw W.retryLane=o,Ts(e,o),wi(T,e,o),ug;D.data==="$?"||vh(),n=th(e,n,a)}else D.data==="$?"?(n.flags|=192,n.child=e.child,n=null):(e=W.treeContext,pn=Qi(D.nextSibling),li=n,Xe=!0,Wr=null,oa=!1,e!==null&&(Ii[zi++]=ba,Ii[zi++]=Ta,Ii[zi++]=kr,ba=e.id,Ta=e.overflow,kr=n),n=$f(n,o.children),n.flags|=4096);return n}return u?(ir(),u=o.fallback,D=n.mode,W=e.child,ut=W.sibling,o=Ma(W,{mode:"hidden",children:o.children}),o.subtreeFlags=W.subtreeFlags&65011712,ut!==null?u=Ma(ut,u):(u=Vr(u,D,a,null),u.flags|=2),u.return=n,o.return=n,o.sibling=u,n.child=o,o=u,u=n.child,D=e.child.memoizedState,D===null?D=Qf(a):(W=D.cachePool,W!==null?(ut=Un._currentValue,W=W.parent!==ut?{parent:ut,pool:ut}:W):W=rm(),D={baseLanes:D.baseLanes|a,cachePool:W}),u.memoizedState=D,u.childLanes=Jf(e,T,a),n.memoizedState=Kf,o):(nr(n),a=e.child,e=a.sibling,a=Ma(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(T=n.deletions,T===null?(n.deletions=[e],n.flags|=16):T.push(e)),n.child=a,n.memoizedState=null,a)}function $f(e,n){return n=_c({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function _c(e,n){return e=Mi(22,e,null,n),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function th(e,n,a){return Fs(n,e.child,null,a),e=$f(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Sg(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),vf(e.return,n,a)}function eh(e,n,a,o,u){var h=e.memoizedState;h===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u}:(h.isBackwards=n,h.rendering=null,h.renderingStartTime=0,h.last=o,h.tail=a,h.tailMode=u)}function xg(e,n,a){var o=n.pendingProps,u=o.revealOrder,h=o.tail;if(jn(e,n,o.children,a),o=Ln.current,(o&2)!==0)o=o&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Sg(e,a,n);else if(e.tag===19)Sg(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}switch(Ut(Ln,o),u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&dc(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),eh(n,!1,u,a,h);break;case"backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&dc(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}eh(n,!0,a,null,h);break;case"together":eh(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Da(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),lr|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(zo(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,a=Ma(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Ma(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function nh(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Ql(e)))}function Ey(e,n,a){switch(n.tag){case 3:Ot(n,n.stateNode.containerInfo),Qa(n,Un,e.memoizedState.cache),Bo();break;case 27:case 5:ie(n);break;case 4:Ot(n,n.stateNode.containerInfo);break;case 10:Qa(n,n.type,n.memoizedProps.value);break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(nr(n),n.flags|=128,null):(a&n.child.childLanes)!==0?yg(e,n,a):(nr(n),e=Da(e,n,a),e!==null?e.sibling:null);nr(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(zo(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return xg(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Ut(Ln,Ln.current),o)break;return null;case 22:case 23:return n.lanes=0,pg(e,n,a);case 24:Qa(n,Un,e.memoizedState.cache)}return Da(e,n,a)}function Eg(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)Bn=!0;else{if(!nh(e,a)&&(n.flags&128)===0)return Bn=!1,Ey(e,n,a);Bn=(e.flags&131072)!==0}else Bn=!1,Xe&&(n.flags&1048576)!==0&&Jp(n,Kl,n.index);switch(n.lanes=0,n.tag){case 16:t:{e=n.pendingProps;var o=n.elementType,u=o._init;if(o=u(o._payload),n.type=o,typeof o=="function")ff(o)?(e=Qr(o,e),n.tag=1,n=_g(null,n,o,e,a)):(n.tag=0,n=Zf(null,n,o,e,a));else{if(o!=null){if(u=o.$$typeof,u===P){n.tag=11,n=fg(null,n,o,e,a);break t}else if(u===k){n.tag=14,n=hg(null,n,o,e,a);break t}}throw n=_t(o)||o,Error(r(306,n,""))}}return n;case 0:return Zf(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=Qr(o,n.pendingProps),_g(e,n,o,u,a);case 3:t:{if(Ot(n,n.stateNode.containerInfo),e===null)throw Error(r(387));o=n.pendingProps;var h=n.memoizedState;u=h.element,Tf(e,n),qo(n,o,null,a);var T=n.memoizedState;if(o=T.cache,Qa(n,Un,o),o!==h.cache&&yf(n,[Un],a,!0),Wo(),o=T.element,h.isDehydrated)if(h={element:o,isDehydrated:!1,cache:T.cache},n.updateQueue.baseState=h,n.memoizedState=h,n.flags&256){n=vg(e,n,o,a);break t}else if(o!==u){u=Fi(Error(r(424)),n),Io(u),n=vg(e,n,o,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(pn=Qi(e.firstChild),li=n,Xe=!0,Wr=null,oa=!0,a=tg(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Bo(),o===u){n=Da(e,n,a);break t}jn(e,n,o,a)}n=n.child}return n;case 26:return gc(e,n),e===null?(a=A_(n.type,null,n.pendingProps,null))?n.memoizedState=a:Xe||(a=n.type,e=n.pendingProps,o=Uc(Lt.current).createElement(a),o[_n]=n,o[Rn]=e,Kn(o,a,e),un(o),n.stateNode=o):n.memoizedState=A_(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return ie(n),e===null&&Xe&&(o=n.stateNode=M_(n.type,n.pendingProps,Lt.current),li=n,oa=!0,u=pn,hr(n.type)?(Fh=u,pn=Qi(o.firstChild)):pn=u),jn(e,n,n.pendingProps.children,a),gc(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Xe&&((u=o=pn)&&(o=Ky(o,n.type,n.pendingProps,oa),o!==null?(n.stateNode=o,li=n,pn=Qi(o.firstChild),oa=!1,u=!0):u=!1),u||qr(n)),ie(n),u=n.type,h=n.pendingProps,T=e!==null?e.memoizedProps:null,o=h.children,Lh(u,h)?o=null:T!==null&&Lh(u,T)&&(n.flags|=32),n.memoizedState!==null&&(u=Uf(e,n,py,null,null,a),pl._currentValue=u),gc(e,n),jn(e,n,o,a),n.child;case 6:return e===null&&Xe&&((e=a=pn)&&(a=Qy(a,n.pendingProps,oa),a!==null?(n.stateNode=a,li=n,pn=null,e=!0):e=!1),e||qr(n)),null;case 13:return yg(e,n,a);case 4:return Ot(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=Fs(n,null,o,a):jn(e,n,o,a),n.child;case 11:return fg(e,n,n.type,n.pendingProps,a);case 7:return jn(e,n,n.pendingProps,a),n.child;case 8:return jn(e,n,n.pendingProps.children,a),n.child;case 12:return jn(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Qa(n,n.type,o.value),jn(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,jr(n),u=ei(u),o=o(u),n.flags|=1,jn(e,n,o,a),n.child;case 14:return hg(e,n,n.type,n.pendingProps,a);case 15:return dg(e,n,n.type,n.pendingProps,a);case 19:return xg(e,n,a);case 31:return o=n.pendingProps,a=n.mode,o={mode:o.mode,children:o.children},e===null?(a=_c(o,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=Ma(e.child,o),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return pg(e,n,a);case 24:return jr(n),o=ei(Un),e===null?(u=Ef(),u===null&&(u=an,h=Sf(),u.pooledCache=h,h.refCount++,h!==null&&(u.pooledCacheLanes|=a),u=h),n.memoizedState={parent:o,cache:u},bf(n),Qa(n,Un,u)):((e.lanes&a)!==0&&(Tf(e,n),qo(n,null,null,a),Wo()),u=e.memoizedState,h=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Qa(n,Un,o)):(o=h.cache,Qa(n,Un,o),o!==u.cache&&yf(n,[Un],a,!0))),jn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Ua(e){e.flags|=4}function Mg(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!U_(n)){if(n=Hi.current,n!==null&&((He&4194048)===He?la!==null:(He&62914560)!==He&&(He&536870912)===0||n!==la))throw ko=Mf,sm;e.flags|=8192}}function vc(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Gt():536870912,e.lanes|=n,Hs|=n)}function $o(e,n){if(!Xe)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function fn(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function My(e,n,a){var o=n.pendingProps;switch(mf(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return fn(n),null;case 1:return fn(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Ra(Un),fe(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Fo(n)?Ua(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,em())),fn(n),null;case 26:return a=n.memoizedState,e===null?(Ua(n),a!==null?(fn(n),Mg(n,a)):(fn(n),n.flags&=-16777217)):a?a!==e.memoizedState?(Ua(n),fn(n),Mg(n,a)):(fn(n),n.flags&=-16777217):(e.memoizedProps!==o&&Ua(n),fn(n),n.flags&=-16777217),null;case 27:ke(n),a=Lt.current;var u=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Ua(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return fn(n),null}e=at.current,Fo(n)?$p(n):(e=M_(u,o,a),n.stateNode=e,Ua(n))}return fn(n),null;case 5:if(ke(n),a=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Ua(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return fn(n),null}if(e=at.current,Fo(n))$p(n);else{switch(u=Uc(Lt.current),e){case 1:e=u.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=u.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=u.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof o.is=="string"?u.createElement("select",{is:o.is}):u.createElement("select"),o.multiple?e.multiple=!0:o.size&&(e.size=o.size);break;default:e=typeof o.is=="string"?u.createElement(a,{is:o.is}):u.createElement(a)}}e[_n]=n,e[Rn]=o;t:for(u=n.child;u!==null;){if(u.tag===5||u.tag===6)e.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===n)break t;for(;u.sibling===null;){if(u.return===null||u.return===n)break t;u=u.return}u.sibling.return=u.return,u=u.sibling}n.stateNode=e;t:switch(Kn(e,a,o),a){case"button":case"input":case"select":case"textarea":e=!!o.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&Ua(n)}}return fn(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&Ua(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(e=Lt.current,Fo(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=li,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[_n]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||g_(e.nodeValue,a)),e||qr(n)}else e=Uc(e).createTextNode(o),e[_n]=n,n.stateNode=e}return fn(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=Fo(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[_n]=n}else Bo(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;fn(n),u=!1}else u=em(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Ca(n),n):(Ca(n),null)}if(Ca(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=o!==null,e=e!==null&&e.memoizedState!==null,a){o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool);var h=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(h=o.memoizedState.cachePool.pool),h!==u&&(o.flags|=2048)}return a!==e&&a&&(n.child.flags|=8192),vc(n,n.updateQueue),fn(n),null;case 4:return fe(),e===null&&Rh(n.stateNode.containerInfo),fn(n),null;case 10:return Ra(n.type),fn(n),null;case 19:if(Rt(Ln),u=n.memoizedState,u===null)return fn(n),null;if(o=(n.flags&128)!==0,h=u.rendering,h===null)if(o)$o(u,!1);else{if(mn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(h=dc(e),h!==null){for(n.flags|=128,$o(u,!1),e=h.updateQueue,n.updateQueue=e,vc(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Qp(a,e),a=a.sibling;return Ut(Ln,Ln.current&1|2),n.child}e=e.sibling}u.tail!==null&&ve()>xc&&(n.flags|=128,o=!0,$o(u,!1),n.lanes=4194304)}else{if(!o)if(e=dc(h),e!==null){if(n.flags|=128,o=!0,e=e.updateQueue,n.updateQueue=e,vc(n,e),$o(u,!0),u.tail===null&&u.tailMode==="hidden"&&!h.alternate&&!Xe)return fn(n),null}else 2*ve()-u.renderingStartTime>xc&&a!==536870912&&(n.flags|=128,o=!0,$o(u,!1),n.lanes=4194304);u.isBackwards?(h.sibling=n.child,n.child=h):(e=u.last,e!==null?e.sibling=h:n.child=h,u.last=h)}return u.tail!==null?(n=u.tail,u.rendering=n,u.tail=n.sibling,u.renderingStartTime=ve(),n.sibling=null,e=Ln.current,Ut(Ln,o?e&1|2:e&1),n):(fn(n),null);case 22:case 23:return Ca(n),Cf(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(fn(n),n.subtreeFlags&6&&(n.flags|=8192)):fn(n),a=n.updateQueue,a!==null&&vc(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&Rt(Zr),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Ra(Un),fn(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function by(e,n){switch(mf(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Ra(Un),fe(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return ke(n),null;case 13:if(Ca(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Bo()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return Rt(Ln),null;case 4:return fe(),null;case 10:return Ra(n.type),null;case 22:case 23:return Ca(n),Cf(),e!==null&&Rt(Zr),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Ra(Un),null;case 25:return null;default:return null}}function bg(e,n){switch(mf(n),n.tag){case 3:Ra(Un),fe();break;case 26:case 27:case 5:ke(n);break;case 4:fe();break;case 13:Ca(n);break;case 19:Rt(Ln);break;case 10:Ra(n.type);break;case 22:case 23:Ca(n),Cf(),e!==null&&Rt(Zr);break;case 24:Ra(Un)}}function tl(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var h=a.create,T=a.inst;o=h(),T.destroy=o}a=a.next}while(a!==u)}}catch(D){nn(n,n.return,D)}}function ar(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var h=u.next;o=h;do{if((o.tag&e)===e){var T=o.inst,D=T.destroy;if(D!==void 0){T.destroy=void 0,u=n;var W=a,ut=D;try{ut()}catch(Et){nn(u,W,Et)}}}o=o.next}while(o!==h)}}catch(Et){nn(n,n.return,Et)}}function Tg(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{hm(n,a)}catch(o){nn(e,e.return,o)}}}function Ag(e,n,a){a.props=Qr(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){nn(e,n,o)}}function el(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){nn(e,n,u)}}function ca(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){nn(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){nn(e,n,u)}else a.current=null}function Rg(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){nn(e,e.return,u)}}function ih(e,n,a){try{var o=e.stateNode;Wy(o,e.type,a,n),o[Rn]=n}catch(u){nn(e,e.return,u)}}function wg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&hr(e.type)||e.tag===4}function ah(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||wg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&hr(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function rh(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Dc));else if(o!==4&&(o===27&&hr(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(rh(e,n,a),e=e.sibling;e!==null;)rh(e,n,a),e=e.sibling}function yc(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&hr(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(yc(e,n,a),e=e.sibling;e!==null;)yc(e,n,a),e=e.sibling}function Cg(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Kn(n,o,a),n[_n]=e,n[Rn]=a}catch(h){nn(e,e.return,h)}}var La=!1,xn=!1,sh=!1,Dg=typeof WeakSet=="function"?WeakSet:Set,In=null;function Ty(e,n){if(e=e.containerInfo,Dh=Bc,e=Gp(e),af(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,h=o.focusNode;o=o.focusOffset;try{a.nodeType,h.nodeType}catch{a=null;break t}var T=0,D=-1,W=-1,ut=0,Et=0,Dt=e,dt=null;e:for(;;){for(var mt;Dt!==a||u!==0&&Dt.nodeType!==3||(D=T+u),Dt!==h||o!==0&&Dt.nodeType!==3||(W=T+o),Dt.nodeType===3&&(T+=Dt.nodeValue.length),(mt=Dt.firstChild)!==null;)dt=Dt,Dt=mt;for(;;){if(Dt===e)break e;if(dt===a&&++ut===u&&(D=T),dt===h&&++Et===o&&(W=T),(mt=Dt.nextSibling)!==null)break;Dt=dt,dt=Dt.parentNode}Dt=mt}a=D===-1||W===-1?null:{start:D,end:W}}else a=null}a=a||{start:0,end:0}}else a=null;for(Uh={focusedElem:e,selectionRange:a},Bc=!1,In=n;In!==null;)if(n=In,e=n.child,(n.subtreeFlags&1024)!==0&&e!==null)e.return=n,In=e;else for(;In!==null;){switch(n=In,h=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&h!==null){e=void 0,a=n,u=h.memoizedProps,h=h.memoizedState,o=a.stateNode;try{var _e=Qr(a.type,u,a.elementType===a.type);e=o.getSnapshotBeforeUpdate(_e,h),o.__reactInternalSnapshotBeforeUpdate=e}catch(he){nn(a,a.return,he)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Oh(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Oh(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=n.sibling,e!==null){e.return=n.return,In=e;break}In=n.return}}function Ug(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:rr(e,a),o&4&&tl(5,a);break;case 1:if(rr(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(T){nn(a,a.return,T)}else{var u=Qr(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(T){nn(a,a.return,T)}}o&64&&Tg(a),o&512&&el(a,a.return);break;case 3:if(rr(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{hm(e,n)}catch(T){nn(a,a.return,T)}}break;case 27:n===null&&o&4&&Cg(a);case 26:case 5:rr(e,a),n===null&&o&4&&Rg(a),o&512&&el(a,a.return);break;case 12:rr(e,a);break;case 13:rr(e,a),o&4&&Og(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Oy.bind(null,a),Jy(e,a))));break;case 22:if(o=a.memoizedState!==null||La,!o){n=n!==null&&n.memoizedState!==null||xn,u=La;var h=xn;La=o,(xn=n)&&!h?sr(e,a,(a.subtreeFlags&8772)!==0):rr(e,a),La=u,xn=h}break;case 30:break;default:rr(e,a)}}function Lg(e){var n=e.alternate;n!==null&&(e.alternate=null,Lg(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&yi(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var on=null,di=!1;function Na(e,n,a){for(a=a.child;a!==null;)Ng(e,n,a),a=a.sibling}function Ng(e,n,a){if(Xt&&typeof Xt.onCommitFiberUnmount=="function")try{Xt.onCommitFiberUnmount(xt,a)}catch{}switch(a.tag){case 26:xn||ca(a,n),Na(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:xn||ca(a,n);var o=on,u=di;hr(a.type)&&(on=a.stateNode,di=!1),Na(e,n,a),ul(a.stateNode),on=o,di=u;break;case 5:xn||ca(a,n);case 6:if(o=on,u=di,on=null,Na(e,n,a),on=o,di=u,on!==null)if(di)try{(on.nodeType===9?on.body:on.nodeName==="HTML"?on.ownerDocument.body:on).removeChild(a.stateNode)}catch(h){nn(a,n,h)}else try{on.removeChild(a.stateNode)}catch(h){nn(a,n,h)}break;case 18:on!==null&&(di?(e=on,x_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),vl(e)):x_(on,a.stateNode));break;case 4:o=on,u=di,on=a.stateNode.containerInfo,di=!0,Na(e,n,a),on=o,di=u;break;case 0:case 11:case 14:case 15:xn||ar(2,a,n),xn||ar(4,a,n),Na(e,n,a);break;case 1:xn||(ca(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&Ag(a,n,o)),Na(e,n,a);break;case 21:Na(e,n,a);break;case 22:xn=(o=xn)||a.memoizedState!==null,Na(e,n,a),xn=o;break;default:Na(e,n,a)}}function Og(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{vl(e)}catch(a){nn(n,n.return,a)}}function Ay(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Dg),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Dg),n;default:throw Error(r(435,e.tag))}}function oh(e,n){var a=Ay(e);n.forEach(function(o){var u=Py.bind(null,e,o);a.has(o)||(a.add(o),o.then(u,u))})}function bi(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],h=e,T=n,D=T;t:for(;D!==null;){switch(D.tag){case 27:if(hr(D.type)){on=D.stateNode,di=!1;break t}break;case 5:on=D.stateNode,di=!1;break t;case 3:case 4:on=D.stateNode.containerInfo,di=!0;break t}D=D.return}if(on===null)throw Error(r(160));Ng(h,T,u),on=null,di=!1,h=u.alternate,h!==null&&(h.return=null),u.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)Pg(n,e),n=n.sibling}var Ki=null;function Pg(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:bi(n,e),Ti(e),o&4&&(ar(3,e,e.return),tl(3,e),ar(5,e,e.return));break;case 1:bi(n,e),Ti(e),o&512&&(xn||a===null||ca(a,a.return)),o&64&&La&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Ki;if(bi(n,e),Ti(e),o&512&&(xn||a===null||ca(a,a.return)),o&4){var h=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":h=u.getElementsByTagName("title")[0],(!h||h[Jn]||h[_n]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=u.createElement(o),u.head.insertBefore(h,u.querySelector("head > title"))),Kn(h,o,a),h[_n]=e,un(h),o=h;break t;case"link":var T=C_("link","href",u).get(o+(a.href||""));if(T){for(var D=0;D<T.length;D++)if(h=T[D],h.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&h.getAttribute("rel")===(a.rel==null?null:a.rel)&&h.getAttribute("title")===(a.title==null?null:a.title)&&h.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){T.splice(D,1);break e}}h=u.createElement(o),Kn(h,o,a),u.head.appendChild(h);break;case"meta":if(T=C_("meta","content",u).get(o+(a.content||""))){for(D=0;D<T.length;D++)if(h=T[D],h.getAttribute("content")===(a.content==null?null:""+a.content)&&h.getAttribute("name")===(a.name==null?null:a.name)&&h.getAttribute("property")===(a.property==null?null:a.property)&&h.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&h.getAttribute("charset")===(a.charSet==null?null:a.charSet)){T.splice(D,1);break e}}h=u.createElement(o),Kn(h,o,a),u.head.appendChild(h);break;default:throw Error(r(468,o))}h[_n]=e,un(h),o=h}e.stateNode=o}else D_(u,e.type,e.stateNode);else e.stateNode=w_(u,o,e.memoizedProps);else h!==o?(h===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):h.count--,o===null?D_(u,e.type,e.stateNode):w_(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&ih(e,e.memoizedProps,a.memoizedProps)}break;case 27:bi(n,e),Ti(e),o&512&&(xn||a===null||ca(a,a.return)),a!==null&&o&4&&ih(e,e.memoizedProps,a.memoizedProps);break;case 5:if(bi(n,e),Ti(e),o&512&&(xn||a===null||ca(a,a.return)),e.flags&32){u=e.stateNode;try{Ni(u,"")}catch(mt){nn(e,e.return,mt)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,ih(e,u,a!==null?a.memoizedProps:u)),o&1024&&(sh=!0);break;case 6:if(bi(n,e),Ti(e),o&4){if(e.stateNode===null)throw Error(r(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(mt){nn(e,e.return,mt)}}break;case 3:if(Oc=null,u=Ki,Ki=Lc(n.containerInfo),bi(n,e),Ki=u,Ti(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{vl(n.containerInfo)}catch(mt){nn(e,e.return,mt)}sh&&(sh=!1,Fg(e));break;case 4:o=Ki,Ki=Lc(e.stateNode.containerInfo),bi(n,e),Ti(e),Ki=o;break;case 12:bi(n,e),Ti(e);break;case 13:bi(n,e),Ti(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(dh=ve()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,oh(e,o)));break;case 22:u=e.memoizedState!==null;var W=a!==null&&a.memoizedState!==null,ut=La,Et=xn;if(La=ut||u,xn=Et||W,bi(n,e),xn=Et,La=ut,Ti(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||W||La||xn||Jr(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){W=a=n;try{if(h=W.stateNode,u)T=h.style,typeof T.setProperty=="function"?T.setProperty("display","none","important"):T.display="none";else{D=W.stateNode;var Dt=W.memoizedProps.style,dt=Dt!=null&&Dt.hasOwnProperty("display")?Dt.display:null;D.style.display=dt==null||typeof dt=="boolean"?"":(""+dt).trim()}}catch(mt){nn(W,W.return,mt)}}}else if(n.tag===6){if(a===null){W=n;try{W.stateNode.nodeValue=u?"":W.memoizedProps}catch(mt){nn(W,W.return,mt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,oh(e,a))));break;case 19:bi(n,e),Ti(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,oh(e,o)));break;case 30:break;case 21:break;default:bi(n,e),Ti(e)}}function Ti(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(wg(o)){a=o;break}o=o.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,h=ah(e);yc(e,h,u);break;case 5:var T=a.stateNode;a.flags&32&&(Ni(T,""),a.flags&=-33);var D=ah(e);yc(e,D,T);break;case 3:case 4:var W=a.stateNode.containerInfo,ut=ah(e);rh(e,ut,W);break;default:throw Error(r(161))}}catch(Et){nn(e,e.return,Et)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Fg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Fg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function rr(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Ug(e,n.alternate,n),n=n.sibling}function Jr(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:ar(4,n,n.return),Jr(n);break;case 1:ca(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Ag(n,n.return,a),Jr(n);break;case 27:ul(n.stateNode);case 26:case 5:ca(n,n.return),Jr(n);break;case 22:n.memoizedState===null&&Jr(n);break;case 30:Jr(n);break;default:Jr(n)}e=e.sibling}}function sr(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,h=n,T=h.flags;switch(h.tag){case 0:case 11:case 15:sr(u,h,a),tl(4,h);break;case 1:if(sr(u,h,a),o=h,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(ut){nn(o,o.return,ut)}if(o=h,u=o.updateQueue,u!==null){var D=o.stateNode;try{var W=u.shared.hiddenCallbacks;if(W!==null)for(u.shared.hiddenCallbacks=null,u=0;u<W.length;u++)fm(W[u],D)}catch(ut){nn(o,o.return,ut)}}a&&T&64&&Tg(h),el(h,h.return);break;case 27:Cg(h);case 26:case 5:sr(u,h,a),a&&o===null&&T&4&&Rg(h),el(h,h.return);break;case 12:sr(u,h,a);break;case 13:sr(u,h,a),a&&T&4&&Og(u,h);break;case 22:h.memoizedState===null&&sr(u,h,a),el(h,h.return);break;case 30:break;default:sr(u,h,a)}n=n.sibling}}function lh(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Ho(a))}function ch(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Ho(e))}function ua(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Bg(e,n,a,o),n=n.sibling}function Bg(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:ua(e,n,a,o),u&2048&&tl(9,n);break;case 1:ua(e,n,a,o);break;case 3:ua(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Ho(e)));break;case 12:if(u&2048){ua(e,n,a,o),e=n.stateNode;try{var h=n.memoizedProps,T=h.id,D=h.onPostCommit;typeof D=="function"&&D(T,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(W){nn(n,n.return,W)}}else ua(e,n,a,o);break;case 13:ua(e,n,a,o);break;case 23:break;case 22:h=n.stateNode,T=n.alternate,n.memoizedState!==null?h._visibility&2?ua(e,n,a,o):nl(e,n):h._visibility&2?ua(e,n,a,o):(h._visibility|=2,Bs(e,n,a,o,(n.subtreeFlags&10256)!==0)),u&2048&&lh(T,n);break;case 24:ua(e,n,a,o),u&2048&&ch(n.alternate,n);break;default:ua(e,n,a,o)}}function Bs(e,n,a,o,u){for(u=u&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var h=e,T=n,D=a,W=o,ut=T.flags;switch(T.tag){case 0:case 11:case 15:Bs(h,T,D,W,u),tl(8,T);break;case 23:break;case 22:var Et=T.stateNode;T.memoizedState!==null?Et._visibility&2?Bs(h,T,D,W,u):nl(h,T):(Et._visibility|=2,Bs(h,T,D,W,u)),u&&ut&2048&&lh(T.alternate,T);break;case 24:Bs(h,T,D,W,u),u&&ut&2048&&ch(T.alternate,T);break;default:Bs(h,T,D,W,u)}n=n.sibling}}function nl(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:nl(a,o),u&2048&&lh(o.alternate,o);break;case 24:nl(a,o),u&2048&&ch(o.alternate,o);break;default:nl(a,o)}n=n.sibling}}var il=8192;function Is(e){if(e.subtreeFlags&il)for(e=e.child;e!==null;)Ig(e),e=e.sibling}function Ig(e){switch(e.tag){case 26:Is(e),e.flags&il&&e.memoizedState!==null&&fS(Ki,e.memoizedState,e.memoizedProps);break;case 5:Is(e);break;case 3:case 4:var n=Ki;Ki=Lc(e.stateNode.containerInfo),Is(e),Ki=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=il,il=16777216,Is(e),il=n):Is(e));break;default:Is(e)}}function zg(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function al(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];In=o,Gg(o,e)}zg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Hg(e),e=e.sibling}function Hg(e){switch(e.tag){case 0:case 11:case 15:al(e),e.flags&2048&&ar(9,e,e.return);break;case 3:al(e);break;case 12:al(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Sc(e)):al(e);break;default:al(e)}}function Sc(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];In=o,Gg(o,e)}zg(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:ar(8,n,n.return),Sc(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Sc(n));break;default:Sc(n)}e=e.sibling}}function Gg(e,n){for(;In!==null;){var a=In;switch(a.tag){case 0:case 11:case 15:ar(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Ho(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,In=o;else t:for(a=e;In!==null;){o=In;var u=o.sibling,h=o.return;if(Lg(o),o===a){In=null;break t}if(u!==null){u.return=h,In=u;break t}In=h}}}var Ry={getCacheForType:function(e){var n=ei(Un),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a}},wy=typeof WeakMap=="function"?WeakMap:Map,Ze=0,an=null,Oe=null,He=0,Ke=0,Ai=null,or=!1,zs=!1,uh=!1,Oa=0,mn=0,lr=0,$r=0,fh=0,Gi=0,Hs=0,rl=null,pi=null,hh=!1,dh=0,xc=1/0,Ec=null,cr=null,Zn=0,ur=null,Gs=null,Vs=0,ph=0,mh=null,Vg=null,sl=0,gh=null;function Ri(){if((Ze&2)!==0&&He!==0)return He&-He;if(X.T!==null){var e=Cs;return e!==0?e:Mh()}return Se()}function kg(){Gi===0&&(Gi=(He&536870912)===0||Xe?$():536870912);var e=Hi.current;return e!==null&&(e.flags|=32),Gi}function wi(e,n,a){(e===an&&(Ke===2||Ke===9)||e.cancelPendingCommit!==null)&&(ks(e,0),fr(e,He,Gi,!1)),wt(e,a),((Ze&2)===0||e!==an)&&(e===an&&((Ze&2)===0&&($r|=a),mn===4&&fr(e,He,Gi,!1)),fa(e))}function Xg(e,n,a){if((Ze&6)!==0)throw Error(r(327));var o=!a&&(n&124)===0&&(n&e.expiredLanes)===0||me(e,n),u=o?Uy(e,n):yh(e,n,!0),h=o;do{if(u===0){zs&&!o&&fr(e,n,0,!1);break}else{if(a=e.current.alternate,h&&!Cy(a)){u=yh(e,n,!1),h=!1;continue}if(u===2){if(h=n,e.errorRecoveryDisabledLanes&h)var T=0;else T=e.pendingLanes&-536870913,T=T!==0?T:T&536870912?536870912:0;if(T!==0){n=T;t:{var D=e;u=rl;var W=D.current.memoizedState.isDehydrated;if(W&&(ks(D,T).flags|=256),T=yh(D,T,!1),T!==2){if(uh&&!W){D.errorRecoveryDisabledLanes|=h,$r|=h,u=4;break t}h=pi,pi=u,h!==null&&(pi===null?pi=h:pi.push.apply(pi,h))}u=T}if(h=!1,u!==2)continue}}if(u===1){ks(e,0),fr(e,n,0,!0);break}t:{switch(o=e,h=u,h){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:fr(o,n,Gi,!or);break t;case 2:pi=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=dh+300-ve(),10<u)){if(fr(o,n,Gi,!or),ye(o,0,!0)!==0)break t;o.timeoutHandle=y_(Wg.bind(null,o,a,pi,Ec,hh,n,Gi,$r,Hs,or,h,2,-0,0),u);break t}Wg(o,a,pi,Ec,hh,n,Gi,$r,Hs,or,h,0,-0,0)}}break}while(!0);fa(e)}function Wg(e,n,a,o,u,h,T,D,W,ut,Et,Dt,dt,mt){if(e.timeoutHandle=-1,Dt=n.subtreeFlags,(Dt&8192||(Dt&16785408)===16785408)&&(dl={stylesheets:null,count:0,unsuspend:uS},Ig(n),Dt=hS(),Dt!==null)){e.cancelPendingCommit=Dt(Jg.bind(null,e,n,h,a,o,u,T,D,W,Et,1,dt,mt)),fr(e,h,T,!ut);return}Jg(e,n,h,a,o,u,T,D,W)}function Cy(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],h=u.getSnapshot;u=u.value;try{if(!Ei(h(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function fr(e,n,a,o){n&=~fh,n&=~$r,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var h=31-Qt(u),T=1<<h;o[h]=-1,u&=~T}a!==0&&Vt(e,a,n)}function Mc(){return(Ze&6)===0?(ol(0),!1):!0}function _h(){if(Oe!==null){if(Ke===0)var e=Oe.return;else e=Oe,Aa=Yr=null,Of(e),Ps=null,Qo=0,e=Oe;for(;e!==null;)bg(e.alternate,e),e=e.return;Oe=null}}function ks(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Yy(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),_h(),an=e,Oe=a=Ma(e.current,null),He=n,Ke=0,Ai=null,or=!1,zs=me(e,n),uh=!1,Hs=Gi=fh=$r=lr=mn=0,pi=rl=null,hh=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-Qt(o),h=1<<u;n|=e[u],o&=~h}return Oa=n,Wl(),a}function qg(e,n){Ce=null,X.H=uc,n===Vo||n===tc?(n=cm(),Ke=3):n===sm?(n=cm(),Ke=4):Ke=n===ug?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Ai=n,Oe===null&&(mn=1,mc(e,Fi(n,e.current)))}function Yg(){var e=X.H;return X.H=uc,e===null?uc:e}function jg(){var e=X.A;return X.A=Ry,e}function vh(){mn=4,or||(He&4194048)!==He&&Hi.current!==null||(zs=!0),(lr&134217727)===0&&($r&134217727)===0||an===null||fr(an,He,Gi,!1)}function yh(e,n,a){var o=Ze;Ze|=2;var u=Yg(),h=jg();(an!==e||He!==n)&&(Ec=null,ks(e,n)),n=!1;var T=mn;t:do try{if(Ke!==0&&Oe!==null){var D=Oe,W=Ai;switch(Ke){case 8:_h(),T=6;break t;case 3:case 2:case 9:case 6:Hi.current===null&&(n=!0);var ut=Ke;if(Ke=0,Ai=null,Xs(e,D,W,ut),a&&zs){T=0;break t}break;default:ut=Ke,Ke=0,Ai=null,Xs(e,D,W,ut)}}Dy(),T=mn;break}catch(Et){qg(e,Et)}while(!0);return n&&e.shellSuspendCounter++,Aa=Yr=null,Ze=o,X.H=u,X.A=h,Oe===null&&(an=null,He=0,Wl()),T}function Dy(){for(;Oe!==null;)Zg(Oe)}function Uy(e,n){var a=Ze;Ze|=2;var o=Yg(),u=jg();an!==e||He!==n?(Ec=null,xc=ve()+500,ks(e,n)):zs=me(e,n);t:do try{if(Ke!==0&&Oe!==null){n=Oe;var h=Ai;e:switch(Ke){case 1:Ke=0,Ai=null,Xs(e,n,h,1);break;case 2:case 9:if(om(h)){Ke=0,Ai=null,Kg(n);break}n=function(){Ke!==2&&Ke!==9||an!==e||(Ke=7),fa(e)},h.then(n,n);break t;case 3:Ke=7;break t;case 4:Ke=5;break t;case 7:om(h)?(Ke=0,Ai=null,Kg(n)):(Ke=0,Ai=null,Xs(e,n,h,7));break;case 5:var T=null;switch(Oe.tag){case 26:T=Oe.memoizedState;case 5:case 27:var D=Oe;if(!T||U_(T)){Ke=0,Ai=null;var W=D.sibling;if(W!==null)Oe=W;else{var ut=D.return;ut!==null?(Oe=ut,bc(ut)):Oe=null}break e}}Ke=0,Ai=null,Xs(e,n,h,5);break;case 6:Ke=0,Ai=null,Xs(e,n,h,6);break;case 8:_h(),mn=6;break t;default:throw Error(r(462))}}Ly();break}catch(Et){qg(e,Et)}while(!0);return Aa=Yr=null,X.H=o,X.A=u,Ze=a,Oe!==null?0:(an=null,He=0,Wl(),mn)}function Ly(){for(;Oe!==null&&!Xn();)Zg(Oe)}function Zg(e){var n=Eg(e.alternate,e,Oa);e.memoizedProps=e.pendingProps,n===null?bc(e):Oe=n}function Kg(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=gg(a,n,n.pendingProps,n.type,void 0,He);break;case 11:n=gg(a,n,n.pendingProps,n.type.render,n.ref,He);break;case 5:Of(n);default:bg(a,n),n=Oe=Qp(n,Oa),n=Eg(a,n,Oa)}e.memoizedProps=e.pendingProps,n===null?bc(e):Oe=n}function Xs(e,n,a,o){Aa=Yr=null,Of(n),Ps=null,Qo=0;var u=n.return;try{if(xy(e,u,n,a,He)){mn=1,mc(e,Fi(a,e.current)),Oe=null;return}}catch(h){if(u!==null)throw Oe=u,h;mn=1,mc(e,Fi(a,e.current)),Oe=null;return}n.flags&32768?(Xe||o===1?e=!0:zs||(He&536870912)!==0?e=!1:(or=e=!0,(o===2||o===9||o===3||o===6)&&(o=Hi.current,o!==null&&o.tag===13&&(o.flags|=16384))),Qg(n,e)):bc(n)}function bc(e){var n=e;do{if((n.flags&32768)!==0){Qg(n,or);return}e=n.return;var a=My(n.alternate,n,Oa);if(a!==null){Oe=a;return}if(n=n.sibling,n!==null){Oe=n;return}Oe=n=e}while(n!==null);mn===0&&(mn=5)}function Qg(e,n){do{var a=by(e.alternate,e);if(a!==null){a.flags&=32767,Oe=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){Oe=e;return}Oe=e=a}while(e!==null);mn=6,Oe=null}function Jg(e,n,a,o,u,h,T,D,W){e.cancelPendingCommit=null;do Tc();while(Zn!==0);if((Ze&6)!==0)throw Error(r(327));if(n!==null){if(n===e.current)throw Error(r(177));if(h=n.lanes|n.childLanes,h|=cf,Yt(e,a,h,T,D,W),e===an&&(Oe=an=null,He=0),Gs=n,ur=e,Vs=a,ph=h,mh=u,Vg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Fy(I,function(){return i_(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=X.T,X.T=null,u=st.p,st.p=2,T=Ze,Ze|=4;try{Ty(e,n,a)}finally{Ze=T,st.p=u,X.T=o}}Zn=1,$g(),t_(),e_()}}function $g(){if(Zn===1){Zn=0;var e=ur,n=Gs,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=X.T,X.T=null;var o=st.p;st.p=2;var u=Ze;Ze|=4;try{Pg(n,e);var h=Uh,T=Gp(e.containerInfo),D=h.focusedElem,W=h.selectionRange;if(T!==D&&D&&D.ownerDocument&&Hp(D.ownerDocument.documentElement,D)){if(W!==null&&af(D)){var ut=W.start,Et=W.end;if(Et===void 0&&(Et=ut),"selectionStart"in D)D.selectionStart=ut,D.selectionEnd=Math.min(Et,D.value.length);else{var Dt=D.ownerDocument||document,dt=Dt&&Dt.defaultView||window;if(dt.getSelection){var mt=dt.getSelection(),_e=D.textContent.length,he=Math.min(W.start,_e),$e=W.end===void 0?he:Math.min(W.end,_e);!mt.extend&&he>$e&&(T=$e,$e=he,he=T);var nt=zp(D,he),Q=zp(D,$e);if(nt&&Q&&(mt.rangeCount!==1||mt.anchorNode!==nt.node||mt.anchorOffset!==nt.offset||mt.focusNode!==Q.node||mt.focusOffset!==Q.offset)){var lt=Dt.createRange();lt.setStart(nt.node,nt.offset),mt.removeAllRanges(),he>$e?(mt.addRange(lt),mt.extend(Q.node,Q.offset)):(lt.setEnd(Q.node,Q.offset),mt.addRange(lt))}}}}for(Dt=[],mt=D;mt=mt.parentNode;)mt.nodeType===1&&Dt.push({element:mt,left:mt.scrollLeft,top:mt.scrollTop});for(typeof D.focus=="function"&&D.focus(),D=0;D<Dt.length;D++){var At=Dt[D];At.element.scrollLeft=At.left,At.element.scrollTop=At.top}}Bc=!!Dh,Uh=Dh=null}finally{Ze=u,st.p=o,X.T=a}}e.current=n,Zn=2}}function t_(){if(Zn===2){Zn=0;var e=ur,n=Gs,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=X.T,X.T=null;var o=st.p;st.p=2;var u=Ze;Ze|=4;try{Ug(e,n.alternate,n)}finally{Ze=u,st.p=o,X.T=a}}Zn=3}}function e_(){if(Zn===4||Zn===3){Zn=0,De();var e=ur,n=Gs,a=Vs,o=Vg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Zn=5:(Zn=0,Gs=ur=null,n_(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(cr=null),cn(a),n=n.stateNode,Xt&&typeof Xt.onCommitFiberRoot=="function")try{Xt.onCommitFiberRoot(xt,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=X.T,u=st.p,st.p=2,X.T=null;try{for(var h=e.onRecoverableError,T=0;T<o.length;T++){var D=o[T];h(D.value,{componentStack:D.stack})}}finally{X.T=n,st.p=u}}(Vs&3)!==0&&Tc(),fa(e),u=e.pendingLanes,(a&4194090)!==0&&(u&42)!==0?e===gh?sl++:(sl=0,gh=e):sl=0,ol(0)}}function n_(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Ho(n)))}function Tc(e){return $g(),t_(),e_(),i_()}function i_(){if(Zn!==5)return!1;var e=ur,n=ph;ph=0;var a=cn(Vs),o=X.T,u=st.p;try{st.p=32>a?32:a,X.T=null,a=mh,mh=null;var h=ur,T=Vs;if(Zn=0,Gs=ur=null,Vs=0,(Ze&6)!==0)throw Error(r(331));var D=Ze;if(Ze|=4,Hg(h.current),Bg(h,h.current,T,a),Ze=D,ol(0,!1),Xt&&typeof Xt.onPostCommitFiberRoot=="function")try{Xt.onPostCommitFiberRoot(xt,h)}catch{}return!0}finally{st.p=u,X.T=o,n_(e,n)}}function a_(e,n,a){n=Fi(a,n),n=jf(e.stateNode,n,2),e=tr(e,n,2),e!==null&&(wt(e,2),fa(e))}function nn(e,n,a){if(e.tag===3)a_(e,e,a);else for(;n!==null;){if(n.tag===3){a_(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(cr===null||!cr.has(o))){e=Fi(a,e),a=lg(2),o=tr(n,a,2),o!==null&&(cg(a,o,n,e),wt(o,2),fa(o));break}}n=n.return}}function Sh(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new wy;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(uh=!0,u.add(a),e=Ny.bind(null,e,n,a),n.then(e,e))}function Ny(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,an===e&&(He&a)===a&&(mn===4||mn===3&&(He&62914560)===He&&300>ve()-dh?(Ze&2)===0&&ks(e,0):fh|=a,Hs===He&&(Hs=0)),fa(e)}function r_(e,n){n===0&&(n=Gt()),e=Ts(e,n),e!==null&&(wt(e,n),fa(e))}function Oy(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),r_(e,a)}function Py(e,n){var a=0;switch(e.tag){case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),r_(e,a)}function Fy(e,n){return Ae(e,n)}var Ac=null,Ws=null,xh=!1,Rc=!1,Eh=!1,ts=0;function fa(e){e!==Ws&&e.next===null&&(Ws===null?Ac=Ws=e:Ws=Ws.next=e),Rc=!0,xh||(xh=!0,Iy())}function ol(e,n){if(!Eh&&Rc){Eh=!0;do for(var a=!1,o=Ac;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var h=0;else{var T=o.suspendedLanes,D=o.pingedLanes;h=(1<<31-Qt(42|e)+1)-1,h&=u&~(T&~D),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(a=!0,c_(o,h))}else h=He,h=ye(o,o===an?h:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(h&3)===0||me(o,h)||(a=!0,c_(o,h));o=o.next}while(a);Eh=!1}}function By(){s_()}function s_(){Rc=xh=!1;var e=0;ts!==0&&(qy()&&(e=ts),ts=0);for(var n=ve(),a=null,o=Ac;o!==null;){var u=o.next,h=o_(o,n);h===0?(o.next=null,a===null?Ac=u:a.next=u,u===null&&(Ws=a)):(a=o,(e!==0||(h&3)!==0)&&(Rc=!0)),o=u}ol(e)}function o_(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,h=e.pendingLanes&-62914561;0<h;){var T=31-Qt(h),D=1<<T,W=u[T];W===-1?((D&a)===0||(D&o)!==0)&&(u[T]=Wt(D,n)):W<=n&&(e.expiredLanes|=D),h&=~D}if(n=an,a=He,a=ye(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(Ke===2||Ke===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&j(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||me(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&j(o),cn(a)){case 2:case 8:a=ee;break;case 32:a=I;break;case 268435456:a=ft;break;default:a=I}return o=l_.bind(null,e),a=Ae(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&j(o),e.callbackPriority=2,e.callbackNode=null,2}function l_(e,n){if(Zn!==0&&Zn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Tc()&&e.callbackNode!==a)return null;var o=He;return o=ye(e,e===an?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(Xg(e,o,n),o_(e,ve()),e.callbackNode!=null&&e.callbackNode===a?l_.bind(null,e):null)}function c_(e,n){if(Tc())return null;Xg(e,n,!0)}function Iy(){jy(function(){(Ze&6)!==0?Ae(We,By):s_()})}function Mh(){return ts===0&&(ts=$()),ts}function u_(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ur(""+e)}function f_(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function zy(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var h=u_((u[Rn]||null).action),T=o.submitter;T&&(n=(n=T[Rn]||null)?u_(n.formAction):T.getAttribute("formAction"),n!==null&&(h=n,T=null));var D=new Ss("action","action",null,o,u);e.push({event:D,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(ts!==0){var W=T?f_(u,T):new FormData(u);kf(a,{pending:!0,data:W,method:u.method,action:h},null,W)}}else typeof h=="function"&&(D.preventDefault(),W=T?f_(u,T):new FormData(u),kf(a,{pending:!0,data:W,method:u.method,action:h},h,W))},currentTarget:u}]})}}for(var bh=0;bh<lf.length;bh++){var Th=lf[bh],Hy=Th.toLowerCase(),Gy=Th[0].toUpperCase()+Th.slice(1);Zi(Hy,"on"+Gy)}Zi(Xp,"onAnimationEnd"),Zi(Wp,"onAnimationIteration"),Zi(qp,"onAnimationStart"),Zi("dblclick","onDoubleClick"),Zi("focusin","onFocus"),Zi("focusout","onBlur"),Zi(ay,"onTransitionRun"),Zi(ry,"onTransitionStart"),Zi(sy,"onTransitionCancel"),Zi(Yp,"onTransitionEnd"),N("onMouseEnter",["mouseout","mouseover"]),N("onMouseLeave",["mouseout","mouseover"]),N("onPointerEnter",["pointerout","pointerover"]),N("onPointerLeave",["pointerout","pointerover"]),Yi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Yi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Yi("onBeforeInput",["compositionend","keypress","textInput","paste"]),Yi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Yi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Yi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ll="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Vy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ll));function h_(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var h=void 0;if(n)for(var T=o.length-1;0<=T;T--){var D=o[T],W=D.instance,ut=D.currentTarget;if(D=D.listener,W!==h&&u.isPropagationStopped())break t;h=D,u.currentTarget=ut;try{h(u)}catch(Et){pc(Et)}u.currentTarget=null,h=W}else for(T=0;T<o.length;T++){if(D=o[T],W=D.instance,ut=D.currentTarget,D=D.listener,W!==h&&u.isPropagationStopped())break t;h=D,u.currentTarget=ut;try{h(u)}catch(Et){pc(Et)}u.currentTarget=null,h=W}}}}function Pe(e,n){var a=n[va];a===void 0&&(a=n[va]=new Set);var o=e+"__bubble";a.has(o)||(d_(n,e,2,!1),a.add(o))}function Ah(e,n,a){var o=0;n&&(o|=4),d_(a,e,o,n)}var wc="_reactListening"+Math.random().toString(36).slice(2);function Rh(e){if(!e[wc]){e[wc]=!0,gs.forEach(function(a){a!=="selectionchange"&&(Vy.has(a)||Ah(a,!1,e),Ah(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[wc]||(n[wc]=!0,Ah("selectionchange",!1,n))}}function d_(e,n,a,o){switch(B_(n)){case 2:var u=mS;break;case 8:u=gS;break;default:u=Gh}a=u.bind(null,n,a,e),u=void 0,!_s||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function wh(e,n,a,o,u){var h=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var T=o.tag;if(T===3||T===4){var D=o.stateNode.containerInfo;if(D===u)break;if(T===4)for(T=o.return;T!==null;){var W=T.tag;if((W===3||W===4)&&T.stateNode.containerInfo===u)return;T=T.return}for(;D!==null;){if(T=qi(D),T===null)return;if(W=T.tag,W===5||W===6||W===26||W===27){o=h=T;continue t}D=D.parentNode}}o=o.return}Hl(function(){var ut=h,Et=Ao(a),Dt=[];t:{var dt=jp.get(e);if(dt!==void 0){var mt=Ss,_e=e;switch(e){case"keypress":if(Or(a)===0)break t;case"keydown":case"keyup":mt=Qu;break;case"focusin":_e="focus",mt=Br;break;case"focusout":_e="blur",mt=Br;break;case"beforeblur":case"afterblur":mt=Br;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":mt=Vl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":mt=Hu;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":mt=Xl;break;case Xp:case Wp:case qp:mt=Ir;break;case Yp:mt=No;break;case"scroll":case"scrollend":mt=Iu;break;case"wheel":mt=f;break;case"copy":case"cut":case"paste":mt=Xu;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":mt=Pi;break;case"toggle":case"beforetoggle":mt=S}var he=(n&4)!==0,$e=!he&&(e==="scroll"||e==="scrollend"),nt=he?dt!==null?dt+"Capture":null:dt;he=[];for(var Q=ut,lt;Q!==null;){var At=Q;if(lt=At.stateNode,At=At.tag,At!==5&&At!==26&&At!==27||lt===null||nt===null||(At=Lr(Q,nt),At!=null&&he.push(cl(Q,At,lt))),$e)break;Q=Q.return}0<he.length&&(dt=new mt(dt,_e,null,a,Et),Dt.push({event:dt,listeners:he}))}}if((n&7)===0){t:{if(dt=e==="mouseover"||e==="pointerover",mt=e==="mouseout"||e==="pointerout",dt&&a!==To&&(_e=a.relatedTarget||a.fromElement)&&(qi(_e)||_e[Qn]))break t;if((mt||dt)&&(dt=Et.window===Et?Et:(dt=Et.ownerDocument)?dt.defaultView||dt.parentWindow:window,mt?(_e=a.relatedTarget||a.toElement,mt=ut,_e=_e?qi(_e):null,_e!==null&&($e=c(_e),he=_e.tag,_e!==$e||he!==5&&he!==27&&he!==6)&&(_e=null)):(mt=null,_e=ut),mt!==_e)){if(he=Vl,At="onMouseLeave",nt="onMouseEnter",Q="mouse",(e==="pointerout"||e==="pointerover")&&(he=Pi,At="onPointerLeave",nt="onPointerEnter",Q="pointer"),$e=mt==null?dt:ya(mt),lt=_e==null?dt:ya(_e),dt=new he(At,Q+"leave",mt,a,Et),dt.target=$e,dt.relatedTarget=lt,At=null,qi(Et)===ut&&(he=new he(nt,Q+"enter",_e,a,Et),he.target=lt,he.relatedTarget=$e,At=he),$e=At,mt&&_e)e:{for(he=mt,nt=_e,Q=0,lt=he;lt;lt=qs(lt))Q++;for(lt=0,At=nt;At;At=qs(At))lt++;for(;0<Q-lt;)he=qs(he),Q--;for(;0<lt-Q;)nt=qs(nt),lt--;for(;Q--;){if(he===nt||nt!==null&&he===nt.alternate)break e;he=qs(he),nt=qs(nt)}he=null}else he=null;mt!==null&&p_(Dt,dt,mt,he,!1),_e!==null&&$e!==null&&p_(Dt,$e,_e,he,!0)}}t:{if(dt=ut?ya(ut):window,mt=dt.nodeName&&dt.nodeName.toLowerCase(),mt==="select"||mt==="input"&&dt.type==="file")var Jt=Ea;else if(si(dt))if(Mn)Jt=ey;else{Jt=$0;var Ue=J0}else mt=dt.nodeName,!mt||mt.toLowerCase()!=="input"||dt.type!=="checkbox"&&dt.type!=="radio"?ut&&bo(ut.elementType)&&(Jt=Ea):Jt=ty;if(Jt&&(Jt=Jt(e,ut))){ti(Dt,Jt,a,Et);break t}Ue&&Ue(e,dt,ut),e==="focusout"&&ut&&dt.type==="number"&&ut.memoizedProps.value!=null&&Fn(dt,"number",dt.value)}switch(Ue=ut?ya(ut):window,e){case"focusin":(si(Ue)||Ue.contentEditable==="true")&&(Es=Ue,rf=ut,Po=null);break;case"focusout":Po=rf=Es=null;break;case"mousedown":sf=!0;break;case"contextmenu":case"mouseup":case"dragend":sf=!1,Vp(Dt,a,Et);break;case"selectionchange":if(iy)break;case"keydown":case"keyup":Vp(Dt,a,Et)}var re;if(L)t:{switch(e){case"compositionstart":var pe="onCompositionStart";break t;case"compositionend":pe="onCompositionEnd";break t;case"compositionupdate":pe="onCompositionUpdate";break t}pe=void 0}else xe?Kt(e,a)&&(pe="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(pe="onCompositionStart");pe&&(J&&a.locale!=="ko"&&(xe||pe!=="onCompositionStart"?pe==="onCompositionEnd"&&xe&&(re=Co()):(Oi=Et,wo="value"in Oi?Oi.value:Oi.textContent,xe=!0)),Ue=Cc(ut,pe),0<Ue.length&&(pe=new kl(pe,e,null,a,Et),Dt.push({event:pe,listeners:Ue}),re?pe.data=re:(re=te(a),re!==null&&(pe.data=re)))),(re=Z?$t(e,a):Ee(e,a))&&(pe=Cc(ut,"onBeforeInput"),0<pe.length&&(Ue=new kl("onBeforeInput","beforeinput",null,a,Et),Dt.push({event:Ue,listeners:pe}),Ue.data=re)),zy(Dt,e,ut,a,Et)}h_(Dt,n)})}function cl(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Cc(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,h=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||h===null||(u=Lr(e,a),u!=null&&o.unshift(cl(e,u,h)),u=Lr(e,n),u!=null&&o.push(cl(e,u,h))),e.tag===3)return o;e=e.return}return[]}function qs(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function p_(e,n,a,o,u){for(var h=n._reactName,T=[];a!==null&&a!==o;){var D=a,W=D.alternate,ut=D.stateNode;if(D=D.tag,W!==null&&W===o)break;D!==5&&D!==26&&D!==27||ut===null||(W=ut,u?(ut=Lr(a,h),ut!=null&&T.unshift(cl(a,ut,W))):u||(ut=Lr(a,h),ut!=null&&T.push(cl(a,ut,W)))),a=a.return}T.length!==0&&e.push({event:n,listeners:T})}var ky=/\r\n?/g,Xy=/\u0000|\uFFFD/g;function m_(e){return(typeof e=="string"?e:""+e).replace(ky,`
`).replace(Xy,"")}function g_(e,n){return n=m_(n),m_(e)===n}function Dc(){}function Je(e,n,a,o,u,h){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Ni(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Ni(e,""+o);break;case"className":zt(e,"class",o);break;case"tabIndex":zt(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":zt(e,a,o);break;case"style":Il(e,o,h);break;case"data":if(n!=="object"){zt(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Ur(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(a==="formAction"?(n!=="input"&&Je(e,n,"name",u.name,u,null),Je(e,n,"formEncType",u.formEncType,u,null),Je(e,n,"formMethod",u.formMethod,u,null),Je(e,n,"formTarget",u.formTarget,u,null)):(Je(e,n,"encType",u.encType,u,null),Je(e,n,"method",u.method,u,null),Je(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Ur(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=Dc);break;case"onScroll":o!=null&&Pe("scroll",e);break;case"onScrollEnd":o!=null&&Pe("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=Ur(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":Pe("beforetoggle",e),Pe("toggle",e),Ct(e,"popover",o);break;case"xlinkActuate":Ht(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Ht(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Ht(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Ht(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Ht(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Ht(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Ht(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Ht(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Ht(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Ct(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=ja.get(a)||a,Ct(e,a,o))}}function Ch(e,n,a,o,u,h){switch(a){case"style":Il(e,o,h);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof o=="string"?Ni(e,o):(typeof o=="number"||typeof o=="bigint")&&Ni(e,""+o);break;case"onScroll":o!=null&&Pe("scroll",e);break;case"onScrollEnd":o!=null&&Pe("scrollend",e);break;case"onClick":o!=null&&(e.onclick=Dc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Si.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),h=e[Rn]||null,h=h!=null?h[a]:null,typeof h=="function"&&e.removeEventListener(n,h,u),typeof o=="function")){typeof h!="function"&&h!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):Ct(e,a,o)}}}function Kn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Pe("error",e),Pe("load",e);var o=!1,u=!1,h;for(h in a)if(a.hasOwnProperty(h)){var T=a[h];if(T!=null)switch(h){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Je(e,n,h,T,a,null)}}u&&Je(e,n,"srcSet",a.srcSet,a,null),o&&Je(e,n,"src",a.src,a,null);return;case"input":Pe("invalid",e);var D=h=T=u=null,W=null,ut=null;for(o in a)if(a.hasOwnProperty(o)){var Et=a[o];if(Et!=null)switch(o){case"name":u=Et;break;case"type":T=Et;break;case"checked":W=Et;break;case"defaultChecked":ut=Et;break;case"value":h=Et;break;case"defaultValue":D=Et;break;case"children":case"dangerouslySetInnerHTML":if(Et!=null)throw Error(r(137,n));break;default:Je(e,n,o,Et,a,null)}}je(e,h,D,W,ut,T,u,!1),sn(e);return;case"select":Pe("invalid",e),o=T=h=null;for(u in a)if(a.hasOwnProperty(u)&&(D=a[u],D!=null))switch(u){case"value":h=D;break;case"defaultValue":T=D;break;case"multiple":o=D;default:Je(e,n,u,D,a,null)}n=h,a=T,e.multiple=!!o,n!=null?vn(e,!!o,n,!1):a!=null&&vn(e,!!o,a,!0);return;case"textarea":Pe("invalid",e),h=u=o=null;for(T in a)if(a.hasOwnProperty(T)&&(D=a[T],D!=null))switch(T){case"value":o=D;break;case"defaultValue":u=D;break;case"children":h=D;break;case"dangerouslySetInnerHTML":if(D!=null)throw Error(r(91));break;default:Je(e,n,T,D,a,null)}Dn(e,o,u,h),sn(e);return;case"option":for(W in a)if(a.hasOwnProperty(W)&&(o=a[W],o!=null))switch(W){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Je(e,n,W,o,a,null)}return;case"dialog":Pe("beforetoggle",e),Pe("toggle",e),Pe("cancel",e),Pe("close",e);break;case"iframe":case"object":Pe("load",e);break;case"video":case"audio":for(o=0;o<ll.length;o++)Pe(ll[o],e);break;case"image":Pe("error",e),Pe("load",e);break;case"details":Pe("toggle",e);break;case"embed":case"source":case"link":Pe("error",e),Pe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ut in a)if(a.hasOwnProperty(ut)&&(o=a[ut],o!=null))switch(ut){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Je(e,n,ut,o,a,null)}return;default:if(bo(n)){for(Et in a)a.hasOwnProperty(Et)&&(o=a[Et],o!==void 0&&Ch(e,n,Et,o,a,void 0));return}}for(D in a)a.hasOwnProperty(D)&&(o=a[D],o!=null&&Je(e,n,D,o,a,null))}function Wy(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,h=null,T=null,D=null,W=null,ut=null,Et=null;for(mt in a){var Dt=a[mt];if(a.hasOwnProperty(mt)&&Dt!=null)switch(mt){case"checked":break;case"value":break;case"defaultValue":W=Dt;default:o.hasOwnProperty(mt)||Je(e,n,mt,null,o,Dt)}}for(var dt in o){var mt=o[dt];if(Dt=a[dt],o.hasOwnProperty(dt)&&(mt!=null||Dt!=null))switch(dt){case"type":h=mt;break;case"name":u=mt;break;case"checked":ut=mt;break;case"defaultChecked":Et=mt;break;case"value":T=mt;break;case"defaultValue":D=mt;break;case"children":case"dangerouslySetInnerHTML":if(mt!=null)throw Error(r(137,n));break;default:mt!==Dt&&Je(e,n,dt,mt,o,Dt)}}Li(e,T,D,W,ut,Et,h,u);return;case"select":mt=T=D=dt=null;for(h in a)if(W=a[h],a.hasOwnProperty(h)&&W!=null)switch(h){case"value":break;case"multiple":mt=W;default:o.hasOwnProperty(h)||Je(e,n,h,null,o,W)}for(u in o)if(h=o[u],W=a[u],o.hasOwnProperty(u)&&(h!=null||W!=null))switch(u){case"value":dt=h;break;case"defaultValue":D=h;break;case"multiple":T=h;default:h!==W&&Je(e,n,u,h,o,W)}n=D,a=T,o=mt,dt!=null?vn(e,!!a,dt,!1):!!o!=!!a&&(n!=null?vn(e,!!a,n,!0):vn(e,!!a,a?[]:"",!1));return;case"textarea":mt=dt=null;for(D in a)if(u=a[D],a.hasOwnProperty(D)&&u!=null&&!o.hasOwnProperty(D))switch(D){case"value":break;case"children":break;default:Je(e,n,D,null,o,u)}for(T in o)if(u=o[T],h=a[T],o.hasOwnProperty(T)&&(u!=null||h!=null))switch(T){case"value":dt=u;break;case"defaultValue":mt=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==h&&Je(e,n,T,u,o,h)}yn(e,dt,mt);return;case"option":for(var _e in a)if(dt=a[_e],a.hasOwnProperty(_e)&&dt!=null&&!o.hasOwnProperty(_e))switch(_e){case"selected":e.selected=!1;break;default:Je(e,n,_e,null,o,dt)}for(W in o)if(dt=o[W],mt=a[W],o.hasOwnProperty(W)&&dt!==mt&&(dt!=null||mt!=null))switch(W){case"selected":e.selected=dt&&typeof dt!="function"&&typeof dt!="symbol";break;default:Je(e,n,W,dt,o,mt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var he in a)dt=a[he],a.hasOwnProperty(he)&&dt!=null&&!o.hasOwnProperty(he)&&Je(e,n,he,null,o,dt);for(ut in o)if(dt=o[ut],mt=a[ut],o.hasOwnProperty(ut)&&dt!==mt&&(dt!=null||mt!=null))switch(ut){case"children":case"dangerouslySetInnerHTML":if(dt!=null)throw Error(r(137,n));break;default:Je(e,n,ut,dt,o,mt)}return;default:if(bo(n)){for(var $e in a)dt=a[$e],a.hasOwnProperty($e)&&dt!==void 0&&!o.hasOwnProperty($e)&&Ch(e,n,$e,void 0,o,dt);for(Et in o)dt=o[Et],mt=a[Et],!o.hasOwnProperty(Et)||dt===mt||dt===void 0&&mt===void 0||Ch(e,n,Et,dt,o,mt);return}}for(var nt in a)dt=a[nt],a.hasOwnProperty(nt)&&dt!=null&&!o.hasOwnProperty(nt)&&Je(e,n,nt,null,o,dt);for(Dt in o)dt=o[Dt],mt=a[Dt],!o.hasOwnProperty(Dt)||dt===mt||dt==null&&mt==null||Je(e,n,Dt,dt,o,mt)}var Dh=null,Uh=null;function Uc(e){return e.nodeType===9?e:e.ownerDocument}function __(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function v_(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Lh(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Nh=null;function qy(){var e=window.event;return e&&e.type==="popstate"?e===Nh?!1:(Nh=e,!0):(Nh=null,!1)}var y_=typeof setTimeout=="function"?setTimeout:void 0,Yy=typeof clearTimeout=="function"?clearTimeout:void 0,S_=typeof Promise=="function"?Promise:void 0,jy=typeof queueMicrotask=="function"?queueMicrotask:typeof S_<"u"?function(e){return S_.resolve(null).then(e).catch(Zy)}:y_;function Zy(e){setTimeout(function(){throw e})}function hr(e){return e==="head"}function x_(e,n){var a=n,o=0,u=0;do{var h=a.nextSibling;if(e.removeChild(a),h&&h.nodeType===8)if(a=h.data,a==="/$"){if(0<o&&8>o){a=o;var T=e.ownerDocument;if(a&1&&ul(T.documentElement),a&2&&ul(T.body),a&4)for(a=T.head,ul(a),T=a.firstChild;T;){var D=T.nextSibling,W=T.nodeName;T[Jn]||W==="SCRIPT"||W==="STYLE"||W==="LINK"&&T.rel.toLowerCase()==="stylesheet"||a.removeChild(T),T=D}}if(u===0){e.removeChild(h),vl(n);return}u--}else a==="$"||a==="$?"||a==="$!"?u++:o=a.charCodeAt(0)-48;else o=0;a=h}while(a);vl(n)}function Oh(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Oh(a),yi(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Ky(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[Jn])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(h=e.getAttribute("rel"),h==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(h!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(h=e.getAttribute("src"),(h!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&h&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var h=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===h)return e}else return e;if(e=Qi(e.nextSibling),e===null)break}return null}function Qy(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Qi(e.nextSibling),e===null))return null;return e}function Ph(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function Jy(e,n){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function Qi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}var Fh=null;function E_(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return e;n--}else a==="/$"&&n++}e=e.previousSibling}return null}function M_(e,n,a){switch(n=Uc(a),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function ul(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);yi(e)}var Vi=new Map,b_=new Set;function Lc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Pa=st.d;st.d={f:$y,r:tS,D:eS,C:nS,L:iS,m:aS,X:sS,S:rS,M:oS};function $y(){var e=Pa.f(),n=Mc();return e||n}function tS(e){var n=hn(e);n!==null&&n.tag===5&&n.type==="form"?Xm(n):Pa.r(e)}var Ys=typeof document>"u"?null:document;function T_(e,n,a){var o=Ys;if(o&&typeof n=="string"&&n){var u=Ye(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),b_.has(u)||(b_.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Kn(n,"link",e),un(n),o.head.appendChild(n)))}}function eS(e){Pa.D(e),T_("dns-prefetch",e,null)}function nS(e,n){Pa.C(e,n),T_("preconnect",e,n)}function iS(e,n,a){Pa.L(e,n,a);var o=Ys;if(o&&e&&n){var u='link[rel="preload"][as="'+Ye(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Ye(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Ye(a.imageSizes)+'"]')):u+='[href="'+Ye(e)+'"]';var h=u;switch(n){case"style":h=js(e);break;case"script":h=Zs(e)}Vi.has(h)||(e=v({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),Vi.set(h,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(fl(h))||n==="script"&&o.querySelector(hl(h))||(n=o.createElement("link"),Kn(n,"link",e),un(n),o.head.appendChild(n)))}}function aS(e,n){Pa.m(e,n);var a=Ys;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Ye(o)+'"][href="'+Ye(e)+'"]',h=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=Zs(e)}if(!Vi.has(h)&&(e=v({rel:"modulepreload",href:e},n),Vi.set(h,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(hl(h)))return}o=a.createElement("link"),Kn(o,"link",e),un(o),a.head.appendChild(o)}}}function rS(e,n,a){Pa.S(e,n,a);var o=Ys;if(o&&e){var u=wn(o).hoistableStyles,h=js(e);n=n||"default";var T=u.get(h);if(!T){var D={loading:0,preload:null};if(T=o.querySelector(fl(h)))D.loading=5;else{e=v({rel:"stylesheet",href:e,"data-precedence":n},a),(a=Vi.get(h))&&Bh(e,a);var W=T=o.createElement("link");un(W),Kn(W,"link",e),W._p=new Promise(function(ut,Et){W.onload=ut,W.onerror=Et}),W.addEventListener("load",function(){D.loading|=1}),W.addEventListener("error",function(){D.loading|=2}),D.loading|=4,Nc(T,n,o)}T={type:"stylesheet",instance:T,count:1,state:D},u.set(h,T)}}}function sS(e,n){Pa.X(e,n);var a=Ys;if(a&&e){var o=wn(a).hoistableScripts,u=Zs(e),h=o.get(u);h||(h=a.querySelector(hl(u)),h||(e=v({src:e,async:!0},n),(n=Vi.get(u))&&Ih(e,n),h=a.createElement("script"),un(h),Kn(h,"link",e),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function oS(e,n){Pa.M(e,n);var a=Ys;if(a&&e){var o=wn(a).hoistableScripts,u=Zs(e),h=o.get(u);h||(h=a.querySelector(hl(u)),h||(e=v({src:e,async:!0,type:"module"},n),(n=Vi.get(u))&&Ih(e,n),h=a.createElement("script"),un(h),Kn(h,"link",e),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function A_(e,n,a,o){var u=(u=Lt.current)?Lc(u):null;if(!u)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=js(a.href),a=wn(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=js(a.href);var h=wn(u).hoistableStyles,T=h.get(e);if(T||(u=u.ownerDocument||u,T={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(e,T),(h=u.querySelector(fl(e)))&&!h._p&&(T.instance=h,T.state.loading=5),Vi.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Vi.set(e,a),h||lS(u,e,a,T.state))),n&&o===null)throw Error(r(528,""));return T}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Zs(a),a=wn(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function js(e){return'href="'+Ye(e)+'"'}function fl(e){return'link[rel="stylesheet"]['+e+"]"}function R_(e){return v({},e,{"data-precedence":e.precedence,precedence:null})}function lS(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Kn(n,"link",a),un(n),e.head.appendChild(n))}function Zs(e){return'[src="'+Ye(e)+'"]'}function hl(e){return"script[async]"+e}function w_(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+Ye(a.href)+'"]');if(o)return n.instance=o,un(o),o;var u=v({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),un(o),Kn(o,"style",u),Nc(o,a.precedence,e),n.instance=o;case"stylesheet":u=js(a.href);var h=e.querySelector(fl(u));if(h)return n.state.loading|=4,n.instance=h,un(h),h;o=R_(a),(u=Vi.get(u))&&Bh(o,u),h=(e.ownerDocument||e).createElement("link"),un(h);var T=h;return T._p=new Promise(function(D,W){T.onload=D,T.onerror=W}),Kn(h,"link",o),n.state.loading|=4,Nc(h,a.precedence,e),n.instance=h;case"script":return h=Zs(a.src),(u=e.querySelector(hl(h)))?(n.instance=u,un(u),u):(o=a,(u=Vi.get(h))&&(o=v({},a),Ih(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),un(u),Kn(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,Nc(o,a.precedence,e));return n.instance}function Nc(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,h=u,T=0;T<o.length;T++){var D=o[T];if(D.dataset.precedence===n)h=D;else if(h!==u)break}h?h.parentNode.insertBefore(e,h.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Bh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Ih(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Oc=null;function C_(e,n,a){if(Oc===null){var o=new Map,u=Oc=new Map;u.set(a,o)}else u=Oc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var h=a[u];if(!(h[Jn]||h[_n]||e==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var T=h.getAttribute(n)||"";T=e+T;var D=o.get(T);D?D.push(h):o.set(T,[h])}}return o}function D_(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function cS(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function U_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var dl=null;function uS(){}function fS(e,n,a){if(dl===null)throw Error(r(475));var o=dl;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var u=js(a.href),h=e.querySelector(fl(u));if(h){e=h._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(o.count++,o=Pc.bind(o),e.then(o,o)),n.state.loading|=4,n.instance=h,un(h);return}h=e.ownerDocument||e,a=R_(a),(u=Vi.get(u))&&Bh(a,u),h=h.createElement("link"),un(h);var T=h;T._p=new Promise(function(D,W){T.onload=D,T.onerror=W}),Kn(h,"link",a),n.instance=h}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(o.count++,n=Pc.bind(o),e.addEventListener("load",n),e.addEventListener("error",n))}}function hS(){if(dl===null)throw Error(r(475));var e=dl;return e.stylesheets&&e.count===0&&zh(e,e.stylesheets),0<e.count?function(n){var a=setTimeout(function(){if(e.stylesheets&&zh(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a)}}:null}function Pc(){if(this.count--,this.count===0){if(this.stylesheets)zh(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Fc=null;function zh(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Fc=new Map,n.forEach(dS,e),Fc=null,Pc.call(e))}function dS(e,n){if(!(n.state.loading&4)){var a=Fc.get(e);if(a)var o=a.get(null);else{a=new Map,Fc.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<u.length;h++){var T=u[h];(T.nodeName==="LINK"||T.getAttribute("media")!=="not all")&&(a.set(T.dataset.precedence,T),o=T)}o&&a.set(null,o)}u=n.instance,T=u.getAttribute("data-precedence"),h=a.get(T)||o,h===o&&a.set(null,u),a.set(T,u),this.count++,o=Pc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),h?h.parentNode.insertBefore(u,h.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var pl={$$typeof:G,Provider:null,Consumer:null,_currentValue:et,_currentValue2:et,_threadCount:0};function pS(e,n,a,o,u,h,T,D){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=vt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=vt(0),this.hiddenUpdates=vt(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=h,this.onRecoverableError=T,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=D,this.incompleteTransitions=new Map}function L_(e,n,a,o,u,h,T,D,W,ut,Et,Dt){return e=new pS(e,n,a,T,D,W,ut,Dt),n=1,h===!0&&(n|=24),h=Mi(3,null,null,n),e.current=h,h.stateNode=e,n=Sf(),n.refCount++,e.pooledCache=n,n.refCount++,h.memoizedState={element:o,isDehydrated:a,cache:n},bf(h),e}function N_(e){return e?(e=As,e):As}function O_(e,n,a,o,u,h){u=N_(u),o.context===null?o.context=u:o.pendingContext=u,o=$a(n),o.payload={element:a},h=h===void 0?null:h,h!==null&&(o.callback=h),a=tr(e,o,n),a!==null&&(wi(a,e,n),Xo(a,e,n))}function P_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Hh(e,n){P_(e,n),(e=e.alternate)&&P_(e,n)}function F_(e){if(e.tag===13){var n=Ts(e,67108864);n!==null&&wi(n,e,67108864),Hh(e,67108864)}}var Bc=!0;function mS(e,n,a,o){var u=X.T;X.T=null;var h=st.p;try{st.p=2,Gh(e,n,a,o)}finally{st.p=h,X.T=u}}function gS(e,n,a,o){var u=X.T;X.T=null;var h=st.p;try{st.p=8,Gh(e,n,a,o)}finally{st.p=h,X.T=u}}function Gh(e,n,a,o){if(Bc){var u=Vh(o);if(u===null)wh(e,n,o,Ic,a),I_(e,o);else if(vS(u,e,n,a,o))o.stopPropagation();else if(I_(e,o),n&4&&-1<_S.indexOf(e)){for(;u!==null;){var h=hn(u);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var T=qt(h.pendingLanes);if(T!==0){var D=h;for(D.pendingLanes|=2,D.entangledLanes|=2;T;){var W=1<<31-Qt(T);D.entanglements[1]|=W,T&=~W}fa(h),(Ze&6)===0&&(xc=ve()+500,ol(0))}}break;case 13:D=Ts(h,2),D!==null&&wi(D,h,2),Mc(),Hh(h,2)}if(h=Vh(o),h===null&&wh(e,n,o,Ic,a),h===u)break;u=h}u!==null&&o.stopPropagation()}else wh(e,n,o,null,a)}}function Vh(e){return e=Ao(e),kh(e)}var Ic=null;function kh(e){if(Ic=null,e=qi(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=d(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Ic=e,null}function B_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ae()){case We:return 2;case ee:return 8;case I:case U:return 32;case ft:return 268435456;default:return 32}default:return 32}}var Xh=!1,dr=null,pr=null,mr=null,ml=new Map,gl=new Map,gr=[],_S="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function I_(e,n){switch(e){case"focusin":case"focusout":dr=null;break;case"dragenter":case"dragleave":pr=null;break;case"mouseover":case"mouseout":mr=null;break;case"pointerover":case"pointerout":ml.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":gl.delete(n.pointerId)}}function _l(e,n,a,o,u,h){return e===null||e.nativeEvent!==h?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:h,targetContainers:[u]},n!==null&&(n=hn(n),n!==null&&F_(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function vS(e,n,a,o,u){switch(n){case"focusin":return dr=_l(dr,e,n,a,o,u),!0;case"dragenter":return pr=_l(pr,e,n,a,o,u),!0;case"mouseover":return mr=_l(mr,e,n,a,o,u),!0;case"pointerover":var h=u.pointerId;return ml.set(h,_l(ml.get(h)||null,e,n,a,o,u)),!0;case"gotpointercapture":return h=u.pointerId,gl.set(h,_l(gl.get(h)||null,e,n,a,o,u)),!0}return!1}function z_(e){var n=qi(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){e.blockedOn=n,ri(e.priority,function(){if(a.tag===13){var o=Ri();o=R(o);var u=Ts(a,o);u!==null&&wi(u,a,o),Hh(a,o)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function zc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Vh(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);To=o,a.target.dispatchEvent(o),To=null}else return n=hn(a),n!==null&&F_(n),e.blockedOn=a,!1;n.shift()}return!0}function H_(e,n,a){zc(e)&&a.delete(n)}function yS(){Xh=!1,dr!==null&&zc(dr)&&(dr=null),pr!==null&&zc(pr)&&(pr=null),mr!==null&&zc(mr)&&(mr=null),ml.forEach(H_),gl.forEach(H_)}function Hc(e,n){e.blockedOn===n&&(e.blockedOn=null,Xh||(Xh=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,yS)))}var Gc=null;function G_(e){Gc!==e&&(Gc=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){Gc===e&&(Gc=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(kh(o||a)===null)continue;break}var h=hn(a);h!==null&&(e.splice(n,3),n-=3,kf(h,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function vl(e){function n(W){return Hc(W,e)}dr!==null&&Hc(dr,e),pr!==null&&Hc(pr,e),mr!==null&&Hc(mr,e),ml.forEach(n),gl.forEach(n);for(var a=0;a<gr.length;a++){var o=gr[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<gr.length&&(a=gr[0],a.blockedOn===null);)z_(a),a.blockedOn===null&&gr.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],h=a[o+1],T=u[Rn]||null;if(typeof h=="function")T||G_(a);else if(T){var D=null;if(h&&h.hasAttribute("formAction")){if(u=h,T=h[Rn]||null)D=T.formAction;else if(kh(u)!==null)continue}else D=T.action;typeof D=="function"?a[o+1]=D:(a.splice(o,3),o-=3),G_(a)}}}function Wh(e){this._internalRoot=e}Vc.prototype.render=Wh.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,o=Ri();O_(a,o,e,n,null,null)},Vc.prototype.unmount=Wh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;O_(e.current,2,null,e,null,null),Mc(),n[Qn]=null}};function Vc(e){this._internalRoot=e}Vc.prototype.unstable_scheduleHydration=function(e){if(e){var n=Se();e={blockedOn:null,target:e,priority:n};for(var a=0;a<gr.length&&n!==0&&n<gr[a].priority;a++);gr.splice(a,0,e),a===0&&z_(e)}};var V_=t.version;if(V_!=="19.1.0")throw Error(r(527,V_,"19.1.0"));st.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=_(n),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var SS={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:X,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var kc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!kc.isDisabled&&kc.supportsFiber)try{xt=kc.inject(SS),Xt=kc}catch{}}return Sl.createRoot=function(e,n){if(!l(e))throw Error(r(299));var a=!1,o="",u=ag,h=rg,T=sg,D=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(h=n.onCaughtError),n.onRecoverableError!==void 0&&(T=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(D=n.unstable_transitionCallbacks)),n=L_(e,1,!1,null,null,a,o,u,h,T,D,null),e[Qn]=n.current,Rh(e),new Wh(n)},Sl.hydrateRoot=function(e,n,a){if(!l(e))throw Error(r(299));var o=!1,u="",h=ag,T=rg,D=sg,W=null,ut=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(h=a.onUncaughtError),a.onCaughtError!==void 0&&(T=a.onCaughtError),a.onRecoverableError!==void 0&&(D=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(W=a.unstable_transitionCallbacks),a.formState!==void 0&&(ut=a.formState)),n=L_(e,1,!0,n,a??null,o,u,h,T,D,W,ut),n.context=N_(null),a=n.current,o=Ri(),o=R(o),u=$a(o),u.callback=null,tr(a,u,o),a=o,n.current.lanes=a,wt(n,a),fa(n),e[Qn]=n.current,Rh(e),new Vc(n)},Sl.version="19.1.0",Sl}var J_;function LS(){if(J_)return Yh.exports;J_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),Yh.exports=US(),Yh.exports}var NS=LS(),Vn=xp();const $_=y0(Vn);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ep="176",ho={ROTATE:0,DOLLY:1,PAN:2},uo={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},OS=0,tv=1,PS=2,S0=1,FS=2,Va=3,wr=0,_i=1,ka=2,Ar=0,po=1,ev=2,nv=3,iv=4,BS=5,ls=100,IS=101,zS=102,HS=103,GS=104,VS=200,kS=201,XS=202,WS=203,Nd=204,Od=205,qS=206,YS=207,jS=208,ZS=209,KS=210,QS=211,JS=212,$S=213,tx=214,Pd=0,Fd=1,Bd=2,go=3,Id=4,zd=5,Hd=6,Gd=7,Mp=0,ex=1,nx=2,Rr=0,ix=1,ax=2,rx=3,sx=4,ox=5,lx=6,cx=7,x0=300,_o=301,vo=302,Vd=303,kd=304,Nu=306,Xd=1e3,us=1001,Wd=1002,aa=1003,ux=1004,Wc=1005,pa=1006,Jh=1007,fs=1008,ga=1009,E0=1010,M0=1011,Dl=1012,bp=1013,hs=1014,Xa=1015,Ol=1016,Tp=1017,Ap=1018,Ul=1020,b0=35902,T0=1021,A0=1022,na=1023,Ll=1026,Nl=1027,R0=1028,Rp=1029,w0=1030,wp=1031,Cp=1033,vu=33776,yu=33777,Su=33778,xu=33779,qd=35840,Yd=35841,jd=35842,Zd=35843,Kd=36196,Qd=37492,Jd=37496,$d=37808,tp=37809,ep=37810,np=37811,ip=37812,ap=37813,rp=37814,sp=37815,op=37816,lp=37817,cp=37818,up=37819,fp=37820,hp=37821,Eu=36492,dp=36494,pp=36495,C0=36283,mp=36284,gp=36285,_p=36286,fx=3200,hx=3201,D0=0,dx=1,Tr="",Ui="srgb",yo="srgb-linear",Ru="linear",tn="srgb",Ks=7680,av=519,px=512,mx=513,gx=514,U0=515,_x=516,vx=517,yx=518,Sx=519,rv=35044,sv="300 es",Wa=2e3,wu=2001;class ms{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(i)===-1&&r[t].push(i)}hasEventListener(t,i){const r=this._listeners;return r===void 0?!1:r[t]!==void 0&&r[t].indexOf(i)!==-1}removeEventListener(t,i){const r=this._listeners;if(r===void 0)return;const l=r[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const r=i[t.type];if(r!==void 0){t.target=this;const l=r.slice(0);for(let c=0,d=l.length;c<d;c++)l[c].call(this,t);t.target=null}}}const ii=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Mu=Math.PI/180,vp=180/Math.PI;function Pl(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(ii[s&255]+ii[s>>8&255]+ii[s>>16&255]+ii[s>>24&255]+"-"+ii[t&255]+ii[t>>8&255]+"-"+ii[t>>16&15|64]+ii[t>>24&255]+"-"+ii[i&63|128]+ii[i>>8&255]+"-"+ii[i>>16&255]+ii[i>>24&255]+ii[r&255]+ii[r>>8&255]+ii[r>>16&255]+ii[r>>24&255]).toLowerCase()}function Fe(s,t,i){return Math.max(t,Math.min(i,s))}function xx(s,t){return(s%t+t)%t}function $h(s,t,i){return(1-i)*s+i*t}function xl(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function mi(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Ex={DEG2RAD:Mu};class Te{constructor(t=0,i=0){Te.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,r=this.y,l=t.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Fe(this.x,t.x,i.x),this.y=Fe(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Fe(this.x,t,i),this.y=Fe(this.y,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Fe(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(Fe(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-t.x,d=this.y-t.y;return this.x=c*r-d*l+t.x,this.y=c*l+d*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class be{constructor(t,i,r,l,c,d,m,_,g){be.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,l,c,d,m,_,g)}set(t,i,r,l,c,d,m,_,g){const v=this.elements;return v[0]=t,v[1]=l,v[2]=m,v[3]=i,v[4]=c,v[5]=_,v[6]=r,v[7]=d,v[8]=g,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,c=this.elements,d=r[0],m=r[3],_=r[6],g=r[1],v=r[4],y=r[7],E=r[2],b=r[5],w=r[8],C=l[0],M=l[3],x=l[6],V=l[1],G=l[4],P=l[7],Y=l[2],z=l[5],k=l[8];return c[0]=d*C+m*V+_*Y,c[3]=d*M+m*G+_*z,c[6]=d*x+m*P+_*k,c[1]=g*C+v*V+y*Y,c[4]=g*M+v*G+y*z,c[7]=g*x+v*P+y*k,c[2]=E*C+b*V+w*Y,c[5]=E*M+b*G+w*z,c[8]=E*x+b*P+w*k,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],d=t[4],m=t[5],_=t[6],g=t[7],v=t[8];return i*d*v-i*m*g-r*c*v+r*m*_+l*c*g-l*d*_}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],d=t[4],m=t[5],_=t[6],g=t[7],v=t[8],y=v*d-m*g,E=m*_-v*c,b=g*c-d*_,w=i*y+r*E+l*b;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/w;return t[0]=y*C,t[1]=(l*g-v*r)*C,t[2]=(m*r-l*d)*C,t[3]=E*C,t[4]=(v*i-l*_)*C,t[5]=(l*c-m*i)*C,t[6]=b*C,t[7]=(r*_-g*i)*C,t[8]=(d*i-r*c)*C,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,l,c,d,m){const _=Math.cos(c),g=Math.sin(c);return this.set(r*_,r*g,-r*(_*d+g*m)+d+t,-l*g,l*_,-l*(-g*d+_*m)+m+i,0,0,1),this}scale(t,i){return this.premultiply(td.makeScale(t,i)),this}rotate(t){return this.premultiply(td.makeRotation(-t)),this}translate(t,i){return this.premultiply(td.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const td=new be;function L0(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Cu(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Mx(){const s=Cu("canvas");return s.style.display="block",s}const ov={};function bu(s){s in ov||(ov[s]=!0,console.warn(s))}function bx(s,t,i){return new Promise(function(r,l){function c(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}function Tx(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Ax(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const lv=new be().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),cv=new be().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Rx(){const s={enabled:!0,workingColorSpace:yo,spaces:{},convert:function(l,c,d){return this.enabled===!1||c===d||!c||!d||(this.spaces[c].transfer===tn&&(l.r=qa(l.r),l.g=qa(l.g),l.b=qa(l.b)),this.spaces[c].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===tn&&(l.r=mo(l.r),l.g=mo(l.g),l.b=mo(l.b))),l},fromWorkingColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},toWorkingColorSpace:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Tr?Ru:this.spaces[l].transfer},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,d){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[yo]:{primaries:t,whitePoint:r,transfer:Ru,toXYZ:lv,fromXYZ:cv,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Ui},outputColorSpaceConfig:{drawingBufferColorSpace:Ui}},[Ui]:{primaries:t,whitePoint:r,transfer:tn,toXYZ:lv,fromXYZ:cv,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Ui}}}),s}const Ve=Rx();function qa(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function mo(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Qs;class wx{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let r;if(t instanceof HTMLCanvasElement)r=t;else{Qs===void 0&&(Qs=Cu("canvas")),Qs.width=t.width,Qs.height=t.height;const l=Qs.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),r=Qs}return r.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Cu("canvas");i.width=t.width,i.height=t.height;const r=i.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const l=r.getImageData(0,0,t.width,t.height),c=l.data;for(let d=0;d<c.length;d++)c[d]=qa(c[d]/255)*255;return r.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(qa(i[r]/255)*255):i[r]=qa(i[r]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Cx=0;class Dp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Cx++}),this.uuid=Pl(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let d=0,m=l.length;d<m;d++)l[d].isDataTexture?c.push(ed(l[d].image)):c.push(ed(l[d]))}else c=ed(l);r.url=c}return i||(t.images[this.uuid]=r),r}}function ed(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?wx.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Dx=0;class vi extends ms{constructor(t=vi.DEFAULT_IMAGE,i=vi.DEFAULT_MAPPING,r=us,l=us,c=pa,d=fs,m=na,_=ga,g=vi.DEFAULT_ANISOTROPY,v=Tr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Dx++}),this.uuid=Pl(),this.name="",this.source=new Dp(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=d,this.anisotropy=g,this.format=m,this.internalFormat=null,this.type=_,this.offset=new Te(0,0),this.repeat=new Te(1,1),this.center=new Te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isTextureArray=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isTextureArray=t.isTextureArray,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==x0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Xd:t.x=t.x-Math.floor(t.x);break;case us:t.x=t.x<0?0:1;break;case Wd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Xd:t.y=t.y-Math.floor(t.y);break;case us:t.y=t.y<0?0:1;break;case Wd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}vi.DEFAULT_IMAGE=null;vi.DEFAULT_MAPPING=x0;vi.DEFAULT_ANISOTROPY=1;class gn{constructor(t=0,i=0,r=0,l=1){gn.prototype.isVector4=!0,this.x=t,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,l){return this.x=t,this.y=i,this.z=r,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,c=this.w,d=t.elements;return this.x=d[0]*i+d[4]*r+d[8]*l+d[12]*c,this.y=d[1]*i+d[5]*r+d[9]*l+d[13]*c,this.z=d[2]*i+d[6]*r+d[10]*l+d[14]*c,this.w=d[3]*i+d[7]*r+d[11]*l+d[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,l,c;const _=t.elements,g=_[0],v=_[4],y=_[8],E=_[1],b=_[5],w=_[9],C=_[2],M=_[6],x=_[10];if(Math.abs(v-E)<.01&&Math.abs(y-C)<.01&&Math.abs(w-M)<.01){if(Math.abs(v+E)<.1&&Math.abs(y+C)<.1&&Math.abs(w+M)<.1&&Math.abs(g+b+x-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const G=(g+1)/2,P=(b+1)/2,Y=(x+1)/2,z=(v+E)/4,k=(y+C)/4,K=(w+M)/4;return G>P&&G>Y?G<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(G),l=z/r,c=k/r):P>Y?P<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(P),r=z/l,c=K/l):Y<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(Y),r=k/c,l=K/c),this.set(r,l,c,i),this}let V=Math.sqrt((M-w)*(M-w)+(y-C)*(y-C)+(E-v)*(E-v));return Math.abs(V)<.001&&(V=1),this.x=(M-w)/V,this.y=(y-C)/V,this.z=(E-v)/V,this.w=Math.acos((g+b+x-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Fe(this.x,t.x,i.x),this.y=Fe(this.y,t.y,i.y),this.z=Fe(this.z,t.z,i.z),this.w=Fe(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Fe(this.x,t,i),this.y=Fe(this.y,t,i),this.z=Fe(this.z,t,i),this.w=Fe(this.w,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Fe(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ux extends ms{constructor(t=1,i=1,r={}){super(),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=r.depth?r.depth:1,this.scissor=new gn(0,0,t,i),this.scissorTest=!1,this.viewport=new gn(0,0,t,i);const l={width:t,height:i,depth:this.depth};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:pa,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,multiview:!1},r);const c=new vi(l,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);c.flipY=!1,c.generateMipmaps=r.generateMipmaps,c.internalFormat=r.internalFormat,this.textures=[];const d=r.count;for(let m=0;m<d;m++)this.textures[m]=c.clone(),this.textures[m].isRenderTargetTexture=!0,this.textures[m].renderTarget=this;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,r=1){if(this.width!==t||this.height!==i||this.depth!==r){this.width=t,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=r;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Dp(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ds extends Ux{constructor(t=1,i=1,r={}){super(t,i,r),this.isWebGLRenderTarget=!0}}class N0 extends vi{constructor(t=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=aa,this.minFilter=aa,this.wrapR=us,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Lx extends vi{constructor(t=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=aa,this.minFilter=aa,this.wrapR=us,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ps{constructor(t=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=r,this._w=l}static slerpFlat(t,i,r,l,c,d,m){let _=r[l+0],g=r[l+1],v=r[l+2],y=r[l+3];const E=c[d+0],b=c[d+1],w=c[d+2],C=c[d+3];if(m===0){t[i+0]=_,t[i+1]=g,t[i+2]=v,t[i+3]=y;return}if(m===1){t[i+0]=E,t[i+1]=b,t[i+2]=w,t[i+3]=C;return}if(y!==C||_!==E||g!==b||v!==w){let M=1-m;const x=_*E+g*b+v*w+y*C,V=x>=0?1:-1,G=1-x*x;if(G>Number.EPSILON){const Y=Math.sqrt(G),z=Math.atan2(Y,x*V);M=Math.sin(M*z)/Y,m=Math.sin(m*z)/Y}const P=m*V;if(_=_*M+E*P,g=g*M+b*P,v=v*M+w*P,y=y*M+C*P,M===1-m){const Y=1/Math.sqrt(_*_+g*g+v*v+y*y);_*=Y,g*=Y,v*=Y,y*=Y}}t[i]=_,t[i+1]=g,t[i+2]=v,t[i+3]=y}static multiplyQuaternionsFlat(t,i,r,l,c,d){const m=r[l],_=r[l+1],g=r[l+2],v=r[l+3],y=c[d],E=c[d+1],b=c[d+2],w=c[d+3];return t[i]=m*w+v*y+_*b-g*E,t[i+1]=_*w+v*E+g*y-m*b,t[i+2]=g*w+v*b+m*E-_*y,t[i+3]=v*w-m*y-_*E-g*b,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,r,l){return this._x=t,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const r=t._x,l=t._y,c=t._z,d=t._order,m=Math.cos,_=Math.sin,g=m(r/2),v=m(l/2),y=m(c/2),E=_(r/2),b=_(l/2),w=_(c/2);switch(d){case"XYZ":this._x=E*v*y+g*b*w,this._y=g*b*y-E*v*w,this._z=g*v*w+E*b*y,this._w=g*v*y-E*b*w;break;case"YXZ":this._x=E*v*y+g*b*w,this._y=g*b*y-E*v*w,this._z=g*v*w-E*b*y,this._w=g*v*y+E*b*w;break;case"ZXY":this._x=E*v*y-g*b*w,this._y=g*b*y+E*v*w,this._z=g*v*w+E*b*y,this._w=g*v*y-E*b*w;break;case"ZYX":this._x=E*v*y-g*b*w,this._y=g*b*y+E*v*w,this._z=g*v*w-E*b*y,this._w=g*v*y+E*b*w;break;case"YZX":this._x=E*v*y+g*b*w,this._y=g*b*y+E*v*w,this._z=g*v*w-E*b*y,this._w=g*v*y-E*b*w;break;case"XZY":this._x=E*v*y-g*b*w,this._y=g*b*y-E*v*w,this._z=g*v*w+E*b*y,this._w=g*v*y+E*b*w;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const r=i/2,l=Math.sin(r);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,r=i[0],l=i[4],c=i[8],d=i[1],m=i[5],_=i[9],g=i[2],v=i[6],y=i[10],E=r+m+y;if(E>0){const b=.5/Math.sqrt(E+1);this._w=.25/b,this._x=(v-_)*b,this._y=(c-g)*b,this._z=(d-l)*b}else if(r>m&&r>y){const b=2*Math.sqrt(1+r-m-y);this._w=(v-_)/b,this._x=.25*b,this._y=(l+d)/b,this._z=(c+g)/b}else if(m>y){const b=2*Math.sqrt(1+m-r-y);this._w=(c-g)/b,this._x=(l+d)/b,this._y=.25*b,this._z=(_+v)/b}else{const b=2*Math.sqrt(1+y-r-m);this._w=(d-l)/b,this._x=(c+g)/b,this._y=(_+v)/b,this._z=.25*b}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let r=t.dot(i)+1;return r<Number.EPSILON?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Fe(this.dot(t),-1,1)))}rotateTowards(t,i){const r=this.angleTo(t);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const r=t._x,l=t._y,c=t._z,d=t._w,m=i._x,_=i._y,g=i._z,v=i._w;return this._x=r*v+d*m+l*g-c*_,this._y=l*v+d*_+c*m-r*g,this._z=c*v+d*g+r*_-l*m,this._w=d*v-r*m-l*_-c*g,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const r=this._x,l=this._y,c=this._z,d=this._w;let m=d*t._w+r*t._x+l*t._y+c*t._z;if(m<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,m=-m):this.copy(t),m>=1)return this._w=d,this._x=r,this._y=l,this._z=c,this;const _=1-m*m;if(_<=Number.EPSILON){const b=1-i;return this._w=b*d+i*this._w,this._x=b*r+i*this._x,this._y=b*l+i*this._y,this._z=b*c+i*this._z,this.normalize(),this}const g=Math.sqrt(_),v=Math.atan2(g,m),y=Math.sin((1-i)*v)/g,E=Math.sin(i*v)/g;return this._w=d*y+this._w*E,this._x=r*y+this._x*E,this._y=l*y+this._y*E,this._z=c*y+this._z*E,this._onChangeCallback(),this}slerpQuaternions(t,i,r){return this.copy(t).slerp(i,r)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ot{constructor(t=0,i=0,r=0){ot.prototype.isVector3=!0,this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(uv.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(uv.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,c=t.elements,d=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*d,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*d,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*d,this}applyQuaternion(t){const i=this.x,r=this.y,l=this.z,c=t.x,d=t.y,m=t.z,_=t.w,g=2*(d*l-m*r),v=2*(m*i-c*l),y=2*(c*r-d*i);return this.x=i+_*g+d*y-m*v,this.y=r+_*v+m*g-c*y,this.z=l+_*y+c*v-d*g,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Fe(this.x,t.x,i.x),this.y=Fe(this.y,t.y,i.y),this.z=Fe(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Fe(this.x,t,i),this.y=Fe(this.y,t,i),this.z=Fe(this.z,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Fe(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const r=t.x,l=t.y,c=t.z,d=i.x,m=i.y,_=i.z;return this.x=l*_-c*m,this.y=c*d-r*_,this.z=r*m-l*d,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return nd.copy(this).projectOnVector(t),this.sub(nd)}reflect(t){return this.sub(nd.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(Fe(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y,l=this.z-t.z;return i*i+r*r+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){const l=Math.sin(i)*t;return this.x=l*Math.sin(r),this.y=Math.cos(i)*t,this.z=l*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const nd=new ot,uv=new ps;class xo{constructor(t=new ot(1/0,1/0,1/0),i=new ot(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i+=3)this.expandByPoint(Ji.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,r=t.count;i<r;i++)this.expandByPoint(Ji.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const r=Ji.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let d=0,m=c.count;d<m;d++)t.isMesh===!0?t.getVertexPosition(d,Ji):Ji.fromBufferAttribute(c,d),Ji.applyMatrix4(t.matrixWorld),this.expandByPoint(Ji);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),qc.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),qc.copy(r.boundingBox)),qc.applyMatrix4(t.matrixWorld),this.union(qc)}const l=t.children;for(let c=0,d=l.length;c<d;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ji),Ji.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,r;return t.normal.x>0?(i=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),i<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(El),Yc.subVectors(this.max,El),Js.subVectors(t.a,El),$s.subVectors(t.b,El),to.subVectors(t.c,El),vr.subVectors($s,Js),yr.subVectors(to,$s),es.subVectors(Js,to);let i=[0,-vr.z,vr.y,0,-yr.z,yr.y,0,-es.z,es.y,vr.z,0,-vr.x,yr.z,0,-yr.x,es.z,0,-es.x,-vr.y,vr.x,0,-yr.y,yr.x,0,-es.y,es.x,0];return!id(i,Js,$s,to,Yc)||(i=[1,0,0,0,1,0,0,0,1],!id(i,Js,$s,to,Yc))?!1:(jc.crossVectors(vr,yr),i=[jc.x,jc.y,jc.z],id(i,Js,$s,to,Yc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ji).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ji).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Fa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Fa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Fa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Fa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Fa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Fa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Fa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Fa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Fa),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Fa=[new ot,new ot,new ot,new ot,new ot,new ot,new ot,new ot],Ji=new ot,qc=new xo,Js=new ot,$s=new ot,to=new ot,vr=new ot,yr=new ot,es=new ot,El=new ot,Yc=new ot,jc=new ot,ns=new ot;function id(s,t,i,r,l){for(let c=0,d=s.length-3;c<=d;c+=3){ns.fromArray(s,c);const m=l.x*Math.abs(ns.x)+l.y*Math.abs(ns.y)+l.z*Math.abs(ns.z),_=t.dot(ns),g=i.dot(ns),v=r.dot(ns);if(Math.max(-Math.max(_,g,v),Math.min(_,g,v))>m)return!1}return!0}const Nx=new xo,Ml=new ot,ad=new ot;class Eo{constructor(t=new ot,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const r=this.center;i!==void 0?r.copy(i):Nx.setFromPoints(t).getCenter(r);let l=0;for(let c=0,d=t.length;c<d;c++)l=Math.max(l,r.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const r=this.center.distanceToSquared(t);return i.copy(t),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ml.subVectors(t,this.center);const i=Ml.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Ml,l/r),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ad.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ml.copy(t.center).add(ad)),this.expandByPoint(Ml.copy(t.center).sub(ad))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ba=new ot,rd=new ot,Zc=new ot,Sr=new ot,sd=new ot,Kc=new ot,od=new ot;class Ou{constructor(t=new ot,i=new ot(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ba)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=Ba.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(Ba.copy(this.origin).addScaledVector(this.direction,i),Ba.distanceToSquared(t))}distanceSqToSegment(t,i,r,l){rd.copy(t).add(i).multiplyScalar(.5),Zc.copy(i).sub(t).normalize(),Sr.copy(this.origin).sub(rd);const c=t.distanceTo(i)*.5,d=-this.direction.dot(Zc),m=Sr.dot(this.direction),_=-Sr.dot(Zc),g=Sr.lengthSq(),v=Math.abs(1-d*d);let y,E,b,w;if(v>0)if(y=d*_-m,E=d*m-_,w=c*v,y>=0)if(E>=-w)if(E<=w){const C=1/v;y*=C,E*=C,b=y*(y+d*E+2*m)+E*(d*y+E+2*_)+g}else E=c,y=Math.max(0,-(d*E+m)),b=-y*y+E*(E+2*_)+g;else E=-c,y=Math.max(0,-(d*E+m)),b=-y*y+E*(E+2*_)+g;else E<=-w?(y=Math.max(0,-(-d*c+m)),E=y>0?-c:Math.min(Math.max(-c,-_),c),b=-y*y+E*(E+2*_)+g):E<=w?(y=0,E=Math.min(Math.max(-c,-_),c),b=E*(E+2*_)+g):(y=Math.max(0,-(d*c+m)),E=y>0?c:Math.min(Math.max(-c,-_),c),b=-y*y+E*(E+2*_)+g);else E=d>0?-c:c,y=Math.max(0,-(d*E+m)),b=-y*y+E*(E+2*_)+g;return r&&r.copy(this.origin).addScaledVector(this.direction,y),l&&l.copy(rd).addScaledVector(Zc,E),b}intersectSphere(t,i){Ba.subVectors(t.center,this.origin);const r=Ba.dot(this.direction),l=Ba.dot(Ba)-r*r,c=t.radius*t.radius;if(l>c)return null;const d=Math.sqrt(c-l),m=r-d,_=r+d;return _<0?null:m<0?this.at(_,i):this.at(m,i)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/i;return r>=0?r:null}intersectPlane(t,i){const r=this.distanceToPlane(t);return r===null?null:this.at(r,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let r,l,c,d,m,_;const g=1/this.direction.x,v=1/this.direction.y,y=1/this.direction.z,E=this.origin;return g>=0?(r=(t.min.x-E.x)*g,l=(t.max.x-E.x)*g):(r=(t.max.x-E.x)*g,l=(t.min.x-E.x)*g),v>=0?(c=(t.min.y-E.y)*v,d=(t.max.y-E.y)*v):(c=(t.max.y-E.y)*v,d=(t.min.y-E.y)*v),r>d||c>l||((c>r||isNaN(r))&&(r=c),(d<l||isNaN(l))&&(l=d),y>=0?(m=(t.min.z-E.z)*y,_=(t.max.z-E.z)*y):(m=(t.max.z-E.z)*y,_=(t.min.z-E.z)*y),r>_||m>l)||((m>r||r!==r)&&(r=m),(_<l||l!==l)&&(l=_),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(t){return this.intersectBox(t,Ba)!==null}intersectTriangle(t,i,r,l,c){sd.subVectors(i,t),Kc.subVectors(r,t),od.crossVectors(sd,Kc);let d=this.direction.dot(od),m;if(d>0){if(l)return null;m=1}else if(d<0)m=-1,d=-d;else return null;Sr.subVectors(this.origin,t);const _=m*this.direction.dot(Kc.crossVectors(Sr,Kc));if(_<0)return null;const g=m*this.direction.dot(sd.cross(Sr));if(g<0||_+g>d)return null;const v=-m*Sr.dot(od);return v<0?null:this.at(v/d,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ln{constructor(t,i,r,l,c,d,m,_,g,v,y,E,b,w,C,M){ln.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,l,c,d,m,_,g,v,y,E,b,w,C,M)}set(t,i,r,l,c,d,m,_,g,v,y,E,b,w,C,M){const x=this.elements;return x[0]=t,x[4]=i,x[8]=r,x[12]=l,x[1]=c,x[5]=d,x[9]=m,x[13]=_,x[2]=g,x[6]=v,x[10]=y,x[14]=E,x[3]=b,x[7]=w,x[11]=C,x[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ln().fromArray(this.elements)}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){const i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,r=t.elements,l=1/eo.setFromMatrixColumn(t,0).length(),c=1/eo.setFromMatrixColumn(t,1).length(),d=1/eo.setFromMatrixColumn(t,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*d,i[9]=r[9]*d,i[10]=r[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,r=t.x,l=t.y,c=t.z,d=Math.cos(r),m=Math.sin(r),_=Math.cos(l),g=Math.sin(l),v=Math.cos(c),y=Math.sin(c);if(t.order==="XYZ"){const E=d*v,b=d*y,w=m*v,C=m*y;i[0]=_*v,i[4]=-_*y,i[8]=g,i[1]=b+w*g,i[5]=E-C*g,i[9]=-m*_,i[2]=C-E*g,i[6]=w+b*g,i[10]=d*_}else if(t.order==="YXZ"){const E=_*v,b=_*y,w=g*v,C=g*y;i[0]=E+C*m,i[4]=w*m-b,i[8]=d*g,i[1]=d*y,i[5]=d*v,i[9]=-m,i[2]=b*m-w,i[6]=C+E*m,i[10]=d*_}else if(t.order==="ZXY"){const E=_*v,b=_*y,w=g*v,C=g*y;i[0]=E-C*m,i[4]=-d*y,i[8]=w+b*m,i[1]=b+w*m,i[5]=d*v,i[9]=C-E*m,i[2]=-d*g,i[6]=m,i[10]=d*_}else if(t.order==="ZYX"){const E=d*v,b=d*y,w=m*v,C=m*y;i[0]=_*v,i[4]=w*g-b,i[8]=E*g+C,i[1]=_*y,i[5]=C*g+E,i[9]=b*g-w,i[2]=-g,i[6]=m*_,i[10]=d*_}else if(t.order==="YZX"){const E=d*_,b=d*g,w=m*_,C=m*g;i[0]=_*v,i[4]=C-E*y,i[8]=w*y+b,i[1]=y,i[5]=d*v,i[9]=-m*v,i[2]=-g*v,i[6]=b*y+w,i[10]=E-C*y}else if(t.order==="XZY"){const E=d*_,b=d*g,w=m*_,C=m*g;i[0]=_*v,i[4]=-y,i[8]=g*v,i[1]=E*y+C,i[5]=d*v,i[9]=b*y-w,i[2]=w*y-b,i[6]=m*v,i[10]=C*y+E}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ox,t,Px)}lookAt(t,i,r){const l=this.elements;return Ci.subVectors(t,i),Ci.lengthSq()===0&&(Ci.z=1),Ci.normalize(),xr.crossVectors(r,Ci),xr.lengthSq()===0&&(Math.abs(r.z)===1?Ci.x+=1e-4:Ci.z+=1e-4,Ci.normalize(),xr.crossVectors(r,Ci)),xr.normalize(),Qc.crossVectors(Ci,xr),l[0]=xr.x,l[4]=Qc.x,l[8]=Ci.x,l[1]=xr.y,l[5]=Qc.y,l[9]=Ci.y,l[2]=xr.z,l[6]=Qc.z,l[10]=Ci.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,c=this.elements,d=r[0],m=r[4],_=r[8],g=r[12],v=r[1],y=r[5],E=r[9],b=r[13],w=r[2],C=r[6],M=r[10],x=r[14],V=r[3],G=r[7],P=r[11],Y=r[15],z=l[0],k=l[4],K=l[8],F=l[12],O=l[1],q=l[5],rt=l[9],ht=l[13],_t=l[2],Mt=l[6],X=l[10],st=l[14],et=l[3],Nt=l[7],B=l[11],ct=l[15];return c[0]=d*z+m*O+_*_t+g*et,c[4]=d*k+m*q+_*Mt+g*Nt,c[8]=d*K+m*rt+_*X+g*B,c[12]=d*F+m*ht+_*st+g*ct,c[1]=v*z+y*O+E*_t+b*et,c[5]=v*k+y*q+E*Mt+b*Nt,c[9]=v*K+y*rt+E*X+b*B,c[13]=v*F+y*ht+E*st+b*ct,c[2]=w*z+C*O+M*_t+x*et,c[6]=w*k+C*q+M*Mt+x*Nt,c[10]=w*K+C*rt+M*X+x*B,c[14]=w*F+C*ht+M*st+x*ct,c[3]=V*z+G*O+P*_t+Y*et,c[7]=V*k+G*q+P*Mt+Y*Nt,c[11]=V*K+G*rt+P*X+Y*B,c[15]=V*F+G*ht+P*st+Y*ct,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[4],l=t[8],c=t[12],d=t[1],m=t[5],_=t[9],g=t[13],v=t[2],y=t[6],E=t[10],b=t[14],w=t[3],C=t[7],M=t[11],x=t[15];return w*(+c*_*y-l*g*y-c*m*E+r*g*E+l*m*b-r*_*b)+C*(+i*_*b-i*g*E+c*d*E-l*d*b+l*g*v-c*_*v)+M*(+i*g*y-i*m*b-c*d*y+r*d*b+c*m*v-r*g*v)+x*(-l*m*v-i*_*y+i*m*E+l*d*y-r*d*E+r*_*v)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=r),this}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],d=t[4],m=t[5],_=t[6],g=t[7],v=t[8],y=t[9],E=t[10],b=t[11],w=t[12],C=t[13],M=t[14],x=t[15],V=y*M*g-C*E*g+C*_*b-m*M*b-y*_*x+m*E*x,G=w*E*g-v*M*g-w*_*b+d*M*b+v*_*x-d*E*x,P=v*C*g-w*y*g+w*m*b-d*C*b-v*m*x+d*y*x,Y=w*y*_-v*C*_-w*m*E+d*C*E+v*m*M-d*y*M,z=i*V+r*G+l*P+c*Y;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/z;return t[0]=V*k,t[1]=(C*E*c-y*M*c-C*l*b+r*M*b+y*l*x-r*E*x)*k,t[2]=(m*M*c-C*_*c+C*l*g-r*M*g-m*l*x+r*_*x)*k,t[3]=(y*_*c-m*E*c-y*l*g+r*E*g+m*l*b-r*_*b)*k,t[4]=G*k,t[5]=(v*M*c-w*E*c+w*l*b-i*M*b-v*l*x+i*E*x)*k,t[6]=(w*_*c-d*M*c-w*l*g+i*M*g+d*l*x-i*_*x)*k,t[7]=(d*E*c-v*_*c+v*l*g-i*E*g-d*l*b+i*_*b)*k,t[8]=P*k,t[9]=(w*y*c-v*C*c-w*r*b+i*C*b+v*r*x-i*y*x)*k,t[10]=(d*C*c-w*m*c+w*r*g-i*C*g-d*r*x+i*m*x)*k,t[11]=(v*m*c-d*y*c-v*r*g+i*y*g+d*r*b-i*m*b)*k,t[12]=Y*k,t[13]=(v*C*l-w*y*l+w*r*E-i*C*E-v*r*M+i*y*M)*k,t[14]=(w*m*l-d*C*l-w*r*_+i*C*_+d*r*M-i*m*M)*k,t[15]=(d*y*l-v*m*l+v*r*_-i*y*_-d*r*E+i*m*E)*k,this}scale(t){const i=this.elements,r=t.x,l=t.y,c=t.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,d=t.x,m=t.y,_=t.z,g=c*d,v=c*m;return this.set(g*d+r,g*m-l*_,g*_+l*m,0,g*m+l*_,v*m+r,v*_-l*d,0,g*_-l*m,v*_+l*d,c*_*_+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,l,c,d){return this.set(1,r,c,0,t,1,d,0,i,l,1,0,0,0,0,1),this}compose(t,i,r){const l=this.elements,c=i._x,d=i._y,m=i._z,_=i._w,g=c+c,v=d+d,y=m+m,E=c*g,b=c*v,w=c*y,C=d*v,M=d*y,x=m*y,V=_*g,G=_*v,P=_*y,Y=r.x,z=r.y,k=r.z;return l[0]=(1-(C+x))*Y,l[1]=(b+P)*Y,l[2]=(w-G)*Y,l[3]=0,l[4]=(b-P)*z,l[5]=(1-(E+x))*z,l[6]=(M+V)*z,l[7]=0,l[8]=(w+G)*k,l[9]=(M-V)*k,l[10]=(1-(E+C))*k,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,r){const l=this.elements;let c=eo.set(l[0],l[1],l[2]).length();const d=eo.set(l[4],l[5],l[6]).length(),m=eo.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),t.x=l[12],t.y=l[13],t.z=l[14],$i.copy(this);const g=1/c,v=1/d,y=1/m;return $i.elements[0]*=g,$i.elements[1]*=g,$i.elements[2]*=g,$i.elements[4]*=v,$i.elements[5]*=v,$i.elements[6]*=v,$i.elements[8]*=y,$i.elements[9]*=y,$i.elements[10]*=y,i.setFromRotationMatrix($i),r.x=c,r.y=d,r.z=m,this}makePerspective(t,i,r,l,c,d,m=Wa){const _=this.elements,g=2*c/(i-t),v=2*c/(r-l),y=(i+t)/(i-t),E=(r+l)/(r-l);let b,w;if(m===Wa)b=-(d+c)/(d-c),w=-2*d*c/(d-c);else if(m===wu)b=-d/(d-c),w=-d*c/(d-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+m);return _[0]=g,_[4]=0,_[8]=y,_[12]=0,_[1]=0,_[5]=v,_[9]=E,_[13]=0,_[2]=0,_[6]=0,_[10]=b,_[14]=w,_[3]=0,_[7]=0,_[11]=-1,_[15]=0,this}makeOrthographic(t,i,r,l,c,d,m=Wa){const _=this.elements,g=1/(i-t),v=1/(r-l),y=1/(d-c),E=(i+t)*g,b=(r+l)*v;let w,C;if(m===Wa)w=(d+c)*y,C=-2*y;else if(m===wu)w=c*y,C=-1*y;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+m);return _[0]=2*g,_[4]=0,_[8]=0,_[12]=-E,_[1]=0,_[5]=2*v,_[9]=0,_[13]=-b,_[2]=0,_[6]=0,_[10]=C,_[14]=-w,_[3]=0,_[7]=0,_[11]=0,_[15]=1,this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}}const eo=new ot,$i=new ln,Ox=new ot(0,0,0),Px=new ot(1,1,1),xr=new ot,Qc=new ot,Ci=new ot,fv=new ln,hv=new ps;class _a{constructor(t=0,i=0,r=0,l=_a.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,l=this._order){return this._x=t,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){const l=t.elements,c=l[0],d=l[4],m=l[8],_=l[1],g=l[5],v=l[9],y=l[2],E=l[6],b=l[10];switch(i){case"XYZ":this._y=Math.asin(Fe(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-v,b),this._z=Math.atan2(-d,c)):(this._x=Math.atan2(E,g),this._z=0);break;case"YXZ":this._x=Math.asin(-Fe(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(m,b),this._z=Math.atan2(_,g)):(this._y=Math.atan2(-y,c),this._z=0);break;case"ZXY":this._x=Math.asin(Fe(E,-1,1)),Math.abs(E)<.9999999?(this._y=Math.atan2(-y,b),this._z=Math.atan2(-d,g)):(this._y=0,this._z=Math.atan2(_,c));break;case"ZYX":this._y=Math.asin(-Fe(y,-1,1)),Math.abs(y)<.9999999?(this._x=Math.atan2(E,b),this._z=Math.atan2(_,c)):(this._x=0,this._z=Math.atan2(-d,g));break;case"YZX":this._z=Math.asin(Fe(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(-v,g),this._y=Math.atan2(-y,c)):(this._x=0,this._y=Math.atan2(m,b));break;case"XZY":this._z=Math.asin(-Fe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(E,g),this._y=Math.atan2(m,c)):(this._x=Math.atan2(-v,b),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return fv.makeRotationFromQuaternion(t),this.setFromRotationMatrix(fv,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return hv.setFromEuler(this),this.setFromQuaternion(hv,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}_a.DEFAULT_ORDER="XYZ";class O0{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Fx=0;const dv=new ot,no=new ps,Ia=new ln,Jc=new ot,bl=new ot,Bx=new ot,Ix=new ps,pv=new ot(1,0,0),mv=new ot(0,1,0),gv=new ot(0,0,1),_v={type:"added"},zx={type:"removed"},io={type:"childadded",child:null},ld={type:"childremoved",child:null};class kn extends ms{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Fx++}),this.uuid=Pl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=kn.DEFAULT_UP.clone();const t=new ot,i=new _a,r=new ps,l=new ot(1,1,1);function c(){r.setFromEuler(i,!1)}function d(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new ln},normalMatrix:{value:new be}}),this.matrix=new ln,this.matrixWorld=new ln,this.matrixAutoUpdate=kn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=kn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new O0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return no.setFromAxisAngle(t,i),this.quaternion.multiply(no),this}rotateOnWorldAxis(t,i){return no.setFromAxisAngle(t,i),this.quaternion.premultiply(no),this}rotateX(t){return this.rotateOnAxis(pv,t)}rotateY(t){return this.rotateOnAxis(mv,t)}rotateZ(t){return this.rotateOnAxis(gv,t)}translateOnAxis(t,i){return dv.copy(t).applyQuaternion(this.quaternion),this.position.add(dv.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(pv,t)}translateY(t){return this.translateOnAxis(mv,t)}translateZ(t){return this.translateOnAxis(gv,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ia.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?Jc.copy(t):Jc.set(t,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),bl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ia.lookAt(bl,Jc,this.up):Ia.lookAt(Jc,bl,this.up),this.quaternion.setFromRotationMatrix(Ia),l&&(Ia.extractRotation(l.matrixWorld),no.setFromRotationMatrix(Ia),this.quaternion.premultiply(no.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(_v),io.child=t,this.dispatchEvent(io),io.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(zx),ld.child=t,this.dispatchEvent(ld),ld.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ia.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ia.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ia),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(_v),io.child=t,this.dispatchEvent(io),io.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const d=this.children[r].getObjectByProperty(t,i);if(d!==void 0)return d}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bl,t,Bx),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bl,Ix,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(m=>({...m,boundingBox:m.boundingBox?{min:m.boundingBox.min.toArray(),max:m.boundingBox.max.toArray()}:void 0,boundingSphere:m.boundingSphere?{radius:m.boundingSphere.radius,center:m.boundingSphere.center.toArray()}:void 0})),l.instanceInfo=this._instanceInfo.map(m=>({...m})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere={center:this.boundingSphere.center.toArray(),radius:this.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:this.boundingBox.min.toArray(),max:this.boundingBox.max.toArray()}));function c(m,_){return m[_.uuid]===void 0&&(m[_.uuid]=_.toJSON(t)),_.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const m=this.geometry.parameters;if(m!==void 0&&m.shapes!==void 0){const _=m.shapes;if(Array.isArray(_))for(let g=0,v=_.length;g<v;g++){const y=_[g];c(t.shapes,y)}else c(t.shapes,_)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const m=[];for(let _=0,g=this.material.length;_<g;_++)m.push(c(t.materials,this.material[_]));l.material=m}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let m=0;m<this.children.length;m++)l.children.push(this.children[m].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let m=0;m<this.animations.length;m++){const _=this.animations[m];l.animations.push(c(t.animations,_))}}if(i){const m=d(t.geometries),_=d(t.materials),g=d(t.textures),v=d(t.images),y=d(t.shapes),E=d(t.skeletons),b=d(t.animations),w=d(t.nodes);m.length>0&&(r.geometries=m),_.length>0&&(r.materials=_),g.length>0&&(r.textures=g),v.length>0&&(r.images=v),y.length>0&&(r.shapes=y),E.length>0&&(r.skeletons=E),b.length>0&&(r.animations=b),w.length>0&&(r.nodes=w)}return r.object=l,r;function d(m){const _=[];for(const g in m){const v=m[g];delete v.metadata,_.push(v)}return _}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){const l=t.children[r];this.add(l.clone())}return this}}kn.DEFAULT_UP=new ot(0,1,0);kn.DEFAULT_MATRIX_AUTO_UPDATE=!0;kn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ta=new ot,za=new ot,cd=new ot,Ha=new ot,ao=new ot,ro=new ot,vv=new ot,ud=new ot,fd=new ot,hd=new ot,dd=new gn,pd=new gn,md=new gn;class ea{constructor(t=new ot,i=new ot,r=new ot){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,l){l.subVectors(r,i),ta.subVectors(t,i),l.cross(ta);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,r,l,c){ta.subVectors(l,i),za.subVectors(r,i),cd.subVectors(t,i);const d=ta.dot(ta),m=ta.dot(za),_=ta.dot(cd),g=za.dot(za),v=za.dot(cd),y=d*g-m*m;if(y===0)return c.set(0,0,0),null;const E=1/y,b=(g*_-m*v)*E,w=(d*v-m*_)*E;return c.set(1-b-w,w,b)}static containsPoint(t,i,r,l){return this.getBarycoord(t,i,r,l,Ha)===null?!1:Ha.x>=0&&Ha.y>=0&&Ha.x+Ha.y<=1}static getInterpolation(t,i,r,l,c,d,m,_){return this.getBarycoord(t,i,r,l,Ha)===null?(_.x=0,_.y=0,"z"in _&&(_.z=0),"w"in _&&(_.w=0),null):(_.setScalar(0),_.addScaledVector(c,Ha.x),_.addScaledVector(d,Ha.y),_.addScaledVector(m,Ha.z),_)}static getInterpolatedAttribute(t,i,r,l,c,d){return dd.setScalar(0),pd.setScalar(0),md.setScalar(0),dd.fromBufferAttribute(t,i),pd.fromBufferAttribute(t,r),md.fromBufferAttribute(t,l),d.setScalar(0),d.addScaledVector(dd,c.x),d.addScaledVector(pd,c.y),d.addScaledVector(md,c.z),d}static isFrontFacing(t,i,r,l){return ta.subVectors(r,i),za.subVectors(t,i),ta.cross(za).dot(l)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,l){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,r,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ta.subVectors(this.c,this.b),za.subVectors(this.a,this.b),ta.cross(za).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ea.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return ea.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,l,c){return ea.getInterpolation(t,this.a,this.b,this.c,i,r,l,c)}containsPoint(t){return ea.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ea.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const r=this.a,l=this.b,c=this.c;let d,m;ao.subVectors(l,r),ro.subVectors(c,r),ud.subVectors(t,r);const _=ao.dot(ud),g=ro.dot(ud);if(_<=0&&g<=0)return i.copy(r);fd.subVectors(t,l);const v=ao.dot(fd),y=ro.dot(fd);if(v>=0&&y<=v)return i.copy(l);const E=_*y-v*g;if(E<=0&&_>=0&&v<=0)return d=_/(_-v),i.copy(r).addScaledVector(ao,d);hd.subVectors(t,c);const b=ao.dot(hd),w=ro.dot(hd);if(w>=0&&b<=w)return i.copy(c);const C=b*g-_*w;if(C<=0&&g>=0&&w<=0)return m=g/(g-w),i.copy(r).addScaledVector(ro,m);const M=v*w-b*y;if(M<=0&&y-v>=0&&b-w>=0)return vv.subVectors(c,l),m=(y-v)/(y-v+(b-w)),i.copy(l).addScaledVector(vv,m);const x=1/(M+C+E);return d=C*x,m=E*x,i.copy(r).addScaledVector(ao,d).addScaledVector(ro,m)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const P0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Er={h:0,s:0,l:0},$c={h:0,s:0,l:0};function gd(s,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(t-s)*6*i:i<1/2?t:i<2/3?s+(t-s)*6*(2/3-i):s}class ze{constructor(t,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,r)}set(t,i,r){if(i===void 0&&r===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=Ui){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ve.toWorkingColorSpace(this,i),this}setRGB(t,i,r,l=Ve.workingColorSpace){return this.r=t,this.g=i,this.b=r,Ve.toWorkingColorSpace(this,l),this}setHSL(t,i,r,l=Ve.workingColorSpace){if(t=xx(t,1),i=Fe(i,0,1),r=Fe(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,d=2*r-c;this.r=gd(d,c,t+1/3),this.g=gd(d,c,t),this.b=gd(d,c,t-1/3)}return Ve.toWorkingColorSpace(this,l),this}setStyle(t,i=Ui){function r(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const d=l[1],m=l[2];switch(d){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(m))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(m))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(m))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],d=c.length;if(d===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=Ui){const r=P0[t.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=qa(t.r),this.g=qa(t.g),this.b=qa(t.b),this}copyLinearToSRGB(t){return this.r=mo(t.r),this.g=mo(t.g),this.b=mo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ui){return Ve.fromWorkingColorSpace(ai.copy(this),t),Math.round(Fe(ai.r*255,0,255))*65536+Math.round(Fe(ai.g*255,0,255))*256+Math.round(Fe(ai.b*255,0,255))}getHexString(t=Ui){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Ve.workingColorSpace){Ve.fromWorkingColorSpace(ai.copy(this),i);const r=ai.r,l=ai.g,c=ai.b,d=Math.max(r,l,c),m=Math.min(r,l,c);let _,g;const v=(m+d)/2;if(m===d)_=0,g=0;else{const y=d-m;switch(g=v<=.5?y/(d+m):y/(2-d-m),d){case r:_=(l-c)/y+(l<c?6:0);break;case l:_=(c-r)/y+2;break;case c:_=(r-l)/y+4;break}_/=6}return t.h=_,t.s=g,t.l=v,t}getRGB(t,i=Ve.workingColorSpace){return Ve.fromWorkingColorSpace(ai.copy(this),i),t.r=ai.r,t.g=ai.g,t.b=ai.b,t}getStyle(t=Ui){Ve.fromWorkingColorSpace(ai.copy(this),t);const i=ai.r,r=ai.g,l=ai.b;return t!==Ui?`color(${t} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(t,i,r){return this.getHSL(Er),this.setHSL(Er.h+t,Er.s+i,Er.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,r){return this.r=t.r+(i.r-t.r)*r,this.g=t.g+(i.g-t.g)*r,this.b=t.b+(i.b-t.b)*r,this}lerpHSL(t,i){this.getHSL(Er),t.getHSL($c);const r=$h(Er.h,$c.h,i),l=$h(Er.s,$c.s,i),c=$h(Er.l,$c.l,i);return this.setHSL(r,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,r=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ai=new ze;ze.NAMES=P0;let Hx=0;class Ya extends ms{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Hx++}),this.uuid=Pl(),this.name="",this.type="Material",this.blending=po,this.side=wr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Nd,this.blendDst=Od,this.blendEquation=ls,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ze(0,0,0),this.blendAlpha=0,this.depthFunc=go,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=av,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ks,this.stencilZFail=Ks,this.stencilZPass=Ks,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const r=t[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==po&&(r.blending=this.blending),this.side!==wr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Nd&&(r.blendSrc=this.blendSrc),this.blendDst!==Od&&(r.blendDst=this.blendDst),this.blendEquation!==ls&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==go&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==av&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ks&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Ks&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Ks&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const d=[];for(const m in c){const _=c[m];delete _.metadata,d.push(_)}return d}if(i){const c=l(t.textures),d=l(t.images);c.length>0&&(r.textures=c),d.length>0&&(r.images=d)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class F0 extends Ya{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _a,this.combine=Mp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const An=new ot,tu=new Te;let Gx=0;class ma{constructor(t,i,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Gx++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=r,this.usage=rv,this.updateRanges=[],this.gpuType=Xa,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,r){t*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[r+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)tu.fromBufferAttribute(this,i),tu.applyMatrix3(t),this.setXY(i,tu.x,tu.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)An.fromBufferAttribute(this,i),An.applyMatrix3(t),this.setXYZ(i,An.x,An.y,An.z);return this}applyMatrix4(t){for(let i=0,r=this.count;i<r;i++)An.fromBufferAttribute(this,i),An.applyMatrix4(t),this.setXYZ(i,An.x,An.y,An.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)An.fromBufferAttribute(this,i),An.applyNormalMatrix(t),this.setXYZ(i,An.x,An.y,An.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)An.fromBufferAttribute(this,i),An.transformDirection(t),this.setXYZ(i,An.x,An.y,An.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let r=this.array[t*this.itemSize+i];return this.normalized&&(r=xl(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=mi(r,this.array)),this.array[t*this.itemSize+i]=r,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=xl(i,this.array)),i}setX(t,i){return this.normalized&&(i=mi(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=xl(i,this.array)),i}setY(t,i){return this.normalized&&(i=mi(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=xl(i,this.array)),i}setZ(t,i){return this.normalized&&(i=mi(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=xl(i,this.array)),i}setW(t,i){return this.normalized&&(i=mi(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,r){return t*=this.itemSize,this.normalized&&(i=mi(i,this.array),r=mi(r,this.array)),this.array[t+0]=i,this.array[t+1]=r,this}setXYZ(t,i,r,l){return t*=this.itemSize,this.normalized&&(i=mi(i,this.array),r=mi(r,this.array),l=mi(l,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this}setXYZW(t,i,r,l,c){return t*=this.itemSize,this.normalized&&(i=mi(i,this.array),r=mi(r,this.array),l=mi(l,this.array),c=mi(c,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==rv&&(t.usage=this.usage),t}}class B0 extends ma{constructor(t,i,r){super(new Uint16Array(t),i,r)}}class I0 extends ma{constructor(t,i,r){super(new Uint32Array(t),i,r)}}class ui extends ma{constructor(t,i,r){super(new Float32Array(t),i,r)}}let Vx=0;const ki=new ln,_d=new kn,so=new ot,Di=new xo,Tl=new xo,Hn=new ot;class ra extends ms{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Vx++}),this.uuid=Pl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(L0(t)?I0:B0)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new be().getNormalMatrix(t);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ki.makeRotationFromQuaternion(t),this.applyMatrix4(ki),this}rotateX(t){return ki.makeRotationX(t),this.applyMatrix4(ki),this}rotateY(t){return ki.makeRotationY(t),this.applyMatrix4(ki),this}rotateZ(t){return ki.makeRotationZ(t),this.applyMatrix4(ki),this}translate(t,i,r){return ki.makeTranslation(t,i,r),this.applyMatrix4(ki),this}scale(t,i,r){return ki.makeScale(t,i,r),this.applyMatrix4(ki),this}lookAt(t){return _d.lookAt(t),_d.updateMatrix(),this.applyMatrix4(_d.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(so).negate(),this.translate(so.x,so.y,so.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=t.length;l<c;l++){const d=t[l];r.push(d.x,d.y,d.z||0)}this.setAttribute("position",new ui(r,3))}else{const r=Math.min(t.length,i.count);for(let l=0;l<r;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xo);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ot(-1/0,-1/0,-1/0),new ot(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];Di.setFromBufferAttribute(c),this.morphTargetsRelative?(Hn.addVectors(this.boundingBox.min,Di.min),this.boundingBox.expandByPoint(Hn),Hn.addVectors(this.boundingBox.max,Di.max),this.boundingBox.expandByPoint(Hn)):(this.boundingBox.expandByPoint(Di.min),this.boundingBox.expandByPoint(Di.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Eo);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ot,1/0);return}if(t){const r=this.boundingSphere.center;if(Di.setFromBufferAttribute(t),i)for(let c=0,d=i.length;c<d;c++){const m=i[c];Tl.setFromBufferAttribute(m),this.morphTargetsRelative?(Hn.addVectors(Di.min,Tl.min),Di.expandByPoint(Hn),Hn.addVectors(Di.max,Tl.max),Di.expandByPoint(Hn)):(Di.expandByPoint(Tl.min),Di.expandByPoint(Tl.max))}Di.getCenter(r);let l=0;for(let c=0,d=t.count;c<d;c++)Hn.fromBufferAttribute(t,c),l=Math.max(l,r.distanceToSquared(Hn));if(i)for(let c=0,d=i.length;c<d;c++){const m=i[c],_=this.morphTargetsRelative;for(let g=0,v=m.count;g<v;g++)Hn.fromBufferAttribute(m,g),_&&(so.fromBufferAttribute(t,g),Hn.add(so)),l=Math.max(l,r.distanceToSquared(Hn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ma(new Float32Array(4*r.count),4));const d=this.getAttribute("tangent"),m=[],_=[];for(let K=0;K<r.count;K++)m[K]=new ot,_[K]=new ot;const g=new ot,v=new ot,y=new ot,E=new Te,b=new Te,w=new Te,C=new ot,M=new ot;function x(K,F,O){g.fromBufferAttribute(r,K),v.fromBufferAttribute(r,F),y.fromBufferAttribute(r,O),E.fromBufferAttribute(c,K),b.fromBufferAttribute(c,F),w.fromBufferAttribute(c,O),v.sub(g),y.sub(g),b.sub(E),w.sub(E);const q=1/(b.x*w.y-w.x*b.y);isFinite(q)&&(C.copy(v).multiplyScalar(w.y).addScaledVector(y,-b.y).multiplyScalar(q),M.copy(y).multiplyScalar(b.x).addScaledVector(v,-w.x).multiplyScalar(q),m[K].add(C),m[F].add(C),m[O].add(C),_[K].add(M),_[F].add(M),_[O].add(M))}let V=this.groups;V.length===0&&(V=[{start:0,count:t.count}]);for(let K=0,F=V.length;K<F;++K){const O=V[K],q=O.start,rt=O.count;for(let ht=q,_t=q+rt;ht<_t;ht+=3)x(t.getX(ht+0),t.getX(ht+1),t.getX(ht+2))}const G=new ot,P=new ot,Y=new ot,z=new ot;function k(K){Y.fromBufferAttribute(l,K),z.copy(Y);const F=m[K];G.copy(F),G.sub(Y.multiplyScalar(Y.dot(F))).normalize(),P.crossVectors(z,F);const q=P.dot(_[K])<0?-1:1;d.setXYZW(K,G.x,G.y,G.z,q)}for(let K=0,F=V.length;K<F;++K){const O=V[K],q=O.start,rt=O.count;for(let ht=q,_t=q+rt;ht<_t;ht+=3)k(t.getX(ht+0)),k(t.getX(ht+1)),k(t.getX(ht+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new ma(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let E=0,b=r.count;E<b;E++)r.setXYZ(E,0,0,0);const l=new ot,c=new ot,d=new ot,m=new ot,_=new ot,g=new ot,v=new ot,y=new ot;if(t)for(let E=0,b=t.count;E<b;E+=3){const w=t.getX(E+0),C=t.getX(E+1),M=t.getX(E+2);l.fromBufferAttribute(i,w),c.fromBufferAttribute(i,C),d.fromBufferAttribute(i,M),v.subVectors(d,c),y.subVectors(l,c),v.cross(y),m.fromBufferAttribute(r,w),_.fromBufferAttribute(r,C),g.fromBufferAttribute(r,M),m.add(v),_.add(v),g.add(v),r.setXYZ(w,m.x,m.y,m.z),r.setXYZ(C,_.x,_.y,_.z),r.setXYZ(M,g.x,g.y,g.z)}else for(let E=0,b=i.count;E<b;E+=3)l.fromBufferAttribute(i,E+0),c.fromBufferAttribute(i,E+1),d.fromBufferAttribute(i,E+2),v.subVectors(d,c),y.subVectors(l,c),v.cross(y),r.setXYZ(E+0,v.x,v.y,v.z),r.setXYZ(E+1,v.x,v.y,v.z),r.setXYZ(E+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)Hn.fromBufferAttribute(t,i),Hn.normalize(),t.setXYZ(i,Hn.x,Hn.y,Hn.z)}toNonIndexed(){function t(m,_){const g=m.array,v=m.itemSize,y=m.normalized,E=new g.constructor(_.length*v);let b=0,w=0;for(let C=0,M=_.length;C<M;C++){m.isInterleavedBufferAttribute?b=_[C]*m.data.stride+m.offset:b=_[C]*v;for(let x=0;x<v;x++)E[w++]=g[b++]}return new ma(E,v,y)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new ra,r=this.index.array,l=this.attributes;for(const m in l){const _=l[m],g=t(_,r);i.setAttribute(m,g)}const c=this.morphAttributes;for(const m in c){const _=[],g=c[m];for(let v=0,y=g.length;v<y;v++){const E=g[v],b=t(E,r);_.push(b)}i.morphAttributes[m]=_}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let m=0,_=d.length;m<_;m++){const g=d[m];i.addGroup(g.start,g.count,g.materialIndex)}return i}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const _=this.parameters;for(const g in _)_[g]!==void 0&&(t[g]=_[g]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const _ in r){const g=r[_];t.data.attributes[_]=g.toJSON(t.data)}const l={};let c=!1;for(const _ in this.morphAttributes){const g=this.morphAttributes[_],v=[];for(let y=0,E=g.length;y<E;y++){const b=g[y];v.push(b.toJSON(t.data))}v.length>0&&(l[_]=v,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(t.data.groups=JSON.parse(JSON.stringify(d)));const m=this.boundingSphere;return m!==null&&(t.data.boundingSphere={center:m.center.toArray(),radius:m.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone());const l=t.attributes;for(const g in l){const v=l[g];this.setAttribute(g,v.clone(i))}const c=t.morphAttributes;for(const g in c){const v=[],y=c[g];for(let E=0,b=y.length;E<b;E++)v.push(y[E].clone(i));this.morphAttributes[g]=v}this.morphTargetsRelative=t.morphTargetsRelative;const d=t.groups;for(let g=0,v=d.length;g<v;g++){const y=d[g];this.addGroup(y.start,y.count,y.materialIndex)}const m=t.boundingBox;m!==null&&(this.boundingBox=m.clone());const _=t.boundingSphere;return _!==null&&(this.boundingSphere=_.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const yv=new ln,is=new Ou,eu=new Eo,Sv=new ot,nu=new ot,iu=new ot,au=new ot,vd=new ot,ru=new ot,xv=new ot,su=new ot;class ia extends kn{constructor(t=new ra,i=new F0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const m=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[m]=c}}}}getVertexPosition(t,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,d=r.morphTargetsRelative;i.fromBufferAttribute(l,t);const m=this.morphTargetInfluences;if(c&&m){ru.set(0,0,0);for(let _=0,g=c.length;_<g;_++){const v=m[_],y=c[_];v!==0&&(vd.fromBufferAttribute(y,t),d?ru.addScaledVector(vd,v):ru.addScaledVector(vd.sub(i),v))}i.add(ru)}return i}raycast(t,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),eu.copy(r.boundingSphere),eu.applyMatrix4(c),is.copy(t.ray).recast(t.near),!(eu.containsPoint(is.origin)===!1&&(is.intersectSphere(eu,Sv)===null||is.origin.distanceToSquared(Sv)>(t.far-t.near)**2))&&(yv.copy(c).invert(),is.copy(t.ray).applyMatrix4(yv),!(r.boundingBox!==null&&is.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,i,is)))}_computeIntersections(t,i,r){let l;const c=this.geometry,d=this.material,m=c.index,_=c.attributes.position,g=c.attributes.uv,v=c.attributes.uv1,y=c.attributes.normal,E=c.groups,b=c.drawRange;if(m!==null)if(Array.isArray(d))for(let w=0,C=E.length;w<C;w++){const M=E[w],x=d[M.materialIndex],V=Math.max(M.start,b.start),G=Math.min(m.count,Math.min(M.start+M.count,b.start+b.count));for(let P=V,Y=G;P<Y;P+=3){const z=m.getX(P),k=m.getX(P+1),K=m.getX(P+2);l=ou(this,x,t,r,g,v,y,z,k,K),l&&(l.faceIndex=Math.floor(P/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const w=Math.max(0,b.start),C=Math.min(m.count,b.start+b.count);for(let M=w,x=C;M<x;M+=3){const V=m.getX(M),G=m.getX(M+1),P=m.getX(M+2);l=ou(this,d,t,r,g,v,y,V,G,P),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(_!==void 0)if(Array.isArray(d))for(let w=0,C=E.length;w<C;w++){const M=E[w],x=d[M.materialIndex],V=Math.max(M.start,b.start),G=Math.min(_.count,Math.min(M.start+M.count,b.start+b.count));for(let P=V,Y=G;P<Y;P+=3){const z=P,k=P+1,K=P+2;l=ou(this,x,t,r,g,v,y,z,k,K),l&&(l.faceIndex=Math.floor(P/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const w=Math.max(0,b.start),C=Math.min(_.count,b.start+b.count);for(let M=w,x=C;M<x;M+=3){const V=M,G=M+1,P=M+2;l=ou(this,d,t,r,g,v,y,V,G,P),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function kx(s,t,i,r,l,c,d,m){let _;if(t.side===_i?_=r.intersectTriangle(d,c,l,!0,m):_=r.intersectTriangle(l,c,d,t.side===wr,m),_===null)return null;su.copy(m),su.applyMatrix4(s.matrixWorld);const g=i.ray.origin.distanceTo(su);return g<i.near||g>i.far?null:{distance:g,point:su.clone(),object:s}}function ou(s,t,i,r,l,c,d,m,_,g){s.getVertexPosition(m,nu),s.getVertexPosition(_,iu),s.getVertexPosition(g,au);const v=kx(s,t,i,r,nu,iu,au,xv);if(v){const y=new ot;ea.getBarycoord(xv,nu,iu,au,y),l&&(v.uv=ea.getInterpolatedAttribute(l,m,_,g,y,new Te)),c&&(v.uv1=ea.getInterpolatedAttribute(c,m,_,g,y,new Te)),d&&(v.normal=ea.getInterpolatedAttribute(d,m,_,g,y,new ot),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const E={a:m,b:_,c:g,normal:new ot,materialIndex:0};ea.getNormal(nu,iu,au,E.normal),v.face=E,v.barycoord=y}return v}class Fl extends ra{constructor(t=1,i=1,r=1,l=1,c=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:d};const m=this;l=Math.floor(l),c=Math.floor(c),d=Math.floor(d);const _=[],g=[],v=[],y=[];let E=0,b=0;w("z","y","x",-1,-1,r,i,t,d,c,0),w("z","y","x",1,-1,r,i,-t,d,c,1),w("x","z","y",1,1,t,r,i,l,d,2),w("x","z","y",1,-1,t,r,-i,l,d,3),w("x","y","z",1,-1,t,i,r,l,c,4),w("x","y","z",-1,-1,t,i,-r,l,c,5),this.setIndex(_),this.setAttribute("position",new ui(g,3)),this.setAttribute("normal",new ui(v,3)),this.setAttribute("uv",new ui(y,2));function w(C,M,x,V,G,P,Y,z,k,K,F){const O=P/k,q=Y/K,rt=P/2,ht=Y/2,_t=z/2,Mt=k+1,X=K+1;let st=0,et=0;const Nt=new ot;for(let B=0;B<X;B++){const ct=B*q-ht;for(let Rt=0;Rt<Mt;Rt++){const Ut=Rt*O-rt;Nt[C]=Ut*V,Nt[M]=ct*G,Nt[x]=_t,g.push(Nt.x,Nt.y,Nt.z),Nt[C]=0,Nt[M]=0,Nt[x]=z>0?1:-1,v.push(Nt.x,Nt.y,Nt.z),y.push(Rt/k),y.push(1-B/K),st+=1}}for(let B=0;B<K;B++)for(let ct=0;ct<k;ct++){const Rt=E+ct+Mt*B,Ut=E+ct+Mt*(B+1),at=E+(ct+1)+Mt*(B+1),Tt=E+(ct+1)+Mt*B;_.push(Rt,Ut,Tt),_.push(Ut,at,Tt),et+=6}m.addGroup(b,et,F),b+=et,E+=st}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fl(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function So(s){const t={};for(const i in s){t[i]={};for(const r in s[i]){const l=s[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=l.clone():Array.isArray(l)?t[i][r]=l.slice():t[i][r]=l}}return t}function ci(s){const t={};for(let i=0;i<s.length;i++){const r=So(s[i]);for(const l in r)t[l]=r[l]}return t}function Xx(s){const t=[];for(let i=0;i<s.length;i++)t.push(s[i].clone());return t}function z0(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ve.workingColorSpace}const Wx={clone:So,merge:ci};var qx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Yx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Cr extends Ya{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qx,this.fragmentShader=Yx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=So(t.uniforms),this.uniformsGroups=Xx(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(t).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class H0 extends kn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ln,this.projectionMatrix=new ln,this.projectionMatrixInverse=new ln,this.coordinateSystem=Wa}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Mr=new ot,Ev=new Te,Mv=new Te;class Wi extends H0{constructor(t=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=vp*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Mu*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return vp*2*Math.atan(Math.tan(Mu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,r){Mr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Mr.x,Mr.y).multiplyScalar(-t/Mr.z),Mr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Mr.x,Mr.y).multiplyScalar(-t/Mr.z)}getViewSize(t,i){return this.getViewBounds(t,Ev,Mv),i.subVectors(Mv,Ev)}setViewOffset(t,i,r,l,c,d){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Mu*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const _=d.fullWidth,g=d.fullHeight;c+=d.offsetX*l/_,i-=d.offsetY*r/g,l*=d.width/_,r*=d.height/g}const m=this.filmOffset;m!==0&&(c+=t*m/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const oo=-90,lo=1;class jx extends kn{constructor(t,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Wi(oo,lo,t,i);l.layers=this.layers,this.add(l);const c=new Wi(oo,lo,t,i);c.layers=this.layers,this.add(c);const d=new Wi(oo,lo,t,i);d.layers=this.layers,this.add(d);const m=new Wi(oo,lo,t,i);m.layers=this.layers,this.add(m);const _=new Wi(oo,lo,t,i);_.layers=this.layers,this.add(_);const g=new Wi(oo,lo,t,i);g.layers=this.layers,this.add(g)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[r,l,c,d,m,_]=i;for(const g of i)this.remove(g);if(t===Wa)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),m.up.set(0,1,0),m.lookAt(0,0,1),_.up.set(0,1,0),_.lookAt(0,0,-1);else if(t===wu)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),m.up.set(0,-1,0),m.lookAt(0,0,1),_.up.set(0,-1,0),_.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const g of i)this.add(g),g.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,d,m,_,g,v]=this.children,y=t.getRenderTarget(),E=t.getActiveCubeFace(),b=t.getActiveMipmapLevel(),w=t.xr.enabled;t.xr.enabled=!1;const C=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,t.setRenderTarget(r,0,l),t.render(i,c),t.setRenderTarget(r,1,l),t.render(i,d),t.setRenderTarget(r,2,l),t.render(i,m),t.setRenderTarget(r,3,l),t.render(i,_),t.setRenderTarget(r,4,l),t.render(i,g),r.texture.generateMipmaps=C,t.setRenderTarget(r,5,l),t.render(i,v),t.setRenderTarget(y,E,b),t.xr.enabled=w,r.texture.needsPMREMUpdate=!0}}class G0 extends vi{constructor(t=[],i=_o,r,l,c,d,m,_,g,v){super(t,i,r,l,c,d,m,_,g,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Zx extends ds{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},l=[r,r,r,r,r,r];this.texture=new G0(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:pa}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Fl(5,5,5),c=new Cr({name:"CubemapFromEquirect",uniforms:So(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:_i,blending:Ar});c.uniforms.tEquirect.value=i;const d=new ia(l,c),m=i.minFilter;return i.minFilter===fs&&(i.minFilter=pa),new jx(1,10,this).update(t,d),i.minFilter=m,d.geometry.dispose(),d.material.dispose(),this}clear(t,i=!0,r=!0,l=!0){const c=t.getRenderTarget();for(let d=0;d<6;d++)t.setRenderTarget(this,d),t.clear(i,r,l);t.setRenderTarget(c)}}class Rl extends kn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Kx={type:"move"};class yd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Rl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Rl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ot,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ot),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Rl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ot,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ot),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const r of t.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,r){let l=null,c=null,d=null;const m=this._targetRay,_=this._grip,g=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(g&&t.hand){d=!0;for(const C of t.hand.values()){const M=i.getJointPose(C,r),x=this._getHandJoint(g,C);M!==null&&(x.matrix.fromArray(M.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=M.radius),x.visible=M!==null}const v=g.joints["index-finger-tip"],y=g.joints["thumb-tip"],E=v.position.distanceTo(y.position),b=.02,w=.005;g.inputState.pinching&&E>b+w?(g.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!g.inputState.pinching&&E<=b-w&&(g.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else _!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,r),c!==null&&(_.matrix.fromArray(c.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,c.linearVelocity?(_.hasLinearVelocity=!0,_.linearVelocity.copy(c.linearVelocity)):_.hasLinearVelocity=!1,c.angularVelocity?(_.hasAngularVelocity=!0,_.angularVelocity.copy(c.angularVelocity)):_.hasAngularVelocity=!1));m!==null&&(l=i.getPose(t.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(m.matrix.fromArray(l.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,l.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(l.linearVelocity)):m.hasLinearVelocity=!1,l.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(l.angularVelocity)):m.hasAngularVelocity=!1,this.dispatchEvent(Kx)))}return m!==null&&(m.visible=l!==null),_!==null&&(_.visible=c!==null),g!==null&&(g.visible=d!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const r=new Rl;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[i.jointName]=r,t.add(r)}return t.joints[i.jointName]}}class Qx extends kn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _a,this.environmentIntensity=1,this.environmentRotation=new _a,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Sd=new ot,Jx=new ot,$x=new be;class br{constructor(t=new ot(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,r,l){return this.normal.set(t,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,r){const l=Sd.subVectors(r,i).cross(Jx.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const r=t.delta(Sd),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(r,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return i<0&&r>0||r<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const r=i||$x.getNormalMatrix(t),l=this.coplanarPoint(Sd).applyMatrix4(t),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const as=new Eo,lu=new ot;class Up{constructor(t=new br,i=new br,r=new br,l=new br,c=new br,d=new br){this.planes=[t,i,r,l,c,d]}set(t,i,r,l,c,d){const m=this.planes;return m[0].copy(t),m[1].copy(i),m[2].copy(r),m[3].copy(l),m[4].copy(c),m[5].copy(d),this}copy(t){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,i=Wa){const r=this.planes,l=t.elements,c=l[0],d=l[1],m=l[2],_=l[3],g=l[4],v=l[5],y=l[6],E=l[7],b=l[8],w=l[9],C=l[10],M=l[11],x=l[12],V=l[13],G=l[14],P=l[15];if(r[0].setComponents(_-c,E-g,M-b,P-x).normalize(),r[1].setComponents(_+c,E+g,M+b,P+x).normalize(),r[2].setComponents(_+d,E+v,M+w,P+V).normalize(),r[3].setComponents(_-d,E-v,M-w,P-V).normalize(),r[4].setComponents(_-m,E-y,M-C,P-G).normalize(),i===Wa)r[5].setComponents(_+m,E+y,M+C,P+G).normalize();else if(i===wu)r[5].setComponents(m,y,C,G).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),as.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),as.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(as)}intersectsSprite(t){return as.center.set(0,0,0),as.radius=.7071067811865476,as.applyMatrix4(t.matrixWorld),this.intersectsSphere(as)}intersectsSphere(t){const i=this.planes,r=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(lu.x=l.normal.x>0?t.max.x:t.min.x,lu.y=l.normal.y>0?t.max.y:t.min.y,lu.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(lu)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Tu extends Ya{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Du=new ot,Uu=new ot,bv=new ln,Al=new Ou,cu=new Eo,xd=new ot,Tv=new ot;class tE extends kn{constructor(t=new ra,i=new Tu){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,r=[0];for(let l=1,c=i.count;l<c;l++)Du.fromBufferAttribute(i,l-1),Uu.fromBufferAttribute(i,l),r[l]=r[l-1],r[l]+=Du.distanceTo(Uu);t.setAttribute("lineDistance",new ui(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const r=this.geometry,l=this.matrixWorld,c=t.params.Line.threshold,d=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),cu.copy(r.boundingSphere),cu.applyMatrix4(l),cu.radius+=c,t.ray.intersectsSphere(cu)===!1)return;bv.copy(l).invert(),Al.copy(t.ray).applyMatrix4(bv);const m=c/((this.scale.x+this.scale.y+this.scale.z)/3),_=m*m,g=this.isLineSegments?2:1,v=r.index,E=r.attributes.position;if(v!==null){const b=Math.max(0,d.start),w=Math.min(v.count,d.start+d.count);for(let C=b,M=w-1;C<M;C+=g){const x=v.getX(C),V=v.getX(C+1),G=uu(this,t,Al,_,x,V,C);G&&i.push(G)}if(this.isLineLoop){const C=v.getX(w-1),M=v.getX(b),x=uu(this,t,Al,_,C,M,w-1);x&&i.push(x)}}else{const b=Math.max(0,d.start),w=Math.min(E.count,d.start+d.count);for(let C=b,M=w-1;C<M;C+=g){const x=uu(this,t,Al,_,C,C+1,C);x&&i.push(x)}if(this.isLineLoop){const C=uu(this,t,Al,_,w-1,b,w-1);C&&i.push(C)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const m=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[m]=c}}}}}function uu(s,t,i,r,l,c,d){const m=s.geometry.attributes.position;if(Du.fromBufferAttribute(m,l),Uu.fromBufferAttribute(m,c),i.distanceSqToSegment(Du,Uu,xd,Tv)>r)return;xd.applyMatrix4(s.matrixWorld);const g=t.ray.origin.distanceTo(xd);if(!(g<t.near||g>t.far))return{distance:g,point:Tv.clone().applyMatrix4(s.matrixWorld),index:d,face:null,faceIndex:null,barycoord:null,object:s}}const Av=new ot,Rv=new ot;class wv extends tE{constructor(t,i){super(t,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,r=[];for(let l=0,c=i.count;l<c;l+=2)Av.fromBufferAttribute(i,l),Rv.fromBufferAttribute(i,l+1),r[l]=l===0?0:r[l-1],r[l+1]=r[l]+Av.distanceTo(Rv);t.setAttribute("lineDistance",new ui(r,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class wl extends Ya{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ze(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Cv=new ln,yp=new Ou,fu=new Eo,hu=new ot;class Ed extends kn{constructor(t=new ra,i=new wl){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,i){const r=this.geometry,l=this.matrixWorld,c=t.params.Points.threshold,d=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),fu.copy(r.boundingSphere),fu.applyMatrix4(l),fu.radius+=c,t.ray.intersectsSphere(fu)===!1)return;Cv.copy(l).invert(),yp.copy(t.ray).applyMatrix4(Cv);const m=c/((this.scale.x+this.scale.y+this.scale.z)/3),_=m*m,g=r.index,y=r.attributes.position;if(g!==null){const E=Math.max(0,d.start),b=Math.min(g.count,d.start+d.count);for(let w=E,C=b;w<C;w++){const M=g.getX(w);hu.fromBufferAttribute(y,M),Dv(hu,M,_,l,t,i,this)}}else{const E=Math.max(0,d.start),b=Math.min(y.count,d.start+d.count);for(let w=E,C=b;w<C;w++)hu.fromBufferAttribute(y,w),Dv(hu,w,_,l,t,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const m=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[m]=c}}}}}function Dv(s,t,i,r,l,c,d){const m=yp.distanceSqToPoint(s);if(m<i){const _=new ot;yp.closestPointToPoint(s,_),_.applyMatrix4(r);const g=l.ray.origin.distanceTo(_);if(g<l.near||g>l.far)return;c.push({distance:g,distanceToRay:Math.sqrt(m),point:_,index:t,face:null,faceIndex:null,barycoord:null,object:d})}}class V0 extends vi{constructor(t,i,r=hs,l,c,d,m=aa,_=aa,g,v=Ll){if(v!==Ll&&v!==Nl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,l,c,d,m,_,v,r,g),this.isDepthTexture=!0,this.image={width:t,height:i},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Dp(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Pu extends ra{constructor(t=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:l};const c=t/2,d=i/2,m=Math.floor(r),_=Math.floor(l),g=m+1,v=_+1,y=t/m,E=i/_,b=[],w=[],C=[],M=[];for(let x=0;x<v;x++){const V=x*E-d;for(let G=0;G<g;G++){const P=G*y-c;w.push(P,-V,0),C.push(0,0,1),M.push(G/m),M.push(1-x/_)}}for(let x=0;x<_;x++)for(let V=0;V<m;V++){const G=V+g*x,P=V+g*(x+1),Y=V+1+g*(x+1),z=V+1+g*x;b.push(G,P,z),b.push(P,Y,z)}this.setIndex(b),this.setAttribute("position",new ui(w,3)),this.setAttribute("normal",new ui(C,3)),this.setAttribute("uv",new ui(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pu(t.width,t.height,t.widthSegments,t.heightSegments)}}class eE extends Ya{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new ze(16777215),this.specular=new ze(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=D0,this.normalScale=new Te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _a,this.combine=Mp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class nE extends Ya{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class iE extends Ya{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Uv={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(this.files[s]=t)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class aE{constructor(t,i,r){const l=this;let c=!1,d=0,m=0,_;const g=[];this.onStart=void 0,this.onLoad=t,this.onProgress=i,this.onError=r,this.itemStart=function(v){m++,c===!1&&l.onStart!==void 0&&l.onStart(v,d,m),c=!0},this.itemEnd=function(v){d++,l.onProgress!==void 0&&l.onProgress(v,d,m),d===m&&(c=!1,l.onLoad!==void 0&&l.onLoad())},this.itemError=function(v){l.onError!==void 0&&l.onError(v)},this.resolveURL=function(v){return _?_(v):v},this.setURLModifier=function(v){return _=v,this},this.addHandler=function(v,y){return g.push(v,y),this},this.removeHandler=function(v){const y=g.indexOf(v);return y!==-1&&g.splice(y,2),this},this.getHandler=function(v){for(let y=0,E=g.length;y<E;y+=2){const b=g[y],w=g[y+1];if(b.global&&(b.lastIndex=0),b.test(v))return w}return null}}}const rE=new aE;class Lp{constructor(t){this.manager=t!==void 0?t:rE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,i){const r=this;return new Promise(function(l,c){r.load(t,l,i,c)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Lp.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ga={};class sE extends Error{constructor(t,i){super(t),this.response=i}}class oE extends Lp{constructor(t){super(t),this.mimeType="",this.responseType=""}load(t,i,r,l){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const c=Uv.get(t);if(c!==void 0)return this.manager.itemStart(t),setTimeout(()=>{i&&i(c),this.manager.itemEnd(t)},0),c;if(Ga[t]!==void 0){Ga[t].push({onLoad:i,onProgress:r,onError:l});return}Ga[t]=[],Ga[t].push({onLoad:i,onProgress:r,onError:l});const d=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),m=this.mimeType,_=this.responseType;fetch(d).then(g=>{if(g.status===200||g.status===0){if(g.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||g.body===void 0||g.body.getReader===void 0)return g;const v=Ga[t],y=g.body.getReader(),E=g.headers.get("X-File-Size")||g.headers.get("Content-Length"),b=E?parseInt(E):0,w=b!==0;let C=0;const M=new ReadableStream({start(x){V();function V(){y.read().then(({done:G,value:P})=>{if(G)x.close();else{C+=P.byteLength;const Y=new ProgressEvent("progress",{lengthComputable:w,loaded:C,total:b});for(let z=0,k=v.length;z<k;z++){const K=v[z];K.onProgress&&K.onProgress(Y)}x.enqueue(P),V()}},G=>{x.error(G)})}}});return new Response(M)}else throw new sE(`fetch for "${g.url}" responded with ${g.status}: ${g.statusText}`,g)}).then(g=>{switch(_){case"arraybuffer":return g.arrayBuffer();case"blob":return g.blob();case"document":return g.text().then(v=>new DOMParser().parseFromString(v,m));case"json":return g.json();default:if(m==="")return g.text();{const y=/charset="?([^;"\s]*)"?/i.exec(m),E=y&&y[1]?y[1].toLowerCase():void 0,b=new TextDecoder(E);return g.arrayBuffer().then(w=>b.decode(w))}}}).then(g=>{Uv.add(t,g);const v=Ga[t];delete Ga[t];for(let y=0,E=v.length;y<E;y++){const b=v[y];b.onLoad&&b.onLoad(g)}}).catch(g=>{const v=Ga[t];if(v===void 0)throw this.manager.itemError(t),g;delete Ga[t];for(let y=0,E=v.length;y<E;y++){const b=v[y];b.onError&&b.onError(g)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class lE extends kn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new ze(t),this.intensity=i}dispose(){}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}const Md=new ln,Lv=new ot,Nv=new ot;class cE{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Te(512,512),this.mapType=ga,this.map=null,this.mapPass=null,this.matrix=new ln,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Up,this._frameExtents=new Te(1,1),this._viewportCount=1,this._viewports=[new gn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,r=this.matrix;Lv.setFromMatrixPosition(t.matrixWorld),i.position.copy(Lv),Nv.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(Nv),i.updateMatrixWorld(),Md.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Md),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Md)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class k0 extends H0{constructor(t=-1,i=1,r=1,l=-1,c=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=d,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,r,l,c,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-t,d=r+t,m=l+i,_=l-i;if(this.view!==null&&this.view.enabled){const g=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=g*this.view.offsetX,d=c+g*this.view.width,m-=v*this.view.offsetY,_=m-v*this.view.height}this.projectionMatrix.makeOrthographic(c,d,m,_,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class uE extends cE{constructor(){super(new k0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ov extends lE{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(kn.DEFAULT_UP),this.updateMatrix(),this.target=new kn,this.shadow=new uE}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class fE extends Wi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Pv{constructor(t=1,i=0,r=0){this.radius=t,this.phi=i,this.theta=r}set(t,i,r){return this.radius=t,this.phi=i,this.theta=r,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Fe(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,i,r){return this.radius=Math.sqrt(t*t+i*i+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,r),this.phi=Math.acos(Fe(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class hE extends ms{constructor(t,i=null){super(),this.object=t,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function Fv(s,t,i,r){const l=dE(r);switch(i){case T0:return s*t;case R0:return s*t/l.components*l.byteLength;case Rp:return s*t/l.components*l.byteLength;case w0:return s*t*2/l.components*l.byteLength;case wp:return s*t*2/l.components*l.byteLength;case A0:return s*t*3/l.components*l.byteLength;case na:return s*t*4/l.components*l.byteLength;case Cp:return s*t*4/l.components*l.byteLength;case vu:case yu:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Su:case xu:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Yd:case Zd:return Math.max(s,16)*Math.max(t,8)/4;case qd:case jd:return Math.max(s,8)*Math.max(t,8)/2;case Kd:case Qd:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Jd:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case $d:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case tp:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case ep:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case np:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case ip:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case ap:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case rp:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case sp:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case op:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case lp:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case cp:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case up:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case fp:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case hp:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Eu:case dp:case pp:return Math.ceil(s/4)*Math.ceil(t/4)*16;case C0:case mp:return Math.ceil(s/4)*Math.ceil(t/4)*8;case gp:case _p:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function dE(s){switch(s){case ga:case E0:return{byteLength:1,components:1};case Dl:case M0:case Ol:return{byteLength:2,components:1};case Tp:case Ap:return{byteLength:2,components:4};case hs:case bp:case Xa:return{byteLength:4,components:1};case b0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ep}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ep);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function X0(){let s=null,t=!1,i=null,r=null;function l(c,d){i(c,d),r=s.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(r=s.requestAnimationFrame(l),t=!0)},stop:function(){s.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){s=c}}}function pE(s){const t=new WeakMap;function i(m,_){const g=m.array,v=m.usage,y=g.byteLength,E=s.createBuffer();s.bindBuffer(_,E),s.bufferData(_,g,v),m.onUploadCallback();let b;if(g instanceof Float32Array)b=s.FLOAT;else if(g instanceof Uint16Array)m.isFloat16BufferAttribute?b=s.HALF_FLOAT:b=s.UNSIGNED_SHORT;else if(g instanceof Int16Array)b=s.SHORT;else if(g instanceof Uint32Array)b=s.UNSIGNED_INT;else if(g instanceof Int32Array)b=s.INT;else if(g instanceof Int8Array)b=s.BYTE;else if(g instanceof Uint8Array)b=s.UNSIGNED_BYTE;else if(g instanceof Uint8ClampedArray)b=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+g);return{buffer:E,type:b,bytesPerElement:g.BYTES_PER_ELEMENT,version:m.version,size:y}}function r(m,_,g){const v=_.array,y=_.updateRanges;if(s.bindBuffer(g,m),y.length===0)s.bufferSubData(g,0,v);else{y.sort((b,w)=>b.start-w.start);let E=0;for(let b=1;b<y.length;b++){const w=y[E],C=y[b];C.start<=w.start+w.count+1?w.count=Math.max(w.count,C.start+C.count-w.start):(++E,y[E]=C)}y.length=E+1;for(let b=0,w=y.length;b<w;b++){const C=y[b];s.bufferSubData(g,C.start*v.BYTES_PER_ELEMENT,v,C.start,C.count)}_.clearUpdateRanges()}_.onUploadCallback()}function l(m){return m.isInterleavedBufferAttribute&&(m=m.data),t.get(m)}function c(m){m.isInterleavedBufferAttribute&&(m=m.data);const _=t.get(m);_&&(s.deleteBuffer(_.buffer),t.delete(m))}function d(m,_){if(m.isInterleavedBufferAttribute&&(m=m.data),m.isGLBufferAttribute){const v=t.get(m);(!v||v.version<m.version)&&t.set(m,{buffer:m.buffer,type:m.type,bytesPerElement:m.elementSize,version:m.version});return}const g=t.get(m);if(g===void 0)t.set(m,i(m,_));else if(g.version<m.version){if(g.size!==m.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(g.buffer,m,_),g.version=m.version}}return{get:l,remove:c,update:d}}var mE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,gE=`#ifdef USE_ALPHAHASH
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
#endif`,_E=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,vE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,SE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xE=`#ifdef USE_AOMAP
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
#endif`,EE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ME=`#ifdef USE_BATCHING
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
#endif`,bE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,TE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,AE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,RE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,wE=`#ifdef USE_IRIDESCENCE
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
#endif`,CE=`#ifdef USE_BUMPMAP
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
#endif`,DE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,UE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,LE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,NE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,OE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,PE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,FE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,BE=`#if defined( USE_COLOR_ALPHA )
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
#endif`,IE=`#define PI 3.141592653589793
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
} // validated`,zE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,HE=`vec3 transformedNormal = objectNormal;
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
#endif`,GE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,VE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,kE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,XE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,WE="gl_FragColor = linearToOutputTexel( gl_FragColor );",qE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,YE=`#ifdef USE_ENVMAP
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
#endif`,jE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ZE=`#ifdef USE_ENVMAP
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
#endif`,KE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,QE=`#ifdef USE_ENVMAP
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
#endif`,JE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$E=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,tM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,eM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,nM=`#ifdef USE_GRADIENTMAP
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
}`,iM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,aM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,rM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,sM=`uniform bool receiveShadow;
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
#endif`,oM=`#ifdef USE_ENVMAP
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
#endif`,lM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,cM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,uM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,fM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hM=`PhysicalMaterial material;
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
#endif`,dM=`struct PhysicalMaterial {
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
}`,pM=`
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
#endif`,mM=`#if defined( RE_IndirectDiffuse )
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
#endif`,gM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,_M=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,vM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,SM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,EM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,MM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,bM=`#if defined( USE_POINTS_UV )
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
#endif`,TM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,AM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,RM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,wM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,CM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,DM=`#ifdef USE_MORPHTARGETS
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
#endif`,UM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,LM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,NM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,OM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,PM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,FM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,BM=`#ifdef USE_NORMALMAP
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
#endif`,IM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,zM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,HM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,GM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,VM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,kM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,XM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,WM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,qM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,YM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,jM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ZM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,KM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,QM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,JM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,$M=`float getShadowMask() {
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
}`,tb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,eb=`#ifdef USE_SKINNING
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
#endif`,nb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ib=`#ifdef USE_SKINNING
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
#endif`,ab=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,rb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,sb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ob=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,lb=`#ifdef USE_TRANSMISSION
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
#endif`,cb=`#ifdef USE_TRANSMISSION
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
#endif`,ub=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,db=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const pb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,mb=`uniform sampler2D t2D;
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
}`,gb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_b=`#ifdef ENVMAP_TYPE_CUBE
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
}`,vb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sb=`#include <common>
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
}`,xb=`#if DEPTH_PACKING == 3200
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
}`,Eb=`#define DISTANCE
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
}`,Mb=`#define DISTANCE
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
}`,bb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Tb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ab=`uniform float scale;
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
}`,Rb=`uniform vec3 diffuse;
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
}`,wb=`#include <common>
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
}`,Cb=`uniform vec3 diffuse;
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
}`,Db=`#define LAMBERT
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
}`,Ub=`#define LAMBERT
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
}`,Lb=`#define MATCAP
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
}`,Nb=`#define MATCAP
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
}`,Ob=`#define NORMAL
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
}`,Pb=`#define NORMAL
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
}`,Fb=`#define PHONG
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
}`,Bb=`#define PHONG
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
}`,Ib=`#define STANDARD
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
}`,zb=`#define STANDARD
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
}`,Hb=`#define TOON
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
}`,Gb=`#define TOON
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
}`,Vb=`uniform float size;
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
}`,kb=`uniform vec3 diffuse;
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
}`,Xb=`#include <common>
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
}`,Wb=`uniform vec3 color;
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
}`,qb=`uniform float rotation;
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
}`,Yb=`uniform vec3 diffuse;
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
}`,we={alphahash_fragment:mE,alphahash_pars_fragment:gE,alphamap_fragment:_E,alphamap_pars_fragment:vE,alphatest_fragment:yE,alphatest_pars_fragment:SE,aomap_fragment:xE,aomap_pars_fragment:EE,batching_pars_vertex:ME,batching_vertex:bE,begin_vertex:TE,beginnormal_vertex:AE,bsdfs:RE,iridescence_fragment:wE,bumpmap_pars_fragment:CE,clipping_planes_fragment:DE,clipping_planes_pars_fragment:UE,clipping_planes_pars_vertex:LE,clipping_planes_vertex:NE,color_fragment:OE,color_pars_fragment:PE,color_pars_vertex:FE,color_vertex:BE,common:IE,cube_uv_reflection_fragment:zE,defaultnormal_vertex:HE,displacementmap_pars_vertex:GE,displacementmap_vertex:VE,emissivemap_fragment:kE,emissivemap_pars_fragment:XE,colorspace_fragment:WE,colorspace_pars_fragment:qE,envmap_fragment:YE,envmap_common_pars_fragment:jE,envmap_pars_fragment:ZE,envmap_pars_vertex:KE,envmap_physical_pars_fragment:oM,envmap_vertex:QE,fog_vertex:JE,fog_pars_vertex:$E,fog_fragment:tM,fog_pars_fragment:eM,gradientmap_pars_fragment:nM,lightmap_pars_fragment:iM,lights_lambert_fragment:aM,lights_lambert_pars_fragment:rM,lights_pars_begin:sM,lights_toon_fragment:lM,lights_toon_pars_fragment:cM,lights_phong_fragment:uM,lights_phong_pars_fragment:fM,lights_physical_fragment:hM,lights_physical_pars_fragment:dM,lights_fragment_begin:pM,lights_fragment_maps:mM,lights_fragment_end:gM,logdepthbuf_fragment:_M,logdepthbuf_pars_fragment:vM,logdepthbuf_pars_vertex:yM,logdepthbuf_vertex:SM,map_fragment:xM,map_pars_fragment:EM,map_particle_fragment:MM,map_particle_pars_fragment:bM,metalnessmap_fragment:TM,metalnessmap_pars_fragment:AM,morphinstance_vertex:RM,morphcolor_vertex:wM,morphnormal_vertex:CM,morphtarget_pars_vertex:DM,morphtarget_vertex:UM,normal_fragment_begin:LM,normal_fragment_maps:NM,normal_pars_fragment:OM,normal_pars_vertex:PM,normal_vertex:FM,normalmap_pars_fragment:BM,clearcoat_normal_fragment_begin:IM,clearcoat_normal_fragment_maps:zM,clearcoat_pars_fragment:HM,iridescence_pars_fragment:GM,opaque_fragment:VM,packing:kM,premultiplied_alpha_fragment:XM,project_vertex:WM,dithering_fragment:qM,dithering_pars_fragment:YM,roughnessmap_fragment:jM,roughnessmap_pars_fragment:ZM,shadowmap_pars_fragment:KM,shadowmap_pars_vertex:QM,shadowmap_vertex:JM,shadowmask_pars_fragment:$M,skinbase_vertex:tb,skinning_pars_vertex:eb,skinning_vertex:nb,skinnormal_vertex:ib,specularmap_fragment:ab,specularmap_pars_fragment:rb,tonemapping_fragment:sb,tonemapping_pars_fragment:ob,transmission_fragment:lb,transmission_pars_fragment:cb,uv_pars_fragment:ub,uv_pars_vertex:fb,uv_vertex:hb,worldpos_vertex:db,background_vert:pb,background_frag:mb,backgroundCube_vert:gb,backgroundCube_frag:_b,cube_vert:vb,cube_frag:yb,depth_vert:Sb,depth_frag:xb,distanceRGBA_vert:Eb,distanceRGBA_frag:Mb,equirect_vert:bb,equirect_frag:Tb,linedashed_vert:Ab,linedashed_frag:Rb,meshbasic_vert:wb,meshbasic_frag:Cb,meshlambert_vert:Db,meshlambert_frag:Ub,meshmatcap_vert:Lb,meshmatcap_frag:Nb,meshnormal_vert:Ob,meshnormal_frag:Pb,meshphong_vert:Fb,meshphong_frag:Bb,meshphysical_vert:Ib,meshphysical_frag:zb,meshtoon_vert:Hb,meshtoon_frag:Gb,points_vert:Vb,points_frag:kb,shadow_vert:Xb,shadow_frag:Wb,sprite_vert:qb,sprite_frag:Yb},kt={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new be},alphaMap:{value:null},alphaMapTransform:{value:new be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new be}},envmap:{envMap:{value:null},envMapRotation:{value:new be},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new be},normalScale:{value:new Te(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new be},alphaTest:{value:0},uvTransform:{value:new be}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new Te(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new be},alphaMap:{value:null},alphaMapTransform:{value:new be},alphaTest:{value:0}}},da={basic:{uniforms:ci([kt.common,kt.specularmap,kt.envmap,kt.aomap,kt.lightmap,kt.fog]),vertexShader:we.meshbasic_vert,fragmentShader:we.meshbasic_frag},lambert:{uniforms:ci([kt.common,kt.specularmap,kt.envmap,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.fog,kt.lights,{emissive:{value:new ze(0)}}]),vertexShader:we.meshlambert_vert,fragmentShader:we.meshlambert_frag},phong:{uniforms:ci([kt.common,kt.specularmap,kt.envmap,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.fog,kt.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30}}]),vertexShader:we.meshphong_vert,fragmentShader:we.meshphong_frag},standard:{uniforms:ci([kt.common,kt.envmap,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.roughnessmap,kt.metalnessmap,kt.fog,kt.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:we.meshphysical_vert,fragmentShader:we.meshphysical_frag},toon:{uniforms:ci([kt.common,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.gradientmap,kt.fog,kt.lights,{emissive:{value:new ze(0)}}]),vertexShader:we.meshtoon_vert,fragmentShader:we.meshtoon_frag},matcap:{uniforms:ci([kt.common,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.fog,{matcap:{value:null}}]),vertexShader:we.meshmatcap_vert,fragmentShader:we.meshmatcap_frag},points:{uniforms:ci([kt.points,kt.fog]),vertexShader:we.points_vert,fragmentShader:we.points_frag},dashed:{uniforms:ci([kt.common,kt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:we.linedashed_vert,fragmentShader:we.linedashed_frag},depth:{uniforms:ci([kt.common,kt.displacementmap]),vertexShader:we.depth_vert,fragmentShader:we.depth_frag},normal:{uniforms:ci([kt.common,kt.bumpmap,kt.normalmap,kt.displacementmap,{opacity:{value:1}}]),vertexShader:we.meshnormal_vert,fragmentShader:we.meshnormal_frag},sprite:{uniforms:ci([kt.sprite,kt.fog]),vertexShader:we.sprite_vert,fragmentShader:we.sprite_frag},background:{uniforms:{uvTransform:{value:new be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:we.background_vert,fragmentShader:we.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new be}},vertexShader:we.backgroundCube_vert,fragmentShader:we.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:we.cube_vert,fragmentShader:we.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:we.equirect_vert,fragmentShader:we.equirect_frag},distanceRGBA:{uniforms:ci([kt.common,kt.displacementmap,{referencePosition:{value:new ot},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:we.distanceRGBA_vert,fragmentShader:we.distanceRGBA_frag},shadow:{uniforms:ci([kt.lights,kt.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:we.shadow_vert,fragmentShader:we.shadow_frag}};da.physical={uniforms:ci([da.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new be},clearcoatNormalScale:{value:new Te(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new be},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new be},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new be},transmissionSamplerSize:{value:new Te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new be},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new be},anisotropyVector:{value:new Te},anisotropyMap:{value:null},anisotropyMapTransform:{value:new be}}]),vertexShader:we.meshphysical_vert,fragmentShader:we.meshphysical_frag};const du={r:0,b:0,g:0},rs=new _a,jb=new ln;function Zb(s,t,i,r,l,c,d){const m=new ze(0);let _=c===!0?0:1,g,v,y=null,E=0,b=null;function w(G){let P=G.isScene===!0?G.background:null;return P&&P.isTexture&&(P=(G.backgroundBlurriness>0?i:t).get(P)),P}function C(G){let P=!1;const Y=w(G);Y===null?x(m,_):Y&&Y.isColor&&(x(Y,1),P=!0);const z=s.xr.getEnvironmentBlendMode();z==="additive"?r.buffers.color.setClear(0,0,0,1,d):z==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,d),(s.autoClear||P)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function M(G,P){const Y=w(P);Y&&(Y.isCubeTexture||Y.mapping===Nu)?(v===void 0&&(v=new ia(new Fl(1,1,1),new Cr({name:"BackgroundCubeMaterial",uniforms:So(da.backgroundCube.uniforms),vertexShader:da.backgroundCube.vertexShader,fragmentShader:da.backgroundCube.fragmentShader,side:_i,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(z,k,K){this.matrixWorld.copyPosition(K.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(v)),rs.copy(P.backgroundRotation),rs.x*=-1,rs.y*=-1,rs.z*=-1,Y.isCubeTexture&&Y.isRenderTargetTexture===!1&&(rs.y*=-1,rs.z*=-1),v.material.uniforms.envMap.value=Y,v.material.uniforms.flipEnvMap.value=Y.isCubeTexture&&Y.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(jb.makeRotationFromEuler(rs)),v.material.toneMapped=Ve.getTransfer(Y.colorSpace)!==tn,(y!==Y||E!==Y.version||b!==s.toneMapping)&&(v.material.needsUpdate=!0,y=Y,E=Y.version,b=s.toneMapping),v.layers.enableAll(),G.unshift(v,v.geometry,v.material,0,0,null)):Y&&Y.isTexture&&(g===void 0&&(g=new ia(new Pu(2,2),new Cr({name:"BackgroundMaterial",uniforms:So(da.background.uniforms),vertexShader:da.background.vertexShader,fragmentShader:da.background.fragmentShader,side:wr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),Object.defineProperty(g.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(g)),g.material.uniforms.t2D.value=Y,g.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,g.material.toneMapped=Ve.getTransfer(Y.colorSpace)!==tn,Y.matrixAutoUpdate===!0&&Y.updateMatrix(),g.material.uniforms.uvTransform.value.copy(Y.matrix),(y!==Y||E!==Y.version||b!==s.toneMapping)&&(g.material.needsUpdate=!0,y=Y,E=Y.version,b=s.toneMapping),g.layers.enableAll(),G.unshift(g,g.geometry,g.material,0,0,null))}function x(G,P){G.getRGB(du,z0(s)),r.buffers.color.setClear(du.r,du.g,du.b,P,d)}function V(){v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0),g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0)}return{getClearColor:function(){return m},setClearColor:function(G,P=1){m.set(G),_=P,x(m,_)},getClearAlpha:function(){return _},setClearAlpha:function(G){_=G,x(m,_)},render:C,addToRenderList:M,dispose:V}}function Kb(s,t){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=E(null);let c=l,d=!1;function m(O,q,rt,ht,_t){let Mt=!1;const X=y(ht,rt,q);c!==X&&(c=X,g(c.object)),Mt=b(O,ht,rt,_t),Mt&&w(O,ht,rt,_t),_t!==null&&t.update(_t,s.ELEMENT_ARRAY_BUFFER),(Mt||d)&&(d=!1,P(O,q,rt,ht),_t!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(_t).buffer))}function _(){return s.createVertexArray()}function g(O){return s.bindVertexArray(O)}function v(O){return s.deleteVertexArray(O)}function y(O,q,rt){const ht=rt.wireframe===!0;let _t=r[O.id];_t===void 0&&(_t={},r[O.id]=_t);let Mt=_t[q.id];Mt===void 0&&(Mt={},_t[q.id]=Mt);let X=Mt[ht];return X===void 0&&(X=E(_()),Mt[ht]=X),X}function E(O){const q=[],rt=[],ht=[];for(let _t=0;_t<i;_t++)q[_t]=0,rt[_t]=0,ht[_t]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:rt,attributeDivisors:ht,object:O,attributes:{},index:null}}function b(O,q,rt,ht){const _t=c.attributes,Mt=q.attributes;let X=0;const st=rt.getAttributes();for(const et in st)if(st[et].location>=0){const B=_t[et];let ct=Mt[et];if(ct===void 0&&(et==="instanceMatrix"&&O.instanceMatrix&&(ct=O.instanceMatrix),et==="instanceColor"&&O.instanceColor&&(ct=O.instanceColor)),B===void 0||B.attribute!==ct||ct&&B.data!==ct.data)return!0;X++}return c.attributesNum!==X||c.index!==ht}function w(O,q,rt,ht){const _t={},Mt=q.attributes;let X=0;const st=rt.getAttributes();for(const et in st)if(st[et].location>=0){let B=Mt[et];B===void 0&&(et==="instanceMatrix"&&O.instanceMatrix&&(B=O.instanceMatrix),et==="instanceColor"&&O.instanceColor&&(B=O.instanceColor));const ct={};ct.attribute=B,B&&B.data&&(ct.data=B.data),_t[et]=ct,X++}c.attributes=_t,c.attributesNum=X,c.index=ht}function C(){const O=c.newAttributes;for(let q=0,rt=O.length;q<rt;q++)O[q]=0}function M(O){x(O,0)}function x(O,q){const rt=c.newAttributes,ht=c.enabledAttributes,_t=c.attributeDivisors;rt[O]=1,ht[O]===0&&(s.enableVertexAttribArray(O),ht[O]=1),_t[O]!==q&&(s.vertexAttribDivisor(O,q),_t[O]=q)}function V(){const O=c.newAttributes,q=c.enabledAttributes;for(let rt=0,ht=q.length;rt<ht;rt++)q[rt]!==O[rt]&&(s.disableVertexAttribArray(rt),q[rt]=0)}function G(O,q,rt,ht,_t,Mt,X){X===!0?s.vertexAttribIPointer(O,q,rt,_t,Mt):s.vertexAttribPointer(O,q,rt,ht,_t,Mt)}function P(O,q,rt,ht){C();const _t=ht.attributes,Mt=rt.getAttributes(),X=q.defaultAttributeValues;for(const st in Mt){const et=Mt[st];if(et.location>=0){let Nt=_t[st];if(Nt===void 0&&(st==="instanceMatrix"&&O.instanceMatrix&&(Nt=O.instanceMatrix),st==="instanceColor"&&O.instanceColor&&(Nt=O.instanceColor)),Nt!==void 0){const B=Nt.normalized,ct=Nt.itemSize,Rt=t.get(Nt);if(Rt===void 0)continue;const Ut=Rt.buffer,at=Rt.type,Tt=Rt.bytesPerElement,Lt=at===s.INT||at===s.UNSIGNED_INT||Nt.gpuType===bp;if(Nt.isInterleavedBufferAttribute){const Ft=Nt.data,Ot=Ft.stride,fe=Nt.offset;if(Ft.isInstancedInterleavedBuffer){for(let ie=0;ie<et.locationSize;ie++)x(et.location+ie,Ft.meshPerAttribute);O.isInstancedMesh!==!0&&ht._maxInstanceCount===void 0&&(ht._maxInstanceCount=Ft.meshPerAttribute*Ft.count)}else for(let ie=0;ie<et.locationSize;ie++)M(et.location+ie);s.bindBuffer(s.ARRAY_BUFFER,Ut);for(let ie=0;ie<et.locationSize;ie++)G(et.location+ie,ct/et.locationSize,at,B,Ot*Tt,(fe+ct/et.locationSize*ie)*Tt,Lt)}else{if(Nt.isInstancedBufferAttribute){for(let Ft=0;Ft<et.locationSize;Ft++)x(et.location+Ft,Nt.meshPerAttribute);O.isInstancedMesh!==!0&&ht._maxInstanceCount===void 0&&(ht._maxInstanceCount=Nt.meshPerAttribute*Nt.count)}else for(let Ft=0;Ft<et.locationSize;Ft++)M(et.location+Ft);s.bindBuffer(s.ARRAY_BUFFER,Ut);for(let Ft=0;Ft<et.locationSize;Ft++)G(et.location+Ft,ct/et.locationSize,at,B,ct*Tt,ct/et.locationSize*Ft*Tt,Lt)}}else if(X!==void 0){const B=X[st];if(B!==void 0)switch(B.length){case 2:s.vertexAttrib2fv(et.location,B);break;case 3:s.vertexAttrib3fv(et.location,B);break;case 4:s.vertexAttrib4fv(et.location,B);break;default:s.vertexAttrib1fv(et.location,B)}}}}V()}function Y(){K();for(const O in r){const q=r[O];for(const rt in q){const ht=q[rt];for(const _t in ht)v(ht[_t].object),delete ht[_t];delete q[rt]}delete r[O]}}function z(O){if(r[O.id]===void 0)return;const q=r[O.id];for(const rt in q){const ht=q[rt];for(const _t in ht)v(ht[_t].object),delete ht[_t];delete q[rt]}delete r[O.id]}function k(O){for(const q in r){const rt=r[q];if(rt[O.id]===void 0)continue;const ht=rt[O.id];for(const _t in ht)v(ht[_t].object),delete ht[_t];delete rt[O.id]}}function K(){F(),d=!0,c!==l&&(c=l,g(c.object))}function F(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:m,reset:K,resetDefaultState:F,dispose:Y,releaseStatesOfGeometry:z,releaseStatesOfProgram:k,initAttributes:C,enableAttribute:M,disableUnusedAttributes:V}}function Qb(s,t,i){let r;function l(g){r=g}function c(g,v){s.drawArrays(r,g,v),i.update(v,r,1)}function d(g,v,y){y!==0&&(s.drawArraysInstanced(r,g,v,y),i.update(v,r,y))}function m(g,v,y){if(y===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,g,0,v,0,y);let b=0;for(let w=0;w<y;w++)b+=v[w];i.update(b,r,1)}function _(g,v,y,E){if(y===0)return;const b=t.get("WEBGL_multi_draw");if(b===null)for(let w=0;w<g.length;w++)d(g[w],v[w],E[w]);else{b.multiDrawArraysInstancedWEBGL(r,g,0,v,0,E,0,y);let w=0;for(let C=0;C<y;C++)w+=v[C]*E[C];i.update(w,r,1)}}this.setMode=l,this.render=c,this.renderInstances=d,this.renderMultiDraw=m,this.renderMultiDrawInstances=_}function Jb(s,t,i,r){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const k=t.get("EXT_texture_filter_anisotropic");l=s.getParameter(k.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(k){return!(k!==na&&r.convert(k)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function m(k){const K=k===Ol&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(k!==ga&&r.convert(k)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&k!==Xa&&!K)}function _(k){if(k==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";k="mediump"}return k==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let g=i.precision!==void 0?i.precision:"highp";const v=_(g);v!==g&&(console.warn("THREE.WebGLRenderer:",g,"not supported, using",v,"instead."),g=v);const y=i.logarithmicDepthBuffer===!0,E=i.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),b=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),w=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=s.getParameter(s.MAX_TEXTURE_SIZE),M=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),x=s.getParameter(s.MAX_VERTEX_ATTRIBS),V=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),G=s.getParameter(s.MAX_VARYING_VECTORS),P=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),Y=w>0,z=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:_,textureFormatReadable:d,textureTypeReadable:m,precision:g,logarithmicDepthBuffer:y,reverseDepthBuffer:E,maxTextures:b,maxVertexTextures:w,maxTextureSize:C,maxCubemapSize:M,maxAttributes:x,maxVertexUniforms:V,maxVaryings:G,maxFragmentUniforms:P,vertexTextures:Y,maxSamples:z}}function $b(s){const t=this;let i=null,r=0,l=!1,c=!1;const d=new br,m=new be,_={value:null,needsUpdate:!1};this.uniform=_,this.numPlanes=0,this.numIntersection=0,this.init=function(y,E){const b=y.length!==0||E||r!==0||l;return l=E,r=y.length,b},this.beginShadows=function(){c=!0,v(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(y,E){i=v(y,E,0)},this.setState=function(y,E,b){const w=y.clippingPlanes,C=y.clipIntersection,M=y.clipShadows,x=s.get(y);if(!l||w===null||w.length===0||c&&!M)c?v(null):g();else{const V=c?0:r,G=V*4;let P=x.clippingState||null;_.value=P,P=v(w,E,G,b);for(let Y=0;Y!==G;++Y)P[Y]=i[Y];x.clippingState=P,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=V}};function g(){_.value!==i&&(_.value=i,_.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function v(y,E,b,w){const C=y!==null?y.length:0;let M=null;if(C!==0){if(M=_.value,w!==!0||M===null){const x=b+C*4,V=E.matrixWorldInverse;m.getNormalMatrix(V),(M===null||M.length<x)&&(M=new Float32Array(x));for(let G=0,P=b;G!==C;++G,P+=4)d.copy(y[G]).applyMatrix4(V,m),d.normal.toArray(M,P),M[P+3]=d.constant}_.value=M,_.needsUpdate=!0}return t.numPlanes=C,t.numIntersection=0,M}}function tT(s){let t=new WeakMap;function i(d,m){return m===Vd?d.mapping=_o:m===kd&&(d.mapping=vo),d}function r(d){if(d&&d.isTexture){const m=d.mapping;if(m===Vd||m===kd)if(t.has(d)){const _=t.get(d).texture;return i(_,d.mapping)}else{const _=d.image;if(_&&_.height>0){const g=new Zx(_.height);return g.fromEquirectangularTexture(s,d),t.set(d,g),d.addEventListener("dispose",l),i(g.texture,d.mapping)}else return null}}return d}function l(d){const m=d.target;m.removeEventListener("dispose",l);const _=t.get(m);_!==void 0&&(t.delete(m),_.dispose())}function c(){t=new WeakMap}return{get:r,dispose:c}}const fo=4,Bv=[.125,.215,.35,.446,.526,.582],cs=20,bd=new k0,Iv=new ze;let Td=null,Ad=0,Rd=0,wd=!1;const os=(1+Math.sqrt(5))/2,co=1/os,zv=[new ot(-os,co,0),new ot(os,co,0),new ot(-co,0,os),new ot(co,0,os),new ot(0,os,-co),new ot(0,os,co),new ot(-1,1,-1),new ot(1,1,-1),new ot(-1,1,1),new ot(1,1,1)],eT=new ot;class Hv{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,r=.1,l=100,c={}){const{size:d=256,position:m=eT}=c;Td=this._renderer.getRenderTarget(),Ad=this._renderer.getActiveCubeFace(),Rd=this._renderer.getActiveMipmapLevel(),wd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const _=this._allocateTargets();return _.depthBuffer=!0,this._sceneToCubeUV(t,r,l,_,m),i>0&&this._blur(_,0,0,i),this._applyPMREM(_),this._cleanup(_),_}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=kv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Vv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Td,Ad,Rd),this._renderer.xr.enabled=wd,t.scissorTest=!1,pu(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===_o||t.mapping===vo?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Td=this._renderer.getRenderTarget(),Ad=this._renderer.getActiveCubeFace(),Rd=this._renderer.getActiveMipmapLevel(),wd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:pa,minFilter:pa,generateMipmaps:!1,type:Ol,format:na,colorSpace:yo,depthBuffer:!1},l=Gv(t,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Gv(t,i,r);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=nT(c)),this._blurMaterial=iT(c,t,i)}return l}_compileMaterial(t){const i=new ia(this._lodPlanes[0],t);this._renderer.compile(i,bd)}_sceneToCubeUV(t,i,r,l,c){const _=new Wi(90,1,i,r),g=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],y=this._renderer,E=y.autoClear,b=y.toneMapping;y.getClearColor(Iv),y.toneMapping=Rr,y.autoClear=!1;const w=new F0({name:"PMREM.Background",side:_i,depthWrite:!1,depthTest:!1}),C=new ia(new Fl,w);let M=!1;const x=t.background;x?x.isColor&&(w.color.copy(x),t.background=null,M=!0):(w.color.copy(Iv),M=!0);for(let V=0;V<6;V++){const G=V%3;G===0?(_.up.set(0,g[V],0),_.position.set(c.x,c.y,c.z),_.lookAt(c.x+v[V],c.y,c.z)):G===1?(_.up.set(0,0,g[V]),_.position.set(c.x,c.y,c.z),_.lookAt(c.x,c.y+v[V],c.z)):(_.up.set(0,g[V],0),_.position.set(c.x,c.y,c.z),_.lookAt(c.x,c.y,c.z+v[V]));const P=this._cubeSize;pu(l,G*P,V>2?P:0,P,P),y.setRenderTarget(l),M&&y.render(C,_),y.render(t,_)}C.geometry.dispose(),C.material.dispose(),y.toneMapping=b,y.autoClear=E,t.background=x}_textureToCubeUV(t,i){const r=this._renderer,l=t.mapping===_o||t.mapping===vo;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=kv()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Vv());const c=l?this._cubemapMaterial:this._equirectMaterial,d=new ia(this._lodPlanes[0],c),m=c.uniforms;m.envMap.value=t;const _=this._cubeSize;pu(i,0,0,3*_,2*_),r.setRenderTarget(i),r.render(d,bd)}_applyPMREM(t){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const d=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),m=zv[(l-c-1)%zv.length];this._blur(t,c-1,c,d,m)}i.autoClear=r}_blur(t,i,r,l,c){const d=this._pingPongRenderTarget;this._halfBlur(t,d,i,r,l,"latitudinal",c),this._halfBlur(d,t,r,r,l,"longitudinal",c)}_halfBlur(t,i,r,l,c,d,m){const _=this._renderer,g=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,y=new ia(this._lodPlanes[l],g),E=g.uniforms,b=this._sizeLods[r]-1,w=isFinite(c)?Math.PI/(2*b):2*Math.PI/(2*cs-1),C=c/w,M=isFinite(c)?1+Math.floor(v*C):cs;M>cs&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${cs}`);const x=[];let V=0;for(let k=0;k<cs;++k){const K=k/C,F=Math.exp(-K*K/2);x.push(F),k===0?V+=F:k<M&&(V+=2*F)}for(let k=0;k<x.length;k++)x[k]=x[k]/V;E.envMap.value=t.texture,E.samples.value=M,E.weights.value=x,E.latitudinal.value=d==="latitudinal",m&&(E.poleAxis.value=m);const{_lodMax:G}=this;E.dTheta.value=w,E.mipInt.value=G-r;const P=this._sizeLods[l],Y=3*P*(l>G-fo?l-G+fo:0),z=4*(this._cubeSize-P);pu(i,Y,z,3*P,2*P),_.setRenderTarget(i),_.render(y,bd)}}function nT(s){const t=[],i=[],r=[];let l=s;const c=s-fo+1+Bv.length;for(let d=0;d<c;d++){const m=Math.pow(2,l);i.push(m);let _=1/m;d>s-fo?_=Bv[d-s+fo-1]:d===0&&(_=0),r.push(_);const g=1/(m-2),v=-g,y=1+g,E=[v,v,y,v,y,y,v,v,y,y,v,y],b=6,w=6,C=3,M=2,x=1,V=new Float32Array(C*w*b),G=new Float32Array(M*w*b),P=new Float32Array(x*w*b);for(let z=0;z<b;z++){const k=z%3*2/3-1,K=z>2?0:-1,F=[k,K,0,k+2/3,K,0,k+2/3,K+1,0,k,K,0,k+2/3,K+1,0,k,K+1,0];V.set(F,C*w*z),G.set(E,M*w*z);const O=[z,z,z,z,z,z];P.set(O,x*w*z)}const Y=new ra;Y.setAttribute("position",new ma(V,C)),Y.setAttribute("uv",new ma(G,M)),Y.setAttribute("faceIndex",new ma(P,x)),t.push(Y),l>fo&&l--}return{lodPlanes:t,sizeLods:i,sigmas:r}}function Gv(s,t,i){const r=new ds(s,t,i);return r.texture.mapping=Nu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function pu(s,t,i,r,l){s.viewport.set(t,i,r,l),s.scissor.set(t,i,r,l)}function iT(s,t,i){const r=new Float32Array(cs),l=new ot(0,1,0);return new Cr({name:"SphericalGaussianBlur",defines:{n:cs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Np(),fragmentShader:`

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
		`,blending:Ar,depthTest:!1,depthWrite:!1})}function Vv(){return new Cr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Np(),fragmentShader:`

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
		`,blending:Ar,depthTest:!1,depthWrite:!1})}function kv(){return new Cr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Np(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ar,depthTest:!1,depthWrite:!1})}function Np(){return`

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
	`}function aT(s){let t=new WeakMap,i=null;function r(m){if(m&&m.isTexture){const _=m.mapping,g=_===Vd||_===kd,v=_===_o||_===vo;if(g||v){let y=t.get(m);const E=y!==void 0?y.texture.pmremVersion:0;if(m.isRenderTargetTexture&&m.pmremVersion!==E)return i===null&&(i=new Hv(s)),y=g?i.fromEquirectangular(m,y):i.fromCubemap(m,y),y.texture.pmremVersion=m.pmremVersion,t.set(m,y),y.texture;if(y!==void 0)return y.texture;{const b=m.image;return g&&b&&b.height>0||v&&b&&l(b)?(i===null&&(i=new Hv(s)),y=g?i.fromEquirectangular(m):i.fromCubemap(m),y.texture.pmremVersion=m.pmremVersion,t.set(m,y),m.addEventListener("dispose",c),y.texture):null}}}return m}function l(m){let _=0;const g=6;for(let v=0;v<g;v++)m[v]!==void 0&&_++;return _===g}function c(m){const _=m.target;_.removeEventListener("dispose",c);const g=t.get(_);g!==void 0&&(t.delete(_),g.dispose())}function d(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function rT(s){const t={};function i(r){if(t[r]!==void 0)return t[r];let l;switch(r){case"WEBGL_depth_texture":l=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=s.getExtension(r)}return t[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&bu("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function sT(s,t,i,r){const l={},c=new WeakMap;function d(y){const E=y.target;E.index!==null&&t.remove(E.index);for(const w in E.attributes)t.remove(E.attributes[w]);E.removeEventListener("dispose",d),delete l[E.id];const b=c.get(E);b&&(t.remove(b),c.delete(E)),r.releaseStatesOfGeometry(E),E.isInstancedBufferGeometry===!0&&delete E._maxInstanceCount,i.memory.geometries--}function m(y,E){return l[E.id]===!0||(E.addEventListener("dispose",d),l[E.id]=!0,i.memory.geometries++),E}function _(y){const E=y.attributes;for(const b in E)t.update(E[b],s.ARRAY_BUFFER)}function g(y){const E=[],b=y.index,w=y.attributes.position;let C=0;if(b!==null){const V=b.array;C=b.version;for(let G=0,P=V.length;G<P;G+=3){const Y=V[G+0],z=V[G+1],k=V[G+2];E.push(Y,z,z,k,k,Y)}}else if(w!==void 0){const V=w.array;C=w.version;for(let G=0,P=V.length/3-1;G<P;G+=3){const Y=G+0,z=G+1,k=G+2;E.push(Y,z,z,k,k,Y)}}else return;const M=new(L0(E)?I0:B0)(E,1);M.version=C;const x=c.get(y);x&&t.remove(x),c.set(y,M)}function v(y){const E=c.get(y);if(E){const b=y.index;b!==null&&E.version<b.version&&g(y)}else g(y);return c.get(y)}return{get:m,update:_,getWireframeAttribute:v}}function oT(s,t,i){let r;function l(E){r=E}let c,d;function m(E){c=E.type,d=E.bytesPerElement}function _(E,b){s.drawElements(r,b,c,E*d),i.update(b,r,1)}function g(E,b,w){w!==0&&(s.drawElementsInstanced(r,b,c,E*d,w),i.update(b,r,w))}function v(E,b,w){if(w===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,b,0,c,E,0,w);let M=0;for(let x=0;x<w;x++)M+=b[x];i.update(M,r,1)}function y(E,b,w,C){if(w===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let x=0;x<E.length;x++)g(E[x]/d,b[x],C[x]);else{M.multiDrawElementsInstancedWEBGL(r,b,0,c,E,0,C,0,w);let x=0;for(let V=0;V<w;V++)x+=b[V]*C[V];i.update(x,r,1)}}this.setMode=l,this.setIndex=m,this.render=_,this.renderInstances=g,this.renderMultiDraw=v,this.renderMultiDrawInstances=y}function lT(s){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,d,m){switch(i.calls++,d){case s.TRIANGLES:i.triangles+=m*(c/3);break;case s.LINES:i.lines+=m*(c/2);break;case s.LINE_STRIP:i.lines+=m*(c-1);break;case s.LINE_LOOP:i.lines+=m*c;break;case s.POINTS:i.points+=m*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:r}}function cT(s,t,i){const r=new WeakMap,l=new gn;function c(d,m,_){const g=d.morphTargetInfluences,v=m.morphAttributes.position||m.morphAttributes.normal||m.morphAttributes.color,y=v!==void 0?v.length:0;let E=r.get(m);if(E===void 0||E.count!==y){let F=function(){k.dispose(),r.delete(m),m.removeEventListener("dispose",F)};E!==void 0&&E.texture.dispose();const b=m.morphAttributes.position!==void 0,w=m.morphAttributes.normal!==void 0,C=m.morphAttributes.color!==void 0,M=m.morphAttributes.position||[],x=m.morphAttributes.normal||[],V=m.morphAttributes.color||[];let G=0;b===!0&&(G=1),w===!0&&(G=2),C===!0&&(G=3);let P=m.attributes.position.count*G,Y=1;P>t.maxTextureSize&&(Y=Math.ceil(P/t.maxTextureSize),P=t.maxTextureSize);const z=new Float32Array(P*Y*4*y),k=new N0(z,P,Y,y);k.type=Xa,k.needsUpdate=!0;const K=G*4;for(let O=0;O<y;O++){const q=M[O],rt=x[O],ht=V[O],_t=P*Y*4*O;for(let Mt=0;Mt<q.count;Mt++){const X=Mt*K;b===!0&&(l.fromBufferAttribute(q,Mt),z[_t+X+0]=l.x,z[_t+X+1]=l.y,z[_t+X+2]=l.z,z[_t+X+3]=0),w===!0&&(l.fromBufferAttribute(rt,Mt),z[_t+X+4]=l.x,z[_t+X+5]=l.y,z[_t+X+6]=l.z,z[_t+X+7]=0),C===!0&&(l.fromBufferAttribute(ht,Mt),z[_t+X+8]=l.x,z[_t+X+9]=l.y,z[_t+X+10]=l.z,z[_t+X+11]=ht.itemSize===4?l.w:1)}}E={count:y,texture:k,size:new Te(P,Y)},r.set(m,E),m.addEventListener("dispose",F)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)_.getUniforms().setValue(s,"morphTexture",d.morphTexture,i);else{let b=0;for(let C=0;C<g.length;C++)b+=g[C];const w=m.morphTargetsRelative?1:1-b;_.getUniforms().setValue(s,"morphTargetBaseInfluence",w),_.getUniforms().setValue(s,"morphTargetInfluences",g)}_.getUniforms().setValue(s,"morphTargetsTexture",E.texture,i),_.getUniforms().setValue(s,"morphTargetsTextureSize",E.size)}return{update:c}}function uT(s,t,i,r){let l=new WeakMap;function c(_){const g=r.render.frame,v=_.geometry,y=t.get(_,v);if(l.get(y)!==g&&(t.update(y),l.set(y,g)),_.isInstancedMesh&&(_.hasEventListener("dispose",m)===!1&&_.addEventListener("dispose",m),l.get(_)!==g&&(i.update(_.instanceMatrix,s.ARRAY_BUFFER),_.instanceColor!==null&&i.update(_.instanceColor,s.ARRAY_BUFFER),l.set(_,g))),_.isSkinnedMesh){const E=_.skeleton;l.get(E)!==g&&(E.update(),l.set(E,g))}return y}function d(){l=new WeakMap}function m(_){const g=_.target;g.removeEventListener("dispose",m),i.remove(g.instanceMatrix),g.instanceColor!==null&&i.remove(g.instanceColor)}return{update:c,dispose:d}}const W0=new vi,Xv=new V0(1,1),q0=new N0,Y0=new Lx,j0=new G0,Wv=[],qv=[],Yv=new Float32Array(16),jv=new Float32Array(9),Zv=new Float32Array(4);function Mo(s,t,i){const r=s[0];if(r<=0||r>0)return s;const l=t*i;let c=Wv[l];if(c===void 0&&(c=new Float32Array(l),Wv[l]=c),t!==0){r.toArray(c,0);for(let d=1,m=0;d!==t;++d)m+=i,s[d].toArray(c,m)}return c}function On(s,t){if(s.length!==t.length)return!1;for(let i=0,r=s.length;i<r;i++)if(s[i]!==t[i])return!1;return!0}function Pn(s,t){for(let i=0,r=t.length;i<r;i++)s[i]=t[i]}function Fu(s,t){let i=qv[t];i===void 0&&(i=new Int32Array(t),qv[t]=i);for(let r=0;r!==t;++r)i[r]=s.allocateTextureUnit();return i}function fT(s,t){const i=this.cache;i[0]!==t&&(s.uniform1f(this.addr,t),i[0]=t)}function hT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(On(i,t))return;s.uniform2fv(this.addr,t),Pn(i,t)}}function dT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(On(i,t))return;s.uniform3fv(this.addr,t),Pn(i,t)}}function pT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(On(i,t))return;s.uniform4fv(this.addr,t),Pn(i,t)}}function mT(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(On(i,t))return;s.uniformMatrix2fv(this.addr,!1,t),Pn(i,t)}else{if(On(i,r))return;Zv.set(r),s.uniformMatrix2fv(this.addr,!1,Zv),Pn(i,r)}}function gT(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(On(i,t))return;s.uniformMatrix3fv(this.addr,!1,t),Pn(i,t)}else{if(On(i,r))return;jv.set(r),s.uniformMatrix3fv(this.addr,!1,jv),Pn(i,r)}}function _T(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(On(i,t))return;s.uniformMatrix4fv(this.addr,!1,t),Pn(i,t)}else{if(On(i,r))return;Yv.set(r),s.uniformMatrix4fv(this.addr,!1,Yv),Pn(i,r)}}function vT(s,t){const i=this.cache;i[0]!==t&&(s.uniform1i(this.addr,t),i[0]=t)}function yT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(On(i,t))return;s.uniform2iv(this.addr,t),Pn(i,t)}}function ST(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(On(i,t))return;s.uniform3iv(this.addr,t),Pn(i,t)}}function xT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(On(i,t))return;s.uniform4iv(this.addr,t),Pn(i,t)}}function ET(s,t){const i=this.cache;i[0]!==t&&(s.uniform1ui(this.addr,t),i[0]=t)}function MT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(On(i,t))return;s.uniform2uiv(this.addr,t),Pn(i,t)}}function bT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(On(i,t))return;s.uniform3uiv(this.addr,t),Pn(i,t)}}function TT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(On(i,t))return;s.uniform4uiv(this.addr,t),Pn(i,t)}}function AT(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let c;this.type===s.SAMPLER_2D_SHADOW?(Xv.compareFunction=U0,c=Xv):c=W0,i.setTexture2D(t||c,l)}function RT(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(t||Y0,l)}function wT(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(t||j0,l)}function CT(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(t||q0,l)}function DT(s){switch(s){case 5126:return fT;case 35664:return hT;case 35665:return dT;case 35666:return pT;case 35674:return mT;case 35675:return gT;case 35676:return _T;case 5124:case 35670:return vT;case 35667:case 35671:return yT;case 35668:case 35672:return ST;case 35669:case 35673:return xT;case 5125:return ET;case 36294:return MT;case 36295:return bT;case 36296:return TT;case 35678:case 36198:case 36298:case 36306:case 35682:return AT;case 35679:case 36299:case 36307:return RT;case 35680:case 36300:case 36308:case 36293:return wT;case 36289:case 36303:case 36311:case 36292:return CT}}function UT(s,t){s.uniform1fv(this.addr,t)}function LT(s,t){const i=Mo(t,this.size,2);s.uniform2fv(this.addr,i)}function NT(s,t){const i=Mo(t,this.size,3);s.uniform3fv(this.addr,i)}function OT(s,t){const i=Mo(t,this.size,4);s.uniform4fv(this.addr,i)}function PT(s,t){const i=Mo(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function FT(s,t){const i=Mo(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function BT(s,t){const i=Mo(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function IT(s,t){s.uniform1iv(this.addr,t)}function zT(s,t){s.uniform2iv(this.addr,t)}function HT(s,t){s.uniform3iv(this.addr,t)}function GT(s,t){s.uniform4iv(this.addr,t)}function VT(s,t){s.uniform1uiv(this.addr,t)}function kT(s,t){s.uniform2uiv(this.addr,t)}function XT(s,t){s.uniform3uiv(this.addr,t)}function WT(s,t){s.uniform4uiv(this.addr,t)}function qT(s,t,i){const r=this.cache,l=t.length,c=Fu(i,l);On(r,c)||(s.uniform1iv(this.addr,c),Pn(r,c));for(let d=0;d!==l;++d)i.setTexture2D(t[d]||W0,c[d])}function YT(s,t,i){const r=this.cache,l=t.length,c=Fu(i,l);On(r,c)||(s.uniform1iv(this.addr,c),Pn(r,c));for(let d=0;d!==l;++d)i.setTexture3D(t[d]||Y0,c[d])}function jT(s,t,i){const r=this.cache,l=t.length,c=Fu(i,l);On(r,c)||(s.uniform1iv(this.addr,c),Pn(r,c));for(let d=0;d!==l;++d)i.setTextureCube(t[d]||j0,c[d])}function ZT(s,t,i){const r=this.cache,l=t.length,c=Fu(i,l);On(r,c)||(s.uniform1iv(this.addr,c),Pn(r,c));for(let d=0;d!==l;++d)i.setTexture2DArray(t[d]||q0,c[d])}function KT(s){switch(s){case 5126:return UT;case 35664:return LT;case 35665:return NT;case 35666:return OT;case 35674:return PT;case 35675:return FT;case 35676:return BT;case 5124:case 35670:return IT;case 35667:case 35671:return zT;case 35668:case 35672:return HT;case 35669:case 35673:return GT;case 5125:return VT;case 36294:return kT;case 36295:return XT;case 36296:return WT;case 35678:case 36198:case 36298:case 36306:case 35682:return qT;case 35679:case 36299:case 36307:return YT;case 35680:case 36300:case 36308:case 36293:return jT;case 36289:case 36303:case 36311:case 36292:return ZT}}class QT{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.setValue=DT(i.type)}}class JT{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=KT(i.type)}}class $T{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,r){const l=this.seq;for(let c=0,d=l.length;c!==d;++c){const m=l[c];m.setValue(t,i[m.id],r)}}}const Cd=/(\w+)(\])?(\[|\.)?/g;function Kv(s,t){s.seq.push(t),s.map[t.id]=t}function t1(s,t,i){const r=s.name,l=r.length;for(Cd.lastIndex=0;;){const c=Cd.exec(r),d=Cd.lastIndex;let m=c[1];const _=c[2]==="]",g=c[3];if(_&&(m=m|0),g===void 0||g==="["&&d+2===l){Kv(i,g===void 0?new QT(m,s,t):new JT(m,s,t));break}else{let y=i.map[m];y===void 0&&(y=new $T(m),Kv(i,y)),i=y}}}class Au{constructor(t,i){this.seq=[],this.map={};const r=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const c=t.getActiveUniform(i,l),d=t.getUniformLocation(i,c.name);t1(c,d,this)}}setValue(t,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(t,r,l)}setOptional(t,i,r){const l=i[r];l!==void 0&&this.setValue(t,r,l)}static upload(t,i,r,l){for(let c=0,d=i.length;c!==d;++c){const m=i[c],_=r[m.id];_.needsUpdate!==!1&&m.setValue(t,_.value,l)}}static seqWithValue(t,i){const r=[];for(let l=0,c=t.length;l!==c;++l){const d=t[l];d.id in i&&r.push(d)}return r}}function Qv(s,t,i){const r=s.createShader(t);return s.shaderSource(r,i),s.compileShader(r),r}const e1=37297;let n1=0;function i1(s,t){const i=s.split(`
`),r=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let d=l;d<c;d++){const m=d+1;r.push(`${m===t?">":" "} ${m}: ${i[d]}`)}return r.join(`
`)}const Jv=new be;function a1(s){Ve._getMatrix(Jv,Ve.workingColorSpace,s);const t=`mat3( ${Jv.elements.map(i=>i.toFixed(4))} )`;switch(Ve.getTransfer(s)){case Ru:return[t,"LinearTransferOETF"];case tn:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function $v(s,t,i){const r=s.getShaderParameter(t,s.COMPILE_STATUS),l=s.getShaderInfoLog(t).trim();if(r&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const d=parseInt(c[1]);return i.toUpperCase()+`

`+l+`

`+i1(s.getShaderSource(t),d)}else return l}function r1(s,t){const i=a1(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function s1(s,t){let i;switch(t){case ix:i="Linear";break;case ax:i="Reinhard";break;case rx:i="Cineon";break;case sx:i="ACESFilmic";break;case lx:i="AgX";break;case cx:i="Neutral";break;case ox:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const mu=new ot;function o1(){Ve.getLuminanceCoefficients(mu);const s=mu.x.toFixed(4),t=mu.y.toFixed(4),i=mu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function l1(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Cl).join(`
`)}function c1(s){const t=[];for(const i in s){const r=s[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function u1(s,t){const i={},r=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=s.getActiveAttrib(t,l),d=c.name;let m=1;c.type===s.FLOAT_MAT2&&(m=2),c.type===s.FLOAT_MAT3&&(m=3),c.type===s.FLOAT_MAT4&&(m=4),i[d]={type:c.type,location:s.getAttribLocation(t,d),locationSize:m}}return i}function Cl(s){return s!==""}function t0(s,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function e0(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const f1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sp(s){return s.replace(f1,d1)}const h1=new Map;function d1(s,t){let i=we[t];if(i===void 0){const r=h1.get(t);if(r!==void 0)i=we[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return Sp(i)}const p1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function n0(s){return s.replace(p1,m1)}function m1(s,t,i,r){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function i0(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function g1(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===S0?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===FS?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Va&&(t="SHADOWMAP_TYPE_VSM"),t}function _1(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case _o:case vo:t="ENVMAP_TYPE_CUBE";break;case Nu:t="ENVMAP_TYPE_CUBE_UV";break}return t}function v1(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case vo:t="ENVMAP_MODE_REFRACTION";break}return t}function y1(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Mp:t="ENVMAP_BLENDING_MULTIPLY";break;case ex:t="ENVMAP_BLENDING_MIX";break;case nx:t="ENVMAP_BLENDING_ADD";break}return t}function S1(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),7*16)),texelHeight:r,maxMip:i}}function x1(s,t,i,r){const l=s.getContext(),c=i.defines;let d=i.vertexShader,m=i.fragmentShader;const _=g1(i),g=_1(i),v=v1(i),y=y1(i),E=S1(i),b=l1(i),w=c1(c),C=l.createProgram();let M,x,V=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,w].filter(Cl).join(`
`),M.length>0&&(M+=`
`),x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,w].filter(Cl).join(`
`),x.length>0&&(x+=`
`)):(M=[i0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,w,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+_:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Cl).join(`
`),x=[i0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,w,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.envMap?"#define "+v:"",i.envMap?"#define "+y:"",E?"#define CUBEUV_TEXEL_WIDTH "+E.texelWidth:"",E?"#define CUBEUV_TEXEL_HEIGHT "+E.texelHeight:"",E?"#define CUBEUV_MAX_MIP "+E.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+_:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Rr?"#define TONE_MAPPING":"",i.toneMapping!==Rr?we.tonemapping_pars_fragment:"",i.toneMapping!==Rr?s1("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",we.colorspace_pars_fragment,r1("linearToOutputTexel",i.outputColorSpace),o1(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Cl).join(`
`)),d=Sp(d),d=t0(d,i),d=e0(d,i),m=Sp(m),m=t0(m,i),m=e0(m,i),d=n0(d),m=n0(m),i.isRawShaderMaterial!==!0&&(V=`#version 300 es
`,M=[b,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,x=["#define varying in",i.glslVersion===sv?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===sv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const G=V+M+d,P=V+x+m,Y=Qv(l,l.VERTEX_SHADER,G),z=Qv(l,l.FRAGMENT_SHADER,P);l.attachShader(C,Y),l.attachShader(C,z),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function k(q){if(s.debug.checkShaderErrors){const rt=l.getProgramInfoLog(C).trim(),ht=l.getShaderInfoLog(Y).trim(),_t=l.getShaderInfoLog(z).trim();let Mt=!0,X=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(Mt=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,C,Y,z);else{const st=$v(l,Y,"vertex"),et=$v(l,z,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+q.name+`
Material Type: `+q.type+`

Program Info Log: `+rt+`
`+st+`
`+et)}else rt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",rt):(ht===""||_t==="")&&(X=!1);X&&(q.diagnostics={runnable:Mt,programLog:rt,vertexShader:{log:ht,prefix:M},fragmentShader:{log:_t,prefix:x}})}l.deleteShader(Y),l.deleteShader(z),K=new Au(l,C),F=u1(l,C)}let K;this.getUniforms=function(){return K===void 0&&k(this),K};let F;this.getAttributes=function(){return F===void 0&&k(this),F};let O=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=l.getProgramParameter(C,e1)),O},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=n1++,this.cacheKey=t,this.usedTimes=1,this.program=C,this.vertexShader=Y,this.fragmentShader=z,this}let E1=0;class M1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,r=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(r),d=this._getShaderCacheForMaterial(t);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(c)===!1&&(d.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let r=i.get(t);return r===void 0&&(r=new Set,i.set(t,r)),r}_getShaderStage(t){const i=this.shaderCache;let r=i.get(t);return r===void 0&&(r=new b1(t),i.set(t,r)),r}}class b1{constructor(t){this.id=E1++,this.code=t,this.usedTimes=0}}function T1(s,t,i,r,l,c,d){const m=new O0,_=new M1,g=new Set,v=[],y=l.logarithmicDepthBuffer,E=l.vertexTextures;let b=l.precision;const w={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(F){return g.add(F),F===0?"uv":`uv${F}`}function M(F,O,q,rt,ht){const _t=rt.fog,Mt=ht.geometry,X=F.isMeshStandardMaterial?rt.environment:null,st=(F.isMeshStandardMaterial?i:t).get(F.envMap||X),et=st&&st.mapping===Nu?st.image.height:null,Nt=w[F.type];F.precision!==null&&(b=l.getMaxPrecision(F.precision),b!==F.precision&&console.warn("THREE.WebGLProgram.getParameters:",F.precision,"not supported, using",b,"instead."));const B=Mt.morphAttributes.position||Mt.morphAttributes.normal||Mt.morphAttributes.color,ct=B!==void 0?B.length:0;let Rt=0;Mt.morphAttributes.position!==void 0&&(Rt=1),Mt.morphAttributes.normal!==void 0&&(Rt=2),Mt.morphAttributes.color!==void 0&&(Rt=3);let Ut,at,Tt,Lt;if(Nt){const Se=da[Nt];Ut=Se.vertexShader,at=Se.fragmentShader}else Ut=F.vertexShader,at=F.fragmentShader,_.update(F),Tt=_.getVertexShaderID(F),Lt=_.getFragmentShaderID(F);const Ft=s.getRenderTarget(),Ot=s.state.buffers.depth.getReversed(),fe=ht.isInstancedMesh===!0,ie=ht.isBatchedMesh===!0,ke=!!F.map,qe=!!F.matcap,Ae=!!st,j=!!F.aoMap,Xn=!!F.lightMap,De=!!F.bumpMap,ve=!!F.normalMap,ae=!!F.displacementMap,We=!!F.emissiveMap,ee=!!F.metalnessMap,I=!!F.roughnessMap,U=F.anisotropy>0,ft=F.clearcoat>0,bt=F.dispersion>0,St=F.iridescence>0,xt=F.sheen>0,Xt=F.transmission>0,It=U&&!!F.anisotropyMap,Qt=ft&&!!F.clearcoatMap,se=ft&&!!F.clearcoatNormalMap,Pt=ft&&!!F.clearcoatRoughnessMap,jt=St&&!!F.iridescenceMap,oe=St&&!!F.iridescenceThicknessMap,ue=xt&&!!F.sheenColorMap,qt=xt&&!!F.sheenRoughnessMap,ye=!!F.specularMap,me=!!F.specularColorMap,Wt=!!F.specularIntensityMap,$=Xt&&!!F.transmissionMap,Gt=Xt&&!!F.thicknessMap,vt=!!F.gradientMap,wt=!!F.alphaMap,Yt=F.alphaTest>0,Vt=!!F.alphaHash,ge=!!F.extensions;let R=Rr;F.toneMapped&&(Ft===null||Ft.isXRRenderTarget===!0)&&(R=s.toneMapping);const cn={shaderID:Nt,shaderType:F.type,shaderName:F.name,vertexShader:Ut,fragmentShader:at,defines:F.defines,customVertexShaderID:Tt,customFragmentShaderID:Lt,isRawShaderMaterial:F.isRawShaderMaterial===!0,glslVersion:F.glslVersion,precision:b,batching:ie,batchingColor:ie&&ht._colorsTexture!==null,instancing:fe,instancingColor:fe&&ht.instanceColor!==null,instancingMorph:fe&&ht.morphTexture!==null,supportsVertexTextures:E,outputColorSpace:Ft===null?s.outputColorSpace:Ft.isXRRenderTarget===!0?Ft.texture.colorSpace:yo,alphaToCoverage:!!F.alphaToCoverage,map:ke,matcap:qe,envMap:Ae,envMapMode:Ae&&st.mapping,envMapCubeUVHeight:et,aoMap:j,lightMap:Xn,bumpMap:De,normalMap:ve,displacementMap:E&&ae,emissiveMap:We,normalMapObjectSpace:ve&&F.normalMapType===dx,normalMapTangentSpace:ve&&F.normalMapType===D0,metalnessMap:ee,roughnessMap:I,anisotropy:U,anisotropyMap:It,clearcoat:ft,clearcoatMap:Qt,clearcoatNormalMap:se,clearcoatRoughnessMap:Pt,dispersion:bt,iridescence:St,iridescenceMap:jt,iridescenceThicknessMap:oe,sheen:xt,sheenColorMap:ue,sheenRoughnessMap:qt,specularMap:ye,specularColorMap:me,specularIntensityMap:Wt,transmission:Xt,transmissionMap:$,thicknessMap:Gt,gradientMap:vt,opaque:F.transparent===!1&&F.blending===po&&F.alphaToCoverage===!1,alphaMap:wt,alphaTest:Yt,alphaHash:Vt,combine:F.combine,mapUv:ke&&C(F.map.channel),aoMapUv:j&&C(F.aoMap.channel),lightMapUv:Xn&&C(F.lightMap.channel),bumpMapUv:De&&C(F.bumpMap.channel),normalMapUv:ve&&C(F.normalMap.channel),displacementMapUv:ae&&C(F.displacementMap.channel),emissiveMapUv:We&&C(F.emissiveMap.channel),metalnessMapUv:ee&&C(F.metalnessMap.channel),roughnessMapUv:I&&C(F.roughnessMap.channel),anisotropyMapUv:It&&C(F.anisotropyMap.channel),clearcoatMapUv:Qt&&C(F.clearcoatMap.channel),clearcoatNormalMapUv:se&&C(F.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Pt&&C(F.clearcoatRoughnessMap.channel),iridescenceMapUv:jt&&C(F.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&C(F.iridescenceThicknessMap.channel),sheenColorMapUv:ue&&C(F.sheenColorMap.channel),sheenRoughnessMapUv:qt&&C(F.sheenRoughnessMap.channel),specularMapUv:ye&&C(F.specularMap.channel),specularColorMapUv:me&&C(F.specularColorMap.channel),specularIntensityMapUv:Wt&&C(F.specularIntensityMap.channel),transmissionMapUv:$&&C(F.transmissionMap.channel),thicknessMapUv:Gt&&C(F.thicknessMap.channel),alphaMapUv:wt&&C(F.alphaMap.channel),vertexTangents:!!Mt.attributes.tangent&&(ve||U),vertexColors:F.vertexColors,vertexAlphas:F.vertexColors===!0&&!!Mt.attributes.color&&Mt.attributes.color.itemSize===4,pointsUvs:ht.isPoints===!0&&!!Mt.attributes.uv&&(ke||wt),fog:!!_t,useFog:F.fog===!0,fogExp2:!!_t&&_t.isFogExp2,flatShading:F.flatShading===!0,sizeAttenuation:F.sizeAttenuation===!0,logarithmicDepthBuffer:y,reverseDepthBuffer:Ot,skinning:ht.isSkinnedMesh===!0,morphTargets:Mt.morphAttributes.position!==void 0,morphNormals:Mt.morphAttributes.normal!==void 0,morphColors:Mt.morphAttributes.color!==void 0,morphTargetsCount:ct,morphTextureStride:Rt,numDirLights:O.directional.length,numPointLights:O.point.length,numSpotLights:O.spot.length,numSpotLightMaps:O.spotLightMap.length,numRectAreaLights:O.rectArea.length,numHemiLights:O.hemi.length,numDirLightShadows:O.directionalShadowMap.length,numPointLightShadows:O.pointShadowMap.length,numSpotLightShadows:O.spotShadowMap.length,numSpotLightShadowsWithMaps:O.numSpotLightShadowsWithMaps,numLightProbes:O.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:F.dithering,shadowMapEnabled:s.shadowMap.enabled&&q.length>0,shadowMapType:s.shadowMap.type,toneMapping:R,decodeVideoTexture:ke&&F.map.isVideoTexture===!0&&Ve.getTransfer(F.map.colorSpace)===tn,decodeVideoTextureEmissive:We&&F.emissiveMap.isVideoTexture===!0&&Ve.getTransfer(F.emissiveMap.colorSpace)===tn,premultipliedAlpha:F.premultipliedAlpha,doubleSided:F.side===ka,flipSided:F.side===_i,useDepthPacking:F.depthPacking>=0,depthPacking:F.depthPacking||0,index0AttributeName:F.index0AttributeName,extensionClipCullDistance:ge&&F.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ge&&F.extensions.multiDraw===!0||ie)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:F.customProgramCacheKey()};return cn.vertexUv1s=g.has(1),cn.vertexUv2s=g.has(2),cn.vertexUv3s=g.has(3),g.clear(),cn}function x(F){const O=[];if(F.shaderID?O.push(F.shaderID):(O.push(F.customVertexShaderID),O.push(F.customFragmentShaderID)),F.defines!==void 0)for(const q in F.defines)O.push(q),O.push(F.defines[q]);return F.isRawShaderMaterial===!1&&(V(O,F),G(O,F),O.push(s.outputColorSpace)),O.push(F.customProgramCacheKey),O.join()}function V(F,O){F.push(O.precision),F.push(O.outputColorSpace),F.push(O.envMapMode),F.push(O.envMapCubeUVHeight),F.push(O.mapUv),F.push(O.alphaMapUv),F.push(O.lightMapUv),F.push(O.aoMapUv),F.push(O.bumpMapUv),F.push(O.normalMapUv),F.push(O.displacementMapUv),F.push(O.emissiveMapUv),F.push(O.metalnessMapUv),F.push(O.roughnessMapUv),F.push(O.anisotropyMapUv),F.push(O.clearcoatMapUv),F.push(O.clearcoatNormalMapUv),F.push(O.clearcoatRoughnessMapUv),F.push(O.iridescenceMapUv),F.push(O.iridescenceThicknessMapUv),F.push(O.sheenColorMapUv),F.push(O.sheenRoughnessMapUv),F.push(O.specularMapUv),F.push(O.specularColorMapUv),F.push(O.specularIntensityMapUv),F.push(O.transmissionMapUv),F.push(O.thicknessMapUv),F.push(O.combine),F.push(O.fogExp2),F.push(O.sizeAttenuation),F.push(O.morphTargetsCount),F.push(O.morphAttributeCount),F.push(O.numDirLights),F.push(O.numPointLights),F.push(O.numSpotLights),F.push(O.numSpotLightMaps),F.push(O.numHemiLights),F.push(O.numRectAreaLights),F.push(O.numDirLightShadows),F.push(O.numPointLightShadows),F.push(O.numSpotLightShadows),F.push(O.numSpotLightShadowsWithMaps),F.push(O.numLightProbes),F.push(O.shadowMapType),F.push(O.toneMapping),F.push(O.numClippingPlanes),F.push(O.numClipIntersection),F.push(O.depthPacking)}function G(F,O){m.disableAll(),O.supportsVertexTextures&&m.enable(0),O.instancing&&m.enable(1),O.instancingColor&&m.enable(2),O.instancingMorph&&m.enable(3),O.matcap&&m.enable(4),O.envMap&&m.enable(5),O.normalMapObjectSpace&&m.enable(6),O.normalMapTangentSpace&&m.enable(7),O.clearcoat&&m.enable(8),O.iridescence&&m.enable(9),O.alphaTest&&m.enable(10),O.vertexColors&&m.enable(11),O.vertexAlphas&&m.enable(12),O.vertexUv1s&&m.enable(13),O.vertexUv2s&&m.enable(14),O.vertexUv3s&&m.enable(15),O.vertexTangents&&m.enable(16),O.anisotropy&&m.enable(17),O.alphaHash&&m.enable(18),O.batching&&m.enable(19),O.dispersion&&m.enable(20),O.batchingColor&&m.enable(21),F.push(m.mask),m.disableAll(),O.fog&&m.enable(0),O.useFog&&m.enable(1),O.flatShading&&m.enable(2),O.logarithmicDepthBuffer&&m.enable(3),O.reverseDepthBuffer&&m.enable(4),O.skinning&&m.enable(5),O.morphTargets&&m.enable(6),O.morphNormals&&m.enable(7),O.morphColors&&m.enable(8),O.premultipliedAlpha&&m.enable(9),O.shadowMapEnabled&&m.enable(10),O.doubleSided&&m.enable(11),O.flipSided&&m.enable(12),O.useDepthPacking&&m.enable(13),O.dithering&&m.enable(14),O.transmission&&m.enable(15),O.sheen&&m.enable(16),O.opaque&&m.enable(17),O.pointsUvs&&m.enable(18),O.decodeVideoTexture&&m.enable(19),O.decodeVideoTextureEmissive&&m.enable(20),O.alphaToCoverage&&m.enable(21),F.push(m.mask)}function P(F){const O=w[F.type];let q;if(O){const rt=da[O];q=Wx.clone(rt.uniforms)}else q=F.uniforms;return q}function Y(F,O){let q;for(let rt=0,ht=v.length;rt<ht;rt++){const _t=v[rt];if(_t.cacheKey===O){q=_t,++q.usedTimes;break}}return q===void 0&&(q=new x1(s,O,F,c),v.push(q)),q}function z(F){if(--F.usedTimes===0){const O=v.indexOf(F);v[O]=v[v.length-1],v.pop(),F.destroy()}}function k(F){_.remove(F)}function K(){_.dispose()}return{getParameters:M,getProgramCacheKey:x,getUniforms:P,acquireProgram:Y,releaseProgram:z,releaseShaderCache:k,programs:v,dispose:K}}function A1(){let s=new WeakMap;function t(d){return s.has(d)}function i(d){let m=s.get(d);return m===void 0&&(m={},s.set(d,m)),m}function r(d){s.delete(d)}function l(d,m,_){s.get(d)[m]=_}function c(){s=new WeakMap}return{has:t,get:i,remove:r,update:l,dispose:c}}function R1(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function a0(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function r0(){const s=[];let t=0;const i=[],r=[],l=[];function c(){t=0,i.length=0,r.length=0,l.length=0}function d(y,E,b,w,C,M){let x=s[t];return x===void 0?(x={id:y.id,object:y,geometry:E,material:b,groupOrder:w,renderOrder:y.renderOrder,z:C,group:M},s[t]=x):(x.id=y.id,x.object=y,x.geometry=E,x.material=b,x.groupOrder=w,x.renderOrder=y.renderOrder,x.z=C,x.group=M),t++,x}function m(y,E,b,w,C,M){const x=d(y,E,b,w,C,M);b.transmission>0?r.push(x):b.transparent===!0?l.push(x):i.push(x)}function _(y,E,b,w,C,M){const x=d(y,E,b,w,C,M);b.transmission>0?r.unshift(x):b.transparent===!0?l.unshift(x):i.unshift(x)}function g(y,E){i.length>1&&i.sort(y||R1),r.length>1&&r.sort(E||a0),l.length>1&&l.sort(E||a0)}function v(){for(let y=t,E=s.length;y<E;y++){const b=s[y];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:m,unshift:_,finish:v,sort:g}}function w1(){let s=new WeakMap;function t(r,l){const c=s.get(r);let d;return c===void 0?(d=new r0,s.set(r,[d])):l>=c.length?(d=new r0,c.push(d)):d=c[l],d}function i(){s=new WeakMap}return{get:t,dispose:i}}function C1(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new ot,color:new ze};break;case"SpotLight":i={position:new ot,direction:new ot,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new ot,color:new ze,distance:0,decay:0};break;case"HemisphereLight":i={direction:new ot,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":i={color:new ze,position:new ot,halfWidth:new ot,halfHeight:new ot};break}return s[t.id]=i,i}}}function D1(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=i,i}}}let U1=0;function L1(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function N1(s){const t=new C1,i=D1(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let g=0;g<9;g++)r.probe.push(new ot);const l=new ot,c=new ln,d=new ln;function m(g){let v=0,y=0,E=0;for(let F=0;F<9;F++)r.probe[F].set(0,0,0);let b=0,w=0,C=0,M=0,x=0,V=0,G=0,P=0,Y=0,z=0,k=0;g.sort(L1);for(let F=0,O=g.length;F<O;F++){const q=g[F],rt=q.color,ht=q.intensity,_t=q.distance,Mt=q.shadow&&q.shadow.map?q.shadow.map.texture:null;if(q.isAmbientLight)v+=rt.r*ht,y+=rt.g*ht,E+=rt.b*ht;else if(q.isLightProbe){for(let X=0;X<9;X++)r.probe[X].addScaledVector(q.sh.coefficients[X],ht);k++}else if(q.isDirectionalLight){const X=t.get(q);if(X.color.copy(q.color).multiplyScalar(q.intensity),q.castShadow){const st=q.shadow,et=i.get(q);et.shadowIntensity=st.intensity,et.shadowBias=st.bias,et.shadowNormalBias=st.normalBias,et.shadowRadius=st.radius,et.shadowMapSize=st.mapSize,r.directionalShadow[b]=et,r.directionalShadowMap[b]=Mt,r.directionalShadowMatrix[b]=q.shadow.matrix,V++}r.directional[b]=X,b++}else if(q.isSpotLight){const X=t.get(q);X.position.setFromMatrixPosition(q.matrixWorld),X.color.copy(rt).multiplyScalar(ht),X.distance=_t,X.coneCos=Math.cos(q.angle),X.penumbraCos=Math.cos(q.angle*(1-q.penumbra)),X.decay=q.decay,r.spot[C]=X;const st=q.shadow;if(q.map&&(r.spotLightMap[Y]=q.map,Y++,st.updateMatrices(q),q.castShadow&&z++),r.spotLightMatrix[C]=st.matrix,q.castShadow){const et=i.get(q);et.shadowIntensity=st.intensity,et.shadowBias=st.bias,et.shadowNormalBias=st.normalBias,et.shadowRadius=st.radius,et.shadowMapSize=st.mapSize,r.spotShadow[C]=et,r.spotShadowMap[C]=Mt,P++}C++}else if(q.isRectAreaLight){const X=t.get(q);X.color.copy(rt).multiplyScalar(ht),X.halfWidth.set(q.width*.5,0,0),X.halfHeight.set(0,q.height*.5,0),r.rectArea[M]=X,M++}else if(q.isPointLight){const X=t.get(q);if(X.color.copy(q.color).multiplyScalar(q.intensity),X.distance=q.distance,X.decay=q.decay,q.castShadow){const st=q.shadow,et=i.get(q);et.shadowIntensity=st.intensity,et.shadowBias=st.bias,et.shadowNormalBias=st.normalBias,et.shadowRadius=st.radius,et.shadowMapSize=st.mapSize,et.shadowCameraNear=st.camera.near,et.shadowCameraFar=st.camera.far,r.pointShadow[w]=et,r.pointShadowMap[w]=Mt,r.pointShadowMatrix[w]=q.shadow.matrix,G++}r.point[w]=X,w++}else if(q.isHemisphereLight){const X=t.get(q);X.skyColor.copy(q.color).multiplyScalar(ht),X.groundColor.copy(q.groundColor).multiplyScalar(ht),r.hemi[x]=X,x++}}M>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=kt.LTC_FLOAT_1,r.rectAreaLTC2=kt.LTC_FLOAT_2):(r.rectAreaLTC1=kt.LTC_HALF_1,r.rectAreaLTC2=kt.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=y,r.ambient[2]=E;const K=r.hash;(K.directionalLength!==b||K.pointLength!==w||K.spotLength!==C||K.rectAreaLength!==M||K.hemiLength!==x||K.numDirectionalShadows!==V||K.numPointShadows!==G||K.numSpotShadows!==P||K.numSpotMaps!==Y||K.numLightProbes!==k)&&(r.directional.length=b,r.spot.length=C,r.rectArea.length=M,r.point.length=w,r.hemi.length=x,r.directionalShadow.length=V,r.directionalShadowMap.length=V,r.pointShadow.length=G,r.pointShadowMap.length=G,r.spotShadow.length=P,r.spotShadowMap.length=P,r.directionalShadowMatrix.length=V,r.pointShadowMatrix.length=G,r.spotLightMatrix.length=P+Y-z,r.spotLightMap.length=Y,r.numSpotLightShadowsWithMaps=z,r.numLightProbes=k,K.directionalLength=b,K.pointLength=w,K.spotLength=C,K.rectAreaLength=M,K.hemiLength=x,K.numDirectionalShadows=V,K.numPointShadows=G,K.numSpotShadows=P,K.numSpotMaps=Y,K.numLightProbes=k,r.version=U1++)}function _(g,v){let y=0,E=0,b=0,w=0,C=0;const M=v.matrixWorldInverse;for(let x=0,V=g.length;x<V;x++){const G=g[x];if(G.isDirectionalLight){const P=r.directional[y];P.direction.setFromMatrixPosition(G.matrixWorld),l.setFromMatrixPosition(G.target.matrixWorld),P.direction.sub(l),P.direction.transformDirection(M),y++}else if(G.isSpotLight){const P=r.spot[b];P.position.setFromMatrixPosition(G.matrixWorld),P.position.applyMatrix4(M),P.direction.setFromMatrixPosition(G.matrixWorld),l.setFromMatrixPosition(G.target.matrixWorld),P.direction.sub(l),P.direction.transformDirection(M),b++}else if(G.isRectAreaLight){const P=r.rectArea[w];P.position.setFromMatrixPosition(G.matrixWorld),P.position.applyMatrix4(M),d.identity(),c.copy(G.matrixWorld),c.premultiply(M),d.extractRotation(c),P.halfWidth.set(G.width*.5,0,0),P.halfHeight.set(0,G.height*.5,0),P.halfWidth.applyMatrix4(d),P.halfHeight.applyMatrix4(d),w++}else if(G.isPointLight){const P=r.point[E];P.position.setFromMatrixPosition(G.matrixWorld),P.position.applyMatrix4(M),E++}else if(G.isHemisphereLight){const P=r.hemi[C];P.direction.setFromMatrixPosition(G.matrixWorld),P.direction.transformDirection(M),C++}}}return{setup:m,setupView:_,state:r}}function s0(s){const t=new N1(s),i=[],r=[];function l(v){g.camera=v,i.length=0,r.length=0}function c(v){i.push(v)}function d(v){r.push(v)}function m(){t.setup(i)}function _(v){t.setupView(i,v)}const g={lightsArray:i,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:g,setupLights:m,setupLightsView:_,pushLight:c,pushShadow:d}}function O1(s){let t=new WeakMap;function i(l,c=0){const d=t.get(l);let m;return d===void 0?(m=new s0(s),t.set(l,[m])):c>=d.length?(m=new s0(s),d.push(m)):m=d[c],m}function r(){t=new WeakMap}return{get:i,dispose:r}}const P1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,F1=`uniform sampler2D shadow_pass;
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
}`;function B1(s,t,i){let r=new Up;const l=new Te,c=new Te,d=new gn,m=new nE({depthPacking:hx}),_=new iE,g={},v=i.maxTextureSize,y={[wr]:_i,[_i]:wr,[ka]:ka},E=new Cr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Te},radius:{value:4}},vertexShader:P1,fragmentShader:F1}),b=E.clone();b.defines.HORIZONTAL_PASS=1;const w=new ra;w.setAttribute("position",new ma(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new ia(w,E),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=S0;let x=this.type;this.render=function(z,k,K){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||z.length===0)return;const F=s.getRenderTarget(),O=s.getActiveCubeFace(),q=s.getActiveMipmapLevel(),rt=s.state;rt.setBlending(Ar),rt.buffers.color.setClear(1,1,1,1),rt.buffers.depth.setTest(!0),rt.setScissorTest(!1);const ht=x!==Va&&this.type===Va,_t=x===Va&&this.type!==Va;for(let Mt=0,X=z.length;Mt<X;Mt++){const st=z[Mt],et=st.shadow;if(et===void 0){console.warn("THREE.WebGLShadowMap:",st,"has no shadow.");continue}if(et.autoUpdate===!1&&et.needsUpdate===!1)continue;l.copy(et.mapSize);const Nt=et.getFrameExtents();if(l.multiply(Nt),c.copy(et.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(c.x=Math.floor(v/Nt.x),l.x=c.x*Nt.x,et.mapSize.x=c.x),l.y>v&&(c.y=Math.floor(v/Nt.y),l.y=c.y*Nt.y,et.mapSize.y=c.y)),et.map===null||ht===!0||_t===!0){const ct=this.type!==Va?{minFilter:aa,magFilter:aa}:{};et.map!==null&&et.map.dispose(),et.map=new ds(l.x,l.y,ct),et.map.texture.name=st.name+".shadowMap",et.camera.updateProjectionMatrix()}s.setRenderTarget(et.map),s.clear();const B=et.getViewportCount();for(let ct=0;ct<B;ct++){const Rt=et.getViewport(ct);d.set(c.x*Rt.x,c.y*Rt.y,c.x*Rt.z,c.y*Rt.w),rt.viewport(d),et.updateMatrices(st,ct),r=et.getFrustum(),P(k,K,et.camera,st,this.type)}et.isPointLightShadow!==!0&&this.type===Va&&V(et,K),et.needsUpdate=!1}x=this.type,M.needsUpdate=!1,s.setRenderTarget(F,O,q)};function V(z,k){const K=t.update(C);E.defines.VSM_SAMPLES!==z.blurSamples&&(E.defines.VSM_SAMPLES=z.blurSamples,b.defines.VSM_SAMPLES=z.blurSamples,E.needsUpdate=!0,b.needsUpdate=!0),z.mapPass===null&&(z.mapPass=new ds(l.x,l.y)),E.uniforms.shadow_pass.value=z.map.texture,E.uniforms.resolution.value=z.mapSize,E.uniforms.radius.value=z.radius,s.setRenderTarget(z.mapPass),s.clear(),s.renderBufferDirect(k,null,K,E,C,null),b.uniforms.shadow_pass.value=z.mapPass.texture,b.uniforms.resolution.value=z.mapSize,b.uniforms.radius.value=z.radius,s.setRenderTarget(z.map),s.clear(),s.renderBufferDirect(k,null,K,b,C,null)}function G(z,k,K,F){let O=null;const q=K.isPointLight===!0?z.customDistanceMaterial:z.customDepthMaterial;if(q!==void 0)O=q;else if(O=K.isPointLight===!0?_:m,s.localClippingEnabled&&k.clipShadows===!0&&Array.isArray(k.clippingPlanes)&&k.clippingPlanes.length!==0||k.displacementMap&&k.displacementScale!==0||k.alphaMap&&k.alphaTest>0||k.map&&k.alphaTest>0||k.alphaToCoverage===!0){const rt=O.uuid,ht=k.uuid;let _t=g[rt];_t===void 0&&(_t={},g[rt]=_t);let Mt=_t[ht];Mt===void 0&&(Mt=O.clone(),_t[ht]=Mt,k.addEventListener("dispose",Y)),O=Mt}if(O.visible=k.visible,O.wireframe=k.wireframe,F===Va?O.side=k.shadowSide!==null?k.shadowSide:k.side:O.side=k.shadowSide!==null?k.shadowSide:y[k.side],O.alphaMap=k.alphaMap,O.alphaTest=k.alphaToCoverage===!0?.5:k.alphaTest,O.map=k.map,O.clipShadows=k.clipShadows,O.clippingPlanes=k.clippingPlanes,O.clipIntersection=k.clipIntersection,O.displacementMap=k.displacementMap,O.displacementScale=k.displacementScale,O.displacementBias=k.displacementBias,O.wireframeLinewidth=k.wireframeLinewidth,O.linewidth=k.linewidth,K.isPointLight===!0&&O.isMeshDistanceMaterial===!0){const rt=s.properties.get(O);rt.light=K}return O}function P(z,k,K,F,O){if(z.visible===!1)return;if(z.layers.test(k.layers)&&(z.isMesh||z.isLine||z.isPoints)&&(z.castShadow||z.receiveShadow&&O===Va)&&(!z.frustumCulled||r.intersectsObject(z))){z.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,z.matrixWorld);const ht=t.update(z),_t=z.material;if(Array.isArray(_t)){const Mt=ht.groups;for(let X=0,st=Mt.length;X<st;X++){const et=Mt[X],Nt=_t[et.materialIndex];if(Nt&&Nt.visible){const B=G(z,Nt,F,O);z.onBeforeShadow(s,z,k,K,ht,B,et),s.renderBufferDirect(K,null,ht,B,z,et),z.onAfterShadow(s,z,k,K,ht,B,et)}}}else if(_t.visible){const Mt=G(z,_t,F,O);z.onBeforeShadow(s,z,k,K,ht,Mt,null),s.renderBufferDirect(K,null,ht,Mt,z,null),z.onAfterShadow(s,z,k,K,ht,Mt,null)}}const rt=z.children;for(let ht=0,_t=rt.length;ht<_t;ht++)P(rt[ht],k,K,F,O)}function Y(z){z.target.removeEventListener("dispose",Y);for(const K in g){const F=g[K],O=z.target.uuid;O in F&&(F[O].dispose(),delete F[O])}}}const I1={[Pd]:Fd,[Bd]:Hd,[Id]:Gd,[go]:zd,[Fd]:Pd,[Hd]:Bd,[Gd]:Id,[zd]:go};function z1(s,t){function i(){let $=!1;const Gt=new gn;let vt=null;const wt=new gn(0,0,0,0);return{setMask:function(Yt){vt!==Yt&&!$&&(s.colorMask(Yt,Yt,Yt,Yt),vt=Yt)},setLocked:function(Yt){$=Yt},setClear:function(Yt,Vt,ge,R,cn){cn===!0&&(Yt*=R,Vt*=R,ge*=R),Gt.set(Yt,Vt,ge,R),wt.equals(Gt)===!1&&(s.clearColor(Yt,Vt,ge,R),wt.copy(Gt))},reset:function(){$=!1,vt=null,wt.set(-1,0,0,0)}}}function r(){let $=!1,Gt=!1,vt=null,wt=null,Yt=null;return{setReversed:function(Vt){if(Gt!==Vt){const ge=t.get("EXT_clip_control");Vt?ge.clipControlEXT(ge.LOWER_LEFT_EXT,ge.ZERO_TO_ONE_EXT):ge.clipControlEXT(ge.LOWER_LEFT_EXT,ge.NEGATIVE_ONE_TO_ONE_EXT),Gt=Vt;const R=Yt;Yt=null,this.setClear(R)}},getReversed:function(){return Gt},setTest:function(Vt){Vt?Ft(s.DEPTH_TEST):Ot(s.DEPTH_TEST)},setMask:function(Vt){vt!==Vt&&!$&&(s.depthMask(Vt),vt=Vt)},setFunc:function(Vt){if(Gt&&(Vt=I1[Vt]),wt!==Vt){switch(Vt){case Pd:s.depthFunc(s.NEVER);break;case Fd:s.depthFunc(s.ALWAYS);break;case Bd:s.depthFunc(s.LESS);break;case go:s.depthFunc(s.LEQUAL);break;case Id:s.depthFunc(s.EQUAL);break;case zd:s.depthFunc(s.GEQUAL);break;case Hd:s.depthFunc(s.GREATER);break;case Gd:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}wt=Vt}},setLocked:function(Vt){$=Vt},setClear:function(Vt){Yt!==Vt&&(Gt&&(Vt=1-Vt),s.clearDepth(Vt),Yt=Vt)},reset:function(){$=!1,vt=null,wt=null,Yt=null,Gt=!1}}}function l(){let $=!1,Gt=null,vt=null,wt=null,Yt=null,Vt=null,ge=null,R=null,cn=null;return{setTest:function(Se){$||(Se?Ft(s.STENCIL_TEST):Ot(s.STENCIL_TEST))},setMask:function(Se){Gt!==Se&&!$&&(s.stencilMask(Se),Gt=Se)},setFunc:function(Se,ri,En){(vt!==Se||wt!==ri||Yt!==En)&&(s.stencilFunc(Se,ri,En),vt=Se,wt=ri,Yt=En)},setOp:function(Se,ri,En){(Vt!==Se||ge!==ri||R!==En)&&(s.stencilOp(Se,ri,En),Vt=Se,ge=ri,R=En)},setLocked:function(Se){$=Se},setClear:function(Se){cn!==Se&&(s.clearStencil(Se),cn=Se)},reset:function(){$=!1,Gt=null,vt=null,wt=null,Yt=null,Vt=null,ge=null,R=null,cn=null}}}const c=new i,d=new r,m=new l,_=new WeakMap,g=new WeakMap;let v={},y={},E=new WeakMap,b=[],w=null,C=!1,M=null,x=null,V=null,G=null,P=null,Y=null,z=null,k=new ze(0,0,0),K=0,F=!1,O=null,q=null,rt=null,ht=null,_t=null;const Mt=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,st=0;const et=s.getParameter(s.VERSION);et.indexOf("WebGL")!==-1?(st=parseFloat(/^WebGL (\d)/.exec(et)[1]),X=st>=1):et.indexOf("OpenGL ES")!==-1&&(st=parseFloat(/^OpenGL ES (\d)/.exec(et)[1]),X=st>=2);let Nt=null,B={};const ct=s.getParameter(s.SCISSOR_BOX),Rt=s.getParameter(s.VIEWPORT),Ut=new gn().fromArray(ct),at=new gn().fromArray(Rt);function Tt($,Gt,vt,wt){const Yt=new Uint8Array(4),Vt=s.createTexture();s.bindTexture($,Vt),s.texParameteri($,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri($,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ge=0;ge<vt;ge++)$===s.TEXTURE_3D||$===s.TEXTURE_2D_ARRAY?s.texImage3D(Gt,0,s.RGBA,1,1,wt,0,s.RGBA,s.UNSIGNED_BYTE,Yt):s.texImage2D(Gt+ge,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Yt);return Vt}const Lt={};Lt[s.TEXTURE_2D]=Tt(s.TEXTURE_2D,s.TEXTURE_2D,1),Lt[s.TEXTURE_CUBE_MAP]=Tt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Lt[s.TEXTURE_2D_ARRAY]=Tt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Lt[s.TEXTURE_3D]=Tt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),d.setClear(1),m.setClear(0),Ft(s.DEPTH_TEST),d.setFunc(go),De(!1),ve(tv),Ft(s.CULL_FACE),j(Ar);function Ft($){v[$]!==!0&&(s.enable($),v[$]=!0)}function Ot($){v[$]!==!1&&(s.disable($),v[$]=!1)}function fe($,Gt){return y[$]!==Gt?(s.bindFramebuffer($,Gt),y[$]=Gt,$===s.DRAW_FRAMEBUFFER&&(y[s.FRAMEBUFFER]=Gt),$===s.FRAMEBUFFER&&(y[s.DRAW_FRAMEBUFFER]=Gt),!0):!1}function ie($,Gt){let vt=b,wt=!1;if($){vt=E.get(Gt),vt===void 0&&(vt=[],E.set(Gt,vt));const Yt=$.textures;if(vt.length!==Yt.length||vt[0]!==s.COLOR_ATTACHMENT0){for(let Vt=0,ge=Yt.length;Vt<ge;Vt++)vt[Vt]=s.COLOR_ATTACHMENT0+Vt;vt.length=Yt.length,wt=!0}}else vt[0]!==s.BACK&&(vt[0]=s.BACK,wt=!0);wt&&s.drawBuffers(vt)}function ke($){return w!==$?(s.useProgram($),w=$,!0):!1}const qe={[ls]:s.FUNC_ADD,[IS]:s.FUNC_SUBTRACT,[zS]:s.FUNC_REVERSE_SUBTRACT};qe[HS]=s.MIN,qe[GS]=s.MAX;const Ae={[VS]:s.ZERO,[kS]:s.ONE,[XS]:s.SRC_COLOR,[Nd]:s.SRC_ALPHA,[KS]:s.SRC_ALPHA_SATURATE,[jS]:s.DST_COLOR,[qS]:s.DST_ALPHA,[WS]:s.ONE_MINUS_SRC_COLOR,[Od]:s.ONE_MINUS_SRC_ALPHA,[ZS]:s.ONE_MINUS_DST_COLOR,[YS]:s.ONE_MINUS_DST_ALPHA,[QS]:s.CONSTANT_COLOR,[JS]:s.ONE_MINUS_CONSTANT_COLOR,[$S]:s.CONSTANT_ALPHA,[tx]:s.ONE_MINUS_CONSTANT_ALPHA};function j($,Gt,vt,wt,Yt,Vt,ge,R,cn,Se){if($===Ar){C===!0&&(Ot(s.BLEND),C=!1);return}if(C===!1&&(Ft(s.BLEND),C=!0),$!==BS){if($!==M||Se!==F){if((x!==ls||P!==ls)&&(s.blendEquation(s.FUNC_ADD),x=ls,P=ls),Se)switch($){case po:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ev:s.blendFunc(s.ONE,s.ONE);break;case nv:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case iv:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",$);break}else switch($){case po:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ev:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case nv:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case iv:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",$);break}V=null,G=null,Y=null,z=null,k.set(0,0,0),K=0,M=$,F=Se}return}Yt=Yt||Gt,Vt=Vt||vt,ge=ge||wt,(Gt!==x||Yt!==P)&&(s.blendEquationSeparate(qe[Gt],qe[Yt]),x=Gt,P=Yt),(vt!==V||wt!==G||Vt!==Y||ge!==z)&&(s.blendFuncSeparate(Ae[vt],Ae[wt],Ae[Vt],Ae[ge]),V=vt,G=wt,Y=Vt,z=ge),(R.equals(k)===!1||cn!==K)&&(s.blendColor(R.r,R.g,R.b,cn),k.copy(R),K=cn),M=$,F=!1}function Xn($,Gt){$.side===ka?Ot(s.CULL_FACE):Ft(s.CULL_FACE);let vt=$.side===_i;Gt&&(vt=!vt),De(vt),$.blending===po&&$.transparent===!1?j(Ar):j($.blending,$.blendEquation,$.blendSrc,$.blendDst,$.blendEquationAlpha,$.blendSrcAlpha,$.blendDstAlpha,$.blendColor,$.blendAlpha,$.premultipliedAlpha),d.setFunc($.depthFunc),d.setTest($.depthTest),d.setMask($.depthWrite),c.setMask($.colorWrite);const wt=$.stencilWrite;m.setTest(wt),wt&&(m.setMask($.stencilWriteMask),m.setFunc($.stencilFunc,$.stencilRef,$.stencilFuncMask),m.setOp($.stencilFail,$.stencilZFail,$.stencilZPass)),We($.polygonOffset,$.polygonOffsetFactor,$.polygonOffsetUnits),$.alphaToCoverage===!0?Ft(s.SAMPLE_ALPHA_TO_COVERAGE):Ot(s.SAMPLE_ALPHA_TO_COVERAGE)}function De($){O!==$&&($?s.frontFace(s.CW):s.frontFace(s.CCW),O=$)}function ve($){$!==OS?(Ft(s.CULL_FACE),$!==q&&($===tv?s.cullFace(s.BACK):$===PS?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ot(s.CULL_FACE),q=$}function ae($){$!==rt&&(X&&s.lineWidth($),rt=$)}function We($,Gt,vt){$?(Ft(s.POLYGON_OFFSET_FILL),(ht!==Gt||_t!==vt)&&(s.polygonOffset(Gt,vt),ht=Gt,_t=vt)):Ot(s.POLYGON_OFFSET_FILL)}function ee($){$?Ft(s.SCISSOR_TEST):Ot(s.SCISSOR_TEST)}function I($){$===void 0&&($=s.TEXTURE0+Mt-1),Nt!==$&&(s.activeTexture($),Nt=$)}function U($,Gt,vt){vt===void 0&&(Nt===null?vt=s.TEXTURE0+Mt-1:vt=Nt);let wt=B[vt];wt===void 0&&(wt={type:void 0,texture:void 0},B[vt]=wt),(wt.type!==$||wt.texture!==Gt)&&(Nt!==vt&&(s.activeTexture(vt),Nt=vt),s.bindTexture($,Gt||Lt[$]),wt.type=$,wt.texture=Gt)}function ft(){const $=B[Nt];$!==void 0&&$.type!==void 0&&(s.bindTexture($.type,null),$.type=void 0,$.texture=void 0)}function bt(){try{s.compressedTexImage2D(...arguments)}catch($){console.error("THREE.WebGLState:",$)}}function St(){try{s.compressedTexImage3D(...arguments)}catch($){console.error("THREE.WebGLState:",$)}}function xt(){try{s.texSubImage2D(...arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Xt(){try{s.texSubImage3D(...arguments)}catch($){console.error("THREE.WebGLState:",$)}}function It(){try{s.compressedTexSubImage2D(...arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Qt(){try{s.compressedTexSubImage3D(...arguments)}catch($){console.error("THREE.WebGLState:",$)}}function se(){try{s.texStorage2D(...arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Pt(){try{s.texStorage3D(...arguments)}catch($){console.error("THREE.WebGLState:",$)}}function jt(){try{s.texImage2D(...arguments)}catch($){console.error("THREE.WebGLState:",$)}}function oe(){try{s.texImage3D(...arguments)}catch($){console.error("THREE.WebGLState:",$)}}function ue($){Ut.equals($)===!1&&(s.scissor($.x,$.y,$.z,$.w),Ut.copy($))}function qt($){at.equals($)===!1&&(s.viewport($.x,$.y,$.z,$.w),at.copy($))}function ye($,Gt){let vt=g.get(Gt);vt===void 0&&(vt=new WeakMap,g.set(Gt,vt));let wt=vt.get($);wt===void 0&&(wt=s.getUniformBlockIndex(Gt,$.name),vt.set($,wt))}function me($,Gt){const wt=g.get(Gt).get($);_.get(Gt)!==wt&&(s.uniformBlockBinding(Gt,wt,$.__bindingPointIndex),_.set(Gt,wt))}function Wt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),d.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),v={},Nt=null,B={},y={},E=new WeakMap,b=[],w=null,C=!1,M=null,x=null,V=null,G=null,P=null,Y=null,z=null,k=new ze(0,0,0),K=0,F=!1,O=null,q=null,rt=null,ht=null,_t=null,Ut.set(0,0,s.canvas.width,s.canvas.height),at.set(0,0,s.canvas.width,s.canvas.height),c.reset(),d.reset(),m.reset()}return{buffers:{color:c,depth:d,stencil:m},enable:Ft,disable:Ot,bindFramebuffer:fe,drawBuffers:ie,useProgram:ke,setBlending:j,setMaterial:Xn,setFlipSided:De,setCullFace:ve,setLineWidth:ae,setPolygonOffset:We,setScissorTest:ee,activeTexture:I,bindTexture:U,unbindTexture:ft,compressedTexImage2D:bt,compressedTexImage3D:St,texImage2D:jt,texImage3D:oe,updateUBOMapping:ye,uniformBlockBinding:me,texStorage2D:se,texStorage3D:Pt,texSubImage2D:xt,texSubImage3D:Xt,compressedTexSubImage2D:It,compressedTexSubImage3D:Qt,scissor:ue,viewport:qt,reset:Wt}}function H1(s,t,i,r,l,c,d){const m=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,_=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new Te,v=new WeakMap;let y;const E=new WeakMap;let b=!1;try{b=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(I,U){return b?new OffscreenCanvas(I,U):Cu("canvas")}function C(I,U,ft){let bt=1;const St=ee(I);if((St.width>ft||St.height>ft)&&(bt=ft/Math.max(St.width,St.height)),bt<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const xt=Math.floor(bt*St.width),Xt=Math.floor(bt*St.height);y===void 0&&(y=w(xt,Xt));const It=U?w(xt,Xt):y;return It.width=xt,It.height=Xt,It.getContext("2d").drawImage(I,0,0,xt,Xt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+St.width+"x"+St.height+") to ("+xt+"x"+Xt+")."),It}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+St.width+"x"+St.height+")."),I;return I}function M(I){return I.generateMipmaps}function x(I){s.generateMipmap(I)}function V(I){return I.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?s.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function G(I,U,ft,bt,St=!1){if(I!==null){if(s[I]!==void 0)return s[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let xt=U;if(U===s.RED&&(ft===s.FLOAT&&(xt=s.R32F),ft===s.HALF_FLOAT&&(xt=s.R16F),ft===s.UNSIGNED_BYTE&&(xt=s.R8)),U===s.RED_INTEGER&&(ft===s.UNSIGNED_BYTE&&(xt=s.R8UI),ft===s.UNSIGNED_SHORT&&(xt=s.R16UI),ft===s.UNSIGNED_INT&&(xt=s.R32UI),ft===s.BYTE&&(xt=s.R8I),ft===s.SHORT&&(xt=s.R16I),ft===s.INT&&(xt=s.R32I)),U===s.RG&&(ft===s.FLOAT&&(xt=s.RG32F),ft===s.HALF_FLOAT&&(xt=s.RG16F),ft===s.UNSIGNED_BYTE&&(xt=s.RG8)),U===s.RG_INTEGER&&(ft===s.UNSIGNED_BYTE&&(xt=s.RG8UI),ft===s.UNSIGNED_SHORT&&(xt=s.RG16UI),ft===s.UNSIGNED_INT&&(xt=s.RG32UI),ft===s.BYTE&&(xt=s.RG8I),ft===s.SHORT&&(xt=s.RG16I),ft===s.INT&&(xt=s.RG32I)),U===s.RGB_INTEGER&&(ft===s.UNSIGNED_BYTE&&(xt=s.RGB8UI),ft===s.UNSIGNED_SHORT&&(xt=s.RGB16UI),ft===s.UNSIGNED_INT&&(xt=s.RGB32UI),ft===s.BYTE&&(xt=s.RGB8I),ft===s.SHORT&&(xt=s.RGB16I),ft===s.INT&&(xt=s.RGB32I)),U===s.RGBA_INTEGER&&(ft===s.UNSIGNED_BYTE&&(xt=s.RGBA8UI),ft===s.UNSIGNED_SHORT&&(xt=s.RGBA16UI),ft===s.UNSIGNED_INT&&(xt=s.RGBA32UI),ft===s.BYTE&&(xt=s.RGBA8I),ft===s.SHORT&&(xt=s.RGBA16I),ft===s.INT&&(xt=s.RGBA32I)),U===s.RGB&&ft===s.UNSIGNED_INT_5_9_9_9_REV&&(xt=s.RGB9_E5),U===s.RGBA){const Xt=St?Ru:Ve.getTransfer(bt);ft===s.FLOAT&&(xt=s.RGBA32F),ft===s.HALF_FLOAT&&(xt=s.RGBA16F),ft===s.UNSIGNED_BYTE&&(xt=Xt===tn?s.SRGB8_ALPHA8:s.RGBA8),ft===s.UNSIGNED_SHORT_4_4_4_4&&(xt=s.RGBA4),ft===s.UNSIGNED_SHORT_5_5_5_1&&(xt=s.RGB5_A1)}return(xt===s.R16F||xt===s.R32F||xt===s.RG16F||xt===s.RG32F||xt===s.RGBA16F||xt===s.RGBA32F)&&t.get("EXT_color_buffer_float"),xt}function P(I,U){let ft;return I?U===null||U===hs||U===Ul?ft=s.DEPTH24_STENCIL8:U===Xa?ft=s.DEPTH32F_STENCIL8:U===Dl&&(ft=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):U===null||U===hs||U===Ul?ft=s.DEPTH_COMPONENT24:U===Xa?ft=s.DEPTH_COMPONENT32F:U===Dl&&(ft=s.DEPTH_COMPONENT16),ft}function Y(I,U){return M(I)===!0||I.isFramebufferTexture&&I.minFilter!==aa&&I.minFilter!==pa?Math.log2(Math.max(U.width,U.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?U.mipmaps.length:1}function z(I){const U=I.target;U.removeEventListener("dispose",z),K(U),U.isVideoTexture&&v.delete(U)}function k(I){const U=I.target;U.removeEventListener("dispose",k),O(U)}function K(I){const U=r.get(I);if(U.__webglInit===void 0)return;const ft=I.source,bt=E.get(ft);if(bt){const St=bt[U.__cacheKey];St.usedTimes--,St.usedTimes===0&&F(I),Object.keys(bt).length===0&&E.delete(ft)}r.remove(I)}function F(I){const U=r.get(I);s.deleteTexture(U.__webglTexture);const ft=I.source,bt=E.get(ft);delete bt[U.__cacheKey],d.memory.textures--}function O(I){const U=r.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),r.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let bt=0;bt<6;bt++){if(Array.isArray(U.__webglFramebuffer[bt]))for(let St=0;St<U.__webglFramebuffer[bt].length;St++)s.deleteFramebuffer(U.__webglFramebuffer[bt][St]);else s.deleteFramebuffer(U.__webglFramebuffer[bt]);U.__webglDepthbuffer&&s.deleteRenderbuffer(U.__webglDepthbuffer[bt])}else{if(Array.isArray(U.__webglFramebuffer))for(let bt=0;bt<U.__webglFramebuffer.length;bt++)s.deleteFramebuffer(U.__webglFramebuffer[bt]);else s.deleteFramebuffer(U.__webglFramebuffer);if(U.__webglDepthbuffer&&s.deleteRenderbuffer(U.__webglDepthbuffer),U.__webglMultisampledFramebuffer&&s.deleteFramebuffer(U.__webglMultisampledFramebuffer),U.__webglColorRenderbuffer)for(let bt=0;bt<U.__webglColorRenderbuffer.length;bt++)U.__webglColorRenderbuffer[bt]&&s.deleteRenderbuffer(U.__webglColorRenderbuffer[bt]);U.__webglDepthRenderbuffer&&s.deleteRenderbuffer(U.__webglDepthRenderbuffer)}const ft=I.textures;for(let bt=0,St=ft.length;bt<St;bt++){const xt=r.get(ft[bt]);xt.__webglTexture&&(s.deleteTexture(xt.__webglTexture),d.memory.textures--),r.remove(ft[bt])}r.remove(I)}let q=0;function rt(){q=0}function ht(){const I=q;return I>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+l.maxTextures),q+=1,I}function _t(I){const U=[];return U.push(I.wrapS),U.push(I.wrapT),U.push(I.wrapR||0),U.push(I.magFilter),U.push(I.minFilter),U.push(I.anisotropy),U.push(I.internalFormat),U.push(I.format),U.push(I.type),U.push(I.generateMipmaps),U.push(I.premultiplyAlpha),U.push(I.flipY),U.push(I.unpackAlignment),U.push(I.colorSpace),U.join()}function Mt(I,U){const ft=r.get(I);if(I.isVideoTexture&&ae(I),I.isRenderTargetTexture===!1&&I.version>0&&ft.__version!==I.version){const bt=I.image;if(bt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(bt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{at(ft,I,U);return}}i.bindTexture(s.TEXTURE_2D,ft.__webglTexture,s.TEXTURE0+U)}function X(I,U){const ft=r.get(I);if(I.version>0&&ft.__version!==I.version){at(ft,I,U);return}i.bindTexture(s.TEXTURE_2D_ARRAY,ft.__webglTexture,s.TEXTURE0+U)}function st(I,U){const ft=r.get(I);if(I.version>0&&ft.__version!==I.version){at(ft,I,U);return}i.bindTexture(s.TEXTURE_3D,ft.__webglTexture,s.TEXTURE0+U)}function et(I,U){const ft=r.get(I);if(I.version>0&&ft.__version!==I.version){Tt(ft,I,U);return}i.bindTexture(s.TEXTURE_CUBE_MAP,ft.__webglTexture,s.TEXTURE0+U)}const Nt={[Xd]:s.REPEAT,[us]:s.CLAMP_TO_EDGE,[Wd]:s.MIRRORED_REPEAT},B={[aa]:s.NEAREST,[ux]:s.NEAREST_MIPMAP_NEAREST,[Wc]:s.NEAREST_MIPMAP_LINEAR,[pa]:s.LINEAR,[Jh]:s.LINEAR_MIPMAP_NEAREST,[fs]:s.LINEAR_MIPMAP_LINEAR},ct={[px]:s.NEVER,[Sx]:s.ALWAYS,[mx]:s.LESS,[U0]:s.LEQUAL,[gx]:s.EQUAL,[yx]:s.GEQUAL,[_x]:s.GREATER,[vx]:s.NOTEQUAL};function Rt(I,U){if(U.type===Xa&&t.has("OES_texture_float_linear")===!1&&(U.magFilter===pa||U.magFilter===Jh||U.magFilter===Wc||U.magFilter===fs||U.minFilter===pa||U.minFilter===Jh||U.minFilter===Wc||U.minFilter===fs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(I,s.TEXTURE_WRAP_S,Nt[U.wrapS]),s.texParameteri(I,s.TEXTURE_WRAP_T,Nt[U.wrapT]),(I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY)&&s.texParameteri(I,s.TEXTURE_WRAP_R,Nt[U.wrapR]),s.texParameteri(I,s.TEXTURE_MAG_FILTER,B[U.magFilter]),s.texParameteri(I,s.TEXTURE_MIN_FILTER,B[U.minFilter]),U.compareFunction&&(s.texParameteri(I,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(I,s.TEXTURE_COMPARE_FUNC,ct[U.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(U.magFilter===aa||U.minFilter!==Wc&&U.minFilter!==fs||U.type===Xa&&t.has("OES_texture_float_linear")===!1)return;if(U.anisotropy>1||r.get(U).__currentAnisotropy){const ft=t.get("EXT_texture_filter_anisotropic");s.texParameterf(I,ft.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(U.anisotropy,l.getMaxAnisotropy())),r.get(U).__currentAnisotropy=U.anisotropy}}}function Ut(I,U){let ft=!1;I.__webglInit===void 0&&(I.__webglInit=!0,U.addEventListener("dispose",z));const bt=U.source;let St=E.get(bt);St===void 0&&(St={},E.set(bt,St));const xt=_t(U);if(xt!==I.__cacheKey){St[xt]===void 0&&(St[xt]={texture:s.createTexture(),usedTimes:0},d.memory.textures++,ft=!0),St[xt].usedTimes++;const Xt=St[I.__cacheKey];Xt!==void 0&&(St[I.__cacheKey].usedTimes--,Xt.usedTimes===0&&F(U)),I.__cacheKey=xt,I.__webglTexture=St[xt].texture}return ft}function at(I,U,ft){let bt=s.TEXTURE_2D;(U.isDataArrayTexture||U.isCompressedArrayTexture)&&(bt=s.TEXTURE_2D_ARRAY),U.isData3DTexture&&(bt=s.TEXTURE_3D);const St=Ut(I,U),xt=U.source;i.bindTexture(bt,I.__webglTexture,s.TEXTURE0+ft);const Xt=r.get(xt);if(xt.version!==Xt.__version||St===!0){i.activeTexture(s.TEXTURE0+ft);const It=Ve.getPrimaries(Ve.workingColorSpace),Qt=U.colorSpace===Tr?null:Ve.getPrimaries(U.colorSpace),se=U.colorSpace===Tr||It===Qt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,U.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,U.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,se);let Pt=C(U.image,!1,l.maxTextureSize);Pt=We(U,Pt);const jt=c.convert(U.format,U.colorSpace),oe=c.convert(U.type);let ue=G(U.internalFormat,jt,oe,U.colorSpace,U.isVideoTexture);Rt(bt,U);let qt;const ye=U.mipmaps,me=U.isVideoTexture!==!0,Wt=Xt.__version===void 0||St===!0,$=xt.dataReady,Gt=Y(U,Pt);if(U.isDepthTexture)ue=P(U.format===Nl,U.type),Wt&&(me?i.texStorage2D(s.TEXTURE_2D,1,ue,Pt.width,Pt.height):i.texImage2D(s.TEXTURE_2D,0,ue,Pt.width,Pt.height,0,jt,oe,null));else if(U.isDataTexture)if(ye.length>0){me&&Wt&&i.texStorage2D(s.TEXTURE_2D,Gt,ue,ye[0].width,ye[0].height);for(let vt=0,wt=ye.length;vt<wt;vt++)qt=ye[vt],me?$&&i.texSubImage2D(s.TEXTURE_2D,vt,0,0,qt.width,qt.height,jt,oe,qt.data):i.texImage2D(s.TEXTURE_2D,vt,ue,qt.width,qt.height,0,jt,oe,qt.data);U.generateMipmaps=!1}else me?(Wt&&i.texStorage2D(s.TEXTURE_2D,Gt,ue,Pt.width,Pt.height),$&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,Pt.width,Pt.height,jt,oe,Pt.data)):i.texImage2D(s.TEXTURE_2D,0,ue,Pt.width,Pt.height,0,jt,oe,Pt.data);else if(U.isCompressedTexture)if(U.isCompressedArrayTexture){me&&Wt&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Gt,ue,ye[0].width,ye[0].height,Pt.depth);for(let vt=0,wt=ye.length;vt<wt;vt++)if(qt=ye[vt],U.format!==na)if(jt!==null)if(me){if($)if(U.layerUpdates.size>0){const Yt=Fv(qt.width,qt.height,U.format,U.type);for(const Vt of U.layerUpdates){const ge=qt.data.subarray(Vt*Yt/qt.data.BYTES_PER_ELEMENT,(Vt+1)*Yt/qt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,vt,0,0,Vt,qt.width,qt.height,1,jt,ge)}U.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,vt,0,0,0,qt.width,qt.height,Pt.depth,jt,qt.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,vt,ue,qt.width,qt.height,Pt.depth,0,qt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else me?$&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,vt,0,0,0,qt.width,qt.height,Pt.depth,jt,oe,qt.data):i.texImage3D(s.TEXTURE_2D_ARRAY,vt,ue,qt.width,qt.height,Pt.depth,0,jt,oe,qt.data)}else{me&&Wt&&i.texStorage2D(s.TEXTURE_2D,Gt,ue,ye[0].width,ye[0].height);for(let vt=0,wt=ye.length;vt<wt;vt++)qt=ye[vt],U.format!==na?jt!==null?me?$&&i.compressedTexSubImage2D(s.TEXTURE_2D,vt,0,0,qt.width,qt.height,jt,qt.data):i.compressedTexImage2D(s.TEXTURE_2D,vt,ue,qt.width,qt.height,0,qt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):me?$&&i.texSubImage2D(s.TEXTURE_2D,vt,0,0,qt.width,qt.height,jt,oe,qt.data):i.texImage2D(s.TEXTURE_2D,vt,ue,qt.width,qt.height,0,jt,oe,qt.data)}else if(U.isDataArrayTexture)if(me){if(Wt&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Gt,ue,Pt.width,Pt.height,Pt.depth),$)if(U.layerUpdates.size>0){const vt=Fv(Pt.width,Pt.height,U.format,U.type);for(const wt of U.layerUpdates){const Yt=Pt.data.subarray(wt*vt/Pt.data.BYTES_PER_ELEMENT,(wt+1)*vt/Pt.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,wt,Pt.width,Pt.height,1,jt,oe,Yt)}U.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Pt.width,Pt.height,Pt.depth,jt,oe,Pt.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,ue,Pt.width,Pt.height,Pt.depth,0,jt,oe,Pt.data);else if(U.isData3DTexture)me?(Wt&&i.texStorage3D(s.TEXTURE_3D,Gt,ue,Pt.width,Pt.height,Pt.depth),$&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Pt.width,Pt.height,Pt.depth,jt,oe,Pt.data)):i.texImage3D(s.TEXTURE_3D,0,ue,Pt.width,Pt.height,Pt.depth,0,jt,oe,Pt.data);else if(U.isFramebufferTexture){if(Wt)if(me)i.texStorage2D(s.TEXTURE_2D,Gt,ue,Pt.width,Pt.height);else{let vt=Pt.width,wt=Pt.height;for(let Yt=0;Yt<Gt;Yt++)i.texImage2D(s.TEXTURE_2D,Yt,ue,vt,wt,0,jt,oe,null),vt>>=1,wt>>=1}}else if(ye.length>0){if(me&&Wt){const vt=ee(ye[0]);i.texStorage2D(s.TEXTURE_2D,Gt,ue,vt.width,vt.height)}for(let vt=0,wt=ye.length;vt<wt;vt++)qt=ye[vt],me?$&&i.texSubImage2D(s.TEXTURE_2D,vt,0,0,jt,oe,qt):i.texImage2D(s.TEXTURE_2D,vt,ue,jt,oe,qt);U.generateMipmaps=!1}else if(me){if(Wt){const vt=ee(Pt);i.texStorage2D(s.TEXTURE_2D,Gt,ue,vt.width,vt.height)}$&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,jt,oe,Pt)}else i.texImage2D(s.TEXTURE_2D,0,ue,jt,oe,Pt);M(U)&&x(bt),Xt.__version=xt.version,U.onUpdate&&U.onUpdate(U)}I.__version=U.version}function Tt(I,U,ft){if(U.image.length!==6)return;const bt=Ut(I,U),St=U.source;i.bindTexture(s.TEXTURE_CUBE_MAP,I.__webglTexture,s.TEXTURE0+ft);const xt=r.get(St);if(St.version!==xt.__version||bt===!0){i.activeTexture(s.TEXTURE0+ft);const Xt=Ve.getPrimaries(Ve.workingColorSpace),It=U.colorSpace===Tr?null:Ve.getPrimaries(U.colorSpace),Qt=U.colorSpace===Tr||Xt===It?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,U.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,U.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qt);const se=U.isCompressedTexture||U.image[0].isCompressedTexture,Pt=U.image[0]&&U.image[0].isDataTexture,jt=[];for(let wt=0;wt<6;wt++)!se&&!Pt?jt[wt]=C(U.image[wt],!0,l.maxCubemapSize):jt[wt]=Pt?U.image[wt].image:U.image[wt],jt[wt]=We(U,jt[wt]);const oe=jt[0],ue=c.convert(U.format,U.colorSpace),qt=c.convert(U.type),ye=G(U.internalFormat,ue,qt,U.colorSpace),me=U.isVideoTexture!==!0,Wt=xt.__version===void 0||bt===!0,$=St.dataReady;let Gt=Y(U,oe);Rt(s.TEXTURE_CUBE_MAP,U);let vt;if(se){me&&Wt&&i.texStorage2D(s.TEXTURE_CUBE_MAP,Gt,ye,oe.width,oe.height);for(let wt=0;wt<6;wt++){vt=jt[wt].mipmaps;for(let Yt=0;Yt<vt.length;Yt++){const Vt=vt[Yt];U.format!==na?ue!==null?me?$&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+wt,Yt,0,0,Vt.width,Vt.height,ue,Vt.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+wt,Yt,ye,Vt.width,Vt.height,0,Vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):me?$&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+wt,Yt,0,0,Vt.width,Vt.height,ue,qt,Vt.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+wt,Yt,ye,Vt.width,Vt.height,0,ue,qt,Vt.data)}}}else{if(vt=U.mipmaps,me&&Wt){vt.length>0&&Gt++;const wt=ee(jt[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,Gt,ye,wt.width,wt.height)}for(let wt=0;wt<6;wt++)if(Pt){me?$&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,0,0,jt[wt].width,jt[wt].height,ue,qt,jt[wt].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,ye,jt[wt].width,jt[wt].height,0,ue,qt,jt[wt].data);for(let Yt=0;Yt<vt.length;Yt++){const ge=vt[Yt].image[wt].image;me?$&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+wt,Yt+1,0,0,ge.width,ge.height,ue,qt,ge.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+wt,Yt+1,ye,ge.width,ge.height,0,ue,qt,ge.data)}}else{me?$&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,0,0,ue,qt,jt[wt]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,ye,ue,qt,jt[wt]);for(let Yt=0;Yt<vt.length;Yt++){const Vt=vt[Yt];me?$&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+wt,Yt+1,0,0,ue,qt,Vt.image[wt]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+wt,Yt+1,ye,ue,qt,Vt.image[wt])}}}M(U)&&x(s.TEXTURE_CUBE_MAP),xt.__version=St.version,U.onUpdate&&U.onUpdate(U)}I.__version=U.version}function Lt(I,U,ft,bt,St,xt){const Xt=c.convert(ft.format,ft.colorSpace),It=c.convert(ft.type),Qt=G(ft.internalFormat,Xt,It,ft.colorSpace),se=r.get(U),Pt=r.get(ft);if(Pt.__renderTarget=U,!se.__hasExternalTextures){const jt=Math.max(1,U.width>>xt),oe=Math.max(1,U.height>>xt);St===s.TEXTURE_3D||St===s.TEXTURE_2D_ARRAY?i.texImage3D(St,xt,Qt,jt,oe,U.depth,0,Xt,It,null):i.texImage2D(St,xt,Qt,jt,oe,0,Xt,It,null)}i.bindFramebuffer(s.FRAMEBUFFER,I),ve(U)?m.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,bt,St,Pt.__webglTexture,0,De(U)):(St===s.TEXTURE_2D||St>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&St<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,bt,St,Pt.__webglTexture,xt),i.bindFramebuffer(s.FRAMEBUFFER,null)}function Ft(I,U,ft){if(s.bindRenderbuffer(s.RENDERBUFFER,I),U.depthBuffer){const bt=U.depthTexture,St=bt&&bt.isDepthTexture?bt.type:null,xt=P(U.stencilBuffer,St),Xt=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,It=De(U);ve(U)?m.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,It,xt,U.width,U.height):ft?s.renderbufferStorageMultisample(s.RENDERBUFFER,It,xt,U.width,U.height):s.renderbufferStorage(s.RENDERBUFFER,xt,U.width,U.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Xt,s.RENDERBUFFER,I)}else{const bt=U.textures;for(let St=0;St<bt.length;St++){const xt=bt[St],Xt=c.convert(xt.format,xt.colorSpace),It=c.convert(xt.type),Qt=G(xt.internalFormat,Xt,It,xt.colorSpace),se=De(U);ft&&ve(U)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,se,Qt,U.width,U.height):ve(U)?m.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,se,Qt,U.width,U.height):s.renderbufferStorage(s.RENDERBUFFER,Qt,U.width,U.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ot(I,U){if(U&&U.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(s.FRAMEBUFFER,I),!(U.depthTexture&&U.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const bt=r.get(U.depthTexture);bt.__renderTarget=U,(!bt.__webglTexture||U.depthTexture.image.width!==U.width||U.depthTexture.image.height!==U.height)&&(U.depthTexture.image.width=U.width,U.depthTexture.image.height=U.height,U.depthTexture.needsUpdate=!0),Mt(U.depthTexture,0);const St=bt.__webglTexture,xt=De(U);if(U.depthTexture.format===Ll)ve(U)?m.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,St,0,xt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,St,0);else if(U.depthTexture.format===Nl)ve(U)?m.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,St,0,xt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,St,0);else throw new Error("Unknown depthTexture format")}function fe(I){const U=r.get(I),ft=I.isWebGLCubeRenderTarget===!0;if(U.__boundDepthTexture!==I.depthTexture){const bt=I.depthTexture;if(U.__depthDisposeCallback&&U.__depthDisposeCallback(),bt){const St=()=>{delete U.__boundDepthTexture,delete U.__depthDisposeCallback,bt.removeEventListener("dispose",St)};bt.addEventListener("dispose",St),U.__depthDisposeCallback=St}U.__boundDepthTexture=bt}if(I.depthTexture&&!U.__autoAllocateDepthBuffer){if(ft)throw new Error("target.depthTexture not supported in Cube render targets");const bt=I.texture.mipmaps;bt&&bt.length>0?Ot(U.__webglFramebuffer[0],I):Ot(U.__webglFramebuffer,I)}else if(ft){U.__webglDepthbuffer=[];for(let bt=0;bt<6;bt++)if(i.bindFramebuffer(s.FRAMEBUFFER,U.__webglFramebuffer[bt]),U.__webglDepthbuffer[bt]===void 0)U.__webglDepthbuffer[bt]=s.createRenderbuffer(),Ft(U.__webglDepthbuffer[bt],I,!1);else{const St=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,xt=U.__webglDepthbuffer[bt];s.bindRenderbuffer(s.RENDERBUFFER,xt),s.framebufferRenderbuffer(s.FRAMEBUFFER,St,s.RENDERBUFFER,xt)}}else{const bt=I.texture.mipmaps;if(bt&&bt.length>0?i.bindFramebuffer(s.FRAMEBUFFER,U.__webglFramebuffer[0]):i.bindFramebuffer(s.FRAMEBUFFER,U.__webglFramebuffer),U.__webglDepthbuffer===void 0)U.__webglDepthbuffer=s.createRenderbuffer(),Ft(U.__webglDepthbuffer,I,!1);else{const St=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,xt=U.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,xt),s.framebufferRenderbuffer(s.FRAMEBUFFER,St,s.RENDERBUFFER,xt)}}i.bindFramebuffer(s.FRAMEBUFFER,null)}function ie(I,U,ft){const bt=r.get(I);U!==void 0&&Lt(bt.__webglFramebuffer,I,I.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),ft!==void 0&&fe(I)}function ke(I){const U=I.texture,ft=r.get(I),bt=r.get(U);I.addEventListener("dispose",k);const St=I.textures,xt=I.isWebGLCubeRenderTarget===!0,Xt=St.length>1;if(Xt||(bt.__webglTexture===void 0&&(bt.__webglTexture=s.createTexture()),bt.__version=U.version,d.memory.textures++),xt){ft.__webglFramebuffer=[];for(let It=0;It<6;It++)if(U.mipmaps&&U.mipmaps.length>0){ft.__webglFramebuffer[It]=[];for(let Qt=0;Qt<U.mipmaps.length;Qt++)ft.__webglFramebuffer[It][Qt]=s.createFramebuffer()}else ft.__webglFramebuffer[It]=s.createFramebuffer()}else{if(U.mipmaps&&U.mipmaps.length>0){ft.__webglFramebuffer=[];for(let It=0;It<U.mipmaps.length;It++)ft.__webglFramebuffer[It]=s.createFramebuffer()}else ft.__webglFramebuffer=s.createFramebuffer();if(Xt)for(let It=0,Qt=St.length;It<Qt;It++){const se=r.get(St[It]);se.__webglTexture===void 0&&(se.__webglTexture=s.createTexture(),d.memory.textures++)}if(I.samples>0&&ve(I)===!1){ft.__webglMultisampledFramebuffer=s.createFramebuffer(),ft.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,ft.__webglMultisampledFramebuffer);for(let It=0;It<St.length;It++){const Qt=St[It];ft.__webglColorRenderbuffer[It]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,ft.__webglColorRenderbuffer[It]);const se=c.convert(Qt.format,Qt.colorSpace),Pt=c.convert(Qt.type),jt=G(Qt.internalFormat,se,Pt,Qt.colorSpace,I.isXRRenderTarget===!0),oe=De(I);s.renderbufferStorageMultisample(s.RENDERBUFFER,oe,jt,I.width,I.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+It,s.RENDERBUFFER,ft.__webglColorRenderbuffer[It])}s.bindRenderbuffer(s.RENDERBUFFER,null),I.depthBuffer&&(ft.__webglDepthRenderbuffer=s.createRenderbuffer(),Ft(ft.__webglDepthRenderbuffer,I,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(xt){i.bindTexture(s.TEXTURE_CUBE_MAP,bt.__webglTexture),Rt(s.TEXTURE_CUBE_MAP,U);for(let It=0;It<6;It++)if(U.mipmaps&&U.mipmaps.length>0)for(let Qt=0;Qt<U.mipmaps.length;Qt++)Lt(ft.__webglFramebuffer[It][Qt],I,U,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+It,Qt);else Lt(ft.__webglFramebuffer[It],I,U,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+It,0);M(U)&&x(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Xt){for(let It=0,Qt=St.length;It<Qt;It++){const se=St[It],Pt=r.get(se);i.bindTexture(s.TEXTURE_2D,Pt.__webglTexture),Rt(s.TEXTURE_2D,se),Lt(ft.__webglFramebuffer,I,se,s.COLOR_ATTACHMENT0+It,s.TEXTURE_2D,0),M(se)&&x(s.TEXTURE_2D)}i.unbindTexture()}else{let It=s.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(It=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(It,bt.__webglTexture),Rt(It,U),U.mipmaps&&U.mipmaps.length>0)for(let Qt=0;Qt<U.mipmaps.length;Qt++)Lt(ft.__webglFramebuffer[Qt],I,U,s.COLOR_ATTACHMENT0,It,Qt);else Lt(ft.__webglFramebuffer,I,U,s.COLOR_ATTACHMENT0,It,0);M(U)&&x(It),i.unbindTexture()}I.depthBuffer&&fe(I)}function qe(I){const U=I.textures;for(let ft=0,bt=U.length;ft<bt;ft++){const St=U[ft];if(M(St)){const xt=V(I),Xt=r.get(St).__webglTexture;i.bindTexture(xt,Xt),x(xt),i.unbindTexture()}}}const Ae=[],j=[];function Xn(I){if(I.samples>0){if(ve(I)===!1){const U=I.textures,ft=I.width,bt=I.height;let St=s.COLOR_BUFFER_BIT;const xt=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Xt=r.get(I),It=U.length>1;if(It)for(let se=0;se<U.length;se++)i.bindFramebuffer(s.FRAMEBUFFER,Xt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+se,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,Xt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+se,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,Xt.__webglMultisampledFramebuffer);const Qt=I.texture.mipmaps;Qt&&Qt.length>0?i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Xt.__webglFramebuffer[0]):i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Xt.__webglFramebuffer);for(let se=0;se<U.length;se++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(St|=s.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(St|=s.STENCIL_BUFFER_BIT)),It){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Xt.__webglColorRenderbuffer[se]);const Pt=r.get(U[se]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Pt,0)}s.blitFramebuffer(0,0,ft,bt,0,0,ft,bt,St,s.NEAREST),_===!0&&(Ae.length=0,j.length=0,Ae.push(s.COLOR_ATTACHMENT0+se),I.depthBuffer&&I.resolveDepthBuffer===!1&&(Ae.push(xt),j.push(xt),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,j)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Ae))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),It)for(let se=0;se<U.length;se++){i.bindFramebuffer(s.FRAMEBUFFER,Xt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+se,s.RENDERBUFFER,Xt.__webglColorRenderbuffer[se]);const Pt=r.get(U[se]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,Xt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+se,s.TEXTURE_2D,Pt,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Xt.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&_){const U=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[U])}}}function De(I){return Math.min(l.maxSamples,I.samples)}function ve(I){const U=r.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&U.__useRenderToTexture!==!1}function ae(I){const U=d.render.frame;v.get(I)!==U&&(v.set(I,U),I.update())}function We(I,U){const ft=I.colorSpace,bt=I.format,St=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||ft!==yo&&ft!==Tr&&(Ve.getTransfer(ft)===tn?(bt!==na||St!==ga)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ft)),U}function ee(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(g.width=I.naturalWidth||I.width,g.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(g.width=I.displayWidth,g.height=I.displayHeight):(g.width=I.width,g.height=I.height),g}this.allocateTextureUnit=ht,this.resetTextureUnits=rt,this.setTexture2D=Mt,this.setTexture2DArray=X,this.setTexture3D=st,this.setTextureCube=et,this.rebindTextures=ie,this.setupRenderTarget=ke,this.updateRenderTargetMipmap=qe,this.updateMultisampleRenderTarget=Xn,this.setupDepthRenderbuffer=fe,this.setupFrameBufferTexture=Lt,this.useMultisampledRTT=ve}function G1(s,t){function i(r,l=Tr){let c;const d=Ve.getTransfer(l);if(r===ga)return s.UNSIGNED_BYTE;if(r===Tp)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Ap)return s.UNSIGNED_SHORT_5_5_5_1;if(r===b0)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===E0)return s.BYTE;if(r===M0)return s.SHORT;if(r===Dl)return s.UNSIGNED_SHORT;if(r===bp)return s.INT;if(r===hs)return s.UNSIGNED_INT;if(r===Xa)return s.FLOAT;if(r===Ol)return s.HALF_FLOAT;if(r===T0)return s.ALPHA;if(r===A0)return s.RGB;if(r===na)return s.RGBA;if(r===Ll)return s.DEPTH_COMPONENT;if(r===Nl)return s.DEPTH_STENCIL;if(r===R0)return s.RED;if(r===Rp)return s.RED_INTEGER;if(r===w0)return s.RG;if(r===wp)return s.RG_INTEGER;if(r===Cp)return s.RGBA_INTEGER;if(r===vu||r===yu||r===Su||r===xu)if(d===tn)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===vu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===yu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Su)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===xu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===vu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===yu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Su)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===xu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===qd||r===Yd||r===jd||r===Zd)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===qd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Yd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===jd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Zd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Kd||r===Qd||r===Jd)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(r===Kd||r===Qd)return d===tn?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===Jd)return d===tn?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===$d||r===tp||r===ep||r===np||r===ip||r===ap||r===rp||r===sp||r===op||r===lp||r===cp||r===up||r===fp||r===hp)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(r===$d)return d===tn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===tp)return d===tn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===ep)return d===tn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===np)return d===tn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===ip)return d===tn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===ap)return d===tn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===rp)return d===tn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===sp)return d===tn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===op)return d===tn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===lp)return d===tn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===cp)return d===tn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===up)return d===tn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===fp)return d===tn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===hp)return d===tn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Eu||r===dp||r===pp)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(r===Eu)return d===tn?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===dp)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===pp)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===C0||r===mp||r===gp||r===_p)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(r===Eu)return c.COMPRESSED_RED_RGTC1_EXT;if(r===mp)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===gp)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===_p)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ul?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:i}}const V1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,k1=`
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

}`;class X1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i,r){if(this.texture===null){const l=new vi,c=t.properties.get(l);c.__webglTexture=i.texture,(i.depthNear!==r.depthNear||i.depthFar!==r.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,r=new Cr({vertexShader:V1,fragmentShader:k1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new ia(new Pu(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class W1 extends ms{constructor(t,i){super();const r=this;let l=null,c=1,d=null,m="local-floor",_=1,g=null,v=null,y=null,E=null,b=null,w=null;const C=new X1,M=i.getContextAttributes();let x=null,V=null;const G=[],P=[],Y=new Te;let z=null;const k=new Wi;k.viewport=new gn;const K=new Wi;K.viewport=new gn;const F=[k,K],O=new fE;let q=null,rt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(at){let Tt=G[at];return Tt===void 0&&(Tt=new yd,G[at]=Tt),Tt.getTargetRaySpace()},this.getControllerGrip=function(at){let Tt=G[at];return Tt===void 0&&(Tt=new yd,G[at]=Tt),Tt.getGripSpace()},this.getHand=function(at){let Tt=G[at];return Tt===void 0&&(Tt=new yd,G[at]=Tt),Tt.getHandSpace()};function ht(at){const Tt=P.indexOf(at.inputSource);if(Tt===-1)return;const Lt=G[Tt];Lt!==void 0&&(Lt.update(at.inputSource,at.frame,g||d),Lt.dispatchEvent({type:at.type,data:at.inputSource}))}function _t(){l.removeEventListener("select",ht),l.removeEventListener("selectstart",ht),l.removeEventListener("selectend",ht),l.removeEventListener("squeeze",ht),l.removeEventListener("squeezestart",ht),l.removeEventListener("squeezeend",ht),l.removeEventListener("end",_t),l.removeEventListener("inputsourceschange",Mt);for(let at=0;at<G.length;at++){const Tt=P[at];Tt!==null&&(P[at]=null,G[at].disconnect(Tt))}q=null,rt=null,C.reset(),t.setRenderTarget(x),b=null,E=null,y=null,l=null,V=null,Ut.stop(),r.isPresenting=!1,t.setPixelRatio(z),t.setSize(Y.width,Y.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(at){c=at,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(at){m=at,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return g||d},this.setReferenceSpace=function(at){g=at},this.getBaseLayer=function(){return E!==null?E:b},this.getBinding=function(){return y},this.getFrame=function(){return w},this.getSession=function(){return l},this.setSession=async function(at){if(l=at,l!==null){if(x=t.getRenderTarget(),l.addEventListener("select",ht),l.addEventListener("selectstart",ht),l.addEventListener("selectend",ht),l.addEventListener("squeeze",ht),l.addEventListener("squeezestart",ht),l.addEventListener("squeezeend",ht),l.addEventListener("end",_t),l.addEventListener("inputsourceschange",Mt),M.xrCompatible!==!0&&await i.makeXRCompatible(),z=t.getPixelRatio(),t.getSize(Y),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Lt=null,Ft=null,Ot=null;M.depth&&(Ot=M.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Lt=M.stencil?Nl:Ll,Ft=M.stencil?Ul:hs);const fe={colorFormat:i.RGBA8,depthFormat:Ot,scaleFactor:c};y=new XRWebGLBinding(l,i),E=y.createProjectionLayer(fe),l.updateRenderState({layers:[E]}),t.setPixelRatio(1),t.setSize(E.textureWidth,E.textureHeight,!1),V=new ds(E.textureWidth,E.textureHeight,{format:na,type:ga,depthTexture:new V0(E.textureWidth,E.textureHeight,Ft,void 0,void 0,void 0,void 0,void 0,void 0,Lt),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1})}else{const Lt={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:c};b=new XRWebGLLayer(l,i,Lt),l.updateRenderState({baseLayer:b}),t.setPixelRatio(1),t.setSize(b.framebufferWidth,b.framebufferHeight,!1),V=new ds(b.framebufferWidth,b.framebufferHeight,{format:na,type:ga,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:b.ignoreDepthValues===!1,resolveStencilBuffer:b.ignoreDepthValues===!1})}V.isXRRenderTarget=!0,this.setFoveation(_),g=null,d=await l.requestReferenceSpace(m),Ut.setContext(l),Ut.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return C.getDepthTexture()};function Mt(at){for(let Tt=0;Tt<at.removed.length;Tt++){const Lt=at.removed[Tt],Ft=P.indexOf(Lt);Ft>=0&&(P[Ft]=null,G[Ft].disconnect(Lt))}for(let Tt=0;Tt<at.added.length;Tt++){const Lt=at.added[Tt];let Ft=P.indexOf(Lt);if(Ft===-1){for(let fe=0;fe<G.length;fe++)if(fe>=P.length){P.push(Lt),Ft=fe;break}else if(P[fe]===null){P[fe]=Lt,Ft=fe;break}if(Ft===-1)break}const Ot=G[Ft];Ot&&Ot.connect(Lt)}}const X=new ot,st=new ot;function et(at,Tt,Lt){X.setFromMatrixPosition(Tt.matrixWorld),st.setFromMatrixPosition(Lt.matrixWorld);const Ft=X.distanceTo(st),Ot=Tt.projectionMatrix.elements,fe=Lt.projectionMatrix.elements,ie=Ot[14]/(Ot[10]-1),ke=Ot[14]/(Ot[10]+1),qe=(Ot[9]+1)/Ot[5],Ae=(Ot[9]-1)/Ot[5],j=(Ot[8]-1)/Ot[0],Xn=(fe[8]+1)/fe[0],De=ie*j,ve=ie*Xn,ae=Ft/(-j+Xn),We=ae*-j;if(Tt.matrixWorld.decompose(at.position,at.quaternion,at.scale),at.translateX(We),at.translateZ(ae),at.matrixWorld.compose(at.position,at.quaternion,at.scale),at.matrixWorldInverse.copy(at.matrixWorld).invert(),Ot[10]===-1)at.projectionMatrix.copy(Tt.projectionMatrix),at.projectionMatrixInverse.copy(Tt.projectionMatrixInverse);else{const ee=ie+ae,I=ke+ae,U=De-We,ft=ve+(Ft-We),bt=qe*ke/I*ee,St=Ae*ke/I*ee;at.projectionMatrix.makePerspective(U,ft,bt,St,ee,I),at.projectionMatrixInverse.copy(at.projectionMatrix).invert()}}function Nt(at,Tt){Tt===null?at.matrixWorld.copy(at.matrix):at.matrixWorld.multiplyMatrices(Tt.matrixWorld,at.matrix),at.matrixWorldInverse.copy(at.matrixWorld).invert()}this.updateCamera=function(at){if(l===null)return;let Tt=at.near,Lt=at.far;C.texture!==null&&(C.depthNear>0&&(Tt=C.depthNear),C.depthFar>0&&(Lt=C.depthFar)),O.near=K.near=k.near=Tt,O.far=K.far=k.far=Lt,(q!==O.near||rt!==O.far)&&(l.updateRenderState({depthNear:O.near,depthFar:O.far}),q=O.near,rt=O.far),k.layers.mask=at.layers.mask|2,K.layers.mask=at.layers.mask|4,O.layers.mask=k.layers.mask|K.layers.mask;const Ft=at.parent,Ot=O.cameras;Nt(O,Ft);for(let fe=0;fe<Ot.length;fe++)Nt(Ot[fe],Ft);Ot.length===2?et(O,k,K):O.projectionMatrix.copy(k.projectionMatrix),B(at,O,Ft)};function B(at,Tt,Lt){Lt===null?at.matrix.copy(Tt.matrixWorld):(at.matrix.copy(Lt.matrixWorld),at.matrix.invert(),at.matrix.multiply(Tt.matrixWorld)),at.matrix.decompose(at.position,at.quaternion,at.scale),at.updateMatrixWorld(!0),at.projectionMatrix.copy(Tt.projectionMatrix),at.projectionMatrixInverse.copy(Tt.projectionMatrixInverse),at.isPerspectiveCamera&&(at.fov=vp*2*Math.atan(1/at.projectionMatrix.elements[5]),at.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(E===null&&b===null))return _},this.setFoveation=function(at){_=at,E!==null&&(E.fixedFoveation=at),b!==null&&b.fixedFoveation!==void 0&&(b.fixedFoveation=at)},this.hasDepthSensing=function(){return C.texture!==null},this.getDepthSensingMesh=function(){return C.getMesh(O)};let ct=null;function Rt(at,Tt){if(v=Tt.getViewerPose(g||d),w=Tt,v!==null){const Lt=v.views;b!==null&&(t.setRenderTargetFramebuffer(V,b.framebuffer),t.setRenderTarget(V));let Ft=!1;Lt.length!==O.cameras.length&&(O.cameras.length=0,Ft=!0);for(let ie=0;ie<Lt.length;ie++){const ke=Lt[ie];let qe=null;if(b!==null)qe=b.getViewport(ke);else{const j=y.getViewSubImage(E,ke);qe=j.viewport,ie===0&&(t.setRenderTargetTextures(V,j.colorTexture,j.depthStencilTexture),t.setRenderTarget(V))}let Ae=F[ie];Ae===void 0&&(Ae=new Wi,Ae.layers.enable(ie),Ae.viewport=new gn,F[ie]=Ae),Ae.matrix.fromArray(ke.transform.matrix),Ae.matrix.decompose(Ae.position,Ae.quaternion,Ae.scale),Ae.projectionMatrix.fromArray(ke.projectionMatrix),Ae.projectionMatrixInverse.copy(Ae.projectionMatrix).invert(),Ae.viewport.set(qe.x,qe.y,qe.width,qe.height),ie===0&&(O.matrix.copy(Ae.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Ft===!0&&O.cameras.push(Ae)}const Ot=l.enabledFeatures;if(Ot&&Ot.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&y){const ie=y.getDepthInformation(Lt[0]);ie&&ie.isValid&&ie.texture&&C.init(t,ie,l.renderState)}}for(let Lt=0;Lt<G.length;Lt++){const Ft=P[Lt],Ot=G[Lt];Ft!==null&&Ot!==void 0&&Ot.update(Ft,Tt,g||d)}ct&&ct(at,Tt),Tt.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:Tt}),w=null}const Ut=new X0;Ut.setAnimationLoop(Rt),this.setAnimationLoop=function(at){ct=at},this.dispose=function(){}}}const ss=new _a,q1=new ln;function Y1(s,t){function i(M,x){M.matrixAutoUpdate===!0&&M.updateMatrix(),x.value.copy(M.matrix)}function r(M,x){x.color.getRGB(M.fogColor.value,z0(s)),x.isFog?(M.fogNear.value=x.near,M.fogFar.value=x.far):x.isFogExp2&&(M.fogDensity.value=x.density)}function l(M,x,V,G,P){x.isMeshBasicMaterial||x.isMeshLambertMaterial?c(M,x):x.isMeshToonMaterial?(c(M,x),y(M,x)):x.isMeshPhongMaterial?(c(M,x),v(M,x)):x.isMeshStandardMaterial?(c(M,x),E(M,x),x.isMeshPhysicalMaterial&&b(M,x,P)):x.isMeshMatcapMaterial?(c(M,x),w(M,x)):x.isMeshDepthMaterial?c(M,x):x.isMeshDistanceMaterial?(c(M,x),C(M,x)):x.isMeshNormalMaterial?c(M,x):x.isLineBasicMaterial?(d(M,x),x.isLineDashedMaterial&&m(M,x)):x.isPointsMaterial?_(M,x,V,G):x.isSpriteMaterial?g(M,x):x.isShadowMaterial?(M.color.value.copy(x.color),M.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function c(M,x){M.opacity.value=x.opacity,x.color&&M.diffuse.value.copy(x.color),x.emissive&&M.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(M.map.value=x.map,i(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.bumpMap&&(M.bumpMap.value=x.bumpMap,i(x.bumpMap,M.bumpMapTransform),M.bumpScale.value=x.bumpScale,x.side===_i&&(M.bumpScale.value*=-1)),x.normalMap&&(M.normalMap.value=x.normalMap,i(x.normalMap,M.normalMapTransform),M.normalScale.value.copy(x.normalScale),x.side===_i&&M.normalScale.value.negate()),x.displacementMap&&(M.displacementMap.value=x.displacementMap,i(x.displacementMap,M.displacementMapTransform),M.displacementScale.value=x.displacementScale,M.displacementBias.value=x.displacementBias),x.emissiveMap&&(M.emissiveMap.value=x.emissiveMap,i(x.emissiveMap,M.emissiveMapTransform)),x.specularMap&&(M.specularMap.value=x.specularMap,i(x.specularMap,M.specularMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest);const V=t.get(x),G=V.envMap,P=V.envMapRotation;G&&(M.envMap.value=G,ss.copy(P),ss.x*=-1,ss.y*=-1,ss.z*=-1,G.isCubeTexture&&G.isRenderTargetTexture===!1&&(ss.y*=-1,ss.z*=-1),M.envMapRotation.value.setFromMatrix4(q1.makeRotationFromEuler(ss)),M.flipEnvMap.value=G.isCubeTexture&&G.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=x.reflectivity,M.ior.value=x.ior,M.refractionRatio.value=x.refractionRatio),x.lightMap&&(M.lightMap.value=x.lightMap,M.lightMapIntensity.value=x.lightMapIntensity,i(x.lightMap,M.lightMapTransform)),x.aoMap&&(M.aoMap.value=x.aoMap,M.aoMapIntensity.value=x.aoMapIntensity,i(x.aoMap,M.aoMapTransform))}function d(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,x.map&&(M.map.value=x.map,i(x.map,M.mapTransform))}function m(M,x){M.dashSize.value=x.dashSize,M.totalSize.value=x.dashSize+x.gapSize,M.scale.value=x.scale}function _(M,x,V,G){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.size.value=x.size*V,M.scale.value=G*.5,x.map&&(M.map.value=x.map,i(x.map,M.uvTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function g(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.rotation.value=x.rotation,x.map&&(M.map.value=x.map,i(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function v(M,x){M.specular.value.copy(x.specular),M.shininess.value=Math.max(x.shininess,1e-4)}function y(M,x){x.gradientMap&&(M.gradientMap.value=x.gradientMap)}function E(M,x){M.metalness.value=x.metalness,x.metalnessMap&&(M.metalnessMap.value=x.metalnessMap,i(x.metalnessMap,M.metalnessMapTransform)),M.roughness.value=x.roughness,x.roughnessMap&&(M.roughnessMap.value=x.roughnessMap,i(x.roughnessMap,M.roughnessMapTransform)),x.envMap&&(M.envMapIntensity.value=x.envMapIntensity)}function b(M,x,V){M.ior.value=x.ior,x.sheen>0&&(M.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),M.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(M.sheenColorMap.value=x.sheenColorMap,i(x.sheenColorMap,M.sheenColorMapTransform)),x.sheenRoughnessMap&&(M.sheenRoughnessMap.value=x.sheenRoughnessMap,i(x.sheenRoughnessMap,M.sheenRoughnessMapTransform))),x.clearcoat>0&&(M.clearcoat.value=x.clearcoat,M.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(M.clearcoatMap.value=x.clearcoatMap,i(x.clearcoatMap,M.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,i(x.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(M.clearcoatNormalMap.value=x.clearcoatNormalMap,i(x.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===_i&&M.clearcoatNormalScale.value.negate())),x.dispersion>0&&(M.dispersion.value=x.dispersion),x.iridescence>0&&(M.iridescence.value=x.iridescence,M.iridescenceIOR.value=x.iridescenceIOR,M.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(M.iridescenceMap.value=x.iridescenceMap,i(x.iridescenceMap,M.iridescenceMapTransform)),x.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=x.iridescenceThicknessMap,i(x.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),x.transmission>0&&(M.transmission.value=x.transmission,M.transmissionSamplerMap.value=V.texture,M.transmissionSamplerSize.value.set(V.width,V.height),x.transmissionMap&&(M.transmissionMap.value=x.transmissionMap,i(x.transmissionMap,M.transmissionMapTransform)),M.thickness.value=x.thickness,x.thicknessMap&&(M.thicknessMap.value=x.thicknessMap,i(x.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=x.attenuationDistance,M.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(M.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(M.anisotropyMap.value=x.anisotropyMap,i(x.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=x.specularIntensity,M.specularColor.value.copy(x.specularColor),x.specularColorMap&&(M.specularColorMap.value=x.specularColorMap,i(x.specularColorMap,M.specularColorMapTransform)),x.specularIntensityMap&&(M.specularIntensityMap.value=x.specularIntensityMap,i(x.specularIntensityMap,M.specularIntensityMapTransform))}function w(M,x){x.matcap&&(M.matcap.value=x.matcap)}function C(M,x){const V=t.get(x).light;M.referencePosition.value.setFromMatrixPosition(V.matrixWorld),M.nearDistance.value=V.shadow.camera.near,M.farDistance.value=V.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function j1(s,t,i,r){let l={},c={},d=[];const m=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function _(V,G){const P=G.program;r.uniformBlockBinding(V,P)}function g(V,G){let P=l[V.id];P===void 0&&(w(V),P=v(V),l[V.id]=P,V.addEventListener("dispose",M));const Y=G.program;r.updateUBOMapping(V,Y);const z=t.render.frame;c[V.id]!==z&&(E(V),c[V.id]=z)}function v(V){const G=y();V.__bindingPointIndex=G;const P=s.createBuffer(),Y=V.__size,z=V.usage;return s.bindBuffer(s.UNIFORM_BUFFER,P),s.bufferData(s.UNIFORM_BUFFER,Y,z),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,G,P),P}function y(){for(let V=0;V<m;V++)if(d.indexOf(V)===-1)return d.push(V),V;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function E(V){const G=l[V.id],P=V.uniforms,Y=V.__cache;s.bindBuffer(s.UNIFORM_BUFFER,G);for(let z=0,k=P.length;z<k;z++){const K=Array.isArray(P[z])?P[z]:[P[z]];for(let F=0,O=K.length;F<O;F++){const q=K[F];if(b(q,z,F,Y)===!0){const rt=q.__offset,ht=Array.isArray(q.value)?q.value:[q.value];let _t=0;for(let Mt=0;Mt<ht.length;Mt++){const X=ht[Mt],st=C(X);typeof X=="number"||typeof X=="boolean"?(q.__data[0]=X,s.bufferSubData(s.UNIFORM_BUFFER,rt+_t,q.__data)):X.isMatrix3?(q.__data[0]=X.elements[0],q.__data[1]=X.elements[1],q.__data[2]=X.elements[2],q.__data[3]=0,q.__data[4]=X.elements[3],q.__data[5]=X.elements[4],q.__data[6]=X.elements[5],q.__data[7]=0,q.__data[8]=X.elements[6],q.__data[9]=X.elements[7],q.__data[10]=X.elements[8],q.__data[11]=0):(X.toArray(q.__data,_t),_t+=st.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,rt,q.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function b(V,G,P,Y){const z=V.value,k=G+"_"+P;if(Y[k]===void 0)return typeof z=="number"||typeof z=="boolean"?Y[k]=z:Y[k]=z.clone(),!0;{const K=Y[k];if(typeof z=="number"||typeof z=="boolean"){if(K!==z)return Y[k]=z,!0}else if(K.equals(z)===!1)return K.copy(z),!0}return!1}function w(V){const G=V.uniforms;let P=0;const Y=16;for(let k=0,K=G.length;k<K;k++){const F=Array.isArray(G[k])?G[k]:[G[k]];for(let O=0,q=F.length;O<q;O++){const rt=F[O],ht=Array.isArray(rt.value)?rt.value:[rt.value];for(let _t=0,Mt=ht.length;_t<Mt;_t++){const X=ht[_t],st=C(X),et=P%Y,Nt=et%st.boundary,B=et+Nt;P+=Nt,B!==0&&Y-B<st.storage&&(P+=Y-B),rt.__data=new Float32Array(st.storage/Float32Array.BYTES_PER_ELEMENT),rt.__offset=P,P+=st.storage}}}const z=P%Y;return z>0&&(P+=Y-z),V.__size=P,V.__cache={},this}function C(V){const G={boundary:0,storage:0};return typeof V=="number"||typeof V=="boolean"?(G.boundary=4,G.storage=4):V.isVector2?(G.boundary=8,G.storage=8):V.isVector3||V.isColor?(G.boundary=16,G.storage=12):V.isVector4?(G.boundary=16,G.storage=16):V.isMatrix3?(G.boundary=48,G.storage=48):V.isMatrix4?(G.boundary=64,G.storage=64):V.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",V),G}function M(V){const G=V.target;G.removeEventListener("dispose",M);const P=d.indexOf(G.__bindingPointIndex);d.splice(P,1),s.deleteBuffer(l[G.id]),delete l[G.id],delete c[G.id]}function x(){for(const V in l)s.deleteBuffer(l[V]);d=[],l={},c={}}return{bind:_,update:g,dispose:x}}class Z1{constructor(t={}){const{canvas:i=Mx(),context:r=null,depth:l=!0,stencil:c=!1,alpha:d=!1,antialias:m=!1,premultipliedAlpha:_=!0,preserveDrawingBuffer:g=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:y=!1,reverseDepthBuffer:E=!1}=t;this.isWebGLRenderer=!0;let b;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=r.getContextAttributes().alpha}else b=d;const w=new Uint32Array(4),C=new Int32Array(4);let M=null,x=null;const V=[],G=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Rr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let Y=!1;this._outputColorSpace=Ui;let z=0,k=0,K=null,F=-1,O=null;const q=new gn,rt=new gn;let ht=null;const _t=new ze(0);let Mt=0,X=i.width,st=i.height,et=1,Nt=null,B=null;const ct=new gn(0,0,X,st),Rt=new gn(0,0,X,st);let Ut=!1;const at=new Up;let Tt=!1,Lt=!1;const Ft=new ln,Ot=new ln,fe=new ot,ie=new gn,ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let qe=!1;function Ae(){return K===null?et:1}let j=r;function Xn(N,tt){return i.getContext(N,tt)}try{const N={alpha:!0,depth:l,stencil:c,antialias:m,premultipliedAlpha:_,preserveDrawingBuffer:g,powerPreference:v,failIfMajorPerformanceCaveat:y};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Ep}`),i.addEventListener("webglcontextlost",wt,!1),i.addEventListener("webglcontextrestored",Yt,!1),i.addEventListener("webglcontextcreationerror",Vt,!1),j===null){const tt="webgl2";if(j=Xn(tt,N),j===null)throw Xn(tt)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(N){throw console.error("THREE.WebGLRenderer: "+N.message),N}let De,ve,ae,We,ee,I,U,ft,bt,St,xt,Xt,It,Qt,se,Pt,jt,oe,ue,qt,ye,me,Wt,$;function Gt(){De=new rT(j),De.init(),me=new G1(j,De),ve=new Jb(j,De,t,me),ae=new z1(j,De),ve.reverseDepthBuffer&&E&&ae.buffers.depth.setReversed(!0),We=new lT(j),ee=new A1,I=new H1(j,De,ae,ee,ve,me,We),U=new tT(P),ft=new aT(P),bt=new pE(j),Wt=new Kb(j,bt),St=new sT(j,bt,We,Wt),xt=new uT(j,St,bt,We),ue=new cT(j,ve,I),Pt=new $b(ee),Xt=new T1(P,U,ft,De,ve,Wt,Pt),It=new Y1(P,ee),Qt=new w1,se=new O1(De),oe=new Zb(P,U,ft,ae,xt,b,_),jt=new B1(P,xt,ve),$=new j1(j,We,ve,ae),qt=new Qb(j,De,We),ye=new oT(j,De,We),We.programs=Xt.programs,P.capabilities=ve,P.extensions=De,P.properties=ee,P.renderLists=Qt,P.shadowMap=jt,P.state=ae,P.info=We}Gt();const vt=new W1(P,j);this.xr=vt,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){const N=De.get("WEBGL_lose_context");N&&N.loseContext()},this.forceContextRestore=function(){const N=De.get("WEBGL_lose_context");N&&N.restoreContext()},this.getPixelRatio=function(){return et},this.setPixelRatio=function(N){N!==void 0&&(et=N,this.setSize(X,st,!1))},this.getSize=function(N){return N.set(X,st)},this.setSize=function(N,tt,pt=!0){if(vt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=N,st=tt,i.width=Math.floor(N*et),i.height=Math.floor(tt*et),pt===!0&&(i.style.width=N+"px",i.style.height=tt+"px"),this.setViewport(0,0,N,tt)},this.getDrawingBufferSize=function(N){return N.set(X*et,st*et).floor()},this.setDrawingBufferSize=function(N,tt,pt){X=N,st=tt,et=pt,i.width=Math.floor(N*pt),i.height=Math.floor(tt*pt),this.setViewport(0,0,N,tt)},this.getCurrentViewport=function(N){return N.copy(q)},this.getViewport=function(N){return N.copy(ct)},this.setViewport=function(N,tt,pt,gt){N.isVector4?ct.set(N.x,N.y,N.z,N.w):ct.set(N,tt,pt,gt),ae.viewport(q.copy(ct).multiplyScalar(et).round())},this.getScissor=function(N){return N.copy(Rt)},this.setScissor=function(N,tt,pt,gt){N.isVector4?Rt.set(N.x,N.y,N.z,N.w):Rt.set(N,tt,pt,gt),ae.scissor(rt.copy(Rt).multiplyScalar(et).round())},this.getScissorTest=function(){return Ut},this.setScissorTest=function(N){ae.setScissorTest(Ut=N)},this.setOpaqueSort=function(N){Nt=N},this.setTransparentSort=function(N){B=N},this.getClearColor=function(N){return N.copy(oe.getClearColor())},this.setClearColor=function(){oe.setClearColor(...arguments)},this.getClearAlpha=function(){return oe.getClearAlpha()},this.setClearAlpha=function(){oe.setClearAlpha(...arguments)},this.clear=function(N=!0,tt=!0,pt=!0){let gt=0;if(N){let it=!1;if(K!==null){const Ct=K.texture.format;it=Ct===Cp||Ct===wp||Ct===Rp}if(it){const Ct=K.texture.type,zt=Ct===ga||Ct===hs||Ct===Dl||Ct===Ul||Ct===Tp||Ct===Ap,Ht=oe.getClearColor(),Zt=oe.getClearAlpha(),de=Ht.r,le=Ht.g,ne=Ht.b;zt?(w[0]=de,w[1]=le,w[2]=ne,w[3]=Zt,j.clearBufferuiv(j.COLOR,0,w)):(C[0]=de,C[1]=le,C[2]=ne,C[3]=Zt,j.clearBufferiv(j.COLOR,0,C))}else gt|=j.COLOR_BUFFER_BIT}tt&&(gt|=j.DEPTH_BUFFER_BIT),pt&&(gt|=j.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),j.clear(gt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",wt,!1),i.removeEventListener("webglcontextrestored",Yt,!1),i.removeEventListener("webglcontextcreationerror",Vt,!1),oe.dispose(),Qt.dispose(),se.dispose(),ee.dispose(),U.dispose(),ft.dispose(),xt.dispose(),Wt.dispose(),$.dispose(),Xt.dispose(),vt.dispose(),vt.removeEventListener("sessionstart",_n),vt.removeEventListener("sessionend",Rn),Qn.stop()};function wt(N){N.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),Y=!0}function Yt(){console.log("THREE.WebGLRenderer: Context Restored."),Y=!1;const N=We.autoReset,tt=jt.enabled,pt=jt.autoUpdate,gt=jt.needsUpdate,it=jt.type;Gt(),We.autoReset=N,jt.enabled=tt,jt.autoUpdate=pt,jt.needsUpdate=gt,jt.type=it}function Vt(N){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",N.statusMessage)}function ge(N){const tt=N.target;tt.removeEventListener("dispose",ge),R(tt)}function R(N){cn(N),ee.remove(N)}function cn(N){const tt=ee.get(N).programs;tt!==void 0&&(tt.forEach(function(pt){Xt.releaseProgram(pt)}),N.isShaderMaterial&&Xt.releaseShaderCache(N))}this.renderBufferDirect=function(N,tt,pt,gt,it,Ct){tt===null&&(tt=ke);const zt=it.isMesh&&it.matrixWorld.determinant()<0,Ht=ya(N,tt,pt,gt,it);ae.setMaterial(gt,zt);let Zt=pt.index,de=1;if(gt.wireframe===!0){if(Zt=St.getWireframeAttribute(pt),Zt===void 0)return;de=2}const le=pt.drawRange,ne=pt.attributes.position;let Re=le.start*de,Be=(le.start+le.count)*de;Ct!==null&&(Re=Math.max(Re,Ct.start*de),Be=Math.min(Be,(Ct.start+Ct.count)*de)),Zt!==null?(Re=Math.max(Re,0),Be=Math.min(Be,Zt.count)):ne!=null&&(Re=Math.max(Re,0),Be=Math.min(Be,ne.count));const rn=Be-Re;if(rn<0||rn===1/0)return;Wt.setup(it,gt,Ht,pt,Zt);let Le,Ne=qt;if(Zt!==null&&(Le=bt.get(Zt),Ne=ye,Ne.setIndex(Le)),it.isMesh)gt.wireframe===!0?(ae.setLineWidth(gt.wireframeLinewidth*Ae()),Ne.setMode(j.LINES)):Ne.setMode(j.TRIANGLES);else if(it.isLine){let ce=gt.linewidth;ce===void 0&&(ce=1),ae.setLineWidth(ce*Ae()),it.isLineSegments?Ne.setMode(j.LINES):it.isLineLoop?Ne.setMode(j.LINE_LOOP):Ne.setMode(j.LINE_STRIP)}else it.isPoints?Ne.setMode(j.POINTS):it.isSprite&&Ne.setMode(j.TRIANGLES);if(it.isBatchedMesh)if(it._multiDrawInstances!==null)bu("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ne.renderMultiDrawInstances(it._multiDrawStarts,it._multiDrawCounts,it._multiDrawCount,it._multiDrawInstances);else if(De.get("WEBGL_multi_draw"))Ne.renderMultiDraw(it._multiDrawStarts,it._multiDrawCounts,it._multiDrawCount);else{const ce=it._multiDrawStarts,sn=it._multiDrawCounts,Ie=it._multiDrawCount,Cn=Zt?bt.get(Zt).bytesPerElement:1,sa=ee.get(gt).currentProgram.getUniforms();for(let Ye=0;Ye<Ie;Ye++)sa.setValue(j,"_gl_DrawID",Ye),Ne.render(ce[Ye]/Cn,sn[Ye])}else if(it.isInstancedMesh)Ne.renderInstances(Re,rn,it.count);else if(pt.isInstancedBufferGeometry){const ce=pt._maxInstanceCount!==void 0?pt._maxInstanceCount:1/0,sn=Math.min(pt.instanceCount,ce);Ne.renderInstances(Re,rn,sn)}else Ne.render(Re,rn)};function Se(N,tt,pt){N.transparent===!0&&N.side===ka&&N.forceSinglePass===!1?(N.side=_i,N.needsUpdate=!0,yi(N,tt,pt),N.side=wr,N.needsUpdate=!0,yi(N,tt,pt),N.side=ka):yi(N,tt,pt)}this.compile=function(N,tt,pt=null){pt===null&&(pt=N),x=se.get(pt),x.init(tt),G.push(x),pt.traverseVisible(function(it){it.isLight&&it.layers.test(tt.layers)&&(x.pushLight(it),it.castShadow&&x.pushShadow(it))}),N!==pt&&N.traverseVisible(function(it){it.isLight&&it.layers.test(tt.layers)&&(x.pushLight(it),it.castShadow&&x.pushShadow(it))}),x.setupLights();const gt=new Set;return N.traverse(function(it){if(!(it.isMesh||it.isPoints||it.isLine||it.isSprite))return;const Ct=it.material;if(Ct)if(Array.isArray(Ct))for(let zt=0;zt<Ct.length;zt++){const Ht=Ct[zt];Se(Ht,pt,it),gt.add(Ht)}else Se(Ct,pt,it),gt.add(Ct)}),x=G.pop(),gt},this.compileAsync=function(N,tt,pt=null){const gt=this.compile(N,tt,pt);return new Promise(it=>{function Ct(){if(gt.forEach(function(zt){ee.get(zt).currentProgram.isReady()&&gt.delete(zt)}),gt.size===0){it(N);return}setTimeout(Ct,10)}De.get("KHR_parallel_shader_compile")!==null?Ct():setTimeout(Ct,10)})};let ri=null;function En(N){ri&&ri(N)}function _n(){Qn.stop()}function Rn(){Qn.start()}const Qn=new X0;Qn.setAnimationLoop(En),typeof self<"u"&&Qn.setContext(self),this.setAnimationLoop=function(N){ri=N,vt.setAnimationLoop(N),N===null?Qn.stop():Qn.start()},vt.addEventListener("sessionstart",_n),vt.addEventListener("sessionend",Rn),this.render=function(N,tt){if(tt!==void 0&&tt.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(Y===!0)return;if(N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),tt.parent===null&&tt.matrixWorldAutoUpdate===!0&&tt.updateMatrixWorld(),vt.enabled===!0&&vt.isPresenting===!0&&(vt.cameraAutoUpdate===!0&&vt.updateCamera(tt),tt=vt.getCamera()),N.isScene===!0&&N.onBeforeRender(P,N,tt,K),x=se.get(N,G.length),x.init(tt),G.push(x),Ot.multiplyMatrices(tt.projectionMatrix,tt.matrixWorldInverse),at.setFromProjectionMatrix(Ot),Lt=this.localClippingEnabled,Tt=Pt.init(this.clippingPlanes,Lt),M=Qt.get(N,V.length),M.init(),V.push(M),vt.enabled===!0&&vt.isPresenting===!0){const Ct=P.xr.getDepthSensingMesh();Ct!==null&&va(Ct,tt,-1/0,P.sortObjects)}va(N,tt,0,P.sortObjects),M.finish(),P.sortObjects===!0&&M.sort(Nt,B),qe=vt.enabled===!1||vt.isPresenting===!1||vt.hasDepthSensing()===!1,qe&&oe.addToRenderList(M,N),this.info.render.frame++,Tt===!0&&Pt.beginShadows();const pt=x.state.shadowsArray;jt.render(pt,N,tt),Tt===!0&&Pt.endShadows(),this.info.autoReset===!0&&this.info.reset();const gt=M.opaque,it=M.transmissive;if(x.setupLights(),tt.isArrayCamera){const Ct=tt.cameras;if(it.length>0)for(let zt=0,Ht=Ct.length;zt<Ht;zt++){const Zt=Ct[zt];Wn(gt,it,N,Zt)}qe&&oe.render(N);for(let zt=0,Ht=Ct.length;zt<Ht;zt++){const Zt=Ct[zt];Dr(M,N,Zt,Zt.viewport)}}else it.length>0&&Wn(gt,it,N,tt),qe&&oe.render(N),Dr(M,N,tt);K!==null&&k===0&&(I.updateMultisampleRenderTarget(K),I.updateRenderTargetMipmap(K)),N.isScene===!0&&N.onAfterRender(P,N,tt),Wt.resetDefaultState(),F=-1,O=null,G.pop(),G.length>0?(x=G[G.length-1],Tt===!0&&Pt.setGlobalState(P.clippingPlanes,x.state.camera)):x=null,V.pop(),V.length>0?M=V[V.length-1]:M=null};function va(N,tt,pt,gt){if(N.visible===!1)return;if(N.layers.test(tt.layers)){if(N.isGroup)pt=N.renderOrder;else if(N.isLOD)N.autoUpdate===!0&&N.update(tt);else if(N.isLight)x.pushLight(N),N.castShadow&&x.pushShadow(N);else if(N.isSprite){if(!N.frustumCulled||at.intersectsSprite(N)){gt&&ie.setFromMatrixPosition(N.matrixWorld).applyMatrix4(Ot);const zt=xt.update(N),Ht=N.material;Ht.visible&&M.push(N,zt,Ht,pt,ie.z,null)}}else if((N.isMesh||N.isLine||N.isPoints)&&(!N.frustumCulled||at.intersectsObject(N))){const zt=xt.update(N),Ht=N.material;if(gt&&(N.boundingSphere!==void 0?(N.boundingSphere===null&&N.computeBoundingSphere(),ie.copy(N.boundingSphere.center)):(zt.boundingSphere===null&&zt.computeBoundingSphere(),ie.copy(zt.boundingSphere.center)),ie.applyMatrix4(N.matrixWorld).applyMatrix4(Ot)),Array.isArray(Ht)){const Zt=zt.groups;for(let de=0,le=Zt.length;de<le;de++){const ne=Zt[de],Re=Ht[ne.materialIndex];Re&&Re.visible&&M.push(N,zt,Re,pt,ie.z,ne)}}else Ht.visible&&M.push(N,zt,Ht,pt,ie.z,null)}}const Ct=N.children;for(let zt=0,Ht=Ct.length;zt<Ht;zt++)va(Ct[zt],tt,pt,gt)}function Dr(N,tt,pt,gt){const it=N.opaque,Ct=N.transmissive,zt=N.transparent;x.setupLightsView(pt),Tt===!0&&Pt.setGlobalState(P.clippingPlanes,pt),gt&&ae.viewport(q.copy(gt)),it.length>0&&fi(it,tt,pt),Ct.length>0&&fi(Ct,tt,pt),zt.length>0&&fi(zt,tt,pt),ae.buffers.depth.setTest(!0),ae.buffers.depth.setMask(!0),ae.buffers.color.setMask(!0),ae.setPolygonOffset(!1)}function Wn(N,tt,pt,gt){if((pt.isScene===!0?pt.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[gt.id]===void 0&&(x.state.transmissionRenderTarget[gt.id]=new ds(1,1,{generateMipmaps:!0,type:De.has("EXT_color_buffer_half_float")||De.has("EXT_color_buffer_float")?Ol:ga,minFilter:fs,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ve.workingColorSpace}));const Ct=x.state.transmissionRenderTarget[gt.id],zt=gt.viewport||q;Ct.setSize(zt.z*P.transmissionResolutionScale,zt.w*P.transmissionResolutionScale);const Ht=P.getRenderTarget();P.setRenderTarget(Ct),P.getClearColor(_t),Mt=P.getClearAlpha(),Mt<1&&P.setClearColor(16777215,.5),P.clear(),qe&&oe.render(pt);const Zt=P.toneMapping;P.toneMapping=Rr;const de=gt.viewport;if(gt.viewport!==void 0&&(gt.viewport=void 0),x.setupLightsView(gt),Tt===!0&&Pt.setGlobalState(P.clippingPlanes,gt),fi(N,pt,gt),I.updateMultisampleRenderTarget(Ct),I.updateRenderTargetMipmap(Ct),De.has("WEBGL_multisampled_render_to_texture")===!1){let le=!1;for(let ne=0,Re=tt.length;ne<Re;ne++){const Be=tt[ne],rn=Be.object,Le=Be.geometry,Ne=Be.material,ce=Be.group;if(Ne.side===ka&&rn.layers.test(gt.layers)){const sn=Ne.side;Ne.side=_i,Ne.needsUpdate=!0,Jn(rn,pt,gt,Le,Ne,ce),Ne.side=sn,Ne.needsUpdate=!0,le=!0}}le===!0&&(I.updateMultisampleRenderTarget(Ct),I.updateRenderTargetMipmap(Ct))}P.setRenderTarget(Ht),P.setClearColor(_t,Mt),de!==void 0&&(gt.viewport=de),P.toneMapping=Zt}function fi(N,tt,pt){const gt=tt.isScene===!0?tt.overrideMaterial:null;for(let it=0,Ct=N.length;it<Ct;it++){const zt=N[it],Ht=zt.object,Zt=zt.geometry,de=zt.group;let le=zt.material;le.allowOverride===!0&&gt!==null&&(le=gt),Ht.layers.test(pt.layers)&&Jn(Ht,tt,pt,Zt,le,de)}}function Jn(N,tt,pt,gt,it,Ct){N.onBeforeRender(P,tt,pt,gt,it,Ct),N.modelViewMatrix.multiplyMatrices(pt.matrixWorldInverse,N.matrixWorld),N.normalMatrix.getNormalMatrix(N.modelViewMatrix),it.onBeforeRender(P,tt,pt,gt,N,Ct),it.transparent===!0&&it.side===ka&&it.forceSinglePass===!1?(it.side=_i,it.needsUpdate=!0,P.renderBufferDirect(pt,tt,gt,it,N,Ct),it.side=wr,it.needsUpdate=!0,P.renderBufferDirect(pt,tt,gt,it,N,Ct),it.side=ka):P.renderBufferDirect(pt,tt,gt,it,N,Ct),N.onAfterRender(P,tt,pt,gt,it,Ct)}function yi(N,tt,pt){tt.isScene!==!0&&(tt=ke);const gt=ee.get(N),it=x.state.lights,Ct=x.state.shadowsArray,zt=it.state.version,Ht=Xt.getParameters(N,it.state,Ct,tt,pt),Zt=Xt.getProgramCacheKey(Ht);let de=gt.programs;gt.environment=N.isMeshStandardMaterial?tt.environment:null,gt.fog=tt.fog,gt.envMap=(N.isMeshStandardMaterial?ft:U).get(N.envMap||gt.environment),gt.envMapRotation=gt.environment!==null&&N.envMap===null?tt.environmentRotation:N.envMapRotation,de===void 0&&(N.addEventListener("dispose",ge),de=new Map,gt.programs=de);let le=de.get(Zt);if(le!==void 0){if(gt.currentProgram===le&&gt.lightsStateVersion===zt)return hn(N,Ht),le}else Ht.uniforms=Xt.getUniforms(N),N.onBeforeCompile(Ht,P),le=Xt.acquireProgram(Ht,Zt),de.set(Zt,le),gt.uniforms=Ht.uniforms;const ne=gt.uniforms;return(!N.isShaderMaterial&&!N.isRawShaderMaterial||N.clipping===!0)&&(ne.clippingPlanes=Pt.uniform),hn(N,Ht),gt.needsLights=un(N),gt.lightsStateVersion=zt,gt.needsLights&&(ne.ambientLightColor.value=it.state.ambient,ne.lightProbe.value=it.state.probe,ne.directionalLights.value=it.state.directional,ne.directionalLightShadows.value=it.state.directionalShadow,ne.spotLights.value=it.state.spot,ne.spotLightShadows.value=it.state.spotShadow,ne.rectAreaLights.value=it.state.rectArea,ne.ltc_1.value=it.state.rectAreaLTC1,ne.ltc_2.value=it.state.rectAreaLTC2,ne.pointLights.value=it.state.point,ne.pointLightShadows.value=it.state.pointShadow,ne.hemisphereLights.value=it.state.hemi,ne.directionalShadowMap.value=it.state.directionalShadowMap,ne.directionalShadowMatrix.value=it.state.directionalShadowMatrix,ne.spotShadowMap.value=it.state.spotShadowMap,ne.spotLightMatrix.value=it.state.spotLightMatrix,ne.spotLightMap.value=it.state.spotLightMap,ne.pointShadowMap.value=it.state.pointShadowMap,ne.pointShadowMatrix.value=it.state.pointShadowMatrix),gt.currentProgram=le,gt.uniformsList=null,le}function qi(N){if(N.uniformsList===null){const tt=N.currentProgram.getUniforms();N.uniformsList=Au.seqWithValue(tt.seq,N.uniforms)}return N.uniformsList}function hn(N,tt){const pt=ee.get(N);pt.outputColorSpace=tt.outputColorSpace,pt.batching=tt.batching,pt.batchingColor=tt.batchingColor,pt.instancing=tt.instancing,pt.instancingColor=tt.instancingColor,pt.instancingMorph=tt.instancingMorph,pt.skinning=tt.skinning,pt.morphTargets=tt.morphTargets,pt.morphNormals=tt.morphNormals,pt.morphColors=tt.morphColors,pt.morphTargetsCount=tt.morphTargetsCount,pt.numClippingPlanes=tt.numClippingPlanes,pt.numIntersection=tt.numClipIntersection,pt.vertexAlphas=tt.vertexAlphas,pt.vertexTangents=tt.vertexTangents,pt.toneMapping=tt.toneMapping}function ya(N,tt,pt,gt,it){tt.isScene!==!0&&(tt=ke),I.resetTextureUnits();const Ct=tt.fog,zt=gt.isMeshStandardMaterial?tt.environment:null,Ht=K===null?P.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:yo,Zt=(gt.isMeshStandardMaterial?ft:U).get(gt.envMap||zt),de=gt.vertexColors===!0&&!!pt.attributes.color&&pt.attributes.color.itemSize===4,le=!!pt.attributes.tangent&&(!!gt.normalMap||gt.anisotropy>0),ne=!!pt.morphAttributes.position,Re=!!pt.morphAttributes.normal,Be=!!pt.morphAttributes.color;let rn=Rr;gt.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(rn=P.toneMapping);const Le=pt.morphAttributes.position||pt.morphAttributes.normal||pt.morphAttributes.color,Ne=Le!==void 0?Le.length:0,ce=ee.get(gt),sn=x.state.lights;if(Tt===!0&&(Lt===!0||N!==O)){const yn=N===O&&gt.id===F;Pt.setState(gt,N,yn)}let Ie=!1;gt.version===ce.__version?(ce.needsLights&&ce.lightsStateVersion!==sn.state.version||ce.outputColorSpace!==Ht||it.isBatchedMesh&&ce.batching===!1||!it.isBatchedMesh&&ce.batching===!0||it.isBatchedMesh&&ce.batchingColor===!0&&it.colorTexture===null||it.isBatchedMesh&&ce.batchingColor===!1&&it.colorTexture!==null||it.isInstancedMesh&&ce.instancing===!1||!it.isInstancedMesh&&ce.instancing===!0||it.isSkinnedMesh&&ce.skinning===!1||!it.isSkinnedMesh&&ce.skinning===!0||it.isInstancedMesh&&ce.instancingColor===!0&&it.instanceColor===null||it.isInstancedMesh&&ce.instancingColor===!1&&it.instanceColor!==null||it.isInstancedMesh&&ce.instancingMorph===!0&&it.morphTexture===null||it.isInstancedMesh&&ce.instancingMorph===!1&&it.morphTexture!==null||ce.envMap!==Zt||gt.fog===!0&&ce.fog!==Ct||ce.numClippingPlanes!==void 0&&(ce.numClippingPlanes!==Pt.numPlanes||ce.numIntersection!==Pt.numIntersection)||ce.vertexAlphas!==de||ce.vertexTangents!==le||ce.morphTargets!==ne||ce.morphNormals!==Re||ce.morphColors!==Be||ce.toneMapping!==rn||ce.morphTargetsCount!==Ne)&&(Ie=!0):(Ie=!0,ce.__version=gt.version);let Cn=ce.currentProgram;Ie===!0&&(Cn=yi(gt,tt,it));let sa=!1,Ye=!1,Li=!1;const je=Cn.getUniforms(),Fn=ce.uniforms;if(ae.useProgram(Cn.program)&&(sa=!0,Ye=!0,Li=!0),gt.id!==F&&(F=gt.id,Ye=!0),sa||O!==N){ae.buffers.depth.getReversed()?(Ft.copy(N.projectionMatrix),Tx(Ft),Ax(Ft),je.setValue(j,"projectionMatrix",Ft)):je.setValue(j,"projectionMatrix",N.projectionMatrix),je.setValue(j,"viewMatrix",N.matrixWorldInverse);const Dn=je.map.cameraPosition;Dn!==void 0&&Dn.setValue(j,fe.setFromMatrixPosition(N.matrixWorld)),ve.logarithmicDepthBuffer&&je.setValue(j,"logDepthBufFC",2/(Math.log(N.far+1)/Math.LN2)),(gt.isMeshPhongMaterial||gt.isMeshToonMaterial||gt.isMeshLambertMaterial||gt.isMeshBasicMaterial||gt.isMeshStandardMaterial||gt.isShaderMaterial)&&je.setValue(j,"isOrthographic",N.isOrthographicCamera===!0),O!==N&&(O=N,Ye=!0,Li=!0)}if(it.isSkinnedMesh){je.setOptional(j,it,"bindMatrix"),je.setOptional(j,it,"bindMatrixInverse");const yn=it.skeleton;yn&&(yn.boneTexture===null&&yn.computeBoneTexture(),je.setValue(j,"boneTexture",yn.boneTexture,I))}it.isBatchedMesh&&(je.setOptional(j,it,"batchingTexture"),je.setValue(j,"batchingTexture",it._matricesTexture,I),je.setOptional(j,it,"batchingIdTexture"),je.setValue(j,"batchingIdTexture",it._indirectTexture,I),je.setOptional(j,it,"batchingColorTexture"),it._colorsTexture!==null&&je.setValue(j,"batchingColorTexture",it._colorsTexture,I));const vn=pt.morphAttributes;if((vn.position!==void 0||vn.normal!==void 0||vn.color!==void 0)&&ue.update(it,pt,Cn),(Ye||ce.receiveShadow!==it.receiveShadow)&&(ce.receiveShadow=it.receiveShadow,je.setValue(j,"receiveShadow",it.receiveShadow)),gt.isMeshGouraudMaterial&&gt.envMap!==null&&(Fn.envMap.value=Zt,Fn.flipEnvMap.value=Zt.isCubeTexture&&Zt.isRenderTargetTexture===!1?-1:1),gt.isMeshStandardMaterial&&gt.envMap===null&&tt.environment!==null&&(Fn.envMapIntensity.value=tt.environmentIntensity),Ye&&(je.setValue(j,"toneMappingExposure",P.toneMappingExposure),ce.needsLights&&wn(Fn,Li),Ct&&gt.fog===!0&&It.refreshFogUniforms(Fn,Ct),It.refreshMaterialUniforms(Fn,gt,et,st,x.state.transmissionRenderTarget[N.id]),Au.upload(j,qi(ce),Fn,I)),gt.isShaderMaterial&&gt.uniformsNeedUpdate===!0&&(Au.upload(j,qi(ce),Fn,I),gt.uniformsNeedUpdate=!1),gt.isSpriteMaterial&&je.setValue(j,"center",it.center),je.setValue(j,"modelViewMatrix",it.modelViewMatrix),je.setValue(j,"normalMatrix",it.normalMatrix),je.setValue(j,"modelMatrix",it.matrixWorld),gt.isShaderMaterial||gt.isRawShaderMaterial){const yn=gt.uniformsGroups;for(let Dn=0,Ni=yn.length;Dn<Ni;Dn++){const ji=yn[Dn];$.update(ji,Cn),$.bind(ji,Cn)}}return Cn}function wn(N,tt){N.ambientLightColor.needsUpdate=tt,N.lightProbe.needsUpdate=tt,N.directionalLights.needsUpdate=tt,N.directionalLightShadows.needsUpdate=tt,N.pointLights.needsUpdate=tt,N.pointLightShadows.needsUpdate=tt,N.spotLights.needsUpdate=tt,N.spotLightShadows.needsUpdate=tt,N.rectAreaLights.needsUpdate=tt,N.hemisphereLights.needsUpdate=tt}function un(N){return N.isMeshLambertMaterial||N.isMeshToonMaterial||N.isMeshPhongMaterial||N.isMeshStandardMaterial||N.isShadowMaterial||N.isShaderMaterial&&N.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return K},this.setRenderTargetTextures=function(N,tt,pt){const gt=ee.get(N);gt.__autoAllocateDepthBuffer=N.resolveDepthBuffer===!1,gt.__autoAllocateDepthBuffer===!1&&(gt.__useRenderToTexture=!1),ee.get(N.texture).__webglTexture=tt,ee.get(N.depthTexture).__webglTexture=gt.__autoAllocateDepthBuffer?void 0:pt,gt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(N,tt){const pt=ee.get(N);pt.__webglFramebuffer=tt,pt.__useDefaultFramebuffer=tt===void 0};const gs=j.createFramebuffer();this.setRenderTarget=function(N,tt=0,pt=0){K=N,z=tt,k=pt;let gt=!0,it=null,Ct=!1,zt=!1;if(N){const Zt=ee.get(N);if(Zt.__useDefaultFramebuffer!==void 0)ae.bindFramebuffer(j.FRAMEBUFFER,null),gt=!1;else if(Zt.__webglFramebuffer===void 0)I.setupRenderTarget(N);else if(Zt.__hasExternalTextures)I.rebindTextures(N,ee.get(N.texture).__webglTexture,ee.get(N.depthTexture).__webglTexture);else if(N.depthBuffer){const ne=N.depthTexture;if(Zt.__boundDepthTexture!==ne){if(ne!==null&&ee.has(ne)&&(N.width!==ne.image.width||N.height!==ne.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(N)}}const de=N.texture;(de.isData3DTexture||de.isDataArrayTexture||de.isCompressedArrayTexture)&&(zt=!0);const le=ee.get(N).__webglFramebuffer;N.isWebGLCubeRenderTarget?(Array.isArray(le[tt])?it=le[tt][pt]:it=le[tt],Ct=!0):N.samples>0&&I.useMultisampledRTT(N)===!1?it=ee.get(N).__webglMultisampledFramebuffer:Array.isArray(le)?it=le[pt]:it=le,q.copy(N.viewport),rt.copy(N.scissor),ht=N.scissorTest}else q.copy(ct).multiplyScalar(et).floor(),rt.copy(Rt).multiplyScalar(et).floor(),ht=Ut;if(pt!==0&&(it=gs),ae.bindFramebuffer(j.FRAMEBUFFER,it)&&gt&&ae.drawBuffers(N,it),ae.viewport(q),ae.scissor(rt),ae.setScissorTest(ht),Ct){const Zt=ee.get(N.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Zt.__webglTexture,pt)}else if(zt){const Zt=ee.get(N.texture),de=tt;j.framebufferTextureLayer(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,Zt.__webglTexture,pt,de)}else if(N!==null&&pt!==0){const Zt=ee.get(N.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,Zt.__webglTexture,pt)}F=-1},this.readRenderTargetPixels=function(N,tt,pt,gt,it,Ct,zt){if(!(N&&N.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ht=ee.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&zt!==void 0&&(Ht=Ht[zt]),Ht){ae.bindFramebuffer(j.FRAMEBUFFER,Ht);try{const Zt=N.texture,de=Zt.format,le=Zt.type;if(!ve.textureFormatReadable(de)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ve.textureTypeReadable(le)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}tt>=0&&tt<=N.width-gt&&pt>=0&&pt<=N.height-it&&j.readPixels(tt,pt,gt,it,me.convert(de),me.convert(le),Ct)}finally{const Zt=K!==null?ee.get(K).__webglFramebuffer:null;ae.bindFramebuffer(j.FRAMEBUFFER,Zt)}}},this.readRenderTargetPixelsAsync=async function(N,tt,pt,gt,it,Ct,zt){if(!(N&&N.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ht=ee.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&zt!==void 0&&(Ht=Ht[zt]),Ht)if(tt>=0&&tt<=N.width-gt&&pt>=0&&pt<=N.height-it){ae.bindFramebuffer(j.FRAMEBUFFER,Ht);const Zt=N.texture,de=Zt.format,le=Zt.type;if(!ve.textureFormatReadable(de))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ve.textureTypeReadable(le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ne=j.createBuffer();j.bindBuffer(j.PIXEL_PACK_BUFFER,ne),j.bufferData(j.PIXEL_PACK_BUFFER,Ct.byteLength,j.STREAM_READ),j.readPixels(tt,pt,gt,it,me.convert(de),me.convert(le),0);const Re=K!==null?ee.get(K).__webglFramebuffer:null;ae.bindFramebuffer(j.FRAMEBUFFER,Re);const Be=j.fenceSync(j.SYNC_GPU_COMMANDS_COMPLETE,0);return j.flush(),await bx(j,Be,4),j.bindBuffer(j.PIXEL_PACK_BUFFER,ne),j.getBufferSubData(j.PIXEL_PACK_BUFFER,0,Ct),j.deleteBuffer(ne),j.deleteSync(Be),Ct}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(N,tt=null,pt=0){const gt=Math.pow(2,-pt),it=Math.floor(N.image.width*gt),Ct=Math.floor(N.image.height*gt),zt=tt!==null?tt.x:0,Ht=tt!==null?tt.y:0;I.setTexture2D(N,0),j.copyTexSubImage2D(j.TEXTURE_2D,pt,0,0,zt,Ht,it,Ct),ae.unbindTexture()};const Si=j.createFramebuffer(),Yi=j.createFramebuffer();this.copyTextureToTexture=function(N,tt,pt=null,gt=null,it=0,Ct=null){Ct===null&&(it!==0?(bu("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ct=it,it=0):Ct=0);let zt,Ht,Zt,de,le,ne,Re,Be,rn;const Le=N.isCompressedTexture?N.mipmaps[Ct]:N.image;if(pt!==null)zt=pt.max.x-pt.min.x,Ht=pt.max.y-pt.min.y,Zt=pt.isBox3?pt.max.z-pt.min.z:1,de=pt.min.x,le=pt.min.y,ne=pt.isBox3?pt.min.z:0;else{const vn=Math.pow(2,-it);zt=Math.floor(Le.width*vn),Ht=Math.floor(Le.height*vn),N.isDataArrayTexture?Zt=Le.depth:N.isData3DTexture?Zt=Math.floor(Le.depth*vn):Zt=1,de=0,le=0,ne=0}gt!==null?(Re=gt.x,Be=gt.y,rn=gt.z):(Re=0,Be=0,rn=0);const Ne=me.convert(tt.format),ce=me.convert(tt.type);let sn;tt.isData3DTexture?(I.setTexture3D(tt,0),sn=j.TEXTURE_3D):tt.isDataArrayTexture||tt.isCompressedArrayTexture?(I.setTexture2DArray(tt,0),sn=j.TEXTURE_2D_ARRAY):(I.setTexture2D(tt,0),sn=j.TEXTURE_2D),j.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,tt.flipY),j.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,tt.premultiplyAlpha),j.pixelStorei(j.UNPACK_ALIGNMENT,tt.unpackAlignment);const Ie=j.getParameter(j.UNPACK_ROW_LENGTH),Cn=j.getParameter(j.UNPACK_IMAGE_HEIGHT),sa=j.getParameter(j.UNPACK_SKIP_PIXELS),Ye=j.getParameter(j.UNPACK_SKIP_ROWS),Li=j.getParameter(j.UNPACK_SKIP_IMAGES);j.pixelStorei(j.UNPACK_ROW_LENGTH,Le.width),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,Le.height),j.pixelStorei(j.UNPACK_SKIP_PIXELS,de),j.pixelStorei(j.UNPACK_SKIP_ROWS,le),j.pixelStorei(j.UNPACK_SKIP_IMAGES,ne);const je=N.isDataArrayTexture||N.isData3DTexture,Fn=tt.isDataArrayTexture||tt.isData3DTexture;if(N.isDepthTexture){const vn=ee.get(N),yn=ee.get(tt),Dn=ee.get(vn.__renderTarget),Ni=ee.get(yn.__renderTarget);ae.bindFramebuffer(j.READ_FRAMEBUFFER,Dn.__webglFramebuffer),ae.bindFramebuffer(j.DRAW_FRAMEBUFFER,Ni.__webglFramebuffer);for(let ji=0;ji<Zt;ji++)je&&(j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,ee.get(N).__webglTexture,it,ne+ji),j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,ee.get(tt).__webglTexture,Ct,rn+ji)),j.blitFramebuffer(de,le,zt,Ht,Re,Be,zt,Ht,j.DEPTH_BUFFER_BIT,j.NEAREST);ae.bindFramebuffer(j.READ_FRAMEBUFFER,null),ae.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else if(it!==0||N.isRenderTargetTexture||ee.has(N)){const vn=ee.get(N),yn=ee.get(tt);ae.bindFramebuffer(j.READ_FRAMEBUFFER,Si),ae.bindFramebuffer(j.DRAW_FRAMEBUFFER,Yi);for(let Dn=0;Dn<Zt;Dn++)je?j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,vn.__webglTexture,it,ne+Dn):j.framebufferTexture2D(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,vn.__webglTexture,it),Fn?j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,yn.__webglTexture,Ct,rn+Dn):j.framebufferTexture2D(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,yn.__webglTexture,Ct),it!==0?j.blitFramebuffer(de,le,zt,Ht,Re,Be,zt,Ht,j.COLOR_BUFFER_BIT,j.NEAREST):Fn?j.copyTexSubImage3D(sn,Ct,Re,Be,rn+Dn,de,le,zt,Ht):j.copyTexSubImage2D(sn,Ct,Re,Be,de,le,zt,Ht);ae.bindFramebuffer(j.READ_FRAMEBUFFER,null),ae.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else Fn?N.isDataTexture||N.isData3DTexture?j.texSubImage3D(sn,Ct,Re,Be,rn,zt,Ht,Zt,Ne,ce,Le.data):tt.isCompressedArrayTexture?j.compressedTexSubImage3D(sn,Ct,Re,Be,rn,zt,Ht,Zt,Ne,Le.data):j.texSubImage3D(sn,Ct,Re,Be,rn,zt,Ht,Zt,Ne,ce,Le):N.isDataTexture?j.texSubImage2D(j.TEXTURE_2D,Ct,Re,Be,zt,Ht,Ne,ce,Le.data):N.isCompressedTexture?j.compressedTexSubImage2D(j.TEXTURE_2D,Ct,Re,Be,Le.width,Le.height,Ne,Le.data):j.texSubImage2D(j.TEXTURE_2D,Ct,Re,Be,zt,Ht,Ne,ce,Le);j.pixelStorei(j.UNPACK_ROW_LENGTH,Ie),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,Cn),j.pixelStorei(j.UNPACK_SKIP_PIXELS,sa),j.pixelStorei(j.UNPACK_SKIP_ROWS,Ye),j.pixelStorei(j.UNPACK_SKIP_IMAGES,Li),Ct===0&&tt.generateMipmaps&&j.generateMipmap(sn),ae.unbindTexture()},this.copyTextureToTexture3D=function(N,tt,pt=null,gt=null,it=0){return bu('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(N,tt,pt,gt,it)},this.initRenderTarget=function(N){ee.get(N).__webglFramebuffer===void 0&&I.setupRenderTarget(N)},this.initTexture=function(N){N.isCubeTexture?I.setTextureCube(N,0):N.isData3DTexture?I.setTexture3D(N,0):N.isDataArrayTexture||N.isCompressedArrayTexture?I.setTexture2DArray(N,0):I.setTexture2D(N,0),ae.unbindTexture()},this.resetState=function(){z=0,k=0,K=null,ae.reset(),Wt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Ve._getDrawingBufferColorSpace(t),i.unpackColorSpace=Ve._getUnpackColorSpace()}}const K1=/^[og]\s*(.+)?/,Q1=/^mtllib /,J1=/^usemtl /,$1=/^usemap /,o0=/\s+/,l0=new ot,Dd=new ot,c0=new ot,u0=new ot,Xi=new ot,gu=new ze;function tA(){const s={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(t,i){if(this.object&&this.object.fromDeclaration===!1){this.object.name=t,this.object.fromDeclaration=i!==!1;return}const r=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:t||"",fromDeclaration:i!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(l,c){const d=this._finalize(!1);d&&(d.inherited||d.groupCount<=0)&&this.materials.splice(d.index,1);const m={index:this.materials.length,name:l||"",mtllib:Array.isArray(c)&&c.length>0?c[c.length-1]:"",smooth:d!==void 0?d.smooth:this.smooth,groupStart:d!==void 0?d.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(_){const g={index:typeof _=="number"?_:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return g.clone=this.clone.bind(g),g}};return this.materials.push(m),m},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(l){const c=this.currentMaterial();if(c&&c.groupEnd===-1&&(c.groupEnd=this.geometry.vertices.length/3,c.groupCount=c.groupEnd-c.groupStart,c.inherited=!1),l&&this.materials.length>1)for(let d=this.materials.length-1;d>=0;d--)this.materials[d].groupCount<=0&&this.materials.splice(d,1);return l&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),c}},r&&r.name&&typeof r.clone=="function"){const l=r.clone(0);l.inherited=!0,this.object.materials.push(l)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(t,i){const r=parseInt(t,10);return(r>=0?r-1:r+i/3)*3},parseNormalIndex:function(t,i){const r=parseInt(t,10);return(r>=0?r-1:r+i/3)*3},parseUVIndex:function(t,i){const r=parseInt(t,10);return(r>=0?r-1:r+i/2)*2},addVertex:function(t,i,r){const l=this.vertices,c=this.object.geometry.vertices;c.push(l[t+0],l[t+1],l[t+2]),c.push(l[i+0],l[i+1],l[i+2]),c.push(l[r+0],l[r+1],l[r+2])},addVertexPoint:function(t){const i=this.vertices;this.object.geometry.vertices.push(i[t+0],i[t+1],i[t+2])},addVertexLine:function(t){const i=this.vertices;this.object.geometry.vertices.push(i[t+0],i[t+1],i[t+2])},addNormal:function(t,i,r){const l=this.normals,c=this.object.geometry.normals;c.push(l[t+0],l[t+1],l[t+2]),c.push(l[i+0],l[i+1],l[i+2]),c.push(l[r+0],l[r+1],l[r+2])},addFaceNormal:function(t,i,r){const l=this.vertices,c=this.object.geometry.normals;l0.fromArray(l,t),Dd.fromArray(l,i),c0.fromArray(l,r),Xi.subVectors(c0,Dd),u0.subVectors(l0,Dd),Xi.cross(u0),Xi.normalize(),c.push(Xi.x,Xi.y,Xi.z),c.push(Xi.x,Xi.y,Xi.z),c.push(Xi.x,Xi.y,Xi.z)},addColor:function(t,i,r){const l=this.colors,c=this.object.geometry.colors;l[t]!==void 0&&c.push(l[t+0],l[t+1],l[t+2]),l[i]!==void 0&&c.push(l[i+0],l[i+1],l[i+2]),l[r]!==void 0&&c.push(l[r+0],l[r+1],l[r+2])},addUV:function(t,i,r){const l=this.uvs,c=this.object.geometry.uvs;c.push(l[t+0],l[t+1]),c.push(l[i+0],l[i+1]),c.push(l[r+0],l[r+1])},addDefaultUV:function(){const t=this.object.geometry.uvs;t.push(0,0),t.push(0,0),t.push(0,0)},addUVLine:function(t){const i=this.uvs;this.object.geometry.uvs.push(i[t+0],i[t+1])},addFace:function(t,i,r,l,c,d,m,_,g){const v=this.vertices.length;let y=this.parseVertexIndex(t,v),E=this.parseVertexIndex(i,v),b=this.parseVertexIndex(r,v);if(this.addVertex(y,E,b),this.addColor(y,E,b),m!==void 0&&m!==""){const w=this.normals.length;y=this.parseNormalIndex(m,w),E=this.parseNormalIndex(_,w),b=this.parseNormalIndex(g,w),this.addNormal(y,E,b)}else this.addFaceNormal(y,E,b);if(l!==void 0&&l!==""){const w=this.uvs.length;y=this.parseUVIndex(l,w),E=this.parseUVIndex(c,w),b=this.parseUVIndex(d,w),this.addUV(y,E,b),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(t){this.object.geometry.type="Points";const i=this.vertices.length;for(let r=0,l=t.length;r<l;r++){const c=this.parseVertexIndex(t[r],i);this.addVertexPoint(c),this.addColor(c)}},addLineGeometry:function(t,i){this.object.geometry.type="Line";const r=this.vertices.length,l=this.uvs.length;for(let c=0,d=t.length;c<d;c++)this.addVertexLine(this.parseVertexIndex(t[c],r));for(let c=0,d=i.length;c<d;c++)this.addUVLine(this.parseUVIndex(i[c],l))}};return s.startObject("",!1),s}class eA extends Lp{constructor(t){super(t),this.materials=null}load(t,i,r,l){const c=this,d=new oE(this.manager);d.setPath(this.path),d.setRequestHeader(this.requestHeader),d.setWithCredentials(this.withCredentials),d.load(t,function(m){try{i(c.parse(m))}catch(_){l?l(_):console.error(_),c.manager.itemError(t)}},r,l)}setMaterials(t){return this.materials=t,this}parse(t){const i=new tA;t.indexOf(`\r
`)!==-1&&(t=t.replace(/\r\n/g,`
`)),t.indexOf(`\\
`)!==-1&&(t=t.replace(/\\\n/g,""));const r=t.split(`
`);let l=[];for(let m=0,_=r.length;m<_;m++){const g=r[m].trimStart();if(g.length===0)continue;const v=g.charAt(0);if(v!=="#")if(v==="v"){const y=g.split(o0);switch(y[0]){case"v":i.vertices.push(parseFloat(y[1]),parseFloat(y[2]),parseFloat(y[3])),y.length>=7?(gu.setRGB(parseFloat(y[4]),parseFloat(y[5]),parseFloat(y[6]),Ui),i.colors.push(gu.r,gu.g,gu.b)):i.colors.push(void 0,void 0,void 0);break;case"vn":i.normals.push(parseFloat(y[1]),parseFloat(y[2]),parseFloat(y[3]));break;case"vt":i.uvs.push(parseFloat(y[1]),parseFloat(y[2]));break}}else if(v==="f"){const E=g.slice(1).trim().split(o0),b=[];for(let C=0,M=E.length;C<M;C++){const x=E[C];if(x.length>0){const V=x.split("/");b.push(V)}}const w=b[0];for(let C=1,M=b.length-1;C<M;C++){const x=b[C],V=b[C+1];i.addFace(w[0],x[0],V[0],w[1],x[1],V[1],w[2],x[2],V[2])}}else if(v==="l"){const y=g.substring(1).trim().split(" ");let E=[];const b=[];if(g.indexOf("/")===-1)E=y;else for(let w=0,C=y.length;w<C;w++){const M=y[w].split("/");M[0]!==""&&E.push(M[0]),M[1]!==""&&b.push(M[1])}i.addLineGeometry(E,b)}else if(v==="p"){const E=g.slice(1).trim().split(" ");i.addPointGeometry(E)}else if((l=K1.exec(g))!==null){const y=(" "+l[0].slice(1).trim()).slice(1);i.startObject(y)}else if(J1.test(g))i.object.startMaterial(g.substring(7).trim(),i.materialLibraries);else if(Q1.test(g))i.materialLibraries.push(g.substring(7).trim());else if($1.test(g))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(v==="s"){if(l=g.split(" "),l.length>1){const E=l[1].trim().toLowerCase();i.object.smooth=E!=="0"&&E!=="off"}else i.object.smooth=!0;const y=i.object.currentMaterial();y&&(y.smooth=i.object.smooth)}else{if(g==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+g+'"')}}i.finalize();const c=new Rl;if(c.materialLibraries=[].concat(i.materialLibraries),!(i.objects.length===1&&i.objects[0].geometry.vertices.length===0)===!0)for(let m=0,_=i.objects.length;m<_;m++){const g=i.objects[m],v=g.geometry,y=g.materials,E=v.type==="Line",b=v.type==="Points";let w=!1;if(v.vertices.length===0)continue;const C=new ra;C.setAttribute("position",new ui(v.vertices,3)),v.normals.length>0&&C.setAttribute("normal",new ui(v.normals,3)),v.colors.length>0&&(w=!0,C.setAttribute("color",new ui(v.colors,3))),v.hasUVIndices===!0&&C.setAttribute("uv",new ui(v.uvs,2));const M=[];for(let V=0,G=y.length;V<G;V++){const P=y[V],Y=P.name+"_"+P.smooth+"_"+w;let z=i.materials[Y];if(this.materials!==null){if(z=this.materials.create(P.name),E&&z&&!(z instanceof Tu)){const k=new Tu;Ya.prototype.copy.call(k,z),k.color.copy(z.color),z=k}else if(b&&z&&!(z instanceof wl)){const k=new wl({size:10,sizeAttenuation:!1});Ya.prototype.copy.call(k,z),k.color.copy(z.color),k.map=z.map,z=k}}z===void 0&&(E?z=new Tu:b?z=new wl({size:1,sizeAttenuation:!1}):z=new eE,z.name=P.name,z.flatShading=!P.smooth,z.vertexColors=w,i.materials[Y]=z),M.push(z)}let x;if(M.length>1){for(let V=0,G=y.length;V<G;V++){const P=y[V];C.addGroup(P.groupStart,P.groupCount,V)}E?x=new wv(C,M):b?x=new Ed(C,M):x=new ia(C,M)}else E?x=new wv(C,M[0]):b?x=new Ed(C,M[0]):x=new ia(C,M[0]);x.name=g.name,c.add(x)}else if(i.vertices.length>0){const m=new wl({size:1,sizeAttenuation:!1}),_=new ra;_.setAttribute("position",new ui(i.vertices,3)),i.colors.length>0&&i.colors[0]!==void 0&&(_.setAttribute("color",new ui(i.colors,3)),m.vertexColors=!0);const g=new Ed(_,m);c.add(g)}return c}}const f0={type:"change"},Op={type:"start"},Z0={type:"end"},_u=new Ou,h0=new br,nA=Math.cos(70*Ex.DEG2RAD),Nn=new ot,gi=2*Math.PI,en={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ud=1e-6;class iA extends hE{constructor(t,i=null){super(t,i),this.state=en.NONE,this.target=new ot,this.cursor=new ot,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ho.ROTATE,MIDDLE:ho.DOLLY,RIGHT:ho.PAN},this.touches={ONE:uo.ROTATE,TWO:uo.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new ot,this._lastQuaternion=new ps,this._lastTargetPosition=new ot,this._quat=new ps().setFromUnitVectors(t.up,new ot(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Pv,this._sphericalDelta=new Pv,this._scale=1,this._panOffset=new ot,this._rotateStart=new Te,this._rotateEnd=new Te,this._rotateDelta=new Te,this._panStart=new Te,this._panEnd=new Te,this._panDelta=new Te,this._dollyStart=new Te,this._dollyEnd=new Te,this._dollyDelta=new Te,this._dollyDirection=new ot,this._mouse=new Te,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=rA.bind(this),this._onPointerDown=aA.bind(this),this._onPointerUp=sA.bind(this),this._onContextMenu=dA.bind(this),this._onMouseWheel=cA.bind(this),this._onKeyDown=uA.bind(this),this._onTouchStart=fA.bind(this),this._onTouchMove=hA.bind(this),this._onMouseDown=oA.bind(this),this._onMouseMove=lA.bind(this),this._interceptControlDown=pA.bind(this),this._interceptControlUp=mA.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(f0),this.update(),this.state=en.NONE}update(t=null){const i=this.object.position;Nn.copy(i).sub(this.target),Nn.applyQuaternion(this._quat),this._spherical.setFromVector3(Nn),this.autoRotate&&this.state===en.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let r=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(r)&&isFinite(l)&&(r<-Math.PI?r+=gi:r>Math.PI&&(r-=gi),l<-Math.PI?l+=gi:l>Math.PI&&(l-=gi),r<=l?this._spherical.theta=Math.max(r,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(r+l)/2?Math.max(r,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const d=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=d!=this._spherical.radius}if(Nn.setFromSpherical(this._spherical),Nn.applyQuaternion(this._quatInverse),i.copy(this.target).add(Nn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let d=null;if(this.object.isPerspectiveCamera){const m=Nn.length();d=this._clampDistance(m*this._scale);const _=m-d;this.object.position.addScaledVector(this._dollyDirection,_),this.object.updateMatrixWorld(),c=!!_}else if(this.object.isOrthographicCamera){const m=new ot(this._mouse.x,this._mouse.y,0);m.unproject(this.object);const _=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=_!==this.object.zoom;const g=new ot(this._mouse.x,this._mouse.y,0);g.unproject(this.object),this.object.position.sub(g).add(m),this.object.updateMatrixWorld(),d=Nn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;d!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(d).add(this.object.position):(_u.origin.copy(this.object.position),_u.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(_u.direction))<nA?this.object.lookAt(this.target):(h0.setFromNormalAndCoplanarPoint(this.object.up,this.target),_u.intersectPlane(h0,this.target))))}else if(this.object.isOrthographicCamera){const d=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),d!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>Ud||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ud||this._lastTargetPosition.distanceToSquared(this.target)>Ud?(this.dispatchEvent(f0),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?gi/60*this.autoRotateSpeed*t:gi/60/60*this.autoRotateSpeed}_getZoomScale(t){const i=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,i){Nn.setFromMatrixColumn(i,0),Nn.multiplyScalar(-t),this._panOffset.add(Nn)}_panUp(t,i){this.screenSpacePanning===!0?Nn.setFromMatrixColumn(i,1):(Nn.setFromMatrixColumn(i,0),Nn.crossVectors(this.object.up,Nn)),Nn.multiplyScalar(t),this._panOffset.add(Nn)}_pan(t,i){const r=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;Nn.copy(l).sub(this.target);let c=Nn.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*c/r.clientHeight,this.object.matrix),this._panUp(2*i*c/r.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/r.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/r.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const r=this.domElement.getBoundingClientRect(),l=t-r.left,c=i-r.top,d=r.width,m=r.height;this._mouse.x=l/d*2-1,this._mouse.y=-(c/m)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(gi*this._rotateDelta.x/i.clientHeight),this._rotateUp(gi*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let i=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(gi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-gi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(gi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-gi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),r=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._rotateStart.set(r,l)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),r=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panStart.set(r,l)}}_handleTouchStartDolly(t){const i=this._getSecondPointerPosition(t),r=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(r*r+l*l);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const r=this._getSecondPointerPosition(t),l=.5*(t.pageX+r.x),c=.5*(t.pageY+r.y);this._rotateEnd.set(l,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(gi*this._rotateDelta.x/i.clientHeight),this._rotateUp(gi*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),r=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panEnd.set(r,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const i=this._getSecondPointerPosition(t),r=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(r*r+l*l);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const d=(t.pageX+i.x)*.5,m=(t.pageY+i.y)*.5;this._updateZoomParameters(d,m)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(t){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId)return!0;return!1}_trackPointer(t){let i=this._pointerPositions[t.pointerId];i===void 0&&(i=new Te,this._pointerPositions[t.pointerId]=i),i.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const i=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(t){const i=t.deltaMode,r={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(i){case 1:r.deltaY*=16;break;case 2:r.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(r.deltaY*=10),r}}function aA(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function rA(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function sA(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Z0),this.state=en.NONE;break;case 1:const t=this._pointers[0],i=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:i.x,pageY:i.y});break}}function oA(s){let t;switch(s.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case ho.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=en.DOLLY;break;case ho.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=en.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=en.ROTATE}break;case ho.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=en.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=en.PAN}break;default:this.state=en.NONE}this.state!==en.NONE&&this.dispatchEvent(Op)}function lA(s){switch(this.state){case en.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case en.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case en.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function cA(s){this.enabled===!1||this.enableZoom===!1||this.state!==en.NONE||(s.preventDefault(),this.dispatchEvent(Op),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(Z0))}function uA(s){this.enabled!==!1&&this._handleKeyDown(s)}function fA(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case uo.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=en.TOUCH_ROTATE;break;case uo.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=en.TOUCH_PAN;break;default:this.state=en.NONE}break;case 2:switch(this.touches.TWO){case uo.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=en.TOUCH_DOLLY_PAN;break;case uo.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=en.TOUCH_DOLLY_ROTATE;break;default:this.state=en.NONE}break;default:this.state=en.NONE}this.state!==en.NONE&&this.dispatchEvent(Op)}function hA(s){switch(this._trackPointer(s),this.state){case en.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case en.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case en.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case en.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=en.NONE}}function dA(s){this.enabled!==!1&&s.preventDefault()}function pA(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function mA(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Ld,d0;function gA(){if(d0)return Ld;d0=1;var s="Expected a function",t=NaN,i="[object Symbol]",r=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,d=/^0o[0-7]+$/i,m=parseInt,_=typeof Xc=="object"&&Xc&&Xc.Object===Object&&Xc,g=typeof self=="object"&&self&&self.Object===Object&&self,v=_||g||Function("return this")(),y=Object.prototype,E=y.toString,b=Math.max,w=Math.min,C=function(){return v.Date.now()};function M(z,k,K){var F,O,q,rt,ht,_t,Mt=0,X=!1,st=!1,et=!0;if(typeof z!="function")throw new TypeError(s);k=Y(k)||0,V(K)&&(X=!!K.leading,st="maxWait"in K,q=st?b(Y(K.maxWait)||0,k):q,et="trailing"in K?!!K.trailing:et);function Nt(Ot){var fe=F,ie=O;return F=O=void 0,Mt=Ot,rt=z.apply(ie,fe),rt}function B(Ot){return Mt=Ot,ht=setTimeout(Ut,k),X?Nt(Ot):rt}function ct(Ot){var fe=Ot-_t,ie=Ot-Mt,ke=k-fe;return st?w(ke,q-ie):ke}function Rt(Ot){var fe=Ot-_t,ie=Ot-Mt;return _t===void 0||fe>=k||fe<0||st&&ie>=q}function Ut(){var Ot=C();if(Rt(Ot))return at(Ot);ht=setTimeout(Ut,ct(Ot))}function at(Ot){return ht=void 0,et&&F?Nt(Ot):(F=O=void 0,rt)}function Tt(){ht!==void 0&&clearTimeout(ht),Mt=0,F=_t=O=ht=void 0}function Lt(){return ht===void 0?rt:at(C())}function Ft(){var Ot=C(),fe=Rt(Ot);if(F=arguments,O=this,_t=Ot,fe){if(ht===void 0)return B(_t);if(st)return ht=setTimeout(Ut,k),Nt(_t)}return ht===void 0&&(ht=setTimeout(Ut,k)),rt}return Ft.cancel=Tt,Ft.flush=Lt,Ft}function x(z,k,K){var F=!0,O=!0;if(typeof z!="function")throw new TypeError(s);return V(K)&&(F="leading"in K?!!K.leading:F,O="trailing"in K?!!K.trailing:O),M(z,k,{leading:F,maxWait:k,trailing:O})}function V(z){var k=typeof z;return!!z&&(k=="object"||k=="function")}function G(z){return!!z&&typeof z=="object"}function P(z){return typeof z=="symbol"||G(z)&&E.call(z)==i}function Y(z){if(typeof z=="number")return z;if(P(z))return t;if(V(z)){var k=typeof z.valueOf=="function"?z.valueOf():z;z=V(k)?k+"":k}if(typeof z!="string")return z===0?z:+z;z=z.replace(r,"");var K=c.test(z);return K||d.test(z)?m(z.slice(2),K?2:8):l.test(z)?t:+z}return Ld=x,Ld}var _A=gA();const vA=y0(_A),p0=s=>{let t;const i=new Set,r=(g,v)=>{const y=typeof g=="function"?g(t):g;if(!Object.is(y,t)){const E=t;t=v??(typeof y!="object"||y===null)?y:Object.assign({},t,y),i.forEach(b=>b(t,E))}},l=()=>t,m={setState:r,getState:l,getInitialState:()=>_,subscribe:g=>(i.add(g),()=>i.delete(g))},_=t=s(r,l,m);return m},yA=s=>s?p0(s):p0,SA=s=>s;function xA(s,t=SA){const i=$_.useSyncExternalStore(s.subscribe,()=>t(s.getState()),()=>t(s.getInitialState()));return $_.useDebugValue(i),i}const m0=s=>{const t=yA(s),i=r=>xA(t,r);return Object.assign(i,t),i},K0=s=>s?m0(s):m0,Q0=K0(s=>({position:void 0,setPosition:t=>{s({position:t==null?void 0:t.clone()})}})),Lu=K0(s=>({modelCenter:void 0,setModelCenter:t=>{s({modelCenter:t==null?void 0:t.clone()})},boundingSphereRadius:void 0,setBoundingSphereRadius:t=>{s({boundingSphereRadius:t})}}));function EA({file:s,width:t,height:i}){const r=Q0(w=>w.setPosition),l=vA(w=>{r(w)},100),c=Lu(w=>w.setModelCenter),d=Lu(w=>w.setBoundingSphereRadius),m=Vn.useRef(null),_=Vn.useRef(null),g=Vn.useRef(null),v=Vn.useRef(null),y=Vn.useRef(null),E=Vn.useRef(null),b=Vn.useCallback(w=>{if(!_.current)return;const C=new FileReader;C.onload=()=>{if(!_.current||!g.current||!y.current||!E.current)return;const M=C.result;if(typeof M!="string")return;const V=new eA().parse(M);_.current.add(V);const G=new xo().setFromObject(V),P=new Eo;G.getBoundingSphere(P);const Y=P.radius,z=g.current.fov*(Math.PI/180),k=2*Math.atan(g.current.aspect*Math.tan(z/2)),K=Y/Math.tan(z/2),F=Y/Math.tan(k/2),O=Math.max(K,F)*1.5;g.current.position.copy(P.center).add(new ot(0,0,O)),g.current.lookAt(P.center),y.current.dirLightXPlus.position.copy(P.center).add(new ot(Y,0,0)),y.current.dirLightXPlus.target.position.copy(P.center),y.current.dirLightXMinus.position.copy(P.center).add(new ot(-Y,0,0)),y.current.dirLightXMinus.target.position.copy(P.center),E.current.target.copy(P.center),E.current.update(),c(P.center),d(Y)},C.readAsText(w)},[]);return Vn.useEffect(()=>{if(!m.current)return;const w=m.current.clientWidth,C=m.current.clientHeight,M=new Qx,x=new Wi(90,w/C,.1,1e3),V=new Z1({antialias:!0,alpha:!0});V.setSize(w,C),m.current.appendChild(V.domElement);const G=new iA(x,V.domElement),P=new Ov(16777215,1),Y=new Ov(16777215,1);M.add(P),M.add(Y),_.current=M,g.current=x,v.current=V,y.current={dirLightXPlus:P,dirLightXMinus:Y},E.current=G;const z=()=>{var k,K;requestAnimationFrame(z),V.render(M,x),(k=E.current)==null||k.update(),l((K=g.current)==null?void 0:K.position)};return z(),()=>{var k,K,F;l.cancel(),(k=E.current)==null||k.dispose(),(K=v.current)==null||K.dispose(),(F=m.current)==null||F.removeChild(V.domElement)}},[]),Vn.useEffect(()=>{s&&b(s)},[s]),Gn.jsx("div",{ref:m,style:{width:`${t}px`,height:`${i}px`}})}const MA=Vn.memo(EA),bA="modulepreload",TA=function(s,t){return new URL(s,t).href},g0={},AA=function(t,i,r){let l=Promise.resolve();if(i&&i.length>0){let d=function(v){return Promise.all(v.map(y=>Promise.resolve(y).then(E=>({status:"fulfilled",value:E}),E=>({status:"rejected",reason:E}))))};const m=document.getElementsByTagName("link"),_=document.querySelector("meta[property=csp-nonce]"),g=(_==null?void 0:_.nonce)||(_==null?void 0:_.getAttribute("nonce"));l=d(i.map(v=>{if(v=TA(v,r),v in g0)return;g0[v]=!0;const y=v.endsWith(".css"),E=y?'[rel="stylesheet"]':"";if(!!r)for(let C=m.length-1;C>=0;C--){const M=m[C];if(M.href===v&&(!y||M.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${v}"]${E}`))return;const w=document.createElement("link");if(w.rel=y?"stylesheet":bA,y||(w.as="script"),w.crossOrigin="",w.href=v,g&&w.setAttribute("nonce",g),document.head.appendChild(w),y)return new Promise((C,M)=>{w.addEventListener("load",C),w.addEventListener("error",()=>M(new Error(`Unable to preload CSS for ${v}`)))})}))}function c(d){const m=new Event("vite:preloadError",{cancelable:!0});if(m.payload=d,window.dispatchEvent(m),!m.defaultPrevented)throw d}return l.then(d=>{for(const m of d||[])m.status==="rejected"&&c(m.reason);return t().catch(c)})};var RA=async function(s={}){var t,i=s,r,l,c=new Promise((f,p)=>{r=f,l=p}),d=typeof window=="object",m=typeof WorkerGlobalScope<"u",_=typeof process=="object"&&typeof process.versions=="object"&&typeof process.versions.node=="string"&&process.type!="renderer";if(_){const{createRequire:f}=await AA(()=>import("./__vite-browser-external-BIHI7g3E.js"),[],import.meta.url);var g=f(import.meta.url)}var v="./this.program",y=import.meta.url,E="";function b(f){return i.locateFile?i.locateFile(f,E):E+f}var w,C;if(_){var M=g("fs"),x=g("path");y.startsWith("file:")&&(E=x.dirname(g("url").fileURLToPath(y))+"/"),C=f=>{f=st(f)?new URL(f):f;var p=M.readFileSync(f);return p},w=async(f,p=!0)=>{f=st(f)?new URL(f):f;var S=M.readFileSync(f,p?void 0:"utf8");return S},process.argv.length>1&&(v=process.argv[1].replace(/\\/g,"/")),process.argv.slice(2)}else if(d||m){try{E=new URL(".",y).href}catch{}m&&(C=f=>{var p=new XMLHttpRequest;return p.open("GET",f,!1),p.responseType="arraybuffer",p.send(null),new Uint8Array(p.response)}),w=async f=>{if(st(f))return new Promise((S,A)=>{var L=new XMLHttpRequest;L.open("GET",f,!0),L.responseType="arraybuffer",L.onload=()=>{if(L.status==200||L.status==0&&L.response){S(L.response);return}A(L.status)},L.onerror=A,L.send(null)});var p=await fetch(f,{credentials:"same-origin"});if(p.ok)return p.arrayBuffer();throw new Error(p.status+" : "+p.url)}}var V=console.log.bind(console),G=console.error.bind(console),P,Y,z=!1,k,K,F,O,q,rt,ht,_t,Mt,X,st=f=>f.startsWith("file://");function et(){var f=Y.buffer;k=new Int8Array(f),F=new Int16Array(f),K=new Uint8Array(f),O=new Uint16Array(f),q=new Int32Array(f),rt=new Uint32Array(f),ht=new Float32Array(f),X=new Float64Array(f),_t=new BigInt64Array(f),Mt=new BigUint64Array(f)}function Nt(){if(i.preRun)for(typeof i.preRun=="function"&&(i.preRun=[i.preRun]);i.preRun.length;)We(i.preRun.shift());Xn(ae)}function B(){!i.noFSInit&&!R.initialized&&R.init(),Pi.J(),R.ignorePermissions=!1}function ct(){if(i.postRun)for(typeof i.postRun=="function"&&(i.postRun=[i.postRun]);i.postRun.length;)ve(i.postRun.shift());Xn(De)}var Rt=0,Ut=null;function at(f){var p;Rt++,(p=i.monitorRunDependencies)==null||p.call(i,Rt)}function Tt(f){var S;if(Rt--,(S=i.monitorRunDependencies)==null||S.call(i,Rt),Rt==0&&Ut){var p=Ut;Ut=null,p()}}function Lt(f){var S;(S=i.onAbort)==null||S.call(i,f),f="Aborted("+f+")",G(f),z=!0,f+=". Build with -sASSERTIONS for more info.";var p=new WebAssembly.RuntimeError(f);throw l(p),p}var Ft;function Ot(){return i.locateFile?b("ray-tracing.wasm"):new URL(""+new URL("ray-tracing-C9YNUfu-.wasm",import.meta.url).href,import.meta.url).href}function fe(f){if(f==Ft&&P)return new Uint8Array(P);if(C)return C(f);throw"both async and sync fetching of the wasm failed"}async function ie(f){if(!P)try{var p=await w(f);return new Uint8Array(p)}catch{}return fe(f)}async function ke(f,p){try{var S=await ie(f),A=await WebAssembly.instantiate(S,p);return A}catch(L){G(`failed to asynchronously prepare wasm: ${L}`),Lt(L)}}async function qe(f,p,S){if(!f&&typeof WebAssembly.instantiateStreaming=="function"&&!st(p)&&!_)try{var A=fetch(p,{credentials:"same-origin"}),L=await WebAssembly.instantiateStreaming(A,S);return L}catch(H){G(`wasm streaming compile failed: ${H}`),G("falling back to ArrayBuffer instantiation")}return ke(p,S)}function Ae(){return{a:Ju}}async function j(){function f(H,Z){return Pi=H.exports,Y=Pi.I,et(),Li=Pi.K,Tt(),Pi}at();function p(H){return f(H.instance)}var S=Ae();if(i.instantiateWasm)return new Promise((H,Z)=>{i.instantiateWasm(S,(J,yt)=>{H(f(J))})});Ft??(Ft=Ot());try{var A=await qe(P,Ft,S),L=p(A);return L}catch(H){return l(H),Promise.reject(H)}}var Xn=f=>{for(;f.length>0;)f.shift()(i)},De=[],ve=f=>De.push(f),ae=[],We=f=>ae.push(f);class ee{constructor(p){this.excPtr=p,this.ptr=p-24}set_type(p){rt[this.ptr+4>>2]=p}get_type(){return rt[this.ptr+4>>2]}set_destructor(p){rt[this.ptr+8>>2]=p}get_destructor(){return rt[this.ptr+8>>2]}set_caught(p){p=p?1:0,k[this.ptr+12]=p}get_caught(){return k[this.ptr+12]!=0}set_rethrown(p){p=p?1:0,k[this.ptr+13]=p}get_rethrown(){return k[this.ptr+13]!=0}init(p,S){this.set_adjusted_ptr(0),this.set_type(p),this.set_destructor(S)}set_adjusted_ptr(p){rt[this.ptr+16>>2]=p}get_adjusted_ptr(){return rt[this.ptr+16>>2]}}var I=0,U=(f,p,S)=>{var A=new ee(f);throw A.init(p,S),I=f,I},ft=()=>{var f=q[+Se.varargs>>2];return Se.varargs+=4,f},bt=ft,St={isAbs:f=>f.charAt(0)==="/",splitPath:f=>{var p=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;return p.exec(f).slice(1)},normalizeArray:(f,p)=>{for(var S=0,A=f.length-1;A>=0;A--){var L=f[A];L==="."?f.splice(A,1):L===".."?(f.splice(A,1),S++):S&&(f.splice(A,1),S--)}if(p)for(;S;S--)f.unshift("..");return f},normalize:f=>{var p=St.isAbs(f),S=f.slice(-1)==="/";return f=St.normalizeArray(f.split("/").filter(A=>!!A),!p).join("/"),!f&&!p&&(f="."),f&&S&&(f+="/"),(p?"/":"")+f},dirname:f=>{var p=St.splitPath(f),S=p[0],A=p[1];return!S&&!A?".":(A&&(A=A.slice(0,-1)),S+A)},basename:f=>f&&f.match(/([^\/]+|\/)\/*$/)[1],join:(...f)=>St.normalize(f.join("/")),join2:(f,p)=>St.normalize(f+"/"+p)},xt=()=>{if(_){var f=g("crypto");return p=>f.randomFillSync(p)}return p=>crypto.getRandomValues(p)},Xt=f=>{(Xt=xt())(f)},It={resolve:(...f)=>{for(var p="",S=!1,A=f.length-1;A>=-1&&!S;A--){var L=A>=0?f[A]:R.cwd();if(typeof L!="string")throw new TypeError("Arguments to path.resolve must be strings");if(!L)return"";p=L+"/"+p,S=St.isAbs(L)}return p=St.normalizeArray(p.split("/").filter(H=>!!H),!S).join("/"),(S?"/":"")+p||"."},relative:(f,p)=>{f=It.resolve(f).slice(1),p=It.resolve(p).slice(1);function S(Bt){for(var Kt=0;Kt<Bt.length&&Bt[Kt]==="";Kt++);for(var te=Bt.length-1;te>=0&&Bt[te]==="";te--);return Kt>te?[]:Bt.slice(Kt,te-Kt+1)}for(var A=S(f.split("/")),L=S(p.split("/")),H=Math.min(A.length,L.length),Z=H,J=0;J<H;J++)if(A[J]!==L[J]){Z=J;break}for(var yt=[],J=Z;J<A.length;J++)yt.push("..");return yt=yt.concat(L.slice(Z)),yt.join("/")}},Qt=typeof TextDecoder<"u"?new TextDecoder:void 0,se=(f,p=0,S=NaN)=>{for(var A=p+S,L=p;f[L]&&!(L>=A);)++L;if(L-p>16&&f.buffer&&Qt)return Qt.decode(f.subarray(p,L));for(var H="";p<L;){var Z=f[p++];if(!(Z&128)){H+=String.fromCharCode(Z);continue}var J=f[p++]&63;if((Z&224)==192){H+=String.fromCharCode((Z&31)<<6|J);continue}var yt=f[p++]&63;if((Z&240)==224?Z=(Z&15)<<12|J<<6|yt:Z=(Z&7)<<18|J<<12|yt<<6|f[p++]&63,Z<65536)H+=String.fromCharCode(Z);else{var Bt=Z-65536;H+=String.fromCharCode(55296|Bt>>10,56320|Bt&1023)}}return H},Pt=[],jt=f=>{for(var p=0,S=0;S<f.length;++S){var A=f.charCodeAt(S);A<=127?p++:A<=2047?p+=2:A>=55296&&A<=57343?(p+=4,++S):p+=3}return p},oe=(f,p,S,A)=>{if(!(A>0))return 0;for(var L=S,H=S+A-1,Z=0;Z<f.length;++Z){var J=f.charCodeAt(Z);if(J>=55296&&J<=57343){var yt=f.charCodeAt(++Z);J=65536+((J&1023)<<10)|yt&1023}if(J<=127){if(S>=H)break;p[S++]=J}else if(J<=2047){if(S+1>=H)break;p[S++]=192|J>>6,p[S++]=128|J&63}else if(J<=65535){if(S+2>=H)break;p[S++]=224|J>>12,p[S++]=128|J>>6&63,p[S++]=128|J&63}else{if(S+3>=H)break;p[S++]=240|J>>18,p[S++]=128|J>>12&63,p[S++]=128|J>>6&63,p[S++]=128|J&63}}return p[S]=0,S-L},ue=(f,p,S)=>{var A=jt(f)+1,L=new Array(A),H=oe(f,L,0,L.length);return L.length=H,L},qt=()=>{if(!Pt.length){var f=null;if(_){var p=256,S=Buffer.alloc(p),A=0,L=process.stdin.fd;try{A=M.readSync(L,S,0,p)}catch(H){if(H.toString().includes("EOF"))A=0;else throw H}A>0&&(f=S.slice(0,A).toString("utf-8"))}else typeof window<"u"&&typeof window.prompt=="function"&&(f=window.prompt("Input: "),f!==null&&(f+=`
`));if(!f)return null;Pt=ue(f)}return Pt.shift()},ye={ttys:[],init(){},shutdown(){},register(f,p){ye.ttys[f]={input:[],output:[],ops:p},R.registerDevice(f,ye.stream_ops)},stream_ops:{open(f){var p=ye.ttys[f.node.rdev];if(!p)throw new R.ErrnoError(43);f.tty=p,f.seekable=!1},close(f){f.tty.ops.fsync(f.tty)},fsync(f){f.tty.ops.fsync(f.tty)},read(f,p,S,A,L){if(!f.tty||!f.tty.ops.get_char)throw new R.ErrnoError(60);for(var H=0,Z=0;Z<A;Z++){var J;try{J=f.tty.ops.get_char(f.tty)}catch{throw new R.ErrnoError(29)}if(J===void 0&&H===0)throw new R.ErrnoError(6);if(J==null)break;H++,p[S+Z]=J}return H&&(f.node.atime=Date.now()),H},write(f,p,S,A,L){if(!f.tty||!f.tty.ops.put_char)throw new R.ErrnoError(60);try{for(var H=0;H<A;H++)f.tty.ops.put_char(f.tty,p[S+H])}catch{throw new R.ErrnoError(29)}return A&&(f.node.mtime=f.node.ctime=Date.now()),H}},default_tty_ops:{get_char(f){return qt()},put_char(f,p){p===null||p===10?(V(se(f.output)),f.output=[]):p!=0&&f.output.push(p)},fsync(f){var p;((p=f.output)==null?void 0:p.length)>0&&(V(se(f.output)),f.output=[])},ioctl_tcgets(f){return{c_iflag:25856,c_oflag:5,c_cflag:191,c_lflag:35387,c_cc:[3,28,127,21,4,0,1,0,17,19,26,0,18,15,23,22,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}},ioctl_tcsets(f,p,S){return 0},ioctl_tiocgwinsz(f){return[24,80]}},default_tty1_ops:{put_char(f,p){p===null||p===10?(G(se(f.output)),f.output=[]):p!=0&&f.output.push(p)},fsync(f){var p;((p=f.output)==null?void 0:p.length)>0&&(G(se(f.output)),f.output=[])}}},me=f=>{Lt()},Wt={ops_table:null,mount(f){return Wt.createNode(null,"/",16895,0)},createNode(f,p,S,A){if(R.isBlkdev(S)||R.isFIFO(S))throw new R.ErrnoError(63);Wt.ops_table||(Wt.ops_table={dir:{node:{getattr:Wt.node_ops.getattr,setattr:Wt.node_ops.setattr,lookup:Wt.node_ops.lookup,mknod:Wt.node_ops.mknod,rename:Wt.node_ops.rename,unlink:Wt.node_ops.unlink,rmdir:Wt.node_ops.rmdir,readdir:Wt.node_ops.readdir,symlink:Wt.node_ops.symlink},stream:{llseek:Wt.stream_ops.llseek}},file:{node:{getattr:Wt.node_ops.getattr,setattr:Wt.node_ops.setattr},stream:{llseek:Wt.stream_ops.llseek,read:Wt.stream_ops.read,write:Wt.stream_ops.write,mmap:Wt.stream_ops.mmap,msync:Wt.stream_ops.msync}},link:{node:{getattr:Wt.node_ops.getattr,setattr:Wt.node_ops.setattr,readlink:Wt.node_ops.readlink},stream:{}},chrdev:{node:{getattr:Wt.node_ops.getattr,setattr:Wt.node_ops.setattr},stream:R.chrdev_stream_ops}});var L=R.createNode(f,p,S,A);return R.isDir(L.mode)?(L.node_ops=Wt.ops_table.dir.node,L.stream_ops=Wt.ops_table.dir.stream,L.contents={}):R.isFile(L.mode)?(L.node_ops=Wt.ops_table.file.node,L.stream_ops=Wt.ops_table.file.stream,L.usedBytes=0,L.contents=null):R.isLink(L.mode)?(L.node_ops=Wt.ops_table.link.node,L.stream_ops=Wt.ops_table.link.stream):R.isChrdev(L.mode)&&(L.node_ops=Wt.ops_table.chrdev.node,L.stream_ops=Wt.ops_table.chrdev.stream),L.atime=L.mtime=L.ctime=Date.now(),f&&(f.contents[p]=L,f.atime=f.mtime=f.ctime=L.atime),L},getFileDataAsTypedArray(f){return f.contents?f.contents.subarray?f.contents.subarray(0,f.usedBytes):new Uint8Array(f.contents):new Uint8Array(0)},expandFileStorage(f,p){var S=f.contents?f.contents.length:0;if(!(S>=p)){var A=1024*1024;p=Math.max(p,S*(S<A?2:1.125)>>>0),S!=0&&(p=Math.max(p,256));var L=f.contents;f.contents=new Uint8Array(p),f.usedBytes>0&&f.contents.set(L.subarray(0,f.usedBytes),0)}},resizeFileStorage(f,p){if(f.usedBytes!=p)if(p==0)f.contents=null,f.usedBytes=0;else{var S=f.contents;f.contents=new Uint8Array(p),S&&f.contents.set(S.subarray(0,Math.min(p,f.usedBytes))),f.usedBytes=p}},node_ops:{getattr(f){var p={};return p.dev=R.isChrdev(f.mode)?f.id:1,p.ino=f.id,p.mode=f.mode,p.nlink=1,p.uid=0,p.gid=0,p.rdev=f.rdev,R.isDir(f.mode)?p.size=4096:R.isFile(f.mode)?p.size=f.usedBytes:R.isLink(f.mode)?p.size=f.link.length:p.size=0,p.atime=new Date(f.atime),p.mtime=new Date(f.mtime),p.ctime=new Date(f.ctime),p.blksize=4096,p.blocks=Math.ceil(p.size/p.blksize),p},setattr(f,p){for(const S of["mode","atime","mtime","ctime"])p[S]!=null&&(f[S]=p[S]);p.size!==void 0&&Wt.resizeFileStorage(f,p.size)},lookup(f,p){throw Wt.doesNotExistError},mknod(f,p,S,A){return Wt.createNode(f,p,S,A)},rename(f,p,S){var A;try{A=R.lookupNode(p,S)}catch{}if(A){if(R.isDir(f.mode))for(var L in A.contents)throw new R.ErrnoError(55);R.hashRemoveNode(A)}delete f.parent.contents[f.name],p.contents[S]=f,f.name=S,p.ctime=p.mtime=f.parent.ctime=f.parent.mtime=Date.now()},unlink(f,p){delete f.contents[p],f.ctime=f.mtime=Date.now()},rmdir(f,p){var S=R.lookupNode(f,p);for(var A in S.contents)throw new R.ErrnoError(55);delete f.contents[p],f.ctime=f.mtime=Date.now()},readdir(f){return[".","..",...Object.keys(f.contents)]},symlink(f,p,S){var A=Wt.createNode(f,p,41471,0);return A.link=S,A},readlink(f){if(!R.isLink(f.mode))throw new R.ErrnoError(28);return f.link}},stream_ops:{read(f,p,S,A,L){var H=f.node.contents;if(L>=f.node.usedBytes)return 0;var Z=Math.min(f.node.usedBytes-L,A);if(Z>8&&H.subarray)p.set(H.subarray(L,L+Z),S);else for(var J=0;J<Z;J++)p[S+J]=H[L+J];return Z},write(f,p,S,A,L,H){if(p.buffer===k.buffer&&(H=!1),!A)return 0;var Z=f.node;if(Z.mtime=Z.ctime=Date.now(),p.subarray&&(!Z.contents||Z.contents.subarray)){if(H)return Z.contents=p.subarray(S,S+A),Z.usedBytes=A,A;if(Z.usedBytes===0&&L===0)return Z.contents=p.slice(S,S+A),Z.usedBytes=A,A;if(L+A<=Z.usedBytes)return Z.contents.set(p.subarray(S,S+A),L),A}if(Wt.expandFileStorage(Z,L+A),Z.contents.subarray&&p.subarray)Z.contents.set(p.subarray(S,S+A),L);else for(var J=0;J<A;J++)Z.contents[L+J]=p[S+J];return Z.usedBytes=Math.max(Z.usedBytes,L+A),A},llseek(f,p,S){var A=p;if(S===1?A+=f.position:S===2&&R.isFile(f.node.mode)&&(A+=f.node.usedBytes),A<0)throw new R.ErrnoError(28);return A},mmap(f,p,S,A,L){if(!R.isFile(f.node.mode))throw new R.ErrnoError(43);var H,Z,J=f.node.contents;if(!(L&2)&&J&&J.buffer===k.buffer)Z=!1,H=J.byteOffset;else{if(Z=!0,H=me(),!H)throw new R.ErrnoError(48);J&&((S>0||S+p<J.length)&&(J.subarray?J=J.subarray(S,S+p):J=Array.prototype.slice.call(J,S,S+p)),k.set(J,H))}return{ptr:H,allocated:Z}},msync(f,p,S,A,L){return Wt.stream_ops.write(f,p,0,A,S,!1),0}}},$=async f=>{var p=await w(f);return new Uint8Array(p)},Gt=(...f)=>R.createDataFile(...f),vt=[],wt=(f,p,S,A)=>{typeof Browser<"u"&&Browser.init();var L=!1;return vt.forEach(H=>{L||H.canHandle(p)&&(H.handle(f,p,S,A),L=!0)}),L},Yt=(f,p,S,A,L,H,Z,J,yt,Bt)=>{var Kt=p?It.resolve(St.join2(f,p)):f;function te(xe){function $t(Ee){Bt==null||Bt(),J||Gt(f,p,Ee,A,L,yt),H==null||H(),Tt()}wt(xe,Kt,$t,()=>{Z==null||Z(),Tt()})||$t(xe)}at(),typeof S=="string"?$(S).then(te,Z):te(S)},Vt=f=>{var p={r:0,"r+":2,w:577,"w+":578,a:1089,"a+":1090},S=p[f];if(typeof S>"u")throw new Error(`Unknown file open mode: ${f}`);return S},ge=(f,p)=>{var S=0;return f&&(S|=365),p&&(S|=146),S},R={root:null,mounts:[],devices:{},streams:[],nextInode:1,nameTable:null,currentPath:"/",initialized:!1,ignorePermissions:!0,filesystems:null,syncFSRequests:0,readFiles:{},ErrnoError:class{constructor(f){ha(this,"name","ErrnoError");this.errno=f}},FSStream:class{constructor(){ha(this,"shared",{})}get object(){return this.node}set object(f){this.node=f}get isRead(){return(this.flags&2097155)!==1}get isWrite(){return(this.flags&2097155)!==0}get isAppend(){return this.flags&1024}get flags(){return this.shared.flags}set flags(f){this.shared.flags=f}get position(){return this.shared.position}set position(f){this.shared.position=f}},FSNode:class{constructor(f,p,S,A){ha(this,"node_ops",{});ha(this,"stream_ops",{});ha(this,"readMode",365);ha(this,"writeMode",146);ha(this,"mounted",null);f||(f=this),this.parent=f,this.mount=f.mount,this.id=R.nextInode++,this.name=p,this.mode=S,this.rdev=A,this.atime=this.mtime=this.ctime=Date.now()}get read(){return(this.mode&this.readMode)===this.readMode}set read(f){f?this.mode|=this.readMode:this.mode&=~this.readMode}get write(){return(this.mode&this.writeMode)===this.writeMode}set write(f){f?this.mode|=this.writeMode:this.mode&=~this.writeMode}get isFolder(){return R.isDir(this.mode)}get isDevice(){return R.isChrdev(this.mode)}},lookupPath(f,p={}){if(!f)throw new R.ErrnoError(44);p.follow_mount??(p.follow_mount=!0),St.isAbs(f)||(f=R.cwd()+"/"+f);t:for(var S=0;S<40;S++){for(var A=f.split("/").filter(Bt=>!!Bt),L=R.root,H="/",Z=0;Z<A.length;Z++){var J=Z===A.length-1;if(J&&p.parent)break;if(A[Z]!=="."){if(A[Z]===".."){if(H=St.dirname(H),R.isRoot(L)){f=H+"/"+A.slice(Z+1).join("/");continue t}else L=L.parent;continue}H=St.join2(H,A[Z]);try{L=R.lookupNode(L,A[Z])}catch(Bt){if((Bt==null?void 0:Bt.errno)===44&&J&&p.noent_okay)return{path:H};throw Bt}if(R.isMountpoint(L)&&(!J||p.follow_mount)&&(L=L.mounted.root),R.isLink(L.mode)&&(!J||p.follow)){if(!L.node_ops.readlink)throw new R.ErrnoError(52);var yt=L.node_ops.readlink(L);St.isAbs(yt)||(yt=St.dirname(H)+"/"+yt),f=yt+"/"+A.slice(Z+1).join("/");continue t}}}return{path:H,node:L}}throw new R.ErrnoError(32)},getPath(f){for(var p;;){if(R.isRoot(f)){var S=f.mount.mountpoint;return p?S[S.length-1]!=="/"?`${S}/${p}`:S+p:S}p=p?`${f.name}/${p}`:f.name,f=f.parent}},hashName(f,p){for(var S=0,A=0;A<p.length;A++)S=(S<<5)-S+p.charCodeAt(A)|0;return(f+S>>>0)%R.nameTable.length},hashAddNode(f){var p=R.hashName(f.parent.id,f.name);f.name_next=R.nameTable[p],R.nameTable[p]=f},hashRemoveNode(f){var p=R.hashName(f.parent.id,f.name);if(R.nameTable[p]===f)R.nameTable[p]=f.name_next;else for(var S=R.nameTable[p];S;){if(S.name_next===f){S.name_next=f.name_next;break}S=S.name_next}},lookupNode(f,p){var S=R.mayLookup(f);if(S)throw new R.ErrnoError(S);for(var A=R.hashName(f.id,p),L=R.nameTable[A];L;L=L.name_next){var H=L.name;if(L.parent.id===f.id&&H===p)return L}return R.lookup(f,p)},createNode(f,p,S,A){var L=new R.FSNode(f,p,S,A);return R.hashAddNode(L),L},destroyNode(f){R.hashRemoveNode(f)},isRoot(f){return f===f.parent},isMountpoint(f){return!!f.mounted},isFile(f){return(f&61440)===32768},isDir(f){return(f&61440)===16384},isLink(f){return(f&61440)===40960},isChrdev(f){return(f&61440)===8192},isBlkdev(f){return(f&61440)===24576},isFIFO(f){return(f&61440)===4096},isSocket(f){return(f&49152)===49152},flagsToPermissionString(f){var p=["r","w","rw"][f&3];return f&512&&(p+="w"),p},nodePermissions(f,p){return R.ignorePermissions?0:p.includes("r")&&!(f.mode&292)||p.includes("w")&&!(f.mode&146)||p.includes("x")&&!(f.mode&73)?2:0},mayLookup(f){if(!R.isDir(f.mode))return 54;var p=R.nodePermissions(f,"x");return p||(f.node_ops.lookup?0:2)},mayCreate(f,p){if(!R.isDir(f.mode))return 54;try{var S=R.lookupNode(f,p);return 20}catch{}return R.nodePermissions(f,"wx")},mayDelete(f,p,S){var A;try{A=R.lookupNode(f,p)}catch(H){return H.errno}var L=R.nodePermissions(f,"wx");if(L)return L;if(S){if(!R.isDir(A.mode))return 54;if(R.isRoot(A)||R.getPath(A)===R.cwd())return 10}else if(R.isDir(A.mode))return 31;return 0},mayOpen(f,p){return f?R.isLink(f.mode)?32:R.isDir(f.mode)&&(R.flagsToPermissionString(p)!=="r"||p&576)?31:R.nodePermissions(f,R.flagsToPermissionString(p)):44},checkOpExists(f,p){if(!f)throw new R.ErrnoError(p);return f},MAX_OPEN_FDS:4096,nextfd(){for(var f=0;f<=R.MAX_OPEN_FDS;f++)if(!R.streams[f])return f;throw new R.ErrnoError(33)},getStreamChecked(f){var p=R.getStream(f);if(!p)throw new R.ErrnoError(8);return p},getStream:f=>R.streams[f],createStream(f,p=-1){return f=Object.assign(new R.FSStream,f),p==-1&&(p=R.nextfd()),f.fd=p,R.streams[p]=f,f},closeStream(f){R.streams[f]=null},dupStream(f,p=-1){var A,L;var S=R.createStream(f,p);return(L=(A=S.stream_ops)==null?void 0:A.dup)==null||L.call(A,S),S},doSetAttr(f,p,S){var A=f==null?void 0:f.stream_ops.setattr,L=A?f:p;A??(A=p.node_ops.setattr),R.checkOpExists(A,63),A(L,S)},chrdev_stream_ops:{open(f){var S,A;var p=R.getDevice(f.node.rdev);f.stream_ops=p.stream_ops,(A=(S=f.stream_ops).open)==null||A.call(S,f)},llseek(){throw new R.ErrnoError(70)}},major:f=>f>>8,minor:f=>f&255,makedev:(f,p)=>f<<8|p,registerDevice(f,p){R.devices[f]={stream_ops:p}},getDevice:f=>R.devices[f],getMounts(f){for(var p=[],S=[f];S.length;){var A=S.pop();p.push(A),S.push(...A.mounts)}return p},syncfs(f,p){typeof f=="function"&&(p=f,f=!1),R.syncFSRequests++,R.syncFSRequests>1&&G(`warning: ${R.syncFSRequests} FS.syncfs operations in flight at once, probably just doing extra work`);var S=R.getMounts(R.root.mount),A=0;function L(Z){return R.syncFSRequests--,p(Z)}function H(Z){if(Z)return H.errored?void 0:(H.errored=!0,L(Z));++A>=S.length&&L(null)}S.forEach(Z=>{if(!Z.type.syncfs)return H(null);Z.type.syncfs(Z,f,H)})},mount(f,p,S){var A=S==="/",L=!S,H;if(A&&R.root)throw new R.ErrnoError(10);if(!A&&!L){var Z=R.lookupPath(S,{follow_mount:!1});if(S=Z.path,H=Z.node,R.isMountpoint(H))throw new R.ErrnoError(10);if(!R.isDir(H.mode))throw new R.ErrnoError(54)}var J={type:f,opts:p,mountpoint:S,mounts:[]},yt=f.mount(J);return yt.mount=J,J.root=yt,A?R.root=yt:H&&(H.mounted=J,H.mount&&H.mount.mounts.push(J)),yt},unmount(f){var p=R.lookupPath(f,{follow_mount:!1});if(!R.isMountpoint(p.node))throw new R.ErrnoError(28);var S=p.node,A=S.mounted,L=R.getMounts(A);Object.keys(R.nameTable).forEach(Z=>{for(var J=R.nameTable[Z];J;){var yt=J.name_next;L.includes(J.mount)&&R.destroyNode(J),J=yt}}),S.mounted=null;var H=S.mount.mounts.indexOf(A);S.mount.mounts.splice(H,1)},lookup(f,p){return f.node_ops.lookup(f,p)},mknod(f,p,S){var A=R.lookupPath(f,{parent:!0}),L=A.node,H=St.basename(f);if(!H)throw new R.ErrnoError(28);if(H==="."||H==="..")throw new R.ErrnoError(20);var Z=R.mayCreate(L,H);if(Z)throw new R.ErrnoError(Z);if(!L.node_ops.mknod)throw new R.ErrnoError(63);return L.node_ops.mknod(L,H,p,S)},statfs(f){return R.statfsNode(R.lookupPath(f,{follow:!0}).node)},statfsStream(f){return R.statfsNode(f.node)},statfsNode(f){var p={bsize:4096,frsize:4096,blocks:1e6,bfree:5e5,bavail:5e5,files:R.nextInode,ffree:R.nextInode-1,fsid:42,flags:2,namelen:255};return f.node_ops.statfs&&Object.assign(p,f.node_ops.statfs(f.mount.opts.root)),p},create(f,p=438){return p&=4095,p|=32768,R.mknod(f,p,0)},mkdir(f,p=511){return p&=1023,p|=16384,R.mknod(f,p,0)},mkdirTree(f,p){var S=f.split("/"),A="";for(var L of S)if(L){(A||St.isAbs(f))&&(A+="/"),A+=L;try{R.mkdir(A,p)}catch(H){if(H.errno!=20)throw H}}},mkdev(f,p,S){return typeof S>"u"&&(S=p,p=438),p|=8192,R.mknod(f,p,S)},symlink(f,p){if(!It.resolve(f))throw new R.ErrnoError(44);var S=R.lookupPath(p,{parent:!0}),A=S.node;if(!A)throw new R.ErrnoError(44);var L=St.basename(p),H=R.mayCreate(A,L);if(H)throw new R.ErrnoError(H);if(!A.node_ops.symlink)throw new R.ErrnoError(63);return A.node_ops.symlink(A,L,f)},rename(f,p){var S=St.dirname(f),A=St.dirname(p),L=St.basename(f),H=St.basename(p),Z,J,yt;if(Z=R.lookupPath(f,{parent:!0}),J=Z.node,Z=R.lookupPath(p,{parent:!0}),yt=Z.node,!J||!yt)throw new R.ErrnoError(44);if(J.mount!==yt.mount)throw new R.ErrnoError(75);var Bt=R.lookupNode(J,L),Kt=It.relative(f,A);if(Kt.charAt(0)!==".")throw new R.ErrnoError(28);if(Kt=It.relative(p,S),Kt.charAt(0)!==".")throw new R.ErrnoError(55);var te;try{te=R.lookupNode(yt,H)}catch{}if(Bt!==te){var xe=R.isDir(Bt.mode),$t=R.mayDelete(J,L,xe);if($t)throw new R.ErrnoError($t);if($t=te?R.mayDelete(yt,H,xe):R.mayCreate(yt,H),$t)throw new R.ErrnoError($t);if(!J.node_ops.rename)throw new R.ErrnoError(63);if(R.isMountpoint(Bt)||te&&R.isMountpoint(te))throw new R.ErrnoError(10);if(yt!==J&&($t=R.nodePermissions(J,"w"),$t))throw new R.ErrnoError($t);R.hashRemoveNode(Bt);try{J.node_ops.rename(Bt,yt,H),Bt.parent=yt}catch(Ee){throw Ee}finally{R.hashAddNode(Bt)}}},rmdir(f){var p=R.lookupPath(f,{parent:!0}),S=p.node,A=St.basename(f),L=R.lookupNode(S,A),H=R.mayDelete(S,A,!0);if(H)throw new R.ErrnoError(H);if(!S.node_ops.rmdir)throw new R.ErrnoError(63);if(R.isMountpoint(L))throw new R.ErrnoError(10);S.node_ops.rmdir(S,A),R.destroyNode(L)},readdir(f){var p=R.lookupPath(f,{follow:!0}),S=p.node,A=R.checkOpExists(S.node_ops.readdir,54);return A(S)},unlink(f){var p=R.lookupPath(f,{parent:!0}),S=p.node;if(!S)throw new R.ErrnoError(44);var A=St.basename(f),L=R.lookupNode(S,A),H=R.mayDelete(S,A,!1);if(H)throw new R.ErrnoError(H);if(!S.node_ops.unlink)throw new R.ErrnoError(63);if(R.isMountpoint(L))throw new R.ErrnoError(10);S.node_ops.unlink(S,A),R.destroyNode(L)},readlink(f){var p=R.lookupPath(f),S=p.node;if(!S)throw new R.ErrnoError(44);if(!S.node_ops.readlink)throw new R.ErrnoError(28);return S.node_ops.readlink(S)},stat(f,p){var S=R.lookupPath(f,{follow:!p}),A=S.node,L=R.checkOpExists(A.node_ops.getattr,63);return L(A)},fstat(f){var p=R.getStreamChecked(f),S=p.node,A=p.stream_ops.getattr,L=A?p:S;return A??(A=S.node_ops.getattr),R.checkOpExists(A,63),A(L)},lstat(f){return R.stat(f,!0)},doChmod(f,p,S,A){R.doSetAttr(f,p,{mode:S&4095|p.mode&-4096,ctime:Date.now(),dontFollow:A})},chmod(f,p,S){var A;if(typeof f=="string"){var L=R.lookupPath(f,{follow:!S});A=L.node}else A=f;R.doChmod(null,A,p,S)},lchmod(f,p){R.chmod(f,p,!0)},fchmod(f,p){var S=R.getStreamChecked(f);R.doChmod(S,S.node,p,!1)},doChown(f,p,S){R.doSetAttr(f,p,{timestamp:Date.now(),dontFollow:S})},chown(f,p,S,A){var L;if(typeof f=="string"){var H=R.lookupPath(f,{follow:!A});L=H.node}else L=f;R.doChown(null,L,A)},lchown(f,p,S){R.chown(f,p,S,!0)},fchown(f,p,S){var A=R.getStreamChecked(f);R.doChown(A,A.node,!1)},doTruncate(f,p,S){if(R.isDir(p.mode))throw new R.ErrnoError(31);if(!R.isFile(p.mode))throw new R.ErrnoError(28);var A=R.nodePermissions(p,"w");if(A)throw new R.ErrnoError(A);R.doSetAttr(f,p,{size:S,timestamp:Date.now()})},truncate(f,p){if(p<0)throw new R.ErrnoError(28);var S;if(typeof f=="string"){var A=R.lookupPath(f,{follow:!0});S=A.node}else S=f;R.doTruncate(null,S,p)},ftruncate(f,p){var S=R.getStreamChecked(f);if(p<0||(S.flags&2097155)===0)throw new R.ErrnoError(28);R.doTruncate(S,S.node,p)},utime(f,p,S){var A=R.lookupPath(f,{follow:!0}),L=A.node,H=R.checkOpExists(L.node_ops.setattr,63);H(L,{atime:p,mtime:S})},open(f,p,S=438){if(f==="")throw new R.ErrnoError(44);p=typeof p=="string"?Vt(p):p,p&64?S=S&4095|32768:S=0;var A,L;if(typeof f=="object")A=f;else{L=f.endsWith("/");var H=R.lookupPath(f,{follow:!(p&131072),noent_okay:!0});A=H.node,f=H.path}var Z=!1;if(p&64)if(A){if(p&128)throw new R.ErrnoError(20)}else{if(L)throw new R.ErrnoError(31);A=R.mknod(f,S|511,0),Z=!0}if(!A)throw new R.ErrnoError(44);if(R.isChrdev(A.mode)&&(p&=-513),p&65536&&!R.isDir(A.mode))throw new R.ErrnoError(54);if(!Z){var J=R.mayOpen(A,p);if(J)throw new R.ErrnoError(J)}p&512&&!Z&&R.truncate(A,0),p&=-131713;var yt=R.createStream({node:A,path:R.getPath(A),flags:p,seekable:!0,position:0,stream_ops:A.stream_ops,ungotten:[],error:!1});return yt.stream_ops.open&&yt.stream_ops.open(yt),Z&&R.chmod(A,S&511),i.logReadFiles&&!(p&1)&&(f in R.readFiles||(R.readFiles[f]=1)),yt},close(f){if(R.isClosed(f))throw new R.ErrnoError(8);f.getdents&&(f.getdents=null);try{f.stream_ops.close&&f.stream_ops.close(f)}catch(p){throw p}finally{R.closeStream(f.fd)}f.fd=null},isClosed(f){return f.fd===null},llseek(f,p,S){if(R.isClosed(f))throw new R.ErrnoError(8);if(!f.seekable||!f.stream_ops.llseek)throw new R.ErrnoError(70);if(S!=0&&S!=1&&S!=2)throw new R.ErrnoError(28);return f.position=f.stream_ops.llseek(f,p,S),f.ungotten=[],f.position},read(f,p,S,A,L){if(A<0||L<0)throw new R.ErrnoError(28);if(R.isClosed(f))throw new R.ErrnoError(8);if((f.flags&2097155)===1)throw new R.ErrnoError(8);if(R.isDir(f.node.mode))throw new R.ErrnoError(31);if(!f.stream_ops.read)throw new R.ErrnoError(28);var H=typeof L<"u";if(!H)L=f.position;else if(!f.seekable)throw new R.ErrnoError(70);var Z=f.stream_ops.read(f,p,S,A,L);return H||(f.position+=Z),Z},write(f,p,S,A,L,H){if(A<0||L<0)throw new R.ErrnoError(28);if(R.isClosed(f))throw new R.ErrnoError(8);if((f.flags&2097155)===0)throw new R.ErrnoError(8);if(R.isDir(f.node.mode))throw new R.ErrnoError(31);if(!f.stream_ops.write)throw new R.ErrnoError(28);f.seekable&&f.flags&1024&&R.llseek(f,0,2);var Z=typeof L<"u";if(!Z)L=f.position;else if(!f.seekable)throw new R.ErrnoError(70);var J=f.stream_ops.write(f,p,S,A,L,H);return Z||(f.position+=J),J},mmap(f,p,S,A,L){if((A&2)!==0&&(L&2)===0&&(f.flags&2097155)!==2)throw new R.ErrnoError(2);if((f.flags&2097155)===1)throw new R.ErrnoError(2);if(!f.stream_ops.mmap)throw new R.ErrnoError(43);if(!p)throw new R.ErrnoError(28);return f.stream_ops.mmap(f,p,S,A,L)},msync(f,p,S,A,L){return f.stream_ops.msync?f.stream_ops.msync(f,p,S,A,L):0},ioctl(f,p,S){if(!f.stream_ops.ioctl)throw new R.ErrnoError(59);return f.stream_ops.ioctl(f,p,S)},readFile(f,p={}){if(p.flags=p.flags||0,p.encoding=p.encoding||"binary",p.encoding!=="utf8"&&p.encoding!=="binary")throw new Error(`Invalid encoding type "${p.encoding}"`);var S,A=R.open(f,p.flags),L=R.stat(f),H=L.size,Z=new Uint8Array(H);return R.read(A,Z,0,H,0),p.encoding==="utf8"?S=se(Z):p.encoding==="binary"&&(S=Z),R.close(A),S},writeFile(f,p,S={}){S.flags=S.flags||577;var A=R.open(f,S.flags,S.mode);if(typeof p=="string"){var L=new Uint8Array(jt(p)+1),H=oe(p,L,0,L.length);R.write(A,L,0,H,void 0,S.canOwn)}else if(ArrayBuffer.isView(p))R.write(A,p,0,p.byteLength,void 0,S.canOwn);else throw new Error("Unsupported data type");R.close(A)},cwd:()=>R.currentPath,chdir(f){var p=R.lookupPath(f,{follow:!0});if(p.node===null)throw new R.ErrnoError(44);if(!R.isDir(p.node.mode))throw new R.ErrnoError(54);var S=R.nodePermissions(p.node,"x");if(S)throw new R.ErrnoError(S);R.currentPath=p.path},createDefaultDirectories(){R.mkdir("/tmp"),R.mkdir("/home"),R.mkdir("/home/web_user")},createDefaultDevices(){R.mkdir("/dev"),R.registerDevice(R.makedev(1,3),{read:()=>0,write:(A,L,H,Z,J)=>Z,llseek:()=>0}),R.mkdev("/dev/null",R.makedev(1,3)),ye.register(R.makedev(5,0),ye.default_tty_ops),ye.register(R.makedev(6,0),ye.default_tty1_ops),R.mkdev("/dev/tty",R.makedev(5,0)),R.mkdev("/dev/tty1",R.makedev(6,0));var f=new Uint8Array(1024),p=0,S=()=>(p===0&&(Xt(f),p=f.byteLength),f[--p]);R.createDevice("/dev","random",S),R.createDevice("/dev","urandom",S),R.mkdir("/dev/shm"),R.mkdir("/dev/shm/tmp")},createSpecialDirectories(){R.mkdir("/proc");var f=R.mkdir("/proc/self");R.mkdir("/proc/self/fd"),R.mount({mount(){var p=R.createNode(f,"fd",16895,73);return p.stream_ops={llseek:Wt.stream_ops.llseek},p.node_ops={lookup(S,A){var L=+A,H=R.getStreamChecked(L),Z={parent:null,mount:{mountpoint:"fake"},node_ops:{readlink:()=>H.path},id:L+1};return Z.parent=Z,Z},readdir(){return Array.from(R.streams.entries()).filter(([S,A])=>A).map(([S,A])=>S.toString())}},p}},{},"/proc/self/fd")},createStandardStreams(f,p,S){f?R.createDevice("/dev","stdin",f):R.symlink("/dev/tty","/dev/stdin"),p?R.createDevice("/dev","stdout",null,p):R.symlink("/dev/tty","/dev/stdout"),S?R.createDevice("/dev","stderr",null,S):R.symlink("/dev/tty1","/dev/stderr"),R.open("/dev/stdin",0),R.open("/dev/stdout",1),R.open("/dev/stderr",1)},staticInit(){R.nameTable=new Array(4096),R.mount(Wt,{},"/"),R.createDefaultDirectories(),R.createDefaultDevices(),R.createSpecialDirectories(),R.filesystems={MEMFS:Wt}},init(f,p,S){R.initialized=!0,f??(f=i.stdin),p??(p=i.stdout),S??(S=i.stderr),R.createStandardStreams(f,p,S)},quit(){R.initialized=!1;for(var f of R.streams)f&&R.close(f)},findObject(f,p){var S=R.analyzePath(f,p);return S.exists?S.object:null},analyzePath(f,p){try{var S=R.lookupPath(f,{follow:!p});f=S.path}catch{}var A={isRoot:!1,exists:!1,error:0,name:null,path:null,object:null,parentExists:!1,parentPath:null,parentObject:null};try{var S=R.lookupPath(f,{parent:!0});A.parentExists=!0,A.parentPath=S.path,A.parentObject=S.node,A.name=St.basename(f),S=R.lookupPath(f,{follow:!p}),A.exists=!0,A.path=S.path,A.object=S.node,A.name=S.node.name,A.isRoot=S.path==="/"}catch(L){A.error=L.errno}return A},createPath(f,p,S,A){f=typeof f=="string"?f:R.getPath(f);for(var L=p.split("/").reverse();L.length;){var H=L.pop();if(H){var Z=St.join2(f,H);try{R.mkdir(Z)}catch(J){if(J.errno!=20)throw J}f=Z}}return Z},createFile(f,p,S,A,L){var H=St.join2(typeof f=="string"?f:R.getPath(f),p),Z=ge(A,L);return R.create(H,Z)},createDataFile(f,p,S,A,L,H){var Z=p;f&&(f=typeof f=="string"?f:R.getPath(f),Z=p?St.join2(f,p):f);var J=ge(A,L),yt=R.create(Z,J);if(S){if(typeof S=="string"){for(var Bt=new Array(S.length),Kt=0,te=S.length;Kt<te;++Kt)Bt[Kt]=S.charCodeAt(Kt);S=Bt}R.chmod(yt,J|146);var xe=R.open(yt,577);R.write(xe,S,0,S.length,0,H),R.close(xe),R.chmod(yt,J)}},createDevice(f,p,S,A){var J;var L=St.join2(typeof f=="string"?f:R.getPath(f),p),H=ge(!!S,!!A);(J=R.createDevice).major??(J.major=64);var Z=R.makedev(R.createDevice.major++,0);return R.registerDevice(Z,{open(yt){yt.seekable=!1},close(yt){var Bt;(Bt=A==null?void 0:A.buffer)!=null&&Bt.length&&A(10)},read(yt,Bt,Kt,te,xe){for(var $t=0,Ee=0;Ee<te;Ee++){var dn;try{dn=S()}catch{throw new R.ErrnoError(29)}if(dn===void 0&&$t===0)throw new R.ErrnoError(6);if(dn==null)break;$t++,Bt[Kt+Ee]=dn}return $t&&(yt.node.atime=Date.now()),$t},write(yt,Bt,Kt,te,xe){for(var $t=0;$t<te;$t++)try{A(Bt[Kt+$t])}catch{throw new R.ErrnoError(29)}return te&&(yt.node.mtime=yt.node.ctime=Date.now()),$t}}),R.mkdev(L,H,Z)},forceLoadFile(f){if(f.isDevice||f.isFolder||f.link||f.contents)return!0;if(typeof XMLHttpRequest<"u")throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");try{f.contents=C(f.url),f.usedBytes=f.contents.length}catch{throw new R.ErrnoError(29)}},createLazyFile(f,p,S,A,L){class H{constructor(){ha(this,"lengthKnown",!1);ha(this,"chunks",[])}get($t){if(!($t>this.length-1||$t<0)){var Ee=$t%this.chunkSize,dn=$t/this.chunkSize|0;return this.getter(dn)[Ee]}}setDataGetter($t){this.getter=$t}cacheLength(){var $t=new XMLHttpRequest;if($t.open("HEAD",S,!1),$t.send(null),!($t.status>=200&&$t.status<300||$t.status===304))throw new Error("Couldn't load "+S+". Status: "+$t.status);var Ee=Number($t.getResponseHeader("Content-length")),dn,si=(dn=$t.getResponseHeader("Accept-Ranges"))&&dn==="bytes",ti=(dn=$t.getResponseHeader("Content-Encoding"))&&dn==="gzip",qn=1024*1024;si||(qn=Ee);var Yn=(oi,Ea)=>{if(oi>Ea)throw new Error("invalid range ("+oi+", "+Ea+") or no bytes requested!");if(Ea>Ee-1)throw new Error("only "+Ee+" bytes available! programmer error!");var Mn=new XMLHttpRequest;if(Mn.open("GET",S,!1),Ee!==qn&&Mn.setRequestHeader("Range","bytes="+oi+"-"+Ea),Mn.responseType="arraybuffer",Mn.overrideMimeType&&Mn.overrideMimeType("text/plain; charset=x-user-defined"),Mn.send(null),!(Mn.status>=200&&Mn.status<300||Mn.status===304))throw new Error("Couldn't load "+S+". Status: "+Mn.status);return Mn.response!==void 0?new Uint8Array(Mn.response||[]):ue(Mn.responseText||"")},zr=this;zr.setDataGetter(oi=>{var Ea=oi*qn,Mn=(oi+1)*qn-1;if(Mn=Math.min(Mn,Ee-1),typeof zr.chunks[oi]>"u"&&(zr.chunks[oi]=Yn(Ea,Mn)),typeof zr.chunks[oi]>"u")throw new Error("doXHR failed!");return zr.chunks[oi]}),(ti||!Ee)&&(qn=Ee=1,Ee=this.getter(0).length,qn=Ee,V("LazyFiles on gzip forces download of the whole file when length is accessed")),this._length=Ee,this._chunkSize=qn,this.lengthKnown=!0}get length(){return this.lengthKnown||this.cacheLength(),this._length}get chunkSize(){return this.lengthKnown||this.cacheLength(),this._chunkSize}}if(typeof XMLHttpRequest<"u"){if(!m)throw"Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";var Z=new H,J={isDevice:!1,contents:Z}}else var J={isDevice:!1,url:S};var yt=R.createFile(f,p,J,A,L);J.contents?yt.contents=J.contents:J.url&&(yt.contents=null,yt.url=J.url),Object.defineProperties(yt,{usedBytes:{get:function(){return this.contents.length}}});var Bt={},Kt=Object.keys(yt.stream_ops);Kt.forEach(xe=>{var $t=yt.stream_ops[xe];Bt[xe]=(...Ee)=>(R.forceLoadFile(yt),$t(...Ee))});function te(xe,$t,Ee,dn,si){var ti=xe.node.contents;if(si>=ti.length)return 0;var qn=Math.min(ti.length-si,dn);if(ti.slice)for(var Yn=0;Yn<qn;Yn++)$t[Ee+Yn]=ti[si+Yn];else for(var Yn=0;Yn<qn;Yn++)$t[Ee+Yn]=ti.get(si+Yn);return qn}return Bt.read=(xe,$t,Ee,dn,si)=>(R.forceLoadFile(yt),te(xe,$t,Ee,dn,si)),Bt.mmap=(xe,$t,Ee,dn,si)=>{R.forceLoadFile(yt);var ti=me();if(!ti)throw new R.ErrnoError(48);return te(xe,k,ti,$t,Ee),{ptr:ti,allocated:!0}},yt.stream_ops=Bt,yt}},cn=(f,p)=>f?se(K,f,p):"",Se={DEFAULT_POLLMASK:5,calculateAt(f,p,S){if(St.isAbs(p))return p;var A;if(f===-100)A=R.cwd();else{var L=Se.getStreamFromFD(f);A=L.path}if(p.length==0){if(!S)throw new R.ErrnoError(44);return A}return A+"/"+p},writeStat(f,p){q[f>>2]=p.dev,q[f+4>>2]=p.mode,rt[f+8>>2]=p.nlink,q[f+12>>2]=p.uid,q[f+16>>2]=p.gid,q[f+20>>2]=p.rdev,_t[f+24>>3]=BigInt(p.size),q[f+32>>2]=4096,q[f+36>>2]=p.blocks;var S=p.atime.getTime(),A=p.mtime.getTime(),L=p.ctime.getTime();return _t[f+40>>3]=BigInt(Math.floor(S/1e3)),rt[f+48>>2]=S%1e3*1e3*1e3,_t[f+56>>3]=BigInt(Math.floor(A/1e3)),rt[f+64>>2]=A%1e3*1e3*1e3,_t[f+72>>3]=BigInt(Math.floor(L/1e3)),rt[f+80>>2]=L%1e3*1e3*1e3,_t[f+88>>3]=BigInt(p.ino),0},writeStatFs(f,p){q[f+4>>2]=p.bsize,q[f+40>>2]=p.bsize,q[f+8>>2]=p.blocks,q[f+12>>2]=p.bfree,q[f+16>>2]=p.bavail,q[f+20>>2]=p.files,q[f+24>>2]=p.ffree,q[f+28>>2]=p.fsid,q[f+44>>2]=p.flags,q[f+36>>2]=p.namelen},doMsync(f,p,S,A,L){if(!R.isFile(p.node.mode))throw new R.ErrnoError(43);if(A&2)return 0;var H=K.slice(f,f+S);R.msync(p,H,L,S,A)},getStreamFromFD(f){var p=R.getStreamChecked(f);return p},varargs:void 0,getStr(f){var p=cn(f);return p}};function ri(f,p,S){Se.varargs=S;try{var A=Se.getStreamFromFD(f);switch(p){case 0:{var L=ft();if(L<0)return-28;for(;R.streams[L];)L++;var H;return H=R.dupStream(A,L),H.fd}case 1:case 2:return 0;case 3:return A.flags;case 4:{var L=ft();return A.flags|=L,0}case 12:{var L=bt(),Z=0;return F[L+Z>>1]=2,0}case 13:case 14:return 0}return-28}catch(J){if(typeof R>"u"||J.name!=="ErrnoError")throw J;return-J.errno}}function En(f,p,S){Se.varargs=S;try{var A=Se.getStreamFromFD(f);switch(p){case 21509:return A.tty?0:-59;case 21505:{if(!A.tty)return-59;if(A.tty.ops.ioctl_tcgets){var L=A.tty.ops.ioctl_tcgets(A),H=bt();q[H>>2]=L.c_iflag||0,q[H+4>>2]=L.c_oflag||0,q[H+8>>2]=L.c_cflag||0,q[H+12>>2]=L.c_lflag||0;for(var Z=0;Z<32;Z++)k[H+Z+17]=L.c_cc[Z]||0;return 0}return 0}case 21510:case 21511:case 21512:return A.tty?0:-59;case 21506:case 21507:case 21508:{if(!A.tty)return-59;if(A.tty.ops.ioctl_tcsets){for(var H=bt(),J=q[H>>2],yt=q[H+4>>2],Bt=q[H+8>>2],Kt=q[H+12>>2],te=[],Z=0;Z<32;Z++)te.push(k[H+Z+17]);return A.tty.ops.ioctl_tcsets(A.tty,p,{c_iflag:J,c_oflag:yt,c_cflag:Bt,c_lflag:Kt,c_cc:te})}return 0}case 21519:{if(!A.tty)return-59;var H=bt();return q[H>>2]=0,0}case 21520:return A.tty?-28:-59;case 21531:{var H=bt();return R.ioctl(A,p,H)}case 21523:{if(!A.tty)return-59;if(A.tty.ops.ioctl_tiocgwinsz){var xe=A.tty.ops.ioctl_tiocgwinsz(A.tty),H=bt();F[H>>1]=xe[0],F[H+2>>1]=xe[1]}return 0}case 21524:return A.tty?0:-59;case 21515:return A.tty?0:-59;default:return-28}}catch($t){if(typeof R>"u"||$t.name!=="ErrnoError")throw $t;return-$t.errno}}function _n(f,p,S,A){Se.varargs=A;try{p=Se.getStr(p),p=Se.calculateAt(f,p);var L=A?ft():0;return R.open(p,S,L).fd}catch(H){if(typeof R>"u"||H.name!=="ErrnoError")throw H;return-H.errno}}var Rn=()=>Lt(""),Qn=f=>{if(f===null)return"null";var p=typeof f;return p==="object"||p==="array"||p==="function"?f.toString():""+f},va=()=>{for(var f=new Array(256),p=0;p<256;++p)f[p]=String.fromCharCode(p);Dr=f},Dr,Wn=f=>{for(var p="",S=f;K[S];)p+=Dr[K[S++]];return p},fi={},Jn={},yi={},qi=i.BindingError=class extends Error{constructor(p){super(p),this.name="BindingError"}},hn=f=>{throw new qi(f)};function ya(f,p,S={}){var A=p.name;if(f||hn(`type "${A}" must have a positive integer typeid pointer`),Jn.hasOwnProperty(f)){if(S.ignoreDuplicateRegistrations)return;hn(`Cannot register type '${A}' twice`)}if(Jn[f]=p,delete yi[f],fi.hasOwnProperty(f)){var L=fi[f];delete fi[f],L.forEach(H=>H())}}function wn(f,p,S={}){return ya(f,p,S)}var un=(f,p,S)=>{switch(p){case 1:return S?A=>k[A]:A=>K[A];case 2:return S?A=>F[A>>1]:A=>O[A>>1];case 4:return S?A=>q[A>>2]:A=>rt[A>>2];case 8:return S?A=>_t[A>>3]:A=>Mt[A>>3];default:throw new TypeError(`invalid integer width (${p}): ${f}`)}},gs=(f,p,S,A,L)=>{p=Wn(p);var H=p.indexOf("u")!=-1;wn(f,{name:p,fromWireType:Z=>Z,toWireType:function(Z,J){if(typeof J!="bigint"&&typeof J!="number")throw new TypeError(`Cannot convert "${Qn(J)}" to ${this.name}`);return typeof J=="number"&&(J=BigInt(J)),J},argPackAdvance:Si,readValueFromPointer:un(p,S,!H),destructorFunction:null})},Si=8,Yi=(f,p,S,A)=>{p=Wn(p),wn(f,{name:p,fromWireType:function(L){return!!L},toWireType:function(L,H){return H?S:A},argPackAdvance:Si,readValueFromPointer:function(L){return this.fromWireType(K[L])},destructorFunction:null})},N=[],tt=[],pt=f=>{f>9&&--tt[f+1]===0&&(tt[f]=void 0,N.push(f))},gt=()=>tt.length/2-5-N.length,it=()=>{tt.push(0,1,void 0,1,null,1,!0,1,!1,1),i.count_emval_handles=gt},Ct={toValue:f=>(f||hn(`Cannot use deleted val. handle = ${f}`),tt[f]),toHandle:f=>{switch(f){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:{const p=N.pop()||tt.length;return tt[p]=f,tt[p+1]=1,p}}}};function zt(f){return this.fromWireType(rt[f>>2])}var Ht={name:"emscripten::val",fromWireType:f=>{var p=Ct.toValue(f);return pt(f),p},toWireType:(f,p)=>Ct.toHandle(p),argPackAdvance:Si,readValueFromPointer:zt,destructorFunction:null},Zt=f=>wn(f,Ht),de=(f,p)=>{switch(p){case 4:return function(S){return this.fromWireType(ht[S>>2])};case 8:return function(S){return this.fromWireType(X[S>>3])};default:throw new TypeError(`invalid float width (${p}): ${f}`)}},le=(f,p,S)=>{p=Wn(p),wn(f,{name:p,fromWireType:A=>A,toWireType:(A,L)=>L,argPackAdvance:Si,readValueFromPointer:de(p,S),destructorFunction:null})},ne=(f,p)=>Object.defineProperty(p,"name",{value:f}),Re=f=>{for(;f.length;){var p=f.pop(),S=f.pop();S(p)}};function Be(f){for(var p=1;p<f.length;++p)if(f[p]!==null&&f[p].destructorFunction===void 0)return!0;return!1}function rn(f,p,S,A){for(var L=Be(f),H=f.length-2,Z=[],J=["fn"],yt=0;yt<H;++yt)Z.push(`arg${yt}`),J.push(`arg${yt}Wired`);Z=Z.join(","),J=J.join(",");var Bt=`return function (${Z}) {
`;L&&(Bt+=`var destructors = [];
`);for(var Kt=L?"destructors":"null",te=["humanName","throwBindingError","invoker","fn","runDestructors","retType","classParam"],yt=0;yt<H;++yt)Bt+=`var arg${yt}Wired = argType${yt}['toWireType'](${Kt}, arg${yt});
`,te.push(`argType${yt}`);if(Bt+=(S||A?"var rv = ":"")+`invoker(${J});
`,L)Bt+=`runDestructors(destructors);
`;else for(var yt=2;yt<f.length;++yt){var xe=yt===1?"thisWired":"arg"+(yt-2)+"Wired";f[yt].destructorFunction!==null&&(Bt+=`${xe}_dtor(${xe});
`,te.push(`${xe}_dtor`))}return S&&(Bt+=`var ret = retType['fromWireType'](rv);
return ret;
`),Bt+=`}
`,[te,Bt]}function Le(f,p,S,A,L,H){var Z=p.length;Z<2&&hn("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var J=p[1]!==null&&S!==null,yt=Be(p),Bt=p[0].name!=="void",Kt=[f,hn,A,L,Re,p[0],p[1]],te=0;te<Z-2;++te)Kt.push(p[te+2]);if(!yt)for(var te=2;te<p.length;++te)p[te].destructorFunction!==null&&Kt.push(p[te].destructorFunction);let[xe,$t]=rn(p,J,Bt,H);var Ee=new Function(...xe,$t)(...Kt);return ne(f,Ee)}var Ne=(f,p,S)=>{if(f[p].overloadTable===void 0){var A=f[p];f[p]=function(...L){return f[p].overloadTable.hasOwnProperty(L.length)||hn(`Function '${S}' called with an invalid number of arguments (${L.length}) - expects one of (${f[p].overloadTable})!`),f[p].overloadTable[L.length].apply(this,L)},f[p].overloadTable=[],f[p].overloadTable[A.argCount]=A}},ce=(f,p,S)=>{i.hasOwnProperty(f)?((S===void 0||i[f].overloadTable!==void 0&&i[f].overloadTable[S]!==void 0)&&hn(`Cannot register public name '${f}' twice`),Ne(i,f,f),i[f].overloadTable.hasOwnProperty(S)&&hn(`Cannot register multiple overloads of a function with the same number of arguments (${S})!`),i[f].overloadTable[S]=p):(i[f]=p,i[f].argCount=S)},sn=(f,p)=>{for(var S=[],A=0;A<f;A++)S.push(rt[p+A*4>>2]);return S},Ie=i.InternalError=class extends Error{constructor(p){super(p),this.name="InternalError"}},Cn=f=>{throw new Ie(f)},sa=(f,p,S)=>{i.hasOwnProperty(f)||Cn("Replacing nonexistent public symbol"),i[f].overloadTable!==void 0&&S!==void 0?i[f].overloadTable[S]=p:(i[f]=p,i[f].argCount=S)},Ye=[],Li,je=f=>{var p=Ye[f];return p||(Ye[f]=p=Li.get(f)),p},Fn=(f,p,S=!1)=>{f=Wn(f);function A(){var H=je(p);return H}var L=A();return typeof L!="function"&&hn(`unknown function pointer with signature ${f}: ${p}`),L};class vn extends Error{}var yn=f=>{var p=$u(f),S=Wn(p);return xa(p),S},Dn=(f,p)=>{var S=[],A={};function L(H){if(!A[H]&&!Jn[H]){if(yi[H]){yi[H].forEach(L);return}S.push(H),A[H]=!0}}throw p.forEach(L),new vn(`${f}: `+S.map(yn).join([", "]))},Ni=(f,p,S)=>{f.forEach(J=>yi[J]=p);function A(J){var yt=S(J);yt.length!==f.length&&Cn("Mismatched type converter count");for(var Bt=0;Bt<f.length;++Bt)wn(f[Bt],yt[Bt])}var L=new Array(p.length),H=[],Z=0;p.forEach((J,yt)=>{Jn.hasOwnProperty(J)?L[yt]=Jn[J]:(H.push(J),fi.hasOwnProperty(J)||(fi[J]=[]),fi[J].push(()=>{L[yt]=Jn[J],++Z,Z===H.length&&A(L)}))}),H.length===0&&A(L)},ji=f=>{f=f.trim();const p=f.indexOf("(");return p===-1?f:f.slice(0,p)},Bl=(f,p,S,A,L,H,Z,J)=>{var yt=sn(p,S);f=Wn(f),f=ji(f),L=Fn(A,L,Z),ce(f,function(){Dn(`Cannot call ${f} due to unbound types`,yt)},p-1),Ni([],yt,Bt=>{var Kt=[Bt[0],null].concat(Bt.slice(1));return sa(f,Le(f,Kt,null,L,H,Z),p-1),[]})},Il=(f,p,S,A,L)=>{p=Wn(p);var H=Kt=>Kt;if(A===0){var Z=32-8*S;H=Kt=>Kt<<Z>>>Z}var J=p.includes("unsigned"),yt=(Kt,te)=>{},Bt;J?Bt=function(Kt,te){return yt(te,this.name),te>>>0}:Bt=function(Kt,te){return yt(te,this.name),te},wn(f,{name:p,fromWireType:H,toWireType:Bt,argPackAdvance:Si,readValueFromPointer:un(p,S,A!==0),destructorFunction:null})},bo=(f,p,S)=>{var A=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array],L=A[p];function H(Z){var J=rt[Z>>2],yt=rt[Z+4>>2];return new L(k.buffer,yt,J)}S=Wn(S),wn(f,{name:S,fromWireType:H,argPackAdvance:Si,readValueFromPointer:H},{ignoreDuplicateRegistrations:!0})},ja=(f,p,S)=>oe(f,K,p,S),Bu=(f,p)=>{p=Wn(p),wn(f,{name:p,fromWireType(S){for(var A=rt[S>>2],L=S+4,H,Z,J=L,Z=0;Z<=A;++Z){var yt=L+Z;if(Z==A||K[yt]==0){var Bt=yt-J,Kt=cn(J,Bt);H===void 0?H=Kt:(H+="\0",H+=Kt),J=yt+1}}return xa(S),H},toWireType(S,A){A instanceof ArrayBuffer&&(A=new Uint8Array(A));var L,H=typeof A=="string";H||ArrayBuffer.isView(A)&&A.BYTES_PER_ELEMENT==1||hn("Cannot pass non-string to std::string"),H?L=jt(A):L=A.length;var Z=Xl(4+L+1),J=Z+4;return rt[Z>>2]=L,H?ja(A,J,L+1):K.set(A,J),S!==null&&S.push(xa,Z),Z},argPackAdvance:Si,readValueFromPointer:zt,destructorFunction(S){xa(S)}})},Ur=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0,To=(f,p)=>{for(var S=f,A=S>>1,L=A+p/2;!(A>=L)&&O[A];)++A;if(S=A<<1,S-f>32&&Ur)return Ur.decode(K.subarray(f,S));for(var H="",Z=0;!(Z>=p/2);++Z){var J=F[f+Z*2>>1];if(J==0)break;H+=String.fromCharCode(J)}return H},Ao=(f,p,S)=>{if(S??(S=2147483647),S<2)return 0;S-=2;for(var A=p,L=S<f.length*2?S/2:f.length,H=0;H<L;++H){var Z=f.charCodeAt(H);F[p>>1]=Z,p+=2}return F[p>>1]=0,p-A},Za=f=>f.length*2,Ka=(f,p)=>{for(var S=0,A="";!(S>=p/4);){var L=q[f+S*4>>2];if(L==0)break;if(++S,L>=65536){var H=L-65536;A+=String.fromCharCode(55296|H>>10,56320|H&1023)}else A+=String.fromCharCode(L)}return A},zl=(f,p,S)=>{if(S??(S=2147483647),S<4)return 0;for(var A=p,L=A+S-4,H=0;H<f.length;++H){var Z=f.charCodeAt(H);if(Z>=55296&&Z<=57343){var J=f.charCodeAt(++H);Z=65536+((Z&1023)<<10)|J&1023}if(q[p>>2]=Z,p+=4,p+4>L)break}return q[p>>2]=0,p-A},Ro=f=>{for(var p=0,S=0;S<f.length;++S){var A=f.charCodeAt(S);A>=55296&&A<=57343&&++S,p+=4}return p},Hl=(f,p,S)=>{S=Wn(S);var A,L,H,Z;p===2?(A=To,L=Ao,Z=Za,H=J=>O[J>>1]):p===4&&(A=Ka,L=zl,Z=Ro,H=J=>rt[J>>2]),wn(f,{name:S,fromWireType:J=>{for(var yt=rt[J>>2],Bt,Kt=J+4,te=0;te<=yt;++te){var xe=J+4+te*p;if(te==yt||H(xe)==0){var $t=xe-Kt,Ee=A(Kt,$t);Bt===void 0?Bt=Ee:(Bt+="\0",Bt+=Ee),Kt=xe+p}}return xa(J),Bt},toWireType:(J,yt)=>{typeof yt!="string"&&hn(`Cannot pass non-string to C++ string type ${S}`);var Bt=Z(yt),Kt=Xl(4+Bt+p);return rt[Kt>>2]=Bt/p,L(yt,Kt+4,Bt+p),J!==null&&J.push(xa,Kt),Kt},argPackAdvance:Si,readValueFromPointer:zt,destructorFunction(J){xa(J)}})},Lr=(f,p)=>{p=Wn(p),wn(f,{isVoid:!0,name:p,argPackAdvance:0,fromWireType:()=>{},toWireType:(S,A)=>{}})},xi=(f,p)=>{var S=Jn[f];return S===void 0&&hn(`${p} has unknown type ${yn(f)}`),S},_s=(f,p,S)=>{var A=[],L=f.toWireType(A,S);return A.length&&(rt[p>>2]=Ct.toHandle(A)),L},Nr=(f,p,S)=>(f=Ct.toValue(f),p=xi(p,"emval::as"),_s(p,S,f)),Oi=[],wo=(f,p,S,A)=>(f=Oi[f],p=Ct.toValue(p),f(null,p,S,A)),vs={},Co=f=>{var p=vs[f];return p===void 0?Wn(f):p},Or=()=>typeof globalThis=="object"?globalThis:function(){return Function}()("return this")(),ys=f=>f===0?Ct.toHandle(Or()):(f=Co(f),Ct.toHandle(Or()[f])),Gl=f=>{var p=Oi.length;return Oi.push(f),p},$n=(f,p)=>{for(var S=new Array(f),A=0;A<f;++A)S[A]=xi(rt[p+A*4>>2],`parameter ${A}`);return S},Sa=(f,p,S)=>{var A=$n(f,p),L=A.shift();f--;var H=`return function (obj, func, destructorsRef, args) {
`,Z=0,J=[];S===0&&J.push("obj");for(var yt=["retType"],Bt=[L],Kt=0;Kt<f;++Kt)J.push(`arg${Kt}`),yt.push(`argType${Kt}`),Bt.push(A[Kt]),H+=`  var arg${Kt} = argType${Kt}.readValueFromPointer(args${Z?"+"+Z:""});
`,Z+=A[Kt].argPackAdvance;var te=S===1?"new func":"func.call";H+=`  var rv = ${te}(${J.join(", ")});
`,L.isVoid||(yt.push("emval_returnValue"),Bt.push(_s),H+=`  return emval_returnValue(retType, destructorsRef, rv);
`),H+=`};
`;var xe=new Function(...yt,H)(...Bt),$t=`methodCaller<(${A.map(Ee=>Ee.name).join(", ")}) => ${L.name}>`;return Gl(ne($t,xe))},Ss=(f,p)=>(f=Ct.toValue(f),p=Ct.toValue(p),Ct.toHandle(f[p])),Pr=f=>Ct.toHandle(Co(f)),Iu=()=>Ct.toHandle({}),Do=f=>{var p=Ct.toValue(f);Re(p),pt(f)},Uo=(f,p,S)=>{f=Ct.toValue(f),p=Ct.toValue(p),S=Ct.toValue(S),f[p]=S},Fr=(f,p)=>{f=xi(f,"_emval_take_value");var S=f.readValueFromPointer(p);return Ct.toHandle(S)},xs=(f,p,S,A)=>{var L=new Date().getFullYear(),H=new Date(L,0,1),Z=new Date(L,6,1),J=H.getTimezoneOffset(),yt=Z.getTimezoneOffset(),Bt=Math.max(J,yt);rt[f>>2]=Bt*60,q[p>>2]=+(J!=yt);var Kt=$t=>{var Ee=$t>=0?"-":"+",dn=Math.abs($t),si=String(Math.floor(dn/60)).padStart(2,"0"),ti=String(dn%60).padStart(2,"0");return`UTC${Ee}${si}${ti}`},te=Kt(J),xe=Kt(yt);yt<J?(ja(te,S,17),ja(xe,A,17)):(ja(te,A,17),ja(xe,S,17))},Vl=()=>2147483648,zu=(f,p)=>Math.ceil(f/p)*p,Hu=f=>{var p=Y.buffer,S=(f-p.byteLength+65535)/65536|0;try{return Y.grow(S),et(),1}catch{}},Gu=f=>{var p=K.length;f>>>=0;var S=Vl();if(f>S)return!1;for(var A=1;A<=4;A*=2){var L=p*(1+.2/A);L=Math.min(L,f+100663296);var H=Math.min(S,zu(Math.max(f,L),65536)),Z=Hu(H);if(Z)return!0}return!1},Br={},Vu=()=>v||"./this.program",Ir=()=>{if(!Ir.strings){var f=(typeof navigator=="object"&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",p={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:f,_:Vu()};for(var S in Br)Br[S]===void 0?delete p[S]:p[S]=Br[S];var A=[];for(var S in p)A.push(`${S}=${p[S]}`);Ir.strings=A}return Ir.strings},ku=(f,p)=>{var S=0,A=0;for(var L of Ir()){var H=p+S;rt[f+A>>2]=H,S+=ja(L,H,1/0)+1,A+=4}return 0},Xu=(f,p)=>{var S=Ir();rt[f>>2]=S.length;var A=0;for(var L of S)A+=jt(L)+1;return rt[p>>2]=A,0};function Wu(f){try{var p=Se.getStreamFromFD(f);return R.close(p),0}catch(S){if(typeof R>"u"||S.name!=="ErrnoError")throw S;return S.errno}}var kl=(f,p,S,A)=>{for(var L=0,H=0;H<S;H++){var Z=rt[p>>2],J=rt[p+4>>2];p+=8;var yt=R.read(f,k,Z,J,A);if(yt<0)return-1;if(L+=yt,yt<J)break}return L};function qu(f,p,S,A){try{var L=Se.getStreamFromFD(f),H=kl(L,p,S);return rt[A>>2]=H,0}catch(Z){if(typeof R>"u"||Z.name!=="ErrnoError")throw Z;return Z.errno}}var Yu=9007199254740992,ju=-9007199254740992,Zu=f=>f<ju||f>Yu?NaN:Number(f);function Lo(f,p,S,A){p=Zu(p);try{if(isNaN(p))return 61;var L=Se.getStreamFromFD(f);return R.llseek(L,p,S),_t[A>>3]=BigInt(L.position),L.getdents&&p===0&&S===0&&(L.getdents=null),0}catch(H){if(typeof R>"u"||H.name!=="ErrnoError")throw H;return H.errno}}var Ku=(f,p,S,A)=>{for(var L=0,H=0;H<S;H++){var Z=rt[p>>2],J=rt[p+4>>2];p+=8;var yt=R.write(f,k,Z,J,A);if(yt<0)return-1;if(L+=yt,yt<J)break}return L};function Qu(f,p,S,A){try{var L=Se.getStreamFromFD(f),H=Ku(L,p,S);return rt[A>>2]=H,0}catch(Z){if(typeof R>"u"||Z.name!=="ErrnoError")throw Z;return Z.errno}}R.createPreloadedFile=Yt,R.staticInit(),Wt.doesNotExistError=new R.ErrnoError(44),Wt.doesNotExistError.stack="<generic error, no stack>",va(),it(),i.noExitRuntime&&i.noExitRuntime,i.preloadPlugins&&(vt=i.preloadPlugins),i.print&&(V=i.print),i.printErr&&(G=i.printErr),i.wasmBinary&&(P=i.wasmBinary),i.arguments&&i.arguments,i.thisProgram&&(v=i.thisProgram),i.FS=R;var Ju={h:U,m:ri,B:En,C:_n,y:Rn,o:gs,G:Yi,E:Zt,n:le,p:Bl,e:Il,b:bo,F:Bu,j:Hl,H:Lr,d:Nr,s:wo,a:pt,u:ys,t:Sa,g:Ss,f:Pr,r:Iu,c:Do,i:Uo,q:Fr,v:xs,D:Gu,w:ku,x:Xu,k:Wu,z:qu,A:Lo,l:Qu},Pi=await j();Pi.J;var $u=Pi.L,Xl=Pi.M,xa=Pi.N;function No(){if(Rt>0){Ut=No;return}if(Nt(),Rt>0){Ut=No;return}function f(){var p;i.calledRun=!0,!z&&(B(),r(i),(p=i.onRuntimeInitialized)==null||p.call(i),ct())}i.setStatus?(i.setStatus("Running..."),setTimeout(()=>{setTimeout(()=>i.setStatus(""),1),f()},1)):f()}function tf(){if(i.preInit)for(typeof i.preInit=="function"&&(i.preInit=[i.preInit]);i.preInit.length>0;)i.preInit.shift()()}return tf(),No(),t=c,t};const wA=""+new URL("bunny-BpsE-x2G.obj",import.meta.url).href,_0=500,v0=500;function CA(){const s=Q0(w=>w.position),t=Lu(w=>w.modelCenter),i=Lu(w=>w.boundingSphereRadius),[r,l]=Vn.useState(),c=Vn.useRef(null),[d,m]=Vn.useState(!1),_=Vn.useRef(null),[g,v]=Vn.useState(!0);Vn.useEffect(()=>{const w=setTimeout(()=>(v(!1),()=>{clearTimeout(w)}),3e3)},[]);const y=()=>{const w=document.createElement("input");w.type="file",w.accept=".obj",w.addEventListener("change",C=>{const M=C.target;if(!M.files||M.files.length==0){l(void 0);return}const x=M.files[0];l(x),document.body.removeChild(w)}),w.style.display="none",document.body.appendChild(w),w.click()},E=async()=>{const C=await(await fetch(wA)).blob(),M=new File([C],"bunny.obj",{type:C.type});l(M)};Vn.useEffect(()=>{(async()=>{const C=await RA();c.current=C,m(!0)})()},[]);const b=()=>{if(!r||!c.current||!_.current||!s||!t)return;const w=c.current.FS,C=new FileReader;C.onload=()=>{if(!r||!c.current||!_.current||!C.result||!(C.result instanceof ArrayBuffer))return;const M=new Uint8Array(C.result);w.writeFile(`/${r.name}`,M,{canOwn:!0});const{width:x,height:V,data:G}=c.current.rayTracing(r.name,_0,v0,s,t,i),P=new Uint8ClampedArray(G);_.current.width=x,_.current.height=V,_.current.style.width=x,_.current.style.height=V;const Y=_.current.getContext("2d"),z=new ImageData(P,x,V);Y==null||Y.putImageData(z,0,0)},C.readAsArrayBuffer(r)};return Gn.jsxs(Gn.Fragment,{children:[Gn.jsxs("div",{children:["Upload .obj file: ",Gn.jsx("button",{onClick:y,children:"Upload"})]}),Gn.jsx("br",{}),Gn.jsxs("div",{children:["Try with a default model: ",Gn.jsx("button",{onClick:E,children:"Try"})]}),r&&Gn.jsxs(Gn.Fragment,{children:[Gn.jsxs("div",{style:{position:"relative"},children:[Gn.jsx(MA,{file:r,width:_0,height:v0}),Gn.jsx("div",{className:g?"visible":"invisible",children:"Drag to rotate"})]}),Gn.jsx("div",{children:Gn.jsx("button",{onClick:b,disabled:!d,children:"Generate Ray Tracing Image"})}),Gn.jsx("br",{}),Gn.jsx("canvas",{ref:_})]})]})}NS.createRoot(document.getElementById("root")).render(Gn.jsx(CA,{}));

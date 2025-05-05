var ES=Object.defineProperty;var MS=(s,t,i)=>t in s?ES(s,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):s[t]=i;var ha=(s,t,i)=>MS(s,typeof t!="symbol"?t+"":t,i);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const p of c.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&r(p)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var qc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function y0(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var qh={exports:{}},yl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var k_;function bS(){if(k_)return yl;k_=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(r,l,c){var p=null;if(c!==void 0&&(p=""+c),l.key!==void 0&&(p=""+l.key),"key"in l){c={};for(var m in l)m!=="key"&&(c[m]=l[m])}else c=l;return l=c.ref,{$$typeof:s,type:r,key:p,ref:l!==void 0?l:null,props:c}}return yl.Fragment=t,yl.jsx=i,yl.jsxs=i,yl}var X_;function TS(){return X_||(X_=1,qh.exports=bS()),qh.exports}var Xn=TS(),Yh={exports:{}},Sl={},jh={exports:{}},Zh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var W_;function AS(){return W_||(W_=1,function(s){function t(X,st){var tt=X.length;X.push(st);t:for(;0<tt;){var Lt=tt-1>>>1,I=X[Lt];if(0<l(I,st))X[Lt]=st,X[tt]=I,tt=Lt;else break t}}function i(X){return X.length===0?null:X[0]}function r(X){if(X.length===0)return null;var st=X[0],tt=X.pop();if(tt!==st){X[0]=tt;t:for(var Lt=0,I=X.length,ct=I>>>1;Lt<ct;){var At=2*(Lt+1)-1,Dt=X[At],at=At+1,bt=X[at];if(0>l(Dt,tt))at<I&&0>l(bt,Dt)?(X[Lt]=bt,X[at]=tt,Lt=at):(X[Lt]=Dt,X[At]=tt,Lt=At);else if(at<I&&0>l(bt,tt))X[Lt]=bt,X[at]=tt,Lt=at;else break t}}return st}function l(X,st){var tt=X.sortIndex-st.sortIndex;return tt!==0?tt:X.id-st.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var p=Date,m=p.now();s.unstable_now=function(){return p.now()-m}}var _=[],g=[],v=1,y=null,E=3,b=!1,w=!1,C=!1,M=!1,x=typeof setTimeout=="function"?setTimeout:null,V=typeof clearTimeout=="function"?clearTimeout:null,H=typeof setImmediate<"u"?setImmediate:null;function P(X){for(var st=i(g);st!==null;){if(st.callback===null)r(g);else if(st.startTime<=X)r(g),st.sortIndex=st.expirationTime,t(_,st);else break;st=i(g)}}function Y(X){if(C=!1,P(X),!w)if(i(_)!==null)w=!0,z||(z=!0,rt());else{var st=i(g);st!==null&&Mt(Y,st.startTime-X)}}var z=!1,k=-1,K=5,F=-1;function O(){return M?!0:!(s.unstable_now()-F<K)}function q(){if(M=!1,z){var X=s.unstable_now();F=X;var st=!0;try{t:{w=!1,C&&(C=!1,V(k),k=-1),b=!0;var tt=E;try{e:{for(P(X),y=i(_);y!==null&&!(y.expirationTime>X&&O());){var Lt=y.callback;if(typeof Lt=="function"){y.callback=null,E=y.priorityLevel;var I=Lt(y.expirationTime<=X);if(X=s.unstable_now(),typeof I=="function"){y.callback=I,P(X),st=!0;break e}y===i(_)&&r(_),P(X)}else r(_);y=i(_)}if(y!==null)st=!0;else{var ct=i(g);ct!==null&&Mt(Y,ct.startTime-X),st=!1}}break t}finally{y=null,E=tt,b=!1}st=void 0}}finally{st?rt():z=!1}}}var rt;if(typeof H=="function")rt=function(){H(q)};else if(typeof MessageChannel<"u"){var dt=new MessageChannel,_t=dt.port2;dt.port1.onmessage=q,rt=function(){_t.postMessage(null)}}else rt=function(){x(q,0)};function Mt(X,st){k=x(function(){X(s.unstable_now())},st)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(X){X.callback=null},s.unstable_forceFrameRate=function(X){0>X||125<X?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<X?Math.floor(1e3/X):5},s.unstable_getCurrentPriorityLevel=function(){return E},s.unstable_next=function(X){switch(E){case 1:case 2:case 3:var st=3;break;default:st=E}var tt=E;E=st;try{return X()}finally{E=tt}},s.unstable_requestPaint=function(){M=!0},s.unstable_runWithPriority=function(X,st){switch(X){case 1:case 2:case 3:case 4:case 5:break;default:X=3}var tt=E;E=X;try{return st()}finally{E=tt}},s.unstable_scheduleCallback=function(X,st,tt){var Lt=s.unstable_now();switch(typeof tt=="object"&&tt!==null?(tt=tt.delay,tt=typeof tt=="number"&&0<tt?Lt+tt:Lt):tt=Lt,X){case 1:var I=-1;break;case 2:I=250;break;case 5:I=1073741823;break;case 4:I=1e4;break;default:I=5e3}return I=tt+I,X={id:v++,callback:st,priorityLevel:X,startTime:tt,expirationTime:I,sortIndex:-1},tt>Lt?(X.sortIndex=tt,t(g,X),i(_)===null&&X===i(g)&&(C?(V(k),k=-1):C=!0,Mt(Y,tt-Lt))):(X.sortIndex=I,t(_,X),w||b||(w=!0,z||(z=!0,rt()))),X},s.unstable_shouldYield=O,s.unstable_wrapCallback=function(X){var st=E;return function(){var tt=E;E=st;try{return X.apply(this,arguments)}finally{E=tt}}}}(Zh)),Zh}var q_;function RS(){return q_||(q_=1,jh.exports=AS()),jh.exports}var Kh={exports:{}},Se={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Y_;function wS(){if(Y_)return Se;Y_=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),p=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),_=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),y=Symbol.iterator;function E(I){return I===null||typeof I!="object"?null:(I=y&&I[y]||I["@@iterator"],typeof I=="function"?I:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,C={};function M(I,ct,At){this.props=I,this.context=ct,this.refs=C,this.updater=At||b}M.prototype.isReactComponent={},M.prototype.setState=function(I,ct){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,ct,"setState")},M.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function x(){}x.prototype=M.prototype;function V(I,ct,At){this.props=I,this.context=ct,this.refs=C,this.updater=At||b}var H=V.prototype=new x;H.constructor=V,w(H,M.prototype),H.isPureReactComponent=!0;var P=Array.isArray,Y={H:null,A:null,T:null,S:null,V:null},z=Object.prototype.hasOwnProperty;function k(I,ct,At,Dt,at,bt){return At=bt.ref,{$$typeof:s,type:I,key:ct,ref:At!==void 0?At:null,props:bt}}function K(I,ct){return k(I.type,ct,void 0,void 0,void 0,I.props)}function F(I){return typeof I=="object"&&I!==null&&I.$$typeof===s}function O(I){var ct={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(At){return ct[At]})}var q=/\/+/g;function rt(I,ct){return typeof I=="object"&&I!==null&&I.key!=null?O(""+I.key):ct.toString(36)}function dt(){}function _t(I){switch(I.status){case"fulfilled":return I.value;case"rejected":throw I.reason;default:switch(typeof I.status=="string"?I.then(dt,dt):(I.status="pending",I.then(function(ct){I.status==="pending"&&(I.status="fulfilled",I.value=ct)},function(ct){I.status==="pending"&&(I.status="rejected",I.reason=ct)})),I.status){case"fulfilled":return I.value;case"rejected":throw I.reason}}throw I}function Mt(I,ct,At,Dt,at){var bt=typeof I;(bt==="undefined"||bt==="boolean")&&(I=null);var Ut=!1;if(I===null)Ut=!0;else switch(bt){case"bigint":case"string":case"number":Ut=!0;break;case"object":switch(I.$$typeof){case s:case t:Ut=!0;break;case v:return Ut=I._init,Mt(Ut(I._payload),ct,At,Dt,at)}}if(Ut)return at=at(I),Ut=Dt===""?"."+rt(I,0):Dt,P(at)?(At="",Ut!=null&&(At=Ut.replace(q,"$&/")+"/"),Mt(at,ct,At,"",function(ce){return ce})):at!=null&&(F(at)&&(at=K(at,At+(at.key==null||I&&I.key===at.key?"":(""+at.key).replace(q,"$&/")+"/")+Ut)),ct.push(at)),1;Ut=0;var It=Dt===""?".":Dt+":";if(P(I))for(var Pt=0;Pt<I.length;Pt++)Dt=I[Pt],bt=It+rt(Dt,Pt),Ut+=Mt(Dt,ct,At,bt,at);else if(Pt=E(I),typeof Pt=="function")for(I=Pt.call(I),Pt=0;!(Dt=I.next()).done;)Dt=Dt.value,bt=It+rt(Dt,Pt++),Ut+=Mt(Dt,ct,At,bt,at);else if(bt==="object"){if(typeof I.then=="function")return Mt(_t(I),ct,At,Dt,at);throw ct=String(I),Error("Objects are not valid as a React child (found: "+(ct==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":ct)+"). If you meant to render a collection of children, use an array instead.")}return Ut}function X(I,ct,At){if(I==null)return I;var Dt=[],at=0;return Mt(I,Dt,"","",function(bt){return ct.call(At,bt,at++)}),Dt}function st(I){if(I._status===-1){var ct=I._result;ct=ct(),ct.then(function(At){(I._status===0||I._status===-1)&&(I._status=1,I._result=At)},function(At){(I._status===0||I._status===-1)&&(I._status=2,I._result=At)}),I._status===-1&&(I._status=0,I._result=ct)}if(I._status===1)return I._result.default;throw I._result}var tt=typeof reportError=="function"?reportError:function(I){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ct=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof I=="object"&&I!==null&&typeof I.message=="string"?String(I.message):String(I),error:I});if(!window.dispatchEvent(ct))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",I);return}console.error(I)};function Lt(){}return Se.Children={map:X,forEach:function(I,ct,At){X(I,function(){ct.apply(this,arguments)},At)},count:function(I){var ct=0;return X(I,function(){ct++}),ct},toArray:function(I){return X(I,function(ct){return ct})||[]},only:function(I){if(!F(I))throw Error("React.Children.only expected to receive a single React element child.");return I}},Se.Component=M,Se.Fragment=i,Se.Profiler=l,Se.PureComponent=V,Se.StrictMode=r,Se.Suspense=_,Se.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Y,Se.__COMPILER_RUNTIME={__proto__:null,c:function(I){return Y.H.useMemoCache(I)}},Se.cache=function(I){return function(){return I.apply(null,arguments)}},Se.cloneElement=function(I,ct,At){if(I==null)throw Error("The argument must be a React element, but you passed "+I+".");var Dt=w({},I.props),at=I.key,bt=void 0;if(ct!=null)for(Ut in ct.ref!==void 0&&(bt=void 0),ct.key!==void 0&&(at=""+ct.key),ct)!z.call(ct,Ut)||Ut==="key"||Ut==="__self"||Ut==="__source"||Ut==="ref"&&ct.ref===void 0||(Dt[Ut]=ct[Ut]);var Ut=arguments.length-2;if(Ut===1)Dt.children=At;else if(1<Ut){for(var It=Array(Ut),Pt=0;Pt<Ut;Pt++)It[Pt]=arguments[Pt+2];Dt.children=It}return k(I.type,at,void 0,void 0,bt,Dt)},Se.createContext=function(I){return I={$$typeof:p,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null},I.Provider=I,I.Consumer={$$typeof:c,_context:I},I},Se.createElement=function(I,ct,At){var Dt,at={},bt=null;if(ct!=null)for(Dt in ct.key!==void 0&&(bt=""+ct.key),ct)z.call(ct,Dt)&&Dt!=="key"&&Dt!=="__self"&&Dt!=="__source"&&(at[Dt]=ct[Dt]);var Ut=arguments.length-2;if(Ut===1)at.children=At;else if(1<Ut){for(var It=Array(Ut),Pt=0;Pt<Ut;Pt++)It[Pt]=arguments[Pt+2];at.children=It}if(I&&I.defaultProps)for(Dt in Ut=I.defaultProps,Ut)at[Dt]===void 0&&(at[Dt]=Ut[Dt]);return k(I,bt,void 0,void 0,null,at)},Se.createRef=function(){return{current:null}},Se.forwardRef=function(I){return{$$typeof:m,render:I}},Se.isValidElement=F,Se.lazy=function(I){return{$$typeof:v,_payload:{_status:-1,_result:I},_init:st}},Se.memo=function(I,ct){return{$$typeof:g,type:I,compare:ct===void 0?null:ct}},Se.startTransition=function(I){var ct=Y.T,At={};Y.T=At;try{var Dt=I(),at=Y.S;at!==null&&at(At,Dt),typeof Dt=="object"&&Dt!==null&&typeof Dt.then=="function"&&Dt.then(Lt,tt)}catch(bt){tt(bt)}finally{Y.T=ct}},Se.unstable_useCacheRefresh=function(){return Y.H.useCacheRefresh()},Se.use=function(I){return Y.H.use(I)},Se.useActionState=function(I,ct,At){return Y.H.useActionState(I,ct,At)},Se.useCallback=function(I,ct){return Y.H.useCallback(I,ct)},Se.useContext=function(I){return Y.H.useContext(I)},Se.useDebugValue=function(){},Se.useDeferredValue=function(I,ct){return Y.H.useDeferredValue(I,ct)},Se.useEffect=function(I,ct,At){var Dt=Y.H;if(typeof At=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return Dt.useEffect(I,ct)},Se.useId=function(){return Y.H.useId()},Se.useImperativeHandle=function(I,ct,At){return Y.H.useImperativeHandle(I,ct,At)},Se.useInsertionEffect=function(I,ct){return Y.H.useInsertionEffect(I,ct)},Se.useLayoutEffect=function(I,ct){return Y.H.useLayoutEffect(I,ct)},Se.useMemo=function(I,ct){return Y.H.useMemo(I,ct)},Se.useOptimistic=function(I,ct){return Y.H.useOptimistic(I,ct)},Se.useReducer=function(I,ct,At){return Y.H.useReducer(I,ct,At)},Se.useRef=function(I){return Y.H.useRef(I)},Se.useState=function(I){return Y.H.useState(I)},Se.useSyncExternalStore=function(I,ct,At){return Y.H.useSyncExternalStore(I,ct,At)},Se.useTransition=function(){return Y.H.useTransition()},Se.version="19.1.0",Se}var j_;function xp(){return j_||(j_=1,Kh.exports=wS()),Kh.exports}var Qh={exports:{}},ni={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Z_;function CS(){if(Z_)return ni;Z_=1;var s=xp();function t(_){var g="https://react.dev/errors/"+_;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)g+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+_+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(_,g,v){var y=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:y==null?null:""+y,children:_,containerInfo:g,implementation:v}}var p=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(_,g){if(_==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return ni.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,ni.createPortal=function(_,g){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(t(299));return c(_,g,null,v)},ni.flushSync=function(_){var g=p.T,v=r.p;try{if(p.T=null,r.p=2,_)return _()}finally{p.T=g,r.p=v,r.d.f()}},ni.preconnect=function(_,g){typeof _=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,r.d.C(_,g))},ni.prefetchDNS=function(_){typeof _=="string"&&r.d.D(_)},ni.preinit=function(_,g){if(typeof _=="string"&&g&&typeof g.as=="string"){var v=g.as,y=m(v,g.crossOrigin),E=typeof g.integrity=="string"?g.integrity:void 0,b=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;v==="style"?r.d.S(_,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:y,integrity:E,fetchPriority:b}):v==="script"&&r.d.X(_,{crossOrigin:y,integrity:E,fetchPriority:b,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},ni.preinitModule=function(_,g){if(typeof _=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var v=m(g.as,g.crossOrigin);r.d.M(_,{crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&r.d.M(_)},ni.preload=function(_,g){if(typeof _=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var v=g.as,y=m(v,g.crossOrigin);r.d.L(_,v,{crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},ni.preloadModule=function(_,g){if(typeof _=="string")if(g){var v=m(g.as,g.crossOrigin);r.d.m(_,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else r.d.m(_)},ni.requestFormReset=function(_){r.d.r(_)},ni.unstable_batchedUpdates=function(_,g){return _(g)},ni.useFormState=function(_,g,v){return p.H.useFormState(_,g,v)},ni.useFormStatus=function(){return p.H.useHostTransitionStatus()},ni.version="19.1.0",ni}var K_;function DS(){if(K_)return Qh.exports;K_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),Qh.exports=CS(),Qh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Q_;function US(){if(Q_)return Sl;Q_=1;var s=RS(),t=xp(),i=DS();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function p(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(r(188))}function _(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(r(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var h=u.alternate;if(h===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===h.child){for(h=u.child;h;){if(h===a)return m(u),e;if(h===o)return m(u),n;h=h.sibling}throw Error(r(188))}if(a.return!==o.return)a=u,o=h;else{for(var T=!1,U=u.child;U;){if(U===a){T=!0,a=u,o=h;break}if(U===o){T=!0,o=u,a=h;break}U=U.sibling}if(!T){for(U=h.child;U;){if(U===a){T=!0,a=h,o=u;break}if(U===o){T=!0,o=h,a=u;break}U=U.sibling}if(!T)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:n}function g(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=g(e),n!==null)return n;e=e.sibling}return null}var v=Object.assign,y=Symbol.for("react.element"),E=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),w=Symbol.for("react.fragment"),C=Symbol.for("react.strict_mode"),M=Symbol.for("react.profiler"),x=Symbol.for("react.provider"),V=Symbol.for("react.consumer"),H=Symbol.for("react.context"),P=Symbol.for("react.forward_ref"),Y=Symbol.for("react.suspense"),z=Symbol.for("react.suspense_list"),k=Symbol.for("react.memo"),K=Symbol.for("react.lazy"),F=Symbol.for("react.activity"),O=Symbol.for("react.memo_cache_sentinel"),q=Symbol.iterator;function rt(e){return e===null||typeof e!="object"?null:(e=q&&e[q]||e["@@iterator"],typeof e=="function"?e:null)}var dt=Symbol.for("react.client.reference");function _t(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===dt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case w:return"Fragment";case M:return"Profiler";case C:return"StrictMode";case Y:return"Suspense";case z:return"SuspenseList";case F:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case b:return"Portal";case H:return(e.displayName||"Context")+".Provider";case V:return(e._context.displayName||"Context")+".Consumer";case P:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case k:return n=e.displayName||null,n!==null?n:_t(e.type)||"Memo";case K:n=e._payload,e=e._init;try{return _t(e(n))}catch{}}return null}var Mt=Array.isArray,X=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,st=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,tt={pending:!1,data:null,method:null,action:null},Lt=[],I=-1;function ct(e){return{current:e}}function At(e){0>I||(e.current=Lt[I],Lt[I]=null,I--)}function Dt(e,n){I++,Lt[I]=e.current,e.current=n}var at=ct(null),bt=ct(null),Ut=ct(null),It=ct(null);function Pt(e,n){switch(Dt(Ut,n),Dt(bt,e),Dt(at,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?__(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=__(n),e=v_(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}At(at),Dt(at,e)}function ce(){At(at),At(bt),At(Ut)}function ee(e){e.memoizedState!==null&&Dt(It,e);var n=at.current,a=v_(n,e.type);n!==a&&(Dt(bt,e),Dt(at,a))}function Ve(e){bt.current===e&&(At(at),At(bt)),It.current===e&&(At(It),pl._currentValue=tt)}var Ye=Object.prototype.hasOwnProperty,Me=s.unstable_scheduleCallback,Z=s.unstable_cancelCallback,Yn=s.unstable_shouldYield,we=s.unstable_requestPaint,ge=s.unstable_now,ne=s.unstable_getCurrentPriorityLevel,We=s.unstable_ImmediatePriority,te=s.unstable_UserBlockingPriority,B=s.unstable_NormalPriority,D=s.unstable_LowPriority,ft=s.unstable_IdlePriority,Rt=s.log,Nt=s.unstable_setDisableYieldValue,St=null,kt=null;function Gt(e){if(typeof Rt=="function"&&Nt(e),kt&&typeof kt.setStrictMode=="function")try{kt.setStrictMode(St,e)}catch{}}var zt=Math.clz32?Math.clz32:jt,ue=Math.log,Ft=Math.LN2;function jt(e){return e>>>=0,e===0?32:31-(ue(e)/Ft|0)|0}var re=256,se=4194304;function Wt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ve(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,h=e.suspendedLanes,T=e.pingedLanes;e=e.warmLanes;var U=o&134217727;return U!==0?(o=U&~h,o!==0?u=Wt(o):(T&=U,T!==0?u=Wt(T):a||(a=U&~e,a!==0&&(u=Wt(a))))):(U=o&~h,U!==0?u=Wt(U):T!==0?u=Wt(T):a||(a=o&~e,a!==0&&(u=Wt(a)))),u===0?0:n!==0&&n!==u&&(n&h)===0&&(h=u&-u,a=n&-n,h>=a||h===32&&(a&4194048)!==0)?n:u}function pe(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Pe(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $(){var e=re;return re<<=1,(re&4194048)===0&&(re=256),e}function Et(){var e=se;return se<<=1,(se&62914560)===0&&(se=4194304),e}function vt(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function wt(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Yt(e,n,a,o,u,h){var T=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var U=e.entanglements,W=e.expirationTimes,ut=e.hiddenUpdates;for(a=T&~a;0<a;){var xt=31-zt(a),Ct=1<<xt;U[xt]=0,W[xt]=-1;var pt=ut[xt];if(pt!==null)for(ut[xt]=null,xt=0;xt<pt.length;xt++){var mt=pt[xt];mt!==null&&(mt.lane&=-536870913)}a&=~Ct}o!==0&&Xt(e,o,0),h!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=h&~(T&~n))}function Xt(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-zt(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&4194090}function _e(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-zt(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function Ke(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ln(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function R(){var e=st.p;return e!==0?e:(e=window.event,e===void 0?32:B_(e.type))}function Qe(e,n){var a=st.p;try{return st.p=e,n()}finally{st.p=a}}var En=Math.random().toString(36).slice(2),_n="__reactFiber$"+En,Dn="__reactProps$"+En,Jn="__reactContainer$"+En,va="__reactEvents$"+En,gs="__reactListeners$"+En,Dr="__reactHandles$"+En,Mn="__reactResources$"+En,ri="__reactMarker$"+En;function $n(e){delete e[_n],delete e[Dn],delete e[va],delete e[gs],delete e[Dr]}function ui(e){var n=e[_n];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Jn]||a[_n]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=E_(e);e!==null;){if(a=e[_n])return a;e=E_(e)}return n}e=a,a=e.parentNode}return null}function Vi(e){if(e=e[_n]||e[Jn]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function bn(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function aa(e){var n=e[Mn];return n||(n=e[Mn]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function ke(e){e[ri]=!0}var Ur=new Set,_s={};function Bn(e,n){N(e,n),N(e+"Capture",n)}function N(e,n){for(_s[e]=n,e=0;e<n.length;e++)Ur.add(n[e])}var et=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ht={},gt={};function it(e){return Ye.call(gt,e)?!0:Ye.call(ht,e)?!1:et.test(e)?gt[e]=!0:(ht[e]=!0,!1)}function Ot(e,n,a){if(it(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Bt(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Vt(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}var Zt,he;function oe(e){if(Zt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Zt=n&&n[1]||"",he=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Zt+e+he}var ie=!1;function be(e,n){if(!e||ie)return"";ie=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var Ct=function(){throw Error()};if(Object.defineProperty(Ct.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Ct,[])}catch(mt){var pt=mt}Reflect.construct(e,[],Ct)}else{try{Ct.call()}catch(mt){pt=mt}e.call(Ct.prototype)}}else{try{throw Error()}catch(mt){pt=mt}(Ct=e())&&typeof Ct.catch=="function"&&Ct.catch(function(){})}}catch(mt){if(mt&&pt&&typeof mt.stack=="string")return[mt.stack,pt.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=o.DetermineComponentFrameRoot(),T=h[0],U=h[1];if(T&&U){var W=T.split(`
`),ut=U.split(`
`);for(u=o=0;o<W.length&&!W[o].includes("DetermineComponentFrameRoot");)o++;for(;u<ut.length&&!ut[u].includes("DetermineComponentFrameRoot");)u++;if(o===W.length||u===ut.length)for(o=W.length-1,u=ut.length-1;1<=o&&0<=u&&W[o]!==ut[u];)u--;for(;1<=o&&0<=u;o--,u--)if(W[o]!==ut[u]){if(o!==1||u!==1)do if(o--,u--,0>u||W[o]!==ut[u]){var xt=`
`+W[o].replace(" at new "," at ");return e.displayName&&xt.includes("<anonymous>")&&(xt=xt.replace("<anonymous>",e.displayName)),xt}while(1<=o&&0<=u);break}}}finally{ie=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?oe(a):""}function Fe(e){switch(e.tag){case 26:case 27:case 5:return oe(e.type);case 16:return oe("Lazy");case 13:return oe("Suspense");case 19:return oe("SuspenseList");case 0:case 15:return be(e.type,!1);case 11:return be(e.type.render,!1);case 1:return be(e.type,!0);case 31:return oe("Activity");default:return""}}function sn(e){try{var n="";do n+=Fe(e),e=e.return;while(e);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function De(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ue(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function le(e){var n=Ue(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),o=""+e[n];if(!e.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var u=a.get,h=a.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(T){o=""+T,h.call(this,T)}}),Object.defineProperty(e,n,{enumerable:a.enumerable}),{getValue:function(){return o},setValue:function(T){o=""+T},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function cn(e){e._valueTracker||(e._valueTracker=le(e))}function Be(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=Ue(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function In(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var ki=/[\n"\\]/g;function Je(e){return e.replace(ki,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Di(e,n,a,o,u,h,T,U){e.name="",T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?e.type=T:e.removeAttribute("type"),n!=null?T==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+De(n)):e.value!==""+De(n)&&(e.value=""+De(n)):T!=="submit"&&T!=="reset"||e.removeAttribute("value"),n!=null?zn(e,T,De(n)):a!=null?zn(e,T,De(a)):o!=null&&e.removeAttribute("value"),u==null&&h!=null&&(e.defaultChecked=!!h),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),U!=null&&typeof U!="function"&&typeof U!="symbol"&&typeof U!="boolean"?e.name=""+De(U):e.removeAttribute("name")}function qe(e,n,a,o,u,h,T,U){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(e.type=h),n!=null||a!=null){if(!(h!=="submit"&&h!=="reset"||n!=null))return;a=a!=null?""+De(a):"",n=n!=null?""+De(n):a,U||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=U?e.checked:!!o,e.defaultChecked=!!o,T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"&&(e.name=T)}function zn(e,n,a){n==="number"&&In(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function vn(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+De(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function Tn(e,n,a){if(n!=null&&(n=""+De(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+De(a):""}function An(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(r(92));if(Mt(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=De(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o)}function Ui(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Xi=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Bl(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||Xi.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Il(e,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&Bl(e,u,o)}else for(var h in n)n.hasOwnProperty(h)&&Bl(e,h,n[h])}function To(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var zu=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ya=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function vs(e){return Ya.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var ys=null;function Ao(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ja=null,Za=null;function zl(e){var n=Vi(e);if(n&&(e=n.stateNode)){var a=e[Dn]||null;t:switch(e=n.stateNode,n.type){case"input":if(Di(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Je(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[Dn]||null;if(!u)throw Error(r(90));Di(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&Be(o)}break t;case"textarea":Tn(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&vn(e,!!a.multiple,n,!1)}}}var Ro=!1;function Hl(e,n,a){if(Ro)return e(n,a);Ro=!0;try{var o=e(n);return o}finally{if(Ro=!1,(ja!==null||Za!==null)&&(Tc(),ja&&(n=ja,e=Za,Za=ja=null,zl(n),e)))for(n=0;n<e.length;n++)zl(e[n])}}function Lr(e,n){var a=e.stateNode;if(a===null)return null;var o=a[Dn]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Wi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Nr=!1;if(Wi)try{var Ka={};Object.defineProperty(Ka,"passive",{get:function(){Nr=!0}}),window.addEventListener("test",Ka,Ka),window.removeEventListener("test",Ka,Ka)}catch{Nr=!1}var ra=null,Or=null,Ss=null;function Gl(){if(Ss)return Ss;var e,n=Or,a=n.length,o,u="value"in ra?ra.value:ra.textContent,h=u.length;for(e=0;e<a&&n[e]===u[e];e++);var T=a-e;for(o=1;o<=T&&n[a-o]===u[h-o];o++);return Ss=u.slice(e,1<o?1-o:void 0)}function Pr(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Fr(){return!0}function Vl(){return!1}function ti(e){function n(a,o,u,h,T){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=h,this.target=T,this.currentTarget=null;for(var U in e)e.hasOwnProperty(U)&&(a=e[U],this[U]=a?a(h):h[U]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?Fr:Vl,this.isPropagationStopped=Vl,this}return v(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Fr)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Fr)},persist:function(){},isPersistent:Fr}),n}var ya={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xs=ti(ya),Br=v({},ya,{view:0,detail:0}),Hu=ti(Br),wo,Co,Ir,Es=v({},Br,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Lo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ir&&(Ir&&e.type==="mousemove"?(wo=e.screenX-Ir.screenX,Co=e.screenY-Ir.screenY):Co=wo=0,Ir=e),wo)},movementY:function(e){return"movementY"in e?e.movementY:Co}}),kl=ti(Es),Gu=v({},Es,{dataTransfer:0}),Vu=ti(Gu),ku=v({},Br,{relatedTarget:0}),Do=ti(ku),Uo=v({},ya,{animationName:0,elapsedTime:0,pseudoElement:0}),Xu=ti(Uo),zr=v({},ya,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Wu=ti(zr),qu=v({},ya,{data:0}),Xl=ti(qu),Yu={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ju={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Zu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ku(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Zu[e])?!!n[e]:!1}function Lo(){return Ku}var Qu=v({},Br,{key:function(e){if(e.key){var n=Yu[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Pr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ju[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Lo,charCode:function(e){return e.type==="keypress"?Pr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Pr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ju=ti(Qu),$u=v({},Es,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Wl=ti($u),qi=v({},Br,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Lo}),tf=ti(qi),ql=v({},ya,{propertyName:0,elapsedTime:0,pseudoElement:0}),Sa=ti(ql),No=v({},Es,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ef=ti(No),f=v({},ya,{newState:0,oldState:0}),d=ti(f),S=[9,13,27,32],A=Wi&&"CompositionEvent"in window,L=null;Wi&&"documentMode"in document&&(L=document.documentMode);var G=Wi&&"TextEvent"in window&&!L,j=Wi&&(!A||L&&8<L&&11>=L),J=" ",yt=!1;function Ht(e,n){switch(e){case"keyup":return S.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Kt(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Qt=!1;function Te(e,n){switch(e){case"compositionend":return Kt(n);case"keypress":return n.which!==32?null:(yt=!0,J);case"textInput":return e=n.data,e===J&&yt?null:e;default:return null}}function $t(e,n){if(Qt)return e==="compositionend"||!A&&Ht(e,n)?(e=Gl(),Ss=Or=ra=null,Qt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return j&&n.locale!=="ko"?null:n.data;default:return null}}var ye={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function hn(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!ye[e.type]:n==="textarea"}function si(e,n,a,o){ja?Za?Za.push(o):Za=[o]:ja=o,n=Uc(n,"onChange"),0<n.length&&(a=new xs("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var Un=null,jn=null;function vi(e){h_(e,0)}function sa(e){var n=bn(e);if(Be(n))return e}function yi(e,n){if(e==="change")return n}var xa=!1;if(Wi){var yn;if(Wi){var nf="oninput"in document;if(!nf){var Pp=document.createElement("div");Pp.setAttribute("oninput","return;"),nf=typeof Pp.oninput=="function"}yn=nf}else yn=!1;xa=yn&&(!document.documentMode||9<document.documentMode)}function Fp(){Un&&(Un.detachEvent("onpropertychange",Bp),jn=Un=null)}function Bp(e){if(e.propertyName==="value"&&sa(jn)){var n=[];si(n,jn,e,Ao(e)),Hl(vi,n)}}function J0(e,n,a){e==="focusin"?(Fp(),Un=n,jn=a,Un.attachEvent("onpropertychange",Bp)):e==="focusout"&&Fp()}function $0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return sa(jn)}function ty(e,n){if(e==="click")return sa(n)}function ey(e,n){if(e==="input"||e==="change")return sa(n)}function ny(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Si=typeof Object.is=="function"?Object.is:ny;function Oo(e,n){if(Si(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!Ye.call(n,u)||!Si(e[u],n[u]))return!1}return!0}function Ip(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function zp(e,n){var a=Ip(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Ip(a)}}function Hp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Hp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Gp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=In(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=In(e.document)}return n}function af(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var iy=Wi&&"documentMode"in document&&11>=document.documentMode,Ms=null,rf=null,Po=null,sf=!1;function Vp(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;sf||Ms==null||Ms!==In(o)||(o=Ms,"selectionStart"in o&&af(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Po&&Oo(Po,o)||(Po=o,o=Uc(rf,"onSelect"),0<o.length&&(n=new xs("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=Ms)))}function Hr(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var bs={animationend:Hr("Animation","AnimationEnd"),animationiteration:Hr("Animation","AnimationIteration"),animationstart:Hr("Animation","AnimationStart"),transitionrun:Hr("Transition","TransitionRun"),transitionstart:Hr("Transition","TransitionStart"),transitioncancel:Hr("Transition","TransitionCancel"),transitionend:Hr("Transition","TransitionEnd")},of={},kp={};Wi&&(kp=document.createElement("div").style,"AnimationEvent"in window||(delete bs.animationend.animation,delete bs.animationiteration.animation,delete bs.animationstart.animation),"TransitionEvent"in window||delete bs.transitionend.transition);function Gr(e){if(of[e])return of[e];if(!bs[e])return e;var n=bs[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in kp)return of[e]=n[a];return e}var Xp=Gr("animationend"),Wp=Gr("animationiteration"),qp=Gr("animationstart"),ay=Gr("transitionrun"),ry=Gr("transitionstart"),sy=Gr("transitioncancel"),Yp=Gr("transitionend"),jp=new Map,lf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");lf.push("scrollEnd");function Yi(e,n){jp.set(e,n),Bn(n,[e])}var Zp=new WeakMap;function Li(e,n){if(typeof e=="object"&&e!==null){var a=Zp.get(e);return a!==void 0?a:(n={value:e,source:n,stack:sn(n)},Zp.set(e,n),n)}return{value:e,source:n,stack:sn(n)}}var Ni=[],Ts=0,cf=0;function Yl(){for(var e=Ts,n=cf=Ts=0;n<e;){var a=Ni[n];Ni[n++]=null;var o=Ni[n];Ni[n++]=null;var u=Ni[n];Ni[n++]=null;var h=Ni[n];if(Ni[n++]=null,o!==null&&u!==null){var T=o.pending;T===null?u.next=u:(u.next=T.next,T.next=u),o.pending=u}h!==0&&Kp(a,u,h)}}function jl(e,n,a,o){Ni[Ts++]=e,Ni[Ts++]=n,Ni[Ts++]=a,Ni[Ts++]=o,cf|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function uf(e,n,a,o){return jl(e,n,a,o),Zl(e)}function As(e,n){return jl(e,null,null,n),Zl(e)}function Kp(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,h=e.return;h!==null;)h.childLanes|=a,o=h.alternate,o!==null&&(o.childLanes|=a),h.tag===22&&(e=h.stateNode,e===null||e._visibility&1||(u=!0)),e=h,h=h.return;return e.tag===3?(h=e.stateNode,u&&n!==null&&(u=31-zt(a),e=h.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),h):null}function Zl(e){if(50<sl)throw sl=0,gh=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Rs={};function oy(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function xi(e,n,a,o){return new oy(e,n,a,o)}function ff(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ea(e,n){var a=e.alternate;return a===null?(a=xi(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Qp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Kl(e,n,a,o,u,h){var T=0;if(o=e,typeof e=="function")ff(e)&&(T=1);else if(typeof e=="string")T=cS(e,a,at.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case F:return e=xi(31,a,n,u),e.elementType=F,e.lanes=h,e;case w:return Vr(a.children,u,h,n);case C:T=8,u|=24;break;case M:return e=xi(12,a,n,u|2),e.elementType=M,e.lanes=h,e;case Y:return e=xi(13,a,n,u),e.elementType=Y,e.lanes=h,e;case z:return e=xi(19,a,n,u),e.elementType=z,e.lanes=h,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case x:case H:T=10;break t;case V:T=9;break t;case P:T=11;break t;case k:T=14;break t;case K:T=16,o=null;break t}T=29,a=Error(r(130,e===null?"null":typeof e,"")),o=null}return n=xi(T,a,n,u),n.elementType=e,n.type=o,n.lanes=h,n}function Vr(e,n,a,o){return e=xi(7,e,o,n),e.lanes=a,e}function hf(e,n,a){return e=xi(6,e,null,n),e.lanes=a,e}function df(e,n,a){return n=xi(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var ws=[],Cs=0,Ql=null,Jl=0,Oi=[],Pi=0,kr=null,Ma=1,ba="";function Xr(e,n){ws[Cs++]=Jl,ws[Cs++]=Ql,Ql=e,Jl=n}function Jp(e,n,a){Oi[Pi++]=Ma,Oi[Pi++]=ba,Oi[Pi++]=kr,kr=e;var o=Ma;e=ba;var u=32-zt(o)-1;o&=~(1<<u),a+=1;var h=32-zt(n)+u;if(30<h){var T=u-u%5;h=(o&(1<<T)-1).toString(32),o>>=T,u-=T,Ma=1<<32-zt(n)+u|a<<u|o,ba=h+e}else Ma=1<<h|a<<u|o,ba=e}function pf(e){e.return!==null&&(Xr(e,1),Jp(e,1,0))}function mf(e){for(;e===Ql;)Ql=ws[--Cs],ws[Cs]=null,Jl=ws[--Cs],ws[Cs]=null;for(;e===kr;)kr=Oi[--Pi],Oi[Pi]=null,ba=Oi[--Pi],Oi[Pi]=null,Ma=Oi[--Pi],Oi[Pi]=null}var oi=null,pn=null,Xe=!1,Wr=null,oa=!1,gf=Error(r(519));function qr(e){var n=Error(r(418,""));throw Io(Li(n,e)),gf}function $p(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[_n]=e,n[Dn]=o,a){case"dialog":Ne("cancel",n),Ne("close",n);break;case"iframe":case"object":case"embed":Ne("load",n);break;case"video":case"audio":for(a=0;a<ll.length;a++)Ne(ll[a],n);break;case"source":Ne("error",n);break;case"img":case"image":case"link":Ne("error",n),Ne("load",n);break;case"details":Ne("toggle",n);break;case"input":Ne("invalid",n),qe(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),cn(n);break;case"select":Ne("invalid",n);break;case"textarea":Ne("invalid",n),An(n,o.value,o.defaultValue,o.children),cn(n)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||g_(n.textContent,a)?(o.popover!=null&&(Ne("beforetoggle",n),Ne("toggle",n)),o.onScroll!=null&&Ne("scroll",n),o.onScrollEnd!=null&&Ne("scrollend",n),o.onClick!=null&&(n.onclick=Lc),n=!0):n=!1,n||qr(e)}function tm(e){for(oi=e.return;oi;)switch(oi.tag){case 5:case 13:oa=!1;return;case 27:case 3:oa=!0;return;default:oi=oi.return}}function Fo(e){if(e!==oi)return!1;if(!Xe)return tm(e),Xe=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Lh(e.type,e.memoizedProps)),a=!a),a&&pn&&qr(e),tm(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));t:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(n===0){pn=Zi(e.nextSibling);break t}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;e=e.nextSibling}pn=null}}else n===27?(n=pn,hr(e.type)?(e=Fh,Fh=null,pn=e):pn=n):pn=oi?Zi(e.stateNode.nextSibling):null;return!0}function Bo(){pn=oi=null,Xe=!1}function em(){var e=Wr;return e!==null&&(di===null?di=e:di.push.apply(di,e),Wr=null),e}function Io(e){Wr===null?Wr=[e]:Wr.push(e)}var _f=ct(null),Yr=null,Ta=null;function Qa(e,n,a){Dt(_f,n._currentValue),n._currentValue=a}function Aa(e){e._currentValue=_f.current,At(_f)}function vf(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function yf(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var h=u.dependencies;if(h!==null){var T=u.child;h=h.firstContext;t:for(;h!==null;){var U=h;h=u;for(var W=0;W<n.length;W++)if(U.context===n[W]){h.lanes|=a,U=h.alternate,U!==null&&(U.lanes|=a),vf(h.return,a,e),o||(T=null);break t}h=U.next}}else if(u.tag===18){if(T=u.return,T===null)throw Error(r(341));T.lanes|=a,h=T.alternate,h!==null&&(h.lanes|=a),vf(T,a,e),T=null}else T=u.child;if(T!==null)T.return=u;else for(T=u;T!==null;){if(T===e){T=null;break}if(u=T.sibling,u!==null){u.return=T.return,T=u;break}T=T.return}u=T}}function zo(e,n,a,o){e=null;for(var u=n,h=!1;u!==null;){if(!h){if((u.flags&524288)!==0)h=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var T=u.alternate;if(T===null)throw Error(r(387));if(T=T.memoizedProps,T!==null){var U=u.type;Si(u.pendingProps.value,T.value)||(e!==null?e.push(U):e=[U])}}else if(u===It.current){if(T=u.alternate,T===null)throw Error(r(387));T.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(pl):e=[pl])}u=u.return}e!==null&&yf(n,e,a,o),n.flags|=262144}function $l(e){for(e=e.firstContext;e!==null;){if(!Si(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function jr(e){Yr=e,Ta=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ei(e){return nm(Yr,e)}function tc(e,n){return Yr===null&&jr(e),nm(e,n)}function nm(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Ta===null){if(e===null)throw Error(r(308));Ta=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Ta=Ta.next=n;return a}var ly=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},cy=s.unstable_scheduleCallback,uy=s.unstable_NormalPriority,Ln={$$typeof:H,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Sf(){return{controller:new ly,data:new Map,refCount:0}}function Ho(e){e.refCount--,e.refCount===0&&cy(uy,function(){e.controller.abort()})}var Go=null,xf=0,Ds=0,Us=null;function fy(e,n){if(Go===null){var a=Go=[];xf=0,Ds=Mh(),Us={status:"pending",value:void 0,then:function(o){a.push(o)}}}return xf++,n.then(im,im),n}function im(){if(--xf===0&&Go!==null){Us!==null&&(Us.status="fulfilled");var e=Go;Go=null,Ds=0,Us=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function hy(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var am=X.S;X.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&fy(e,n),am!==null&&am(e,n)};var Zr=ct(null);function Ef(){var e=Zr.current;return e!==null?e:on.pooledCache}function ec(e,n){n===null?Dt(Zr,Zr.current):Dt(Zr,n.pool)}function rm(){var e=Ef();return e===null?null:{parent:Ln._currentValue,pool:e}}var Vo=Error(r(460)),sm=Error(r(474)),nc=Error(r(542)),Mf={then:function(){}};function om(e){return e=e.status,e==="fulfilled"||e==="rejected"}function ic(){}function lm(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(ic,ic),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,um(e),e;default:if(typeof n.status=="string")n.then(ic,ic);else{if(e=on,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,um(e),e}throw ko=n,Vo}}var ko=null;function cm(){if(ko===null)throw Error(r(459));var e=ko;return ko=null,e}function um(e){if(e===Vo||e===nc)throw Error(r(483))}var Ja=!1;function bf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Tf(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function $a(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function tr(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(je&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=Zl(e),Kp(e,null,a),n}return jl(e,o,n,a),Zl(e)}function Xo(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,_e(e,a)}}function Af(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,h=null;if(a=a.firstBaseUpdate,a!==null){do{var T={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};h===null?u=h=T:h=h.next=T,a=a.next}while(a!==null);h===null?u=h=n:h=h.next=n}else u=h=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:h,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Rf=!1;function Wo(){if(Rf){var e=Us;if(e!==null)throw e}}function qo(e,n,a,o){Rf=!1;var u=e.updateQueue;Ja=!1;var h=u.firstBaseUpdate,T=u.lastBaseUpdate,U=u.shared.pending;if(U!==null){u.shared.pending=null;var W=U,ut=W.next;W.next=null,T===null?h=ut:T.next=ut,T=W;var xt=e.alternate;xt!==null&&(xt=xt.updateQueue,U=xt.lastBaseUpdate,U!==T&&(U===null?xt.firstBaseUpdate=ut:U.next=ut,xt.lastBaseUpdate=W))}if(h!==null){var Ct=u.baseState;T=0,xt=ut=W=null,U=h;do{var pt=U.lane&-536870913,mt=pt!==U.lane;if(mt?(ze&pt)===pt:(o&pt)===pt){pt!==0&&pt===Ds&&(Rf=!0),xt!==null&&(xt=xt.next={lane:0,tag:U.tag,payload:U.payload,callback:null,next:null});t:{var me=e,fe=U;pt=n;var en=a;switch(fe.tag){case 1:if(me=fe.payload,typeof me=="function"){Ct=me.call(en,Ct,pt);break t}Ct=me;break t;case 3:me.flags=me.flags&-65537|128;case 0:if(me=fe.payload,pt=typeof me=="function"?me.call(en,Ct,pt):me,pt==null)break t;Ct=v({},Ct,pt);break t;case 2:Ja=!0}}pt=U.callback,pt!==null&&(e.flags|=64,mt&&(e.flags|=8192),mt=u.callbacks,mt===null?u.callbacks=[pt]:mt.push(pt))}else mt={lane:pt,tag:U.tag,payload:U.payload,callback:U.callback,next:null},xt===null?(ut=xt=mt,W=Ct):xt=xt.next=mt,T|=pt;if(U=U.next,U===null){if(U=u.shared.pending,U===null)break;mt=U,U=mt.next,mt.next=null,u.lastBaseUpdate=mt,u.shared.pending=null}}while(!0);xt===null&&(W=Ct),u.baseState=W,u.firstBaseUpdate=ut,u.lastBaseUpdate=xt,h===null&&(u.shared.lanes=0),lr|=T,e.lanes=T,e.memoizedState=Ct}}function fm(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function hm(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)fm(a[e],n)}var Ls=ct(null),ac=ct(0);function dm(e,n){e=Na,Dt(ac,e),Dt(Ls,n),Na=e|n.baseLanes}function wf(){Dt(ac,Na),Dt(Ls,Ls.current)}function Cf(){Na=ac.current,At(Ls),At(ac)}var er=0,Re=null,$e=null,Rn=null,rc=!1,Ns=!1,Kr=!1,sc=0,Yo=0,Os=null,dy=0;function Sn(){throw Error(r(321))}function Df(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Si(e[a],n[a]))return!1;return!0}function Uf(e,n,a,o,u,h){return er=h,Re=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,X.H=e===null||e.memoizedState===null?Km:Qm,Kr=!1,h=a(o,u),Kr=!1,Ns&&(h=mm(n,a,o,u)),pm(e),h}function pm(e){X.H=hc;var n=$e!==null&&$e.next!==null;if(er=0,Rn=$e=Re=null,rc=!1,Yo=0,Os=null,n)throw Error(r(300));e===null||Hn||(e=e.dependencies,e!==null&&$l(e)&&(Hn=!0))}function mm(e,n,a,o){Re=e;var u=0;do{if(Ns&&(Os=null),Yo=0,Ns=!1,25<=u)throw Error(r(301));if(u+=1,Rn=$e=null,e.updateQueue!=null){var h=e.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}X.H=Sy,h=n(a,o)}while(Ns);return h}function py(){var e=X.H,n=e.useState()[0];return n=typeof n.then=="function"?jo(n):n,e=e.useState()[0],($e!==null?$e.memoizedState:null)!==e&&(Re.flags|=1024),n}function Lf(){var e=sc!==0;return sc=0,e}function Nf(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Of(e){if(rc){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}rc=!1}er=0,Rn=$e=Re=null,Ns=!1,Yo=sc=0,Os=null}function fi(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Rn===null?Re.memoizedState=Rn=e:Rn=Rn.next=e,Rn}function wn(){if($e===null){var e=Re.alternate;e=e!==null?e.memoizedState:null}else e=$e.next;var n=Rn===null?Re.memoizedState:Rn.next;if(n!==null)Rn=n,$e=e;else{if(e===null)throw Re.alternate===null?Error(r(467)):Error(r(310));$e=e,e={memoizedState:$e.memoizedState,baseState:$e.baseState,baseQueue:$e.baseQueue,queue:$e.queue,next:null},Rn===null?Re.memoizedState=Rn=e:Rn=Rn.next=e}return Rn}function Pf(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function jo(e){var n=Yo;return Yo+=1,Os===null&&(Os=[]),e=lm(Os,e,n),n=Re,(Rn===null?n.memoizedState:Rn.next)===null&&(n=n.alternate,X.H=n===null||n.memoizedState===null?Km:Qm),e}function oc(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return jo(e);if(e.$$typeof===H)return ei(e)}throw Error(r(438,String(e)))}function Ff(e){var n=null,a=Re.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=Re.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Pf(),Re.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=O;return n.index++,a}function Ra(e,n){return typeof n=="function"?n(e):n}function lc(e){var n=wn();return Bf(n,$e,e)}function Bf(e,n,a){var o=e.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var u=e.baseQueue,h=o.pending;if(h!==null){if(u!==null){var T=u.next;u.next=h.next,h.next=T}n.baseQueue=u=h,o.pending=null}if(h=e.baseState,u===null)e.memoizedState=h;else{n=u.next;var U=T=null,W=null,ut=n,xt=!1;do{var Ct=ut.lane&-536870913;if(Ct!==ut.lane?(ze&Ct)===Ct:(er&Ct)===Ct){var pt=ut.revertLane;if(pt===0)W!==null&&(W=W.next={lane:0,revertLane:0,action:ut.action,hasEagerState:ut.hasEagerState,eagerState:ut.eagerState,next:null}),Ct===Ds&&(xt=!0);else if((er&pt)===pt){ut=ut.next,pt===Ds&&(xt=!0);continue}else Ct={lane:0,revertLane:ut.revertLane,action:ut.action,hasEagerState:ut.hasEagerState,eagerState:ut.eagerState,next:null},W===null?(U=W=Ct,T=h):W=W.next=Ct,Re.lanes|=pt,lr|=pt;Ct=ut.action,Kr&&a(h,Ct),h=ut.hasEagerState?ut.eagerState:a(h,Ct)}else pt={lane:Ct,revertLane:ut.revertLane,action:ut.action,hasEagerState:ut.hasEagerState,eagerState:ut.eagerState,next:null},W===null?(U=W=pt,T=h):W=W.next=pt,Re.lanes|=Ct,lr|=Ct;ut=ut.next}while(ut!==null&&ut!==n);if(W===null?T=h:W.next=U,!Si(h,e.memoizedState)&&(Hn=!0,xt&&(a=Us,a!==null)))throw a;e.memoizedState=h,e.baseState=T,e.baseQueue=W,o.lastRenderedState=h}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function If(e){var n=wn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,h=n.memoizedState;if(u!==null){a.pending=null;var T=u=u.next;do h=e(h,T.action),T=T.next;while(T!==u);Si(h,n.memoizedState)||(Hn=!0),n.memoizedState=h,n.baseQueue===null&&(n.baseState=h),a.lastRenderedState=h}return[h,o]}function gm(e,n,a){var o=Re,u=wn(),h=Xe;if(h){if(a===void 0)throw Error(r(407));a=a()}else a=n();var T=!Si(($e||u).memoizedState,a);T&&(u.memoizedState=a,Hn=!0),u=u.queue;var U=ym.bind(null,o,u,e);if(Zo(2048,8,U,[e]),u.getSnapshot!==n||T||Rn!==null&&Rn.memoizedState.tag&1){if(o.flags|=2048,Ps(9,cc(),vm.bind(null,o,u,a,n),null),on===null)throw Error(r(349));h||(er&124)!==0||_m(o,n,a)}return a}function _m(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=Re.updateQueue,n===null?(n=Pf(),Re.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function vm(e,n,a,o){n.value=a,n.getSnapshot=o,Sm(n)&&xm(e)}function ym(e,n,a){return a(function(){Sm(n)&&xm(e)})}function Sm(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Si(e,a)}catch{return!0}}function xm(e){var n=As(e,2);n!==null&&Ai(n,e,2)}function zf(e){var n=fi();if(typeof e=="function"){var a=e;if(e=a(),Kr){Gt(!0);try{a()}finally{Gt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ra,lastRenderedState:e},n}function Em(e,n,a,o){return e.baseState=a,Bf(e,$e,typeof o=="function"?o:Ra)}function my(e,n,a,o,u){if(fc(e))throw Error(r(485));if(e=n.action,e!==null){var h={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(T){h.listeners.push(T)}};X.T!==null?a(!0):h.isTransition=!1,o(h),a=n.pending,a===null?(h.next=n.pending=h,Mm(n,h)):(h.next=a.next,n.pending=a.next=h)}}function Mm(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var h=X.T,T={};X.T=T;try{var U=a(u,o),W=X.S;W!==null&&W(T,U),bm(e,n,U)}catch(ut){Hf(e,n,ut)}finally{X.T=h}}else try{h=a(u,o),bm(e,n,h)}catch(ut){Hf(e,n,ut)}}function bm(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Tm(e,n,o)},function(o){return Hf(e,n,o)}):Tm(e,n,a)}function Tm(e,n,a){n.status="fulfilled",n.value=a,Am(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Mm(e,a)))}function Hf(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Am(n),n=n.next;while(n!==o)}e.action=null}function Am(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Rm(e,n){return n}function wm(e,n){if(Xe){var a=on.formState;if(a!==null){t:{var o=Re;if(Xe){if(pn){e:{for(var u=pn,h=oa;u.nodeType!==8;){if(!h){u=null;break e}if(u=Zi(u.nextSibling),u===null){u=null;break e}}h=u.data,u=h==="F!"||h==="F"?u:null}if(u){pn=Zi(u.nextSibling),o=u.data==="F!";break t}}qr(o)}o=!1}o&&(n=a[0])}}return a=fi(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Rm,lastRenderedState:n},a.queue=o,a=Ym.bind(null,Re,o),o.dispatch=a,o=zf(!1),h=Wf.bind(null,Re,!1,o.queue),o=fi(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=my.bind(null,Re,u,h,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function Cm(e){var n=wn();return Dm(n,$e,e)}function Dm(e,n,a){if(n=Bf(e,n,Rm)[0],e=lc(Ra)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=jo(n)}catch(T){throw T===Vo?nc:T}else o=n;n=wn();var u=n.queue,h=u.dispatch;return a!==n.memoizedState&&(Re.flags|=2048,Ps(9,cc(),gy.bind(null,u,a),null)),[o,h,e]}function gy(e,n){e.action=n}function Um(e){var n=wn(),a=$e;if(a!==null)return Dm(n,a,e);wn(),n=n.memoizedState,a=wn();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function Ps(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=Re.updateQueue,n===null&&(n=Pf(),Re.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function cc(){return{destroy:void 0,resource:void 0}}function Lm(){return wn().memoizedState}function uc(e,n,a,o){var u=fi();o=o===void 0?null:o,Re.flags|=e,u.memoizedState=Ps(1|n,cc(),a,o)}function Zo(e,n,a,o){var u=wn();o=o===void 0?null:o;var h=u.memoizedState.inst;$e!==null&&o!==null&&Df(o,$e.memoizedState.deps)?u.memoizedState=Ps(n,h,a,o):(Re.flags|=e,u.memoizedState=Ps(1|n,h,a,o))}function Nm(e,n){uc(8390656,8,e,n)}function Om(e,n){Zo(2048,8,e,n)}function Pm(e,n){return Zo(4,2,e,n)}function Fm(e,n){return Zo(4,4,e,n)}function Bm(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Im(e,n,a){a=a!=null?a.concat([e]):null,Zo(4,4,Bm.bind(null,n,e),a)}function Gf(){}function zm(e,n){var a=wn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Df(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function Hm(e,n){var a=wn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Df(n,o[1]))return o[0];if(o=e(),Kr){Gt(!0);try{e()}finally{Gt(!1)}}return a.memoizedState=[o,n],o}function Vf(e,n,a){return a===void 0||(er&1073741824)!==0?e.memoizedState=n:(e.memoizedState=a,e=kg(),Re.lanes|=e,lr|=e,a)}function Gm(e,n,a,o){return Si(a,n)?a:Ls.current!==null?(e=Vf(e,a,o),Si(e,n)||(Hn=!0),e):(er&42)===0?(Hn=!0,e.memoizedState=a):(e=kg(),Re.lanes|=e,lr|=e,n)}function Vm(e,n,a,o,u){var h=st.p;st.p=h!==0&&8>h?h:8;var T=X.T,U={};X.T=U,Wf(e,!1,n,a);try{var W=u(),ut=X.S;if(ut!==null&&ut(U,W),W!==null&&typeof W=="object"&&typeof W.then=="function"){var xt=hy(W,o);Ko(e,n,xt,Ti(e))}else Ko(e,n,o,Ti(e))}catch(Ct){Ko(e,n,{then:function(){},status:"rejected",reason:Ct},Ti())}finally{st.p=h,X.T=T}}function _y(){}function kf(e,n,a,o){if(e.tag!==5)throw Error(r(476));var u=km(e).queue;Vm(e,u,n,tt,a===null?_y:function(){return Xm(e),a(o)})}function km(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:tt,baseState:tt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ra,lastRenderedState:tt},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ra,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Xm(e){var n=km(e).next.queue;Ko(e,n,{},Ti())}function Xf(){return ei(pl)}function Wm(){return wn().memoizedState}function qm(){return wn().memoizedState}function vy(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=Ti();e=$a(a);var o=tr(n,e,a);o!==null&&(Ai(o,n,a),Xo(o,n,a)),n={cache:Sf()},e.payload=n;return}n=n.return}}function yy(e,n,a){var o=Ti();a={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},fc(e)?jm(n,a):(a=uf(e,n,a,o),a!==null&&(Ai(a,e,o),Zm(a,n,o)))}function Ym(e,n,a){var o=Ti();Ko(e,n,a,o)}function Ko(e,n,a,o){var u={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(fc(e))jm(n,u);else{var h=e.alternate;if(e.lanes===0&&(h===null||h.lanes===0)&&(h=n.lastRenderedReducer,h!==null))try{var T=n.lastRenderedState,U=h(T,a);if(u.hasEagerState=!0,u.eagerState=U,Si(U,T))return jl(e,n,u,0),on===null&&Yl(),!1}catch{}finally{}if(a=uf(e,n,u,o),a!==null)return Ai(a,e,o),Zm(a,n,o),!0}return!1}function Wf(e,n,a,o){if(o={lane:2,revertLane:Mh(),action:o,hasEagerState:!1,eagerState:null,next:null},fc(e)){if(n)throw Error(r(479))}else n=uf(e,a,o,2),n!==null&&Ai(n,e,2)}function fc(e){var n=e.alternate;return e===Re||n!==null&&n===Re}function jm(e,n){Ns=rc=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Zm(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,_e(e,a)}}var hc={readContext:ei,use:oc,useCallback:Sn,useContext:Sn,useEffect:Sn,useImperativeHandle:Sn,useLayoutEffect:Sn,useInsertionEffect:Sn,useMemo:Sn,useReducer:Sn,useRef:Sn,useState:Sn,useDebugValue:Sn,useDeferredValue:Sn,useTransition:Sn,useSyncExternalStore:Sn,useId:Sn,useHostTransitionStatus:Sn,useFormState:Sn,useActionState:Sn,useOptimistic:Sn,useMemoCache:Sn,useCacheRefresh:Sn},Km={readContext:ei,use:oc,useCallback:function(e,n){return fi().memoizedState=[e,n===void 0?null:n],e},useContext:ei,useEffect:Nm,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,uc(4194308,4,Bm.bind(null,n,e),a)},useLayoutEffect:function(e,n){return uc(4194308,4,e,n)},useInsertionEffect:function(e,n){uc(4,2,e,n)},useMemo:function(e,n){var a=fi();n=n===void 0?null:n;var o=e();if(Kr){Gt(!0);try{e()}finally{Gt(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=fi();if(a!==void 0){var u=a(n);if(Kr){Gt(!0);try{a(n)}finally{Gt(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=yy.bind(null,Re,e),[o.memoizedState,e]},useRef:function(e){var n=fi();return e={current:e},n.memoizedState=e},useState:function(e){e=zf(e);var n=e.queue,a=Ym.bind(null,Re,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Gf,useDeferredValue:function(e,n){var a=fi();return Vf(a,e,n)},useTransition:function(){var e=zf(!1);return e=Vm.bind(null,Re,e.queue,!0,!1),fi().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=Re,u=fi();if(Xe){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),on===null)throw Error(r(349));(ze&124)!==0||_m(o,n,a)}u.memoizedState=a;var h={value:a,getSnapshot:n};return u.queue=h,Nm(ym.bind(null,o,h,e),[e]),o.flags|=2048,Ps(9,cc(),vm.bind(null,o,h,a,n),null),a},useId:function(){var e=fi(),n=on.identifierPrefix;if(Xe){var a=ba,o=Ma;a=(o&~(1<<32-zt(o)-1)).toString(32)+a,n="«"+n+"R"+a,a=sc++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=dy++,n="«"+n+"r"+a.toString(32)+"»";return e.memoizedState=n},useHostTransitionStatus:Xf,useFormState:wm,useActionState:wm,useOptimistic:function(e){var n=fi();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Wf.bind(null,Re,!0,a),a.dispatch=n,[e,n]},useMemoCache:Ff,useCacheRefresh:function(){return fi().memoizedState=vy.bind(null,Re)}},Qm={readContext:ei,use:oc,useCallback:zm,useContext:ei,useEffect:Om,useImperativeHandle:Im,useInsertionEffect:Pm,useLayoutEffect:Fm,useMemo:Hm,useReducer:lc,useRef:Lm,useState:function(){return lc(Ra)},useDebugValue:Gf,useDeferredValue:function(e,n){var a=wn();return Gm(a,$e.memoizedState,e,n)},useTransition:function(){var e=lc(Ra)[0],n=wn().memoizedState;return[typeof e=="boolean"?e:jo(e),n]},useSyncExternalStore:gm,useId:Wm,useHostTransitionStatus:Xf,useFormState:Cm,useActionState:Cm,useOptimistic:function(e,n){var a=wn();return Em(a,$e,e,n)},useMemoCache:Ff,useCacheRefresh:qm},Sy={readContext:ei,use:oc,useCallback:zm,useContext:ei,useEffect:Om,useImperativeHandle:Im,useInsertionEffect:Pm,useLayoutEffect:Fm,useMemo:Hm,useReducer:If,useRef:Lm,useState:function(){return If(Ra)},useDebugValue:Gf,useDeferredValue:function(e,n){var a=wn();return $e===null?Vf(a,e,n):Gm(a,$e.memoizedState,e,n)},useTransition:function(){var e=If(Ra)[0],n=wn().memoizedState;return[typeof e=="boolean"?e:jo(e),n]},useSyncExternalStore:gm,useId:Wm,useHostTransitionStatus:Xf,useFormState:Um,useActionState:Um,useOptimistic:function(e,n){var a=wn();return $e!==null?Em(a,$e,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Ff,useCacheRefresh:qm},Fs=null,Qo=0;function dc(e){var n=Qo;return Qo+=1,Fs===null&&(Fs=[]),lm(Fs,e,n)}function Jo(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function pc(e,n){throw n.$$typeof===y?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Jm(e){var n=e._init;return n(e._payload)}function $m(e){function n(nt,Q){if(e){var lt=nt.deletions;lt===null?(nt.deletions=[Q],nt.flags|=16):lt.push(Q)}}function a(nt,Q){if(!e)return null;for(;Q!==null;)n(nt,Q),Q=Q.sibling;return null}function o(nt){for(var Q=new Map;nt!==null;)nt.key!==null?Q.set(nt.key,nt):Q.set(nt.index,nt),nt=nt.sibling;return Q}function u(nt,Q){return nt=Ea(nt,Q),nt.index=0,nt.sibling=null,nt}function h(nt,Q,lt){return nt.index=lt,e?(lt=nt.alternate,lt!==null?(lt=lt.index,lt<Q?(nt.flags|=67108866,Q):lt):(nt.flags|=67108866,Q)):(nt.flags|=1048576,Q)}function T(nt){return e&&nt.alternate===null&&(nt.flags|=67108866),nt}function U(nt,Q,lt,Tt){return Q===null||Q.tag!==6?(Q=hf(lt,nt.mode,Tt),Q.return=nt,Q):(Q=u(Q,lt),Q.return=nt,Q)}function W(nt,Q,lt,Tt){var Jt=lt.type;return Jt===w?xt(nt,Q,lt.props.children,Tt,lt.key):Q!==null&&(Q.elementType===Jt||typeof Jt=="object"&&Jt!==null&&Jt.$$typeof===K&&Jm(Jt)===Q.type)?(Q=u(Q,lt.props),Jo(Q,lt),Q.return=nt,Q):(Q=Kl(lt.type,lt.key,lt.props,null,nt.mode,Tt),Jo(Q,lt),Q.return=nt,Q)}function ut(nt,Q,lt,Tt){return Q===null||Q.tag!==4||Q.stateNode.containerInfo!==lt.containerInfo||Q.stateNode.implementation!==lt.implementation?(Q=df(lt,nt.mode,Tt),Q.return=nt,Q):(Q=u(Q,lt.children||[]),Q.return=nt,Q)}function xt(nt,Q,lt,Tt,Jt){return Q===null||Q.tag!==7?(Q=Vr(lt,nt.mode,Tt,Jt),Q.return=nt,Q):(Q=u(Q,lt),Q.return=nt,Q)}function Ct(nt,Q,lt){if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return Q=hf(""+Q,nt.mode,lt),Q.return=nt,Q;if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case E:return lt=Kl(Q.type,Q.key,Q.props,null,nt.mode,lt),Jo(lt,Q),lt.return=nt,lt;case b:return Q=df(Q,nt.mode,lt),Q.return=nt,Q;case K:var Tt=Q._init;return Q=Tt(Q._payload),Ct(nt,Q,lt)}if(Mt(Q)||rt(Q))return Q=Vr(Q,nt.mode,lt,null),Q.return=nt,Q;if(typeof Q.then=="function")return Ct(nt,dc(Q),lt);if(Q.$$typeof===H)return Ct(nt,tc(nt,Q),lt);pc(nt,Q)}return null}function pt(nt,Q,lt,Tt){var Jt=Q!==null?Q.key:null;if(typeof lt=="string"&&lt!==""||typeof lt=="number"||typeof lt=="bigint")return Jt!==null?null:U(nt,Q,""+lt,Tt);if(typeof lt=="object"&&lt!==null){switch(lt.$$typeof){case E:return lt.key===Jt?W(nt,Q,lt,Tt):null;case b:return lt.key===Jt?ut(nt,Q,lt,Tt):null;case K:return Jt=lt._init,lt=Jt(lt._payload),pt(nt,Q,lt,Tt)}if(Mt(lt)||rt(lt))return Jt!==null?null:xt(nt,Q,lt,Tt,null);if(typeof lt.then=="function")return pt(nt,Q,dc(lt),Tt);if(lt.$$typeof===H)return pt(nt,Q,tc(nt,lt),Tt);pc(nt,lt)}return null}function mt(nt,Q,lt,Tt,Jt){if(typeof Tt=="string"&&Tt!==""||typeof Tt=="number"||typeof Tt=="bigint")return nt=nt.get(lt)||null,U(Q,nt,""+Tt,Jt);if(typeof Tt=="object"&&Tt!==null){switch(Tt.$$typeof){case E:return nt=nt.get(Tt.key===null?lt:Tt.key)||null,W(Q,nt,Tt,Jt);case b:return nt=nt.get(Tt.key===null?lt:Tt.key)||null,ut(Q,nt,Tt,Jt);case K:var Ce=Tt._init;return Tt=Ce(Tt._payload),mt(nt,Q,lt,Tt,Jt)}if(Mt(Tt)||rt(Tt))return nt=nt.get(lt)||null,xt(Q,nt,Tt,Jt,null);if(typeof Tt.then=="function")return mt(nt,Q,lt,dc(Tt),Jt);if(Tt.$$typeof===H)return mt(nt,Q,lt,tc(Q,Tt),Jt);pc(Q,Tt)}return null}function me(nt,Q,lt,Tt){for(var Jt=null,Ce=null,ae=Q,de=Q=0,Vn=null;ae!==null&&de<lt.length;de++){ae.index>de?(Vn=ae,ae=null):Vn=ae.sibling;var He=pt(nt,ae,lt[de],Tt);if(He===null){ae===null&&(ae=Vn);break}e&&ae&&He.alternate===null&&n(nt,ae),Q=h(He,Q,de),Ce===null?Jt=He:Ce.sibling=He,Ce=He,ae=Vn}if(de===lt.length)return a(nt,ae),Xe&&Xr(nt,de),Jt;if(ae===null){for(;de<lt.length;de++)ae=Ct(nt,lt[de],Tt),ae!==null&&(Q=h(ae,Q,de),Ce===null?Jt=ae:Ce.sibling=ae,Ce=ae);return Xe&&Xr(nt,de),Jt}for(ae=o(ae);de<lt.length;de++)Vn=mt(ae,nt,de,lt[de],Tt),Vn!==null&&(e&&Vn.alternate!==null&&ae.delete(Vn.key===null?de:Vn.key),Q=h(Vn,Q,de),Ce===null?Jt=Vn:Ce.sibling=Vn,Ce=Vn);return e&&ae.forEach(function(_r){return n(nt,_r)}),Xe&&Xr(nt,de),Jt}function fe(nt,Q,lt,Tt){if(lt==null)throw Error(r(151));for(var Jt=null,Ce=null,ae=Q,de=Q=0,Vn=null,He=lt.next();ae!==null&&!He.done;de++,He=lt.next()){ae.index>de?(Vn=ae,ae=null):Vn=ae.sibling;var _r=pt(nt,ae,He.value,Tt);if(_r===null){ae===null&&(ae=Vn);break}e&&ae&&_r.alternate===null&&n(nt,ae),Q=h(_r,Q,de),Ce===null?Jt=_r:Ce.sibling=_r,Ce=_r,ae=Vn}if(He.done)return a(nt,ae),Xe&&Xr(nt,de),Jt;if(ae===null){for(;!He.done;de++,He=lt.next())He=Ct(nt,He.value,Tt),He!==null&&(Q=h(He,Q,de),Ce===null?Jt=He:Ce.sibling=He,Ce=He);return Xe&&Xr(nt,de),Jt}for(ae=o(ae);!He.done;de++,He=lt.next())He=mt(ae,nt,de,He.value,Tt),He!==null&&(e&&He.alternate!==null&&ae.delete(He.key===null?de:He.key),Q=h(He,Q,de),Ce===null?Jt=He:Ce.sibling=He,Ce=He);return e&&ae.forEach(function(xS){return n(nt,xS)}),Xe&&Xr(nt,de),Jt}function en(nt,Q,lt,Tt){if(typeof lt=="object"&&lt!==null&&lt.type===w&&lt.key===null&&(lt=lt.props.children),typeof lt=="object"&&lt!==null){switch(lt.$$typeof){case E:t:{for(var Jt=lt.key;Q!==null;){if(Q.key===Jt){if(Jt=lt.type,Jt===w){if(Q.tag===7){a(nt,Q.sibling),Tt=u(Q,lt.props.children),Tt.return=nt,nt=Tt;break t}}else if(Q.elementType===Jt||typeof Jt=="object"&&Jt!==null&&Jt.$$typeof===K&&Jm(Jt)===Q.type){a(nt,Q.sibling),Tt=u(Q,lt.props),Jo(Tt,lt),Tt.return=nt,nt=Tt;break t}a(nt,Q);break}else n(nt,Q);Q=Q.sibling}lt.type===w?(Tt=Vr(lt.props.children,nt.mode,Tt,lt.key),Tt.return=nt,nt=Tt):(Tt=Kl(lt.type,lt.key,lt.props,null,nt.mode,Tt),Jo(Tt,lt),Tt.return=nt,nt=Tt)}return T(nt);case b:t:{for(Jt=lt.key;Q!==null;){if(Q.key===Jt)if(Q.tag===4&&Q.stateNode.containerInfo===lt.containerInfo&&Q.stateNode.implementation===lt.implementation){a(nt,Q.sibling),Tt=u(Q,lt.children||[]),Tt.return=nt,nt=Tt;break t}else{a(nt,Q);break}else n(nt,Q);Q=Q.sibling}Tt=df(lt,nt.mode,Tt),Tt.return=nt,nt=Tt}return T(nt);case K:return Jt=lt._init,lt=Jt(lt._payload),en(nt,Q,lt,Tt)}if(Mt(lt))return me(nt,Q,lt,Tt);if(rt(lt)){if(Jt=rt(lt),typeof Jt!="function")throw Error(r(150));return lt=Jt.call(lt),fe(nt,Q,lt,Tt)}if(typeof lt.then=="function")return en(nt,Q,dc(lt),Tt);if(lt.$$typeof===H)return en(nt,Q,tc(nt,lt),Tt);pc(nt,lt)}return typeof lt=="string"&&lt!==""||typeof lt=="number"||typeof lt=="bigint"?(lt=""+lt,Q!==null&&Q.tag===6?(a(nt,Q.sibling),Tt=u(Q,lt),Tt.return=nt,nt=Tt):(a(nt,Q),Tt=hf(lt,nt.mode,Tt),Tt.return=nt,nt=Tt),T(nt)):a(nt,Q)}return function(nt,Q,lt,Tt){try{Qo=0;var Jt=en(nt,Q,lt,Tt);return Fs=null,Jt}catch(ae){if(ae===Vo||ae===nc)throw ae;var Ce=xi(29,ae,null,nt.mode);return Ce.lanes=Tt,Ce.return=nt,Ce}finally{}}}var Bs=$m(!0),tg=$m(!1),Fi=ct(null),la=null;function nr(e){var n=e.alternate;Dt(Nn,Nn.current&1),Dt(Fi,e),la===null&&(n===null||Ls.current!==null||n.memoizedState!==null)&&(la=e)}function eg(e){if(e.tag===22){if(Dt(Nn,Nn.current),Dt(Fi,e),la===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&(la=e)}}else ir()}function ir(){Dt(Nn,Nn.current),Dt(Fi,Fi.current)}function wa(e){At(Fi),la===e&&(la=null),At(Nn)}var Nn=ct(0);function mc(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Ph(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function qf(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:v({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Yf={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=Ti(),u=$a(o);u.payload=n,a!=null&&(u.callback=a),n=tr(e,u,o),n!==null&&(Ai(n,e,o),Xo(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=Ti(),u=$a(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=tr(e,u,o),n!==null&&(Ai(n,e,o),Xo(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=Ti(),o=$a(a);o.tag=2,n!=null&&(o.callback=n),n=tr(e,o,a),n!==null&&(Ai(n,e,a),Xo(n,e,a))}};function ng(e,n,a,o,u,h,T){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,h,T):n.prototype&&n.prototype.isPureReactComponent?!Oo(a,o)||!Oo(u,h):!0}function ig(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&Yf.enqueueReplaceState(n,n.state,null)}function Qr(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=v({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}var gc=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function ag(e){gc(e)}function rg(e){console.error(e)}function sg(e){gc(e)}function _c(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function og(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function jf(e,n,a){return a=$a(a),a.tag=3,a.payload={element:null},a.callback=function(){_c(e,n)},a}function lg(e){return e=$a(e),e.tag=3,e}function cg(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var h=o.value;e.payload=function(){return u(h)},e.callback=function(){og(n,a,o)}}var T=a.stateNode;T!==null&&typeof T.componentDidCatch=="function"&&(e.callback=function(){og(n,a,o),typeof u!="function"&&(cr===null?cr=new Set([this]):cr.add(this));var U=o.stack;this.componentDidCatch(o.value,{componentStack:U!==null?U:""})})}function xy(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&zo(n,a,u,!0),a=Fi.current,a!==null){switch(a.tag){case 13:return la===null?vh():a.alternate===null&&mn===0&&(mn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Mf?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Sh(e,o,u)),!1;case 22:return a.flags|=65536,o===Mf?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Sh(e,o,u)),!1}throw Error(r(435,a.tag))}return Sh(e,o,u),vh(),!1}if(Xe)return n=Fi.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==gf&&(e=Error(r(422),{cause:o}),Io(Li(e,a)))):(o!==gf&&(n=Error(r(423),{cause:o}),Io(Li(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=Li(o,a),u=jf(e.stateNode,o,u),Af(e,u),mn!==4&&(mn=2)),!1;var h=Error(r(520),{cause:o});if(h=Li(h,a),rl===null?rl=[h]:rl.push(h),mn!==4&&(mn=2),n===null)return!0;o=Li(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=jf(a.stateNode,o,e),Af(a,e),!1;case 1:if(n=a.type,h=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(cr===null||!cr.has(h))))return a.flags|=65536,u&=-u,a.lanes|=u,u=lg(u),cg(u,e,a,o),Af(a,u),!1}a=a.return}while(a!==null);return!1}var ug=Error(r(461)),Hn=!1;function Zn(e,n,a,o){n.child=e===null?tg(n,null,a,o):Bs(n,e.child,a,o)}function fg(e,n,a,o,u){a=a.render;var h=n.ref;if("ref"in o){var T={};for(var U in o)U!=="ref"&&(T[U]=o[U])}else T=o;return jr(n),o=Uf(e,n,a,T,h,u),U=Lf(),e!==null&&!Hn?(Nf(e,n,u),Ca(e,n,u)):(Xe&&U&&pf(n),n.flags|=1,Zn(e,n,o,u),n.child)}function hg(e,n,a,o,u){if(e===null){var h=a.type;return typeof h=="function"&&!ff(h)&&h.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=h,dg(e,n,h,o,u)):(e=Kl(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(h=e.child,!nh(e,u)){var T=h.memoizedProps;if(a=a.compare,a=a!==null?a:Oo,a(T,o)&&e.ref===n.ref)return Ca(e,n,u)}return n.flags|=1,e=Ea(h,o),e.ref=n.ref,e.return=n,n.child=e}function dg(e,n,a,o,u){if(e!==null){var h=e.memoizedProps;if(Oo(h,o)&&e.ref===n.ref)if(Hn=!1,n.pendingProps=o=h,nh(e,u))(e.flags&131072)!==0&&(Hn=!0);else return n.lanes=e.lanes,Ca(e,n,u)}return Zf(e,n,a,o,u)}function pg(e,n,a){var o=n.pendingProps,u=o.children,h=e!==null?e.memoizedState:null;if(o.mode==="hidden"){if((n.flags&128)!==0){if(o=h!==null?h.baseLanes|a:a,e!==null){for(u=n.child=e.child,h=0;u!==null;)h=h|u.lanes|u.childLanes,u=u.sibling;n.childLanes=h&~o}else n.childLanes=0,n.child=null;return mg(e,n,o,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&ec(n,h!==null?h.cachePool:null),h!==null?dm(n,h):wf(),eg(n);else return n.lanes=n.childLanes=536870912,mg(e,n,h!==null?h.baseLanes|a:a,a)}else h!==null?(ec(n,h.cachePool),dm(n,h),ir(),n.memoizedState=null):(e!==null&&ec(n,null),wf(),ir());return Zn(e,n,u,a),n.child}function mg(e,n,a,o){var u=Ef();return u=u===null?null:{parent:Ln._currentValue,pool:u},n.memoizedState={baseLanes:a,cachePool:u},e!==null&&ec(n,null),wf(),eg(n),e!==null&&zo(e,n,o,!0),null}function vc(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function Zf(e,n,a,o,u){return jr(n),a=Uf(e,n,a,o,void 0,u),o=Lf(),e!==null&&!Hn?(Nf(e,n,u),Ca(e,n,u)):(Xe&&o&&pf(n),n.flags|=1,Zn(e,n,a,u),n.child)}function gg(e,n,a,o,u,h){return jr(n),n.updateQueue=null,a=mm(n,o,a,u),pm(e),o=Lf(),e!==null&&!Hn?(Nf(e,n,h),Ca(e,n,h)):(Xe&&o&&pf(n),n.flags|=1,Zn(e,n,a,h),n.child)}function _g(e,n,a,o,u){if(jr(n),n.stateNode===null){var h=Rs,T=a.contextType;typeof T=="object"&&T!==null&&(h=ei(T)),h=new a(o,h),n.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=Yf,n.stateNode=h,h._reactInternals=n,h=n.stateNode,h.props=o,h.state=n.memoizedState,h.refs={},bf(n),T=a.contextType,h.context=typeof T=="object"&&T!==null?ei(T):Rs,h.state=n.memoizedState,T=a.getDerivedStateFromProps,typeof T=="function"&&(qf(n,a,T,o),h.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(T=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),T!==h.state&&Yf.enqueueReplaceState(h,h.state,null),qo(n,o,h,u),Wo(),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){h=n.stateNode;var U=n.memoizedProps,W=Qr(a,U);h.props=W;var ut=h.context,xt=a.contextType;T=Rs,typeof xt=="object"&&xt!==null&&(T=ei(xt));var Ct=a.getDerivedStateFromProps;xt=typeof Ct=="function"||typeof h.getSnapshotBeforeUpdate=="function",U=n.pendingProps!==U,xt||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(U||ut!==T)&&ig(n,h,o,T),Ja=!1;var pt=n.memoizedState;h.state=pt,qo(n,o,h,u),Wo(),ut=n.memoizedState,U||pt!==ut||Ja?(typeof Ct=="function"&&(qf(n,a,Ct,o),ut=n.memoizedState),(W=Ja||ng(n,a,W,o,pt,ut,T))?(xt||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(n.flags|=4194308)):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=ut),h.props=o,h.state=ut,h.context=T,o=W):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{h=n.stateNode,Tf(e,n),T=n.memoizedProps,xt=Qr(a,T),h.props=xt,Ct=n.pendingProps,pt=h.context,ut=a.contextType,W=Rs,typeof ut=="object"&&ut!==null&&(W=ei(ut)),U=a.getDerivedStateFromProps,(ut=typeof U=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(T!==Ct||pt!==W)&&ig(n,h,o,W),Ja=!1,pt=n.memoizedState,h.state=pt,qo(n,o,h,u),Wo();var mt=n.memoizedState;T!==Ct||pt!==mt||Ja||e!==null&&e.dependencies!==null&&$l(e.dependencies)?(typeof U=="function"&&(qf(n,a,U,o),mt=n.memoizedState),(xt=Ja||ng(n,a,xt,o,pt,mt,W)||e!==null&&e.dependencies!==null&&$l(e.dependencies))?(ut||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(o,mt,W),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(o,mt,W)),typeof h.componentDidUpdate=="function"&&(n.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof h.componentDidUpdate!="function"||T===e.memoizedProps&&pt===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||T===e.memoizedProps&&pt===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=mt),h.props=o,h.state=mt,h.context=W,o=xt):(typeof h.componentDidUpdate!="function"||T===e.memoizedProps&&pt===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||T===e.memoizedProps&&pt===e.memoizedState||(n.flags|=1024),o=!1)}return h=o,vc(e,n),o=(n.flags&128)!==0,h||o?(h=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:h.render(),n.flags|=1,e!==null&&o?(n.child=Bs(n,e.child,null,u),n.child=Bs(n,null,a,u)):Zn(e,n,a,u),n.memoizedState=h.state,e=n.child):e=Ca(e,n,u),e}function vg(e,n,a,o){return Bo(),n.flags|=256,Zn(e,n,a,o),n.child}var Kf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Qf(e){return{baseLanes:e,cachePool:rm()}}function Jf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=Bi),e}function yg(e,n,a){var o=n.pendingProps,u=!1,h=(n.flags&128)!==0,T;if((T=h)||(T=e!==null&&e.memoizedState===null?!1:(Nn.current&2)!==0),T&&(u=!0,n.flags&=-129),T=(n.flags&32)!==0,n.flags&=-33,e===null){if(Xe){if(u?nr(n):ir(),Xe){var U=pn,W;if(W=U){t:{for(W=U,U=oa;W.nodeType!==8;){if(!U){U=null;break t}if(W=Zi(W.nextSibling),W===null){U=null;break t}}U=W}U!==null?(n.memoizedState={dehydrated:U,treeContext:kr!==null?{id:Ma,overflow:ba}:null,retryLane:536870912,hydrationErrors:null},W=xi(18,null,null,0),W.stateNode=U,W.return=n,n.child=W,oi=n,pn=null,W=!0):W=!1}W||qr(n)}if(U=n.memoizedState,U!==null&&(U=U.dehydrated,U!==null))return Ph(U)?n.lanes=32:n.lanes=536870912,null;wa(n)}return U=o.children,o=o.fallback,u?(ir(),u=n.mode,U=yc({mode:"hidden",children:U},u),o=Vr(o,u,a,null),U.return=n,o.return=n,U.sibling=o,n.child=U,u=n.child,u.memoizedState=Qf(a),u.childLanes=Jf(e,T,a),n.memoizedState=Kf,o):(nr(n),$f(n,U))}if(W=e.memoizedState,W!==null&&(U=W.dehydrated,U!==null)){if(h)n.flags&256?(nr(n),n.flags&=-257,n=th(e,n,a)):n.memoizedState!==null?(ir(),n.child=e.child,n.flags|=128,n=null):(ir(),u=o.fallback,U=n.mode,o=yc({mode:"visible",children:o.children},U),u=Vr(u,U,a,null),u.flags|=2,o.return=n,u.return=n,o.sibling=u,n.child=o,Bs(n,e.child,null,a),o=n.child,o.memoizedState=Qf(a),o.childLanes=Jf(e,T,a),n.memoizedState=Kf,n=u);else if(nr(n),Ph(U)){if(T=U.nextSibling&&U.nextSibling.dataset,T)var ut=T.dgst;T=ut,o=Error(r(419)),o.stack="",o.digest=T,Io({value:o,source:null,stack:null}),n=th(e,n,a)}else if(Hn||zo(e,n,a,!1),T=(a&e.childLanes)!==0,Hn||T){if(T=on,T!==null&&(o=a&-a,o=(o&42)!==0?1:Ke(o),o=(o&(T.suspendedLanes|a))!==0?0:o,o!==0&&o!==W.retryLane))throw W.retryLane=o,As(e,o),Ai(T,e,o),ug;U.data==="$?"||vh(),n=th(e,n,a)}else U.data==="$?"?(n.flags|=192,n.child=e.child,n=null):(e=W.treeContext,pn=Zi(U.nextSibling),oi=n,Xe=!0,Wr=null,oa=!1,e!==null&&(Oi[Pi++]=Ma,Oi[Pi++]=ba,Oi[Pi++]=kr,Ma=e.id,ba=e.overflow,kr=n),n=$f(n,o.children),n.flags|=4096);return n}return u?(ir(),u=o.fallback,U=n.mode,W=e.child,ut=W.sibling,o=Ea(W,{mode:"hidden",children:o.children}),o.subtreeFlags=W.subtreeFlags&65011712,ut!==null?u=Ea(ut,u):(u=Vr(u,U,a,null),u.flags|=2),u.return=n,o.return=n,o.sibling=u,n.child=o,o=u,u=n.child,U=e.child.memoizedState,U===null?U=Qf(a):(W=U.cachePool,W!==null?(ut=Ln._currentValue,W=W.parent!==ut?{parent:ut,pool:ut}:W):W=rm(),U={baseLanes:U.baseLanes|a,cachePool:W}),u.memoizedState=U,u.childLanes=Jf(e,T,a),n.memoizedState=Kf,o):(nr(n),a=e.child,e=a.sibling,a=Ea(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(T=n.deletions,T===null?(n.deletions=[e],n.flags|=16):T.push(e)),n.child=a,n.memoizedState=null,a)}function $f(e,n){return n=yc({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function yc(e,n){return e=xi(22,e,null,n),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function th(e,n,a){return Bs(n,e.child,null,a),e=$f(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Sg(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),vf(e.return,n,a)}function eh(e,n,a,o,u){var h=e.memoizedState;h===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u}:(h.isBackwards=n,h.rendering=null,h.renderingStartTime=0,h.last=o,h.tail=a,h.tailMode=u)}function xg(e,n,a){var o=n.pendingProps,u=o.revealOrder,h=o.tail;if(Zn(e,n,o.children,a),o=Nn.current,(o&2)!==0)o=o&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Sg(e,a,n);else if(e.tag===19)Sg(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}switch(Dt(Nn,o),u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&mc(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),eh(n,!1,u,a,h);break;case"backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&mc(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}eh(n,!0,a,null,h);break;case"together":eh(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Ca(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),lr|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(zo(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,a=Ea(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Ea(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function nh(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&$l(e)))}function Ey(e,n,a){switch(n.tag){case 3:Pt(n,n.stateNode.containerInfo),Qa(n,Ln,e.memoizedState.cache),Bo();break;case 27:case 5:ee(n);break;case 4:Pt(n,n.stateNode.containerInfo);break;case 10:Qa(n,n.type,n.memoizedProps.value);break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(nr(n),n.flags|=128,null):(a&n.child.childLanes)!==0?yg(e,n,a):(nr(n),e=Ca(e,n,a),e!==null?e.sibling:null);nr(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(zo(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return xg(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Dt(Nn,Nn.current),o)break;return null;case 22:case 23:return n.lanes=0,pg(e,n,a);case 24:Qa(n,Ln,e.memoizedState.cache)}return Ca(e,n,a)}function Eg(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)Hn=!0;else{if(!nh(e,a)&&(n.flags&128)===0)return Hn=!1,Ey(e,n,a);Hn=(e.flags&131072)!==0}else Hn=!1,Xe&&(n.flags&1048576)!==0&&Jp(n,Jl,n.index);switch(n.lanes=0,n.tag){case 16:t:{e=n.pendingProps;var o=n.elementType,u=o._init;if(o=u(o._payload),n.type=o,typeof o=="function")ff(o)?(e=Qr(o,e),n.tag=1,n=_g(null,n,o,e,a)):(n.tag=0,n=Zf(null,n,o,e,a));else{if(o!=null){if(u=o.$$typeof,u===P){n.tag=11,n=fg(null,n,o,e,a);break t}else if(u===k){n.tag=14,n=hg(null,n,o,e,a);break t}}throw n=_t(o)||o,Error(r(306,n,""))}}return n;case 0:return Zf(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=Qr(o,n.pendingProps),_g(e,n,o,u,a);case 3:t:{if(Pt(n,n.stateNode.containerInfo),e===null)throw Error(r(387));o=n.pendingProps;var h=n.memoizedState;u=h.element,Tf(e,n),qo(n,o,null,a);var T=n.memoizedState;if(o=T.cache,Qa(n,Ln,o),o!==h.cache&&yf(n,[Ln],a,!0),Wo(),o=T.element,h.isDehydrated)if(h={element:o,isDehydrated:!1,cache:T.cache},n.updateQueue.baseState=h,n.memoizedState=h,n.flags&256){n=vg(e,n,o,a);break t}else if(o!==u){u=Li(Error(r(424)),n),Io(u),n=vg(e,n,o,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(pn=Zi(e.firstChild),oi=n,Xe=!0,Wr=null,oa=!0,a=tg(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Bo(),o===u){n=Ca(e,n,a);break t}Zn(e,n,o,a)}n=n.child}return n;case 26:return vc(e,n),e===null?(a=A_(n.type,null,n.pendingProps,null))?n.memoizedState=a:Xe||(a=n.type,e=n.pendingProps,o=Nc(Ut.current).createElement(a),o[_n]=n,o[Dn]=e,Qn(o,a,e),ke(o),n.stateNode=o):n.memoizedState=A_(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return ee(n),e===null&&Xe&&(o=n.stateNode=M_(n.type,n.pendingProps,Ut.current),oi=n,oa=!0,u=pn,hr(n.type)?(Fh=u,pn=Zi(o.firstChild)):pn=u),Zn(e,n,n.pendingProps.children,a),vc(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Xe&&((u=o=pn)&&(o=Ky(o,n.type,n.pendingProps,oa),o!==null?(n.stateNode=o,oi=n,pn=Zi(o.firstChild),oa=!1,u=!0):u=!1),u||qr(n)),ee(n),u=n.type,h=n.pendingProps,T=e!==null?e.memoizedProps:null,o=h.children,Lh(u,h)?o=null:T!==null&&Lh(u,T)&&(n.flags|=32),n.memoizedState!==null&&(u=Uf(e,n,py,null,null,a),pl._currentValue=u),vc(e,n),Zn(e,n,o,a),n.child;case 6:return e===null&&Xe&&((e=a=pn)&&(a=Qy(a,n.pendingProps,oa),a!==null?(n.stateNode=a,oi=n,pn=null,e=!0):e=!1),e||qr(n)),null;case 13:return yg(e,n,a);case 4:return Pt(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=Bs(n,null,o,a):Zn(e,n,o,a),n.child;case 11:return fg(e,n,n.type,n.pendingProps,a);case 7:return Zn(e,n,n.pendingProps,a),n.child;case 8:return Zn(e,n,n.pendingProps.children,a),n.child;case 12:return Zn(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Qa(n,n.type,o.value),Zn(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,jr(n),u=ei(u),o=o(u),n.flags|=1,Zn(e,n,o,a),n.child;case 14:return hg(e,n,n.type,n.pendingProps,a);case 15:return dg(e,n,n.type,n.pendingProps,a);case 19:return xg(e,n,a);case 31:return o=n.pendingProps,a=n.mode,o={mode:o.mode,children:o.children},e===null?(a=yc(o,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=Ea(e.child,o),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return pg(e,n,a);case 24:return jr(n),o=ei(Ln),e===null?(u=Ef(),u===null&&(u=on,h=Sf(),u.pooledCache=h,h.refCount++,h!==null&&(u.pooledCacheLanes|=a),u=h),n.memoizedState={parent:o,cache:u},bf(n),Qa(n,Ln,u)):((e.lanes&a)!==0&&(Tf(e,n),qo(n,null,null,a),Wo()),u=e.memoizedState,h=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Qa(n,Ln,o)):(o=h.cache,Qa(n,Ln,o),o!==u.cache&&yf(n,[Ln],a,!0))),Zn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Da(e){e.flags|=4}function Mg(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!U_(n)){if(n=Fi.current,n!==null&&((ze&4194048)===ze?la!==null:(ze&62914560)!==ze&&(ze&536870912)===0||n!==la))throw ko=Mf,sm;e.flags|=8192}}function Sc(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Et():536870912,e.lanes|=n,Gs|=n)}function $o(e,n){if(!Xe)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function dn(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function My(e,n,a){var o=n.pendingProps;switch(mf(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return dn(n),null;case 1:return dn(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Aa(Ln),ce(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Fo(n)?Da(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,em())),dn(n),null;case 26:return a=n.memoizedState,e===null?(Da(n),a!==null?(dn(n),Mg(n,a)):(dn(n),n.flags&=-16777217)):a?a!==e.memoizedState?(Da(n),dn(n),Mg(n,a)):(dn(n),n.flags&=-16777217):(e.memoizedProps!==o&&Da(n),dn(n),n.flags&=-16777217),null;case 27:Ve(n),a=Ut.current;var u=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Da(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return dn(n),null}e=at.current,Fo(n)?$p(n):(e=M_(u,o,a),n.stateNode=e,Da(n))}return dn(n),null;case 5:if(Ve(n),a=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Da(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return dn(n),null}if(e=at.current,Fo(n))$p(n);else{switch(u=Nc(Ut.current),e){case 1:e=u.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=u.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=u.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof o.is=="string"?u.createElement("select",{is:o.is}):u.createElement("select"),o.multiple?e.multiple=!0:o.size&&(e.size=o.size);break;default:e=typeof o.is=="string"?u.createElement(a,{is:o.is}):u.createElement(a)}}e[_n]=n,e[Dn]=o;t:for(u=n.child;u!==null;){if(u.tag===5||u.tag===6)e.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===n)break t;for(;u.sibling===null;){if(u.return===null||u.return===n)break t;u=u.return}u.sibling.return=u.return,u=u.sibling}n.stateNode=e;t:switch(Qn(e,a,o),a){case"button":case"input":case"select":case"textarea":e=!!o.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&Da(n)}}return dn(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&Da(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(e=Ut.current,Fo(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=oi,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[_n]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||g_(e.nodeValue,a)),e||qr(n)}else e=Nc(e).createTextNode(o),e[_n]=n,n.stateNode=e}return dn(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=Fo(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[_n]=n}else Bo(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;dn(n),u=!1}else u=em(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(wa(n),n):(wa(n),null)}if(wa(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=o!==null,e=e!==null&&e.memoizedState!==null,a){o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool);var h=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(h=o.memoizedState.cachePool.pool),h!==u&&(o.flags|=2048)}return a!==e&&a&&(n.child.flags|=8192),Sc(n,n.updateQueue),dn(n),null;case 4:return ce(),e===null&&Rh(n.stateNode.containerInfo),dn(n),null;case 10:return Aa(n.type),dn(n),null;case 19:if(At(Nn),u=n.memoizedState,u===null)return dn(n),null;if(o=(n.flags&128)!==0,h=u.rendering,h===null)if(o)$o(u,!1);else{if(mn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(h=mc(e),h!==null){for(n.flags|=128,$o(u,!1),e=h.updateQueue,n.updateQueue=e,Sc(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Qp(a,e),a=a.sibling;return Dt(Nn,Nn.current&1|2),n.child}e=e.sibling}u.tail!==null&&ge()>Mc&&(n.flags|=128,o=!0,$o(u,!1),n.lanes=4194304)}else{if(!o)if(e=mc(h),e!==null){if(n.flags|=128,o=!0,e=e.updateQueue,n.updateQueue=e,Sc(n,e),$o(u,!0),u.tail===null&&u.tailMode==="hidden"&&!h.alternate&&!Xe)return dn(n),null}else 2*ge()-u.renderingStartTime>Mc&&a!==536870912&&(n.flags|=128,o=!0,$o(u,!1),n.lanes=4194304);u.isBackwards?(h.sibling=n.child,n.child=h):(e=u.last,e!==null?e.sibling=h:n.child=h,u.last=h)}return u.tail!==null?(n=u.tail,u.rendering=n,u.tail=n.sibling,u.renderingStartTime=ge(),n.sibling=null,e=Nn.current,Dt(Nn,o?e&1|2:e&1),n):(dn(n),null);case 22:case 23:return wa(n),Cf(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(dn(n),n.subtreeFlags&6&&(n.flags|=8192)):dn(n),a=n.updateQueue,a!==null&&Sc(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&At(Zr),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Aa(Ln),dn(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function by(e,n){switch(mf(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Aa(Ln),ce(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Ve(n),null;case 13:if(wa(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Bo()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return At(Nn),null;case 4:return ce(),null;case 10:return Aa(n.type),null;case 22:case 23:return wa(n),Cf(),e!==null&&At(Zr),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Aa(Ln),null;case 25:return null;default:return null}}function bg(e,n){switch(mf(n),n.tag){case 3:Aa(Ln),ce();break;case 26:case 27:case 5:Ve(n);break;case 4:ce();break;case 13:wa(n);break;case 19:At(Nn);break;case 10:Aa(n.type);break;case 22:case 23:wa(n),Cf(),e!==null&&At(Zr);break;case 24:Aa(Ln)}}function tl(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var h=a.create,T=a.inst;o=h(),T.destroy=o}a=a.next}while(a!==u)}}catch(U){rn(n,n.return,U)}}function ar(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var h=u.next;o=h;do{if((o.tag&e)===e){var T=o.inst,U=T.destroy;if(U!==void 0){T.destroy=void 0,u=n;var W=a,ut=U;try{ut()}catch(xt){rn(u,W,xt)}}}o=o.next}while(o!==h)}}catch(xt){rn(n,n.return,xt)}}function Tg(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{hm(n,a)}catch(o){rn(e,e.return,o)}}}function Ag(e,n,a){a.props=Qr(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){rn(e,n,o)}}function el(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){rn(e,n,u)}}function ca(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){rn(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){rn(e,n,u)}else a.current=null}function Rg(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){rn(e,e.return,u)}}function ih(e,n,a){try{var o=e.stateNode;Wy(o,e.type,a,n),o[Dn]=n}catch(u){rn(e,e.return,u)}}function wg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&hr(e.type)||e.tag===4}function ah(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||wg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&hr(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function rh(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Lc));else if(o!==4&&(o===27&&hr(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(rh(e,n,a),e=e.sibling;e!==null;)rh(e,n,a),e=e.sibling}function xc(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&hr(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(xc(e,n,a),e=e.sibling;e!==null;)xc(e,n,a),e=e.sibling}function Cg(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Qn(n,o,a),n[_n]=e,n[Dn]=a}catch(h){rn(e,e.return,h)}}var Ua=!1,xn=!1,sh=!1,Dg=typeof WeakSet=="function"?WeakSet:Set,Gn=null;function Ty(e,n){if(e=e.containerInfo,Dh=zc,e=Gp(e),af(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,h=o.focusNode;o=o.focusOffset;try{a.nodeType,h.nodeType}catch{a=null;break t}var T=0,U=-1,W=-1,ut=0,xt=0,Ct=e,pt=null;e:for(;;){for(var mt;Ct!==a||u!==0&&Ct.nodeType!==3||(U=T+u),Ct!==h||o!==0&&Ct.nodeType!==3||(W=T+o),Ct.nodeType===3&&(T+=Ct.nodeValue.length),(mt=Ct.firstChild)!==null;)pt=Ct,Ct=mt;for(;;){if(Ct===e)break e;if(pt===a&&++ut===u&&(U=T),pt===h&&++xt===o&&(W=T),(mt=Ct.nextSibling)!==null)break;Ct=pt,pt=Ct.parentNode}Ct=mt}a=U===-1||W===-1?null:{start:U,end:W}}else a=null}a=a||{start:0,end:0}}else a=null;for(Uh={focusedElem:e,selectionRange:a},zc=!1,Gn=n;Gn!==null;)if(n=Gn,e=n.child,(n.subtreeFlags&1024)!==0&&e!==null)e.return=n,Gn=e;else for(;Gn!==null;){switch(n=Gn,h=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&h!==null){e=void 0,a=n,u=h.memoizedProps,h=h.memoizedState,o=a.stateNode;try{var me=Qr(a.type,u,a.elementType===a.type);e=o.getSnapshotBeforeUpdate(me,h),o.__reactInternalSnapshotBeforeUpdate=e}catch(fe){rn(a,a.return,fe)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Oh(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Oh(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=n.sibling,e!==null){e.return=n.return,Gn=e;break}Gn=n.return}}function Ug(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:rr(e,a),o&4&&tl(5,a);break;case 1:if(rr(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(T){rn(a,a.return,T)}else{var u=Qr(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(T){rn(a,a.return,T)}}o&64&&Tg(a),o&512&&el(a,a.return);break;case 3:if(rr(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{hm(e,n)}catch(T){rn(a,a.return,T)}}break;case 27:n===null&&o&4&&Cg(a);case 26:case 5:rr(e,a),n===null&&o&4&&Rg(a),o&512&&el(a,a.return);break;case 12:rr(e,a);break;case 13:rr(e,a),o&4&&Og(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Oy.bind(null,a),Jy(e,a))));break;case 22:if(o=a.memoizedState!==null||Ua,!o){n=n!==null&&n.memoizedState!==null||xn,u=Ua;var h=xn;Ua=o,(xn=n)&&!h?sr(e,a,(a.subtreeFlags&8772)!==0):rr(e,a),Ua=u,xn=h}break;case 30:break;default:rr(e,a)}}function Lg(e){var n=e.alternate;n!==null&&(e.alternate=null,Lg(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&$n(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var un=null,hi=!1;function La(e,n,a){for(a=a.child;a!==null;)Ng(e,n,a),a=a.sibling}function Ng(e,n,a){if(kt&&typeof kt.onCommitFiberUnmount=="function")try{kt.onCommitFiberUnmount(St,a)}catch{}switch(a.tag){case 26:xn||ca(a,n),La(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:xn||ca(a,n);var o=un,u=hi;hr(a.type)&&(un=a.stateNode,hi=!1),La(e,n,a),ul(a.stateNode),un=o,hi=u;break;case 5:xn||ca(a,n);case 6:if(o=un,u=hi,un=null,La(e,n,a),un=o,hi=u,un!==null)if(hi)try{(un.nodeType===9?un.body:un.nodeName==="HTML"?un.ownerDocument.body:un).removeChild(a.stateNode)}catch(h){rn(a,n,h)}else try{un.removeChild(a.stateNode)}catch(h){rn(a,n,h)}break;case 18:un!==null&&(hi?(e=un,x_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),vl(e)):x_(un,a.stateNode));break;case 4:o=un,u=hi,un=a.stateNode.containerInfo,hi=!0,La(e,n,a),un=o,hi=u;break;case 0:case 11:case 14:case 15:xn||ar(2,a,n),xn||ar(4,a,n),La(e,n,a);break;case 1:xn||(ca(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&Ag(a,n,o)),La(e,n,a);break;case 21:La(e,n,a);break;case 22:xn=(o=xn)||a.memoizedState!==null,La(e,n,a),xn=o;break;default:La(e,n,a)}}function Og(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{vl(e)}catch(a){rn(n,n.return,a)}}function Ay(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Dg),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Dg),n;default:throw Error(r(435,e.tag))}}function oh(e,n){var a=Ay(e);n.forEach(function(o){var u=Py.bind(null,e,o);a.has(o)||(a.add(o),o.then(u,u))})}function Ei(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],h=e,T=n,U=T;t:for(;U!==null;){switch(U.tag){case 27:if(hr(U.type)){un=U.stateNode,hi=!1;break t}break;case 5:un=U.stateNode,hi=!1;break t;case 3:case 4:un=U.stateNode.containerInfo,hi=!0;break t}U=U.return}if(un===null)throw Error(r(160));Ng(h,T,u),un=null,hi=!1,h=u.alternate,h!==null&&(h.return=null),u.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)Pg(n,e),n=n.sibling}var ji=null;function Pg(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Ei(n,e),Mi(e),o&4&&(ar(3,e,e.return),tl(3,e),ar(5,e,e.return));break;case 1:Ei(n,e),Mi(e),o&512&&(xn||a===null||ca(a,a.return)),o&64&&Ua&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=ji;if(Ei(n,e),Mi(e),o&512&&(xn||a===null||ca(a,a.return)),o&4){var h=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":h=u.getElementsByTagName("title")[0],(!h||h[ri]||h[_n]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=u.createElement(o),u.head.insertBefore(h,u.querySelector("head > title"))),Qn(h,o,a),h[_n]=e,ke(h),o=h;break t;case"link":var T=C_("link","href",u).get(o+(a.href||""));if(T){for(var U=0;U<T.length;U++)if(h=T[U],h.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&h.getAttribute("rel")===(a.rel==null?null:a.rel)&&h.getAttribute("title")===(a.title==null?null:a.title)&&h.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){T.splice(U,1);break e}}h=u.createElement(o),Qn(h,o,a),u.head.appendChild(h);break;case"meta":if(T=C_("meta","content",u).get(o+(a.content||""))){for(U=0;U<T.length;U++)if(h=T[U],h.getAttribute("content")===(a.content==null?null:""+a.content)&&h.getAttribute("name")===(a.name==null?null:a.name)&&h.getAttribute("property")===(a.property==null?null:a.property)&&h.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&h.getAttribute("charset")===(a.charSet==null?null:a.charSet)){T.splice(U,1);break e}}h=u.createElement(o),Qn(h,o,a),u.head.appendChild(h);break;default:throw Error(r(468,o))}h[_n]=e,ke(h),o=h}e.stateNode=o}else D_(u,e.type,e.stateNode);else e.stateNode=w_(u,o,e.memoizedProps);else h!==o?(h===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):h.count--,o===null?D_(u,e.type,e.stateNode):w_(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&ih(e,e.memoizedProps,a.memoizedProps)}break;case 27:Ei(n,e),Mi(e),o&512&&(xn||a===null||ca(a,a.return)),a!==null&&o&4&&ih(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Ei(n,e),Mi(e),o&512&&(xn||a===null||ca(a,a.return)),e.flags&32){u=e.stateNode;try{Ui(u,"")}catch(mt){rn(e,e.return,mt)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,ih(e,u,a!==null?a.memoizedProps:u)),o&1024&&(sh=!0);break;case 6:if(Ei(n,e),Mi(e),o&4){if(e.stateNode===null)throw Error(r(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(mt){rn(e,e.return,mt)}}break;case 3:if(Fc=null,u=ji,ji=Oc(n.containerInfo),Ei(n,e),ji=u,Mi(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{vl(n.containerInfo)}catch(mt){rn(e,e.return,mt)}sh&&(sh=!1,Fg(e));break;case 4:o=ji,ji=Oc(e.stateNode.containerInfo),Ei(n,e),Mi(e),ji=o;break;case 12:Ei(n,e),Mi(e);break;case 13:Ei(n,e),Mi(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(dh=ge()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,oh(e,o)));break;case 22:u=e.memoizedState!==null;var W=a!==null&&a.memoizedState!==null,ut=Ua,xt=xn;if(Ua=ut||u,xn=xt||W,Ei(n,e),xn=xt,Ua=ut,Mi(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||W||Ua||xn||Jr(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){W=a=n;try{if(h=W.stateNode,u)T=h.style,typeof T.setProperty=="function"?T.setProperty("display","none","important"):T.display="none";else{U=W.stateNode;var Ct=W.memoizedProps.style,pt=Ct!=null&&Ct.hasOwnProperty("display")?Ct.display:null;U.style.display=pt==null||typeof pt=="boolean"?"":(""+pt).trim()}}catch(mt){rn(W,W.return,mt)}}}else if(n.tag===6){if(a===null){W=n;try{W.stateNode.nodeValue=u?"":W.memoizedProps}catch(mt){rn(W,W.return,mt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,oh(e,a))));break;case 19:Ei(n,e),Mi(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,oh(e,o)));break;case 30:break;case 21:break;default:Ei(n,e),Mi(e)}}function Mi(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(wg(o)){a=o;break}o=o.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,h=ah(e);xc(e,h,u);break;case 5:var T=a.stateNode;a.flags&32&&(Ui(T,""),a.flags&=-33);var U=ah(e);xc(e,U,T);break;case 3:case 4:var W=a.stateNode.containerInfo,ut=ah(e);rh(e,ut,W);break;default:throw Error(r(161))}}catch(xt){rn(e,e.return,xt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Fg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Fg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function rr(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Ug(e,n.alternate,n),n=n.sibling}function Jr(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:ar(4,n,n.return),Jr(n);break;case 1:ca(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Ag(n,n.return,a),Jr(n);break;case 27:ul(n.stateNode);case 26:case 5:ca(n,n.return),Jr(n);break;case 22:n.memoizedState===null&&Jr(n);break;case 30:Jr(n);break;default:Jr(n)}e=e.sibling}}function sr(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,h=n,T=h.flags;switch(h.tag){case 0:case 11:case 15:sr(u,h,a),tl(4,h);break;case 1:if(sr(u,h,a),o=h,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(ut){rn(o,o.return,ut)}if(o=h,u=o.updateQueue,u!==null){var U=o.stateNode;try{var W=u.shared.hiddenCallbacks;if(W!==null)for(u.shared.hiddenCallbacks=null,u=0;u<W.length;u++)fm(W[u],U)}catch(ut){rn(o,o.return,ut)}}a&&T&64&&Tg(h),el(h,h.return);break;case 27:Cg(h);case 26:case 5:sr(u,h,a),a&&o===null&&T&4&&Rg(h),el(h,h.return);break;case 12:sr(u,h,a);break;case 13:sr(u,h,a),a&&T&4&&Og(u,h);break;case 22:h.memoizedState===null&&sr(u,h,a),el(h,h.return);break;case 30:break;default:sr(u,h,a)}n=n.sibling}}function lh(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Ho(a))}function ch(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Ho(e))}function ua(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Bg(e,n,a,o),n=n.sibling}function Bg(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:ua(e,n,a,o),u&2048&&tl(9,n);break;case 1:ua(e,n,a,o);break;case 3:ua(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Ho(e)));break;case 12:if(u&2048){ua(e,n,a,o),e=n.stateNode;try{var h=n.memoizedProps,T=h.id,U=h.onPostCommit;typeof U=="function"&&U(T,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(W){rn(n,n.return,W)}}else ua(e,n,a,o);break;case 13:ua(e,n,a,o);break;case 23:break;case 22:h=n.stateNode,T=n.alternate,n.memoizedState!==null?h._visibility&2?ua(e,n,a,o):nl(e,n):h._visibility&2?ua(e,n,a,o):(h._visibility|=2,Is(e,n,a,o,(n.subtreeFlags&10256)!==0)),u&2048&&lh(T,n);break;case 24:ua(e,n,a,o),u&2048&&ch(n.alternate,n);break;default:ua(e,n,a,o)}}function Is(e,n,a,o,u){for(u=u&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var h=e,T=n,U=a,W=o,ut=T.flags;switch(T.tag){case 0:case 11:case 15:Is(h,T,U,W,u),tl(8,T);break;case 23:break;case 22:var xt=T.stateNode;T.memoizedState!==null?xt._visibility&2?Is(h,T,U,W,u):nl(h,T):(xt._visibility|=2,Is(h,T,U,W,u)),u&&ut&2048&&lh(T.alternate,T);break;case 24:Is(h,T,U,W,u),u&&ut&2048&&ch(T.alternate,T);break;default:Is(h,T,U,W,u)}n=n.sibling}}function nl(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:nl(a,o),u&2048&&lh(o.alternate,o);break;case 24:nl(a,o),u&2048&&ch(o.alternate,o);break;default:nl(a,o)}n=n.sibling}}var il=8192;function zs(e){if(e.subtreeFlags&il)for(e=e.child;e!==null;)Ig(e),e=e.sibling}function Ig(e){switch(e.tag){case 26:zs(e),e.flags&il&&e.memoizedState!==null&&fS(ji,e.memoizedState,e.memoizedProps);break;case 5:zs(e);break;case 3:case 4:var n=ji;ji=Oc(e.stateNode.containerInfo),zs(e),ji=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=il,il=16777216,zs(e),il=n):zs(e));break;default:zs(e)}}function zg(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function al(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Gn=o,Gg(o,e)}zg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Hg(e),e=e.sibling}function Hg(e){switch(e.tag){case 0:case 11:case 15:al(e),e.flags&2048&&ar(9,e,e.return);break;case 3:al(e);break;case 12:al(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Ec(e)):al(e);break;default:al(e)}}function Ec(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Gn=o,Gg(o,e)}zg(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:ar(8,n,n.return),Ec(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Ec(n));break;default:Ec(n)}e=e.sibling}}function Gg(e,n){for(;Gn!==null;){var a=Gn;switch(a.tag){case 0:case 11:case 15:ar(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Ho(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Gn=o;else t:for(a=e;Gn!==null;){o=Gn;var u=o.sibling,h=o.return;if(Lg(o),o===a){Gn=null;break t}if(u!==null){u.return=h,Gn=u;break t}Gn=h}}}var Ry={getCacheForType:function(e){var n=ei(Ln),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a}},wy=typeof WeakMap=="function"?WeakMap:Map,je=0,on=null,Le=null,ze=0,Ze=0,bi=null,or=!1,Hs=!1,uh=!1,Na=0,mn=0,lr=0,$r=0,fh=0,Bi=0,Gs=0,rl=null,di=null,hh=!1,dh=0,Mc=1/0,bc=null,cr=null,Kn=0,ur=null,Vs=null,ks=0,ph=0,mh=null,Vg=null,sl=0,gh=null;function Ti(){if((je&2)!==0&&ze!==0)return ze&-ze;if(X.T!==null){var e=Ds;return e!==0?e:Mh()}return R()}function kg(){Bi===0&&(Bi=(ze&536870912)===0||Xe?$():536870912);var e=Fi.current;return e!==null&&(e.flags|=32),Bi}function Ai(e,n,a){(e===on&&(Ze===2||Ze===9)||e.cancelPendingCommit!==null)&&(Xs(e,0),fr(e,ze,Bi,!1)),wt(e,a),((je&2)===0||e!==on)&&(e===on&&((je&2)===0&&($r|=a),mn===4&&fr(e,ze,Bi,!1)),fa(e))}function Xg(e,n,a){if((je&6)!==0)throw Error(r(327));var o=!a&&(n&124)===0&&(n&e.expiredLanes)===0||pe(e,n),u=o?Uy(e,n):yh(e,n,!0),h=o;do{if(u===0){Hs&&!o&&fr(e,n,0,!1);break}else{if(a=e.current.alternate,h&&!Cy(a)){u=yh(e,n,!1),h=!1;continue}if(u===2){if(h=n,e.errorRecoveryDisabledLanes&h)var T=0;else T=e.pendingLanes&-536870913,T=T!==0?T:T&536870912?536870912:0;if(T!==0){n=T;t:{var U=e;u=rl;var W=U.current.memoizedState.isDehydrated;if(W&&(Xs(U,T).flags|=256),T=yh(U,T,!1),T!==2){if(uh&&!W){U.errorRecoveryDisabledLanes|=h,$r|=h,u=4;break t}h=di,di=u,h!==null&&(di===null?di=h:di.push.apply(di,h))}u=T}if(h=!1,u!==2)continue}}if(u===1){Xs(e,0),fr(e,n,0,!0);break}t:{switch(o=e,h=u,h){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:fr(o,n,Bi,!or);break t;case 2:di=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=dh+300-ge(),10<u)){if(fr(o,n,Bi,!or),ve(o,0,!0)!==0)break t;o.timeoutHandle=y_(Wg.bind(null,o,a,di,bc,hh,n,Bi,$r,Gs,or,h,2,-0,0),u);break t}Wg(o,a,di,bc,hh,n,Bi,$r,Gs,or,h,0,-0,0)}}break}while(!0);fa(e)}function Wg(e,n,a,o,u,h,T,U,W,ut,xt,Ct,pt,mt){if(e.timeoutHandle=-1,Ct=n.subtreeFlags,(Ct&8192||(Ct&16785408)===16785408)&&(dl={stylesheets:null,count:0,unsuspend:uS},Ig(n),Ct=hS(),Ct!==null)){e.cancelPendingCommit=Ct(Jg.bind(null,e,n,h,a,o,u,T,U,W,xt,1,pt,mt)),fr(e,h,T,!ut);return}Jg(e,n,h,a,o,u,T,U,W)}function Cy(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],h=u.getSnapshot;u=u.value;try{if(!Si(h(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function fr(e,n,a,o){n&=~fh,n&=~$r,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var h=31-zt(u),T=1<<h;o[h]=-1,u&=~T}a!==0&&Xt(e,a,n)}function Tc(){return(je&6)===0?(ol(0),!1):!0}function _h(){if(Le!==null){if(Ze===0)var e=Le.return;else e=Le,Ta=Yr=null,Of(e),Fs=null,Qo=0,e=Le;for(;e!==null;)bg(e.alternate,e),e=e.return;Le=null}}function Xs(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Yy(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),_h(),on=e,Le=a=Ea(e.current,null),ze=n,Ze=0,bi=null,or=!1,Hs=pe(e,n),uh=!1,Gs=Bi=fh=$r=lr=mn=0,di=rl=null,hh=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-zt(o),h=1<<u;n|=e[u],o&=~h}return Na=n,Yl(),a}function qg(e,n){Re=null,X.H=hc,n===Vo||n===nc?(n=cm(),Ze=3):n===sm?(n=cm(),Ze=4):Ze=n===ug?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,bi=n,Le===null&&(mn=1,_c(e,Li(n,e.current)))}function Yg(){var e=X.H;return X.H=hc,e===null?hc:e}function jg(){var e=X.A;return X.A=Ry,e}function vh(){mn=4,or||(ze&4194048)!==ze&&Fi.current!==null||(Hs=!0),(lr&134217727)===0&&($r&134217727)===0||on===null||fr(on,ze,Bi,!1)}function yh(e,n,a){var o=je;je|=2;var u=Yg(),h=jg();(on!==e||ze!==n)&&(bc=null,Xs(e,n)),n=!1;var T=mn;t:do try{if(Ze!==0&&Le!==null){var U=Le,W=bi;switch(Ze){case 8:_h(),T=6;break t;case 3:case 2:case 9:case 6:Fi.current===null&&(n=!0);var ut=Ze;if(Ze=0,bi=null,Ws(e,U,W,ut),a&&Hs){T=0;break t}break;default:ut=Ze,Ze=0,bi=null,Ws(e,U,W,ut)}}Dy(),T=mn;break}catch(xt){qg(e,xt)}while(!0);return n&&e.shellSuspendCounter++,Ta=Yr=null,je=o,X.H=u,X.A=h,Le===null&&(on=null,ze=0,Yl()),T}function Dy(){for(;Le!==null;)Zg(Le)}function Uy(e,n){var a=je;je|=2;var o=Yg(),u=jg();on!==e||ze!==n?(bc=null,Mc=ge()+500,Xs(e,n)):Hs=pe(e,n);t:do try{if(Ze!==0&&Le!==null){n=Le;var h=bi;e:switch(Ze){case 1:Ze=0,bi=null,Ws(e,n,h,1);break;case 2:case 9:if(om(h)){Ze=0,bi=null,Kg(n);break}n=function(){Ze!==2&&Ze!==9||on!==e||(Ze=7),fa(e)},h.then(n,n);break t;case 3:Ze=7;break t;case 4:Ze=5;break t;case 7:om(h)?(Ze=0,bi=null,Kg(n)):(Ze=0,bi=null,Ws(e,n,h,7));break;case 5:var T=null;switch(Le.tag){case 26:T=Le.memoizedState;case 5:case 27:var U=Le;if(!T||U_(T)){Ze=0,bi=null;var W=U.sibling;if(W!==null)Le=W;else{var ut=U.return;ut!==null?(Le=ut,Ac(ut)):Le=null}break e}}Ze=0,bi=null,Ws(e,n,h,5);break;case 6:Ze=0,bi=null,Ws(e,n,h,6);break;case 8:_h(),mn=6;break t;default:throw Error(r(462))}}Ly();break}catch(xt){qg(e,xt)}while(!0);return Ta=Yr=null,X.H=o,X.A=u,je=a,Le!==null?0:(on=null,ze=0,Yl(),mn)}function Ly(){for(;Le!==null&&!Yn();)Zg(Le)}function Zg(e){var n=Eg(e.alternate,e,Na);e.memoizedProps=e.pendingProps,n===null?Ac(e):Le=n}function Kg(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=gg(a,n,n.pendingProps,n.type,void 0,ze);break;case 11:n=gg(a,n,n.pendingProps,n.type.render,n.ref,ze);break;case 5:Of(n);default:bg(a,n),n=Le=Qp(n,Na),n=Eg(a,n,Na)}e.memoizedProps=e.pendingProps,n===null?Ac(e):Le=n}function Ws(e,n,a,o){Ta=Yr=null,Of(n),Fs=null,Qo=0;var u=n.return;try{if(xy(e,u,n,a,ze)){mn=1,_c(e,Li(a,e.current)),Le=null;return}}catch(h){if(u!==null)throw Le=u,h;mn=1,_c(e,Li(a,e.current)),Le=null;return}n.flags&32768?(Xe||o===1?e=!0:Hs||(ze&536870912)!==0?e=!1:(or=e=!0,(o===2||o===9||o===3||o===6)&&(o=Fi.current,o!==null&&o.tag===13&&(o.flags|=16384))),Qg(n,e)):Ac(n)}function Ac(e){var n=e;do{if((n.flags&32768)!==0){Qg(n,or);return}e=n.return;var a=My(n.alternate,n,Na);if(a!==null){Le=a;return}if(n=n.sibling,n!==null){Le=n;return}Le=n=e}while(n!==null);mn===0&&(mn=5)}function Qg(e,n){do{var a=by(e.alternate,e);if(a!==null){a.flags&=32767,Le=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){Le=e;return}Le=e=a}while(e!==null);mn=6,Le=null}function Jg(e,n,a,o,u,h,T,U,W){e.cancelPendingCommit=null;do Rc();while(Kn!==0);if((je&6)!==0)throw Error(r(327));if(n!==null){if(n===e.current)throw Error(r(177));if(h=n.lanes|n.childLanes,h|=cf,Yt(e,a,h,T,U,W),e===on&&(Le=on=null,ze=0),Vs=n,ur=e,ks=a,ph=h,mh=u,Vg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Fy(B,function(){return i_(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=X.T,X.T=null,u=st.p,st.p=2,T=je,je|=4;try{Ty(e,n,a)}finally{je=T,st.p=u,X.T=o}}Kn=1,$g(),t_(),e_()}}function $g(){if(Kn===1){Kn=0;var e=ur,n=Vs,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=X.T,X.T=null;var o=st.p;st.p=2;var u=je;je|=4;try{Pg(n,e);var h=Uh,T=Gp(e.containerInfo),U=h.focusedElem,W=h.selectionRange;if(T!==U&&U&&U.ownerDocument&&Hp(U.ownerDocument.documentElement,U)){if(W!==null&&af(U)){var ut=W.start,xt=W.end;if(xt===void 0&&(xt=ut),"selectionStart"in U)U.selectionStart=ut,U.selectionEnd=Math.min(xt,U.value.length);else{var Ct=U.ownerDocument||document,pt=Ct&&Ct.defaultView||window;if(pt.getSelection){var mt=pt.getSelection(),me=U.textContent.length,fe=Math.min(W.start,me),en=W.end===void 0?fe:Math.min(W.end,me);!mt.extend&&fe>en&&(T=en,en=fe,fe=T);var nt=zp(U,fe),Q=zp(U,en);if(nt&&Q&&(mt.rangeCount!==1||mt.anchorNode!==nt.node||mt.anchorOffset!==nt.offset||mt.focusNode!==Q.node||mt.focusOffset!==Q.offset)){var lt=Ct.createRange();lt.setStart(nt.node,nt.offset),mt.removeAllRanges(),fe>en?(mt.addRange(lt),mt.extend(Q.node,Q.offset)):(lt.setEnd(Q.node,Q.offset),mt.addRange(lt))}}}}for(Ct=[],mt=U;mt=mt.parentNode;)mt.nodeType===1&&Ct.push({element:mt,left:mt.scrollLeft,top:mt.scrollTop});for(typeof U.focus=="function"&&U.focus(),U=0;U<Ct.length;U++){var Tt=Ct[U];Tt.element.scrollLeft=Tt.left,Tt.element.scrollTop=Tt.top}}zc=!!Dh,Uh=Dh=null}finally{je=u,st.p=o,X.T=a}}e.current=n,Kn=2}}function t_(){if(Kn===2){Kn=0;var e=ur,n=Vs,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=X.T,X.T=null;var o=st.p;st.p=2;var u=je;je|=4;try{Ug(e,n.alternate,n)}finally{je=u,st.p=o,X.T=a}}Kn=3}}function e_(){if(Kn===4||Kn===3){Kn=0,we();var e=ur,n=Vs,a=ks,o=Vg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Kn=5:(Kn=0,Vs=ur=null,n_(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(cr=null),ln(a),n=n.stateNode,kt&&typeof kt.onCommitFiberRoot=="function")try{kt.onCommitFiberRoot(St,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=X.T,u=st.p,st.p=2,X.T=null;try{for(var h=e.onRecoverableError,T=0;T<o.length;T++){var U=o[T];h(U.value,{componentStack:U.stack})}}finally{X.T=n,st.p=u}}(ks&3)!==0&&Rc(),fa(e),u=e.pendingLanes,(a&4194090)!==0&&(u&42)!==0?e===gh?sl++:(sl=0,gh=e):sl=0,ol(0)}}function n_(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Ho(n)))}function Rc(e){return $g(),t_(),e_(),i_()}function i_(){if(Kn!==5)return!1;var e=ur,n=ph;ph=0;var a=ln(ks),o=X.T,u=st.p;try{st.p=32>a?32:a,X.T=null,a=mh,mh=null;var h=ur,T=ks;if(Kn=0,Vs=ur=null,ks=0,(je&6)!==0)throw Error(r(331));var U=je;if(je|=4,Hg(h.current),Bg(h,h.current,T,a),je=U,ol(0,!1),kt&&typeof kt.onPostCommitFiberRoot=="function")try{kt.onPostCommitFiberRoot(St,h)}catch{}return!0}finally{st.p=u,X.T=o,n_(e,n)}}function a_(e,n,a){n=Li(a,n),n=jf(e.stateNode,n,2),e=tr(e,n,2),e!==null&&(wt(e,2),fa(e))}function rn(e,n,a){if(e.tag===3)a_(e,e,a);else for(;n!==null;){if(n.tag===3){a_(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(cr===null||!cr.has(o))){e=Li(a,e),a=lg(2),o=tr(n,a,2),o!==null&&(cg(a,o,n,e),wt(o,2),fa(o));break}}n=n.return}}function Sh(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new wy;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(uh=!0,u.add(a),e=Ny.bind(null,e,n,a),n.then(e,e))}function Ny(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,on===e&&(ze&a)===a&&(mn===4||mn===3&&(ze&62914560)===ze&&300>ge()-dh?(je&2)===0&&Xs(e,0):fh|=a,Gs===ze&&(Gs=0)),fa(e)}function r_(e,n){n===0&&(n=Et()),e=As(e,n),e!==null&&(wt(e,n),fa(e))}function Oy(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),r_(e,a)}function Py(e,n){var a=0;switch(e.tag){case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),r_(e,a)}function Fy(e,n){return Me(e,n)}var wc=null,qs=null,xh=!1,Cc=!1,Eh=!1,ts=0;function fa(e){e!==qs&&e.next===null&&(qs===null?wc=qs=e:qs=qs.next=e),Cc=!0,xh||(xh=!0,Iy())}function ol(e,n){if(!Eh&&Cc){Eh=!0;do for(var a=!1,o=wc;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var h=0;else{var T=o.suspendedLanes,U=o.pingedLanes;h=(1<<31-zt(42|e)+1)-1,h&=u&~(T&~U),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(a=!0,c_(o,h))}else h=ze,h=ve(o,o===on?h:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(h&3)===0||pe(o,h)||(a=!0,c_(o,h));o=o.next}while(a);Eh=!1}}function By(){s_()}function s_(){Cc=xh=!1;var e=0;ts!==0&&(qy()&&(e=ts),ts=0);for(var n=ge(),a=null,o=wc;o!==null;){var u=o.next,h=o_(o,n);h===0?(o.next=null,a===null?wc=u:a.next=u,u===null&&(qs=a)):(a=o,(e!==0||(h&3)!==0)&&(Cc=!0)),o=u}ol(e)}function o_(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,h=e.pendingLanes&-62914561;0<h;){var T=31-zt(h),U=1<<T,W=u[T];W===-1?((U&a)===0||(U&o)!==0)&&(u[T]=Pe(U,n)):W<=n&&(e.expiredLanes|=U),h&=~U}if(n=on,a=ze,a=ve(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(Ze===2||Ze===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&Z(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||pe(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&Z(o),ln(a)){case 2:case 8:a=te;break;case 32:a=B;break;case 268435456:a=ft;break;default:a=B}return o=l_.bind(null,e),a=Me(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&Z(o),e.callbackPriority=2,e.callbackNode=null,2}function l_(e,n){if(Kn!==0&&Kn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Rc()&&e.callbackNode!==a)return null;var o=ze;return o=ve(e,e===on?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(Xg(e,o,n),o_(e,ge()),e.callbackNode!=null&&e.callbackNode===a?l_.bind(null,e):null)}function c_(e,n){if(Rc())return null;Xg(e,n,!0)}function Iy(){jy(function(){(je&6)!==0?Me(We,By):s_()})}function Mh(){return ts===0&&(ts=$()),ts}function u_(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:vs(""+e)}function f_(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function zy(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var h=u_((u[Dn]||null).action),T=o.submitter;T&&(n=(n=T[Dn]||null)?u_(n.formAction):T.getAttribute("formAction"),n!==null&&(h=n,T=null));var U=new xs("action","action",null,o,u);e.push({event:U,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(ts!==0){var W=T?f_(u,T):new FormData(u);kf(a,{pending:!0,data:W,method:u.method,action:h},null,W)}}else typeof h=="function"&&(U.preventDefault(),W=T?f_(u,T):new FormData(u),kf(a,{pending:!0,data:W,method:u.method,action:h},h,W))},currentTarget:u}]})}}for(var bh=0;bh<lf.length;bh++){var Th=lf[bh],Hy=Th.toLowerCase(),Gy=Th[0].toUpperCase()+Th.slice(1);Yi(Hy,"on"+Gy)}Yi(Xp,"onAnimationEnd"),Yi(Wp,"onAnimationIteration"),Yi(qp,"onAnimationStart"),Yi("dblclick","onDoubleClick"),Yi("focusin","onFocus"),Yi("focusout","onBlur"),Yi(ay,"onTransitionRun"),Yi(ry,"onTransitionStart"),Yi(sy,"onTransitionCancel"),Yi(Yp,"onTransitionEnd"),N("onMouseEnter",["mouseout","mouseover"]),N("onMouseLeave",["mouseout","mouseover"]),N("onPointerEnter",["pointerout","pointerover"]),N("onPointerLeave",["pointerout","pointerover"]),Bn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Bn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Bn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Bn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Bn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Bn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ll="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Vy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ll));function h_(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var h=void 0;if(n)for(var T=o.length-1;0<=T;T--){var U=o[T],W=U.instance,ut=U.currentTarget;if(U=U.listener,W!==h&&u.isPropagationStopped())break t;h=U,u.currentTarget=ut;try{h(u)}catch(xt){gc(xt)}u.currentTarget=null,h=W}else for(T=0;T<o.length;T++){if(U=o[T],W=U.instance,ut=U.currentTarget,U=U.listener,W!==h&&u.isPropagationStopped())break t;h=U,u.currentTarget=ut;try{h(u)}catch(xt){gc(xt)}u.currentTarget=null,h=W}}}}function Ne(e,n){var a=n[va];a===void 0&&(a=n[va]=new Set);var o=e+"__bubble";a.has(o)||(d_(n,e,2,!1),a.add(o))}function Ah(e,n,a){var o=0;n&&(o|=4),d_(a,e,o,n)}var Dc="_reactListening"+Math.random().toString(36).slice(2);function Rh(e){if(!e[Dc]){e[Dc]=!0,Ur.forEach(function(a){a!=="selectionchange"&&(Vy.has(a)||Ah(a,!1,e),Ah(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Dc]||(n[Dc]=!0,Ah("selectionchange",!1,n))}}function d_(e,n,a,o){switch(B_(n)){case 2:var u=mS;break;case 8:u=gS;break;default:u=Gh}a=u.bind(null,n,a,e),u=void 0,!Nr||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function wh(e,n,a,o,u){var h=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var T=o.tag;if(T===3||T===4){var U=o.stateNode.containerInfo;if(U===u)break;if(T===4)for(T=o.return;T!==null;){var W=T.tag;if((W===3||W===4)&&T.stateNode.containerInfo===u)return;T=T.return}for(;U!==null;){if(T=ui(U),T===null)return;if(W=T.tag,W===5||W===6||W===26||W===27){o=h=T;continue t}U=U.parentNode}}o=o.return}Hl(function(){var ut=h,xt=Ao(a),Ct=[];t:{var pt=jp.get(e);if(pt!==void 0){var mt=xs,me=e;switch(e){case"keypress":if(Pr(a)===0)break t;case"keydown":case"keyup":mt=Ju;break;case"focusin":me="focus",mt=Do;break;case"focusout":me="blur",mt=Do;break;case"beforeblur":case"afterblur":mt=Do;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":mt=kl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":mt=Vu;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":mt=tf;break;case Xp:case Wp:case qp:mt=Xu;break;case Yp:mt=Sa;break;case"scroll":case"scrollend":mt=Hu;break;case"wheel":mt=ef;break;case"copy":case"cut":case"paste":mt=Wu;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":mt=Wl;break;case"toggle":case"beforetoggle":mt=d}var fe=(n&4)!==0,en=!fe&&(e==="scroll"||e==="scrollend"),nt=fe?pt!==null?pt+"Capture":null:pt;fe=[];for(var Q=ut,lt;Q!==null;){var Tt=Q;if(lt=Tt.stateNode,Tt=Tt.tag,Tt!==5&&Tt!==26&&Tt!==27||lt===null||nt===null||(Tt=Lr(Q,nt),Tt!=null&&fe.push(cl(Q,Tt,lt))),en)break;Q=Q.return}0<fe.length&&(pt=new mt(pt,me,null,a,xt),Ct.push({event:pt,listeners:fe}))}}if((n&7)===0){t:{if(pt=e==="mouseover"||e==="pointerover",mt=e==="mouseout"||e==="pointerout",pt&&a!==ys&&(me=a.relatedTarget||a.fromElement)&&(ui(me)||me[Jn]))break t;if((mt||pt)&&(pt=xt.window===xt?xt:(pt=xt.ownerDocument)?pt.defaultView||pt.parentWindow:window,mt?(me=a.relatedTarget||a.toElement,mt=ut,me=me?ui(me):null,me!==null&&(en=c(me),fe=me.tag,me!==en||fe!==5&&fe!==27&&fe!==6)&&(me=null)):(mt=null,me=ut),mt!==me)){if(fe=kl,Tt="onMouseLeave",nt="onMouseEnter",Q="mouse",(e==="pointerout"||e==="pointerover")&&(fe=Wl,Tt="onPointerLeave",nt="onPointerEnter",Q="pointer"),en=mt==null?pt:bn(mt),lt=me==null?pt:bn(me),pt=new fe(Tt,Q+"leave",mt,a,xt),pt.target=en,pt.relatedTarget=lt,Tt=null,ui(xt)===ut&&(fe=new fe(nt,Q+"enter",me,a,xt),fe.target=lt,fe.relatedTarget=en,Tt=fe),en=Tt,mt&&me)e:{for(fe=mt,nt=me,Q=0,lt=fe;lt;lt=Ys(lt))Q++;for(lt=0,Tt=nt;Tt;Tt=Ys(Tt))lt++;for(;0<Q-lt;)fe=Ys(fe),Q--;for(;0<lt-Q;)nt=Ys(nt),lt--;for(;Q--;){if(fe===nt||nt!==null&&fe===nt.alternate)break e;fe=Ys(fe),nt=Ys(nt)}fe=null}else fe=null;mt!==null&&p_(Ct,pt,mt,fe,!1),me!==null&&en!==null&&p_(Ct,en,me,fe,!0)}}t:{if(pt=ut?bn(ut):window,mt=pt.nodeName&&pt.nodeName.toLowerCase(),mt==="select"||mt==="input"&&pt.type==="file")var Jt=yi;else if(hn(pt))if(xa)Jt=ey;else{Jt=$0;var Ce=J0}else mt=pt.nodeName,!mt||mt.toLowerCase()!=="input"||pt.type!=="checkbox"&&pt.type!=="radio"?ut&&To(ut.elementType)&&(Jt=yi):Jt=ty;if(Jt&&(Jt=Jt(e,ut))){si(Ct,Jt,a,xt);break t}Ce&&Ce(e,pt,ut),e==="focusout"&&ut&&pt.type==="number"&&ut.memoizedProps.value!=null&&zn(pt,"number",pt.value)}switch(Ce=ut?bn(ut):window,e){case"focusin":(hn(Ce)||Ce.contentEditable==="true")&&(Ms=Ce,rf=ut,Po=null);break;case"focusout":Po=rf=Ms=null;break;case"mousedown":sf=!0;break;case"contextmenu":case"mouseup":case"dragend":sf=!1,Vp(Ct,a,xt);break;case"selectionchange":if(iy)break;case"keydown":case"keyup":Vp(Ct,a,xt)}var ae;if(A)t:{switch(e){case"compositionstart":var de="onCompositionStart";break t;case"compositionend":de="onCompositionEnd";break t;case"compositionupdate":de="onCompositionUpdate";break t}de=void 0}else Qt?Ht(e,a)&&(de="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(de="onCompositionStart");de&&(j&&a.locale!=="ko"&&(Qt||de!=="onCompositionStart"?de==="onCompositionEnd"&&Qt&&(ae=Gl()):(ra=xt,Or="value"in ra?ra.value:ra.textContent,Qt=!0)),Ce=Uc(ut,de),0<Ce.length&&(de=new Xl(de,e,null,a,xt),Ct.push({event:de,listeners:Ce}),ae?de.data=ae:(ae=Kt(a),ae!==null&&(de.data=ae)))),(ae=G?Te(e,a):$t(e,a))&&(de=Uc(ut,"onBeforeInput"),0<de.length&&(Ce=new Xl("onBeforeInput","beforeinput",null,a,xt),Ct.push({event:Ce,listeners:de}),Ce.data=ae)),zy(Ct,e,ut,a,xt)}h_(Ct,n)})}function cl(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Uc(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,h=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||h===null||(u=Lr(e,a),u!=null&&o.unshift(cl(e,u,h)),u=Lr(e,n),u!=null&&o.push(cl(e,u,h))),e.tag===3)return o;e=e.return}return[]}function Ys(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function p_(e,n,a,o,u){for(var h=n._reactName,T=[];a!==null&&a!==o;){var U=a,W=U.alternate,ut=U.stateNode;if(U=U.tag,W!==null&&W===o)break;U!==5&&U!==26&&U!==27||ut===null||(W=ut,u?(ut=Lr(a,h),ut!=null&&T.unshift(cl(a,ut,W))):u||(ut=Lr(a,h),ut!=null&&T.push(cl(a,ut,W)))),a=a.return}T.length!==0&&e.push({event:n,listeners:T})}var ky=/\r\n?/g,Xy=/\u0000|\uFFFD/g;function m_(e){return(typeof e=="string"?e:""+e).replace(ky,`
`).replace(Xy,"")}function g_(e,n){return n=m_(n),m_(e)===n}function Lc(){}function tn(e,n,a,o,u,h){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Ui(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Ui(e,""+o);break;case"className":Bt(e,"class",o);break;case"tabIndex":Bt(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Bt(e,a,o);break;case"style":Il(e,o,h);break;case"data":if(n!=="object"){Bt(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=vs(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(a==="formAction"?(n!=="input"&&tn(e,n,"name",u.name,u,null),tn(e,n,"formEncType",u.formEncType,u,null),tn(e,n,"formMethod",u.formMethod,u,null),tn(e,n,"formTarget",u.formTarget,u,null)):(tn(e,n,"encType",u.encType,u,null),tn(e,n,"method",u.method,u,null),tn(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=vs(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=Lc);break;case"onScroll":o!=null&&Ne("scroll",e);break;case"onScrollEnd":o!=null&&Ne("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=vs(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":Ne("beforetoggle",e),Ne("toggle",e),Ot(e,"popover",o);break;case"xlinkActuate":Vt(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Vt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Vt(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Vt(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Vt(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Vt(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Vt(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Vt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Vt(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Ot(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=zu.get(a)||a,Ot(e,a,o))}}function Ch(e,n,a,o,u,h){switch(a){case"style":Il(e,o,h);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof o=="string"?Ui(e,o):(typeof o=="number"||typeof o=="bigint")&&Ui(e,""+o);break;case"onScroll":o!=null&&Ne("scroll",e);break;case"onScrollEnd":o!=null&&Ne("scrollend",e);break;case"onClick":o!=null&&(e.onclick=Lc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!_s.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),h=e[Dn]||null,h=h!=null?h[a]:null,typeof h=="function"&&e.removeEventListener(n,h,u),typeof o=="function")){typeof h!="function"&&h!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):Ot(e,a,o)}}}function Qn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ne("error",e),Ne("load",e);var o=!1,u=!1,h;for(h in a)if(a.hasOwnProperty(h)){var T=a[h];if(T!=null)switch(h){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:tn(e,n,h,T,a,null)}}u&&tn(e,n,"srcSet",a.srcSet,a,null),o&&tn(e,n,"src",a.src,a,null);return;case"input":Ne("invalid",e);var U=h=T=u=null,W=null,ut=null;for(o in a)if(a.hasOwnProperty(o)){var xt=a[o];if(xt!=null)switch(o){case"name":u=xt;break;case"type":T=xt;break;case"checked":W=xt;break;case"defaultChecked":ut=xt;break;case"value":h=xt;break;case"defaultValue":U=xt;break;case"children":case"dangerouslySetInnerHTML":if(xt!=null)throw Error(r(137,n));break;default:tn(e,n,o,xt,a,null)}}qe(e,h,U,W,ut,T,u,!1),cn(e);return;case"select":Ne("invalid",e),o=T=h=null;for(u in a)if(a.hasOwnProperty(u)&&(U=a[u],U!=null))switch(u){case"value":h=U;break;case"defaultValue":T=U;break;case"multiple":o=U;default:tn(e,n,u,U,a,null)}n=h,a=T,e.multiple=!!o,n!=null?vn(e,!!o,n,!1):a!=null&&vn(e,!!o,a,!0);return;case"textarea":Ne("invalid",e),h=u=o=null;for(T in a)if(a.hasOwnProperty(T)&&(U=a[T],U!=null))switch(T){case"value":o=U;break;case"defaultValue":u=U;break;case"children":h=U;break;case"dangerouslySetInnerHTML":if(U!=null)throw Error(r(91));break;default:tn(e,n,T,U,a,null)}An(e,o,u,h),cn(e);return;case"option":for(W in a)if(a.hasOwnProperty(W)&&(o=a[W],o!=null))switch(W){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:tn(e,n,W,o,a,null)}return;case"dialog":Ne("beforetoggle",e),Ne("toggle",e),Ne("cancel",e),Ne("close",e);break;case"iframe":case"object":Ne("load",e);break;case"video":case"audio":for(o=0;o<ll.length;o++)Ne(ll[o],e);break;case"image":Ne("error",e),Ne("load",e);break;case"details":Ne("toggle",e);break;case"embed":case"source":case"link":Ne("error",e),Ne("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ut in a)if(a.hasOwnProperty(ut)&&(o=a[ut],o!=null))switch(ut){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:tn(e,n,ut,o,a,null)}return;default:if(To(n)){for(xt in a)a.hasOwnProperty(xt)&&(o=a[xt],o!==void 0&&Ch(e,n,xt,o,a,void 0));return}}for(U in a)a.hasOwnProperty(U)&&(o=a[U],o!=null&&tn(e,n,U,o,a,null))}function Wy(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,h=null,T=null,U=null,W=null,ut=null,xt=null;for(mt in a){var Ct=a[mt];if(a.hasOwnProperty(mt)&&Ct!=null)switch(mt){case"checked":break;case"value":break;case"defaultValue":W=Ct;default:o.hasOwnProperty(mt)||tn(e,n,mt,null,o,Ct)}}for(var pt in o){var mt=o[pt];if(Ct=a[pt],o.hasOwnProperty(pt)&&(mt!=null||Ct!=null))switch(pt){case"type":h=mt;break;case"name":u=mt;break;case"checked":ut=mt;break;case"defaultChecked":xt=mt;break;case"value":T=mt;break;case"defaultValue":U=mt;break;case"children":case"dangerouslySetInnerHTML":if(mt!=null)throw Error(r(137,n));break;default:mt!==Ct&&tn(e,n,pt,mt,o,Ct)}}Di(e,T,U,W,ut,xt,h,u);return;case"select":mt=T=U=pt=null;for(h in a)if(W=a[h],a.hasOwnProperty(h)&&W!=null)switch(h){case"value":break;case"multiple":mt=W;default:o.hasOwnProperty(h)||tn(e,n,h,null,o,W)}for(u in o)if(h=o[u],W=a[u],o.hasOwnProperty(u)&&(h!=null||W!=null))switch(u){case"value":pt=h;break;case"defaultValue":U=h;break;case"multiple":T=h;default:h!==W&&tn(e,n,u,h,o,W)}n=U,a=T,o=mt,pt!=null?vn(e,!!a,pt,!1):!!o!=!!a&&(n!=null?vn(e,!!a,n,!0):vn(e,!!a,a?[]:"",!1));return;case"textarea":mt=pt=null;for(U in a)if(u=a[U],a.hasOwnProperty(U)&&u!=null&&!o.hasOwnProperty(U))switch(U){case"value":break;case"children":break;default:tn(e,n,U,null,o,u)}for(T in o)if(u=o[T],h=a[T],o.hasOwnProperty(T)&&(u!=null||h!=null))switch(T){case"value":pt=u;break;case"defaultValue":mt=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==h&&tn(e,n,T,u,o,h)}Tn(e,pt,mt);return;case"option":for(var me in a)if(pt=a[me],a.hasOwnProperty(me)&&pt!=null&&!o.hasOwnProperty(me))switch(me){case"selected":e.selected=!1;break;default:tn(e,n,me,null,o,pt)}for(W in o)if(pt=o[W],mt=a[W],o.hasOwnProperty(W)&&pt!==mt&&(pt!=null||mt!=null))switch(W){case"selected":e.selected=pt&&typeof pt!="function"&&typeof pt!="symbol";break;default:tn(e,n,W,pt,o,mt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var fe in a)pt=a[fe],a.hasOwnProperty(fe)&&pt!=null&&!o.hasOwnProperty(fe)&&tn(e,n,fe,null,o,pt);for(ut in o)if(pt=o[ut],mt=a[ut],o.hasOwnProperty(ut)&&pt!==mt&&(pt!=null||mt!=null))switch(ut){case"children":case"dangerouslySetInnerHTML":if(pt!=null)throw Error(r(137,n));break;default:tn(e,n,ut,pt,o,mt)}return;default:if(To(n)){for(var en in a)pt=a[en],a.hasOwnProperty(en)&&pt!==void 0&&!o.hasOwnProperty(en)&&Ch(e,n,en,void 0,o,pt);for(xt in o)pt=o[xt],mt=a[xt],!o.hasOwnProperty(xt)||pt===mt||pt===void 0&&mt===void 0||Ch(e,n,xt,pt,o,mt);return}}for(var nt in a)pt=a[nt],a.hasOwnProperty(nt)&&pt!=null&&!o.hasOwnProperty(nt)&&tn(e,n,nt,null,o,pt);for(Ct in o)pt=o[Ct],mt=a[Ct],!o.hasOwnProperty(Ct)||pt===mt||pt==null&&mt==null||tn(e,n,Ct,pt,o,mt)}var Dh=null,Uh=null;function Nc(e){return e.nodeType===9?e:e.ownerDocument}function __(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function v_(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Lh(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Nh=null;function qy(){var e=window.event;return e&&e.type==="popstate"?e===Nh?!1:(Nh=e,!0):(Nh=null,!1)}var y_=typeof setTimeout=="function"?setTimeout:void 0,Yy=typeof clearTimeout=="function"?clearTimeout:void 0,S_=typeof Promise=="function"?Promise:void 0,jy=typeof queueMicrotask=="function"?queueMicrotask:typeof S_<"u"?function(e){return S_.resolve(null).then(e).catch(Zy)}:y_;function Zy(e){setTimeout(function(){throw e})}function hr(e){return e==="head"}function x_(e,n){var a=n,o=0,u=0;do{var h=a.nextSibling;if(e.removeChild(a),h&&h.nodeType===8)if(a=h.data,a==="/$"){if(0<o&&8>o){a=o;var T=e.ownerDocument;if(a&1&&ul(T.documentElement),a&2&&ul(T.body),a&4)for(a=T.head,ul(a),T=a.firstChild;T;){var U=T.nextSibling,W=T.nodeName;T[ri]||W==="SCRIPT"||W==="STYLE"||W==="LINK"&&T.rel.toLowerCase()==="stylesheet"||a.removeChild(T),T=U}}if(u===0){e.removeChild(h),vl(n);return}u--}else a==="$"||a==="$?"||a==="$!"?u++:o=a.charCodeAt(0)-48;else o=0;a=h}while(a);vl(n)}function Oh(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Oh(a),$n(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Ky(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[ri])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(h=e.getAttribute("rel"),h==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(h!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(h=e.getAttribute("src"),(h!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&h&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var h=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===h)return e}else return e;if(e=Zi(e.nextSibling),e===null)break}return null}function Qy(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Zi(e.nextSibling),e===null))return null;return e}function Ph(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function Jy(e,n){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function Zi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}var Fh=null;function E_(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return e;n--}else a==="/$"&&n++}e=e.previousSibling}return null}function M_(e,n,a){switch(n=Nc(a),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function ul(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);$n(e)}var Ii=new Map,b_=new Set;function Oc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Oa=st.d;st.d={f:$y,r:tS,D:eS,C:nS,L:iS,m:aS,X:sS,S:rS,M:oS};function $y(){var e=Oa.f(),n=Tc();return e||n}function tS(e){var n=Vi(e);n!==null&&n.tag===5&&n.type==="form"?Xm(n):Oa.r(e)}var js=typeof document>"u"?null:document;function T_(e,n,a){var o=js;if(o&&typeof n=="string"&&n){var u=Je(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),b_.has(u)||(b_.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Qn(n,"link",e),ke(n),o.head.appendChild(n)))}}function eS(e){Oa.D(e),T_("dns-prefetch",e,null)}function nS(e,n){Oa.C(e,n),T_("preconnect",e,n)}function iS(e,n,a){Oa.L(e,n,a);var o=js;if(o&&e&&n){var u='link[rel="preload"][as="'+Je(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Je(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Je(a.imageSizes)+'"]')):u+='[href="'+Je(e)+'"]';var h=u;switch(n){case"style":h=Zs(e);break;case"script":h=Ks(e)}Ii.has(h)||(e=v({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),Ii.set(h,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(fl(h))||n==="script"&&o.querySelector(hl(h))||(n=o.createElement("link"),Qn(n,"link",e),ke(n),o.head.appendChild(n)))}}function aS(e,n){Oa.m(e,n);var a=js;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Je(o)+'"][href="'+Je(e)+'"]',h=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=Ks(e)}if(!Ii.has(h)&&(e=v({rel:"modulepreload",href:e},n),Ii.set(h,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(hl(h)))return}o=a.createElement("link"),Qn(o,"link",e),ke(o),a.head.appendChild(o)}}}function rS(e,n,a){Oa.S(e,n,a);var o=js;if(o&&e){var u=aa(o).hoistableStyles,h=Zs(e);n=n||"default";var T=u.get(h);if(!T){var U={loading:0,preload:null};if(T=o.querySelector(fl(h)))U.loading=5;else{e=v({rel:"stylesheet",href:e,"data-precedence":n},a),(a=Ii.get(h))&&Bh(e,a);var W=T=o.createElement("link");ke(W),Qn(W,"link",e),W._p=new Promise(function(ut,xt){W.onload=ut,W.onerror=xt}),W.addEventListener("load",function(){U.loading|=1}),W.addEventListener("error",function(){U.loading|=2}),U.loading|=4,Pc(T,n,o)}T={type:"stylesheet",instance:T,count:1,state:U},u.set(h,T)}}}function sS(e,n){Oa.X(e,n);var a=js;if(a&&e){var o=aa(a).hoistableScripts,u=Ks(e),h=o.get(u);h||(h=a.querySelector(hl(u)),h||(e=v({src:e,async:!0},n),(n=Ii.get(u))&&Ih(e,n),h=a.createElement("script"),ke(h),Qn(h,"link",e),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function oS(e,n){Oa.M(e,n);var a=js;if(a&&e){var o=aa(a).hoistableScripts,u=Ks(e),h=o.get(u);h||(h=a.querySelector(hl(u)),h||(e=v({src:e,async:!0,type:"module"},n),(n=Ii.get(u))&&Ih(e,n),h=a.createElement("script"),ke(h),Qn(h,"link",e),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function A_(e,n,a,o){var u=(u=Ut.current)?Oc(u):null;if(!u)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Zs(a.href),a=aa(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Zs(a.href);var h=aa(u).hoistableStyles,T=h.get(e);if(T||(u=u.ownerDocument||u,T={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(e,T),(h=u.querySelector(fl(e)))&&!h._p&&(T.instance=h,T.state.loading=5),Ii.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Ii.set(e,a),h||lS(u,e,a,T.state))),n&&o===null)throw Error(r(528,""));return T}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Ks(a),a=aa(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function Zs(e){return'href="'+Je(e)+'"'}function fl(e){return'link[rel="stylesheet"]['+e+"]"}function R_(e){return v({},e,{"data-precedence":e.precedence,precedence:null})}function lS(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Qn(n,"link",a),ke(n),e.head.appendChild(n))}function Ks(e){return'[src="'+Je(e)+'"]'}function hl(e){return"script[async]"+e}function w_(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+Je(a.href)+'"]');if(o)return n.instance=o,ke(o),o;var u=v({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),ke(o),Qn(o,"style",u),Pc(o,a.precedence,e),n.instance=o;case"stylesheet":u=Zs(a.href);var h=e.querySelector(fl(u));if(h)return n.state.loading|=4,n.instance=h,ke(h),h;o=R_(a),(u=Ii.get(u))&&Bh(o,u),h=(e.ownerDocument||e).createElement("link"),ke(h);var T=h;return T._p=new Promise(function(U,W){T.onload=U,T.onerror=W}),Qn(h,"link",o),n.state.loading|=4,Pc(h,a.precedence,e),n.instance=h;case"script":return h=Ks(a.src),(u=e.querySelector(hl(h)))?(n.instance=u,ke(u),u):(o=a,(u=Ii.get(h))&&(o=v({},a),Ih(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),ke(u),Qn(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,Pc(o,a.precedence,e));return n.instance}function Pc(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,h=u,T=0;T<o.length;T++){var U=o[T];if(U.dataset.precedence===n)h=U;else if(h!==u)break}h?h.parentNode.insertBefore(e,h.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Bh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Ih(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Fc=null;function C_(e,n,a){if(Fc===null){var o=new Map,u=Fc=new Map;u.set(a,o)}else u=Fc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var h=a[u];if(!(h[ri]||h[_n]||e==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var T=h.getAttribute(n)||"";T=e+T;var U=o.get(T);U?U.push(h):o.set(T,[h])}}return o}function D_(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function cS(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function U_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var dl=null;function uS(){}function fS(e,n,a){if(dl===null)throw Error(r(475));var o=dl;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var u=Zs(a.href),h=e.querySelector(fl(u));if(h){e=h._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(o.count++,o=Bc.bind(o),e.then(o,o)),n.state.loading|=4,n.instance=h,ke(h);return}h=e.ownerDocument||e,a=R_(a),(u=Ii.get(u))&&Bh(a,u),h=h.createElement("link"),ke(h);var T=h;T._p=new Promise(function(U,W){T.onload=U,T.onerror=W}),Qn(h,"link",a),n.instance=h}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(o.count++,n=Bc.bind(o),e.addEventListener("load",n),e.addEventListener("error",n))}}function hS(){if(dl===null)throw Error(r(475));var e=dl;return e.stylesheets&&e.count===0&&zh(e,e.stylesheets),0<e.count?function(n){var a=setTimeout(function(){if(e.stylesheets&&zh(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a)}}:null}function Bc(){if(this.count--,this.count===0){if(this.stylesheets)zh(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Ic=null;function zh(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Ic=new Map,n.forEach(dS,e),Ic=null,Bc.call(e))}function dS(e,n){if(!(n.state.loading&4)){var a=Ic.get(e);if(a)var o=a.get(null);else{a=new Map,Ic.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<u.length;h++){var T=u[h];(T.nodeName==="LINK"||T.getAttribute("media")!=="not all")&&(a.set(T.dataset.precedence,T),o=T)}o&&a.set(null,o)}u=n.instance,T=u.getAttribute("data-precedence"),h=a.get(T)||o,h===o&&a.set(null,u),a.set(T,u),this.count++,o=Bc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),h?h.parentNode.insertBefore(u,h.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var pl={$$typeof:H,Provider:null,Consumer:null,_currentValue:tt,_currentValue2:tt,_threadCount:0};function pS(e,n,a,o,u,h,T,U){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=vt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=vt(0),this.hiddenUpdates=vt(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=h,this.onRecoverableError=T,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=U,this.incompleteTransitions=new Map}function L_(e,n,a,o,u,h,T,U,W,ut,xt,Ct){return e=new pS(e,n,a,T,U,W,ut,Ct),n=1,h===!0&&(n|=24),h=xi(3,null,null,n),e.current=h,h.stateNode=e,n=Sf(),n.refCount++,e.pooledCache=n,n.refCount++,h.memoizedState={element:o,isDehydrated:a,cache:n},bf(h),e}function N_(e){return e?(e=Rs,e):Rs}function O_(e,n,a,o,u,h){u=N_(u),o.context===null?o.context=u:o.pendingContext=u,o=$a(n),o.payload={element:a},h=h===void 0?null:h,h!==null&&(o.callback=h),a=tr(e,o,n),a!==null&&(Ai(a,e,n),Xo(a,e,n))}function P_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Hh(e,n){P_(e,n),(e=e.alternate)&&P_(e,n)}function F_(e){if(e.tag===13){var n=As(e,67108864);n!==null&&Ai(n,e,67108864),Hh(e,67108864)}}var zc=!0;function mS(e,n,a,o){var u=X.T;X.T=null;var h=st.p;try{st.p=2,Gh(e,n,a,o)}finally{st.p=h,X.T=u}}function gS(e,n,a,o){var u=X.T;X.T=null;var h=st.p;try{st.p=8,Gh(e,n,a,o)}finally{st.p=h,X.T=u}}function Gh(e,n,a,o){if(zc){var u=Vh(o);if(u===null)wh(e,n,o,Hc,a),I_(e,o);else if(vS(u,e,n,a,o))o.stopPropagation();else if(I_(e,o),n&4&&-1<_S.indexOf(e)){for(;u!==null;){var h=Vi(u);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var T=Wt(h.pendingLanes);if(T!==0){var U=h;for(U.pendingLanes|=2,U.entangledLanes|=2;T;){var W=1<<31-zt(T);U.entanglements[1]|=W,T&=~W}fa(h),(je&6)===0&&(Mc=ge()+500,ol(0))}}break;case 13:U=As(h,2),U!==null&&Ai(U,h,2),Tc(),Hh(h,2)}if(h=Vh(o),h===null&&wh(e,n,o,Hc,a),h===u)break;u=h}u!==null&&o.stopPropagation()}else wh(e,n,o,null,a)}}function Vh(e){return e=Ao(e),kh(e)}var Hc=null;function kh(e){if(Hc=null,e=ui(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=p(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Hc=e,null}function B_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ne()){case We:return 2;case te:return 8;case B:case D:return 32;case ft:return 268435456;default:return 32}default:return 32}}var Xh=!1,dr=null,pr=null,mr=null,ml=new Map,gl=new Map,gr=[],_S="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function I_(e,n){switch(e){case"focusin":case"focusout":dr=null;break;case"dragenter":case"dragleave":pr=null;break;case"mouseover":case"mouseout":mr=null;break;case"pointerover":case"pointerout":ml.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":gl.delete(n.pointerId)}}function _l(e,n,a,o,u,h){return e===null||e.nativeEvent!==h?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:h,targetContainers:[u]},n!==null&&(n=Vi(n),n!==null&&F_(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function vS(e,n,a,o,u){switch(n){case"focusin":return dr=_l(dr,e,n,a,o,u),!0;case"dragenter":return pr=_l(pr,e,n,a,o,u),!0;case"mouseover":return mr=_l(mr,e,n,a,o,u),!0;case"pointerover":var h=u.pointerId;return ml.set(h,_l(ml.get(h)||null,e,n,a,o,u)),!0;case"gotpointercapture":return h=u.pointerId,gl.set(h,_l(gl.get(h)||null,e,n,a,o,u)),!0}return!1}function z_(e){var n=ui(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=p(a),n!==null){e.blockedOn=n,Qe(e.priority,function(){if(a.tag===13){var o=Ti();o=Ke(o);var u=As(a,o);u!==null&&Ai(u,a,o),Hh(a,o)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Gc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Vh(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);ys=o,a.target.dispatchEvent(o),ys=null}else return n=Vi(a),n!==null&&F_(n),e.blockedOn=a,!1;n.shift()}return!0}function H_(e,n,a){Gc(e)&&a.delete(n)}function yS(){Xh=!1,dr!==null&&Gc(dr)&&(dr=null),pr!==null&&Gc(pr)&&(pr=null),mr!==null&&Gc(mr)&&(mr=null),ml.forEach(H_),gl.forEach(H_)}function Vc(e,n){e.blockedOn===n&&(e.blockedOn=null,Xh||(Xh=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,yS)))}var kc=null;function G_(e){kc!==e&&(kc=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){kc===e&&(kc=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(kh(o||a)===null)continue;break}var h=Vi(a);h!==null&&(e.splice(n,3),n-=3,kf(h,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function vl(e){function n(W){return Vc(W,e)}dr!==null&&Vc(dr,e),pr!==null&&Vc(pr,e),mr!==null&&Vc(mr,e),ml.forEach(n),gl.forEach(n);for(var a=0;a<gr.length;a++){var o=gr[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<gr.length&&(a=gr[0],a.blockedOn===null);)z_(a),a.blockedOn===null&&gr.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],h=a[o+1],T=u[Dn]||null;if(typeof h=="function")T||G_(a);else if(T){var U=null;if(h&&h.hasAttribute("formAction")){if(u=h,T=h[Dn]||null)U=T.formAction;else if(kh(u)!==null)continue}else U=T.action;typeof U=="function"?a[o+1]=U:(a.splice(o,3),o-=3),G_(a)}}}function Wh(e){this._internalRoot=e}Xc.prototype.render=Wh.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,o=Ti();O_(a,o,e,n,null,null)},Xc.prototype.unmount=Wh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;O_(e.current,2,null,e,null,null),Tc(),n[Jn]=null}};function Xc(e){this._internalRoot=e}Xc.prototype.unstable_scheduleHydration=function(e){if(e){var n=R();e={blockedOn:null,target:e,priority:n};for(var a=0;a<gr.length&&n!==0&&n<gr[a].priority;a++);gr.splice(a,0,e),a===0&&z_(e)}};var V_=t.version;if(V_!=="19.1.0")throw Error(r(527,V_,"19.1.0"));st.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=_(n),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var SS={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:X,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Wc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Wc.isDisabled&&Wc.supportsFiber)try{St=Wc.inject(SS),kt=Wc}catch{}}return Sl.createRoot=function(e,n){if(!l(e))throw Error(r(299));var a=!1,o="",u=ag,h=rg,T=sg,U=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(h=n.onCaughtError),n.onRecoverableError!==void 0&&(T=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(U=n.unstable_transitionCallbacks)),n=L_(e,1,!1,null,null,a,o,u,h,T,U,null),e[Jn]=n.current,Rh(e),new Wh(n)},Sl.hydrateRoot=function(e,n,a){if(!l(e))throw Error(r(299));var o=!1,u="",h=ag,T=rg,U=sg,W=null,ut=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(h=a.onUncaughtError),a.onCaughtError!==void 0&&(T=a.onCaughtError),a.onRecoverableError!==void 0&&(U=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(W=a.unstable_transitionCallbacks),a.formState!==void 0&&(ut=a.formState)),n=L_(e,1,!0,n,a??null,o,u,h,T,U,W,ut),n.context=N_(null),a=n.current,o=Ti(),o=Ke(o),u=$a(o),u.callback=null,tr(a,u,o),a=o,n.current.lanes=a,wt(n,a),fa(n),e[Jn]=n.current,Rh(e),new Xc(n)},Sl.version="19.1.0",Sl}var J_;function LS(){if(J_)return Yh.exports;J_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),Yh.exports=US(),Yh.exports}var NS=LS(),Wn=xp();const $_=y0(Wn);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ep="176",po={ROTATE:0,DOLLY:1,PAN:2},fo={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},OS=0,tv=1,PS=2,S0=1,FS=2,Ga=3,wr=0,gi=1,Va=2,Ar=0,mo=1,ev=2,nv=3,iv=4,BS=5,ls=100,IS=101,zS=102,HS=103,GS=104,VS=200,kS=201,XS=202,WS=203,Nd=204,Od=205,qS=206,YS=207,jS=208,ZS=209,KS=210,QS=211,JS=212,$S=213,tx=214,Pd=0,Fd=1,Bd=2,_o=3,Id=4,zd=5,Hd=6,Gd=7,Mp=0,ex=1,nx=2,Rr=0,ix=1,ax=2,rx=3,sx=4,ox=5,lx=6,cx=7,x0=300,vo=301,yo=302,Vd=303,kd=304,Pu=306,Xd=1e3,us=1001,Wd=1002,na=1003,ux=1004,Yc=1005,pa=1006,Jh=1007,fs=1008,ga=1009,E0=1010,M0=1011,Dl=1012,bp=1013,hs=1014,ka=1015,Ol=1016,Tp=1017,Ap=1018,Ul=1020,b0=35902,T0=1021,A0=1022,ta=1023,Ll=1026,Nl=1027,R0=1028,Rp=1029,w0=1030,wp=1031,Cp=1033,Su=33776,xu=33777,Eu=33778,Mu=33779,qd=35840,Yd=35841,jd=35842,Zd=35843,Kd=36196,Qd=37492,Jd=37496,$d=37808,tp=37809,ep=37810,np=37811,ip=37812,ap=37813,rp=37814,sp=37815,op=37816,lp=37817,cp=37818,up=37819,fp=37820,hp=37821,bu=36492,dp=36494,pp=36495,C0=36283,mp=36284,gp=36285,_p=36286,fx=3200,hx=3201,D0=0,dx=1,Tr="",Ci="srgb",So="srgb-linear",Cu="linear",nn="srgb",Qs=7680,av=519,px=512,mx=513,gx=514,U0=515,_x=516,vx=517,yx=518,Sx=519,rv=35044,sv="300 es",Xa=2e3,Du=2001;class ms{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(i)===-1&&r[t].push(i)}hasEventListener(t,i){const r=this._listeners;return r===void 0?!1:r[t]!==void 0&&r[t].indexOf(i)!==-1}removeEventListener(t,i){const r=this._listeners;if(r===void 0)return;const l=r[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const r=i[t.type];if(r!==void 0){t.target=this;const l=r.slice(0);for(let c=0,p=l.length;c<p;c++)l[c].call(this,t);t.target=null}}}const ii=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Tu=Math.PI/180,vp=180/Math.PI;function Pl(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(ii[s&255]+ii[s>>8&255]+ii[s>>16&255]+ii[s>>24&255]+"-"+ii[t&255]+ii[t>>8&255]+"-"+ii[t>>16&15|64]+ii[t>>24&255]+"-"+ii[i&63|128]+ii[i>>8&255]+"-"+ii[i>>16&255]+ii[i>>24&255]+ii[r&255]+ii[r>>8&255]+ii[r>>16&255]+ii[r>>24&255]).toLowerCase()}function Oe(s,t,i){return Math.max(t,Math.min(i,s))}function xx(s,t){return(s%t+t)%t}function $h(s,t,i){return(1-i)*s+i*t}function xl(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function pi(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Ex={DEG2RAD:Tu};class Ee{constructor(t=0,i=0){Ee.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,r=this.y,l=t.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Oe(this.x,t.x,i.x),this.y=Oe(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Oe(this.x,t,i),this.y=Oe(this.y,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Oe(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(Oe(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-t.x,p=this.y-t.y;return this.x=c*r-p*l+t.x,this.y=c*l+p*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class xe{constructor(t,i,r,l,c,p,m,_,g){xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,l,c,p,m,_,g)}set(t,i,r,l,c,p,m,_,g){const v=this.elements;return v[0]=t,v[1]=l,v[2]=m,v[3]=i,v[4]=c,v[5]=_,v[6]=r,v[7]=p,v[8]=g,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,c=this.elements,p=r[0],m=r[3],_=r[6],g=r[1],v=r[4],y=r[7],E=r[2],b=r[5],w=r[8],C=l[0],M=l[3],x=l[6],V=l[1],H=l[4],P=l[7],Y=l[2],z=l[5],k=l[8];return c[0]=p*C+m*V+_*Y,c[3]=p*M+m*H+_*z,c[6]=p*x+m*P+_*k,c[1]=g*C+v*V+y*Y,c[4]=g*M+v*H+y*z,c[7]=g*x+v*P+y*k,c[2]=E*C+b*V+w*Y,c[5]=E*M+b*H+w*z,c[8]=E*x+b*P+w*k,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],p=t[4],m=t[5],_=t[6],g=t[7],v=t[8];return i*p*v-i*m*g-r*c*v+r*m*_+l*c*g-l*p*_}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],p=t[4],m=t[5],_=t[6],g=t[7],v=t[8],y=v*p-m*g,E=m*_-v*c,b=g*c-p*_,w=i*y+r*E+l*b;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/w;return t[0]=y*C,t[1]=(l*g-v*r)*C,t[2]=(m*r-l*p)*C,t[3]=E*C,t[4]=(v*i-l*_)*C,t[5]=(l*c-m*i)*C,t[6]=b*C,t[7]=(r*_-g*i)*C,t[8]=(p*i-r*c)*C,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,l,c,p,m){const _=Math.cos(c),g=Math.sin(c);return this.set(r*_,r*g,-r*(_*p+g*m)+p+t,-l*g,l*_,-l*(-g*p+_*m)+m+i,0,0,1),this}scale(t,i){return this.premultiply(td.makeScale(t,i)),this}rotate(t){return this.premultiply(td.makeRotation(-t)),this}translate(t,i){return this.premultiply(td.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const td=new xe;function L0(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Uu(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Mx(){const s=Uu("canvas");return s.style.display="block",s}const ov={};function Au(s){s in ov||(ov[s]=!0,console.warn(s))}function bx(s,t,i){return new Promise(function(r,l){function c(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}function Tx(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Ax(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const lv=new xe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),cv=new xe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Rx(){const s={enabled:!0,workingColorSpace:So,spaces:{},convert:function(l,c,p){return this.enabled===!1||c===p||!c||!p||(this.spaces[c].transfer===nn&&(l.r=Wa(l.r),l.g=Wa(l.g),l.b=Wa(l.b)),this.spaces[c].primaries!==this.spaces[p].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[p].fromXYZ)),this.spaces[p].transfer===nn&&(l.r=go(l.r),l.g=go(l.g),l.b=go(l.b))),l},fromWorkingColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},toWorkingColorSpace:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Tr?Cu:this.spaces[l].transfer},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,p){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[p].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[So]:{primaries:t,whitePoint:r,transfer:Cu,toXYZ:lv,fromXYZ:cv,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Ci},outputColorSpaceConfig:{drawingBufferColorSpace:Ci}},[Ci]:{primaries:t,whitePoint:r,transfer:nn,toXYZ:lv,fromXYZ:cv,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Ci}}}),s}const Ge=Rx();function Wa(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function go(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Js;class wx{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let r;if(t instanceof HTMLCanvasElement)r=t;else{Js===void 0&&(Js=Uu("canvas")),Js.width=t.width,Js.height=t.height;const l=Js.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),r=Js}return r.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Uu("canvas");i.width=t.width,i.height=t.height;const r=i.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const l=r.getImageData(0,0,t.width,t.height),c=l.data;for(let p=0;p<c.length;p++)c[p]=Wa(c[p]/255)*255;return r.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(Wa(i[r]/255)*255):i[r]=Wa(i[r]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Cx=0;class Dp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Cx++}),this.uuid=Pl(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let p=0,m=l.length;p<m;p++)l[p].isDataTexture?c.push(ed(l[p].image)):c.push(ed(l[p]))}else c=ed(l);r.url=c}return i||(t.images[this.uuid]=r),r}}function ed(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?wx.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Dx=0;class _i extends ms{constructor(t=_i.DEFAULT_IMAGE,i=_i.DEFAULT_MAPPING,r=us,l=us,c=pa,p=fs,m=ta,_=ga,g=_i.DEFAULT_ANISOTROPY,v=Tr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Dx++}),this.uuid=Pl(),this.name="",this.source=new Dp(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=p,this.anisotropy=g,this.format=m,this.internalFormat=null,this.type=_,this.offset=new Ee(0,0),this.repeat=new Ee(1,1),this.center=new Ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isTextureArray=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isTextureArray=t.isTextureArray,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==x0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Xd:t.x=t.x-Math.floor(t.x);break;case us:t.x=t.x<0?0:1;break;case Wd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Xd:t.y=t.y-Math.floor(t.y);break;case us:t.y=t.y<0?0:1;break;case Wd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}_i.DEFAULT_IMAGE=null;_i.DEFAULT_MAPPING=x0;_i.DEFAULT_ANISOTROPY=1;class gn{constructor(t=0,i=0,r=0,l=1){gn.prototype.isVector4=!0,this.x=t,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,l){return this.x=t,this.y=i,this.z=r,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,c=this.w,p=t.elements;return this.x=p[0]*i+p[4]*r+p[8]*l+p[12]*c,this.y=p[1]*i+p[5]*r+p[9]*l+p[13]*c,this.z=p[2]*i+p[6]*r+p[10]*l+p[14]*c,this.w=p[3]*i+p[7]*r+p[11]*l+p[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,l,c;const _=t.elements,g=_[0],v=_[4],y=_[8],E=_[1],b=_[5],w=_[9],C=_[2],M=_[6],x=_[10];if(Math.abs(v-E)<.01&&Math.abs(y-C)<.01&&Math.abs(w-M)<.01){if(Math.abs(v+E)<.1&&Math.abs(y+C)<.1&&Math.abs(w+M)<.1&&Math.abs(g+b+x-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const H=(g+1)/2,P=(b+1)/2,Y=(x+1)/2,z=(v+E)/4,k=(y+C)/4,K=(w+M)/4;return H>P&&H>Y?H<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(H),l=z/r,c=k/r):P>Y?P<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(P),r=z/l,c=K/l):Y<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(Y),r=k/c,l=K/c),this.set(r,l,c,i),this}let V=Math.sqrt((M-w)*(M-w)+(y-C)*(y-C)+(E-v)*(E-v));return Math.abs(V)<.001&&(V=1),this.x=(M-w)/V,this.y=(y-C)/V,this.z=(E-v)/V,this.w=Math.acos((g+b+x-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Oe(this.x,t.x,i.x),this.y=Oe(this.y,t.y,i.y),this.z=Oe(this.z,t.z,i.z),this.w=Oe(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Oe(this.x,t,i),this.y=Oe(this.y,t,i),this.z=Oe(this.z,t,i),this.w=Oe(this.w,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Oe(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ux extends ms{constructor(t=1,i=1,r={}){super(),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=r.depth?r.depth:1,this.scissor=new gn(0,0,t,i),this.scissorTest=!1,this.viewport=new gn(0,0,t,i);const l={width:t,height:i,depth:this.depth};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:pa,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,multiview:!1},r);const c=new _i(l,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);c.flipY=!1,c.generateMipmaps=r.generateMipmaps,c.internalFormat=r.internalFormat,this.textures=[];const p=r.count;for(let m=0;m<p;m++)this.textures[m]=c.clone(),this.textures[m].isRenderTargetTexture=!0,this.textures[m].renderTarget=this;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,r=1){if(this.width!==t||this.height!==i||this.depth!==r){this.width=t,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=r;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Dp(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ds extends Ux{constructor(t=1,i=1,r={}){super(t,i,r),this.isWebGLRenderTarget=!0}}class N0 extends _i{constructor(t=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=na,this.minFilter=na,this.wrapR=us,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Lx extends _i{constructor(t=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=na,this.minFilter=na,this.wrapR=us,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ps{constructor(t=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=r,this._w=l}static slerpFlat(t,i,r,l,c,p,m){let _=r[l+0],g=r[l+1],v=r[l+2],y=r[l+3];const E=c[p+0],b=c[p+1],w=c[p+2],C=c[p+3];if(m===0){t[i+0]=_,t[i+1]=g,t[i+2]=v,t[i+3]=y;return}if(m===1){t[i+0]=E,t[i+1]=b,t[i+2]=w,t[i+3]=C;return}if(y!==C||_!==E||g!==b||v!==w){let M=1-m;const x=_*E+g*b+v*w+y*C,V=x>=0?1:-1,H=1-x*x;if(H>Number.EPSILON){const Y=Math.sqrt(H),z=Math.atan2(Y,x*V);M=Math.sin(M*z)/Y,m=Math.sin(m*z)/Y}const P=m*V;if(_=_*M+E*P,g=g*M+b*P,v=v*M+w*P,y=y*M+C*P,M===1-m){const Y=1/Math.sqrt(_*_+g*g+v*v+y*y);_*=Y,g*=Y,v*=Y,y*=Y}}t[i]=_,t[i+1]=g,t[i+2]=v,t[i+3]=y}static multiplyQuaternionsFlat(t,i,r,l,c,p){const m=r[l],_=r[l+1],g=r[l+2],v=r[l+3],y=c[p],E=c[p+1],b=c[p+2],w=c[p+3];return t[i]=m*w+v*y+_*b-g*E,t[i+1]=_*w+v*E+g*y-m*b,t[i+2]=g*w+v*b+m*E-_*y,t[i+3]=v*w-m*y-_*E-g*b,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,r,l){return this._x=t,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const r=t._x,l=t._y,c=t._z,p=t._order,m=Math.cos,_=Math.sin,g=m(r/2),v=m(l/2),y=m(c/2),E=_(r/2),b=_(l/2),w=_(c/2);switch(p){case"XYZ":this._x=E*v*y+g*b*w,this._y=g*b*y-E*v*w,this._z=g*v*w+E*b*y,this._w=g*v*y-E*b*w;break;case"YXZ":this._x=E*v*y+g*b*w,this._y=g*b*y-E*v*w,this._z=g*v*w-E*b*y,this._w=g*v*y+E*b*w;break;case"ZXY":this._x=E*v*y-g*b*w,this._y=g*b*y+E*v*w,this._z=g*v*w+E*b*y,this._w=g*v*y-E*b*w;break;case"ZYX":this._x=E*v*y-g*b*w,this._y=g*b*y+E*v*w,this._z=g*v*w-E*b*y,this._w=g*v*y+E*b*w;break;case"YZX":this._x=E*v*y+g*b*w,this._y=g*b*y+E*v*w,this._z=g*v*w-E*b*y,this._w=g*v*y-E*b*w;break;case"XZY":this._x=E*v*y-g*b*w,this._y=g*b*y-E*v*w,this._z=g*v*w+E*b*y,this._w=g*v*y+E*b*w;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+p)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const r=i/2,l=Math.sin(r);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,r=i[0],l=i[4],c=i[8],p=i[1],m=i[5],_=i[9],g=i[2],v=i[6],y=i[10],E=r+m+y;if(E>0){const b=.5/Math.sqrt(E+1);this._w=.25/b,this._x=(v-_)*b,this._y=(c-g)*b,this._z=(p-l)*b}else if(r>m&&r>y){const b=2*Math.sqrt(1+r-m-y);this._w=(v-_)/b,this._x=.25*b,this._y=(l+p)/b,this._z=(c+g)/b}else if(m>y){const b=2*Math.sqrt(1+m-r-y);this._w=(c-g)/b,this._x=(l+p)/b,this._y=.25*b,this._z=(_+v)/b}else{const b=2*Math.sqrt(1+y-r-m);this._w=(p-l)/b,this._x=(c+g)/b,this._y=(_+v)/b,this._z=.25*b}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let r=t.dot(i)+1;return r<Number.EPSILON?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Oe(this.dot(t),-1,1)))}rotateTowards(t,i){const r=this.angleTo(t);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const r=t._x,l=t._y,c=t._z,p=t._w,m=i._x,_=i._y,g=i._z,v=i._w;return this._x=r*v+p*m+l*g-c*_,this._y=l*v+p*_+c*m-r*g,this._z=c*v+p*g+r*_-l*m,this._w=p*v-r*m-l*_-c*g,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const r=this._x,l=this._y,c=this._z,p=this._w;let m=p*t._w+r*t._x+l*t._y+c*t._z;if(m<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,m=-m):this.copy(t),m>=1)return this._w=p,this._x=r,this._y=l,this._z=c,this;const _=1-m*m;if(_<=Number.EPSILON){const b=1-i;return this._w=b*p+i*this._w,this._x=b*r+i*this._x,this._y=b*l+i*this._y,this._z=b*c+i*this._z,this.normalize(),this}const g=Math.sqrt(_),v=Math.atan2(g,m),y=Math.sin((1-i)*v)/g,E=Math.sin(i*v)/g;return this._w=p*y+this._w*E,this._x=r*y+this._x*E,this._y=l*y+this._y*E,this._z=c*y+this._z*E,this._onChangeCallback(),this}slerpQuaternions(t,i,r){return this.copy(t).slerp(i,r)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ot{constructor(t=0,i=0,r=0){ot.prototype.isVector3=!0,this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(uv.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(uv.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,c=t.elements,p=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*p,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*p,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*p,this}applyQuaternion(t){const i=this.x,r=this.y,l=this.z,c=t.x,p=t.y,m=t.z,_=t.w,g=2*(p*l-m*r),v=2*(m*i-c*l),y=2*(c*r-p*i);return this.x=i+_*g+p*y-m*v,this.y=r+_*v+m*g-c*y,this.z=l+_*y+c*v-p*g,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Oe(this.x,t.x,i.x),this.y=Oe(this.y,t.y,i.y),this.z=Oe(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Oe(this.x,t,i),this.y=Oe(this.y,t,i),this.z=Oe(this.z,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Oe(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const r=t.x,l=t.y,c=t.z,p=i.x,m=i.y,_=i.z;return this.x=l*_-c*m,this.y=c*p-r*_,this.z=r*m-l*p,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return nd.copy(this).projectOnVector(t),this.sub(nd)}reflect(t){return this.sub(nd.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(Oe(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y,l=this.z-t.z;return i*i+r*r+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){const l=Math.sin(i)*t;return this.x=l*Math.sin(r),this.y=Math.cos(i)*t,this.z=l*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const nd=new ot,uv=new ps;class Eo{constructor(t=new ot(1/0,1/0,1/0),i=new ot(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i+=3)this.expandByPoint(Ki.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,r=t.count;i<r;i++)this.expandByPoint(Ki.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const r=Ki.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let p=0,m=c.count;p<m;p++)t.isMesh===!0?t.getVertexPosition(p,Ki):Ki.fromBufferAttribute(c,p),Ki.applyMatrix4(t.matrixWorld),this.expandByPoint(Ki);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),jc.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),jc.copy(r.boundingBox)),jc.applyMatrix4(t.matrixWorld),this.union(jc)}const l=t.children;for(let c=0,p=l.length;c<p;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ki),Ki.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,r;return t.normal.x>0?(i=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),i<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(El),Zc.subVectors(this.max,El),$s.subVectors(t.a,El),to.subVectors(t.b,El),eo.subVectors(t.c,El),vr.subVectors(to,$s),yr.subVectors(eo,to),es.subVectors($s,eo);let i=[0,-vr.z,vr.y,0,-yr.z,yr.y,0,-es.z,es.y,vr.z,0,-vr.x,yr.z,0,-yr.x,es.z,0,-es.x,-vr.y,vr.x,0,-yr.y,yr.x,0,-es.y,es.x,0];return!id(i,$s,to,eo,Zc)||(i=[1,0,0,0,1,0,0,0,1],!id(i,$s,to,eo,Zc))?!1:(Kc.crossVectors(vr,yr),i=[Kc.x,Kc.y,Kc.z],id(i,$s,to,eo,Zc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ki).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ki).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Pa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Pa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Pa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Pa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Pa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Pa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Pa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Pa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Pa),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Pa=[new ot,new ot,new ot,new ot,new ot,new ot,new ot,new ot],Ki=new ot,jc=new Eo,$s=new ot,to=new ot,eo=new ot,vr=new ot,yr=new ot,es=new ot,El=new ot,Zc=new ot,Kc=new ot,ns=new ot;function id(s,t,i,r,l){for(let c=0,p=s.length-3;c<=p;c+=3){ns.fromArray(s,c);const m=l.x*Math.abs(ns.x)+l.y*Math.abs(ns.y)+l.z*Math.abs(ns.z),_=t.dot(ns),g=i.dot(ns),v=r.dot(ns);if(Math.max(-Math.max(_,g,v),Math.min(_,g,v))>m)return!1}return!0}const Nx=new Eo,Ml=new ot,ad=new ot;class Mo{constructor(t=new ot,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const r=this.center;i!==void 0?r.copy(i):Nx.setFromPoints(t).getCenter(r);let l=0;for(let c=0,p=t.length;c<p;c++)l=Math.max(l,r.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const r=this.center.distanceToSquared(t);return i.copy(t),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ml.subVectors(t,this.center);const i=Ml.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Ml,l/r),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ad.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ml.copy(t.center).add(ad)),this.expandByPoint(Ml.copy(t.center).sub(ad))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Fa=new ot,rd=new ot,Qc=new ot,Sr=new ot,sd=new ot,Jc=new ot,od=new ot;class Fu{constructor(t=new ot,i=new ot(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Fa)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=Fa.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(Fa.copy(this.origin).addScaledVector(this.direction,i),Fa.distanceToSquared(t))}distanceSqToSegment(t,i,r,l){rd.copy(t).add(i).multiplyScalar(.5),Qc.copy(i).sub(t).normalize(),Sr.copy(this.origin).sub(rd);const c=t.distanceTo(i)*.5,p=-this.direction.dot(Qc),m=Sr.dot(this.direction),_=-Sr.dot(Qc),g=Sr.lengthSq(),v=Math.abs(1-p*p);let y,E,b,w;if(v>0)if(y=p*_-m,E=p*m-_,w=c*v,y>=0)if(E>=-w)if(E<=w){const C=1/v;y*=C,E*=C,b=y*(y+p*E+2*m)+E*(p*y+E+2*_)+g}else E=c,y=Math.max(0,-(p*E+m)),b=-y*y+E*(E+2*_)+g;else E=-c,y=Math.max(0,-(p*E+m)),b=-y*y+E*(E+2*_)+g;else E<=-w?(y=Math.max(0,-(-p*c+m)),E=y>0?-c:Math.min(Math.max(-c,-_),c),b=-y*y+E*(E+2*_)+g):E<=w?(y=0,E=Math.min(Math.max(-c,-_),c),b=E*(E+2*_)+g):(y=Math.max(0,-(p*c+m)),E=y>0?c:Math.min(Math.max(-c,-_),c),b=-y*y+E*(E+2*_)+g);else E=p>0?-c:c,y=Math.max(0,-(p*E+m)),b=-y*y+E*(E+2*_)+g;return r&&r.copy(this.origin).addScaledVector(this.direction,y),l&&l.copy(rd).addScaledVector(Qc,E),b}intersectSphere(t,i){Fa.subVectors(t.center,this.origin);const r=Fa.dot(this.direction),l=Fa.dot(Fa)-r*r,c=t.radius*t.radius;if(l>c)return null;const p=Math.sqrt(c-l),m=r-p,_=r+p;return _<0?null:m<0?this.at(_,i):this.at(m,i)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/i;return r>=0?r:null}intersectPlane(t,i){const r=this.distanceToPlane(t);return r===null?null:this.at(r,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let r,l,c,p,m,_;const g=1/this.direction.x,v=1/this.direction.y,y=1/this.direction.z,E=this.origin;return g>=0?(r=(t.min.x-E.x)*g,l=(t.max.x-E.x)*g):(r=(t.max.x-E.x)*g,l=(t.min.x-E.x)*g),v>=0?(c=(t.min.y-E.y)*v,p=(t.max.y-E.y)*v):(c=(t.max.y-E.y)*v,p=(t.min.y-E.y)*v),r>p||c>l||((c>r||isNaN(r))&&(r=c),(p<l||isNaN(l))&&(l=p),y>=0?(m=(t.min.z-E.z)*y,_=(t.max.z-E.z)*y):(m=(t.max.z-E.z)*y,_=(t.min.z-E.z)*y),r>_||m>l)||((m>r||r!==r)&&(r=m),(_<l||l!==l)&&(l=_),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(t){return this.intersectBox(t,Fa)!==null}intersectTriangle(t,i,r,l,c){sd.subVectors(i,t),Jc.subVectors(r,t),od.crossVectors(sd,Jc);let p=this.direction.dot(od),m;if(p>0){if(l)return null;m=1}else if(p<0)m=-1,p=-p;else return null;Sr.subVectors(this.origin,t);const _=m*this.direction.dot(Jc.crossVectors(Sr,Jc));if(_<0)return null;const g=m*this.direction.dot(sd.cross(Sr));if(g<0||_+g>p)return null;const v=-m*Sr.dot(od);return v<0?null:this.at(v/p,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class fn{constructor(t,i,r,l,c,p,m,_,g,v,y,E,b,w,C,M){fn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,l,c,p,m,_,g,v,y,E,b,w,C,M)}set(t,i,r,l,c,p,m,_,g,v,y,E,b,w,C,M){const x=this.elements;return x[0]=t,x[4]=i,x[8]=r,x[12]=l,x[1]=c,x[5]=p,x[9]=m,x[13]=_,x[2]=g,x[6]=v,x[10]=y,x[14]=E,x[3]=b,x[7]=w,x[11]=C,x[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new fn().fromArray(this.elements)}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){const i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,r=t.elements,l=1/no.setFromMatrixColumn(t,0).length(),c=1/no.setFromMatrixColumn(t,1).length(),p=1/no.setFromMatrixColumn(t,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*p,i[9]=r[9]*p,i[10]=r[10]*p,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,r=t.x,l=t.y,c=t.z,p=Math.cos(r),m=Math.sin(r),_=Math.cos(l),g=Math.sin(l),v=Math.cos(c),y=Math.sin(c);if(t.order==="XYZ"){const E=p*v,b=p*y,w=m*v,C=m*y;i[0]=_*v,i[4]=-_*y,i[8]=g,i[1]=b+w*g,i[5]=E-C*g,i[9]=-m*_,i[2]=C-E*g,i[6]=w+b*g,i[10]=p*_}else if(t.order==="YXZ"){const E=_*v,b=_*y,w=g*v,C=g*y;i[0]=E+C*m,i[4]=w*m-b,i[8]=p*g,i[1]=p*y,i[5]=p*v,i[9]=-m,i[2]=b*m-w,i[6]=C+E*m,i[10]=p*_}else if(t.order==="ZXY"){const E=_*v,b=_*y,w=g*v,C=g*y;i[0]=E-C*m,i[4]=-p*y,i[8]=w+b*m,i[1]=b+w*m,i[5]=p*v,i[9]=C-E*m,i[2]=-p*g,i[6]=m,i[10]=p*_}else if(t.order==="ZYX"){const E=p*v,b=p*y,w=m*v,C=m*y;i[0]=_*v,i[4]=w*g-b,i[8]=E*g+C,i[1]=_*y,i[5]=C*g+E,i[9]=b*g-w,i[2]=-g,i[6]=m*_,i[10]=p*_}else if(t.order==="YZX"){const E=p*_,b=p*g,w=m*_,C=m*g;i[0]=_*v,i[4]=C-E*y,i[8]=w*y+b,i[1]=y,i[5]=p*v,i[9]=-m*v,i[2]=-g*v,i[6]=b*y+w,i[10]=E-C*y}else if(t.order==="XZY"){const E=p*_,b=p*g,w=m*_,C=m*g;i[0]=_*v,i[4]=-y,i[8]=g*v,i[1]=E*y+C,i[5]=p*v,i[9]=b*y-w,i[2]=w*y-b,i[6]=m*v,i[10]=C*y+E}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ox,t,Px)}lookAt(t,i,r){const l=this.elements;return Ri.subVectors(t,i),Ri.lengthSq()===0&&(Ri.z=1),Ri.normalize(),xr.crossVectors(r,Ri),xr.lengthSq()===0&&(Math.abs(r.z)===1?Ri.x+=1e-4:Ri.z+=1e-4,Ri.normalize(),xr.crossVectors(r,Ri)),xr.normalize(),$c.crossVectors(Ri,xr),l[0]=xr.x,l[4]=$c.x,l[8]=Ri.x,l[1]=xr.y,l[5]=$c.y,l[9]=Ri.y,l[2]=xr.z,l[6]=$c.z,l[10]=Ri.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,c=this.elements,p=r[0],m=r[4],_=r[8],g=r[12],v=r[1],y=r[5],E=r[9],b=r[13],w=r[2],C=r[6],M=r[10],x=r[14],V=r[3],H=r[7],P=r[11],Y=r[15],z=l[0],k=l[4],K=l[8],F=l[12],O=l[1],q=l[5],rt=l[9],dt=l[13],_t=l[2],Mt=l[6],X=l[10],st=l[14],tt=l[3],Lt=l[7],I=l[11],ct=l[15];return c[0]=p*z+m*O+_*_t+g*tt,c[4]=p*k+m*q+_*Mt+g*Lt,c[8]=p*K+m*rt+_*X+g*I,c[12]=p*F+m*dt+_*st+g*ct,c[1]=v*z+y*O+E*_t+b*tt,c[5]=v*k+y*q+E*Mt+b*Lt,c[9]=v*K+y*rt+E*X+b*I,c[13]=v*F+y*dt+E*st+b*ct,c[2]=w*z+C*O+M*_t+x*tt,c[6]=w*k+C*q+M*Mt+x*Lt,c[10]=w*K+C*rt+M*X+x*I,c[14]=w*F+C*dt+M*st+x*ct,c[3]=V*z+H*O+P*_t+Y*tt,c[7]=V*k+H*q+P*Mt+Y*Lt,c[11]=V*K+H*rt+P*X+Y*I,c[15]=V*F+H*dt+P*st+Y*ct,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[4],l=t[8],c=t[12],p=t[1],m=t[5],_=t[9],g=t[13],v=t[2],y=t[6],E=t[10],b=t[14],w=t[3],C=t[7],M=t[11],x=t[15];return w*(+c*_*y-l*g*y-c*m*E+r*g*E+l*m*b-r*_*b)+C*(+i*_*b-i*g*E+c*p*E-l*p*b+l*g*v-c*_*v)+M*(+i*g*y-i*m*b-c*p*y+r*p*b+c*m*v-r*g*v)+x*(-l*m*v-i*_*y+i*m*E+l*p*y-r*p*E+r*_*v)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=r),this}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],p=t[4],m=t[5],_=t[6],g=t[7],v=t[8],y=t[9],E=t[10],b=t[11],w=t[12],C=t[13],M=t[14],x=t[15],V=y*M*g-C*E*g+C*_*b-m*M*b-y*_*x+m*E*x,H=w*E*g-v*M*g-w*_*b+p*M*b+v*_*x-p*E*x,P=v*C*g-w*y*g+w*m*b-p*C*b-v*m*x+p*y*x,Y=w*y*_-v*C*_-w*m*E+p*C*E+v*m*M-p*y*M,z=i*V+r*H+l*P+c*Y;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/z;return t[0]=V*k,t[1]=(C*E*c-y*M*c-C*l*b+r*M*b+y*l*x-r*E*x)*k,t[2]=(m*M*c-C*_*c+C*l*g-r*M*g-m*l*x+r*_*x)*k,t[3]=(y*_*c-m*E*c-y*l*g+r*E*g+m*l*b-r*_*b)*k,t[4]=H*k,t[5]=(v*M*c-w*E*c+w*l*b-i*M*b-v*l*x+i*E*x)*k,t[6]=(w*_*c-p*M*c-w*l*g+i*M*g+p*l*x-i*_*x)*k,t[7]=(p*E*c-v*_*c+v*l*g-i*E*g-p*l*b+i*_*b)*k,t[8]=P*k,t[9]=(w*y*c-v*C*c-w*r*b+i*C*b+v*r*x-i*y*x)*k,t[10]=(p*C*c-w*m*c+w*r*g-i*C*g-p*r*x+i*m*x)*k,t[11]=(v*m*c-p*y*c-v*r*g+i*y*g+p*r*b-i*m*b)*k,t[12]=Y*k,t[13]=(v*C*l-w*y*l+w*r*E-i*C*E-v*r*M+i*y*M)*k,t[14]=(w*m*l-p*C*l-w*r*_+i*C*_+p*r*M-i*m*M)*k,t[15]=(p*y*l-v*m*l+v*r*_-i*y*_-p*r*E+i*m*E)*k,this}scale(t){const i=this.elements,r=t.x,l=t.y,c=t.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,p=t.x,m=t.y,_=t.z,g=c*p,v=c*m;return this.set(g*p+r,g*m-l*_,g*_+l*m,0,g*m+l*_,v*m+r,v*_-l*p,0,g*_-l*m,v*_+l*p,c*_*_+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,l,c,p){return this.set(1,r,c,0,t,1,p,0,i,l,1,0,0,0,0,1),this}compose(t,i,r){const l=this.elements,c=i._x,p=i._y,m=i._z,_=i._w,g=c+c,v=p+p,y=m+m,E=c*g,b=c*v,w=c*y,C=p*v,M=p*y,x=m*y,V=_*g,H=_*v,P=_*y,Y=r.x,z=r.y,k=r.z;return l[0]=(1-(C+x))*Y,l[1]=(b+P)*Y,l[2]=(w-H)*Y,l[3]=0,l[4]=(b-P)*z,l[5]=(1-(E+x))*z,l[6]=(M+V)*z,l[7]=0,l[8]=(w+H)*k,l[9]=(M-V)*k,l[10]=(1-(E+C))*k,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,r){const l=this.elements;let c=no.set(l[0],l[1],l[2]).length();const p=no.set(l[4],l[5],l[6]).length(),m=no.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),t.x=l[12],t.y=l[13],t.z=l[14],Qi.copy(this);const g=1/c,v=1/p,y=1/m;return Qi.elements[0]*=g,Qi.elements[1]*=g,Qi.elements[2]*=g,Qi.elements[4]*=v,Qi.elements[5]*=v,Qi.elements[6]*=v,Qi.elements[8]*=y,Qi.elements[9]*=y,Qi.elements[10]*=y,i.setFromRotationMatrix(Qi),r.x=c,r.y=p,r.z=m,this}makePerspective(t,i,r,l,c,p,m=Xa){const _=this.elements,g=2*c/(i-t),v=2*c/(r-l),y=(i+t)/(i-t),E=(r+l)/(r-l);let b,w;if(m===Xa)b=-(p+c)/(p-c),w=-2*p*c/(p-c);else if(m===Du)b=-p/(p-c),w=-p*c/(p-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+m);return _[0]=g,_[4]=0,_[8]=y,_[12]=0,_[1]=0,_[5]=v,_[9]=E,_[13]=0,_[2]=0,_[6]=0,_[10]=b,_[14]=w,_[3]=0,_[7]=0,_[11]=-1,_[15]=0,this}makeOrthographic(t,i,r,l,c,p,m=Xa){const _=this.elements,g=1/(i-t),v=1/(r-l),y=1/(p-c),E=(i+t)*g,b=(r+l)*v;let w,C;if(m===Xa)w=(p+c)*y,C=-2*y;else if(m===Du)w=c*y,C=-1*y;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+m);return _[0]=2*g,_[4]=0,_[8]=0,_[12]=-E,_[1]=0,_[5]=2*v,_[9]=0,_[13]=-b,_[2]=0,_[6]=0,_[10]=C,_[14]=-w,_[3]=0,_[7]=0,_[11]=0,_[15]=1,this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}}const no=new ot,Qi=new fn,Ox=new ot(0,0,0),Px=new ot(1,1,1),xr=new ot,$c=new ot,Ri=new ot,fv=new fn,hv=new ps;class _a{constructor(t=0,i=0,r=0,l=_a.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,l=this._order){return this._x=t,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){const l=t.elements,c=l[0],p=l[4],m=l[8],_=l[1],g=l[5],v=l[9],y=l[2],E=l[6],b=l[10];switch(i){case"XYZ":this._y=Math.asin(Oe(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-v,b),this._z=Math.atan2(-p,c)):(this._x=Math.atan2(E,g),this._z=0);break;case"YXZ":this._x=Math.asin(-Oe(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(m,b),this._z=Math.atan2(_,g)):(this._y=Math.atan2(-y,c),this._z=0);break;case"ZXY":this._x=Math.asin(Oe(E,-1,1)),Math.abs(E)<.9999999?(this._y=Math.atan2(-y,b),this._z=Math.atan2(-p,g)):(this._y=0,this._z=Math.atan2(_,c));break;case"ZYX":this._y=Math.asin(-Oe(y,-1,1)),Math.abs(y)<.9999999?(this._x=Math.atan2(E,b),this._z=Math.atan2(_,c)):(this._x=0,this._z=Math.atan2(-p,g));break;case"YZX":this._z=Math.asin(Oe(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(-v,g),this._y=Math.atan2(-y,c)):(this._x=0,this._y=Math.atan2(m,b));break;case"XZY":this._z=Math.asin(-Oe(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(E,g),this._y=Math.atan2(m,c)):(this._x=Math.atan2(-v,b),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return fv.makeRotationFromQuaternion(t),this.setFromRotationMatrix(fv,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return hv.setFromEuler(this),this.setFromQuaternion(hv,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}_a.DEFAULT_ORDER="XYZ";class O0{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Fx=0;const dv=new ot,io=new ps,Ba=new fn,tu=new ot,bl=new ot,Bx=new ot,Ix=new ps,pv=new ot(1,0,0),mv=new ot(0,1,0),gv=new ot(0,0,1),_v={type:"added"},zx={type:"removed"},ao={type:"childadded",child:null},ld={type:"childremoved",child:null};class qn extends ms{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Fx++}),this.uuid=Pl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=qn.DEFAULT_UP.clone();const t=new ot,i=new _a,r=new ps,l=new ot(1,1,1);function c(){r.setFromEuler(i,!1)}function p(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(p),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new fn},normalMatrix:{value:new xe}}),this.matrix=new fn,this.matrixWorld=new fn,this.matrixAutoUpdate=qn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=qn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new O0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return io.setFromAxisAngle(t,i),this.quaternion.multiply(io),this}rotateOnWorldAxis(t,i){return io.setFromAxisAngle(t,i),this.quaternion.premultiply(io),this}rotateX(t){return this.rotateOnAxis(pv,t)}rotateY(t){return this.rotateOnAxis(mv,t)}rotateZ(t){return this.rotateOnAxis(gv,t)}translateOnAxis(t,i){return dv.copy(t).applyQuaternion(this.quaternion),this.position.add(dv.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(pv,t)}translateY(t){return this.translateOnAxis(mv,t)}translateZ(t){return this.translateOnAxis(gv,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ba.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?tu.copy(t):tu.set(t,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),bl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ba.lookAt(bl,tu,this.up):Ba.lookAt(tu,bl,this.up),this.quaternion.setFromRotationMatrix(Ba),l&&(Ba.extractRotation(l.matrixWorld),io.setFromRotationMatrix(Ba),this.quaternion.premultiply(io.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(_v),ao.child=t,this.dispatchEvent(ao),ao.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(zx),ld.child=t,this.dispatchEvent(ld),ld.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ba.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ba.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ba),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(_v),ao.child=t,this.dispatchEvent(ao),ao.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const p=this.children[r].getObjectByProperty(t,i);if(p!==void 0)return p}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);const l=this.children;for(let c=0,p=l.length;c<p;c++)l[c].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bl,t,Bx),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bl,Ix,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,p=l.length;c<p;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(m=>({...m,boundingBox:m.boundingBox?{min:m.boundingBox.min.toArray(),max:m.boundingBox.max.toArray()}:void 0,boundingSphere:m.boundingSphere?{radius:m.boundingSphere.radius,center:m.boundingSphere.center.toArray()}:void 0})),l.instanceInfo=this._instanceInfo.map(m=>({...m})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere={center:this.boundingSphere.center.toArray(),radius:this.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:this.boundingBox.min.toArray(),max:this.boundingBox.max.toArray()}));function c(m,_){return m[_.uuid]===void 0&&(m[_.uuid]=_.toJSON(t)),_.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const m=this.geometry.parameters;if(m!==void 0&&m.shapes!==void 0){const _=m.shapes;if(Array.isArray(_))for(let g=0,v=_.length;g<v;g++){const y=_[g];c(t.shapes,y)}else c(t.shapes,_)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const m=[];for(let _=0,g=this.material.length;_<g;_++)m.push(c(t.materials,this.material[_]));l.material=m}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let m=0;m<this.children.length;m++)l.children.push(this.children[m].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let m=0;m<this.animations.length;m++){const _=this.animations[m];l.animations.push(c(t.animations,_))}}if(i){const m=p(t.geometries),_=p(t.materials),g=p(t.textures),v=p(t.images),y=p(t.shapes),E=p(t.skeletons),b=p(t.animations),w=p(t.nodes);m.length>0&&(r.geometries=m),_.length>0&&(r.materials=_),g.length>0&&(r.textures=g),v.length>0&&(r.images=v),y.length>0&&(r.shapes=y),E.length>0&&(r.skeletons=E),b.length>0&&(r.animations=b),w.length>0&&(r.nodes=w)}return r.object=l,r;function p(m){const _=[];for(const g in m){const v=m[g];delete v.metadata,_.push(v)}return _}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){const l=t.children[r];this.add(l.clone())}return this}}qn.DEFAULT_UP=new ot(0,1,0);qn.DEFAULT_MATRIX_AUTO_UPDATE=!0;qn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ji=new ot,Ia=new ot,cd=new ot,za=new ot,ro=new ot,so=new ot,vv=new ot,ud=new ot,fd=new ot,hd=new ot,dd=new gn,pd=new gn,md=new gn;class $i{constructor(t=new ot,i=new ot,r=new ot){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,l){l.subVectors(r,i),Ji.subVectors(t,i),l.cross(Ji);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,r,l,c){Ji.subVectors(l,i),Ia.subVectors(r,i),cd.subVectors(t,i);const p=Ji.dot(Ji),m=Ji.dot(Ia),_=Ji.dot(cd),g=Ia.dot(Ia),v=Ia.dot(cd),y=p*g-m*m;if(y===0)return c.set(0,0,0),null;const E=1/y,b=(g*_-m*v)*E,w=(p*v-m*_)*E;return c.set(1-b-w,w,b)}static containsPoint(t,i,r,l){return this.getBarycoord(t,i,r,l,za)===null?!1:za.x>=0&&za.y>=0&&za.x+za.y<=1}static getInterpolation(t,i,r,l,c,p,m,_){return this.getBarycoord(t,i,r,l,za)===null?(_.x=0,_.y=0,"z"in _&&(_.z=0),"w"in _&&(_.w=0),null):(_.setScalar(0),_.addScaledVector(c,za.x),_.addScaledVector(p,za.y),_.addScaledVector(m,za.z),_)}static getInterpolatedAttribute(t,i,r,l,c,p){return dd.setScalar(0),pd.setScalar(0),md.setScalar(0),dd.fromBufferAttribute(t,i),pd.fromBufferAttribute(t,r),md.fromBufferAttribute(t,l),p.setScalar(0),p.addScaledVector(dd,c.x),p.addScaledVector(pd,c.y),p.addScaledVector(md,c.z),p}static isFrontFacing(t,i,r,l){return Ji.subVectors(r,i),Ia.subVectors(t,i),Ji.cross(Ia).dot(l)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,l){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,r,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ji.subVectors(this.c,this.b),Ia.subVectors(this.a,this.b),Ji.cross(Ia).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return $i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return $i.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,l,c){return $i.getInterpolation(t,this.a,this.b,this.c,i,r,l,c)}containsPoint(t){return $i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return $i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const r=this.a,l=this.b,c=this.c;let p,m;ro.subVectors(l,r),so.subVectors(c,r),ud.subVectors(t,r);const _=ro.dot(ud),g=so.dot(ud);if(_<=0&&g<=0)return i.copy(r);fd.subVectors(t,l);const v=ro.dot(fd),y=so.dot(fd);if(v>=0&&y<=v)return i.copy(l);const E=_*y-v*g;if(E<=0&&_>=0&&v<=0)return p=_/(_-v),i.copy(r).addScaledVector(ro,p);hd.subVectors(t,c);const b=ro.dot(hd),w=so.dot(hd);if(w>=0&&b<=w)return i.copy(c);const C=b*g-_*w;if(C<=0&&g>=0&&w<=0)return m=g/(g-w),i.copy(r).addScaledVector(so,m);const M=v*w-b*y;if(M<=0&&y-v>=0&&b-w>=0)return vv.subVectors(c,l),m=(y-v)/(y-v+(b-w)),i.copy(l).addScaledVector(vv,m);const x=1/(M+C+E);return p=C*x,m=E*x,i.copy(r).addScaledVector(ro,p).addScaledVector(so,m)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const P0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Er={h:0,s:0,l:0},eu={h:0,s:0,l:0};function gd(s,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(t-s)*6*i:i<1/2?t:i<2/3?s+(t-s)*6*(2/3-i):s}class Ie{constructor(t,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,r)}set(t,i,r){if(i===void 0&&r===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=Ci){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ge.toWorkingColorSpace(this,i),this}setRGB(t,i,r,l=Ge.workingColorSpace){return this.r=t,this.g=i,this.b=r,Ge.toWorkingColorSpace(this,l),this}setHSL(t,i,r,l=Ge.workingColorSpace){if(t=xx(t,1),i=Oe(i,0,1),r=Oe(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,p=2*r-c;this.r=gd(p,c,t+1/3),this.g=gd(p,c,t),this.b=gd(p,c,t-1/3)}return Ge.toWorkingColorSpace(this,l),this}setStyle(t,i=Ci){function r(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const p=l[1],m=l[2];switch(p){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(m))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(m))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(m))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],p=c.length;if(p===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(p===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=Ci){const r=P0[t.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Wa(t.r),this.g=Wa(t.g),this.b=Wa(t.b),this}copyLinearToSRGB(t){return this.r=go(t.r),this.g=go(t.g),this.b=go(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ci){return Ge.fromWorkingColorSpace(ai.copy(this),t),Math.round(Oe(ai.r*255,0,255))*65536+Math.round(Oe(ai.g*255,0,255))*256+Math.round(Oe(ai.b*255,0,255))}getHexString(t=Ci){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Ge.workingColorSpace){Ge.fromWorkingColorSpace(ai.copy(this),i);const r=ai.r,l=ai.g,c=ai.b,p=Math.max(r,l,c),m=Math.min(r,l,c);let _,g;const v=(m+p)/2;if(m===p)_=0,g=0;else{const y=p-m;switch(g=v<=.5?y/(p+m):y/(2-p-m),p){case r:_=(l-c)/y+(l<c?6:0);break;case l:_=(c-r)/y+2;break;case c:_=(r-l)/y+4;break}_/=6}return t.h=_,t.s=g,t.l=v,t}getRGB(t,i=Ge.workingColorSpace){return Ge.fromWorkingColorSpace(ai.copy(this),i),t.r=ai.r,t.g=ai.g,t.b=ai.b,t}getStyle(t=Ci){Ge.fromWorkingColorSpace(ai.copy(this),t);const i=ai.r,r=ai.g,l=ai.b;return t!==Ci?`color(${t} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(t,i,r){return this.getHSL(Er),this.setHSL(Er.h+t,Er.s+i,Er.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,r){return this.r=t.r+(i.r-t.r)*r,this.g=t.g+(i.g-t.g)*r,this.b=t.b+(i.b-t.b)*r,this}lerpHSL(t,i){this.getHSL(Er),t.getHSL(eu);const r=$h(Er.h,eu.h,i),l=$h(Er.s,eu.s,i),c=$h(Er.l,eu.l,i);return this.setHSL(r,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,r=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ai=new Ie;Ie.NAMES=P0;let Hx=0;class qa extends ms{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Hx++}),this.uuid=Pl(),this.name="",this.type="Material",this.blending=mo,this.side=wr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Nd,this.blendDst=Od,this.blendEquation=ls,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ie(0,0,0),this.blendAlpha=0,this.depthFunc=_o,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=av,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qs,this.stencilZFail=Qs,this.stencilZPass=Qs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const r=t[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==mo&&(r.blending=this.blending),this.side!==wr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Nd&&(r.blendSrc=this.blendSrc),this.blendDst!==Od&&(r.blendDst=this.blendDst),this.blendEquation!==ls&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==_o&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==av&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Qs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Qs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Qs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const p=[];for(const m in c){const _=c[m];delete _.metadata,p.push(_)}return p}if(i){const c=l(t.textures),p=l(t.images);c.length>0&&(r.textures=c),p.length>0&&(r.images=p)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class F0 extends qa{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _a,this.combine=Mp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Cn=new ot,nu=new Ee;let Gx=0;class ma{constructor(t,i,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Gx++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=r,this.usage=rv,this.updateRanges=[],this.gpuType=ka,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,r){t*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[r+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)nu.fromBufferAttribute(this,i),nu.applyMatrix3(t),this.setXY(i,nu.x,nu.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)Cn.fromBufferAttribute(this,i),Cn.applyMatrix3(t),this.setXYZ(i,Cn.x,Cn.y,Cn.z);return this}applyMatrix4(t){for(let i=0,r=this.count;i<r;i++)Cn.fromBufferAttribute(this,i),Cn.applyMatrix4(t),this.setXYZ(i,Cn.x,Cn.y,Cn.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)Cn.fromBufferAttribute(this,i),Cn.applyNormalMatrix(t),this.setXYZ(i,Cn.x,Cn.y,Cn.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)Cn.fromBufferAttribute(this,i),Cn.transformDirection(t),this.setXYZ(i,Cn.x,Cn.y,Cn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let r=this.array[t*this.itemSize+i];return this.normalized&&(r=xl(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=pi(r,this.array)),this.array[t*this.itemSize+i]=r,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=xl(i,this.array)),i}setX(t,i){return this.normalized&&(i=pi(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=xl(i,this.array)),i}setY(t,i){return this.normalized&&(i=pi(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=xl(i,this.array)),i}setZ(t,i){return this.normalized&&(i=pi(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=xl(i,this.array)),i}setW(t,i){return this.normalized&&(i=pi(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,r){return t*=this.itemSize,this.normalized&&(i=pi(i,this.array),r=pi(r,this.array)),this.array[t+0]=i,this.array[t+1]=r,this}setXYZ(t,i,r,l){return t*=this.itemSize,this.normalized&&(i=pi(i,this.array),r=pi(r,this.array),l=pi(l,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this}setXYZW(t,i,r,l,c){return t*=this.itemSize,this.normalized&&(i=pi(i,this.array),r=pi(r,this.array),l=pi(l,this.array),c=pi(c,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==rv&&(t.usage=this.usage),t}}class B0 extends ma{constructor(t,i,r){super(new Uint16Array(t),i,r)}}class I0 extends ma{constructor(t,i,r){super(new Uint32Array(t),i,r)}}class ci extends ma{constructor(t,i,r){super(new Float32Array(t),i,r)}}let Vx=0;const zi=new fn,_d=new qn,oo=new ot,wi=new Eo,Tl=new Eo,kn=new ot;class ia extends ms{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Vx++}),this.uuid=Pl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(L0(t)?I0:B0)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new xe().getNormalMatrix(t);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return zi.makeRotationFromQuaternion(t),this.applyMatrix4(zi),this}rotateX(t){return zi.makeRotationX(t),this.applyMatrix4(zi),this}rotateY(t){return zi.makeRotationY(t),this.applyMatrix4(zi),this}rotateZ(t){return zi.makeRotationZ(t),this.applyMatrix4(zi),this}translate(t,i,r){return zi.makeTranslation(t,i,r),this.applyMatrix4(zi),this}scale(t,i,r){return zi.makeScale(t,i,r),this.applyMatrix4(zi),this}lookAt(t){return _d.lookAt(t),_d.updateMatrix(),this.applyMatrix4(_d.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(oo).negate(),this.translate(oo.x,oo.y,oo.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=t.length;l<c;l++){const p=t[l];r.push(p.x,p.y,p.z||0)}this.setAttribute("position",new ci(r,3))}else{const r=Math.min(t.length,i.count);for(let l=0;l<r;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Eo);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ot(-1/0,-1/0,-1/0),new ot(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];wi.setFromBufferAttribute(c),this.morphTargetsRelative?(kn.addVectors(this.boundingBox.min,wi.min),this.boundingBox.expandByPoint(kn),kn.addVectors(this.boundingBox.max,wi.max),this.boundingBox.expandByPoint(kn)):(this.boundingBox.expandByPoint(wi.min),this.boundingBox.expandByPoint(wi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mo);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ot,1/0);return}if(t){const r=this.boundingSphere.center;if(wi.setFromBufferAttribute(t),i)for(let c=0,p=i.length;c<p;c++){const m=i[c];Tl.setFromBufferAttribute(m),this.morphTargetsRelative?(kn.addVectors(wi.min,Tl.min),wi.expandByPoint(kn),kn.addVectors(wi.max,Tl.max),wi.expandByPoint(kn)):(wi.expandByPoint(Tl.min),wi.expandByPoint(Tl.max))}wi.getCenter(r);let l=0;for(let c=0,p=t.count;c<p;c++)kn.fromBufferAttribute(t,c),l=Math.max(l,r.distanceToSquared(kn));if(i)for(let c=0,p=i.length;c<p;c++){const m=i[c],_=this.morphTargetsRelative;for(let g=0,v=m.count;g<v;g++)kn.fromBufferAttribute(m,g),_&&(oo.fromBufferAttribute(t,g),kn.add(oo)),l=Math.max(l,r.distanceToSquared(kn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ma(new Float32Array(4*r.count),4));const p=this.getAttribute("tangent"),m=[],_=[];for(let K=0;K<r.count;K++)m[K]=new ot,_[K]=new ot;const g=new ot,v=new ot,y=new ot,E=new Ee,b=new Ee,w=new Ee,C=new ot,M=new ot;function x(K,F,O){g.fromBufferAttribute(r,K),v.fromBufferAttribute(r,F),y.fromBufferAttribute(r,O),E.fromBufferAttribute(c,K),b.fromBufferAttribute(c,F),w.fromBufferAttribute(c,O),v.sub(g),y.sub(g),b.sub(E),w.sub(E);const q=1/(b.x*w.y-w.x*b.y);isFinite(q)&&(C.copy(v).multiplyScalar(w.y).addScaledVector(y,-b.y).multiplyScalar(q),M.copy(y).multiplyScalar(b.x).addScaledVector(v,-w.x).multiplyScalar(q),m[K].add(C),m[F].add(C),m[O].add(C),_[K].add(M),_[F].add(M),_[O].add(M))}let V=this.groups;V.length===0&&(V=[{start:0,count:t.count}]);for(let K=0,F=V.length;K<F;++K){const O=V[K],q=O.start,rt=O.count;for(let dt=q,_t=q+rt;dt<_t;dt+=3)x(t.getX(dt+0),t.getX(dt+1),t.getX(dt+2))}const H=new ot,P=new ot,Y=new ot,z=new ot;function k(K){Y.fromBufferAttribute(l,K),z.copy(Y);const F=m[K];H.copy(F),H.sub(Y.multiplyScalar(Y.dot(F))).normalize(),P.crossVectors(z,F);const q=P.dot(_[K])<0?-1:1;p.setXYZW(K,H.x,H.y,H.z,q)}for(let K=0,F=V.length;K<F;++K){const O=V[K],q=O.start,rt=O.count;for(let dt=q,_t=q+rt;dt<_t;dt+=3)k(t.getX(dt+0)),k(t.getX(dt+1)),k(t.getX(dt+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new ma(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let E=0,b=r.count;E<b;E++)r.setXYZ(E,0,0,0);const l=new ot,c=new ot,p=new ot,m=new ot,_=new ot,g=new ot,v=new ot,y=new ot;if(t)for(let E=0,b=t.count;E<b;E+=3){const w=t.getX(E+0),C=t.getX(E+1),M=t.getX(E+2);l.fromBufferAttribute(i,w),c.fromBufferAttribute(i,C),p.fromBufferAttribute(i,M),v.subVectors(p,c),y.subVectors(l,c),v.cross(y),m.fromBufferAttribute(r,w),_.fromBufferAttribute(r,C),g.fromBufferAttribute(r,M),m.add(v),_.add(v),g.add(v),r.setXYZ(w,m.x,m.y,m.z),r.setXYZ(C,_.x,_.y,_.z),r.setXYZ(M,g.x,g.y,g.z)}else for(let E=0,b=i.count;E<b;E+=3)l.fromBufferAttribute(i,E+0),c.fromBufferAttribute(i,E+1),p.fromBufferAttribute(i,E+2),v.subVectors(p,c),y.subVectors(l,c),v.cross(y),r.setXYZ(E+0,v.x,v.y,v.z),r.setXYZ(E+1,v.x,v.y,v.z),r.setXYZ(E+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)kn.fromBufferAttribute(t,i),kn.normalize(),t.setXYZ(i,kn.x,kn.y,kn.z)}toNonIndexed(){function t(m,_){const g=m.array,v=m.itemSize,y=m.normalized,E=new g.constructor(_.length*v);let b=0,w=0;for(let C=0,M=_.length;C<M;C++){m.isInterleavedBufferAttribute?b=_[C]*m.data.stride+m.offset:b=_[C]*v;for(let x=0;x<v;x++)E[w++]=g[b++]}return new ma(E,v,y)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new ia,r=this.index.array,l=this.attributes;for(const m in l){const _=l[m],g=t(_,r);i.setAttribute(m,g)}const c=this.morphAttributes;for(const m in c){const _=[],g=c[m];for(let v=0,y=g.length;v<y;v++){const E=g[v],b=t(E,r);_.push(b)}i.morphAttributes[m]=_}i.morphTargetsRelative=this.morphTargetsRelative;const p=this.groups;for(let m=0,_=p.length;m<_;m++){const g=p[m];i.addGroup(g.start,g.count,g.materialIndex)}return i}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const _=this.parameters;for(const g in _)_[g]!==void 0&&(t[g]=_[g]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const _ in r){const g=r[_];t.data.attributes[_]=g.toJSON(t.data)}const l={};let c=!1;for(const _ in this.morphAttributes){const g=this.morphAttributes[_],v=[];for(let y=0,E=g.length;y<E;y++){const b=g[y];v.push(b.toJSON(t.data))}v.length>0&&(l[_]=v,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const p=this.groups;p.length>0&&(t.data.groups=JSON.parse(JSON.stringify(p)));const m=this.boundingSphere;return m!==null&&(t.data.boundingSphere={center:m.center.toArray(),radius:m.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone());const l=t.attributes;for(const g in l){const v=l[g];this.setAttribute(g,v.clone(i))}const c=t.morphAttributes;for(const g in c){const v=[],y=c[g];for(let E=0,b=y.length;E<b;E++)v.push(y[E].clone(i));this.morphAttributes[g]=v}this.morphTargetsRelative=t.morphTargetsRelative;const p=t.groups;for(let g=0,v=p.length;g<v;g++){const y=p[g];this.addGroup(y.start,y.count,y.materialIndex)}const m=t.boundingBox;m!==null&&(this.boundingBox=m.clone());const _=t.boundingSphere;return _!==null&&(this.boundingSphere=_.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const yv=new fn,is=new Fu,iu=new Mo,Sv=new ot,au=new ot,ru=new ot,su=new ot,vd=new ot,ou=new ot,xv=new ot,lu=new ot;class ea extends qn{constructor(t=new ia,i=new F0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,p=l.length;c<p;c++){const m=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[m]=c}}}}getVertexPosition(t,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,p=r.morphTargetsRelative;i.fromBufferAttribute(l,t);const m=this.morphTargetInfluences;if(c&&m){ou.set(0,0,0);for(let _=0,g=c.length;_<g;_++){const v=m[_],y=c[_];v!==0&&(vd.fromBufferAttribute(y,t),p?ou.addScaledVector(vd,v):ou.addScaledVector(vd.sub(i),v))}i.add(ou)}return i}raycast(t,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),iu.copy(r.boundingSphere),iu.applyMatrix4(c),is.copy(t.ray).recast(t.near),!(iu.containsPoint(is.origin)===!1&&(is.intersectSphere(iu,Sv)===null||is.origin.distanceToSquared(Sv)>(t.far-t.near)**2))&&(yv.copy(c).invert(),is.copy(t.ray).applyMatrix4(yv),!(r.boundingBox!==null&&is.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,i,is)))}_computeIntersections(t,i,r){let l;const c=this.geometry,p=this.material,m=c.index,_=c.attributes.position,g=c.attributes.uv,v=c.attributes.uv1,y=c.attributes.normal,E=c.groups,b=c.drawRange;if(m!==null)if(Array.isArray(p))for(let w=0,C=E.length;w<C;w++){const M=E[w],x=p[M.materialIndex],V=Math.max(M.start,b.start),H=Math.min(m.count,Math.min(M.start+M.count,b.start+b.count));for(let P=V,Y=H;P<Y;P+=3){const z=m.getX(P),k=m.getX(P+1),K=m.getX(P+2);l=cu(this,x,t,r,g,v,y,z,k,K),l&&(l.faceIndex=Math.floor(P/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const w=Math.max(0,b.start),C=Math.min(m.count,b.start+b.count);for(let M=w,x=C;M<x;M+=3){const V=m.getX(M),H=m.getX(M+1),P=m.getX(M+2);l=cu(this,p,t,r,g,v,y,V,H,P),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(_!==void 0)if(Array.isArray(p))for(let w=0,C=E.length;w<C;w++){const M=E[w],x=p[M.materialIndex],V=Math.max(M.start,b.start),H=Math.min(_.count,Math.min(M.start+M.count,b.start+b.count));for(let P=V,Y=H;P<Y;P+=3){const z=P,k=P+1,K=P+2;l=cu(this,x,t,r,g,v,y,z,k,K),l&&(l.faceIndex=Math.floor(P/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const w=Math.max(0,b.start),C=Math.min(_.count,b.start+b.count);for(let M=w,x=C;M<x;M+=3){const V=M,H=M+1,P=M+2;l=cu(this,p,t,r,g,v,y,V,H,P),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function kx(s,t,i,r,l,c,p,m){let _;if(t.side===gi?_=r.intersectTriangle(p,c,l,!0,m):_=r.intersectTriangle(l,c,p,t.side===wr,m),_===null)return null;lu.copy(m),lu.applyMatrix4(s.matrixWorld);const g=i.ray.origin.distanceTo(lu);return g<i.near||g>i.far?null:{distance:g,point:lu.clone(),object:s}}function cu(s,t,i,r,l,c,p,m,_,g){s.getVertexPosition(m,au),s.getVertexPosition(_,ru),s.getVertexPosition(g,su);const v=kx(s,t,i,r,au,ru,su,xv);if(v){const y=new ot;$i.getBarycoord(xv,au,ru,su,y),l&&(v.uv=$i.getInterpolatedAttribute(l,m,_,g,y,new Ee)),c&&(v.uv1=$i.getInterpolatedAttribute(c,m,_,g,y,new Ee)),p&&(v.normal=$i.getInterpolatedAttribute(p,m,_,g,y,new ot),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const E={a:m,b:_,c:g,normal:new ot,materialIndex:0};$i.getNormal(au,ru,su,E.normal),v.face=E,v.barycoord=y}return v}class Fl extends ia{constructor(t=1,i=1,r=1,l=1,c=1,p=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:p};const m=this;l=Math.floor(l),c=Math.floor(c),p=Math.floor(p);const _=[],g=[],v=[],y=[];let E=0,b=0;w("z","y","x",-1,-1,r,i,t,p,c,0),w("z","y","x",1,-1,r,i,-t,p,c,1),w("x","z","y",1,1,t,r,i,l,p,2),w("x","z","y",1,-1,t,r,-i,l,p,3),w("x","y","z",1,-1,t,i,r,l,c,4),w("x","y","z",-1,-1,t,i,-r,l,c,5),this.setIndex(_),this.setAttribute("position",new ci(g,3)),this.setAttribute("normal",new ci(v,3)),this.setAttribute("uv",new ci(y,2));function w(C,M,x,V,H,P,Y,z,k,K,F){const O=P/k,q=Y/K,rt=P/2,dt=Y/2,_t=z/2,Mt=k+1,X=K+1;let st=0,tt=0;const Lt=new ot;for(let I=0;I<X;I++){const ct=I*q-dt;for(let At=0;At<Mt;At++){const Dt=At*O-rt;Lt[C]=Dt*V,Lt[M]=ct*H,Lt[x]=_t,g.push(Lt.x,Lt.y,Lt.z),Lt[C]=0,Lt[M]=0,Lt[x]=z>0?1:-1,v.push(Lt.x,Lt.y,Lt.z),y.push(At/k),y.push(1-I/K),st+=1}}for(let I=0;I<K;I++)for(let ct=0;ct<k;ct++){const At=E+ct+Mt*I,Dt=E+ct+Mt*(I+1),at=E+(ct+1)+Mt*(I+1),bt=E+(ct+1)+Mt*I;_.push(At,Dt,bt),_.push(Dt,at,bt),tt+=6}m.addGroup(b,tt,F),b+=tt,E+=st}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fl(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function xo(s){const t={};for(const i in s){t[i]={};for(const r in s[i]){const l=s[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=l.clone():Array.isArray(l)?t[i][r]=l.slice():t[i][r]=l}}return t}function li(s){const t={};for(let i=0;i<s.length;i++){const r=xo(s[i]);for(const l in r)t[l]=r[l]}return t}function Xx(s){const t=[];for(let i=0;i<s.length;i++)t.push(s[i].clone());return t}function z0(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ge.workingColorSpace}const Wx={clone:xo,merge:li};var qx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Yx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Cr extends qa{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qx,this.fragmentShader=Yx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=xo(t.uniforms),this.uniformsGroups=Xx(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const p=this.uniforms[l].value;p&&p.isTexture?i.uniforms[l]={type:"t",value:p.toJSON(t).uuid}:p&&p.isColor?i.uniforms[l]={type:"c",value:p.getHex()}:p&&p.isVector2?i.uniforms[l]={type:"v2",value:p.toArray()}:p&&p.isVector3?i.uniforms[l]={type:"v3",value:p.toArray()}:p&&p.isVector4?i.uniforms[l]={type:"v4",value:p.toArray()}:p&&p.isMatrix3?i.uniforms[l]={type:"m3",value:p.toArray()}:p&&p.isMatrix4?i.uniforms[l]={type:"m4",value:p.toArray()}:i.uniforms[l]={value:p}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class H0 extends qn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new fn,this.projectionMatrix=new fn,this.projectionMatrixInverse=new fn,this.coordinateSystem=Xa}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Mr=new ot,Ev=new Ee,Mv=new Ee;class Gi extends H0{constructor(t=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=vp*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Tu*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return vp*2*Math.atan(Math.tan(Tu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,r){Mr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Mr.x,Mr.y).multiplyScalar(-t/Mr.z),Mr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Mr.x,Mr.y).multiplyScalar(-t/Mr.z)}getViewSize(t,i){return this.getViewBounds(t,Ev,Mv),i.subVectors(Mv,Ev)}setViewOffset(t,i,r,l,c,p){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=p,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Tu*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const p=this.view;if(this.view!==null&&this.view.enabled){const _=p.fullWidth,g=p.fullHeight;c+=p.offsetX*l/_,i-=p.offsetY*r/g,l*=p.width/_,r*=p.height/g}const m=this.filmOffset;m!==0&&(c+=t*m/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const lo=-90,co=1;class jx extends qn{constructor(t,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Gi(lo,co,t,i);l.layers=this.layers,this.add(l);const c=new Gi(lo,co,t,i);c.layers=this.layers,this.add(c);const p=new Gi(lo,co,t,i);p.layers=this.layers,this.add(p);const m=new Gi(lo,co,t,i);m.layers=this.layers,this.add(m);const _=new Gi(lo,co,t,i);_.layers=this.layers,this.add(_);const g=new Gi(lo,co,t,i);g.layers=this.layers,this.add(g)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[r,l,c,p,m,_]=i;for(const g of i)this.remove(g);if(t===Xa)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),p.up.set(0,0,1),p.lookAt(0,-1,0),m.up.set(0,1,0),m.lookAt(0,0,1),_.up.set(0,1,0),_.lookAt(0,0,-1);else if(t===Du)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),p.up.set(0,0,-1),p.lookAt(0,-1,0),m.up.set(0,-1,0),m.lookAt(0,0,1),_.up.set(0,-1,0),_.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const g of i)this.add(g),g.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,p,m,_,g,v]=this.children,y=t.getRenderTarget(),E=t.getActiveCubeFace(),b=t.getActiveMipmapLevel(),w=t.xr.enabled;t.xr.enabled=!1;const C=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,t.setRenderTarget(r,0,l),t.render(i,c),t.setRenderTarget(r,1,l),t.render(i,p),t.setRenderTarget(r,2,l),t.render(i,m),t.setRenderTarget(r,3,l),t.render(i,_),t.setRenderTarget(r,4,l),t.render(i,g),r.texture.generateMipmaps=C,t.setRenderTarget(r,5,l),t.render(i,v),t.setRenderTarget(y,E,b),t.xr.enabled=w,r.texture.needsPMREMUpdate=!0}}class G0 extends _i{constructor(t=[],i=vo,r,l,c,p,m,_,g,v){super(t,i,r,l,c,p,m,_,g,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Zx extends ds{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},l=[r,r,r,r,r,r];this.texture=new G0(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:pa}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Fl(5,5,5),c=new Cr({name:"CubemapFromEquirect",uniforms:xo(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:gi,blending:Ar});c.uniforms.tEquirect.value=i;const p=new ea(l,c),m=i.minFilter;return i.minFilter===fs&&(i.minFilter=pa),new jx(1,10,this).update(t,p),i.minFilter=m,p.geometry.dispose(),p.material.dispose(),this}clear(t,i=!0,r=!0,l=!0){const c=t.getRenderTarget();for(let p=0;p<6;p++)t.setRenderTarget(this,p),t.clear(i,r,l);t.setRenderTarget(c)}}class Rl extends qn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Kx={type:"move"};class yd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Rl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Rl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ot,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ot),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Rl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ot,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ot),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const r of t.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,r){let l=null,c=null,p=null;const m=this._targetRay,_=this._grip,g=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(g&&t.hand){p=!0;for(const C of t.hand.values()){const M=i.getJointPose(C,r),x=this._getHandJoint(g,C);M!==null&&(x.matrix.fromArray(M.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=M.radius),x.visible=M!==null}const v=g.joints["index-finger-tip"],y=g.joints["thumb-tip"],E=v.position.distanceTo(y.position),b=.02,w=.005;g.inputState.pinching&&E>b+w?(g.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!g.inputState.pinching&&E<=b-w&&(g.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else _!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,r),c!==null&&(_.matrix.fromArray(c.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,c.linearVelocity?(_.hasLinearVelocity=!0,_.linearVelocity.copy(c.linearVelocity)):_.hasLinearVelocity=!1,c.angularVelocity?(_.hasAngularVelocity=!0,_.angularVelocity.copy(c.angularVelocity)):_.hasAngularVelocity=!1));m!==null&&(l=i.getPose(t.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(m.matrix.fromArray(l.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,l.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(l.linearVelocity)):m.hasLinearVelocity=!1,l.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(l.angularVelocity)):m.hasAngularVelocity=!1,this.dispatchEvent(Kx)))}return m!==null&&(m.visible=l!==null),_!==null&&(_.visible=c!==null),g!==null&&(g.visible=p!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const r=new Rl;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[i.jointName]=r,t.add(r)}return t.joints[i.jointName]}}class Qx extends qn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _a,this.environmentIntensity=1,this.environmentRotation=new _a,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Sd=new ot,Jx=new ot,$x=new xe;class br{constructor(t=new ot(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,r,l){return this.normal.set(t,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,r){const l=Sd.subVectors(r,i).cross(Jx.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const r=t.delta(Sd),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(r,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return i<0&&r>0||r<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const r=i||$x.getNormalMatrix(t),l=this.coplanarPoint(Sd).applyMatrix4(t),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const as=new Mo,uu=new ot;class Up{constructor(t=new br,i=new br,r=new br,l=new br,c=new br,p=new br){this.planes=[t,i,r,l,c,p]}set(t,i,r,l,c,p){const m=this.planes;return m[0].copy(t),m[1].copy(i),m[2].copy(r),m[3].copy(l),m[4].copy(c),m[5].copy(p),this}copy(t){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,i=Xa){const r=this.planes,l=t.elements,c=l[0],p=l[1],m=l[2],_=l[3],g=l[4],v=l[5],y=l[6],E=l[7],b=l[8],w=l[9],C=l[10],M=l[11],x=l[12],V=l[13],H=l[14],P=l[15];if(r[0].setComponents(_-c,E-g,M-b,P-x).normalize(),r[1].setComponents(_+c,E+g,M+b,P+x).normalize(),r[2].setComponents(_+p,E+v,M+w,P+V).normalize(),r[3].setComponents(_-p,E-v,M-w,P-V).normalize(),r[4].setComponents(_-m,E-y,M-C,P-H).normalize(),i===Xa)r[5].setComponents(_+m,E+y,M+C,P+H).normalize();else if(i===Du)r[5].setComponents(m,y,C,H).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),as.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),as.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(as)}intersectsSprite(t){return as.center.set(0,0,0),as.radius=.7071067811865476,as.applyMatrix4(t.matrixWorld),this.intersectsSphere(as)}intersectsSphere(t){const i=this.planes,r=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(uu.x=l.normal.x>0?t.max.x:t.min.x,uu.y=l.normal.y>0?t.max.y:t.min.y,uu.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(uu)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ru extends qa{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ie(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Lu=new ot,Nu=new ot,bv=new fn,Al=new Fu,fu=new Mo,xd=new ot,Tv=new ot;class tE extends qn{constructor(t=new ia,i=new Ru){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,r=[0];for(let l=1,c=i.count;l<c;l++)Lu.fromBufferAttribute(i,l-1),Nu.fromBufferAttribute(i,l),r[l]=r[l-1],r[l]+=Lu.distanceTo(Nu);t.setAttribute("lineDistance",new ci(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const r=this.geometry,l=this.matrixWorld,c=t.params.Line.threshold,p=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),fu.copy(r.boundingSphere),fu.applyMatrix4(l),fu.radius+=c,t.ray.intersectsSphere(fu)===!1)return;bv.copy(l).invert(),Al.copy(t.ray).applyMatrix4(bv);const m=c/((this.scale.x+this.scale.y+this.scale.z)/3),_=m*m,g=this.isLineSegments?2:1,v=r.index,E=r.attributes.position;if(v!==null){const b=Math.max(0,p.start),w=Math.min(v.count,p.start+p.count);for(let C=b,M=w-1;C<M;C+=g){const x=v.getX(C),V=v.getX(C+1),H=hu(this,t,Al,_,x,V,C);H&&i.push(H)}if(this.isLineLoop){const C=v.getX(w-1),M=v.getX(b),x=hu(this,t,Al,_,C,M,w-1);x&&i.push(x)}}else{const b=Math.max(0,p.start),w=Math.min(E.count,p.start+p.count);for(let C=b,M=w-1;C<M;C+=g){const x=hu(this,t,Al,_,C,C+1,C);x&&i.push(x)}if(this.isLineLoop){const C=hu(this,t,Al,_,w-1,b,w-1);C&&i.push(C)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,p=l.length;c<p;c++){const m=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[m]=c}}}}}function hu(s,t,i,r,l,c,p){const m=s.geometry.attributes.position;if(Lu.fromBufferAttribute(m,l),Nu.fromBufferAttribute(m,c),i.distanceSqToSegment(Lu,Nu,xd,Tv)>r)return;xd.applyMatrix4(s.matrixWorld);const g=t.ray.origin.distanceTo(xd);if(!(g<t.near||g>t.far))return{distance:g,point:Tv.clone().applyMatrix4(s.matrixWorld),index:p,face:null,faceIndex:null,barycoord:null,object:s}}const Av=new ot,Rv=new ot;class wv extends tE{constructor(t,i){super(t,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,r=[];for(let l=0,c=i.count;l<c;l+=2)Av.fromBufferAttribute(i,l),Rv.fromBufferAttribute(i,l+1),r[l]=l===0?0:r[l-1],r[l+1]=r[l]+Av.distanceTo(Rv);t.setAttribute("lineDistance",new ci(r,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class wl extends qa{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ie(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Cv=new fn,yp=new Fu,du=new Mo,pu=new ot;class Ed extends qn{constructor(t=new ia,i=new wl){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,i){const r=this.geometry,l=this.matrixWorld,c=t.params.Points.threshold,p=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),du.copy(r.boundingSphere),du.applyMatrix4(l),du.radius+=c,t.ray.intersectsSphere(du)===!1)return;Cv.copy(l).invert(),yp.copy(t.ray).applyMatrix4(Cv);const m=c/((this.scale.x+this.scale.y+this.scale.z)/3),_=m*m,g=r.index,y=r.attributes.position;if(g!==null){const E=Math.max(0,p.start),b=Math.min(g.count,p.start+p.count);for(let w=E,C=b;w<C;w++){const M=g.getX(w);pu.fromBufferAttribute(y,M),Dv(pu,M,_,l,t,i,this)}}else{const E=Math.max(0,p.start),b=Math.min(y.count,p.start+p.count);for(let w=E,C=b;w<C;w++)pu.fromBufferAttribute(y,w),Dv(pu,w,_,l,t,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,p=l.length;c<p;c++){const m=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[m]=c}}}}}function Dv(s,t,i,r,l,c,p){const m=yp.distanceSqToPoint(s);if(m<i){const _=new ot;yp.closestPointToPoint(s,_),_.applyMatrix4(r);const g=l.ray.origin.distanceTo(_);if(g<l.near||g>l.far)return;c.push({distance:g,distanceToRay:Math.sqrt(m),point:_,index:t,face:null,faceIndex:null,barycoord:null,object:p})}}class V0 extends _i{constructor(t,i,r=hs,l,c,p,m=na,_=na,g,v=Ll){if(v!==Ll&&v!==Nl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,l,c,p,m,_,v,r,g),this.isDepthTexture=!0,this.image={width:t,height:i},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Dp(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Bu extends ia{constructor(t=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:l};const c=t/2,p=i/2,m=Math.floor(r),_=Math.floor(l),g=m+1,v=_+1,y=t/m,E=i/_,b=[],w=[],C=[],M=[];for(let x=0;x<v;x++){const V=x*E-p;for(let H=0;H<g;H++){const P=H*y-c;w.push(P,-V,0),C.push(0,0,1),M.push(H/m),M.push(1-x/_)}}for(let x=0;x<_;x++)for(let V=0;V<m;V++){const H=V+g*x,P=V+g*(x+1),Y=V+1+g*(x+1),z=V+1+g*x;b.push(H,P,z),b.push(P,Y,z)}this.setIndex(b),this.setAttribute("position",new ci(w,3)),this.setAttribute("normal",new ci(C,3)),this.setAttribute("uv",new ci(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Bu(t.width,t.height,t.widthSegments,t.heightSegments)}}class eE extends qa{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ie(16777215),this.specular=new Ie(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=D0,this.normalScale=new Ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _a,this.combine=Mp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class nE extends qa{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class iE extends qa{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Uv={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(this.files[s]=t)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class aE{constructor(t,i,r){const l=this;let c=!1,p=0,m=0,_;const g=[];this.onStart=void 0,this.onLoad=t,this.onProgress=i,this.onError=r,this.itemStart=function(v){m++,c===!1&&l.onStart!==void 0&&l.onStart(v,p,m),c=!0},this.itemEnd=function(v){p++,l.onProgress!==void 0&&l.onProgress(v,p,m),p===m&&(c=!1,l.onLoad!==void 0&&l.onLoad())},this.itemError=function(v){l.onError!==void 0&&l.onError(v)},this.resolveURL=function(v){return _?_(v):v},this.setURLModifier=function(v){return _=v,this},this.addHandler=function(v,y){return g.push(v,y),this},this.removeHandler=function(v){const y=g.indexOf(v);return y!==-1&&g.splice(y,2),this},this.getHandler=function(v){for(let y=0,E=g.length;y<E;y+=2){const b=g[y],w=g[y+1];if(b.global&&(b.lastIndex=0),b.test(v))return w}return null}}}const rE=new aE;class Lp{constructor(t){this.manager=t!==void 0?t:rE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,i){const r=this;return new Promise(function(l,c){r.load(t,l,i,c)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Lp.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ha={};class sE extends Error{constructor(t,i){super(t),this.response=i}}class oE extends Lp{constructor(t){super(t),this.mimeType="",this.responseType=""}load(t,i,r,l){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const c=Uv.get(t);if(c!==void 0)return this.manager.itemStart(t),setTimeout(()=>{i&&i(c),this.manager.itemEnd(t)},0),c;if(Ha[t]!==void 0){Ha[t].push({onLoad:i,onProgress:r,onError:l});return}Ha[t]=[],Ha[t].push({onLoad:i,onProgress:r,onError:l});const p=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),m=this.mimeType,_=this.responseType;fetch(p).then(g=>{if(g.status===200||g.status===0){if(g.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||g.body===void 0||g.body.getReader===void 0)return g;const v=Ha[t],y=g.body.getReader(),E=g.headers.get("X-File-Size")||g.headers.get("Content-Length"),b=E?parseInt(E):0,w=b!==0;let C=0;const M=new ReadableStream({start(x){V();function V(){y.read().then(({done:H,value:P})=>{if(H)x.close();else{C+=P.byteLength;const Y=new ProgressEvent("progress",{lengthComputable:w,loaded:C,total:b});for(let z=0,k=v.length;z<k;z++){const K=v[z];K.onProgress&&K.onProgress(Y)}x.enqueue(P),V()}},H=>{x.error(H)})}}});return new Response(M)}else throw new sE(`fetch for "${g.url}" responded with ${g.status}: ${g.statusText}`,g)}).then(g=>{switch(_){case"arraybuffer":return g.arrayBuffer();case"blob":return g.blob();case"document":return g.text().then(v=>new DOMParser().parseFromString(v,m));case"json":return g.json();default:if(m==="")return g.text();{const y=/charset="?([^;"\s]*)"?/i.exec(m),E=y&&y[1]?y[1].toLowerCase():void 0,b=new TextDecoder(E);return g.arrayBuffer().then(w=>b.decode(w))}}}).then(g=>{Uv.add(t,g);const v=Ha[t];delete Ha[t];for(let y=0,E=v.length;y<E;y++){const b=v[y];b.onLoad&&b.onLoad(g)}}).catch(g=>{const v=Ha[t];if(v===void 0)throw this.manager.itemError(t),g;delete Ha[t];for(let y=0,E=v.length;y<E;y++){const b=v[y];b.onError&&b.onError(g)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class lE extends qn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Ie(t),this.intensity=i}dispose(){}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}const Md=new fn,Lv=new ot,Nv=new ot;class cE{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ee(512,512),this.mapType=ga,this.map=null,this.mapPass=null,this.matrix=new fn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Up,this._frameExtents=new Ee(1,1),this._viewportCount=1,this._viewports=[new gn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,r=this.matrix;Lv.setFromMatrixPosition(t.matrixWorld),i.position.copy(Lv),Nv.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(Nv),i.updateMatrixWorld(),Md.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Md),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Md)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class k0 extends H0{constructor(t=-1,i=1,r=1,l=-1,c=.1,p=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=p,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,r,l,c,p){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=p,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-t,p=r+t,m=l+i,_=l-i;if(this.view!==null&&this.view.enabled){const g=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=g*this.view.offsetX,p=c+g*this.view.width,m-=v*this.view.offsetY,_=m-v*this.view.height}this.projectionMatrix.makeOrthographic(c,p,m,_,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class uE extends cE{constructor(){super(new k0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ov extends lE{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(qn.DEFAULT_UP),this.updateMatrix(),this.target=new qn,this.shadow=new uE}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class fE extends Gi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Pv{constructor(t=1,i=0,r=0){this.radius=t,this.phi=i,this.theta=r}set(t,i,r){return this.radius=t,this.phi=i,this.theta=r,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Oe(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,i,r){return this.radius=Math.sqrt(t*t+i*i+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,r),this.phi=Math.acos(Oe(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class hE extends ms{constructor(t,i=null){super(),this.object=t,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function Fv(s,t,i,r){const l=dE(r);switch(i){case T0:return s*t;case R0:return s*t/l.components*l.byteLength;case Rp:return s*t/l.components*l.byteLength;case w0:return s*t*2/l.components*l.byteLength;case wp:return s*t*2/l.components*l.byteLength;case A0:return s*t*3/l.components*l.byteLength;case ta:return s*t*4/l.components*l.byteLength;case Cp:return s*t*4/l.components*l.byteLength;case Su:case xu:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Eu:case Mu:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Yd:case Zd:return Math.max(s,16)*Math.max(t,8)/4;case qd:case jd:return Math.max(s,8)*Math.max(t,8)/2;case Kd:case Qd:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Jd:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case $d:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case tp:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case ep:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case np:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case ip:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case ap:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case rp:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case sp:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case op:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case lp:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case cp:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case up:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case fp:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case hp:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case bu:case dp:case pp:return Math.ceil(s/4)*Math.ceil(t/4)*16;case C0:case mp:return Math.ceil(s/4)*Math.ceil(t/4)*8;case gp:case _p:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function dE(s){switch(s){case ga:case E0:return{byteLength:1,components:1};case Dl:case M0:case Ol:return{byteLength:2,components:1};case Tp:case Ap:return{byteLength:2,components:4};case hs:case bp:case ka:return{byteLength:4,components:1};case b0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ep}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ep);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function X0(){let s=null,t=!1,i=null,r=null;function l(c,p){i(c,p),r=s.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(r=s.requestAnimationFrame(l),t=!0)},stop:function(){s.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){s=c}}}function pE(s){const t=new WeakMap;function i(m,_){const g=m.array,v=m.usage,y=g.byteLength,E=s.createBuffer();s.bindBuffer(_,E),s.bufferData(_,g,v),m.onUploadCallback();let b;if(g instanceof Float32Array)b=s.FLOAT;else if(g instanceof Uint16Array)m.isFloat16BufferAttribute?b=s.HALF_FLOAT:b=s.UNSIGNED_SHORT;else if(g instanceof Int16Array)b=s.SHORT;else if(g instanceof Uint32Array)b=s.UNSIGNED_INT;else if(g instanceof Int32Array)b=s.INT;else if(g instanceof Int8Array)b=s.BYTE;else if(g instanceof Uint8Array)b=s.UNSIGNED_BYTE;else if(g instanceof Uint8ClampedArray)b=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+g);return{buffer:E,type:b,bytesPerElement:g.BYTES_PER_ELEMENT,version:m.version,size:y}}function r(m,_,g){const v=_.array,y=_.updateRanges;if(s.bindBuffer(g,m),y.length===0)s.bufferSubData(g,0,v);else{y.sort((b,w)=>b.start-w.start);let E=0;for(let b=1;b<y.length;b++){const w=y[E],C=y[b];C.start<=w.start+w.count+1?w.count=Math.max(w.count,C.start+C.count-w.start):(++E,y[E]=C)}y.length=E+1;for(let b=0,w=y.length;b<w;b++){const C=y[b];s.bufferSubData(g,C.start*v.BYTES_PER_ELEMENT,v,C.start,C.count)}_.clearUpdateRanges()}_.onUploadCallback()}function l(m){return m.isInterleavedBufferAttribute&&(m=m.data),t.get(m)}function c(m){m.isInterleavedBufferAttribute&&(m=m.data);const _=t.get(m);_&&(s.deleteBuffer(_.buffer),t.delete(m))}function p(m,_){if(m.isInterleavedBufferAttribute&&(m=m.data),m.isGLBufferAttribute){const v=t.get(m);(!v||v.version<m.version)&&t.set(m,{buffer:m.buffer,type:m.type,bytesPerElement:m.elementSize,version:m.version});return}const g=t.get(m);if(g===void 0)t.set(m,i(m,_));else if(g.version<m.version){if(g.size!==m.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(g.buffer,m,_),g.version=m.version}}return{get:l,remove:c,update:p}}var mE=`#ifdef USE_ALPHAHASH
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
}`,Ae={alphahash_fragment:mE,alphahash_pars_fragment:gE,alphamap_fragment:_E,alphamap_pars_fragment:vE,alphatest_fragment:yE,alphatest_pars_fragment:SE,aomap_fragment:xE,aomap_pars_fragment:EE,batching_pars_vertex:ME,batching_vertex:bE,begin_vertex:TE,beginnormal_vertex:AE,bsdfs:RE,iridescence_fragment:wE,bumpmap_pars_fragment:CE,clipping_planes_fragment:DE,clipping_planes_pars_fragment:UE,clipping_planes_pars_vertex:LE,clipping_planes_vertex:NE,color_fragment:OE,color_pars_fragment:PE,color_pars_vertex:FE,color_vertex:BE,common:IE,cube_uv_reflection_fragment:zE,defaultnormal_vertex:HE,displacementmap_pars_vertex:GE,displacementmap_vertex:VE,emissivemap_fragment:kE,emissivemap_pars_fragment:XE,colorspace_fragment:WE,colorspace_pars_fragment:qE,envmap_fragment:YE,envmap_common_pars_fragment:jE,envmap_pars_fragment:ZE,envmap_pars_vertex:KE,envmap_physical_pars_fragment:oM,envmap_vertex:QE,fog_vertex:JE,fog_pars_vertex:$E,fog_fragment:tM,fog_pars_fragment:eM,gradientmap_pars_fragment:nM,lightmap_pars_fragment:iM,lights_lambert_fragment:aM,lights_lambert_pars_fragment:rM,lights_pars_begin:sM,lights_toon_fragment:lM,lights_toon_pars_fragment:cM,lights_phong_fragment:uM,lights_phong_pars_fragment:fM,lights_physical_fragment:hM,lights_physical_pars_fragment:dM,lights_fragment_begin:pM,lights_fragment_maps:mM,lights_fragment_end:gM,logdepthbuf_fragment:_M,logdepthbuf_pars_fragment:vM,logdepthbuf_pars_vertex:yM,logdepthbuf_vertex:SM,map_fragment:xM,map_pars_fragment:EM,map_particle_fragment:MM,map_particle_pars_fragment:bM,metalnessmap_fragment:TM,metalnessmap_pars_fragment:AM,morphinstance_vertex:RM,morphcolor_vertex:wM,morphnormal_vertex:CM,morphtarget_pars_vertex:DM,morphtarget_vertex:UM,normal_fragment_begin:LM,normal_fragment_maps:NM,normal_pars_fragment:OM,normal_pars_vertex:PM,normal_vertex:FM,normalmap_pars_fragment:BM,clearcoat_normal_fragment_begin:IM,clearcoat_normal_fragment_maps:zM,clearcoat_pars_fragment:HM,iridescence_pars_fragment:GM,opaque_fragment:VM,packing:kM,premultiplied_alpha_fragment:XM,project_vertex:WM,dithering_fragment:qM,dithering_pars_fragment:YM,roughnessmap_fragment:jM,roughnessmap_pars_fragment:ZM,shadowmap_pars_fragment:KM,shadowmap_pars_vertex:QM,shadowmap_vertex:JM,shadowmask_pars_fragment:$M,skinbase_vertex:tb,skinning_pars_vertex:eb,skinning_vertex:nb,skinnormal_vertex:ib,specularmap_fragment:ab,specularmap_pars_fragment:rb,tonemapping_fragment:sb,tonemapping_pars_fragment:ob,transmission_fragment:lb,transmission_pars_fragment:cb,uv_pars_fragment:ub,uv_pars_vertex:fb,uv_vertex:hb,worldpos_vertex:db,background_vert:pb,background_frag:mb,backgroundCube_vert:gb,backgroundCube_frag:_b,cube_vert:vb,cube_frag:yb,depth_vert:Sb,depth_frag:xb,distanceRGBA_vert:Eb,distanceRGBA_frag:Mb,equirect_vert:bb,equirect_frag:Tb,linedashed_vert:Ab,linedashed_frag:Rb,meshbasic_vert:wb,meshbasic_frag:Cb,meshlambert_vert:Db,meshlambert_frag:Ub,meshmatcap_vert:Lb,meshmatcap_frag:Nb,meshnormal_vert:Ob,meshnormal_frag:Pb,meshphong_vert:Fb,meshphong_frag:Bb,meshphysical_vert:Ib,meshphysical_frag:zb,meshtoon_vert:Hb,meshtoon_frag:Gb,points_vert:Vb,points_frag:kb,shadow_vert:Xb,shadow_frag:Wb,sprite_vert:qb,sprite_frag:Yb},qt={common:{diffuse:{value:new Ie(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new xe},alphaMap:{value:null},alphaMapTransform:{value:new xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new xe}},envmap:{envMap:{value:null},envMapRotation:{value:new xe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new xe},normalScale:{value:new Ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new xe},alphaTest:{value:0},uvTransform:{value:new xe}},sprite:{diffuse:{value:new Ie(16777215)},opacity:{value:1},center:{value:new Ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new xe},alphaMap:{value:null},alphaMapTransform:{value:new xe},alphaTest:{value:0}}},da={basic:{uniforms:li([qt.common,qt.specularmap,qt.envmap,qt.aomap,qt.lightmap,qt.fog]),vertexShader:Ae.meshbasic_vert,fragmentShader:Ae.meshbasic_frag},lambert:{uniforms:li([qt.common,qt.specularmap,qt.envmap,qt.aomap,qt.lightmap,qt.emissivemap,qt.bumpmap,qt.normalmap,qt.displacementmap,qt.fog,qt.lights,{emissive:{value:new Ie(0)}}]),vertexShader:Ae.meshlambert_vert,fragmentShader:Ae.meshlambert_frag},phong:{uniforms:li([qt.common,qt.specularmap,qt.envmap,qt.aomap,qt.lightmap,qt.emissivemap,qt.bumpmap,qt.normalmap,qt.displacementmap,qt.fog,qt.lights,{emissive:{value:new Ie(0)},specular:{value:new Ie(1118481)},shininess:{value:30}}]),vertexShader:Ae.meshphong_vert,fragmentShader:Ae.meshphong_frag},standard:{uniforms:li([qt.common,qt.envmap,qt.aomap,qt.lightmap,qt.emissivemap,qt.bumpmap,qt.normalmap,qt.displacementmap,qt.roughnessmap,qt.metalnessmap,qt.fog,qt.lights,{emissive:{value:new Ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ae.meshphysical_vert,fragmentShader:Ae.meshphysical_frag},toon:{uniforms:li([qt.common,qt.aomap,qt.lightmap,qt.emissivemap,qt.bumpmap,qt.normalmap,qt.displacementmap,qt.gradientmap,qt.fog,qt.lights,{emissive:{value:new Ie(0)}}]),vertexShader:Ae.meshtoon_vert,fragmentShader:Ae.meshtoon_frag},matcap:{uniforms:li([qt.common,qt.bumpmap,qt.normalmap,qt.displacementmap,qt.fog,{matcap:{value:null}}]),vertexShader:Ae.meshmatcap_vert,fragmentShader:Ae.meshmatcap_frag},points:{uniforms:li([qt.points,qt.fog]),vertexShader:Ae.points_vert,fragmentShader:Ae.points_frag},dashed:{uniforms:li([qt.common,qt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ae.linedashed_vert,fragmentShader:Ae.linedashed_frag},depth:{uniforms:li([qt.common,qt.displacementmap]),vertexShader:Ae.depth_vert,fragmentShader:Ae.depth_frag},normal:{uniforms:li([qt.common,qt.bumpmap,qt.normalmap,qt.displacementmap,{opacity:{value:1}}]),vertexShader:Ae.meshnormal_vert,fragmentShader:Ae.meshnormal_frag},sprite:{uniforms:li([qt.sprite,qt.fog]),vertexShader:Ae.sprite_vert,fragmentShader:Ae.sprite_frag},background:{uniforms:{uvTransform:{value:new xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ae.background_vert,fragmentShader:Ae.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new xe}},vertexShader:Ae.backgroundCube_vert,fragmentShader:Ae.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ae.cube_vert,fragmentShader:Ae.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ae.equirect_vert,fragmentShader:Ae.equirect_frag},distanceRGBA:{uniforms:li([qt.common,qt.displacementmap,{referencePosition:{value:new ot},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ae.distanceRGBA_vert,fragmentShader:Ae.distanceRGBA_frag},shadow:{uniforms:li([qt.lights,qt.fog,{color:{value:new Ie(0)},opacity:{value:1}}]),vertexShader:Ae.shadow_vert,fragmentShader:Ae.shadow_frag}};da.physical={uniforms:li([da.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new xe},clearcoatNormalScale:{value:new Ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new xe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new xe},sheen:{value:0},sheenColor:{value:new Ie(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new xe},transmissionSamplerSize:{value:new Ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new xe},attenuationDistance:{value:0},attenuationColor:{value:new Ie(0)},specularColor:{value:new Ie(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new xe},anisotropyVector:{value:new Ee},anisotropyMap:{value:null},anisotropyMapTransform:{value:new xe}}]),vertexShader:Ae.meshphysical_vert,fragmentShader:Ae.meshphysical_frag};const mu={r:0,b:0,g:0},rs=new _a,jb=new fn;function Zb(s,t,i,r,l,c,p){const m=new Ie(0);let _=c===!0?0:1,g,v,y=null,E=0,b=null;function w(H){let P=H.isScene===!0?H.background:null;return P&&P.isTexture&&(P=(H.backgroundBlurriness>0?i:t).get(P)),P}function C(H){let P=!1;const Y=w(H);Y===null?x(m,_):Y&&Y.isColor&&(x(Y,1),P=!0);const z=s.xr.getEnvironmentBlendMode();z==="additive"?r.buffers.color.setClear(0,0,0,1,p):z==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,p),(s.autoClear||P)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function M(H,P){const Y=w(P);Y&&(Y.isCubeTexture||Y.mapping===Pu)?(v===void 0&&(v=new ea(new Fl(1,1,1),new Cr({name:"BackgroundCubeMaterial",uniforms:xo(da.backgroundCube.uniforms),vertexShader:da.backgroundCube.vertexShader,fragmentShader:da.backgroundCube.fragmentShader,side:gi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(z,k,K){this.matrixWorld.copyPosition(K.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(v)),rs.copy(P.backgroundRotation),rs.x*=-1,rs.y*=-1,rs.z*=-1,Y.isCubeTexture&&Y.isRenderTargetTexture===!1&&(rs.y*=-1,rs.z*=-1),v.material.uniforms.envMap.value=Y,v.material.uniforms.flipEnvMap.value=Y.isCubeTexture&&Y.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(jb.makeRotationFromEuler(rs)),v.material.toneMapped=Ge.getTransfer(Y.colorSpace)!==nn,(y!==Y||E!==Y.version||b!==s.toneMapping)&&(v.material.needsUpdate=!0,y=Y,E=Y.version,b=s.toneMapping),v.layers.enableAll(),H.unshift(v,v.geometry,v.material,0,0,null)):Y&&Y.isTexture&&(g===void 0&&(g=new ea(new Bu(2,2),new Cr({name:"BackgroundMaterial",uniforms:xo(da.background.uniforms),vertexShader:da.background.vertexShader,fragmentShader:da.background.fragmentShader,side:wr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),Object.defineProperty(g.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(g)),g.material.uniforms.t2D.value=Y,g.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,g.material.toneMapped=Ge.getTransfer(Y.colorSpace)!==nn,Y.matrixAutoUpdate===!0&&Y.updateMatrix(),g.material.uniforms.uvTransform.value.copy(Y.matrix),(y!==Y||E!==Y.version||b!==s.toneMapping)&&(g.material.needsUpdate=!0,y=Y,E=Y.version,b=s.toneMapping),g.layers.enableAll(),H.unshift(g,g.geometry,g.material,0,0,null))}function x(H,P){H.getRGB(mu,z0(s)),r.buffers.color.setClear(mu.r,mu.g,mu.b,P,p)}function V(){v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0),g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0)}return{getClearColor:function(){return m},setClearColor:function(H,P=1){m.set(H),_=P,x(m,_)},getClearAlpha:function(){return _},setClearAlpha:function(H){_=H,x(m,_)},render:C,addToRenderList:M,dispose:V}}function Kb(s,t){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=E(null);let c=l,p=!1;function m(O,q,rt,dt,_t){let Mt=!1;const X=y(dt,rt,q);c!==X&&(c=X,g(c.object)),Mt=b(O,dt,rt,_t),Mt&&w(O,dt,rt,_t),_t!==null&&t.update(_t,s.ELEMENT_ARRAY_BUFFER),(Mt||p)&&(p=!1,P(O,q,rt,dt),_t!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(_t).buffer))}function _(){return s.createVertexArray()}function g(O){return s.bindVertexArray(O)}function v(O){return s.deleteVertexArray(O)}function y(O,q,rt){const dt=rt.wireframe===!0;let _t=r[O.id];_t===void 0&&(_t={},r[O.id]=_t);let Mt=_t[q.id];Mt===void 0&&(Mt={},_t[q.id]=Mt);let X=Mt[dt];return X===void 0&&(X=E(_()),Mt[dt]=X),X}function E(O){const q=[],rt=[],dt=[];for(let _t=0;_t<i;_t++)q[_t]=0,rt[_t]=0,dt[_t]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:rt,attributeDivisors:dt,object:O,attributes:{},index:null}}function b(O,q,rt,dt){const _t=c.attributes,Mt=q.attributes;let X=0;const st=rt.getAttributes();for(const tt in st)if(st[tt].location>=0){const I=_t[tt];let ct=Mt[tt];if(ct===void 0&&(tt==="instanceMatrix"&&O.instanceMatrix&&(ct=O.instanceMatrix),tt==="instanceColor"&&O.instanceColor&&(ct=O.instanceColor)),I===void 0||I.attribute!==ct||ct&&I.data!==ct.data)return!0;X++}return c.attributesNum!==X||c.index!==dt}function w(O,q,rt,dt){const _t={},Mt=q.attributes;let X=0;const st=rt.getAttributes();for(const tt in st)if(st[tt].location>=0){let I=Mt[tt];I===void 0&&(tt==="instanceMatrix"&&O.instanceMatrix&&(I=O.instanceMatrix),tt==="instanceColor"&&O.instanceColor&&(I=O.instanceColor));const ct={};ct.attribute=I,I&&I.data&&(ct.data=I.data),_t[tt]=ct,X++}c.attributes=_t,c.attributesNum=X,c.index=dt}function C(){const O=c.newAttributes;for(let q=0,rt=O.length;q<rt;q++)O[q]=0}function M(O){x(O,0)}function x(O,q){const rt=c.newAttributes,dt=c.enabledAttributes,_t=c.attributeDivisors;rt[O]=1,dt[O]===0&&(s.enableVertexAttribArray(O),dt[O]=1),_t[O]!==q&&(s.vertexAttribDivisor(O,q),_t[O]=q)}function V(){const O=c.newAttributes,q=c.enabledAttributes;for(let rt=0,dt=q.length;rt<dt;rt++)q[rt]!==O[rt]&&(s.disableVertexAttribArray(rt),q[rt]=0)}function H(O,q,rt,dt,_t,Mt,X){X===!0?s.vertexAttribIPointer(O,q,rt,_t,Mt):s.vertexAttribPointer(O,q,rt,dt,_t,Mt)}function P(O,q,rt,dt){C();const _t=dt.attributes,Mt=rt.getAttributes(),X=q.defaultAttributeValues;for(const st in Mt){const tt=Mt[st];if(tt.location>=0){let Lt=_t[st];if(Lt===void 0&&(st==="instanceMatrix"&&O.instanceMatrix&&(Lt=O.instanceMatrix),st==="instanceColor"&&O.instanceColor&&(Lt=O.instanceColor)),Lt!==void 0){const I=Lt.normalized,ct=Lt.itemSize,At=t.get(Lt);if(At===void 0)continue;const Dt=At.buffer,at=At.type,bt=At.bytesPerElement,Ut=at===s.INT||at===s.UNSIGNED_INT||Lt.gpuType===bp;if(Lt.isInterleavedBufferAttribute){const It=Lt.data,Pt=It.stride,ce=Lt.offset;if(It.isInstancedInterleavedBuffer){for(let ee=0;ee<tt.locationSize;ee++)x(tt.location+ee,It.meshPerAttribute);O.isInstancedMesh!==!0&&dt._maxInstanceCount===void 0&&(dt._maxInstanceCount=It.meshPerAttribute*It.count)}else for(let ee=0;ee<tt.locationSize;ee++)M(tt.location+ee);s.bindBuffer(s.ARRAY_BUFFER,Dt);for(let ee=0;ee<tt.locationSize;ee++)H(tt.location+ee,ct/tt.locationSize,at,I,Pt*bt,(ce+ct/tt.locationSize*ee)*bt,Ut)}else{if(Lt.isInstancedBufferAttribute){for(let It=0;It<tt.locationSize;It++)x(tt.location+It,Lt.meshPerAttribute);O.isInstancedMesh!==!0&&dt._maxInstanceCount===void 0&&(dt._maxInstanceCount=Lt.meshPerAttribute*Lt.count)}else for(let It=0;It<tt.locationSize;It++)M(tt.location+It);s.bindBuffer(s.ARRAY_BUFFER,Dt);for(let It=0;It<tt.locationSize;It++)H(tt.location+It,ct/tt.locationSize,at,I,ct*bt,ct/tt.locationSize*It*bt,Ut)}}else if(X!==void 0){const I=X[st];if(I!==void 0)switch(I.length){case 2:s.vertexAttrib2fv(tt.location,I);break;case 3:s.vertexAttrib3fv(tt.location,I);break;case 4:s.vertexAttrib4fv(tt.location,I);break;default:s.vertexAttrib1fv(tt.location,I)}}}}V()}function Y(){K();for(const O in r){const q=r[O];for(const rt in q){const dt=q[rt];for(const _t in dt)v(dt[_t].object),delete dt[_t];delete q[rt]}delete r[O]}}function z(O){if(r[O.id]===void 0)return;const q=r[O.id];for(const rt in q){const dt=q[rt];for(const _t in dt)v(dt[_t].object),delete dt[_t];delete q[rt]}delete r[O.id]}function k(O){for(const q in r){const rt=r[q];if(rt[O.id]===void 0)continue;const dt=rt[O.id];for(const _t in dt)v(dt[_t].object),delete dt[_t];delete rt[O.id]}}function K(){F(),p=!0,c!==l&&(c=l,g(c.object))}function F(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:m,reset:K,resetDefaultState:F,dispose:Y,releaseStatesOfGeometry:z,releaseStatesOfProgram:k,initAttributes:C,enableAttribute:M,disableUnusedAttributes:V}}function Qb(s,t,i){let r;function l(g){r=g}function c(g,v){s.drawArrays(r,g,v),i.update(v,r,1)}function p(g,v,y){y!==0&&(s.drawArraysInstanced(r,g,v,y),i.update(v,r,y))}function m(g,v,y){if(y===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,g,0,v,0,y);let b=0;for(let w=0;w<y;w++)b+=v[w];i.update(b,r,1)}function _(g,v,y,E){if(y===0)return;const b=t.get("WEBGL_multi_draw");if(b===null)for(let w=0;w<g.length;w++)p(g[w],v[w],E[w]);else{b.multiDrawArraysInstancedWEBGL(r,g,0,v,0,E,0,y);let w=0;for(let C=0;C<y;C++)w+=v[C]*E[C];i.update(w,r,1)}}this.setMode=l,this.render=c,this.renderInstances=p,this.renderMultiDraw=m,this.renderMultiDrawInstances=_}function Jb(s,t,i,r){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const k=t.get("EXT_texture_filter_anisotropic");l=s.getParameter(k.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function p(k){return!(k!==ta&&r.convert(k)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function m(k){const K=k===Ol&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(k!==ga&&r.convert(k)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&k!==ka&&!K)}function _(k){if(k==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";k="mediump"}return k==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let g=i.precision!==void 0?i.precision:"highp";const v=_(g);v!==g&&(console.warn("THREE.WebGLRenderer:",g,"not supported, using",v,"instead."),g=v);const y=i.logarithmicDepthBuffer===!0,E=i.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),b=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),w=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=s.getParameter(s.MAX_TEXTURE_SIZE),M=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),x=s.getParameter(s.MAX_VERTEX_ATTRIBS),V=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),H=s.getParameter(s.MAX_VARYING_VECTORS),P=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),Y=w>0,z=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:_,textureFormatReadable:p,textureTypeReadable:m,precision:g,logarithmicDepthBuffer:y,reverseDepthBuffer:E,maxTextures:b,maxVertexTextures:w,maxTextureSize:C,maxCubemapSize:M,maxAttributes:x,maxVertexUniforms:V,maxVaryings:H,maxFragmentUniforms:P,vertexTextures:Y,maxSamples:z}}function $b(s){const t=this;let i=null,r=0,l=!1,c=!1;const p=new br,m=new xe,_={value:null,needsUpdate:!1};this.uniform=_,this.numPlanes=0,this.numIntersection=0,this.init=function(y,E){const b=y.length!==0||E||r!==0||l;return l=E,r=y.length,b},this.beginShadows=function(){c=!0,v(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(y,E){i=v(y,E,0)},this.setState=function(y,E,b){const w=y.clippingPlanes,C=y.clipIntersection,M=y.clipShadows,x=s.get(y);if(!l||w===null||w.length===0||c&&!M)c?v(null):g();else{const V=c?0:r,H=V*4;let P=x.clippingState||null;_.value=P,P=v(w,E,H,b);for(let Y=0;Y!==H;++Y)P[Y]=i[Y];x.clippingState=P,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=V}};function g(){_.value!==i&&(_.value=i,_.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function v(y,E,b,w){const C=y!==null?y.length:0;let M=null;if(C!==0){if(M=_.value,w!==!0||M===null){const x=b+C*4,V=E.matrixWorldInverse;m.getNormalMatrix(V),(M===null||M.length<x)&&(M=new Float32Array(x));for(let H=0,P=b;H!==C;++H,P+=4)p.copy(y[H]).applyMatrix4(V,m),p.normal.toArray(M,P),M[P+3]=p.constant}_.value=M,_.needsUpdate=!0}return t.numPlanes=C,t.numIntersection=0,M}}function tT(s){let t=new WeakMap;function i(p,m){return m===Vd?p.mapping=vo:m===kd&&(p.mapping=yo),p}function r(p){if(p&&p.isTexture){const m=p.mapping;if(m===Vd||m===kd)if(t.has(p)){const _=t.get(p).texture;return i(_,p.mapping)}else{const _=p.image;if(_&&_.height>0){const g=new Zx(_.height);return g.fromEquirectangularTexture(s,p),t.set(p,g),p.addEventListener("dispose",l),i(g.texture,p.mapping)}else return null}}return p}function l(p){const m=p.target;m.removeEventListener("dispose",l);const _=t.get(m);_!==void 0&&(t.delete(m),_.dispose())}function c(){t=new WeakMap}return{get:r,dispose:c}}const ho=4,Bv=[.125,.215,.35,.446,.526,.582],cs=20,bd=new k0,Iv=new Ie;let Td=null,Ad=0,Rd=0,wd=!1;const os=(1+Math.sqrt(5))/2,uo=1/os,zv=[new ot(-os,uo,0),new ot(os,uo,0),new ot(-uo,0,os),new ot(uo,0,os),new ot(0,os,-uo),new ot(0,os,uo),new ot(-1,1,-1),new ot(1,1,-1),new ot(-1,1,1),new ot(1,1,1)],eT=new ot;class Hv{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,r=.1,l=100,c={}){const{size:p=256,position:m=eT}=c;Td=this._renderer.getRenderTarget(),Ad=this._renderer.getActiveCubeFace(),Rd=this._renderer.getActiveMipmapLevel(),wd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(p);const _=this._allocateTargets();return _.depthBuffer=!0,this._sceneToCubeUV(t,r,l,_,m),i>0&&this._blur(_,0,0,i),this._applyPMREM(_),this._cleanup(_),_}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=kv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Vv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Td,Ad,Rd),this._renderer.xr.enabled=wd,t.scissorTest=!1,gu(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===vo||t.mapping===yo?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Td=this._renderer.getRenderTarget(),Ad=this._renderer.getActiveCubeFace(),Rd=this._renderer.getActiveMipmapLevel(),wd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:pa,minFilter:pa,generateMipmaps:!1,type:Ol,format:ta,colorSpace:So,depthBuffer:!1},l=Gv(t,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Gv(t,i,r);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=nT(c)),this._blurMaterial=iT(c,t,i)}return l}_compileMaterial(t){const i=new ea(this._lodPlanes[0],t);this._renderer.compile(i,bd)}_sceneToCubeUV(t,i,r,l,c){const _=new Gi(90,1,i,r),g=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],y=this._renderer,E=y.autoClear,b=y.toneMapping;y.getClearColor(Iv),y.toneMapping=Rr,y.autoClear=!1;const w=new F0({name:"PMREM.Background",side:gi,depthWrite:!1,depthTest:!1}),C=new ea(new Fl,w);let M=!1;const x=t.background;x?x.isColor&&(w.color.copy(x),t.background=null,M=!0):(w.color.copy(Iv),M=!0);for(let V=0;V<6;V++){const H=V%3;H===0?(_.up.set(0,g[V],0),_.position.set(c.x,c.y,c.z),_.lookAt(c.x+v[V],c.y,c.z)):H===1?(_.up.set(0,0,g[V]),_.position.set(c.x,c.y,c.z),_.lookAt(c.x,c.y+v[V],c.z)):(_.up.set(0,g[V],0),_.position.set(c.x,c.y,c.z),_.lookAt(c.x,c.y,c.z+v[V]));const P=this._cubeSize;gu(l,H*P,V>2?P:0,P,P),y.setRenderTarget(l),M&&y.render(C,_),y.render(t,_)}C.geometry.dispose(),C.material.dispose(),y.toneMapping=b,y.autoClear=E,t.background=x}_textureToCubeUV(t,i){const r=this._renderer,l=t.mapping===vo||t.mapping===yo;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=kv()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Vv());const c=l?this._cubemapMaterial:this._equirectMaterial,p=new ea(this._lodPlanes[0],c),m=c.uniforms;m.envMap.value=t;const _=this._cubeSize;gu(i,0,0,3*_,2*_),r.setRenderTarget(i),r.render(p,bd)}_applyPMREM(t){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const p=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),m=zv[(l-c-1)%zv.length];this._blur(t,c-1,c,p,m)}i.autoClear=r}_blur(t,i,r,l,c){const p=this._pingPongRenderTarget;this._halfBlur(t,p,i,r,l,"latitudinal",c),this._halfBlur(p,t,r,r,l,"longitudinal",c)}_halfBlur(t,i,r,l,c,p,m){const _=this._renderer,g=this._blurMaterial;p!=="latitudinal"&&p!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,y=new ea(this._lodPlanes[l],g),E=g.uniforms,b=this._sizeLods[r]-1,w=isFinite(c)?Math.PI/(2*b):2*Math.PI/(2*cs-1),C=c/w,M=isFinite(c)?1+Math.floor(v*C):cs;M>cs&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${cs}`);const x=[];let V=0;for(let k=0;k<cs;++k){const K=k/C,F=Math.exp(-K*K/2);x.push(F),k===0?V+=F:k<M&&(V+=2*F)}for(let k=0;k<x.length;k++)x[k]=x[k]/V;E.envMap.value=t.texture,E.samples.value=M,E.weights.value=x,E.latitudinal.value=p==="latitudinal",m&&(E.poleAxis.value=m);const{_lodMax:H}=this;E.dTheta.value=w,E.mipInt.value=H-r;const P=this._sizeLods[l],Y=3*P*(l>H-ho?l-H+ho:0),z=4*(this._cubeSize-P);gu(i,Y,z,3*P,2*P),_.setRenderTarget(i),_.render(y,bd)}}function nT(s){const t=[],i=[],r=[];let l=s;const c=s-ho+1+Bv.length;for(let p=0;p<c;p++){const m=Math.pow(2,l);i.push(m);let _=1/m;p>s-ho?_=Bv[p-s+ho-1]:p===0&&(_=0),r.push(_);const g=1/(m-2),v=-g,y=1+g,E=[v,v,y,v,y,y,v,v,y,y,v,y],b=6,w=6,C=3,M=2,x=1,V=new Float32Array(C*w*b),H=new Float32Array(M*w*b),P=new Float32Array(x*w*b);for(let z=0;z<b;z++){const k=z%3*2/3-1,K=z>2?0:-1,F=[k,K,0,k+2/3,K,0,k+2/3,K+1,0,k,K,0,k+2/3,K+1,0,k,K+1,0];V.set(F,C*w*z),H.set(E,M*w*z);const O=[z,z,z,z,z,z];P.set(O,x*w*z)}const Y=new ia;Y.setAttribute("position",new ma(V,C)),Y.setAttribute("uv",new ma(H,M)),Y.setAttribute("faceIndex",new ma(P,x)),t.push(Y),l>ho&&l--}return{lodPlanes:t,sizeLods:i,sigmas:r}}function Gv(s,t,i){const r=new ds(s,t,i);return r.texture.mapping=Pu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function gu(s,t,i,r,l){s.viewport.set(t,i,r,l),s.scissor.set(t,i,r,l)}function iT(s,t,i){const r=new Float32Array(cs),l=new ot(0,1,0);return new Cr({name:"SphericalGaussianBlur",defines:{n:cs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Np(),fragmentShader:`

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
	`}function aT(s){let t=new WeakMap,i=null;function r(m){if(m&&m.isTexture){const _=m.mapping,g=_===Vd||_===kd,v=_===vo||_===yo;if(g||v){let y=t.get(m);const E=y!==void 0?y.texture.pmremVersion:0;if(m.isRenderTargetTexture&&m.pmremVersion!==E)return i===null&&(i=new Hv(s)),y=g?i.fromEquirectangular(m,y):i.fromCubemap(m,y),y.texture.pmremVersion=m.pmremVersion,t.set(m,y),y.texture;if(y!==void 0)return y.texture;{const b=m.image;return g&&b&&b.height>0||v&&b&&l(b)?(i===null&&(i=new Hv(s)),y=g?i.fromEquirectangular(m):i.fromCubemap(m),y.texture.pmremVersion=m.pmremVersion,t.set(m,y),m.addEventListener("dispose",c),y.texture):null}}}return m}function l(m){let _=0;const g=6;for(let v=0;v<g;v++)m[v]!==void 0&&_++;return _===g}function c(m){const _=m.target;_.removeEventListener("dispose",c);const g=t.get(_);g!==void 0&&(t.delete(_),g.dispose())}function p(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:p}}function rT(s){const t={};function i(r){if(t[r]!==void 0)return t[r];let l;switch(r){case"WEBGL_depth_texture":l=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=s.getExtension(r)}return t[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&Au("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function sT(s,t,i,r){const l={},c=new WeakMap;function p(y){const E=y.target;E.index!==null&&t.remove(E.index);for(const w in E.attributes)t.remove(E.attributes[w]);E.removeEventListener("dispose",p),delete l[E.id];const b=c.get(E);b&&(t.remove(b),c.delete(E)),r.releaseStatesOfGeometry(E),E.isInstancedBufferGeometry===!0&&delete E._maxInstanceCount,i.memory.geometries--}function m(y,E){return l[E.id]===!0||(E.addEventListener("dispose",p),l[E.id]=!0,i.memory.geometries++),E}function _(y){const E=y.attributes;for(const b in E)t.update(E[b],s.ARRAY_BUFFER)}function g(y){const E=[],b=y.index,w=y.attributes.position;let C=0;if(b!==null){const V=b.array;C=b.version;for(let H=0,P=V.length;H<P;H+=3){const Y=V[H+0],z=V[H+1],k=V[H+2];E.push(Y,z,z,k,k,Y)}}else if(w!==void 0){const V=w.array;C=w.version;for(let H=0,P=V.length/3-1;H<P;H+=3){const Y=H+0,z=H+1,k=H+2;E.push(Y,z,z,k,k,Y)}}else return;const M=new(L0(E)?I0:B0)(E,1);M.version=C;const x=c.get(y);x&&t.remove(x),c.set(y,M)}function v(y){const E=c.get(y);if(E){const b=y.index;b!==null&&E.version<b.version&&g(y)}else g(y);return c.get(y)}return{get:m,update:_,getWireframeAttribute:v}}function oT(s,t,i){let r;function l(E){r=E}let c,p;function m(E){c=E.type,p=E.bytesPerElement}function _(E,b){s.drawElements(r,b,c,E*p),i.update(b,r,1)}function g(E,b,w){w!==0&&(s.drawElementsInstanced(r,b,c,E*p,w),i.update(b,r,w))}function v(E,b,w){if(w===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,b,0,c,E,0,w);let M=0;for(let x=0;x<w;x++)M+=b[x];i.update(M,r,1)}function y(E,b,w,C){if(w===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let x=0;x<E.length;x++)g(E[x]/p,b[x],C[x]);else{M.multiDrawElementsInstancedWEBGL(r,b,0,c,E,0,C,0,w);let x=0;for(let V=0;V<w;V++)x+=b[V]*C[V];i.update(x,r,1)}}this.setMode=l,this.setIndex=m,this.render=_,this.renderInstances=g,this.renderMultiDraw=v,this.renderMultiDrawInstances=y}function lT(s){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,p,m){switch(i.calls++,p){case s.TRIANGLES:i.triangles+=m*(c/3);break;case s.LINES:i.lines+=m*(c/2);break;case s.LINE_STRIP:i.lines+=m*(c-1);break;case s.LINE_LOOP:i.lines+=m*c;break;case s.POINTS:i.points+=m*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",p);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:r}}function cT(s,t,i){const r=new WeakMap,l=new gn;function c(p,m,_){const g=p.morphTargetInfluences,v=m.morphAttributes.position||m.morphAttributes.normal||m.morphAttributes.color,y=v!==void 0?v.length:0;let E=r.get(m);if(E===void 0||E.count!==y){let F=function(){k.dispose(),r.delete(m),m.removeEventListener("dispose",F)};E!==void 0&&E.texture.dispose();const b=m.morphAttributes.position!==void 0,w=m.morphAttributes.normal!==void 0,C=m.morphAttributes.color!==void 0,M=m.morphAttributes.position||[],x=m.morphAttributes.normal||[],V=m.morphAttributes.color||[];let H=0;b===!0&&(H=1),w===!0&&(H=2),C===!0&&(H=3);let P=m.attributes.position.count*H,Y=1;P>t.maxTextureSize&&(Y=Math.ceil(P/t.maxTextureSize),P=t.maxTextureSize);const z=new Float32Array(P*Y*4*y),k=new N0(z,P,Y,y);k.type=ka,k.needsUpdate=!0;const K=H*4;for(let O=0;O<y;O++){const q=M[O],rt=x[O],dt=V[O],_t=P*Y*4*O;for(let Mt=0;Mt<q.count;Mt++){const X=Mt*K;b===!0&&(l.fromBufferAttribute(q,Mt),z[_t+X+0]=l.x,z[_t+X+1]=l.y,z[_t+X+2]=l.z,z[_t+X+3]=0),w===!0&&(l.fromBufferAttribute(rt,Mt),z[_t+X+4]=l.x,z[_t+X+5]=l.y,z[_t+X+6]=l.z,z[_t+X+7]=0),C===!0&&(l.fromBufferAttribute(dt,Mt),z[_t+X+8]=l.x,z[_t+X+9]=l.y,z[_t+X+10]=l.z,z[_t+X+11]=dt.itemSize===4?l.w:1)}}E={count:y,texture:k,size:new Ee(P,Y)},r.set(m,E),m.addEventListener("dispose",F)}if(p.isInstancedMesh===!0&&p.morphTexture!==null)_.getUniforms().setValue(s,"morphTexture",p.morphTexture,i);else{let b=0;for(let C=0;C<g.length;C++)b+=g[C];const w=m.morphTargetsRelative?1:1-b;_.getUniforms().setValue(s,"morphTargetBaseInfluence",w),_.getUniforms().setValue(s,"morphTargetInfluences",g)}_.getUniforms().setValue(s,"morphTargetsTexture",E.texture,i),_.getUniforms().setValue(s,"morphTargetsTextureSize",E.size)}return{update:c}}function uT(s,t,i,r){let l=new WeakMap;function c(_){const g=r.render.frame,v=_.geometry,y=t.get(_,v);if(l.get(y)!==g&&(t.update(y),l.set(y,g)),_.isInstancedMesh&&(_.hasEventListener("dispose",m)===!1&&_.addEventListener("dispose",m),l.get(_)!==g&&(i.update(_.instanceMatrix,s.ARRAY_BUFFER),_.instanceColor!==null&&i.update(_.instanceColor,s.ARRAY_BUFFER),l.set(_,g))),_.isSkinnedMesh){const E=_.skeleton;l.get(E)!==g&&(E.update(),l.set(E,g))}return y}function p(){l=new WeakMap}function m(_){const g=_.target;g.removeEventListener("dispose",m),i.remove(g.instanceMatrix),g.instanceColor!==null&&i.remove(g.instanceColor)}return{update:c,dispose:p}}const W0=new _i,Xv=new V0(1,1),q0=new N0,Y0=new Lx,j0=new G0,Wv=[],qv=[],Yv=new Float32Array(16),jv=new Float32Array(9),Zv=new Float32Array(4);function bo(s,t,i){const r=s[0];if(r<=0||r>0)return s;const l=t*i;let c=Wv[l];if(c===void 0&&(c=new Float32Array(l),Wv[l]=c),t!==0){r.toArray(c,0);for(let p=1,m=0;p!==t;++p)m+=i,s[p].toArray(c,m)}return c}function Pn(s,t){if(s.length!==t.length)return!1;for(let i=0,r=s.length;i<r;i++)if(s[i]!==t[i])return!1;return!0}function Fn(s,t){for(let i=0,r=t.length;i<r;i++)s[i]=t[i]}function Iu(s,t){let i=qv[t];i===void 0&&(i=new Int32Array(t),qv[t]=i);for(let r=0;r!==t;++r)i[r]=s.allocateTextureUnit();return i}function fT(s,t){const i=this.cache;i[0]!==t&&(s.uniform1f(this.addr,t),i[0]=t)}function hT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Pn(i,t))return;s.uniform2fv(this.addr,t),Fn(i,t)}}function dT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(Pn(i,t))return;s.uniform3fv(this.addr,t),Fn(i,t)}}function pT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Pn(i,t))return;s.uniform4fv(this.addr,t),Fn(i,t)}}function mT(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(Pn(i,t))return;s.uniformMatrix2fv(this.addr,!1,t),Fn(i,t)}else{if(Pn(i,r))return;Zv.set(r),s.uniformMatrix2fv(this.addr,!1,Zv),Fn(i,r)}}function gT(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(Pn(i,t))return;s.uniformMatrix3fv(this.addr,!1,t),Fn(i,t)}else{if(Pn(i,r))return;jv.set(r),s.uniformMatrix3fv(this.addr,!1,jv),Fn(i,r)}}function _T(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(Pn(i,t))return;s.uniformMatrix4fv(this.addr,!1,t),Fn(i,t)}else{if(Pn(i,r))return;Yv.set(r),s.uniformMatrix4fv(this.addr,!1,Yv),Fn(i,r)}}function vT(s,t){const i=this.cache;i[0]!==t&&(s.uniform1i(this.addr,t),i[0]=t)}function yT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Pn(i,t))return;s.uniform2iv(this.addr,t),Fn(i,t)}}function ST(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Pn(i,t))return;s.uniform3iv(this.addr,t),Fn(i,t)}}function xT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Pn(i,t))return;s.uniform4iv(this.addr,t),Fn(i,t)}}function ET(s,t){const i=this.cache;i[0]!==t&&(s.uniform1ui(this.addr,t),i[0]=t)}function MT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Pn(i,t))return;s.uniform2uiv(this.addr,t),Fn(i,t)}}function bT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Pn(i,t))return;s.uniform3uiv(this.addr,t),Fn(i,t)}}function TT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Pn(i,t))return;s.uniform4uiv(this.addr,t),Fn(i,t)}}function AT(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let c;this.type===s.SAMPLER_2D_SHADOW?(Xv.compareFunction=U0,c=Xv):c=W0,i.setTexture2D(t||c,l)}function RT(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(t||Y0,l)}function wT(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(t||j0,l)}function CT(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(t||q0,l)}function DT(s){switch(s){case 5126:return fT;case 35664:return hT;case 35665:return dT;case 35666:return pT;case 35674:return mT;case 35675:return gT;case 35676:return _T;case 5124:case 35670:return vT;case 35667:case 35671:return yT;case 35668:case 35672:return ST;case 35669:case 35673:return xT;case 5125:return ET;case 36294:return MT;case 36295:return bT;case 36296:return TT;case 35678:case 36198:case 36298:case 36306:case 35682:return AT;case 35679:case 36299:case 36307:return RT;case 35680:case 36300:case 36308:case 36293:return wT;case 36289:case 36303:case 36311:case 36292:return CT}}function UT(s,t){s.uniform1fv(this.addr,t)}function LT(s,t){const i=bo(t,this.size,2);s.uniform2fv(this.addr,i)}function NT(s,t){const i=bo(t,this.size,3);s.uniform3fv(this.addr,i)}function OT(s,t){const i=bo(t,this.size,4);s.uniform4fv(this.addr,i)}function PT(s,t){const i=bo(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function FT(s,t){const i=bo(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function BT(s,t){const i=bo(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function IT(s,t){s.uniform1iv(this.addr,t)}function zT(s,t){s.uniform2iv(this.addr,t)}function HT(s,t){s.uniform3iv(this.addr,t)}function GT(s,t){s.uniform4iv(this.addr,t)}function VT(s,t){s.uniform1uiv(this.addr,t)}function kT(s,t){s.uniform2uiv(this.addr,t)}function XT(s,t){s.uniform3uiv(this.addr,t)}function WT(s,t){s.uniform4uiv(this.addr,t)}function qT(s,t,i){const r=this.cache,l=t.length,c=Iu(i,l);Pn(r,c)||(s.uniform1iv(this.addr,c),Fn(r,c));for(let p=0;p!==l;++p)i.setTexture2D(t[p]||W0,c[p])}function YT(s,t,i){const r=this.cache,l=t.length,c=Iu(i,l);Pn(r,c)||(s.uniform1iv(this.addr,c),Fn(r,c));for(let p=0;p!==l;++p)i.setTexture3D(t[p]||Y0,c[p])}function jT(s,t,i){const r=this.cache,l=t.length,c=Iu(i,l);Pn(r,c)||(s.uniform1iv(this.addr,c),Fn(r,c));for(let p=0;p!==l;++p)i.setTextureCube(t[p]||j0,c[p])}function ZT(s,t,i){const r=this.cache,l=t.length,c=Iu(i,l);Pn(r,c)||(s.uniform1iv(this.addr,c),Fn(r,c));for(let p=0;p!==l;++p)i.setTexture2DArray(t[p]||q0,c[p])}function KT(s){switch(s){case 5126:return UT;case 35664:return LT;case 35665:return NT;case 35666:return OT;case 35674:return PT;case 35675:return FT;case 35676:return BT;case 5124:case 35670:return IT;case 35667:case 35671:return zT;case 35668:case 35672:return HT;case 35669:case 35673:return GT;case 5125:return VT;case 36294:return kT;case 36295:return XT;case 36296:return WT;case 35678:case 36198:case 36298:case 36306:case 35682:return qT;case 35679:case 36299:case 36307:return YT;case 35680:case 36300:case 36308:case 36293:return jT;case 36289:case 36303:case 36311:case 36292:return ZT}}class QT{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.setValue=DT(i.type)}}class JT{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=KT(i.type)}}class $T{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,r){const l=this.seq;for(let c=0,p=l.length;c!==p;++c){const m=l[c];m.setValue(t,i[m.id],r)}}}const Cd=/(\w+)(\])?(\[|\.)?/g;function Kv(s,t){s.seq.push(t),s.map[t.id]=t}function t1(s,t,i){const r=s.name,l=r.length;for(Cd.lastIndex=0;;){const c=Cd.exec(r),p=Cd.lastIndex;let m=c[1];const _=c[2]==="]",g=c[3];if(_&&(m=m|0),g===void 0||g==="["&&p+2===l){Kv(i,g===void 0?new QT(m,s,t):new JT(m,s,t));break}else{let y=i.map[m];y===void 0&&(y=new $T(m),Kv(i,y)),i=y}}}class wu{constructor(t,i){this.seq=[],this.map={};const r=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const c=t.getActiveUniform(i,l),p=t.getUniformLocation(i,c.name);t1(c,p,this)}}setValue(t,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(t,r,l)}setOptional(t,i,r){const l=i[r];l!==void 0&&this.setValue(t,r,l)}static upload(t,i,r,l){for(let c=0,p=i.length;c!==p;++c){const m=i[c],_=r[m.id];_.needsUpdate!==!1&&m.setValue(t,_.value,l)}}static seqWithValue(t,i){const r=[];for(let l=0,c=t.length;l!==c;++l){const p=t[l];p.id in i&&r.push(p)}return r}}function Qv(s,t,i){const r=s.createShader(t);return s.shaderSource(r,i),s.compileShader(r),r}const e1=37297;let n1=0;function i1(s,t){const i=s.split(`
`),r=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let p=l;p<c;p++){const m=p+1;r.push(`${m===t?">":" "} ${m}: ${i[p]}`)}return r.join(`
`)}const Jv=new xe;function a1(s){Ge._getMatrix(Jv,Ge.workingColorSpace,s);const t=`mat3( ${Jv.elements.map(i=>i.toFixed(4))} )`;switch(Ge.getTransfer(s)){case Cu:return[t,"LinearTransferOETF"];case nn:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function $v(s,t,i){const r=s.getShaderParameter(t,s.COMPILE_STATUS),l=s.getShaderInfoLog(t).trim();if(r&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const p=parseInt(c[1]);return i.toUpperCase()+`

`+l+`

`+i1(s.getShaderSource(t),p)}else return l}function r1(s,t){const i=a1(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function s1(s,t){let i;switch(t){case ix:i="Linear";break;case ax:i="Reinhard";break;case rx:i="Cineon";break;case sx:i="ACESFilmic";break;case lx:i="AgX";break;case cx:i="Neutral";break;case ox:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const _u=new ot;function o1(){Ge.getLuminanceCoefficients(_u);const s=_u.x.toFixed(4),t=_u.y.toFixed(4),i=_u.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function l1(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Cl).join(`
`)}function c1(s){const t=[];for(const i in s){const r=s[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function u1(s,t){const i={},r=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=s.getActiveAttrib(t,l),p=c.name;let m=1;c.type===s.FLOAT_MAT2&&(m=2),c.type===s.FLOAT_MAT3&&(m=3),c.type===s.FLOAT_MAT4&&(m=4),i[p]={type:c.type,location:s.getAttribLocation(t,p),locationSize:m}}return i}function Cl(s){return s!==""}function t0(s,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function e0(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const f1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sp(s){return s.replace(f1,d1)}const h1=new Map;function d1(s,t){let i=Ae[t];if(i===void 0){const r=h1.get(t);if(r!==void 0)i=Ae[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return Sp(i)}const p1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function n0(s){return s.replace(p1,m1)}function m1(s,t,i,r){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function i0(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}function g1(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===S0?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===FS?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Ga&&(t="SHADOWMAP_TYPE_VSM"),t}function _1(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case vo:case yo:t="ENVMAP_TYPE_CUBE";break;case Pu:t="ENVMAP_TYPE_CUBE_UV";break}return t}function v1(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case yo:t="ENVMAP_MODE_REFRACTION";break}return t}function y1(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Mp:t="ENVMAP_BLENDING_MULTIPLY";break;case ex:t="ENVMAP_BLENDING_MIX";break;case nx:t="ENVMAP_BLENDING_ADD";break}return t}function S1(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),7*16)),texelHeight:r,maxMip:i}}function x1(s,t,i,r){const l=s.getContext(),c=i.defines;let p=i.vertexShader,m=i.fragmentShader;const _=g1(i),g=_1(i),v=v1(i),y=y1(i),E=S1(i),b=l1(i),w=c1(c),C=l.createProgram();let M,x,V=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,w].filter(Cl).join(`
`),M.length>0&&(M+=`
`),x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,w].filter(Cl).join(`
`),x.length>0&&(x+=`
`)):(M=[i0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,w,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+_:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Cl).join(`
`),x=[i0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,w,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.envMap?"#define "+v:"",i.envMap?"#define "+y:"",E?"#define CUBEUV_TEXEL_WIDTH "+E.texelWidth:"",E?"#define CUBEUV_TEXEL_HEIGHT "+E.texelHeight:"",E?"#define CUBEUV_MAX_MIP "+E.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+_:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Rr?"#define TONE_MAPPING":"",i.toneMapping!==Rr?Ae.tonemapping_pars_fragment:"",i.toneMapping!==Rr?s1("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Ae.colorspace_pars_fragment,r1("linearToOutputTexel",i.outputColorSpace),o1(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Cl).join(`
`)),p=Sp(p),p=t0(p,i),p=e0(p,i),m=Sp(m),m=t0(m,i),m=e0(m,i),p=n0(p),m=n0(m),i.isRawShaderMaterial!==!0&&(V=`#version 300 es
`,M=[b,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,x=["#define varying in",i.glslVersion===sv?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===sv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const H=V+M+p,P=V+x+m,Y=Qv(l,l.VERTEX_SHADER,H),z=Qv(l,l.FRAGMENT_SHADER,P);l.attachShader(C,Y),l.attachShader(C,z),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function k(q){if(s.debug.checkShaderErrors){const rt=l.getProgramInfoLog(C).trim(),dt=l.getShaderInfoLog(Y).trim(),_t=l.getShaderInfoLog(z).trim();let Mt=!0,X=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(Mt=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,C,Y,z);else{const st=$v(l,Y,"vertex"),tt=$v(l,z,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+q.name+`
Material Type: `+q.type+`

Program Info Log: `+rt+`
`+st+`
`+tt)}else rt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",rt):(dt===""||_t==="")&&(X=!1);X&&(q.diagnostics={runnable:Mt,programLog:rt,vertexShader:{log:dt,prefix:M},fragmentShader:{log:_t,prefix:x}})}l.deleteShader(Y),l.deleteShader(z),K=new wu(l,C),F=u1(l,C)}let K;this.getUniforms=function(){return K===void 0&&k(this),K};let F;this.getAttributes=function(){return F===void 0&&k(this),F};let O=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=l.getProgramParameter(C,e1)),O},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=n1++,this.cacheKey=t,this.usedTimes=1,this.program=C,this.vertexShader=Y,this.fragmentShader=z,this}let E1=0;class M1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,r=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(r),p=this._getShaderCacheForMaterial(t);return p.has(l)===!1&&(p.add(l),l.usedTimes++),p.has(c)===!1&&(p.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let r=i.get(t);return r===void 0&&(r=new Set,i.set(t,r)),r}_getShaderStage(t){const i=this.shaderCache;let r=i.get(t);return r===void 0&&(r=new b1(t),i.set(t,r)),r}}class b1{constructor(t){this.id=E1++,this.code=t,this.usedTimes=0}}function T1(s,t,i,r,l,c,p){const m=new O0,_=new M1,g=new Set,v=[],y=l.logarithmicDepthBuffer,E=l.vertexTextures;let b=l.precision;const w={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(F){return g.add(F),F===0?"uv":`uv${F}`}function M(F,O,q,rt,dt){const _t=rt.fog,Mt=dt.geometry,X=F.isMeshStandardMaterial?rt.environment:null,st=(F.isMeshStandardMaterial?i:t).get(F.envMap||X),tt=st&&st.mapping===Pu?st.image.height:null,Lt=w[F.type];F.precision!==null&&(b=l.getMaxPrecision(F.precision),b!==F.precision&&console.warn("THREE.WebGLProgram.getParameters:",F.precision,"not supported, using",b,"instead."));const I=Mt.morphAttributes.position||Mt.morphAttributes.normal||Mt.morphAttributes.color,ct=I!==void 0?I.length:0;let At=0;Mt.morphAttributes.position!==void 0&&(At=1),Mt.morphAttributes.normal!==void 0&&(At=2),Mt.morphAttributes.color!==void 0&&(At=3);let Dt,at,bt,Ut;if(Lt){const R=da[Lt];Dt=R.vertexShader,at=R.fragmentShader}else Dt=F.vertexShader,at=F.fragmentShader,_.update(F),bt=_.getVertexShaderID(F),Ut=_.getFragmentShaderID(F);const It=s.getRenderTarget(),Pt=s.state.buffers.depth.getReversed(),ce=dt.isInstancedMesh===!0,ee=dt.isBatchedMesh===!0,Ve=!!F.map,Ye=!!F.matcap,Me=!!st,Z=!!F.aoMap,Yn=!!F.lightMap,we=!!F.bumpMap,ge=!!F.normalMap,ne=!!F.displacementMap,We=!!F.emissiveMap,te=!!F.metalnessMap,B=!!F.roughnessMap,D=F.anisotropy>0,ft=F.clearcoat>0,Rt=F.dispersion>0,Nt=F.iridescence>0,St=F.sheen>0,kt=F.transmission>0,Gt=D&&!!F.anisotropyMap,zt=ft&&!!F.clearcoatMap,ue=ft&&!!F.clearcoatNormalMap,Ft=ft&&!!F.clearcoatRoughnessMap,jt=Nt&&!!F.iridescenceMap,re=Nt&&!!F.iridescenceThicknessMap,se=St&&!!F.sheenColorMap,Wt=St&&!!F.sheenRoughnessMap,ve=!!F.specularMap,pe=!!F.specularColorMap,Pe=!!F.specularIntensityMap,$=kt&&!!F.transmissionMap,Et=kt&&!!F.thicknessMap,vt=!!F.gradientMap,wt=!!F.alphaMap,Yt=F.alphaTest>0,Xt=!!F.alphaHash,_e=!!F.extensions;let Ke=Rr;F.toneMapped&&(It===null||It.isXRRenderTarget===!0)&&(Ke=s.toneMapping);const ln={shaderID:Lt,shaderType:F.type,shaderName:F.name,vertexShader:Dt,fragmentShader:at,defines:F.defines,customVertexShaderID:bt,customFragmentShaderID:Ut,isRawShaderMaterial:F.isRawShaderMaterial===!0,glslVersion:F.glslVersion,precision:b,batching:ee,batchingColor:ee&&dt._colorsTexture!==null,instancing:ce,instancingColor:ce&&dt.instanceColor!==null,instancingMorph:ce&&dt.morphTexture!==null,supportsVertexTextures:E,outputColorSpace:It===null?s.outputColorSpace:It.isXRRenderTarget===!0?It.texture.colorSpace:So,alphaToCoverage:!!F.alphaToCoverage,map:Ve,matcap:Ye,envMap:Me,envMapMode:Me&&st.mapping,envMapCubeUVHeight:tt,aoMap:Z,lightMap:Yn,bumpMap:we,normalMap:ge,displacementMap:E&&ne,emissiveMap:We,normalMapObjectSpace:ge&&F.normalMapType===dx,normalMapTangentSpace:ge&&F.normalMapType===D0,metalnessMap:te,roughnessMap:B,anisotropy:D,anisotropyMap:Gt,clearcoat:ft,clearcoatMap:zt,clearcoatNormalMap:ue,clearcoatRoughnessMap:Ft,dispersion:Rt,iridescence:Nt,iridescenceMap:jt,iridescenceThicknessMap:re,sheen:St,sheenColorMap:se,sheenRoughnessMap:Wt,specularMap:ve,specularColorMap:pe,specularIntensityMap:Pe,transmission:kt,transmissionMap:$,thicknessMap:Et,gradientMap:vt,opaque:F.transparent===!1&&F.blending===mo&&F.alphaToCoverage===!1,alphaMap:wt,alphaTest:Yt,alphaHash:Xt,combine:F.combine,mapUv:Ve&&C(F.map.channel),aoMapUv:Z&&C(F.aoMap.channel),lightMapUv:Yn&&C(F.lightMap.channel),bumpMapUv:we&&C(F.bumpMap.channel),normalMapUv:ge&&C(F.normalMap.channel),displacementMapUv:ne&&C(F.displacementMap.channel),emissiveMapUv:We&&C(F.emissiveMap.channel),metalnessMapUv:te&&C(F.metalnessMap.channel),roughnessMapUv:B&&C(F.roughnessMap.channel),anisotropyMapUv:Gt&&C(F.anisotropyMap.channel),clearcoatMapUv:zt&&C(F.clearcoatMap.channel),clearcoatNormalMapUv:ue&&C(F.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ft&&C(F.clearcoatRoughnessMap.channel),iridescenceMapUv:jt&&C(F.iridescenceMap.channel),iridescenceThicknessMapUv:re&&C(F.iridescenceThicknessMap.channel),sheenColorMapUv:se&&C(F.sheenColorMap.channel),sheenRoughnessMapUv:Wt&&C(F.sheenRoughnessMap.channel),specularMapUv:ve&&C(F.specularMap.channel),specularColorMapUv:pe&&C(F.specularColorMap.channel),specularIntensityMapUv:Pe&&C(F.specularIntensityMap.channel),transmissionMapUv:$&&C(F.transmissionMap.channel),thicknessMapUv:Et&&C(F.thicknessMap.channel),alphaMapUv:wt&&C(F.alphaMap.channel),vertexTangents:!!Mt.attributes.tangent&&(ge||D),vertexColors:F.vertexColors,vertexAlphas:F.vertexColors===!0&&!!Mt.attributes.color&&Mt.attributes.color.itemSize===4,pointsUvs:dt.isPoints===!0&&!!Mt.attributes.uv&&(Ve||wt),fog:!!_t,useFog:F.fog===!0,fogExp2:!!_t&&_t.isFogExp2,flatShading:F.flatShading===!0,sizeAttenuation:F.sizeAttenuation===!0,logarithmicDepthBuffer:y,reverseDepthBuffer:Pt,skinning:dt.isSkinnedMesh===!0,morphTargets:Mt.morphAttributes.position!==void 0,morphNormals:Mt.morphAttributes.normal!==void 0,morphColors:Mt.morphAttributes.color!==void 0,morphTargetsCount:ct,morphTextureStride:At,numDirLights:O.directional.length,numPointLights:O.point.length,numSpotLights:O.spot.length,numSpotLightMaps:O.spotLightMap.length,numRectAreaLights:O.rectArea.length,numHemiLights:O.hemi.length,numDirLightShadows:O.directionalShadowMap.length,numPointLightShadows:O.pointShadowMap.length,numSpotLightShadows:O.spotShadowMap.length,numSpotLightShadowsWithMaps:O.numSpotLightShadowsWithMaps,numLightProbes:O.numLightProbes,numClippingPlanes:p.numPlanes,numClipIntersection:p.numIntersection,dithering:F.dithering,shadowMapEnabled:s.shadowMap.enabled&&q.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ke,decodeVideoTexture:Ve&&F.map.isVideoTexture===!0&&Ge.getTransfer(F.map.colorSpace)===nn,decodeVideoTextureEmissive:We&&F.emissiveMap.isVideoTexture===!0&&Ge.getTransfer(F.emissiveMap.colorSpace)===nn,premultipliedAlpha:F.premultipliedAlpha,doubleSided:F.side===Va,flipSided:F.side===gi,useDepthPacking:F.depthPacking>=0,depthPacking:F.depthPacking||0,index0AttributeName:F.index0AttributeName,extensionClipCullDistance:_e&&F.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_e&&F.extensions.multiDraw===!0||ee)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:F.customProgramCacheKey()};return ln.vertexUv1s=g.has(1),ln.vertexUv2s=g.has(2),ln.vertexUv3s=g.has(3),g.clear(),ln}function x(F){const O=[];if(F.shaderID?O.push(F.shaderID):(O.push(F.customVertexShaderID),O.push(F.customFragmentShaderID)),F.defines!==void 0)for(const q in F.defines)O.push(q),O.push(F.defines[q]);return F.isRawShaderMaterial===!1&&(V(O,F),H(O,F),O.push(s.outputColorSpace)),O.push(F.customProgramCacheKey),O.join()}function V(F,O){F.push(O.precision),F.push(O.outputColorSpace),F.push(O.envMapMode),F.push(O.envMapCubeUVHeight),F.push(O.mapUv),F.push(O.alphaMapUv),F.push(O.lightMapUv),F.push(O.aoMapUv),F.push(O.bumpMapUv),F.push(O.normalMapUv),F.push(O.displacementMapUv),F.push(O.emissiveMapUv),F.push(O.metalnessMapUv),F.push(O.roughnessMapUv),F.push(O.anisotropyMapUv),F.push(O.clearcoatMapUv),F.push(O.clearcoatNormalMapUv),F.push(O.clearcoatRoughnessMapUv),F.push(O.iridescenceMapUv),F.push(O.iridescenceThicknessMapUv),F.push(O.sheenColorMapUv),F.push(O.sheenRoughnessMapUv),F.push(O.specularMapUv),F.push(O.specularColorMapUv),F.push(O.specularIntensityMapUv),F.push(O.transmissionMapUv),F.push(O.thicknessMapUv),F.push(O.combine),F.push(O.fogExp2),F.push(O.sizeAttenuation),F.push(O.morphTargetsCount),F.push(O.morphAttributeCount),F.push(O.numDirLights),F.push(O.numPointLights),F.push(O.numSpotLights),F.push(O.numSpotLightMaps),F.push(O.numHemiLights),F.push(O.numRectAreaLights),F.push(O.numDirLightShadows),F.push(O.numPointLightShadows),F.push(O.numSpotLightShadows),F.push(O.numSpotLightShadowsWithMaps),F.push(O.numLightProbes),F.push(O.shadowMapType),F.push(O.toneMapping),F.push(O.numClippingPlanes),F.push(O.numClipIntersection),F.push(O.depthPacking)}function H(F,O){m.disableAll(),O.supportsVertexTextures&&m.enable(0),O.instancing&&m.enable(1),O.instancingColor&&m.enable(2),O.instancingMorph&&m.enable(3),O.matcap&&m.enable(4),O.envMap&&m.enable(5),O.normalMapObjectSpace&&m.enable(6),O.normalMapTangentSpace&&m.enable(7),O.clearcoat&&m.enable(8),O.iridescence&&m.enable(9),O.alphaTest&&m.enable(10),O.vertexColors&&m.enable(11),O.vertexAlphas&&m.enable(12),O.vertexUv1s&&m.enable(13),O.vertexUv2s&&m.enable(14),O.vertexUv3s&&m.enable(15),O.vertexTangents&&m.enable(16),O.anisotropy&&m.enable(17),O.alphaHash&&m.enable(18),O.batching&&m.enable(19),O.dispersion&&m.enable(20),O.batchingColor&&m.enable(21),F.push(m.mask),m.disableAll(),O.fog&&m.enable(0),O.useFog&&m.enable(1),O.flatShading&&m.enable(2),O.logarithmicDepthBuffer&&m.enable(3),O.reverseDepthBuffer&&m.enable(4),O.skinning&&m.enable(5),O.morphTargets&&m.enable(6),O.morphNormals&&m.enable(7),O.morphColors&&m.enable(8),O.premultipliedAlpha&&m.enable(9),O.shadowMapEnabled&&m.enable(10),O.doubleSided&&m.enable(11),O.flipSided&&m.enable(12),O.useDepthPacking&&m.enable(13),O.dithering&&m.enable(14),O.transmission&&m.enable(15),O.sheen&&m.enable(16),O.opaque&&m.enable(17),O.pointsUvs&&m.enable(18),O.decodeVideoTexture&&m.enable(19),O.decodeVideoTextureEmissive&&m.enable(20),O.alphaToCoverage&&m.enable(21),F.push(m.mask)}function P(F){const O=w[F.type];let q;if(O){const rt=da[O];q=Wx.clone(rt.uniforms)}else q=F.uniforms;return q}function Y(F,O){let q;for(let rt=0,dt=v.length;rt<dt;rt++){const _t=v[rt];if(_t.cacheKey===O){q=_t,++q.usedTimes;break}}return q===void 0&&(q=new x1(s,O,F,c),v.push(q)),q}function z(F){if(--F.usedTimes===0){const O=v.indexOf(F);v[O]=v[v.length-1],v.pop(),F.destroy()}}function k(F){_.remove(F)}function K(){_.dispose()}return{getParameters:M,getProgramCacheKey:x,getUniforms:P,acquireProgram:Y,releaseProgram:z,releaseShaderCache:k,programs:v,dispose:K}}function A1(){let s=new WeakMap;function t(p){return s.has(p)}function i(p){let m=s.get(p);return m===void 0&&(m={},s.set(p,m)),m}function r(p){s.delete(p)}function l(p,m,_){s.get(p)[m]=_}function c(){s=new WeakMap}return{has:t,get:i,remove:r,update:l,dispose:c}}function R1(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function a0(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function r0(){const s=[];let t=0;const i=[],r=[],l=[];function c(){t=0,i.length=0,r.length=0,l.length=0}function p(y,E,b,w,C,M){let x=s[t];return x===void 0?(x={id:y.id,object:y,geometry:E,material:b,groupOrder:w,renderOrder:y.renderOrder,z:C,group:M},s[t]=x):(x.id=y.id,x.object=y,x.geometry=E,x.material=b,x.groupOrder=w,x.renderOrder=y.renderOrder,x.z=C,x.group=M),t++,x}function m(y,E,b,w,C,M){const x=p(y,E,b,w,C,M);b.transmission>0?r.push(x):b.transparent===!0?l.push(x):i.push(x)}function _(y,E,b,w,C,M){const x=p(y,E,b,w,C,M);b.transmission>0?r.unshift(x):b.transparent===!0?l.unshift(x):i.unshift(x)}function g(y,E){i.length>1&&i.sort(y||R1),r.length>1&&r.sort(E||a0),l.length>1&&l.sort(E||a0)}function v(){for(let y=t,E=s.length;y<E;y++){const b=s[y];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:m,unshift:_,finish:v,sort:g}}function w1(){let s=new WeakMap;function t(r,l){const c=s.get(r);let p;return c===void 0?(p=new r0,s.set(r,[p])):l>=c.length?(p=new r0,c.push(p)):p=c[l],p}function i(){s=new WeakMap}return{get:t,dispose:i}}function C1(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new ot,color:new Ie};break;case"SpotLight":i={position:new ot,direction:new ot,color:new Ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new ot,color:new Ie,distance:0,decay:0};break;case"HemisphereLight":i={direction:new ot,skyColor:new Ie,groundColor:new Ie};break;case"RectAreaLight":i={color:new Ie,position:new ot,halfWidth:new ot,halfHeight:new ot};break}return s[t.id]=i,i}}}function D1(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=i,i}}}let U1=0;function L1(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function N1(s){const t=new C1,i=D1(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let g=0;g<9;g++)r.probe.push(new ot);const l=new ot,c=new fn,p=new fn;function m(g){let v=0,y=0,E=0;for(let F=0;F<9;F++)r.probe[F].set(0,0,0);let b=0,w=0,C=0,M=0,x=0,V=0,H=0,P=0,Y=0,z=0,k=0;g.sort(L1);for(let F=0,O=g.length;F<O;F++){const q=g[F],rt=q.color,dt=q.intensity,_t=q.distance,Mt=q.shadow&&q.shadow.map?q.shadow.map.texture:null;if(q.isAmbientLight)v+=rt.r*dt,y+=rt.g*dt,E+=rt.b*dt;else if(q.isLightProbe){for(let X=0;X<9;X++)r.probe[X].addScaledVector(q.sh.coefficients[X],dt);k++}else if(q.isDirectionalLight){const X=t.get(q);if(X.color.copy(q.color).multiplyScalar(q.intensity),q.castShadow){const st=q.shadow,tt=i.get(q);tt.shadowIntensity=st.intensity,tt.shadowBias=st.bias,tt.shadowNormalBias=st.normalBias,tt.shadowRadius=st.radius,tt.shadowMapSize=st.mapSize,r.directionalShadow[b]=tt,r.directionalShadowMap[b]=Mt,r.directionalShadowMatrix[b]=q.shadow.matrix,V++}r.directional[b]=X,b++}else if(q.isSpotLight){const X=t.get(q);X.position.setFromMatrixPosition(q.matrixWorld),X.color.copy(rt).multiplyScalar(dt),X.distance=_t,X.coneCos=Math.cos(q.angle),X.penumbraCos=Math.cos(q.angle*(1-q.penumbra)),X.decay=q.decay,r.spot[C]=X;const st=q.shadow;if(q.map&&(r.spotLightMap[Y]=q.map,Y++,st.updateMatrices(q),q.castShadow&&z++),r.spotLightMatrix[C]=st.matrix,q.castShadow){const tt=i.get(q);tt.shadowIntensity=st.intensity,tt.shadowBias=st.bias,tt.shadowNormalBias=st.normalBias,tt.shadowRadius=st.radius,tt.shadowMapSize=st.mapSize,r.spotShadow[C]=tt,r.spotShadowMap[C]=Mt,P++}C++}else if(q.isRectAreaLight){const X=t.get(q);X.color.copy(rt).multiplyScalar(dt),X.halfWidth.set(q.width*.5,0,0),X.halfHeight.set(0,q.height*.5,0),r.rectArea[M]=X,M++}else if(q.isPointLight){const X=t.get(q);if(X.color.copy(q.color).multiplyScalar(q.intensity),X.distance=q.distance,X.decay=q.decay,q.castShadow){const st=q.shadow,tt=i.get(q);tt.shadowIntensity=st.intensity,tt.shadowBias=st.bias,tt.shadowNormalBias=st.normalBias,tt.shadowRadius=st.radius,tt.shadowMapSize=st.mapSize,tt.shadowCameraNear=st.camera.near,tt.shadowCameraFar=st.camera.far,r.pointShadow[w]=tt,r.pointShadowMap[w]=Mt,r.pointShadowMatrix[w]=q.shadow.matrix,H++}r.point[w]=X,w++}else if(q.isHemisphereLight){const X=t.get(q);X.skyColor.copy(q.color).multiplyScalar(dt),X.groundColor.copy(q.groundColor).multiplyScalar(dt),r.hemi[x]=X,x++}}M>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=qt.LTC_FLOAT_1,r.rectAreaLTC2=qt.LTC_FLOAT_2):(r.rectAreaLTC1=qt.LTC_HALF_1,r.rectAreaLTC2=qt.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=y,r.ambient[2]=E;const K=r.hash;(K.directionalLength!==b||K.pointLength!==w||K.spotLength!==C||K.rectAreaLength!==M||K.hemiLength!==x||K.numDirectionalShadows!==V||K.numPointShadows!==H||K.numSpotShadows!==P||K.numSpotMaps!==Y||K.numLightProbes!==k)&&(r.directional.length=b,r.spot.length=C,r.rectArea.length=M,r.point.length=w,r.hemi.length=x,r.directionalShadow.length=V,r.directionalShadowMap.length=V,r.pointShadow.length=H,r.pointShadowMap.length=H,r.spotShadow.length=P,r.spotShadowMap.length=P,r.directionalShadowMatrix.length=V,r.pointShadowMatrix.length=H,r.spotLightMatrix.length=P+Y-z,r.spotLightMap.length=Y,r.numSpotLightShadowsWithMaps=z,r.numLightProbes=k,K.directionalLength=b,K.pointLength=w,K.spotLength=C,K.rectAreaLength=M,K.hemiLength=x,K.numDirectionalShadows=V,K.numPointShadows=H,K.numSpotShadows=P,K.numSpotMaps=Y,K.numLightProbes=k,r.version=U1++)}function _(g,v){let y=0,E=0,b=0,w=0,C=0;const M=v.matrixWorldInverse;for(let x=0,V=g.length;x<V;x++){const H=g[x];if(H.isDirectionalLight){const P=r.directional[y];P.direction.setFromMatrixPosition(H.matrixWorld),l.setFromMatrixPosition(H.target.matrixWorld),P.direction.sub(l),P.direction.transformDirection(M),y++}else if(H.isSpotLight){const P=r.spot[b];P.position.setFromMatrixPosition(H.matrixWorld),P.position.applyMatrix4(M),P.direction.setFromMatrixPosition(H.matrixWorld),l.setFromMatrixPosition(H.target.matrixWorld),P.direction.sub(l),P.direction.transformDirection(M),b++}else if(H.isRectAreaLight){const P=r.rectArea[w];P.position.setFromMatrixPosition(H.matrixWorld),P.position.applyMatrix4(M),p.identity(),c.copy(H.matrixWorld),c.premultiply(M),p.extractRotation(c),P.halfWidth.set(H.width*.5,0,0),P.halfHeight.set(0,H.height*.5,0),P.halfWidth.applyMatrix4(p),P.halfHeight.applyMatrix4(p),w++}else if(H.isPointLight){const P=r.point[E];P.position.setFromMatrixPosition(H.matrixWorld),P.position.applyMatrix4(M),E++}else if(H.isHemisphereLight){const P=r.hemi[C];P.direction.setFromMatrixPosition(H.matrixWorld),P.direction.transformDirection(M),C++}}}return{setup:m,setupView:_,state:r}}function s0(s){const t=new N1(s),i=[],r=[];function l(v){g.camera=v,i.length=0,r.length=0}function c(v){i.push(v)}function p(v){r.push(v)}function m(){t.setup(i)}function _(v){t.setupView(i,v)}const g={lightsArray:i,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:g,setupLights:m,setupLightsView:_,pushLight:c,pushShadow:p}}function O1(s){let t=new WeakMap;function i(l,c=0){const p=t.get(l);let m;return p===void 0?(m=new s0(s),t.set(l,[m])):c>=p.length?(m=new s0(s),p.push(m)):m=p[c],m}function r(){t=new WeakMap}return{get:i,dispose:r}}const P1=`void main() {
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
}`;function B1(s,t,i){let r=new Up;const l=new Ee,c=new Ee,p=new gn,m=new nE({depthPacking:hx}),_=new iE,g={},v=i.maxTextureSize,y={[wr]:gi,[gi]:wr,[Va]:Va},E=new Cr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ee},radius:{value:4}},vertexShader:P1,fragmentShader:F1}),b=E.clone();b.defines.HORIZONTAL_PASS=1;const w=new ia;w.setAttribute("position",new ma(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new ea(w,E),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=S0;let x=this.type;this.render=function(z,k,K){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||z.length===0)return;const F=s.getRenderTarget(),O=s.getActiveCubeFace(),q=s.getActiveMipmapLevel(),rt=s.state;rt.setBlending(Ar),rt.buffers.color.setClear(1,1,1,1),rt.buffers.depth.setTest(!0),rt.setScissorTest(!1);const dt=x!==Ga&&this.type===Ga,_t=x===Ga&&this.type!==Ga;for(let Mt=0,X=z.length;Mt<X;Mt++){const st=z[Mt],tt=st.shadow;if(tt===void 0){console.warn("THREE.WebGLShadowMap:",st,"has no shadow.");continue}if(tt.autoUpdate===!1&&tt.needsUpdate===!1)continue;l.copy(tt.mapSize);const Lt=tt.getFrameExtents();if(l.multiply(Lt),c.copy(tt.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(c.x=Math.floor(v/Lt.x),l.x=c.x*Lt.x,tt.mapSize.x=c.x),l.y>v&&(c.y=Math.floor(v/Lt.y),l.y=c.y*Lt.y,tt.mapSize.y=c.y)),tt.map===null||dt===!0||_t===!0){const ct=this.type!==Ga?{minFilter:na,magFilter:na}:{};tt.map!==null&&tt.map.dispose(),tt.map=new ds(l.x,l.y,ct),tt.map.texture.name=st.name+".shadowMap",tt.camera.updateProjectionMatrix()}s.setRenderTarget(tt.map),s.clear();const I=tt.getViewportCount();for(let ct=0;ct<I;ct++){const At=tt.getViewport(ct);p.set(c.x*At.x,c.y*At.y,c.x*At.z,c.y*At.w),rt.viewport(p),tt.updateMatrices(st,ct),r=tt.getFrustum(),P(k,K,tt.camera,st,this.type)}tt.isPointLightShadow!==!0&&this.type===Ga&&V(tt,K),tt.needsUpdate=!1}x=this.type,M.needsUpdate=!1,s.setRenderTarget(F,O,q)};function V(z,k){const K=t.update(C);E.defines.VSM_SAMPLES!==z.blurSamples&&(E.defines.VSM_SAMPLES=z.blurSamples,b.defines.VSM_SAMPLES=z.blurSamples,E.needsUpdate=!0,b.needsUpdate=!0),z.mapPass===null&&(z.mapPass=new ds(l.x,l.y)),E.uniforms.shadow_pass.value=z.map.texture,E.uniforms.resolution.value=z.mapSize,E.uniforms.radius.value=z.radius,s.setRenderTarget(z.mapPass),s.clear(),s.renderBufferDirect(k,null,K,E,C,null),b.uniforms.shadow_pass.value=z.mapPass.texture,b.uniforms.resolution.value=z.mapSize,b.uniforms.radius.value=z.radius,s.setRenderTarget(z.map),s.clear(),s.renderBufferDirect(k,null,K,b,C,null)}function H(z,k,K,F){let O=null;const q=K.isPointLight===!0?z.customDistanceMaterial:z.customDepthMaterial;if(q!==void 0)O=q;else if(O=K.isPointLight===!0?_:m,s.localClippingEnabled&&k.clipShadows===!0&&Array.isArray(k.clippingPlanes)&&k.clippingPlanes.length!==0||k.displacementMap&&k.displacementScale!==0||k.alphaMap&&k.alphaTest>0||k.map&&k.alphaTest>0||k.alphaToCoverage===!0){const rt=O.uuid,dt=k.uuid;let _t=g[rt];_t===void 0&&(_t={},g[rt]=_t);let Mt=_t[dt];Mt===void 0&&(Mt=O.clone(),_t[dt]=Mt,k.addEventListener("dispose",Y)),O=Mt}if(O.visible=k.visible,O.wireframe=k.wireframe,F===Ga?O.side=k.shadowSide!==null?k.shadowSide:k.side:O.side=k.shadowSide!==null?k.shadowSide:y[k.side],O.alphaMap=k.alphaMap,O.alphaTest=k.alphaToCoverage===!0?.5:k.alphaTest,O.map=k.map,O.clipShadows=k.clipShadows,O.clippingPlanes=k.clippingPlanes,O.clipIntersection=k.clipIntersection,O.displacementMap=k.displacementMap,O.displacementScale=k.displacementScale,O.displacementBias=k.displacementBias,O.wireframeLinewidth=k.wireframeLinewidth,O.linewidth=k.linewidth,K.isPointLight===!0&&O.isMeshDistanceMaterial===!0){const rt=s.properties.get(O);rt.light=K}return O}function P(z,k,K,F,O){if(z.visible===!1)return;if(z.layers.test(k.layers)&&(z.isMesh||z.isLine||z.isPoints)&&(z.castShadow||z.receiveShadow&&O===Ga)&&(!z.frustumCulled||r.intersectsObject(z))){z.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,z.matrixWorld);const dt=t.update(z),_t=z.material;if(Array.isArray(_t)){const Mt=dt.groups;for(let X=0,st=Mt.length;X<st;X++){const tt=Mt[X],Lt=_t[tt.materialIndex];if(Lt&&Lt.visible){const I=H(z,Lt,F,O);z.onBeforeShadow(s,z,k,K,dt,I,tt),s.renderBufferDirect(K,null,dt,I,z,tt),z.onAfterShadow(s,z,k,K,dt,I,tt)}}}else if(_t.visible){const Mt=H(z,_t,F,O);z.onBeforeShadow(s,z,k,K,dt,Mt,null),s.renderBufferDirect(K,null,dt,Mt,z,null),z.onAfterShadow(s,z,k,K,dt,Mt,null)}}const rt=z.children;for(let dt=0,_t=rt.length;dt<_t;dt++)P(rt[dt],k,K,F,O)}function Y(z){z.target.removeEventListener("dispose",Y);for(const K in g){const F=g[K],O=z.target.uuid;O in F&&(F[O].dispose(),delete F[O])}}}const I1={[Pd]:Fd,[Bd]:Hd,[Id]:Gd,[_o]:zd,[Fd]:Pd,[Hd]:Bd,[Gd]:Id,[zd]:_o};function z1(s,t){function i(){let $=!1;const Et=new gn;let vt=null;const wt=new gn(0,0,0,0);return{setMask:function(Yt){vt!==Yt&&!$&&(s.colorMask(Yt,Yt,Yt,Yt),vt=Yt)},setLocked:function(Yt){$=Yt},setClear:function(Yt,Xt,_e,Ke,ln){ln===!0&&(Yt*=Ke,Xt*=Ke,_e*=Ke),Et.set(Yt,Xt,_e,Ke),wt.equals(Et)===!1&&(s.clearColor(Yt,Xt,_e,Ke),wt.copy(Et))},reset:function(){$=!1,vt=null,wt.set(-1,0,0,0)}}}function r(){let $=!1,Et=!1,vt=null,wt=null,Yt=null;return{setReversed:function(Xt){if(Et!==Xt){const _e=t.get("EXT_clip_control");Xt?_e.clipControlEXT(_e.LOWER_LEFT_EXT,_e.ZERO_TO_ONE_EXT):_e.clipControlEXT(_e.LOWER_LEFT_EXT,_e.NEGATIVE_ONE_TO_ONE_EXT),Et=Xt;const Ke=Yt;Yt=null,this.setClear(Ke)}},getReversed:function(){return Et},setTest:function(Xt){Xt?It(s.DEPTH_TEST):Pt(s.DEPTH_TEST)},setMask:function(Xt){vt!==Xt&&!$&&(s.depthMask(Xt),vt=Xt)},setFunc:function(Xt){if(Et&&(Xt=I1[Xt]),wt!==Xt){switch(Xt){case Pd:s.depthFunc(s.NEVER);break;case Fd:s.depthFunc(s.ALWAYS);break;case Bd:s.depthFunc(s.LESS);break;case _o:s.depthFunc(s.LEQUAL);break;case Id:s.depthFunc(s.EQUAL);break;case zd:s.depthFunc(s.GEQUAL);break;case Hd:s.depthFunc(s.GREATER);break;case Gd:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}wt=Xt}},setLocked:function(Xt){$=Xt},setClear:function(Xt){Yt!==Xt&&(Et&&(Xt=1-Xt),s.clearDepth(Xt),Yt=Xt)},reset:function(){$=!1,vt=null,wt=null,Yt=null,Et=!1}}}function l(){let $=!1,Et=null,vt=null,wt=null,Yt=null,Xt=null,_e=null,Ke=null,ln=null;return{setTest:function(R){$||(R?It(s.STENCIL_TEST):Pt(s.STENCIL_TEST))},setMask:function(R){Et!==R&&!$&&(s.stencilMask(R),Et=R)},setFunc:function(R,Qe,En){(vt!==R||wt!==Qe||Yt!==En)&&(s.stencilFunc(R,Qe,En),vt=R,wt=Qe,Yt=En)},setOp:function(R,Qe,En){(Xt!==R||_e!==Qe||Ke!==En)&&(s.stencilOp(R,Qe,En),Xt=R,_e=Qe,Ke=En)},setLocked:function(R){$=R},setClear:function(R){ln!==R&&(s.clearStencil(R),ln=R)},reset:function(){$=!1,Et=null,vt=null,wt=null,Yt=null,Xt=null,_e=null,Ke=null,ln=null}}}const c=new i,p=new r,m=new l,_=new WeakMap,g=new WeakMap;let v={},y={},E=new WeakMap,b=[],w=null,C=!1,M=null,x=null,V=null,H=null,P=null,Y=null,z=null,k=new Ie(0,0,0),K=0,F=!1,O=null,q=null,rt=null,dt=null,_t=null;const Mt=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,st=0;const tt=s.getParameter(s.VERSION);tt.indexOf("WebGL")!==-1?(st=parseFloat(/^WebGL (\d)/.exec(tt)[1]),X=st>=1):tt.indexOf("OpenGL ES")!==-1&&(st=parseFloat(/^OpenGL ES (\d)/.exec(tt)[1]),X=st>=2);let Lt=null,I={};const ct=s.getParameter(s.SCISSOR_BOX),At=s.getParameter(s.VIEWPORT),Dt=new gn().fromArray(ct),at=new gn().fromArray(At);function bt($,Et,vt,wt){const Yt=new Uint8Array(4),Xt=s.createTexture();s.bindTexture($,Xt),s.texParameteri($,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri($,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let _e=0;_e<vt;_e++)$===s.TEXTURE_3D||$===s.TEXTURE_2D_ARRAY?s.texImage3D(Et,0,s.RGBA,1,1,wt,0,s.RGBA,s.UNSIGNED_BYTE,Yt):s.texImage2D(Et+_e,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Yt);return Xt}const Ut={};Ut[s.TEXTURE_2D]=bt(s.TEXTURE_2D,s.TEXTURE_2D,1),Ut[s.TEXTURE_CUBE_MAP]=bt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ut[s.TEXTURE_2D_ARRAY]=bt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Ut[s.TEXTURE_3D]=bt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),p.setClear(1),m.setClear(0),It(s.DEPTH_TEST),p.setFunc(_o),we(!1),ge(tv),It(s.CULL_FACE),Z(Ar);function It($){v[$]!==!0&&(s.enable($),v[$]=!0)}function Pt($){v[$]!==!1&&(s.disable($),v[$]=!1)}function ce($,Et){return y[$]!==Et?(s.bindFramebuffer($,Et),y[$]=Et,$===s.DRAW_FRAMEBUFFER&&(y[s.FRAMEBUFFER]=Et),$===s.FRAMEBUFFER&&(y[s.DRAW_FRAMEBUFFER]=Et),!0):!1}function ee($,Et){let vt=b,wt=!1;if($){vt=E.get(Et),vt===void 0&&(vt=[],E.set(Et,vt));const Yt=$.textures;if(vt.length!==Yt.length||vt[0]!==s.COLOR_ATTACHMENT0){for(let Xt=0,_e=Yt.length;Xt<_e;Xt++)vt[Xt]=s.COLOR_ATTACHMENT0+Xt;vt.length=Yt.length,wt=!0}}else vt[0]!==s.BACK&&(vt[0]=s.BACK,wt=!0);wt&&s.drawBuffers(vt)}function Ve($){return w!==$?(s.useProgram($),w=$,!0):!1}const Ye={[ls]:s.FUNC_ADD,[IS]:s.FUNC_SUBTRACT,[zS]:s.FUNC_REVERSE_SUBTRACT};Ye[HS]=s.MIN,Ye[GS]=s.MAX;const Me={[VS]:s.ZERO,[kS]:s.ONE,[XS]:s.SRC_COLOR,[Nd]:s.SRC_ALPHA,[KS]:s.SRC_ALPHA_SATURATE,[jS]:s.DST_COLOR,[qS]:s.DST_ALPHA,[WS]:s.ONE_MINUS_SRC_COLOR,[Od]:s.ONE_MINUS_SRC_ALPHA,[ZS]:s.ONE_MINUS_DST_COLOR,[YS]:s.ONE_MINUS_DST_ALPHA,[QS]:s.CONSTANT_COLOR,[JS]:s.ONE_MINUS_CONSTANT_COLOR,[$S]:s.CONSTANT_ALPHA,[tx]:s.ONE_MINUS_CONSTANT_ALPHA};function Z($,Et,vt,wt,Yt,Xt,_e,Ke,ln,R){if($===Ar){C===!0&&(Pt(s.BLEND),C=!1);return}if(C===!1&&(It(s.BLEND),C=!0),$!==BS){if($!==M||R!==F){if((x!==ls||P!==ls)&&(s.blendEquation(s.FUNC_ADD),x=ls,P=ls),R)switch($){case mo:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ev:s.blendFunc(s.ONE,s.ONE);break;case nv:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case iv:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",$);break}else switch($){case mo:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ev:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case nv:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case iv:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",$);break}V=null,H=null,Y=null,z=null,k.set(0,0,0),K=0,M=$,F=R}return}Yt=Yt||Et,Xt=Xt||vt,_e=_e||wt,(Et!==x||Yt!==P)&&(s.blendEquationSeparate(Ye[Et],Ye[Yt]),x=Et,P=Yt),(vt!==V||wt!==H||Xt!==Y||_e!==z)&&(s.blendFuncSeparate(Me[vt],Me[wt],Me[Xt],Me[_e]),V=vt,H=wt,Y=Xt,z=_e),(Ke.equals(k)===!1||ln!==K)&&(s.blendColor(Ke.r,Ke.g,Ke.b,ln),k.copy(Ke),K=ln),M=$,F=!1}function Yn($,Et){$.side===Va?Pt(s.CULL_FACE):It(s.CULL_FACE);let vt=$.side===gi;Et&&(vt=!vt),we(vt),$.blending===mo&&$.transparent===!1?Z(Ar):Z($.blending,$.blendEquation,$.blendSrc,$.blendDst,$.blendEquationAlpha,$.blendSrcAlpha,$.blendDstAlpha,$.blendColor,$.blendAlpha,$.premultipliedAlpha),p.setFunc($.depthFunc),p.setTest($.depthTest),p.setMask($.depthWrite),c.setMask($.colorWrite);const wt=$.stencilWrite;m.setTest(wt),wt&&(m.setMask($.stencilWriteMask),m.setFunc($.stencilFunc,$.stencilRef,$.stencilFuncMask),m.setOp($.stencilFail,$.stencilZFail,$.stencilZPass)),We($.polygonOffset,$.polygonOffsetFactor,$.polygonOffsetUnits),$.alphaToCoverage===!0?It(s.SAMPLE_ALPHA_TO_COVERAGE):Pt(s.SAMPLE_ALPHA_TO_COVERAGE)}function we($){O!==$&&($?s.frontFace(s.CW):s.frontFace(s.CCW),O=$)}function ge($){$!==OS?(It(s.CULL_FACE),$!==q&&($===tv?s.cullFace(s.BACK):$===PS?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Pt(s.CULL_FACE),q=$}function ne($){$!==rt&&(X&&s.lineWidth($),rt=$)}function We($,Et,vt){$?(It(s.POLYGON_OFFSET_FILL),(dt!==Et||_t!==vt)&&(s.polygonOffset(Et,vt),dt=Et,_t=vt)):Pt(s.POLYGON_OFFSET_FILL)}function te($){$?It(s.SCISSOR_TEST):Pt(s.SCISSOR_TEST)}function B($){$===void 0&&($=s.TEXTURE0+Mt-1),Lt!==$&&(s.activeTexture($),Lt=$)}function D($,Et,vt){vt===void 0&&(Lt===null?vt=s.TEXTURE0+Mt-1:vt=Lt);let wt=I[vt];wt===void 0&&(wt={type:void 0,texture:void 0},I[vt]=wt),(wt.type!==$||wt.texture!==Et)&&(Lt!==vt&&(s.activeTexture(vt),Lt=vt),s.bindTexture($,Et||Ut[$]),wt.type=$,wt.texture=Et)}function ft(){const $=I[Lt];$!==void 0&&$.type!==void 0&&(s.bindTexture($.type,null),$.type=void 0,$.texture=void 0)}function Rt(){try{s.compressedTexImage2D(...arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Nt(){try{s.compressedTexImage3D(...arguments)}catch($){console.error("THREE.WebGLState:",$)}}function St(){try{s.texSubImage2D(...arguments)}catch($){console.error("THREE.WebGLState:",$)}}function kt(){try{s.texSubImage3D(...arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Gt(){try{s.compressedTexSubImage2D(...arguments)}catch($){console.error("THREE.WebGLState:",$)}}function zt(){try{s.compressedTexSubImage3D(...arguments)}catch($){console.error("THREE.WebGLState:",$)}}function ue(){try{s.texStorage2D(...arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Ft(){try{s.texStorage3D(...arguments)}catch($){console.error("THREE.WebGLState:",$)}}function jt(){try{s.texImage2D(...arguments)}catch($){console.error("THREE.WebGLState:",$)}}function re(){try{s.texImage3D(...arguments)}catch($){console.error("THREE.WebGLState:",$)}}function se($){Dt.equals($)===!1&&(s.scissor($.x,$.y,$.z,$.w),Dt.copy($))}function Wt($){at.equals($)===!1&&(s.viewport($.x,$.y,$.z,$.w),at.copy($))}function ve($,Et){let vt=g.get(Et);vt===void 0&&(vt=new WeakMap,g.set(Et,vt));let wt=vt.get($);wt===void 0&&(wt=s.getUniformBlockIndex(Et,$.name),vt.set($,wt))}function pe($,Et){const wt=g.get(Et).get($);_.get(Et)!==wt&&(s.uniformBlockBinding(Et,wt,$.__bindingPointIndex),_.set(Et,wt))}function Pe(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),p.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),v={},Lt=null,I={},y={},E=new WeakMap,b=[],w=null,C=!1,M=null,x=null,V=null,H=null,P=null,Y=null,z=null,k=new Ie(0,0,0),K=0,F=!1,O=null,q=null,rt=null,dt=null,_t=null,Dt.set(0,0,s.canvas.width,s.canvas.height),at.set(0,0,s.canvas.width,s.canvas.height),c.reset(),p.reset(),m.reset()}return{buffers:{color:c,depth:p,stencil:m},enable:It,disable:Pt,bindFramebuffer:ce,drawBuffers:ee,useProgram:Ve,setBlending:Z,setMaterial:Yn,setFlipSided:we,setCullFace:ge,setLineWidth:ne,setPolygonOffset:We,setScissorTest:te,activeTexture:B,bindTexture:D,unbindTexture:ft,compressedTexImage2D:Rt,compressedTexImage3D:Nt,texImage2D:jt,texImage3D:re,updateUBOMapping:ve,uniformBlockBinding:pe,texStorage2D:ue,texStorage3D:Ft,texSubImage2D:St,texSubImage3D:kt,compressedTexSubImage2D:Gt,compressedTexSubImage3D:zt,scissor:se,viewport:Wt,reset:Pe}}function H1(s,t,i,r,l,c,p){const m=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,_=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new Ee,v=new WeakMap;let y;const E=new WeakMap;let b=!1;try{b=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(B,D){return b?new OffscreenCanvas(B,D):Uu("canvas")}function C(B,D,ft){let Rt=1;const Nt=te(B);if((Nt.width>ft||Nt.height>ft)&&(Rt=ft/Math.max(Nt.width,Nt.height)),Rt<1)if(typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&B instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&B instanceof ImageBitmap||typeof VideoFrame<"u"&&B instanceof VideoFrame){const St=Math.floor(Rt*Nt.width),kt=Math.floor(Rt*Nt.height);y===void 0&&(y=w(St,kt));const Gt=D?w(St,kt):y;return Gt.width=St,Gt.height=kt,Gt.getContext("2d").drawImage(B,0,0,St,kt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Nt.width+"x"+Nt.height+") to ("+St+"x"+kt+")."),Gt}else return"data"in B&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Nt.width+"x"+Nt.height+")."),B;return B}function M(B){return B.generateMipmaps}function x(B){s.generateMipmap(B)}function V(B){return B.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:B.isWebGL3DRenderTarget?s.TEXTURE_3D:B.isWebGLArrayRenderTarget||B.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function H(B,D,ft,Rt,Nt=!1){if(B!==null){if(s[B]!==void 0)return s[B];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+B+"'")}let St=D;if(D===s.RED&&(ft===s.FLOAT&&(St=s.R32F),ft===s.HALF_FLOAT&&(St=s.R16F),ft===s.UNSIGNED_BYTE&&(St=s.R8)),D===s.RED_INTEGER&&(ft===s.UNSIGNED_BYTE&&(St=s.R8UI),ft===s.UNSIGNED_SHORT&&(St=s.R16UI),ft===s.UNSIGNED_INT&&(St=s.R32UI),ft===s.BYTE&&(St=s.R8I),ft===s.SHORT&&(St=s.R16I),ft===s.INT&&(St=s.R32I)),D===s.RG&&(ft===s.FLOAT&&(St=s.RG32F),ft===s.HALF_FLOAT&&(St=s.RG16F),ft===s.UNSIGNED_BYTE&&(St=s.RG8)),D===s.RG_INTEGER&&(ft===s.UNSIGNED_BYTE&&(St=s.RG8UI),ft===s.UNSIGNED_SHORT&&(St=s.RG16UI),ft===s.UNSIGNED_INT&&(St=s.RG32UI),ft===s.BYTE&&(St=s.RG8I),ft===s.SHORT&&(St=s.RG16I),ft===s.INT&&(St=s.RG32I)),D===s.RGB_INTEGER&&(ft===s.UNSIGNED_BYTE&&(St=s.RGB8UI),ft===s.UNSIGNED_SHORT&&(St=s.RGB16UI),ft===s.UNSIGNED_INT&&(St=s.RGB32UI),ft===s.BYTE&&(St=s.RGB8I),ft===s.SHORT&&(St=s.RGB16I),ft===s.INT&&(St=s.RGB32I)),D===s.RGBA_INTEGER&&(ft===s.UNSIGNED_BYTE&&(St=s.RGBA8UI),ft===s.UNSIGNED_SHORT&&(St=s.RGBA16UI),ft===s.UNSIGNED_INT&&(St=s.RGBA32UI),ft===s.BYTE&&(St=s.RGBA8I),ft===s.SHORT&&(St=s.RGBA16I),ft===s.INT&&(St=s.RGBA32I)),D===s.RGB&&ft===s.UNSIGNED_INT_5_9_9_9_REV&&(St=s.RGB9_E5),D===s.RGBA){const kt=Nt?Cu:Ge.getTransfer(Rt);ft===s.FLOAT&&(St=s.RGBA32F),ft===s.HALF_FLOAT&&(St=s.RGBA16F),ft===s.UNSIGNED_BYTE&&(St=kt===nn?s.SRGB8_ALPHA8:s.RGBA8),ft===s.UNSIGNED_SHORT_4_4_4_4&&(St=s.RGBA4),ft===s.UNSIGNED_SHORT_5_5_5_1&&(St=s.RGB5_A1)}return(St===s.R16F||St===s.R32F||St===s.RG16F||St===s.RG32F||St===s.RGBA16F||St===s.RGBA32F)&&t.get("EXT_color_buffer_float"),St}function P(B,D){let ft;return B?D===null||D===hs||D===Ul?ft=s.DEPTH24_STENCIL8:D===ka?ft=s.DEPTH32F_STENCIL8:D===Dl&&(ft=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):D===null||D===hs||D===Ul?ft=s.DEPTH_COMPONENT24:D===ka?ft=s.DEPTH_COMPONENT32F:D===Dl&&(ft=s.DEPTH_COMPONENT16),ft}function Y(B,D){return M(B)===!0||B.isFramebufferTexture&&B.minFilter!==na&&B.minFilter!==pa?Math.log2(Math.max(D.width,D.height))+1:B.mipmaps!==void 0&&B.mipmaps.length>0?B.mipmaps.length:B.isCompressedTexture&&Array.isArray(B.image)?D.mipmaps.length:1}function z(B){const D=B.target;D.removeEventListener("dispose",z),K(D),D.isVideoTexture&&v.delete(D)}function k(B){const D=B.target;D.removeEventListener("dispose",k),O(D)}function K(B){const D=r.get(B);if(D.__webglInit===void 0)return;const ft=B.source,Rt=E.get(ft);if(Rt){const Nt=Rt[D.__cacheKey];Nt.usedTimes--,Nt.usedTimes===0&&F(B),Object.keys(Rt).length===0&&E.delete(ft)}r.remove(B)}function F(B){const D=r.get(B);s.deleteTexture(D.__webglTexture);const ft=B.source,Rt=E.get(ft);delete Rt[D.__cacheKey],p.memory.textures--}function O(B){const D=r.get(B);if(B.depthTexture&&(B.depthTexture.dispose(),r.remove(B.depthTexture)),B.isWebGLCubeRenderTarget)for(let Rt=0;Rt<6;Rt++){if(Array.isArray(D.__webglFramebuffer[Rt]))for(let Nt=0;Nt<D.__webglFramebuffer[Rt].length;Nt++)s.deleteFramebuffer(D.__webglFramebuffer[Rt][Nt]);else s.deleteFramebuffer(D.__webglFramebuffer[Rt]);D.__webglDepthbuffer&&s.deleteRenderbuffer(D.__webglDepthbuffer[Rt])}else{if(Array.isArray(D.__webglFramebuffer))for(let Rt=0;Rt<D.__webglFramebuffer.length;Rt++)s.deleteFramebuffer(D.__webglFramebuffer[Rt]);else s.deleteFramebuffer(D.__webglFramebuffer);if(D.__webglDepthbuffer&&s.deleteRenderbuffer(D.__webglDepthbuffer),D.__webglMultisampledFramebuffer&&s.deleteFramebuffer(D.__webglMultisampledFramebuffer),D.__webglColorRenderbuffer)for(let Rt=0;Rt<D.__webglColorRenderbuffer.length;Rt++)D.__webglColorRenderbuffer[Rt]&&s.deleteRenderbuffer(D.__webglColorRenderbuffer[Rt]);D.__webglDepthRenderbuffer&&s.deleteRenderbuffer(D.__webglDepthRenderbuffer)}const ft=B.textures;for(let Rt=0,Nt=ft.length;Rt<Nt;Rt++){const St=r.get(ft[Rt]);St.__webglTexture&&(s.deleteTexture(St.__webglTexture),p.memory.textures--),r.remove(ft[Rt])}r.remove(B)}let q=0;function rt(){q=0}function dt(){const B=q;return B>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+B+" texture units while this GPU supports only "+l.maxTextures),q+=1,B}function _t(B){const D=[];return D.push(B.wrapS),D.push(B.wrapT),D.push(B.wrapR||0),D.push(B.magFilter),D.push(B.minFilter),D.push(B.anisotropy),D.push(B.internalFormat),D.push(B.format),D.push(B.type),D.push(B.generateMipmaps),D.push(B.premultiplyAlpha),D.push(B.flipY),D.push(B.unpackAlignment),D.push(B.colorSpace),D.join()}function Mt(B,D){const ft=r.get(B);if(B.isVideoTexture&&ne(B),B.isRenderTargetTexture===!1&&B.version>0&&ft.__version!==B.version){const Rt=B.image;if(Rt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Rt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{at(ft,B,D);return}}i.bindTexture(s.TEXTURE_2D,ft.__webglTexture,s.TEXTURE0+D)}function X(B,D){const ft=r.get(B);if(B.version>0&&ft.__version!==B.version){at(ft,B,D);return}i.bindTexture(s.TEXTURE_2D_ARRAY,ft.__webglTexture,s.TEXTURE0+D)}function st(B,D){const ft=r.get(B);if(B.version>0&&ft.__version!==B.version){at(ft,B,D);return}i.bindTexture(s.TEXTURE_3D,ft.__webglTexture,s.TEXTURE0+D)}function tt(B,D){const ft=r.get(B);if(B.version>0&&ft.__version!==B.version){bt(ft,B,D);return}i.bindTexture(s.TEXTURE_CUBE_MAP,ft.__webglTexture,s.TEXTURE0+D)}const Lt={[Xd]:s.REPEAT,[us]:s.CLAMP_TO_EDGE,[Wd]:s.MIRRORED_REPEAT},I={[na]:s.NEAREST,[ux]:s.NEAREST_MIPMAP_NEAREST,[Yc]:s.NEAREST_MIPMAP_LINEAR,[pa]:s.LINEAR,[Jh]:s.LINEAR_MIPMAP_NEAREST,[fs]:s.LINEAR_MIPMAP_LINEAR},ct={[px]:s.NEVER,[Sx]:s.ALWAYS,[mx]:s.LESS,[U0]:s.LEQUAL,[gx]:s.EQUAL,[yx]:s.GEQUAL,[_x]:s.GREATER,[vx]:s.NOTEQUAL};function At(B,D){if(D.type===ka&&t.has("OES_texture_float_linear")===!1&&(D.magFilter===pa||D.magFilter===Jh||D.magFilter===Yc||D.magFilter===fs||D.minFilter===pa||D.minFilter===Jh||D.minFilter===Yc||D.minFilter===fs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(B,s.TEXTURE_WRAP_S,Lt[D.wrapS]),s.texParameteri(B,s.TEXTURE_WRAP_T,Lt[D.wrapT]),(B===s.TEXTURE_3D||B===s.TEXTURE_2D_ARRAY)&&s.texParameteri(B,s.TEXTURE_WRAP_R,Lt[D.wrapR]),s.texParameteri(B,s.TEXTURE_MAG_FILTER,I[D.magFilter]),s.texParameteri(B,s.TEXTURE_MIN_FILTER,I[D.minFilter]),D.compareFunction&&(s.texParameteri(B,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(B,s.TEXTURE_COMPARE_FUNC,ct[D.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(D.magFilter===na||D.minFilter!==Yc&&D.minFilter!==fs||D.type===ka&&t.has("OES_texture_float_linear")===!1)return;if(D.anisotropy>1||r.get(D).__currentAnisotropy){const ft=t.get("EXT_texture_filter_anisotropic");s.texParameterf(B,ft.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(D.anisotropy,l.getMaxAnisotropy())),r.get(D).__currentAnisotropy=D.anisotropy}}}function Dt(B,D){let ft=!1;B.__webglInit===void 0&&(B.__webglInit=!0,D.addEventListener("dispose",z));const Rt=D.source;let Nt=E.get(Rt);Nt===void 0&&(Nt={},E.set(Rt,Nt));const St=_t(D);if(St!==B.__cacheKey){Nt[St]===void 0&&(Nt[St]={texture:s.createTexture(),usedTimes:0},p.memory.textures++,ft=!0),Nt[St].usedTimes++;const kt=Nt[B.__cacheKey];kt!==void 0&&(Nt[B.__cacheKey].usedTimes--,kt.usedTimes===0&&F(D)),B.__cacheKey=St,B.__webglTexture=Nt[St].texture}return ft}function at(B,D,ft){let Rt=s.TEXTURE_2D;(D.isDataArrayTexture||D.isCompressedArrayTexture)&&(Rt=s.TEXTURE_2D_ARRAY),D.isData3DTexture&&(Rt=s.TEXTURE_3D);const Nt=Dt(B,D),St=D.source;i.bindTexture(Rt,B.__webglTexture,s.TEXTURE0+ft);const kt=r.get(St);if(St.version!==kt.__version||Nt===!0){i.activeTexture(s.TEXTURE0+ft);const Gt=Ge.getPrimaries(Ge.workingColorSpace),zt=D.colorSpace===Tr?null:Ge.getPrimaries(D.colorSpace),ue=D.colorSpace===Tr||Gt===zt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,D.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,D.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);let Ft=C(D.image,!1,l.maxTextureSize);Ft=We(D,Ft);const jt=c.convert(D.format,D.colorSpace),re=c.convert(D.type);let se=H(D.internalFormat,jt,re,D.colorSpace,D.isVideoTexture);At(Rt,D);let Wt;const ve=D.mipmaps,pe=D.isVideoTexture!==!0,Pe=kt.__version===void 0||Nt===!0,$=St.dataReady,Et=Y(D,Ft);if(D.isDepthTexture)se=P(D.format===Nl,D.type),Pe&&(pe?i.texStorage2D(s.TEXTURE_2D,1,se,Ft.width,Ft.height):i.texImage2D(s.TEXTURE_2D,0,se,Ft.width,Ft.height,0,jt,re,null));else if(D.isDataTexture)if(ve.length>0){pe&&Pe&&i.texStorage2D(s.TEXTURE_2D,Et,se,ve[0].width,ve[0].height);for(let vt=0,wt=ve.length;vt<wt;vt++)Wt=ve[vt],pe?$&&i.texSubImage2D(s.TEXTURE_2D,vt,0,0,Wt.width,Wt.height,jt,re,Wt.data):i.texImage2D(s.TEXTURE_2D,vt,se,Wt.width,Wt.height,0,jt,re,Wt.data);D.generateMipmaps=!1}else pe?(Pe&&i.texStorage2D(s.TEXTURE_2D,Et,se,Ft.width,Ft.height),$&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,Ft.width,Ft.height,jt,re,Ft.data)):i.texImage2D(s.TEXTURE_2D,0,se,Ft.width,Ft.height,0,jt,re,Ft.data);else if(D.isCompressedTexture)if(D.isCompressedArrayTexture){pe&&Pe&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Et,se,ve[0].width,ve[0].height,Ft.depth);for(let vt=0,wt=ve.length;vt<wt;vt++)if(Wt=ve[vt],D.format!==ta)if(jt!==null)if(pe){if($)if(D.layerUpdates.size>0){const Yt=Fv(Wt.width,Wt.height,D.format,D.type);for(const Xt of D.layerUpdates){const _e=Wt.data.subarray(Xt*Yt/Wt.data.BYTES_PER_ELEMENT,(Xt+1)*Yt/Wt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,vt,0,0,Xt,Wt.width,Wt.height,1,jt,_e)}D.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,vt,0,0,0,Wt.width,Wt.height,Ft.depth,jt,Wt.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,vt,se,Wt.width,Wt.height,Ft.depth,0,Wt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else pe?$&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,vt,0,0,0,Wt.width,Wt.height,Ft.depth,jt,re,Wt.data):i.texImage3D(s.TEXTURE_2D_ARRAY,vt,se,Wt.width,Wt.height,Ft.depth,0,jt,re,Wt.data)}else{pe&&Pe&&i.texStorage2D(s.TEXTURE_2D,Et,se,ve[0].width,ve[0].height);for(let vt=0,wt=ve.length;vt<wt;vt++)Wt=ve[vt],D.format!==ta?jt!==null?pe?$&&i.compressedTexSubImage2D(s.TEXTURE_2D,vt,0,0,Wt.width,Wt.height,jt,Wt.data):i.compressedTexImage2D(s.TEXTURE_2D,vt,se,Wt.width,Wt.height,0,Wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):pe?$&&i.texSubImage2D(s.TEXTURE_2D,vt,0,0,Wt.width,Wt.height,jt,re,Wt.data):i.texImage2D(s.TEXTURE_2D,vt,se,Wt.width,Wt.height,0,jt,re,Wt.data)}else if(D.isDataArrayTexture)if(pe){if(Pe&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Et,se,Ft.width,Ft.height,Ft.depth),$)if(D.layerUpdates.size>0){const vt=Fv(Ft.width,Ft.height,D.format,D.type);for(const wt of D.layerUpdates){const Yt=Ft.data.subarray(wt*vt/Ft.data.BYTES_PER_ELEMENT,(wt+1)*vt/Ft.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,wt,Ft.width,Ft.height,1,jt,re,Yt)}D.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Ft.width,Ft.height,Ft.depth,jt,re,Ft.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,se,Ft.width,Ft.height,Ft.depth,0,jt,re,Ft.data);else if(D.isData3DTexture)pe?(Pe&&i.texStorage3D(s.TEXTURE_3D,Et,se,Ft.width,Ft.height,Ft.depth),$&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Ft.width,Ft.height,Ft.depth,jt,re,Ft.data)):i.texImage3D(s.TEXTURE_3D,0,se,Ft.width,Ft.height,Ft.depth,0,jt,re,Ft.data);else if(D.isFramebufferTexture){if(Pe)if(pe)i.texStorage2D(s.TEXTURE_2D,Et,se,Ft.width,Ft.height);else{let vt=Ft.width,wt=Ft.height;for(let Yt=0;Yt<Et;Yt++)i.texImage2D(s.TEXTURE_2D,Yt,se,vt,wt,0,jt,re,null),vt>>=1,wt>>=1}}else if(ve.length>0){if(pe&&Pe){const vt=te(ve[0]);i.texStorage2D(s.TEXTURE_2D,Et,se,vt.width,vt.height)}for(let vt=0,wt=ve.length;vt<wt;vt++)Wt=ve[vt],pe?$&&i.texSubImage2D(s.TEXTURE_2D,vt,0,0,jt,re,Wt):i.texImage2D(s.TEXTURE_2D,vt,se,jt,re,Wt);D.generateMipmaps=!1}else if(pe){if(Pe){const vt=te(Ft);i.texStorage2D(s.TEXTURE_2D,Et,se,vt.width,vt.height)}$&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,jt,re,Ft)}else i.texImage2D(s.TEXTURE_2D,0,se,jt,re,Ft);M(D)&&x(Rt),kt.__version=St.version,D.onUpdate&&D.onUpdate(D)}B.__version=D.version}function bt(B,D,ft){if(D.image.length!==6)return;const Rt=Dt(B,D),Nt=D.source;i.bindTexture(s.TEXTURE_CUBE_MAP,B.__webglTexture,s.TEXTURE0+ft);const St=r.get(Nt);if(Nt.version!==St.__version||Rt===!0){i.activeTexture(s.TEXTURE0+ft);const kt=Ge.getPrimaries(Ge.workingColorSpace),Gt=D.colorSpace===Tr?null:Ge.getPrimaries(D.colorSpace),zt=D.colorSpace===Tr||kt===Gt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,D.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,D.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,zt);const ue=D.isCompressedTexture||D.image[0].isCompressedTexture,Ft=D.image[0]&&D.image[0].isDataTexture,jt=[];for(let wt=0;wt<6;wt++)!ue&&!Ft?jt[wt]=C(D.image[wt],!0,l.maxCubemapSize):jt[wt]=Ft?D.image[wt].image:D.image[wt],jt[wt]=We(D,jt[wt]);const re=jt[0],se=c.convert(D.format,D.colorSpace),Wt=c.convert(D.type),ve=H(D.internalFormat,se,Wt,D.colorSpace),pe=D.isVideoTexture!==!0,Pe=St.__version===void 0||Rt===!0,$=Nt.dataReady;let Et=Y(D,re);At(s.TEXTURE_CUBE_MAP,D);let vt;if(ue){pe&&Pe&&i.texStorage2D(s.TEXTURE_CUBE_MAP,Et,ve,re.width,re.height);for(let wt=0;wt<6;wt++){vt=jt[wt].mipmaps;for(let Yt=0;Yt<vt.length;Yt++){const Xt=vt[Yt];D.format!==ta?se!==null?pe?$&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+wt,Yt,0,0,Xt.width,Xt.height,se,Xt.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+wt,Yt,ve,Xt.width,Xt.height,0,Xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):pe?$&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+wt,Yt,0,0,Xt.width,Xt.height,se,Wt,Xt.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+wt,Yt,ve,Xt.width,Xt.height,0,se,Wt,Xt.data)}}}else{if(vt=D.mipmaps,pe&&Pe){vt.length>0&&Et++;const wt=te(jt[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,Et,ve,wt.width,wt.height)}for(let wt=0;wt<6;wt++)if(Ft){pe?$&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,0,0,jt[wt].width,jt[wt].height,se,Wt,jt[wt].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,ve,jt[wt].width,jt[wt].height,0,se,Wt,jt[wt].data);for(let Yt=0;Yt<vt.length;Yt++){const _e=vt[Yt].image[wt].image;pe?$&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+wt,Yt+1,0,0,_e.width,_e.height,se,Wt,_e.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+wt,Yt+1,ve,_e.width,_e.height,0,se,Wt,_e.data)}}else{pe?$&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,0,0,se,Wt,jt[wt]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,ve,se,Wt,jt[wt]);for(let Yt=0;Yt<vt.length;Yt++){const Xt=vt[Yt];pe?$&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+wt,Yt+1,0,0,se,Wt,Xt.image[wt]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+wt,Yt+1,ve,se,Wt,Xt.image[wt])}}}M(D)&&x(s.TEXTURE_CUBE_MAP),St.__version=Nt.version,D.onUpdate&&D.onUpdate(D)}B.__version=D.version}function Ut(B,D,ft,Rt,Nt,St){const kt=c.convert(ft.format,ft.colorSpace),Gt=c.convert(ft.type),zt=H(ft.internalFormat,kt,Gt,ft.colorSpace),ue=r.get(D),Ft=r.get(ft);if(Ft.__renderTarget=D,!ue.__hasExternalTextures){const jt=Math.max(1,D.width>>St),re=Math.max(1,D.height>>St);Nt===s.TEXTURE_3D||Nt===s.TEXTURE_2D_ARRAY?i.texImage3D(Nt,St,zt,jt,re,D.depth,0,kt,Gt,null):i.texImage2D(Nt,St,zt,jt,re,0,kt,Gt,null)}i.bindFramebuffer(s.FRAMEBUFFER,B),ge(D)?m.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Rt,Nt,Ft.__webglTexture,0,we(D)):(Nt===s.TEXTURE_2D||Nt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Nt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Rt,Nt,Ft.__webglTexture,St),i.bindFramebuffer(s.FRAMEBUFFER,null)}function It(B,D,ft){if(s.bindRenderbuffer(s.RENDERBUFFER,B),D.depthBuffer){const Rt=D.depthTexture,Nt=Rt&&Rt.isDepthTexture?Rt.type:null,St=P(D.stencilBuffer,Nt),kt=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Gt=we(D);ge(D)?m.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Gt,St,D.width,D.height):ft?s.renderbufferStorageMultisample(s.RENDERBUFFER,Gt,St,D.width,D.height):s.renderbufferStorage(s.RENDERBUFFER,St,D.width,D.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,kt,s.RENDERBUFFER,B)}else{const Rt=D.textures;for(let Nt=0;Nt<Rt.length;Nt++){const St=Rt[Nt],kt=c.convert(St.format,St.colorSpace),Gt=c.convert(St.type),zt=H(St.internalFormat,kt,Gt,St.colorSpace),ue=we(D);ft&&ge(D)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ue,zt,D.width,D.height):ge(D)?m.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ue,zt,D.width,D.height):s.renderbufferStorage(s.RENDERBUFFER,zt,D.width,D.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Pt(B,D){if(D&&D.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(s.FRAMEBUFFER,B),!(D.depthTexture&&D.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Rt=r.get(D.depthTexture);Rt.__renderTarget=D,(!Rt.__webglTexture||D.depthTexture.image.width!==D.width||D.depthTexture.image.height!==D.height)&&(D.depthTexture.image.width=D.width,D.depthTexture.image.height=D.height,D.depthTexture.needsUpdate=!0),Mt(D.depthTexture,0);const Nt=Rt.__webglTexture,St=we(D);if(D.depthTexture.format===Ll)ge(D)?m.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Nt,0,St):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Nt,0);else if(D.depthTexture.format===Nl)ge(D)?m.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Nt,0,St):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Nt,0);else throw new Error("Unknown depthTexture format")}function ce(B){const D=r.get(B),ft=B.isWebGLCubeRenderTarget===!0;if(D.__boundDepthTexture!==B.depthTexture){const Rt=B.depthTexture;if(D.__depthDisposeCallback&&D.__depthDisposeCallback(),Rt){const Nt=()=>{delete D.__boundDepthTexture,delete D.__depthDisposeCallback,Rt.removeEventListener("dispose",Nt)};Rt.addEventListener("dispose",Nt),D.__depthDisposeCallback=Nt}D.__boundDepthTexture=Rt}if(B.depthTexture&&!D.__autoAllocateDepthBuffer){if(ft)throw new Error("target.depthTexture not supported in Cube render targets");const Rt=B.texture.mipmaps;Rt&&Rt.length>0?Pt(D.__webglFramebuffer[0],B):Pt(D.__webglFramebuffer,B)}else if(ft){D.__webglDepthbuffer=[];for(let Rt=0;Rt<6;Rt++)if(i.bindFramebuffer(s.FRAMEBUFFER,D.__webglFramebuffer[Rt]),D.__webglDepthbuffer[Rt]===void 0)D.__webglDepthbuffer[Rt]=s.createRenderbuffer(),It(D.__webglDepthbuffer[Rt],B,!1);else{const Nt=B.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,St=D.__webglDepthbuffer[Rt];s.bindRenderbuffer(s.RENDERBUFFER,St),s.framebufferRenderbuffer(s.FRAMEBUFFER,Nt,s.RENDERBUFFER,St)}}else{const Rt=B.texture.mipmaps;if(Rt&&Rt.length>0?i.bindFramebuffer(s.FRAMEBUFFER,D.__webglFramebuffer[0]):i.bindFramebuffer(s.FRAMEBUFFER,D.__webglFramebuffer),D.__webglDepthbuffer===void 0)D.__webglDepthbuffer=s.createRenderbuffer(),It(D.__webglDepthbuffer,B,!1);else{const Nt=B.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,St=D.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,St),s.framebufferRenderbuffer(s.FRAMEBUFFER,Nt,s.RENDERBUFFER,St)}}i.bindFramebuffer(s.FRAMEBUFFER,null)}function ee(B,D,ft){const Rt=r.get(B);D!==void 0&&Ut(Rt.__webglFramebuffer,B,B.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),ft!==void 0&&ce(B)}function Ve(B){const D=B.texture,ft=r.get(B),Rt=r.get(D);B.addEventListener("dispose",k);const Nt=B.textures,St=B.isWebGLCubeRenderTarget===!0,kt=Nt.length>1;if(kt||(Rt.__webglTexture===void 0&&(Rt.__webglTexture=s.createTexture()),Rt.__version=D.version,p.memory.textures++),St){ft.__webglFramebuffer=[];for(let Gt=0;Gt<6;Gt++)if(D.mipmaps&&D.mipmaps.length>0){ft.__webglFramebuffer[Gt]=[];for(let zt=0;zt<D.mipmaps.length;zt++)ft.__webglFramebuffer[Gt][zt]=s.createFramebuffer()}else ft.__webglFramebuffer[Gt]=s.createFramebuffer()}else{if(D.mipmaps&&D.mipmaps.length>0){ft.__webglFramebuffer=[];for(let Gt=0;Gt<D.mipmaps.length;Gt++)ft.__webglFramebuffer[Gt]=s.createFramebuffer()}else ft.__webglFramebuffer=s.createFramebuffer();if(kt)for(let Gt=0,zt=Nt.length;Gt<zt;Gt++){const ue=r.get(Nt[Gt]);ue.__webglTexture===void 0&&(ue.__webglTexture=s.createTexture(),p.memory.textures++)}if(B.samples>0&&ge(B)===!1){ft.__webglMultisampledFramebuffer=s.createFramebuffer(),ft.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,ft.__webglMultisampledFramebuffer);for(let Gt=0;Gt<Nt.length;Gt++){const zt=Nt[Gt];ft.__webglColorRenderbuffer[Gt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,ft.__webglColorRenderbuffer[Gt]);const ue=c.convert(zt.format,zt.colorSpace),Ft=c.convert(zt.type),jt=H(zt.internalFormat,ue,Ft,zt.colorSpace,B.isXRRenderTarget===!0),re=we(B);s.renderbufferStorageMultisample(s.RENDERBUFFER,re,jt,B.width,B.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Gt,s.RENDERBUFFER,ft.__webglColorRenderbuffer[Gt])}s.bindRenderbuffer(s.RENDERBUFFER,null),B.depthBuffer&&(ft.__webglDepthRenderbuffer=s.createRenderbuffer(),It(ft.__webglDepthRenderbuffer,B,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(St){i.bindTexture(s.TEXTURE_CUBE_MAP,Rt.__webglTexture),At(s.TEXTURE_CUBE_MAP,D);for(let Gt=0;Gt<6;Gt++)if(D.mipmaps&&D.mipmaps.length>0)for(let zt=0;zt<D.mipmaps.length;zt++)Ut(ft.__webglFramebuffer[Gt][zt],B,D,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Gt,zt);else Ut(ft.__webglFramebuffer[Gt],B,D,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Gt,0);M(D)&&x(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(kt){for(let Gt=0,zt=Nt.length;Gt<zt;Gt++){const ue=Nt[Gt],Ft=r.get(ue);i.bindTexture(s.TEXTURE_2D,Ft.__webglTexture),At(s.TEXTURE_2D,ue),Ut(ft.__webglFramebuffer,B,ue,s.COLOR_ATTACHMENT0+Gt,s.TEXTURE_2D,0),M(ue)&&x(s.TEXTURE_2D)}i.unbindTexture()}else{let Gt=s.TEXTURE_2D;if((B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(Gt=B.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Gt,Rt.__webglTexture),At(Gt,D),D.mipmaps&&D.mipmaps.length>0)for(let zt=0;zt<D.mipmaps.length;zt++)Ut(ft.__webglFramebuffer[zt],B,D,s.COLOR_ATTACHMENT0,Gt,zt);else Ut(ft.__webglFramebuffer,B,D,s.COLOR_ATTACHMENT0,Gt,0);M(D)&&x(Gt),i.unbindTexture()}B.depthBuffer&&ce(B)}function Ye(B){const D=B.textures;for(let ft=0,Rt=D.length;ft<Rt;ft++){const Nt=D[ft];if(M(Nt)){const St=V(B),kt=r.get(Nt).__webglTexture;i.bindTexture(St,kt),x(St),i.unbindTexture()}}}const Me=[],Z=[];function Yn(B){if(B.samples>0){if(ge(B)===!1){const D=B.textures,ft=B.width,Rt=B.height;let Nt=s.COLOR_BUFFER_BIT;const St=B.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,kt=r.get(B),Gt=D.length>1;if(Gt)for(let ue=0;ue<D.length;ue++)i.bindFramebuffer(s.FRAMEBUFFER,kt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ue,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,kt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ue,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,kt.__webglMultisampledFramebuffer);const zt=B.texture.mipmaps;zt&&zt.length>0?i.bindFramebuffer(s.DRAW_FRAMEBUFFER,kt.__webglFramebuffer[0]):i.bindFramebuffer(s.DRAW_FRAMEBUFFER,kt.__webglFramebuffer);for(let ue=0;ue<D.length;ue++){if(B.resolveDepthBuffer&&(B.depthBuffer&&(Nt|=s.DEPTH_BUFFER_BIT),B.stencilBuffer&&B.resolveStencilBuffer&&(Nt|=s.STENCIL_BUFFER_BIT)),Gt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,kt.__webglColorRenderbuffer[ue]);const Ft=r.get(D[ue]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ft,0)}s.blitFramebuffer(0,0,ft,Rt,0,0,ft,Rt,Nt,s.NEAREST),_===!0&&(Me.length=0,Z.length=0,Me.push(s.COLOR_ATTACHMENT0+ue),B.depthBuffer&&B.resolveDepthBuffer===!1&&(Me.push(St),Z.push(St),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Z)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Me))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Gt)for(let ue=0;ue<D.length;ue++){i.bindFramebuffer(s.FRAMEBUFFER,kt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ue,s.RENDERBUFFER,kt.__webglColorRenderbuffer[ue]);const Ft=r.get(D[ue]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,kt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ue,s.TEXTURE_2D,Ft,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,kt.__webglMultisampledFramebuffer)}else if(B.depthBuffer&&B.resolveDepthBuffer===!1&&_){const D=B.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[D])}}}function we(B){return Math.min(l.maxSamples,B.samples)}function ge(B){const D=r.get(B);return B.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&D.__useRenderToTexture!==!1}function ne(B){const D=p.render.frame;v.get(B)!==D&&(v.set(B,D),B.update())}function We(B,D){const ft=B.colorSpace,Rt=B.format,Nt=B.type;return B.isCompressedTexture===!0||B.isVideoTexture===!0||ft!==So&&ft!==Tr&&(Ge.getTransfer(ft)===nn?(Rt!==ta||Nt!==ga)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ft)),D}function te(B){return typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement?(g.width=B.naturalWidth||B.width,g.height=B.naturalHeight||B.height):typeof VideoFrame<"u"&&B instanceof VideoFrame?(g.width=B.displayWidth,g.height=B.displayHeight):(g.width=B.width,g.height=B.height),g}this.allocateTextureUnit=dt,this.resetTextureUnits=rt,this.setTexture2D=Mt,this.setTexture2DArray=X,this.setTexture3D=st,this.setTextureCube=tt,this.rebindTextures=ee,this.setupRenderTarget=Ve,this.updateRenderTargetMipmap=Ye,this.updateMultisampleRenderTarget=Yn,this.setupDepthRenderbuffer=ce,this.setupFrameBufferTexture=Ut,this.useMultisampledRTT=ge}function G1(s,t){function i(r,l=Tr){let c;const p=Ge.getTransfer(l);if(r===ga)return s.UNSIGNED_BYTE;if(r===Tp)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Ap)return s.UNSIGNED_SHORT_5_5_5_1;if(r===b0)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===E0)return s.BYTE;if(r===M0)return s.SHORT;if(r===Dl)return s.UNSIGNED_SHORT;if(r===bp)return s.INT;if(r===hs)return s.UNSIGNED_INT;if(r===ka)return s.FLOAT;if(r===Ol)return s.HALF_FLOAT;if(r===T0)return s.ALPHA;if(r===A0)return s.RGB;if(r===ta)return s.RGBA;if(r===Ll)return s.DEPTH_COMPONENT;if(r===Nl)return s.DEPTH_STENCIL;if(r===R0)return s.RED;if(r===Rp)return s.RED_INTEGER;if(r===w0)return s.RG;if(r===wp)return s.RG_INTEGER;if(r===Cp)return s.RGBA_INTEGER;if(r===Su||r===xu||r===Eu||r===Mu)if(p===nn)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Su)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===xu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Eu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Mu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Su)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===xu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Eu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Mu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===qd||r===Yd||r===jd||r===Zd)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===qd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Yd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===jd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Zd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Kd||r===Qd||r===Jd)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(r===Kd||r===Qd)return p===nn?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===Jd)return p===nn?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===$d||r===tp||r===ep||r===np||r===ip||r===ap||r===rp||r===sp||r===op||r===lp||r===cp||r===up||r===fp||r===hp)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(r===$d)return p===nn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===tp)return p===nn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===ep)return p===nn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===np)return p===nn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===ip)return p===nn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===ap)return p===nn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===rp)return p===nn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===sp)return p===nn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===op)return p===nn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===lp)return p===nn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===cp)return p===nn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===up)return p===nn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===fp)return p===nn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===hp)return p===nn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===bu||r===dp||r===pp)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(r===bu)return p===nn?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===dp)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===pp)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===C0||r===mp||r===gp||r===_p)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(r===bu)return c.COMPRESSED_RED_RGTC1_EXT;if(r===mp)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===gp)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===_p)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ul?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:i}}const V1=`
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

}`;class X1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i,r){if(this.texture===null){const l=new _i,c=t.properties.get(l);c.__webglTexture=i.texture,(i.depthNear!==r.depthNear||i.depthFar!==r.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,r=new Cr({vertexShader:V1,fragmentShader:k1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new ea(new Bu(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class W1 extends ms{constructor(t,i){super();const r=this;let l=null,c=1,p=null,m="local-floor",_=1,g=null,v=null,y=null,E=null,b=null,w=null;const C=new X1,M=i.getContextAttributes();let x=null,V=null;const H=[],P=[],Y=new Ee;let z=null;const k=new Gi;k.viewport=new gn;const K=new Gi;K.viewport=new gn;const F=[k,K],O=new fE;let q=null,rt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(at){let bt=H[at];return bt===void 0&&(bt=new yd,H[at]=bt),bt.getTargetRaySpace()},this.getControllerGrip=function(at){let bt=H[at];return bt===void 0&&(bt=new yd,H[at]=bt),bt.getGripSpace()},this.getHand=function(at){let bt=H[at];return bt===void 0&&(bt=new yd,H[at]=bt),bt.getHandSpace()};function dt(at){const bt=P.indexOf(at.inputSource);if(bt===-1)return;const Ut=H[bt];Ut!==void 0&&(Ut.update(at.inputSource,at.frame,g||p),Ut.dispatchEvent({type:at.type,data:at.inputSource}))}function _t(){l.removeEventListener("select",dt),l.removeEventListener("selectstart",dt),l.removeEventListener("selectend",dt),l.removeEventListener("squeeze",dt),l.removeEventListener("squeezestart",dt),l.removeEventListener("squeezeend",dt),l.removeEventListener("end",_t),l.removeEventListener("inputsourceschange",Mt);for(let at=0;at<H.length;at++){const bt=P[at];bt!==null&&(P[at]=null,H[at].disconnect(bt))}q=null,rt=null,C.reset(),t.setRenderTarget(x),b=null,E=null,y=null,l=null,V=null,Dt.stop(),r.isPresenting=!1,t.setPixelRatio(z),t.setSize(Y.width,Y.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(at){c=at,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(at){m=at,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return g||p},this.setReferenceSpace=function(at){g=at},this.getBaseLayer=function(){return E!==null?E:b},this.getBinding=function(){return y},this.getFrame=function(){return w},this.getSession=function(){return l},this.setSession=async function(at){if(l=at,l!==null){if(x=t.getRenderTarget(),l.addEventListener("select",dt),l.addEventListener("selectstart",dt),l.addEventListener("selectend",dt),l.addEventListener("squeeze",dt),l.addEventListener("squeezestart",dt),l.addEventListener("squeezeend",dt),l.addEventListener("end",_t),l.addEventListener("inputsourceschange",Mt),M.xrCompatible!==!0&&await i.makeXRCompatible(),z=t.getPixelRatio(),t.getSize(Y),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ut=null,It=null,Pt=null;M.depth&&(Pt=M.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Ut=M.stencil?Nl:Ll,It=M.stencil?Ul:hs);const ce={colorFormat:i.RGBA8,depthFormat:Pt,scaleFactor:c};y=new XRWebGLBinding(l,i),E=y.createProjectionLayer(ce),l.updateRenderState({layers:[E]}),t.setPixelRatio(1),t.setSize(E.textureWidth,E.textureHeight,!1),V=new ds(E.textureWidth,E.textureHeight,{format:ta,type:ga,depthTexture:new V0(E.textureWidth,E.textureHeight,It,void 0,void 0,void 0,void 0,void 0,void 0,Ut),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1})}else{const Ut={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:c};b=new XRWebGLLayer(l,i,Ut),l.updateRenderState({baseLayer:b}),t.setPixelRatio(1),t.setSize(b.framebufferWidth,b.framebufferHeight,!1),V=new ds(b.framebufferWidth,b.framebufferHeight,{format:ta,type:ga,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:b.ignoreDepthValues===!1,resolveStencilBuffer:b.ignoreDepthValues===!1})}V.isXRRenderTarget=!0,this.setFoveation(_),g=null,p=await l.requestReferenceSpace(m),Dt.setContext(l),Dt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return C.getDepthTexture()};function Mt(at){for(let bt=0;bt<at.removed.length;bt++){const Ut=at.removed[bt],It=P.indexOf(Ut);It>=0&&(P[It]=null,H[It].disconnect(Ut))}for(let bt=0;bt<at.added.length;bt++){const Ut=at.added[bt];let It=P.indexOf(Ut);if(It===-1){for(let ce=0;ce<H.length;ce++)if(ce>=P.length){P.push(Ut),It=ce;break}else if(P[ce]===null){P[ce]=Ut,It=ce;break}if(It===-1)break}const Pt=H[It];Pt&&Pt.connect(Ut)}}const X=new ot,st=new ot;function tt(at,bt,Ut){X.setFromMatrixPosition(bt.matrixWorld),st.setFromMatrixPosition(Ut.matrixWorld);const It=X.distanceTo(st),Pt=bt.projectionMatrix.elements,ce=Ut.projectionMatrix.elements,ee=Pt[14]/(Pt[10]-1),Ve=Pt[14]/(Pt[10]+1),Ye=(Pt[9]+1)/Pt[5],Me=(Pt[9]-1)/Pt[5],Z=(Pt[8]-1)/Pt[0],Yn=(ce[8]+1)/ce[0],we=ee*Z,ge=ee*Yn,ne=It/(-Z+Yn),We=ne*-Z;if(bt.matrixWorld.decompose(at.position,at.quaternion,at.scale),at.translateX(We),at.translateZ(ne),at.matrixWorld.compose(at.position,at.quaternion,at.scale),at.matrixWorldInverse.copy(at.matrixWorld).invert(),Pt[10]===-1)at.projectionMatrix.copy(bt.projectionMatrix),at.projectionMatrixInverse.copy(bt.projectionMatrixInverse);else{const te=ee+ne,B=Ve+ne,D=we-We,ft=ge+(It-We),Rt=Ye*Ve/B*te,Nt=Me*Ve/B*te;at.projectionMatrix.makePerspective(D,ft,Rt,Nt,te,B),at.projectionMatrixInverse.copy(at.projectionMatrix).invert()}}function Lt(at,bt){bt===null?at.matrixWorld.copy(at.matrix):at.matrixWorld.multiplyMatrices(bt.matrixWorld,at.matrix),at.matrixWorldInverse.copy(at.matrixWorld).invert()}this.updateCamera=function(at){if(l===null)return;let bt=at.near,Ut=at.far;C.texture!==null&&(C.depthNear>0&&(bt=C.depthNear),C.depthFar>0&&(Ut=C.depthFar)),O.near=K.near=k.near=bt,O.far=K.far=k.far=Ut,(q!==O.near||rt!==O.far)&&(l.updateRenderState({depthNear:O.near,depthFar:O.far}),q=O.near,rt=O.far),k.layers.mask=at.layers.mask|2,K.layers.mask=at.layers.mask|4,O.layers.mask=k.layers.mask|K.layers.mask;const It=at.parent,Pt=O.cameras;Lt(O,It);for(let ce=0;ce<Pt.length;ce++)Lt(Pt[ce],It);Pt.length===2?tt(O,k,K):O.projectionMatrix.copy(k.projectionMatrix),I(at,O,It)};function I(at,bt,Ut){Ut===null?at.matrix.copy(bt.matrixWorld):(at.matrix.copy(Ut.matrixWorld),at.matrix.invert(),at.matrix.multiply(bt.matrixWorld)),at.matrix.decompose(at.position,at.quaternion,at.scale),at.updateMatrixWorld(!0),at.projectionMatrix.copy(bt.projectionMatrix),at.projectionMatrixInverse.copy(bt.projectionMatrixInverse),at.isPerspectiveCamera&&(at.fov=vp*2*Math.atan(1/at.projectionMatrix.elements[5]),at.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(E===null&&b===null))return _},this.setFoveation=function(at){_=at,E!==null&&(E.fixedFoveation=at),b!==null&&b.fixedFoveation!==void 0&&(b.fixedFoveation=at)},this.hasDepthSensing=function(){return C.texture!==null},this.getDepthSensingMesh=function(){return C.getMesh(O)};let ct=null;function At(at,bt){if(v=bt.getViewerPose(g||p),w=bt,v!==null){const Ut=v.views;b!==null&&(t.setRenderTargetFramebuffer(V,b.framebuffer),t.setRenderTarget(V));let It=!1;Ut.length!==O.cameras.length&&(O.cameras.length=0,It=!0);for(let ee=0;ee<Ut.length;ee++){const Ve=Ut[ee];let Ye=null;if(b!==null)Ye=b.getViewport(Ve);else{const Z=y.getViewSubImage(E,Ve);Ye=Z.viewport,ee===0&&(t.setRenderTargetTextures(V,Z.colorTexture,Z.depthStencilTexture),t.setRenderTarget(V))}let Me=F[ee];Me===void 0&&(Me=new Gi,Me.layers.enable(ee),Me.viewport=new gn,F[ee]=Me),Me.matrix.fromArray(Ve.transform.matrix),Me.matrix.decompose(Me.position,Me.quaternion,Me.scale),Me.projectionMatrix.fromArray(Ve.projectionMatrix),Me.projectionMatrixInverse.copy(Me.projectionMatrix).invert(),Me.viewport.set(Ye.x,Ye.y,Ye.width,Ye.height),ee===0&&(O.matrix.copy(Me.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),It===!0&&O.cameras.push(Me)}const Pt=l.enabledFeatures;if(Pt&&Pt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&y){const ee=y.getDepthInformation(Ut[0]);ee&&ee.isValid&&ee.texture&&C.init(t,ee,l.renderState)}}for(let Ut=0;Ut<H.length;Ut++){const It=P[Ut],Pt=H[Ut];It!==null&&Pt!==void 0&&Pt.update(It,bt,g||p)}ct&&ct(at,bt),bt.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:bt}),w=null}const Dt=new X0;Dt.setAnimationLoop(At),this.setAnimationLoop=function(at){ct=at},this.dispose=function(){}}}const ss=new _a,q1=new fn;function Y1(s,t){function i(M,x){M.matrixAutoUpdate===!0&&M.updateMatrix(),x.value.copy(M.matrix)}function r(M,x){x.color.getRGB(M.fogColor.value,z0(s)),x.isFog?(M.fogNear.value=x.near,M.fogFar.value=x.far):x.isFogExp2&&(M.fogDensity.value=x.density)}function l(M,x,V,H,P){x.isMeshBasicMaterial||x.isMeshLambertMaterial?c(M,x):x.isMeshToonMaterial?(c(M,x),y(M,x)):x.isMeshPhongMaterial?(c(M,x),v(M,x)):x.isMeshStandardMaterial?(c(M,x),E(M,x),x.isMeshPhysicalMaterial&&b(M,x,P)):x.isMeshMatcapMaterial?(c(M,x),w(M,x)):x.isMeshDepthMaterial?c(M,x):x.isMeshDistanceMaterial?(c(M,x),C(M,x)):x.isMeshNormalMaterial?c(M,x):x.isLineBasicMaterial?(p(M,x),x.isLineDashedMaterial&&m(M,x)):x.isPointsMaterial?_(M,x,V,H):x.isSpriteMaterial?g(M,x):x.isShadowMaterial?(M.color.value.copy(x.color),M.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function c(M,x){M.opacity.value=x.opacity,x.color&&M.diffuse.value.copy(x.color),x.emissive&&M.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(M.map.value=x.map,i(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.bumpMap&&(M.bumpMap.value=x.bumpMap,i(x.bumpMap,M.bumpMapTransform),M.bumpScale.value=x.bumpScale,x.side===gi&&(M.bumpScale.value*=-1)),x.normalMap&&(M.normalMap.value=x.normalMap,i(x.normalMap,M.normalMapTransform),M.normalScale.value.copy(x.normalScale),x.side===gi&&M.normalScale.value.negate()),x.displacementMap&&(M.displacementMap.value=x.displacementMap,i(x.displacementMap,M.displacementMapTransform),M.displacementScale.value=x.displacementScale,M.displacementBias.value=x.displacementBias),x.emissiveMap&&(M.emissiveMap.value=x.emissiveMap,i(x.emissiveMap,M.emissiveMapTransform)),x.specularMap&&(M.specularMap.value=x.specularMap,i(x.specularMap,M.specularMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest);const V=t.get(x),H=V.envMap,P=V.envMapRotation;H&&(M.envMap.value=H,ss.copy(P),ss.x*=-1,ss.y*=-1,ss.z*=-1,H.isCubeTexture&&H.isRenderTargetTexture===!1&&(ss.y*=-1,ss.z*=-1),M.envMapRotation.value.setFromMatrix4(q1.makeRotationFromEuler(ss)),M.flipEnvMap.value=H.isCubeTexture&&H.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=x.reflectivity,M.ior.value=x.ior,M.refractionRatio.value=x.refractionRatio),x.lightMap&&(M.lightMap.value=x.lightMap,M.lightMapIntensity.value=x.lightMapIntensity,i(x.lightMap,M.lightMapTransform)),x.aoMap&&(M.aoMap.value=x.aoMap,M.aoMapIntensity.value=x.aoMapIntensity,i(x.aoMap,M.aoMapTransform))}function p(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,x.map&&(M.map.value=x.map,i(x.map,M.mapTransform))}function m(M,x){M.dashSize.value=x.dashSize,M.totalSize.value=x.dashSize+x.gapSize,M.scale.value=x.scale}function _(M,x,V,H){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.size.value=x.size*V,M.scale.value=H*.5,x.map&&(M.map.value=x.map,i(x.map,M.uvTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function g(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.rotation.value=x.rotation,x.map&&(M.map.value=x.map,i(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function v(M,x){M.specular.value.copy(x.specular),M.shininess.value=Math.max(x.shininess,1e-4)}function y(M,x){x.gradientMap&&(M.gradientMap.value=x.gradientMap)}function E(M,x){M.metalness.value=x.metalness,x.metalnessMap&&(M.metalnessMap.value=x.metalnessMap,i(x.metalnessMap,M.metalnessMapTransform)),M.roughness.value=x.roughness,x.roughnessMap&&(M.roughnessMap.value=x.roughnessMap,i(x.roughnessMap,M.roughnessMapTransform)),x.envMap&&(M.envMapIntensity.value=x.envMapIntensity)}function b(M,x,V){M.ior.value=x.ior,x.sheen>0&&(M.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),M.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(M.sheenColorMap.value=x.sheenColorMap,i(x.sheenColorMap,M.sheenColorMapTransform)),x.sheenRoughnessMap&&(M.sheenRoughnessMap.value=x.sheenRoughnessMap,i(x.sheenRoughnessMap,M.sheenRoughnessMapTransform))),x.clearcoat>0&&(M.clearcoat.value=x.clearcoat,M.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(M.clearcoatMap.value=x.clearcoatMap,i(x.clearcoatMap,M.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,i(x.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(M.clearcoatNormalMap.value=x.clearcoatNormalMap,i(x.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===gi&&M.clearcoatNormalScale.value.negate())),x.dispersion>0&&(M.dispersion.value=x.dispersion),x.iridescence>0&&(M.iridescence.value=x.iridescence,M.iridescenceIOR.value=x.iridescenceIOR,M.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(M.iridescenceMap.value=x.iridescenceMap,i(x.iridescenceMap,M.iridescenceMapTransform)),x.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=x.iridescenceThicknessMap,i(x.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),x.transmission>0&&(M.transmission.value=x.transmission,M.transmissionSamplerMap.value=V.texture,M.transmissionSamplerSize.value.set(V.width,V.height),x.transmissionMap&&(M.transmissionMap.value=x.transmissionMap,i(x.transmissionMap,M.transmissionMapTransform)),M.thickness.value=x.thickness,x.thicknessMap&&(M.thicknessMap.value=x.thicknessMap,i(x.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=x.attenuationDistance,M.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(M.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(M.anisotropyMap.value=x.anisotropyMap,i(x.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=x.specularIntensity,M.specularColor.value.copy(x.specularColor),x.specularColorMap&&(M.specularColorMap.value=x.specularColorMap,i(x.specularColorMap,M.specularColorMapTransform)),x.specularIntensityMap&&(M.specularIntensityMap.value=x.specularIntensityMap,i(x.specularIntensityMap,M.specularIntensityMapTransform))}function w(M,x){x.matcap&&(M.matcap.value=x.matcap)}function C(M,x){const V=t.get(x).light;M.referencePosition.value.setFromMatrixPosition(V.matrixWorld),M.nearDistance.value=V.shadow.camera.near,M.farDistance.value=V.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function j1(s,t,i,r){let l={},c={},p=[];const m=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function _(V,H){const P=H.program;r.uniformBlockBinding(V,P)}function g(V,H){let P=l[V.id];P===void 0&&(w(V),P=v(V),l[V.id]=P,V.addEventListener("dispose",M));const Y=H.program;r.updateUBOMapping(V,Y);const z=t.render.frame;c[V.id]!==z&&(E(V),c[V.id]=z)}function v(V){const H=y();V.__bindingPointIndex=H;const P=s.createBuffer(),Y=V.__size,z=V.usage;return s.bindBuffer(s.UNIFORM_BUFFER,P),s.bufferData(s.UNIFORM_BUFFER,Y,z),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,H,P),P}function y(){for(let V=0;V<m;V++)if(p.indexOf(V)===-1)return p.push(V),V;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function E(V){const H=l[V.id],P=V.uniforms,Y=V.__cache;s.bindBuffer(s.UNIFORM_BUFFER,H);for(let z=0,k=P.length;z<k;z++){const K=Array.isArray(P[z])?P[z]:[P[z]];for(let F=0,O=K.length;F<O;F++){const q=K[F];if(b(q,z,F,Y)===!0){const rt=q.__offset,dt=Array.isArray(q.value)?q.value:[q.value];let _t=0;for(let Mt=0;Mt<dt.length;Mt++){const X=dt[Mt],st=C(X);typeof X=="number"||typeof X=="boolean"?(q.__data[0]=X,s.bufferSubData(s.UNIFORM_BUFFER,rt+_t,q.__data)):X.isMatrix3?(q.__data[0]=X.elements[0],q.__data[1]=X.elements[1],q.__data[2]=X.elements[2],q.__data[3]=0,q.__data[4]=X.elements[3],q.__data[5]=X.elements[4],q.__data[6]=X.elements[5],q.__data[7]=0,q.__data[8]=X.elements[6],q.__data[9]=X.elements[7],q.__data[10]=X.elements[8],q.__data[11]=0):(X.toArray(q.__data,_t),_t+=st.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,rt,q.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function b(V,H,P,Y){const z=V.value,k=H+"_"+P;if(Y[k]===void 0)return typeof z=="number"||typeof z=="boolean"?Y[k]=z:Y[k]=z.clone(),!0;{const K=Y[k];if(typeof z=="number"||typeof z=="boolean"){if(K!==z)return Y[k]=z,!0}else if(K.equals(z)===!1)return K.copy(z),!0}return!1}function w(V){const H=V.uniforms;let P=0;const Y=16;for(let k=0,K=H.length;k<K;k++){const F=Array.isArray(H[k])?H[k]:[H[k]];for(let O=0,q=F.length;O<q;O++){const rt=F[O],dt=Array.isArray(rt.value)?rt.value:[rt.value];for(let _t=0,Mt=dt.length;_t<Mt;_t++){const X=dt[_t],st=C(X),tt=P%Y,Lt=tt%st.boundary,I=tt+Lt;P+=Lt,I!==0&&Y-I<st.storage&&(P+=Y-I),rt.__data=new Float32Array(st.storage/Float32Array.BYTES_PER_ELEMENT),rt.__offset=P,P+=st.storage}}}const z=P%Y;return z>0&&(P+=Y-z),V.__size=P,V.__cache={},this}function C(V){const H={boundary:0,storage:0};return typeof V=="number"||typeof V=="boolean"?(H.boundary=4,H.storage=4):V.isVector2?(H.boundary=8,H.storage=8):V.isVector3||V.isColor?(H.boundary=16,H.storage=12):V.isVector4?(H.boundary=16,H.storage=16):V.isMatrix3?(H.boundary=48,H.storage=48):V.isMatrix4?(H.boundary=64,H.storage=64):V.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",V),H}function M(V){const H=V.target;H.removeEventListener("dispose",M);const P=p.indexOf(H.__bindingPointIndex);p.splice(P,1),s.deleteBuffer(l[H.id]),delete l[H.id],delete c[H.id]}function x(){for(const V in l)s.deleteBuffer(l[V]);p=[],l={},c={}}return{bind:_,update:g,dispose:x}}class Z1{constructor(t={}){const{canvas:i=Mx(),context:r=null,depth:l=!0,stencil:c=!1,alpha:p=!1,antialias:m=!1,premultipliedAlpha:_=!0,preserveDrawingBuffer:g=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:y=!1,reverseDepthBuffer:E=!1}=t;this.isWebGLRenderer=!0;let b;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=r.getContextAttributes().alpha}else b=p;const w=new Uint32Array(4),C=new Int32Array(4);let M=null,x=null;const V=[],H=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Rr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let Y=!1;this._outputColorSpace=Ci;let z=0,k=0,K=null,F=-1,O=null;const q=new gn,rt=new gn;let dt=null;const _t=new Ie(0);let Mt=0,X=i.width,st=i.height,tt=1,Lt=null,I=null;const ct=new gn(0,0,X,st),At=new gn(0,0,X,st);let Dt=!1;const at=new Up;let bt=!1,Ut=!1;const It=new fn,Pt=new fn,ce=new ot,ee=new gn,Ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ye=!1;function Me(){return K===null?tt:1}let Z=r;function Yn(N,et){return i.getContext(N,et)}try{const N={alpha:!0,depth:l,stencil:c,antialias:m,premultipliedAlpha:_,preserveDrawingBuffer:g,powerPreference:v,failIfMajorPerformanceCaveat:y};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Ep}`),i.addEventListener("webglcontextlost",wt,!1),i.addEventListener("webglcontextrestored",Yt,!1),i.addEventListener("webglcontextcreationerror",Xt,!1),Z===null){const et="webgl2";if(Z=Yn(et,N),Z===null)throw Yn(et)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(N){throw console.error("THREE.WebGLRenderer: "+N.message),N}let we,ge,ne,We,te,B,D,ft,Rt,Nt,St,kt,Gt,zt,ue,Ft,jt,re,se,Wt,ve,pe,Pe,$;function Et(){we=new rT(Z),we.init(),pe=new G1(Z,we),ge=new Jb(Z,we,t,pe),ne=new z1(Z,we),ge.reverseDepthBuffer&&E&&ne.buffers.depth.setReversed(!0),We=new lT(Z),te=new A1,B=new H1(Z,we,ne,te,ge,pe,We),D=new tT(P),ft=new aT(P),Rt=new pE(Z),Pe=new Kb(Z,Rt),Nt=new sT(Z,Rt,We,Pe),St=new uT(Z,Nt,Rt,We),se=new cT(Z,ge,B),Ft=new $b(te),kt=new T1(P,D,ft,we,ge,Pe,Ft),Gt=new Y1(P,te),zt=new w1,ue=new O1(we),re=new Zb(P,D,ft,ne,St,b,_),jt=new B1(P,St,ge),$=new j1(Z,We,ge,ne),Wt=new Qb(Z,we,We),ve=new oT(Z,we,We),We.programs=kt.programs,P.capabilities=ge,P.extensions=we,P.properties=te,P.renderLists=zt,P.shadowMap=jt,P.state=ne,P.info=We}Et();const vt=new W1(P,Z);this.xr=vt,this.getContext=function(){return Z},this.getContextAttributes=function(){return Z.getContextAttributes()},this.forceContextLoss=function(){const N=we.get("WEBGL_lose_context");N&&N.loseContext()},this.forceContextRestore=function(){const N=we.get("WEBGL_lose_context");N&&N.restoreContext()},this.getPixelRatio=function(){return tt},this.setPixelRatio=function(N){N!==void 0&&(tt=N,this.setSize(X,st,!1))},this.getSize=function(N){return N.set(X,st)},this.setSize=function(N,et,ht=!0){if(vt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=N,st=et,i.width=Math.floor(N*tt),i.height=Math.floor(et*tt),ht===!0&&(i.style.width=N+"px",i.style.height=et+"px"),this.setViewport(0,0,N,et)},this.getDrawingBufferSize=function(N){return N.set(X*tt,st*tt).floor()},this.setDrawingBufferSize=function(N,et,ht){X=N,st=et,tt=ht,i.width=Math.floor(N*ht),i.height=Math.floor(et*ht),this.setViewport(0,0,N,et)},this.getCurrentViewport=function(N){return N.copy(q)},this.getViewport=function(N){return N.copy(ct)},this.setViewport=function(N,et,ht,gt){N.isVector4?ct.set(N.x,N.y,N.z,N.w):ct.set(N,et,ht,gt),ne.viewport(q.copy(ct).multiplyScalar(tt).round())},this.getScissor=function(N){return N.copy(At)},this.setScissor=function(N,et,ht,gt){N.isVector4?At.set(N.x,N.y,N.z,N.w):At.set(N,et,ht,gt),ne.scissor(rt.copy(At).multiplyScalar(tt).round())},this.getScissorTest=function(){return Dt},this.setScissorTest=function(N){ne.setScissorTest(Dt=N)},this.setOpaqueSort=function(N){Lt=N},this.setTransparentSort=function(N){I=N},this.getClearColor=function(N){return N.copy(re.getClearColor())},this.setClearColor=function(){re.setClearColor(...arguments)},this.getClearAlpha=function(){return re.getClearAlpha()},this.setClearAlpha=function(){re.setClearAlpha(...arguments)},this.clear=function(N=!0,et=!0,ht=!0){let gt=0;if(N){let it=!1;if(K!==null){const Ot=K.texture.format;it=Ot===Cp||Ot===wp||Ot===Rp}if(it){const Ot=K.texture.type,Bt=Ot===ga||Ot===hs||Ot===Dl||Ot===Ul||Ot===Tp||Ot===Ap,Vt=re.getClearColor(),Zt=re.getClearAlpha(),he=Vt.r,oe=Vt.g,ie=Vt.b;Bt?(w[0]=he,w[1]=oe,w[2]=ie,w[3]=Zt,Z.clearBufferuiv(Z.COLOR,0,w)):(C[0]=he,C[1]=oe,C[2]=ie,C[3]=Zt,Z.clearBufferiv(Z.COLOR,0,C))}else gt|=Z.COLOR_BUFFER_BIT}et&&(gt|=Z.DEPTH_BUFFER_BIT),ht&&(gt|=Z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Z.clear(gt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",wt,!1),i.removeEventListener("webglcontextrestored",Yt,!1),i.removeEventListener("webglcontextcreationerror",Xt,!1),re.dispose(),zt.dispose(),ue.dispose(),te.dispose(),D.dispose(),ft.dispose(),St.dispose(),Pe.dispose(),$.dispose(),kt.dispose(),vt.dispose(),vt.removeEventListener("sessionstart",_n),vt.removeEventListener("sessionend",Dn),Jn.stop()};function wt(N){N.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),Y=!0}function Yt(){console.log("THREE.WebGLRenderer: Context Restored."),Y=!1;const N=We.autoReset,et=jt.enabled,ht=jt.autoUpdate,gt=jt.needsUpdate,it=jt.type;Et(),We.autoReset=N,jt.enabled=et,jt.autoUpdate=ht,jt.needsUpdate=gt,jt.type=it}function Xt(N){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",N.statusMessage)}function _e(N){const et=N.target;et.removeEventListener("dispose",_e),Ke(et)}function Ke(N){ln(N),te.remove(N)}function ln(N){const et=te.get(N).programs;et!==void 0&&(et.forEach(function(ht){kt.releaseProgram(ht)}),N.isShaderMaterial&&kt.releaseShaderCache(N))}this.renderBufferDirect=function(N,et,ht,gt,it,Ot){et===null&&(et=Ve);const Bt=it.isMesh&&it.matrixWorld.determinant()<0,Vt=bn(N,et,ht,gt,it);ne.setMaterial(gt,Bt);let Zt=ht.index,he=1;if(gt.wireframe===!0){if(Zt=Nt.getWireframeAttribute(ht),Zt===void 0)return;he=2}const oe=ht.drawRange,ie=ht.attributes.position;let be=oe.start*he,Fe=(oe.start+oe.count)*he;Ot!==null&&(be=Math.max(be,Ot.start*he),Fe=Math.min(Fe,(Ot.start+Ot.count)*he)),Zt!==null?(be=Math.max(be,0),Fe=Math.min(Fe,Zt.count)):ie!=null&&(be=Math.max(be,0),Fe=Math.min(Fe,ie.count));const sn=Fe-be;if(sn<0||sn===1/0)return;Pe.setup(it,gt,Vt,ht,Zt);let De,Ue=Wt;if(Zt!==null&&(De=Rt.get(Zt),Ue=ve,Ue.setIndex(De)),it.isMesh)gt.wireframe===!0?(ne.setLineWidth(gt.wireframeLinewidth*Me()),Ue.setMode(Z.LINES)):Ue.setMode(Z.TRIANGLES);else if(it.isLine){let le=gt.linewidth;le===void 0&&(le=1),ne.setLineWidth(le*Me()),it.isLineSegments?Ue.setMode(Z.LINES):it.isLineLoop?Ue.setMode(Z.LINE_LOOP):Ue.setMode(Z.LINE_STRIP)}else it.isPoints?Ue.setMode(Z.POINTS):it.isSprite&&Ue.setMode(Z.TRIANGLES);if(it.isBatchedMesh)if(it._multiDrawInstances!==null)Au("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ue.renderMultiDrawInstances(it._multiDrawStarts,it._multiDrawCounts,it._multiDrawCount,it._multiDrawInstances);else if(we.get("WEBGL_multi_draw"))Ue.renderMultiDraw(it._multiDrawStarts,it._multiDrawCounts,it._multiDrawCount);else{const le=it._multiDrawStarts,cn=it._multiDrawCounts,Be=it._multiDrawCount,In=Zt?Rt.get(Zt).bytesPerElement:1,ki=te.get(gt).currentProgram.getUniforms();for(let Je=0;Je<Be;Je++)ki.setValue(Z,"_gl_DrawID",Je),Ue.render(le[Je]/In,cn[Je])}else if(it.isInstancedMesh)Ue.renderInstances(be,sn,it.count);else if(ht.isInstancedBufferGeometry){const le=ht._maxInstanceCount!==void 0?ht._maxInstanceCount:1/0,cn=Math.min(ht.instanceCount,le);Ue.renderInstances(be,sn,cn)}else Ue.render(be,sn)};function R(N,et,ht){N.transparent===!0&&N.side===Va&&N.forceSinglePass===!1?(N.side=gi,N.needsUpdate=!0,$n(N,et,ht),N.side=wr,N.needsUpdate=!0,$n(N,et,ht),N.side=Va):$n(N,et,ht)}this.compile=function(N,et,ht=null){ht===null&&(ht=N),x=ue.get(ht),x.init(et),H.push(x),ht.traverseVisible(function(it){it.isLight&&it.layers.test(et.layers)&&(x.pushLight(it),it.castShadow&&x.pushShadow(it))}),N!==ht&&N.traverseVisible(function(it){it.isLight&&it.layers.test(et.layers)&&(x.pushLight(it),it.castShadow&&x.pushShadow(it))}),x.setupLights();const gt=new Set;return N.traverse(function(it){if(!(it.isMesh||it.isPoints||it.isLine||it.isSprite))return;const Ot=it.material;if(Ot)if(Array.isArray(Ot))for(let Bt=0;Bt<Ot.length;Bt++){const Vt=Ot[Bt];R(Vt,ht,it),gt.add(Vt)}else R(Ot,ht,it),gt.add(Ot)}),x=H.pop(),gt},this.compileAsync=function(N,et,ht=null){const gt=this.compile(N,et,ht);return new Promise(it=>{function Ot(){if(gt.forEach(function(Bt){te.get(Bt).currentProgram.isReady()&&gt.delete(Bt)}),gt.size===0){it(N);return}setTimeout(Ot,10)}we.get("KHR_parallel_shader_compile")!==null?Ot():setTimeout(Ot,10)})};let Qe=null;function En(N){Qe&&Qe(N)}function _n(){Jn.stop()}function Dn(){Jn.start()}const Jn=new X0;Jn.setAnimationLoop(En),typeof self<"u"&&Jn.setContext(self),this.setAnimationLoop=function(N){Qe=N,vt.setAnimationLoop(N),N===null?Jn.stop():Jn.start()},vt.addEventListener("sessionstart",_n),vt.addEventListener("sessionend",Dn),this.render=function(N,et){if(et!==void 0&&et.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(Y===!0)return;if(N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),et.parent===null&&et.matrixWorldAutoUpdate===!0&&et.updateMatrixWorld(),vt.enabled===!0&&vt.isPresenting===!0&&(vt.cameraAutoUpdate===!0&&vt.updateCamera(et),et=vt.getCamera()),N.isScene===!0&&N.onBeforeRender(P,N,et,K),x=ue.get(N,H.length),x.init(et),H.push(x),Pt.multiplyMatrices(et.projectionMatrix,et.matrixWorldInverse),at.setFromProjectionMatrix(Pt),Ut=this.localClippingEnabled,bt=Ft.init(this.clippingPlanes,Ut),M=zt.get(N,V.length),M.init(),V.push(M),vt.enabled===!0&&vt.isPresenting===!0){const Ot=P.xr.getDepthSensingMesh();Ot!==null&&va(Ot,et,-1/0,P.sortObjects)}va(N,et,0,P.sortObjects),M.finish(),P.sortObjects===!0&&M.sort(Lt,I),Ye=vt.enabled===!1||vt.isPresenting===!1||vt.hasDepthSensing()===!1,Ye&&re.addToRenderList(M,N),this.info.render.frame++,bt===!0&&Ft.beginShadows();const ht=x.state.shadowsArray;jt.render(ht,N,et),bt===!0&&Ft.endShadows(),this.info.autoReset===!0&&this.info.reset();const gt=M.opaque,it=M.transmissive;if(x.setupLights(),et.isArrayCamera){const Ot=et.cameras;if(it.length>0)for(let Bt=0,Vt=Ot.length;Bt<Vt;Bt++){const Zt=Ot[Bt];Dr(gt,it,N,Zt)}Ye&&re.render(N);for(let Bt=0,Vt=Ot.length;Bt<Vt;Bt++){const Zt=Ot[Bt];gs(M,N,Zt,Zt.viewport)}}else it.length>0&&Dr(gt,it,N,et),Ye&&re.render(N),gs(M,N,et);K!==null&&k===0&&(B.updateMultisampleRenderTarget(K),B.updateRenderTargetMipmap(K)),N.isScene===!0&&N.onAfterRender(P,N,et),Pe.resetDefaultState(),F=-1,O=null,H.pop(),H.length>0?(x=H[H.length-1],bt===!0&&Ft.setGlobalState(P.clippingPlanes,x.state.camera)):x=null,V.pop(),V.length>0?M=V[V.length-1]:M=null};function va(N,et,ht,gt){if(N.visible===!1)return;if(N.layers.test(et.layers)){if(N.isGroup)ht=N.renderOrder;else if(N.isLOD)N.autoUpdate===!0&&N.update(et);else if(N.isLight)x.pushLight(N),N.castShadow&&x.pushShadow(N);else if(N.isSprite){if(!N.frustumCulled||at.intersectsSprite(N)){gt&&ee.setFromMatrixPosition(N.matrixWorld).applyMatrix4(Pt);const Bt=St.update(N),Vt=N.material;Vt.visible&&M.push(N,Bt,Vt,ht,ee.z,null)}}else if((N.isMesh||N.isLine||N.isPoints)&&(!N.frustumCulled||at.intersectsObject(N))){const Bt=St.update(N),Vt=N.material;if(gt&&(N.boundingSphere!==void 0?(N.boundingSphere===null&&N.computeBoundingSphere(),ee.copy(N.boundingSphere.center)):(Bt.boundingSphere===null&&Bt.computeBoundingSphere(),ee.copy(Bt.boundingSphere.center)),ee.applyMatrix4(N.matrixWorld).applyMatrix4(Pt)),Array.isArray(Vt)){const Zt=Bt.groups;for(let he=0,oe=Zt.length;he<oe;he++){const ie=Zt[he],be=Vt[ie.materialIndex];be&&be.visible&&M.push(N,Bt,be,ht,ee.z,ie)}}else Vt.visible&&M.push(N,Bt,Vt,ht,ee.z,null)}}const Ot=N.children;for(let Bt=0,Vt=Ot.length;Bt<Vt;Bt++)va(Ot[Bt],et,ht,gt)}function gs(N,et,ht,gt){const it=N.opaque,Ot=N.transmissive,Bt=N.transparent;x.setupLightsView(ht),bt===!0&&Ft.setGlobalState(P.clippingPlanes,ht),gt&&ne.viewport(q.copy(gt)),it.length>0&&Mn(it,et,ht),Ot.length>0&&Mn(Ot,et,ht),Bt.length>0&&Mn(Bt,et,ht),ne.buffers.depth.setTest(!0),ne.buffers.depth.setMask(!0),ne.buffers.color.setMask(!0),ne.setPolygonOffset(!1)}function Dr(N,et,ht,gt){if((ht.isScene===!0?ht.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[gt.id]===void 0&&(x.state.transmissionRenderTarget[gt.id]=new ds(1,1,{generateMipmaps:!0,type:we.has("EXT_color_buffer_half_float")||we.has("EXT_color_buffer_float")?Ol:ga,minFilter:fs,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ge.workingColorSpace}));const Ot=x.state.transmissionRenderTarget[gt.id],Bt=gt.viewport||q;Ot.setSize(Bt.z*P.transmissionResolutionScale,Bt.w*P.transmissionResolutionScale);const Vt=P.getRenderTarget();P.setRenderTarget(Ot),P.getClearColor(_t),Mt=P.getClearAlpha(),Mt<1&&P.setClearColor(16777215,.5),P.clear(),Ye&&re.render(ht);const Zt=P.toneMapping;P.toneMapping=Rr;const he=gt.viewport;if(gt.viewport!==void 0&&(gt.viewport=void 0),x.setupLightsView(gt),bt===!0&&Ft.setGlobalState(P.clippingPlanes,gt),Mn(N,ht,gt),B.updateMultisampleRenderTarget(Ot),B.updateRenderTargetMipmap(Ot),we.has("WEBGL_multisampled_render_to_texture")===!1){let oe=!1;for(let ie=0,be=et.length;ie<be;ie++){const Fe=et[ie],sn=Fe.object,De=Fe.geometry,Ue=Fe.material,le=Fe.group;if(Ue.side===Va&&sn.layers.test(gt.layers)){const cn=Ue.side;Ue.side=gi,Ue.needsUpdate=!0,ri(sn,ht,gt,De,Ue,le),Ue.side=cn,Ue.needsUpdate=!0,oe=!0}}oe===!0&&(B.updateMultisampleRenderTarget(Ot),B.updateRenderTargetMipmap(Ot))}P.setRenderTarget(Vt),P.setClearColor(_t,Mt),he!==void 0&&(gt.viewport=he),P.toneMapping=Zt}function Mn(N,et,ht){const gt=et.isScene===!0?et.overrideMaterial:null;for(let it=0,Ot=N.length;it<Ot;it++){const Bt=N[it],Vt=Bt.object,Zt=Bt.geometry,he=Bt.group;let oe=Bt.material;oe.allowOverride===!0&&gt!==null&&(oe=gt),Vt.layers.test(ht.layers)&&ri(Vt,et,ht,Zt,oe,he)}}function ri(N,et,ht,gt,it,Ot){N.onBeforeRender(P,et,ht,gt,it,Ot),N.modelViewMatrix.multiplyMatrices(ht.matrixWorldInverse,N.matrixWorld),N.normalMatrix.getNormalMatrix(N.modelViewMatrix),it.onBeforeRender(P,et,ht,gt,N,Ot),it.transparent===!0&&it.side===Va&&it.forceSinglePass===!1?(it.side=gi,it.needsUpdate=!0,P.renderBufferDirect(ht,et,gt,it,N,Ot),it.side=wr,it.needsUpdate=!0,P.renderBufferDirect(ht,et,gt,it,N,Ot),it.side=Va):P.renderBufferDirect(ht,et,gt,it,N,Ot),N.onAfterRender(P,et,ht,gt,it,Ot)}function $n(N,et,ht){et.isScene!==!0&&(et=Ve);const gt=te.get(N),it=x.state.lights,Ot=x.state.shadowsArray,Bt=it.state.version,Vt=kt.getParameters(N,it.state,Ot,et,ht),Zt=kt.getProgramCacheKey(Vt);let he=gt.programs;gt.environment=N.isMeshStandardMaterial?et.environment:null,gt.fog=et.fog,gt.envMap=(N.isMeshStandardMaterial?ft:D).get(N.envMap||gt.environment),gt.envMapRotation=gt.environment!==null&&N.envMap===null?et.environmentRotation:N.envMapRotation,he===void 0&&(N.addEventListener("dispose",_e),he=new Map,gt.programs=he);let oe=he.get(Zt);if(oe!==void 0){if(gt.currentProgram===oe&&gt.lightsStateVersion===Bt)return Vi(N,Vt),oe}else Vt.uniforms=kt.getUniforms(N),N.onBeforeCompile(Vt,P),oe=kt.acquireProgram(Vt,Zt),he.set(Zt,oe),gt.uniforms=Vt.uniforms;const ie=gt.uniforms;return(!N.isShaderMaterial&&!N.isRawShaderMaterial||N.clipping===!0)&&(ie.clippingPlanes=Ft.uniform),Vi(N,Vt),gt.needsLights=ke(N),gt.lightsStateVersion=Bt,gt.needsLights&&(ie.ambientLightColor.value=it.state.ambient,ie.lightProbe.value=it.state.probe,ie.directionalLights.value=it.state.directional,ie.directionalLightShadows.value=it.state.directionalShadow,ie.spotLights.value=it.state.spot,ie.spotLightShadows.value=it.state.spotShadow,ie.rectAreaLights.value=it.state.rectArea,ie.ltc_1.value=it.state.rectAreaLTC1,ie.ltc_2.value=it.state.rectAreaLTC2,ie.pointLights.value=it.state.point,ie.pointLightShadows.value=it.state.pointShadow,ie.hemisphereLights.value=it.state.hemi,ie.directionalShadowMap.value=it.state.directionalShadowMap,ie.directionalShadowMatrix.value=it.state.directionalShadowMatrix,ie.spotShadowMap.value=it.state.spotShadowMap,ie.spotLightMatrix.value=it.state.spotLightMatrix,ie.spotLightMap.value=it.state.spotLightMap,ie.pointShadowMap.value=it.state.pointShadowMap,ie.pointShadowMatrix.value=it.state.pointShadowMatrix),gt.currentProgram=oe,gt.uniformsList=null,oe}function ui(N){if(N.uniformsList===null){const et=N.currentProgram.getUniforms();N.uniformsList=wu.seqWithValue(et.seq,N.uniforms)}return N.uniformsList}function Vi(N,et){const ht=te.get(N);ht.outputColorSpace=et.outputColorSpace,ht.batching=et.batching,ht.batchingColor=et.batchingColor,ht.instancing=et.instancing,ht.instancingColor=et.instancingColor,ht.instancingMorph=et.instancingMorph,ht.skinning=et.skinning,ht.morphTargets=et.morphTargets,ht.morphNormals=et.morphNormals,ht.morphColors=et.morphColors,ht.morphTargetsCount=et.morphTargetsCount,ht.numClippingPlanes=et.numClippingPlanes,ht.numIntersection=et.numClipIntersection,ht.vertexAlphas=et.vertexAlphas,ht.vertexTangents=et.vertexTangents,ht.toneMapping=et.toneMapping}function bn(N,et,ht,gt,it){et.isScene!==!0&&(et=Ve),B.resetTextureUnits();const Ot=et.fog,Bt=gt.isMeshStandardMaterial?et.environment:null,Vt=K===null?P.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:So,Zt=(gt.isMeshStandardMaterial?ft:D).get(gt.envMap||Bt),he=gt.vertexColors===!0&&!!ht.attributes.color&&ht.attributes.color.itemSize===4,oe=!!ht.attributes.tangent&&(!!gt.normalMap||gt.anisotropy>0),ie=!!ht.morphAttributes.position,be=!!ht.morphAttributes.normal,Fe=!!ht.morphAttributes.color;let sn=Rr;gt.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(sn=P.toneMapping);const De=ht.morphAttributes.position||ht.morphAttributes.normal||ht.morphAttributes.color,Ue=De!==void 0?De.length:0,le=te.get(gt),cn=x.state.lights;if(bt===!0&&(Ut===!0||N!==O)){const Tn=N===O&&gt.id===F;Ft.setState(gt,N,Tn)}let Be=!1;gt.version===le.__version?(le.needsLights&&le.lightsStateVersion!==cn.state.version||le.outputColorSpace!==Vt||it.isBatchedMesh&&le.batching===!1||!it.isBatchedMesh&&le.batching===!0||it.isBatchedMesh&&le.batchingColor===!0&&it.colorTexture===null||it.isBatchedMesh&&le.batchingColor===!1&&it.colorTexture!==null||it.isInstancedMesh&&le.instancing===!1||!it.isInstancedMesh&&le.instancing===!0||it.isSkinnedMesh&&le.skinning===!1||!it.isSkinnedMesh&&le.skinning===!0||it.isInstancedMesh&&le.instancingColor===!0&&it.instanceColor===null||it.isInstancedMesh&&le.instancingColor===!1&&it.instanceColor!==null||it.isInstancedMesh&&le.instancingMorph===!0&&it.morphTexture===null||it.isInstancedMesh&&le.instancingMorph===!1&&it.morphTexture!==null||le.envMap!==Zt||gt.fog===!0&&le.fog!==Ot||le.numClippingPlanes!==void 0&&(le.numClippingPlanes!==Ft.numPlanes||le.numIntersection!==Ft.numIntersection)||le.vertexAlphas!==he||le.vertexTangents!==oe||le.morphTargets!==ie||le.morphNormals!==be||le.morphColors!==Fe||le.toneMapping!==sn||le.morphTargetsCount!==Ue)&&(Be=!0):(Be=!0,le.__version=gt.version);let In=le.currentProgram;Be===!0&&(In=$n(gt,et,it));let ki=!1,Je=!1,Di=!1;const qe=In.getUniforms(),zn=le.uniforms;if(ne.useProgram(In.program)&&(ki=!0,Je=!0,Di=!0),gt.id!==F&&(F=gt.id,Je=!0),ki||O!==N){ne.buffers.depth.getReversed()?(It.copy(N.projectionMatrix),Tx(It),Ax(It),qe.setValue(Z,"projectionMatrix",It)):qe.setValue(Z,"projectionMatrix",N.projectionMatrix),qe.setValue(Z,"viewMatrix",N.matrixWorldInverse);const An=qe.map.cameraPosition;An!==void 0&&An.setValue(Z,ce.setFromMatrixPosition(N.matrixWorld)),ge.logarithmicDepthBuffer&&qe.setValue(Z,"logDepthBufFC",2/(Math.log(N.far+1)/Math.LN2)),(gt.isMeshPhongMaterial||gt.isMeshToonMaterial||gt.isMeshLambertMaterial||gt.isMeshBasicMaterial||gt.isMeshStandardMaterial||gt.isShaderMaterial)&&qe.setValue(Z,"isOrthographic",N.isOrthographicCamera===!0),O!==N&&(O=N,Je=!0,Di=!0)}if(it.isSkinnedMesh){qe.setOptional(Z,it,"bindMatrix"),qe.setOptional(Z,it,"bindMatrixInverse");const Tn=it.skeleton;Tn&&(Tn.boneTexture===null&&Tn.computeBoneTexture(),qe.setValue(Z,"boneTexture",Tn.boneTexture,B))}it.isBatchedMesh&&(qe.setOptional(Z,it,"batchingTexture"),qe.setValue(Z,"batchingTexture",it._matricesTexture,B),qe.setOptional(Z,it,"batchingIdTexture"),qe.setValue(Z,"batchingIdTexture",it._indirectTexture,B),qe.setOptional(Z,it,"batchingColorTexture"),it._colorsTexture!==null&&qe.setValue(Z,"batchingColorTexture",it._colorsTexture,B));const vn=ht.morphAttributes;if((vn.position!==void 0||vn.normal!==void 0||vn.color!==void 0)&&se.update(it,ht,In),(Je||le.receiveShadow!==it.receiveShadow)&&(le.receiveShadow=it.receiveShadow,qe.setValue(Z,"receiveShadow",it.receiveShadow)),gt.isMeshGouraudMaterial&&gt.envMap!==null&&(zn.envMap.value=Zt,zn.flipEnvMap.value=Zt.isCubeTexture&&Zt.isRenderTargetTexture===!1?-1:1),gt.isMeshStandardMaterial&&gt.envMap===null&&et.environment!==null&&(zn.envMapIntensity.value=et.environmentIntensity),Je&&(qe.setValue(Z,"toneMappingExposure",P.toneMappingExposure),le.needsLights&&aa(zn,Di),Ot&&gt.fog===!0&&Gt.refreshFogUniforms(zn,Ot),Gt.refreshMaterialUniforms(zn,gt,tt,st,x.state.transmissionRenderTarget[N.id]),wu.upload(Z,ui(le),zn,B)),gt.isShaderMaterial&&gt.uniformsNeedUpdate===!0&&(wu.upload(Z,ui(le),zn,B),gt.uniformsNeedUpdate=!1),gt.isSpriteMaterial&&qe.setValue(Z,"center",it.center),qe.setValue(Z,"modelViewMatrix",it.modelViewMatrix),qe.setValue(Z,"normalMatrix",it.normalMatrix),qe.setValue(Z,"modelMatrix",it.matrixWorld),gt.isShaderMaterial||gt.isRawShaderMaterial){const Tn=gt.uniformsGroups;for(let An=0,Ui=Tn.length;An<Ui;An++){const Xi=Tn[An];$.update(Xi,In),$.bind(Xi,In)}}return In}function aa(N,et){N.ambientLightColor.needsUpdate=et,N.lightProbe.needsUpdate=et,N.directionalLights.needsUpdate=et,N.directionalLightShadows.needsUpdate=et,N.pointLights.needsUpdate=et,N.pointLightShadows.needsUpdate=et,N.spotLights.needsUpdate=et,N.spotLightShadows.needsUpdate=et,N.rectAreaLights.needsUpdate=et,N.hemisphereLights.needsUpdate=et}function ke(N){return N.isMeshLambertMaterial||N.isMeshToonMaterial||N.isMeshPhongMaterial||N.isMeshStandardMaterial||N.isShadowMaterial||N.isShaderMaterial&&N.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return K},this.setRenderTargetTextures=function(N,et,ht){const gt=te.get(N);gt.__autoAllocateDepthBuffer=N.resolveDepthBuffer===!1,gt.__autoAllocateDepthBuffer===!1&&(gt.__useRenderToTexture=!1),te.get(N.texture).__webglTexture=et,te.get(N.depthTexture).__webglTexture=gt.__autoAllocateDepthBuffer?void 0:ht,gt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(N,et){const ht=te.get(N);ht.__webglFramebuffer=et,ht.__useDefaultFramebuffer=et===void 0};const Ur=Z.createFramebuffer();this.setRenderTarget=function(N,et=0,ht=0){K=N,z=et,k=ht;let gt=!0,it=null,Ot=!1,Bt=!1;if(N){const Zt=te.get(N);if(Zt.__useDefaultFramebuffer!==void 0)ne.bindFramebuffer(Z.FRAMEBUFFER,null),gt=!1;else if(Zt.__webglFramebuffer===void 0)B.setupRenderTarget(N);else if(Zt.__hasExternalTextures)B.rebindTextures(N,te.get(N.texture).__webglTexture,te.get(N.depthTexture).__webglTexture);else if(N.depthBuffer){const ie=N.depthTexture;if(Zt.__boundDepthTexture!==ie){if(ie!==null&&te.has(ie)&&(N.width!==ie.image.width||N.height!==ie.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");B.setupDepthRenderbuffer(N)}}const he=N.texture;(he.isData3DTexture||he.isDataArrayTexture||he.isCompressedArrayTexture)&&(Bt=!0);const oe=te.get(N).__webglFramebuffer;N.isWebGLCubeRenderTarget?(Array.isArray(oe[et])?it=oe[et][ht]:it=oe[et],Ot=!0):N.samples>0&&B.useMultisampledRTT(N)===!1?it=te.get(N).__webglMultisampledFramebuffer:Array.isArray(oe)?it=oe[ht]:it=oe,q.copy(N.viewport),rt.copy(N.scissor),dt=N.scissorTest}else q.copy(ct).multiplyScalar(tt).floor(),rt.copy(At).multiplyScalar(tt).floor(),dt=Dt;if(ht!==0&&(it=Ur),ne.bindFramebuffer(Z.FRAMEBUFFER,it)&&gt&&ne.drawBuffers(N,it),ne.viewport(q),ne.scissor(rt),ne.setScissorTest(dt),Ot){const Zt=te.get(N.texture);Z.framebufferTexture2D(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_CUBE_MAP_POSITIVE_X+et,Zt.__webglTexture,ht)}else if(Bt){const Zt=te.get(N.texture),he=et;Z.framebufferTextureLayer(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Zt.__webglTexture,ht,he)}else if(N!==null&&ht!==0){const Zt=te.get(N.texture);Z.framebufferTexture2D(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_2D,Zt.__webglTexture,ht)}F=-1},this.readRenderTargetPixels=function(N,et,ht,gt,it,Ot,Bt){if(!(N&&N.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Vt=te.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Bt!==void 0&&(Vt=Vt[Bt]),Vt){ne.bindFramebuffer(Z.FRAMEBUFFER,Vt);try{const Zt=N.texture,he=Zt.format,oe=Zt.type;if(!ge.textureFormatReadable(he)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ge.textureTypeReadable(oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}et>=0&&et<=N.width-gt&&ht>=0&&ht<=N.height-it&&Z.readPixels(et,ht,gt,it,pe.convert(he),pe.convert(oe),Ot)}finally{const Zt=K!==null?te.get(K).__webglFramebuffer:null;ne.bindFramebuffer(Z.FRAMEBUFFER,Zt)}}},this.readRenderTargetPixelsAsync=async function(N,et,ht,gt,it,Ot,Bt){if(!(N&&N.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Vt=te.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Bt!==void 0&&(Vt=Vt[Bt]),Vt)if(et>=0&&et<=N.width-gt&&ht>=0&&ht<=N.height-it){ne.bindFramebuffer(Z.FRAMEBUFFER,Vt);const Zt=N.texture,he=Zt.format,oe=Zt.type;if(!ge.textureFormatReadable(he))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ge.textureTypeReadable(oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ie=Z.createBuffer();Z.bindBuffer(Z.PIXEL_PACK_BUFFER,ie),Z.bufferData(Z.PIXEL_PACK_BUFFER,Ot.byteLength,Z.STREAM_READ),Z.readPixels(et,ht,gt,it,pe.convert(he),pe.convert(oe),0);const be=K!==null?te.get(K).__webglFramebuffer:null;ne.bindFramebuffer(Z.FRAMEBUFFER,be);const Fe=Z.fenceSync(Z.SYNC_GPU_COMMANDS_COMPLETE,0);return Z.flush(),await bx(Z,Fe,4),Z.bindBuffer(Z.PIXEL_PACK_BUFFER,ie),Z.getBufferSubData(Z.PIXEL_PACK_BUFFER,0,Ot),Z.deleteBuffer(ie),Z.deleteSync(Fe),Ot}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(N,et=null,ht=0){const gt=Math.pow(2,-ht),it=Math.floor(N.image.width*gt),Ot=Math.floor(N.image.height*gt),Bt=et!==null?et.x:0,Vt=et!==null?et.y:0;B.setTexture2D(N,0),Z.copyTexSubImage2D(Z.TEXTURE_2D,ht,0,0,Bt,Vt,it,Ot),ne.unbindTexture()};const _s=Z.createFramebuffer(),Bn=Z.createFramebuffer();this.copyTextureToTexture=function(N,et,ht=null,gt=null,it=0,Ot=null){Ot===null&&(it!==0?(Au("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ot=it,it=0):Ot=0);let Bt,Vt,Zt,he,oe,ie,be,Fe,sn;const De=N.isCompressedTexture?N.mipmaps[Ot]:N.image;if(ht!==null)Bt=ht.max.x-ht.min.x,Vt=ht.max.y-ht.min.y,Zt=ht.isBox3?ht.max.z-ht.min.z:1,he=ht.min.x,oe=ht.min.y,ie=ht.isBox3?ht.min.z:0;else{const vn=Math.pow(2,-it);Bt=Math.floor(De.width*vn),Vt=Math.floor(De.height*vn),N.isDataArrayTexture?Zt=De.depth:N.isData3DTexture?Zt=Math.floor(De.depth*vn):Zt=1,he=0,oe=0,ie=0}gt!==null?(be=gt.x,Fe=gt.y,sn=gt.z):(be=0,Fe=0,sn=0);const Ue=pe.convert(et.format),le=pe.convert(et.type);let cn;et.isData3DTexture?(B.setTexture3D(et,0),cn=Z.TEXTURE_3D):et.isDataArrayTexture||et.isCompressedArrayTexture?(B.setTexture2DArray(et,0),cn=Z.TEXTURE_2D_ARRAY):(B.setTexture2D(et,0),cn=Z.TEXTURE_2D),Z.pixelStorei(Z.UNPACK_FLIP_Y_WEBGL,et.flipY),Z.pixelStorei(Z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,et.premultiplyAlpha),Z.pixelStorei(Z.UNPACK_ALIGNMENT,et.unpackAlignment);const Be=Z.getParameter(Z.UNPACK_ROW_LENGTH),In=Z.getParameter(Z.UNPACK_IMAGE_HEIGHT),ki=Z.getParameter(Z.UNPACK_SKIP_PIXELS),Je=Z.getParameter(Z.UNPACK_SKIP_ROWS),Di=Z.getParameter(Z.UNPACK_SKIP_IMAGES);Z.pixelStorei(Z.UNPACK_ROW_LENGTH,De.width),Z.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,De.height),Z.pixelStorei(Z.UNPACK_SKIP_PIXELS,he),Z.pixelStorei(Z.UNPACK_SKIP_ROWS,oe),Z.pixelStorei(Z.UNPACK_SKIP_IMAGES,ie);const qe=N.isDataArrayTexture||N.isData3DTexture,zn=et.isDataArrayTexture||et.isData3DTexture;if(N.isDepthTexture){const vn=te.get(N),Tn=te.get(et),An=te.get(vn.__renderTarget),Ui=te.get(Tn.__renderTarget);ne.bindFramebuffer(Z.READ_FRAMEBUFFER,An.__webglFramebuffer),ne.bindFramebuffer(Z.DRAW_FRAMEBUFFER,Ui.__webglFramebuffer);for(let Xi=0;Xi<Zt;Xi++)qe&&(Z.framebufferTextureLayer(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,te.get(N).__webglTexture,it,ie+Xi),Z.framebufferTextureLayer(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,te.get(et).__webglTexture,Ot,sn+Xi)),Z.blitFramebuffer(he,oe,Bt,Vt,be,Fe,Bt,Vt,Z.DEPTH_BUFFER_BIT,Z.NEAREST);ne.bindFramebuffer(Z.READ_FRAMEBUFFER,null),ne.bindFramebuffer(Z.DRAW_FRAMEBUFFER,null)}else if(it!==0||N.isRenderTargetTexture||te.has(N)){const vn=te.get(N),Tn=te.get(et);ne.bindFramebuffer(Z.READ_FRAMEBUFFER,_s),ne.bindFramebuffer(Z.DRAW_FRAMEBUFFER,Bn);for(let An=0;An<Zt;An++)qe?Z.framebufferTextureLayer(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,vn.__webglTexture,it,ie+An):Z.framebufferTexture2D(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_2D,vn.__webglTexture,it),zn?Z.framebufferTextureLayer(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Tn.__webglTexture,Ot,sn+An):Z.framebufferTexture2D(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_2D,Tn.__webglTexture,Ot),it!==0?Z.blitFramebuffer(he,oe,Bt,Vt,be,Fe,Bt,Vt,Z.COLOR_BUFFER_BIT,Z.NEAREST):zn?Z.copyTexSubImage3D(cn,Ot,be,Fe,sn+An,he,oe,Bt,Vt):Z.copyTexSubImage2D(cn,Ot,be,Fe,he,oe,Bt,Vt);ne.bindFramebuffer(Z.READ_FRAMEBUFFER,null),ne.bindFramebuffer(Z.DRAW_FRAMEBUFFER,null)}else zn?N.isDataTexture||N.isData3DTexture?Z.texSubImage3D(cn,Ot,be,Fe,sn,Bt,Vt,Zt,Ue,le,De.data):et.isCompressedArrayTexture?Z.compressedTexSubImage3D(cn,Ot,be,Fe,sn,Bt,Vt,Zt,Ue,De.data):Z.texSubImage3D(cn,Ot,be,Fe,sn,Bt,Vt,Zt,Ue,le,De):N.isDataTexture?Z.texSubImage2D(Z.TEXTURE_2D,Ot,be,Fe,Bt,Vt,Ue,le,De.data):N.isCompressedTexture?Z.compressedTexSubImage2D(Z.TEXTURE_2D,Ot,be,Fe,De.width,De.height,Ue,De.data):Z.texSubImage2D(Z.TEXTURE_2D,Ot,be,Fe,Bt,Vt,Ue,le,De);Z.pixelStorei(Z.UNPACK_ROW_LENGTH,Be),Z.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,In),Z.pixelStorei(Z.UNPACK_SKIP_PIXELS,ki),Z.pixelStorei(Z.UNPACK_SKIP_ROWS,Je),Z.pixelStorei(Z.UNPACK_SKIP_IMAGES,Di),Ot===0&&et.generateMipmaps&&Z.generateMipmap(cn),ne.unbindTexture()},this.copyTextureToTexture3D=function(N,et,ht=null,gt=null,it=0){return Au('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(N,et,ht,gt,it)},this.initRenderTarget=function(N){te.get(N).__webglFramebuffer===void 0&&B.setupRenderTarget(N)},this.initTexture=function(N){N.isCubeTexture?B.setTextureCube(N,0):N.isData3DTexture?B.setTexture3D(N,0):N.isDataArrayTexture||N.isCompressedArrayTexture?B.setTexture2DArray(N,0):B.setTexture2D(N,0),ne.unbindTexture()},this.resetState=function(){z=0,k=0,K=null,ne.reset(),Pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Ge._getDrawingBufferColorSpace(t),i.unpackColorSpace=Ge._getUnpackColorSpace()}}const K1=/^[og]\s*(.+)?/,Q1=/^mtllib /,J1=/^usemtl /,$1=/^usemap /,o0=/\s+/,l0=new ot,Dd=new ot,c0=new ot,u0=new ot,Hi=new ot,vu=new Ie;function tA(){const s={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(t,i){if(this.object&&this.object.fromDeclaration===!1){this.object.name=t,this.object.fromDeclaration=i!==!1;return}const r=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:t||"",fromDeclaration:i!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(l,c){const p=this._finalize(!1);p&&(p.inherited||p.groupCount<=0)&&this.materials.splice(p.index,1);const m={index:this.materials.length,name:l||"",mtllib:Array.isArray(c)&&c.length>0?c[c.length-1]:"",smooth:p!==void 0?p.smooth:this.smooth,groupStart:p!==void 0?p.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(_){const g={index:typeof _=="number"?_:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return g.clone=this.clone.bind(g),g}};return this.materials.push(m),m},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(l){const c=this.currentMaterial();if(c&&c.groupEnd===-1&&(c.groupEnd=this.geometry.vertices.length/3,c.groupCount=c.groupEnd-c.groupStart,c.inherited=!1),l&&this.materials.length>1)for(let p=this.materials.length-1;p>=0;p--)this.materials[p].groupCount<=0&&this.materials.splice(p,1);return l&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),c}},r&&r.name&&typeof r.clone=="function"){const l=r.clone(0);l.inherited=!0,this.object.materials.push(l)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(t,i){const r=parseInt(t,10);return(r>=0?r-1:r+i/3)*3},parseNormalIndex:function(t,i){const r=parseInt(t,10);return(r>=0?r-1:r+i/3)*3},parseUVIndex:function(t,i){const r=parseInt(t,10);return(r>=0?r-1:r+i/2)*2},addVertex:function(t,i,r){const l=this.vertices,c=this.object.geometry.vertices;c.push(l[t+0],l[t+1],l[t+2]),c.push(l[i+0],l[i+1],l[i+2]),c.push(l[r+0],l[r+1],l[r+2])},addVertexPoint:function(t){const i=this.vertices;this.object.geometry.vertices.push(i[t+0],i[t+1],i[t+2])},addVertexLine:function(t){const i=this.vertices;this.object.geometry.vertices.push(i[t+0],i[t+1],i[t+2])},addNormal:function(t,i,r){const l=this.normals,c=this.object.geometry.normals;c.push(l[t+0],l[t+1],l[t+2]),c.push(l[i+0],l[i+1],l[i+2]),c.push(l[r+0],l[r+1],l[r+2])},addFaceNormal:function(t,i,r){const l=this.vertices,c=this.object.geometry.normals;l0.fromArray(l,t),Dd.fromArray(l,i),c0.fromArray(l,r),Hi.subVectors(c0,Dd),u0.subVectors(l0,Dd),Hi.cross(u0),Hi.normalize(),c.push(Hi.x,Hi.y,Hi.z),c.push(Hi.x,Hi.y,Hi.z),c.push(Hi.x,Hi.y,Hi.z)},addColor:function(t,i,r){const l=this.colors,c=this.object.geometry.colors;l[t]!==void 0&&c.push(l[t+0],l[t+1],l[t+2]),l[i]!==void 0&&c.push(l[i+0],l[i+1],l[i+2]),l[r]!==void 0&&c.push(l[r+0],l[r+1],l[r+2])},addUV:function(t,i,r){const l=this.uvs,c=this.object.geometry.uvs;c.push(l[t+0],l[t+1]),c.push(l[i+0],l[i+1]),c.push(l[r+0],l[r+1])},addDefaultUV:function(){const t=this.object.geometry.uvs;t.push(0,0),t.push(0,0),t.push(0,0)},addUVLine:function(t){const i=this.uvs;this.object.geometry.uvs.push(i[t+0],i[t+1])},addFace:function(t,i,r,l,c,p,m,_,g){const v=this.vertices.length;let y=this.parseVertexIndex(t,v),E=this.parseVertexIndex(i,v),b=this.parseVertexIndex(r,v);if(this.addVertex(y,E,b),this.addColor(y,E,b),m!==void 0&&m!==""){const w=this.normals.length;y=this.parseNormalIndex(m,w),E=this.parseNormalIndex(_,w),b=this.parseNormalIndex(g,w),this.addNormal(y,E,b)}else this.addFaceNormal(y,E,b);if(l!==void 0&&l!==""){const w=this.uvs.length;y=this.parseUVIndex(l,w),E=this.parseUVIndex(c,w),b=this.parseUVIndex(p,w),this.addUV(y,E,b),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(t){this.object.geometry.type="Points";const i=this.vertices.length;for(let r=0,l=t.length;r<l;r++){const c=this.parseVertexIndex(t[r],i);this.addVertexPoint(c),this.addColor(c)}},addLineGeometry:function(t,i){this.object.geometry.type="Line";const r=this.vertices.length,l=this.uvs.length;for(let c=0,p=t.length;c<p;c++)this.addVertexLine(this.parseVertexIndex(t[c],r));for(let c=0,p=i.length;c<p;c++)this.addUVLine(this.parseUVIndex(i[c],l))}};return s.startObject("",!1),s}class eA extends Lp{constructor(t){super(t),this.materials=null}load(t,i,r,l){const c=this,p=new oE(this.manager);p.setPath(this.path),p.setRequestHeader(this.requestHeader),p.setWithCredentials(this.withCredentials),p.load(t,function(m){try{i(c.parse(m))}catch(_){l?l(_):console.error(_),c.manager.itemError(t)}},r,l)}setMaterials(t){return this.materials=t,this}parse(t){const i=new tA;t.indexOf(`\r
`)!==-1&&(t=t.replace(/\r\n/g,`
`)),t.indexOf(`\\
`)!==-1&&(t=t.replace(/\\\n/g,""));const r=t.split(`
`);let l=[];for(let m=0,_=r.length;m<_;m++){const g=r[m].trimStart();if(g.length===0)continue;const v=g.charAt(0);if(v!=="#")if(v==="v"){const y=g.split(o0);switch(y[0]){case"v":i.vertices.push(parseFloat(y[1]),parseFloat(y[2]),parseFloat(y[3])),y.length>=7?(vu.setRGB(parseFloat(y[4]),parseFloat(y[5]),parseFloat(y[6]),Ci),i.colors.push(vu.r,vu.g,vu.b)):i.colors.push(void 0,void 0,void 0);break;case"vn":i.normals.push(parseFloat(y[1]),parseFloat(y[2]),parseFloat(y[3]));break;case"vt":i.uvs.push(parseFloat(y[1]),parseFloat(y[2]));break}}else if(v==="f"){const E=g.slice(1).trim().split(o0),b=[];for(let C=0,M=E.length;C<M;C++){const x=E[C];if(x.length>0){const V=x.split("/");b.push(V)}}const w=b[0];for(let C=1,M=b.length-1;C<M;C++){const x=b[C],V=b[C+1];i.addFace(w[0],x[0],V[0],w[1],x[1],V[1],w[2],x[2],V[2])}}else if(v==="l"){const y=g.substring(1).trim().split(" ");let E=[];const b=[];if(g.indexOf("/")===-1)E=y;else for(let w=0,C=y.length;w<C;w++){const M=y[w].split("/");M[0]!==""&&E.push(M[0]),M[1]!==""&&b.push(M[1])}i.addLineGeometry(E,b)}else if(v==="p"){const E=g.slice(1).trim().split(" ");i.addPointGeometry(E)}else if((l=K1.exec(g))!==null){const y=(" "+l[0].slice(1).trim()).slice(1);i.startObject(y)}else if(J1.test(g))i.object.startMaterial(g.substring(7).trim(),i.materialLibraries);else if(Q1.test(g))i.materialLibraries.push(g.substring(7).trim());else if($1.test(g))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(v==="s"){if(l=g.split(" "),l.length>1){const E=l[1].trim().toLowerCase();i.object.smooth=E!=="0"&&E!=="off"}else i.object.smooth=!0;const y=i.object.currentMaterial();y&&(y.smooth=i.object.smooth)}else{if(g==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+g+'"')}}i.finalize();const c=new Rl;if(c.materialLibraries=[].concat(i.materialLibraries),!(i.objects.length===1&&i.objects[0].geometry.vertices.length===0)===!0)for(let m=0,_=i.objects.length;m<_;m++){const g=i.objects[m],v=g.geometry,y=g.materials,E=v.type==="Line",b=v.type==="Points";let w=!1;if(v.vertices.length===0)continue;const C=new ia;C.setAttribute("position",new ci(v.vertices,3)),v.normals.length>0&&C.setAttribute("normal",new ci(v.normals,3)),v.colors.length>0&&(w=!0,C.setAttribute("color",new ci(v.colors,3))),v.hasUVIndices===!0&&C.setAttribute("uv",new ci(v.uvs,2));const M=[];for(let V=0,H=y.length;V<H;V++){const P=y[V],Y=P.name+"_"+P.smooth+"_"+w;let z=i.materials[Y];if(this.materials!==null){if(z=this.materials.create(P.name),E&&z&&!(z instanceof Ru)){const k=new Ru;qa.prototype.copy.call(k,z),k.color.copy(z.color),z=k}else if(b&&z&&!(z instanceof wl)){const k=new wl({size:10,sizeAttenuation:!1});qa.prototype.copy.call(k,z),k.color.copy(z.color),k.map=z.map,z=k}}z===void 0&&(E?z=new Ru:b?z=new wl({size:1,sizeAttenuation:!1}):z=new eE,z.name=P.name,z.flatShading=!P.smooth,z.vertexColors=w,i.materials[Y]=z),M.push(z)}let x;if(M.length>1){for(let V=0,H=y.length;V<H;V++){const P=y[V];C.addGroup(P.groupStart,P.groupCount,V)}E?x=new wv(C,M):b?x=new Ed(C,M):x=new ea(C,M)}else E?x=new wv(C,M[0]):b?x=new Ed(C,M[0]):x=new ea(C,M[0]);x.name=g.name,c.add(x)}else if(i.vertices.length>0){const m=new wl({size:1,sizeAttenuation:!1}),_=new ia;_.setAttribute("position",new ci(i.vertices,3)),i.colors.length>0&&i.colors[0]!==void 0&&(_.setAttribute("color",new ci(i.colors,3)),m.vertexColors=!0);const g=new Ed(_,m);c.add(g)}return c}}const f0={type:"change"},Op={type:"start"},Z0={type:"end"},yu=new Fu,h0=new br,nA=Math.cos(70*Ex.DEG2RAD),On=new ot,mi=2*Math.PI,an={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ud=1e-6;class iA extends hE{constructor(t,i=null){super(t,i),this.state=an.NONE,this.target=new ot,this.cursor=new ot,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:po.ROTATE,MIDDLE:po.DOLLY,RIGHT:po.PAN},this.touches={ONE:fo.ROTATE,TWO:fo.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new ot,this._lastQuaternion=new ps,this._lastTargetPosition=new ot,this._quat=new ps().setFromUnitVectors(t.up,new ot(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Pv,this._sphericalDelta=new Pv,this._scale=1,this._panOffset=new ot,this._rotateStart=new Ee,this._rotateEnd=new Ee,this._rotateDelta=new Ee,this._panStart=new Ee,this._panEnd=new Ee,this._panDelta=new Ee,this._dollyStart=new Ee,this._dollyEnd=new Ee,this._dollyDelta=new Ee,this._dollyDirection=new ot,this._mouse=new Ee,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=rA.bind(this),this._onPointerDown=aA.bind(this),this._onPointerUp=sA.bind(this),this._onContextMenu=dA.bind(this),this._onMouseWheel=cA.bind(this),this._onKeyDown=uA.bind(this),this._onTouchStart=fA.bind(this),this._onTouchMove=hA.bind(this),this._onMouseDown=oA.bind(this),this._onMouseMove=lA.bind(this),this._interceptControlDown=pA.bind(this),this._interceptControlUp=mA.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(f0),this.update(),this.state=an.NONE}update(t=null){const i=this.object.position;On.copy(i).sub(this.target),On.applyQuaternion(this._quat),this._spherical.setFromVector3(On),this.autoRotate&&this.state===an.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let r=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(r)&&isFinite(l)&&(r<-Math.PI?r+=mi:r>Math.PI&&(r-=mi),l<-Math.PI?l+=mi:l>Math.PI&&(l-=mi),r<=l?this._spherical.theta=Math.max(r,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(r+l)/2?Math.max(r,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const p=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=p!=this._spherical.radius}if(On.setFromSpherical(this._spherical),On.applyQuaternion(this._quatInverse),i.copy(this.target).add(On),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let p=null;if(this.object.isPerspectiveCamera){const m=On.length();p=this._clampDistance(m*this._scale);const _=m-p;this.object.position.addScaledVector(this._dollyDirection,_),this.object.updateMatrixWorld(),c=!!_}else if(this.object.isOrthographicCamera){const m=new ot(this._mouse.x,this._mouse.y,0);m.unproject(this.object);const _=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=_!==this.object.zoom;const g=new ot(this._mouse.x,this._mouse.y,0);g.unproject(this.object),this.object.position.sub(g).add(m),this.object.updateMatrixWorld(),p=On.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;p!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(p).add(this.object.position):(yu.origin.copy(this.object.position),yu.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(yu.direction))<nA?this.object.lookAt(this.target):(h0.setFromNormalAndCoplanarPoint(this.object.up,this.target),yu.intersectPlane(h0,this.target))))}else if(this.object.isOrthographicCamera){const p=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),p!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>Ud||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ud||this._lastTargetPosition.distanceToSquared(this.target)>Ud?(this.dispatchEvent(f0),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?mi/60*this.autoRotateSpeed*t:mi/60/60*this.autoRotateSpeed}_getZoomScale(t){const i=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,i){On.setFromMatrixColumn(i,0),On.multiplyScalar(-t),this._panOffset.add(On)}_panUp(t,i){this.screenSpacePanning===!0?On.setFromMatrixColumn(i,1):(On.setFromMatrixColumn(i,0),On.crossVectors(this.object.up,On)),On.multiplyScalar(t),this._panOffset.add(On)}_pan(t,i){const r=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;On.copy(l).sub(this.target);let c=On.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*c/r.clientHeight,this.object.matrix),this._panUp(2*i*c/r.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/r.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/r.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const r=this.domElement.getBoundingClientRect(),l=t-r.left,c=i-r.top,p=r.width,m=r.height;this._mouse.x=l/p*2-1,this._mouse.y=-(c/m)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(mi*this._rotateDelta.x/i.clientHeight),this._rotateUp(mi*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let i=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(mi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-mi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(mi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-mi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),r=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._rotateStart.set(r,l)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),r=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panStart.set(r,l)}}_handleTouchStartDolly(t){const i=this._getSecondPointerPosition(t),r=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(r*r+l*l);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const r=this._getSecondPointerPosition(t),l=.5*(t.pageX+r.x),c=.5*(t.pageY+r.y);this._rotateEnd.set(l,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(mi*this._rotateDelta.x/i.clientHeight),this._rotateUp(mi*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),r=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panEnd.set(r,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const i=this._getSecondPointerPosition(t),r=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(r*r+l*l);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const p=(t.pageX+i.x)*.5,m=(t.pageY+i.y)*.5;this._updateZoomParameters(p,m)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(t){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId)return!0;return!1}_trackPointer(t){let i=this._pointerPositions[t.pointerId];i===void 0&&(i=new Ee,this._pointerPositions[t.pointerId]=i),i.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const i=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(t){const i=t.deltaMode,r={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(i){case 1:r.deltaY*=16;break;case 2:r.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(r.deltaY*=10),r}}function aA(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function rA(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function sA(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Z0),this.state=an.NONE;break;case 1:const t=this._pointers[0],i=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:i.x,pageY:i.y});break}}function oA(s){let t;switch(s.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case po.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=an.DOLLY;break;case po.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=an.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=an.ROTATE}break;case po.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=an.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=an.PAN}break;default:this.state=an.NONE}this.state!==an.NONE&&this.dispatchEvent(Op)}function lA(s){switch(this.state){case an.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case an.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case an.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function cA(s){this.enabled===!1||this.enableZoom===!1||this.state!==an.NONE||(s.preventDefault(),this.dispatchEvent(Op),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(Z0))}function uA(s){this.enabled!==!1&&this._handleKeyDown(s)}function fA(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case fo.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=an.TOUCH_ROTATE;break;case fo.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=an.TOUCH_PAN;break;default:this.state=an.NONE}break;case 2:switch(this.touches.TWO){case fo.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=an.TOUCH_DOLLY_PAN;break;case fo.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=an.TOUCH_DOLLY_ROTATE;break;default:this.state=an.NONE}break;default:this.state=an.NONE}this.state!==an.NONE&&this.dispatchEvent(Op)}function hA(s){switch(this._trackPointer(s),this.state){case an.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case an.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case an.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case an.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=an.NONE}}function dA(s){this.enabled!==!1&&s.preventDefault()}function pA(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function mA(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Ld,d0;function gA(){if(d0)return Ld;d0=1;var s="Expected a function",t=NaN,i="[object Symbol]",r=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,p=/^0o[0-7]+$/i,m=parseInt,_=typeof qc=="object"&&qc&&qc.Object===Object&&qc,g=typeof self=="object"&&self&&self.Object===Object&&self,v=_||g||Function("return this")(),y=Object.prototype,E=y.toString,b=Math.max,w=Math.min,C=function(){return v.Date.now()};function M(z,k,K){var F,O,q,rt,dt,_t,Mt=0,X=!1,st=!1,tt=!0;if(typeof z!="function")throw new TypeError(s);k=Y(k)||0,V(K)&&(X=!!K.leading,st="maxWait"in K,q=st?b(Y(K.maxWait)||0,k):q,tt="trailing"in K?!!K.trailing:tt);function Lt(Pt){var ce=F,ee=O;return F=O=void 0,Mt=Pt,rt=z.apply(ee,ce),rt}function I(Pt){return Mt=Pt,dt=setTimeout(Dt,k),X?Lt(Pt):rt}function ct(Pt){var ce=Pt-_t,ee=Pt-Mt,Ve=k-ce;return st?w(Ve,q-ee):Ve}function At(Pt){var ce=Pt-_t,ee=Pt-Mt;return _t===void 0||ce>=k||ce<0||st&&ee>=q}function Dt(){var Pt=C();if(At(Pt))return at(Pt);dt=setTimeout(Dt,ct(Pt))}function at(Pt){return dt=void 0,tt&&F?Lt(Pt):(F=O=void 0,rt)}function bt(){dt!==void 0&&clearTimeout(dt),Mt=0,F=_t=O=dt=void 0}function Ut(){return dt===void 0?rt:at(C())}function It(){var Pt=C(),ce=At(Pt);if(F=arguments,O=this,_t=Pt,ce){if(dt===void 0)return I(_t);if(st)return dt=setTimeout(Dt,k),Lt(_t)}return dt===void 0&&(dt=setTimeout(Dt,k)),rt}return It.cancel=bt,It.flush=Ut,It}function x(z,k,K){var F=!0,O=!0;if(typeof z!="function")throw new TypeError(s);return V(K)&&(F="leading"in K?!!K.leading:F,O="trailing"in K?!!K.trailing:O),M(z,k,{leading:F,maxWait:k,trailing:O})}function V(z){var k=typeof z;return!!z&&(k=="object"||k=="function")}function H(z){return!!z&&typeof z=="object"}function P(z){return typeof z=="symbol"||H(z)&&E.call(z)==i}function Y(z){if(typeof z=="number")return z;if(P(z))return t;if(V(z)){var k=typeof z.valueOf=="function"?z.valueOf():z;z=V(k)?k+"":k}if(typeof z!="string")return z===0?z:+z;z=z.replace(r,"");var K=c.test(z);return K||p.test(z)?m(z.slice(2),K?2:8):l.test(z)?t:+z}return Ld=x,Ld}var _A=gA();const vA=y0(_A),p0=s=>{let t;const i=new Set,r=(g,v)=>{const y=typeof g=="function"?g(t):g;if(!Object.is(y,t)){const E=t;t=v??(typeof y!="object"||y===null)?y:Object.assign({},t,y),i.forEach(b=>b(t,E))}},l=()=>t,m={setState:r,getState:l,getInitialState:()=>_,subscribe:g=>(i.add(g),()=>i.delete(g))},_=t=s(r,l,m);return m},yA=s=>s?p0(s):p0,SA=s=>s;function xA(s,t=SA){const i=$_.useSyncExternalStore(s.subscribe,()=>t(s.getState()),()=>t(s.getInitialState()));return $_.useDebugValue(i),i}const m0=s=>{const t=yA(s),i=r=>xA(t,r);return Object.assign(i,t),i},K0=s=>s?m0(s):m0,Q0=K0(s=>({position:void 0,setPosition:t=>{s({position:t==null?void 0:t.clone()})}})),Ou=K0(s=>({modelCenter:void 0,setModelCenter:t=>{s({modelCenter:t==null?void 0:t.clone()})},boundingSphereRadius:void 0,setBoundingSphereRadius:t=>{s({boundingSphereRadius:t})}}));function EA({file:s,width:t,height:i}){const r=Q0(w=>w.setPosition),l=vA(w=>{r(w)},100),c=Ou(w=>w.setModelCenter),p=Ou(w=>w.setBoundingSphereRadius),m=Wn.useRef(null),_=Wn.useRef(null),g=Wn.useRef(null),v=Wn.useRef(null),y=Wn.useRef(null),E=Wn.useRef(null),b=Wn.useCallback(w=>{if(!_.current)return;const C=new FileReader;C.onload=()=>{if(!_.current||!g.current||!y.current||!E.current)return;const M=C.result;if(typeof M!="string")return;const V=new eA().parse(M);_.current.add(V);const H=new Eo().setFromObject(V),P=new Mo;H.getBoundingSphere(P);const Y=P.radius,z=g.current.fov*(Math.PI/180),k=2*Math.atan(g.current.aspect*Math.tan(z/2)),K=Y/Math.tan(z/2),F=Y/Math.tan(k/2),O=Math.max(K,F)*1.5;g.current.position.copy(P.center).add(new ot(0,0,O)),g.current.lookAt(P.center),y.current.dirLightXPlus.position.copy(P.center).add(new ot(Y,0,0)),y.current.dirLightXPlus.target.position.copy(P.center),y.current.dirLightXMinus.position.copy(P.center).add(new ot(-Y,0,0)),y.current.dirLightXMinus.target.position.copy(P.center),E.current.target.copy(P.center),E.current.update(),c(P.center),p(Y)},C.readAsText(w)},[]);return Wn.useEffect(()=>{if(!m.current)return;const w=m.current.clientWidth,C=m.current.clientHeight,M=new Qx,x=new Gi(90,w/C,.1,1e3),V=new Z1({antialias:!0,alpha:!0});V.setSize(w,C),m.current.appendChild(V.domElement);const H=new iA(x,V.domElement),P=new Ov(16777215,1),Y=new Ov(16777215,1);M.add(P),M.add(Y),_.current=M,g.current=x,v.current=V,y.current={dirLightXPlus:P,dirLightXMinus:Y},E.current=H;const z=()=>{var k,K;requestAnimationFrame(z),V.render(M,x),(k=E.current)==null||k.update(),l((K=g.current)==null?void 0:K.position)};return z(),()=>{var k,K,F;l.cancel(),(k=E.current)==null||k.dispose(),(K=v.current)==null||K.dispose(),(F=m.current)==null||F.removeChild(V.domElement)}},[]),Wn.useEffect(()=>{s&&b(s)},[s]),Xn.jsx("div",{ref:m,style:{width:`${t}px`,height:`${i}px`}})}const MA=Wn.memo(EA),bA="modulepreload",TA=function(s,t){return new URL(s,t).href},g0={},AA=function(t,i,r){let l=Promise.resolve();if(i&&i.length>0){let p=function(v){return Promise.all(v.map(y=>Promise.resolve(y).then(E=>({status:"fulfilled",value:E}),E=>({status:"rejected",reason:E}))))};const m=document.getElementsByTagName("link"),_=document.querySelector("meta[property=csp-nonce]"),g=(_==null?void 0:_.nonce)||(_==null?void 0:_.getAttribute("nonce"));l=p(i.map(v=>{if(v=TA(v,r),v in g0)return;g0[v]=!0;const y=v.endsWith(".css"),E=y?'[rel="stylesheet"]':"";if(!!r)for(let C=m.length-1;C>=0;C--){const M=m[C];if(M.href===v&&(!y||M.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${v}"]${E}`))return;const w=document.createElement("link");if(w.rel=y?"stylesheet":bA,y||(w.as="script"),w.crossOrigin="",w.href=v,g&&w.setAttribute("nonce",g),document.head.appendChild(w),y)return new Promise((C,M)=>{w.addEventListener("load",C),w.addEventListener("error",()=>M(new Error(`Unable to preload CSS for ${v}`)))})}))}function c(p){const m=new Event("vite:preloadError",{cancelable:!0});if(m.payload=p,window.dispatchEvent(m),!m.defaultPrevented)throw p}return l.then(p=>{for(const m of p||[])m.status==="rejected"&&c(m.reason);return t().catch(c)})};var RA=async function(s={}){var t,i=s,r,l,c=new Promise((f,d)=>{r=f,l=d}),p=typeof window=="object",m=typeof WorkerGlobalScope<"u",_=typeof process=="object"&&typeof process.versions=="object"&&typeof process.versions.node=="string"&&process.type!="renderer";if(_){const{createRequire:f}=await AA(()=>import("./__vite-browser-external-BIHI7g3E.js"),[],import.meta.url);var g=f(import.meta.url)}var v="./this.program",y=import.meta.url,E="";function b(f){return i.locateFile?i.locateFile(f,E):E+f}var w,C;if(_){var M=g("fs"),x=g("path");y.startsWith("file:")&&(E=x.dirname(g("url").fileURLToPath(y))+"/"),C=f=>{f=st(f)?new URL(f):f;var d=M.readFileSync(f);return d},w=async(f,d=!0)=>{f=st(f)?new URL(f):f;var S=M.readFileSync(f,d?void 0:"utf8");return S},process.argv.length>1&&(v=process.argv[1].replace(/\\/g,"/")),process.argv.slice(2)}else if(p||m){try{E=new URL(".",y).href}catch{}m&&(C=f=>{var d=new XMLHttpRequest;return d.open("GET",f,!1),d.responseType="arraybuffer",d.send(null),new Uint8Array(d.response)}),w=async f=>{if(st(f))return new Promise((S,A)=>{var L=new XMLHttpRequest;L.open("GET",f,!0),L.responseType="arraybuffer",L.onload=()=>{if(L.status==200||L.status==0&&L.response){S(L.response);return}A(L.status)},L.onerror=A,L.send(null)});var d=await fetch(f,{credentials:"same-origin"});if(d.ok)return d.arrayBuffer();throw new Error(d.status+" : "+d.url)}}var V=console.log.bind(console),H=console.error.bind(console),P,Y,z=!1,k,K,F,O,q,rt,dt,_t,Mt,X,st=f=>f.startsWith("file://");function tt(){var f=Y.buffer;k=new Int8Array(f),F=new Int16Array(f),K=new Uint8Array(f),O=new Uint16Array(f),q=new Int32Array(f),rt=new Uint32Array(f),dt=new Float32Array(f),X=new Float64Array(f),_t=new BigInt64Array(f),Mt=new BigUint64Array(f)}function Lt(){if(i.preRun)for(typeof i.preRun=="function"&&(i.preRun=[i.preRun]);i.preRun.length;)We(i.preRun.shift());Yn(ne)}function I(){!i.noFSInit&&!R.initialized&&R.init(),qi.K(),R.ignorePermissions=!1}function ct(){if(i.postRun)for(typeof i.postRun=="function"&&(i.postRun=[i.postRun]);i.postRun.length;)ge(i.postRun.shift());Yn(we)}var At=0,Dt=null;function at(f){var d;At++,(d=i.monitorRunDependencies)==null||d.call(i,At)}function bt(f){var S;if(At--,(S=i.monitorRunDependencies)==null||S.call(i,At),At==0&&Dt){var d=Dt;Dt=null,d()}}function Ut(f){var S;(S=i.onAbort)==null||S.call(i,f),f="Aborted("+f+")",H(f),z=!0,f+=". Build with -sASSERTIONS for more info.";var d=new WebAssembly.RuntimeError(f);throw l(d),d}var It;function Pt(){return i.locateFile?b("ray-tracing.wasm"):new URL(""+new URL("ray-tracing-zK_SzBE-.wasm",import.meta.url).href,import.meta.url).href}function ce(f){if(f==It&&P)return new Uint8Array(P);if(C)return C(f);throw"both async and sync fetching of the wasm failed"}async function ee(f){if(!P)try{var d=await w(f);return new Uint8Array(d)}catch{}return ce(f)}async function Ve(f,d){try{var S=await ee(f),A=await WebAssembly.instantiate(S,d);return A}catch(L){H(`failed to asynchronously prepare wasm: ${L}`),Ut(L)}}async function Ye(f,d,S){if(!f&&typeof WebAssembly.instantiateStreaming=="function"&&!st(d)&&!_)try{var A=fetch(d,{credentials:"same-origin"}),L=await WebAssembly.instantiateStreaming(A,S);return L}catch(G){H(`wasm streaming compile failed: ${G}`),H("falling back to ArrayBuffer instantiation")}return Ve(d,S)}function Me(){return{a:Wl}}async function Z(){function f(G,j){return qi=G.exports,Y=qi.J,tt(),qe=qi.L,bt(),qi}at();function d(G){return f(G.instance)}var S=Me();if(i.instantiateWasm)return new Promise((G,j)=>{i.instantiateWasm(S,(J,yt)=>{G(f(J))})});It??(It=Pt());try{var A=await Ye(P,It,S),L=d(A);return L}catch(G){return l(G),Promise.reject(G)}}var Yn=f=>{for(;f.length>0;)f.shift()(i)},we=[],ge=f=>we.push(f),ne=[],We=f=>ne.push(f),te=typeof TextDecoder<"u"?new TextDecoder:void 0,B=(f,d=0,S=NaN)=>{for(var A=d+S,L=d;f[L]&&!(L>=A);)++L;if(L-d>16&&f.buffer&&te)return te.decode(f.subarray(d,L));for(var G="";d<L;){var j=f[d++];if(!(j&128)){G+=String.fromCharCode(j);continue}var J=f[d++]&63;if((j&224)==192){G+=String.fromCharCode((j&31)<<6|J);continue}var yt=f[d++]&63;if((j&240)==224?j=(j&15)<<12|J<<6|yt:j=(j&7)<<18|J<<12|yt<<6|f[d++]&63,j<65536)G+=String.fromCharCode(j);else{var Ht=j-65536;G+=String.fromCharCode(55296|Ht>>10,56320|Ht&1023)}}return G},D=(f,d)=>f?B(K,f,d):"",ft=(f,d,S,A)=>Ut(`Assertion failed: ${D(f)}, at: `+[d?D(d):"unknown filename",S,A?D(A):"unknown function"]);class Rt{constructor(d){this.excPtr=d,this.ptr=d-24}set_type(d){rt[this.ptr+4>>2]=d}get_type(){return rt[this.ptr+4>>2]}set_destructor(d){rt[this.ptr+8>>2]=d}get_destructor(){return rt[this.ptr+8>>2]}set_caught(d){d=d?1:0,k[this.ptr+12]=d}get_caught(){return k[this.ptr+12]!=0}set_rethrown(d){d=d?1:0,k[this.ptr+13]=d}get_rethrown(){return k[this.ptr+13]!=0}init(d,S){this.set_adjusted_ptr(0),this.set_type(d),this.set_destructor(S)}set_adjusted_ptr(d){rt[this.ptr+16>>2]=d}get_adjusted_ptr(){return rt[this.ptr+16>>2]}}var Nt=0,St=(f,d,S)=>{var A=new Rt(f);throw A.init(d,S),Nt=f,Nt},kt=()=>{var f=q[+Qe.varargs>>2];return Qe.varargs+=4,f},Gt=kt,zt={isAbs:f=>f.charAt(0)==="/",splitPath:f=>{var d=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;return d.exec(f).slice(1)},normalizeArray:(f,d)=>{for(var S=0,A=f.length-1;A>=0;A--){var L=f[A];L==="."?f.splice(A,1):L===".."?(f.splice(A,1),S++):S&&(f.splice(A,1),S--)}if(d)for(;S;S--)f.unshift("..");return f},normalize:f=>{var d=zt.isAbs(f),S=f.slice(-1)==="/";return f=zt.normalizeArray(f.split("/").filter(A=>!!A),!d).join("/"),!f&&!d&&(f="."),f&&S&&(f+="/"),(d?"/":"")+f},dirname:f=>{var d=zt.splitPath(f),S=d[0],A=d[1];return!S&&!A?".":(A&&(A=A.slice(0,-1)),S+A)},basename:f=>f&&f.match(/([^\/]+|\/)\/*$/)[1],join:(...f)=>zt.normalize(f.join("/")),join2:(f,d)=>zt.normalize(f+"/"+d)},ue=()=>{if(_){var f=g("crypto");return d=>f.randomFillSync(d)}return d=>crypto.getRandomValues(d)},Ft=f=>{(Ft=ue())(f)},jt={resolve:(...f)=>{for(var d="",S=!1,A=f.length-1;A>=-1&&!S;A--){var L=A>=0?f[A]:R.cwd();if(typeof L!="string")throw new TypeError("Arguments to path.resolve must be strings");if(!L)return"";d=L+"/"+d,S=zt.isAbs(L)}return d=zt.normalizeArray(d.split("/").filter(G=>!!G),!S).join("/"),(S?"/":"")+d||"."},relative:(f,d)=>{f=jt.resolve(f).slice(1),d=jt.resolve(d).slice(1);function S(Ht){for(var Kt=0;Kt<Ht.length&&Ht[Kt]==="";Kt++);for(var Qt=Ht.length-1;Qt>=0&&Ht[Qt]==="";Qt--);return Kt>Qt?[]:Ht.slice(Kt,Qt-Kt+1)}for(var A=S(f.split("/")),L=S(d.split("/")),G=Math.min(A.length,L.length),j=G,J=0;J<G;J++)if(A[J]!==L[J]){j=J;break}for(var yt=[],J=j;J<A.length;J++)yt.push("..");return yt=yt.concat(L.slice(j)),yt.join("/")}},re=[],se=f=>{for(var d=0,S=0;S<f.length;++S){var A=f.charCodeAt(S);A<=127?d++:A<=2047?d+=2:A>=55296&&A<=57343?(d+=4,++S):d+=3}return d},Wt=(f,d,S,A)=>{if(!(A>0))return 0;for(var L=S,G=S+A-1,j=0;j<f.length;++j){var J=f.charCodeAt(j);if(J>=55296&&J<=57343){var yt=f.charCodeAt(++j);J=65536+((J&1023)<<10)|yt&1023}if(J<=127){if(S>=G)break;d[S++]=J}else if(J<=2047){if(S+1>=G)break;d[S++]=192|J>>6,d[S++]=128|J&63}else if(J<=65535){if(S+2>=G)break;d[S++]=224|J>>12,d[S++]=128|J>>6&63,d[S++]=128|J&63}else{if(S+3>=G)break;d[S++]=240|J>>18,d[S++]=128|J>>12&63,d[S++]=128|J>>6&63,d[S++]=128|J&63}}return d[S]=0,S-L},ve=(f,d,S)=>{var A=se(f)+1,L=new Array(A),G=Wt(f,L,0,L.length);return L.length=G,L},pe=()=>{if(!re.length){var f=null;if(_){var d=256,S=Buffer.alloc(d),A=0,L=process.stdin.fd;try{A=M.readSync(L,S,0,d)}catch(G){if(G.toString().includes("EOF"))A=0;else throw G}A>0&&(f=S.slice(0,A).toString("utf-8"))}else typeof window<"u"&&typeof window.prompt=="function"&&(f=window.prompt("Input: "),f!==null&&(f+=`
`));if(!f)return null;re=ve(f)}return re.shift()},Pe={ttys:[],init(){},shutdown(){},register(f,d){Pe.ttys[f]={input:[],output:[],ops:d},R.registerDevice(f,Pe.stream_ops)},stream_ops:{open(f){var d=Pe.ttys[f.node.rdev];if(!d)throw new R.ErrnoError(43);f.tty=d,f.seekable=!1},close(f){f.tty.ops.fsync(f.tty)},fsync(f){f.tty.ops.fsync(f.tty)},read(f,d,S,A,L){if(!f.tty||!f.tty.ops.get_char)throw new R.ErrnoError(60);for(var G=0,j=0;j<A;j++){var J;try{J=f.tty.ops.get_char(f.tty)}catch{throw new R.ErrnoError(29)}if(J===void 0&&G===0)throw new R.ErrnoError(6);if(J==null)break;G++,d[S+j]=J}return G&&(f.node.atime=Date.now()),G},write(f,d,S,A,L){if(!f.tty||!f.tty.ops.put_char)throw new R.ErrnoError(60);try{for(var G=0;G<A;G++)f.tty.ops.put_char(f.tty,d[S+G])}catch{throw new R.ErrnoError(29)}return A&&(f.node.mtime=f.node.ctime=Date.now()),G}},default_tty_ops:{get_char(f){return pe()},put_char(f,d){d===null||d===10?(V(B(f.output)),f.output=[]):d!=0&&f.output.push(d)},fsync(f){var d;((d=f.output)==null?void 0:d.length)>0&&(V(B(f.output)),f.output=[])},ioctl_tcgets(f){return{c_iflag:25856,c_oflag:5,c_cflag:191,c_lflag:35387,c_cc:[3,28,127,21,4,0,1,0,17,19,26,0,18,15,23,22,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}},ioctl_tcsets(f,d,S){return 0},ioctl_tiocgwinsz(f){return[24,80]}},default_tty1_ops:{put_char(f,d){d===null||d===10?(H(B(f.output)),f.output=[]):d!=0&&f.output.push(d)},fsync(f){var d;((d=f.output)==null?void 0:d.length)>0&&(H(B(f.output)),f.output=[])}}},$=f=>{Ut()},Et={ops_table:null,mount(f){return Et.createNode(null,"/",16895,0)},createNode(f,d,S,A){if(R.isBlkdev(S)||R.isFIFO(S))throw new R.ErrnoError(63);Et.ops_table||(Et.ops_table={dir:{node:{getattr:Et.node_ops.getattr,setattr:Et.node_ops.setattr,lookup:Et.node_ops.lookup,mknod:Et.node_ops.mknod,rename:Et.node_ops.rename,unlink:Et.node_ops.unlink,rmdir:Et.node_ops.rmdir,readdir:Et.node_ops.readdir,symlink:Et.node_ops.symlink},stream:{llseek:Et.stream_ops.llseek}},file:{node:{getattr:Et.node_ops.getattr,setattr:Et.node_ops.setattr},stream:{llseek:Et.stream_ops.llseek,read:Et.stream_ops.read,write:Et.stream_ops.write,mmap:Et.stream_ops.mmap,msync:Et.stream_ops.msync}},link:{node:{getattr:Et.node_ops.getattr,setattr:Et.node_ops.setattr,readlink:Et.node_ops.readlink},stream:{}},chrdev:{node:{getattr:Et.node_ops.getattr,setattr:Et.node_ops.setattr},stream:R.chrdev_stream_ops}});var L=R.createNode(f,d,S,A);return R.isDir(L.mode)?(L.node_ops=Et.ops_table.dir.node,L.stream_ops=Et.ops_table.dir.stream,L.contents={}):R.isFile(L.mode)?(L.node_ops=Et.ops_table.file.node,L.stream_ops=Et.ops_table.file.stream,L.usedBytes=0,L.contents=null):R.isLink(L.mode)?(L.node_ops=Et.ops_table.link.node,L.stream_ops=Et.ops_table.link.stream):R.isChrdev(L.mode)&&(L.node_ops=Et.ops_table.chrdev.node,L.stream_ops=Et.ops_table.chrdev.stream),L.atime=L.mtime=L.ctime=Date.now(),f&&(f.contents[d]=L,f.atime=f.mtime=f.ctime=L.atime),L},getFileDataAsTypedArray(f){return f.contents?f.contents.subarray?f.contents.subarray(0,f.usedBytes):new Uint8Array(f.contents):new Uint8Array(0)},expandFileStorage(f,d){var S=f.contents?f.contents.length:0;if(!(S>=d)){var A=1024*1024;d=Math.max(d,S*(S<A?2:1.125)>>>0),S!=0&&(d=Math.max(d,256));var L=f.contents;f.contents=new Uint8Array(d),f.usedBytes>0&&f.contents.set(L.subarray(0,f.usedBytes),0)}},resizeFileStorage(f,d){if(f.usedBytes!=d)if(d==0)f.contents=null,f.usedBytes=0;else{var S=f.contents;f.contents=new Uint8Array(d),S&&f.contents.set(S.subarray(0,Math.min(d,f.usedBytes))),f.usedBytes=d}},node_ops:{getattr(f){var d={};return d.dev=R.isChrdev(f.mode)?f.id:1,d.ino=f.id,d.mode=f.mode,d.nlink=1,d.uid=0,d.gid=0,d.rdev=f.rdev,R.isDir(f.mode)?d.size=4096:R.isFile(f.mode)?d.size=f.usedBytes:R.isLink(f.mode)?d.size=f.link.length:d.size=0,d.atime=new Date(f.atime),d.mtime=new Date(f.mtime),d.ctime=new Date(f.ctime),d.blksize=4096,d.blocks=Math.ceil(d.size/d.blksize),d},setattr(f,d){for(const S of["mode","atime","mtime","ctime"])d[S]!=null&&(f[S]=d[S]);d.size!==void 0&&Et.resizeFileStorage(f,d.size)},lookup(f,d){throw Et.doesNotExistError},mknod(f,d,S,A){return Et.createNode(f,d,S,A)},rename(f,d,S){var A;try{A=R.lookupNode(d,S)}catch{}if(A){if(R.isDir(f.mode))for(var L in A.contents)throw new R.ErrnoError(55);R.hashRemoveNode(A)}delete f.parent.contents[f.name],d.contents[S]=f,f.name=S,d.ctime=d.mtime=f.parent.ctime=f.parent.mtime=Date.now()},unlink(f,d){delete f.contents[d],f.ctime=f.mtime=Date.now()},rmdir(f,d){var S=R.lookupNode(f,d);for(var A in S.contents)throw new R.ErrnoError(55);delete f.contents[d],f.ctime=f.mtime=Date.now()},readdir(f){return[".","..",...Object.keys(f.contents)]},symlink(f,d,S){var A=Et.createNode(f,d,41471,0);return A.link=S,A},readlink(f){if(!R.isLink(f.mode))throw new R.ErrnoError(28);return f.link}},stream_ops:{read(f,d,S,A,L){var G=f.node.contents;if(L>=f.node.usedBytes)return 0;var j=Math.min(f.node.usedBytes-L,A);if(j>8&&G.subarray)d.set(G.subarray(L,L+j),S);else for(var J=0;J<j;J++)d[S+J]=G[L+J];return j},write(f,d,S,A,L,G){if(d.buffer===k.buffer&&(G=!1),!A)return 0;var j=f.node;if(j.mtime=j.ctime=Date.now(),d.subarray&&(!j.contents||j.contents.subarray)){if(G)return j.contents=d.subarray(S,S+A),j.usedBytes=A,A;if(j.usedBytes===0&&L===0)return j.contents=d.slice(S,S+A),j.usedBytes=A,A;if(L+A<=j.usedBytes)return j.contents.set(d.subarray(S,S+A),L),A}if(Et.expandFileStorage(j,L+A),j.contents.subarray&&d.subarray)j.contents.set(d.subarray(S,S+A),L);else for(var J=0;J<A;J++)j.contents[L+J]=d[S+J];return j.usedBytes=Math.max(j.usedBytes,L+A),A},llseek(f,d,S){var A=d;if(S===1?A+=f.position:S===2&&R.isFile(f.node.mode)&&(A+=f.node.usedBytes),A<0)throw new R.ErrnoError(28);return A},mmap(f,d,S,A,L){if(!R.isFile(f.node.mode))throw new R.ErrnoError(43);var G,j,J=f.node.contents;if(!(L&2)&&J&&J.buffer===k.buffer)j=!1,G=J.byteOffset;else{if(j=!0,G=$(),!G)throw new R.ErrnoError(48);J&&((S>0||S+d<J.length)&&(J.subarray?J=J.subarray(S,S+d):J=Array.prototype.slice.call(J,S,S+d)),k.set(J,G))}return{ptr:G,allocated:j}},msync(f,d,S,A,L){return Et.stream_ops.write(f,d,0,A,S,!1),0}}},vt=async f=>{var d=await w(f);return new Uint8Array(d)},wt=(...f)=>R.createDataFile(...f),Yt=[],Xt=(f,d,S,A)=>{typeof Browser<"u"&&Browser.init();var L=!1;return Yt.forEach(G=>{L||G.canHandle(d)&&(G.handle(f,d,S,A),L=!0)}),L},_e=(f,d,S,A,L,G,j,J,yt,Ht)=>{var Kt=d?jt.resolve(zt.join2(f,d)):f;function Qt(Te){function $t(ye){Ht==null||Ht(),J||wt(f,d,ye,A,L,yt),G==null||G(),bt()}Xt(Te,Kt,$t,()=>{j==null||j(),bt()})||$t(Te)}at(),typeof S=="string"?vt(S).then(Qt,j):Qt(S)},Ke=f=>{var d={r:0,"r+":2,w:577,"w+":578,a:1089,"a+":1090},S=d[f];if(typeof S>"u")throw new Error(`Unknown file open mode: ${f}`);return S},ln=(f,d)=>{var S=0;return f&&(S|=365),d&&(S|=146),S},R={root:null,mounts:[],devices:{},streams:[],nextInode:1,nameTable:null,currentPath:"/",initialized:!1,ignorePermissions:!0,filesystems:null,syncFSRequests:0,readFiles:{},ErrnoError:class{constructor(f){ha(this,"name","ErrnoError");this.errno=f}},FSStream:class{constructor(){ha(this,"shared",{})}get object(){return this.node}set object(f){this.node=f}get isRead(){return(this.flags&2097155)!==1}get isWrite(){return(this.flags&2097155)!==0}get isAppend(){return this.flags&1024}get flags(){return this.shared.flags}set flags(f){this.shared.flags=f}get position(){return this.shared.position}set position(f){this.shared.position=f}},FSNode:class{constructor(f,d,S,A){ha(this,"node_ops",{});ha(this,"stream_ops",{});ha(this,"readMode",365);ha(this,"writeMode",146);ha(this,"mounted",null);f||(f=this),this.parent=f,this.mount=f.mount,this.id=R.nextInode++,this.name=d,this.mode=S,this.rdev=A,this.atime=this.mtime=this.ctime=Date.now()}get read(){return(this.mode&this.readMode)===this.readMode}set read(f){f?this.mode|=this.readMode:this.mode&=~this.readMode}get write(){return(this.mode&this.writeMode)===this.writeMode}set write(f){f?this.mode|=this.writeMode:this.mode&=~this.writeMode}get isFolder(){return R.isDir(this.mode)}get isDevice(){return R.isChrdev(this.mode)}},lookupPath(f,d={}){if(!f)throw new R.ErrnoError(44);d.follow_mount??(d.follow_mount=!0),zt.isAbs(f)||(f=R.cwd()+"/"+f);t:for(var S=0;S<40;S++){for(var A=f.split("/").filter(Ht=>!!Ht),L=R.root,G="/",j=0;j<A.length;j++){var J=j===A.length-1;if(J&&d.parent)break;if(A[j]!=="."){if(A[j]===".."){if(G=zt.dirname(G),R.isRoot(L)){f=G+"/"+A.slice(j+1).join("/");continue t}else L=L.parent;continue}G=zt.join2(G,A[j]);try{L=R.lookupNode(L,A[j])}catch(Ht){if((Ht==null?void 0:Ht.errno)===44&&J&&d.noent_okay)return{path:G};throw Ht}if(R.isMountpoint(L)&&(!J||d.follow_mount)&&(L=L.mounted.root),R.isLink(L.mode)&&(!J||d.follow)){if(!L.node_ops.readlink)throw new R.ErrnoError(52);var yt=L.node_ops.readlink(L);zt.isAbs(yt)||(yt=zt.dirname(G)+"/"+yt),f=yt+"/"+A.slice(j+1).join("/");continue t}}}return{path:G,node:L}}throw new R.ErrnoError(32)},getPath(f){for(var d;;){if(R.isRoot(f)){var S=f.mount.mountpoint;return d?S[S.length-1]!=="/"?`${S}/${d}`:S+d:S}d=d?`${f.name}/${d}`:f.name,f=f.parent}},hashName(f,d){for(var S=0,A=0;A<d.length;A++)S=(S<<5)-S+d.charCodeAt(A)|0;return(f+S>>>0)%R.nameTable.length},hashAddNode(f){var d=R.hashName(f.parent.id,f.name);f.name_next=R.nameTable[d],R.nameTable[d]=f},hashRemoveNode(f){var d=R.hashName(f.parent.id,f.name);if(R.nameTable[d]===f)R.nameTable[d]=f.name_next;else for(var S=R.nameTable[d];S;){if(S.name_next===f){S.name_next=f.name_next;break}S=S.name_next}},lookupNode(f,d){var S=R.mayLookup(f);if(S)throw new R.ErrnoError(S);for(var A=R.hashName(f.id,d),L=R.nameTable[A];L;L=L.name_next){var G=L.name;if(L.parent.id===f.id&&G===d)return L}return R.lookup(f,d)},createNode(f,d,S,A){var L=new R.FSNode(f,d,S,A);return R.hashAddNode(L),L},destroyNode(f){R.hashRemoveNode(f)},isRoot(f){return f===f.parent},isMountpoint(f){return!!f.mounted},isFile(f){return(f&61440)===32768},isDir(f){return(f&61440)===16384},isLink(f){return(f&61440)===40960},isChrdev(f){return(f&61440)===8192},isBlkdev(f){return(f&61440)===24576},isFIFO(f){return(f&61440)===4096},isSocket(f){return(f&49152)===49152},flagsToPermissionString(f){var d=["r","w","rw"][f&3];return f&512&&(d+="w"),d},nodePermissions(f,d){return R.ignorePermissions?0:d.includes("r")&&!(f.mode&292)||d.includes("w")&&!(f.mode&146)||d.includes("x")&&!(f.mode&73)?2:0},mayLookup(f){if(!R.isDir(f.mode))return 54;var d=R.nodePermissions(f,"x");return d||(f.node_ops.lookup?0:2)},mayCreate(f,d){if(!R.isDir(f.mode))return 54;try{var S=R.lookupNode(f,d);return 20}catch{}return R.nodePermissions(f,"wx")},mayDelete(f,d,S){var A;try{A=R.lookupNode(f,d)}catch(G){return G.errno}var L=R.nodePermissions(f,"wx");if(L)return L;if(S){if(!R.isDir(A.mode))return 54;if(R.isRoot(A)||R.getPath(A)===R.cwd())return 10}else if(R.isDir(A.mode))return 31;return 0},mayOpen(f,d){return f?R.isLink(f.mode)?32:R.isDir(f.mode)&&(R.flagsToPermissionString(d)!=="r"||d&576)?31:R.nodePermissions(f,R.flagsToPermissionString(d)):44},checkOpExists(f,d){if(!f)throw new R.ErrnoError(d);return f},MAX_OPEN_FDS:4096,nextfd(){for(var f=0;f<=R.MAX_OPEN_FDS;f++)if(!R.streams[f])return f;throw new R.ErrnoError(33)},getStreamChecked(f){var d=R.getStream(f);if(!d)throw new R.ErrnoError(8);return d},getStream:f=>R.streams[f],createStream(f,d=-1){return f=Object.assign(new R.FSStream,f),d==-1&&(d=R.nextfd()),f.fd=d,R.streams[d]=f,f},closeStream(f){R.streams[f]=null},dupStream(f,d=-1){var A,L;var S=R.createStream(f,d);return(L=(A=S.stream_ops)==null?void 0:A.dup)==null||L.call(A,S),S},doSetAttr(f,d,S){var A=f==null?void 0:f.stream_ops.setattr,L=A?f:d;A??(A=d.node_ops.setattr),R.checkOpExists(A,63),A(L,S)},chrdev_stream_ops:{open(f){var S,A;var d=R.getDevice(f.node.rdev);f.stream_ops=d.stream_ops,(A=(S=f.stream_ops).open)==null||A.call(S,f)},llseek(){throw new R.ErrnoError(70)}},major:f=>f>>8,minor:f=>f&255,makedev:(f,d)=>f<<8|d,registerDevice(f,d){R.devices[f]={stream_ops:d}},getDevice:f=>R.devices[f],getMounts(f){for(var d=[],S=[f];S.length;){var A=S.pop();d.push(A),S.push(...A.mounts)}return d},syncfs(f,d){typeof f=="function"&&(d=f,f=!1),R.syncFSRequests++,R.syncFSRequests>1&&H(`warning: ${R.syncFSRequests} FS.syncfs operations in flight at once, probably just doing extra work`);var S=R.getMounts(R.root.mount),A=0;function L(j){return R.syncFSRequests--,d(j)}function G(j){if(j)return G.errored?void 0:(G.errored=!0,L(j));++A>=S.length&&L(null)}S.forEach(j=>{if(!j.type.syncfs)return G(null);j.type.syncfs(j,f,G)})},mount(f,d,S){var A=S==="/",L=!S,G;if(A&&R.root)throw new R.ErrnoError(10);if(!A&&!L){var j=R.lookupPath(S,{follow_mount:!1});if(S=j.path,G=j.node,R.isMountpoint(G))throw new R.ErrnoError(10);if(!R.isDir(G.mode))throw new R.ErrnoError(54)}var J={type:f,opts:d,mountpoint:S,mounts:[]},yt=f.mount(J);return yt.mount=J,J.root=yt,A?R.root=yt:G&&(G.mounted=J,G.mount&&G.mount.mounts.push(J)),yt},unmount(f){var d=R.lookupPath(f,{follow_mount:!1});if(!R.isMountpoint(d.node))throw new R.ErrnoError(28);var S=d.node,A=S.mounted,L=R.getMounts(A);Object.keys(R.nameTable).forEach(j=>{for(var J=R.nameTable[j];J;){var yt=J.name_next;L.includes(J.mount)&&R.destroyNode(J),J=yt}}),S.mounted=null;var G=S.mount.mounts.indexOf(A);S.mount.mounts.splice(G,1)},lookup(f,d){return f.node_ops.lookup(f,d)},mknod(f,d,S){var A=R.lookupPath(f,{parent:!0}),L=A.node,G=zt.basename(f);if(!G)throw new R.ErrnoError(28);if(G==="."||G==="..")throw new R.ErrnoError(20);var j=R.mayCreate(L,G);if(j)throw new R.ErrnoError(j);if(!L.node_ops.mknod)throw new R.ErrnoError(63);return L.node_ops.mknod(L,G,d,S)},statfs(f){return R.statfsNode(R.lookupPath(f,{follow:!0}).node)},statfsStream(f){return R.statfsNode(f.node)},statfsNode(f){var d={bsize:4096,frsize:4096,blocks:1e6,bfree:5e5,bavail:5e5,files:R.nextInode,ffree:R.nextInode-1,fsid:42,flags:2,namelen:255};return f.node_ops.statfs&&Object.assign(d,f.node_ops.statfs(f.mount.opts.root)),d},create(f,d=438){return d&=4095,d|=32768,R.mknod(f,d,0)},mkdir(f,d=511){return d&=1023,d|=16384,R.mknod(f,d,0)},mkdirTree(f,d){var S=f.split("/"),A="";for(var L of S)if(L){(A||zt.isAbs(f))&&(A+="/"),A+=L;try{R.mkdir(A,d)}catch(G){if(G.errno!=20)throw G}}},mkdev(f,d,S){return typeof S>"u"&&(S=d,d=438),d|=8192,R.mknod(f,d,S)},symlink(f,d){if(!jt.resolve(f))throw new R.ErrnoError(44);var S=R.lookupPath(d,{parent:!0}),A=S.node;if(!A)throw new R.ErrnoError(44);var L=zt.basename(d),G=R.mayCreate(A,L);if(G)throw new R.ErrnoError(G);if(!A.node_ops.symlink)throw new R.ErrnoError(63);return A.node_ops.symlink(A,L,f)},rename(f,d){var S=zt.dirname(f),A=zt.dirname(d),L=zt.basename(f),G=zt.basename(d),j,J,yt;if(j=R.lookupPath(f,{parent:!0}),J=j.node,j=R.lookupPath(d,{parent:!0}),yt=j.node,!J||!yt)throw new R.ErrnoError(44);if(J.mount!==yt.mount)throw new R.ErrnoError(75);var Ht=R.lookupNode(J,L),Kt=jt.relative(f,A);if(Kt.charAt(0)!==".")throw new R.ErrnoError(28);if(Kt=jt.relative(d,S),Kt.charAt(0)!==".")throw new R.ErrnoError(55);var Qt;try{Qt=R.lookupNode(yt,G)}catch{}if(Ht!==Qt){var Te=R.isDir(Ht.mode),$t=R.mayDelete(J,L,Te);if($t)throw new R.ErrnoError($t);if($t=Qt?R.mayDelete(yt,G,Te):R.mayCreate(yt,G),$t)throw new R.ErrnoError($t);if(!J.node_ops.rename)throw new R.ErrnoError(63);if(R.isMountpoint(Ht)||Qt&&R.isMountpoint(Qt))throw new R.ErrnoError(10);if(yt!==J&&($t=R.nodePermissions(J,"w"),$t))throw new R.ErrnoError($t);R.hashRemoveNode(Ht);try{J.node_ops.rename(Ht,yt,G),Ht.parent=yt}catch(ye){throw ye}finally{R.hashAddNode(Ht)}}},rmdir(f){var d=R.lookupPath(f,{parent:!0}),S=d.node,A=zt.basename(f),L=R.lookupNode(S,A),G=R.mayDelete(S,A,!0);if(G)throw new R.ErrnoError(G);if(!S.node_ops.rmdir)throw new R.ErrnoError(63);if(R.isMountpoint(L))throw new R.ErrnoError(10);S.node_ops.rmdir(S,A),R.destroyNode(L)},readdir(f){var d=R.lookupPath(f,{follow:!0}),S=d.node,A=R.checkOpExists(S.node_ops.readdir,54);return A(S)},unlink(f){var d=R.lookupPath(f,{parent:!0}),S=d.node;if(!S)throw new R.ErrnoError(44);var A=zt.basename(f),L=R.lookupNode(S,A),G=R.mayDelete(S,A,!1);if(G)throw new R.ErrnoError(G);if(!S.node_ops.unlink)throw new R.ErrnoError(63);if(R.isMountpoint(L))throw new R.ErrnoError(10);S.node_ops.unlink(S,A),R.destroyNode(L)},readlink(f){var d=R.lookupPath(f),S=d.node;if(!S)throw new R.ErrnoError(44);if(!S.node_ops.readlink)throw new R.ErrnoError(28);return S.node_ops.readlink(S)},stat(f,d){var S=R.lookupPath(f,{follow:!d}),A=S.node,L=R.checkOpExists(A.node_ops.getattr,63);return L(A)},fstat(f){var d=R.getStreamChecked(f),S=d.node,A=d.stream_ops.getattr,L=A?d:S;return A??(A=S.node_ops.getattr),R.checkOpExists(A,63),A(L)},lstat(f){return R.stat(f,!0)},doChmod(f,d,S,A){R.doSetAttr(f,d,{mode:S&4095|d.mode&-4096,ctime:Date.now(),dontFollow:A})},chmod(f,d,S){var A;if(typeof f=="string"){var L=R.lookupPath(f,{follow:!S});A=L.node}else A=f;R.doChmod(null,A,d,S)},lchmod(f,d){R.chmod(f,d,!0)},fchmod(f,d){var S=R.getStreamChecked(f);R.doChmod(S,S.node,d,!1)},doChown(f,d,S){R.doSetAttr(f,d,{timestamp:Date.now(),dontFollow:S})},chown(f,d,S,A){var L;if(typeof f=="string"){var G=R.lookupPath(f,{follow:!A});L=G.node}else L=f;R.doChown(null,L,A)},lchown(f,d,S){R.chown(f,d,S,!0)},fchown(f,d,S){var A=R.getStreamChecked(f);R.doChown(A,A.node,!1)},doTruncate(f,d,S){if(R.isDir(d.mode))throw new R.ErrnoError(31);if(!R.isFile(d.mode))throw new R.ErrnoError(28);var A=R.nodePermissions(d,"w");if(A)throw new R.ErrnoError(A);R.doSetAttr(f,d,{size:S,timestamp:Date.now()})},truncate(f,d){if(d<0)throw new R.ErrnoError(28);var S;if(typeof f=="string"){var A=R.lookupPath(f,{follow:!0});S=A.node}else S=f;R.doTruncate(null,S,d)},ftruncate(f,d){var S=R.getStreamChecked(f);if(d<0||(S.flags&2097155)===0)throw new R.ErrnoError(28);R.doTruncate(S,S.node,d)},utime(f,d,S){var A=R.lookupPath(f,{follow:!0}),L=A.node,G=R.checkOpExists(L.node_ops.setattr,63);G(L,{atime:d,mtime:S})},open(f,d,S=438){if(f==="")throw new R.ErrnoError(44);d=typeof d=="string"?Ke(d):d,d&64?S=S&4095|32768:S=0;var A,L;if(typeof f=="object")A=f;else{L=f.endsWith("/");var G=R.lookupPath(f,{follow:!(d&131072),noent_okay:!0});A=G.node,f=G.path}var j=!1;if(d&64)if(A){if(d&128)throw new R.ErrnoError(20)}else{if(L)throw new R.ErrnoError(31);A=R.mknod(f,S|511,0),j=!0}if(!A)throw new R.ErrnoError(44);if(R.isChrdev(A.mode)&&(d&=-513),d&65536&&!R.isDir(A.mode))throw new R.ErrnoError(54);if(!j){var J=R.mayOpen(A,d);if(J)throw new R.ErrnoError(J)}d&512&&!j&&R.truncate(A,0),d&=-131713;var yt=R.createStream({node:A,path:R.getPath(A),flags:d,seekable:!0,position:0,stream_ops:A.stream_ops,ungotten:[],error:!1});return yt.stream_ops.open&&yt.stream_ops.open(yt),j&&R.chmod(A,S&511),i.logReadFiles&&!(d&1)&&(f in R.readFiles||(R.readFiles[f]=1)),yt},close(f){if(R.isClosed(f))throw new R.ErrnoError(8);f.getdents&&(f.getdents=null);try{f.stream_ops.close&&f.stream_ops.close(f)}catch(d){throw d}finally{R.closeStream(f.fd)}f.fd=null},isClosed(f){return f.fd===null},llseek(f,d,S){if(R.isClosed(f))throw new R.ErrnoError(8);if(!f.seekable||!f.stream_ops.llseek)throw new R.ErrnoError(70);if(S!=0&&S!=1&&S!=2)throw new R.ErrnoError(28);return f.position=f.stream_ops.llseek(f,d,S),f.ungotten=[],f.position},read(f,d,S,A,L){if(A<0||L<0)throw new R.ErrnoError(28);if(R.isClosed(f))throw new R.ErrnoError(8);if((f.flags&2097155)===1)throw new R.ErrnoError(8);if(R.isDir(f.node.mode))throw new R.ErrnoError(31);if(!f.stream_ops.read)throw new R.ErrnoError(28);var G=typeof L<"u";if(!G)L=f.position;else if(!f.seekable)throw new R.ErrnoError(70);var j=f.stream_ops.read(f,d,S,A,L);return G||(f.position+=j),j},write(f,d,S,A,L,G){if(A<0||L<0)throw new R.ErrnoError(28);if(R.isClosed(f))throw new R.ErrnoError(8);if((f.flags&2097155)===0)throw new R.ErrnoError(8);if(R.isDir(f.node.mode))throw new R.ErrnoError(31);if(!f.stream_ops.write)throw new R.ErrnoError(28);f.seekable&&f.flags&1024&&R.llseek(f,0,2);var j=typeof L<"u";if(!j)L=f.position;else if(!f.seekable)throw new R.ErrnoError(70);var J=f.stream_ops.write(f,d,S,A,L,G);return j||(f.position+=J),J},mmap(f,d,S,A,L){if((A&2)!==0&&(L&2)===0&&(f.flags&2097155)!==2)throw new R.ErrnoError(2);if((f.flags&2097155)===1)throw new R.ErrnoError(2);if(!f.stream_ops.mmap)throw new R.ErrnoError(43);if(!d)throw new R.ErrnoError(28);return f.stream_ops.mmap(f,d,S,A,L)},msync(f,d,S,A,L){return f.stream_ops.msync?f.stream_ops.msync(f,d,S,A,L):0},ioctl(f,d,S){if(!f.stream_ops.ioctl)throw new R.ErrnoError(59);return f.stream_ops.ioctl(f,d,S)},readFile(f,d={}){if(d.flags=d.flags||0,d.encoding=d.encoding||"binary",d.encoding!=="utf8"&&d.encoding!=="binary")throw new Error(`Invalid encoding type "${d.encoding}"`);var S,A=R.open(f,d.flags),L=R.stat(f),G=L.size,j=new Uint8Array(G);return R.read(A,j,0,G,0),d.encoding==="utf8"?S=B(j):d.encoding==="binary"&&(S=j),R.close(A),S},writeFile(f,d,S={}){S.flags=S.flags||577;var A=R.open(f,S.flags,S.mode);if(typeof d=="string"){var L=new Uint8Array(se(d)+1),G=Wt(d,L,0,L.length);R.write(A,L,0,G,void 0,S.canOwn)}else if(ArrayBuffer.isView(d))R.write(A,d,0,d.byteLength,void 0,S.canOwn);else throw new Error("Unsupported data type");R.close(A)},cwd:()=>R.currentPath,chdir(f){var d=R.lookupPath(f,{follow:!0});if(d.node===null)throw new R.ErrnoError(44);if(!R.isDir(d.node.mode))throw new R.ErrnoError(54);var S=R.nodePermissions(d.node,"x");if(S)throw new R.ErrnoError(S);R.currentPath=d.path},createDefaultDirectories(){R.mkdir("/tmp"),R.mkdir("/home"),R.mkdir("/home/web_user")},createDefaultDevices(){R.mkdir("/dev"),R.registerDevice(R.makedev(1,3),{read:()=>0,write:(A,L,G,j,J)=>j,llseek:()=>0}),R.mkdev("/dev/null",R.makedev(1,3)),Pe.register(R.makedev(5,0),Pe.default_tty_ops),Pe.register(R.makedev(6,0),Pe.default_tty1_ops),R.mkdev("/dev/tty",R.makedev(5,0)),R.mkdev("/dev/tty1",R.makedev(6,0));var f=new Uint8Array(1024),d=0,S=()=>(d===0&&(Ft(f),d=f.byteLength),f[--d]);R.createDevice("/dev","random",S),R.createDevice("/dev","urandom",S),R.mkdir("/dev/shm"),R.mkdir("/dev/shm/tmp")},createSpecialDirectories(){R.mkdir("/proc");var f=R.mkdir("/proc/self");R.mkdir("/proc/self/fd"),R.mount({mount(){var d=R.createNode(f,"fd",16895,73);return d.stream_ops={llseek:Et.stream_ops.llseek},d.node_ops={lookup(S,A){var L=+A,G=R.getStreamChecked(L),j={parent:null,mount:{mountpoint:"fake"},node_ops:{readlink:()=>G.path},id:L+1};return j.parent=j,j},readdir(){return Array.from(R.streams.entries()).filter(([S,A])=>A).map(([S,A])=>S.toString())}},d}},{},"/proc/self/fd")},createStandardStreams(f,d,S){f?R.createDevice("/dev","stdin",f):R.symlink("/dev/tty","/dev/stdin"),d?R.createDevice("/dev","stdout",null,d):R.symlink("/dev/tty","/dev/stdout"),S?R.createDevice("/dev","stderr",null,S):R.symlink("/dev/tty1","/dev/stderr"),R.open("/dev/stdin",0),R.open("/dev/stdout",1),R.open("/dev/stderr",1)},staticInit(){R.nameTable=new Array(4096),R.mount(Et,{},"/"),R.createDefaultDirectories(),R.createDefaultDevices(),R.createSpecialDirectories(),R.filesystems={MEMFS:Et}},init(f,d,S){R.initialized=!0,f??(f=i.stdin),d??(d=i.stdout),S??(S=i.stderr),R.createStandardStreams(f,d,S)},quit(){R.initialized=!1;for(var f of R.streams)f&&R.close(f)},findObject(f,d){var S=R.analyzePath(f,d);return S.exists?S.object:null},analyzePath(f,d){try{var S=R.lookupPath(f,{follow:!d});f=S.path}catch{}var A={isRoot:!1,exists:!1,error:0,name:null,path:null,object:null,parentExists:!1,parentPath:null,parentObject:null};try{var S=R.lookupPath(f,{parent:!0});A.parentExists=!0,A.parentPath=S.path,A.parentObject=S.node,A.name=zt.basename(f),S=R.lookupPath(f,{follow:!d}),A.exists=!0,A.path=S.path,A.object=S.node,A.name=S.node.name,A.isRoot=S.path==="/"}catch(L){A.error=L.errno}return A},createPath(f,d,S,A){f=typeof f=="string"?f:R.getPath(f);for(var L=d.split("/").reverse();L.length;){var G=L.pop();if(G){var j=zt.join2(f,G);try{R.mkdir(j)}catch(J){if(J.errno!=20)throw J}f=j}}return j},createFile(f,d,S,A,L){var G=zt.join2(typeof f=="string"?f:R.getPath(f),d),j=ln(A,L);return R.create(G,j)},createDataFile(f,d,S,A,L,G){var j=d;f&&(f=typeof f=="string"?f:R.getPath(f),j=d?zt.join2(f,d):f);var J=ln(A,L),yt=R.create(j,J);if(S){if(typeof S=="string"){for(var Ht=new Array(S.length),Kt=0,Qt=S.length;Kt<Qt;++Kt)Ht[Kt]=S.charCodeAt(Kt);S=Ht}R.chmod(yt,J|146);var Te=R.open(yt,577);R.write(Te,S,0,S.length,0,G),R.close(Te),R.chmod(yt,J)}},createDevice(f,d,S,A){var J;var L=zt.join2(typeof f=="string"?f:R.getPath(f),d),G=ln(!!S,!!A);(J=R.createDevice).major??(J.major=64);var j=R.makedev(R.createDevice.major++,0);return R.registerDevice(j,{open(yt){yt.seekable=!1},close(yt){var Ht;(Ht=A==null?void 0:A.buffer)!=null&&Ht.length&&A(10)},read(yt,Ht,Kt,Qt,Te){for(var $t=0,ye=0;ye<Qt;ye++){var hn;try{hn=S()}catch{throw new R.ErrnoError(29)}if(hn===void 0&&$t===0)throw new R.ErrnoError(6);if(hn==null)break;$t++,Ht[Kt+ye]=hn}return $t&&(yt.node.atime=Date.now()),$t},write(yt,Ht,Kt,Qt,Te){for(var $t=0;$t<Qt;$t++)try{A(Ht[Kt+$t])}catch{throw new R.ErrnoError(29)}return Qt&&(yt.node.mtime=yt.node.ctime=Date.now()),$t}}),R.mkdev(L,G,j)},forceLoadFile(f){if(f.isDevice||f.isFolder||f.link||f.contents)return!0;if(typeof XMLHttpRequest<"u")throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");try{f.contents=C(f.url),f.usedBytes=f.contents.length}catch{throw new R.ErrnoError(29)}},createLazyFile(f,d,S,A,L){class G{constructor(){ha(this,"lengthKnown",!1);ha(this,"chunks",[])}get($t){if(!($t>this.length-1||$t<0)){var ye=$t%this.chunkSize,hn=$t/this.chunkSize|0;return this.getter(hn)[ye]}}setDataGetter($t){this.getter=$t}cacheLength(){var $t=new XMLHttpRequest;if($t.open("HEAD",S,!1),$t.send(null),!($t.status>=200&&$t.status<300||$t.status===304))throw new Error("Couldn't load "+S+". Status: "+$t.status);var ye=Number($t.getResponseHeader("Content-length")),hn,si=(hn=$t.getResponseHeader("Accept-Ranges"))&&hn==="bytes",Un=(hn=$t.getResponseHeader("Content-Encoding"))&&hn==="gzip",jn=1024*1024;si||(jn=ye);var vi=(yi,xa)=>{if(yi>xa)throw new Error("invalid range ("+yi+", "+xa+") or no bytes requested!");if(xa>ye-1)throw new Error("only "+ye+" bytes available! programmer error!");var yn=new XMLHttpRequest;if(yn.open("GET",S,!1),ye!==jn&&yn.setRequestHeader("Range","bytes="+yi+"-"+xa),yn.responseType="arraybuffer",yn.overrideMimeType&&yn.overrideMimeType("text/plain; charset=x-user-defined"),yn.send(null),!(yn.status>=200&&yn.status<300||yn.status===304))throw new Error("Couldn't load "+S+". Status: "+yn.status);return yn.response!==void 0?new Uint8Array(yn.response||[]):ve(yn.responseText||"")},sa=this;sa.setDataGetter(yi=>{var xa=yi*jn,yn=(yi+1)*jn-1;if(yn=Math.min(yn,ye-1),typeof sa.chunks[yi]>"u"&&(sa.chunks[yi]=vi(xa,yn)),typeof sa.chunks[yi]>"u")throw new Error("doXHR failed!");return sa.chunks[yi]}),(Un||!ye)&&(jn=ye=1,ye=this.getter(0).length,jn=ye,V("LazyFiles on gzip forces download of the whole file when length is accessed")),this._length=ye,this._chunkSize=jn,this.lengthKnown=!0}get length(){return this.lengthKnown||this.cacheLength(),this._length}get chunkSize(){return this.lengthKnown||this.cacheLength(),this._chunkSize}}if(typeof XMLHttpRequest<"u"){if(!m)throw"Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";var j=new G,J={isDevice:!1,contents:j}}else var J={isDevice:!1,url:S};var yt=R.createFile(f,d,J,A,L);J.contents?yt.contents=J.contents:J.url&&(yt.contents=null,yt.url=J.url),Object.defineProperties(yt,{usedBytes:{get:function(){return this.contents.length}}});var Ht={},Kt=Object.keys(yt.stream_ops);Kt.forEach(Te=>{var $t=yt.stream_ops[Te];Ht[Te]=(...ye)=>(R.forceLoadFile(yt),$t(...ye))});function Qt(Te,$t,ye,hn,si){var Un=Te.node.contents;if(si>=Un.length)return 0;var jn=Math.min(Un.length-si,hn);if(Un.slice)for(var vi=0;vi<jn;vi++)$t[ye+vi]=Un[si+vi];else for(var vi=0;vi<jn;vi++)$t[ye+vi]=Un.get(si+vi);return jn}return Ht.read=(Te,$t,ye,hn,si)=>(R.forceLoadFile(yt),Qt(Te,$t,ye,hn,si)),Ht.mmap=(Te,$t,ye,hn,si)=>{R.forceLoadFile(yt);var Un=$();if(!Un)throw new R.ErrnoError(48);return Qt(Te,k,Un,$t,ye),{ptr:Un,allocated:!0}},yt.stream_ops=Ht,yt}},Qe={DEFAULT_POLLMASK:5,calculateAt(f,d,S){if(zt.isAbs(d))return d;var A;if(f===-100)A=R.cwd();else{var L=Qe.getStreamFromFD(f);A=L.path}if(d.length==0){if(!S)throw new R.ErrnoError(44);return A}return A+"/"+d},writeStat(f,d){q[f>>2]=d.dev,q[f+4>>2]=d.mode,rt[f+8>>2]=d.nlink,q[f+12>>2]=d.uid,q[f+16>>2]=d.gid,q[f+20>>2]=d.rdev,_t[f+24>>3]=BigInt(d.size),q[f+32>>2]=4096,q[f+36>>2]=d.blocks;var S=d.atime.getTime(),A=d.mtime.getTime(),L=d.ctime.getTime();return _t[f+40>>3]=BigInt(Math.floor(S/1e3)),rt[f+48>>2]=S%1e3*1e3*1e3,_t[f+56>>3]=BigInt(Math.floor(A/1e3)),rt[f+64>>2]=A%1e3*1e3*1e3,_t[f+72>>3]=BigInt(Math.floor(L/1e3)),rt[f+80>>2]=L%1e3*1e3*1e3,_t[f+88>>3]=BigInt(d.ino),0},writeStatFs(f,d){q[f+4>>2]=d.bsize,q[f+40>>2]=d.bsize,q[f+8>>2]=d.blocks,q[f+12>>2]=d.bfree,q[f+16>>2]=d.bavail,q[f+20>>2]=d.files,q[f+24>>2]=d.ffree,q[f+28>>2]=d.fsid,q[f+44>>2]=d.flags,q[f+36>>2]=d.namelen},doMsync(f,d,S,A,L){if(!R.isFile(d.node.mode))throw new R.ErrnoError(43);if(A&2)return 0;var G=K.slice(f,f+S);R.msync(d,G,L,S,A)},getStreamFromFD(f){var d=R.getStreamChecked(f);return d},varargs:void 0,getStr(f){var d=D(f);return d}};function En(f,d,S){Qe.varargs=S;try{var A=Qe.getStreamFromFD(f);switch(d){case 0:{var L=kt();if(L<0)return-28;for(;R.streams[L];)L++;var G;return G=R.dupStream(A,L),G.fd}case 1:case 2:return 0;case 3:return A.flags;case 4:{var L=kt();return A.flags|=L,0}case 12:{var L=Gt(),j=0;return F[L+j>>1]=2,0}case 13:case 14:return 0}return-28}catch(J){if(typeof R>"u"||J.name!=="ErrnoError")throw J;return-J.errno}}function _n(f,d,S){Qe.varargs=S;try{var A=Qe.getStreamFromFD(f);switch(d){case 21509:return A.tty?0:-59;case 21505:{if(!A.tty)return-59;if(A.tty.ops.ioctl_tcgets){var L=A.tty.ops.ioctl_tcgets(A),G=Gt();q[G>>2]=L.c_iflag||0,q[G+4>>2]=L.c_oflag||0,q[G+8>>2]=L.c_cflag||0,q[G+12>>2]=L.c_lflag||0;for(var j=0;j<32;j++)k[G+j+17]=L.c_cc[j]||0;return 0}return 0}case 21510:case 21511:case 21512:return A.tty?0:-59;case 21506:case 21507:case 21508:{if(!A.tty)return-59;if(A.tty.ops.ioctl_tcsets){for(var G=Gt(),J=q[G>>2],yt=q[G+4>>2],Ht=q[G+8>>2],Kt=q[G+12>>2],Qt=[],j=0;j<32;j++)Qt.push(k[G+j+17]);return A.tty.ops.ioctl_tcsets(A.tty,d,{c_iflag:J,c_oflag:yt,c_cflag:Ht,c_lflag:Kt,c_cc:Qt})}return 0}case 21519:{if(!A.tty)return-59;var G=Gt();return q[G>>2]=0,0}case 21520:return A.tty?-28:-59;case 21531:{var G=Gt();return R.ioctl(A,d,G)}case 21523:{if(!A.tty)return-59;if(A.tty.ops.ioctl_tiocgwinsz){var Te=A.tty.ops.ioctl_tiocgwinsz(A.tty),G=Gt();F[G>>1]=Te[0],F[G+2>>1]=Te[1]}return 0}case 21524:return A.tty?0:-59;case 21515:return A.tty?0:-59;default:return-28}}catch($t){if(typeof R>"u"||$t.name!=="ErrnoError")throw $t;return-$t.errno}}function Dn(f,d,S,A){Qe.varargs=A;try{d=Qe.getStr(d),d=Qe.calculateAt(f,d);var L=A?kt():0;return R.open(d,S,L).fd}catch(G){if(typeof R>"u"||G.name!=="ErrnoError")throw G;return-G.errno}}var Jn=()=>Ut(""),va=f=>{if(f===null)return"null";var d=typeof f;return d==="object"||d==="array"||d==="function"?f.toString():""+f},gs=()=>{for(var f=new Array(256),d=0;d<256;++d)f[d]=String.fromCharCode(d);Dr=f},Dr,Mn=f=>{for(var d="",S=f;K[S];)d+=Dr[K[S++]];return d},ri={},$n={},ui={},Vi=i.BindingError=class extends Error{constructor(d){super(d),this.name="BindingError"}},bn=f=>{throw new Vi(f)};function aa(f,d,S={}){var A=d.name;if(f||bn(`type "${A}" must have a positive integer typeid pointer`),$n.hasOwnProperty(f)){if(S.ignoreDuplicateRegistrations)return;bn(`Cannot register type '${A}' twice`)}if($n[f]=d,delete ui[f],ri.hasOwnProperty(f)){var L=ri[f];delete ri[f],L.forEach(G=>G())}}function ke(f,d,S={}){return aa(f,d,S)}var Ur=(f,d,S)=>{switch(d){case 1:return S?A=>k[A]:A=>K[A];case 2:return S?A=>F[A>>1]:A=>O[A>>1];case 4:return S?A=>q[A>>2]:A=>rt[A>>2];case 8:return S?A=>_t[A>>3]:A=>Mt[A>>3];default:throw new TypeError(`invalid integer width (${d}): ${f}`)}},_s=(f,d,S,A,L)=>{d=Mn(d);var G=d.indexOf("u")!=-1;ke(f,{name:d,fromWireType:j=>j,toWireType:function(j,J){if(typeof J!="bigint"&&typeof J!="number")throw new TypeError(`Cannot convert "${va(J)}" to ${this.name}`);return typeof J=="number"&&(J=BigInt(J)),J},argPackAdvance:Bn,readValueFromPointer:Ur(d,S,!G),destructorFunction:null})},Bn=8,N=(f,d,S,A)=>{d=Mn(d),ke(f,{name:d,fromWireType:function(L){return!!L},toWireType:function(L,G){return G?S:A},argPackAdvance:Bn,readValueFromPointer:function(L){return this.fromWireType(K[L])},destructorFunction:null})},et=[],ht=[],gt=f=>{f>9&&--ht[f+1]===0&&(ht[f]=void 0,et.push(f))},it=()=>ht.length/2-5-et.length,Ot=()=>{ht.push(0,1,void 0,1,null,1,!0,1,!1,1),i.count_emval_handles=it},Bt={toValue:f=>(f||bn(`Cannot use deleted val. handle = ${f}`),ht[f]),toHandle:f=>{switch(f){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:{const d=et.pop()||ht.length;return ht[d]=f,ht[d+1]=1,d}}}};function Vt(f){return this.fromWireType(rt[f>>2])}var Zt={name:"emscripten::val",fromWireType:f=>{var d=Bt.toValue(f);return gt(f),d},toWireType:(f,d)=>Bt.toHandle(d),argPackAdvance:Bn,readValueFromPointer:Vt,destructorFunction:null},he=f=>ke(f,Zt),oe=(f,d)=>{switch(d){case 4:return function(S){return this.fromWireType(dt[S>>2])};case 8:return function(S){return this.fromWireType(X[S>>3])};default:throw new TypeError(`invalid float width (${d}): ${f}`)}},ie=(f,d,S)=>{d=Mn(d),ke(f,{name:d,fromWireType:A=>A,toWireType:(A,L)=>L,argPackAdvance:Bn,readValueFromPointer:oe(d,S),destructorFunction:null})},be=(f,d)=>Object.defineProperty(d,"name",{value:f}),Fe=f=>{for(;f.length;){var d=f.pop(),S=f.pop();S(d)}};function sn(f){for(var d=1;d<f.length;++d)if(f[d]!==null&&f[d].destructorFunction===void 0)return!0;return!1}function De(f,d,S,A){for(var L=sn(f),G=f.length-2,j=[],J=["fn"],yt=0;yt<G;++yt)j.push(`arg${yt}`),J.push(`arg${yt}Wired`);j=j.join(","),J=J.join(",");var Ht=`return function (${j}) {
`;L&&(Ht+=`var destructors = [];
`);for(var Kt=L?"destructors":"null",Qt=["humanName","throwBindingError","invoker","fn","runDestructors","retType","classParam"],yt=0;yt<G;++yt)Ht+=`var arg${yt}Wired = argType${yt}['toWireType'](${Kt}, arg${yt});
`,Qt.push(`argType${yt}`);if(Ht+=(S||A?"var rv = ":"")+`invoker(${J});
`,L)Ht+=`runDestructors(destructors);
`;else for(var yt=2;yt<f.length;++yt){var Te=yt===1?"thisWired":"arg"+(yt-2)+"Wired";f[yt].destructorFunction!==null&&(Ht+=`${Te}_dtor(${Te});
`,Qt.push(`${Te}_dtor`))}return S&&(Ht+=`var ret = retType['fromWireType'](rv);
return ret;
`),Ht+=`}
`,[Qt,Ht]}function Ue(f,d,S,A,L,G){var j=d.length;j<2&&bn("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var J=d[1]!==null&&S!==null,yt=sn(d),Ht=d[0].name!=="void",Kt=[f,bn,A,L,Fe,d[0],d[1]],Qt=0;Qt<j-2;++Qt)Kt.push(d[Qt+2]);if(!yt)for(var Qt=2;Qt<d.length;++Qt)d[Qt].destructorFunction!==null&&Kt.push(d[Qt].destructorFunction);let[Te,$t]=De(d,J,Ht,G);var ye=new Function(...Te,$t)(...Kt);return be(f,ye)}var le=(f,d,S)=>{if(f[d].overloadTable===void 0){var A=f[d];f[d]=function(...L){return f[d].overloadTable.hasOwnProperty(L.length)||bn(`Function '${S}' called with an invalid number of arguments (${L.length}) - expects one of (${f[d].overloadTable})!`),f[d].overloadTable[L.length].apply(this,L)},f[d].overloadTable=[],f[d].overloadTable[A.argCount]=A}},cn=(f,d,S)=>{i.hasOwnProperty(f)?((S===void 0||i[f].overloadTable!==void 0&&i[f].overloadTable[S]!==void 0)&&bn(`Cannot register public name '${f}' twice`),le(i,f,f),i[f].overloadTable.hasOwnProperty(S)&&bn(`Cannot register multiple overloads of a function with the same number of arguments (${S})!`),i[f].overloadTable[S]=d):(i[f]=d,i[f].argCount=S)},Be=(f,d)=>{for(var S=[],A=0;A<f;A++)S.push(rt[d+A*4>>2]);return S},In=i.InternalError=class extends Error{constructor(d){super(d),this.name="InternalError"}},ki=f=>{throw new In(f)},Je=(f,d,S)=>{i.hasOwnProperty(f)||ki("Replacing nonexistent public symbol"),i[f].overloadTable!==void 0&&S!==void 0?i[f].overloadTable[S]=d:(i[f]=d,i[f].argCount=S)},Di=[],qe,zn=f=>{var d=Di[f];return d||(Di[f]=d=qe.get(f)),d},vn=(f,d,S=!1)=>{f=Mn(f);function A(){var G=zn(d);return G}var L=A();return typeof L!="function"&&bn(`unknown function pointer with signature ${f}: ${d}`),L};class Tn extends Error{}var An=f=>{var d=tf(f),S=Mn(d);return Sa(d),S},Ui=(f,d)=>{var S=[],A={};function L(G){if(!A[G]&&!$n[G]){if(ui[G]){ui[G].forEach(L);return}S.push(G),A[G]=!0}}throw d.forEach(L),new Tn(`${f}: `+S.map(An).join([", "]))},Xi=(f,d,S)=>{f.forEach(J=>ui[J]=d);function A(J){var yt=S(J);yt.length!==f.length&&ki("Mismatched type converter count");for(var Ht=0;Ht<f.length;++Ht)ke(f[Ht],yt[Ht])}var L=new Array(d.length),G=[],j=0;d.forEach((J,yt)=>{$n.hasOwnProperty(J)?L[yt]=$n[J]:(G.push(J),ri.hasOwnProperty(J)||(ri[J]=[]),ri[J].push(()=>{L[yt]=$n[J],++j,j===G.length&&A(L)}))}),G.length===0&&A(L)},Bl=f=>{f=f.trim();const d=f.indexOf("(");return d===-1?f:f.slice(0,d)},Il=(f,d,S,A,L,G,j,J)=>{var yt=Be(d,S);f=Mn(f),f=Bl(f),L=vn(A,L,j),cn(f,function(){Ui(`Cannot call ${f} due to unbound types`,yt)},d-1),Xi([],yt,Ht=>{var Kt=[Ht[0],null].concat(Ht.slice(1));return Je(f,Ue(f,Kt,null,L,G,j),d-1),[]})},To=(f,d,S,A,L)=>{d=Mn(d);var G=Kt=>Kt;if(A===0){var j=32-8*S;G=Kt=>Kt<<j>>>j}var J=d.includes("unsigned"),yt=(Kt,Qt)=>{},Ht;J?Ht=function(Kt,Qt){return yt(Qt,this.name),Qt>>>0}:Ht=function(Kt,Qt){return yt(Qt,this.name),Qt},ke(f,{name:d,fromWireType:G,toWireType:Ht,argPackAdvance:Bn,readValueFromPointer:Ur(d,S,A!==0),destructorFunction:null})},zu=(f,d,S)=>{var A=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array],L=A[d];function G(j){var J=rt[j>>2],yt=rt[j+4>>2];return new L(k.buffer,yt,J)}S=Mn(S),ke(f,{name:S,fromWireType:G,argPackAdvance:Bn,readValueFromPointer:G},{ignoreDuplicateRegistrations:!0})},Ya=(f,d,S)=>Wt(f,K,d,S),vs=(f,d)=>{d=Mn(d),ke(f,{name:d,fromWireType(S){for(var A=rt[S>>2],L=S+4,G,j,J=L,j=0;j<=A;++j){var yt=L+j;if(j==A||K[yt]==0){var Ht=yt-J,Kt=D(J,Ht);G===void 0?G=Kt:(G+="\0",G+=Kt),J=yt+1}}return Sa(S),G},toWireType(S,A){A instanceof ArrayBuffer&&(A=new Uint8Array(A));var L,G=typeof A=="string";G||ArrayBuffer.isView(A)&&A.BYTES_PER_ELEMENT==1||bn("Cannot pass non-string to std::string"),G?L=se(A):L=A.length;var j=ql(4+L+1),J=j+4;return rt[j>>2]=L,G?Ya(A,J,L+1):K.set(A,J),S!==null&&S.push(Sa,j),j},argPackAdvance:Bn,readValueFromPointer:Vt,destructorFunction(S){Sa(S)}})},ys=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0,Ao=(f,d)=>{for(var S=f,A=S>>1,L=A+d/2;!(A>=L)&&O[A];)++A;if(S=A<<1,S-f>32&&ys)return ys.decode(K.subarray(f,S));for(var G="",j=0;!(j>=d/2);++j){var J=F[f+j*2>>1];if(J==0)break;G+=String.fromCharCode(J)}return G},ja=(f,d,S)=>{if(S??(S=2147483647),S<2)return 0;S-=2;for(var A=d,L=S<f.length*2?S/2:f.length,G=0;G<L;++G){var j=f.charCodeAt(G);F[d>>1]=j,d+=2}return F[d>>1]=0,d-A},Za=f=>f.length*2,zl=(f,d)=>{for(var S=0,A="";!(S>=d/4);){var L=q[f+S*4>>2];if(L==0)break;if(++S,L>=65536){var G=L-65536;A+=String.fromCharCode(55296|G>>10,56320|G&1023)}else A+=String.fromCharCode(L)}return A},Ro=(f,d,S)=>{if(S??(S=2147483647),S<4)return 0;for(var A=d,L=A+S-4,G=0;G<f.length;++G){var j=f.charCodeAt(G);if(j>=55296&&j<=57343){var J=f.charCodeAt(++G);j=65536+((j&1023)<<10)|J&1023}if(q[d>>2]=j,d+=4,d+4>L)break}return q[d>>2]=0,d-A},Hl=f=>{for(var d=0,S=0;S<f.length;++S){var A=f.charCodeAt(S);A>=55296&&A<=57343&&++S,d+=4}return d},Lr=(f,d,S)=>{S=Mn(S);var A,L,G,j;d===2?(A=Ao,L=ja,j=Za,G=J=>O[J>>1]):d===4&&(A=zl,L=Ro,j=Hl,G=J=>rt[J>>2]),ke(f,{name:S,fromWireType:J=>{for(var yt=rt[J>>2],Ht,Kt=J+4,Qt=0;Qt<=yt;++Qt){var Te=J+4+Qt*d;if(Qt==yt||G(Te)==0){var $t=Te-Kt,ye=A(Kt,$t);Ht===void 0?Ht=ye:(Ht+="\0",Ht+=ye),Kt=Te+d}}return Sa(J),Ht},toWireType:(J,yt)=>{typeof yt!="string"&&bn(`Cannot pass non-string to C++ string type ${S}`);var Ht=j(yt),Kt=ql(4+Ht+d);return rt[Kt>>2]=Ht/d,L(yt,Kt+4,Ht+d),J!==null&&J.push(Sa,Kt),Kt},argPackAdvance:Bn,readValueFromPointer:Vt,destructorFunction(J){Sa(J)}})},Wi=(f,d)=>{d=Mn(d),ke(f,{isVoid:!0,name:d,argPackAdvance:0,fromWireType:()=>{},toWireType:(S,A)=>{}})},Nr=(f,d)=>{var S=$n[f];return S===void 0&&bn(`${d} has unknown type ${An(f)}`),S},Ka=(f,d,S)=>{var A=[],L=f.toWireType(A,S);return A.length&&(rt[d>>2]=Bt.toHandle(A)),L},ra=(f,d,S)=>(f=Bt.toValue(f),d=Nr(d,"emval::as"),Ka(d,S,f)),Or=[],Ss=(f,d,S,A)=>(f=Or[f],d=Bt.toValue(d),f(null,d,S,A)),Gl={},Pr=f=>{var d=Gl[f];return d===void 0?Mn(f):d},Fr=()=>typeof globalThis=="object"?globalThis:function(){return Function}()("return this")(),Vl=f=>f===0?Bt.toHandle(Fr()):(f=Pr(f),Bt.toHandle(Fr()[f])),ti=f=>{var d=Or.length;return Or.push(f),d},ya=(f,d)=>{for(var S=new Array(f),A=0;A<f;++A)S[A]=Nr(rt[d+A*4>>2],`parameter ${A}`);return S},xs=(f,d,S)=>{var A=ya(f,d),L=A.shift();f--;var G=`return function (obj, func, destructorsRef, args) {
`,j=0,J=[];S===0&&J.push("obj");for(var yt=["retType"],Ht=[L],Kt=0;Kt<f;++Kt)J.push(`arg${Kt}`),yt.push(`argType${Kt}`),Ht.push(A[Kt]),G+=`  var arg${Kt} = argType${Kt}.readValueFromPointer(args${j?"+"+j:""});
`,j+=A[Kt].argPackAdvance;var Qt=S===1?"new func":"func.call";G+=`  var rv = ${Qt}(${J.join(", ")});
`,L.isVoid||(yt.push("emval_returnValue"),Ht.push(Ka),G+=`  return emval_returnValue(retType, destructorsRef, rv);
`),G+=`};
`;var Te=new Function(...yt,G)(...Ht),$t=`methodCaller<(${A.map(ye=>ye.name).join(", ")}) => ${L.name}>`;return ti(be($t,Te))},Br=(f,d)=>(f=Bt.toValue(f),d=Bt.toValue(d),Bt.toHandle(f[d])),Hu=f=>Bt.toHandle(Pr(f)),wo=()=>Bt.toHandle({}),Co=f=>{var d=Bt.toValue(f);Fe(d),gt(f)},Ir=(f,d,S)=>{f=Bt.toValue(f),d=Bt.toValue(d),S=Bt.toValue(S),f[d]=S},Es=(f,d)=>{f=Nr(f,"_emval_take_value");var S=f.readValueFromPointer(d);return Bt.toHandle(S)},kl=(f,d,S,A)=>{var L=new Date().getFullYear(),G=new Date(L,0,1),j=new Date(L,6,1),J=G.getTimezoneOffset(),yt=j.getTimezoneOffset(),Ht=Math.max(J,yt);rt[f>>2]=Ht*60,q[d>>2]=+(J!=yt);var Kt=$t=>{var ye=$t>=0?"-":"+",hn=Math.abs($t),si=String(Math.floor(hn/60)).padStart(2,"0"),Un=String(hn%60).padStart(2,"0");return`UTC${ye}${si}${Un}`},Qt=Kt(J),Te=Kt(yt);yt<J?(Ya(Qt,S,17),Ya(Te,A,17)):(Ya(Qt,A,17),Ya(Te,S,17))},Gu=()=>2147483648,Vu=(f,d)=>Math.ceil(f/d)*d,ku=f=>{var d=Y.buffer,S=(f-d.byteLength+65535)/65536|0;try{return Y.grow(S),tt(),1}catch{}},Do=f=>{var d=K.length;f>>>=0;var S=Gu();if(f>S)return!1;for(var A=1;A<=4;A*=2){var L=d*(1+.2/A);L=Math.min(L,f+100663296);var G=Math.min(S,Vu(Math.max(f,L),65536)),j=ku(G);if(j)return!0}return!1},Uo={},Xu=()=>v||"./this.program",zr=()=>{if(!zr.strings){var f=(typeof navigator=="object"&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",d={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:f,_:Xu()};for(var S in Uo)Uo[S]===void 0?delete d[S]:d[S]=Uo[S];var A=[];for(var S in d)A.push(`${S}=${d[S]}`);zr.strings=A}return zr.strings},Wu=(f,d)=>{var S=0,A=0;for(var L of zr()){var G=d+S;rt[f+A>>2]=G,S+=Ya(L,G,1/0)+1,A+=4}return 0},qu=(f,d)=>{var S=zr();rt[f>>2]=S.length;var A=0;for(var L of S)A+=se(L)+1;return rt[d>>2]=A,0};function Xl(f){try{var d=Qe.getStreamFromFD(f);return R.close(d),0}catch(S){if(typeof R>"u"||S.name!=="ErrnoError")throw S;return S.errno}}var Yu=(f,d,S,A)=>{for(var L=0,G=0;G<S;G++){var j=rt[d>>2],J=rt[d+4>>2];d+=8;var yt=R.read(f,k,j,J,A);if(yt<0)return-1;if(L+=yt,yt<J)break}return L};function ju(f,d,S,A){try{var L=Qe.getStreamFromFD(f),G=Yu(L,d,S);return rt[A>>2]=G,0}catch(j){if(typeof R>"u"||j.name!=="ErrnoError")throw j;return j.errno}}var Zu=9007199254740992,Ku=-9007199254740992,Lo=f=>f<Ku||f>Zu?NaN:Number(f);function Qu(f,d,S,A){d=Lo(d);try{if(isNaN(d))return 61;var L=Qe.getStreamFromFD(f);return R.llseek(L,d,S),_t[A>>3]=BigInt(L.position),L.getdents&&d===0&&S===0&&(L.getdents=null),0}catch(G){if(typeof R>"u"||G.name!=="ErrnoError")throw G;return G.errno}}var Ju=(f,d,S,A)=>{for(var L=0,G=0;G<S;G++){var j=rt[d>>2],J=rt[d+4>>2];d+=8;var yt=R.write(f,k,j,J,A);if(yt<0)return-1;if(L+=yt,yt<J)break}return L};function $u(f,d,S,A){try{var L=Qe.getStreamFromFD(f),G=Ju(L,d,S);return rt[A>>2]=G,0}catch(j){if(typeof R>"u"||j.name!=="ErrnoError")throw j;return j.errno}}R.createPreloadedFile=_e,R.staticInit(),Et.doesNotExistError=new R.ErrnoError(44),Et.doesNotExistError.stack="<generic error, no stack>",gs(),Ot(),i.noExitRuntime&&i.noExitRuntime,i.preloadPlugins&&(Yt=i.preloadPlugins),i.print&&(V=i.print),i.printErr&&(H=i.printErr),i.wasmBinary&&(P=i.wasmBinary),i.arguments&&i.arguments,i.thisProgram&&(v=i.thisProgram),i.FS=R;var Wl={I:ft,j:St,m:En,B:_n,C:Dn,y:Jn,o:_s,G:N,E:he,n:ie,p:Il,e:To,b:zu,F:vs,i:Lr,H:Wi,d:ra,s:Ss,a:gt,u:Vl,t:xs,g:Br,f:Hu,r:wo,c:Co,h:Ir,q:Es,v:kl,D:Do,w:Wu,x:qu,k:Xl,z:ju,A:Qu,l:$u},qi=await Z();qi.K;var tf=qi.M,ql=qi.N,Sa=qi.O;function No(){if(At>0){Dt=No;return}if(Lt(),At>0){Dt=No;return}function f(){var d;i.calledRun=!0,!z&&(I(),r(i),(d=i.onRuntimeInitialized)==null||d.call(i),ct())}i.setStatus?(i.setStatus("Running..."),setTimeout(()=>{setTimeout(()=>i.setStatus(""),1),f()},1)):f()}function ef(){if(i.preInit)for(typeof i.preInit=="function"&&(i.preInit=[i.preInit]);i.preInit.length>0;)i.preInit.shift()()}return ef(),No(),t=c,t};const wA=""+new URL("bunny-BpsE-x2G.obj",import.meta.url).href,_0=500,v0=500;function CA(){const s=Q0(w=>w.position),t=Ou(w=>w.modelCenter),i=Ou(w=>w.boundingSphereRadius),[r,l]=Wn.useState(),c=Wn.useRef(null),[p,m]=Wn.useState(!1),_=Wn.useRef(null),[g,v]=Wn.useState(!0);Wn.useEffect(()=>{const w=setTimeout(()=>(v(!1),()=>{clearTimeout(w)}),3e3)},[]);const y=()=>{const w=document.createElement("input");w.type="file",w.accept=".obj",w.addEventListener("change",C=>{const M=C.target;if(!M.files||M.files.length==0){l(void 0);return}const x=M.files[0];l(x),document.body.removeChild(w)}),w.style.display="none",document.body.appendChild(w),w.click()},E=async()=>{const C=await(await fetch(wA)).blob(),M=new File([C],"bunny.obj",{type:C.type});l(M)};Wn.useEffect(()=>{(async()=>{const C=await RA();c.current=C,m(!0)})()},[]);const b=()=>{if(!r||!c.current||!_.current||!s||!t)return;const w=c.current.FS,C=new FileReader;C.onload=()=>{if(!r||!c.current||!_.current||!C.result||!(C.result instanceof ArrayBuffer))return;const M=new Uint8Array(C.result);w.writeFile(`/${r.name}`,M,{canOwn:!0});const{width:x,height:V,data:H}=c.current.rayTracing(r.name,_0,v0,s,t,i),P=new Uint8ClampedArray(H);_.current.width=x,_.current.height=V,_.current.style.width=x,_.current.style.height=V;const Y=_.current.getContext("2d"),z=new ImageData(P,x,V);Y==null||Y.putImageData(z,0,0)},C.readAsArrayBuffer(r)};return Xn.jsxs(Xn.Fragment,{children:[Xn.jsxs("div",{children:["Upload .obj file: ",Xn.jsx("button",{onClick:y,children:"Upload"})]}),Xn.jsx("br",{}),Xn.jsxs("div",{children:["Try with a default model: ",Xn.jsx("button",{onClick:E,children:"Try"})]}),r&&Xn.jsxs(Xn.Fragment,{children:[Xn.jsxs("div",{style:{position:"relative"},children:[Xn.jsx(MA,{file:r,width:_0,height:v0}),Xn.jsx("div",{className:g?"visible":"invisible",children:"Drag to rotate"})]}),Xn.jsx("div",{children:Xn.jsx("button",{onClick:b,disabled:!p,children:"Generate Ray Tracing Image"})}),Xn.jsx("br",{}),Xn.jsx("canvas",{ref:_})]})]})}NS.createRoot(document.getElementById("root")).render(Xn.jsx(CA,{}));

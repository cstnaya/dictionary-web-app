import{_ as M,r as P,o as _,c as x,a as E,t as C,w as Ve,b as j,d as Ke,F as L,e as U,p as Ge,f as Xe,g as me}from"./index-c02a4419.js";function Ae(e,t){return function(){return e.apply(t,arguments)}}const{toString:Te}=Object.prototype,{getPrototypeOf:ie}=Object,ae=(e=>t=>{const n=Te.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),A=e=>(e=e.toLowerCase(),t=>ae(t)===e),K=e=>t=>typeof t===e,{isArray:B}=Array,I=K("undefined");function Qe(e){return e!==null&&!I(e)&&e.constructor!==null&&!I(e.constructor)&&N(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Ne=A("ArrayBuffer");function Ye(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Ne(e.buffer),t}const Ze=K("string"),N=K("function"),Pe=K("number"),ce=e=>e!==null&&typeof e=="object",et=e=>e===!0||e===!1,v=e=>{if(ae(e)!=="object")return!1;const t=ie(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},tt=A("Date"),nt=A("File"),rt=A("Blob"),st=A("FileList"),ot=e=>ce(e)&&N(e.pipe),it=e=>{const t="[object FormData]";return e&&(typeof FormData=="function"&&e instanceof FormData||Te.call(e)===t||N(e.toString)&&e.toString()===t)},at=A("URLSearchParams"),ct=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function $(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),B(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{const i=n?Object.getOwnPropertyNames(e):Object.keys(e),o=i.length;let c;for(r=0;r<o;r++)c=i[r],t.call(null,e[c],c,e)}}function Ce(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const ke=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),Fe=e=>!I(e)&&e!==ke;function ne(){const{caseless:e}=Fe(this)&&this||{},t={},n=(r,s)=>{const i=e&&Ce(t,s)||s;v(t[i])&&v(r)?t[i]=ne(t[i],r):v(r)?t[i]=ne({},r):B(r)?t[i]=r.slice():t[i]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&$(arguments[r],n);return t}const ut=(e,t,n,{allOwnKeys:r}={})=>($(t,(s,i)=>{n&&N(s)?e[i]=Ae(s,n):e[i]=s},{allOwnKeys:r}),e),lt=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),ft=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},dt=(e,t,n,r)=>{let s,i,o;const c={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),i=s.length;i-- >0;)o=s[i],(!r||r(o,e,t))&&!c[o]&&(t[o]=e[o],c[o]=!0);e=n!==!1&&ie(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},ht=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},pt=e=>{if(!e)return null;if(B(e))return e;let t=e.length;if(!Pe(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},mt=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&ie(Uint8Array)),yt=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=r.next())&&!s.done;){const i=s.value;t.call(e,i[0],i[1])}},wt=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},bt=A("HTMLFormElement"),Et=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),ye=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),_t=A("RegExp"),Be=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};$(n,(s,i)=>{t(s,i,e)!==!1&&(r[i]=s)}),Object.defineProperties(e,r)},xt=e=>{Be(e,(t,n)=>{if(N(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(N(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},St=(e,t)=>{const n={},r=s=>{s.forEach(i=>{n[i]=!0})};return B(e)?r(e):r(String(e).split(t)),n},Rt=()=>{},Ot=(e,t)=>(e=+e,Number.isFinite(e)?e:t),Y="abcdefghijklmnopqrstuvwxyz",we="0123456789",De={DIGIT:we,ALPHA:Y,ALPHA_DIGIT:Y+Y.toUpperCase()+we},gt=(e=16,t=De.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function At(e){return!!(e&&N(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const Tt=e=>{const t=new Array(10),n=(r,s)=>{if(ce(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[s]=r;const i=B(r)?[]:{};return $(r,(o,c)=>{const d=n(o,s+1);!I(d)&&(i[c]=d)}),t[s]=void 0,i}}return r};return n(e,0)},a={isArray:B,isArrayBuffer:Ne,isBuffer:Qe,isFormData:it,isArrayBufferView:Ye,isString:Ze,isNumber:Pe,isBoolean:et,isObject:ce,isPlainObject:v,isUndefined:I,isDate:tt,isFile:nt,isBlob:rt,isRegExp:_t,isFunction:N,isStream:ot,isURLSearchParams:at,isTypedArray:mt,isFileList:st,forEach:$,merge:ne,extend:ut,trim:ct,stripBOM:lt,inherits:ft,toFlatObject:dt,kindOf:ae,kindOfTest:A,endsWith:ht,toArray:pt,forEachEntry:yt,matchAll:wt,isHTMLForm:bt,hasOwnProperty:ye,hasOwnProp:ye,reduceDescriptors:Be,freezeMethods:xt,toObjectSet:St,toCamelCase:Et,noop:Rt,toFiniteNumber:Ot,findKey:Ce,global:ke,isContextDefined:Fe,ALPHABET:De,generateString:gt,isSpecCompliantForm:At,toJSONObject:Tt};function m(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}a.inherits(m,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Le=m.prototype,Ue={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Ue[e]={value:e}});Object.defineProperties(m,Ue);Object.defineProperty(Le,"isAxiosError",{value:!0});m.from=(e,t,n,r,s,i)=>{const o=Object.create(Le);return a.toFlatObject(e,o,function(d){return d!==Error.prototype},c=>c!=="isAxiosError"),m.call(o,e.message,t,n,r,s),o.cause=e,o.name=e.name,i&&Object.assign(o,i),o};const Nt=null;function re(e){return a.isPlainObject(e)||a.isArray(e)}function je(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function be(e,t,n){return e?e.concat(t).map(function(s,i){return s=je(s),!n&&i?"["+s+"]":s}).join(n?".":""):t}function Pt(e){return a.isArray(e)&&!e.some(re)}const Ct=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function G(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(p,O){return!a.isUndefined(O[p])});const r=n.metaTokens,s=n.visitor||l,i=n.dots,o=n.indexes,d=(n.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(s))throw new TypeError("visitor must be a function");function u(f){if(f===null)return"";if(a.isDate(f))return f.toISOString();if(!d&&a.isBlob(f))throw new m("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(f)||a.isTypedArray(f)?d&&typeof Blob=="function"?new Blob([f]):Buffer.from(f):f}function l(f,p,O){let S=f;if(f&&!O&&typeof f=="object"){if(a.endsWith(p,"{}"))p=r?p:p.slice(0,-2),f=JSON.stringify(f);else if(a.isArray(f)&&Pt(f)||(a.isFileList(f)||a.endsWith(p,"[]"))&&(S=a.toArray(f)))return p=je(p),S.forEach(function(H,We){!(a.isUndefined(H)||H===null)&&t.append(o===!0?be([p],We,i):o===null?p:p+"[]",u(H))}),!1}return re(f)?!0:(t.append(be(O,p,i),u(f)),!1)}const h=[],b=Object.assign(Ct,{defaultVisitor:l,convertValue:u,isVisitable:re});function y(f,p){if(!a.isUndefined(f)){if(h.indexOf(f)!==-1)throw Error("Circular reference detected in "+p.join("."));h.push(f),a.forEach(f,function(S,k){(!(a.isUndefined(S)||S===null)&&s.call(t,S,a.isString(k)?k.trim():k,p,b))===!0&&y(S,p?p.concat(k):[k])}),h.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return y(e),t}function Ee(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function ue(e,t){this._pairs=[],e&&G(e,this,t)}const Ie=ue.prototype;Ie.append=function(t,n){this._pairs.push([t,n])};Ie.toString=function(t){const n=t?function(r){return t.call(this,r,Ee)}:Ee;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function kt(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Me(e,t,n){if(!t)return e;const r=n&&n.encode||kt,s=n&&n.serialize;let i;if(s?i=s(t,n):i=a.isURLSearchParams(t)?t.toString():new ue(t,n).toString(r),i){const o=e.indexOf("#");o!==-1&&(e=e.slice(0,o)),e+=(e.indexOf("?")===-1?"?":"&")+i}return e}class Ft{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}const _e=Ft,$e={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Bt=typeof URLSearchParams<"u"?URLSearchParams:ue,Dt=typeof FormData<"u"?FormData:null,Lt=typeof Blob<"u"?Blob:null,Ut=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),jt=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),R={isBrowser:!0,classes:{URLSearchParams:Bt,FormData:Dt,Blob:Lt},isStandardBrowserEnv:Ut,isStandardBrowserWebWorkerEnv:jt,protocols:["http","https","file","blob","url","data"]};function It(e,t){return G(e,new R.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,i){return R.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},t))}function Mt(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function $t(e){const t={},n=Object.keys(e);let r;const s=n.length;let i;for(r=0;r<s;r++)i=n[r],t[i]=e[i];return t}function qe(e){function t(n,r,s,i){let o=n[i++];const c=Number.isFinite(+o),d=i>=n.length;return o=!o&&a.isArray(s)?s.length:o,d?(a.hasOwnProp(s,o)?s[o]=[s[o],r]:s[o]=r,!c):((!s[o]||!a.isObject(s[o]))&&(s[o]=[]),t(n,r,s[o],i)&&a.isArray(s[o])&&(s[o]=$t(s[o])),!c)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,s)=>{t(Mt(r),s,n,0)}),n}return null}const qt={"Content-Type":void 0};function Ht(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const X={transitional:$e,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,i=a.isObject(t);if(i&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return s&&s?JSON.stringify(qe(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let c;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return It(t,this.formSerializer).toString();if((c=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const d=this.env&&this.env.FormData;return G(c?{"files[]":t}:t,d&&new d,this.formSerializer)}}return i||s?(n.setContentType("application/json",!1),Ht(t)):t}],transformResponse:[function(t){const n=this.transitional||X.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(t&&a.isString(t)&&(r&&!this.responseType||s)){const o=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(c){if(o)throw c.name==="SyntaxError"?m.from(c,m.ERR_BAD_RESPONSE,this,null,this.response):c}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:R.classes.FormData,Blob:R.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};a.forEach(["delete","get","head"],function(t){X.headers[t]={}});a.forEach(["post","put","patch"],function(t){X.headers[t]=a.merge(qt)});const le=X,vt=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),zt=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(o){s=o.indexOf(":"),n=o.substring(0,s).trim().toLowerCase(),r=o.substring(s+1).trim(),!(!n||t[n]&&vt[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},xe=Symbol("internals");function D(e){return e&&String(e).trim().toLowerCase()}function z(e){return e===!1||e==null?e:a.isArray(e)?e.map(z):String(e)}function Jt(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}function Wt(e){return/^[-_a-zA-Z]+$/.test(e.trim())}function Z(e,t,n,r,s){if(a.isFunction(r))return r.call(this,t,n);if(s&&(t=n),!!a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function Vt(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function Kt(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,i,o){return this[r].call(this,t,s,i,o)},configurable:!0})})}class Q{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function i(c,d,u){const l=D(d);if(!l)throw new Error("header name must be a non-empty string");const h=a.findKey(s,l);(!h||s[h]===void 0||u===!0||u===void 0&&s[h]!==!1)&&(s[h||d]=z(c))}const o=(c,d)=>a.forEach(c,(u,l)=>i(u,l,d));return a.isPlainObject(t)||t instanceof this.constructor?o(t,n):a.isString(t)&&(t=t.trim())&&!Wt(t)?o(zt(t),n):t!=null&&i(n,t,r),this}get(t,n){if(t=D(t),t){const r=a.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return Jt(s);if(a.isFunction(n))return n.call(this,s,r);if(a.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=D(t),t){const r=a.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||Z(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function i(o){if(o=D(o),o){const c=a.findKey(r,o);c&&(!n||Z(r,r[c],c,n))&&(delete r[c],s=!0)}}return a.isArray(t)?t.forEach(i):i(t),s}clear(t){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const i=n[r];(!t||Z(this,this[i],i,t,!0))&&(delete this[i],s=!0)}return s}normalize(t){const n=this,r={};return a.forEach(this,(s,i)=>{const o=a.findKey(r,i);if(o){n[o]=z(s),delete n[i];return}const c=t?Vt(i):String(i).trim();c!==i&&delete n[i],n[c]=z(s),r[c]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return a.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&a.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[xe]=this[xe]={accessors:{}}).accessors,s=this.prototype;function i(o){const c=D(o);r[c]||(Kt(s,o),r[c]=!0)}return a.isArray(t)?t.forEach(i):i(t),this}}Q.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.freezeMethods(Q.prototype);a.freezeMethods(Q);const g=Q;function ee(e,t){const n=this||le,r=t||n,s=g.from(r.headers);let i=r.data;return a.forEach(e,function(c){i=c.call(n,i,s.normalize(),t?t.status:void 0)}),s.normalize(),i}function He(e){return!!(e&&e.__CANCEL__)}function q(e,t,n){m.call(this,e??"canceled",m.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(q,m,{__CANCEL__:!0});function Gt(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new m("Request failed with status code "+n.status,[m.ERR_BAD_REQUEST,m.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const Xt=R.isStandardBrowserEnv?function(){return{write:function(n,r,s,i,o,c){const d=[];d.push(n+"="+encodeURIComponent(r)),a.isNumber(s)&&d.push("expires="+new Date(s).toGMTString()),a.isString(i)&&d.push("path="+i),a.isString(o)&&d.push("domain="+o),c===!0&&d.push("secure"),document.cookie=d.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function Qt(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Yt(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function ve(e,t){return e&&!Qt(t)?Yt(e,t):t}const Zt=R.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(i){let o=i;return t&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(o){const c=a.isString(o)?s(o):o;return c.protocol===r.protocol&&c.host===r.host}}():function(){return function(){return!0}}();function en(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function tn(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,i=0,o;return t=t!==void 0?t:1e3,function(d){const u=Date.now(),l=r[i];o||(o=u),n[s]=d,r[s]=u;let h=i,b=0;for(;h!==s;)b+=n[h++],h=h%e;if(s=(s+1)%e,s===i&&(i=(i+1)%e),u-o<t)return;const y=l&&u-l;return y?Math.round(b*1e3/y):void 0}}function Se(e,t){let n=0;const r=tn(50,250);return s=>{const i=s.loaded,o=s.lengthComputable?s.total:void 0,c=i-n,d=r(c),u=i<=o;n=i;const l={loaded:i,total:o,progress:o?i/o:void 0,bytes:c,rate:d||void 0,estimated:d&&o&&u?(o-i)/d:void 0,event:s};l[t?"download":"upload"]=!0,e(l)}}const nn=typeof XMLHttpRequest<"u",rn=nn&&function(e){return new Promise(function(n,r){let s=e.data;const i=g.from(e.headers).normalize(),o=e.responseType;let c;function d(){e.cancelToken&&e.cancelToken.unsubscribe(c),e.signal&&e.signal.removeEventListener("abort",c)}a.isFormData(s)&&(R.isStandardBrowserEnv||R.isStandardBrowserWebWorkerEnv)&&i.setContentType(!1);let u=new XMLHttpRequest;if(e.auth){const y=e.auth.username||"",f=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";i.set("Authorization","Basic "+btoa(y+":"+f))}const l=ve(e.baseURL,e.url);u.open(e.method.toUpperCase(),Me(l,e.params,e.paramsSerializer),!0),u.timeout=e.timeout;function h(){if(!u)return;const y=g.from("getAllResponseHeaders"in u&&u.getAllResponseHeaders()),p={data:!o||o==="text"||o==="json"?u.responseText:u.response,status:u.status,statusText:u.statusText,headers:y,config:e,request:u};Gt(function(S){n(S),d()},function(S){r(S),d()},p),u=null}if("onloadend"in u?u.onloadend=h:u.onreadystatechange=function(){!u||u.readyState!==4||u.status===0&&!(u.responseURL&&u.responseURL.indexOf("file:")===0)||setTimeout(h)},u.onabort=function(){u&&(r(new m("Request aborted",m.ECONNABORTED,e,u)),u=null)},u.onerror=function(){r(new m("Network Error",m.ERR_NETWORK,e,u)),u=null},u.ontimeout=function(){let f=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const p=e.transitional||$e;e.timeoutErrorMessage&&(f=e.timeoutErrorMessage),r(new m(f,p.clarifyTimeoutError?m.ETIMEDOUT:m.ECONNABORTED,e,u)),u=null},R.isStandardBrowserEnv){const y=(e.withCredentials||Zt(l))&&e.xsrfCookieName&&Xt.read(e.xsrfCookieName);y&&i.set(e.xsrfHeaderName,y)}s===void 0&&i.setContentType(null),"setRequestHeader"in u&&a.forEach(i.toJSON(),function(f,p){u.setRequestHeader(p,f)}),a.isUndefined(e.withCredentials)||(u.withCredentials=!!e.withCredentials),o&&o!=="json"&&(u.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&u.addEventListener("progress",Se(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&u.upload&&u.upload.addEventListener("progress",Se(e.onUploadProgress)),(e.cancelToken||e.signal)&&(c=y=>{u&&(r(!y||y.type?new q(null,e,u):y),u.abort(),u=null)},e.cancelToken&&e.cancelToken.subscribe(c),e.signal&&(e.signal.aborted?c():e.signal.addEventListener("abort",c)));const b=en(l);if(b&&R.protocols.indexOf(b)===-1){r(new m("Unsupported protocol "+b+":",m.ERR_BAD_REQUEST,e));return}u.send(s||null)})},J={http:Nt,xhr:rn};a.forEach(J,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const sn={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let s=0;s<t&&(n=e[s],!(r=a.isString(n)?J[n.toLowerCase()]:n));s++);if(!r)throw r===!1?new m(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(a.hasOwnProp(J,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!a.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:J};function te(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new q(null,e)}function Re(e){return te(e),e.headers=g.from(e.headers),e.data=ee.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),sn.getAdapter(e.adapter||le.adapter)(e).then(function(r){return te(e),r.data=ee.call(e,e.transformResponse,r),r.headers=g.from(r.headers),r},function(r){return He(r)||(te(e),r&&r.response&&(r.response.data=ee.call(e,e.transformResponse,r.response),r.response.headers=g.from(r.response.headers))),Promise.reject(r)})}const Oe=e=>e instanceof g?e.toJSON():e;function F(e,t){t=t||{};const n={};function r(u,l,h){return a.isPlainObject(u)&&a.isPlainObject(l)?a.merge.call({caseless:h},u,l):a.isPlainObject(l)?a.merge({},l):a.isArray(l)?l.slice():l}function s(u,l,h){if(a.isUndefined(l)){if(!a.isUndefined(u))return r(void 0,u,h)}else return r(u,l,h)}function i(u,l){if(!a.isUndefined(l))return r(void 0,l)}function o(u,l){if(a.isUndefined(l)){if(!a.isUndefined(u))return r(void 0,u)}else return r(void 0,l)}function c(u,l,h){if(h in t)return r(u,l);if(h in e)return r(void 0,u)}const d={url:i,method:i,data:i,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:c,headers:(u,l)=>s(Oe(u),Oe(l),!0)};return a.forEach(Object.keys(e).concat(Object.keys(t)),function(l){const h=d[l]||s,b=h(e[l],t[l],l);a.isUndefined(b)&&h!==c||(n[l]=b)}),n}const ze="1.3.4",fe={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{fe[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const ge={};fe.transitional=function(t,n,r){function s(i,o){return"[Axios v"+ze+"] Transitional option '"+i+"'"+o+(r?". "+r:"")}return(i,o,c)=>{if(t===!1)throw new m(s(o," has been removed"+(n?" in "+n:"")),m.ERR_DEPRECATED);return n&&!ge[o]&&(ge[o]=!0,console.warn(s(o," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(i,o,c):!0}};function on(e,t,n){if(typeof e!="object")throw new m("options must be an object",m.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const i=r[s],o=t[i];if(o){const c=e[i],d=c===void 0||o(c,i,e);if(d!==!0)throw new m("option "+i+" must be "+d,m.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new m("Unknown option "+i,m.ERR_BAD_OPTION)}}const se={assertOptions:on,validators:fe},T=se.validators;class V{constructor(t){this.defaults=t,this.interceptors={request:new _e,response:new _e}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=F(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:i}=n;r!==void 0&&se.assertOptions(r,{silentJSONParsing:T.transitional(T.boolean),forcedJSONParsing:T.transitional(T.boolean),clarifyTimeoutError:T.transitional(T.boolean)},!1),s!==void 0&&se.assertOptions(s,{encode:T.function,serialize:T.function},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o;o=i&&a.merge(i.common,i[n.method]),o&&a.forEach(["delete","get","head","post","put","patch","common"],f=>{delete i[f]}),n.headers=g.concat(o,i);const c=[];let d=!0;this.interceptors.request.forEach(function(p){typeof p.runWhen=="function"&&p.runWhen(n)===!1||(d=d&&p.synchronous,c.unshift(p.fulfilled,p.rejected))});const u=[];this.interceptors.response.forEach(function(p){u.push(p.fulfilled,p.rejected)});let l,h=0,b;if(!d){const f=[Re.bind(this),void 0];for(f.unshift.apply(f,c),f.push.apply(f,u),b=f.length,l=Promise.resolve(n);h<b;)l=l.then(f[h++],f[h++]);return l}b=c.length;let y=n;for(h=0;h<b;){const f=c[h++],p=c[h++];try{y=f(y)}catch(O){p.call(this,O);break}}try{l=Re.call(this,y)}catch(f){return Promise.reject(f)}for(h=0,b=u.length;h<b;)l=l.then(u[h++],u[h++]);return l}getUri(t){t=F(this.defaults,t);const n=ve(t.baseURL,t.url);return Me(n,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){V.prototype[t]=function(n,r){return this.request(F(r||{},{method:t,url:n,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(r){return function(i,o,c){return this.request(F(c||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:o}))}}V.prototype[t]=n(),V.prototype[t+"Form"]=n(!0)});const W=V;class de{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(s=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](s);r._listeners=null}),this.promise.then=s=>{let i;const o=new Promise(c=>{r.subscribe(c),i=c}).then(s);return o.cancel=function(){r.unsubscribe(i)},o},t(function(i,o,c){r.reason||(r.reason=new q(i,o,c),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new de(function(s){t=s}),cancel:t}}}const an=de;function cn(e){return function(n){return e.apply(null,n)}}function un(e){return a.isObject(e)&&e.isAxiosError===!0}const oe={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(oe).forEach(([e,t])=>{oe[t]=e});const ln=oe;function Je(e){const t=new W(e),n=Ae(W.prototype.request,t);return a.extend(n,W.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return Je(F(e,s))},n}const w=Je(le);w.Axios=W;w.CanceledError=q;w.CancelToken=an;w.isCancel=He;w.VERSION=ze;w.toFormData=G;w.AxiosError=m;w.Cancel=w.CanceledError;w.all=function(t){return Promise.all(t)};w.spread=cn;w.isAxiosError=un;w.mergeConfig=F;w.AxiosHeaders=g;w.formToJSON=e=>qe(a.isHTMLForm(e)?new FormData(e):e);w.HttpStatusCode=ln;w.default=w;const fn=w,he=fn.create({baseURL:"https://api.dictionaryapi.dev/api/v2/entries/en/"});he.interceptors.request.use();he.interceptors.response.use();const dn={props:["word","phonetic"],computed:{noSound(){return this.phonetic.audio==!1}},methods:{onPlay(e){e&&new Audio(e).play()}}},hn={class:"relative mt-6 md:mt-3"},pn={class:"text-4xl font-bold text-slate-800 dark:text-white"},mn={class:"mt-2 text-xl text-violet-500 dark:text-violet-400"};function yn(e,t,n,r,s,i){const o=P("font-awesome-icon");return _(),x("section",hn,[E("h2",pn,C(n.word),1),E("h3",mn,C(n.phonetic.text),1),i.noSound?Ke("",!0):(_(),x("button",{key:0,onClick:t[0]||(t[0]=Ve(c=>i.onPlay(n.phonetic.audio),["prevent"])),class:"btn--play absolute right-3 top-1/2 -translate-y-1/2 rounded-full text-6xl text-violet-200 dark:text-violet-600"},[j(o,{icon:"fas fa-play-circle",class:"rounded-full bg-violet-500 dark:bg-violet-100"})]))])}const wn=M(dn,[["render",yn]]);const bn={props:["mean"]},pe=e=>(Ge("data-v-6df39211"),e=e(),Xe(),e),En={class:"py-3"},_n={class:"title my-6 text-xl dark:text-white font-bold"},xn={class:"bg-white dark:bg-neutral-800 pr-2"},Sn={class:"ml-4"},Rn=pe(()=>E("h5",{class:"text-xl text-slate-500 dark:text-slate-300"},"Meaning",-1)),On={class:"p-6 pl-10 leading-8 dark:text-white"},gn={class:"mb-5 flex items-start gap-3"},An=pe(()=>E("h5",{class:"text-xl text-slate-500 dark:text-slate-300"},"synonyms",-1)),Tn={class:"flex flex-wrap gap-3 font-bold text-violet-600 dark:text-violet-400"},Nn={class:"mb-5 flex items-start gap-3"},Pn=pe(()=>E("h5",{class:"text-xl text-slate-500 dark:text-slate-300"},"antonyms",-1)),Cn={class:"flex flex-wrap gap-3 font-bold text-violet-600 dark:text-violet-400"};function kn(e,t,n,r,s,i){return _(),x("section",En,[E("h4",_n,[E("span",xn,C(n.mean.partOfSpeech),1)]),E("section",Sn,[E("div",null,[Rn,E("ul",On,[(_(!0),x(L,null,U(n.mean.definitions,o=>(_(),x("li",{class:"relative before:absolute before:-left-4 before:text-lg before:text-violet-500 before:content-['\\002022']",key:o.definition},C(o.definition),1))),128))])]),E("div",gn,[An,E("ul",Tn,[(_(!0),x(L,null,U(n.mean.synonyms,o=>(_(),x("li",{key:o},C(o),1))),128))])]),E("div",Nn,[Pn,E("ul",Cn,[(_(!0),x(L,null,U(n.mean.antonyms,o=>(_(),x("li",{key:o},C(o),1))),128))])])])])}const Fn=M(bn,[["render",kn],["__scopeId","data-v-6df39211"]]),Bn={props:["sources"]},Dn={class:"flex items-start gap-3 border-t border-slate-300 py-4"},Ln=E("h6",{class:"text-sm text-slate-500 dark:text-slate-300"},"Source",-1),Un={class:"flex flex-wrap gap-3 text-sm text-slate-600 dark:text-slate-50 underline"},jn=["href"];function In(e,t,n,r,s,i){const o=P("font-awesome-icon");return _(),x("section",Dn,[Ln,E("ul",Un,[(_(!0),x(L,null,U(n.sources,c=>(_(),x("li",{key:c},[E("a",{href:c,target:"_blank"},C(c),9,jn),j(o,{icon:"fas fa-external-link-alt",class:"ml-1 text-xs"})]))),128))])])}const Mn=M(Bn,[["render",In]]),$n={},qn={class:"pt-12 text-center text-3xl text-violet-700 dark:text-violet-400"},Hn=E("span",null,"No Result",-1);function vn(e,t){const n=P("font-awesome-icon");return _(),x("section",qn,[j(n,{icon:"fas fa-kiwi-bird",class:"mr-4"}),Hn])}const zn=M($n,[["render",vn]]),Jn={components:{WordTitle:wn,WordMeaning:Fn,WordSource:Mn,NoResult:zn},data(){return{keyword:{}}},computed:{query(){return this.$route.query.q},word(){var e;return(e=this.keyword)==null?void 0:e.word},phonetic(){return this.keyword.phonetics?this.keyword.phonetics.find(e=>e.audio!==null)??this.keyword.phonetics[0]:{}},meanings(){var e;return((e=this.keyword)==null?void 0:e.meanings)??[]},sources(){var e;return(e=this.keyword)==null?void 0:e.sourceUrls}},methods:{async httpFetch(){try{const e=await he.get(`${this.query}`);this.keyword=e.data[0]}catch{this.keyword={}}}},watch:{async query(){this.httpFetch()}}},Wn={class:"container mx-auto px-3 md:px-5"},Vn={key:0};function Kn(e,t,n,r,s,i){const o=P("WordTitle"),c=P("WordMeaning"),d=P("WordSource"),u=P("NoResult");return _(),x("div",Wn,[i.word?(_(),x("div",Vn,[j(o,{word:i.word,phonetic:i.phonetic},null,8,["word","phonetic"]),(_(!0),x(L,null,U(i.meanings,(l,h)=>(_(),me(c,{key:h,mean:l},null,8,["mean"]))),128)),j(d,{sources:i.sources},null,8,["sources"])])):(_(),me(u,{key:1}))])}const Xn=M(Jn,[["render",Kn]]);export{Xn as default};
!function(t){var n={};function r(e){if(n[e])return n[e].exports;var u=n[e]={i:e,l:!1,exports:{}};return t[e].call(u.exports,u,u.exports,r),u.l=!0,u.exports}r.m=t,r.c=n,r.d=function(t,n,e){r.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,n){if(1&n&&(t=r(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var u in t)r.d(e,u,function(n){return t[n]}.bind(null,u));return e},r.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(n,"a",n),n},r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.p="",r(r.s=10)}([function(t,n,r){var e=r(4),u=r(5),o=r(6);t.exports=function(t){return e(t)||u(t)||o()}},function(t,n){t.exports=function(t,n,r){return n in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t}},function(t,n,r){var e=r(7),u=r(8),o=r(9);t.exports=function(t,n){return e(t)||u(t,n)||o()}},,function(t,n){t.exports=function(t){if(Array.isArray(t)){for(var n=0,r=new Array(t.length);n<t.length;n++)r[n]=t[n];return r}}},function(t,n){t.exports=function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}},function(t,n){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},function(t,n){t.exports=function(t){if(Array.isArray(t))return t}},function(t,n){t.exports=function(t,n){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)){var r=[],e=!0,u=!1,o=void 0;try{for(var c,i=t[Symbol.iterator]();!(e=(c=i.next()).done)&&(r.push(c.value),!n||r.length!==n);e=!0);}catch(t){u=!0,o=t}finally{try{e||null==i.return||i.return()}finally{if(u)throw o}}return r}}},function(t,n){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}},function(t,n,r){"use strict";r.r(n);var e=r(1),u=r.n(e),o=r(0),c=r.n(o);function i(t){return null!=t&&"object"==typeof t&&!0===t["@@functional/placeholder"]}function a(t){return function n(r){return 0===arguments.length||i(r)?n:t.apply(this,arguments)}}function f(t){return function n(r,e){switch(arguments.length){case 0:return n;case 1:return i(r)?n:a((function(n){return t(r,n)}));default:return i(r)&&i(e)?n:i(r)?a((function(n){return t(n,e)})):i(e)?a((function(n){return t(r,n)})):t(r,e)}}}var l,p,s,y=f((function(t,n){return null!=n&&n.constructor===t||n instanceof t}));!function(t){t[t["+"]=0]="+",t[t["-"]=1]="-",t[t["*"]=2]="*",t[t["/"]=3]="/"}(l||(l={})),function(t){t[t.add=1]="add",t[t.delete=2]="delete",t[t.clear=3]="clear",t[t.sort=4]="sort",t[t.filter=5]="filter"}(p||(p={})),function(t){t[t.data_ui=1]="data_ui",t[t.data=2]="data",t[t.ui=3]="ui",t[t.rule=4]="rule",t[t.effect=5]="effect"}(s||(s={}));var d=r(2),v=r.n(d),h=Array.isArray||function(t){return null!=t&&t.length>=0&&"[object Array]"===Object.prototype.toString.call(t)};function g(t,n){return function(){var r=arguments.length;if(0===r)return n();var e=arguments[r-1];return h(e)||"function"!=typeof e[t]?n.apply(this,arguments):e[t].apply(e,Array.prototype.slice.call(arguments,0,r-1))}}function b(t){return function n(r,e,u){switch(arguments.length){case 0:return n;case 1:return i(r)?n:f((function(n,e){return t(r,n,e)}));case 2:return i(r)&&i(e)?n:i(r)?f((function(n,r){return t(n,e,r)})):i(e)?f((function(n,e){return t(r,n,e)})):a((function(n){return t(r,e,n)}));default:return i(r)&&i(e)&&i(u)?n:i(r)&&i(e)?f((function(n,r){return t(n,r,u)})):i(r)&&i(u)?f((function(n,r){return t(n,e,r)})):i(e)&&i(u)?f((function(n,e){return t(r,n,e)})):i(r)?a((function(n){return t(n,e,u)})):i(e)?a((function(n){return t(r,n,u)})):i(u)?a((function(n){return t(r,e,n)})):t(r,e,u)}}}var O=b(g("slice",(function(t,n,r){return Array.prototype.slice.call(r,t,n)}))),m=O(0,-1);function j(t){return"[object String]"===Object.prototype.toString.call(t)}var w=f((function(t,n){var r=t<0?n.length+t:t;return j(n)?n.charAt(r):n[r]}))(-1),P=a((function(t){return null==t})),A=a((function(t){return!!h(t)||!!t&&("object"==typeof t&&(!j(t)&&(1===t.nodeType?!!t.length:0===t.length||t.length>0&&(t.hasOwnProperty(0)&&t.hasOwnProperty(t.length-1)))))})),E=function(){function t(t){this.f=t}return t.prototype["@@transducer/init"]=function(){throw new Error("init not implemented on XWrap")},t.prototype["@@transducer/result"]=function(t){return t},t.prototype["@@transducer/step"]=function(t,n){return this.f(t,n)},t}();function x(t,n){switch(t){case 0:return function(){return n.apply(this,arguments)};case 1:return function(t){return n.apply(this,arguments)};case 2:return function(t,r){return n.apply(this,arguments)};case 3:return function(t,r,e){return n.apply(this,arguments)};case 4:return function(t,r,e,u){return n.apply(this,arguments)};case 5:return function(t,r,e,u,o){return n.apply(this,arguments)};case 6:return function(t,r,e,u,o,c){return n.apply(this,arguments)};case 7:return function(t,r,e,u,o,c,i){return n.apply(this,arguments)};case 8:return function(t,r,e,u,o,c,i,a){return n.apply(this,arguments)};case 9:return function(t,r,e,u,o,c,i,a,f){return n.apply(this,arguments)};case 10:return function(t,r,e,u,o,c,i,a,f,l){return n.apply(this,arguments)};default:throw new Error("First argument to _arity must be a non-negative integer no greater than ten")}}var S=f((function(t,n){return x(t.length,(function(){return t.apply(n,arguments)}))}));function D(t,n,r){for(var e=r.next();!e.done;){if((n=t["@@transducer/step"](n,e.value))&&n["@@transducer/reduced"]){n=n["@@transducer/value"];break}e=r.next()}return t["@@transducer/result"](n)}function _(t,n,r,e){return t["@@transducer/result"](r[e](S(t["@@transducer/step"],t),n))}var I="undefined"!=typeof Symbol?Symbol.iterator:"@@iterator";function N(t,n,r){if("function"==typeof t&&(t=function(t){return new E(t)}(t)),A(r))return function(t,n,r){for(var e=0,u=r.length;e<u;){if((n=t["@@transducer/step"](n,r[e]))&&n["@@transducer/reduced"]){n=n["@@transducer/value"];break}e+=1}return t["@@transducer/result"](n)}(t,n,r);if("function"==typeof r["fantasy-land/reduce"])return _(t,n,r,"fantasy-land/reduce");if(null!=r[I])return D(t,n,r[I]());if("function"==typeof r.next)return D(t,n,r);if("function"==typeof r.reduce)return _(t,n,r,"reduce");throw new TypeError("reduce: list must be array or iterable")}var T=b(N);function k(t,n){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);n&&(e=e.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),r.push.apply(r,e)}return r}function q(t){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?k(Object(r),!0).forEach((function(n){u()(t,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):k(Object(r)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(r,n))}))}return t}console.log(Object({NODE_ENV:"production",host:"https://vttc.ca"}));var M=-1===window.location.href.indexOf("localhost")?"https://vttc.ca/.netlify/functions/":"http://localhost:9000/",V=M+"api",F=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(t){return t},e=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];return(tt(e)?e(t):e)&&console.log(n?"".concat(n," - "):"",r(t)),t},U=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return function(t){return n.reduce((function(t,n){return Object.entries(n(t)||{}).forEach((function(n){var r=v()(n,2),e=r[0],u=r[1];return t[e]=u})),t}),t)}},L=function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),e=1;e<n;e++)r[e-1]=arguments[e];return function(n){return C(m(r),w(r))((function(r,e){return e?e([t].concat(r).reduce((function(t,n){return q({},t,{},n(t)||{})}),n)):t(n)}))}},C=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return function(t){return t.apply(void 0,n)}},z=function(t,n,r){return C(r.find(t))((function(t){return P(t)?void 0:n(t)}))},B=T((function(t,n){return t>=n?t:n}),Number.NEGATIVE_INFINITY),H=(T((function(t,n){return t<=n?t:n}),Number.POSITIVE_INFINITY),function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return function(t){return n.some((function(n){return n===t}))}}),R=function(t){return function(n){return Y(n.lastIndexOf(t),n)}},Y=function(t,n){return-1===t?[n,""]:[n.slice(0,t),n.slice(t+1)]},G=function t(n){return n.reduce((function(n,r){return nt(r)?[].concat(c()(n),c()(t(r))):[].concat(c()(n),[r])}),[])},J=function(t,n){for(var r=arguments.length,e=new Array(r>2?r-2:0),u=2;u<r;u++)e[u-2]=arguments[u];return function(r){return C(tt(t)?t(r):r[t],(function(){return tt(n)?n(r):n}))((function(t,n){return et(e)?z((function(n){return t==n[0]}),(function(t){return t[1](r)||n()}),e)||n():e[0][t]&&e[0][t](r)||n()}))}},W=function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),e=1;e<n;e++)r[e-1]=arguments[e];return function(n){return C((function(){return tt(t)?t(n):t}))((function(t){return z((function(t){return t[0](n)}),(function(r){return r[1](n)||t()}),r)||t()}))}},X=function(t,n,r){return r.filter(t).map(n)},K=function(t,n,r){return r.filter(t).forEach(n)},Q=function(t){return void 0===t},Z=function(t){return void 0!==t},$=function(t){return"string"==typeof t},tt=function(t){return"function"==typeof t},nt=Array.isArray,rt=function(t){return y(Object,t)},et=function(t){return t.length>0&&nt(t[0])},ut=function(t){return"object"===t.type},ot=function(t){return"list"===t.type},ct=function(t,n){return"options"===z((function(n){return n.name===t.type}),(function(t){return t.type}),n)},it=function(t){return H(s.data_ui,s.data)(t.type)},at=function(t){return H(s.data_ui,s.ui)(t.type)},ft=function(t){return t.type===s.rule},lt=function(t){return t.type===s.effect};function pt(t,n){return function(){return n.call(this,t.apply(this,arguments))}}var st=a(g("tail",O(1,1/0)));function yt(t,n){return Object.prototype.hasOwnProperty.call(n,t)}var dt=Number.isInteger||function(t){return t<<0===t},vt=b((function(t,n,r){var e={};for(var u in r)e[u]=r[u];return e[t]=n,e})),ht=b((function t(n,r,e){if(0===n.length)return r;var u=n[0];if(n.length>1){var o=!P(e)&&yt(u,e)?e[u]:dt(n[1])?[]:{};r=t(Array.prototype.slice.call(n,1),r,o)}if(dt(u)&&h(e)){var c=[].concat(e);return c[u]=r,c}return vt(u,r,e)}));function gt(t){return null!=t&&"function"==typeof t["@@transducer/step"]}function bt(t,n,r){return function(){if(0===arguments.length)return r();var e=Array.prototype.slice.call(arguments,0),u=e.pop();if(!h(u)){for(var o=0;o<t.length;){if("function"==typeof u[t[o]])return u[t[o]].apply(u,e);o+=1}if(gt(u)){var c=n.apply(null,e);return c(u)}}return r.apply(this,arguments)}}var Ot=function(){return this.xf["@@transducer/init"]()},mt=function(t){return this.xf["@@transducer/result"](t)},jt=function(){function t(t,n){this.xf=n,this.f=t}return t.prototype["@@transducer/init"]=Ot,t.prototype["@@transducer/result"]=mt,t.prototype["@@transducer/step"]=function(t,n){return this.xf["@@transducer/step"](t,this.f(n))},t}(),wt=f((function(t,n){return new jt(t,n)}));var Pt=f((function(t,n){return 1===t?a(n):x(t,function t(n,r,e){return function(){for(var u=[],o=0,c=n,a=0;a<r.length||o<arguments.length;){var f;a<r.length&&(!i(r[a])||o>=arguments.length)?f=r[a]:(f=arguments[o],o+=1),u[a]=f,i(f)||(c-=1),a+=1}return c<=0?e.apply(this,u):x(c,t(n,u,e))}}(t,[],n))})),At=Object.prototype.toString,Et=function(){return"[object Arguments]"===At.call(arguments)?function(t){return"[object Arguments]"===At.call(t)}:function(t){return yt("callee",t)}}(),xt=!{toString:null}.propertyIsEnumerable("toString"),St=["constructor","valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],Dt=function(){return arguments.propertyIsEnumerable("length")}(),_t=function(t,n){for(var r=0;r<t.length;){if(t[r]===n)return!0;r+=1}return!1},It="function"!=typeof Object.keys||Dt?a((function(t){if(Object(t)!==t)return[];var n,r,e=[],u=Dt&&Et(t);for(n in t)!yt(n,t)||u&&"length"===n||(e[e.length]=n);if(xt)for(r=St.length-1;r>=0;)yt(n=St[r],t)&&!_t(e,n)&&(e[e.length]=n),r-=1;return e})):a((function(t){return Object(t)!==t?[]:Object.keys(t)})),Nt=f(bt(["fantasy-land/map","map"],wt,(function(t,n){switch(Object.prototype.toString.call(n)){case"[object Function]":return Pt(n.length,(function(){return t.call(this,n.apply(this,arguments))}));case"[object Object]":return N((function(r,e){return r[e]=t(n[e]),r}),{},It(n));default:return function(t,n){for(var r=0,e=n.length,u=Array(e);r<e;)u[r]=t(n[r]),r+=1;return u}(t,n)}}))),Tt=f((function(t,n){return function(r){return function(e){return Nt((function(t){return n(t,e)}),r(t(e)))}}})),kt=f((function(t,n){for(var r=n,e=0;e<t.length;){if(null==r)return;r=r[t[e]],e+=1}return r})),qt=a((function(t){return Tt(kt(t),ht(t))})),Mt=a((function(t){return Pt(t.length,t)})),Vt=function(t){return{value:t,"fantasy-land/map":function(){return this}}},Ft=f((function(t,n){return t(Vt)(n).value})),Ut=a((function(t){return function(){return t}})),Lt=function(t){return{value:t,map:function(n){return Lt(n(t))}}},Ct=b((function(t,n,r){return t((function(t){return Lt(n(t))}))(r).value})),zt=b((function(t,n,r){return Ct(t,Ut(n),r)})),Bt=b((function(t,n,r){var e=Array.prototype.slice.call(r,0);return e.splice(t,n),e})),Ht=f((function(t,n){return Array.prototype.slice.call(n,0).sort((function(n,r){for(var e=0,u=0;0===e&&u<t.length;)e=t[u](n,r),u+=1;return e}))})),Rt=b((function(t,n,r){var e=t(n),u=t(r);return e>u?-1:e<u?1:0})),Yt=b((function(t,n,r){var e=t(n),u=t(r);return e<u?-1:e>u?1:0})),Gt=f((function(t,n){return kt([t],n)}));function Jt(t){for(var n,r=[];!(n=t.next()).done;)r.push(n.value);return r}function Wt(t,n,r){for(var e=0,u=r.length;e<u;){if(t(n,r[e]))return!0;e+=1}return!1}var Xt="function"==typeof Object.is?Object.is:function(t,n){return t===n?0!==t||1/t==1/n:t!=t&&n!=n},Kt=a((function(t){return null===t?"Null":void 0===t?"Undefined":Object.prototype.toString.call(t).slice(8,-1)}));function Qt(t,n,r,e){var u=Jt(t);function o(t,n){return Zt(t,n,r.slice(),e.slice())}return!Wt((function(t,n){return!Wt(o,n,t)}),Jt(n),u)}function Zt(t,n,r,e){if(Xt(t,n))return!0;var u,o,c=Kt(t);if(c!==Kt(n))return!1;if(null==t||null==n)return!1;if("function"==typeof t["fantasy-land/equals"]||"function"==typeof n["fantasy-land/equals"])return"function"==typeof t["fantasy-land/equals"]&&t["fantasy-land/equals"](n)&&"function"==typeof n["fantasy-land/equals"]&&n["fantasy-land/equals"](t);if("function"==typeof t.equals||"function"==typeof n.equals)return"function"==typeof t.equals&&t.equals(n)&&"function"==typeof n.equals&&n.equals(t);switch(c){case"Arguments":case"Array":case"Object":if("function"==typeof t.constructor&&"Promise"===(u=t.constructor,null==(o=String(u).match(/^function (\w*)/))?"":o[1]))return t===n;break;case"Boolean":case"Number":case"String":if(typeof t!=typeof n||!Xt(t.valueOf(),n.valueOf()))return!1;break;case"Date":if(!Xt(t.valueOf(),n.valueOf()))return!1;break;case"Error":return t.name===n.name&&t.message===n.message;case"RegExp":if(t.source!==n.source||t.global!==n.global||t.ignoreCase!==n.ignoreCase||t.multiline!==n.multiline||t.sticky!==n.sticky||t.unicode!==n.unicode)return!1}for(var i=r.length-1;i>=0;){if(r[i]===t)return e[i]===n;i-=1}switch(c){case"Map":return t.size===n.size&&Qt(t.entries(),n.entries(),r.concat([t]),e.concat([n]));case"Set":return t.size===n.size&&Qt(t.values(),n.values(),r.concat([t]),e.concat([n]));case"Arguments":case"Array":case"Object":case"Boolean":case"Number":case"String":case"Date":case"Error":case"RegExp":case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"ArrayBuffer":break;default:return!1}var a=It(t);if(a.length!==It(n).length)return!1;var f=r.concat([t]),l=e.concat([n]);for(i=a.length-1;i>=0;){var p=a[i];if(!yt(p,n)||!Zt(n[p],t[p],f,l))return!1;i-=1}return!0}var $t=f((function(t,n){return Zt(t,n,[],[])}));function tn(t,n){return function(t,n,r){var e,u;if("function"==typeof t.indexOf)switch(typeof n){case"number":if(0===n){for(e=1/n;r<t.length;){if(0===(u=t[r])&&1/u===e)return r;r+=1}return-1}if(n!=n){for(;r<t.length;){if("number"==typeof(u=t[r])&&u!=u)return r;r+=1}return-1}return t.indexOf(n,r);case"string":case"boolean":case"function":case"undefined":return t.indexOf(n,r);case"object":if(null===n)return t.indexOf(n,r)}for(;r<t.length;){if($t(t[r],n))return r;r+=1}return-1}(n,t,0)>=0}var nn=f(tn),rn=function(t){return function(n,r,e){var u,o=Q(r)?t.op1?qn(t.op1)(n):"":r,c=Q(e)?t.op2?qn(t.op2)(n):"":e,i=t.operator,a=!1;if("!"===i.slice(0,1)&&(a=!0,i=i.slice(1)),"~"===i)u=nn(c,o);else if("="===i)u=o==c;else{var f=+o,l=+c;"+"===i?u=f+l:"-"===i?u=f-l:"*"===i?u=f*l:"/"===i?u=f/l:">"===i?u=f>l:"<"===i?u=f<l:">="===i?u=f>=l:"<="===i&&(u=f<=l)}return a&&(u=!u),u.toString()}},en=function(t,n,r){return z((function(t){return t.name===n}),(function(t){return t[r]}),t)},un=function(t,n){return!t&&n?[n]:c()((n||document).querySelectorAll(":scope "+cn(t)))},on=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return($(t)?"".concat(n>0?" ":"",'[name="').concat(t,'"]'):"> :nth-child(".concat(t+1,")"))},cn=function(t){return Tn(t).map(on).join("")},an=function(t){return t.innerHTML=""},fn=function t(n,r){return r.getAttribute(n)||(r.parentElement?t(n,r.parentElement):"")};function ln(t,n){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);n&&(e=e.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),r.push.apply(r,e)}return r}var pn=function(t){return"window"===t},sn=function(t){return pn(t.input.target)},yn={input:{event:"load",target:"window"},output:{action:"initData",target:""}},dn={input:{event:"click",target:"__sync"},output:{action:"sync",target:""}},vn=function(t){return{input:{event:"change",target:t},output:{action:"input",target:t}}},hn=function(t,n){return Qn(n.input.target,n.parent).forEach((r=n.input.event,e=function(r){return ar(t,wn(function(t){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?ln(Object(r),!0).forEach((function(n){u()(t,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):ln(Object(r)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(r,n))}))}return t}({context:t},n.output,{eventData:r})))},function(t){return t.addEventListener(r,e)}));var r,e};function gn(t,n){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);n&&(e=e.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),r.push.apply(r,e)}return r}function bn(t){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?gn(Object(r),!0).forEach((function(n){u()(t,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):gn(Object(r)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(r,n))}))}return t}var On=W((function(t){return t.value||t.calcValue(t.data)}),[function(t){return t.listOp==p.clear},function(t){return[]}]),mn=J("listOp",(function(t){return t.path}),[p.add,function(t){return t.path+"."+(qn(t.path,t.data)||[]).length}]),jn=function t(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(e){return C(Nn(r,e.name))(W((function(t){return[An(t,{value:""},s.ui),En(vn(t))]}),[function(){return ot(e)},function(t){return[An(t,{listOp:p.clear})]}],[function(){return ct(e,n)},function(t){return[An(t,{listOp:p.clear}),An(t,{value:en(n,e.type,"options"),listOp:p.add},s.ui),En(vn(t))]}],[function(){return ut(e)},function(r){return G(e.fields.map(t(n,r)))}]))}},wn=J((function(t){return t.action}),[],{message:function(t){return[xn((function(){return alert(t.target)}))]},sync:function(t){return[xn((function(){return Dn(t.context)}))]},initData:function(t){return[].concat(c()((n=t.context.schema,G(n.map(jn(n,""))))),c()(In(t.context.data)),[xn((function(){return _n(t.context)}),!0)],c()(Pn(t.context.rules)));var n},input:function(t){return[An(t.target,{value:t.eventData.target.value},s.data)]},assign:function(t){var n;return[An(t.target,{calcValue:(null===(n=t.params)||void 0===n?void 0:n.exp)&&rn(t.params.exp)})]},add:function(t){return[An(t.target,{listOp:p.add,calcValue:function(n){var r,e;return(null===(r=t.params)||void 0===r?void 0:r.item)?[bn({},qn(t.params.item,n),{_uid:(e=qn(t.target,n),B(e.map((function(t){return Z(t._uid)?t._uid:-1})))+1)})]:[]}})]},remove:function(t){return[An(t.target,{listOp:p.delete,value:fn("_uid",t.eventData.srcElement)})]},sort:function(t){return[An(t.target,{listOp:p.sort,calcValue:function(n){var r,e;return Ln(t.target,null===(r=t.params)||void 0===r?void 0:r.field,null===(e=t.params)||void 0===e?void 0:e.order,n)}})]},filter:function(t){var n;return(null===(n=t.params)||void 0===n?void 0:n.predicate)&&[An(t.target,{listOp:p.filter,calcValue:function(n){var r;return Un(t.target,null===(r=t.params)||void 0===r?void 0:r.predicate,n)}})]}}),Pn=function(t,n,r){return X((function(t){return!(sn(t)||r&&t.output.target!=r)}),(function(t){return En(t,void 0,n)}),t)},An=function(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:s.data_ui;return bn({type:r,path:t,value:"",listOp:0,calcValue:function(){return""}},n)},En=function(t,n,r){return bn({type:s.rule,value:n},t,{parent:r})},xn=function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return{type:s.effect,value:"",effect:t,wait:n}},Sn=function(t,n,r,e){return bn({},An(t,{value:n,listOp:r}),{data:e})},Dn=function(t){var n=t.data;return Promise.all(Object.entries(n).map((function(t){var n=v()(t,2),r=n[0],e=n[1];return nt(e)&&function(t){var n=t.doc,r=t.body;return fetch("".concat(V,"?doc=").concat(n),{method:"post",body:JSON.stringify(r)}).then((function(t){return t.json()}))}({doc:r,body:u()({},r,e)})}))).then((function(t){return alert("saved")}))},_n=function(t){return C(X((function(t){return"list"===t.type}),(function(t){return t.name}),t.schema))((function(n){return Promise.all(n.map((function(t){return function(t){var n=t.doc;return fetch("".concat(V,"?doc=").concat(n)).then((function(t){return t.json()}))}({doc:t})}))).then((function(r){return ar(t,r.map((function(t,r){return An(n[r],{value:t,listOp:p.add})})))}))}))},In=function(t){return Object.entries(t).map((function(t){var n=v()(t,2),r=n[0],e=n[1];return An(r,{value:e},s.ui)}))},Nn=function(t,n){return(t?t+".":"")+n},Tn=function(t){return t.replace(/\[/g,".").replace(/\]/g,"").split(".").map((function(t){return isNaN(+t)?t:+t}))},kn=function(){if(0===arguments.length)throw new Error("pipe requires at least one argument");return x(arguments[0].length,T(pt,arguments[0],st(arguments)))}(Tn,qt),qn=Mt((function(t,n){return Ft(kn(t))(n)})),Mn=function(t){return zt(kn(t.path))(t.value,t.data)},Vn=J((function(t){return t.listOp}),Mn,[p.filter,function(t){return t.data}],[p.add,function(t){return nt(t.value)?Fn.apply(void 0,c()(t.value.map((function(n,r){return C(R(".")(t.path))((function(t){var e=v()(t,2);return[e[0]+"."+(+e[1]+r),n,p.add]}))}))))(t.data):Mn(t)}],[p.delete,function(t){return t.value?Ct(kn(t.path),Bt(+t.value,1),t.data):t.data}]),Fn=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return function(t){return n.reduce((function(t,n){var r=v()(n,3),e=r[0],u=r[1],o=r[2];return Vn(Sn(e,u,o,t))}),t)}},Un=function(t,n,r){var e,u;return n&&C(qn(t,r),null!==(e=function(t){return t&&t.length>1&&'"'===t[0]&&'"'===t[t.length-1]}(u=n.op2)?u.slice(1,u.length-1):"")&&void 0!==e?e:qn(n.op2,r))((function(t,e){return t.filter((function(t){return"true"===rn(n)(r,t[n.op1],e)}))}))},Ln=function(t,n,r,e){return C(qn(t,e))((function(t){return Ht([("descending"===r?Rt:Yt)(Gt(n))],t)}))};function Cn(t,n){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);n&&(e=e.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),r.push.apply(r,e)}return r}var zn,Bn,Hn=function(t,n){return G(t.map((function(t,r){return Kn(function(t){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?Cn(Object(r),!0).forEach((function(n){u()(t,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):Cn(Object(r)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(r,n))}))}return t}({},n,{path:"",listOp:0,value:t,parent:n.clone[r]}))})))},Rn=function(t,n,r){return un(t).forEach((function(t){return n&&(e=n,u=t,o=+r,C(document.createDocumentFragment())((function(t){e.forEach((function(n){return t.appendChild(n)})),u.insertBefore(t,u.children[o])})));var e,u,o}))},Yn=L((function(t){var n,r=(n=t.path,C(R(".")(n))((function(t){return isNaN(+t[1])?[n,0]:t})));return{listPath:r[0],idx:r[1]}}),(function(t){var n,r;return{template:(n=t.listPath,r=t.templates,z((function(t){return t.listPath===n}),(function(t){return t.element}),r))}}),(zn="template",Bn=[],function(t){return Q(t[zn])?{_return:Bn}:{}}),(function(t){var n;return{clone:(n=t.template,t.value.map((function(t){return n.cloneNode(!0)})))}}),(function(t){return{cloneUpdates:Hn(t.value,t)}}),(function(t){Rn(t.listPath,t.clone,t.idx)}),(function(t){var n,r,e;return n=t.rules,r=t.clone,e=t.listPath,t.cloneUpdates.concat(G(r.map((function(t){return Pn(n,t,e)}))))})),Gn=function(t){var n=t.path;return un(n).forEach(an)},Jn=L(Gn,(function(t){return{path:t.path+".0"}}),Yn),Wn=J((function(t){return t.listOp}),[],[p.add,Yn],[p.clear,Gn],[p.delete,function(t){var n=t.path,r=t.value;return un(n).forEach((function(t){return e=r,C((n=t).querySelector('[_uid="'.concat(e,'"]')))((function(t){return t&&n.removeChild(t)}));var n,e}))}],[p.filter,Jn],[p.sort,Jn]);function Xn(t,n){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);n&&(e=e.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),r.push.apply(r,e)}return r}var Kn=W([],[function(t){return!Z(t.value)},function(){return[]}],[function(t){return t.listOp>0},Wn],[function(t){return $(t.value)||"number"==typeof t.value},function(t){var n,r=t.path,e=t.value,u=t.parent;return un(r,u).forEach((n=e,W((function(t){return t.innerText=n}),[function(t){return t instanceof HTMLInputElement},function(t){return t.value=n}],[function(t){return t instanceof HTMLOptionElement},function(t){return t.value=t.innerText=n}],[function(t){return t instanceof HTMLSelectElement},function(t){return t.value=n}]))),[]}],[function(t){return rt(t.value)},function(t){return Object.entries(t.value).reduce((function(n,r){var e,o,i=v()(r,2),a=i[0],f=i[1];return[].concat(c()(n),c()("_uid"===a&&t.parent?(e=a,o=f,t.parent.setAttribute(e,o),[]):Kn(function(t){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?Xn(Object(r),!0).forEach((function(n){u()(t,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):Xn(Object(r)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(r,n))}))}return t}({},t,{path:Nn(t.path,a),value:f}))))}),[])}]),Qn=function(t,n){return pn(t)?[window]:un(t,n)},Zn=function t(n,r){return W([],[function(t){return function(t,n){return ot(t)||ct(t,n)}(t,n)},$n(r)],[ut,function(e){return e.fields.map(t(n,Nn(r,e.name)))}])},$n=function(t){return function(n){return C(Nn(t,n.name))((function(t){return C(un(t+".0"))((function(r){return r.length>0?[{listPath:t,type:ot(n)?n.itemType:n.type,element:r[0]}]:[]}))}))}},tr=["input.target","output.target","output.params.item","output.params.field","output.params.exp.op1","output.params.exp.op2","output.params.predicate.op1","output.params.predicate.op2"],nr=function(t,n){return G(t.map((function(t){return C((r=t,G(tr.map((function(t){return(qn(t,r)||"").match(/\[(\w+)\]/g)||[]})).map((function(t){return t.slice(1,t.length-1)})))))((function(r){return 0===F(r).length?[t]:r.map((function(r){return C(function(t,n){return en(n,t,"options")}(r,n))((function(n){return n.map((function(n){return tr.reduce((function(t,r){return Vn(r,qn(r,t).replace(new RegExp("[".concat(n,"]"),"g"),n),t)}),t)}))}))}))}));var r})))};function rr(t,n){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);n&&(e=e.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),r.push.apply(r,e)}return r}function er(t){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?rr(Object(r),!0).forEach((function(n){u()(t,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):rr(Object(r)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(r,n))}))}return t}var ur=function(t){return function(t,n){return G(t.map(Zn(t,n)))}(t,"")},or=function(t,n){return r=it,e=function(n){return bn({},r=er({},n,{data:t}),{path:mn(r),value:On(r)});var r},n.map((function(t){return r(t)?e(t):t}));var r,e},cr=U((function(t){var n,r;return{rules:(n=t.rules,r=t.schema,[yn,dn].concat(c()(nr(n,r))))}}),F,(function(t){return{templates:ur(t.schema)}}),(function(t){var n,r;n=t.rules,r=t,n.filter(sn).forEach((function(t){return hn(r,En(t))}))})),ir=U(F,(function(t){return{updates:or(t.data,t.updates)}}),(function(t){var n,r;return{data:(n=t.data,r=t.updates,Fn.apply(void 0,c()(X(it,(function(t){return[t.path,t.value,t.listOp]}),r)))(n))}}),(function(t){var n,r;return{updates:(n=t.updates,r=t,n.concat(G(X(at,(function(t){return Kn(er({},r,{},t))}),n))))}}),(function(t){var n,r;n=t.updates,r=t,K(ft,(function(t){return hn(r,t)}),n)}),(function(t){var n;n=t.updates,K(lt,(function(t){return t.effect()}),n)})),ar=function(t,n){t.updates=n,ir(t)};cr({data:{},rules:[],schema:[{name:"product",type:"object",fields:[{name:"id",type:"integer"},{name:"name",type:"string"},{name:"cat",type:"integer"},{name:"cat1",type:"integer"},{name:"description",type:"string"},{name:"price",type:"integer"},{name:"sale",type:"integer"}]},{name:"products",type:"list",itemType:"product"}]})}]);
//# sourceMappingURL=products.bundle.js.map
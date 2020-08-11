/* axios v0.19.2 | (c) 2020 by Matt Zabriskie */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.axios=t():e.axios=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";function r(e){var t=new s(e),n=i(s.prototype.request,t);return o.extend(n,s.prototype,t),o.extend(n,t),n}var o=n(2),i=n(3),s=n(4),a=n(22),u=n(10),c=r(u);c.Axios=s,c.create=function(e){return r(a(c.defaults,e))},c.Cancel=n(23),c.CancelToken=n(24),c.isCancel=n(9),c.all=function(e){return Promise.all(e)},c.spread=n(25),e.exports=c,e.exports.default=c},function(e,t,n){"use strict";function r(e){return"[object Array]"===j.call(e)}function o(e){return"undefined"==typeof e}function i(e){return null!==e&&!o(e)&&null!==e.constructor&&!o(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}function s(e){return"[object ArrayBuffer]"===j.call(e)}function a(e){return"undefined"!=typeof FormData&&e instanceof FormData}function u(e){var t;return t="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer}function c(e){return"string"==typeof e}function f(e){return"number"==typeof e}function p(e){return null!==e&&"object"==typeof e}function d(e){return"[object Date]"===j.call(e)}function l(e){return"[object File]"===j.call(e)}function h(e){return"[object Blob]"===j.call(e)}function m(e){return"[object Function]"===j.call(e)}function y(e){return p(e)&&m(e.pipe)}function g(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams}function v(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}function x(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)}function w(e,t){if(null!==e&&"undefined"!=typeof e)if("object"!=typeof e&&(e=[e]),r(e))for(var n=0,o=e.length;n<o;n++)t.call(null,e[n],n,e);else for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.call(null,e[i],i,e)}function b(){function e(e,n){"object"==typeof t[n]&&"object"==typeof e?t[n]=b(t[n],e):t[n]=e}for(var t={},n=0,r=arguments.length;n<r;n++)w(arguments[n],e);return t}function E(){function e(e,n){"object"==typeof t[n]&&"object"==typeof e?t[n]=E(t[n],e):"object"==typeof e?t[n]=E({},e):t[n]=e}for(var t={},n=0,r=arguments.length;n<r;n++)w(arguments[n],e);return t}function S(e,t,n){return w(t,function(t,r){n&&"function"==typeof t?e[r]=C(t,n):e[r]=t}),e}var C=n(3),j=Object.prototype.toString;e.exports={isArray:r,isArrayBuffer:s,isBuffer:i,isFormData:a,isArrayBufferView:u,isString:c,isNumber:f,isObject:p,isUndefined:o,isDate:d,isFile:l,isBlob:h,isFunction:m,isStream:y,isURLSearchParams:g,isStandardBrowserEnv:x,forEach:w,merge:b,deepMerge:E,extend:S,trim:v}},function(e,t){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},function(e,t,n){"use strict";function r(e){this.defaults=e,this.interceptors={request:new s,response:new s}}var o=n(2),i=n(5),s=n(6),a=n(7),u=n(22);r.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{},e.url=arguments[0]):e=e||{},e=u(this.defaults,e),e.method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=[a,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach(function(e){t.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){t.push(e.fulfilled,e.rejected)});t.length;)n=n.then(t.shift(),t.shift());return n},r.prototype.getUri=function(e){return e=u(this.defaults,e),i(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},o.forEach(["delete","get","head","options"],function(e){r.prototype[e]=function(t,n){return this.request(o.merge(n||{},{method:e,url:t}))}}),o.forEach(["post","put","patch"],function(e){r.prototype[e]=function(t,n,r){return this.request(o.merge(r||{},{method:e,url:t,data:n}))}}),e.exports=r},function(e,t,n){"use strict";function r(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var o=n(2);e.exports=function(e,t,n){if(!t)return e;var i;if(n)i=n(t);else if(o.isURLSearchParams(t))i=t.toString();else{var s=[];o.forEach(t,function(e,t){null!==e&&"undefined"!=typeof e&&(o.isArray(e)?t+="[]":e=[e],o.forEach(e,function(e){o.isDate(e)?e=e.toISOString():o.isObject(e)&&(e=JSON.stringify(e)),s.push(r(t)+"="+r(e))}))}),i=s.join("&")}if(i){var a=e.indexOf("#");a!==-1&&(e=e.slice(0,a)),e+=(e.indexOf("?")===-1?"?":"&")+i}return e}},function(e,t,n){"use strict";function r(){this.handlers=[]}var o=n(2);r.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},r.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},r.prototype.forEach=function(e){o.forEach(this.handlers,function(t){null!==t&&e(t)})},e.exports=r},function(e,t,n){"use strict";function r(e){e.cancelToken&&e.cancelToken.throwIfRequested()}var o=n(2),i=n(8),s=n(9),a=n(10);e.exports=function(e){r(e),e.headers=e.headers||{},e.data=i(e.data,e.headers,e.transformRequest),e.headers=o.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),o.forEach(["delete","get","head","post","put","patch","common"],function(t){delete e.headers[t]});var t=e.adapter||a.adapter;return t(e).then(function(t){return r(e),t.data=i(t.data,t.headers,e.transformResponse),t},function(t){return s(t)||(r(e),t&&t.response&&(t.response.data=i(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)})}},function(e,t,n){"use strict";var r=n(2);e.exports=function(e,t,n){return r.forEach(n,function(n){e=n(e,t)}),e}},function(e,t){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},function(e,t,n){"use strict";function r(e,t){!i.isUndefined(e)&&i.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}function o(){var e;return"undefined"!=typeof XMLHttpRequest?e=n(12):"undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process)&&(e=n(12)),e}var i=n(2),s=n(11),a={"Content-Type":"application/x-www-form-urlencoded"},u={adapter:o(),transformRequest:[function(e,t){return s(t,"Accept"),s(t,"Content-Type"),i.isFormData(e)||i.isArrayBuffer(e)||i.isBuffer(e)||i.isStream(e)||i.isFile(e)||i.isBlob(e)?e:i.isArrayBufferView(e)?e.buffer:i.isURLSearchParams(e)?(r(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):i.isObject(e)?(r(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300}};u.headers={common:{Accept:"application/json, text/plain, */*"}},i.forEach(["delete","get","head"],function(e){u.headers[e]={}}),i.forEach(["post","put","patch"],function(e){u.headers[e]=i.merge(a)}),e.exports=u},function(e,t,n){"use strict";var r=n(2);e.exports=function(e,t){r.forEach(e,function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])})}},function(e,t,n){"use strict";var r=n(2),o=n(13),i=n(5),s=n(16),a=n(19),u=n(20),c=n(14);e.exports=function(e){return new Promise(function(t,f){var p=e.data,d=e.headers;r.isFormData(p)&&delete d["Content-Type"];var l=new XMLHttpRequest;if(e.auth){var h=e.auth.username||"",m=e.auth.password||"";d.Authorization="Basic "+btoa(h+":"+m)}var y=s(e.baseURL,e.url);if(l.open(e.method.toUpperCase(),i(y,e.params,e.paramsSerializer),!0),l.timeout=e.timeout,l.onreadystatechange=function(){if(l&&4===l.readyState&&(0!==l.status||l.responseURL&&0===l.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in l?a(l.getAllResponseHeaders()):null,r=e.responseType&&"text"!==e.responseType?l.response:l.responseText,i={data:r,status:l.status,statusText:l.statusText,headers:n,config:e,request:l};o(t,f,i),l=null}},l.onabort=function(){l&&(f(c("Request aborted",e,"ECONNABORTED",l)),l=null)},l.onerror=function(){f(c("Network Error",e,null,l)),l=null},l.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),f(c(t,e,"ECONNABORTED",l)),l=null},r.isStandardBrowserEnv()){var g=n(21),v=(e.withCredentials||u(y))&&e.xsrfCookieName?g.read(e.xsrfCookieName):void 0;v&&(d[e.xsrfHeaderName]=v)}if("setRequestHeader"in l&&r.forEach(d,function(e,t){"undefined"==typeof p&&"content-type"===t.toLowerCase()?delete d[t]:l.setRequestHeader(t,e)}),r.isUndefined(e.withCredentials)||(l.withCredentials=!!e.withCredentials),e.responseType)try{l.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&l.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&l.upload&&l.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then(function(e){l&&(l.abort(),f(e),l=null)}),void 0===p&&(p=null),l.send(p)})}},function(e,t,n){"use strict";var r=n(14);e.exports=function(e,t,n){var o=n.config.validateStatus;!o||o(n.status)?e(n):t(r("Request failed with status code "+n.status,n.config,null,n.request,n))}},function(e,t,n){"use strict";var r=n(15);e.exports=function(e,t,n,o,i){var s=new Error(e);return r(s,t,n,o,i)}},function(e,t){"use strict";e.exports=function(e,t,n,r,o){return e.config=t,n&&(e.code=n),e.request=r,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},function(e,t,n){"use strict";var r=n(17),o=n(18);e.exports=function(e,t){return e&&!r(t)?o(e,t):t}},function(e,t){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},function(e,t){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},function(e,t,n){"use strict";var r=n(2),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,i,s={};return e?(r.forEach(e.split("\n"),function(e){if(i=e.indexOf(":"),t=r.trim(e.substr(0,i)).toLowerCase(),n=r.trim(e.substr(i+1)),t){if(s[t]&&o.indexOf(t)>=0)return;"set-cookie"===t?s[t]=(s[t]?s[t]:[]).concat([n]):s[t]=s[t]?s[t]+", "+n:n}}),s):s}},function(e,t,n){"use strict";var r=n(2);e.exports=r.isStandardBrowserEnv()?function(){function e(e){var t=e;return n&&(o.setAttribute("href",t),t=o.href),o.setAttribute("href",t),{href:o.href,protocol:o.protocol?o.protocol.replace(/:$/,""):"",host:o.host,search:o.search?o.search.replace(/^\?/,""):"",hash:o.hash?o.hash.replace(/^#/,""):"",hostname:o.hostname,port:o.port,pathname:"/"===o.pathname.charAt(0)?o.pathname:"/"+o.pathname}}var t,n=/(msie|trident)/i.test(navigator.userAgent),o=document.createElement("a");return t=e(window.location.href),function(n){var o=r.isString(n)?e(n):n;return o.protocol===t.protocol&&o.host===t.host}}():function(){return function(){return!0}}()},function(e,t,n){"use strict";var r=n(2);e.exports=r.isStandardBrowserEnv()?function(){return{write:function(e,t,n,o,i,s){var a=[];a.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),r.isString(o)&&a.push("path="+o),r.isString(i)&&a.push("domain="+i),s===!0&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},function(e,t,n){"use strict";var r=n(2);e.exports=function(e,t){t=t||{};var n={},o=["url","method","params","data"],i=["headers","auth","proxy"],s=["baseURL","url","transformRequest","transformResponse","paramsSerializer","timeout","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","maxContentLength","validateStatus","maxRedirects","httpAgent","httpsAgent","cancelToken","socketPath"];r.forEach(o,function(e){"undefined"!=typeof t[e]&&(n[e]=t[e])}),r.forEach(i,function(o){r.isObject(t[o])?n[o]=r.deepMerge(e[o],t[o]):"undefined"!=typeof t[o]?n[o]=t[o]:r.isObject(e[o])?n[o]=r.deepMerge(e[o]):"undefined"!=typeof e[o]&&(n[o]=e[o])}),r.forEach(s,function(r){"undefined"!=typeof t[r]?n[r]=t[r]:"undefined"!=typeof e[r]&&(n[r]=e[r])});var a=o.concat(i).concat(s),u=Object.keys(t).filter(function(e){return a.indexOf(e)===-1});return r.forEach(u,function(r){"undefined"!=typeof t[r]?n[r]=t[r]:"undefined"!=typeof e[r]&&(n[r]=e[r])}),n}},function(e,t){"use strict";function n(e){this.message=e}n.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},n.prototype.__CANCEL__=!0,e.exports=n},function(e,t,n){"use strict";function r(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise(function(e){t=e});var n=this;e(function(e){n.reason||(n.reason=new o(e),t(n.reason))})}var o=n(23);r.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},r.source=function(){var e,t=new r(function(t){e=t});return{token:t,cancel:e}},e.exports=r},function(e,t){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}}])});
//# sourceMappingURL=axios.min.map
!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).Qs=e()}}(function(){return function i(a,l,c){function s(t,e){if(!l[t]){if(!a[t]){var r="function"==typeof require&&require;if(!e&&r)return r(t,!0);if(f)return f(t,!0);var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}var n=l[t]={exports:{}};a[t][0].call(n.exports,function(e){return s(a[t][1][e]||e)},n,n.exports,i,a,l,c)}return l[t].exports}for(var f="function"==typeof require&&require,e=0;e<c.length;e++)s(c[e]);return s}({1:[function(e,t,r){"use strict";var o=String.prototype.replace,n=/%20/g;t.exports={default:"RFC3986",formatters:{RFC1738:function(e){return o.call(e,n,"+")},RFC3986:function(e){return e}},RFC1738:"RFC1738",RFC3986:"RFC3986"}},{}],2:[function(e,t,r){"use strict";var o=e("./stringify"),n=e("./parse"),i=e("./formats");t.exports={formats:i,parse:n,stringify:o}},{"./formats":1,"./parse":3,"./stringify":4}],3:[function(e,t,r){"use strict";var y=e("./utils"),m=Object.prototype.hasOwnProperty,h={allowDots:!1,allowPrototypes:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decoder:y.decode,delimiter:"&",depth:5,ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictNullHandling:!1},s=function(e,t,r){if(e){var o=r.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,n=/(\[[^[\]]*])/g,i=/(\[[^[\]]*])/.exec(o),a=i?o.slice(0,i.index):o,l=[];if(a){if(!r.plainObjects&&m.call(Object.prototype,a)&&!r.allowPrototypes)return;l.push(a)}for(var c=0;null!==(i=n.exec(o))&&c<r.depth;){if(c+=1,!r.plainObjects&&m.call(Object.prototype,i[1].slice(1,-1))&&!r.allowPrototypes)return;l.push(i[1])}return i&&l.push("["+o.slice(i.index)+"]"),function(e,t,r){for(var o=t,n=e.length-1;0<=n;--n){var i,a=e[n];if("[]"===a&&r.parseArrays)i=[].concat(o);else{i=r.plainObjects?Object.create(null):{};var l="["===a.charAt(0)&&"]"===a.charAt(a.length-1)?a.slice(1,-1):a,c=parseInt(l,10);r.parseArrays||""!==l?!isNaN(c)&&a!==l&&String(c)===l&&0<=c&&r.parseArrays&&c<=r.arrayLimit?(i=[])[c]=o:i[l]=o:i={0:o}}o=i}return o}(l,t,r)}};t.exports=function(e,t){var r=function(e){if(!e)return h;if(null!==e.decoder&&void 0!==e.decoder&&"function"!=typeof e.decoder)throw new TypeError("Decoder has to be a function.");if(void 0!==e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new Error("The charset option must be either utf-8, iso-8859-1, or undefined");var t=void 0===e.charset?h.charset:e.charset;return{allowDots:void 0===e.allowDots?h.allowDots:!!e.allowDots,allowPrototypes:"boolean"==typeof e.allowPrototypes?e.allowPrototypes:h.allowPrototypes,arrayLimit:"number"==typeof e.arrayLimit?e.arrayLimit:h.arrayLimit,charset:t,charsetSentinel:"boolean"==typeof e.charsetSentinel?e.charsetSentinel:h.charsetSentinel,comma:"boolean"==typeof e.comma?e.comma:h.comma,decoder:"function"==typeof e.decoder?e.decoder:h.decoder,delimiter:"string"==typeof e.delimiter||y.isRegExp(e.delimiter)?e.delimiter:h.delimiter,depth:"number"==typeof e.depth?e.depth:h.depth,ignoreQueryPrefix:!0===e.ignoreQueryPrefix,interpretNumericEntities:"boolean"==typeof e.interpretNumericEntities?e.interpretNumericEntities:h.interpretNumericEntities,parameterLimit:"number"==typeof e.parameterLimit?e.parameterLimit:h.parameterLimit,parseArrays:!1!==e.parseArrays,plainObjects:"boolean"==typeof e.plainObjects?e.plainObjects:h.plainObjects,strictNullHandling:"boolean"==typeof e.strictNullHandling?e.strictNullHandling:h.strictNullHandling}}(t);if(""===e||null==e)return r.plainObjects?Object.create(null):{};for(var o="string"==typeof e?function(e,t){var r,o={},n=t.ignoreQueryPrefix?e.replace(/^\?/,""):e,i=t.parameterLimit===1/0?void 0:t.parameterLimit,a=n.split(t.delimiter,i),l=-1,c=t.charset;if(t.charsetSentinel)for(r=0;r<a.length;++r)0===a[r].indexOf("utf8=")&&("utf8=%E2%9C%93"===a[r]?c="utf-8":"utf8=%26%2310003%3B"===a[r]&&(c="iso-8859-1"),l=r,r=a.length);for(r=0;r<a.length;++r)if(r!==l){var s,f,u=a[r],p=u.indexOf("]="),d=-1===p?u.indexOf("="):p+1;(f=-1===d?(s=t.decoder(u,h.decoder,c),t.strictNullHandling?null:""):(s=t.decoder(u.slice(0,d),h.decoder,c),t.decoder(u.slice(d+1),h.decoder,c)))&&t.interpretNumericEntities&&"iso-8859-1"===c&&(f=f.replace(/&#(\d+);/g,function(e,t){return String.fromCharCode(parseInt(t,10))})),f&&t.comma&&-1<f.indexOf(",")&&(f=f.split(",")),m.call(o,s)?o[s]=y.combine(o[s],f):o[s]=f}return o}(e,r):e,n=r.plainObjects?Object.create(null):{},i=Object.keys(o),a=0;a<i.length;++a){var l=i[a],c=s(l,o[l],r);n=y.merge(n,c,r)}return y.compact(n)}},{"./utils":5}],4:[function(e,t,r){"use strict";var O=e("./utils"),p=e("./formats"),d=Object.prototype.hasOwnProperty,y={brackets:function(e){return e+"[]"},comma:"comma",indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},j=Array.isArray,o=Array.prototype.push,w=function(e,t){o.apply(e,j(t)?t:[t])},n=Date.prototype.toISOString,x={addQueryPrefix:!1,allowDots:!1,charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encoder:O.encode,encodeValuesOnly:!1,formatter:p.formatters[p.default],indices:!1,serializeDate:function(e){return n.call(e)},skipNulls:!1,strictNullHandling:!1},m=function e(t,r,o,n,i,a,l,c,s,f,u,p,d){var y=t;if("function"==typeof l?y=l(r,y):y instanceof Date?y=f(y):"comma"===o&&j(y)&&(y=y.join(",")),null===y){if(n)return a&&!p?a(r,x.encoder,d):r;y=""}if("string"==typeof y||"number"==typeof y||"boolean"==typeof y||O.isBuffer(y))return a?[u(p?r:a(r,x.encoder,d))+"="+u(a(y,x.encoder,d))]:[u(r)+"="+u(String(y))];var m,h=[];if(void 0===y)return h;if(j(l))m=l;else{var b=Object.keys(y);m=c?b.sort(c):b}for(var g=0;g<m.length;++g){var v=m[g];i&&null===y[v]||(j(y)?w(h,e(y[v],"function"==typeof o?o(r,v):r,o,n,i,a,l,c,s,f,u,p,d)):w(h,e(y[v],r+(s?"."+v:"["+v+"]"),o,n,i,a,l,c,s,f,u,p,d)))}return h};t.exports=function(e,t){var r,o=e,n=function(e){if(!e)return x;if(null!==e.encoder&&void 0!==e.encoder&&"function"!=typeof e.encoder)throw new TypeError("Encoder has to be a function.");var t=e.charset||x.charset;if(void 0!==e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var r=p.default;if(void 0!==e.format){if(!d.call(p.formatters,e.format))throw new TypeError("Unknown format option provided.");r=e.format}var o=p.formatters[r],n=x.filter;return("function"==typeof e.filter||j(e.filter))&&(n=e.filter),{addQueryPrefix:"boolean"==typeof e.addQueryPrefix?e.addQueryPrefix:x.addQueryPrefix,allowDots:void 0===e.allowDots?x.allowDots:!!e.allowDots,charset:t,charsetSentinel:"boolean"==typeof e.charsetSentinel?e.charsetSentinel:x.charsetSentinel,delimiter:void 0===e.delimiter?x.delimiter:e.delimiter,encode:"boolean"==typeof e.encode?e.encode:x.encode,encoder:"function"==typeof e.encoder?e.encoder:x.encoder,encodeValuesOnly:"boolean"==typeof e.encodeValuesOnly?e.encodeValuesOnly:x.encodeValuesOnly,filter:n,formatter:o,serializeDate:"function"==typeof e.serializeDate?e.serializeDate:x.serializeDate,skipNulls:"boolean"==typeof e.skipNulls?e.skipNulls:x.skipNulls,sort:"function"==typeof e.sort?e.sort:null,strictNullHandling:"boolean"==typeof e.strictNullHandling?e.strictNullHandling:x.strictNullHandling}}(t);"function"==typeof n.filter?o=(0,n.filter)("",o):j(n.filter)&&(r=n.filter);var i,a=[];if("object"!=typeof o||null===o)return"";i=t&&t.arrayFormat in y?t.arrayFormat:t&&"indices"in t?t.indices?"indices":"repeat":"indices";var l=y[i];r||(r=Object.keys(o)),n.sort&&r.sort(n.sort);for(var c=0;c<r.length;++c){var s=r[c];n.skipNulls&&null===o[s]||w(a,m(o[s],s,l,n.strictNullHandling,n.skipNulls,n.encode?n.encoder:null,n.filter,n.sort,n.allowDots,n.serializeDate,n.formatter,n.encodeValuesOnly,n.charset))}var f=a.join(n.delimiter),u=!0===n.addQueryPrefix?"?":"";return n.charsetSentinel&&("iso-8859-1"===n.charset?u+="utf8=%26%2310003%3B&":u+="utf8=%E2%9C%93&"),0<f.length?u+f:""}},{"./formats":1,"./utils":5}],5:[function(e,t,r){"use strict";var l=Object.prototype.hasOwnProperty,f=Array.isArray,c=function(){for(var e=[],t=0;t<256;++t)e.push("%"+((t<16?"0":"")+t.toString(16)).toUpperCase());return e}(),s=function(e,t){for(var r=t&&t.plainObjects?Object.create(null):{},o=0;o<e.length;++o)void 0!==e[o]&&(r[o]=e[o]);return r};t.exports={arrayToObject:s,assign:function(e,r){return Object.keys(r).reduce(function(e,t){return e[t]=r[t],e},e)},combine:function(e,t){return[].concat(e,t)},compact:function(e){for(var t=[{obj:{o:e},prop:"o"}],r=[],o=0;o<t.length;++o)for(var n=t[o],i=n.obj[n.prop],a=Object.keys(i),l=0;l<a.length;++l){var c=a[l],s=i[c];"object"==typeof s&&null!==s&&-1===r.indexOf(s)&&(t.push({obj:i,prop:c}),r.push(s))}return function(e){for(;1<e.length;){var t=e.pop(),r=t.obj[t.prop];if(f(r)){for(var o=[],n=0;n<r.length;++n)void 0!==r[n]&&o.push(r[n]);t.obj[t.prop]=o}}}(t),e},decode:function(e,t,r){var o=e.replace(/\+/g," ");if("iso-8859-1"===r)return o.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(o)}catch(e){return o}},encode:function(e,t,r){if(0===e.length)return e;var o="string"==typeof e?e:String(e);if("iso-8859-1"===r)return escape(o).replace(/%u[0-9a-f]{4}/gi,function(e){return"%26%23"+parseInt(e.slice(2),16)+"%3B"});for(var n="",i=0;i<o.length;++i){var a=o.charCodeAt(i);45===a||46===a||95===a||126===a||48<=a&&a<=57||65<=a&&a<=90||97<=a&&a<=122?n+=o.charAt(i):a<128?n+=c[a]:a<2048?n+=c[192|a>>6]+c[128|63&a]:a<55296||57344<=a?n+=c[224|a>>12]+c[128|a>>6&63]+c[128|63&a]:(i+=1,a=65536+((1023&a)<<10|1023&o.charCodeAt(i)),n+=c[240|a>>18]+c[128|a>>12&63]+c[128|a>>6&63]+c[128|63&a])}return n},isBuffer:function(e){return!(!e||"object"!=typeof e||!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e)))},isRegExp:function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},merge:function o(n,i,a){if(!i)return n;if("object"!=typeof i){if(f(n))n.push(i);else{if(!n||"object"!=typeof n)return[n,i];(a&&(a.plainObjects||a.allowPrototypes)||!l.call(Object.prototype,i))&&(n[i]=!0)}return n}if(!n||"object"!=typeof n)return[n].concat(i);var e=n;return f(n)&&!f(i)&&(e=s(n,a)),f(n)&&f(i)?(i.forEach(function(e,t){if(l.call(n,t)){var r=n[t];r&&"object"==typeof r&&e&&"object"==typeof e?n[t]=o(r,e,a):n.push(e)}else n[t]=e}),n):Object.keys(i).reduce(function(e,t){var r=i[t];return l.call(e,t)?e[t]=o(e[t],r,a):e[t]=r,e},e)}}},{}]},{},[2])(2)});
document.write('<script language=\'javascript\' src=\'http:\/\/res.wx.qq.com\/open\/js\/jweixin-1.0.0.js\' ><\/script>');
Vue.prototype.Nospaces = function (data){
    if(data !== null){
        data = data.replace(/\s*/g,"");  //所有空格
        data = data.replace(/^\s*|\s*$/g,""); //首尾空格
        return data;
    }
};
Vue.prototype.formatWord = function (val) {
    if(!val){
        return val
    }
    return val.replace(/\n/g, '<br>')
};
let ApiUrl = 'http://' + window.location.host + '/mobile';
let RealApiUrl = 'http://' + "mytool.xyz:8080" + '/api';
let WapSiteUrl = 'http://' + window.location.host + '/wap';
let WeiXinOauth = true;
let share_config = {};

function formatDate(date, fmt) {
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
    }
    let o = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds()
    }
    for (let k in o) {
        if (new RegExp(`(${k})`).test(fmt)) {
            let str = o[k] + ''
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str))
        }
    }
    return fmt
}

function padLeftZero(str) {
    return ('00' + str).substr(str.length)
}

function getCookie(e) {
    let t = document.cookie;
    let a = t.split('; ');
    let n=0,len=a.length;
    for (; n < len; n++) {
        const r = a[n].split('=');
        if (r[0] === e) return unescape(r[1])
    }
    return null
}
function getQueryString(e) {
    let t = new RegExp('(^|&)' + e + '=([^&]*)(&|$)');
    let a = window.location.search.substr(1).match(t);
    if (a != null) return a[2];
    return ''
}

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded'

function vFetch(param) {
    let data={url: param.url,method:param.method}
    if(param.method==="get"){
        data["params"]=param.data
    }
    if(param.method==="post"){
        data["data"]=Qs.stringify(param.data)
    }
        axios(data).then(function (result) {
            param.complete&&param.complete()
            let data=result.data
            param.success&&param.success(data.data)
        })
          .catch(function (error) {
              param.complete&&param.complete()
              param.error&&param.error(error)
          });
}

let v_key =  getCookie("key")
//微信是否开启
vFetch({
    method: 'post',
    url: RealApiUrl + '/index.php?act=check_weixin',
    data: {ref: encodeURIComponent(window.location.href)},
    success: function(result) {
        if (result == 1) {
            WeiXinOauth = true;
        }else{
            WeiXinOauth = false;
        }
    }
});


if (WeiXinOauth) {
    let ua = window.navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == 'micromessenger') {
        let noauto = getQueryString('noauto');
        if (v_key == null && (noauto == 0 || noauto == '')) {
            window.location.href = RealApiUrl + '/index.php?act=getauthinfo&op=login&ref=' + encodeURIComponent(window.location.href);
        }
    }
    vFetch({
        method: 'post',
        url: RealApiUrl + '/index.php?act=check_weixin&op=weixin_jssdk',
        data: {
            ref: encodeURIComponent(window.location.href),
            // share_image:param.share_image,
            // share_titel:param.share_titel,
            // share_desc:param.share_desc
        },
        success: function(result) {
            if (result) {
                share_config = {
                    appId: result.appId,
                    timestamp: result.timestamp,
                    nonceStr: result.noncestr,
                    url: result.url,
                    signature: result.signature,
                    title: result.title,
                    desc: result.desc,
                    img_url: result.img_url,
                    link: result.link,
                };

                if (share_config.appId) {
                    wx.config({
                        appId: share_config.appId,
                        timestamp: share_config.timestamp,
                        nonceStr: share_config.nonceStr,
                        signature: share_config.signature,
                        jsApiList: [
                            'onMenuShareTimeline',
                            'onMenuShareAppMessage', 'onMenuShareQQ',
                            'onMenuShareWeibo', 'startRecord', 'stopRecord',
                            'onVoiceRecordEnd', 'playVoice', 'pauseVoice', 'stopVoice',
                            'onVoicePlayEnd', 'uploadVoice', 'downloadVoice', 'chooseImage',
                            'previewImage', 'uploadImage', 'downloadImage',
                            'translateVoice', 'getNetworkType', 'openLocation',
                            'getLocation', 'hideOptionMenu', 'showOptionMenu',
                            'hideMenuItems', 'showMenuItems', 'hideAllNonBaseMenuItem',
                            'showAllNonBaseMenuItem', 'closeWindow',
                            'scanQRCode']
                    });
                    wx.ready(function() {
                        weixin_share(share_config);
                    });
                }
            }
        }
    });
}

function weixin_share(share) {
	(typeof(share.link) == 'undefined' || !share.link) && (share.link = window.location.href);
	(typeof(share.title) == 'undefined' || !share.title) && (share.title = document.title);
	(typeof(share.desc) == 'undefined' || !share.desc) && (share.desc = share.title);
	var appmessage_share = {
		imgUrl: share.img_url,
		link: share.link,
		title: share.title,
		desc: share.desc,
		success: function() {

		}
	}

	var timeline_share = {
		imgUrl: share.img_url,
		link: share.link,
		title: share.title,
		desc: share.desc,
		success: function() {

		}
	}

	wx.onMenuShareAppMessage(appmessage_share);
	wx.onMenuShareTimeline(timeline_share);
}

if (v_key) {
    vFetch({
        method: 'get',
        url: ApiUrl + '/index.php?act=distributor&op=deal_distributor&key='+v_key+'&ref=' + encodeURIComponent(window.location.href),
        success: function(e) { //不返回结果
            if(e.complete == 0 && typeof(go_complate) == 'undefined'){
                window.location.href = WapSiteUrl + '/tmpl/member/complete.html?ref=' + encodeURIComponent(window.location.href);
            }
        }
    });
}

























!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("htm")):"function"==typeof define&&define.amd?define(["exports","htm"],t):t((e=e||self).vanillaNavi={},e.htm)}(this,function(e,t){"use strict";function i(e){return 0<Object.prototype.toString.call(e).indexOf("lement")}var a=(t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t).bind(function(e,t){for(var r=[],n=2;n<arguments.length;n++)r[n-2]=arguments[n];return{__token:!0,tag:e,props:t||{},children:r,key:t&&t.key||null}});e.default=function(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];var n=a.apply(void 0,function(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;var n=Array(e),o=0;for(t=0;t<r;t++)for(var f=arguments[t],i=0,a=f.length;i<a;i++,o++)n[o]=f[i];return n}([e],t)),o={__tree:!0};function f(r){if(i(r))return r;var n=document.createElement(r.tag);return Object.keys(r.props).forEach(function(e){var t=r.props[e];"style"===e&&"object"==typeof t?Object.keys(t).forEach(function(e){n.style[e]=t[e]}):"function"==typeof t||"object"==typeof t?n[e]=t:"ref"===e?o[t]=n:n.setAttribute(e,t)}),r.children.forEach(function(e){if("[object Array]"===Object.prototype.toString.call(e))e.forEach(function(e){var t=f(e);t&&n.appendChild(t)});else if(i(e))n.appendChild(e);else if("string"==typeof e||"boolean"==typeof e||"number"==typeof e)n.textContent=e;else{var t=f(e);t&&n.appendChild(t)}}),n}return"[object Array]"!==Object.prototype.toString.call(n)?f(n):n.forEach(function(e){f(e)}),o},e.htmlParser=a,e.isElement=i,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=index.js.map
var o=Object.defineProperty;var f=t=>o(t,"__esModule",{value:!0});var l=(t,n)=>{f(t);for(var e in n)o(t,e,{get:n[e],enumerable:!0})};l(exports,{html:()=>m,templateFn:()=>u});var u=function(...t){if(t.length>1){let[n,...e]=t,r="";return n.forEach((c,i)=>{r+=c,e[i]&&(r+=e[i])}),r}return typeof t[0]=="string"?t[0]:t[0]?t[0].join(""):""};function m(...t){let n=document.createElement("template");return n.innerHTML=u(...t),n.content.firstElementChild}
//# sourceMappingURL=index.js.map

!function(e){var n={};function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=n,o.d=function(e,n,t){o.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:t})},o.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(n,"a",n),n},o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},o.p="",o(o.s=0)}([function(e,n,o){o(1),e.exports=o(3)},function(e,n,o){"use strict";console.log("ready!");var t=o.p;t={filename:"public/images/spriteXHR.svg"},o(2)(t)},function(e,n){e.exports=function(e){var n=!1,o=void 0;if(e&&e.filename&&(n=e.filename),!n)return!1;var t,r=new XMLHttpRequest;"undefined"!=typeof XDomainRequest&&(r=new XDomainRequest),void 0===o&&(o=void 0!==window.baseUrl?window.baseUrl:window.location.protocol+"//"+window.location.hostname+(window.location.port?":"+window.location.port:"")),t=(o+"/"+n).replace(/([^:]\/)\/+/g,"$1"),r.open("GET",t,!0),r.onprogress=function(){},r.onload=function(){if(!r.responseText||"<svg"!==r.responseText.substr(0,4))throw Error("Invalid SVG Response");if(!(r.status<200||r.status>=300)){var e=document.createElement("div");e.innerHTML=r.responseText,function(e){"complete"===document.readyState||"loading"!==document.readyState&&!document.documentElement.doScroll?e():document.addEventListener("DOMContentLoaded",e)}(function(){document.body.insertBefore(e,document.body.childNodes[0])})}},r.send()}},function(e,n){}]);
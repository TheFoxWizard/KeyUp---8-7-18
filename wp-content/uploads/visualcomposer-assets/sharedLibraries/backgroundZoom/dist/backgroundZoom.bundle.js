(function(e){var t={};function r(o){if(t[o]){return t[o].exports}var n=t[o]={i:o,l:false,exports:{}};e[o].call(n.exports,n,n.exports,r);n.l=true;return n.exports}r.m=e;r.c=t;r.d=function(e,t,o){if(!r.o(e,t)){Object.defineProperty(e,t,{configurable:false,enumerable:true,get:o})}};r.r=function(e){Object.defineProperty(e,"__esModule",{value:true})};r.n=function(e){var t=e&&e.__esModule?function t(){return e["default"]}:function t(){return e};r.d(t,"a",t);return t};r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)};r.p=".";return r(r.s=0)})({"./src/backgroundZoom.css":function(e,t){},"./src/backgroundZoom.js":function(e,t,r){"use strict";window.vcv.on("ready",function(e,t){if(e!=="merge"){var r=t?'[data-vcv-element="'+t+'"] [data-vce-assets-zoom]':"[data-vce-assets-zoom]";if(r){var o=document.querySelectorAll(r);o=[].slice.call(o);o.forEach(function(e){var t=e.dataset.vceAssetsZoomScale;var r=e.dataset.vceAssetsZoomDuration;var o="transform: scale("+t+"); transition: transform "+r+"s linear;";var n=e.vcvWaypoints;if(n){n.destroy();e.setAttribute("style","")}var s=new window.Waypoint({element:e,handler:function t(r,n,a,c,u){e.setAttribute("style",o);s.destroy()},offset:"85%"});e.vcvWaypoints=s})}}})},0:function(e,t,r){r("./src/backgroundZoom.js");e.exports=r("./src/backgroundZoom.css")}});
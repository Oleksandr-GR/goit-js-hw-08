!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var n=document.querySelector("iframe"),o=new Vimeo.Player(n),i='"videoplayer-current-time"',r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var u="Expected a function",f=/^\s+|\s+$/g,c=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,l=/^0o[0-7]+$/i,d=parseInt,s="object"==typeof e&&e&&e.Object===Object&&e,v="object"==typeof self&&self&&self.Object===Object&&self,m=s||v||Function("return this")(),p=Object.prototype.toString,y=Math.max,b=Math.min,g=function(){return m.Date.now()};function h(e,t,n){var o,i,r,f,c,a,l=0,d=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError(u);function m(t){var n=o,r=i;return o=i=void 0,l=t,f=e.apply(r,n)}function p(e){return l=e,c=setTimeout(w,t),d?m(e):f}function h(e){var n=e-a;return void 0===a||n>=t||n<0||s&&e-l>=r}function w(){var e=g();if(h(e))return O(e);c=setTimeout(w,function(e){var n=t-(e-a);return s?b(n,r-(e-l)):n}(e))}function O(e){return c=void 0,v&&o?m(e):(o=i=void 0,f)}function S(){var e=g(),n=h(e);if(o=arguments,i=this,a=e,n){if(void 0===c)return p(a);if(s)return c=setTimeout(w,t),m(a)}return void 0===c&&(c=setTimeout(w,t)),f}return t=T(t)||0,j(n)&&(d=!!n.leading,r=(s="maxWait"in n)?y(T(n.maxWait)||0,t):r,v="trailing"in n?!!n.trailing:v),S.cancel=function(){void 0!==c&&clearTimeout(c),l=0,o=a=i=c=void 0},S.flush=function(){return void 0===c?f:O(g())},S}function j(e){var n=void 0===e?"undefined":t(r)(e);return!!e&&("object"==n||"function"==n)}function T(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(r)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==p.call(e)}(e))return NaN;if(j(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=j(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(f,"");var o=a.test(e);return o||l.test(e)?d(e.slice(2),o?2:8):c.test(e)?NaN:+e}o.on("timeupdate",_.throttle((function(){o.getCurrentTime().then((function(e){console.log(e),localStorage.setItem(i,e)}))}),1e3));var w=localStorage.getItem(i);console.log(w);var O;o.on("play",(O=w,void o.setCurrentTime(O).then((function(e){})).catch((function(e){e.name}))))}();
//# sourceMappingURL=02-video.16668372.js.map

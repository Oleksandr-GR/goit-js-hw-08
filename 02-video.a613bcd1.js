var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};const e=document.querySelector("iframe"),n=new Vimeo.Player(e);var o=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,u=/^0o[0-7]+$/i,f=parseInt,c="object"==typeof t&&t&&t.Object===Object&&t,a="object"==typeof self&&self&&self.Object===Object&&self,l=c||a||Function("return this")(),s=Object.prototype.toString,d=Math.max,v=Math.min,p=function(){return l.Date.now()};function m(t,e,n){var o,i,r,u,f,c,a=0,l=!1,s=!1,m=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function g(e){var n=o,r=i;return o=i=void 0,a=e,u=t.apply(r,n)}function h(t){return a=t,f=setTimeout(T,e),l?g(t):u}function j(t){var n=t-c;return void 0===c||n>=e||n<0||s&&t-a>=r}function T(){var t=p();if(j(t))return w(t);f=setTimeout(T,function(t){var n=e-(t-c);return s?v(n,r-(t-a)):n}(t))}function w(t){return f=void 0,m&&o?g(t):(o=i=void 0,u)}function O(){var t=p(),n=j(t);if(o=arguments,i=this,c=t,n){if(void 0===f)return h(c);if(s)return f=setTimeout(T,e),g(c)}return void 0===f&&(f=setTimeout(T,e)),u}return e=b(e)||0,y(n)&&(l=!!n.leading,r=(s="maxWait"in n)?d(b(n.maxWait)||0,e):r,m="trailing"in n?!!n.trailing:m),O.cancel=function(){void 0!==f&&clearTimeout(f),a=0,o=c=i=f=void 0},O.flush=function(){return void 0===f?u:w(p())},O}function y(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function b(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==s.call(t)}(t))return NaN;if(y(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=y(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var n=r.test(t);return n||u.test(t)?f(t.slice(2),n?2:8):i.test(t)?NaN:+t}n.on("timeupdate",_.throttle((function(){n.getCurrentTime().then((function(t){console.log(t),localStorage.setItem('"videoplayer-current-time"',t)}))}),1e3));const g=localStorage.getItem('"videoplayer-current-time"');console.log(g);var h;n.on("play",(h=g,void n.setCurrentTime(h).then((function(t){})).catch((function(t){t.name}))));
//# sourceMappingURL=02-video.a613bcd1.js.map
!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var n=document.querySelector("iframe"),i=new Vimeo.Player(n),o="videoplayer-current-time",r={},u={};Object.defineProperty(u,"__esModule",{value:!0}),u.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var f="Expected a function",a=/^\s+|\s+$/g,c=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,d=/^0o[0-7]+$/i,s=parseInt,v="object"==typeof e&&e&&e.Object===Object&&e,p="object"==typeof self&&self&&self.Object===Object&&self,y=v||p||Function("return this")(),m=Object.prototype.toString,g=Math.max,b=Math.min,h=function(){return y.Date.now()};function j(e,t,n){var i,o,r,u,a,c,l=0,d=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError(f);function p(t){var n=i,r=o;return i=o=void 0,l=t,u=e.apply(r,n)}function y(e){return l=e,a=setTimeout(j,t),d?p(e):u}function m(e){var n=e-c;return void 0===c||n>=t||n<0||s&&e-l>=r}function j(){var e=h();if(m(e))return O(e);a=setTimeout(j,function(e){var n=t-(e-c);return s?b(n,r-(e-l)):n}(e))}function O(e){return a=void 0,v&&i?p(e):(i=o=void 0,u)}function x(){var e=h(),n=m(e);if(i=arguments,o=this,c=e,n){if(void 0===a)return y(c);if(s)return a=setTimeout(j,t),p(c)}return void 0===a&&(a=setTimeout(j,t)),u}return t=w(t)||0,T(n)&&(d=!!n.leading,r=(s="maxWait"in n)?g(w(n.maxWait)||0,t):r,v="trailing"in n?!!n.trailing:v),x.cancel=function(){void 0!==a&&clearTimeout(a),l=0,i=c=o=a=void 0},x.flush=function(){return void 0===a?u:O(h())},x}function T(e){var n=void 0===e?"undefined":t(u)(e);return!!e&&("object"==n||"function"==n)}function w(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(u)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==m.call(e)}(e))return NaN;if(T(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=T(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(a,"");var i=l.test(e);return i||d.test(e)?s(e.slice(2),i?2:8):c.test(e)?NaN:+e}r=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError(f);return T(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),j(e,t,{leading:i,maxWait:t,trailing:o})};i.on("timeupdate",r((function(){i.getCurrentTime().then((function(e){console.log(e),localStorage.setItem(o,e)}))}),1e3));var O=localStorage.getItem(o);console.log(O);var x;i.on("play",(x=O,void i.setCurrentTime(x).then((function(e){})).catch((function(e){e.name}))))}();
//# sourceMappingURL=02-video.ff1d7246.js.map

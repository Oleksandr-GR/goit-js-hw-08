!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var n={};Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,l="object"==typeof e&&e&&e.Object===Object&&e,c="object"==typeof self&&self&&self.Object===Object&&self,s=l||c||Function("return this")(),d=Object.prototype.toString,v=Math.max,m=Math.min,g=function(){return s.Date.now()};function b(e,t,n){var r,i,u,a,f,l,c=0,s=!1,d=!1,b=!0;if("function"!=typeof e)throw new TypeError(o);function j(t){var n=r,o=i;return r=i=void 0,c=t,a=e.apply(o,n)}function O(e){return c=e,f=setTimeout(T,t),s?j(e):a}function S(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=u}function T(){var e=g();if(S(e))return h(e);f=setTimeout(T,function(e){var n=t-(e-l);return d?m(n,u-(e-c)):n}(e))}function h(e){return f=void 0,b&&r?j(e):(r=i=void 0,a)}function w(){var e=g(),n=S(e);if(r=arguments,i=this,l=e,n){if(void 0===f)return O(l);if(d)return f=setTimeout(T,t),j(l)}return void 0===f&&(f=setTimeout(T,t)),a}return t=y(t)||0,p(n)&&(s=!!n.leading,u=(d="maxWait"in n)?v(y(n.maxWait)||0,t):u,b="trailing"in n?!!n.trailing:b),w.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=l=i=f=void 0},w.flush=function(){return void 0===f?a:h(g())},w}function p(e){var o=void 0===e?"undefined":t(n)(e);return!!e&&("object"==o||"function"==o)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(n)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==d.call(e)}(e))return NaN;if(p(e)){var o="function"==typeof e.valueOf?e.valueOf():e;e=p(o)?o+"":o}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var l=u.test(e);return l||a.test(e)?f(e.slice(2),l?2:8):i.test(e)?NaN:+e}var j,O=document.querySelector(".feedback-form"),S={},T="feedback-form-state";O.addEventListener("submit",(function(e){e.preventDefault(),e.currentTarget.reset(),localStorage.removeItem(T)})),O.addEventListener("input",(function(e){S[e.target.name]=e.target.value,localStorage.setItem(T,JSON.stringify(S)),console.log(S)})),j=JSON.parse(localStorage.getItem(T)),O.email.value=j.email,O.message.textContent=j.message,console.log(j.email),console.log(j.message),console.log(O.email.value),console.log(O.message.textContent),console.log(O)}();
//# sourceMappingURL=03-feedback.6ae50541.js.map

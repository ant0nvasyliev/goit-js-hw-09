function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},i=n.parcelRequired7c6;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var i={id:e,exports:{}};return t[e]=i,n.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){o[e]=n},n.parcelRequired7c6=i);var r=i("7Y9D8");function u(e,n){const t=Math.random()>.3;return new Promise(((o,i)=>{setTimeout((()=>{t?o({position:e,delay:n}):i({position:e,delay:n})}),n)}))}document.querySelector(".form").addEventListener("submit",(function(n){n.preventDefault();const t=document.querySelector('input[name="delay"]'),o=document.querySelector('input[name="step"]'),i=document.querySelector('input[name="amount"]'),l=Number(t.value),a=Number(o.value),d=Number(i.value);isNaN(l)||isNaN(a)||isNaN(d)||function(n,t,o){for(let i=0;i<o;i++)u(i+1,n+i*t).then((({position:n,delay:t})=>{e(r).Notify.success(`✅ Fulfilled promise ${n} in ${t}ms`)})).catch((({position:n,delay:t})=>{e(r).Notify.failure(`❌ Rejected promise ${n} in ${t}ms`)}))}(l,a,d)}));
//# sourceMappingURL=03-promises.933713f3.js.map

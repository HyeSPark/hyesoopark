(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{648:function(e,t,n){Promise.resolve().then(n.bind(n,8914)),Promise.resolve().then(n.bind(n,7366)),Promise.resolve().then(n.bind(n,7374)),Promise.resolve().then(n.bind(n,116)),Promise.resolve().then(n.bind(n,6097)),Promise.resolve().then(n.t.bind(n,5499,23))},116:function(e,t,n){"use strict";n.r(t),n.d(t,{Analytics:function(){return d}});var r=n(5),o=n(8310),l=()=>{window.va||(window.va=function(...e){(window.vaq=window.vaq||[]).push(e)})};function s(){return"undefined"!=typeof window}function a(){return"production"}function i(){return"development"===function(){let e=s()?window.vam:a();return e||"production"}()}function c({beforeSend:e,debug:t=!0,mode:n="auto"}){return(0,o.useEffect)(()=>{!function(e={debug:!0}){var t;if(!s())return;(function(e="auto"){if("auto"===e){window.vam=a();return}window.vam=e})(e.mode),l(),e.beforeSend&&(null==(t=window.va)||t.call(window,"beforeSend",e.beforeSend));let n=i()?"https://va.vercel-scripts.com/v1/script.debug.js":"/_vercel/insights/script.js";if(document.head.querySelector(`script[src*="${n}"]`))return;let r=document.createElement("script");r.src=n,r.defer=!0,r.setAttribute("data-sdkn","@vercel/analytics"),r.setAttribute("data-sdkv","1.1.0"),r.onerror=()=>{let e=i()?"Please check if any ad blockers are enabled and try again.":"Be sure to enable Web Analytics for your project and deploy again. See https://vercel.com/docs/analytics/quickstart for more information.";console.log(`[Vercel Web Analytics] Failed to load script from ${n}. ${e}`)},i()&&!1===e.debug&&r.setAttribute("data-debug","false"),document.head.appendChild(r)}({beforeSend:e,debug:t,mode:n})},[e,t,n]),null}function d(){return(0,r.jsx)(c,{})}},6097:function(e,t,n){"use strict";n.r(t);var r=n(5);n(8310);let o=()=>(0,r.jsxs)("footer",{className:"border-t border-gray-300 p-6 md:p-12 mt-16",children:[(0,r.jsx)("div",{className:"text-main_color text-2xl font-bold mb-4",children:"Contact"}),(0,r.jsxs)("div",{className:"flex flex-col md:flex-row justify-between",children:[(0,r.jsxs)("ul",{className:"flex justify-between md:justify-start md:space-x-10 mb-4 md:mb-0",children:[(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"https://www.linkedin.com/in/hye-soo-park-785844242/",target:"_blank",className:"text-lg font-bold",children:"LinkedIn"})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"mailto:hyehye@kaist.ac.kr",className:"text-lg font-bold",children:"Email"})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"https://twitter.com/HyeSPark07?s=20&t=HhxT7YxGlyINJPoDcDRSbw",target:"_blank",className:"text-lg font-bold",children:"Twitter"})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"/data/CV.pdf",target:"_blank",className:"text-lg font-bold",children:"CV"})})]}),(0,r.jsx)("span",{className:"text-gray-500 text-sm md:text-right",children:"\xa9 2024. Hye Soo Park all rights reserved."})]})]});t.default=o},7374:function(e,t,n){"use strict";n.r(t),n.d(t,{menuNameContext:function(){return l}});var r=n(5),o=n(8310);let l=(0,o.createContext)({menuName:"",setMenuName:()=>{}}),s=()=>{let[e,t]=(0,o.useState)(!1),[n,l]=(0,o.useState)(0),[s,a]=(0,o.useState)(!1),i=["../projects","../publications","../about"],c=()=>{e||d()},d=()=>{let e=document.documentElement.scrollTop;if(5>=Math.abs(n-e))return;let t=document.querySelector("header");t&&(e>n&&e>84?a(!0):e+window.innerHeight<document.documentElement.scrollHeight&&a(!1)),l(e)};return(0,o.useEffect)(()=>(window.addEventListener("scroll",c),0===n&&a(!1),()=>{window.removeEventListener("scroll",c)}),[n,e]),(0,o.useEffect)(()=>{e?document.body.classList.add("overflow-y-hidden"):document.body.classList.remove("overflow-y-hidden")},[e]),(0,r.jsxs)("header",{className:"fixed md:sticky top-0 left-0 right-0 bg-white p-4 md:px-8 md:py-3 flex justify-between items-center transition duration-300 ".concat(s?"-translate-y-full":""),children:[(0,r.jsx)("a",{className:"logo flex items-center p-4",href:"../",children:(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsx)("img",{src:"/logo.png",width:"32px",alt:"Logo"}),(0,r.jsx)("div",{className:"text-2xl font-semibold pl-3",children:"Hye Soo Park"})]})}),(0,r.jsxs)("nav",{children:[(0,r.jsx)("div",{className:"menu btn2 md:hidden ".concat(e?"open":""),onClick:()=>t(!e),children:(0,r.jsx)("div",{className:"icon"})}),(0,r.jsx)("ul",{className:"menu_list ".concat(e?"fixed top-0 left-0 w-full h-full bg-white bg-opacity-80 backdrop-blur-lg pt-40 transition-transform duration-500":"fixed transform translate-x-full visibility-hidden"," md:flex md:relative md:bg-transparent md:w-auto md:h-auto md:backdrop-blur-none md:pt-0 md:transform-none md:transition-none md:ml-8"),children:["Projects","Publications","About"].map((e,t)=>(0,r.jsx)("li",{className:"m-8 md:mr-6",children:(0,r.jsx)("a",{href:i[t],className:"text-default_color text-xl md:text-lg font-semibold md:py-6 py-4 transition-colors duration-200 md:hover:text-main_color",children:e})},t))})]})]})};t.default=s},7366:function(e,t,n){"use strict";n.r(t),n.d(t,{ThemeProvider:function(){return y}});var r=n(5),o=n(8310);let l=["light","dark"],s="(prefers-color-scheme: dark)",a="undefined"==typeof window,i=(0,o.createContext)(void 0),c=e=>(0,o.useContext)(i)?o.createElement(o.Fragment,null,e.children):o.createElement(m,e),d=["light","dark"],m=({forcedTheme:e,disableTransitionOnChange:t=!1,enableSystem:n=!0,enableColorScheme:r=!0,storageKey:a="theme",themes:c=d,defaultTheme:m=n?"system":"light",attribute:y="data-theme",value:p,children:v,nonce:x})=>{let[w,g]=(0,o.useState)(()=>f(a,m)),[_,k]=(0,o.useState)(()=>f(a)),j=p?Object.values(p):c,S=(0,o.useCallback)(e=>{let o=e;if(!o)return;"system"===e&&n&&(o=b());let s=p?p[o]:o,a=t?h():null,i=document.documentElement;if("class"===y?(i.classList.remove(...j),s&&i.classList.add(s)):s?i.setAttribute(y,s):i.removeAttribute(y),r){let e=l.includes(m)?m:null,t=l.includes(o)?o:e;i.style.colorScheme=t}null==a||a()},[]),N=(0,o.useCallback)(e=>{g(e);try{localStorage.setItem(a,e)}catch(e){}},[e]),$=(0,o.useCallback)(t=>{let r=b(t);k(r),"system"===w&&n&&!e&&S("system")},[w,e]);(0,o.useEffect)(()=>{let e=window.matchMedia(s);return e.addListener($),$(e),()=>e.removeListener($)},[$]),(0,o.useEffect)(()=>{let e=e=>{e.key===a&&N(e.newValue||m)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[N]),(0,o.useEffect)(()=>{S(null!=e?e:w)},[e,w]);let E=(0,o.useMemo)(()=>({theme:w,setTheme:N,forcedTheme:e,resolvedTheme:"system"===w?_:w,themes:n?[...c,"system"]:c,systemTheme:n?_:void 0}),[w,N,e,_,n,c]);return o.createElement(i.Provider,{value:E},o.createElement(u,{forcedTheme:e,disableTransitionOnChange:t,enableSystem:n,enableColorScheme:r,storageKey:a,themes:c,defaultTheme:m,attribute:y,value:p,children:v,attrs:j,nonce:x}),v)},u=(0,o.memo)(({forcedTheme:e,storageKey:t,attribute:n,enableSystem:r,enableColorScheme:a,defaultTheme:i,value:c,attrs:d,nonce:m})=>{let u="system"===i,f="class"===n?`var d=document.documentElement,c=d.classList;c.remove(${d.map(e=>`'${e}'`).join(",")});`:`var d=document.documentElement,n='${n}',s='setAttribute';`,h=a?l.includes(i)&&i?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${i}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",b=(e,t=!1,r=!0)=>{let o=c?c[e]:e,s=t?e+"|| ''":`'${o}'`,i="";return a&&r&&!t&&l.includes(e)&&(i+=`d.style.colorScheme = '${e}';`),"class"===n?i+=t||o?`c.add(${s})`:"null":o&&(i+=`d[s](n,${s})`),i},y=e?`!function(){${f}${b(e)}}()`:r?`!function(){try{${f}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${u})){var t='${s}',m=window.matchMedia(t);if(m.media!==t||m.matches){${b("dark")}}else{${b("light")}}}else if(e){${c?`var x=${JSON.stringify(c)};`:""}${b(c?"x[e]":"e",!0)}}${u?"":"else{"+b(i,!1,!1)+"}"}${h}}catch(e){}}()`:`!function(){try{${f}var e=localStorage.getItem('${t}');if(e){${c?`var x=${JSON.stringify(c)};`:""}${b(c?"x[e]":"e",!0)}}else{${b(i,!1,!1)};}${h}}catch(t){}}();`;return o.createElement("script",{nonce:m,dangerouslySetInnerHTML:{__html:y}})},()=>!0),f=(e,t)=>{let n;if(!a){try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t}},h=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},b=e=>(e||(e=window.matchMedia(s)),e.matches?"dark":"light");function y(e){let{children:t,...n}=e;return(0,r.jsx)(c,{...n,children:t})}},8914:function(e,t,n){"use strict";n.r(t),t.default="aa4829c597e4"},5499:function(e){e.exports={style:{fontFamily:"'__Inter_cc7fef', '__Inter_Fallback_cc7fef'",fontStyle:"normal"},className:"__className_cc7fef"}},6440:function(e,t,n){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(8310),o=Symbol.for("react.element"),l=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function i(e,t,n){var r,i={},c=null,d=null;for(r in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)l.call(t,r)&&!a.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:o,type:e,key:c,ref:d,props:i,_owner:s.current}}t.jsx=i,t.jsxs=i},5:function(e,t,n){"use strict";e.exports=n(6440)}},function(e){e.O(0,[303,480,744],function(){return e(e.s=648)}),_N_E=e.O()}]);
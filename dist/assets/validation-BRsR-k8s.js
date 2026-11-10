import{c,j as t,b as d}from"./index-9H8CwVfm.js";/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=c("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);function f({label:e,htmlFor:a,error:r,hint:s,optional:n,children:i,className:l}){return t.jsxs("div",{className:d("w-full",l),children:[e&&t.jsxs("label",{htmlFor:a,className:"field-label",children:[e,n&&t.jsx("span",{className:"ml-2 normal-case tracking-normal text-sand/50",children:"(optional)"})]}),i,r?t.jsx("p",{id:`${a}-error`,role:"alert",className:"mt-2 text-[11px] text-[#e6a08a]",children:r}):s&&t.jsx("p",{id:`${a}-hint`,className:"mt-2 text-[11px] text-sand/50",children:s})]})}const m=/^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i,o=/^[+()\d\s.-]{7,20}$/;function p(e){return e.trim()?m.test(e.trim())?"":"Please enter a valid email address.":"Please enter your email address."}function h(e,a=!1){return e.trim()?o.test(e.trim())?"":"Please enter a valid phone number.":a?"Please enter your phone number.":""}function N(e,a){return!e||!e.trim()?`${a} is required.`:""}export{x as C,f as F,h as a,N as b,p as v};

import"../sb-preview/runtime.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const r of e.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function s(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function l(t){if(t.ep)return;t.ep=!0;const e=s(t);fetch(t.href,e)}})();const f="modulepreload",m=function(_){return"/svg-assets/"+_},d={},o=function(i,s,l){if(!s||s.length===0)return i();const t=document.getElementsByTagName("link");return Promise.all(s.map(e=>{if(e=m(e),e in d)return;d[e]=!0;const r=e.endsWith(".css"),u=r?'[rel="stylesheet"]':"";if(!!l)for(let c=t.length-1;c>=0;c--){const O=t[c];if(O.href===e&&(!r||O.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${u}`))return;const n=document.createElement("link");if(n.rel=r?"stylesheet":f,r||(n.as="script",n.crossOrigin=""),n.href=e,document.head.appendChild(n),r)return new Promise((c,O)=>{n.addEventListener("load",c),n.addEventListener("error",()=>O(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>i()).catch(e=>{const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=e,window.dispatchEvent(r),!r.defaultPrevented)throw e})},{createBrowserChannel:R}=__STORYBOOK_MODULE_CHANNELS__,{addons:p}=__STORYBOOK_MODULE_PREVIEW_API__,a=R({page:"preview"});p.setChannel(a);window.__STORYBOOK_ADDONS_CHANNEL__=a;window.CONFIG_TYPE==="DEVELOPMENT"&&(window.__STORYBOOK_SERVER_CHANNEL__=a);const w={"./src/gzmtr/station-icon/station-number.stories.tsx":async()=>o(()=>import("./station-number.stories-789279f4.js"),["assets/station-number.stories-789279f4.js","assets/jsx-runtime-6eef64cc.js","assets/index-c013ead5.js","assets/_commonjsHelpers-725317a4.js","assets/station-number.stories-6a50fc00.css"])};async function E(_){return w[_]()}E.__docgenInfo={description:"",methods:[],displayName:"importFn"};const{composeConfigs:P,PreviewWeb:T,ClientApi:S}=__STORYBOOK_MODULE_PREVIEW_API__,L=async()=>{const _=await Promise.all([o(()=>import("./config-e828a5a9.js"),["assets/config-e828a5a9.js","assets/index-c013ead5.js","assets/_commonjsHelpers-725317a4.js","assets/_getPrototype-dd8f0158.js","assets/index-356e4a49.js"]),o(()=>import("./preview-87eac49b.js"),["assets/preview-87eac49b.js","assets/index-d37d4223.js"]),o(()=>import("./preview-311e82f1.js"),[]),o(()=>import("./preview-bed967c6.js"),[]),o(()=>import("./preview-15309724.js"),["assets/preview-15309724.js","assets/index-356e4a49.js"]),o(()=>import("./preview-2059b184.js"),[]),o(()=>import("./preview-b8d6c68d.js"),["assets/preview-b8d6c68d.js","assets/index-356e4a49.js"]),o(()=>import("./preview-b3c37142.js"),[]),o(()=>import("./preview-5c6325c3.js"),["assets/preview-5c6325c3.js","assets/_commonjsHelpers-725317a4.js"]),o(()=>import("./preview-513ce61b.js"),["assets/preview-513ce61b.js","assets/jsx-runtime-6eef64cc.js","assets/index-c013ead5.js","assets/_commonjsHelpers-725317a4.js"])]);return P(_)};window.__STORYBOOK_PREVIEW__=window.__STORYBOOK_PREVIEW__||new T;window.__STORYBOOK_STORY_STORE__=window.__STORYBOOK_STORY_STORE__||window.__STORYBOOK_PREVIEW__.storyStore;window.__STORYBOOK_CLIENT_API__=window.__STORYBOOK_CLIENT_API__||new S({storyStore:window.__STORYBOOK_PREVIEW__.storyStore});window.__STORYBOOK_PREVIEW__.initialize({importFn:E,getProjectAnnotations:L});export{o as _};
//# sourceMappingURL=iframe-b4b25935.js.map

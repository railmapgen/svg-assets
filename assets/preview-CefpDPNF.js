const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/DocsRenderer-CFRXHY34-DMv7lx7n.js","assets/iframe-DOnjkE9J.js","assets/index-DEBVq0NN.js","assets/index-D2MAbzvX.js","assets/jsx-runtime-BjgbQsUx.js","assets/index-BIm0odtm.js","assets/index-D-8MO0q_.js","assets/index-CHGET4sZ.js","assets/index-DrFu-skq.js","assets/react-18-C7tk49OV.js"])))=>i.map(i=>d[i]);
import{_ as a}from"./iframe-DOnjkE9J.js";import"../sb-preview/runtime.js";var s=Object.entries(globalThis.TAGS_OPTIONS??{}).reduce((e,r)=>{let[t,o]=r;return o.excludeFromDocsStories&&(e[t]=!0),e},{}),d={docs:{renderer:async()=>{let{DocsRenderer:e}=await a(()=>import("./DocsRenderer-CFRXHY34-DMv7lx7n.js").then(r=>r.ak),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9]));return new e},stories:{filter:e=>{var r;return(e.tags||[]).filter(t=>s[t]).length===0&&!((r=e.parameters.docs)!=null&&r.disable)}}}};export{d as parameters};
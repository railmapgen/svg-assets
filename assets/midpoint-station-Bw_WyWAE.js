import{j as t}from"./jsx-runtime-Cf8x2fCZ.js";import{r as f}from"./index-Dh8cFXwY.js";const e=9,s=10*Math.PI/180,h=e*Math.sin(s),m=e*Math.cos(s),o=`M0,${e} A${e},${e} 0 0,0 ${h},-${m}`;function r(n){return t.jsxs("g",{...n,children:[t.jsx("circle",{cx:0,cy:0,r:9,stroke:"red",strokeWidth:2,fill:"none"}),t.jsx("path",{d:o,stroke:"red",strokeWidth:3,fill:"none"}),t.jsx("path",{d:o,stroke:"white",strokeWidth:1,strokeDasharray:"0 1.4 2.3 0",fill:"none"}),t.jsx("path",{d:"M-1,-9 l3.7,2.4 v-4.8z",fill:"red"})]})}r.__docgenInfo={description:"",methods:[],displayName:"MidpointIcon"};const p=f.forwardRef(function({clockwise:i,anchorAt:a="text",...l},c){const d=a==="circle"?29:0;return t.jsx("g",{ref:c,...l,children:t.jsxs("g",{transform:`translate(${d},0)`,children:[t.jsx(r,{transform:`translate(-30,0)scale(${i?-1:1},1)`}),t.jsxs("g",{textAnchor:"middle",fontWeight:"bold",fill:"red",transform:"translate(0,-2.5)",children:[t.jsx("text",{className:"rmg-name__zh",fontSize:12,style:{fontWeight:"bold"},children:"半环站"}),t.jsx("text",{className:"rmg-name__en",y:9,fontSize:4.5,style:{fontWeight:"bold"},children:"Midpoint Station"})]})]})})});p.__docgenInfo={description:"",methods:[],displayName:"MidpointStation",props:{clockwise:{required:!1,tsType:{name:"boolean"},description:""},anchorAt:{required:!1,tsType:{name:"union",raw:"'text' | 'circle'",elements:[{name:"literal",value:"'text'"},{name:"literal",value:"'circle'"}]},description:"",defaultValue:{value:"'text'",computed:!1}}}};export{p as M};

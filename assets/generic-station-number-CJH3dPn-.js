import{j as t}from"./jsx-runtime-BjgbQsUx.js";import{r as e}from"./index-DEBVq0NN.js";const d=1.3,m=18.5,R=m+d,b=m*2+d,T={updateId:0,update:()=>{}},H=e.createContext(T),a=15,G=e.forwardRef(function(x,f){const{Icon:h,lineNum:s,stnNum:n,strokeColour:N,passed:c,size:l,textClassName:i,children:B,...I}=x,{updateId:g}=e.useContext(H),o=e.useRef(null),r=e.useRef(null),[S,p]=e.useState({width:0}),[_,j]=e.useState({width:0});e.useEffect(()=>{o.current&&p(o.current.getBBox()),r.current&&j(r.current.getBBox())},[s,n,g]);const u=a/Math.max(a,S.width),C=(s==null?void 0:s.length)===2&&(n==null?void 0:n.length)===2?u:a/Math.max(a,_.width),E=l==="sm"?"0.7":l==="lg"?"1.4":1;return t.jsxs("g",{ref:f,...I,children:[t.jsxs("g",{transform:`scale(${E})`,children:[t.jsx(h,{stroke:c?"#aaa":N,filled:!s&&!n}),(s||n)&&t.jsxs("g",{textAnchor:"middle",fontSize:13.5,fill:c?"#aaa":"#000",children:[t.jsx("g",{transform:`translate(-9.25,0)scale(${u})`,children:t.jsx("text",{ref:o,className:i,dominantBaseline:"central",x:.5,children:s})}),t.jsx("g",{transform:`translate(9.25,0)scale(${C})`,children:t.jsx("text",{ref:r,className:i,dominantBaseline:"central",children:n})})]})]}),B]})});G.__docgenInfo={description:"",methods:[],displayName:"GenericStationNumber"};export{G,d as I,H as S,m as a,b,R as c};

import{j as e}from"./jsx-runtime-BZf_YgVj.js";import{r as n}from"./index-CEThVCg_.js";const r=15;function j(u){const{Icon:d,lineNum:t,stnNum:s,strokeColour:p,passed:i,size:l,textClassName:c,...x}=u,a=n.useRef(null),o=n.useRef(null),[f,h]=n.useState({width:0}),[g,N]=n.useState({width:0});n.useEffect(()=>{a.current&&h(a.current.getBBox()),o.current&&N(o.current.getBBox())},[t,s]);const m=r/Math.max(r,f.width),B=(t==null?void 0:t.length)===2&&(s==null?void 0:s.length)===2?m:r/Math.max(r,g.width),S=l==="sm"?"0.7":l==="lg"?"1.4":1;return e.jsx("g",{...x,children:e.jsxs("g",{transform:`scale(${S})`,children:[e.jsx(d,{stroke:i?"#aaa":p,filled:!t&&!s}),(t||s)&&e.jsxs("g",{textAnchor:"middle",fontSize:13.5,fill:i?"#aaa":"#000",children:[e.jsx("g",{transform:`translate(-9.25,0)scale(${m})`,children:e.jsx("text",{ref:a,className:c,dominantBaseline:"central",x:.5,children:t})}),e.jsx("g",{transform:`translate(9.25,0)scale(${B})`,children:e.jsx("text",{ref:o,className:c,dominantBaseline:"central",children:s})})]})]})})}j.__docgenInfo={description:"",methods:[],displayName:"GenericStationNumber",props:{Icon:{required:!0,tsType:{name:"ExoticComponent",elements:[{name:"StationIconProps"}],raw:"ExoticComponent<StationIconProps>"},description:""},lineNum:{required:!1,tsType:{name:"string"},description:""},stnNum:{required:!1,tsType:{name:"string"},description:""},strokeColour:{required:!0,tsType:{name:"string"},description:""},passed:{required:!1,tsType:{name:"boolean"},description:""},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:""},textClassName:{required:!1,tsType:{name:"string"},description:""}},composes:["SVGProps"]};export{j as G};

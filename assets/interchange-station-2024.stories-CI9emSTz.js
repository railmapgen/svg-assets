import{j as r}from"./jsx-runtime-BZf_YgVj.js";import{G as I}from"./generic-station-number-Da8hAHnS.js";import{I as c,a as m,S as i}from"./station-icon-D-77_eeU.js";/* empty css              */import"./index-CEThVCg_.js";const N=e=>{if(e<=0)return[];if(e===1)return[[0,0]];const o=Math.ceil(e/2),n=Array.from(Array(o).keys()).map(t=>(t-(o-1)/2)*(c+m)),s=c+m/2;return e&1?[[0,n[0]]].concat(...n.slice(1).map(t=>[[-s,t],[s,t]])):n.map(t=>[[-s,t],[s,t]]).flat()};function h({stations:e,textClassName:o}){const n=N(e.length);return r.jsxs("g",{children:[e.map(({Icon:s},t)=>r.jsx(s,{stroke:"#aaa",padding:4,filled:!0,asOutline:!0,transform:`translate(${n[t][0]},${n[t][1]})`},t)),e.map(({Icon:s},t)=>r.jsx(s,{stroke:"white",padding:1.1,filled:!0,asOutline:!0,transform:`translate(${n[t][0]},${n[t][1]})`},t)),e.length&&r.jsx("rect",{fill:"white",x:-12,y:n[0][1],width:24,height:-n[0][1]*2}),e.map((s,t)=>r.jsx(I,{transform:`translate(${n[t][0]},${n[t][1]})`,textClassName:o,...s},t))]})}h.__docgenInfo={description:"",methods:[],displayName:"InterchangeStation2024",props:{stations:{required:!0,tsType:{name:"Array",elements:[{name:"StationProps"}],raw:"StationProps[]"},description:""},textClassName:{required:!1,tsType:{name:"string"},description:""}}};const k={title:"GZMTR/Interchange Station 2024",component:h,tags:["autodocs"]},p={Icon:i,strokeColour:"#00629B",lineNum:"2",stnNum:"01"},S={Icon:i,strokeColour:"#CD5228",lineNum:"22",stnNum:"03"},x={Icon:i,strokeColour:"#F5333F",lineNum:"F2",stnNum:"27"},l={Icon:i,strokeColour:"#97D700",lineNum:"7",stnNum:"01"},u={"GZ South":[p,S,x,l],Shibi:[p,l]},a={args:{stations:[],textClassName:"rmg-name__en"},argTypes:{stations:{options:Object.keys(u),mapping:u,control:{type:"select"}}}};var g,d,f;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    stations: [],
    textClassName: 'rmg-name__en'
  },
  argTypes: {
    stations: {
      options: Object.keys(stationOptions),
      mapping: stationOptions,
      control: {
        type: 'select'
      }
    }
  }
}`,...(f=(d=a.parameters)==null?void 0:d.docs)==null?void 0:f.source}}};const T=["InterchangeStation2024"];export{a as InterchangeStation2024,T as __namedExportsOrder,k as default};

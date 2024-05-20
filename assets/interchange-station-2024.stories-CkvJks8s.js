import{j as a}from"./jsx-runtime-BZf_YgVj.js";import{I as m,a as u,F as y,S as I}from"./station-number-BFTlz9Fy.js";import{F as _,S as O}from"./station-number-BCTn-yvj.js";import{r as T}from"./index-CEThVCg_.js";/* empty css              */import"./generic-station-number-DALJPbfw.js";const j=(n,l)=>{if(n<=0)return[];if(n===1)return[[0,0]];const s=m+u/2,o=m+u;if(n===2&&l)return[[0,-.5*o],[0,.5*o]];const r=Math.ceil(n/2),e=Array.from(Array(r).keys()).map(t=>(t-(r-1)/2)*(m+u));return n&1?[[0,e[0]]].concat(...e.slice(1).map(t=>[[-s,t],[s,t]])):e.map(t=>[[-s,t],[s,t]]).flat()},p=n=>n==="fmetro"?_:y;function x({stations:n,textClassName:l,preferVertical:s}){const o=T.useMemo(()=>j(n.length,s),[n.length,s]);return a.jsxs("g",{children:[n.map(({style:r},e)=>{const t=p(r);return a.jsx(t,{stroke:"#aaa",padding:4,filled:!0,asOutline:!0,transform:`translate(${o[e][0]},${o[e][1]})`},e)}),n.map(({style:r},e)=>{const t=p(r);return a.jsx(t,{stroke:"white",padding:1.1,filled:!0,asOutline:!0,transform:`translate(${o[e][0]},${o[e][1]})`},e)}),n.length&&a.jsx("rect",{fill:"white",x:-12,y:o[0][1],width:24,height:-o[0][1]*2}),n.map(({style:r,...e},t)=>{const k=r==="fmetro"?O:I;return a.jsx(k,{transform:`translate(${o[t][0]},${o[t][1]})`,textClassName:l,...e},t)})]})}x.__docgenInfo={description:"",methods:[],displayName:"InterchangeStation2024",props:{stations:{required:!0,tsType:{name:"Array",elements:[{name:"StationProps"}],raw:"StationProps[]"},description:""},textClassName:{required:!1,tsType:{name:"string"},description:""},preferVertical:{required:!1,tsType:{name:"boolean"},description:""}}};const H={title:"GZMTR/Interchange Station 2024",component:x,tags:["autodocs"]},N="#00629B",g="#ECA154",c="#97D700",b="#0047BA",f="#CD5228",$="#F5333F",d={"GZ South":[{strokeColour:N,lineNum:"2",stnNum:"01"},{strokeColour:f,lineNum:"22",stnNum:"03"},{strokeColour:$,lineNum:"F2",stnNum:"27"},{strokeColour:c,lineNum:"7",stnNum:"01"}],"Hanxi Changlong":[{strokeColour:g,lineNum:"3",stnNum:"03"},{strokeColour:c,lineNum:"7",stnNum:"05"}],"Panyu Square":[{strokeColour:g,lineNum:"3",stnNum:"01"},{strokeColour:f,lineNum:"22",stnNum:"01"},{strokeColour:b,lineNum:"18",stnNum:"03"}],Shibi:[{strokeColour:N,lineNum:"2",stnNum:"02"},{strokeColour:c,lineNum:"7",stnNum:"02"}]},i={args:{stations:[],textClassName:"rmg-name__en"},argTypes:{stations:{options:Object.keys(d),mapping:d,control:{type:"select"}},preferVertical:{options:[!1,!0],control:"radio"}}};var C,h,S;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
    },
    preferVertical: {
      options: [false, true],
      control: 'radio'
    }
  }
}`,...(S=(h=i.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};const D=["InterchangeStation2024"];export{i as InterchangeStation2024,D as __namedExportsOrder,H as default};

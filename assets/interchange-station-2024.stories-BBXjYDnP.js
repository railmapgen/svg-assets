import{j as m}from"./jsx-runtime-BjgbQsUx.js";import{I as f,a as b,b as O}from"./generic-station-number-B2xNy6B2.js";import{S as j,F as E}from"./station-number-hV9tCGAM.js";import{S as F,a as M}from"./station-number-Dm3oStf7.js";import{r as N}from"./index-DEBVq0NN.js";/* empty css              */import"./index-D2MAbzvX.js";const w=(n,c)=>{if(n<=0)return[];if(n===1)return[[0,0]];const s=b,o=O;if(n===2&&c)return[[0,-.5*o],[0,.5*o]];const l=Math.ceil(n/2),t=Array.from(Array(l).keys()).map(r=>(r-(l-1)/2)*o);return n&1?[[0,t[0]]].concat(...t.slice(1).map(r=>[[-.5*s,r],[.5*s,r]])):t.map(r=>[[-.5*s,r],[.5*s,r]]).flat()},g=n=>n==="fmetro"?E:M;function _({stations:n,textClassName:c,preferVertical:s,anchorAt:o,...l}){const t=N.useMemo(()=>w(n.length,s),[n.length,s]),[r,T]=N.useMemo(()=>{if(o===void 0)return[0,0];if(o<0||o>=t.length)return console.warn(`<InterchangeStation2024/>, anchor index ${o} is out of bound`),[0,0];{const[a,e]=t[o];return[-a,-e]}},[t,o]);return m.jsxs("g",{transform:`translate(${r},${T})`,...l,children:[n.map(({style:a},e)=>{const i=g(a);return m.jsx(i,{stroke:"#aaa",filled:!0,strokeWidth:f*7,transform:`translate(${t[e][0]},${t[e][1]})`},e)}),n.map(({style:a},e)=>{const i=g(a);return m.jsx(i,{stroke:"white",filled:!0,strokeWidth:f*2.6,transform:`translate(${t[e][0]},${t[e][1]})`},e)}),n.length&&m.jsx("rect",{fill:"white",x:-12,y:t[0][1],width:24,height:-t[0][1]*2}),n.map(({style:a,...e},i)=>{const $=a==="fmetro"?j:F;return m.jsx($,{transform:`translate(${t[i][0]},${t[i][1]})`,textClassName:c,...e},i)})]})}_.__docgenInfo={description:"",methods:[],displayName:"InterchangeStation2024",props:{stations:{required:!0,tsType:{name:"Array",elements:[{name:"StationProps"}],raw:"StationProps[]"},description:""},textClassName:{required:!1,tsType:{name:"string"},description:""},preferVertical:{required:!1,tsType:{name:"boolean"},description:""},anchorAt:{required:!1,tsType:{name:"number"},description:""}},composes:["SVGProps"]};const R={title:"GZMTR/Interchange Station 2024",component:_,tags:["autodocs"]},d="#00629B",C="#ECA154",p="#97D700",H="#0047BA",h="#CD5228",y="#F5333F",L="#5EB3E4",S={"GZ South":[{strokeColour:d,lineNum:"2",stnNum:"01"},{strokeColour:h,lineNum:"22",stnNum:"03"},{style:"fmetro",strokeColour:y,lineNum:"F2",stnNum:"27"},{strokeColour:p,lineNum:"7",stnNum:"01"}],"Hanxi Changlong":[{strokeColour:C,lineNum:"3",stnNum:"03"},{strokeColour:p,lineNum:"7",stnNum:"05"}],Linyuexi:[{style:"fmetro",strokeColour:y,lineNum:"F2",stnNum:"25"},{style:"fmetro",strokeColour:L,lineNum:"TNH1",stnNum:"14"}],"Panyu Square":[{strokeColour:C,lineNum:"3",stnNum:"01"},{strokeColour:h,lineNum:"22",stnNum:"01"},{strokeColour:H,lineNum:"18",stnNum:"03"}],Shibi:[{strokeColour:d,lineNum:"2",stnNum:"02"},{strokeColour:p,lineNum:"7",stnNum:"02"}]},u={args:{stations:[],textClassName:"rmg-name__en"},argTypes:{stations:{options:Object.keys(S),mapping:S,control:{type:"select"}},preferVertical:{options:[!1,!0],control:"radio"},anchorAt:{control:{type:"range",min:-1,max:3,step:1}}}};var x,k,I;u.parameters={...u.parameters,docs:{...(x=u.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
    },
    anchorAt: {
      control: {
        type: 'range',
        min: -1,
        max: 3,
        step: 1
      }
    }
  }
}`,...(I=(k=u.parameters)==null?void 0:k.docs)==null?void 0:I.source}}};const V=["InterchangeStation2024"];export{u as InterchangeStation2024,V as __namedExportsOrder,R as default};

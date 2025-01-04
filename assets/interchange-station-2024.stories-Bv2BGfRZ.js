import{j as c}from"./jsx-runtime-BjgbQsUx.js";import{I as C,a as F,b as H}from"./generic-station-number-B2xNy6B2.js";import{S as q,F as w}from"./station-number-hV9tCGAM.js";import{S as M,a as L}from"./station-number-Dm3oStf7.js";import{r as x}from"./index-DEBVq0NN.js";/* empty css              */import"./index-D2MAbzvX.js";const y=(t,i)=>Array.from(Array(t).keys()).map(m=>(m-(t-1)/2)*i),v=(t,i,m)=>{if(t<=0)return[];if(t===1)return[[0,0]];const a=i>t?t:i,s=F,d=H,e=y(a,s),l=Math.ceil(t/a),p=y(l,d),r=t%a,n=[];for(let o=0;o<l;o++){const N=m?l-1:0;if(r===0||o!==N)for(let u=0;u<a;u++)n.push([e[u],p[o]]);else{const u=y(r,s);for(let g=0;g<r;g++)n.push([u[g],p[o]])}}return n},S=t=>t==="fmetro"?w:L;function E({stations:t,textClassName:i,columns:m=2,topHeavy:a,anchorAt:s,...d}){const e=x.useMemo(()=>v(t.length,m,a),[t.length,m,a]),[l,p]=x.useMemo(()=>{if(s===void 0)return[0,0];if(s<0||s>=e.length)return console.warn(`<InterchangeStation2024/>, anchor index ${s} is out of bound`),[0,0];{const[r,n]=e[s];return[-r,-n]}},[e,s]);return c.jsxs("g",{transform:`translate(${l},${p})`,...d,children:[t.map(({style:r},n)=>{const o=S(r);return c.jsx(o,{stroke:"#aaa",filled:!0,strokeWidth:C*7,transform:`translate(${e[n][0]},${e[n][1]})`},n)}),t.map(({style:r},n)=>{const o=S(r);return c.jsx(o,{stroke:"white",filled:!0,strokeWidth:C*2.6,transform:`translate(${e[n][0]},${e[n][1]})`},n)}),t.length&&c.jsx("rect",{fill:"white",x:-12,y:e[0][1],width:24,height:-e[0][1]*2}),t.map(({style:r,...n},o)=>{const N=r==="fmetro"?q:M;return c.jsx(N,{transform:`translate(${e[o][0]},${e[o][1]})`,textClassName:i,...n},o)})]})}E.__docgenInfo={description:"",methods:[],displayName:"InterchangeStation2024",props:{stations:{required:!0,tsType:{name:"Array",elements:[{name:"StationProps"}],raw:"StationProps[]"},description:""},textClassName:{required:!1,tsType:{name:"string"},description:""},columns:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"2",computed:!1}},topHeavy:{required:!1,tsType:{name:"boolean"},description:""},anchorAt:{required:!1,tsType:{name:"number"},description:""}},composes:["SVGProps"]};const X={title:"GZMTR/Interchange Station 2024",component:E,tags:["autodocs"]},k="#00629B",I="#ECA154",h="#97D700",A="#0047BA",_="#CD5228",T="#F5333F",D="#5EB3E4",b={"GZ South":[{strokeColour:k,lineNum:"2",stnNum:"01"},{strokeColour:_,lineNum:"22",stnNum:"03"},{style:"fmetro",strokeColour:T,lineNum:"F2",stnNum:"27"},{strokeColour:h,lineNum:"7",stnNum:"01"}],"Hanxi Changlong":[{strokeColour:I,lineNum:"3",stnNum:"03"},{strokeColour:h,lineNum:"7",stnNum:"05"}],Linyuexi:[{style:"fmetro",strokeColour:T,lineNum:"F2",stnNum:"25"},{style:"fmetro",strokeColour:D,lineNum:"TNH1",stnNum:"14"}],"Panyu Square":[{strokeColour:I,lineNum:"3",stnNum:"01"},{strokeColour:_,lineNum:"22",stnNum:"01"},{strokeColour:A,lineNum:"18",stnNum:"03"}],Shibi:[{strokeColour:k,lineNum:"2",stnNum:"02"},{strokeColour:h,lineNum:"7",stnNum:"02"}]},f={args:{stations:[],textClassName:"rmg-name__en"},argTypes:{stations:{options:Object.keys(b),mapping:b,control:{type:"select"}},columns:{control:{type:"range",min:1,max:5,step:1}},topHeavy:{options:[!0,!1],control:{type:"radio"}},anchorAt:{control:{type:"range",min:-1,max:3,step:1}}}};var $,O,j;f.parameters={...f.parameters,docs:{...($=f.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
    columns: {
      control: {
        type: 'range',
        min: 1,
        max: 5,
        step: 1
      }
    },
    topHeavy: {
      options: [true, false],
      control: {
        type: 'radio'
      }
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
}`,...(j=(O=f.parameters)==null?void 0:O.docs)==null?void 0:j.source}}};const Z=["InterchangeStation2024"];export{f as InterchangeStation2024,Z as __namedExportsOrder,X as default};

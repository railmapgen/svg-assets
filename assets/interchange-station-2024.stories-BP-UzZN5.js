import{j as r}from"./jsx-runtime-BjgbQsUx.js";import{c as I,I as k,d as M,G as D}from"./generic-station-number-r9Gv5CgH.js";import{S as G,F as W}from"./station-number-DCj8uRXP.js";import{S as Z,a as q,G as B}from"./gzmtr-context-provider-COn46pli.js";import{r as s}from"./index-DEBVq0NN.js";/* empty css              */import"./index-D2MAbzvX.js";function j({position:t,...e}){const c=t==="right"?"rotate(180)":"rotate(0)";return r.jsx("circle",{cx:-I*.4,cy:0,r:I/4,stroke:"#aaa",strokeWidth:k*1.75,fill:"white",strokeDasharray:"2.7 2.5",transform:c,...e})}j.__docgenInfo={description:"",methods:[],displayName:"OSILink",props:{position:{required:!0,tsType:{name:"union",raw:"'left' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:""}}};const S=(t,e)=>Array.from(Array(t).keys()).map(c=>(c-(t-1)/2)*e),P=(t,e,c)=>{if(t<=0)return[];if(t===1)return[[0,0]];const a=e>t?t:e,o=I,u=M,f=S(a,o),x=Math.ceil(t/a),y=S(x,u),n=t%a,d=[];for(let m=0;m<x;m++){const N=c?x-1:0;if(n===0||m!==N)for(let i=0;i<a;i++)d.push([f[i],y[m]]);else{const i=S(n,o);for(let h=0;h<n;h++)d.push([i[h],y[m]])}}return d},_=t=>t==="fmetro"?W:q,$=s.forwardRef(function({stations:e,textClassName:c,columns:a=2,topHeavy:o,anchorAt:u,osiPosition:f,...x},y){const n=s.useMemo(()=>P(e.length,a,o),[e.length,a,o]),[d,m]=s.useMemo(()=>{if(u===void 0)return[0,0];if(u<0||u>=n.length)return console.warn(`<InterchangeStation2024/>, anchor index ${u} is out of bound`),[0,0];{const[g,l]=n[u];return[-g,-l]}},[n,u]),N=s.useRef(null),i=s.useRef([]);s.useEffect(()=>{i.current=i.current.slice(0,e.length)},[e.length]),s.useImperativeHandle(y,()=>({target:N.current,children:i.current,getCoordinates:()=>n,getTranslate:()=>[d,m]}),[n,d,m,N.current,i.current]);const h=e.length===2&&a===1&&!!f;return r.jsxs("g",{ref:N,transform:`translate(${d},${m})`,...x,children:[e.map(({style:g},l)=>{const p=_(g);return r.jsx(p,{stroke:"#aaa",filled:!0,strokeWidth:k*7,transform:`translate(${n[l][0]},${n[l][1]})`},l)}),h&&r.jsx(j,{position:f,r:I/2.9,strokeWidth:k*2.2,strokeDasharray:void 0}),e.map(({style:g},l)=>{const p=_(g);return r.jsx(p,{stroke:"white",filled:!0,strokeWidth:k*2.6,transform:`translate(${n[l][0]},${n[l][1]})`},l)}),h&&r.jsx(j,{position:f}),e.length&&r.jsx("rect",{fill:"white",x:-12,y:n[0][1],width:24,height:-n[0][1]*2}),e.map(({style:g,...l},p)=>{const H=g==="fmetro"?G:Z;return r.jsx(H,{ref:L=>i.current[p]=L,transform:`translate(${n[p][0]},${n[p][1]})`,textClassName:c,...l},p)})]})});$.__docgenInfo={description:"",methods:[{name:"getCoordinates",docblock:null,modifiers:[],params:[],returns:null},{name:"getTranslate",docblock:null,modifiers:[],params:[],returns:null}],displayName:"InterchangeStation2024",props:{columns:{defaultValue:{value:"2",computed:!1},required:!1}}};const A=t=>{const[e,c]=s.useState([]),{update:a}=s.useContext(D),o=s.useRef(null);return s.useEffect(()=>{o.current&&c(o.current.getCoordinates())},[o.current,t.stations,t.columns,t.topHeavy]),s.useEffect(()=>{window.update=a,window.ref=o.current},[a,o.current]),r.jsxs(r.Fragment,{children:[r.jsx($,{...t,ref:o}),r.jsxs("g",{transform:"translate(40,40)",children:[r.jsx("rect",{height:60,width:60,fill:"white"}),r.jsx("text",{fontSize:10,children:e.map((u,f)=>r.jsxs("tspan",{x:0,dy:10,children:["(",u.join(", "),")"]},f))})]})]})},U=t=>r.jsx(B,{children:r.jsx(A,{...t})}),at={title:"GZMTR/Interchange Station 2024",component:U},X="#00629B",w="#ECA154",b="#97D700",K="#008C95",V="#ffb00a",Y="#0047BA",v="#CD5228",F="#F5333F",J="#5EB3E4",Q=[{strokeColour:X,lineNum:"2",stnNum:"01"},{strokeColour:v,lineNum:"22",stnNum:"03"},{style:"fmetro",strokeColour:F,lineNum:"F2",stnNum:"27"},{strokeColour:b,lineNum:"7",stnNum:"01"}],T={"GZ South":Q,"Hanxi Changlong":[{strokeColour:w,lineNum:"3",stnNum:"03"},{strokeColour:b,lineNum:"7",stnNum:"05"}],Linyuexi:[{style:"fmetro",strokeColour:F,lineNum:"F2",stnNum:"25"},{style:"fmetro",strokeColour:J,lineNum:"TNH1",stnNum:"14"}],"Panyu Square":[{strokeColour:w,lineNum:"3",stnNum:"01"},{strokeColour:v,lineNum:"22",stnNum:"01"},{strokeColour:Y,lineNum:"18",stnNum:"03"}],Pazhou:[{strokeColour:K,lineNum:"8",stnNum:"27"},{strokeColour:V,lineNum:"11",stnNum:"02"}]},C={args:{stations:[],textClassName:"rmg-name__en"},argTypes:{stations:{options:Object.keys(T),mapping:T,control:{type:"select"}},columns:{control:{type:"range",min:1,max:5,step:1}},topHeavy:{options:[!0,!1],control:{type:"radio"}},anchorAt:{control:{type:"range",min:-1,max:3,step:1}},osiPosition:{options:["left","right"],control:{type:"radio"}}}};var O,E,R;C.parameters={...C.parameters,docs:{...(O=C.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
    },
    osiPosition: {
      options: ['left', 'right'],
      control: {
        type: 'radio'
      }
    }
  }
}`,...(R=(E=C.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};const it=["InterchangeStation2024"];export{C as InterchangeStation2024,it as __namedExportsOrder,at as default};

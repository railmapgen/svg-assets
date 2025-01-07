import{j as o}from"./jsx-runtime-BjgbQsUx.js";import{b as k,I as C,c as v}from"./generic-station-number-Cl13wupA.js";import{S as D,F as M}from"./station-number-CrHa-nmn.js";import{S as R,a as W}from"./station-number-DKCQwHkv.js";import{r as c}from"./index-DEBVq0NN.js";/* empty css              */import"./index-D2MAbzvX.js";function S({position:t,...e}){const l=t==="right"?"rotate(180)":"rotate(0)";return o.jsx("circle",{cx:-k*.4,cy:0,r:k/4,stroke:"#aaa",strokeWidth:C*1.75,fill:"white",strokeDasharray:"2.7 2.5",transform:l,...e})}S.__docgenInfo={description:"",methods:[],displayName:"OSILink",props:{position:{required:!0,tsType:{name:"union",raw:"'left' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:""}}};const I=(t,e)=>Array.from(Array(t).keys()).map(l=>(l-(t-1)/2)*e),q=(t,e,l)=>{if(t<=0)return[];if(t===1)return[[0,0]];const r=e>t?t:e,m=k,i=v,d=I(r,m),g=Math.ceil(t/r),x=I(g,i),n=t%r,h=[];for(let p=0;p<g;p++){const N=l?g-1:0;if(n===0||p!==N)for(let u=0;u<r;u++)h.push([d[u],x[p]]);else{const u=I(n,m);for(let s=0;s<n;s++)h.push([u[s],x[p]])}}return h},j=t=>t==="fmetro"?M:W,T=c.forwardRef(function({stations:e,textClassName:l,columns:r=2,topHeavy:m,anchorAt:i,osiPosition:d,...g},x){const n=c.useMemo(()=>q(e.length,r,m),[e.length,r,m]),[h,p]=c.useMemo(()=>{if(i===void 0)return[0,0];if(i<0||i>=n.length)return console.warn(`<InterchangeStation2024/>, anchor index ${i} is out of bound`),[0,0];{const[s,a]=n[i];return[-s,-a]}},[n,i]),N=c.useRef(null);c.useImperativeHandle(x,()=>({getCoordinates:()=>n,target:N.current}),[n,N.current]);const u=e.length===2&&r===1&&!!d;return o.jsxs("g",{ref:N,transform:`translate(${h},${p})`,...g,children:[e.map(({style:s},a)=>{const f=j(s);return o.jsx(f,{stroke:"#aaa",filled:!0,strokeWidth:C*7,transform:`translate(${n[a][0]},${n[a][1]})`},a)}),u&&o.jsx(S,{position:d,r:k/2.9,strokeWidth:C*2.2,strokeDasharray:void 0}),e.map(({style:s},a)=>{const f=j(s);return o.jsx(f,{stroke:"white",filled:!0,strokeWidth:C*2.6,transform:`translate(${n[a][0]},${n[a][1]})`},a)}),u&&o.jsx(S,{position:d}),e.length&&o.jsx("rect",{fill:"white",x:-12,y:n[0][1],width:24,height:-n[0][1]*2}),e.map(({style:s,...a},f)=>{const L=s==="fmetro"?D:R;return o.jsx(L,{transform:`translate(${n[f][0]},${n[f][1]})`,textClassName:l,...a},f)})]})});T.__docgenInfo={description:"",methods:[{name:"getCoordinates",docblock:null,modifiers:[],params:[],returns:null}],displayName:"InterchangeStation2024",props:{columns:{defaultValue:{value:"2",computed:!1},required:!1}}};const G=t=>{const[e,l]=c.useState([]),r=c.useRef(null);return c.useEffect(()=>{r.current&&l(r.current.getCoordinates())},[r.current,t.stations,t.columns,t.topHeavy]),o.jsxs(o.Fragment,{children:[o.jsx(T,{...t,ref:r}),o.jsxs("g",{transform:"translate(40,40)",children:[o.jsx("rect",{height:60,width:60,fill:"white"}),o.jsx("text",{fontSize:10,children:e.map((m,i)=>o.jsxs("tspan",{x:0,dy:10,children:["(",m.join(", "),")"]},i))})]})]})},nt={title:"GZMTR/Interchange Station 2024",component:G,tags:["autodocs"]},B="#00629B",_="#ECA154",b="#97D700",Z="#008C95",A="#ffb00a",P="#0047BA",F="#CD5228",H="#F5333F",U="#5EB3E4",X=[{strokeColour:B,lineNum:"2",stnNum:"01"},{strokeColour:F,lineNum:"22",stnNum:"03"},{style:"fmetro",strokeColour:H,lineNum:"F2",stnNum:"27"},{strokeColour:b,lineNum:"7",stnNum:"01"}],O={"GZ South":X,"Hanxi Changlong":[{strokeColour:_,lineNum:"3",stnNum:"03"},{strokeColour:b,lineNum:"7",stnNum:"05"}],Linyuexi:[{style:"fmetro",strokeColour:H,lineNum:"F2",stnNum:"25"},{style:"fmetro",strokeColour:U,lineNum:"TNH1",stnNum:"14"}],"Panyu Square":[{strokeColour:_,lineNum:"3",stnNum:"01"},{strokeColour:F,lineNum:"22",stnNum:"01"},{strokeColour:P,lineNum:"18",stnNum:"03"}],Pazhou:[{strokeColour:Z,lineNum:"8",stnNum:"27"},{strokeColour:A,lineNum:"11",stnNum:"02"}]},y={args:{stations:[],textClassName:"rmg-name__en"},argTypes:{stations:{options:Object.keys(O),mapping:O,control:{type:"select"}},columns:{control:{type:"range",min:1,max:5,step:1}},topHeavy:{options:[!0,!1],control:{type:"radio"}},anchorAt:{control:{type:"range",min:-1,max:3,step:1}},osiPosition:{options:["left","right"],control:{type:"radio"}}}};var w,$,E;y.parameters={...y.parameters,docs:{...(w=y.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(E=($=y.parameters)==null?void 0:$.docs)==null?void 0:E.source}}};const et=["InterchangeStation2024"];export{y as InterchangeStation2024,et as __namedExportsOrder,nt as default};

import{j as o}from"./jsx-runtime-BjgbQsUx.js";import{b as k,I as C,c as v}from"./generic-station-number-Cl13wupA.js";import{S as D,F as M}from"./station-number-CrHa-nmn.js";import{S as R,a as W}from"./station-number-DKCQwHkv.js";import{r as m}from"./index-DEBVq0NN.js";/* empty css              */import"./index-D2MAbzvX.js";function S({position:t,...e}){const l=t==="right"?"rotate(180)":"rotate(0)";return o.jsx("circle",{cx:-k*.4,cy:0,r:k/4,stroke:"#aaa",strokeWidth:C*1.75,fill:"white",strokeDasharray:"2.7 2.5",transform:l,...e})}S.__docgenInfo={description:"",methods:[],displayName:"OSILink",props:{position:{required:!0,tsType:{name:"union",raw:"'left' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:""}}};const I=(t,e)=>Array.from(Array(t).keys()).map(l=>(l-(t-1)/2)*e),q=(t,e,l)=>{if(t<=0)return[];if(t===1)return[[0,0]];const r=e>t?t:e,p=k,i=v,g=I(r,p),h=Math.ceil(t/r),x=I(h,i),n=t%r,d=[];for(let u=0;u<h;u++){const N=l?h-1:0;if(n===0||u!==N)for(let c=0;c<r;c++)d.push([g[c],x[u]]);else{const c=I(n,p);for(let s=0;s<n;s++)d.push([c[s],x[u]])}}return d},j=t=>t==="fmetro"?M:W,b=m.forwardRef(function({stations:e,textClassName:l,columns:r=2,topHeavy:p,anchorAt:i,osiPosition:g,...h},x){const n=m.useMemo(()=>q(e.length,r,p),[e.length,r,p]),[d,u]=m.useMemo(()=>{if(i===void 0)return[0,0];if(i<0||i>=n.length)return console.warn(`<InterchangeStation2024/>, anchor index ${i} is out of bound`),[0,0];{const[s,a]=n[i];return[-s,-a]}},[n,i]),N=m.useRef(null);m.useImperativeHandle(x,()=>({getCoordinates:()=>n,getTranslate:()=>[d,u],target:N.current}),[n,N.current]);const c=e.length===2&&r===1&&!!g;return o.jsxs("g",{ref:N,transform:`translate(${d},${u})`,...h,children:[e.map(({style:s},a)=>{const f=j(s);return o.jsx(f,{stroke:"#aaa",filled:!0,strokeWidth:C*7,transform:`translate(${n[a][0]},${n[a][1]})`},a)}),c&&o.jsx(S,{position:g,r:k/2.9,strokeWidth:C*2.2,strokeDasharray:void 0}),e.map(({style:s},a)=>{const f=j(s);return o.jsx(f,{stroke:"white",filled:!0,strokeWidth:C*2.6,transform:`translate(${n[a][0]},${n[a][1]})`},a)}),c&&o.jsx(S,{position:g}),e.length&&o.jsx("rect",{fill:"white",x:-12,y:n[0][1],width:24,height:-n[0][1]*2}),e.map(({style:s,...a},f)=>{const L=s==="fmetro"?D:R;return o.jsx(L,{transform:`translate(${n[f][0]},${n[f][1]})`,textClassName:l,...a},f)})]})});b.__docgenInfo={description:"",methods:[{name:"getCoordinates",docblock:null,modifiers:[],params:[],returns:null},{name:"getTranslate",docblock:null,modifiers:[],params:[],returns:null}],displayName:"InterchangeStation2024",props:{columns:{defaultValue:{value:"2",computed:!1},required:!1}}};const G=t=>{const[e,l]=m.useState([]),r=m.useRef(null);return m.useEffect(()=>{r.current&&l(r.current.getCoordinates())},[r.current,t.stations,t.columns,t.topHeavy]),o.jsxs(o.Fragment,{children:[o.jsx(b,{...t,ref:r}),o.jsxs("g",{transform:"translate(40,40)",children:[o.jsx("rect",{height:60,width:60,fill:"white"}),o.jsx("text",{fontSize:10,children:e.map((p,i)=>o.jsxs("tspan",{x:0,dy:10,children:["(",p.join(", "),")"]},i))})]})]})},nt={title:"GZMTR/Interchange Station 2024",component:G,tags:["autodocs"]},B="#00629B",_="#ECA154",E="#97D700",Z="#008C95",A="#ffb00a",P="#0047BA",F="#CD5228",H="#F5333F",U="#5EB3E4",X=[{strokeColour:B,lineNum:"2",stnNum:"01"},{strokeColour:F,lineNum:"22",stnNum:"03"},{style:"fmetro",strokeColour:H,lineNum:"F2",stnNum:"27"},{strokeColour:E,lineNum:"7",stnNum:"01"}],O={"GZ South":X,"Hanxi Changlong":[{strokeColour:_,lineNum:"3",stnNum:"03"},{strokeColour:E,lineNum:"7",stnNum:"05"}],Linyuexi:[{style:"fmetro",strokeColour:H,lineNum:"F2",stnNum:"25"},{style:"fmetro",strokeColour:U,lineNum:"TNH1",stnNum:"14"}],"Panyu Square":[{strokeColour:_,lineNum:"3",stnNum:"01"},{strokeColour:F,lineNum:"22",stnNum:"01"},{strokeColour:P,lineNum:"18",stnNum:"03"}],Pazhou:[{strokeColour:Z,lineNum:"8",stnNum:"27"},{strokeColour:A,lineNum:"11",stnNum:"02"}]},y={args:{stations:[],textClassName:"rmg-name__en"},argTypes:{stations:{options:Object.keys(O),mapping:O,control:{type:"select"}},columns:{control:{type:"range",min:1,max:5,step:1}},topHeavy:{options:[!0,!1],control:{type:"radio"}},anchorAt:{control:{type:"range",min:-1,max:3,step:1}},osiPosition:{options:["left","right"],control:{type:"radio"}}}};var w,T,$;y.parameters={...y.parameters,docs:{...(w=y.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...($=(T=y.parameters)==null?void 0:T.docs)==null?void 0:$.source}}};const et=["InterchangeStation2024"];export{y as InterchangeStation2024,et as __namedExportsOrder,nt as default};

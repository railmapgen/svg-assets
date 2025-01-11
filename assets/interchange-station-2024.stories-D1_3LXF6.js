import{j as t}from"./jsx-runtime-BjgbQsUx.js";import{S as C,I as h}from"./svg-assets-context-provider-cmpovgen.js";/* empty css              */import{r as e}from"./index-DEBVq0NN.js";import{S as y}from"./generic-station-number-CfBldsCW.js";import"./index-D2MAbzvX.js";import"./station-number-DvK0eBzD.js";import"./station-number-ej78HG2n.js";const k=n=>{const[g,d]=e.useState([]),{update:r}=e.useContext(y),o=e.useRef(null);return e.useEffect(()=>{o.current&&d(o.current.getCoordinates())},[o.current,n.stations,n.columns,n.topHeavy]),e.useEffect(()=>{window.update=r,window.ref=o.current},[r,o.current]),t.jsxs(t.Fragment,{children:[t.jsx(h,{...n,ref:o}),t.jsxs("g",{transform:"translate(40,40)",children:[t.jsx("rect",{height:60,width:60,fill:"white"}),t.jsx("text",{fontSize:10,children:g.map((f,x)=>t.jsxs("tspan",{x:0,dy:10,children:["(",f.join(", "),")"]},x))})]})]})},S=n=>t.jsx(C,{children:t.jsx(k,{...n})}),B={title:"GZMTR/Interchange Station 2024",component:S},j="#00629B",i="#ECA154",c="#97D700",E="#008C95",_="#ffb00a",v="#0047BA",p="#CD5228",N="#F5333F",w="#5EB3E4",A=[{strokeColour:j,lineNum:"2",stnNum:"01"},{strokeColour:p,lineNum:"22",stnNum:"03"},{style:"fmetro",strokeColour:N,lineNum:"F2",stnNum:"27"},{strokeColour:c,lineNum:"7",stnNum:"01"}],a={"GZ South":A,"Hanxi Changlong":[{strokeColour:i,lineNum:"3",stnNum:"03"},{strokeColour:c,lineNum:"7",stnNum:"05"}],Linyuexi:[{style:"fmetro",strokeColour:N,lineNum:"F2",stnNum:"25"},{style:"fmetro",strokeColour:w,lineNum:"TNH1",stnNum:"14"}],"Panyu Square":[{strokeColour:i,lineNum:"3",stnNum:"01"},{strokeColour:p,lineNum:"22",stnNum:"01"},{strokeColour:v,lineNum:"18",stnNum:"03"}],Pazhou:[{strokeColour:E,lineNum:"8",stnNum:"27"},{strokeColour:_,lineNum:"11",stnNum:"02"}]},s={args:{stations:[],textClassName:"rmg-name__en"},argTypes:{stations:{options:Object.keys(a),mapping:a,control:{type:"select"}},columns:{control:{type:"range",min:1,max:5,step:1}},topHeavy:{options:[!0,!1],control:{type:"radio"}},anchorAt:{control:{type:"range",min:-1,max:3,step:1}},osiPosition:{options:["left","right"],control:{type:"radio"}}}};var m,l,u;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(u=(l=s.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};const G=["InterchangeStation2024"];export{s as InterchangeStation2024,G as __namedExportsOrder,B as default};

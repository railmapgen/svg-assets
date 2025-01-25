import{j as t}from"./jsx-runtime-BjgbQsUx.js";import{S as y,I as C}from"./svg-assets-context-provider-BC6GLgUP.js";/* empty css              */import{r as e}from"./index-DEBVq0NN.js";import{S}from"./generic-station-number-CK1fca9x.js";import"./index-D2MAbzvX.js";import"./station-number-CQfyZAz3.js";import"./station-number-BSSjuI4c.js";const k=n=>{const[d,h]=e.useState([]),[s,x]=e.useState(),{update:i}=e.useContext(S),o=e.useRef(null);return e.useEffect(()=>{o.current&&(h(o.current.getCoordinates()),x(o.current.getCorrectedBBox()))},[o.current,n.stations,n.columns,n.topHeavy,n.osiPosition]),e.useEffect(()=>{window.update=i,window.ref=o.current},[i,o.current]),t.jsxs(t.Fragment,{children:[t.jsx(C,{...n,ref:o}),t.jsxs("g",{transform:"translate(40,40)",children:[t.jsx("rect",{height:60,width:60,fill:"white"}),t.jsx("text",{fontSize:10,children:d.map((N,f)=>t.jsxs("tspan",{x:0,dy:10,children:["(",N.join(", "),")"]},f))})]}),s&&t.jsx("rect",{x:s.x,y:s.y,width:s.width,height:s.height,className:"shining-border"})]})},j=n=>t.jsx(y,{children:t.jsx(k,{...n})}),L={title:"GZMTR/Interchange Station 2024",component:j},w="#00629B",B="#ECA154",E="#97D700",_="#008C95",a="#ffb00a",v="#0047BA",p="#CD5228",A="#C4D600",g="#F5333F",F="#5EB3E4",O=[{strokeColour:w,lineNum:"2",stnNum:"01"},{strokeColour:p,lineNum:"22",stnNum:"03"},{style:"fmetro",strokeColour:g,lineNum:"F2",stnNum:"27"},{strokeColour:E,lineNum:"7",stnNum:"01"}],m={"GZ South":O,Yangang:[{strokeColour:a,lineNum:"11",stnNum:"25"},{strokeColour:A,lineNum:"GF",stnNum:"22"}],Linyuexi:[{style:"fmetro",strokeColour:g,lineNum:"F2",stnNum:"25"},{style:"fmetro",strokeColour:F,lineNum:"TNH1",stnNum:"14"}],"Panyu Square":[{strokeColour:B,lineNum:"3",stnNum:"01"},{strokeColour:p,lineNum:"22",stnNum:"01"},{strokeColour:v,lineNum:"18",stnNum:"03"}],Pazhou:[{strokeColour:_,lineNum:"8",stnNum:"27"},{strokeColour:a,lineNum:"11",stnNum:"02"}]},r={args:{stations:[],textClassName:"rmg-name__zh"},argTypes:{stations:{options:Object.keys(m),mapping:m,control:{type:"select"}},columns:{control:{type:"range",min:1,max:5,step:1}},topHeavy:{options:[!0,!1],control:{type:"radio"}},anchorAt:{control:{type:"range",min:-1,max:3,step:1}},osiPosition:{options:["left","right"],control:{type:"radio"}}}};var u,c,l;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    stations: [],
    textClassName: 'rmg-name__zh'
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
}`,...(l=(c=r.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const R=["InterchangeStation2024"];export{r as InterchangeStation2024,R as __namedExportsOrder,L as default};

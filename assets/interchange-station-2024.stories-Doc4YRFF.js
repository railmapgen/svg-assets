import{j as t}from"./jsx-runtime-BjgbQsUx.js";import{S as C,I as S}from"./svg-assets-context-provider-DTSby_E5.js";/* empty css              */import{r as e}from"./index-DEBVq0NN.js";import{S as k}from"./generic-station-number-CfBldsCW.js";import"./index-D2MAbzvX.js";import"./station-number-DvK0eBzD.js";import"./station-number-ej78HG2n.js";const j=n=>{const[x,h]=e.useState([]),[s,N]=e.useState(),{update:i}=e.useContext(k),o=e.useRef(null);return e.useEffect(()=>{o.current&&(h(o.current.getCoordinates()),N(o.current.getCorrectedBBox()))},[o.current,n.stations,n.columns,n.topHeavy,n.osiPosition]),e.useEffect(()=>{window.update=i,window.ref=o.current},[i,o.current]),t.jsxs(t.Fragment,{children:[t.jsx(S,{...n,ref:o}),t.jsxs("g",{transform:"translate(40,40)",children:[t.jsx("rect",{height:60,width:60,fill:"white"}),t.jsx("text",{fontSize:10,children:x.map((f,y)=>t.jsxs("tspan",{x:0,dy:10,children:["(",f.join(", "),")"]},y))})]}),s&&t.jsx("rect",{x:s.x,y:s.y,width:s.width,height:s.height,className:"shining-border"})]})},w=n=>t.jsx(C,{children:t.jsx(j,{...n})}),R={title:"GZMTR/Interchange Station 2024",component:w},B="#00629B",a="#ECA154",p="#97D700",E="#008C95",_="#ffb00a",v="#0047BA",d="#CD5228",g="#F5333F",A="#5EB3E4",O=[{strokeColour:B,lineNum:"2",stnNum:"01"},{strokeColour:d,lineNum:"22",stnNum:"03"},{style:"fmetro",strokeColour:g,lineNum:"F2",stnNum:"27"},{strokeColour:p,lineNum:"7",stnNum:"01"}],m={"GZ South":O,"Hanxi Changlong":[{strokeColour:a,lineNum:"3",stnNum:"03"},{strokeColour:p,lineNum:"7",stnNum:"05"}],Linyuexi:[{style:"fmetro",strokeColour:g,lineNum:"F2",stnNum:"25"},{style:"fmetro",strokeColour:A,lineNum:"TNH1",stnNum:"14"}],"Panyu Square":[{strokeColour:a,lineNum:"3",stnNum:"01"},{strokeColour:d,lineNum:"22",stnNum:"01"},{strokeColour:v,lineNum:"18",stnNum:"03"}],Pazhou:[{strokeColour:E,lineNum:"8",stnNum:"27"},{strokeColour:_,lineNum:"11",stnNum:"02"}]},r={args:{stations:[],textClassName:"rmg-name__en"},argTypes:{stations:{options:Object.keys(m),mapping:m,control:{type:"select"}},columns:{control:{type:"range",min:1,max:5,step:1}},topHeavy:{options:[!0,!1],control:{type:"radio"}},anchorAt:{control:{type:"range",min:-1,max:3,step:1}},osiPosition:{options:["left","right"],control:{type:"radio"}}}};var l,u,c;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(c=(u=r.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};const Z=["InterchangeStation2024"];export{r as InterchangeStation2024,Z as __namedExportsOrder,R as default};

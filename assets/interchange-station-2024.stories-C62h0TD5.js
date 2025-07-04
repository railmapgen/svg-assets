import{j as t,r as e}from"./iframe-CP1cIlOF.js";import{S as h,I as x}from"./svg-assets-context-provider-RMkMusE9.js";/* empty css              */import{S as f}from"./generic-station-number-CvzymBh3.js";import"./station-number-DXqGNN0c.js";import"./station-number-HhB-07uH.js";import"./clsx-B-dksMZM.js";const y=n=>{const[l,p]=e.useState([]),[s,g]=e.useState(),{update:i}=e.useContext(f),o=e.useRef(null);return e.useEffect(()=>{o.current&&(p(o.current.getCoordinates()),g(o.current.getCorrectedBBox()))},[o.current,n.stations,n.columns,n.topHeavy,n.osiPosition]),e.useEffect(()=>{window.update=i,window.ref=o.current},[i,o.current]),t.jsxs(t.Fragment,{children:[t.jsx(x,{...n,ref:o}),t.jsxs("g",{transform:"translate(40,40)",children:[t.jsx("rect",{height:60,width:60,fill:"white"}),t.jsx("text",{fontSize:10,children:l.map((d,N)=>t.jsxs("tspan",{x:0,dy:10,children:["(",d.join(", "),")"]},N))})]}),s&&t.jsx("rect",{x:s.x,y:s.y,width:s.width,height:s.height,className:"shining-border"})]})},C=n=>t.jsx(h,{children:t.jsx(y,{...n})}),G={title:"GZMTR/Interchange Station 2024",component:C},S="#00629B",k="#ECA154",j="#97D700",w="#008C95",a="#ffb00a",B="#0047BA",m="#CD5228",E="#C4D600",u="#F5333F",_="#5EB3E4",v=[{strokeColour:S,lineNum:"2",stnNum:"01"},{strokeColour:m,lineNum:"22",stnNum:"03"},{style:"fmetro",strokeColour:u,lineNum:"F2",stnNum:"27"},{strokeColour:j,lineNum:"7",stnNum:"01"}],c={"GZ South":v,Yangang:[{strokeColour:a,lineNum:"11",stnNum:"25"},{strokeColour:E,lineNum:"GF",stnNum:"22"}],Linyuexi:[{style:"fmetro",strokeColour:u,lineNum:"F2",stnNum:"25"},{style:"fmetro",strokeColour:_,lineNum:"TNH1",stnNum:"14"}],"Panyu Square":[{strokeColour:k,lineNum:"3",stnNum:"01"},{strokeColour:m,lineNum:"22",stnNum:"01"},{strokeColour:B,lineNum:"18",stnNum:"03"}],Pazhou:[{strokeColour:w,lineNum:"8",stnNum:"27"},{strokeColour:a,lineNum:"11",stnNum:"02"}]},r={args:{stations:[],classNames:{digits:"rmg-name__en"}},argTypes:{stations:{options:Object.keys(c),mapping:c,control:{type:"select"}},columns:{control:{type:"range",min:1,max:5,step:1}},topHeavy:{options:[!0,!1],control:{type:"radio"}},anchorAt:{control:{type:"range",min:-1,max:3,step:1}},osiPosition:{options:["left","right"],control:{type:"radio"}}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    stations: [],
    classNames: {
      digits: 'rmg-name__en'
    }
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
}`,...r.parameters?.docs?.source}}};const H=["InterchangeStation2024"];export{r as InterchangeStation2024,H as __namedExportsOrder,G as default};

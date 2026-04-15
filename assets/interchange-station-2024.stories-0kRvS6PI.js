import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-D1sJ83FZ.js";import{t as r}from"./jsx-runtime-Bn1Ys6_W.js";import{i,r as a}from"./generic-station-number-Zt0W8tp1.js";import{t as o}from"./src-CEDwscHZ.js";import{i as s,n as c,r as l,t as u}from"./svg-assets-context-provider-BAjTLxUQ.js";var d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D;t((()=>{l(),o(),d=e(n(),1),c(),i(),f=r(),p=e=>{let[t,n]=(0,d.useState)([]),[r,i]=(0,d.useState)(),{update:o}=(0,d.useContext)(a),c=(0,d.useRef)(null);return(0,d.useEffect)(()=>{c.current&&(n(c.current.getCoordinates()),i(c.current.getCorrectedBBox()))},[c.current,e.stations,e.columns,e.topHeavy,e.osiPosition]),(0,d.useEffect)(()=>{window.update=o,window.ref=c.current},[o,c.current]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(s,{...e,ref:c}),(0,f.jsxs)(`g`,{transform:`translate(40,40)`,children:[(0,f.jsx)(`rect`,{height:60,width:60,fill:`white`}),(0,f.jsx)(`text`,{fontSize:10,children:t.map((e,t)=>(0,f.jsxs)(`tspan`,{x:0,dy:10,children:[`(`,e.join(`, `),`)`]},t))})]}),r&&(0,f.jsx)(`rect`,{x:r.x,y:r.y,width:r.width,height:r.height,className:`shining-border`})]})},m=e=>(0,f.jsx)(u,{children:(0,f.jsx)(p,{...e})}),h={title:`GZMTR/Interchange Station 2024`,component:m},g=`#00629B`,_=`#ECA154`,v=`#97D700`,y=`#008C95`,b=`#ffb00a`,x=`#0047BA`,S=`#CD5228`,C=`#C4D600`,w=`#F5333F`,T={"GZ South":[{strokeColour:g,lineNum:`2`,stnNum:`01`},{strokeColour:S,lineNum:`22`,stnNum:`03`},{style:`fmetro`,strokeColour:w,lineNum:`F2`,stnNum:`27`},{strokeColour:v,lineNum:`7`,stnNum:`01`}],Yangang:[{strokeColour:b,lineNum:`11`,stnNum:`25`},{strokeColour:C,lineNum:`GF`,stnNum:`22`}],Linyuexi:[{style:`fmetro`,strokeColour:w,lineNum:`F2`,stnNum:`25`},{style:`fmetro`,strokeColour:`#5EB3E4`,lineNum:`TNH1`,stnNum:`14`}],"Panyu Square":[{strokeColour:_,lineNum:`3`,stnNum:`01`},{strokeColour:S,lineNum:`22`,stnNum:`01`},{strokeColour:x,lineNum:`18`,stnNum:`03`}],Pazhou:[{strokeColour:y,lineNum:`8`,stnNum:`27`},{strokeColour:b,lineNum:`11`,stnNum:`02`}]},E={args:{stations:[],classNames:{digits:`rmg-name__en`}},argTypes:{stations:{options:Object.keys(T),mapping:T,control:{type:`select`}},columns:{control:{type:`range`,min:1,max:5,step:1}},topHeavy:{options:[!0,!1],control:{type:`radio`}},anchorAt:{control:{type:`range`,min:-1,max:3,step:1}},osiPosition:{options:[`left`,`right`],control:{type:`radio`}}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D=[`InterchangeStation2024`]}))();export{E as InterchangeStation2024,D as __namedExportsOrder,h as default};
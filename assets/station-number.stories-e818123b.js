import{j as t}from"./jsx-runtime-6eef64cc.js";import{r}from"./index-c013ead5.js";/* empty css              */import"./_commonjsHelpers-725317a4.js";const S=r.memo(function(e){const{stroke:a,large:i}=e,o=i?"M0,12.95 V-12.95 H-12.95 a12.95,12.95 0 0,0 0,25.9 h25.9 a12.95,12.95 0 0,0 0,-25.9 H0":"M0,9.25 V-9.25 H-9.25 a9.25,9.25 0 0,0 0,18.5 h18.5 a9.25,9.25 0 0,0 0,-18.5 H0";return t.jsx("path",{d:o,fill:"#fff",strokeWidth:2,stroke:a})},(n,e)=>n.stroke===e.stroke&&n.large===e.large);try{stationicon.displayName="stationicon",stationicon.__docgenInfo={description:"",displayName:"stationicon",props:{stroke:{defaultValue:null,description:"",name:"stroke",required:!0,type:{name:"string"}},large:{defaultValue:null,description:"",name:"large",required:!1,type:{name:"boolean"}}}}}catch{}const s=15;function b(n){const{lineNum:e,stnNum:a,strokeColour:i,passed:o,large:m,textClassName:d,...x}=n,u=r.useRef(null),c=r.useRef(null),[_,y]=r.useState({width:0}),[h,B]=r.useState({width:0});r.useEffect(()=>{u.current&&y(u.current.getBBox()),c.current&&B(c.current.getBBox())},[e,a]);const p=s/Math.max(s,_.width),k=e.length===2&&a.length===2?p:s/Math.max(s,h.width);return t.jsxs("g",{...x,children:[t.jsx(S,{stroke:o?"#aaa":i,large:m}),t.jsxs("g",{textAnchor:"middle",fontSize:13.5,transform:m?"scale(1.4)":"",fill:o?"#aaa":"#000",children:[t.jsx("g",{transform:`translate(-9.25,0)scale(${p})`,children:t.jsx("text",{ref:u,className:d,dominantBaseline:"central",children:e})}),t.jsx("g",{transform:`translate(9.25,0)scale(${k})`,children:t.jsx("text",{ref:c,className:d,dominantBaseline:"central",children:a})})]})]})}try{stationnumber.displayName="stationnumber",stationnumber.__docgenInfo={description:"",displayName:"stationnumber",props:{lineNum:{defaultValue:null,description:"",name:"lineNum",required:!0,type:{name:"string"}},stnNum:{defaultValue:null,description:"",name:"stnNum",required:!0,type:{name:"string"}},strokeColour:{defaultValue:null,description:"",name:"strokeColour",required:!0,type:{name:"string"}},passed:{defaultValue:null,description:"",name:"passed",required:!1,type:{name:"boolean"}},large:{defaultValue:null,description:"",name:"large",required:!1,type:{name:"boolean"}},textClassName:{defaultValue:null,description:"",name:"textClassName",required:!1,type:{name:"string"}}}}}catch{}const E={title:"GZMTR/Station Number",component:b},l={args:{lineNum:"2",stnNum:"01",strokeColour:"#00629B",textClassName:"rmg-name__en"},argTypes:{strokeColour:{control:{type:"color"}},passed:{options:[!0,!1],control:{type:"radio"}},large:{options:[!0,!1],control:{type:"radio"}}}};var f,g,N;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    lineNum: '2',
    stnNum: '01',
    strokeColour: '#00629B',
    textClassName: 'rmg-name__en'
  },
  argTypes: {
    strokeColour: {
      control: {
        type: 'color'
      }
    },
    passed: {
      options: [true, false],
      control: {
        type: 'radio'
      }
    },
    large: {
      options: [true, false],
      control: {
        type: 'radio'
      }
    }
  }
}`,...(N=(g=l.parameters)==null?void 0:g.docs)==null?void 0:N.source}}};const M=["StationNumber"];export{l as StationNumber,M as __namedExportsOrder,E as default};
//# sourceMappingURL=station-number.stories-e818123b.js.map

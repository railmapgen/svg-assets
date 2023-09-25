import{j as t}from"./jsx-runtime-6eef64cc.js";import{r}from"./index-c013ead5.js";import"./_commonjsHelpers-725317a4.js";const k=r.memo(function(e){const{stroke:o,large:i}=e,a=i?"M0,12.95 V-12.95 H-12.95 a12.95,12.95 0 0,0 0,25.9 h25.9 a12.95,12.95 0 0,0 0,-25.9 H0":"M0,9.25 V-9.25 H-9.25 a9.25,9.25 0 0,0 0,18.5 h18.5 a9.25,9.25 0 0,0 0,-18.5 H0";return t.jsx("path",{d:a,fill:"#fff",strokeWidth:2,stroke:o})},(n,e)=>n.stroke===e.stroke&&n.large===e.large);try{stationicon.displayName="stationicon",stationicon.__docgenInfo={description:"",displayName:"stationicon",props:{stroke:{defaultValue:null,description:"",name:"stroke",required:!0,type:{name:"string"}},large:{defaultValue:null,description:"",name:"large",required:!1,type:{name:"boolean"}}}}}catch{}const s=15;function S(n){const{lineNum:e,stnNum:o,strokeColour:i,passed:a,large:m,...N}=n,u=r.useRef(null),c=r.useRef(null),[h,_]=r.useState({width:0}),[x,y]=r.useState({width:0});r.useEffect(()=>{u.current&&_(u.current.getBBox()),c.current&&y(c.current.getBBox())},[e,o]);const d=s/Math.max(s,h.width),B=e.length===2&&o.length===2?d:s/Math.max(s,x.width);return t.jsxs("g",{...N,children:[t.jsx(k,{stroke:a?"#aaa":i,large:m}),t.jsxs("g",{textAnchor:"middle",fontSize:13.5,transform:m?"scale(1.4)":"",fill:a?"#aaa":"#000",children:[t.jsx("g",{transform:`translate(-9.25,0)scale(${d})`,children:t.jsx("text",{ref:u,className:"rmg-name__zh",children:e})}),t.jsx("g",{transform:`translate(9.25,0)scale(${B})`,children:t.jsx("text",{ref:c,className:"rmg-name__zh",children:o})})]})]})}try{stationnumber.displayName="stationnumber",stationnumber.__docgenInfo={description:"",displayName:"stationnumber",props:{lineNum:{defaultValue:null,description:"",name:"lineNum",required:!0,type:{name:"string"}},stnNum:{defaultValue:null,description:"",name:"stnNum",required:!0,type:{name:"string"}},strokeColour:{defaultValue:null,description:"",name:"strokeColour",required:!0,type:{name:"string"}},passed:{defaultValue:null,description:"",name:"passed",required:!1,type:{name:"boolean"}},large:{defaultValue:null,description:"",name:"large",required:!1,type:{name:"boolean"}}}}}catch{}const q={title:"GZMTR/Station Number",component:S},l={args:{lineNum:"2",stnNum:"01",strokeColour:"#00629B"},argTypes:{strokeColour:{control:{type:"color"}},passed:{options:[!0,!1],control:{type:"radio"}},large:{options:[!0,!1],control:{type:"radio"}}}};var p,f,g;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    lineNum: '2',
    stnNum: '01',
    strokeColour: '#00629B'
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
}`,...(g=(f=l.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};const C=["Basic"];export{l as Basic,C as __namedExportsOrder,q as default};
//# sourceMappingURL=station-number.stories-fdc2085f.js.map

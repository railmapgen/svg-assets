import{j as s}from"./jsx-runtime-AgcCsxC8.js";import{r as m}from"./index-XiNr8FW2.js";import{G as p}from"./generic-station-number-YA4DrG0A.js";/* empty css              */import"./_commonjsHelpers-5-cIlDoe.js";const d=m.memo(function(i){const{stroke:n,filled:l}=i,u="M0,9.25 V-9.25 H-9.25 a9.25,9.25 0 0,0 0,18.5 h18.5 a9.25,9.25 0 0,0 0,-18.5 H0";return s.jsx("path",{d:u,fill:l?n:"#fff",strokeWidth:1.3,stroke:n})});try{stationicon.displayName="stationicon",stationicon.__docgenInfo={description:"",displayName:"stationicon",props:{stroke:{defaultValue:null,description:"",name:"stroke",required:!0,type:{name:"string"}},filled:{defaultValue:null,description:"",name:"filled",required:!1,type:{name:"boolean"}}}}}catch{}function c(e){return s.jsx(p,{Icon:d,...e})}try{stationnumber.displayName="stationnumber",stationnumber.__docgenInfo={description:"",displayName:"stationnumber",props:{lineNum:{defaultValue:null,description:"",name:"lineNum",required:!1,type:{name:"string"}},stnNum:{defaultValue:null,description:"",name:"stnNum",required:!1,type:{name:"string"}},strokeColour:{defaultValue:null,description:"",name:"strokeColour",required:!0,type:{name:"string"}},passed:{defaultValue:null,description:"",name:"passed",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},textClassName:{defaultValue:null,description:"",name:"textClassName",required:!1,type:{name:"string"}}}}}catch{}const b={title:"GZMTR/Station Number",component:c},t={args:{lineNum:"2",stnNum:"01",strokeColour:"#00629B",size:"md",textClassName:"rmg-name__en"},argTypes:{strokeColour:{control:{type:"color"}},passed:{options:[!0,!1],control:{type:"radio"}},size:{options:["sm","md","lg"],control:{type:"radio"}}}};var o,r,a;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    lineNum: '2',
    stnNum: '01',
    strokeColour: '#00629B',
    size: 'md',
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
    size: {
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'radio'
      }
    }
  }
}`,...(a=(r=t.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};const x=["StationNumber"];export{t as StationNumber,x as __namedExportsOrder,b as default};

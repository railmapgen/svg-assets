import{j as u}from"./jsx-runtime-AgcCsxC8.js";import{r as c}from"./index-XiNr8FW2.js";import{G as f}from"./generic-station-number-YA4DrG0A.js";/* empty css              */import"./_commonjsHelpers-5-cIlDoe.js";const e=5,t=5.625,s=18.5-2*t,y=c.memo(function(m){const{stroke:r,filled:d}=m,p=`M0,9.25 V-9.25 H-${18.5-e} l-${e},${t} v${s} l${e},${t} H${18.5-e} l${e},-${t} v-${s} l-${e},-${t} H0`;return u.jsx("path",{d:p,fill:d?r:"#fff",strokeWidth:1.3,stroke:r})});try{stationicon.displayName="stationicon",stationicon.__docgenInfo={description:"",displayName:"stationicon",props:{stroke:{defaultValue:null,description:"",name:"stroke",required:!0,type:{name:"string"}},filled:{defaultValue:null,description:"",name:"filled",required:!1,type:{name:"boolean"}}}}}catch{}function _(n){return u.jsx(f,{Icon:y,...n})}try{stationnumber.displayName="stationnumber",stationnumber.__docgenInfo={description:"",displayName:"stationnumber",props:{lineNum:{defaultValue:null,description:"",name:"lineNum",required:!1,type:{name:"string"}},stnNum:{defaultValue:null,description:"",name:"stnNum",required:!1,type:{name:"string"}},strokeColour:{defaultValue:null,description:"",name:"strokeColour",required:!0,type:{name:"string"}},passed:{defaultValue:null,description:"",name:"passed",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},textClassName:{defaultValue:null,description:"",name:"textClassName",required:!1,type:{name:"string"}}}}}catch{}const C={title:"FMetro/Station Number",component:_},o={args:{lineNum:"F2",stnNum:"20",strokeColour:"#F5333F",size:"md",textClassName:"rmg-name__en"},argTypes:{strokeColour:{control:{type:"color"}},passed:{options:[!0,!1],control:{type:"radio"}},size:{options:["sm","md","lg"],control:{type:"radio"}}}};var a,i,l;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    lineNum: 'F2',
    stnNum: '20',
    strokeColour: '#F5333F',
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
}`,...(l=(i=o.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const k=["StationNumber"];export{o as StationNumber,k as __namedExportsOrder,C as default};

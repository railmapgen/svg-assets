import{j as n}from"./jsx-runtime-AgcCsxC8.js";import{r}from"./index-XiNr8FW2.js";/* empty css              */import"./_commonjsHelpers-5-cIlDoe.js";const C=r.memo(function(e){const{stroke:t,filled:i}=e,a="M0,9.25 V-9.25 H-9.25 a9.25,9.25 0 0,0 0,18.5 h18.5 a9.25,9.25 0 0,0 0,-18.5 H0";return n.jsx("path",{d:a,fill:i?t:"#fff",strokeWidth:1.5,stroke:t})},(s,e)=>s.stroke===e.stroke&&s.filled===e.filled);try{stationicon.displayName="stationicon",stationicon.__docgenInfo={description:"",displayName:"stationicon",props:{stroke:{defaultValue:null,description:"",name:"stroke",required:!0,type:{name:"string"}},filled:{defaultValue:null,description:"",name:"filled",required:!1,type:{name:"boolean"}}}}}catch{}const o=15;function b(s){const{lineNum:e,stnNum:t,strokeColour:i,passed:a,size:c,textClassName:d,...x}=s,u=r.useRef(null),m=r.useRef(null),[_,y]=r.useState({width:0}),[h,B]=r.useState({width:0});r.useEffect(()=>{u.current&&y(u.current.getBBox()),m.current&&B(m.current.getBBox())},[e,t]);const p=o/Math.max(o,_.width),k=(e==null?void 0:e.length)===2&&(t==null?void 0:t.length)===2?p:o/Math.max(o,h.width),S=c==="sm"?"0.7":c==="lg"?"1.4":1;return n.jsx("g",{...x,children:n.jsxs("g",{transform:`scale(${S})`,children:[n.jsx(C,{stroke:a?"#aaa":i,filled:!e&&!t}),(e||t)&&n.jsxs("g",{textAnchor:"middle",fontSize:13.5,fill:a?"#aaa":"#000",children:[n.jsx("g",{transform:`translate(-9.25,0)scale(${p})`,children:n.jsx("text",{ref:u,className:d,dominantBaseline:"central",children:e})}),n.jsx("g",{transform:`translate(9.25,0)scale(${k})`,children:n.jsx("text",{ref:m,className:d,dominantBaseline:"central",children:t})})]})]})})}try{stationnumber.displayName="stationnumber",stationnumber.__docgenInfo={description:"",displayName:"stationnumber",props:{lineNum:{defaultValue:null,description:"",name:"lineNum",required:!1,type:{name:"string"}},stnNum:{defaultValue:null,description:"",name:"stnNum",required:!1,type:{name:"string"}},strokeColour:{defaultValue:null,description:"",name:"strokeColour",required:!0,type:{name:"string"}},passed:{defaultValue:null,description:"",name:"passed",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},textClassName:{defaultValue:null,description:"",name:"textClassName",required:!1,type:{name:"string"}}}}}catch{}const E={title:"GZMTR/Station Number",component:b},l={args:{lineNum:"2",stnNum:"01",strokeColour:"#00629B",size:"md",textClassName:"rmg-name__en"},argTypes:{strokeColour:{control:{type:"color"}},passed:{options:[!0,!1],control:{type:"radio"}},size:{options:["sm","md","lg"],control:{type:"radio"}}}};var f,N,g;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(g=(N=l.parameters)==null?void 0:N.docs)==null?void 0:g.source}}};const T=["StationNumber"];export{l as StationNumber,T as __namedExportsOrder,E as default};

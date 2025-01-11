import{j as t}from"./jsx-runtime-BjgbQsUx.js";import{G as m,S as p}from"./gzmtr-context-provider-COn46pli.js";/* empty css              */import{r}from"./index-DEBVq0NN.js";import{G as d}from"./generic-station-number-r9Gv5CgH.js";import"./index-D2MAbzvX.js";const l=o=>{const{update:n}=r.useContext(d);return r.useEffect(()=>{window.update=n},[n]),t.jsxs(t.Fragment,{children:[t.jsx(p,{...o}),t.jsxs("g",{transform:"translate(-100,60)",children:[t.jsx("rect",{height:30,width:200,fill:"white"}),t.jsxs("text",{fontSize:8,children:[t.jsx("tspan",{x:0,dy:8,children:"1. Change textClassName to update font."}),t.jsx("tspan",{x:0,dy:8,children:"2. Use window.update() in console to force update sizing."})]})]})]})},c=o=>t.jsx(m,{children:t.jsx(l,{...o})}),j={title:"GZMTR/Station Number",component:c},e={args:{lineNum:"2",stnNum:"01",strokeColour:"#00629B",size:"md",textClassName:"rmg-name__en"},argTypes:{strokeColour:{control:{type:"color"}},passed:{options:[!0,!1],control:{type:"radio"}},size:{options:["sm","md","lg"],control:{type:"radio"}}}};var s,a,i;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(i=(a=e.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const C=["StationNumber"];export{e as StationNumber,C as __namedExportsOrder,j as default};

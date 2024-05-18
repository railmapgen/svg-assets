import{j as c}from"./jsx-runtime-BZf_YgVj.js";import{r as f}from"./index-CEThVCg_.js";import{G as N}from"./generic-station-number-Da8hAHnS.js";/* empty css              */const o=5,t=5.625,s=18.5-2*t,$=f.memo(function(p){const{stroke:r,filled:u}=p,d=`M0,9.25 V-9.25 H-${18.5-o} l-${o},${t} v${s} l${o},${t} H${18.5-o} l${o},-${t} v-${s} l-${o},-${t} H0`;return c.jsx("path",{d,fill:u?r:"#fff",strokeWidth:1.3,stroke:r})});function l(e){return c.jsx(N,{Icon:$,...e})}l.__docgenInfo={description:"",methods:[],displayName:"StationNumber"};const _={title:"FMetro/Station Number",component:l},n={args:{lineNum:"F2",stnNum:"20",strokeColour:"#F5333F",size:"md",textClassName:"rmg-name__en"},argTypes:{strokeColour:{control:{type:"color"}},passed:{options:[!0,!1],control:{type:"radio"}},size:{options:["sm","md","lg"],control:{type:"radio"}}}};var a,i,m;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=n.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const b=["StationNumber"];export{n as StationNumber,b as __namedExportsOrder,_ as default};

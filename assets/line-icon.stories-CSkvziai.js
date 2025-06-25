import{L as s,M as o}from"./line-icon-C1c4MVqZ.js";import"./jsx-runtime-Cf8x2fCZ.js";import"./index-yBjzXJbu.js";import"./index-BlmOqGMO.js";import"./clsx-B-dksMZM.js";const g={title:"GZMTR/Line Icon",component:s,tags:["autodocs"]},e={typical:{digits:"rmg-name__en",zh:"rmg-name__zh",en:"rmg-name__en"},empty:{}},t={empty:{},nerd:{digits:{fontFamily:"monospace",fontWeight:"bold"},zh:{fontFamily:"Kaiti SC",fontWeight:700},en:{fontFamily:"Times New Roman",fontStyle:"italic"}}},n={args:{zhName:"2号线",enName:"Line 2",foregroundColour:o.white,backgroundColour:"#00629B",spanDigits:!0,classNames:e.typical,textProps:t.empty},argTypes:{zhName:{options:["2号线","18号线","12345号线","APM线","广佛线","佛山2号线","海珠有轨1号线"],control:{type:"inline-radio"}},enName:{options:["Line 2","Line 18","Line 12345","APM Line","Guangfo Line","Foshan Line 2","THZ1"],control:{type:"inline-radio"}},foregroundColour:{options:[o.white,o.black],control:{type:"inline-radio"}},backgroundColour:{control:{type:"color"}},spanDigits:{options:[!0,!1],control:{type:"inline-radio"}},classNames:{options:Object.keys(e),mapping:e,control:{type:"radio"}},textProps:{options:Object.keys(t),mapping:t,control:{type:"radio"}}}};var i,r,a;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    zhName: '2号线',
    enName: 'Line 2',
    foregroundColour: MonoColour.white,
    backgroundColour: '#00629B',
    spanDigits: true,
    classNames: CLASSNAMES_OPTIONS.typical,
    textProps: TEXT_PROPS_OPTIONS.empty
  },
  argTypes: {
    zhName: {
      options: ['2号线', '18号线', '12345号线', 'APM线', '广佛线', '佛山2号线', '海珠有轨1号线'],
      control: {
        type: 'inline-radio'
      }
    },
    enName: {
      options: ['Line 2', 'Line 18', 'Line 12345', 'APM Line', 'Guangfo Line', 'Foshan Line 2', 'THZ1'],
      control: {
        type: 'inline-radio'
      }
    },
    foregroundColour: {
      options: [MonoColour.white, MonoColour.black],
      control: {
        type: 'inline-radio'
      }
    },
    backgroundColour: {
      control: {
        type: 'color'
      }
    },
    spanDigits: {
      options: [true, false],
      control: {
        type: 'inline-radio'
      }
    },
    classNames: {
      options: Object.keys(CLASSNAMES_OPTIONS),
      mapping: CLASSNAMES_OPTIONS,
      control: {
        type: 'radio'
      }
    },
    textProps: {
      options: Object.keys(TEXT_PROPS_OPTIONS),
      mapping: TEXT_PROPS_OPTIONS,
      control: {
        type: 'radio'
      }
    }
  }
}`,...(a=(r=n.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};const u=["LineIcon"];export{n as LineIcon,u as __namedExportsOrder,g as default};

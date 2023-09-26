import{j as l}from"./jsx-runtime-6eef64cc.js";import{r as u}from"./index-c013ead5.js";import"./_commonjsHelpers-725317a4.js";const S=u.memo(function(a){const{lineName:n,commonPart:o,zhClassName:d,enClassName:r}=a,i=u.useRef(null),[m,h]=u.useState({x:0,height:0,width:0});u.useEffect(()=>{i.current&&h(i.current.getBBox())},[n.toString()]);const s=f/Math.max(f,m.width),t=(-m.x-m.width/2)*s,c=m.height*(1-s)*1.2/2;return l.jsx("g",{ref:i,transform:`translate(${t},${c})scale(${s})`,children:l.jsxs("text",{className:d,fontSize:14,y:12,textAnchor:"end",dominantBaseline:"central",children:[o,l.jsx("tspan",{className:d,fontSize:8,x:0,dy:-2,textAnchor:"start",dominantBaseline:"central",children:n[0].slice(o.length).trim()}),l.jsx("tspan",{className:r,fontSize:4,x:0,dy:6,textAnchor:"start",dominantBaseline:"middle",children:n[1].slice(o.length).trim()})]})})},(e,a)=>e.lineName.toString()===a.lineName.toString()&&e.zhClassName===a.zhClassName&&e.enClassName===a.enClassName);try{lineicontype2.displayName="lineicontype2",lineicontype2.__docgenInfo={description:"",displayName:"lineicontype2",props:{lineName:{defaultValue:null,description:"",name:"lineName",required:!0,type:{name:"Name"}},commonPart:{defaultValue:null,description:"",name:"commonPart",required:!0,type:{name:"string"}},zhClassName:{defaultValue:null,description:"",name:"zhClassName",required:!1,type:{name:"string"}},enClassName:{defaultValue:null,description:"",name:"enClassName",required:!1,type:{name:"string"}}}}}catch{}function j(e){return l.jsx("rect",{x:-22.5,height:24,width:45,rx:4.5,...e})}try{interchangebox.displayName="interchangebox",interchangebox.__docgenInfo={description:"",displayName:"interchangebox",props:{}}}catch{}var p;(function(e){e.black="#000",e.white="#fff"})(p||(p={}));globalThis&&globalThis.__awaiter;globalThis&&globalThis.__awaiter;const f=42,E=u.memo(function(a){const{lineName:n,foregroundColour:o,backgroundColour:d,zhClassName:r,enClassName:i,passed:m}=a,[h,s]=I(n),t=u.useRef(null),c=u.useRef(null),[w,b]=u.useState({width:0}),[z,L]=u.useState({width:0});u.useEffect(()=>{t.current&&b(t.current.getBBox()),c.current&&L(c.current.getBBox())},[n.toString()]);const y=f/Math.max(f,w.width),N=f/Math.max(f,z.width),x={nameZh:{y:7.3+13.5*(1-y)*y/2},nameEn:{y:19.5-9*(1-N)*N/2}};return l.jsxs("g",{textAnchor:"middle",fill:m?p.white:o,children:[l.jsx(j,{fill:m?"#aaa":d}),h===2?l.jsx(S,{lineName:n,commonPart:s,zhClassName:r,enClassName:i}):l.jsxs(l.Fragment,{children:[l.jsx("text",{ref:t,className:r,fontSize:12,transform:`translate(0,${x.nameZh.y})scale(${y})`,dominantBaseline:"central",children:h===1?l.jsxs(l.Fragment,{children:[l.jsx("tspan",{fontSize:16,dy:.7,dominantBaseline:"central",children:s}),l.jsx("tspan",{dy:-.7,dominantBaseline:"central",children:n[0].slice(s.length)})]}):n[0]}),l.jsx("text",{ref:c,className:i,fontSize:8,transform:`translate(0,${x.nameEn.y})scale(${N})`,dominantBaseline:"middle",children:n[1]})]})]})},(e,a)=>e.lineName.toString()===a.lineName.toString()&&e.foregroundColour===a.foregroundColour&&e.backgroundColour===a.backgroundColour&&e.zhClassName===a.zhClassName&&e.enClassName===a.enClassName&&e.passed===a.passed),I=e=>{const a=e[0].match(/^(\d+)\D+$/);if(a)return[1,a[1]];const n=e.map(o=>o.match(/^(\w+).+$/));return n[0]&&n[1]&&n[0][1]===n[1][1]?[2,n[0][1]]:[3,""]};try{lineicon.displayName="lineicon",lineicon.__docgenInfo={description:"",displayName:"lineicon",props:{lineName:{defaultValue:null,description:"",name:"lineName",required:!0,type:{name:"Name"}},foregroundColour:{defaultValue:null,description:"",name:"foregroundColour",required:!0,type:{name:"enum",value:[{value:'"#000"'},{value:'"#fff"'}]}},backgroundColour:{defaultValue:null,description:"",name:"backgroundColour",required:!0,type:{name:"`#${string}`"}},zhClassName:{defaultValue:null,description:"",name:"zhClassName",required:!1,type:{name:"string"}},enClassName:{defaultValue:null,description:"",name:"enClassName",required:!1,type:{name:"string"}},passed:{defaultValue:null,description:"",name:"passed",required:!1,type:{name:"boolean"}}}}}catch{}const q={title:"GZMTR/Line Icon",component:E},g={args:{lineName:["2号线","Line 2"],foregroundColour:p.white,backgroundColour:"#00629B",zhClassName:"rmg-name__zh",enClassName:"rmg-name__en"},argTypes:{lineName:{options:[["2号线","Line 2"],["18号线","Line 18"],["APM线","APM Line"],["广佛线","Guangfo Line"],["佛山2号线","Foshan Line 2"]],control:{type:"radio"}},foregroundColour:{options:[p.white,p.black],control:{type:"radio"}},backgroundColour:{control:{type:"color"}}}};var C,_,B;g.parameters={...g.parameters,docs:{...(C=g.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    lineName: ['2号线', 'Line 2'],
    foregroundColour: MonoColour.white,
    backgroundColour: '#00629B',
    zhClassName: 'rmg-name__zh',
    enClassName: 'rmg-name__en'
  },
  argTypes: {
    lineName: {
      options: [['2号线', 'Line 2'], ['18号线', 'Line 18'], ['APM线', 'APM Line'], ['广佛线', 'Guangfo Line'], ['佛山2号线', 'Foshan Line 2']],
      control: {
        type: 'radio'
      }
    },
    foregroundColour: {
      options: [MonoColour.white, MonoColour.black],
      control: {
        type: 'radio'
      }
    },
    backgroundColour: {
      control: {
        type: 'color'
      }
    }
  }
}`,...(B=(_=g.parameters)==null?void 0:_.docs)==null?void 0:B.source}}};const V=["LineIcon"];export{g as LineIcon,V as __namedExportsOrder,q as default};
//# sourceMappingURL=line-icon.stories-94751e48.js.map

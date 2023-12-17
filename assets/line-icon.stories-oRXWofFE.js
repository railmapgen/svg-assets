import{j as a}from"./jsx-runtime-AgcCsxC8.js";import{r as o}from"./index-XiNr8FW2.js";import"./_commonjsHelpers-5-cIlDoe.js";const L=o.memo(function(n){const{lineName:t,commonPart:r,zhClassName:f,enClassName:h}=n,s=o.useRef(null),[i,p]=o.useState({x:0,height:0,width:0});o.useEffect(()=>{s.current&&p(s.current.getBBox())},[t.toString()]);const l=c/Math.max(c,i.width),m=(-i.x-i.width/2)*l,d=i.height*(1-l)*1.2/2;return a.jsx("g",{ref:s,transform:`translate(${m},${d})scale(${l})`,children:a.jsxs("text",{className:f,fontSize:14,y:12,textAnchor:"end",dominantBaseline:"central",children:[r,a.jsx("tspan",{className:f,fontSize:8,x:0,dy:-2,textAnchor:"start",dominantBaseline:"central",children:t[0].slice(r.length).trim()}),a.jsx("tspan",{className:h,fontSize:4,x:0,dy:6,textAnchor:"start",dominantBaseline:"middle",children:t[1].slice(r.length).trim()})]})})},(e,n)=>e.lineName.toString()===n.lineName.toString()&&e.zhClassName===n.zhClassName&&e.enClassName===n.enClassName);try{lineicontype2.displayName="lineicontype2",lineicontype2.__docgenInfo={description:"",displayName:"lineicontype2",props:{lineName:{defaultValue:null,description:"",name:"lineName",required:!0,type:{name:"Name"}},commonPart:{defaultValue:null,description:"",name:"commonPart",required:!0,type:{name:"string"}},zhClassName:{defaultValue:null,description:"",name:"zhClassName",required:!1,type:{name:"string"}},enClassName:{defaultValue:null,description:"",name:"enClassName",required:!1,type:{name:"string"}}}}}catch{}function b(e){return a.jsx("rect",{x:-22.5,height:24,width:45,rx:4.5,...e})}try{interchangebox.displayName="interchangebox",interchangebox.__docgenInfo={description:"",displayName:"interchangebox",props:{}}}catch{}var u;(function(e){e.black="#000",e.white="#fff"})(u||(u={}));const c=42,S=o.memo(function(n){const{lineName:t,foregroundColour:r,backgroundColour:f,zhClassName:h,enClassName:s,passed:i}=n,[p,l]=j(t),m=o.useRef(null),d=o.useRef(null),[w,E]=o.useState({width:0}),[z,F]=o.useState({width:0});o.useEffect(()=>{m.current&&E(m.current.getBBox()),d.current&&F(d.current.getBBox())},[t.toString()]);const y=c/Math.max(c,w.width),N=c/Math.max(c,z.width),x={nameZh:{y:7.3+13.5*(1-y)*y/2},nameEn:{y:19.5-9*(1-N)*N/2}};return a.jsxs("g",{textAnchor:"middle",fill:i?u.white:r,children:[a.jsx(b,{fill:i?"#aaa":f}),p===2?a.jsx(L,{lineName:t,commonPart:l,zhClassName:h,enClassName:s}):a.jsxs(a.Fragment,{children:[a.jsx("text",{ref:m,className:h,fontSize:12,transform:`translate(0,${x.nameZh.y})scale(${y})`,dominantBaseline:"central",children:p===1?a.jsxs(a.Fragment,{children:[a.jsx("tspan",{fontSize:16,dy:.7,dominantBaseline:"central",children:l}),a.jsx("tspan",{dy:-.7,dominantBaseline:"central",children:t[0].slice(l.length)})]}):t[0]}),a.jsx("text",{ref:d,className:s,fontSize:8,transform:`translate(0,${x.nameEn.y})scale(${N})`,dominantBaseline:"middle",children:t[1]})]})]})},(e,n)=>e.lineName.toString()===n.lineName.toString()&&e.foregroundColour===n.foregroundColour&&e.backgroundColour===n.backgroundColour&&e.zhClassName===n.zhClassName&&e.enClassName===n.enClassName&&e.passed===n.passed),j=e=>{const n=e[0].match(/^(\d+)\D+$/);if(n)return[1,n[1]];const t=e.map(r=>r.match(/^(\w+).+$/));return t[0]&&t[1]&&t[0][1]===t[1][1]?[2,t[0][1]]:[3,""]};try{lineicon.displayName="lineicon",lineicon.__docgenInfo={description:"",displayName:"lineicon",props:{lineName:{defaultValue:null,description:"",name:"lineName",required:!0,type:{name:"Name"}},foregroundColour:{defaultValue:null,description:"",name:"foregroundColour",required:!0,type:{name:"enum",value:[{value:'"#000"'},{value:'"#fff"'}]}},backgroundColour:{defaultValue:null,description:"",name:"backgroundColour",required:!0,type:{name:"`#${string}`"}},zhClassName:{defaultValue:null,description:"",name:"zhClassName",required:!1,type:{name:"string"}},enClassName:{defaultValue:null,description:"",name:"enClassName",required:!1,type:{name:"string"}},passed:{defaultValue:null,description:"",name:"passed",required:!1,type:{name:"boolean"}}}}}catch{}const q={title:"GZMTR/Line Icon",component:S},g={args:{lineName:["2号线","Line 2"],foregroundColour:u.white,backgroundColour:"#00629B",zhClassName:"rmg-name__zh",enClassName:"rmg-name__en"},argTypes:{lineName:{options:[["2号线","Line 2"],["18号线","Line 18"],["APM线","APM Line"],["广佛线","Guangfo Line"],["佛山2号线","Foshan Line 2"]],control:{type:"radio"}},foregroundColour:{options:[u.white,u.black],control:{type:"radio"}},backgroundColour:{control:{type:"color"}}}};var C,_,B;g.parameters={...g.parameters,docs:{...(C=g.parameters)==null?void 0:C.docs,source:{originalSource:`{
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

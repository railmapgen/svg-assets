import{j as i}from"./jsx-runtime-6eef64cc.js";import{r as u}from"./index-c013ead5.js";import"./_commonjsHelpers-725317a4.js";const S=u.memo(function(t){const{lineName:e,commonPart:r}=t,m=u.useRef(null),[o,c]=u.useState({x:0,height:0,width:0});u.useEffect(()=>{m.current&&c(m.current.getBBox())},[e.toString()]);const s=h/Math.max(h,o.width),d=(-o.x-o.width/2)*s,l=o.height*(1-s)*1.2/2;return i.jsx("g",{ref:m,transform:`translate(${d},${l})scale(${s})`,children:i.jsxs("text",{className:"rmg-name__zh",fontSize:14,y:12,textAnchor:"end",children:[r,i.jsx("tspan",{className:"rmg-name__zh",fontSize:8,x:0,dy:-2,textAnchor:"start",children:e[0].slice(r.length).trim()}),i.jsx("tspan",{className:"rmg-name__en",fontSize:4,x:0,dy:6,textAnchor:"start",children:e[1].slice(r.length).trim()})]})})},(n,t)=>n.lineName.toString()===t.lineName.toString());try{lineicontype2.displayName="lineicontype2",lineicontype2.__docgenInfo={description:"",displayName:"lineicontype2",props:{lineName:{defaultValue:null,description:"",name:"lineName",required:!0,type:{name:"Name"}},commonPart:{defaultValue:null,description:"",name:"commonPart",required:!0,type:{name:"string"}}}}}catch{}function L(n){return i.jsx("rect",{x:-22.5,height:24,width:45,rx:4.5,...n})}try{interchangebox.displayName="interchangebox",interchangebox.__docgenInfo={description:"",displayName:"interchangebox",props:{}}}catch{}var p;(function(n){n.black="#000",n.white="#fff"})(p||(p={}));globalThis&&globalThis.__awaiter;globalThis&&globalThis.__awaiter;const h=42,j=u.memo(function(t){const{lineName:e,foregroundColour:r,backgroundColour:m,passed:o}=t,[c,s]=E(e),d=u.useRef(null),l=u.useRef(null),[a,f]=u.useState({width:0}),[B,C]=u.useState({width:0});u.useEffect(()=>{d.current&&f(d.current.getBBox()),l.current&&C(l.current.getBBox())},[e.toString()]);const y=h/Math.max(h,a.width),x=h/Math.max(h,B.width),_={nameZh:{y:7.3+13.5*(1-y)*y/2},nameEn:{y:19.5-9*(1-x)*x/2}};return i.jsxs("g",{textAnchor:"middle",fill:o?p.white:r,children:[i.jsx(L,{fill:o?"#aaa":m}),c===2?i.jsx(S,{lineName:e,commonPart:s}):i.jsxs(i.Fragment,{children:[i.jsx("text",{ref:d,className:"rmg-name__zh",fontSize:12,transform:`translate(0,${_.nameZh.y})scale(${y})`,children:c===1?i.jsxs(i.Fragment,{children:[i.jsx("tspan",{fontSize:16,dy:.7,className:"rmg-name__zh",children:s}),i.jsx("tspan",{dy:-.7,className:"rmg-name__zh",children:e[0].slice(s.length)})]}):e[0]}),i.jsx("text",{ref:l,className:"rmg-name__en",fontSize:8,transform:`translate(0,${_.nameEn.y})scale(${x})`,children:e[1]})]})]})},(n,t)=>n.lineName.toString()===t.lineName.toString()&&n.foregroundColour===t.foregroundColour&&n.backgroundColour===t.backgroundColour&&n.passed===t.passed),E=n=>{const t=n[0].match(/^(\d+)\D+$/);if(t)return[1,t[1]];const e=n.map(r=>r.match(/^(\w+).+$/));return e[0]&&e[1]&&e[0][1]===e[1][1]?[2,e[0][1]]:[3,""]};try{lineicon.displayName="lineicon",lineicon.__docgenInfo={description:"",displayName:"lineicon",props:{lineName:{defaultValue:null,description:"",name:"lineName",required:!0,type:{name:"Name"}},foregroundColour:{defaultValue:null,description:"",name:"foregroundColour",required:!0,type:{name:"enum",value:[{value:'"#000"'},{value:'"#fff"'}]}},backgroundColour:{defaultValue:null,description:"",name:"backgroundColour",required:!0,type:{name:"`#${string}`"}},passed:{defaultValue:null,description:"",name:"passed",required:!1,type:{name:"boolean"}}}}}catch{}const z={title:"GZMTR/Line Icon",component:j},g={args:{lineName:["2号线","Line 2"],foregroundColour:p.white,backgroundColour:"#00629B"},argTypes:{lineName:{options:[["2号线","Line 2"],["18号线","Line 18"],["APM线","APM Line"],["广佛线","Guangfo Line"],["佛山2号线","Foshan Line 2"]],control:{type:"radio"}},foregroundColour:{options:[p.white,p.black],control:{type:"radio"}},backgroundColour:{control:{type:"color"}}}};var N,w,b;g.parameters={...g.parameters,docs:{...(N=g.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    lineName: ['2号线', 'Line 2'],
    foregroundColour: MonoColour.white,
    backgroundColour: '#00629B'
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
}`,...(b=(w=g.parameters)==null?void 0:w.docs)==null?void 0:b.source}}};const I=["Basic"];export{g as Basic,I as __namedExportsOrder,z as default};
//# sourceMappingURL=line-icon.stories-1a75bc84.js.map

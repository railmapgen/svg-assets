import{j as t}from"./jsx-runtime-DWbWqHZ-.js";import{r}from"./index-l2PZgWEW.js";var h;(function(o){o.black="#000",o.white="#fff"})(h||(h={}));const E=45,u=E-3,L=(o,e)=>{const n=[o,e].map(s=>s.match(/^(\w+).+$/));if(n[0]&&n[1]&&n[0][1]===n[1][1])return n[0][1]},q=o=>{const e=o.match(/^(\d+)\D+$/);return e==null?void 0:e[1]};function C(o){const{customWidth:e,...n}=o,s=(e??E)-E;return t.jsx("rect",{x:-22.5-s/2,height:24,width:e??E,rx:4.5,...n,"data-testid":"intBox"})}C.__docgenInfo={description:"",methods:[],displayName:"InterchangeBox",props:{customWidth:{required:!1,tsType:{name:"number"},description:""}},composes:["SVGProps"]};const F=(o,e)=>{const n=q(o);if(n)return{isDigit:!0,spanningPart:n};const s=L(o,e);return s?{isDigit:!1,spanningPart:s}:{isDigit:!1,spanningPart:""}};function w(o){const{zhName:e,enName:n,foregroundColour:s,backgroundColour:m,zhClassName:p,enClassName:g,passed:c}=o,{isDigit:a,spanningPart:i}=F(e,n),l=r.useRef(null),[d,B]=r.useState({x:0,height:0,width:0});r.useEffect(()=>{l.current&&B(l.current.getBBox())},[e,n]);const x=u/Math.max(u,d.width),y=(-d.x-d.width/2)*x,f=d.height*(1-x)/2;return t.jsxs("g",{textAnchor:"middle",fill:c?h.white:s,children:[t.jsx(C,{fill:c?"#aaa":m}),t.jsx("g",{ref:l,transform:`translate(${y},${f})scale(${x})`,children:t.jsxs("text",{className:p,fontSize:21,x:-1,y:12,textAnchor:"end",dominantBaseline:"central",children:[i,t.jsx("tspan",{className:p,fontSize:10,x:0,dy:-4,textAnchor:"start",dominantBaseline:"central",children:e.slice(i.length).trim()}),t.jsx("tspan",{className:g,fontSize:6.5,letterSpacing:-.1,x:0,dy:10,textAnchor:"start",dominantBaseline:"middle",children:a?n:n.slice(i.length).trim()})]})})]})}w.__docgenInfo={description:"",methods:[],displayName:"LineIconSpan",props:{zhName:{required:!0,tsType:{name:"string"},description:""},enName:{required:!0,tsType:{name:"string"},description:""},foregroundColour:{required:!0,tsType:{name:"MonoColour"},description:""},backgroundColour:{required:!0,tsType:{name:"ColourHex"},description:""},zhClassName:{required:!1,tsType:{name:"string"},description:""},enClassName:{required:!1,tsType:{name:"string"},description:""},passed:{required:!1,tsType:{name:"boolean"},description:""},spanDigits:{required:!1,tsType:{name:"boolean"},description:""}}};function _(o){const{zhName:e,enName:n,foregroundColour:s,backgroundColour:m,zhClassName:p,enClassName:g,passed:c}=o,a=q(e)??"",i=r.useRef(null),l=r.useRef(null),[d,B]=r.useState({width:0}),[x,y]=r.useState({width:0});r.useEffect(()=>{i.current&&B(i.current.getBBox()),l.current&&y(l.current.getBBox())},[e,n]);const f=u/Math.max(u,d.width),N=u/Math.max(u,x.width),z={nameZh:{y:7.3+13.5*(1-f)*f/2},nameEn:{y:19.5-9*(1-N)*N/2}};return t.jsxs("g",{textAnchor:"middle",fill:c?h.white:s,children:[t.jsx(C,{fill:c?"#aaa":m}),t.jsxs("text",{ref:i,className:p,fontSize:12,transform:`translate(0,${z.nameZh.y})scale(${f})`,dominantBaseline:"central",children:[t.jsx("tspan",{fontSize:16,dy:.7,dominantBaseline:"central",children:a}),t.jsx("tspan",{dy:-.7,dominantBaseline:"central",children:e.slice(a.length)})]}),t.jsx("text",{ref:l,className:g,fontSize:8,transform:`translate(0,${z.nameEn.y})scale(${N})`,dominantBaseline:"middle",children:n})]})}_.__docgenInfo={description:"",methods:[],displayName:"LineIconNumber",props:{zhName:{required:!0,tsType:{name:"string"},description:""},enName:{required:!0,tsType:{name:"string"},description:""},foregroundColour:{required:!0,tsType:{name:"MonoColour"},description:""},backgroundColour:{required:!0,tsType:{name:"ColourHex"},description:""},zhClassName:{required:!1,tsType:{name:"string"},description:""},enClassName:{required:!1,tsType:{name:"string"},description:""},passed:{required:!1,tsType:{name:"boolean"},description:""},spanDigits:{required:!1,tsType:{name:"boolean"},description:""}}};function I(o){const{zhName:e,enName:n,foregroundColour:s,backgroundColour:m,zhClassName:p,enClassName:g,passed:c}=o,a=r.useRef(null),[i,l]=r.useState({width:0});r.useEffect(()=>{a.current&&l(a.current.getBBox())},[e,n]);const d=Math.max(45,i.width+4);return t.jsxs("g",{textAnchor:"middle",fill:c?h.white:s,children:[t.jsx(C,{customWidth:d,fill:c?"#aaa":m}),t.jsxs("g",{ref:a,children:[t.jsx("text",{className:p,fontSize:8.5,y:8,dominantBaseline:"central",children:e}),t.jsx("text",{className:g,fontSize:5.5,y:18,dominantBaseline:"middle",children:n})]})]})}I.__docgenInfo={description:"",methods:[],displayName:"LineIconLong",props:{zhName:{required:!0,tsType:{name:"string"},description:""},enName:{required:!0,tsType:{name:"string"},description:""},foregroundColour:{required:!0,tsType:{name:"MonoColour"},description:""},backgroundColour:{required:!0,tsType:{name:"ColourHex"},description:""},zhClassName:{required:!1,tsType:{name:"string"},description:""},enClassName:{required:!1,tsType:{name:"string"},description:""},passed:{required:!1,tsType:{name:"boolean"},description:""},spanDigits:{required:!1,tsType:{name:"boolean"},description:""}}};function D(o){const{zhName:e,enName:n,foregroundColour:s,backgroundColour:m,zhClassName:p,enClassName:g,passed:c}=o,a=r.useRef(null),i=r.useRef(null),[l,d]=r.useState({width:0}),[B,x]=r.useState({width:0});r.useEffect(()=>{a.current&&d(a.current.getBBox()),i.current&&x(i.current.getBBox())},[e,n]);const y=u/Math.max(u,l.width),f=u/Math.max(u,B.width),N={nameZh:{y:7.3+13.5*(1-y)*y/2},nameEn:{y:19.5-9*(1-f)*f/2}};return t.jsxs("g",{textAnchor:"middle",fill:c?h.white:s,children:[t.jsx(C,{fill:c?"#aaa":m}),t.jsx("text",{ref:a,className:p,fontSize:12,transform:`translate(0,${N.nameZh.y})scale(${y})`,dominantBaseline:"central",children:e}),t.jsx("text",{ref:i,className:g,fontSize:8,transform:`translate(0,${N.nameEn.y})scale(${f})`,dominantBaseline:"middle",children:n})]})}D.__docgenInfo={description:"",methods:[],displayName:"LineIconText",props:{zhName:{required:!0,tsType:{name:"string"},description:""},enName:{required:!0,tsType:{name:"string"},description:""},foregroundColour:{required:!0,tsType:{name:"MonoColour"},description:""},backgroundColour:{required:!0,tsType:{name:"ColourHex"},description:""},zhClassName:{required:!1,tsType:{name:"string"},description:""},enClassName:{required:!1,tsType:{name:"string"},description:""},passed:{required:!1,tsType:{name:"boolean"},description:""},spanDigits:{required:!1,tsType:{name:"boolean"},description:""}}};const M=r.memo(function(e){const{zhName:n,enName:s,spanDigits:m}=e;switch(k(n,s)){case 1:return m?t.jsx(w,{...e}):t.jsx(_,{...e});case 2:return t.jsx(w,{...e});default:return n.length>=5?t.jsx(I,{...e}):t.jsx(D,{...e})}}),k=(o,e)=>q(o)!==void 0?1:L(o,e)!==void 0?2:3,$={title:"GZMTR/Line Icon",component:M},T={args:{zhName:"2号线",enName:"Line 2",foregroundColour:h.white,backgroundColour:"#00629B",zhClassName:"rmg-name__zh",enClassName:"rmg-name__en",spanDigits:!0},argTypes:{zhName:{options:["2号线","18号线","APM线","广佛线","佛山2号线","海珠有轨1号线"],control:{type:"inline-radio"}},enName:{options:["Line 2","Line 18","APM Line","Guangfo Line","Foshan Line 2","THZ1"],control:{type:"inline-radio"}},foregroundColour:{options:[h.white,h.black],control:{type:"inline-radio"}},backgroundColour:{control:{type:"color"}},spanDigits:{options:[!0,!1],control:{type:"inline-radio"}}}};var S,b,j;T.parameters={...T.parameters,docs:{...(S=T.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    zhName: '2号线',
    enName: 'Line 2',
    foregroundColour: MonoColour.white,
    backgroundColour: '#00629B',
    zhClassName: 'rmg-name__zh',
    enClassName: 'rmg-name__en',
    spanDigits: true
  },
  argTypes: {
    zhName: {
      options: ['2号线', '18号线', 'APM线', '广佛线', '佛山2号线', '海珠有轨1号线'],
      control: {
        type: 'inline-radio'
      }
    },
    enName: {
      options: ['Line 2', 'Line 18', 'APM Line', 'Guangfo Line', 'Foshan Line 2', 'THZ1'],
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
    }
  }
}`,...(j=(b=T.parameters)==null?void 0:b.docs)==null?void 0:j.source}}};const H=["LineIcon"];export{T as LineIcon,H as __namedExportsOrder,$ as default};

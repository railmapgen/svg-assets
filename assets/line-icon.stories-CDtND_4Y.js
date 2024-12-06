import{j as t}from"./jsx-runtime-BjgbQsUx.js";import{r}from"./index-DEBVq0NN.js";import"./index-D2MAbzvX.js";var h;(function(o){o.black="#000",o.white="#fff"})(h||(h={}));const w=45,u=w-3,_=(o,e)=>{const n=[o,e].map(s=>s.match(/^(\w+).+$/));if(n[0]&&n[1]&&n[0][1]===n[1][1])return n[0][1]},z=o=>{const e=o.match(/^(\d+)\D+$/);return e==null?void 0:e[1]};function B(o){const{customWidth:e,...n}=o,s=(e??w)-w;return t.jsx("rect",{x:-22.5-s/2,height:24,width:e??w,rx:4.5,...n,"data-testid":"intBox"})}B.__docgenInfo={description:"",methods:[],displayName:"InterchangeBox",props:{customWidth:{required:!1,tsType:{name:"number"},description:""}},composes:["SVGProps"]};const M=(o,e)=>{const n=z(o);if(n)return{isDigit:!0,spanningPart:n};const s=_(o,e);return s?{isDigit:!1,spanningPart:s}:{isDigit:!1,spanningPart:""}};function q(o){const{zhName:e,enName:n,foregroundColour:s,backgroundColour:m,zhClassName:p,enClassName:g,passed:c}=o,{isDigit:a,spanningPart:i}=M(e,n),l=r.useRef(null),[d,C]=r.useState({x:0,height:0,width:0});r.useEffect(()=>{l.current&&C(l.current.getBBox())},[e,n]);const x=u/Math.max(u,d.width),y=(-d.x-d.width/2)*x,f=d.height*(1-x)/2;return t.jsxs("g",{textAnchor:"middle",fill:c?h.white:s,children:[t.jsx(B,{fill:c?"#aaa":m}),t.jsx("g",{ref:l,transform:`translate(${y},${f})scale(${x})`,children:t.jsxs("text",{className:p,fontSize:21,x:-1,y:12,textAnchor:"end",dominantBaseline:"central",children:[i,t.jsx("tspan",{className:p,fontSize:10,x:0,dy:-4,textAnchor:"start",dominantBaseline:"central",children:e.slice(i.length).trim()}),t.jsx("tspan",{className:g,fontSize:6.5,letterSpacing:-.1,x:0,dy:10,textAnchor:"start",dominantBaseline:"middle",children:a?n:n.slice(i.length).trim()})]})})]})}q.__docgenInfo={description:"",methods:[],displayName:"LineIconSpan",props:{zhName:{required:!0,tsType:{name:"string"},description:""},enName:{required:!0,tsType:{name:"string"},description:""},foregroundColour:{required:!0,tsType:{name:"MonoColour"},description:""},backgroundColour:{required:!0,tsType:{name:"ColourHex"},description:""},zhClassName:{required:!1,tsType:{name:"string"},description:""},enClassName:{required:!1,tsType:{name:"string"},description:""},passed:{required:!1,tsType:{name:"boolean"},description:""},spanDigits:{required:!1,tsType:{name:"boolean"},description:""}}};function E(o){const{zhName:e,enName:n,foregroundColour:s,backgroundColour:m,zhClassName:p,enClassName:g,passed:c}=o,a=z(e)??"",i=r.useRef(null),l=r.useRef(null),[d,C]=r.useState({width:0}),[x,y]=r.useState({width:0});r.useEffect(()=>{i.current&&C(i.current.getBBox()),l.current&&y(l.current.getBBox())},[e,n]);const f=u/Math.max(u,d.width),N=u/Math.max(u,x.width),S={nameZh:{y:7.3+13.5*(1-f)*f/2},nameEn:{y:19.5-9*(1-N)*N/2}};return t.jsxs("g",{textAnchor:"middle",fill:c?h.white:s,children:[t.jsx(B,{fill:c?"#aaa":m}),t.jsxs("text",{ref:i,className:p,fontSize:12,transform:`translate(0,${S.nameZh.y})scale(${f})`,dominantBaseline:"central",children:[t.jsx("tspan",{fontSize:16,dy:.7,dominantBaseline:"central",children:a}),t.jsx("tspan",{dy:-.7,dominantBaseline:"central",children:e.slice(a.length)})]}),t.jsx("text",{ref:l,className:g,fontSize:8,transform:`translate(0,${S.nameEn.y})scale(${N})`,dominantBaseline:"middle",children:n})]})}E.__docgenInfo={description:"",methods:[],displayName:"LineIconNumber",props:{zhName:{required:!0,tsType:{name:"string"},description:""},enName:{required:!0,tsType:{name:"string"},description:""},foregroundColour:{required:!0,tsType:{name:"MonoColour"},description:""},backgroundColour:{required:!0,tsType:{name:"ColourHex"},description:""},zhClassName:{required:!1,tsType:{name:"string"},description:""},enClassName:{required:!1,tsType:{name:"string"},description:""},passed:{required:!1,tsType:{name:"boolean"},description:""},spanDigits:{required:!1,tsType:{name:"boolean"},description:""}}};function I(o){const{zhName:e,enName:n,foregroundColour:s,backgroundColour:m,zhClassName:p,enClassName:g,passed:c}=o,a=r.useRef(null),[i,l]=r.useState({width:0});r.useEffect(()=>{a.current&&l(a.current.getBBox())},[e,n]);const d=Math.max(45,i.width+4);return t.jsxs("g",{textAnchor:"middle",fill:c?h.white:s,children:[t.jsx(B,{customWidth:d,fill:c?"#aaa":m}),t.jsxs("g",{ref:a,children:[t.jsx("text",{className:p,fontSize:8.5,y:8,dominantBaseline:"central",children:e}),t.jsx("text",{className:g,fontSize:5.5,y:18,dominantBaseline:"middle",children:n})]})]})}I.__docgenInfo={description:"",methods:[],displayName:"LineIconLong",props:{zhName:{required:!0,tsType:{name:"string"},description:""},enName:{required:!0,tsType:{name:"string"},description:""},foregroundColour:{required:!0,tsType:{name:"MonoColour"},description:""},backgroundColour:{required:!0,tsType:{name:"ColourHex"},description:""},zhClassName:{required:!1,tsType:{name:"string"},description:""},enClassName:{required:!1,tsType:{name:"string"},description:""},passed:{required:!1,tsType:{name:"boolean"},description:""},spanDigits:{required:!1,tsType:{name:"boolean"},description:""}}};function D(o){const{zhName:e,enName:n,foregroundColour:s,backgroundColour:m,zhClassName:p,enClassName:g,passed:c}=o,a=r.useRef(null),i=r.useRef(null),[l,d]=r.useState({width:0}),[C,x]=r.useState({width:0});r.useEffect(()=>{a.current&&d(a.current.getBBox()),i.current&&x(i.current.getBBox())},[e,n]);const y=u/Math.max(u,l.width),f=u/Math.max(u,C.width),N={nameZh:{y:7.3+13.5*(1-y)*y/2},nameEn:{y:19.5-9*(1-f)*f/2}};return t.jsxs("g",{textAnchor:"middle",fill:c?h.white:s,children:[t.jsx(B,{fill:c?"#aaa":m}),t.jsx("text",{ref:a,className:p,fontSize:12,transform:`translate(0,${N.nameZh.y})scale(${y})`,dominantBaseline:"central",children:e}),t.jsx("text",{ref:i,className:g,fontSize:8,transform:`translate(0,${N.nameEn.y})scale(${f})`,dominantBaseline:"middle",children:n})]})}D.__docgenInfo={description:"",methods:[],displayName:"LineIconText",props:{zhName:{required:!0,tsType:{name:"string"},description:""},enName:{required:!0,tsType:{name:"string"},description:""},foregroundColour:{required:!0,tsType:{name:"MonoColour"},description:""},backgroundColour:{required:!0,tsType:{name:"ColourHex"},description:""},zhClassName:{required:!1,tsType:{name:"string"},description:""},enClassName:{required:!1,tsType:{name:"string"},description:""},passed:{required:!1,tsType:{name:"boolean"},description:""},spanDigits:{required:!1,tsType:{name:"boolean"},description:""}}};const k=r.memo(function(e){const{zhName:n,enName:s,spanDigits:m}=e;switch(Z(n,s)){case 1:return m?t.jsx(q,{...e}):t.jsx(E,{...e});case 2:return t.jsx(q,{...e});default:return n.length>=5?t.jsx(I,{...e}):t.jsx(D,{...e})}}),Z=(o,e)=>z(o)!==void 0?1:_(o,e)!==void 0?2:3,R={title:"GZMTR/Line Icon",component:k},T={args:{zhName:"2号线",enName:"Line 2",foregroundColour:h.white,backgroundColour:"#00629B",zhClassName:"rmg-name__zh",enClassName:"rmg-name__en",spanDigits:!0},argTypes:{zhName:{options:["2号线","18号线","APM线","广佛线","佛山2号线","海珠有轨1号线"],control:{type:"inline-radio"}},enName:{options:["Line 2","Line 18","APM Line","Guangfo Line","Foshan Line 2","THZ1"],control:{type:"inline-radio"}},foregroundColour:{options:[h.white,h.black],control:{type:"inline-radio"}},backgroundColour:{control:{type:"color"}},spanDigits:{options:[!0,!1],control:{type:"inline-radio"}}}};var b,j,L;T.parameters={...T.parameters,docs:{...(b=T.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(L=(j=T.parameters)==null?void 0:j.docs)==null?void 0:L.source}}};const P=["LineIcon"];export{T as LineIcon,P as __namedExportsOrder,R as default};

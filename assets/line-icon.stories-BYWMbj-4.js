import{j as a}from"./jsx-runtime-AgcCsxC8.js";import{r as o}from"./index-XiNr8FW2.js";import"./_commonjsHelpers-5-cIlDoe.js";var p;(function(n){n.black="#000",n.white="#fff"})(p||(p={}));const _=45,d=_-3,S=n=>{const e=n.map(t=>t.match(/^(\w+).+$/));if(e[0]&&e[1]&&e[0][1]===e[1][1])return e[0][1]},D=n=>{const e=n[0].match(/^(\d+)\D+$/);return e==null?void 0:e[1]};function B(n){const{customWidth:e,...t}=n,l=(e??_)-_;return a.jsx("rect",{x:-22.5-l/2,height:24,width:e??_,rx:4.5,...t,"data-testid":"intBox"})}try{interchangebox.displayName="interchangebox",interchangebox.__docgenInfo={description:"",displayName:"interchangebox",props:{customWidth:{defaultValue:null,description:"",name:"customWidth",required:!1,type:{name:"number"}}}}}catch{}const j=n=>{const e=D(n);if(e)return{isDigit:!0,spanningPart:e};const t=S(n);return t?{isDigit:!1,spanningPart:t}:{isDigit:!1,spanningPart:""}};function q(n){const{lineName:e,foregroundColour:t,backgroundColour:l,zhClassName:m,enClassName:g,passed:s}=n,{isDigit:i,spanningPart:r}=j(e),u=o.useRef(null),[c,N]=o.useState({x:0,height:0,width:0});o.useEffect(()=>{u.current&&N(u.current.getBBox())},[e.toString()]);const h=d/Math.max(d,c.width),y=(-c.x-c.width/2)*h,f=c.height*(1-h)/2;return a.jsxs("g",{textAnchor:"middle",fill:s?p.white:t,children:[a.jsx(B,{fill:s?"#aaa":l}),a.jsx("g",{ref:u,transform:`translate(${y},${f})scale(${h})`,children:a.jsxs("text",{className:m,fontSize:21,x:-1,y:12,textAnchor:"end",dominantBaseline:"central",children:[r,a.jsx("tspan",{className:m,fontSize:10,x:0,dy:-4,textAnchor:"start",dominantBaseline:"central",children:e[0].slice(r.length).trim()}),a.jsx("tspan",{className:g,fontSize:6.5,letterSpacing:-.1,x:0,dy:10,textAnchor:"start",dominantBaseline:"middle",children:i?e[1]:e[1].slice(r.length).trim()})]})})]})}try{lineiconspan.displayName="lineiconspan",lineiconspan.__docgenInfo={description:"",displayName:"lineiconspan",props:{lineName:{defaultValue:null,description:"",name:"lineName",required:!0,type:{name:"Name"}},foregroundColour:{defaultValue:null,description:"",name:"foregroundColour",required:!0,type:{name:"enum",value:[{value:'"#000"'},{value:'"#fff"'}]}},backgroundColour:{defaultValue:null,description:"",name:"backgroundColour",required:!0,type:{name:"`#${string}`"}},zhClassName:{defaultValue:null,description:"",name:"zhClassName",required:!1,type:{name:"string"}},enClassName:{defaultValue:null,description:"",name:"enClassName",required:!1,type:{name:"string"}},passed:{defaultValue:null,description:"",name:"passed",required:!1,type:{name:"boolean"}},spanDigits:{defaultValue:null,description:"",name:"spanDigits",required:!1,type:{name:"boolean"}}}}}catch{}function L(n){var z;const{lineName:e,foregroundColour:t,backgroundColour:l,zhClassName:m,enClassName:g,passed:s}=n,i=((z=e[0].match(/^(\d+)\D+$/))==null?void 0:z[1])??"",r=o.useRef(null),u=o.useRef(null),[c,N]=o.useState({width:0}),[h,y]=o.useState({width:0});o.useEffect(()=>{r.current&&N(r.current.getBBox()),u.current&&y(u.current.getBBox())},[e.toString()]);const f=d/Math.max(d,c.width),x=d/Math.max(d,h.width),b={nameZh:{y:7.3+13.5*(1-f)*f/2},nameEn:{y:19.5-9*(1-x)*x/2}};return a.jsxs("g",{textAnchor:"middle",fill:s?p.white:t,children:[a.jsx(B,{fill:s?"#aaa":l}),a.jsxs("text",{ref:r,className:m,fontSize:12,transform:`translate(0,${b.nameZh.y})scale(${f})`,dominantBaseline:"central",children:[a.jsx("tspan",{fontSize:16,dy:.7,dominantBaseline:"central",children:i}),a.jsx("tspan",{dy:-.7,dominantBaseline:"central",children:e[0].slice(i.length)})]}),a.jsx("text",{ref:u,className:g,fontSize:8,transform:`translate(0,${b.nameEn.y})scale(${x})`,dominantBaseline:"middle",children:e[1]})]})}try{lineiconnumber.displayName="lineiconnumber",lineiconnumber.__docgenInfo={description:"",displayName:"lineiconnumber",props:{lineName:{defaultValue:null,description:"",name:"lineName",required:!0,type:{name:"Name"}},foregroundColour:{defaultValue:null,description:"",name:"foregroundColour",required:!0,type:{name:"enum",value:[{value:'"#000"'},{value:'"#fff"'}]}},backgroundColour:{defaultValue:null,description:"",name:"backgroundColour",required:!0,type:{name:"`#${string}`"}},zhClassName:{defaultValue:null,description:"",name:"zhClassName",required:!1,type:{name:"string"}},enClassName:{defaultValue:null,description:"",name:"enClassName",required:!1,type:{name:"string"}},passed:{defaultValue:null,description:"",name:"passed",required:!1,type:{name:"boolean"}},spanDigits:{defaultValue:null,description:"",name:"spanDigits",required:!1,type:{name:"boolean"}}}}}catch{}function k(n){const{lineName:e,foregroundColour:t,backgroundColour:l,zhClassName:m,enClassName:g,passed:s}=n,i=o.useRef(null),[r,u]=o.useState({width:0});o.useEffect(()=>{i.current&&u(i.current.getBBox())},[e.toString()]);const c=Math.max(45,r.width+4);return a.jsxs("g",{textAnchor:"middle",fill:s?p.white:t,children:[a.jsx(B,{customWidth:c,fill:s?"#aaa":l}),a.jsxs("g",{ref:i,children:[a.jsx("text",{className:m,fontSize:8.5,y:8,dominantBaseline:"central",children:e[0]}),a.jsx("text",{className:g,fontSize:5.5,y:18,dominantBaseline:"middle",children:e[1]})]})]})}try{lineiconlong.displayName="lineiconlong",lineiconlong.__docgenInfo={description:"",displayName:"lineiconlong",props:{lineName:{defaultValue:null,description:"",name:"lineName",required:!0,type:{name:"Name"}},foregroundColour:{defaultValue:null,description:"",name:"foregroundColour",required:!0,type:{name:"enum",value:[{value:'"#000"'},{value:'"#fff"'}]}},backgroundColour:{defaultValue:null,description:"",name:"backgroundColour",required:!0,type:{name:"`#${string}`"}},zhClassName:{defaultValue:null,description:"",name:"zhClassName",required:!1,type:{name:"string"}},enClassName:{defaultValue:null,description:"",name:"enClassName",required:!1,type:{name:"string"}},passed:{defaultValue:null,description:"",name:"passed",required:!1,type:{name:"boolean"}},spanDigits:{defaultValue:null,description:"",name:"spanDigits",required:!1,type:{name:"boolean"}}}}}catch{}function F(n){const{lineName:e,foregroundColour:t,backgroundColour:l,zhClassName:m,enClassName:g,passed:s}=n,i=o.useRef(null),r=o.useRef(null),[u,c]=o.useState({width:0}),[N,h]=o.useState({width:0});o.useEffect(()=>{i.current&&c(i.current.getBBox()),r.current&&h(r.current.getBBox())},[e.toString()]);const y=d/Math.max(d,u.width),f=d/Math.max(d,N.width),x={nameZh:{y:7.3+13.5*(1-y)*y/2},nameEn:{y:19.5-9*(1-f)*f/2}};return a.jsxs("g",{textAnchor:"middle",fill:s?p.white:t,children:[a.jsx(B,{fill:s?"#aaa":l}),a.jsx("text",{ref:i,className:m,fontSize:12,transform:`translate(0,${x.nameZh.y})scale(${y})`,dominantBaseline:"central",children:e[0]}),a.jsx("text",{ref:r,className:g,fontSize:8,transform:`translate(0,${x.nameEn.y})scale(${f})`,dominantBaseline:"middle",children:e[1]})]})}try{lineicontext.displayName="lineicontext",lineicontext.__docgenInfo={description:"",displayName:"lineicontext",props:{lineName:{defaultValue:null,description:"",name:"lineName",required:!0,type:{name:"Name"}},foregroundColour:{defaultValue:null,description:"",name:"foregroundColour",required:!0,type:{name:"enum",value:[{value:'"#000"'},{value:'"#fff"'}]}},backgroundColour:{defaultValue:null,description:"",name:"backgroundColour",required:!0,type:{name:"`#${string}`"}},zhClassName:{defaultValue:null,description:"",name:"zhClassName",required:!1,type:{name:"string"}},enClassName:{defaultValue:null,description:"",name:"enClassName",required:!1,type:{name:"string"}},passed:{defaultValue:null,description:"",name:"passed",required:!1,type:{name:"boolean"}},spanDigits:{defaultValue:null,description:"",name:"spanDigits",required:!1,type:{name:"boolean"}}}}}catch{}const I=o.memo(function(e){const{lineName:t,spanDigits:l}=e;switch($(t)){case 1:return l?a.jsx(q,{...e}):a.jsx(L,{...e});case 2:return a.jsx(q,{...e});default:return t[0].length>=5?a.jsx(k,{...e}):a.jsx(F,{...e})}},(n,e)=>n.lineName.toString()===e.lineName.toString()&&n.foregroundColour===e.foregroundColour&&n.backgroundColour===e.backgroundColour&&n.zhClassName===e.zhClassName&&n.enClassName===e.enClassName&&n.passed===e.passed&&n.spanDigits===e.spanDigits),$=n=>D(n)!==void 0?1:S(n)!==void 0?2:3;try{lineicon.displayName="lineicon",lineicon.__docgenInfo={description:"",displayName:"lineicon",props:{lineName:{defaultValue:null,description:"",name:"lineName",required:!0,type:{name:"Name"}},foregroundColour:{defaultValue:null,description:"",name:"foregroundColour",required:!0,type:{name:"enum",value:[{value:'"#000"'},{value:'"#fff"'}]}},backgroundColour:{defaultValue:null,description:"",name:"backgroundColour",required:!0,type:{name:"`#${string}`"}},zhClassName:{defaultValue:null,description:"",name:"zhClassName",required:!1,type:{name:"string"}},enClassName:{defaultValue:null,description:"",name:"enClassName",required:!1,type:{name:"string"}},passed:{defaultValue:null,description:"",name:"passed",required:!1,type:{name:"boolean"}},spanDigits:{defaultValue:null,description:"",name:"spanDigits",required:!1,type:{name:"boolean"}}}}}catch{}const v={title:"GZMTR/Line Icon",component:I},C={args:{lineName:["2号线","Line 2"],foregroundColour:p.white,backgroundColour:"#00629B",zhClassName:"rmg-name__zh",enClassName:"rmg-name__en",spanDigits:!0},argTypes:{lineName:{options:["gz2","gz18","apm","gf","fs2","thz1"],mapping:{gz2:["2号线","Line 2"],gz18:["18号线","Line 18"],apm:["APM线","APM Line"],gf:["广佛线","Guangfo Line"],fs2:["佛山2号线","Foshan Line 2"],thz1:["海珠有轨1号线","THZ1"]},control:{type:"radio"}},foregroundColour:{options:[p.white,p.black],control:{type:"radio"}},backgroundColour:{control:{type:"color"}},spanDigits:{options:[!0,!1],control:{type:"radio"}}}};var E,V,w;C.parameters={...C.parameters,docs:{...(E=C.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    lineName: ['2号线', 'Line 2'],
    foregroundColour: MonoColour.white,
    backgroundColour: '#00629B',
    zhClassName: 'rmg-name__zh',
    enClassName: 'rmg-name__en',
    spanDigits: true
  },
  argTypes: {
    lineName: {
      options: ['gz2', 'gz18', 'apm', 'gf', 'fs2', 'thz1'],
      mapping: {
        gz2: ['2号线', 'Line 2'],
        gz18: ['18号线', 'Line 18'],
        apm: ['APM线', 'APM Line'],
        gf: ['广佛线', 'Guangfo Line'],
        fs2: ['佛山2号线', 'Foshan Line 2'],
        thz1: ['海珠有轨1号线', 'THZ1']
      },
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
    },
    spanDigits: {
      options: [true, false],
      control: {
        type: 'radio'
      }
    }
  }
}`,...(w=(V=C.parameters)==null?void 0:V.docs)==null?void 0:w.source}}};const T=["LineIcon"];export{C as LineIcon,T as __namedExportsOrder,v as default};

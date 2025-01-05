import{j as l}from"./jsx-runtime-BjgbQsUx.js";import{b as y,I as h,c as v}from"./generic-station-number-Cl13wupA.js";import{S as L,F as E}from"./station-number-CrHa-nmn.js";import{S as F,a as H}from"./station-number-DKCQwHkv.js";import{r as C}from"./index-DEBVq0NN.js";/* empty css              */import"./index-D2MAbzvX.js";function k({position:t,...i}){const s=t==="right"?"rotate(180)":"rotate(0)";return l.jsx("circle",{cx:-y*.4,cy:0,r:y/4,stroke:"#aaa",strokeWidth:h*1.75,fill:"white",strokeDasharray:"2.7 2.5",transform:s,...i})}k.__docgenInfo={description:"",methods:[],displayName:"OSILink",props:{position:{required:!0,tsType:{name:"union",raw:"'left' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:""}}};const x=(t,i)=>Array.from(Array(t).keys()).map(s=>(s-(t-1)/2)*i),M=(t,i,s)=>{if(t<=0)return[];if(t===1)return[[0,0]];const m=i>t?t:i,a=y,c=v,N=x(m,a),e=Math.ceil(t/m),d=x(e,c),p=t%m,u=[];for(let n=0;n<e;n++){const o=s?e-1:0;if(p===0||n!==o)for(let r=0;r<m;r++)u.push([N[r],d[n]]);else{const r=x(p,a);for(let f=0;f<p;f++)u.push([r[f],d[n]])}}return u},S=t=>t==="fmetro"?E:H;function q({stations:t,textClassName:i,columns:s=2,topHeavy:m,anchorAt:a,osiPosition:c,...N}){const e=C.useMemo(()=>M(t.length,s,m),[t.length,s,m]),[d,p]=C.useMemo(()=>{if(a===void 0)return[0,0];if(a<0||a>=e.length)return console.warn(`<InterchangeStation2024/>, anchor index ${a} is out of bound`),[0,0];{const[n,o]=e[a];return[-n,-o]}},[e,a]),u=t.length===2&&s===1&&!!c;return l.jsxs("g",{transform:`translate(${d},${p})`,...N,children:[t.map(({style:n},o)=>{const r=S(n);return l.jsx(r,{stroke:"#aaa",filled:!0,strokeWidth:h*7,transform:`translate(${e[o][0]},${e[o][1]})`},o)}),u&&l.jsx(k,{position:c,r:y/2.9,strokeWidth:h*2.2,strokeDasharray:void 0}),t.map(({style:n},o)=>{const r=S(n);return l.jsx(r,{stroke:"white",filled:!0,strokeWidth:h*2.6,transform:`translate(${e[o][0]},${e[o][1]})`},o)}),u&&l.jsx(k,{position:c}),t.length&&l.jsx("rect",{fill:"white",x:-12,y:e[0][1],width:24,height:-e[0][1]*2}),t.map(({style:n,...o},r)=>{const f=n==="fmetro"?L:F;return l.jsx(f,{transform:`translate(${e[r][0]},${e[r][1]})`,textClassName:i,...o},r)})]})}q.__docgenInfo={description:"",methods:[],displayName:"InterchangeStation2024",props:{stations:{required:!0,tsType:{name:"Array",elements:[{name:"StationProps"}],raw:"StationProps[]"},description:""},textClassName:{required:!1,tsType:{name:"string"},description:""},columns:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"2",computed:!1}},topHeavy:{required:!1,tsType:{name:"boolean"},description:""},anchorAt:{required:!1,tsType:{name:"number"},description:""},osiPosition:{required:!1,tsType:{name:"union",raw:"'left' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:""}},composes:["SVGProps"]};const Y={title:"GZMTR/Interchange Station 2024",component:q,tags:["autodocs"]},D="#00629B",I="#ECA154",_="#97D700",P="#008C95",W="#ffb00a",A="#0047BA",T="#CD5228",O="#F5333F",G="#5EB3E4",j={"GZ South":[{strokeColour:D,lineNum:"2",stnNum:"01"},{strokeColour:T,lineNum:"22",stnNum:"03"},{style:"fmetro",strokeColour:O,lineNum:"F2",stnNum:"27"},{strokeColour:_,lineNum:"7",stnNum:"01"}],"Hanxi Changlong":[{strokeColour:I,lineNum:"3",stnNum:"03"},{strokeColour:_,lineNum:"7",stnNum:"05"}],Linyuexi:[{style:"fmetro",strokeColour:O,lineNum:"F2",stnNum:"25"},{style:"fmetro",strokeColour:G,lineNum:"TNH1",stnNum:"14"}],"Panyu Square":[{strokeColour:I,lineNum:"3",stnNum:"01"},{strokeColour:T,lineNum:"22",stnNum:"01"},{strokeColour:A,lineNum:"18",stnNum:"03"}],Pazhou:[{strokeColour:P,lineNum:"8",stnNum:"27"},{strokeColour:W,lineNum:"11",stnNum:"02"}]},g={args:{stations:[],textClassName:"rmg-name__en"},argTypes:{stations:{options:Object.keys(j),mapping:j,control:{type:"select"}},columns:{control:{type:"range",min:1,max:5,step:1}},topHeavy:{options:[!0,!1],control:{type:"radio"}},anchorAt:{control:{type:"range",min:-1,max:3,step:1}},osiPosition:{options:["left","right"],control:{type:"radio"}}}};var b,w,$;g.parameters={...g.parameters,docs:{...(b=g.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    stations: [],
    textClassName: 'rmg-name__en'
  },
  argTypes: {
    stations: {
      options: Object.keys(stationOptions),
      mapping: stationOptions,
      control: {
        type: 'select'
      }
    },
    columns: {
      control: {
        type: 'range',
        min: 1,
        max: 5,
        step: 1
      }
    },
    topHeavy: {
      options: [true, false],
      control: {
        type: 'radio'
      }
    },
    anchorAt: {
      control: {
        type: 'range',
        min: -1,
        max: 3,
        step: 1
      }
    },
    osiPosition: {
      options: ['left', 'right'],
      control: {
        type: 'radio'
      }
    }
  }
}`,...($=(w=g.parameters)==null?void 0:w.docs)==null?void 0:$.source}}};const J=["InterchangeStation2024"];export{g as InterchangeStation2024,J as __namedExportsOrder,Y as default};

import{R as o,r as i}from"./index-l2PZgWEW.js";import{u as c,r as h}from"./react-18-DAZJrOOF.js";var u=Object.defineProperty,E=(e,r)=>{for(var t in r)u(e,t,{get:r[t],enumerable:!0})};const{global:_}=__STORYBOOK_MODULE_GLOBAL__;var f={};E(f,{parameters:()=>w,render:()=>v,renderToCanvas:()=>g});var v=(e,r)=>{let{id:t,component:n}=r;if(!n)throw new Error(`Unable to render story ${t} as the component annotation is missing from the default export`);return o.createElement(n,{...e})},{FRAMEWORK_OPTIONS:s}=_,x=class extends i.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidMount(){let{hasError:e}=this.state,{showMain:r}=this.props;e||r()}componentDidCatch(e){let{showException:r}=this.props;r(e)}render(){let{hasError:e}=this.state,{children:r}=this.props;return e?null:r}},m=s!=null&&s.strictMode?i.StrictMode:i.Fragment;async function g({storyContext:e,unboundStoryFn:r,showMain:t,showException:n,forceRemount:d},a){let p=o.createElement(x,{showMain:t,showException:n},o.createElement(r,{...e})),l=m?o.createElement(m,null,p):p;return d&&c(a),await h(l,a),()=>c(a)}var w={renderer:"react"};export{w as parameters,v as render,g as renderToCanvas};

import{u as d}from"./asyncData.d2d883a6.js";import{d as l,au as f,I as v,q as p,V as m,av as g,a4 as h,aw as y,M as u,E as _}from"./entry.e22c17d5.js";const N=l({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(r){const{query:a}=f(r),n=v(()=>{var t;return typeof((t=a.value)==null?void 0:t.params)=="function"?a.value.params():a.value});if(!n.value&&p("dd-navigation").value){const{navigation:t}=m();return{navigation:t}}const{data:o}=await d(`content-navigation-${g(n.value)}`,()=>y(n.value));return{navigation:o}},render(r){const a=h(),{navigation:n}=r,o=e=>u(_,{to:e._path},()=>e.title),t=(e,i)=>u("ul",i?{"data-level":i}:null,e.map(s=>s.children?u("li",null,[o(s),t(s.children,i+1)]):u("li",null,o(s)))),c=e=>t(e,0);return a!=null&&a.default?a.default({navigation:n,...this.$attrs}):c(n)}});export{N as default};

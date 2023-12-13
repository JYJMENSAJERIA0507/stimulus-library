"use strict";(self.webpackChunkdocs_2=self.webpackChunkdocs_2||[]).push([[5930],{9892:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var s=n(5893),r=n(1151);const o={id:"installation",title:"Installation",sidebar_label:"Installation",slug:"/"},i=void 0,l={id:"installation",title:"Installation",description:"To get started, you'll need to add the stimulus-library package to your project.",source:"@site/docs/installation.mdx",sourceDirName:".",slug:"/",permalink:"/stimulus-library/docs/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"installation",title:"Installation",sidebar_label:"Installation",slug:"/"},sidebar:"DocsSidebar",next:{title:"Tree-shaking",permalink:"/stimulus-library/docs/treeshaking"}},a={},c=[];function d(e){const t={code:"code",em:"em",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["To get started, you'll need to add the ",(0,s.jsx)(t.code,{children:"stimulus-library"})," package to your project."]}),"\n",(0,s.jsxs)(t.p,{children:["To do so, either add ",(0,s.jsx)(t.code,{children:"stimulus-library"})," to your package.json manually"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\n  "dependencies": {\n    "stimulus-library": "latest"\n  }\n}\n'})}),"\n",(0,s.jsxs)(t.p,{children:["or run\n",(0,s.jsx)(t.code,{children:"npm install --save stimulus-library"})," or ",(0,s.jsx)(t.code,{children:"yarn add stimulus-library"})]}),"\n",(0,s.jsx)(t.p,{children:"Then, to get started, import and register the controllers you want to use."}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.em,{children:"Please Note"})," as below, that when registering the name for the controller, you should use ",(0,s.jsx)(t.code,{children:"kebab-case"})," and omit the ",(0,s.jsx)(t.code,{children:"-controller"})," suffix."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:'import { Application } from "@hotwired/stimulus";\nimport { AutoSubmitFormController } from "stimulus-library";\n\nconst application = Application.start();\napplication.register("auto-submit-form", AutoSubmitFormController);\n'})})]})}function u(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>i});var s=n(7294);const r={},o=s.createContext(r);function i(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);
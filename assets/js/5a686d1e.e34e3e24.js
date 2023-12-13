"use strict";(self.webpackChunkdocs_2=self.webpackChunkdocs_2||[]).push([[1203],{1659:(e,t,n)=>{n.d(t,{ZP:()=>l});var s=n(5893),r=n(1151);function d(e){const t={code:"code",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Action"}),(0,s.jsx)(t.th,{children:"Purpose"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"-"})}),(0,s.jsx)(t.td,{children:"-"})]})})]})}function l(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},3983:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>x,frontMatter:()=>l,metadata:()=>i,toc:()=>h});var s=n(5893),r=n(1151),d=n(1659);const l={id:"CountdownController",title:"CountdownController"},o=void 0,i={id:"controllers/visual/CountdownController",title:"CountdownController",description:"Purpose",source:"@site/docs/controllers/visual/countdown_controller.mdx",sourceDirName:"controllers/visual",slug:"/controllers/visual/CountdownController",permalink:"/stimulus-library/docs/controllers/visual/CountdownController",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"CountdownController",title:"CountdownController"},sidebar:"DocsSidebar",previous:{title:"ClockController",permalink:"/stimulus-library/docs/controllers/visual/ClockController"},next:{title:"DurationController",permalink:"/stimulus-library/docs/controllers/visual/DurationController"}},c={},h=[{value:"Purpose",id:"purpose",level:2},{value:"Actions",id:"actions",level:2},{value:"Targets",id:"targets",level:2},{value:"Classes",id:"classes",level:2},{value:"Values",id:"values",level:2},{value:"Events",id:"events",level:2},{value:"Side Effects",id:"side-effects",level:2},{value:"How to Use",id:"how-to-use",level:2}];function a(e){const t={a:"a",code:"code",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"purpose",children:"Purpose"}),"\n",(0,s.jsx)(t.p,{children:"A controller that displays a countdown clock to a specified date/time."}),"\n",(0,s.jsx)(t.h2,{id:"actions",children:(0,s.jsx)(t.a,{href:"https://stimulus.hotwire.dev/reference/actions",children:"Actions"})}),"\n",(0,s.jsx)(d.ZP,{}),"\n",(0,s.jsx)(t.h2,{id:"targets",children:(0,s.jsx)(t.a,{href:"https://stimulus.hotwire.dev/reference/targets",children:"Targets"})}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Target"}),(0,s.jsx)(t.th,{children:"Purpose"}),(0,s.jsx)(t.th,{children:"Default"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.code,{children:"years"})," (Optional)"]}),(0,s.jsx)(t.td,{children:"The target to display the number of years left in the countdown"}),(0,s.jsx)(t.td,{children:"-"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.code,{children:"months"})," (Optional)"]}),(0,s.jsx)(t.td,{children:"The target to display the number of months left in the countdown"}),(0,s.jsx)(t.td,{children:"-"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.code,{children:"days"})," (Optional)"]}),(0,s.jsx)(t.td,{children:"The target to display the number of days left in the countdown"}),(0,s.jsx)(t.td,{children:"-"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.code,{children:"hours"})," (Optional)"]}),(0,s.jsx)(t.td,{children:"The target to display the number of hours left in the countdown"}),(0,s.jsx)(t.td,{children:"-"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.code,{children:"minutes"})," (Optional)"]}),(0,s.jsx)(t.td,{children:"The target to display the number of minutes left in the countdown"}),(0,s.jsx)(t.td,{children:"-"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.code,{children:"seconds"})," (Optional)"]}),(0,s.jsx)(t.td,{children:"The target to display the number of seconds left in the countdown"}),(0,s.jsx)(t.td,{children:"-"})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"classes",children:(0,s.jsx)(t.a,{href:"https://stimulus.hotwire.dev/reference/classes",children:"Classes"})}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Class"}),(0,s.jsx)(t.th,{children:"Purpose"}),(0,s.jsx)(t.th,{children:"Default"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.code,{children:"countingDown"})," (Optional)"]}),(0,s.jsx)(t.td,{children:"The class to apply while the countdown is running"}),(0,s.jsx)(t.td,{children:"-"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.code,{children:"ended"})," (Optional)"]}),(0,s.jsx)(t.td,{children:"The class to apply when the countdown has ended"}),(0,s.jsx)(t.td,{children:"-"})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"values",children:(0,s.jsx)(t.a,{href:"https://stimulus.hotwire.dev/reference/values",children:"Values"})}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Value"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Default"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"deadline"})}),(0,s.jsx)(t.td,{children:"Date"}),(0,s.jsx)(t.td,{children:"The date/time to count down to"}),(0,s.jsx)(t.td,{children:"-"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"removeUnused"})}),(0,s.jsx)(t.td,{children:"Boolean"}),(0,s.jsx)(t.td,{children:"Whether to remove unused targets. i.e. if there are no years in the countdown"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"false"})})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"events",children:"Events"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Event"}),(0,s.jsx)(t.th,{children:"When"}),(0,s.jsx)(t.th,{children:"Dispatched on"}),(0,s.jsx)(t.th,{children:(0,s.jsx)(t.code,{children:"event.detail"})})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"countdown:ended"})}),(0,s.jsx)(t.td,{children:"When the countdown ends"}),(0,s.jsx)(t.td,{children:"The controller root element"}),(0,s.jsx)(t.td,{children:"-"})]})})]}),"\n",(0,s.jsx)(t.h2,{id:"side-effects",children:"Side Effects"}),"\n",(0,s.jsxs)(t.p,{children:["The controller will set an interval using ",(0,s.jsx)(t.code,{children:"setInterval"}),". Cleans up on disconnect and countdown end."]}),"\n",(0,s.jsx)(t.h2,{id:"how-to-use",children:"How to Use"}),"\n",(0,s.jsx)("iframe",{src:"https:///stimulus-library.netlify.app/controllers/countdown_controller.html",style:{width:"100%",height:"500px",border:"0",borderRadius:"4px",overflow:"hidden"},sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"deadline"})," date can be changed at any point, during ticking or after a countdown has expired and the clock will restart with the new value."]})]})}function x(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>l});var s=n(7294);const r={},d=s.createContext(r);function l(e){const t=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(d.Provider,{value:t},e.children)}}}]);
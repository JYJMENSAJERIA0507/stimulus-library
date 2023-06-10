"use strict";(self.webpackChunkdocs_2=self.webpackChunkdocs_2||[]).push([[7040],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(n),c=a,h=m["".concat(s,".").concat(c)]||m[c]||d[c]||o;return n?r.createElement(h,l(l({ref:t},u),{},{components:n})):r.createElement(h,l({ref:t},u))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2167:(e,t,n)=>{n.d(t,{ZP:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={toc:[]};function l(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"None"))}l.isMDXComponent=!0},5220:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var r=n(7462),a=(n(7294),n(3905)),o=n(2167);const l={id:"useTemporaryContent",title:"useTemporaryContent"},i=void 0,s={unversionedId:"mixins/useTemporaryContent",id:"mixins/useTemporaryContent",title:"useTemporaryContent",description:"Purpose",source:"@site/docs/mixins/use_temporary_content.mdx",sourceDirName:"mixins",slug:"/mixins/useTemporaryContent",permalink:"/stimulus-library/docs/mixins/useTemporaryContent",draft:!1,tags:[],version:"current",frontMatter:{id:"useTemporaryContent",title:"useTemporaryContent"},sidebar:"DocsSidebar",previous:{title:"useResizeObserver",permalink:"/stimulus-library/docs/mixins/useResizeObserver"},next:{title:"useTextSelection",permalink:"/stimulus-library/docs/mixins/useTextSelection"}},p={},u=[{value:"Purpose",id:"purpose",level:2},{value:"Side Effects",id:"side-effects",level:2},{value:"Usage",id:"usage",level:2},{value:"useTemporaryContent",id:"usetemporarycontent",level:3},{value:"How to Use",id:"how-to-use",level:2},{value:"Automatic Teardown",id:"automatic-teardown",level:3},{value:"Manual Teardown",id:"manual-teardown",level:3}],d={toc:u};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"purpose"},"Purpose"),(0,a.kt)("p",null,"Set the ",(0,a.kt)("inlineCode",{parentName:"p"},"innerHTML")," of elements (or ",(0,a.kt)("inlineCode",{parentName:"p"},"value")," of ",(0,a.kt)("inlineCode",{parentName:"p"},'<input type="submit">')," & etc elements) either for a set period of time,\nor until the returned cleanup function is called."),(0,a.kt)("p",null,"Useful for showing loading indicators, placeholder content, or other temporary content."),(0,a.kt)("h2",{id:"side-effects"},"Side Effects"),(0,a.kt)(o.ZP,{mdxType:"NoSideEffects"}),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("h3",{id:"usetemporarycontent"},"useTemporaryContent"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameters"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Purpose"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"controller")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Controller")),(0,a.kt)("td",{parentName:"tr",align:null},"The instance of the controller to install the behaviour on. This allows the mixin to automatically register cleanup on the controller's ",(0,a.kt)("inlineCode",{parentName:"td"},"disconnect"),"."),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"target")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"HTMLElement")),(0,a.kt)("td",{parentName:"tr",align:null},"The element to change the content of"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"content")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"String")),(0,a.kt)("td",{parentName:"tr",align:null},"The content to temporarily set the element to contain"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"timeout")," (Optional)"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Integer")),(0,a.kt)("td",{parentName:"tr",align:null},"The time in ms before the original content is restored to the element. If left blank, the content will only be restored when you call the teardown function."),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"callback")," (Optional)"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Function")),(0,a.kt)("td",{parentName:"tr",align:null},"A function, which if provided, will be called when the the original content is restored. Useful if you want to hook your own code into the cleanup process"),(0,a.kt)("td",{parentName:"tr",align:null})))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Return Values"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Purpose"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"teardown")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Function")),(0,a.kt)("td",{parentName:"tr",align:null},"Call this function when you want the original content to be restored to your element")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"update")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Function")),(0,a.kt)("td",{parentName:"tr",align:null},"Call this function with a different string to change the temporary content in your element, the original content from when the mixin was first called will still be remembered and restored on teardown")))),(0,a.kt)("h2",{id:"how-to-use"},"How to Use"),(0,a.kt)("h3",{id:"automatic-teardown"},"Automatic Teardown"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"\nimport {Controller} from '@hotwired/stimulus';\nimport {useTemporaryContent} from 'stimulus-library';\n\nexport default class ClipboardController extends Controller {\n\n  static targets = ['source', 'prompt'];\n\n  copy() {\n    this.sourceTarget.select();\n    document.execCommand('copy');\n\n    useTemporaryContent(this, this.promptTarget, 'Copied!', 3000);\n  }\n\n  disconnect() {\n    // All temporary content will be automatically restored to the originals when the controller is disconnected\n    // No need to do anything here\n  }\n\n\n}\n")),(0,a.kt)("h3",{id:"manual-teardown"},"Manual Teardown"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"\nimport {Controller} from '@hotwired/stimulus';\nimport {useTemporaryContent} from 'stimulus-library';\n\nexport default class extends Controller {\n\n  async loadContent() {\n    if (this.previousTeardown) {\n      this.previousTeardown();\n    }\n    let {teardown, update} = useTemporaryContent(this, this.element, `Loading...<i class=\"fa fa-spinner fa-spin\"></i>`);\n    this.previousTeardown = teardown;\n\n    let results = await fetch(`example.com/api/data`);\n\n    if (results.ok) {\n      let data = await results.text();\n      teardown();\n      this.element.innerHTML = data.html;\n    } else {\n      update('Error loading content. Please try again');\n    }\n  }\n\n  disconnect() {\n    // All temporary content will be automatically restored to the originals when the controller is disconnected\n    // No need to do anything here\n  }\n\n\n}\n\n")))}m.isMDXComponent=!0}}]);
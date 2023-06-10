"use strict";(self.webpackChunkdocs_2=self.webpackChunkdocs_2||[]).push([[8041],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=p(n),k=l,c=u["".concat(d,".").concat(k)]||u[k]||m[k]||r;return n?a.createElement(c,i(i({ref:t},s),{},{components:n})):a.createElement(c,i({ref:t},s))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=u;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7642:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var a=n(7462),l=(n(7294),n(3905));const r={id:"useEventListener",title:"useEventListener"},i=void 0,o={unversionedId:"mixins/useEventListener",id:"mixins/useEventListener",title:"useEventListener",description:"Purpose",source:"@site/docs/mixins/use_event_listener.mdx",sourceDirName:"mixins",slug:"/mixins/useEventListener",permalink:"/stimulus-library/docs/mixins/useEventListener",draft:!1,tags:[],version:"current",frontMatter:{id:"useEventListener",title:"useEventListener"},sidebar:"DocsSidebar",previous:{title:"useDirtyFormTracking",permalink:"/stimulus-library/docs/mixins/useDirtyFormTracking"},next:{title:"useFullscreen",permalink:"/stimulus-library/docs/mixins/useFullscreen"}},d={},p=[{value:"Purpose",id:"purpose",level:2},{value:"Side Effects",id:"side-effects",level:2},{value:"Usage",id:"usage",level:2},{value:"useEventListener",id:"useeventlistener",level:3},{value:"useCollectionEventListener",id:"usecollectioneventlistener",level:3},{value:"How to Use",id:"how-to-use",level:2}],s={toc:p};function m(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"purpose"},"Purpose"),(0,l.kt)("p",null,"Add an event listener to a ",(0,l.kt)("inlineCode",{parentName:"p"},"Window|Document|Element")," that will be automatically cleaned up on controller ",(0,l.kt)("inlineCode",{parentName:"p"},"disconnect"),".\nAutomatically sets the correct Javascript binding so that ",(0,l.kt)("inlineCode",{parentName:"p"},"this")," inside the event listener corresponds to the controller instance."),(0,l.kt)("h2",{id:"side-effects"},"Side Effects"),(0,l.kt)("p",null,"The controller will add an event listener on the given element, for the given event name."),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("p",null,"There are two functions provided as part of this Mixin.\n",(0,l.kt)("inlineCode",{parentName:"p"},"useEventListener")," for events on a single element, or ",(0,l.kt)("inlineCode",{parentName:"p"},"useCollectionEventListener")," for events bound to multiple elements."),(0,l.kt)("h3",{id:"useeventlistener"},"useEventListener"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameters"),(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Purpose"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"controller")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Controller")),(0,l.kt)("td",{parentName:"tr",align:null},"The instance of the controller to install the behaviour on. This allows the mixin to automatically register cleanup on the controller's ",(0,l.kt)("inlineCode",{parentName:"td"},"disconnect"),"."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"this"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"element")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Window")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"Document")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"HTMLElement")),(0,l.kt)("td",{parentName:"tr",align:null},"The element to add the event listener on"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"eventNameOrNames")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"String")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"Array<string>")),(0,l.kt)("td",{parentName:"tr",align:null},"The fully qualified name(s) of the event(s) you wish to listen for i.e. ",(0,l.kt)("inlineCode",{parentName:"td"},"'change")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"['change', 'input', 'click']")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"handlerFunction")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Function(event)")),(0,l.kt)("td",{parentName:"tr",align:null},"The function that will handle the  event, receives a single parameter, which is the event that triggered the handler"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"options")," (Optional)"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Object")),(0,l.kt)("td",{parentName:"tr",align:null},"Options to modify how the event listener is initialized"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"debounce")," (Optional)"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Number")),(0,l.kt)("td",{parentName:"tr",align:null},"The number of milliseconds to debounce the given handler by"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"capture")," (Optional)"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Boolean")),(0,l.kt)("td",{parentName:"tr",align:null},"A boolean value indicating that events of this type will be dispatched to the registered listener before being dispatched to any EventTarget beneath it in the DOM tree."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"once")," (Optional)"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Boolean")),(0,l.kt)("td",{parentName:"tr",align:null},"A boolean value indicating that the listener should be invoked at most once after being added. If true, the listener would be automatically removed when invoked."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"passive")," (Optional)"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Boolean")),(0,l.kt)("td",{parentName:"tr",align:null},"A boolean value that, if true, indicates that the function specified by listener will never call preventDefault(). If a passive listener does call preventDefault(), the user agent will do nothing other than generate a console warning. See Improving scrolling performance with passive listeners to learn more."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"signal")," (Optional)"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"AbortSignal")),(0,l.kt)("td",{parentName:"tr",align:null},"An AbortSignal. The listener will be removed when the given AbortSignal object's abort() method is called."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-"))))),(0,l.kt)("h3",{id:"usecollectioneventlistener"},"useCollectionEventListener"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameters"),(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Purpose"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"controller")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Controller")),(0,l.kt)("td",{parentName:"tr",align:null},"The instance of the controller to install the behaviour on. This allows the mixin to automatically register cleanup on the controller's ",(0,l.kt)("inlineCode",{parentName:"td"},"disconnect"),"."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"this"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"elements")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"An array of ",(0,l.kt)("inlineCode",{parentName:"td"},"Window")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"Document")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"HTMLElement")),(0,l.kt)("td",{parentName:"tr",align:null},"The elements to add the event listener on"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"eventNameOrNames")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"String")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"Array<string>")),(0,l.kt)("td",{parentName:"tr",align:null},"The fully qualified name(s) of the event(s) you wish to listen for i.e. ",(0,l.kt)("inlineCode",{parentName:"td"},"'change")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"['change', 'input', 'click']")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"handlerFunction")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Function(event)")),(0,l.kt)("td",{parentName:"tr",align:null},"The function that will handle the  event, receives a single parameter, which is the event that triggered the handler"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"options")," (Optional)"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Object")),(0,l.kt)("td",{parentName:"tr",align:null},"Options to modify how the event listener is initialized"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"debounce")," (Optional)"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Number")),(0,l.kt)("td",{parentName:"tr",align:null},"The number of milliseconds to debounce the given handler by"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"capture")," (Optional)"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Boolean")),(0,l.kt)("td",{parentName:"tr",align:null},"A boolean value indicating that events of this type will be dispatched to the registered listener before being dispatched to any EventTarget beneath it in the DOM tree."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"once")," (Optional)"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Boolean")),(0,l.kt)("td",{parentName:"tr",align:null},"A boolean value indicating that the listener should be invoked at most once after being added. If true, the listener would be automatically removed when invoked."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"passive")," (Optional)"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Boolean")),(0,l.kt)("td",{parentName:"tr",align:null},"A boolean value that, if true, indicates that the function specified by listener will never call preventDefault(). If a passive listener does call preventDefault(), the user agent will do nothing other than generate a console warning. See Improving scrolling performance with passive listeners to learn more."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"signal")," (Optional)"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"AbortSignal")),(0,l.kt)("td",{parentName:"tr",align:null},"An AbortSignal. The listener will be removed when the given AbortSignal object's abort() method is called."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-"))))),(0,l.kt)("h2",{id:"how-to-use"},"How to Use"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'\nimport {Controller} from \'@hotwired/stimulus\';\nimport {useEventListener, useCollectionEventListener} from \'stimulus-library\';\n\nexport default class extends Controller {\n\n  connect() {\n    // Add an event listener to the Window\n    useEventListener(this, window, \'hashchange\', this.handler)\n\n    // Add an event listener to the controller root element\n    useEventListener(this, this.element, "change", this.handler)\n\n    // Add an event listener to the controller root element that only fires once\n    useEventListener(this, this.element, "change", this.handler, {once: true})\n\n    // Add a [debounced](https://css-tricks.com/debouncing-throttling-explained-examples/)\n    // event listener to the controller root element\n    useEventListener(this, this.element, "input", this.handler, {debounce: 1500})\n\n    // Add multiple event listeners to the same handler\n    useEventListener(this, this.element, [\'change\', "input"], this.handler)\n\n    // Add multiple event listeners to the same handler\n    useEventListener(this, this.element, [\'change\', "input"], this.handler)\n\n    // Add multiple [debounced](https://css-tricks.com/debouncing-throttling-explained-examples/)\n    // event listeners to the same handler\n    useEventListener(this, this.element, "change", this.handler, {debounce: 1500})\n\n    // Add event listeners to an entire collection of elements\n    useCollectionEventListener(this, this.fooTargets, "change", this.handler)\n\n    // Add multiple event listeners to an entire collection of elements\n    useCollectionEventListener(this, this.fooTargets, ["change", "input"], this.handler)\n  }\n\n  handler() {\n    console.log(\'Look at me run!\')\n  }\n\n}\n\n')))}m.isMDXComponent=!0}}]);
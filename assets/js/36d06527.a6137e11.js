"use strict";(self.webpackChunkdocs_2=self.webpackChunkdocs_2||[]).push([[2220],{3905:function(e,n,t){t.d(n,{Zo:function(){return f},kt:function(){return u}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),i=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},f=function(e){var n=i(e.components);return r.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,f=l(e,["components","mdxType","originalType","parentName"]),p=i(t),u=o,m=p["".concat(s,".").concat(u)]||p[u]||d[u]||a;return t?r.createElement(m,c(c({ref:n},f),{},{components:t})):r.createElement(m,c({ref:n},f))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=p;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,c[1]=l;for(var i=2;i<a;i++)c[i]=t[i];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},5777:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return i},toc:function(){return f},default:function(){return p}});var r=t(3117),o=t(102),a=(t(7294),t(3905)),c=["components"],l={},s=void 0,i={unversionedId:"examples/nested_form_controller.haml",id:"examples/nested_form_controller.haml",isDocsHomePage:!1,title:"nested_form_controller.haml",description:"",source:"@site/docs/examples/nested_form_controller.haml.mdx",sourceDirName:"examples",slug:"/examples/nested_form_controller.haml",permalink:"/stimulus-library/docs/examples/nested_form_controller.haml",tags:[],version:"current",frontMatter:{}},f=[],d={toc:f};function p(e){var n=e.components,t=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-haml"},'-#\x3c!-- FILE: tasks/form --\x3e\n\n-#\x3c!--\n-#.....\n-#Parent association fields\n-#.....\n-#--\x3e\n\n%h4 Tasks\n%div{ data: { controller: "nested-form" } }\n  %script{ type: "text/x-template", data: { nested_form_target: "template" } }\n    = f.simple_fields_for :tasks, Task.new, child_index: \'NEW_RECORD\' do |task|\n      = render "task_fields", f: task\n\n  %div{ data: { nested_form_target: "target"} }\n    = f.simple_fields_for :tasks do |task|\n      = render "task_fields", f: task\n\n  = link_to "Add Task", "#", class: "button green", data: { action: "click->nested-form#add" }\n\n-#\x3c!--\n-#.....\n-#Parent association fields\n-#.....\n-#--\x3e\n\n\n\n\n\n\n\n-#\x3c!-- FILE: tasks/_task_fields --\x3e\n= content_tag :div, class: "nested-fields", data: { new_record: f.object.new_record? } do\n  .form-group\n    = f.label :description\n    = f.text_field :description, class: \'form-control\'\n\n  %small= link_to "Remove", "#", data: { action: "click->nested-form#remove" }\n  = f.hidden_field :_destroy```\n')))}p.isMDXComponent=!0}}]);
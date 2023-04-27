"use strict";(self.webpackChunkelemental_docs=self.webpackChunkelemental_docs||[]).push([[8577],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||l;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7878:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const l={sidebar_label:"MachineInventorySelectorTemplate reference",title:""},o="MachineInventorySelectorTemplate reference",i={unversionedId:"machineinventoryselectortemplate-reference",id:"version-stable/machineinventoryselectortemplate-reference",title:"",description:"The MachineInventorySelectorTemplate is the resource responsible of defining the matching criteria to pair an inventoried machine with a Cluster resource.",source:"@site/versioned_docs/version-stable/machineinventoryselectortemplate-reference.md",sourceDirName:".",slug:"/machineinventoryselectortemplate-reference",permalink:"/machineinventoryselectortemplate-reference",draft:!1,tags:[],version:"stable",frontMatter:{sidebar_label:"MachineInventorySelectorTemplate reference",title:""},sidebar:"docs",previous:{title:"Machineregistration reference",permalink:"/machineregistration-reference"},next:{title:"Cluster reference",permalink:"/cluster-reference"}},s={},c=[{value:"template.spec.selector.matchLabels",id:"templatespecselectormatchlabels",level:4},{value:"template.spec.selector.matchExpressions",id:"templatespecselectormatchexpressions",level:4}],p={toc:c},m="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"machineinventoryselectortemplate-reference"},"MachineInventorySelectorTemplate reference"),(0,a.kt)("p",null,"The MachineInventorySelectorTemplate is the resource responsible of defining the matching criteria to pair an inventoried machine with a Cluster resource."),(0,a.kt)("p",null,"The relevant key is the ",(0,a.kt)("inlineCode",{parentName:"p"},"selector")," which includes label selector expressions."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="MachineInventorySelectorTemplate" showLineNumbers',title:'"MachineInventorySelectorTemplate"',showLineNumbers:!0},"apiVersion: elemental.cattle.io/v1beta1\nkind: MachineInventorySelectorTemplate\nmetadata:\n  name: my-machine-selector\n  namespace: fleet-default\nspec:\n  template:\n    spec:\n      selector:\n        ...\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"template.spec.selector")," can include ",(0,a.kt)("inlineCode",{parentName:"p"},"matchLabels")," and or ",(0,a.kt)("inlineCode",{parentName:"p"},"matchExpressions")," keys."),(0,a.kt)("h4",{id:"templatespecselectormatchlabels"},"template.spec.selector.matchLabels"),(0,a.kt)("p",null,"It is a map of {key,value} pairs (map","[string]","string). When multiple labels are provided all labels must match."),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"showLineNumbers",showLineNumbers:!0},"...\nspec:\n  template:\n    spec:\n      selector:\n        matchlabels:\n          location: europe\n          manufacturer: somevalue\n"))),(0,a.kt)("p",null,"A Cluster defined with the above selector will only attempt to provision nodes inventoried including these two labels."),(0,a.kt)("h4",{id:"templatespecselectormatchexpressions"},"template.spec.selector.matchExpressions"),(0,a.kt)("p",null,"It is a list of label selectors, each label selectors can be defined as:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Key"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"key"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"This is the label key the selector applies on")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"operator"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Represents the relationship of the key to a set of values. Valid operators are 'In', 'NotIn', 'Exists' and 'DoesNotExist'")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"values"),(0,a.kt)("td",{parentName:"tr",align:null},"[]string"),(0,a.kt)("td",{parentName:"tr",align:null},"Values is an array of string values. If the operator is 'In' or 'NotIn', the values array must be non-empty. If the operator is 'Exists' or 'DoesNotExist', the values array must be empty")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"showLineNumbers",showLineNumbers:!0},"...\nspec:\n  template:\n    spec:\n      selector:\n        matchExpressions:\n          - key: location\n            operator: In\n            values: [ 'europe' ]\n          - key: manufacturer\n            operator: Exists\n"))),(0,a.kt)("p",null,"A Cluster defined with the above selector will only attempt to provision nodes inventoried with the ",(0,a.kt)("inlineCode",{parentName:"p"},"location=europe")," label and including a ",(0,a.kt)("inlineCode",{parentName:"p"},"manufacturer")," label defined with any value."))}u.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkelemental_docs=self.webpackChunkelemental_docs||[]).push([[4793],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),s=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=s(e.components);return a.createElement(c.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=s(t),d=r,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||l;return t?a.createElement(f,o(o({ref:n},p),{},{components:t})):a.createElement(f,o({ref:n},p))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=d;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[m]="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8830:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>k,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var a=t(7462),r=(t(7294),t(3905)),l=t(2070);const o={sidebar_label:"Cluster reference",title:""},i="Cluster reference",c={unversionedId:"cluster-reference",id:"version-1.3/cluster-reference",title:"",description:"A Cluster definition includes a kubernetesVersion and a list of machinePools to deploy the cluster to.",source:"@site/versioned_docs/version-1.3/cluster-reference.md",sourceDirName:".",slug:"/cluster-reference",permalink:"/cluster-reference",draft:!1,tags:[],version:"1.3",frontMatter:{sidebar_label:"Cluster reference",title:""},sidebar:"docs",previous:{title:"MachineInventorySelectorTemplate reference",permalink:"/machineinventoryselectortemplate-reference"},next:{title:"SeedImage reference",permalink:"/seedimage-reference"}},s={},p=[{value:"rkeConfig.machinePools",id:"rkeconfigmachinepools",level:2},{value:"machinePools Spec Reference",id:"machinepools-spec-reference",level:2},{value:"machineConfigRef Spec Reference",id:"machineconfigref-spec-reference",level:2},{value:"Example",id:"example",level:3}],m=(u="CodeBlock",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var u;const d={toc:p},f="wrapper";function k(e){let{components:n,...t}=e;return(0,r.kt)(f,(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"cluster-reference"},"Cluster reference"),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"Cluster")," definition includes a ",(0,r.kt)("inlineCode",{parentName:"p"},"kubernetesVersion")," and a list of ",(0,r.kt)("inlineCode",{parentName:"p"},"machinePools")," to deploy the cluster to."),(0,r.kt)("p",null,"For how to select a ",(0,r.kt)("inlineCode",{parentName:"p"},"kubernetesVersion")," please check our ",(0,r.kt)("a",{parentName:"p",href:"/kubernetesversions"},"Kubernetes Versions")," page."),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"machinePool")," is a bundle of configuration with a ",(0,r.kt)("inlineCode",{parentName:"p"},"ObjectReference")," so the cluster is deployed to those ",(0,r.kt)("inlineCode",{parentName:"p"},"machinePools"),"\nwith the proper roles (etcd, control-plane, worker) with a quantity (how many nodes to deploy from this pool) and some extra configurations (rolling update config, max unhealthy nodes, etc...)."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"showLineNumbers",showLineNumbers:!0},"kind: Cluster\napiVersion: provisioning.cattle.io/v1\nmetadata:\n  name: ...\n  namespace: ...\nspec:\n  rkeConfig:\n    machinePools:\n      - name: ...\n        controlPlaneRole: ...\n        etcdRole: ...\n        workerRole: ...\n        quantity: ...\n        machineConfigRef:\n          apiVersion: elemental.cattle.io/v1beta1\n          kind: MachineInventorySelectorTemplate\n          name: ...\n      - name: ...\n        controlPlaneRole: ...\n        etcdRole: ...\n        workerRole: ...\n        quantity: ...\n        machineConfigRef:\n          apiVersion: elemental.cattle.io/v1beta1\n          kind: MachineInventorySelectorTemplate\n          name: ...\n"))),(0,r.kt)("p",null,"It's also possible to disable cluster components via the ",(0,r.kt)("inlineCode",{parentName:"p"},"Cluster")," object in ",(0,r.kt)("inlineCode",{parentName:"p"},"spec.rkeConfig.machineGlobalConfig"),", for example:"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Service Disabling Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"showLineNumbers",showLineNumbers:!0},"kind: Cluster\napiVersion: provisioning.cattle.io/v1\nmetadata:\n  name: ...\n  namespace: ...\nspec:\n  rkeConfig:\n    machinePools:\n      - name: ...\n        controlPlaneRole: ...\n        etcdRole: ...\n        workerRole: ...\n        quantity: ...\n        machineConfigRef:\n          apiVersion: elemental.cattle.io/v1beta1\n          kind: MachineInventorySelectorTemplate\n          name: ...\n    machineGlobalConfig:\n      disable:\n        - servicelb\n        - ...\n"))),(0,r.kt)("h2",{id:"rkeconfigmachinepools"},"rkeConfig.machinePools"),(0,r.kt)("p",null,"A list of ",(0,r.kt)("inlineCode",{parentName:"p"},"machinePools"),". A minimum of 1 ",(0,r.kt)("inlineCode",{parentName:"p"},"machinePools")," is required for the cluster to be deployed to."),(0,r.kt)("h2",{id:"machinepools-spec-reference"},"machinePools Spec Reference"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Key"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default value"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"controlPlaneRole"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"Set machines in this pool as control-plane")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"etcdRole"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"Set machines in this pool as etcd")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"workerRole"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"Set machines in this pool as worker")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"nil"),(0,r.kt)("td",{parentName:"tr",align:null},"Name for this pool")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"quantity"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"nil"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of machines to deploy from this pool")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"unhealthyNodeTimeout"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"nil"),(0,r.kt)("td",{parentName:"tr",align:null},"Timeout for unhealthy node health checks")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"machineConfigRef"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"ObjectReference"),(0,r.kt)("td",{parentName:"tr",align:null},"Reference to an object used to know what nodes are part of this pool")))),(0,r.kt)("p",null,"A minimum of ",(0,r.kt)("inlineCode",{parentName:"p"},"quantity")," set to one is required for this pool to be used.\nBasically translates to how many nodes from this pool are going to be setup for this cluster."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"showLineNumbers",showLineNumbers:!0},"kind: Cluster\napiVersion: provisioning.cattle.io/v1\nmetadata:\n  name: cluster-example\n  namespace: example-default\nspec:\n  rkeConfig:\n    machinePools:\n      - name: examplePool \n        controlPlaneRole: true\n        etcdRole: true\n        workerRole: false\n        quantity: 3\n        unhealthyNodeTimeout: 0s\n        machineConfigRef:\n          apiVersion: elemental.cattle.io/v1beta1\n          kind: MachineInventorySelectorTemplate\n          name: exampleSelector\n"))),(0,r.kt)("h2",{id:"machineconfigref-spec-reference"},"machineConfigRef Spec Reference"),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"machineConfigRef")," is a generic k8s ",(0,r.kt)("inlineCode",{parentName:"p"},"ObjectReference")," which usually contain a\n",(0,r.kt)("inlineCode",{parentName:"p"},"kind")," ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"apiVersion")," to point to a different object."),(0,r.kt)("p",null,"In Elemental, we set this to a ",(0,r.kt)("a",{parentName:"p",href:"/machineinventoryselectortemplate-reference"},"MachineInventorySelectorTemplate"),".\nThis allows us to point to more than one object by using the selector."),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("p",null,"The example below creates a cluster that uses 2 different ",(0,r.kt)("inlineCode",{parentName:"p"},"machinePool"),"'s to set different nodes to control-plane and workers nodes,\nbased on 2 different ",(0,r.kt)("inlineCode",{parentName:"p"},"MachineInventorySelectorTemplate")," that select their nodes based on a ",(0,r.kt)("inlineCode",{parentName:"p"},"MachineInventory")," label (location):"),(0,r.kt)("admonition",{title:"warning",type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"The labels for the example are manual set labels, they are not set by Elemental automatically.."),(0,r.kt)("p",{parentName:"admonition"},"For automatic labels generated by Elemental please check the ",(0,r.kt)("a",{parentName:"p",href:"/smbios"},"SMBIOS")," page.")),(0,r.kt)(m,{language:"yaml",title:"Example of a cluster with more than one machinePool",showLineNumbers:!0,mdxType:"CodeBlock"},l.Z))}k.isMDXComponent=!0},2070:(e,n,t)=>{t.d(n,{Z:()=>a});const a="kind: Cluster\napiVersion: provisioning.cattle.io/v1\nmetadata:\n  name: cluster-machinepools\n  namespace: fleet-default\nspec:\n  rkeConfig:\n    machinePools:\n      - name: controlPlanePool\n        controlPlaneRole: true\n        etcdRole: true\n        workerRole: false\n        quantity: 3\n        unhealthyNodeTimeout: 0s\n        machineConfigRef:\n          apiVersion: elemental.cattle.io/v1beta1\n          kind: MachineInventorySelectorTemplate\n          name: selectorControlPlanes\n      - name: workersPool\n        controlPlaneRole: false\n        etcdRole: false\n        workerRole: true\n        quantity: 1\n        unhealthyNodeTimeout: 0s\n        machineConfigRef:\n          apiVersion: elemental.cattle.io/v1beta1\n          kind: MachineInventorySelectorTemplate\n          name: selectorWorkers\n  kubernetesVersion: v1.23.7+k3s1\n---\napiVersion: elemental.cattle.io/v1beta1\nkind: MachineInventorySelectorTemplate\nmetadata:\n  name: selectorControlPlanes\n  namespace: fleet-default\nspec:\n  template:\n    spec:\n      selector:\n        matchLabels:\n          location: server-room-1\n---\napiVersion: elemental.cattle.io/v1beta1\nkind: MachineInventorySelectorTemplate\nmetadata:\n  name: selectorWorkers\n  namespace: fleet-default\nspec:\n  template:\n    spec:\n      selector:\n        matchLabels:\n          location: server-room-2"}}]);
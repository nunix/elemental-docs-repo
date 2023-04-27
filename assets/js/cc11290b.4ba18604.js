"use strict";(self.webpackChunkelemental_docs=self.webpackChunkelemental_docs||[]).push([[947],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>p});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),s=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=s(e.components);return a.createElement(l.Provider,{value:n},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),d=s(t),u=r,p=d["".concat(l,".").concat(u)]||d[u]||h[u]||o;return t?a.createElement(p,i(i({ref:n},m),{},{components:t})):a.createElement(p,i({ref:n},m))}));function p(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=u;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c[d]="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},6793:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var a=t(7462),r=(t(7294),t(3905));const o={sidebar_label:"Inventory Management",title:"",version_badge:"1.3.0"},i=void 0,c={unversionedId:"inventory-management",id:"version-stable/inventory-management",title:"",description:"Inventory Management",source:"@site/versioned_docs/version-stable/inventory-management.md",sourceDirName:".",slug:"/inventory-management",permalink:"/inventory-management",draft:!1,tags:[],version:"stable",frontMatter:{sidebar_label:"Inventory Management",title:"",version_badge:"1.3.0"},sidebar:"docs",previous:{title:"Hardware Labels",permalink:"/hardwarelabels"},next:{title:"Backup",permalink:"/backup"}},l={},s=[{value:"Inventory Management",id:"inventory-management",level:2},{value:"MachineInventory",id:"machineinventory",level:3},{value:"Reference",id:"reference",level:4},{value:"MachineRegistration",id:"machineregistration",level:3},{value:"Reference",id:"reference-1",level:4}],m={toc:s},d="wrapper";function h(e){let{components:n,...t}=e;return(0,r.kt)(d,(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"inventory-management"},"Inventory Management"),(0,r.kt)("p",null,"The Elemental operator can hold an inventory of machines and\nthe mapping of the machine to it's configuration and assigned cluster."),(0,r.kt)("h3",{id:"machineinventory"},"MachineInventory"),(0,r.kt)("h4",{id:"reference"},"Reference"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: elemental.cattle.io/v1beta1\nkind: MachineInventory\nmetadata:\n  name: machine-a\n  # The namespace must match the namespace of the cluster\n  # assigned to the clusters.provisioning.cattle.io resource\n  namespace: fleet-default\nspec:\n  # The cluster that this machine is assigned to\n  clusterName: some-cluster\n  # The hash of the TPM EK public key. This is used if you are\n  # using TPM2 to identifiy nodes.  You can obtain the TPM by\n  # running `rancherd get-tpm-hash` on the node. Or nodes can\n  # report their TPM hash by using the MachineRegister\n  tpm: d68795c6192af9922692f050b...\n  # Generic SMBIOS fields that are typically populated with\n  # the MachineRegister approach\n  smbios: {}\n  # A reference to a secret that contains a shared secret value to\n  # identify a node.  The secret must be of type "elemental.cattle.io/token"\n  # and have on field "token" which is the value of the shared secret\n  machineTokenSecretName: some-secret-name\n  # Arbitrary cloud config that will be added to the machines cloud config\n  # during the rancherd bootstrap phase.  The one important field that should\n  # be set is the role.\n  config:\n    role: server\n')),(0,r.kt)("h3",{id:"machineregistration"},"MachineRegistration"),(0,r.kt)("h4",{id:"reference-1"},"Reference"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: elemental.cattle.io/v1beta1\nkind: MachineRegistration\nmetadata:\n  name: machine-registration\n  # The namespace must match the namespace of the cluster\n  # assigned to the clusters.provisioning.cattle.io resource\n  namespace: fleet-default\nspec:\n  # Labels to be added to the created MachineInventory object\n  machineInventoryLabels: {}\n  # Annotations to be added to the created MachineInventory object\n  machineInventoryAnnotations: {}\n  # The cloud config that will be used to provision the node\n  cloudConfig: {}\n")))}h.isMDXComponent=!0}}]);
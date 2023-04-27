"use strict";(self.webpackChunkelemental_docs=self.webpackChunkelemental_docs||[]).push([[5278],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),c=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(d.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(n),p=a,f=m["".concat(d,".").concat(p)]||m[p]||u[p]||o;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[m]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7250:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>s});var r=n(7462),a=(n(7294),n(3905)),o=n(2957);const i={sidebar_label:"Trusted Platform Module (TPM)",title:""},l="Trusted Platform Module 2.0 (TPM)",d={unversionedId:"tpm",id:"tpm",title:"",description:"Trusted Platform Module (TPM, also known as ISO/IEC 11889) is an international standard for a secure cryptoprocessor, a dedicated microcontroller designed to secure hardware through integrated cryptographic keys. The term can also refer to a chip conforming to the standard.",source:"@site/docs/tpm.md",sourceDirName:".",slug:"/tpm",permalink:"/next/tpm",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Trusted Platform Module (TPM)",title:""}},c={},s=[{value:"Add TPM module to virtual machine",id:"add-tpm-module-to-virtual-machine",level:2},{value:"Create Virtual Machine",id:"create-virtual-machine",level:3},{value:"Verify and edit hardware module list",id:"verify-and-edit-hardware-module-list",level:3},{value:"Add TPM module to VM",id:"add-tpm-module-to-vm",level:3},{value:"Finish VM configuration",id:"finish-vm-configuration",level:3},{value:"Add TPM emulation to bare metal machine",id:"add-tpm-emulation-to-bare-metal-machine",level:2}],m=(u="CodeBlock",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var u;const p={toc:s},f="wrapper";function h(e){let{components:t,...i}=e;return(0,a.kt)(f,(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"trusted-platform-module-20-tpm"},"Trusted Platform Module 2.0 (TPM)"),(0,a.kt)("p",null,"Trusted Platform Module (TPM, also known as ISO/IEC 11889) is an international standard for a secure cryptoprocessor, a dedicated microcontroller designed to secure hardware through integrated cryptographic keys. The term can also refer to a chip conforming to the standard."),(0,a.kt)("h2",{id:"add-tpm-module-to-virtual-machine"},"Add TPM module to virtual machine"),(0,a.kt)("p",null,"Easy way to add TPM to virtual machine is to use Libvirt with Virt-manager"),(0,a.kt)("h3",{id:"create-virtual-machine"},"Create Virtual Machine"),(0,a.kt)("p",null,"After starting virt-manager create new virtual machine"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Create new VM",src:n(2237).Z,width:"786",height:"831"})),(0,a.kt)("h3",{id:"verify-and-edit-hardware-module-list"},"Verify and edit hardware module list"),(0,a.kt)("p",null,"On the hardware configuration screen, verify list of modules and click ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Add Hardware"))," button"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Devices list",src:n(3316).Z,width:"1019",height:"845"})),(0,a.kt)("h3",{id:"add-tpm-module-to-vm"},"Add TPM module to VM"),(0,a.kt)("p",null,"From the list of emulated devices choose TPM module and add it to VM"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Add TPM module",src:n(2324).Z,width:"1017",height:"842"})),(0,a.kt)("h3",{id:"finish-vm-configuration"},"Finish VM configuration"),(0,a.kt)("p",null,"On the last screen verify once again if TPM module was added properly"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Verify TPM",src:n(4397).Z,width:"1018",height:"845"})),(0,a.kt)("h2",{id:"add-tpm-emulation-to-bare-metal-machine"},"Add TPM emulation to bare metal machine"),(0,a.kt)("p",null,"During applying ",(0,a.kt)("inlineCode",{parentName:"p"},"#!yaml MachineRegistration")," add following key to the yaml ",(0,a.kt)("inlineCode",{parentName:"p"},"config:elemental:registration:emulate-tpm: true")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"If you plan to deploy more than 1 machine with TPM emulation, make sure to set ",(0,a.kt)("inlineCode",{parentName:"p"},"config:elemental:registration:emulated-tpm-seed: -1"),"\nso the seed used for the TPM emulation is randomized per machine. Otherwise, you will get the same TPM Hash for all deployed machines and only the last\none to be registered will be valid.")),(0,a.kt)(m,{language:"yaml",title:"registration-tpm.yaml",showLineNumbers:!0,mdxType:"CodeBlock"},o.Z))}h.isMDXComponent=!0},2957:(e,t,n)=>{n.d(t,{Z:()=>r});const r="apiVersion: elemental.cattle.io/v1beta1\nkind: MachineRegistration\nmetadata:\n  name: my-nodes\n  namespace: fleet-default\nspec:\n  config:\n    cloud-config:\n      users:\n        - name: root\n          passwd: root\n    elemental:\n      install:\n        reboot: true\n        device: /dev/sda\n        debug: true\n      registration:\n        emulate-tpm: true\n"},2237:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/tpm1-7a68f095e057c5834efe61309decb43a.png"},3316:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/tpm2-480a00b132fddce83ba3e85ac5c5969a.png"},2324:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/tpm3-0a66311610b78cb9ad5c1e0a9506f18f.png"},4397:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/tpm4-142e726b37fba5f4f9abb93cc957fb4a.png"}}]);
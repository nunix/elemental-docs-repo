"use strict";(self.webpackChunkelemental_docs=self.webpackChunkelemental_docs||[]).push([[1e3],{44736:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(17624),i=n(4552),r=n(70040);const o={sidebar_label:"Trusted Platform Module (TPM)",title:""},d="Trusted Platform Module 2.0 (TPM)",s={id:"tpm",title:"",description:"Trusted Platform Module (TPM, also known as ISO/IEC 11889) is an international standard for a secure cryptoprocessor, a dedicated microcontroller designed to secure hardware through integrated cryptographic keys. The term can also refer to a chip conforming to the standard.",source:"@site/versioned_docs/version-1.3/tpm.md",sourceDirName:".",slug:"/tpm",permalink:"/1.3/tpm",draft:!1,unlisted:!1,tags:[],version:"1.3",frontMatter:{sidebar_label:"Trusted Platform Module (TPM)",title:""}},l={},c=[{value:"Add TPM module to virtual machine",id:"add-tpm-module-to-virtual-machine",level:2},{value:"Create Virtual Machine",id:"create-virtual-machine",level:3},{value:"Verify and edit hardware module list",id:"verify-and-edit-hardware-module-list",level:3},{value:"Add TPM module to VM",id:"add-tpm-module-to-vm",level:3},{value:"Finish VM configuration",id:"finish-vm-configuration",level:3},{value:"Add TPM emulation to bare metal machine",id:"add-tpm-emulation-to-bare-metal-machine",level:2}];function m(e){const t={admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",strong:"strong",...(0,i.M)(),...e.components},{CodeBlock:o,Head:d}=t;return o||u("CodeBlock",!0),d||u("Head",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(d,{children:(0,a.jsx)("link",{rel:"canonical",href:"https://elemental.docs.rancher.com/tpm"})}),"\n","\n","\n",(0,a.jsx)(t.h1,{id:"trusted-platform-module-20-tpm",children:"Trusted Platform Module 2.0 (TPM)"}),"\n",(0,a.jsx)(t.p,{children:"Trusted Platform Module (TPM, also known as ISO/IEC 11889) is an international standard for a secure cryptoprocessor, a dedicated microcontroller designed to secure hardware through integrated cryptographic keys. The term can also refer to a chip conforming to the standard."}),"\n",(0,a.jsx)(t.h2,{id:"add-tpm-module-to-virtual-machine",children:"Add TPM module to virtual machine"}),"\n",(0,a.jsx)(t.p,{children:"Easy way to add TPM to virtual machine is to use Libvirt with Virt-manager"}),"\n",(0,a.jsx)(t.h3,{id:"create-virtual-machine",children:"Create Virtual Machine"}),"\n",(0,a.jsx)(t.p,{children:"After starting virt-manager create new virtual machine"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Create new VM",src:n(24096).c+"",width:"786",height:"831"})}),"\n",(0,a.jsx)(t.h3,{id:"verify-and-edit-hardware-module-list",children:"Verify and edit hardware module list"}),"\n",(0,a.jsxs)(t.p,{children:["On the hardware configuration screen, verify list of modules and click ",(0,a.jsx)(t.em,{children:(0,a.jsx)(t.strong,{children:"Add Hardware"})})," button"]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Devices list",src:n(89084).c+"",width:"1019",height:"845"})}),"\n",(0,a.jsx)(t.h3,{id:"add-tpm-module-to-vm",children:"Add TPM module to VM"}),"\n",(0,a.jsx)(t.p,{children:"From the list of emulated devices choose TPM module and add it to VM"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Add TPM module",src:n(65452).c+"",width:"1017",height:"842"})}),"\n",(0,a.jsx)(t.h3,{id:"finish-vm-configuration",children:"Finish VM configuration"}),"\n",(0,a.jsx)(t.p,{children:"On the last screen verify once again if TPM module was added properly"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Verify TPM",src:n(99948).c+"",width:"1018",height:"845"})}),"\n",(0,a.jsx)(t.h2,{id:"add-tpm-emulation-to-bare-metal-machine",children:"Add TPM emulation to bare metal machine"}),"\n",(0,a.jsxs)(t.p,{children:["During applying ",(0,a.jsx)(t.code,{children:"#!yaml MachineRegistration"})," add following key to the yaml ",(0,a.jsx)(t.code,{children:"config:elemental:registration:emulate-tpm: true"})]}),"\n",(0,a.jsx)(t.admonition,{type:"info",children:(0,a.jsxs)(t.p,{children:["If you plan to deploy more than 1 machine with TPM emulation, make sure to set ",(0,a.jsx)(t.code,{children:"config:elemental:registration:emulated-tpm-seed: -1"}),"\nso the seed used for the TPM emulation is randomized per machine. Otherwise, you will get the same TPM Hash for all deployed machines and only the last\none to be registered will be valid."]})}),"\n",(0,a.jsx)(o,{language:"yaml",title:"registration-tpm.yaml",showLineNumbers:!0,children:r.c})]})}function h(e={}){const{wrapper:t}={...(0,i.M)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}function u(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},70040:(e,t,n)=>{n.d(t,{c:()=>a});const a='apiVersion: elemental.cattle.io/v1beta1\nkind: MachineRegistration\nmetadata:\n  name: fire-nodes-emulate-tpm\n  namespace: fleet-default\nspec:\n  config:\n    cloud-config:\n      users:\n        - name: root\n          passwd: root\n    elemental:\n      install:\n        reboot: true\n        device: /dev/sda\n        debug: true\n      registration:\n        emulate-tpm: true\n  machineInventoryLabels:\n    element: fire\n    manufacturer: "${System Information/Manufacturer}"\n    productName: "${System Information/Product Name}"\n    serialNumber: "${System Information/Serial Number}"\n    machineUUID: "${System Information/UUID}"\n'},24096:(e,t,n)=>{n.d(t,{c:()=>a});const a=n.p+"assets/images/tpm1-7a68f095e057c5834efe61309decb43a.png"},89084:(e,t,n)=>{n.d(t,{c:()=>a});const a=n.p+"assets/images/tpm2-480a00b132fddce83ba3e85ac5c5969a.png"},65452:(e,t,n)=>{n.d(t,{c:()=>a});const a=n.p+"assets/images/tpm3-0a66311610b78cb9ad5c1e0a9506f18f.png"},99948:(e,t,n)=>{n.d(t,{c:()=>a});const a=n.p+"assets/images/tpm4-142e726b37fba5f4f9abb93cc957fb4a.png"},4552:(e,t,n)=>{n.d(t,{I:()=>d,M:()=>o});var a=n(11504);const i={},r=a.createContext(i);function o(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);
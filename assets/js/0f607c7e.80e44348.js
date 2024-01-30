"use strict";(self.webpackChunkelemental_docs=self.webpackChunkelemental_docs||[]).push([[2974],{3227:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var o=n(5893),s=n(1151);const a={sidebar_label:"Customize hostname",title:""},i=void 0,r={id:"hostname",title:"",description:"How to set a custom hostname",source:"@site/docs/hostname.md",sourceDirName:".",slug:"/hostname",permalink:"/next/hostname",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Customize hostname",title:""},sidebar:"docs",previous:{title:"Elemental behind proxy",permalink:"/next/elemental_behind_proxy"},next:{title:"How to use Elemental with Rancher and VMware",permalink:"/next/rancher-vmware"}},h={},c=[{value:"How to set a custom hostname",id:"how-to-set-a-custom-hostname",level:3},{value:"Default hostname",id:"default-hostname",level:4},{value:"Set custom hostnames",id:"set-custom-hostnames",level:4}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h3:"h3",h4:"h4",p:"p",...(0,s.a)(),...e.components},{Head:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n,{children:(0,o.jsx)("link",{rel:"canonical",href:"https://elemental.docs.rancher.com/hostname"})}),"\n",(0,o.jsx)(t.h3,{id:"how-to-set-a-custom-hostname",children:"How to set a custom hostname"}),"\n",(0,o.jsxs)(t.p,{children:["When booting a host with an Elemental ISO, the hostname is temporarily set to ",(0,o.jsx)(t.code,{children:"rancher-{$RANDOM}"}),".\nAs soon as the boot process is finished, the registration phase takes place: the host connects to the\nElemental Operator, which creates a MachineInventory for the host."]}),"\n",(0,o.jsxs)(t.p,{children:["Each host registered with the Elemental Operator is tracked by a ",(0,o.jsx)(t.code,{children:"MachineInventory"})," resource.\nThe hostname of the host is eventually set to the ",(0,o.jsx)(t.code,{children:"name"})," of the ",(0,o.jsx)(t.code,{children:"MachineInventory"})," resource,\nduring the Cluster provisioning phase (i.e., during k3s/RKE2 deployment on the host)."]}),"\n",(0,o.jsx)(t.h4,{id:"default-hostname",children:"Default hostname"}),"\n",(0,o.jsxs)(t.p,{children:["The default name assigned to the newly created MachineInventory is in the form ",(0,o.jsx)(t.code,{children:"m-{$UUID}"}),".\nWhen the host is provisioned as part of a Cluster, the ",(0,o.jsx)(t.code,{children:"m-{UUID}"})," hostname is set, overriding the previous ",(0,o.jsx)(t.code,{children:"rancher-{$RANDOM}"})," hostname."]}),"\n",(0,o.jsx)(t.h4,{id:"set-custom-hostnames",children:"Set custom hostnames"}),"\n",(0,o.jsxs)(t.p,{children:["The hostname can be specified setting the ",(0,o.jsx)(t.a,{href:"/next/machineregistration-reference#machinename",children:(0,o.jsx)(t.code,{children:"machineName"})})," field in the\n",(0,o.jsx)(t.a,{href:"/next/machineregistration-reference",children:"'MachineRegistration'"})," resource."]}),"\n",(0,o.jsxs)(t.p,{children:["The hostname set in the ",(0,o.jsx)(t.code,{children:"machineName"})," is expected to be in a template form, in order to be uniquely generated for each host using ",(0,o.jsx)(t.a,{href:"/next/smbios",children:"SMBIOS"})," and ",(0,o.jsx)(t.a,{href:"/next/hardwarelabels",children:"Hardware Labels"})," data."]}),"\n",(0,o.jsxs)(t.admonition,{title:"important note",type:"caution",children:[(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"machineName"})," field in the ",(0,o.jsx)(t.code,{children:"MachineRegistration"})," resource will be used as the blueprint not\nonly for the hostname of the registering host, but also for the name of the ",(0,o.jsx)(t.code,{children:"MachineInventory"})," resource\ncreated to track the host."]}),(0,o.jsxs)(t.p,{children:["This means that if you don't use a templated ",(0,o.jsx)(t.code,{children:"machineName"})," such to generate a unique name for each\nhost that will boot using the same ",(0,o.jsx)(t.code,{children:"MachineRegistration"})," data (i.e., the same ISO), only the first\nregistering host will be successful while the others will fail: the ",(0,o.jsx)(t.code,{children:"MachineInventory"})," name must be\nunique."]})]})]})}function d(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>i});var o=n(7294);const s={},a=o.createContext(s);function i(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);
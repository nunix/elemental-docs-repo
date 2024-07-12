"use strict";(self.webpackChunkelemental_docs=self.webpackChunkelemental_docs||[]).push([[2356],{6344:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var r=t(17624),s=t(4552);const i={sidebar_label:"Kubernetes cluster provisioning",title:""},c=void 0,a={id:"architecture-clusterdeployment",title:"",description:"Kubernetes cluster provisioning",source:"@site/docs/architecture-clusterdeployment.md",sourceDirName:".",slug:"/architecture-clusterdeployment",permalink:"/next/architecture-clusterdeployment",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Kubernetes cluster provisioning",title:""},sidebar:"docs",previous:{title:"Machine onboarding",permalink:"/next/architecture-machineonboarding"},next:{title:"Installation",permalink:"/next/installation"}},o={},l=[{value:"Kubernetes cluster provisioning",id:"kubernetes-cluster-provisioning",level:2}];function h(e){const n={a:"a",code:"code",em:"em",h2:"h2",li:"li",p:"p",ul:"ul",...(0,s.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"kubernetes-cluster-provisioning",children:"Kubernetes cluster provisioning"}),"\n",(0,r.jsxs)(n.p,{children:["The goal of the Kubernetes Cluster deployment phase is to create a new RKE2 or K3s cluster using the available ",(0,r.jsx)(n.a,{href:"/next/machineinventory-reference",children:"MachineInventories"}),", i.e., the hosts that have successfully completed the ",(0,r.jsx)(n.a,{href:"/next/architecture-machineonboarding",children:"Machine onboarding"})," phase."]}),"\n",(0,r.jsx)(n.p,{children:"The Elemental Kubernetes cluster deployment involves the following steps:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["The user creates a ",(0,r.jsx)(n.a,{href:"/next/machineinventoryselectortemplate-reference",children:"MachineInventorySelectorTemplate"})," resource: it allows to define a ",(0,r.jsx)(n.em,{children:"selector"})," to identify a subset of the available ",(0,r.jsx)(n.a,{href:"/next/machineinventory-reference",children:"MachineInventories"})," based on the value of their labels."]}),"\n",(0,r.jsxs)(n.li,{children:["The user defines a ",(0,r.jsx)(n.a,{href:"/next/cluster-reference",children:"Rancher cluster"})," and adds to the ",(0,r.jsx)(n.code,{children:"machinePools"})," definition a reference to the ",(0,r.jsx)(n.a,{href:"/next/machineinventoryselectortemplate-reference",children:"MachineInventorySelectorTemplate"})," created in the step before."]}),"\n",(0,r.jsxs)(n.li,{children:["The ",(0,r.jsx)(n.a,{href:"https://ranchermanager.docs.rancher.com/how-to-guides/new-user-uuides/launch-kubernetes-with-rancher#rke2",children:"Rancher RKE2/K3s Cluster provisioning"})," reacts to the Rancher cluster resource creation by generating a number of ",(0,r.jsx)(n.a,{href:"/next/machineinventoryselector-reference",children:"MachineInventorySelectors"})," resources equal to the ",(0,r.jsx)(n.em,{children:"quantity"})," specified in the ",(0,r.jsx)(n.em,{children:"machinePools"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["The Elemental Operator pairs each generated ",(0,r.jsx)(n.a,{href:"/next/machineinventoryselector-reference",children:"MachineInventorySelector"})," resource with an available ",(0,r.jsx)(n.a,{href:"/next/machineinventory-reference",children:"MachineInventory"})," and installs the ",(0,r.jsx)(n.a,{href:"https://github.com/rancher/system-agent",children:"rancher-system-agent"})," daemon on the host tracked by the ",(0,r.jsx)(n.a,{href:"/next/machineinventory-reference",children:"MachineInventory"}),".\nThe ",(0,r.jsx)(n.a,{href:"https://ranchermanager.docs.rancher.com/how-to-guides/new-user-uuides/launch-kubernetes-with-rancher#rke2",children:"Rancher RKE2/K3s Cluster provisioning"})," takes over the K3s/RKE provisiong using ",(0,r.jsx)(n.a,{href:"https://github.com/rancher/system-agent",children:"rancher-system-agent"})," ",(0,r.jsx)(n.em,{children:"plans"}),": it installs the required components (e.g., containerd, K3s, ...) and creates the configuration files till the successful deployment of the new Kubernetes cluster."]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},4552:(e,n,t)=>{t.d(n,{I:()=>a,M:()=>c});var r=t(11504);const s={},i=r.createContext(s);function c(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);
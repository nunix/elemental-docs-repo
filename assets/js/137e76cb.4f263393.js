"use strict";(self.webpackChunkelemental_docs=self.webpackChunkelemental_docs||[]).push([[2048],{3308:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=t(17624),l=t(4552);const r={slug:"/",sidebar_label:"Overview",title:""},i="Overview",s={id:"index",title:"",description:"Elemental is a software stack enabling centralized, full cloud-native OS management with Kubernetes.",source:"@site/versioned_docs/version-1.4/index.md",sourceDirName:".",slug:"/",permalink:"/",draft:!1,unlisted:!1,tags:[],version:"1.4",frontMatter:{slug:"/",sidebar_label:"Overview",title:""},sidebar:"docs",next:{title:"Elemental the visual way",permalink:"/quickstart-ui"}},o={},c=[{value:"Elemental on x86-64 hardware",id:"elemental-on-x86-64-hardware",level:3},{value:"Elemental on ARM hardware",id:"elemental-on-arm-hardware",level:3},{value:"Elemental on other hardware",id:"elemental-on-other-hardware",level:3},{value:"Ready to give it a try?",id:"ready-to-give-it-a-try",level:2}];function d(e){const n={a:"a",admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,l.M)(),...e.components},{Head:t,Vars:r}=n;return t||m("Head",!0),r||m("Vars",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t,{children:(0,a.jsx)("link",{rel:"canonical",href:"https://elemental.docs.rancher.com"})}),"\n",(0,a.jsx)(n.h1,{id:"overview",children:"Overview"}),"\n",(0,a.jsx)(n.p,{children:"Elemental is a software stack enabling centralized, full cloud-native OS management with Kubernetes."}),"\n",(0,a.jsx)(n.p,{children:"The Elemental Stack consists of a handful of packages on top of SLE Micro for Rancher:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"elemental-toolkit"})," - Includes a set of OS utilities to enable OS management via containers. Includes dracut modules, bootloader configuration, cloud-init style configuration services, etc."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"elemental-operator"})," - Connects to Rancher Manager and handles MachineRegistration and MachineInventory CRDs."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"elemental-register"})," - Registers machines via machineRegistrations and installs them via elemental-cli."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"elemental-cli"})," - Installs any elemental-toolkit based derivative. Basically an installer based on our A/B install and upgrade system."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"rancher-system-agent"}),' - Runs on the installed system and gets instructions ("Plans") from Rancher Manager what to install and run on the system.']}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["Cluster Node OSes are built and maintained via container images through the ",(0,a.jsx)(r,{name:"elemental_cli_name"})," and they can be installed on new hosts using the ",(0,a.jsx)(r,{link:"elemental_ui_url",name:"elemental_ui_name"})," for ",(0,a.jsx)(n.a,{href:"https://www.rancher.com/products/rancher",children:"Rancher Manager"})," or the ",(0,a.jsx)(r,{link:"elemental_cli_url",name:"elemental_cli_name"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(r,{link:"elemental_operator_url",name:"elemental_operator_name"})," and the ",(0,a.jsx)(r,{link:"ranchersystemagent_url",name:"ranchersystemagent_name"})," enable Rancher Manager to fully control Elemental clusters, from the installation and management of the OS on the Nodes to the provisioning of new K3s or RKE2 clusters in a centralized way."]}),"\n",(0,a.jsx)(n.h3,{id:"elemental-on-x86-64-hardware",children:"Elemental on x86-64 hardware"}),"\n",(0,a.jsx)(n.p,{children:"Elemental is production ready and fully supported on x86-64 starting with Rancher v2.7.0."}),"\n",(0,a.jsx)(n.h3,{id:"elemental-on-arm-hardware",children:"Elemental on ARM hardware"}),"\n",(0,a.jsx)(n.p,{children:"ARM (aarch64) is functional in the development stage. ARM is currently only tested on Raspberry Pi 4 Model B with k3s 1.24.8 (or later). Feedback is welcome."}),"\n",(0,a.jsx)(n.h3,{id:"elemental-on-other-hardware",children:"Elemental on other hardware"}),"\n",(0,a.jsx)(n.p,{children:"Elemental is currently targeting 'edge' scenarios and does therefore not support other hardware. We will re-assess this as the market evolves."}),"\n",(0,a.jsx)(n.h2,{id:"ready-to-give-it-a-try",children:"Ready to give it a try?"}),"\n",(0,a.jsx)(n.p,{children:"Get an Elemental Cluster up and running with your preferred method"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["With Rancher manager ",(0,a.jsx)(n.a,{href:"quickstart-ui",children:"Elemental plugin"})]}),"\n",(0,a.jsxs)(n.li,{children:["With the ",(0,a.jsx)(n.a,{href:"quickstart-cli",children:"Elemental CLI"})]}),"\n"]}),"\n",(0,a.jsx)(n.admonition,{title:"What's next?",type:"note",children:(0,a.jsxs)(n.p,{children:["Want more details? Take a look at the ",(0,a.jsx)(n.a,{href:"architecture",children:"Architecture"})," section or reach out to the ",(0,a.jsx)(r,{link:"elemental_slack_url",name:"elemental_slack_name"})," Slack channel."]})})]})}function h(e={}){const{wrapper:n}={...(0,l.M)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}function m(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},4552:(e,n,t)=>{t.d(n,{I:()=>s,M:()=>i});var a=t(11504);const l={},r=a.createContext(l);function i(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);
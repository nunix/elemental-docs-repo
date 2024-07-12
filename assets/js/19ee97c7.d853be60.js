"use strict";(self.webpackChunkelemental_docs=self.webpackChunkelemental_docs||[]).push([[2896],{11308:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>g,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>a});var t=n(17624),s=n(4552);const l={sidebar_label:"Support",title:""},i="Elemental Support",r={id:"troubleshooting-support",title:"",description:"The elemental-support is a utility program that collects all information about the machine where the Elemental stack is running.",source:"@site/docs/troubleshooting-support.md",sourceDirName:".",slug:"/troubleshooting-support",permalink:"/next/troubleshooting-support",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Support",title:""},sidebar:"docs",previous:{title:"Register an Unmanaged OS",permalink:"/next/unmanaged-os"},next:{title:"Rancher upgrades",permalink:"/next/troubleshooting-rancher-upgrades"}},g={},a=[{value:"Requirements",id:"requirements",level:2},{value:"Collecting information",id:"collecting-information",level:2}];function c(e){const o={br:"br",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,s.M)(),...e.components},{Head:n}=o;return n||function(e,o){throw new Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n,{children:(0,t.jsx)("link",{rel:"canonical",href:"https://elemental.docs.rancher.com/troubleshooting-support"})}),"\n",(0,t.jsx)(o.h1,{id:"elemental-support",children:"Elemental Support"}),"\n",(0,t.jsxs)(o.p,{children:["The ",(0,t.jsx)(o.code,{children:"elemental-support"})," is a utility program that collects all information about the machine where the Elemental stack is running."]}),"\n",(0,t.jsxs)(o.p,{children:["When troubleshooting issues with any Elemental node, it is possible to generate a compressed file containing logs and config files.",(0,t.jsx)(o.br,{}),"\n","Be aware that ",(0,t.jsx)(o.strong,{children:"the tar.gz generated file may contain sensitive information"}),", like access tokens to the management cluster and more."]}),"\n",(0,t.jsx)(o.h2,{id:"requirements",children:"Requirements"}),"\n",(0,t.jsxs)(o.p,{children:["Optionally, the ",(0,t.jsx)(o.code,{children:"elemental-support"})," utility needs ",(0,t.jsx)(o.code,{children:"kubectl"})," to be available on the target machine, in order to collect node information. This can be very useful to debug Elemental upgrade issues with a node.",(0,t.jsx)(o.br,{}),"\n","The kubectl config used will be looked up from the ",(0,t.jsx)(o.code,{children:"KUBECONFIG"})," environment variable, or in its absence either the ",(0,t.jsx)(o.code,{children:"/etc/rancher/k3s/k3s.yaml"})," or ",(0,t.jsx)(o.code,{children:"/etc/rancher/rke2/rke2.yaml"})," files will be used instead."]}),"\n",(0,t.jsx)(o.h2,{id:"collecting-information",children:"Collecting information"}),"\n",(0,t.jsxs)(o.p,{children:["Once ran, the ",(0,t.jsx)(o.code,{children:"elemental-support"})," will create the compressed archive within the same directory."]}),"\n",(0,t.jsx)(o.p,{children:"Example run:"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-bash",children:"m-993369ec-4b3f-4368-86c3-1449ebf57cf2# elemental-support \nI0430 11:33:38.934777    8536 log.go:42] Support version 1.3.4, commit 192dc33d, commit date 20230831\nI0430 11:33:38.934865    8536 log.go:46] Getting elemental-support version\nI0430 11:33:38.934918    8536 log.go:42] Copying /etc/os-release\nI0430 11:33:38.935008    8536 log.go:42] Copying /etc/resolv.conf\nI0430 11:33:38.935066    8536 log.go:42] Copying /etc/hostname\nI0430 11:33:38.935131    8536 log.go:42] Copying /etc/rancher/agent/config.yaml\nI0430 11:33:38.935174    8536 log.go:42] Copying /etc/rancher/agent/config.yaml\nI0430 11:33:38.935214    8536 log.go:42] Copying dir /var/lib/elemental/agent/applied/\nI0430 11:33:38.935434    8536 log.go:42] Copying dir /var/lib/rancher/agent/applied/\nI0430 11:33:38.935572    8536 log.go:42] Copying dir /system/oem\nI0430 11:33:38.936584    8536 log.go:42] Copying dir /oem/\nI0430 11:33:38.937121    8536 log.go:42] Getting service log elemental-system-agent\nI0430 11:33:38.959813    8536 log.go:42] Getting service log rancher-system-agent\nI0430 11:33:38.979271    8536 log.go:42] Getting service log k3s\nI0430 11:33:39.018177    8536 log.go:42] Getting service log rke2\nI0430 11:33:39.036852    8536 log.go:42] Getting service log cos-setup-boot\nI0430 11:33:39.053409    8536 log.go:42] Getting service log cos-setup-fs\nI0430 11:33:39.068132    8536 log.go:42] Getting service log cos-setup-initramfs\nI0430 11:33:39.085935    8536 log.go:42] Getting service log cos-setup-network\nI0430 11:33:39.101440    8536 log.go:42] Getting service log cos-setup-reconcile\nI0430 11:33:39.119528    8536 log.go:42] Getting service log cos-setup-rootfs\nI0430 11:33:39.136151    8536 log.go:42] Getting service log cos-immutable-rootfs\nI0430 11:33:39.153850    8536 log.go:42] Getting service log elemental\nI0430 11:33:39.170564    8536 log.go:42] Getting service log NetworkManager\nI0430 11:33:39.190169    8536 log.go:42] Getting elemental-cli version\nI0430 11:33:39.205410    8536 log.go:42] Getting elemental-operator version\nI0430 11:33:39.205621    8536 log.go:42] Getting elemental-register version\nI0430 11:33:39.266263    8536 log.go:42] Found k3s kubeconfig at /etc/rancher/k3s/k3s.yaml\nI0430 11:33:39.266312    8536 log.go:42] Found k3s kubectl at /usr/local/bin/kubectl\nI0430 11:33:39.266320    8536 log.go:42] Getting k8s info for pods\nI0430 11:33:39.770730    8536 log.go:42] Getting k8s info for secrets\nI0430 11:33:39.962037    8536 log.go:42] Getting k8s info for nodes\nI0430 11:33:40.118680    8536 log.go:42] Getting k8s info for services\nI0430 11:33:40.280797    8536 log.go:42] Getting k8s info for deployments\nI0430 11:33:40.458869    8536 log.go:42] Getting k8s info for plans\nI0430 11:33:40.612138    8536 log.go:42] Getting k8s info for apps\nI0430 11:33:40.787309    8536 log.go:42] Getting k8s info for jobs\nI0430 11:33:40.932361    8536 log.go:42] Getting k8s logs for namespace cattle-system\nI0430 11:33:41.353556    8536 log.go:42] Getting k8s logs for namespace kube-system\nI0430 11:33:41.935885    8536 log.go:42] Getting k8s logs for namespace ingress-nginx\nW0430 11:33:41.999345    8536 log.go:62] No pods in namespace ingress-nginx\nI0430 11:33:41.999365    8536 log.go:42] Getting k8s logs for namespace calico-system\nW0430 11:33:42.061902    8536 log.go:62] No pods in namespace calico-system\nI0430 11:33:42.061927    8536 log.go:42] Getting k8s logs for namespace cattle-fleet-system\nI0430 11:33:42.204459    8536 log.go:42] Creating final file\nI0430 11:33:42.215815    8536 log.go:42] All done. File created at m-993369ec-4b3f-4368-86c3-1449ebf57cf2-2024-04-30T113342Z.tar.gz\n"})})]})}function p(e={}){const{wrapper:o}={...(0,s.M)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},4552:(e,o,n)=>{n.d(o,{I:()=>r,M:()=>i});var t=n(11504);const s={},l=t.createContext(s);function i(e){const o=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function r(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(l.Provider,{value:o},e.children)}}}]);
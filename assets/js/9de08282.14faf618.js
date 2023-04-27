"use strict";(self.webpackChunkelemental_docs=self.webpackChunkelemental_docs||[]).push([[7869],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3025:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>c,default:()=>k,frontMatter:()=>s,metadata:()=>p,toc:()=>u});var a=n(7462),r=(n(7294),n(3905)),o=n(6506),i=n(8638),l=n(2624);const s={sidebar_label:"Elemental behind proxy",title:""},c=void 0,p={unversionedId:"elemental_behind_proxy",id:"elemental_behind_proxy",title:"",description:"Introduction",source:"@site/docs/elemental_behind_proxy.md",sourceDirName:".",slug:"/elemental_behind_proxy",permalink:"/next/elemental_behind_proxy",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Elemental behind proxy",title:""},sidebar:"docs",previous:{title:"Configure Wi-Fi",permalink:"/next/wifi"},next:{title:"How to use Elemental with Rancher and VMware",permalink:"/next/rancher-vmware"}},m={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Elemental-register",id:"elemental-register",level:2},{value:"Create Elemental cluster",id:"create-elemental-cluster",level:2}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},h=d("Tabs"),y=d("TabItem"),f=d("CodeBlock"),g={toc:u},b="wrapper";function k(e){let{components:t,...s}=e;return(0,r.kt)(b,(0,a.Z)({},g,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"In a lot of enterprise environments, servers or VMs running on premises do not have direct Internet access. Instead, the connection to external services is done through a HTTP(S) proxy for security reasons. This tutorial shows you how to set up an Elemental deployment in such an environment."),(0,r.kt)("admonition",{title:"important note",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This guide will not cover the Rancher installation behind a proxy. It's a different use case and you can find the detailed documentation ",(0,r.kt)("a",{parentName:"p",href:"https://ranchermanager.docs.rancher.com/pages-for-subheaders/rancher-behind-an-http-proxy"},"here"),".")),(0,r.kt)("admonition",{title:"info",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"For this documentation, we assume you are using a SUSE family system (like Elemental Teal), so proxy settings have to be written in ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/sysconfig/proxy"),".")),(0,r.kt)("p",null,"Proxy settings must be configured in the following locations:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Machine Registration Endpoint"),(0,r.kt)("li",{parentName:"ul"},"SeedImage resource"),(0,r.kt)("li",{parentName:"ul"},"Elemental cluster configuration")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"elemental-system-agent")," needs proxy settings to reach the Rancher Manager.\nTo achieve that, you need to fill the cloud-init section of the Machine Registration Endpoint."),(0,r.kt)("p",null,"You can do it either with ",(0,r.kt)("a",{parentName:"p",href:"https://elemental.docs.rancher.com/quickstart-ui#add-a-machine-registration-endpoint"},"UI")," or ",(0,r.kt)("a",{parentName:"p",href:"https://elemental.docs.rancher.com/quickstart-cli#prepare-your-kubernetes-resources"},"CLI"),"."),(0,r.kt)(h,{mdxType:"Tabs"},(0,r.kt)(y,{value:"cliRegistration",label:"CLI",default:!0,mdxType:"TabItem"},(0,r.kt)(f,{language:"yaml",title:"registration.yaml",showLineNumbers:!0,mdxType:"CodeBlock"},o.Z)),(0,r.kt)(y,{value:"uiRegistration",label:"UI",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Add proxy settings in Machine Registration",src:n(7369).Z,width:"668",height:"650"})))),(0,r.kt)("h2",{id:"elemental-register"},"Elemental-register"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://elemental.docs.rancher.com/architecture/#elemental-register-client"},"Elemental-register")," is the first communication endpoint between the new host and Rancher Manager, this is the first place where proxy settings need to be set."),(0,r.kt)("admonition",{title:"warning",type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"At the time of writing, it's only possible to configure proxy settings for the ISO with the CLI. The proxy settings aren't implemented in the UI.")),(0,r.kt)("p",null,"The process happens when you boot your Elemental ISO for the first time, in order to configure the proxy settings you have to include a ",(0,r.kt)("inlineCode",{parentName:"p"},"cloud-init")," definition in the ISO.\nTo do that, you have to create a ",(0,r.kt)("a",{parentName:"p",href:"https://elemental.docs.rancher.com/seedimage-reference/"},"SeedImage")," definition."),(0,r.kt)(f,{language:"yaml",title:"seedimage.yaml",showLineNumbers:!0,mdxType:"CodeBlock"},i.Z),(0,r.kt)("p",null,"Apply the YAML with ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl")," and then, print your SeedImage definition to get the URL to download it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"showLineNumbers",showLineNumbers:!0},"kubectl apply -f <my_seedimage_yaml_file>\nkubectl get seedimage <seed_image_name> -n <namespace> -o yaml\n")),(0,r.kt)("p",null,"Boot the ISO and you should see your new system appears in ",(0,r.kt)("a",{parentName:"p",href:"https://elemental.docs.rancher.com/architecture#machineinventory"},"Machine inventory"),"."),(0,r.kt)("h2",{id:"create-elemental-cluster"},"Create Elemental cluster"),(0,r.kt)("p",null,"For this step, you can use either the UI or CLI."),(0,r.kt)(h,{mdxType:"Tabs"},(0,r.kt)(y,{value:"cliCluster",label:"CLI",default:!0,mdxType:"TabItem"},(0,r.kt)(f,{language:"yaml",title:"cluster.yaml",showLineNumbers:!0,mdxType:"CodeBlock"},l.Z),"You can see that proxy settings are added below `agentEnvVars`."),(0,r.kt)(y,{value:"uiCluster",label:"UI",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Add proxy settings for Elemental cluster",src:n(7601).Z,width:"1756",height:"516"})))))}k.isMDXComponent=!0},2624:(e,t,n)=>{n.d(t,{Z:()=>a});const a="kind: Cluster\napiVersion: provisioning.cattle.io/v1\nmetadata:\n  name: my-cluster\n  namespace: fleet-default\nspec:\n  agentEnvVars:\n  - name: HTTP_PROXY\n    value: http://<MY_PROXY>:<MY_PORT>\n  - name: HTTPS_PROXY\n    value: https://<MY_PROXY>:<MY_PORT>\n  - name: NO_PROXY\n    value: localhost,127.0.0.0/8,10.0.0.0/8,172.16.0.0/12,192.168.0.0/16,.svc,.cluster.local\n  rkeConfig:\n    machineGlobalConfig:\n      etcd-expose-metrics: false\n      profile: null\n    machinePools:\n      - controlPlaneRole: true\n        etcdRole: true\n        machineConfigRef:\n          apiVersion: elemental.cattle.io/v1beta1\n          kind: MachineInventorySelectorTemplate\n          name: my-machine-selector\n        name: pool1\n        quantity: 1\n        unhealthyNodeTimeout: 0s\n        workerRole: true\n    machineSelectorConfig:\n      - config:\n          protect-kernel-defaults: false\n    registries: {}\n  kubernetesVersion: v1.24.8+k3s1\n"},6506:(e,t,n)=>{n.d(t,{Z:()=>a});const a='apiVersion: elemental.cattle.io/v1beta1\nkind: MachineRegistration\nmetadata:\n  name: my-nodes\n  namespace: fleet-default\nspec:\n  config:\n    cloud-config:\n      write_files:\n      - path: /etc/sysconfig/proxy\n        append: true\n        content: |\n          PROXY_ENABLED="yes"\n          HTTP_PROXY=http://<MY_PROXY>:<MY_PORT>\n          HTTPS_PROXY=https://<MY_PROXY>:<MY_PORT>\n          NO_PROXY="localhost, 127.0.0.1"\n      users:\n        - name: root\n          passwd: root\n    elemental:\n      install:\n        reboot: true\n        device: /dev/sda\n        debug: true\n      registration:\n        emulate-tpm: true\n'},8638:(e,t,n)=>{n.d(t,{Z:()=>a});const a='apiVersion: elemental.cattle.io/v1beta1\nkind: SeedImage\nmetadata:\n  name: ...\n  namespace: ...\nspec:\n  baseImage: https://download.opensuse.org/repositories/isv:/Rancher:/Elemental:/Stable:/Teal53/media/iso/elemental-teal.x86_64.iso\n  cloud-config:\n    write_files:\n    - path: /etc/sysconfig/proxy\n      append: true\n      content: |\n        PROXY_ENABLED="yes"\n        HTTP_PROXY=http://<MY_PROXY>:<MY_PORT>\n        HTTPS_PROXY=https://<MY_PROXY>:<MY_PORT>\n        NO_PROXY="localhost, 127.0.0.1"\n  registrationRef:\n    apiVersion: elemental.cattle.io/v1beta1\n    kind: MachineRegistration\n    name: ...\n    namespace: ...\n'},7601:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/proxy-settings-cluster-ui-7303e94b634e59942023814ceff5f54f.png"},7369:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/proxy-settings-machine-registration-ui-887aa84b2d739e775e490d74062979fe.png"}}]);
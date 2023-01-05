"use strict";(self.webpackChunkelemental_docs=self.webpackChunkelemental_docs||[]).push([[360],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=n.createContext({}),s=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(m.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,m=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=s(a),d=r,g=c["".concat(m,".").concat(d)]||c[d]||u[d]||l;return a?n.createElement(g,i(i({ref:t},p),{},{components:a})):n.createElement(g,i({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},783:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const l={sidebar_label:"Elemental Operator Helm Chart",title:""},i="Elemental Operator Helm Chart",o={unversionedId:"elementaloperatorchart-reference",id:"elementaloperatorchart-reference",title:"",description:"The  is responsible for managing the Elemental versions and maintaining a machine inventory to assist with edge or bare metal installations.",source:"@site/docs/elementaloperatorchart-reference.md",sourceDirName:".",slug:"/elementaloperatorchart-reference",permalink:"/next/elementaloperatorchart-reference",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Elemental Operator Helm Chart",title:""},sidebar:"docs",previous:{title:"Cluster reference",permalink:"/next/cluster-reference"},next:{title:"Kubernetes versions",permalink:"/next/kubernetesversions"}},m={},s=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Get Helm chart info",id:"get-helm-chart-info",level:2},{value:"Install Chart",id:"install-chart",level:2},{value:"Uninstall Chart",id:"uninstall-chart",level:2},{value:"Upgrading Chart",id:"upgrading-chart",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Values",id:"values",level:2}],p=(u="Vars",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var u;const c={toc:s};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"elemental-operator-helm-chart"},"Elemental Operator Helm Chart"),(0,r.kt)("p",null,"The ",(0,r.kt)(p,{name:"elemental_operator_name",link:"elemental_operator_url",mdxType:"Vars"})," is responsible for managing the Elemental versions and maintaining a machine inventory to assist with edge or bare metal installations."),(0,r.kt)("p",null,"The associated chart bootstraps an elemental-operator deployment on the ",(0,r.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/"},"Rancher Manager v2.6")," cluster using the ",(0,r.kt)("a",{parentName:"p",href:"https://helm.sh"},"Helm")," package manager."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Rancher Manager version v2.6"),(0,r.kt)("li",{parentName:"ul"},"Helm client version v3.8.0+")),(0,r.kt)("h2",{id:"get-helm-chart-info"},"Get Helm chart info"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console",metastring:"showLineNumbers",showLineNumbers:!0},"helm pull oci://registry.opensuse.org/isv/rancher/elemental/stable/charts/rancher/elemental-operator-chart\nhelm show all oci://registry.opensuse.org/isv/rancher/elemental/stable/charts/rancher/elemental-operator-chart\n")),(0,r.kt)("h2",{id:"install-chart"},"Install Chart"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console",metastring:"showLineNumbers",showLineNumbers:!0},"helm install --create-namespace -n cattle-elemental-system elemental-operator \\\n             oci://registry.opensuse.org/isv/rancher/elemental/stable/charts/rancher/elemental-operator-chart\n")),(0,r.kt)("p",null,"The command deploys elemental-operator on the Kubernetes cluster in the default configuration."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"See ",(0,r.kt)("a",{parentName:"em",href:"#configuration"},"configuration")," below.")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"See ",(0,r.kt)("a",{parentName:"em",href:"https://helm.sh/docs/helm/helm_install/"},"helm install")," for command documentation.")),(0,r.kt)("h2",{id:"uninstall-chart"},"Uninstall Chart"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console",metastring:"showLineNumbers",showLineNumbers:!0},"helm uninstall -n cattle-elemental-system elemental-operator\n")),(0,r.kt)("p",null,"This removes all the Kubernetes components associated with the chart and deletes the release."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"See ",(0,r.kt)("a",{parentName:"em",href:"https://helm.sh/docs/helm/helm_uninstall/"},"helm uninstall")," for command documentation.")),(0,r.kt)("h2",{id:"upgrading-chart"},"Upgrading Chart"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console",metastring:"showLineNumbers",showLineNumbers:!0},"helm upgrade -n cattle-elemental-system \\\n             --install elemental-operator \\\n             oci://registry.opensuse.org/isv/rancher/elemental/stable/charts/rancher/elemental-operator-chart\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"See ",(0,r.kt)("a",{parentName:"em",href:"https://helm.sh/docs/helm/helm_upgrade/"},"helm upgrade")," for command documentation.")),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://helm.sh/docs/intro/using_helm/#customizing-the-chart-before-installing"},"Customizing the Chart Before Installing"),". To see all configurable options with detailed comments, visit the chart's ",(0,r.kt)("a",{parentName:"p",href:"#values"},"values"),", or run these configuration commands:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console",metastring:"showLineNumbers",showLineNumbers:!0},"helm show values oci://registry.opensuse.org/isv/rancher/elemental/stable/charts/rancher/elemental-operator-chart\n")),(0,r.kt)("h2",{id:"values"},"Values"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Key"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"image.empty"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"rancher/pause:3.1")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"image.repository"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"quay.io/costoolkit/elemental-operator")),(0,r.kt)("td",{parentName:"tr",align:null},"Source image for elemental-operator with repository name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"image.tag"),(0,r.kt)("td",{parentName:"tr",align:null},"tag"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'""')),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"image.imagePullPolicy"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"IfNotPresent")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"noProxy"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},'`127.0.0.0/8,10.0.0.0/8,172.16.0.0/12,192.168.0.0/16,.svc,.cluster.local"'),(0,r.kt)("td",{parentName:"tr",align:null},"Comma separated list of domains or ip addresses that will not use the proxy")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"global.cattle.systemDefaultRegistry"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'""')),(0,r.kt)("td",{parentName:"tr",align:null},"Default container registry name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sync_interval"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"60m"')),(0,r.kt)("td",{parentName:"tr",align:null},"Default sync interval for upgrade channel")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sync_namespaces"),(0,r.kt)("td",{parentName:"tr",align:null},"list"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"[]")),(0,r.kt)("td",{parentName:"tr",align:null},"Namespace the operator will watch for, leave empty for all")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"debug"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},"Enable debug output for operator")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nodeSelector.kubernetes.io/os"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"linux")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tolerations"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{}")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tolerations.key"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"cattle.io/os")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tolerations.operator"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"Equal"')),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tolerations.value"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"linux"')),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tolerations.effect"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"NoSchedule")),(0,r.kt)("td",{parentName:"tr",align:null})))))}d.isMDXComponent=!0}}]);
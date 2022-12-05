"use strict";(self.webpackChunkelemental_docs=self.webpackChunkelemental_docs||[]).push([[651],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},h=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,h=o(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,d=p["".concat(s,".").concat(m)]||p[m]||c[m]||l;return n?a.createElement(d,i(i({ref:t},h),{},{components:n})):a.createElement(d,i({ref:t},h))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9547:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>g,frontMatter:()=>i,metadata:()=>s,toc:()=>h});var a=n(7462),r=(n(7294),n(3905));var l=n(4713);const i={sidebar_label:"Quickstart",title:""},o="Quickstart",s={unversionedId:"quickstart",id:"quickstart",title:"",description:"Follow this guide to have an auto-deployed cluster via rke2/k3s and managed by Rancher",source:"@site/docs/quickstart.md",sourceDirName:".",slug:"/quickstart",permalink:"/quickstart",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Quickstart",title:""},sidebar:"elemental",previous:{title:"Overview",permalink:"/"},next:{title:"Architecture",permalink:"/architecture"}},u={},h=[{value:"Introduction",id:"introduction",level:2},{value:"What is Elemental Teal ?",id:"what-is-elemental-teal-",level:3},{value:"What is the Rancher Elemental Stack ?",id:"what-is-the-rancher-elemental-stack-",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Preparing the cluster",id:"preparing-the-cluster",level:2},{value:"Prepare your kubernetes resources",id:"prepare-your-kubernetes-resources",level:2},{value:"Preparing the iso",id:"preparing-the-iso",level:2},{value:"How can I choose the kubernetes version and deployer for the cluster?",id:"how-can-i-choose-the-kubernetes-version-and-deployer-for-the-cluster",level:2},{value:"How can I follow what is going on behind the scenes?",id:"how-can-i-follow-what-is-going-on-behind-the-scenes",level:2}],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},p=c("Tabs"),m=c("TabItem"),d=c("CodeBlock"),k={toc:h};function g(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"quickstart"},"Quickstart"),(0,r.kt)("p",null,"Follow this guide to have an auto-deployed cluster via rke2/k3s and managed by Rancher\nwith the only help of an Elemental Teal iso"),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"what-is-elemental-teal-"},"What is Elemental Teal ?"),(0,r.kt)("p",null,'Elemental Teal is the combination of "SLE Micro for Rancher" with the Rancher Elemental stack'),(0,r.kt)("p",null,'SLE Micro for Rancher is a containerized and "stripped to the bones" operating system layer. It only requires grub2, dracut, a kernel, and systemd.'),(0,r.kt)("p",null,"Its sole purpose is to run Kubernetes (k3s or RKE2), with everything controlled through Rancher Manager."),(0,r.kt)("p",null,"Elemental Teal is built in the ",(0,r.kt)("a",{parentName:"p",href:"https://build.opensuse.org/package/show/isv:Rancher:Elemental:Stable:Teal53/node-image"},"openSUSE Build Service"),"\nand available through the ",(0,r.kt)("a",{parentName:"p",href:"http://registry.opensuse.org/isv/rancher/elemental/stable/teal53/15.4/rancher/elemental-node-image/5.3:latest"},"openSUSE Registry")),(0,r.kt)("h3",{id:"what-is-the-rancher-elemental-stack-"},"What is the Rancher Elemental Stack ?"),(0,r.kt)("p",null,"The Elemental Stack consists of some packages on top of SLE Micro for Rancher"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"elemental-toolkit")," - includes a set of OS utilities to enable OS management via containers. Includes dracut modules, bootloader configuration, cloud-init style configuration services, etc."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"elemental-operator")," - this connects to Rancher Manager and handles machineRegistration and machineInventory CRDs"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"elemental-register")," - this registers machines via machineRegistrations and installs them via elemental-cli"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"elemental-cli")," - this installs any elemental-toolkit based derivative. Basically an installer based on our A/B install and upgrade system"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"rancher-system-agent"),' - runs on the installed system and gets instructions ("Plans") from Rancher Manager what to install and run on the system')),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A Rancher server (2.6.9) configured (server-url set)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"To configure the Rancher server-url please check the ",(0,r.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rancher/v2.6/en/admin-settings/#first-log-in"},"Rancher docs")))),(0,r.kt)("li",{parentName:"ul"},"A machine (bare metal or virtualized) with TPM 2.0",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Hint 1: Libvirt allows setting virtual TPMs for virtual machines ",(0,r.kt)("a",{parentName:"li",href:"https://rancher.github.io/elemental/tpm/#add-tpm-module-to-virtual-machine"},"example here")),(0,r.kt)("li",{parentName:"ul"},"Hint 2: You can enable TPM emulation on bare metal machines missing the TPM 2.0 module ",(0,r.kt)("a",{parentName:"li",href:"https://rancher.github.io/elemental/tpm/#add-tpm-emulation-to-bare-metal-machine"},"example here")),(0,r.kt)("li",{parentName:"ul"},"Hint 3: Make sure you're using UEFI (not BIOS), or the ISO won't boot"))),(0,r.kt)("li",{parentName:"ul"},"Helm Package Manager (",(0,r.kt)("a",{parentName:"li",href:"https://helm.sh/"},"https://helm.sh/"),")"),(0,r.kt)("li",{parentName:"ul"},"Docker (for iso manipulation)")),(0,r.kt)("h2",{id:"preparing-the-cluster"},"Preparing the cluster"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"elemental-operator")," is the management endpoint, running the management\ncluster and taking care of creating inventories, registrations for machines and much more."),(0,r.kt)("p",null,"We will use the Helm package manager to install the elemental-operator chart into our cluster"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"showLineNumbers",showLineNumbers:!0},"helm upgrade --create-namespace -n cattle-elemental-system --install elemental-operator oci://registry.opensuse.org/isv/rancher/elemental/stable/charts/rancher/elemental-operator-chart\n")),(0,r.kt)("p",null,"There is a few options that can be set in the chart install but that is out of scope for this document. You can see all the values on the chart ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/rancher/elemental-operator/blob/main/chart/values.yaml"},"values.yaml")),(0,r.kt)("p",null,"Now after a few seconds you should see the operator pod appear on the ",(0,r.kt)("inlineCode",{parentName:"p"},"cattle-elemental-system")," namespace."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"showLineNumbers",showLineNumbers:!0},"kubectl get pods -n cattle-elemental-system\nNAME                                  READY   STATUS    RESTARTS   AGE\nelemental-operator-64f88fc695-b8qhn   1/1     Running   0          16s\n")),(0,r.kt)("h2",{id:"prepare-your-kubernetes-resources"},"Prepare your kubernetes resources"),(0,r.kt)("p",null,"Node deployment starts with a ",(0,r.kt)("inlineCode",{parentName:"p"},"MachineRegistration"),", identifying a set of machines sharing the same configuration (disk drives, network, etc.)"),(0,r.kt)("p",null,"Then it continues with having a Cluster resource that uses a ",(0,r.kt)("inlineCode",{parentName:"p"},"MachineInventorySelectorTemplate")," to know which machines are for that cluster."),(0,r.kt)("p",null,"This selector is a simple matcher based on labels set in the ",(0,r.kt)("inlineCode",{parentName:"p"},"MachineInventory"),", so if your selector is matching the ",(0,r.kt)("inlineCode",{parentName:"p"},"cluster-id")," key with a value ",(0,r.kt)("inlineCode",{parentName:"p"},"myId"),"\nand your ",(0,r.kt)("inlineCode",{parentName:"p"},"MachineInventory")," has that same key with that value, it will match and be bootstrapped as part of the cluster."),(0,r.kt)(p,{mdxType:"Tabs"},(0,r.kt)(m,{value:"manualYaml",label:"Manually creating the resource yamls",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"You will need to create the following files."),(0,r.kt)(d,{language:"yaml",title:"selector.yaml",showLineNumbers:!0,mdxType:"CodeBlock"},"apiVersion: elemental.cattle.io/v1beta1\nkind: MachineInventorySelectorTemplate\nmetadata:\n  name: my-machine-selector\n  namespace: fleet-default\nspec:\n  template:\n    spec:\n      selector:\n        matchExpressions:\n          - key: location\n            operator: In\n            values: [ 'europe' ]"),(0,r.kt)("p",null,"As you can see this is a very simple selector that checks the key ",(0,r.kt)("inlineCode",{parentName:"p"},"node-location")," for the value ",(0,r.kt)("inlineCode",{parentName:"p"},"europe")),(0,r.kt)(d,{language:"yaml",title:"cluster.yaml",showLineNumbers:!0,mdxType:"CodeBlock"},"kind: Cluster\napiVersion: provisioning.cattle.io/v1\nmetadata:\n  name: my-cluster\n  namespace: fleet-default\nspec:\n  rkeConfig:\n    machinePools:\n      - controlPlaneRole: true\n        etcdRole: true\n        machineConfigRef:\n          apiVersion: elemental.cattle.io/v1beta1\n          kind: MachineInventorySelectorTemplate\n          name: my-machine-selector\n        name: pool1\n        quantity: 1\n        unhealthyNodeTimeout: 0s\n        workerRole: true\n  kubernetesVersion: v1.23.7+k3s1"),(0,r.kt)("p",null,"As you can see we are setting that our ",(0,r.kt)("inlineCode",{parentName:"p"},"machineConfigRef")," is of Kind ",(0,r.kt)("inlineCode",{parentName:"p"},"MachineInventorySelectorTemplate")," with the name ",(0,r.kt)("inlineCode",{parentName:"p"},"my-machine-selector"),", which matches the selector we created."),(0,r.kt)(d,{language:"yaml",title:"registration.yaml",showLineNumbers:!0,mdxType:"CodeBlock"},l.Z),(0,r.kt)("p",null,"This creates a ",(0,r.kt)("inlineCode",{parentName:"p"},"MachineRegistration")," which will provide a unique URL which we will use with ",(0,r.kt)("inlineCode",{parentName:"p"},"elemental-register")," to register\nthe node during installation, so the operator can create a ",(0,r.kt)("inlineCode",{parentName:"p"},"MachineInventory")," which will be using to bootstrap the node.\nSee that we set the label that match our selector here already, although it can always be added later to the ",(0,r.kt)("inlineCode",{parentName:"p"},"MachineInventory"),"."),(0,r.kt)("admonition",{title:"warning",type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"Make sure to modify the registration.yaml above to set the proper install device to point to a valid device based on your node configuration(i.e. /dev/sda, /dev/vda, /dev/nvme0, etc...)")),(0,r.kt)("p",null,"Now that we have all the configuration to create the proper resources in Kubernetes just apply them"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"showLineNumbers",showLineNumbers:!0},"kubectl apply -f selector.yaml \nkubectl apply -f cluster.yaml \nkubectl apply -f registration.yaml\n"))),(0,r.kt)(m,{value:"repofiles",label:"Using quickstart files from Elemental repo directly",mdxType:"TabItem"},(0,r.kt)("p",null,"You can directly apply the quickstart example resource files from the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/rancher/elemental"},"Elemental repository")),(0,r.kt)("admonition",{title:"warning",type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"This assumes that your Node will have a ",(0,r.kt)("inlineCode",{parentName:"p"},"/dev/sda")," disk available as that is the default device selected in those files.\nIf your node doesnt have that device you will have to manually create the registration.yaml file or download the one from the repo and modify before applying")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"showLineNumbers",showLineNumbers:!0},"kubectl apply -f https://raw.githubusercontent.com/rancher/elemental/main/examples/quickstart/selector.yaml\nkubectl apply -f https://raw.githubusercontent.com/rancher/elemental/main/examples/quickstart/cluster.yaml\nkubectl apply -f https://raw.githubusercontent.com/rancher/elemental/main/examples/quickstart/registration.yaml\n")))),(0,r.kt)("h2",{id:"preparing-the-iso"},"Preparing the iso"),(0,r.kt)("p",null,"Now this is the last step, we need to prepare an Elemental Teal iso that includes the initial registration config, so\nit can be auto registered, installed and fully deployed as part of our cluster. The contents of the file are nothing\nmore than the registration url that the node needs to register and the proper server certificate, so it can connect securely.\nThis iso then can be used to provision an infinite number of machines"),(0,r.kt)("p",null,"Now, our ",(0,r.kt)("inlineCode",{parentName:"p"},"MachineRegistration")," provides the needed config in its resource as part of its ",(0,r.kt)("inlineCode",{parentName:"p"},"Status.RegistrationURL"),",\nso we can use that url to obtain the proper yaml needed for the iso."),(0,r.kt)(p,{mdxType:"Tabs"},(0,r.kt)(m,{value:"oneLiner",label:"One liner",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"showLineNumbers",showLineNumbers:!0},'wget --no-check-certificate `kubectl get machineregistration -n fleet-default my-nodes -o jsonpath="{.status.registrationURL}"` -O initial-registration.yaml\n')),(0,r.kt)("p",null,"This will download the proper yaml from the registration URL and store it on the current directory under the ",(0,r.kt)("inlineCode",{parentName:"p"},"initial-registration.yaml")," name.")),(0,r.kt)(m,{value:"explanation",label:"Full explanation",mdxType:"TabItem"},(0,r.kt)("p",null,"First we need to obtain the ",(0,r.kt)("inlineCode",{parentName:"p"},"RegistrationURL")," that was generated for our ",(0,r.kt)("inlineCode",{parentName:"p"},"MachineRegistration")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"showLineNumbers",showLineNumbers:!0},'$ kubectl get machineregistration -n fleet-default my-nodes -o jsonpath="{.status.registrationURL}"\nhttps://172.18.0.2.sslip.io/elemental/registration/gsh4n8nj9gvbsjk4x7hxvnr5l6hmhbdbdffrmkwzrss2dtfbnpbmqp\n')),(0,r.kt)("p",null,"As you can see we obtained the proper initial registration needed by ",(0,r.kt)("inlineCode",{parentName:"p"},"elemental-register")," to register the node properly and continue with the automated installation"),(0,r.kt)("p",null,"Then we need to visit that URL as that will provide the URL and CA certificate for unauthenticated requests:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"showLineNumbers",showLineNumbers:!0},"$ curl --insecure https://172.18.0.2.sslip.io/elemental/registration/gsh4n8nj9gvbsjk4x7hxvnr5l6hmhbdbdffrmkwzrss2dtfbnpbmqp\n\nelemental:\n  registration:\n    url: https://172.18.0.2.sslip.io/elemental/registration/gsh4n8nj9gvbsjk4x7hxvnr5l6hmhbdbdffrmkwzrss2dtfbnpbmqp\n    ca-cert: |-\n      -----BEGIN CERTIFICATE-----\n      MIIBqDCCAU2gAwIBAgIBADAKBggqhkjOPQQDAjA7MRwwGgYDVQQKExNkeW5hbWlj\n      bGlzdGVuZXItb3JnMRswGQYDVQQDExJkeW5hbWljbGlzdGVuZXItY2EwHhcNMjIw\n      ODA0MTA1OTE1WhcNMzIwODAxMTA1OTE1WjA7MRwwGgYDVQQKExNkeW5hbWljbGlz\n      dGVuZXItb3JnMRswGQYDVQQDExJkeW5hbWljbGlzdGVuZXItY2EwWTATBgcqhkjO\n      PQIBBggqhkjOPQMBBwNCAASa8PJH7JJGT5QUPMBYnJe0j50G7dTEaDlk4xRpqVk1\n      y4dloslsI0RTb6B++7nNgnLPOe2KqZfylNmVIAelrSaUo0IwQDAOBgNVHQ8BAf8E\n      BAMCAqQwDwYDVR0TAQH/BAUwAwEB/zAdBgNVHQ4EFgQUxp8OBfjZlnyV6pzzKqIF\n      wWByvCYwCgYIKoZIzj0EAwIDSQAwRgIhAPI2XUWcnxkkBe98SGPFa1Hlncyu/FCR\n      AbEYIAdUC2z+AiEA+GizukSRiiLV28wdNdKihEELy+qzi5MlVYowUuQYZsA=\n      -----END CERTIFICATE-----\n")),(0,r.kt)("p",null,"As you can see we obtained the proper initial registration needed by ",(0,r.kt)("inlineCode",{parentName:"p"},"elemental-register")," to register the node properly and continue with the automated installation"),(0,r.kt)("p",null,"Now we can write down the data returned for that url into a file that we will inject into the iso"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="initial-registration.yaml" showLineNumbers',title:'"initial-registration.yaml"',showLineNumbers:!0},"elemental:\n  registration:\n    url: https://172.18.0.2.sslip.io/elemental/registration/gsh4n8nj9gvbsjk4x7hxvnr5l6hmhbdbdffrmkwzrss2dtfbnpbmqp\n    ca-cert: |-\n      -----BEGIN CERTIFICATE-----\n      MIIBqDCCAU2gAwIBAgIBADAKBggqhkjOPQQDAjA7MRwwGgYDVQQKExNkeW5hbWlj\n      bGlzdGVuZXItb3JnMRswGQYDVQQDExJkeW5hbWljbGlzdGVuZXItY2EwHhcNMjIw\n      ODA0MTA1OTE1WhcNMzIwODAxMTA1OTE1WjA7MRwwGgYDVQQKExNkeW5hbWljbGlz\n      dGVuZXItb3JnMRswGQYDVQQDExJkeW5hbWljbGlzdGVuZXItY2EwWTATBgcqhkjO\n      PQIBBggqhkjOPQMBBwNCAASa8PJH7JJGT5QUPMBYnJe0j50G7dTEaDlk4xRpqVk1\n      y4dloslsI0RTb6B++7nNgnLPOe2KqZfylNmVIAelrSaUo0IwQDAOBgNVHQ8BAf8E\n      BAMCAqQwDwYDVR0TAQH/BAUwAwEB/zAdBgNVHQ4EFgQUxp8OBfjZlnyV6pzzKqIF\n      wWByvCYwCgYIKoZIzj0EAwIDSQAwRgIhAPI2XUWcnxkkBe98SGPFa1Hlncyu/FCR\n      AbEYIAdUC2z+AiEA+GizukSRiiLV28wdNdKihEELy+qzi5MlVYowUuQYZsA=\n      -----END CERTIFICATE-----\n")))),(0,r.kt)("p",null,"Now we can proceed to create the ISO"),(0,r.kt)(p,{mdxType:"Tabs"},(0,r.kt)(m,{value:"script",label:"Via script",mdxType:"TabItem"},(0,r.kt)("p",null,"We provide a ISO build script for ease of use that can get the final ISO and inject the ",(0,r.kt)("inlineCode",{parentName:"p"},"initial-registration.yaml"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"showLineNumbers",showLineNumbers:!0},"wget -q https://raw.githubusercontent.com/rancher/elemental/main/.github/elemental-iso-add-registration && chmod +x elemental-iso-add-registration\n")),(0,r.kt)("p",null,"Now that we have the script we can proceed to download the ISO and inject our configuration injected:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"showLineNumbers",showLineNumbers:!0},"./elemental-iso-add-registration initial-registration.yaml\n")),(0,r.kt)("p",null,"This will generate an ISO on the current directory with the name ",(0,r.kt)("inlineCode",{parentName:"p"},"elemental-teal-<ARCH>.iso")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The script uses the iso for the arch based on the system is being run from. If you want to cross build for another system,\nyou can set the ",(0,r.kt)("inlineCode",{parentName:"p"},"ARCH")," environment variable to the desired target system (x86_64, aarch64) and the iso will be built for that architecture.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"showLineNumbers",showLineNumbers:!0},"wget -q https://raw.githubusercontent.com/rancher/elemental/main/elemental-iso-build && chmod +x elemental-iso-build\n")),(0,r.kt)("p",null,"Now that we have the script we can proceed to build the ISO with our configuration injected:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"showLineNumbers",showLineNumbers:!0},"./elemental-iso-build initial-registration.yaml\n")),(0,r.kt)("p",null,"This will generate an ISO on the current directory with the name ",(0,r.kt)("inlineCode",{parentName:"p"},"elemental-<timestamp>.iso")))),(0,r.kt)("p",null,"You can now boot your nodes with this ISO, and they will:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Boot from the ISO"),(0,r.kt)("li",{parentName:"ul"},"Register with the registrationURL given and create a per-machine ",(0,r.kt)("inlineCode",{parentName:"li"},"MachineInventory")),(0,r.kt)("li",{parentName:"ul"},"Install Elemental Teal to the given device"),(0,r.kt)("li",{parentName:"ul"},"Restart"),(0,r.kt)("li",{parentName:"ul"},"Auto-deploy the cluster via k3s")),(0,r.kt)("p",null,"After a few minutes your new cluster will be fully provisioned!!"),(0,r.kt)("h2",{id:"how-can-i-choose-the-kubernetes-version-and-deployer-for-the-cluster"},"How can I choose the kubernetes version and deployer for the cluster?"),(0,r.kt)("p",null,"In your cluster.yaml file there is a key in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Spec")," called ",(0,r.kt)("inlineCode",{parentName:"p"},"kubernetesVersion"),". That sets the version and deployer that will be used for the cluster,\nfor example for rke ",(0,r.kt)("inlineCode",{parentName:"p"},"v1.23.6")," while for rke2 would be ",(0,r.kt)("inlineCode",{parentName:"p"},"v1.23.6+rke2r1")," and for k3s ",(0,r.kt)("inlineCode",{parentName:"p"},"v1.23.6+k3s1")),(0,r.kt)("p",null,"To see all compatible versions check the ",(0,r.kt)("a",{parentName:"p",href:"https://www.suse.com/suse-rancher/support-matrix/all-supported-versions/"},"Rancher Support Matrix")," PDF for rke/rke2/k3s versions and their components."),(0,r.kt)("p",null,"You can also check our ",(0,r.kt)("a",{parentName:"p",href:"/kubernetesversions"},"Version doc")," to know how to obtain those versions."),(0,r.kt)("p",null,"Check our ",(0,r.kt)("a",{parentName:"p",href:"/cluster-reference"},"Cluster Spec")," page for more info about the ",(0,r.kt)("inlineCode",{parentName:"p"},"Cluster")," resource."),(0,r.kt)("h2",{id:"how-can-i-follow-what-is-going-on-behind-the-scenes"},"How can I follow what is going on behind the scenes?"),(0,r.kt)("p",null,"You should be able to follow along what the machine is doing via:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"During ISO boot:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"ssh into the machine (user/pass: root/ros):",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"running ",(0,r.kt)("inlineCode",{parentName:"li"},"journalctl -f -t elemental")," will show you the output of the elemental-register and the elemental install"))))),(0,r.kt)("li",{parentName:"ul"},"Once the system is installed:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"On the Rancher UI -> ",(0,r.kt)("inlineCode",{parentName:"li"},"Cluster Management")," you should see your new cluster and be able to see the ",(0,r.kt)("inlineCode",{parentName:"li"},"Provisioning Log")," in the cluster details"),(0,r.kt)("li",{parentName:"ul"},"ssh into the machine (user/pass: Whatever your configured on the registration.yaml under ",(0,r.kt)("inlineCode",{parentName:"li"},"Spec.config.cloud-config.users"),"):",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"running ",(0,r.kt)("inlineCode",{parentName:"li"},"journalctl -f -u elemental-system-agent")," will show the output of the initial elemental config and install of ",(0,r.kt)("inlineCode",{parentName:"li"},"rancher-system-agent")),(0,r.kt)("li",{parentName:"ul"},"running ",(0,r.kt)("inlineCode",{parentName:"li"},"journalctl -f -u rancher-system-agent")," will show the output of the boostrap of cluster components like k3s"),(0,r.kt)("li",{parentName:"ul"},"running ",(0,r.kt)("inlineCode",{parentName:"li"},"journalctl -f -u k3s")," will show the logs of the k3s deployment")))))))}g.isMDXComponent=!0},4713:(e,t,n)=>{n.d(t,{Z:()=>a});const a='apiVersion: elemental.cattle.io/v1beta1\nkind: MachineRegistration\nmetadata:\n  name: my-nodes\n  namespace: fleet-default\nspec:\n  config:\n    cloud-config:\n      users:\n        - name: root\n          passwd: root\n    elemental:\n      install:\n        reboot: true\n        device: /dev/sda\n        debug: true\n  machineInventoryLabels:\n    location: "europe"\n    manufacturer: "${System Information/Manufacturer}"\n    productName: "${System Information/Product Name}"\n    serialNumber: "${System Information/Serial Number}"\n    machineUUID: "${System Information/UUID}"'}}]);
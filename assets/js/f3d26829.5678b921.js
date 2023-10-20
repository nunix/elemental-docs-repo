"use strict";(self.webpackChunkelemental_docs=self.webpackChunkelemental_docs||[]).push([[2530],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),m=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=m(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=m(n),h=r,d=c["".concat(s,".").concat(h)]||c[h]||u[h]||i;return n?a.createElement(d,l(l({ref:t},p),{},{components:n})):a.createElement(d,l({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:r,l[1]=o;for(var m=2;m<i;m++)l[m]=n[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},8466:(e,t,n)=>{n.d(t,{ZP:()=>p});var a=n(7462),r=(n(7294),n(3905));const i=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},l=i("Tabs"),o=i("TabItem"),s={toc:[{value:"Install Elemental Operator",id:"install-elemental-operator",level:2},{value:"Non-stable installations",id:"non-stable-installations",level:3},{value:"Installation options",id:"installation-options",level:3}]},m="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"install-elemental-operator"},"Install Elemental Operator"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"elemental-operator")," is the management endpoint, running the management\ncluster and taking care of creating inventories, registrations for machines and much more."),(0,r.kt)("p",null,"We will use the Helm package manager to install the elemental-operator chart into our cluster."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"showLineNumbers",showLineNumbers:!0},"helm upgrade --create-namespace -n cattle-elemental-system --install elemental-operator-crds oci://registry.suse.com/rancher/elemental-operator-crds-chart\nhelm upgrade --create-namespace -n cattle-elemental-system --install elemental-operator oci://registry.suse.com/rancher/elemental-operator-chart\n")),(0,r.kt)("p",null,"Now after a few seconds you should see the operator pod appear on the ",(0,r.kt)("inlineCode",{parentName:"p"},"cattle-elemental-system")," namespace:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"showLineNumbers",showLineNumbers:!0},"kubectl get pods -n cattle-elemental-system\nNAME                                  READY   STATUS    RESTARTS   AGE\nelemental-operator-64f88fc695-b8qhn   1/1     Running   0          16s\n")),(0,r.kt)("admonition",{title:"Helm v3.8.0+ required",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The Elemental Operator chart is distributed via an OCI registry: Helm correctly supports OCI based registries starting from the v3.8.0 release.")),(0,r.kt)("admonition",{title:"Swap charts installation order when upgrading from elemental-operator release < 1.2.4",type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"When upgrading from an elemental-operator release embedding the Elemental CRDs (version < 1.2.4) the elemental-operator-crds chart installation will fail.\nYou will need to upgrade the elemental-operator chart first, and only then install the elemental-operator-crds chart.")),(0,r.kt)("h3",{id:"non-stable-installations"},"Non-stable installations"),(0,r.kt)("p",null,"Besides the Helm charts listed above, there are two other ",(0,r.kt)("inlineCode",{parentName:"p"},"non-stable"),"\nversions available."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Staging:")," refers to the latest tagged release from Github. This is documented in the ",(0,r.kt)("a",{parentName:"p",href:"next/quickstart-ui"},"Next")," pages.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Development:")," refers to the 'tip of HEAD' from Github. This is the ongoing development version and changes constantly."))),(0,r.kt)(l,{mdxType:"Tabs"},(0,r.kt)(o,{value:"stagingOperator",label:"Staging version (x86-64, ARM64 (Raspberry Pi 4))",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"showLineNumbers",showLineNumbers:!0},"helm upgrade --create-namespace -n cattle-elemental-system --install elemental-operator-crds oci://registry.opensuse.org/isv/rancher/elemental/staging/charts/rancher/elemental-operator-crds-chart\nhelm upgrade --create-namespace -n cattle-elemental-system --install elemental-operator oci://registry.opensuse.org/isv/rancher/elemental/staging/charts/rancher/elemental-operator-chart\n"))),(0,r.kt)(o,{value:"develOperator",label:"Development version (x86-64, ARM64 (Raspberry Pi 4))",default:!0,mdxType:"TabItem"},(0,r.kt)("admonition",{title:"Reminder",type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"The development version is not recommended for production environments. We welcome feedback via Slack or Github issues, but it could be unstable and contain experimental features that can be dropped without notice.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"showLineNumbers",showLineNumbers:!0},"helm upgrade --create-namespace -n cattle-elemental-system --install elemental-operator-crds oci://registry.opensuse.org/isv/rancher/elemental/dev/charts/rancher/elemental-operator-crds-chart\nhelm upgrade --create-namespace -n cattle-elemental-system --install --set image.imagePullPolicy=Always elemental-operator oci://registry.opensuse.org/isv/rancher/elemental/dev/charts/rancher/elemental-operator-chart\n")))),(0,r.kt)("h3",{id:"installation-options"},"Installation options"),(0,r.kt)("p",null,"There are a few options that can be set in the chart install but that is out of scope for this document. You can see all the values on the chart ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/rancher/elemental-operator/blob/main/charts/operator/values.yaml"},"values.yaml"),"."))}p.isMDXComponent=!0},5319:(e,t,n)=>{n.d(t,{ZP:()=>o});var a=n(7462),r=(n(7294),n(3905));const i={toc:[{value:"Prerequisites",id:"prerequisites",level:2}]},l="wrapper";function o(e){let{components:t,...n}=e;return(0,r.kt)(l,(0,a.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A Rancher server (v2.7.0 or later) configured (server-url set)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"To configure the Rancher ",(0,r.kt)("inlineCode",{parentName:"li"},"server-url")," please check the ",(0,r.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rancher/v2.6/en/admin-settings/#first-log-in"},"Rancher docs")))),(0,r.kt)("li",{parentName:"ul"},"A machine (bare metal or virtualized) with TPM 2.0",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Hint 1: Libvirt allows setting virtual TPMs for virtual machines ",(0,r.kt)("a",{parentName:"li",href:"tpm/#add-tpm-module-to-virtual-machine"},"example here")),(0,r.kt)("li",{parentName:"ul"},"Hint 2: You can enable TPM emulation on bare metal machines missing the TPM 2.0 module ",(0,r.kt)("a",{parentName:"li",href:"tpm/#add-tpm-emulation-to-bare-metal-machine"},"example here")),(0,r.kt)("li",{parentName:"ul"},"Hint 3: Make sure you're using UEFI (not BIOS) on x86-64, or the ISO won't boot"),(0,r.kt)("li",{parentName:"ul"},"Hint 4: A minimum volume size of 25 GB is recommended. See the ",(0,r.kt)("a",{parentName:"li",href:"/1.2/installation#deployed-elemental-teal-partition-table"},"Elemental Teal partition table")," for more details  "),(0,r.kt)("li",{parentName:"ul"},"Hint 5: CPU and RAM requirements depend on the Kubernetes version installed, for example ",(0,r.kt)("a",{parentName:"li",href:"https://docs.k3s.io/installation/requirements#hardware"},"K3s")," or ",(0,r.kt)("a",{parentName:"li",href:"https://docs.rke2.io/install/requirements#hardware"},"RKE2"),"  "))),(0,r.kt)("li",{parentName:"ul"},"Helm Package Manager (",(0,r.kt)("a",{parentName:"li",href:"https://helm.sh/"},"https://helm.sh/"),")"),(0,r.kt)("li",{parentName:"ul"},"For ARM (aarch64) - One SD-card (32 GB or more, must be ",(0,r.kt)("strong",{parentName:"li"},"fast")," - 40MB/s write speed is acceptable) and a USB-stick for installation")))}o.isMDXComponent=!0},1616:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>h,default:()=>T,frontMatter:()=>u,metadata:()=>d,toc:()=>k});var a=n(7462),r=(n(7294),n(3905)),i=n(6854),l=n(4713),o=n(8260),s=n(3367),m=n(5319),p=n(8466),c=n(5974);const u={sidebar_label:"Elemental the command line way",title:""},h="Elemental the command line way",d={unversionedId:"quickstart-cli",id:"version-1.2/quickstart-cli",title:"",description:"Follow this guide to have an auto-deployed cluster via rke2/k3s and managed by Rancher",source:"@site/versioned_docs/version-1.2/quickstart-cli.md",sourceDirName:".",slug:"/quickstart-cli",permalink:"/1.2/quickstart-cli",draft:!1,tags:[],version:"1.2",frontMatter:{sidebar_label:"Elemental the command line way",title:""},sidebar:"docs",previous:{title:"Elemental the visual way",permalink:"/1.2/quickstart-ui"},next:{title:"Architecture",permalink:"/1.2/architecture"}},g={},k=[{value:"Prepare your kubernetes resources",id:"prepare-your-kubernetes-resources",level:2},{value:"Preparing the installation (seed) image",id:"preparing-the-installation-seed-image",level:2},{value:"Retrieving the prebuilt seed image",id:"retrieving-the-prebuilt-seed-image",level:4},{value:"Verifying the download",id:"verifying-the-download",level:5},{value:"Injecting the registration information",id:"injecting-the-registration-information",level:4},{value:"Writing the seed image to a USB stick",id:"writing-the-seed-image-to-a-usb-stick",level:4},{value:"Booting the Raspberry Pi",id:"booting-the-raspberry-pi",level:4},{value:"Selecting the right machines to join a cluster",id:"selecting-the-right-machines-to-join-a-cluster",level:3},{value:"How can I choose the kubernetes version and deployer for the cluster?",id:"how-can-i-choose-the-kubernetes-version-and-deployer-for-the-cluster",level:2},{value:"How can I follow what is going on behind the scenes?",id:"how-can-i-follow-what-is-going-on-behind-the-scenes",level:2}],f=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},b=f("Tabs"),y=f("TabItem"),v=f("CodeBlock"),N={toc:k},w="wrapper";function T(e){let{components:t,...n}=e;return(0,r.kt)(w,(0,a.Z)({},N,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"elemental-the-command-line-way"},"Elemental the command line way"),(0,r.kt)("p",null,"Follow this guide to have an auto-deployed cluster via rke2/k3s and managed by Rancher\nwith the only help of an Elemental Teal ISO."),(0,r.kt)(m.ZP,{mdxType:"Prereqs"}),(0,r.kt)(p.ZP,{mdxType:"Operator"}),(0,r.kt)("h2",{id:"prepare-your-kubernetes-resources"},"Prepare your kubernetes resources"),(0,r.kt)("p",null,"Node deployment starts with a ",(0,r.kt)("inlineCode",{parentName:"p"},"MachineRegistration"),", identifying a set of machines sharing the same configuration (disk drives, network, etc.)."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"MachineRegistration")," is needed to perform the deployment of the Elemental OS on the target hosts. When booting up, each host registers to the Elemental Operator which tracks the new host with a ",(0,r.kt)("inlineCode",{parentName:"p"},"MachineInventory")," resource."),(0,r.kt)("p",null,"Then it continues with having a Cluster resource that uses a ",(0,r.kt)("inlineCode",{parentName:"p"},"MachineInventorySelectorTemplate")," to know which machines are for that cluster."),(0,r.kt)("p",null,"This selector is a simple matcher based on labels set in the ",(0,r.kt)("inlineCode",{parentName:"p"},"MachineInventory"),", so if your selector is matching on the label ",(0,r.kt)("inlineCode",{parentName:"p"},"cluster-id")," with a value ",(0,r.kt)("inlineCode",{parentName:"p"},"cluster-id-val"),"\nand your ",(0,r.kt)("inlineCode",{parentName:"p"},"MachineInventory")," has that same ",(0,r.kt)("inlineCode",{parentName:"p"},"cluster-id"),":",(0,r.kt)("inlineCode",{parentName:"p"},"cluster-id-val")," label, it will match and be bootstrapped as part of the cluster."),(0,r.kt)("p",null,"In this quickstart we are going to deploy the resources to provision a cluster named ",(0,r.kt)("em",{parentName:"p"},"volcano")," that will match on ",(0,r.kt)("inlineCode",{parentName:"p"},"MachineInventory"),"s with the label ",(0,r.kt)("em",{parentName:"p"},"element"),":",(0,r.kt)("em",{parentName:"p"},"fire"),"."),(0,r.kt)(b,{mdxType:"Tabs"},(0,r.kt)(y,{value:"manualYaml",label:"Manually creating the resource yamls",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"You will need to create the following files:"),(0,r.kt)(v,{language:"yaml",title:"selector.yaml",showLineNumbers:!0,mdxType:"CodeBlock"},s.Z),(0,r.kt)("p",null,"As you can see this is a very simple selector that looks for ",(0,r.kt)("inlineCode",{parentName:"p"},"MachineInventory"),"s having a label with the key ",(0,r.kt)("inlineCode",{parentName:"p"},"element")," and the value ",(0,r.kt)("inlineCode",{parentName:"p"},"fire"),"."),(0,r.kt)(v,{language:"yaml",title:"cluster.yaml",showLineNumbers:!0,mdxType:"CodeBlock"},i.Z),(0,r.kt)("p",null,"As you can see the ",(0,r.kt)("inlineCode",{parentName:"p"},"machineConfigRef")," is of kind ",(0,r.kt)("inlineCode",{parentName:"p"},"MachineInventorySelectorTemplate")," with the name ",(0,r.kt)("inlineCode",{parentName:"p"},"fire-machine-selector"),": it matches the selector we created."),(0,r.kt)("p",null,"You can get more information about cluster options like ",(0,r.kt)("a",{parentName:"p",href:"https://ranchermanager.docs.rancher.com/reference-guides/cluster-configuration/rancher-server-configuration/rke2-cluster-configuration#machineglobalconfig"},(0,r.kt)("inlineCode",{parentName:"a"},"machineGlobalConfig"))," or ",(0,r.kt)("a",{parentName:"p",href:"https://ranchermanager.docs.rancher.com/reference-guides/cluster-configuration/rancher-server-configuration/rke2-cluster-configuration#machineselectorconfig"},(0,r.kt)("inlineCode",{parentName:"a"},"machineSelectorConfig"))," directly in the ",(0,r.kt)("a",{parentName:"p",href:"https://ranchermanager.docs.rancher.com"},"Rancher Manager documentation"),"."),(0,r.kt)(b,{mdxType:"Tabs"},(0,r.kt)(y,{value:"normalRegistration",label:"Registration",default:!0,mdxType:"TabItem"},(0,r.kt)(v,{language:"yaml",title:"registration.yaml",showLineNumbers:!0,mdxType:"CodeBlock"},l.Z)),(0,r.kt)(y,{value:"rpiRegistration",label:"Registration for Raspberry Pi",default:!0,mdxType:"TabItem"},(0,r.kt)(v,{language:"yaml",title:"rpi-registration.yaml",showLineNumbers:!0,mdxType:"CodeBlock"},o.Z),(0,r.kt)("p",null,"For deployment on Raspberry Pi, you need to enable emulated TPM\n(except you have ",(0,r.kt)("a",{parentName:"p",href:"https://thepihut.com/products/letstrust-tpm-for-raspberry-pi"},"a hardware TPM for Raspberry Pi"),").\nYou also need to disable writing to the EFI store (since Raspberry Pi doesn't have one) via ",(0,r.kt)("inlineCode",{parentName:"p"},"disable-boot-entry: true"),"."))),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"MachineRegistration")," defines the registration and installation configuration. Once created, the Elemental operator exposes a unique URL to be used with the ",(0,r.kt)("inlineCode",{parentName:"p"},"elemental-register")," binary to reach out to the management cluster and register the machine during installation: if the registration is successful, the operator creates a ",(0,r.kt)("inlineCode",{parentName:"p"},"MachineInventory")," tracking the machine, which can be used to provision the machine as a node of our cluster.\nWe define the label matching our selector here, although it can also be added later to the created ",(0,r.kt)("inlineCode",{parentName:"p"},"MachineInventory"),"s."),(0,r.kt)("admonition",{title:"warning",type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"Make sure to modify the registration.yaml above to set the proper install device to point to a valid device based on your node configuration (i.e. /dev/sda, /dev/vda, /dev/nvme0, etc...)."),(0,r.kt)("p",{parentName:"admonition"},"The SD-card on a Raspberry Pi is usually ",(0,r.kt)("inlineCode",{parentName:"p"},"/dev/mmcblk0"),".")),(0,r.kt)(b,{mdxType:"Tabs"},(0,r.kt)(y,{value:"seedImagex86",label:"Seed Image (x86_64)",default:!0,mdxType:"TabItem"},(0,r.kt)(v,{language:"yaml",title:"seedimage.yaml",showLineNumbers:!0,mdxType:"CodeBlock"},c.Z),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"SeedImage")," is required to generate the ",(0,r.kt)("em",{parentName:"p"},"seed image")," (like a bootable ISO) that will boot and start the Elemental provisioning on the target machines."),(0,r.kt)("p",null,"Now that we have defined all the configuration files let's apply them to create the proper resources in Kubernetes:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"showLineNumbers",showLineNumbers:!0},"kubectl apply -f selector.yaml \nkubectl apply -f cluster.yaml \nkubectl apply -f registration.yaml\nkubectl apply -f seedimage.yaml\n"))),(0,r.kt)(y,{value:"seedImagerpi",label:"Seed Image for Raspberry Pi",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"SeedImage")," resource, which automates the creation of an Elemental bootable image (the ",(0,r.kt)("em",{parentName:"p"},"seed image"),"), does not support Raspberry Pi yet.\nWe will generate a ",(0,r.kt)("em",{parentName:"p"},"seed image")," manually in the ",(0,r.kt)("a",{parentName:"p",href:"/1.2/quickstart-cli#preparing-the-installation-seed-image"},"next section"),"."),(0,r.kt)("p",null,"Now that we have defined all the configuration files let's apply them to create the proper resources in Kubernetes:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"showLineNumbers",showLineNumbers:!0},"kubectl apply -f selector.yaml \nkubectl apply -f cluster.yaml \nkubectl apply -f registration.yaml\n"))))),(0,r.kt)(y,{value:"repofiles",label:"Using quickstart files from Elemental docs repo directly",mdxType:"TabItem"},(0,r.kt)("p",null,"You can directly apply the quickstart example resource files from the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/rancher/elemental-docs"},"Elemental docs repository"),"."),(0,r.kt)("admonition",{title:"warning",type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"The quickstart example resource files assume the default storage of the target host to be mapped to the ",(0,r.kt)("inlineCode",{parentName:"p"},"/dev/sda"),".\nIf your host storage device file is different, you have to change the registration.yaml file before applying it, changing the ",(0,r.kt)("inlineCode",{parentName:"p"},"config.elemental.install.device")," accordingly.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"showLineNumbers",showLineNumbers:!0},"kubectl apply -f https://raw.githubusercontent.com/rancher/elemental-docs/main/examples/quickstart/selector.yaml\nkubectl apply -f https://raw.githubusercontent.com/rancher/elemental-docs/main/examples/quickstart/cluster.yaml\nkubectl apply -f https://raw.githubusercontent.com/rancher/elemental-docs/main/examples/quickstart/registration.yaml\nkubectl apply -f https://raw.githubusercontent.com/rancher/elemental-docs/main/examples/quickstart/seedimage.yaml (not for aarch64 yet)\n")))),(0,r.kt)("h2",{id:"preparing-the-installation-seed-image"},"Preparing the installation (seed) image"),(0,r.kt)("p",null,"This is the last step: you need an Elemental Teal seed image that includes the initial registration config, so it can be auto registered, installed and fully deployed as part of your cluster."),(0,r.kt)("admonition",{title:"note",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The initial registration config file is generated when you create a ",(0,r.kt)("inlineCode",{parentName:"p"},"Machine Registration"),"."),(0,r.kt)("p",{parentName:"admonition"},"You can download it with:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'wget --no-check-certificate `kubectl get machineregistration -n fleet-default fire-nodes -o jsonpath="{.status.registrationURL}"` -O initial-registration.yaml\n'))),(0,r.kt)("p",null,"The contents of the registration config file are nothing more than the registration URL that the node needs to register, the proper server certificate and few options for the registration process."),(0,r.kt)("p",null,"Once generated, a seed image can be used to provision any number of machines."),(0,r.kt)(b,{mdxType:"Tabs"},(0,r.kt)(y,{value:"download",label:"Downloading the quickstart ISO",mdxType:"TabItem"},(0,r.kt)("p",null,"The seed image created by the ",(0,r.kt)("inlineCode",{parentName:"p"},"SeedImage")," resource above can be downloaded as an ISO via the following script:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"showLineNumbers",showLineNumbers:!0},'kubectl wait --for=condition=ready pod -n fleet-default fire-img\nwget --no-check-certificate `kubectl get seedimage -n fleet-default fire-img -o jsonpath="{.status.downloadURL}"` -O elemental-teal.x86_64.iso\n')),(0,r.kt)("p",null,"The first command waits for the ISO to be built and ready, the second one downloads it in the current directory with the name ",(0,r.kt)("inlineCode",{parentName:"p"},"elemental-teal-x86_64.iso"),".")),(0,r.kt)(y,{value:"manual_iso",label:"Preparing the seed image (x86_64) manually",mdxType:"TabItem"},(0,r.kt)("p",null,"If you created a ",(0,r.kt)("a",{parentName:"p",href:"customizing#create-a-custom-bootable-installation-media"},"customized ISO"),",\nyou can use the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/rancher/elemental/blob/main/.github/elemental-iso-add-registration"},(0,r.kt)("inlineCode",{parentName:"a"},"elemental-iso-add-registration")),"\nscript to add the registration config file"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"showLineNumbers",showLineNumbers:!0},"elemental-iso-add-registration initial-registration.yaml my-customized.iso\n"))),(0,r.kt)(y,{value:"manual_raw",label:"Preparing the seed image (aarch64) manually",mdxType:"TabItem"},(0,r.kt)("p",null,"Elemental's support for Raspberry Pi is primarily for demonstration purposes at this point. Therefore the installation process is modelled similar to x86-64. You boot from a seed image (an USB stick in this case) and install to a storage medium (SD-card for Raspberry Pi)."),(0,r.kt)("h4",{id:"retrieving-the-prebuilt-seed-image"},"Retrieving the prebuilt seed image"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"showLineNumbers",showLineNumbers:!0},"wget -q https://download.opensuse.org/repositories/isv:/Rancher:/Elemental:/Stable:/Teal53/images/rpi.raw\n")),(0,r.kt)("h5",{id:"verifying-the-download"},"Verifying the download"),(0,r.kt)("p",null,"In order to verify the integrity of the downloaded artifacts, you\nshould do a checksum verification:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"showLineNumbers",showLineNumbers:!0},"wget -q https://download.opensuse.org/repositories/isv:/Rancher:/Elemental:/Stable:/Teal53/images/rpi.raw.sha256\nsha256sum -c rpi.raw.sha256\n")),(0,r.kt)("p",null,"This should print ",(0,r.kt)("inlineCode",{parentName:"p"},"rpi.raw: OK")," as output."),(0,r.kt)("h4",{id:"injecting-the-registration-information"},"Injecting the registration information"),(0,r.kt)("p",null,"Adding the ",(0,r.kt)("inlineCode",{parentName:"p"},"initial-registration.yaml")," isn't scripted yet. This is still a manual process:"),(0,r.kt)("p",null,"The written USB stick will have two partitions. ",(0,r.kt)("inlineCode",{parentName:"p"},"RPI_BOOT")," contains the boot loader files and ",(0,r.kt)("inlineCode",{parentName:"p"},"COS_LIVE")," the Elemental files.\nMount the ",(0,r.kt)("inlineCode",{parentName:"p"},"COS_LIVE")," partition and write ",(0,r.kt)("inlineCode",{parentName:"p"},"initial-registration.yaml")," as ",(0,r.kt)("inlineCode",{parentName:"p"},"livecd-cloud-config.yaml")," to this partition."),(0,r.kt)("p",null,"If you've mounted the USB stick with a file manager, this command should work to copy the registration information:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"showLineNumbers",showLineNumbers:!0},"sudo cp initial-registration.yaml /run/media/$USER/COS_LIVE/livecd-cloud-config.yaml\n")),(0,r.kt)("p",null,"If you prefer using some CLI tools:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"showLineNumbers",showLineNumbers:!0},"IMAGE=rpi.raw\nDEST=$(mktemp -d)\n\nSECTORSIZE=$(sfdisk -J ${IMAGE} | jq '.partitiontable.sectorsize')\nDATAPARTITIONSTART=$(sfdisk -J ${IMAGE} | jq '.partitiontable.partitions[1].start')\nsudo mount -o rw,loop,offset=$((${SECTORSIZE}*${DATAPARTITIONSTART})) ${IMAGE} ${DEST}\nsudo cp initial-registration.yaml ${DEST}/livecd-cloud-config.yaml\nsudo umount ${DEST}\nrmdir ${DEST}\n")),(0,r.kt)("h4",{id:"writing-the-seed-image-to-a-usb-stick"},"Writing the seed image to a USB stick"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},".raw")," image needs to be written to a USB stick to boot from. This can be done with ",(0,r.kt)("inlineCode",{parentName:"p"},"dd")," on the Linux command line if you're comfortable with this command.\n",(0,r.kt)("a",{parentName:"p",href:"https://www.opensuse.org"},"openSUSE")," has nice instructions on how to write an image to a storage medium for ",(0,r.kt)("a",{parentName:"p",href:"https://en.opensuse.org/SDB:Live_USB_stick"},"Linux"),",\n",(0,r.kt)("a",{parentName:"p",href:"https://en.opensuse.org/SDB:Create_a_Live_USB_stick_using_Windows"},"Windows"),", and ",(0,r.kt)("a",{parentName:"p",href:"https://en.opensuse.org/SDB:Create_a_Live_USB_stick_using_macOS"},"OS X"),"."),(0,r.kt)("h4",{id:"booting-the-raspberry-pi"},"Booting the Raspberry Pi"),(0,r.kt)("p",null,"Now unmount the USB stick and plug it into your Raspberry Pi."),(0,r.kt)("p",null,"Plug a large (32 GB or more) and ",(0,r.kt)("strong",{parentName:"p"},"fast")," (!!) micro SD-card into the respective slot."),(0,r.kt)("p",null,"Connect the system to ethernet."),(0,r.kt)("p",null,"A powercycle will reboot the Pi. Everything else is identical to x86-64."),(0,r.kt)("admonition",{title:"warning",type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"Make sure the micro SD-card is unpartitioned. Otherwise the Pi bootloader will try to boot from it and fail.")))),(0,r.kt)("p",null,"You can now boot your nodes with this image and they will:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Register with the registrationURL given and create a per-machine ",(0,r.kt)("inlineCode",{parentName:"li"},"MachineInventory")),(0,r.kt)("li",{parentName:"ul"},"Install Elemental Teal to the given device"),(0,r.kt)("li",{parentName:"ul"},"Reboot")),(0,r.kt)("h3",{id:"selecting-the-right-machines-to-join-a-cluster"},"Selecting the right machines to join a cluster"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"MachineInventorySelectorTemplate")," selects the machines needed to provision the cluster from the ",(0,r.kt)("inlineCode",{parentName:"p"},"MachineInventory"),"s having the ",(0,r.kt)("em",{parentName:"p"},"element:fire")," label.\nWe have added the ",(0,r.kt)("em",{parentName:"p"},"element"),":",(0,r.kt)("em",{parentName:"p"},"fire")," label in the ",(0,r.kt)("inlineCode",{parentName:"p"},"MachineRegistration")," ",(0,r.kt)("inlineCode",{parentName:"p"},"machineInventoryLabels")," map, so all the ",(0,r.kt)("inlineCode",{parentName:"p"},"MachineInventory"),"s originated from it already have the label.\nOne could anyway skip the label from the ",(0,r.kt)("inlineCode",{parentName:"p"},"MachineRegistration")," and add it later:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"showLineNumbers",showLineNumbers:!0},'kubectl -n fleet-default label machineinventory $(kubectl get machineinventory -n fleet-default --no-headers -o custom-columns=":metadata.name") element=fire\n')),(0,r.kt)("p",null,"As soon as ",(0,r.kt)("inlineCode",{parentName:"p"},"MachineInventory"),"s with the ",(0,r.kt)("em",{parentName:"p"},"element"),":",(0,r.kt)("em",{parentName:"p"},"fire")," are present, the corresponding machines auto-deploy the cluster via the chosen provider (k3s/rke)."),(0,r.kt)("p",null,"After a few minutes your new cluster will be fully provisioned!!"),(0,r.kt)("h2",{id:"how-can-i-choose-the-kubernetes-version-and-deployer-for-the-cluster"},"How can I choose the kubernetes version and deployer for the cluster?"),(0,r.kt)("p",null,"In your cluster.yaml file there is a key in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Spec")," called ",(0,r.kt)("inlineCode",{parentName:"p"},"kubernetesVersion"),". That sets the version and deployer that will be used for the cluster,\nfor example Kubernetes",(0,r.kt)("inlineCode",{parentName:"p"},"v1.24.8")," for rke2 would be ",(0,r.kt)("inlineCode",{parentName:"p"},"v1.24.8+rke2r1")," and for k3s ",(0,r.kt)("inlineCode",{parentName:"p"},"v1.24.8+k3s1"),"."),(0,r.kt)("p",null,"To see all compatible versions check the ",(0,r.kt)("a",{parentName:"p",href:"https://www.suse.com/suse-rancher/support-matrix/all-supported-versions/"},"Rancher Support Matrix")," PDF for rke/rke2/k3s versions and their components."),(0,r.kt)("p",null,"You can also check our ",(0,r.kt)("a",{parentName:"p",href:"/1.2/kubernetesversions"},"Version doc")," to know how to obtain those versions."),(0,r.kt)("p",null,"Check our ",(0,r.kt)("a",{parentName:"p",href:"/1.2/cluster-reference"},"Cluster Spec")," page for more info about the ",(0,r.kt)("inlineCode",{parentName:"p"},"Cluster")," resource."),(0,r.kt)("h2",{id:"how-can-i-follow-what-is-going-on-behind-the-scenes"},"How can I follow what is going on behind the scenes?"),(0,r.kt)("p",null,"You should be able to follow along what the machine is doing via:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"During ISO boot:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"ssh into the machine (user/pass: root/ros):",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"running ",(0,r.kt)("inlineCode",{parentName:"li"},"journalctl -f -t elemental")," shows you the progress of the registration (",(0,r.kt)("em",{parentName:"li"},"elemental-register"),") and the installation of Elemental (",(0,r.kt)("em",{parentName:"li"},"elemental install"),")."))))),(0,r.kt)("li",{parentName:"ul"},"Once the system is installed:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"On the Rancher UI -> ",(0,r.kt)("inlineCode",{parentName:"li"},"Cluster Management")," allows you to see your new cluster and the ",(0,r.kt)("inlineCode",{parentName:"li"},"Provisioning Log")," in the cluster details"),(0,r.kt)("li",{parentName:"ul"},"ssh into the machine (user/pass: Whatever your configured on the registration.yaml under ",(0,r.kt)("inlineCode",{parentName:"li"},"Spec.config.cloud-config.users"),"):",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"running ",(0,r.kt)("inlineCode",{parentName:"li"},"journalctl -f -u elemental-system-agent")," shows the output of the initial elemental config and the installation of the ",(0,r.kt)("inlineCode",{parentName:"li"},"rancher-system-agent")),(0,r.kt)("li",{parentName:"ul"},"running ",(0,r.kt)("inlineCode",{parentName:"li"},"journalctl -f -u rancher-system-agent")," shows the output of the boostrap of cluster components like k3s"),(0,r.kt)("li",{parentName:"ul"},"running ",(0,r.kt)("inlineCode",{parentName:"li"},"journalctl -f -u k3s")," shows the logs of the k3s deployment")))))))}T.isMDXComponent=!0},6854:(e,t,n)=>{n.d(t,{Z:()=>a});const a="kind: Cluster\napiVersion: provisioning.cattle.io/v1\nmetadata:\n  name: volcano\n  namespace: fleet-default\nspec:\n  rkeConfig:\n    machineGlobalConfig:\n      etcd-expose-metrics: false\n      profile: null\n    machinePools:\n      - controlPlaneRole: true\n        etcdRole: true\n        machineConfigRef:\n          apiVersion: elemental.cattle.io/v1beta1\n          kind: MachineInventorySelectorTemplate\n          name: fire-machine-selector\n        name: fire-pool\n        quantity: 1\n        unhealthyNodeTimeout: 0s\n        workerRole: true\n    machineSelectorConfig:\n      - config:\n          protect-kernel-defaults: false\n    registries: {}\n  kubernetesVersion: v1.24.8+k3s1\n"},4713:(e,t,n)=>{n.d(t,{Z:()=>a});const a='apiVersion: elemental.cattle.io/v1beta1\nkind: MachineRegistration\nmetadata:\n  name: fire-nodes\n  namespace: fleet-default\nspec:\n  config:\n    cloud-config:\n      users:\n        - name: root\n          passwd: root\n    elemental:\n      install:\n        reboot: true\n        device: /dev/sda\n        debug: true\n  machineInventoryLabels:\n    element: fire\n    manufacturer: "${System Information/Manufacturer}"\n    productName: "${System Information/Product Name}"\n    serialNumber: "${System Information/Serial Number}"\n    machineUUID: "${System Information/UUID}"\n'},8260:(e,t,n)=>{n.d(t,{Z:()=>a});const a='apiVersion: elemental.cattle.io/v1beta1\nkind: MachineRegistration\nmetadata:\n  name: fire-nodes\n  namespace: fleet-default\nspec:\n  config:\n    cloud-config:\n      users:\n        - name: root\n          passwd: root\n    elemental:\n      install:\n        reboot: true\n        device: /dev/mmcblk0\n        debug: true\n        disable-boot-entry: true\n      registration:\n        emulate-tpm: true\n  machineInventoryLabels:\n    element: fire\n    manufacturer: "${System Information/Manufacturer}"\n    productName: "${System Information/Product Name}"\n    serialNumber: "${System Information/Serial Number}"\n    machineUUID: "${System Information/UUID}"\n'},5974:(e,t,n)=>{n.d(t,{Z:()=>a});const a="apiVersion: elemental.cattle.io/v1beta1\nkind: SeedImage\nmetadata:\n  name: fire-img\n  namespace: fleet-default\nspec:\n  baseImage: registry.suse.com/rancher/elemental-teal-iso/5.4:1.2.2\n  registrationRef:\n    apiVersion: elemental.cattle.io/v1beta1\n    kind: MachineRegistration\n    name: fire-nodes\n    namespace: fleet-default\n"},3367:(e,t,n)=>{n.d(t,{Z:()=>a});const a="apiVersion: elemental.cattle.io/v1beta1\nkind: MachineInventorySelectorTemplate\nmetadata:\n  name: fire-machine-selector\n  namespace: fleet-default\nspec:\n  template:\n    spec:\n      selector:\n        matchExpressions:\n          - key: element\n            operator: In\n            values: [ 'fire' ]\n"}}]);
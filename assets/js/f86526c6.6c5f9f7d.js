"use strict";(self.webpackChunkelemental_docs=self.webpackChunkelemental_docs||[]).push([[3839],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),m=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=m(a),u=r,k=d["".concat(s,".").concat(u)]||d[u]||c[u]||l;return a?n.createElement(k,i(i({ref:t},p),{},{components:a})):n.createElement(k,i({ref:t},p))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:r,i[1]=o;for(var m=2;m<l;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},4154:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var n=a(7462),r=(a(7294),a(3905));const l={sidebar_label:"Installation",title:""},i="Installation",o={unversionedId:"installation",id:"version-1.2/installation",title:"",description:"Overview",source:"@site/versioned_docs/version-1.2/installation.md",sourceDirName:".",slug:"/installation",permalink:"/installation",draft:!1,tags:[],version:"1.2",frontMatter:{sidebar_label:"Installation",title:""},sidebar:"docs",previous:{title:"Architecture",permalink:"/architecture"},next:{title:"Upgrade",permalink:"/upgrade"}},s={},m=[{value:"Overview",id:"overview",level:2},{value:"Elemental Operator Installation",id:"elemental-operator-installation",level:2},{value:"Prepare Kubernetes Resources",id:"prepare-kubernetes-resources",level:2},{value:"Prepare Installation Media",id:"prepare-installation-media",level:2},{value:"Start Installation Process",id:"start-installation-process",level:2},{value:"Deployed Elemental Teal Partition Table",id:"deployed-elemental-teal-partition-table",level:2},{value:"Elemental Teal Immutable Root",id:"elemental-teal-immutable-root",level:2}],p=(d="Vars",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var d;const c={toc:m},u="wrapper";function k(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"installation"},"Installation"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Elemental stack provides OS management using OCI containers and Kubernetes. The Elemental\nstack installation encompasses the installation of the ",(0,r.kt)(p,{name:"elemental_operator_name",mdxType:"Vars"})," into the\nmanagement cluster and the creation and use of Elemental Teal installation media to\nprovide the OS into the Cluster Nodes. See ",(0,r.kt)("a",{parentName:"p",href:"/architecture"},"Architecture")," section to read about the\ninteraction of the components."),(0,r.kt)("p",null,"The installation configuration is mostly applied and set as part of the registration process.\nThe registration process is done by the ",(0,r.kt)("inlineCode",{parentName:"p"},"elemental-register")," (the ",(0,r.kt)(p,{name:"elemental_operator_name",mdxType:"Vars"})," client part)\nwho is the responsible to register nodes in a Rancher management cluster and fetch the installation configuration."),(0,r.kt)("p",null,"Please refer to the ",(0,r.kt)("a",{parentName:"p",href:"/quickstart-cli"},"Quick Start")," guide for simple step by step deployment instructions."),(0,r.kt)("h2",{id:"elemental-operator-installation"},"Elemental Operator Installation"),(0,r.kt)("p",null,"The ",(0,r.kt)(p,{name:"elemental_operator_name",mdxType:"Vars"})," is responsible for managing the Elemental versions and\nmaintaining a machine inventory to assist with edge or bare metal installations. ",(0,r.kt)(p,{name:"elemental_operator_name",mdxType:"Vars"}),"\nrequires a cluster including the Rancher Manager and it can be installed with a helm chart."),(0,r.kt)("p",null,"See ",(0,r.kt)(p,{name:"elemental_operator_name",mdxType:"Vars"})," ",(0,r.kt)("a",{parentName:"p",href:"/elementaloperatorchart-reference"},"helm chart reference")," for install,\nuninstall, upgrade and configuration details."),(0,r.kt)("h2",{id:"prepare-kubernetes-resources"},"Prepare Kubernetes Resources"),(0,r.kt)("p",null,"Once the ",(0,r.kt)(p,{name:"elemental_operator_name",mdxType:"Vars"})," is up and running within the management cluster a couple of kubernetes\nresources are required in order to prepare an Elemental based cluster deployment."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/machineinventoryselectortemplate-reference"},"MachineInventorySelectorTemplate"),":\nThis resource identifies the criteria to match registered boxes (listed as part of the MachineInventory)\nagainst available Rancher 2.6 Clusters. As soon as there is a match the selected kubernetes cluster takes\nownership of the registered box."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/machineregistration-reference"},"MachineRegistration"),":\nThis resource defines OS deployment details for any machine attempting to register. The machine\nregistration is the entrance for Elemental nodes as it handles the authentication (based on TPM),\nthe Elemental Teal deployment and the node inclusion into to the MachineInventory so it can be added\nto a cluster when there is a match based on a MachineInventorySelectorTemplate. The MachineRegistration\nobject includes the machine registration URL that nodes use to register against it.")),(0,r.kt)("p",null,"A Rancher Cluster resource is also required to deploy Elemental, it can be manually created as exemplified in\nthe ",(0,r.kt)("a",{parentName:"p",href:"/quickstart-cli"},"Quick Start")," guide or created from the Rancher 2.6 UI."),(0,r.kt)("h2",{id:"prepare-installation-media"},"Prepare Installation Media"),(0,r.kt)("p",null,"The installation media is the media that will be used to kick start an Elemental Teal deployment. Currently\nthe supported media is a live ISO. The live ISO must include the registration configuration yaml hence it must\ncrafted once the MachineRegistration is created. The installation media is created by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"elemental-iso-add-registration"),"\nhelper script (see ",(0,r.kt)("a",{parentName:"p",href:"/quickstart-cli#preparing-the-iso"},"quick start")," guide)\nor by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"elemental build-iso")," command line utility included as part of the ",(0,r.kt)(p,{name:"elemental_toolkit_name",link:"elemental_toolkit_url/docs/creating-derivatives/build_iso",mdxType:"Vars"}),"."),(0,r.kt)("p",null,"Within MachineRegistration only a subset of OS installation parameters can be configured, all available parameters are listed\nat ",(0,r.kt)("a",{parentName:"p",href:"/machineregistration-reference"},"MachineRegistration")," reference page."),(0,r.kt)("p",null,"In order to configure the installation beyond the common options provided within the\n",(0,r.kt)("a",{parentName:"p",href:"/machineregistration-reference#configelementalinstall"},(0,r.kt)("inlineCode",{parentName:"a"},"elemental.install"))," section a ",(0,r.kt)("inlineCode",{parentName:"p"},"config.yaml"),"\nconfiguration file can be included into the ISO (see ",(0,r.kt)("a",{parentName:"p",href:"/customizing#custom-elemental-client-configuration-file"},"Custom Images"),").\nNote any configuration applied as part of ",(0,r.kt)("inlineCode",{parentName:"p"},"elemental.install")," section of the MachineRegistration will be\napplied on top of the settings included in any custom ",(0,r.kt)("inlineCode",{parentName:"p"},"config.yaml")," file."),(0,r.kt)("p",null,"Most likely the cloud-init configuration is enough to configure and set the deployed node at boot, however\nif for some reason firstboot actions or scripts are required it is possible to also include\nRancher System Agent plans into the installation media. Refer to the ",(0,r.kt)("a",{parentName:"p",href:"/elemental-plans"},"Elemental Plans")," section for details and\nsome example plans. The plans could be included into the squashed rootfs at ",(0,r.kt)("inlineCode",{parentName:"p"},"/var/lib/elemental/agent/plans"),"\nfolder and they would be seen by the system agent at firstboot."),(0,r.kt)("h2",{id:"start-installation-process"},"Start Installation Process"),(0,r.kt)("p",null,"The installation starts by booting the installation media on a node. Once the installation media has booted it will\nattempt to contact the management cluster and register to it by calling ",(0,r.kt)("inlineCode",{parentName:"p"},"elemental-register")," command.\nAs the registration yaml configuration is already included into the ISO ",(0,r.kt)("inlineCode",{parentName:"p"},"elemental-register")," knows the registration URL and\nany other required data for the registration."),(0,r.kt)("p",null,"On a succeeded registration the installation media will start the Elemental Teal installation into the host based\non the configuration already included in the media and the MachineRegistration parameters. As soon as the installation\nis done the node is ready to reboot. The deployed Elemental Teal includes a system agent plan to\nkick start a regular rancher provisioning process to install the selected kubernetes version, once booted, after\nsome minutes the node installation is finalized and the node is included into the cluster and visible through\nthe Rancher UI."),(0,r.kt)("h2",{id:"deployed-elemental-teal-partition-table"},"Deployed Elemental Teal Partition Table"),(0,r.kt)("p",null,"Once Elemental Teal is installed the OS partition table, according to default values, will look like"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Label"),(0,r.kt)("th",{parentName:"tr",align:null},"Default Size"),(0,r.kt)("th",{parentName:"tr",align:null},"Contains"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"COS_GRUB"),(0,r.kt)("td",{parentName:"tr",align:null},"64 MiB"),(0,r.kt)("td",{parentName:"tr",align:null},"UEFI Boot partition")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"COS_STATE"),(0,r.kt)("td",{parentName:"tr",align:null},"15 GiB"),(0,r.kt)("td",{parentName:"tr",align:null},"A/B bootable file system images constructed from OCI images")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"COS_OEM"),(0,r.kt)("td",{parentName:"tr",align:null},"64 MiB"),(0,r.kt)("td",{parentName:"tr",align:null},"OEM cloud-config files and other data")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"COS_RECOVERY"),(0,r.kt)("td",{parentName:"tr",align:null},"8 GiB"),(0,r.kt)("td",{parentName:"tr",align:null},"Recovery file system image if COS_STATE is destroyed")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"COS_PERSISTENT"),(0,r.kt)("td",{parentName:"tr",align:null},"Remaining space"),(0,r.kt)("td",{parentName:"tr",align:null},"All contents of the persistent folders")))),(0,r.kt)("p",null,"Note this is the basic structure of any OS built by the ",(0,r.kt)(p,{name:"elemental_toolkit_name",link:"elemental_toolkit_url",mdxType:"Vars"})),(0,r.kt)("h2",{id:"elemental-teal-immutable-root"},"Elemental Teal Immutable Root"),(0,r.kt)("p",null,"One of the characteristics of Elemental OSes is the setup of an immutable root filesystem where some ephemeral or\npersistent locations are applied on top of it. Elemental Teal default folders structure is listed in the\nmatrix below."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Path"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Read-Only"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Ephemeral"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Persistent"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"/"),(0,r.kt)("td",{parentName:"tr",align:"center"},"x"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"/etc"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"x"),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"/etc/cni"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"x")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"/etc/iscsi"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"x")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"/etc/rancher"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"x")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"/etc/ssh"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"x")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"/etc/systemd"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"x")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"/srv"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"x"),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"/home"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"x")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"/opt"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"x")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"/root"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"x")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"/var"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"x"),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"/usr/libexec"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"x")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"/var/lib/cni"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"x")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"/var/lib/kubelet"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"x")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"/var/lib/longhorn"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"x")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"/var/lib/rancher"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"x")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"/var/lib/elemetal"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"x")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"/var/lib/NetworkManager"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"x")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"/var/lib/calico"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"x")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"/var/log"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"x")))))}k.isMDXComponent=!0}}]);
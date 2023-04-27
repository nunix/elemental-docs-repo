"use strict";(self.webpackChunkelemental_docs=self.webpackChunkelemental_docs||[]).push([[7012],{3905:(e,a,n)=>{n.d(a,{Zo:()=>p,kt:()=>g});var t=n(7294);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function l(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?l(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function i(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=t.createContext({}),d=function(e){var a=t.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):o(o({},a),e)),n},p=function(e){var a=d(e.components);return t.createElement(s.Provider,{value:a},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},c=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=d(n),c=r,g=m["".concat(s,".").concat(c)]||m[c]||u[c]||l;return n?t.createElement(g,o(o({ref:a},p),{},{components:n})):t.createElement(g,o({ref:a},p))}));function g(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i[m]="string"==typeof e?e:r,o[1]=i;for(var d=2;d<l;d++)o[d]=n[d];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6776:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>g,contentTitle:()=>u,default:()=>O,frontMatter:()=>m,metadata:()=>c,toc:()=>h});var t=n(7462),r=(n(7294),n(3905)),l=n(4298),o=n(1230),i=n(5130),s=n(9992),d=n(8139),p=n(460);const m={sidebar_label:"Upgrade",title:""},u="Upgrade",c={unversionedId:"upgrade",id:"upgrade",title:"",description:"All components in Elemental are managed using Kubernetes. Below is how",source:"@site/docs/upgrade.md",sourceDirName:".",slug:"/upgrade",permalink:"/next/upgrade",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Upgrade",title:""},sidebar:"docs",previous:{title:"Installation",permalink:"/next/installation"},next:{title:"Customize Elemental Install",permalink:"/next/customizing"}},g={},h=[{value:"Elemental Teal node upgrade",id:"elemental-teal-node-upgrade",level:2},{value:"Upgrade via command line interface",id:"upgrade-via-command-line-interface",level:2},{value:"Selecting source for upgrade",id:"selecting-source-for-upgrade",level:3},{value:"Managing available versions",id:"managing-available-versions",level:3},{value:"Upgrade via user interface",id:"upgrade-via-user-interface",level:2}],y=e=>function(a){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",a)},k=y("Vars"),b=y("Tabs"),f=y("TabItem"),v=y("CodeBlock"),w={toc:h},T="wrapper";function O(e){let{components:a,...m}=e;return(0,r.kt)(T,(0,t.Z)({},w,m,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"upgrade"},"Upgrade"),(0,r.kt)("p",null,"All components in Elemental are managed using Kubernetes. Below is how\nto use Kubernetes approaches to upgrade the components."),(0,r.kt)("h2",{id:"elemental-teal-node-upgrade"},"Elemental Teal node upgrade"),(0,r.kt)("p",null,"Elemental Teal is upgraded with the ",(0,r.kt)(k,{name:"elemental_operator_name",mdxType:"Vars"}),". Refer to the\n",(0,r.kt)("a",{parentName:"p",href:"/next/elementaloperatorchart-reference"},(0,r.kt)(k,{name:"elemental_operator_name",mdxType:"Vars"}))," documentation for complete information."),(0,r.kt)("p",null,"Upgrade can be achieve either with CLI or UI:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#upgrade-via-command-line-interface"},"Command Line Interface")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#upgrade-via-user-interface"},"User Interface"))),(0,r.kt)("h2",{id:"upgrade-via-command-line-interface"},"Upgrade via command line interface"),(0,r.kt)("p",null,"There are two ways of selecting nodes for upgrading. Via a cluster target, which will match ALL nodes in a cluster that matches our\nselector or via node selector, which will match nodes based on the node labels. Node selector allows us to be more targeted with the upgrade\nwhile cluster selector just selects all the nodes in a matched cluster."),(0,r.kt)(b,{mdxType:"Tabs"},(0,r.kt)(f,{value:"clusterTarget",label:"With 'clusterTarget'",default:!0,mdxType:"TabItem"},"You can target nodes for an upgrade via a `clusterTarget` by setting it to the cluster name that you want to upgrade. All nodes in a cluster that matches that name will match and be upgraded.",(0,r.kt)(v,{language:"yaml",title:"upgrade-cluster-target.yaml",showLineNumbers:!0,mdxType:"CodeBlock"},l.Z)),(0,r.kt)(f,{value:"nodeSelector",label:"With nodeSelector",mdxType:"TabItem"},"You can target nodes for an upgrade via a `nodeSelector` by setting it to the label and value that you want to match. Any nodes containing that key with the value will match and be upgraded.",(0,r.kt)(v,{language:"yaml",title:"upgrade-node-selector.yaml",showLineNumbers:!0,mdxType:"CodeBlock"},o.Z))),(0,r.kt)("h3",{id:"selecting-source-for-upgrade"},"Selecting source for upgrade"),(0,r.kt)(b,{mdxType:"Tabs"},(0,r.kt)(f,{value:"osImage",label:"Via 'osImage'",mdxType:"TabItem"},(0,r.kt)("p",null,"Just specify an OCI image on the ",(0,r.kt)("inlineCode",{parentName:"p"},"osImage")," field"),(0,r.kt)(v,{language:"yaml",title:"upgrade-cluster-target.yaml",showLineNumbers:!0,mdxType:"CodeBlock"},l.Z)),(0,r.kt)(f,{value:"managedOSVersion",label:"Via 'ManagedOSVersion'",mdxType:"TabItem"},(0,r.kt)("p",null,"In this case we use the auto populated ",(0,r.kt)("inlineCode",{parentName:"p"},"ManagedOSVersion")," resources to set the wanted ",(0,r.kt)("inlineCode",{parentName:"p"},"managedOSVersionName")," field.\nSee section ",(0,r.kt)("a",{parentName:"p",href:"#managing-available-versions"},"Managing available versions")," to understand how the ",(0,r.kt)("inlineCode",{parentName:"p"},"ManagedOSVersion")," are managed."),(0,r.kt)(v,{language:"yaml",title:"upgrade-managedos-version.yaml",showLineNumbers:!0,mdxType:"CodeBlock"},i.Z))),(0,r.kt)("admonition",{title:"Warning",type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"If both ",(0,r.kt)("inlineCode",{parentName:"p"},"osImage")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"ManagedOSVersion")," are defined in the same ",(0,r.kt)("inlineCode",{parentName:"p"},"ManagedOSImage")," be aware that ",(0,r.kt)("inlineCode",{parentName:"p"},"osImage")," takes precedence.")),(0,r.kt)("h3",{id:"managing-available-versions"},"Managing available versions"),(0,r.kt)("p",null,"An ",(0,r.kt)("inlineCode",{parentName:"p"},"ManagedOSVersionChannel")," resource can be created in a Kubernetes cluster where the Elemental operator is installed to synchronize available versions for upgrades."),(0,r.kt)("p",null,"It has a syncer in order to generate ",(0,r.kt)("inlineCode",{parentName:"p"},"ManagedOSVersion")," automatically. Currently, we provide a json syncer and a custom one."),(0,r.kt)(b,{mdxType:"Tabs"},(0,r.kt)(f,{value:"jsonSyncer",label:"Json syncer",mdxType:"TabItem"},(0,r.kt)("p",null,"This syncer will fetch a json from url and parse it into valid ",(0,r.kt)("inlineCode",{parentName:"p"},"ManagedOSVersion")," resources."),(0,r.kt)(v,{language:"yaml",title:"managed-os-version-json",showLineNumbers:!0,mdxType:"CodeBlock"},s.Z)),(0,r.kt)(f,{value:"customSyncer",label:"Custom syncer",mdxType:"TabItem"},(0,r.kt)("p",null,"A custom syncer allows more flexibility on how to gather ",(0,r.kt)("inlineCode",{parentName:"p"},"ManagedOSVersion")," by allowing custom commands with custom images."),(0,r.kt)("p",null,"This type of syncer allows to run a given command with arguments and env vars in a custom image and output a json file to ",(0,r.kt)("inlineCode",{parentName:"p"},"/data/output"),".\nThe generated data is then automounted by the syncer and then parsed so it can gather create the proper versions."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The only requirement to make your own custom syncer is to make it output a json file to ",(0,r.kt)("inlineCode",{parentName:"p"},"/data/output")," and keep the correct json structure.")),(0,r.kt)("p",null,"Elemental project provides an Elemental Teal channel to list all ",(0,r.kt)("inlineCode",{parentName:"p"},"ManagedOSVersions")," released as a custom syncer.\nSee the Elemental Teal channel resource definition below:"),(0,r.kt)(v,{language:"yaml",title:"managed-os-version-channel-json.yaml",showLineNumbers:!0,mdxType:"CodeBlock"},d.Z))),(0,r.kt)("p",null,"In both cases the file that the operator expects to parse is a json file with the versions on it as follows"),(0,r.kt)(v,{language:"json",title:"versions.json",showLineNumbers:!0,mdxType:"CodeBlock"},p.Z),(0,r.kt)("h2",{id:"upgrade-via-user-interface"},"Upgrade via user interface"),(0,r.kt)("p",null,"To upgrade via the UI, you have to go in the Elemental Advanced menu, then click on ",(0,r.kt)("inlineCode",{parentName:"p"},"Update Groups"),"."),(0,r.kt)("p",null,"Choose a name, select clusters to target and choose between the two upgrade ways:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Elemental Upgrade Menu",src:n(4676).Z,width:"901",height:"745"})),(0,r.kt)(b,{mdxType:"Tabs"},(0,r.kt)(f,{value:"managedOSVersion",label:"Via Managed OS Version",mdxType:"TabItem"},(0,r.kt)("p",null,"In this case, a ",(0,r.kt)("inlineCode",{parentName:"p"},"OS Version Channels")," is used to auto populated ",(0,r.kt)("inlineCode",{parentName:"p"},"OS Versions")," resources."),(0,r.kt)("p",null,"The channel bellow is provide by us but you can bring your own channel as well."),(0,r.kt)("p",null,"See section ",(0,r.kt)("a",{parentName:"p",href:"#managing-available-versions"},"Managing available versions")," to understand how the ",(0,r.kt)("inlineCode",{parentName:"p"},"ManagedOSVersion")," are managed."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Create OS Version Channel",src:n(4318).Z,width:"1162",height:"534"})),(0,r.kt)("p",null,"After a short syncing time, you will see your ",(0,r.kt)("inlineCode",{parentName:"p"},"OS Versions")," appears in the ",(0,r.kt)("inlineCode",{parentName:"p"},"OS Versions")," menu."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Elemental OS Version menu",src:n(909).Z,width:"993",height:"438"})),(0,r.kt)("p",null,"Finally, you can select the ",(0,r.kt)("inlineCode",{parentName:"p"},"OS Versions")," when you create your ",(0,r.kt)("inlineCode",{parentName:"p"},"Upgrade Group")," according to the following screenshot:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Select OS Version in Upgrade Group",src:n(4914).Z,width:"788",height:"802"}))),(0,r.kt)(f,{value:"imageFromRegistry",label:"Via Image from registry",mdxType:"TabItem"},(0,r.kt)("p",null,"Just specify an OCI image on the ",(0,r.kt)("inlineCode",{parentName:"p"},"Image path")," field to upgrade to:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Upgrade via Image Registry",src:n(2432).Z,width:"901",height:"745"})))),(0,r.kt)("p",null,"Click on the ",(0,r.kt)("inlineCode",{parentName:"p"},"Create")," button to start the upgrade process, if you have multiple nodes, the upgrade will be done sequentially node by node."))}O.isMDXComponent=!0},8139:(e,a,n)=>{n.d(a,{Z:()=>t});const t="apiVersion: elemental.cattle.io/v1beta1\nkind: ManagedOSVersionChannel\nmetadata:\n  name: elemental-teal-channel\n  namespace: fleet-default\nspec:\n  options:\n    image: registry.opensuse.org/isv/rancher/elemental/stable/teal53/15.4/rancher/elemental-teal-channel/5.3:latest\n  type: custom\n"},9992:(e,a,n)=>{n.d(a,{Z:()=>t});const t='apiVersion: elemental.cattle.io/v1beta1\nkind: ManagedOSVersionChannel\nmetadata:\n  name: elemental-versions\n  namespace: fleet-default\nspec:\n  options:\n    URI: "https://raw.githubusercontent.com/rancher/elemental-docs/main/examples/upgrade/versions.json"\n    Timeout: "1m"\n  type: json'},4298:(e,a,n)=>{n.d(a,{Z:()=>t});const t='apiVersion: elemental.cattle.io/v1beta1\nkind: ManagedOSImage\nmetadata:\n  name: my-upgrade\n  namespace: fleet-default\nspec:\n  # Set to the new Elemental version you would like to upgrade to or track the latest tag\n  osImage: "registry.opensuse.org/isv/rancher/elemental/stable/teal53/15.4/rancher/elemental-teal/5.3:latest"\n  clusterTargets:\n    - clusterName: my-cluster\n'},5130:(e,a,n)=>{n.d(a,{Z:()=>t});const t="apiVersion: elemental.cattle.io/v1beta1\nkind: ManagedOSImage\nmetadata:\n  name:  my-upgrade\n  namespace: fleet-default\nspec:\n  # Set to the new ManagedOSVersion you would like to upgrade to\n  managedOSVersionName: v0.1.0-alpha22-amd64\n  clusterTargets:\n    - clusterName: my-cluster"},1230:(e,a,n)=>{n.d(a,{Z:()=>t});const t='apiVersion: elemental.cattle.io/v1beta1\nkind: ManagedOSImage\nmetadata:\n  name: my-upgrade\n  namespace: fleet-default\nspec:\n  # Set to the new Elemental version you would like to upgrade to\n  osImage: "registry.opensuse.org/isv/rancher/elemental/stable/teal53/15.4/rancher/elemental-teal/5.3:latest"\n  clusterTargets:\n    - clusterName: my-cluster\n  nodeSelector:\n    matchLabels:\n      kubernetes.io/hostname: my-machine\n'},460:(e,a,n)=>{n.d(a,{Z:()=>t});const t='[\n  {\n    "metadata": {\n      "name": "v0.1.0"\n    },\n    "spec": {\n      "version": "v0.1.0",\n      "type": "container",\n      "metadata": {\n        "upgradeImage": "foo/bar:v0.1.0"\n      }\n    }\n  },\n  {\n    "metadata": {\n      "name": "v0.2.0"\n    },\n    "spec": {\n      "version": "v0.2.0",\n      "type": "container",\n      "metadata": {\n        "upgradeImage": "foo/bar:v0.2.0"\n      }\n    }\n  }\n]'},2432:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/upgrade-ui-image-registry-dc5f48d0d96df566f8035d4fdd7f2e1e.png"},4676:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/upgrade-ui-menu-93b767af21b0dbe3e2b60d07897488ca.png"},909:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/upgrade-ui-os-version-0dbbe5e7b5f9a4c0ba6801227541b900.png"},4914:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/upgrade-ui-upgrade-group-channel-6f58b8b4ab7ad99803bd22cdaf983a16.png"},4318:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/upgrade-ui-version-channel-1c99191874b1827b23f1bad6336aade3.png"}}]);
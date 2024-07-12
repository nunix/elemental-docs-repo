"use strict";(self.webpackChunkelemental_docs=self.webpackChunkelemental_docs||[]).push([[6768],{33564:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>o});var i=t(17624),s=t(4552);const a={sidebar_label:"Elemental the visual way",title:""},l="Elemental the visual way",r={id:"quickstart-ui",title:"",description:"The following instructions need Rancher 2.8.x at least.",source:"@site/versioned_docs/version-1.5/quickstart-ui.md",sourceDirName:".",slug:"/quickstart-ui",permalink:"/quickstart-ui",draft:!1,unlisted:!1,tags:[],version:"1.5",frontMatter:{sidebar_label:"Elemental the visual way",title:""},sidebar:"docs",previous:{title:"Overview",permalink:"/"},next:{title:"Elemental the command line way",permalink:"/quickstart-cli"}},c={},o=[{value:"Enable the Rancher Manager Extensions Support",id:"enable-the-rancher-manager-extensions-support",level:2},{value:"Install the elemental plugin",id:"install-the-elemental-plugin",level:2},{value:"Install the elemental operator",id:"install-the-elemental-operator",level:2},{value:"Add a Machine Registration Endpoint",id:"add-a-machine-registration-endpoint",level:2},{value:"Preparing the installation (seed) image",id:"preparing-the-installation-seed-image",level:2},{value:"Machine Inventory",id:"machine-inventory",level:2},{value:"Create your first Elemental Cluster",id:"create-your-first-elemental-cluster",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",ul:"ul",...(0,s.M)(),...e.components},{Head:a}=n;return a||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a,{children:(0,i.jsx)("link",{rel:"canonical",href:"https://elemental.docs.rancher.com/quickstart-ui"})}),"\n","\n","\n",(0,i.jsx)(n.h1,{id:"elemental-the-visual-way",children:"Elemental the visual way"}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"The following instructions need Rancher 2.8.x at least."})}),"\n",(0,i.jsx)(n.p,{children:"This quickstart will show you how to deploy the Elemental plugin and operator into an existing Rancher Manager instance."}),"\n",(0,i.jsx)(n.p,{children:"Once installed, you'll be able to provision a new Elemental cluster based on RKE2 or K3s."}),"\n",(0,i.jsxs)(n.p,{children:["However, if you want to install staging or dev operator, you can only do it in ",(0,i.jsx)(n.a,{href:"quickstart-cli#non-stable-installations",children:"CLI mode"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"enable-the-rancher-manager-extensions-support",children:"Enable the Rancher Manager Extensions Support"}),"\n",(0,i.jsx)(n.p,{children:"In order to enable the Rancher Manager Extensions Support, you'll need to follow the steps below:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Open a web browser, connect and login to your Rancher Manager instance"}),"\n",(0,i.jsxs)(n.li,{children:["Click on the top left menu and click on ",(0,i.jsx)(n.code,{children:"Extensions"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Rancher Manager menu",src:t(17204).c+"",width:"2206",height:"1298"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Click on ",(0,i.jsx)(n.code,{children:"Enable"})," button to install the ",(0,i.jsx)(n.code,{children:"Extension Operator"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Enable Rancher Manager Extensions Operator",src:t(88736).c+"",width:"1107",height:"420"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["A popup will appear, click on the ",(0,i.jsx)(n.code,{children:"OK"})," button to continue and install the Rancher Manager Extensions repository"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Add Rancher Manager Extensions repository",src:t(81388).c+"",width:"1790",height:"1254"})}),"\n",(0,i.jsx)(n.h2,{id:"install-the-elemental-plugin",children:"Install the elemental plugin"}),"\n",(0,i.jsxs)(n.p,{children:["After the Rancher Manager Extensions Support is enabled, you can install the ",(0,i.jsx)(n.code,{children:"elemental"})," plugin as follow:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Under the ",(0,i.jsx)(n.code,{children:"Available"})," tab you will see ",(0,i.jsx)(n.code,{children:"elemental"})," plugin available"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Rancher Manager Available plugins",src:t(84432).c+"",width:"1854",height:"624"})}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["If the ",(0,i.jsx)(n.code,{children:"Available"})," tab shows no entries, refresh the page. The ",(0,i.jsx)(n.code,{children:"elemental"})," plugin will then appear."]})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Click on the ",(0,i.jsx)(n.code,{children:"Install"})," button, a popup will appear and click on ",(0,i.jsx)(n.code,{children:"Install"})," again to continue."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Elemental plugin install",src:t(81448).c+"",width:"2040",height:"1364"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["On the ",(0,i.jsx)(n.code,{children:"Installed"})," tab, the ",(0,i.jsx)(n.code,{children:"elemental"})," plugin is now listed."]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["If the ",(0,i.jsx)(n.code,{children:"elemental"})," plugin is listed and the status stays at ",(0,i.jsx)(n.code,{children:"Installing..."}),", refresh the page. The ",(0,i.jsx)(n.code,{children:"elemental"})," plugin will display correctly."]})}),"\n",(0,i.jsxs)(n.p,{children:["Once the ",(0,i.jsx)(n.code,{children:"elemental"})," plugin installed, you can see the ",(0,i.jsx)(n.code,{children:"OS Management"})," option in the Rancher Manager menu, refresh the page if you do not see it."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Rancher Manager OS Management menu",src:t(89804).c+"",width:"2790",height:"1228"})}),"\n",(0,i.jsx)(n.h2,{id:"install-the-elemental-operator",children:"Install the elemental operator"}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"The following guide will show you how to install the operator through the Elemental UI. But you can also install it directly from the Marketplace."})}),"\n",(0,i.jsx)(n.p,{children:"Click on the OS Management button in the navigation menu."}),"\n",(0,i.jsxs)(n.p,{children:["If the operator is not already installed, the elemental ui will let you deploy it by clicking on the ",(0,i.jsx)(n.code,{children:"Install Elemental Operator"})," button:\n",(0,i.jsx)(n.img,{alt:"Button to deploy elemental operator",src:t(99652).c+"",width:"2194",height:"932"})]}),"\n",(0,i.jsx)(n.p,{children:"It will redirect you to the Rancher Marketplace to install the operator."}),"\n",(0,i.jsxs)(n.p,{children:["Click on the ",(0,i.jsx)(n.code,{children:"Next"})," button:\n",(0,i.jsx)(n.img,{alt:"Install Elemental operator screenshot 1",src:t(32080).c+"",width:"2326",height:"986"})]}),"\n",(0,i.jsxs)(n.p,{children:["In this screen, you can customize or use the default values, click on ",(0,i.jsx)(n.code,{children:"Install"})," to continue:\n",(0,i.jsx)(n.img,{alt:"Install Elemental operator screenshot 2",src:t(23084).c+"",width:"2326",height:"1214"})]}),"\n",(0,i.jsxs)(n.p,{children:["You should see ",(0,i.jsx)(n.code,{children:"elemental-operator-crds"}),"and ",(0,i.jsx)(n.code,{children:"elemental-operator"})," deployed in the ",(0,i.jsx)(n.code,{children:"cattle-elemental-system"})," namespace:\n",(0,i.jsx)(n.img,{alt:"Install Elemental operator screenshot 3",src:t(73384).c+"",width:"2326",height:"1214"})]}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsx)(n.p,{children:"If you do not see them, make sure to select the correct namespace at the top of the page."})}),"\n",(0,i.jsx)(n.h2,{id:"add-a-machine-registration-endpoint",children:"Add a Machine Registration Endpoint"}),"\n",(0,i.jsxs)(n.p,{children:["In the OS Management dashboard, click the ",(0,i.jsx)(n.code,{children:"Create Registration Endpoint"})," button."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"OS Management registration endpoints",src:t(47496).c+"",width:"1516",height:"608"})}),"\n",(0,i.jsx)(n.p,{children:"Now here either you can enter each detail in its respective places or you can edit this as YAML and create the endpoint in one go. Here we'll edit every fields."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Create a Registration Endpoint with UI",src:t(20348).c+"",width:"2096",height:"2964"})}),"\n",(0,i.jsxs)(n.admonition,{title:"main options",type:"info",children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"name: elemental-cluster1"}),": change this as per your need"]}),(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"device: /dev/sda"}),': make sure your target device is "sda". Otherwise find out how the disk device is named and change it here. For example, in Raspberry Pi it could be "mmblk"']}),(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"emulate-tpm: true"}),": use this only if your target device doesn't have a TPM device and you have a way of emulating TPM like in VMware or KVM"]}),(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"emulated-tpm-seed: 1"}),": increase this by 1 for every new machine. If this value is not set, each machine will receive the same TPM hash and it won't show up under the machine inventory."]})]}),"\n",(0,i.jsx)(n.admonition,{title:"attention",type:"danger",children:(0,i.jsxs)(n.p,{children:["Emulated TPM is only for non-production usage like for testing as it beats the purpose of security. So in production usage use the code above without the ",(0,i.jsx)(n.code,{children:"emulate-tpm"})," and ",(0,i.jsx)(n.code,{children:"emulate-tpm-seed"})]})}),"\n",(0,i.jsx)(n.p,{children:"Once you create the machine registration end point it should show up as active."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Machine registered in Registration Endpoints",src:t(70156).c+"",width:"1428",height:"738"})}),"\n",(0,i.jsx)(n.h2,{id:"preparing-the-installation-seed-image",children:"Preparing the installation (seed) image"}),"\n",(0,i.jsx)(n.p,{children:"Now this is the last step, you need to prepare a seed image that includes the initial registration config, so\nit can be auto registered, installed and fully deployed as part of your cluster. The contents of the file are nothing\nmore than the registration URL that the node needs to register and the proper server certificate, so it can connect securely."}),"\n",(0,i.jsx)(n.p,{children:"This seed image can then be used to provision an infinite number of machines."}),"\n",(0,i.jsxs)(n.p,{children:["The seed image is created as a Kubernetes resource above and can be built using the ",(0,i.jsx)(n.code,{children:"Build ISO"})," button:"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Build ISO in Registration Endpoints",src:t(36276).c+"",width:"2316",height:"858"})}),"\n",(0,i.jsxs)(n.p,{children:["Once the build is done, ISO can be downloaded using the ",(0,i.jsx)(n.code,{children:"Download ISO"})," button:"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Download ISO in Registration Endpoints",src:t(5036).c+"",width:"2316",height:"858"})}),"\n",(0,i.jsx)(n.p,{children:"You can now boot your nodes with this image and they will:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Register with the registrationURL given and create a per-machine ",(0,i.jsx)(n.code,{children:"MachineInventory"})]}),"\n",(0,i.jsx)(n.li,{children:"Install SLE Micro for Rancher to the given device"}),"\n",(0,i.jsx)(n.li,{children:"Reboot"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"machine-inventory",children:"Machine Inventory"}),"\n",(0,i.jsxs)(n.p,{children:["When nodes are booting up for the first time, they connect to Rancher Manager and a ",(0,i.jsx)(n.a,{href:"/machineinventory-reference",children:(0,i.jsx)(n.code,{children:"Machine Inventory"})})," is created for each node."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Machine Inventory menu",src:t(8732).c+"",width:"2858",height:"924"})}),"\n",(0,i.jsxs)(n.p,{children:["Custom columns are based on ",(0,i.jsx)(n.code,{children:"Machine Inventory Labels"})," which you can add when you create your ",(0,i.jsx)(n.code,{children:"Machine Registration Endpoint"}),":"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Machine Registration Endpoint Hardware Labels",src:t(7068).c+"",width:"2858",height:"2848"})}),"\n",(0,i.jsxs)(n.p,{children:["On the following screenshot, ",(0,i.jsx)(n.a,{href:"hardwarelabels#hardware-labels",children:(0,i.jsx)(n.code,{children:"Hardware Labels"})})," are used as custom columns:"]}),"\n",(0,i.jsx)(n.p,{children:"You can also add custom columns by clicking on the three dots menu."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Machine Inventory custom columns",src:t(46172).c+"",width:"2812",height:"1080"})}),"\n",(0,i.jsxs)(n.p,{children:["Finally, you can also filter your ",(0,i.jsx)(n.code,{children:"Machine Inventory"})," using those labels."]}),"\n",(0,i.jsxs)(n.p,{children:["For instance if you only want to see your AMD machines, you can filter on ",(0,i.jsx)(n.code,{children:"CPUModel"})," like below:"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Machine Inventory filtering",src:t(48472).c+"",width:"2812",height:"952"})}),"\n",(0,i.jsx)(n.h2,{id:"create-your-first-elemental-cluster",children:"Create your first Elemental Cluster"}),"\n",(0,i.jsxs)(n.p,{children:["Now let's use those ",(0,i.jsx)(n.code,{children:"Machine Inventory"})," to create a cluster by clicking on ",(0,i.jsx)(n.code,{children:"Create Elemental Cluster"})," :"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Create Elemental Cluster button",src:t(88312).c+"",width:"3402",height:"1374"})}),"\n",(0,i.jsx)(n.p,{children:"For your Elemental cluster, you can either choose K3s or RKE2 for Kubernetes."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Elemental Cluster Creation Screen",src:t(35080).c+"",width:"3270",height:"2698"})}),"\n",(0,i.jsxs)(n.p,{children:["Most of the options are coming from Rancher, that's why we will not detail all the possibilities.\nFeel free to check the ",(0,i.jsx)(n.a,{href:"https://ranchermanager.docs.rancher.com/pages-for-subheaders/rancher-server-configuration",children:"Rancher Manager documentation"})," if you want to know more."]}),"\n",(0,i.jsxs)(n.p,{children:["However, it is important to highlight the ",(0,i.jsx)(n.code,{children:"Inventory of Machines Selector Template"})," section."]}),"\n",(0,i.jsxs)(n.p,{children:["It lets you choose which ",(0,i.jsx)(n.code,{children:"Machine Inventory"})," you want to use to create your Elemental cluster using the previously defined ",(0,i.jsx)(n.code,{children:"Machine Inventory Labels"})," :"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Use Machine Inventory Selector Template",src:t(43608).c+"",width:"1359",height:"547"})}),"\n",(0,i.jsxs)(n.p,{children:["As our three Machine Inventories contain the label ",(0,i.jsx)(n.code,{children:"CPUVendor"})," with the key ",(0,i.jsx)(n.code,{children:"AuthenticAMD"}),", the three machines will be used to create the Elemental cluster."]})]})}function h(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},88312:(e,n,t)=>{t.d(n,{c:()=>i});const i=t.p+"assets/images/quickstart-ui-create-cluster-button-9dce4aea82dba2f2cddfa61e55990abf.png"},43608:(e,n,t)=>{t.d(n,{c:()=>i});const i=t.p+"assets/images/quickstart-ui-create-cluster-machine-selector-template-a114d9eb08cb6423423a79c94900afd1.png"},35080:(e,n,t)=>{t.d(n,{c:()=>i});const i=t.p+"assets/images/quickstart-ui-create-cluster-standard-screen--b4d5776817a8e33b829a331c54a2bc0f.png"},81448:(e,n,t)=>{t.d(n,{c:()=>i});const i=t.p+"assets/images/quickstart-ui-elemental-plugin-install-ae50450195b775629fc115ebc15ff71c.png"},89804:(e,n,t)=>{t.d(n,{c:()=>i});const i=t.p+"assets/images/quickstart-ui-elemental-plugin-menu-de00267de23c6c23f57c86c433c1a4b1.png"},88736:(e,n,t)=>{t.d(n,{c:()=>i});const i=t.p+"assets/images/quickstart-ui-extension-enable-86662009426b5220cab5c9f72a71ea4b.png"},99652:(e,n,t)=>{t.d(n,{c:()=>i});const i=t.p+"assets/images/quickstart-ui-extension-operator-button-98e94400280a95b4a9c3c95a5265b46b.png"},32080:(e,n,t)=>{t.d(n,{c:()=>i});const i=t.p+"assets/images/quickstart-ui-extension-operator-install-1-7f304ff533f2c6a56bf7ee237be25785.png"},23084:(e,n,t)=>{t.d(n,{c:()=>i});const i=t.p+"assets/images/quickstart-ui-extension-operator-install-2-8534d83dc6a3c2012c38ea37dcd62465.png"},73384:(e,n,t)=>{t.d(n,{c:()=>i});const i=t.p+"assets/images/quickstart-ui-extension-operator-install-3-acf0971bd9406407a7e311d1cfa27bc4.png"},81388:(e,n,t)=>{t.d(n,{c:()=>i});const i=t.p+"assets/images/quickstart-ui-extension-repository-49117208197294088a4ae90f47a6b164.png"},84432:(e,n,t)=>{t.d(n,{c:()=>i});const i=t.p+"assets/images/quickstart-ui-extensions-available-8ea4add6f2ee3b91cb8dffa69448fba6.png"},46172:(e,n,t)=>{t.d(n,{c:()=>i});const i=t.p+"assets/images/quickstart-ui-machine-inventory-custom-columns-1ee92dd817182439e979126b947499cf.png"},48472:(e,n,t)=>{t.d(n,{c:()=>i});const i=t.p+"assets/images/quickstart-ui-machine-inventory-filtering-b5693898b66e6771aa10d38bf75dc24c.png"},8732:(e,n,t)=>{t.d(n,{c:()=>i});const i=t.p+"assets/images/quickstart-ui-machine-inventory-menu-42c7f3af783616ff18d2d4c76636b60f.png"},17204:(e,n,t)=>{t.d(n,{c:()=>i});const i=t.p+"assets/images/quickstart-ui-menu-00ae3e2cb0dca507e5fb9b0753087ee2.png"},36276:(e,n,t)=>{t.d(n,{c:()=>i});const i=t.p+"assets/images/quickstart-ui-registration-endpoint-build-ISO-f8f10423606ddf4a1ca1e677be69316c.png"},70156:(e,n,t)=>{t.d(n,{c:()=>i});const i=t.p+"assets/images/quickstart-ui-registration-endpoint-complete-2e9c6ad1ad36b63e77b99236e12c440e.png"},20348:(e,n,t)=>{t.d(n,{c:()=>i});const i=t.p+"assets/images/quickstart-ui-registration-endpoint-create-details-0ea1a4baf150d758fcb059b3a3ef6d31.png"},47496:(e,n,t)=>{t.d(n,{c:()=>i});const i=t.p+"assets/images/quickstart-ui-registration-endpoint-create-5c6bba22feee56e9750693135f84fb86.png"},5036:(e,n,t)=>{t.d(n,{c:()=>i});const i=t.p+"assets/images/quickstart-ui-registration-endpoint-download-ISO-804d30921eedaf172794e756e6c47d9f.png"},7068:(e,n,t)=>{t.d(n,{c:()=>i});const i=t.p+"assets/images/quickstart-ui-registration-endpoint-hardware-labels-54233251b432f017a2e147f8d0b1dead.png"},4552:(e,n,t)=>{t.d(n,{I:()=>r,M:()=>l});var i=t(11504);const s={},a=i.createContext(s);function l(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);
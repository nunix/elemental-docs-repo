"use strict";(self.webpackChunkelemental_docs=self.webpackChunkelemental_docs||[]).push([[3148],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),m=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=m(e.components);return n.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=m(a),k=r,u=c["".concat(d,".").concat(k)]||c[k]||s[k]||l;return a?n.createElement(u,i(i({ref:t},p),{},{components:a})):n.createElement(u,i({ref:t},p))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var m=2;m<l;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},6650:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var n=a(7462),r=(a(7294),a(3905));const l={sidebar_label:"Hardware Labels",title:""},i=void 0,o={unversionedId:"hardwarelabels",id:"hardwarelabels",title:"",description:"Hardware Labels",source:"@site/docs/hardwarelabels.md",sourceDirName:".",slug:"/hardwarelabels",permalink:"/next/hardwarelabels",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Hardware Labels",title:""},sidebar:"docs",previous:{title:"Smbios",permalink:"/next/smbios"},next:{title:"Inventory Management",permalink:"/next/inventory-management"}},d={},m=[{value:"Hardware Labels",id:"hardware-labels",level:2},{value:"Block device drive types",id:"block-device-drive-types",level:3},{value:"Block device controller types",id:"block-device-controller-types",level:3},{value:"Example MachineRegistration",id:"example-machineregistration",level:3}],p=(s="CodeBlock",function(e){return console.warn("Component "+s+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var s;const c={toc:m};function k(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"hardware-labels"},"Hardware Labels"),(0,r.kt)("p",null,"When a node is registered, hardware data is collected and made available to the MachineRegistration in the same way as ",(0,r.kt)("a",{parentName:"p",href:"/next/smbios"},"SMBIOS data"),"."),(0,r.kt)("p",null,"This data can be used for easy identification and selection via a ",(0,r.kt)("a",{parentName:"p",href:"/next/machineinventoryselectortemplate-reference"},"MachineSelector"),"."),(0,r.kt)("p",null,"The following are available for templating:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Label"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"${System Data/Memory/Total Physical Bytes}"),(0,r.kt)("td",{parentName:"tr",align:null},"The total RAM memory in the node, expressed in bytes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"${System Data/CPU/Total Cores}"),(0,r.kt)("td",{parentName:"tr",align:null},"Total CPU cores")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"${System Data/CPU/Total Threads}"),(0,r.kt)("td",{parentName:"tr",align:null},"Total CPU threads")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"${System Data/CPU/Vendor}"),(0,r.kt)("td",{parentName:"tr",align:null},"CPU vendor")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"${System Data/CPU/Model}"),(0,r.kt)("td",{parentName:"tr",align:null},"CPU model")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"${System Data/GPU/Vendor}"),(0,r.kt)("td",{parentName:"tr",align:null},"GPU vendor (Only available if the node has an identifiable GPU)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"${System Data/GPU/Model}"),(0,r.kt)("td",{parentName:"tr",align:null},"GPU model (Only available if the node has an identifiable GPU)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"${System Data/Network/Number Interfaces}"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of network interfaces in the system")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"${System Data/Network/{Iface name}/Name}"),(0,r.kt)("td",{parentName:"tr",align:null},"Network interface name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"${System Data/Network/{Iface name}/IsVirtual}"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean indicating virtual network interface")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"${System Data/Block Devices/Number Devices}"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of block devices in the system (includes DVD and USB drives)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"${System Data/Block Devices/{Disk name}/Name}"),(0,r.kt)("td",{parentName:"tr",align:null},"Device name of the block device (i.e. sda, sr0, vda, etc...)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"${System Data/Block Devices/{Disk name}/Removable}"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether this block device is removable (i.e. DVD)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"${System Data/Block Devices/{Disk name}/Size}"),(0,r.kt)("td",{parentName:"tr",align:null},"Total space in this block device, expressed in bytes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"${System Data/Block Devices/{Disk name}/Drive Type}"),(0,r.kt)("td",{parentName:"tr",align:null},"Drive type of this block device, see table below")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"${System Data/Block Devices/{Disk name}/Storage Controller}"),(0,r.kt)("td",{parentName:"tr",align:null},"Controller type for this block device connection, see table below")))),(0,r.kt)("admonition",{title:"info",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"On both ",(0,r.kt)("inlineCode",{parentName:"p"},"Block Devices")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Network")," the device name is used as a sub-block, as there could be more than one device.")),(0,r.kt)("h3",{id:"block-device-drive-types"},"Block device drive types"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"HDD"),(0,r.kt)("td",{parentName:"tr",align:null},"Hard disk drive")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"FDD"),(0,r.kt)("td",{parentName:"tr",align:null},"Floppy disk drive")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ODD"),(0,r.kt)("td",{parentName:"tr",align:null},"Optical disk drive")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SSD"),(0,r.kt)("td",{parentName:"tr",align:null},"Solid-state drive")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"virtual"),(0,r.kt)("td",{parentName:"tr",align:null},"virtual drive i.e. loop devices")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Unknown"),(0,r.kt)("td",{parentName:"tr",align:null},"unknown drive type")))),(0,r.kt)("h3",{id:"block-device-controller-types"},"Block device controller types"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"IDE"),(0,r.kt)("td",{parentName:"tr",align:null},"Integrated Drive Electronics")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SCSI"),(0,r.kt)("td",{parentName:"tr",align:null},"Small computer system interface")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NVMe"),(0,r.kt)("td",{parentName:"tr",align:null},"Non-volatile Memory Express")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MMC"),(0,r.kt)("td",{parentName:"tr",align:null},"Multi-media controller (used for mobile phone storage devices)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"virtio"),(0,r.kt)("td",{parentName:"tr",align:null},"Virtualized storage controller/driver")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"loop"),(0,r.kt)("td",{parentName:"tr",align:null},"loop device")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Unknown"),(0,r.kt)("td",{parentName:"tr",align:null},"unknown controller type")))),(0,r.kt)("h3",{id:"example-machineregistration"},"Example MachineRegistration"),(0,r.kt)(p,{language:"yaml",title:"registration example with smbios labels",showLineNumbers:!0,mdxType:"CodeBlock"},'apiVersion: elemental.cattle.io/v1beta1\nkind: MachineRegistration\nmetadata:\n  name: my-nodes\n  namespace: fleet-default\nspec:\n  config:\n    cloud-config:\n      users:\n        - name: root\n          passwd: root\n    elemental:\n      install:\n        reboot: true\n        device: /dev/sda\n        debug: true\n  machineInventoryLabels:\n    elemental.cattle.io/CpuTotalCores: "${System Data/CPU/Total Cores}"\n    elemental.cattle.io/CpuTotalThreads: "${System Data/CPU/Total Threads}"\n    elemental.cattle.io/TotalMemoryBytes: "${System Data/Memory/Total Physical Bytes}"\n    elemental.cattle.io/NumberBlockDevices: "${System Data/Block Devices/Number Devices}"\n'))}k.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkelemental_docs=self.webpackChunkelemental_docs||[]).push([[3148],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),p=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=p(a),k=r,s=u["".concat(d,".").concat(k)]||u[k]||c[k]||l;return a?n.createElement(s,i(i({ref:t},m),{},{components:a})):n.createElement(s,i({ref:t},m))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=u;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},2611:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const l={sidebar_label:"Hardware Labels",title:""},i=void 0,o={unversionedId:"hardwarelabels",id:"hardwarelabels",title:"",description:"Hardware Labels",source:"@site/docs/hardwarelabels.md",sourceDirName:".",slug:"/hardwarelabels",permalink:"/next/hardwarelabels",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Hardware Labels",title:""},sidebar:"docs",previous:{title:"Smbios",permalink:"/next/smbios"},next:{title:"Inventory Management",permalink:"/next/inventory-management"}},d={},p=[{value:"Hardware Labels",id:"hardware-labels",level:2},{value:"Block device drive types",id:"block-device-drive-types",level:3},{value:"Block device controller types",id:"block-device-controller-types",level:3}],m={toc:p};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"hardware-labels"},"Hardware Labels"),(0,r.kt)("p",null,"When a node is registered, the data is stored in the ",(0,r.kt)("a",{parentName:"p",href:"/next/inventory-management#machineinventory"},"inventory")," with default labels and values relative to the node hardware."),(0,r.kt)("p",null,"This data is used for easy identification and selection via a ",(0,r.kt)("a",{parentName:"p",href:"/next/machineinventoryselectortemplate-reference"},"MachineSelector"),"."),(0,r.kt)("p",null,"The following labels are set up automatically:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Label"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"elemental.cattle.io/TotalMemory"),(0,r.kt)("td",{parentName:"tr",align:null},"The total RAM memory in the node, expressed in bytes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"elemental.cattle.io/CpuTotalCores"),(0,r.kt)("td",{parentName:"tr",align:null},"Total CPU cores")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"elemental.cattle.io/CpuTotalThreads"),(0,r.kt)("td",{parentName:"tr",align:null},"Total CPU threads")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"elemental.cattle.io/CpuVendor"),(0,r.kt)("td",{parentName:"tr",align:null},"CPU vendor")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"elemental.cattle.io/CpuModel"),(0,r.kt)("td",{parentName:"tr",align:null},"CPU model")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"elemental.cattle.io/GpuModel"),(0,r.kt)("td",{parentName:"tr",align:null},"GPU model (Only available if the node has an identifiable GPU)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"elemental.cattle.io/GpuVendor"),(0,r.kt)("td",{parentName:"tr",align:null},"GPU vendor (Only available if the node has an identifiable GPU)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"elemental.cattle.io/NetNumberInterfaces"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of network interfaces in the system")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"elemental.cattle.io/NetIfaceX-Name"),(0,r.kt)("td",{parentName:"tr",align:null},"Network interface name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"elemental.cattle.io/NetIfaceX-Virtual"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether the Network Interface is a virtual one")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"elemental.cattle.io/BlockTotal"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of block devices in the system (includes DVD and USB drives)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"elemental.cattle.io/BlockDeviceX-Name"),(0,r.kt)("td",{parentName:"tr",align:null},"Device name of the block device (i.e. sda, sr0, vda, etc...)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"elemental.cattle.io/BlockDeviceX-Removable"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether this block device is removable (i.e. DVD)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"elemental.cattle.io/BlockDeviceX-Size"),(0,r.kt)("td",{parentName:"tr",align:null},"Total space in this block device, expressed in bytes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"elemental.cattle.io/BlockDeviceX-DriveType"),(0,r.kt)("td",{parentName:"tr",align:null},"Drive type of this block device, see table below")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"elemental.cattle.io/BlockDeviceX-ControllerType"),(0,r.kt)("td",{parentName:"tr",align:null},"Controller type for this block device connection, see table below")))),(0,r.kt)("admonition",{title:"info",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"On both ",(0,r.kt)("inlineCode",{parentName:"p"},"BlockDeviceX")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"NetIfaceX")," the X indicates a number, as there could be more than one device. Numbers are just for enumeration purposes and have no relation with the underlying hardware.")),(0,r.kt)("h3",{id:"block-device-drive-types"},"Block device drive types"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"HDD"),(0,r.kt)("td",{parentName:"tr",align:null},"Hard disk drive")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"FDD"),(0,r.kt)("td",{parentName:"tr",align:null},"Floppy disk drive")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ODD"),(0,r.kt)("td",{parentName:"tr",align:null},"Optical disk drive")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SSD"),(0,r.kt)("td",{parentName:"tr",align:null},"Solid-state drive")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"virtual"),(0,r.kt)("td",{parentName:"tr",align:null},"virtual drive i.e. loop devices")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Unknown"),(0,r.kt)("td",{parentName:"tr",align:null},"unknown drive type")))),(0,r.kt)("h3",{id:"block-device-controller-types"},"Block device controller types"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"IDE"),(0,r.kt)("td",{parentName:"tr",align:null},"Integrated Drive Electronics")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SCSI"),(0,r.kt)("td",{parentName:"tr",align:null},"Small computer system interface")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NVMe"),(0,r.kt)("td",{parentName:"tr",align:null},"Non-volatile Memory Express")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MMC"),(0,r.kt)("td",{parentName:"tr",align:null},"Multi-media controller (used for mobile phone storage devices)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"virtio"),(0,r.kt)("td",{parentName:"tr",align:null},"Virtualized storage controller/driver")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"loop"),(0,r.kt)("td",{parentName:"tr",align:null},"loop device")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Unknown"),(0,r.kt)("td",{parentName:"tr",align:null},"unknown controller type")))))}c.isMDXComponent=!0}}]);
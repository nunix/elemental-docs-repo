"use strict";(self.webpackChunkelemental_docs=self.webpackChunkelemental_docs||[]).push([[4182],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=o,f=u["".concat(c,".").concat(m)]||u[m]||p[m]||i;return n?a.createElement(f,r(r({ref:t},d),{},{components:n})):a.createElement(f,r({ref:t},d))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:o,r[1]=l;for(var s=2;s<i;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8599:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=n(7462),o=(n(7294),n(3905));const i={sidebar_label:"Include cloud-config from removable devices",title:""},r=void 0,l={unversionedId:"removable-device-cloudconfig",id:"version-1.2/removable-device-cloudconfig",title:"",description:"How to include cloud-config files from removable devices",source:"@site/versioned_docs/version-1.2/removable-device-cloudconfig.md",sourceDirName:".",slug:"/removable-device-cloudconfig",permalink:"/removable-device-cloudconfig",draft:!1,tags:[],version:"1.2",frontMatter:{sidebar_label:"Include cloud-config from removable devices",title:""},sidebar:"docs",previous:{title:"How to use Elemental with Rancher and VMware",permalink:"/rancher-vmware"},next:{title:"Rancher upgrades",permalink:"/troubleshooting-rancher-upgrades"}},c={},s=[{value:"How to include cloud-config files from removable devices",id:"how-to-include-cloud-config-files-from-removable-devices",level:3},{value:"Include non cloud-config data",id:"include-non-cloud-config-data",level:4}],d={toc:s},u="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"how-to-include-cloud-config-files-from-removable-devices"},"How to include cloud-config files from removable devices"),(0,o.kt)("p",null,"Elemental Teal supports loading ",(0,o.kt)("a",{parentName:"p",href:"/cloud-config-reference"},"cloud-config")," files from specific block devices.\nIn particular supports loading cloud-config files from an ISO having ",(0,o.kt)("inlineCode",{parentName:"p"},"CIDATA")," as the volume ID or any vFAT formatted\ndevice labeled with ",(0,o.kt)("inlineCode",{parentName:"p"},"CIDATA"),". If a device matching this criteria is found on early boot the Elemental client will\nread it and look for a ",(0,o.kt)("inlineCode",{parentName:"p"},"user-data")," file in its root."),(0,o.kt)("p",null,"As an example an ISO including a cloud-config file can be created on a Linux host with the procedure below."),(0,o.kt)("p",null,"Create a ",(0,o.kt)("inlineCode",{parentName:"p"},"user-data")," file with the cloud-config data in it. In the example below we just set a\nproxy:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="user-data" showLineNumbers',title:'"user-data"',showLineNumbers:!0},'#cloud-config\nwrite_files:\n- path: /etc/sysconfig/proxy\n  append: true\n  content: |\n    PROXY_ENABLED="yes"\n    HTTP_PROXY=http://some.domain.org:8080\n    HTTPS_PROXY=https://some.domain.org:8080\n    NO_PROXY="localhost, 127.0.0.1"\n')),(0,o.kt)("p",null,"Once the ",(0,o.kt)("inlineCode",{parentName:"p"},"user-data")," file exists create an ISO including only this file by using the ",(0,o.kt)("inlineCode",{parentName:"p"},"mkisofs")," Linux utility:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"mkisof -o cidata.iso -V CIDATA -J -r user-data\n")),(0,o.kt)("p",null,"The result is an ISO labeled with ",(0,o.kt)("inlineCode",{parentName:"p"},"CIDATA")," including the ",(0,o.kt)("inlineCode",{parentName:"p"},"user-data")," file."),(0,o.kt)("p",null,"At boot the ",(0,o.kt)("inlineCode",{parentName:"p"},"user-data")," file will be copied as is to ",(0,o.kt)("inlineCode",{parentName:"p"},"/oem/user-data")," and in case it contains cloud-config data\nan extra copy will be added as ",(0,o.kt)("inlineCode",{parentName:"p"},"/oem/user-data.yaml"),". The file ",(0,o.kt)("inlineCode",{parentName:"p"},"/oem/user-data.yaml")," will be parsed\non any later cloud-init stage."),(0,o.kt)("p",null,"Since the data is copied to ",(0,o.kt)("inlineCode",{parentName:"p"},"/oem")," it will be persistent, hence on follow up reboots the removable device is\nnot required to be present any more. If still present on follow up reboots, it just overwrites any\naleady pre-existing data."),(0,o.kt)("h4",{id:"include-non-cloud-config-data"},"Include non cloud-config data"),(0,o.kt)("p",null,"If the ",(0,o.kt)("inlineCode",{parentName:"p"},"user-data")," is not containing cloud-config data the Elemental client will just copy it as\nis to ",(0,o.kt)("inlineCode",{parentName:"p"},"/oem/user-data"),". Only ",(0,o.kt)("inlineCode",{parentName:"p"},"*.yaml")," files are parsed when executing cloud-init stages, so in that\ncase the file will be ignored by cloud-init services."),(0,o.kt)("p",null,"If the ",(0,o.kt)("inlineCode",{parentName:"p"},"user-data")," contains a script the Elemental client will, in addition, try to execute it. The way\nElemental client determines if ",(0,o.kt)("inlineCode",{parentName:"p"},"user-data")," is a script or not is by the presence of a ",(0,o.kt)("em",{parentName:"p"},"Shebang")," in the\nfirst line. For example, the previous ",(0,o.kt)("inlineCode",{parentName:"p"},"user-data")," file could be rewritten as:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="user-data" showLineNumbers',title:'"user-data"',showLineNumbers:!0},'#!/bin/bash\n\ncat <<EOF >> /etc/sysconfig/proxy\nPROXY_ENABLED="yes"\nHTTP_PROXY=http://some.domain.org:8080\nHTTPS_PROXY=https://some.domain.org:8080\nNO_PROXY="localhost, 127.0.0.1"\nEOF\n')))}p.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkelemental_docs=self.webpackChunkelemental_docs||[]).push([[548],{41532:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var i=t(17624),s=t(4552);const o={sidebar_label:"Cloud-config reference",title:""},r="Cloud-config Reference",a={id:"cloud-config-reference",title:"",description:"Node OS images build using the Elemental Toolkit are expected",source:"@site/versioned_docs/version-1.5/cloud-config-reference.md",sourceDirName:".",slug:"/cloud-config-reference",permalink:"/cloud-config-reference",draft:!1,unlisted:!1,tags:[],version:"1.5",frontMatter:{sidebar_label:"Cloud-config reference",title:""},sidebar:"docs",previous:{title:"Authentication",permalink:"/authentication"},next:{title:"MachineRegistration",permalink:"/machineregistration-reference"}},c={},d=[{value:"Configuration syntax",id:"configuration-syntax",level:2},{value:"Compatibility with Cloud Init format",id:"compatibility-with-cloud-init-format",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.M)(),...e.components},{Details:t,Head:o}=n;return t||u("Details",!0),o||u("Head",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o,{children:(0,i.jsx)("link",{rel:"canonical",href:"https://elemental.docs.rancher.com/cloud-config-reference"})}),"\n",(0,i.jsx)(n.h1,{id:"cloud-config-reference",children:"Cloud-config Reference"}),"\n",(0,i.jsxs)(n.p,{children:["Node OS images build using the ",(0,i.jsx)(n.a,{href:"https://github.com/elemental-toolkit",children:"Elemental Toolkit"})," are expected\nto be initialized and configured by using ",(0,i.jsx)(n.a,{href:"https://github.com/rancher/yip",children:"yip"}),". Yip is a small utility to\napply a set of actions and configurations to the system described with yaml files. Yip is integrated and consumed\nas a library within the elemental client binary (see ",(0,i.jsx)(n.code,{children:"elemental run-stage --help"}),"). Yip groups the configurations\nand actions to apply in arbitrary ",(0,i.jsx)(n.em,{children:"stages"}),", for instance the ",(0,i.jsx)(n.code,{children:"elemental run-stage network"})," command call would only\napply defined actions and configuration for the stage named ",(0,i.jsx)(n.code,{children:"network"}),". Note from Yip perspective stages can be run at\nany time as they are simply grouping a set of actions under an arbitrary name."]}),"\n",(0,i.jsx)(n.p,{children:"Elemental Toolkit integrates five predefined stages into the OS boot process."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"rootfs"})}),": this stage runs on early boot inside the init ram disk, just after mounting the root device (typically at ",(0,i.jsx)(n.code,{children:"/sysroot"}),").\nThis stage can be used to define first-boot steps like expanding or creating persistent partitions. Ephemeral and\npersistent paths are typically defined at this stage. Executed as part of the ",(0,i.jsx)(n.code,{children:"initrd-root-fs.target"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"initramfs"})}),": this stage runs inside the init ram disk too, but on a later stage just before switching root. This stage runs in a chrooted\nenvironment to the actual root device. This stage is handy to set some system parameters that might be relevant to systemd\nafter switching root. For instance, additional systemd unit files could be added here before the systemd from the actual root is executed.\nExecuted as part of the ",(0,i.jsx)(n.code,{children:"initrd.target"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"fs"})}),": this stage is the first one executed after switching root and it is executed as part of the ",(0,i.jsx)(n.code,{children:"sysinit.target"})," which runs once all\nall local filesystems and mountpoints defined in fstab are mounted and ready."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"network"})}),": this stage is executed as part of the ",(0,i.jsx)(n.code,{children:"multi-user.target"})," and after the ",(0,i.jsx)(n.code,{children:"network-online.target"})," is reached. This stage can be used\nto run actions and configurations that require network connectivity. For instance this stage is used to run the very first node registration and\nand installation from a live ISO."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"boot"})}),": this stage is executed as part of the ",(0,i.jsx)(n.code,{children:"multi-user.target"})," and before the ",(0,i.jsx)(n.code,{children:"getty.target"}),". This is the default stage to run cloud-config\ndata provided using the supported cloud-init syntax. See ",(0,i.jsx)(n.a,{href:"/cloud-config-reference#compatibility-with-cloud-init-format",children:"cloud-init compatibility"})," section."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["By default, ",(0,i.jsx)(n.code,{children:"elemental"})," reads the yaml configuration files from the following paths in order: ",(0,i.jsx)(n.code,{children:"/system/oem"}),", ",(0,i.jsx)(n.code,{children:"/oem"})," and ",(0,i.jsx)(n.code,{children:"/usr/local/cloud-config"}),"."]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["In contrast to similar projects such as ",(0,i.jsx)(n.em,{children:"Cloud Init"}),", Yip does not keep records or caches of executed stages and steps,\nall stages and its associated configuration is executed at every boot."]})}),"\n",(0,i.jsx)(n.h2,{id:"configuration-syntax",children:"Configuration syntax"}),"\n",(0,i.jsxs)(n.p,{children:["Yip has its own syntax, it essentially requires to define ",(0,i.jsx)(n.em,{children:"stages"})," and a list of steps for each stage. Steps are executed in\norder and each step can be a combination different action types (e.g run commands, create files, set hostname, etc.)."]}),"\n",(0,i.jsx)(n.p,{children:"Consider the following example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:'stages:\n  boot:\n  - files:\n    - path: /tmp/script.sh\n      content: |\n        #!/bin/sh\n        echo "test"\n      permissions: 0777\n      owner: 1000\n      group: 100\n  - commands:\n    - /tmp/script.sh\n'})}),"\n",(0,i.jsxs)(n.p,{children:["In the above exaple there is one ",(0,i.jsx)(n.code,{children:"boot"})," stage including two steps, one to create an executable script file and a second one\nthat actually runs the script."]}),"\n",(0,i.jsxs)(n.p,{children:["Yip also supports ",(0,i.jsx)(n.code,{children:"*.before"})," and ",(0,i.jsx)(n.code,{children:"*.after"})," suffix modifiers to any given stage. For instance, running the ",(0,i.jsx)(n.code,{children:"network"})," stage\nresults into running first ",(0,i.jsx)(n.code,{children:"network.before"})," stages found in config files and then ",(0,i.jsx)(n.code,{children:"network"})," and finally ",(0,i.jsx)(n.code,{children:"network.after"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["See the full reference of applicable keys in steps documented in\n",(0,i.jsx)(n.a,{href:"https://github.com/rancher/yip?tab=readme-ov-file#configuration-reference",children:"yip project"})," itself."]}),"\n",(0,i.jsx)(n.h2,{id:"compatibility-with-cloud-init-format",children:"Compatibility with Cloud Init format"}),"\n",(0,i.jsxs)(n.p,{children:["A subset of the official ",(0,i.jsx)(n.a,{href:"http://cloudinit.readthedocs.org/en/latest/topics/format.html#cloud-config-data",children:"cloud-config spec"})," is implemented by yip.\nMore specific the supported cloud-init keys are: ",(0,i.jsx)(n.code,{children:"users"}),", ",(0,i.jsx)(n.code,{children:"ssh_authorized_keys"}),", ",(0,i.jsx)(n.code,{children:"runcmd"}),", ",(0,i.jsx)(n.code,{children:"hostname"})," and ",(0,i.jsx)(n.code,{children:"write_files"})," are implemented."]}),"\n",(0,i.jsxs)(n.p,{children:["If a yaml file starts with ",(0,i.jsx)(n.code,{children:"#cloud-config"})," it is parsed as a standard cloud-init, associated it to the yip ",(0,i.jsx)(n.code,{children:"boot"})," stage.\nFor example:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:'#cloud-config\nusers:\n- name: "bar"\n  passwd: "foo"\n  groups: "users"\n  homedir: "/home/foo"\n  shell: "/bin/bash"\n  ssh_authorized_keys:\n  - faaapploo\n\n# Assigns these keys to the first user in users or root if there\n# is none\nssh_authorized_keys:\n- asdd\n\n# Run these commands once the system has fully booted\nruncmd:\n- foo\n\n# Write arbitrary files\nwrite_files:\n- encoding: b64\n  content: CiMgVGhpcyBmaWxlIGNvbnRyb2xzIHRoZSBzdGF0ZSBvZiBTRUxpbnV4\n  path: /foo/bar\n  permissions: "0644"\n  owner: "bar"\n'})}),"\n",(0,i.jsxs)(n.p,{children:["In Elemental all kubernetes resources including a cloud-config field assume cloud-init syntax. This includes resources such as ",(0,i.jsx)(n.code,{children:"MachineRegistration"})," or ",(0,i.jsx)(n.code,{children:"SeedImage"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Below is an example of the above configuration embedded in a MachineRegistration resource."}),"\n",(0,i.jsxs)(t,{children:[(0,i.jsx)("summary",{children:"MachineRegistration example"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",metastring:"showLineNumbers",children:'apiVersion: elemental.cattle.io/v1beta1\nkind: MachineRegistration\nmetadata:\n  name: my-nodes\n  namespace: fleet-default\nspec:\n  config:\n    cloud-config:\n      users:\n      - name: "bar"\n        passwd: "foo"\n        groups: "users"\n        homedir: "/home/foo"\n        shell: "/bin/bash"\n        ssh_authorized_keys:\n        - faaapploo\n      ssh_authorized_keys:\n      - asdd\n      runcmd:\n      - foo\n      write_files:\n      - encoding: b64\n        content: CiMgVGhpcyBmaWxlIGNvbnRyb2xzIHRoZSBzdGF0ZSBvZiBTRUxpbnV4\n        path: /foo/bar\n        permissions: "0644"\n        owner: "bar"\n    elemental:\n      install:\n        reboot: true\n        device: /dev/sda\n        debug: true\n  machineName: my-machine\n  machineInventoryLabels:\n    element: fire\n'})})]})]})}function h(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}function u(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},4552:(e,n,t)=>{t.d(n,{I:()=>a,M:()=>r});var i=t(11504);const s={},o=i.createContext(s);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);
"use strict";(self.webpackChunkelemental_docs=self.webpackChunkelemental_docs||[]).push([[3920],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,m=r(e,["components","mdxType","originalType","parentName"]),u=d(n),c=i,h=u["".concat(s,".").concat(c)]||u[c]||p[c]||o;return n?a.createElement(h,l(l({ref:t},m),{},{components:n})):a.createElement(h,l({ref:t},m))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=c;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[u]="string"==typeof e?e:i,l[1]=r;for(var d=2;d<o;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9340:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var a=n(7462),i=(n(7294),n(3905));const o={sidebar_label:"Customize Elemental Install",title:""},l="Customize Elemental Install",r={unversionedId:"customizing",id:"version-1.3/customizing",title:"",description:"Elemental Teal images can be customized in different ways.",source:"@site/versioned_docs/version-1.3/customizing.md",sourceDirName:".",slug:"/customizing",permalink:"/customizing",draft:!1,tags:[],version:"1.3",frontMatter:{sidebar_label:"Customize Elemental Install",title:""},sidebar:"docs",previous:{title:"Upgrade",permalink:"/upgrade"},next:{title:"Elemental plans",permalink:"/elemental-plans"}},s={},d=[{value:"Customize installation ISO and installation process",id:"customize-installation-iso-and-installation-process",level:2},{value:"Common customization pattern",id:"common-customization-pattern",level:3},{value:"Custom Elemental client configuration file",id:"custom-elemental-client-configuration-file",level:4},{value:"Adding additional cloud-init files within the installed OS",id:"adding-additional-cloud-init-files-within-the-installed-os",level:4},{value:"Adding installation hooks or boot stages for the live system",id:"adding-installation-hooks-or-boot-stages-for-the-live-system",level:4},{value:"Adding extra driver binaries into the ISO example",id:"adding-extra-driver-binaries-into-the-iso-example",level:3},{value:"Adding extra LVM volume group disks during the installation",id:"adding-extra-lvm-volume-group-disks-during-the-installation",level:3},{value:"Repacking the ISO image with extra files",id:"repacking-the-iso-image-with-extra-files",level:3},{value:"Remastering a custom docker image",id:"remastering-a-custom-docker-image",level:2},{value:"Create a custom bootable installation media",id:"create-a-custom-bootable-installation-media",level:2}],m={toc:d},u="wrapper";function p(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"customize-elemental-install"},"Customize Elemental Install"),(0,i.kt)("p",null,"Elemental Teal images can be customized in different ways.\nOne option is to provide\nadditional resources within the installation media so that during installation, or\neventually at boot time, additional binaries such as drivers can be included."),(0,i.kt)("p",null,"Another option would be to remaster the Elemental Teal by simply using a docker build.\nElemental Teal is a regular container image, so it is absolutely possible to create\na new image using a Dockerfile based on Elemental Teal image."),(0,i.kt)("h2",{id:"customize-installation-iso-and-installation-process"},"Customize installation ISO and installation process"),(0,i.kt)("p",null,"In order to adapt the installation ISO a simple approach is to append extra configuration\nfiles into the ISO root in an analog way the registration yaml configuration file\nis added."),(0,i.kt)("h3",{id:"common-customization-pattern"},"Common customization pattern"),(0,i.kt)("p",null,"Elemental Teal installation can be customized in three different non-exclusive ways. First, including\nsome custom Elemental client configuration file, second, by including additional cloud-init files to execute at\nboot time, and finally, by including  ",(0,i.kt)("inlineCode",{parentName:"p"},"cloud-init")," files such as installation hooks or boot stages evaluated during\nthe live system boot itself."),(0,i.kt)("p",null,"A common pattern is to combine the three ways described above. This pattern will allow you to add custom steps during the installation and add ",(0,i.kt)("inlineCode",{parentName:"p"},"cloud-init")," files to be evaluated at boot time."),(0,i.kt)("p",null,"Additional config files can be added dynamically boot time by generating the ISO via a ",(0,i.kt)("a",{parentName:"p",href:"/seedimage-reference"},"SeedImage")," including custom cloud-config data."),(0,i.kt)("p",null,"To apply this pattern, the following files need to be included in the ISO or generated at boot time:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"A ",(0,i.kt)("a",{parentName:"p",href:"https://rancher.github.io/elemental-toolkit/docs/customizing/general_configuration/"},"configuration file"),"\nfor the elemental client. The file must be named ",(0,i.kt)("inlineCode",{parentName:"p"},"config.yaml")," and located by default in ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/elemental"),".\nThis path can be configured as part of the installation parameters of a ",(0,i.kt)("a",{parentName:"p",href:"/machineregistration-reference"},"MachineRegistration")," resource.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The additional ",(0,i.kt)("inlineCode",{parentName:"p"},"cloud-init")," files to be included into the installed system. They\nallow to perform custom operations at boot time.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The installation hooks are evalutated at install time. They allow to perform custom operations\nduring the installation process (include extra software, set additional disks...). The same\nway ",(0,i.kt)("inlineCode",{parentName:"p"},"cloud-init")," files can be included to perform custom operations during the live installation\nmedia boot time."))),(0,i.kt)("h4",{id:"custom-elemental-client-configuration-file"},"Custom Elemental client configuration file"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/rancher/elemental-toolkit/blob/main/docs/elemental.md"},"Elemental client")," ",(0,i.kt)("inlineCode",{parentName:"p"},"install"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"upgrade")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"reset")," commands can be configured with a ",(0,i.kt)("a",{parentName:"p",href:"https://rancher.github.io/elemental-toolkit/docs/customizing/general_configuration/"},"custom configuration file")," located by default in ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/elemental/config.yaml"),".\nIf you have multiple yaml files, you need to add them in the ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/elemental/config.d")," directory."),(0,i.kt)("p",null,"A simple example to set hooks location could be:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"extra-partitions:\n  - size: 10240\n    fs: ext4\n    label: EXTRA_PARTITION\n")),(0,i.kt)("p",null,"The above example sets an additional extra partition during the installation."),(0,i.kt)("h4",{id:"adding-additional-cloud-init-files-within-the-installed-os"},"Adding additional cloud-init files within the installed OS"),(0,i.kt)("p",null,"In order to include additional cloud-init files during the installation they need\nto be added to the installation data into the MachineRegistration resource. More specific\nthe ",(0,i.kt)("inlineCode",{parentName:"p"},"config-urls")," field is used for this exact purpose. See ",(0,i.kt)("a",{parentName:"p",href:"/machineregistration-reference"},"MachineRegistration reference")," page."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"config-urls")," is a list of string literals where each item is an HTTP URL or a local path pointing to a\ncloud-init file. The local path is evaluated during\nthe installation, hence it must exists within the installation media, commonly an ISO image."),(0,i.kt)("p",null,"By default, Elemental Teal live systems mount the ISO root at ",(0,i.kt)("inlineCode",{parentName:"p"},"/run/initramfs/live")," which is also the default path set for ",(0,i.kt)("inlineCode",{parentName:"p"},"config-url")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"MachineRegistrations"),":\nSee the example below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"showLineNumbers",showLineNumbers:!0},'apiVersion: elemental.cattle.io/v1beta1\nkind: MachineRegistration\nmetadata:\n  name: my-nodes\n  namespace: fleet-default\nspec:\n  ...\n  config:\n    ...\n    elemental:\n      ...\n      install:\n        ...\n        config-urls:\n        - "/run/initramfs/live/oem/custom_config.yaml"\n')),(0,i.kt)("p",null,"Elemental Teal live ISOs, when booted, have the ISO root mounted at ",(0,i.kt)("inlineCode",{parentName:"p"},"/run/initramfs/live"),".\nAccording to that, the ISO for the example above is expected to include the ",(0,i.kt)("inlineCode",{parentName:"p"},"/oem/custom_config.yaml")," file."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"/run/initramfs/live")," is a readonly mountpoint and it's not an appropriate path for dynamically generated content at ISO boot.")),(0,i.kt)("h4",{id:"adding-installation-hooks-or-boot-stages-for-the-live-system"},"Adding installation hooks or boot stages for the live system"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/rancher/elemental-cli"},"Elemental client")," ",(0,i.kt)("inlineCode",{parentName:"p"},"install"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"upgrade")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"reset")," procedures include four different hooks:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"before-install"),": executed after all partition mountpoints are set."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"after-install-chroot"),": executed after deploying the OS image and before unmounting the associated loop filesystem image. Runs chrooted to the OS image."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"after-install"),": executed just after the after-install-chroot hook. It is not chrooted."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"post-install"),": executed as the very last step before ending the installation, partitions are still mounted, the loop devices for the image is not.")),(0,i.kt)("p",null,"Hooks are provided as ",(0,i.kt)("inlineCode",{parentName:"p"},"cloud-init")," stages. Equivalent hooks exist for ",(0,i.kt)("inlineCode",{parentName:"p"},"reset")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"upgrade")," procedures.\nThey are loaded from the ",(0,i.kt)("inlineCode",{parentName:"p"},"/iso-config")," folder in ISO filesystem root. In fact, hooks are regular ",(0,i.kt)("inlineCode",{parentName:"p"},"cloud-init")," stages with the\nonly difference that Elemental client parses them during ",(0,i.kt)("inlineCode",{parentName:"p"},"install"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"upgrade")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"reset")," actions, rather than boot time.\nNote any boot stage included this way will be executed during the live installation media boot."),(0,i.kt)("p",null,"Hooks are evaluated during ",(0,i.kt)("inlineCode",{parentName:"p"},"install"),",",(0,i.kt)("inlineCode",{parentName:"p"},"reset")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"upgrade")," action from ",(0,i.kt)("inlineCode",{parentName:"p"},"/oem"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"/system/oem")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"/usr/local/cloud-config")," paths,\nhowever for the live ISOs there is an additional the path ",(0,i.kt)("inlineCode",{parentName:"p"},"/run/initramfs/live/iso-config")," included. Note the ",(0,i.kt)("inlineCode",{parentName:"p"},"/run/initramfs/live"),"\nprefix is the mount point of the ISO filesystem of the Elemental Live ISO once booted. "),(0,i.kt)("h3",{id:"adding-extra-driver-binaries-into-the-iso-example"},"Adding extra driver binaries into the ISO example"),(0,i.kt)("p",null,"This example is covering the case in which extra driver binaries are included into the ISO\nand during the installation they are installed over the OS image."),(0,i.kt)("p",null,"For that use case the following files are required:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"additional binaries to install (they could be in the form of RPMs)"),(0,i.kt)("li",{parentName:"ul"},"additional hooks file to copy binaries into the persistent storage and to install them")),(0,i.kt)("p",null,"Let's create an ",(0,i.kt)("inlineCode",{parentName:"p"},"overlay")," directory to create the directory tree that needs to be\nadded into the ISO root. In that case the ",(0,i.kt)("inlineCode",{parentName:"p"},"overlay")," directory could contain:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"showLineNumbers",showLineNumbers:!0},"overlay/\n  data/\n    extra_drivers/\n      some_driver.rpm\n  iso-config/\n    install_hooks.yaml\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"overlay/iso-config/install_hooks.yaml")," could be as:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"showLineNumbers",showLineNumbers:!0},'name: "Install extra drivers"\nstages:\n  before-install:\n    # Preload data to the persistent storage\n    # During installation persistent partition is mounted at /run/cos/persistent\n    - commands:\n        - rsync -a /run/initramfs/live/data/ /run/cos/persistent\n  after-install-chroot:\n    # extra_drivers folder is at `/usr/local/extra_drivers` from the OS image chroot\n    - commands:\n      - rpm -iv /usr/local/extra_drivers/some_driver.rpm\n')),(0,i.kt)("p",null,"Note the installation hooks only cover installation procedures, for upgrades equivalent\n",(0,i.kt)("inlineCode",{parentName:"p"},"before-upgrade")," and/or ",(0,i.kt)("inlineCode",{parentName:"p"},"after-upgrade-chroot")," should be defined."),(0,i.kt)("h3",{id:"adding-extra-lvm-volume-group-disks-during-the-installation"},"Adding extra LVM volume group disks during the installation"),(0,i.kt)("p",null,"This example is covering the setup of an host with multiple disks and some of them used\nas part of an LVM setup."),(0,i.kt)("p",null,"As an example, we have an host with three disks (",(0,i.kt)("inlineCode",{parentName:"p"},"/dev/sda"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"/dev/sdb"),"\nand ",(0,i.kt)("inlineCode",{parentName:"p"},"/dev/sdc"),"). "),(0,i.kt)("p",null,"The first disk is used for a regular Elemental Teal installation\nand the other remaining two are used as part of a LVM group where arbitrary logical volumes\nare created, formatted and mounted at boot time via an extended ",(0,i.kt)("inlineCode",{parentName:"p"},"fstab")," file."),(0,i.kt)("p",null,"For this example, the following files are required:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"additional ",(0,i.kt)("inlineCode",{parentName:"li"},"clout-init")," files included in the installed system"),(0,i.kt)("li",{parentName:"ul"},"additional installation hooks to prepare the LVM volumes during the installation")),(0,i.kt)("p",null,"Let's create an ",(0,i.kt)("inlineCode",{parentName:"p"},"overlay")," directory to create the directory tree that needs to be\nadded into the ISO root. In that case the ",(0,i.kt)("inlineCode",{parentName:"p"},"overlay")," directory could contain:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"showLineNumbers",showLineNumbers:!0},"overlay/\n  oem/\n    lvm_volumes_in_fstab.yaml\n  iso-config/\n    lvm_volumes_hook.yaml\n")),(0,i.kt)("p",null,"The installation hook ",(0,i.kt)("inlineCode",{parentName:"p"},"overlay/iso-config/lvm_volumes_hook.yaml"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"showLineNumbers",showLineNumbers:!0},'name: "Create LVM logic volumes over some physical disks"\nstages:\n  post-install:\n    - name: "Create physical volume, volume group and logical volumes"\n      if: \'[ -e "/dev/sdb" ] && [ -e "/dev/sdc" ]\'\n      commands:\n      - | \n        # Create the physical volume, volume group and logical volumes\n        pvcreate /dev/sdb /dev/sdc\n        vgcreate elementalLVM /dev/sdb /dev/sdc\n        lvcreate -L 8G -n elementalVol1 elementalLVM\n        lvcreate -l 100%FREE -n elementalVol2 elementalLVM\n\n        # Trigger udev detection\n        if [ ! -e "/dev/elementalLVM/elementalVol1" ] || [ ! -e "/dev/elementalLVM/elementalVol2" ]; then\n          sleep 10\n          udevadm settle\n        fi\n\n        # Ensure devices are already available\n        [ -e "/dev/elementalLVM/elementalVol1" ] || exit 1\n        [ -e "/dev/elementalLVM/elementalVol2" ] || exit 1\n\n        # Format logical volumes with a known label for later use in fstab\n        mkfs.xfs -L eVol1 /dev/elementalLVM/elementalVol1\n        mkfs.xfs -L eVol2 /dev/elementalLVM/elementalVol2\n')),(0,i.kt)("p",null,"The LVM devices are created and formatted as desired. This is a good\nexample of an installation hook, as this setup is only needed once, at installation\ntime. As an alternative, the same action could be done on first boot, however it would\nrequire a more sophisticated logic to ensure it's only applied once at first boot."),(0,i.kt)("p",null,"Finally, the boot time ",(0,i.kt)("inlineCode",{parentName:"p"},"cloud-init")," files contain the mount points settings and trigger the\naction of mounting those mountpoints. The Elemental OS ",(0,i.kt)("inlineCode",{parentName:"p"},"fstab")," file is ephemeral and it's\ndynamically created at boot time. That's why it doesn't exist during the installation and\ncan't be used in an installation hook."),(0,i.kt)("p",null,"Here's an example of ",(0,i.kt)("inlineCode",{parentName:"p"},"overlay/oem/lvm_volumes_in_fstab.yaml"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"showLineNumbers",showLineNumbers:!0},'name: "Mount LVM volumes"\nstages:\n  initramfs:\n    - name: "Extend fstab to mount LVM logical volumes at boot"\n      commands:\n      - |\n        echo "LABEL=eVol1 /usr/local/eVol1  xfs defaults  0 0" >> /etc/fstab\n        echo "LABEL=eVol2 /usr/local/eVol2  xfs defaults  0 0" >> /etc/fstab\n')),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"initramfs")," stage is the last stage before switching to the actual root tree.\nAt this stage, the ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/fstab")," file already exists and can be adapted before\nswitching root. Once running in the final root tree, SystemD will handle the rest of the initialization and apply it.")),(0,i.kt)("p",null,"This cloud-init file should be included into the ",(0,i.kt)("inlineCode",{parentName:"p"},"/oem")," directory on the installed\nsystem. ",(0,i.kt)("inlineCode",{parentName:"p"},"/oem")," is a mount point for the OEM partition. In order to include extra files,\nthey should be listed as ",(0,i.kt)("inlineCode",{parentName:"p"},"config-urls")," within the Registration CRD at the\nmanagement cluster."),(0,i.kt)("h3",{id:"repacking-the-iso-image-with-extra-files"},"Repacking the ISO image with extra files"),(0,i.kt)("p",null,"Assuming an ",(0,i.kt)("inlineCode",{parentName:"p"},"overlay")," folder was created in the current directory containing all\nadditional files to be appended, the following ",(0,i.kt)("inlineCode",{parentName:"p"},"xorriso")," command adds the extra files:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:"showLineNumbers",showLineNumbers:!0},"xorriso -indev elemental-teal.x86_64.iso -outdev elemental-teal.custom.x86_64.iso -map overlay / -boot_image any replay\n")),(0,i.kt)("p",null,"For that a ",(0,i.kt)("inlineCode",{parentName:"p"},"xorriso")," equal or higher than version 1.5 is required."),(0,i.kt)("h2",{id:"remastering-a-custom-docker-image"},"Remastering a custom docker image"),(0,i.kt)("p",null,"Since Elemental Teal image is a Docker image it can also be used as a base image\nin a Dockerfile in order to create a new container image."),(0,i.kt)("p",null,"Imagine some additional package from an extra repository is required, the following example\nshow case how this could be added:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-docker",metastring:"showLineNumbers",showLineNumbers:!0},'# The version of Elemental to modify\nFROM registry.suse.com/rancher/elemental-teal/5.4:latest\n\n# Custom commands\nRUN rpm --import <repo-signing-key-url> && \\\n    zypper addrepo --refresh <repo_url> extra_repo && \\\n    zypper install -y <extra_package>\n\n# IMPORTANT: /etc/os-release is used for versioning/upgrade. The\n# values here should reflect the tag of the image currently being built\nARG IMAGE_REPO=norepo\nARG IMAGE_TAG=latest\nRUN \\\n    sed -i -e "s/^IMAGE_REPO=.*/IMAGE_REPO=\\"${IMAGE_REPO}\\"/g" /etc/os-release && \\\n    sed -i -e "s/^IMAGE_TAG=.*/IMAGE_TAG=\\"${IMAGE_TAG}\\"/g" /etc/os-release && \\\n    sed -i -e "s/^IMAGE=.*/IMAGE=\\"${IMAGE_REPO}:${IMAGE_TAG}\\"/g" /etc/os-release\n')),(0,i.kt)("p",null,"Where ",(0,i.kt)("inlineCode",{parentName:"p"},"latest")," is the base version we want to customize."),(0,i.kt)("p",null,"And then the following commands"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:"showLineNumbers",showLineNumbers:!0},"docker build --build-arg IMAGE_REPO=myrepo/custom-build \\\n             --build-arg IMAGE_TAG=v1.1.1 \\\n             -t myrepo/custom-build:v1.1.1 .\ndocker push myrepo/custom-build:v1.1.1\n")),(0,i.kt)("p",null,"The new customized OS is available as the Docker image ",(0,i.kt)("inlineCode",{parentName:"p"},"myrepo/custom-build:v1.1.1")," and it can\nbe run and verified using docker with"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:"showLineNumbers",showLineNumbers:!0},"docker run -it myrepo/custom-build:v1.1.1 bash\n")),(0,i.kt)("h2",{id:"create-a-custom-bootable-installation-media"},"Create a custom bootable installation media"),(0,i.kt)("p",null,"Elemental Teal leverages container images to build its root filesystems; therefore, it is possible\nto use it in a multi-stage environment to create custom bootable media that bundles a custom container image."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-docker",metastring:"showLineNumbers",showLineNumbers:!0},'FROM registry.suse.com/rancher/elemental-teal/5.4:latest as os\n\n# Check the section on remastering a custom docker image\n\nFROM registry.suse.com/rancher/elemental-builder-image/5.4:latest AS builder\n\nARG TARGETARCH\nWORKDIR /iso\nCOPY --from=os / rootfs\n\n# work around buildah issue: https://github.com/containers/buildah/issues/4242\nRUN rm rootfs/etc/resolv.conf\n\nRUN --mount=type=bind,source=./,target=/output,rw \\\n      elemental build-iso \\\n        dir:rootfs \\\n        --bootloader-in-rootfs \\\n        --squash-no-compression \\\n        -o /output -n "elemental-teal-${TARGETARCH}"\n')),(0,i.kt)("p",null,"Modify the container image template and afterwards run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:"showLineNumbers",showLineNumbers:!0},"buildah build --tag myrepo/custom-build:v1.1.1 \\\n              --build-arg IMAGE_REPO=myrepo/custom-build \\\n              --build-arg IMAGE_TAG=v1.1.1 \\\n              .\n")),(0,i.kt)("p",null,"The new customized installation media can be found in ",(0,i.kt)("inlineCode",{parentName:"p"},"elemental-teal-amd64.iso"),"."),(0,i.kt)("admonition",{title:"important",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"You still need to ",(0,i.kt)("a",{parentName:"p",href:"quickstart-cli#preparing-the-installation-seed-image"},"prepare the installation image")," so it can be used to boot and provision the machine.")))}p.isMDXComponent=!0}}]);
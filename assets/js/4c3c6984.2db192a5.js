"use strict";(self.webpackChunkelemental_docs=self.webpackChunkelemental_docs||[]).push([[4416],{16552:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"1.4","label":"1.4","banner":"unmaintained","badge":true,"noIndex":false,"className":"docs-version-1.4","isLast":false,"docsSidebars":{"docs":[{"type":"link","label":"Overview","href":"/1.4/","docId":"index","unlisted":false},{"type":"category","collapsible":true,"collapsed":false,"label":"Quickstarts","items":[{"type":"link","label":"Elemental the visual way","href":"/1.4/quickstart-ui","docId":"quickstart-ui","unlisted":false},{"type":"link","label":"Elemental the command line way","href":"/1.4/quickstart-cli","docId":"quickstart-cli","unlisted":false}]},{"type":"link","label":"Architecture","href":"/1.4/architecture","docId":"architecture","unlisted":false},{"type":"category","collapsible":true,"collapsed":true,"label":"Install/Upgrade","items":[{"type":"link","label":"Installation","href":"/1.4/installation","docId":"installation","unlisted":false},{"type":"link","label":"Upgrade","href":"/1.4/upgrade","docId":"upgrade","unlisted":false},{"type":"link","label":"Upgrade Lifecycle","href":"/1.4/upgrade-lifecycle","docId":"upgrade-lifecycle","unlisted":false},{"type":"link","label":"Customize Elemental Install","href":"/1.4/customizing","docId":"customizing","unlisted":false},{"type":"link","label":"Elemental plans","href":"/1.4/elemental-plans","docId":"elemental-plans","unlisted":false}]},{"type":"link","label":"Authentication","href":"/1.4/authentication","docId":"authentication","unlisted":false},{"type":"category","collapsible":true,"collapsed":true,"label":"Reference","items":[{"type":"link","label":"Cloud-config reference","href":"/1.4/cloud-config-reference","docId":"cloud-config-reference","unlisted":false},{"type":"link","label":"MachineRegistration reference","href":"/1.4/machineregistration-reference","docId":"machineregistration-reference","unlisted":false},{"type":"link","label":"MachineInventorySelectorTemplate reference","href":"/1.4/machineinventoryselectortemplate-reference","docId":"machineinventoryselectortemplate-reference","unlisted":false},{"type":"link","label":"ManagedOSImage reference","href":"/1.4/managedosimage-reference","docId":"managedosimage-reference","unlisted":false},{"type":"link","label":"ManagedOSVersionChannel reference","href":"/1.4/managedosversionchannel-reference","docId":"managedosversionchannel-reference","unlisted":false},{"type":"link","label":"ManagedOSVersion reference","href":"/1.4/managedosversion-reference","docId":"managedosversion-reference","unlisted":false},{"type":"link","label":"Cluster reference","href":"/1.4/cluster-reference","docId":"cluster-reference","unlisted":false},{"type":"link","label":"SeedImage reference","href":"/1.4/seedimage-reference","docId":"seedimage-reference","unlisted":false},{"type":"link","label":"Elemental Operator Helm Chart","href":"/1.4/elementaloperatorchart-reference","docId":"elementaloperatorchart-reference","unlisted":false},{"type":"link","label":"Kubernetes versions","href":"/1.4/kubernetesversions","docId":"kubernetesversions","unlisted":false},{"type":"link","label":"Smbios","href":"/1.4/smbios","docId":"smbios","unlisted":false},{"type":"link","label":"Hardware Labels","href":"/1.4/hardwarelabels","docId":"hardwarelabels","unlisted":false}]},{"type":"category","collapsible":true,"collapsed":true,"label":"Operator","items":[{"type":"link","label":"Inventory Management","href":"/1.4/inventory-management","docId":"inventory-management","unlisted":false},{"type":"link","label":"Machine Reset","href":"/1.4/reset","docId":"reset","unlisted":false}]},{"type":"category","collapsible":true,"collapsed":true,"label":"Backup","items":[{"type":"link","label":"Backup","href":"/1.4/backup","docId":"backup","unlisted":false},{"type":"link","label":"Restore","href":"/1.4/restore","docId":"restore","unlisted":false}]},{"type":"category","collapsible":true,"collapsed":true,"label":"How to","items":[{"type":"link","label":"Elemental behind proxy","href":"/1.4/elemental_behind_proxy","docId":"elemental_behind_proxy","unlisted":false},{"type":"link","label":"Customize hostname","href":"/1.4/hostname","docId":"hostname","unlisted":false},{"type":"category","collapsible":true,"collapsed":true,"label":"Customize networking","items":[{"type":"link","label":"Configure a VLAN","href":"/1.4/networking-vlans","docId":"networking-vlans","unlisted":false},{"type":"link","label":"Configure Wi-Fi","href":"/1.4/wifi","docId":"wifi","unlisted":false}],"href":"/1.4/networking"},{"type":"link","label":"Configure NTP","href":"/1.4/ntp","docId":"ntp","unlisted":false},{"type":"link","label":"How to use Elemental with Rancher and VMware","href":"/1.4/rancher-vmware","docId":"rancher-vmware","unlisted":false},{"type":"link","label":"Include cloud-config from removable devices","href":"/1.4/removable-device-cloudconfig","docId":"removable-device-cloudconfig","unlisted":false},{"type":"link","label":"Add a custom certificate","href":"/1.4/custom-certificate","docId":"custom-certificate","unlisted":false},{"type":"link","label":"Air-Gapped Installation","href":"/1.4/airgap","docId":"airgap","unlisted":false},{"type":"link","label":"Trusted Platform Module (TPM)","href":"/1.4/tpm","docId":"tpm","unlisted":false}]},{"type":"category","collapsible":true,"collapsed":true,"label":"Troubleshooting","items":[{"type":"link","label":"Support","href":"/1.4/troubleshooting-support","docId":"troubleshooting-support","unlisted":false},{"type":"link","label":"Rancher upgrades","href":"/1.4/troubleshooting-rancher-upgrades","docId":"troubleshooting-rancher-upgrades","unlisted":false},{"type":"link","label":"Restore","href":"/1.4/troubleshooting-restore","docId":"troubleshooting-restore","unlisted":false},{"type":"link","label":"Upgrade","href":"/1.4/troubleshooting-upgrade","docId":"troubleshooting-upgrade","unlisted":false},{"type":"link","label":"Reset","href":"/1.4/troubleshooting-reset","docId":"troubleshooting-reset","unlisted":false}]},{"type":"link","label":"Release Notes","href":"/1.4/release-notes","docId":"release-notes","unlisted":false}]},"docs":{"airgap":{"id":"airgap","title":"","description":"Install Elemental in an Air-Gapped Environment","sidebar":"docs"},"architecture":{"id":"architecture","title":"","description":"The Elemental stack can be divided in two main parts: the Elemental OS, an immutable and customizable OS which comprises the tools and the steps needed to prepare the Cloud Native OS image and perform the actual OS installation on the host, and the , that allows central management of the Elemental OS via Rancher, the Kubernetes way.","sidebar":"docs"},"authentication":{"id":"authentication","title":"","description":"Authentication happens during Machine onboarding, when the Machine registers to the","sidebar":"docs"},"backup":{"id":"backup","title":"","description":"Since Elemental runs as part of Rancher, the Elemental resources are bundled in the Rancher backup.","sidebar":"docs"},"cloud-config-reference":{"id":"cloud-config-reference","title":"","description":"Node OS images build using the Elemental Toolkit are expected","sidebar":"docs"},"cluster-reference":{"id":"cluster-reference","title":"","description":"A Cluster definition includes a kubernetesVersion and a list of machinePools to deploy the cluster to.","sidebar":"docs"},"custom-certificate":{"id":"custom-certificate","title":"","description":"How to add a custom certificate","sidebar":"docs"},"customizing":{"id":"customizing","title":"","description":"Elemental installed OS can be customized in three different non-exclusive ways","sidebar":"docs"},"elemental_behind_proxy":{"id":"elemental_behind_proxy","title":"","description":"Introduction","sidebar":"docs"},"elemental-plans":{"id":"elemental-plans","title":"","description":"Introduction","sidebar":"docs"},"elementaloperatorchart-reference":{"id":"elementaloperatorchart-reference","title":"","description":"The  is responsible for managing the Elemental versions and maintaining a machine inventory to assist with edge or bare metal installations.","sidebar":"docs"},"hardwarelabels":{"id":"hardwarelabels","title":"","description":"Hardware Labels","sidebar":"docs"},"hostname":{"id":"hostname","title":"","description":"Customize hostname","sidebar":"docs"},"index":{"id":"index","title":"","description":"Elemental is a software stack enabling centralized, full cloud-native OS management with Kubernetes.","sidebar":"docs"},"installation":{"id":"installation","title":"","description":"Overview","sidebar":"docs"},"inventory-management":{"id":"inventory-management","title":"","description":"Inventory Management","sidebar":"docs"},"kubernetesversions":{"id":"kubernetesversions","title":"","description":"Valid Versions","sidebar":"docs"},"machineinventoryselectortemplate-reference":{"id":"machineinventoryselectortemplate-reference","title":"","description":"The MachineInventorySelectorTemplate is the resource responsible of defining the matching criteria to pair an inventoried machine with a Cluster resource.","sidebar":"docs"},"machineregistration-reference":{"id":"machineregistration-reference","title":"","description":"The MachineRegistration resource is the responsible of defining a machine registration end point. Once created it generates a registration URL used by nodes to register so they are inventoried.","sidebar":"docs"},"managedosimage-reference":{"id":"managedosimage-reference","title":"","description":"The ManagedOSImage resource is responsible of defining an OS image or image version that needs to be applied to each node in a set of targeted Clusters.","sidebar":"docs"},"managedosversion-reference":{"id":"managedosversion-reference","title":"","description":"The ManagedOSVersion resource is responsible of defining an OS image version that can be used with SeedImage or ManagedOSImage resources.","sidebar":"docs"},"managedosversionchannel-reference":{"id":"managedosversionchannel-reference","title":"","description":"The ManagedOSVersionChannel resource is responsible of defining OS image channel.","sidebar":"docs"},"networking":{"id":"networking","title":"","description":"Network configuration with Elemental","sidebar":"docs"},"networking-vlans":{"id":"networking-vlans","title":"","description":"How to configure a VLAN","sidebar":"docs"},"ntp":{"id":"ntp","title":"","description":"NTP configuration with Elemental","sidebar":"docs"},"quickstart-cli":{"id":"quickstart-cli","title":"","description":"Follow this guide to have an auto-deployed cluster via rke2/k3s and managed by Rancher","sidebar":"docs"},"quickstart-ui":{"id":"quickstart-ui","title":"","description":"The following instructions need Rancher 2.8.x at least.","sidebar":"docs"},"rancher-vmware":{"id":"rancher-vmware","title":"","description":"Excerpt","sidebar":"docs"},"release-notes":{"id":"release-notes","title":"","description":"The Elemental project stack is made of various components such as the Operator and UI for example.","sidebar":"docs"},"removable-device-cloudconfig":{"id":"removable-device-cloudconfig","title":"","description":"How to include cloud-config files from removable devices","sidebar":"docs"},"reset":{"id":"reset","title":"","description":"Machine Reset","sidebar":"docs"},"restore":{"id":"restore","title":"","description":"Follow this guide to restore an Elemental configuration from a backup with Rancher.","sidebar":"docs"},"seedimage-reference":{"id":"seedimage-reference","title":"","description":"A SeedImage resource allows to build an ISO that can be used to install Elemental onto a node.","sidebar":"docs"},"smbios":{"id":"smbios","title":"","description":"Introduction","sidebar":"docs"},"tpm":{"id":"tpm","title":"","description":"Trusted Platform Module (TPM, also known as ISO/IEC 11889) is an international standard for a secure cryptoprocessor, a dedicated microcontroller designed to secure hardware through integrated cryptographic keys. The term can also refer to a chip conforming to the standard.","sidebar":"docs"},"troubleshooting-rancher-upgrades":{"id":"troubleshooting-rancher-upgrades","title":"","description":"Upgrading to Rancher v2.7.2 will fail if Elemental clusters are defined. The rancher pod gets stuck in a crash loop (see https://github.com/rancher/rancher/issues/41145).","sidebar":"docs"},"troubleshooting-reset":{"id":"troubleshooting-reset","title":"","description":"Each MachineInventory with the elemental.cattle.io/resettable: \\"true\\" annotation will trigger the execution of a reset plan, upon deletion.","sidebar":"docs"},"troubleshooting-restore":{"id":"troubleshooting-restore","title":"","description":"When a restore is performed, do not restart the rancher-system-agent on elemental nodes as it can stale and end with the following error:","sidebar":"docs"},"troubleshooting-support":{"id":"troubleshooting-support","title":"","description":"The elemental-support is a utility program that collects all information about the machine where the Elemental stack is running.","sidebar":"docs"},"troubleshooting-upgrade":{"id":"troubleshooting-upgrade","title":"","description":"For a high level overview of the upgrade lifecycle and components, please refer to the related document.","sidebar":"docs"},"upgrade":{"id":"upgrade","title":"","description":"All components in Elemental are managed using Kubernetes. Below is how","sidebar":"docs"},"upgrade-lifecycle":{"id":"upgrade-lifecycle","title":"","description":"Upgrade Flow","sidebar":"docs"},"wifi":{"id":"wifi","title":"","description":"How to configure Wi-Fi","sidebar":"docs"}}}')}}]);
"use strict";(self.webpackChunkelemental_docs=self.webpackChunkelemental_docs||[]).push([[8911],{1748:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"stable","label":"Stable","banner":null,"badge":true,"noIndex":false,"className":"docs-version-stable","isLast":true,"docsSidebars":{"docs":[{"type":"link","label":"Overview","href":"/","docId":"index"},{"type":"category","collapsible":true,"collapsed":false,"label":"Quickstarts","items":[{"type":"link","label":"Elemental the visual way","href":"/quickstart-ui","docId":"quickstart-ui"},{"type":"link","label":"Elemental the command line way","href":"/quickstart-cli","docId":"quickstart-cli"}]},{"type":"link","label":"Architecture","href":"/architecture","docId":"architecture"},{"type":"category","collapsible":true,"collapsed":false,"label":"Install/Upgrade","items":[{"type":"link","label":"Installation","href":"/installation","docId":"installation"},{"type":"link","label":"Upgrade","href":"/upgrade","docId":"upgrade"},{"type":"link","label":"Customize Elemental Install","href":"/customizing","docId":"customizing"},{"type":"link","label":"Elemental plans","href":"/elemental-plans","docId":"elemental-plans"}]},{"type":"category","collapsible":true,"collapsed":false,"label":"Reference","items":[{"type":"link","label":"Cloud-config reference","href":"/cloud-config-reference","docId":"cloud-config-reference"},{"type":"link","label":"Machineregistration reference","href":"/machineregistration-reference","docId":"machineregistration-reference"},{"type":"link","label":"MachineInventorySelectorTemplate reference","href":"/machineinventoryselectortemplate-reference","docId":"machineinventoryselectortemplate-reference"},{"type":"link","label":"Cluster reference","href":"/cluster-reference","docId":"cluster-reference"},{"type":"link","label":"SeedImage reference","href":"/seedimage-reference","docId":"seedimage-reference"},{"type":"link","label":"Elemental Operator Helm Chart","href":"/elementaloperatorchart-reference","docId":"elementaloperatorchart-reference"},{"type":"link","label":"Kubernetes versions","href":"/kubernetesversions","docId":"kubernetesversions"},{"type":"link","label":"Smbios","href":"/smbios","docId":"smbios"},{"type":"link","label":"Hardware Labels","href":"/hardwarelabels","docId":"hardwarelabels"}]},{"type":"category","collapsible":true,"collapsed":false,"label":"Operator","items":[{"type":"link","label":"Inventory Management","href":"/inventory-management","docId":"inventory-management"}]},{"type":"category","collapsible":true,"collapsed":false,"label":"Backup","items":[{"type":"link","label":"Backup","href":"/backup","docId":"backup"},{"type":"link","label":"Restore","href":"/restore","docId":"restore"}]},{"type":"category","collapsible":true,"collapsed":false,"label":"How to","items":[{"type":"link","label":"Configure Wi-Fi","href":"/wifi","docId":"wifi"},{"type":"link","label":"Elemental behind proxy","href":"/elemental_behind_proxy","docId":"elemental_behind_proxy"},{"type":"link","label":"How to use Elemental with Rancher and VMware","href":"/rancher-vmware","docId":"rancher-vmware"}]},{"type":"category","collapsible":true,"collapsed":false,"label":"Troubleshooting","items":[{"type":"category","collapsible":true,"collapsed":false,"label":"Rancher","items":[{"type":"link","label":"Rancher upgrades","href":"/troubleshooting-rancher-upgrades","docId":"troubleshooting-rancher-upgrades"}]},{"type":"category","collapsible":true,"collapsed":false,"label":"Restore","items":[{"type":"link","label":"Restore","href":"/troubleshooting-restore","docId":"troubleshooting-restore"}]}]}]},"docs":{"architecture":{"id":"architecture","title":"","description":"The Elemental stack can be divided in two main parts: the Elemental OS, an immutable and customizable OS which comprises the tools and the steps needed to prepare the Cloud Native OS image and perform the actual OS installation on the host, and the , that allows central management of the Elemental OS via Rancher, the Kubernetes way.","sidebar":"docs"},"backup":{"id":"backup","title":"","description":"Follow this guide to create backup for Elemental configuration installed together with Rancher.","sidebar":"docs"},"cloud-config-reference":{"id":"cloud-config-reference","title":"","description":"All custom configuration applied on top of a fresh deployment should come","sidebar":"docs"},"cluster-reference":{"id":"cluster-reference","title":"","description":"A Cluster definition includes a kubernetesVersion and a list of machinePools to deploy the cluster to.","sidebar":"docs"},"customizing":{"id":"customizing","title":"","description":"Elemental Teal images can be customized in different ways.","sidebar":"docs"},"elemental_behind_proxy":{"id":"elemental_behind_proxy","title":"","description":"Introduction","sidebar":"docs"},"elemental-plans":{"id":"elemental-plans","title":"","description":"Introduction","sidebar":"docs"},"elementaloperatorchart-reference":{"id":"elementaloperatorchart-reference","title":"","description":"The  is responsible for managing the Elemental versions and maintaining a machine inventory to assist with edge or bare metal installations.","sidebar":"docs"},"hardwarelabels":{"id":"hardwarelabels","title":"","description":"Hardware Labels","sidebar":"docs"},"index":{"id":"index","title":"","description":"Elemental is a software stack enabling a centralized, full cloud-native OS management with Kubernetes.","sidebar":"docs"},"installation":{"id":"installation","title":"","description":"Overview","sidebar":"docs"},"inventory-management":{"id":"inventory-management","title":"","description":"Inventory Management","sidebar":"docs"},"kubernetesversions":{"id":"kubernetesversions","title":"","description":"Valid Versions","sidebar":"docs"},"machineinventoryselectortemplate-reference":{"id":"machineinventoryselectortemplate-reference","title":"","description":"The MachineInventorySelectorTemplate is the resource responsible of defining the matching criteria to pair an inventoried machine with a Cluster resource.","sidebar":"docs"},"machineregistration-reference":{"id":"machineregistration-reference","title":"","description":"The MachineRegistration resource is the responsible of defining a machine registration end point. Once created it generates a registration URL used by nodes to register so they are inventoried.","sidebar":"docs"},"quickstart-cli":{"id":"quickstart-cli","title":"","description":"Follow this guide to have an auto-deployed cluster via rke2/k3s and managed by Rancher","sidebar":"docs"},"quickstart-ui":{"id":"quickstart-ui","title":"","description":"This quickstart will show you how to deploy the Elemental plugin into an existing Rancher Manager instance.","sidebar":"docs"},"rancher-vmware":{"id":"rancher-vmware","title":"","description":"Excerpt","sidebar":"docs"},"restore":{"id":"restore","title":"","description":"Follow this guide to restore an Elemental configuration from a backup with Rancher.","sidebar":"docs"},"seedimage-reference":{"id":"seedimage-reference","title":"","description":"A SeedImage definition is used to build an ISO that can be used to install Elemental Teal onto a node.","sidebar":"docs"},"smbios":{"id":"smbios","title":"","description":"Introduction","sidebar":"docs"},"tpm":{"id":"tpm","title":"","description":"Trusted Platform Module (TPM, also known as ISO/IEC 11889) is an international standard for a secure cryptoprocessor, a dedicated microcontroller designed to secure hardware through integrated cryptographic keys. The term can also refer to a chip conforming to the standard."},"troubleshooting-rancher-upgrades":{"id":"troubleshooting-rancher-upgrades","title":"","description":"Upgrading to Rancher v2.7.2 will fail if Elemental clusters are defined. The rancher pod gets stuck in a crash loop (see https://github.com/rancher/rancher/issues/41145).","sidebar":"docs"},"troubleshooting-restore":{"id":"troubleshooting-restore","title":"","description":"When a restore is performed, do not restart the rancher-system-agent on elemental nodes as it can stale and end with the following error:","sidebar":"docs"},"upgrade":{"id":"upgrade","title":"","description":"All components in Elemental are managed using Kubernetes. Below is how","sidebar":"docs"},"wifi":{"id":"wifi","title":"","description":"How to configure Wi-Fi","sidebar":"docs"}}}')}}]);
---
sidebar_position: 2
---


# Embodied Database / Sources

### What external data sources are available for getting embodied carbon for Cloud VM types?​

The following is the list of public sources where you can find the embodied carbon based for VM types for a cloud provider (AWS, Azure and Google Cloud):

1. (Cloud Carbon Footprint - Embodied Emissions constants)[https://docs.google.com/spreadsheets/d/1k-6JtneEu4E9pXQ9QMCXAfyntNJl8MnV2YzO4aKHh-0/edit#gid=0]

To use the above resource, you need to find the VM type used for running the application. Let's assume, you are using an "A8 V2" machine on Azure. To get embodied carbon, lookup the excel and find "A8 V2" in the virtual machine column and get the embodied carbon value from "Total Platform Scope 3 Emissions (kgCO₂eq)" column for the selected entry.

### What external data sources are available for getting embodied carbon for embodied emissions of laptops and computers?​

For laptops or client devices, the specific manufacturer would have given the embodied emissions values. For instance, Dell provides (these values)[https://i.dell.com/sites/content/corporate/corp-comm/en/Documents/dell-laptop-carbon-footprint-whitepaper.pdf] for its laptops. 

Another general source of information is the (Boavista website)[https://dataviz.boavizta.org/].

### What if the data for embodied carbon is not available for my hardware/server configuration?​

When the data is not available, you can use the [manual approach](https://sci-data.greensoftware.foundation/M/ManualEmbodiedLookupProcess) to get the data for your hardware/server configuration.

#### References

Evaluating the carbon footprint of a software platform hosted in the cloud)[https://medium.com/teads-engineering/evaluating-the-carbon-footprint-of-a-software-platform-hosted-in-the-cloud-e716e14e060c]
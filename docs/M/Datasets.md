---
sidebar_position: 2
---


# Datasets

### What external data sources are available for getting embodied carbon for Cloud VM types?​

The following is the list of public sources where you can find the embodied carbon based for VM types for a cloud provider (AWS, Azure and Google Cloud):

1. [Cloud Carbon Footprint - Embodied Emissions constants](https://docs.google.com/spreadsheets/d/1k-6JtneEu4E9pXQ9QMCXAfyntNJl8MnV2YzO4aKHh-0/edit#gid=0)

To use the above resource, you need to find the VM type used for running the application. Let's assume, you are using an "A8 V2" machine on Azure. To get embodied carbon, lookup the excel and find "A8 V2" in the virtual machine column and get the embodied carbon value from "Total Platform Scope 3 Emissions (kgCO₂eq)" column for the selected entry.

2. [Climatiq API](https://www.climatiq.io/docs#cloud-computing)

Climatiq makes endpoints available to help you calculate the carbon footprint of the cloud resources you use. There are endpoints that estimate both the embodied emissions (meaning the emissions related to the manufacturing and disposal of the physical components, expressed per CPU hour over the expected lifetime of the hardware) and the electricity usage of the different components.

To use the API you need to use the VM instance endpoint. One of the key parameters that is required to get the embodied emissions value is the VM instance type which refers to the CPU architecture of the server that is hosting the workload. For example see below sample embodied estimate output.

~~~

    "embodied_cpu_estimate": {
            "co2e": 0.498944628,
            "co2e_unit": "kg",
            "co2e_calculation_method": "ar4",
            "co2e_calculation_origin": "source",
            "emission_factor": {
                "name": "AZURE - Embodied emissions - H-series - H8 - Haswell",
                "activity_id": "cpu-provider_azure-type_h_series_h8_haswell",
                "uuid": "1e5983ef-a134-417a-944a-3f1c93b9f61e",
                "id": "cpu-provider_azure-type_h_series_h8_haswell",
                "access_type": "public",
                "source": "CCF",
                "year": "2021",
                "region": "GLOBAL",
                "category": "Cloud Computing - CPU",
                "lca_activity": "upstream-end_of_life",
                "data_quality_flags": [
                    "notable_methodological_variance"
                ]
            },
~~~

3. [Microsoft Emissions Impact Dashboard](https://www.climatiq.io/docs#cloud-computing)




### What external data sources are available for getting embodied carbon for embodied emissions of laptops and computers?​

For laptops or client devices, the specific manufacturer would have given the embodied emissions values. For instance, Dell provides [these values](https://i.dell.com/sites/content/corporate/corp-comm/en/Documents/dell-laptop-carbon-footprint-whitepaper.pdf) for its laptops. 

Another general source of information is the [Boavista website](https://dataviz.boavizta.org/).

### What if the data for embodied carbon is not available for my hardware/server configuration?​

When the data is not available, you can use the [manual approach](https://sci-data.greensoftware.foundation/M/ManualEmbodiedLookupProcess) to get the data for your hardware/server configuration.

#### References

[Evaluating the carbon footprint of a software platform hosted in the cloud](https://medium.com/teads-engineering/evaluating-the-carbon-footprint-of-a-software-platform-hosted-in-the-cloud-e716e14e060c)
---
sidebar_position: 1
---

# Getting Started

This Open Data project provides details on various approaches on how to get the data sources from various data providers and public sources required for SCI calculation. The Open Data projects also provdies the methdology and the calculation guidelines for emobodied emissions.

Please note the data provided by the data providers are approximation based and the intent is to help calculate the SCI score. Once the SCI score is calculated, you can apply reduction principles across releases, to reduce the SCI score and the carbon emissions and improve energy efficiency for your software application.


# Quick Guide 
The quick guide shows how to use the SCI Open Data to get Energy (E) and Embodied (M) emissions,
Carbon Intensity (I) for the software application as per the SCI specification.

Let's take a simple example. Assume you want to calculate the SCI score for a software application running on Google Cloud VM. The VM configuration is e2-standard-4 (4 CPU, 16GB RAM) and running in us-east region.The software application scales by API and average monthly request is 10k.  

So now lets calculate the following -
1. Energy -  For Energy, we would first look at the approach listed in main page for [ E ](E).
We select [ API based techniques ](APIBased.md) and use one of the API vendors, [Climatiq] (https://www.climatiq.io/docs#cpu) which calculates C02e emissions directly based on CPU utilization data, VPCU and location details. We get CPU utilization data from cloud metrics. The API uses publicly available 
avereage data for carbon itensity for a given electricity grid based on the locationa and 
a mix of local energy sources.

By Calling the API, we get the C02e of the VCPU as 1,329 gC02e

2. Embodied emission -  For Energy, we would first look at the approach listed on the main page for [ M ](M).
We select  [ Lookup Embodied Database ](EmbodiedDatabase.md) and lookup embodied emission of the server type e2-standard-4. We get embodied carbon as 1230.3 kgCO₂eq






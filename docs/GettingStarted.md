---
sidebar_position: 1
---

# Getting Started

This open data project details various approaches on how to get the data sources from data providers and public sources that are required for SCI calculation. The Open Data project also provides the methodology and calculation guidelines for embodied emissions.

Please note that the data provided by the data providers are approximations intended to help calculate the SCI score. Once the SCI score is calculated, you can apply reduction principles across releases to reduce your carbon emissions and improve energy efficiency for your software application.


# Quick Guide 
The quick guide shows you how to use SCI open data to get energy (E), embodied (M) emissions and carbon intensity (I) for a software application.

Imagine you want to calculate the SCI score for a software application running on a Google Cloud VM. The VM configuration is e2-standard-4 (4 CPU, 16GB RAM) and running in the US-East region.The software application scales by API and the average monthly requests are 20k. 

So lets calculate the following -
- Energy -  For Energy, we first look at the approach listed in main page for [ E ](E).
We select [ API based techniques ](./E/APIBased.md) and use one of the API vendors, [Climatiq] (https://www.climatiq.io/docs#cpu) which calculates C02e emissions directly based on CPU utilization data, VPCU and location details. We get CPU utilization data from cloud metrics. The API uses publicly available 
avereage data for carbon itensity for a given electricity grid based on the location and 
a mix of local energy sources. By Calling the API, we get the C02e of the VCPU as 1,329 gC02e

- Embodied emission -  For Energy, we first look at the approach listed on the main page for [ M ](M).
We select  [ Lookup Embodied Database ](./M/EmbodiedDatabase.md) and lookup embodied emission of the server type e2-standard-4. We get embodied carbon as 1230.3 kgCO₂eq

- For Expected Lifespan (EL),  Time Reserved (TR), Resource Reserved (RR) , Total Resources (TR), we refer the main page of [Embodied Calculations](./M/MSubCalculations.md) for general guidelines to calculate the above values.
From the above [Embodied Calculations](./M/MSubCalculations.md) page, we infer the following 

    - EL as 4 years (Average life span for bare metal server)

    - TR as 1 Month (Time when the VM server was running for our application)

    - RR as 4 (Number of CPUs for our VM server, which is e2-standard-4 (4 CPU, 16GB RAM))

    - TR as 32 (total resources available in a bare metal server running e2-standard-4 instances.). 
For TR we do a lookup for e2-standard-4 machine in the Google Documentation https://cloud.google.com/compute/docs/general-purpose-machines#e2-standard and see the maximum vCPU that is supported is 32 vCPU through the e2-standard-32 machine.

- For R, we already have 20k API requests/per month

- SCI Calculation

    - SCI Equation =  ((E*I) + M) per R

    - For M, the equation  = TE * (TR/EL) * (RR/TR)

    - TE = Total Embodied Emissions, the sum of LCA emissions for hardware components, which we had calculated in Step 2. We have only included the server/hardware component running our application, but there might be other supporting infrastructures like racks, cooling water resources that we have excluded.

    - SCI Score = 0.226 gC02e per API Call.





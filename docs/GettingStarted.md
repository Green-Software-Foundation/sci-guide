---
sidebar_position: 1
---



# Quick Guide 
This quick guide shows you how to use the information present in this guidance project to calculate energy (E), embodied (M) emissions and carbon intensity (I) for a software application.

Imagine you want to calculate the SCI score for a software application running on a Google Cloud VM. The VM configuration is e2-standard-4 (4 CPU, 16GB RAM) and running in the US-East region.The software application scales by API and the average monthly requests are 20k. 

WE would calculate the SCI as follows:
- Energy - For energy, we check the [list of options](https://sci-data.greensoftware.foundation/E) and select [API based techniques](https://sci-data.greensoftware.foundation/E/APIBased). Next, we choose the API vendor  
[Climatiq](https://www.climatiq.io/docs#cpu) which calculates C02e emissions directly based on CPU utilisation data, VPCU and location details. We can get the CPU utilisation data from cloud metrics. The API uses publicly available average data for carbon intensity for a given electricity grid, based on the location and a mix of local energy sources. When we call the API, the C02e of the VCPU comes back as 1,329 gC02e

- Embodied emissions - For embodied emissions, we check the [list of options](https://sci-data.greensoftware.foundation/M) and select [Lookup Embodied Database](https://sci-data.greensoftware.foundation/M/EmbodiedDatabase). When we look up the embodied emission of the server type e2-standard-4, we get 1230.3 kgCO₂eq

- To calculate expected lifespan (EL), time reserved (TR), resource reserved (RR) and total resources (TR), check the [embodied calculations](https://sci-data.greensoftware.foundation/M/MSubCalculations) page for general guidelines. We find the following values:

    - The EL is 4 years (average lifespan for bare metal server)

    - The TR is 1 month (time when the VM server was running for our application)

    - The RR is 4 (number of CPUs for our VM server, which is e2-standard-4 (4 CPU, 16GB RAM))

    - The TR is 32 (total resources available in a bare metal server running e2-standard-4 instances)

- For TR we do a lookup for an e2-standard-4 machine in the [Google documentation](https://cloud.google.com/compute/docs/general-purpose-machines#e2-standard) and see the maximum vCPU that is supported is 32 vCPU through the e2-standard-32 machine.

- For R, we already have 20k API requests/per month

- SCI Calculation

    - SCI Equation =  ((E*I) + M) per R

    - M = TE (TR/EL) (RR/TR)

    - TE = Total Embodied Emissions (the sum of LCA emissions for hardware components which we calculated in step 2. We have only included the server/hardware component running our application, but there might be other supporting infrastructures like racks, cooling water resources that we have excluded).

    - SCI Score = 0.226 gC02e per API Call.


# Links

- [Press Release FAQ](https://github.com/Green-Software-Foundation/pr-faqs/blob/main/live/green-software-principles.pr-faq.md)
- [Main Website](https://training.greensoftware.foundation)
- [Main GitHub Repository](https://github.com/Green-Software-Foundation/sci-guidance)



**Please submit any comments you have [here](https://github.com/Green-Software-Foundation/sci-data/issues/new?assignees=atg-abhishek%2C+srini1978%2C+Henry-WattTime%2C+navveenb&labels=Guidelines+Feedback&template=guidelines-feedback.md&title=Guidelines+Feedback)**


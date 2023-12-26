## Overview

Collaborative use case with Dow and Microsoft performed by Tammy McClellan and Srinivasan Rakhunathan from Microsoft. Eric Friedeberg, Brandon Smith, and Samantha Beauchamp from Dow. 

Solution chosen is a current solution in development and is the measurement of carbon in both Neo4J and TigerGraph graph databases. Information was collected via load tests by calling an API deployed in an app service.

## Architecture for the system under consideration
<img width="373" alt="UseCaseArchitecture" src="https://user-images.githubusercontent.com/53481728/196241193-d51bfd26-0dbe-44ec-a13c-892d2c1484be.png">


### Technical details of the components in the architecture

Two different graph databases were measured along with the APIs to call them. The following components were included:

	• Neo4J: A graph database management system developed by Neo4J, Inc running on a VM in Azure.
	• TigerGraph: A platform for advanced analytics and machine learning on connected data running on a VM in Azure.
	• App Service plan: An App Service plan provides the managed virtual machines (VMs) that host your app. All apps associated with a plan run on the same VM instances.
	• App Service app: Azure App Service is a fully managed platform for creating and deploying cloud applications.

## Procedure

### (What) Software boundary

_The boundary of the application is:

- API
- Graph DB

### (Scale) Functional unit 

For this case study, we have considered R to be per API call with 32,000 calls over a 1 hour period. Based on the load test approach taken, the functional unit is the scaling factor for this infrastructure and hence this is a compound functional unit.

### (How) Quantification method

#### Energy (E)  

Energy was used by measuring CPU and memory utilization and using a model of Thermal Design Power (TDP) of the processors, memory and storage.

The equation used to model the energy consumption is:
P[kwH] = (Power consumed by CPU or Pc Number of cores + Power consumed by Memory or Pr + Power consumed by GPU or Pg Number of GPUs)/1000
	• CPU Utilization doesn’t scale linearly with power consumption, we will use the power curve as described in the [article](https://medium.com/teads-engineering/building-an-aws-ec2-carbon-emissions-dataset-3f0fd76c98ac)
	• TDP of server used in Azure is [Intel Xeon Platinum 8380 Processor](https://www.intel.com/content/www/us/en/products/sku/212287/intel-xeon-platinum-8380-processor-60m-cache-2-30-ghz/specifications.html?wapkw=intel%20xeon%20platinum%208370c) for Graph DBs and [Intel Xeon Platinum 8270 Processor](https://www.intel.com/content/www/us/en/products/sku/192482/intel-xeon-platinum-8270-processor-35-75m-cache-2-70-ghz/specifications.html) for the APIs
	• [From this article](https://www.crucial.com/support/articles-faq-memory/how-much-power-does-memory-use), it shows that RAM consumes 0.38kwh/GB. So a 32G of RAM allocated for each VM, would equate to 32 * 0.38 = 12.16 kwh

#### Intensity was used by utilizing the Carbon Aware SDK and retrieving current emissions for each Azure region.

#### Embodied Carbon (M)

The equation to calculate M = TE * (TR/EL) * (RR/TR)
Where:
	• TE = Total Embodied Emissions, the sum of LCA emissions for all hardware components associated with the application server.
	• TR = Time Reserved, the length of time the hardware is reserved for use by the software.
	• EL = Expected Lifespan, the anticipated time that the equipment will be installed.
	• RR = Resources Reserved, the number of resources reserved for use by the software.
	• TR = Total Resources, the total number of resources available.

### (Quantify) SCI Value Calculation

#### TigerGraph DB
Memory Allocation = 32G
vCPU Allocation = 8
CPU Utilization = 17.12
Memory Utilization = 6.2

E-CPU = ((270*.4) ) x 1) = 108 w / 1000 = 0.108 kwh	(TDP * coefficient, converted to kwh)
E-Mem =  ((0.38 * 6.2) x 1) = 2.36 w / 1000 = 0.054 kwh	(power consumption per gig * gig memory utilized, converted to kwh)
Total E = 0.110 kwh	0.108 + .0.054

I - 554g (East US & North Central) - Collected on 10/27/2022

M=1533.12 * (1/35040) * (2/64)= 0.0014kg, ~1.4 gCO2e	 ((total embodied coefficient * (1 hour/3 years of use) * (instance memory / platform Memory) )
M=1533.12 * (1/35040) * (1/8) = 0.0054kg, 5.47gCO2e	((Total Embodied Coefficient * (1 hour/3 years of use) * (instance CPU/ platform CPU) )
Total M = 6.87	1.4 + 5.47

> SCI Total for TigerGraph DB = (0.110 kwh * 554 gCO2e/KwH) + 6.87 gCO2e = 67.81 gCO2e


#### TigerGraph API
Memory allocation = 1.75
CPU Utilization = 25.0
Memory Utilization = 70% 

1.75G-1.22 = 0.53 (Memory allocated - Memory used) = what is available

E-CPU = (205*.4) ) x 1 = 82 w / 1000 = 0.082 kwh	(converted number to kilowatts (TDP * coefficient)
E-Mem =  (.38 * 1.22) x 1  = 0.4636 w / 1000 = .00046 kwh	(power consumption * memory utilized)
Total E = 0.0824 kwh	0.082 + .00046

I - 554g (East US & North Central) - Collected on 10/27/2022

M=1216.62 * (1/35040) * (2/64)= 0.0012kg, 1.12 gCO2e	 ((total embodied coefficient * (1 hour/3 years of use) * (instance memory / platform memory) )
M=1216.62 * (1/35040) * (1/8) =  0.0043  ~4.34 gCO2e	((total embodied coefficient * (1 hour/3 years of use) * (Instance CPU/ platform CPU) )
Total M =5.46 gCO2e	CPU + Memory 1.12 + 4.34 

> SCI Total TigerGraph API - (0.0824 kwh * 554 gCO2e/KwH) + 5.46 gCO2e = 51.10 gCO2e



### Total Tiger DB + API = 118.91	(67.81 + 51.10)

#### Neo4J DB
Memory Allocation = 32G
vCPU Allocation = 8

vCPU Utilized = 28.05
Memory Utilized= 32G - 25.63 (Min Available Mem) = 6.3


E-CPU = (270*.5) x 1) = 135 w / 1000 = 0.135 kwh	(converted number to kilowatts (TDP * Coefficient)
E-Mem =  (.38 * 6.3) x 1 = 2.40 w / 1000 =0.024kwh	(power consumption * memory utilized)
Total E=0.159 kwh	0.135 +0.024

I - 554g (East US & North Central)

M=1533.12 * (1/35040) * (2/64)=  Memory 0.0014, ~1.40  gCO2e  	((total embodied coefficient * (1 hour/3 years of use) * (instance memory / platform memory) )
M=1533.12 * (1/35040) * (1/8) = CPU 0.0054kg, ~5.47 gCO2e	((total embodied coefficient * (1 hour/3 years of use) * (Instance CPU/ platform CPU) )

Total M 6.87  gCO2e	CPU + memory 1.12 + 4.34 


> SCI = Total Neo4J DB = (0.159 kwh * 554 gCO2e/kwh) + 6.87 gCO2e = 94.95 gCO2e

#### Neo4J API
Memory allocation = 1.75
CPU Utilization = 14
Memory Utilization = 65% 

1.75 * 0.38 = 0.665 watts (Memory allocated * kwh Consumed)
1.75G-1.13 = 0.62 (Memory allocated - Memory used) = what is available

E-CPU = (205*.8) )x 1 = 164 w / 1000 = 0.164 kwh	(converted number to kilowatts (TDP * coefficient)
E-Mem =  (0.38* 1.13) x 1= 43 kwh / 1000 = 1000 .00043 kwh	(power consumption * memory utilized)
Total E = 0.1644 kgCO2e/kwh	0.164 + .00043

I - 554 gCO2e (East US & North Central)

M=1216.62 * (1/35040) * (2/64)=  Memory 0.0011kg, ~1.12g  gCO2e	((total embodied coefficient * (1 hour/3 years of use) * (Instance CPU/ platform CPU) )
M=1216.62 * (1/35040) * (1/8) = CPU 0.0043kg  ~4.34 gCO2e	((total embodied coefficient * (1 hour/3 years of use) * (Instance CPU/ platform CPU) )
Total M  5.46 gCO2e	CPU + memory 

> SCI Total Neo4J API = (0.1644 kwh * 554 gCO2e/kwh) + 5.46 gCO2e = 96.5 gCO2e


### Total Neo4J DB + API = 191.44	(94.95 + 96.5)


# Total SCI	Tiger Graph DB + API, Neo4J DB + API
# 321.35 gCo2eq	 (67.81 + 51.10 + 94.95 + 96.5)

## This is equivalent to:
![image](https://user-images.githubusercontent.com/53481728/200390651-74ec5b0e-fe17-4307-b0a0-81b20278e2a4.png)

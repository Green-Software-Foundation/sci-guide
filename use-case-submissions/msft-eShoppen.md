# Case Study Template

## Overview

* The eShop Web application is a web application built on Asp.Net .It is built with monolithic architecture and follows MVC Design pattern
* The application uses a relational database for storing data
* The business use cases built demonstrates a simplified eCommerce site.
* The case study focuses on calculating the Software Carbon Intensity (SCI) value of the application using the [formula](https://github.com/Green-Software-Foundation/software_carbon_intensity/blob/main/Software_Carbon_Intensity/Software_Carbon_Intensity_Specification.md#methodology-summary) as defined in the latest version of the [specification](https://github.com/Green-Software-Foundation/software_carbon_intensity/blob/main/Software_Carbon_Intensity/Software_Carbon_Intensity_Specification.md)

## Architecture for the system under consideration

![image](https://user-images.githubusercontent.com/10396742/179341785-16598cc8-697c-49d1-8ae2-8a8acba5813b.png)

### Technical details of the components in the architecture

The architecture consists of the following components.

* App Service plan: An App Service plan provides the managed virtual machines (VMs) that host your app. All apps associated with a plan run on the same VM instances.

* App Service app: Azure App Service is a fully managed platform for creating and deploying cloud applications.

* Azure SQL Database: SQL Database is a relational database-as-a-service in the cloud. SQL Database shares its code base with the Microsoft SQL Server database engine. Depending on your application requirements, you can also use Azure Database for MySQL or Azure Database for PostgreSQL. These are fully managed database services based on the open-source MySQL Server and Postgres database engines.

## Sites for Software Sustainability Actions

_For each of the following sub-sections, indicate **where** and **how** actions can be taken in the following categories_:

### Energy Efficiency 

1. _site of action_
2. _description of the action_

### Hardware Efficiency

1. _site of action_
2. _description of the action_

### Carbon Awareness

1. _site of action_
2. _description of the action_

## Procedure

### (What) Software boundary

** Included
* App server for the Web application
* Database server
* Front end browser .This is the browser client on the device that is displaying the application to the end users on their desktop/mobile/laptop etc
* Network traffic between browser client and application server and back
* Network traffic between application servers and databases.

** Excluded
The following components and their carbon emissions have been excluded from the SCI calculation.

* Test infrastructure: These include the load test resources that were used to simulate virtual users and http requests to the web server. Since the infrastructure and the associated energy usage do not fit into the same functional unit scale as defined in the SCI formula, these components will be excluded from the software’s SCI calculation. However the calculation for this infrastructure can be done in the same manner in which we have done for the production infrastructure with a different scaling factor

### (Scale) Functional unit 

For this case study, we have considered R to be per 500 users  over a 1 hour period with 50 concurrent users.  Based on the load test approach we have taken, the functional unit is the scaling factor for this infrastructure  and hence this is a compound functional unit. 



### (How) Quantification method

####  App server for Web application

#####  Energy (`E`)

The Quantification method used for calculating energy value is **Calculate**. We are measuring CPU utilization of the app servers and then using a model based on the Thermal Design Power (TDP) of the processors, number of cores etc to **estimate** the power consumption.

The equation used to model the energy consumption is:

P[kwH] = (Power consumed by CPU or Pc Number of cores + Power consumed by Memory or Pr + Power consumed by GPU or Pg Number of GPUs)/1000

* CPU Utilization doesn’t scale linearly with power consumption, we will use the power curve as described in the [SCI Data Project “[E] Energy Estimation from Utilization Model” model](https://docs.google.com/spreadsheets/d/1Viv94rMKH-fJrfD9Nn9_qkiAg1PDfIfJUAHRX9slG7A/edit#gid=526989613)
* TDP of server used in Azure App server Premium configuration (P2v2 ) -2nd Generation Intel® Xeon® Platinum 8272CL (Cascade Lake)= 205 W ( [https://ark.intel.com/content/www/us/en/ark/products/192482/intel-xeon-platinum-8270-processor-35-75m-cache-2-70-ghz.html](https://ark.intel.com/content/www/us/en/ark/products/192482/intel-xeon-platinum-8270-processor-35-75m-cache-2-70-ghz.html))
* From specs, we found that Power consumed by 4GB memory is close to 1.45 W and that by 8 GB memory is approximately 2.45 W. Also from this [article](https://medium.com/teads-engineering/estimating-aws-ec2-instances-power-consumption-c9745e347959) we can consider power consumed is approx 0.38 W/GB or close to 2.6 Watts.Since the energy values for memory are much lower than the calculated energy values for processors or CPUs, we consider these values negligible. Pr ~0
* No GPU was used hence Pg ~0


#####  Carbon Intensity (`I`)

* We will use regional yearly averages.
* The region the application was run in was India.
* We will source the Carbon Intensity from the SCI Data project and the [[I] Regional Yearly Marginal Carbon Intensity](https://docs.google.com/spreadsheets/d/1Viv94rMKH-fJrfD9Nn9_qkiAg1PDfIfJUAHRX9slG7A/edit#gid=1582216595) data set.

##### Embodied Carbon (`M`)

The equation to calculate `M = TE * (TR/EL) * (RR/TR)`

Where:

* TE = Total Embodied Emissions, the sum of LCA emissions for all hardware components associated with the application server.
* TR = Time Reserved, the length of time the hardware is reserved for use by the software.
* EL = Expected Lifespan, the anticipated time that the equipment will be installed.
* RR = Resources Reserved, the number of resources reserved for use by the software.
* TR = Total Resources, the total number of resources available.

For this component:

* TE: We will source the embodied carbon estimates for the servers from the [Cloud Carbon Footprint Coefficient](https://github.com/cloud-carbon-footprint/cloud-carbon-coefficients/blob/main/output/coefficients-azure-embodied.csv) Data Set.
* TR: 1 hr.
* EL: We will assume a 4 year lifespan or 35,040 hrs.
* RR: A virtual machine with 2 vCPUs was used, this data was sourced from [Cloud Carbon Footprint Azure Instances Coefficients](https://github.com/cloud-carbon-footprint/cloud-carbon-coefficients/blob/main/data/azure-instances.csv).
* TR: The bare metal host is split up into 16 vCPUs in total. This data was sourced from the [Cloud Carbon Footprint Azure Instances Coefficients](https://github.com/cloud-carbon-footprint/cloud-carbon-coefficients/blob/main/data/azure-instances.csv).

####  Database server for Web application

The database server used for the load test is Standard Gen 5 2 vCore 10 GB RAM machine from Azure SQL 


##### Energy (`E`)

The Quantification method used for calculating energy value is **Calculate**. We are measuring CPU utilization of the database servers and then using a model based on the Thermal Design Power (TDP) of the processors, number of cores etc to **estimate** the power consumption.

The equation used to model the energy consumption is:

P[kwH] = (Power consumed by CPU or Pc Number of cores + Power consumed by Memory or Pr + Power consumed by GPU or Pg Number of GPUs)/1000

* CPU Utilization doesn’t scale linearly with power consumption, we will use the power curve as described in the [SCI Data Project “[E] Energy Estimation from Utilization Model” model](https://docs.google.com/spreadsheets/d/1Viv94rMKH-fJrfD9Nn9_qkiAg1PDfIfJUAHRX9slG7A/edit#gid=526989613)
* TDP of server used in Azure SQL server [Gen 5](https://azure.microsoft.com/en-us/pricing/details/azure-sql-database/single/#pricing) configuration - Intel SP8160 (Skylake)= 150 W ( [https://ark.intel.com/content/www/us/en/ark/products/192482/intel-xeon-platinum-8270-processor-35-75m-cache-2-70-ghz.html](https://www.intel.com/content/www/us/en/products/sku/120501/intel-xeon-platinum-8160-processor-33m-cache-2-10-ghz/specifications.html))
* From specs, we found that Power consumed by 4GB memory is close to 1.45 W and that by 10 GB memory is approximately 4 W. Also from this [article](https://medium.com/teads-engineering/estimating-aws-ec2-instances-power-consumption-c9745e347959) we can consider power consumed is approx 0.38 W/GB or close to 2.6 Watts.Since the energy values for memory are much lower than the calculated energy values for processors or CPUs, we consider these values negligible. Pr ~0
* No GPU was used hence Pg ~0


##### Carbon Intensity (`I`)

* We will use regional yearly averages.
* The region the application was run in was India.
* We will source the Carbon Intensity from the SCI Data project and the [[I] Regional Yearly Marginal Carbon Intensity](https://docs.google.com/spreadsheets/d/1Viv94rMKH-fJrfD9Nn9_qkiAg1PDfIfJUAHRX9slG7A/edit#gid=1582216595) data set.

##### Embodied Carbon (`M`)

The equation to calculate `M = TE * (TR/EL) * (RR/TR)`

Where:

* TE = Total Embodied Emissions, the sum of LCA emissions for all hardware components associated with the database server.
* TR = Time Reserved, the length of time the hardware is reserved for use by the software.
* EL = Expected Lifespan, the anticipated time that the equipment will be installed.
* RR = Resources Reserved, the number of resources reserved for use by the software.
* TR = Total Resources, the total number of resources available.

For this component:

* TE: We will source the embodied carbon estimates for the servers from the [Cloud Carbon Footprint Coefficient](https://github.com/cloud-carbon-footprint/cloud-carbon-coefficients/blob/main/output/coefficients-azure-embodied.csv) Data Set.
* TR: 1 hr.
* EL: We will assume a 4 year lifespan or 35,040 hrs.
* RR: A virtual machine with 2 vCPUs was used, this data was sourced from [Cloud Carbon Footprint Azure Instances Coefficients](https://github.com/cloud-carbon-footprint/cloud-carbon-coefficients/blob/main/data/azure-instances.csv).
* TR: The bare metal host is split up into 16 vCPUs in total. This data was sourced from the [Cloud Carbon Footprint Azure Instances Coefficients](https://github.com/cloud-carbon-footprint/cloud-carbon-coefficients/blob/main/data/azure-instances.csv).


#### Front End Browser for Web application

#####  Energy (`E`)

The Quantification method used for calculating energy value is **Calculate**. We are measuring CPU utilization of the laptop client device and then using a model based on the Thermal Design Power (TDP) of the processors, number of cores etc to **estimate** the power consumption.

The equation used to model the energy consumption is:

P[kwH] = (Power consumed by CPU or Pc Number of cores + Power consumed by Memory or Pr + Power consumed by GPU or Pg Number of GPUs)/1000

* CPU Utilization doesn’t scale linearly with power consumption, we will use the power curve as described in the [SCI Data Project “[E] Energy Estimation from Utilization Model” model](https://docs.google.com/spreadsheets/d/1Viv94rMKH-fJrfD9Nn9_qkiAg1PDfIfJUAHRX9slG7A/edit#gid=526989613)
* TDP of laptop used (Laptop- 11th Generation Intel Core i7-1185G7 vPro /32 GB RAM) = 28 W 
* From specs, we found that Power consumed by 4GB memory is close to 1.45 W and that by 8 GB memory is approximately 2.45 W. Also from this [article](https://medium.com/teads-engineering/estimating-aws-ec2-instances-power-consumption-c9745e347959) we can consider power consumed is approx 0.38 W/GB and for this scenario it is  close to 12.16 Watts.
* No GPU was used hence Pg ~0


##### Carbon Intensity (`I`)

* We will use regional yearly averages.
* The region the application was run in was India.
* We will source the Carbon Intensity from the SCI Data project and the [[I] Regional Yearly Marginal Carbon Intensity](https://docs.google.com/spreadsheets/d/1Viv94rMKH-fJrfD9Nn9_qkiAg1PDfIfJUAHRX9slG7A/edit#gid=1582216595) data set.

### Embodied Carbon (`M`)

The equation to calculate `M = TE * (TR/EL) * (RR/TR)`

Where:

* TE = Total Embodied Emissions, the sum of LCA emissions for all hardware components associated with the application server.
* TR = Time Reserved, the length of time the hardware is reserved for use by the software.
* EL = Expected Lifespan, the anticipated time that the equipment will be installed.
* RR = Resources Reserved, the number of resources reserved for use by the software.
* TR = Total Resources, the total number of resources available.

For this component:

* TE: We will source the embodied carbon estimates for the Dell laptop  from the [Dell site](https://i.dell.com/sites/content/corporate/corp-comm/en/Documents/dell-laptop-carbon-footprint-whitepaper.pdf) Data Set.
* TR: 1 hr.
* EL: We will assume a 4 year lifespan or 35,040 hrs.
* RR: A dell laptop was used, and all resources are available for use of this application.
* TR: A dell laptop was used, and all resources are available for use of this application.

#### Networking infrastructure 

The Quantification method for calculating energy emissions from Networking infrastructure is "Calculate". As part of the load test the Data in and Data out measurement of the App server and database server in GB are measured. This value is multiplied by the "Emissions/GB" data from SCI open data project. https://github.com/Green-Software-Foundation/sci-data/issues/13. 

The disclaimer here is : the above calculation assumes that the networking infrastructure does not emit any emissions where no data is transferred over the wire. This can be revisited in the future by having a similar concept to how we have TDP co-efficient for CPU utilization.

### (Quantify) SCI Value Calculation

#### App server for Web application

###### Energy (`E`)

_The workings of E, include raw numbers and calculations._

- Server utilization = 18.3922%
- Number of hours = 1
- Number of cores = 2 
- TDP = 205W
- TDP Coefficient = 0.32

```
E =  Number of hours * Number of chips * TDP * TDP co-efficient (for the server utilization)
  = ( 1 hour * 1 * 205 TDP * 0.32 TDP co-efficient)/1000
  = 0.0656 kwH
```

E =  **0.0656 KwH** for a 1 hour period

##### Carbon Intensity (`I`)

I = **951 gCO2e/kWh**

##### Embodied Carbon (`M`)

`M = TE * (TR/EL) * (RR/TR)`

- TE = 1205.52 kgCo2e
- TR = 1 hour
- EL = 35040
- RR = 2
- TR = 16

M = 1205.52 * (1/35040) * (2/16) = 0.004305 KG =~ **4.305 gCO2e**

### SCI

_The sum of the SCI calculation for app server._

SCI =  (E * I) + M = (0.0656 KwH * 951 gCO2e/kwH) + 4.305 gCO2e = **66.6906 gCO2e**

#### Database server for Web application

##### Energy (`E`)

_The workings of E, include raw numbers and calculations._

- Server utilization = 10%
- Number of hours = 1
- Number of cores = 2 
- TDP = 150W
- TDP Coefficient = 0.32

```
E =  Number of hours * Number of chip * TDP * TDP co-efficient (Server utilization)
  = ( 1 hour * 1 chip * 150 TDP * 0.32 TDP co-efficient)/1000
  = 0.048 kwH
```

E =  **0.048 KwH** for a 1 hour period

##### Carbon Intensity (`I`)

I = **951 gCO2e/kWh**

##### Embodied Carbon (`M`)

`M = TE * (TR/EL) * (RR/TR)`

- TE = 1433.12 kgCo2e
- TR = 1 hour
- EL = 35040
- RR = 2
- TR = 16

M = 1433.12 * (1/35040) * (2/16) = 0.005112 KG =~ **5.112 gCO2e**



### SCI

_The sum of the SCI calculation for database server._

SCI =  (E * I) + M = (0.048 KwH * 951 gCO2e/kwH) + 5.112 gCO2e = **50.76 gCO2e**

####  Front end browser for the Web application

###### Energy (`E`) for CPU

_The workings of E, include raw numbers and calculations._

- Server utilization = 0%
- Number of hours = 1
- Number of cores = 2
- TDP = 28W
- TDP Coefficient = 0.12

```
E =  Number of hours * Number of chip * TDP * TDP co-efficient (Server utilization)
  = (1 hour * 1 chip * 28W TDP * 0.12 TDP co-efficient)/1000
  = 0.00336
```

E =  **0.00336 KwH** for a 1 hour period

##### Energy (`E`) for Memory

_The workings of E, include raw numbers and calculations._

- Server utilization = 0.1%
- Number of hours = 1
- Number of cores = 2
- TDP = 12.16
- TDP Coefficient = 0.12

```
E =  Number of hours * Number of chip * TDP * TDP co-efficient (Memory utilization)
  = (1 hour * 1 chip * 12.16 TDP * 0.12 TDP co-efficient)/1000
  = 0.01216
```

E =  **0.01216 KwH** for a 1 hour period

##### Carbon Intensity (`I`)

I = **951 gCO2e/kWh**

#####  Embodied Carbon (`M`)

`M = TE * (TR/EL) * (RR/TR)`

- TE = 350 kgCo2e
- TR = 1 hour
- EL = 35040
- RR = 1
- TR = 1

M = 350 * (1/35040) * (1/1) = 0.009988 KG =~ **9.98 gCO2e**



### SCI

_The sum of the SCI calculation for client device._

SCI =  (E * I) + M = ((0.0036+0.01216 * 951 gCO2e/kwH) + 9.98 gCO2e = **24.96 gCO2e**

####  Networking infrastructure for the  Web application

Based on the load tests conducted Data in = 1.16 GB. Data out = 14.3 GB
Taking data of 0.001KwH /GB we get 0.01529 kwH

Energy of networking infrastructure = 0.01529 kwH
Regional carbon intensity = I = **951 gCO2e/kWh**
Embodied emissions data of networking infrastructure not yet available. 

SCI of networking infrastructure = 14.54 gCo2eq


##  SCI Total

_The total SCI for the whole application._

SCI = SCI(App server for Web application) +  SCI for database server +SCI for the client device + SCI of networking infrastructure  =  **156.9586 gCO2e** per R (500 users in 1 hour period)

### (Report) 

* The methodology  used for the calculation of "Energy" for all the components in the software boundary is based on the Thermal design power value for these components. We are measuring CPU utilization of the respective servers and then using a model based on the Thermal Design Power (TDP) of the processors, number of cores etc to **estimate** the power consumption.
* Hardware manufacturers provide a data sheet for all their components and on which you will find a number called TDP, Thermal Design Power. This number is meant to help with designing what cooling the component needs, and not strictly for estimating energy consumption. But there is a correlation, even though it will be a simplification. Since we are all aware that the best way is to measure power consumption directly from the socket and we are looking for an estimation only, we went with the TDP approach. If we approximate the TDP with the energy consumption of each component, then we can use this methodology as outlined in this article to calculate E [https://devblogs.microsoft.com/sustainable-software/how-to-measure-the-power-consumption-of-your-backend-service/?WT.mc_id=-green-8647-cxa](url)
*  [Boazvita](https://boavizta.org/) organization have developed an approach where they have used on premise servers and used energy metering tools to measure energy on the servers.  They then have mapped these servers to AWS instances and calculated energy. The next version of this case study could use this approach and compare the results between the TDP approach and the energy metering approach. This would help drive up improvements in the TDP approach 
* All the azure services used in the architecture were managed services and it was very difficult to get the exact intel processor used in the underlying virtual machines. For example whether it is Azure SQL database managed instance, Azure app service plan a direct mapping of the managed service to the Intel processor used was very difficult to find out. 
*  This issue will be more prevalent for serverless services like Lambda functions , Azure functions, API gateways etc  where the cloud providers have abstracted away the server configuration which is needed for our calculation. 
*  SCI open data project was leveraged to get the emissions associated per GB of data transmitted over the networking infrastructure. There are more requests for open data that have been raised with the SCI open data team here . [https://github.com/Green-Software-Foundation/sci-data/issues?q=is%3Aopen+is%3Aissue](url)

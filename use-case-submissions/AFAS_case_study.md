# AFAS SB Enterprise Software Application Carbon Assessment

## Overview

* AFAS SB is a cloud-native financial administration platform developed by AFAS Software serving 7,540 unique users with approximately 90% weekly retention rate
* The platform implements a multi-tenant CQRS (Command Query Responsibility Segregation) architecture deployed on Microsoft Azure Service Fabric
* This case study demonstrates SCI methodology application combining production baseline assessment with controlled experimental optimization
* Key finding: Garbage collection optimization achieved 29.5-30.6% carbon reduction, with disk I/O operations identified as the primary factor associated with carbon emissions (r = 0.997)
* Complete methodology, data, and replication package available at: https://github.com/rutgerkool/msc-thesis-sci-2025

## Architecture for the system under consideration

![AFAS SB Azure Architecture](https://github.com/rutgerkool/msc-thesis-sci-2025/blob/main/figures/azure_architecture.png)

### Technical details of the components in the architecture

The production architecture consists of the following Azure components within the SCI boundary:

* **Azure Load Balancer (Clstr-LB)**: Routes incoming client requests to proxy services
* **Proxy VM Scale Set (Proxy001)**: Handles external-facing communication and request routing  
* **Service Fabric Clusters (Clstr-SS)**: Provides application lifecycle management, health monitoring, and hosts AFAS SB application instances
* **SQL Elastic Pools (NextTenantPool)**: Manages multi-tenant database services with shared computational resources
* **Support Infrastructure**: Dedicated proxy VMs (SvcProxy-VM0, SvcProxy-VM1), Logging VM running Kibana, and Elastic-VM running Elasticsearch for observability

**Excluded from boundary**: Azure Blob Storage, Login Platform, and Shared Services (hosted in private cloud)

## Sites for Software Sustainability Actions

### Energy Efficiency 

1. Garbage collection optimization in .NET runtime environment
2. Application-level configuration parameter tuning across parallelism, logging, caching, and compression settings
3. Resource utilization optimization targeting disk I/O operations which showed strongest correlation with carbon emissions

### Hardware Efficiency

1. VM Scale Set optimization targeting the infrastructure components responsible for 74.2% of total carbon emissions
2. Resource allocation efficiency improvements through validated application configurations
3. Multi-tenant infrastructure efficiency through shared resource utilization

### Carbon Awareness

1. Evidence-based configuration selection using measured SCI impacts
2. Performance-carbon trade-off optimization based on empirical data
3. Continuous carbon monitoring using established telemetry-to-energy conversion methodologies

## Procedure

### (What) Software boundary

**Included:**
- Azure Service Fabric clusters hosting AFAS SB application instances
- VM Scale Sets (30 instances) providing compute capacity
- SQL Elastic Pools (12 instances) managing database services  
- Virtual Machines (4 instances) for specialized services
- Load balancing and proxy infrastructure
- Logging and monitoring services (Elasticsearch, Kibana)
- Network traffic between Azure components

**Excluded:**
- Azure Blob Storage (tenant attachments) - insufficient metrics available for calculation
- Login Platform (authentication services) - operates under different scaling patterns
- Shared Services (payment and banking integrations) - hosted in private cloud with different scaling patterns
- Client devices and browsers - insufficient metrics available for calculation
- Test infrastructure used for optimization experiments - does not fit the same functional unit scale

### (Scale) Functional unit 

**Production Baseline Assessment**: gCO2eq per instance-hour
- Enables infrastructure-level carbon assessment across heterogeneous Azure deployment
- Covers 46 instances across 12 resource groups over 168-hour monitoring period

**Experimental Configuration Assessment**: gCO2eq per functional test scenario  
- Enables direct comparison of equivalent workloads across different configurations
- Uses 79 standardized business process test scenarios from AFAS SB's production testing framework

### (How) Quantification method

#### Production Baseline Assessment

**Energy (E)**: **Calculate** using Azure Monitor telemetry data processed through Impact Framework pipeline
- CPU energy conversion from utilization percentages using TDP-based power curve interpolation with coefficients [0.12, 0.32, 0.75, 1.02] for utilization points [0, 10, 50, 100%]
- Memory energy using 0.000392 W/GB coefficient from Cloud Carbon Footprint methodology
- Data standardization to consistent 5-minute intervals with linear interpolation

**Carbon Intensity (I)**: Regional average for The Netherlands (355 gCO2eq/kWh) from ElectricityMaps for February 3-9, 2025

**Embodied Carbon (M)**: **Calculate** using Cloud Carbon Footprint coefficients with 4-year expected hardware lifespan

#### Experimental Configuration Assessment  

**Energy (E)**: **Measure** using PowerJoular process-specific energy monitoring in controlled Green Lab environment
- Direct power measurement during test execution on Intel Xeon Silver 4112 server
- Complemented by psutil system resource monitoring for CPU, memory, and I/O operations

**Carbon Intensity (I)**: Regional average for The Netherlands (272 gCO2eq/kWh) from ElectricityMaps for April 2025

**Embodied Carbon (M)**: **Calculate** using Green Lab server specifications with 1449.84 kg total embodied emissions and 8-core VM allocation from 24 total cores

### (Quantify) SCI Value Calculation

#### Production Baseline Results

System-wide baseline assessment across 46 instances:
- Mean SCI Score: 14.162 gCO2eq/instance-hour (±11.011 standard deviation)
- Total Energy Consumption: 216.78 kWh  
- Total Carbon Emissions: 109,446.11 gCO2eq
- VM Scale Sets: 74.2% of total carbon emissions (30 instances, mean 18.257 gCO2eq/h)
- SQL Elastic Pools: 20.1% of total carbon emissions (12 instances, mean 10.902 gCO2eq/h)
- Virtual Machines: 5.7% of total carbon emissions (4 instances, mean 9.295 gCO2eq/h)

#### Experimental Configuration Results

**Baseline Configuration:**
- SCI Score: 0.457 gCO2eq/scenario (±0.031, n=10)
- Test Duration: 5169 seconds
- Power Consumption: 41.81 W
- Success Rate: 99.74%

**Most Effective Individual Optimization (Garbage Collection - DynamicAdaptation):**
- SCI Score: 0.317 gCO2eq/scenario (30.6% improvement)
- Test Duration: 3604 seconds (30.3% improvement) 
- Statistical significance: p=0.00018, Cohen's d=5.25

**Carbon-Optimized Combined Configuration:**
- SCI Score: 0.340 gCO2eq/scenario (25.7% improvement)
- Test Duration: 3866 seconds (25.2% improvement)
- Success Rate: 100%
- Statistical significance: p=0.010, Cohen's d=4.10

### (Report)

**Methodology Disclosure:**
- Production baseline uses estimation models for CPU and memory power consumption as direct energy measurements are not available in Azure production environment
- CPU energy model employs power curve interpolation calibrated for AWS EC2 instances, adapted for Azure infrastructure
- Memory power model uses linear coefficient (0.000392 W/GB) which may oversimplify DDR4 memory power characteristics
- Experimental measurements use controlled laboratory environment which differs from production complexity
- Statistical analysis employed conservative Holm correction for multiple comparisons across 75 statistical tests

**Key Findings:**
- Garbage collection optimization emerged as the most effective strategy with statistically significant improvements of 29.5-30.6%
- Strong correlation identified between disk I/O read operations and carbon emissions (r = 0.997, p < 0.001)
- CPU utilization negatively correlated with carbon emissions (r = -0.82, p < 0.001)
- Combined optimization achieved substantial reduction while maintaining functional correctness

**Implementation Resources:**
- Complete replication package: https://github.com/rutgerkool/msc-thesis-sci-2025
- Full thesis document: "Empirical Assessment of Carbon Reduction Strategies in Enterprise Software Applications" available in repository
- Impact Framework manifests and processing pipelines included for both Azure baseline and experimental calculations
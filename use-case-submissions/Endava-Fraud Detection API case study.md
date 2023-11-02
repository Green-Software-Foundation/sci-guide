# Fraud Detection API case study

## Overview

We analyzed a fraud detection tool, deployed and maintained by our organization, which scans online transactions and gives it a risk score. The platform is used by multiple payments processors from all over the world.

## Architecture for the system under consideration
![technology_deployment](https://github.com/Green-Software-Foundation/sci-guide/assets/147036856/0d859c02-1a8b-48f6-af61-68f5e9f6e0b7)
Fig 1. Technology Deployment

![fraud_detection_infra](https://github.com/Green-Software-Foundation/sci-guide/assets/147036856/4fdc2318-0a39-4ace-bc32-e70a6a187764)
Fig. 2 Infrastructure

### Technical details of the components in the architecture

The application written in Java is deployed on EC2 instances (AWS). It uses the following tools deployed on the instances:

* Kafka
* Zookeeper
* Apache Storm
* Nginx
* ELK stack
* Grafana
* Prometheus
* MongoDB

The application contains an API (called EventAPI) that receives the events and puts them in the Kafka queue. A UI is deployed on Nginx and 2 other components that read and write the events on and from the data stores.

The application infrastructure is deployed in 3 availability zones in eu-central-1 and 1 node reader in a eu-west-1. The nodes are deployed on multiple tiers each containing 1 node per AZ (3 nodes per tier).  

MongoDB is deployed cross regions, with half of the cluster being deployed in eu-west-1 (read only mode), for resiliency purposes. 

In Production there are a total of 39 nodes distributed per tiers as follows:

| **Count** |  **Type**  |                **Notes**                |
|:---------:|:----------:|:---------------------------------------|
|     3     |  m5.xlarge | UI                                      |
|     3     | c5.4xlarge | API                                     |
|     3     | m5.4xlarge | CEP - event processing                  |
|     3     | m5.2xlarge | AE - async events processing            |
|     3     |  m5.large  | INFRA - contains most of the tooling)   |
|     3     | r5.4xlarge | ElasticSearch nodes - ES data store     |
|     6     |  t3a.large | MongoDB Service nodes                   |
|     6     |  t3a.large | MongoDB Config nodes                    |
|     6     | r5.2xlarge | MongoDB Engine                          |
|     2     |  m5.xlarge | OpsManager nodes (MongoDB orchestrator) |
|     1     | t3a.xlarge | Install orchestrator node               |

Table 1. Instances per tier

***Note**: The MongoDB deployment is duplicated in the secondary region.*

| **Count** |  **Type**  | **vCPUs/node**      | **Total vCPUs** |
|:---------:|:----------:|---------------------|-----------------|
|     2     |  m5.xlarge | 4 vCPUs 16 GB RAM   | 8 vCPUs         |
|     3     | c5.4xlarge | 16 vCPUs 32 GB RAM  | 48 vCPUs        |
|     3     | m5.4xlarge | 16 vCPUs 64 GB RAM  | 48 vCPUs        |
|     3     | m5.2xlarge | 8 vCPUs 32 GB RAM   | 24 vCPUs        |
|     3     |  m5.large  | 2 vCPUs 8 GB RAM    | 6 vCPUs         |
|     3     | r5.4xlarge | 16 vCPUs 128 GB RAM | 48 vCPUs        |
|     13    |  t3a.large | 2 vCPUs 8 GB RAM    | 26 vCPUs        |
|     6     | r5.2xlarge | 8 vCPUs 64 GB RAM   | 48 vCPUs        |
|     1     | t3a.xlarge | 4 vCPUs 16 GB RAM   | 4 vCPUs         |  
<br>
Table 2. Number of instance types

#### Infrastructure summary

* Average CPU usage per 1 week = 16%  
* Average RAM usage = 70%  
* Total vCPUs = 236  
* Total GB RAM = 1320  
* Approx total EBS storage = 6 TB

#### Resource usage 

![application_tier_memory_usage_grafana](https://github.com/Green-Software-Foundation/sci-guide/assets/147036856/bdd3da2f-39f7-43a6-8b89-c5b17af6e6b5)
FIg. 3 Application Tier Memory Usage

  
![CPU_Usage_grafana](https://github.com/Green-Software-Foundation/sci-guide/assets/147036856/4c9f4688-88e5-4254-b788-88f9150a7efa)
Fig. 4 Application Tier CPU Usage 

![CPU_usage_primary_region](https://github.com/Green-Software-Foundation/sci-guide/assets/147036856/7d923eac-8d77-4ae3-a22f-9e0897a388fd)
Fig. 5 CPU Usage Primary Region

![CPU_usage_primary_region](https://github.com/Green-Software-Foundation/sci-guide/assets/147036856/80d7b505-3ef1-4573-88e7-c30ece1d9817)
Fig. 5 CPU Usage Secondary Region

## Procedure

### (What) Software boundary

The components included in the software boundary are:

* API
* Infrastructure behind

For these components we considered CPU and Memory to have the biggest impact, which is also supported by their corresponding cost.

We excluded the following factors based on the reasoning that their impact is less significant or too difficult to quantify:

* CI/CD pipeline
* Log processing
* Network traffic
* Disks (too difficult to quantify)

### (Scale) Functional unit

The functional unit chosen for considering the scaling of the application is 1 day, more specifically the API calls made over 1 day.
Over a 1 hour period there are 72,000 API calls, so for the span of 24 hours we have 1,728,000 API calls.

>**R** = 1 day

### (How) Quantification method

#### Energy (E)

For Energy we used an API-based approach, choosing the Climatiq.io service to calculate values for each VM instance, based on CPU usage, instance type, location and duration of usage.

We added the values from the response fields ```memory_estimate``` and ```cpu_estimate``` to get the total Energy used.

```text
URL: https://beta4.api.climatiq.io/compute/aws/instance/batch
```

##### Request

<details>  
<summary>Request body</summary>  

```javascript
[
    {
        "region": "eu_central_1",
        "instance": "t3a.large",
        "duration": 24,
        "duration_unit": "h",
        "average_vcpu_utilization": 0.16
    },
    {
        "region": "eu_central_1",
        "instance": "t3a.xlarge",
        "duration": 24,
        "duration_unit": "h",
        "average_vcpu_utilization": 0.16
    },
    {
        "region": "eu_central_1",
        "instance": "r5.4xlarge",
        "duration": 24,
        "duration_unit": "h",
        "average_vcpu_utilization": 0.16
    },
    {
        "region": "eu_central_1",
        "instance": "r5.2xlarge",
        "duration": 24,
        "duration_unit": "h",
        "average_vcpu_utilization": 0.16
    },
    {
        "region": "eu_central_1",
        "instance": "m5.large",
        "duration": 24,
        "duration_unit": "h",
        "average_vcpu_utilization": 0.16
    },
    {
        "region": "eu_central_1",
        "instance": "m5.xlarge",
        "duration": 24,
        "duration_unit": "h",
        "average_vcpu_utilization": 0.16
    },
    {
        "region": "eu_central_1",
        "instance": "m5.2xlarge",
        "duration": 24,
        "duration_unit": "h",
        "average_vcpu_utilization": 0.16
    },
    {
        "region": "eu_central_1",
        "instance": "m5.4xlarge",
        "duration": 24,
        "duration_unit": "h",
        "average_vcpu_utilization": 0.16
    },
    {
        "region": "eu_central_1",
        "instance": "c5.4xlarge",
        "duration": 24,
        "duration_unit": "h",
        "average_vcpu_utilization": 0.16
    }
]
```

</details>  
  
##### Response

<details>
<summary>Response body</summary>

```javascript
{
   "results":[
      {
         "total_co2e":0.052354380503440476,
         "total_co2e_unit":"kg",
         "memory_estimate":{
            "co2e":0.017090017313680473,
            "co2e_unit":"kg",
            "co2e_calculation_method":"ar4",
            "co2e_calculation_origin":"source",
            "emission_factor":null,
            "constituent_gases":null,
            "activity_data":{
               "activity_value":0.09172400876814336,
               "activity_unit":"kWh"
            },
            "audit_trail":"disabled"
         },
         "cpu_estimate":{
            "co2e":0.011994083189760002,
            "co2e_unit":"kg",
            "co2e_calculation_method":"ar4",
            "co2e_calculation_origin":"source",
            "emission_factor":null,
            "constituent_gases":null,
            "activity_data":{
               "activity_value":0.064373568,
               "activity_unit":"kWh"
            },
            "audit_trail":"disabled"
         },
         "embodied_cpu_estimate":{
            "co2e":0.023270279999999997,
            "co2e_unit":"kg",
            "co2e_calculation_method":"ar4",
            "co2e_calculation_origin":"source",
            "emission_factor":null,
            "constituent_gases":null,
            "activity_data":{
               "activity_value":24.0,
               "activity_unit":"instance-hour"
            },
            "audit_trail":"disabled"
         },
         "calculation_details":{
            "instance":"t3a.large",
            "instance_memory":8.589934592,
            "memory_unit":"GB",
            "vcpu_cores":2,
            "average_vcpu_utilization":0.16,
            "power_usage_effectiveness":1.135,
            "energy_used_cpu":0.064373568,
            "energy_used_memory":0.09172400876814336,
            "energy_unit":"kWh"
         }
      },
      {
         "total_co2e":0.10470876100688095,
         "total_co2e_unit":"kg",
         "memory_estimate":{
            "co2e":0.034180034627360946,
            "co2e_unit":"kg",
            "co2e_calculation_method":"ar4",
            "co2e_calculation_origin":"source",
            "emission_factor":null,
            "constituent_gases":null,
            "activity_data":{
               "activity_value":0.18344801753628673,
               "activity_unit":"kWh"
            },
            "audit_trail":"disabled"
         },
         "cpu_estimate":{
            "co2e":0.023988166379520004,
            "co2e_unit":"kg",
            "co2e_calculation_method":"ar4",
            "co2e_calculation_origin":"source",
            "emission_factor":null,
            "constituent_gases":null,
            "activity_data":{
               "activity_value":0.128747136,
               "activity_unit":"kWh"
            },
            "audit_trail":"disabled"
         },
         "embodied_cpu_estimate":{
            "co2e":0.046540559999999995,
            "co2e_unit":"kg",
            "co2e_calculation_method":"ar4",
            "co2e_calculation_origin":"source",
            "emission_factor":null,
            "constituent_gases":null,
            "activity_data":{
               "activity_value":24.0,
               "activity_unit":"instance-hour"
            },
            "audit_trail":"disabled"
         },
         "calculation_details":{
            "instance":"t3a.xlarge",
            "instance_memory":17.179869184,
            "memory_unit":"GB",
            "vcpu_cores":4,
            "average_vcpu_utilization":0.16,
            "power_usage_effectiveness":1.135,
            "energy_used_cpu":0.128747136,
            "energy_used_memory":0.18344801753628673,
            "energy_unit":"kWh"
         }
      },
      {
         "total_co2e":0.6171121825369675,
         "total_co2e_unit":"kg",
         "memory_estimate":{
            "co2e":0.27344027701888757,
            "co2e_unit":"kg",
            "co2e_calculation_method":"ar4",
            "co2e_calculation_origin":"source",
            "emission_factor":null,
            "constituent_gases":null,
            "activity_data":{
               "activity_value":1.4675841402902938,
               "activity_unit":"kWh"
            },
            "audit_trail":"disabled"
         },
         "cpu_estimate":{
            "co2e":0.09595266551808002,
            "co2e_unit":"kg",
            "co2e_calculation_method":"ar4",
            "co2e_calculation_origin":"source",
            "emission_factor":null,
            "constituent_gases":null,
            "activity_data":{
               "activity_value":0.514988544,
               "activity_unit":"kWh"
            },
            "audit_trail":"disabled"
         },
         "embodied_cpu_estimate":{
            "co2e":0.24771923999999998,
            "co2e_unit":"kg",
            "co2e_calculation_method":"ar4",
            "co2e_calculation_origin":"source",
            "emission_factor":null,
            "constituent_gases":null,
            "activity_data":{
               "activity_value":24.0,
               "activity_unit":"instance-hour"
            },
            "audit_trail":"disabled"
         },
         "calculation_details":{
            "instance":"r5.4xlarge",
            "instance_memory":137.438953472,
            "memory_unit":"GB",
            "vcpu_cores":16,
            "average_vcpu_utilization":0.16,
            "power_usage_effectiveness":1.135,
            "energy_used_cpu":0.514988544,
            "energy_used_memory":1.4675841402902938,
            "energy_unit":"kWh"
         }
      },
      {
         "total_co2e":0.30855609126848377,
         "total_co2e_unit":"kg",
         "memory_estimate":{
            "co2e":0.13672013850944378,
            "co2e_unit":"kg",
            "co2e_calculation_method":"ar4",
            "co2e_calculation_origin":"source",
            "emission_factor":null,
            "constituent_gases":null,
            "activity_data":{
               "activity_value":0.7337920701451469,
               "activity_unit":"kWh"
            },
            "audit_trail":"disabled"
         },
         "cpu_estimate":{
            "co2e":0.04797633275904001,
            "co2e_unit":"kg",
            "co2e_calculation_method":"ar4",
            "co2e_calculation_origin":"source",
            "emission_factor":null,
            "constituent_gases":null,
            "activity_data":{
               "activity_value":0.257494272,
               "activity_unit":"kWh"
            },
            "audit_trail":"disabled"
         },
         "embodied_cpu_estimate":{
            "co2e":0.12385961999999999,
            "co2e_unit":"kg",
            "co2e_calculation_method":"ar4",
            "co2e_calculation_origin":"source",
            "emission_factor":null,
            "constituent_gases":null,
            "activity_data":{
               "activity_value":24.0,
               "activity_unit":"instance-hour"
            },
            "audit_trail":"disabled"
         },
         "calculation_details":{
            "instance":"r5.2xlarge",
            "instance_memory":68.719476736,
            "memory_unit":"GB",
            "vcpu_cores":8,
            "average_vcpu_utilization":0.16,
            "power_usage_effectiveness":1.135,
            "energy_used_cpu":0.257494272,
            "energy_used_memory":0.7337920701451469,
            "energy_unit":"kWh"
         }
      },
      {
         "total_co2e":0.052354380503440476,
         "total_co2e_unit":"kg",
         "memory_estimate":{
            "co2e":0.017090017313680473,
            "co2e_unit":"kg",
            "co2e_calculation_method":"ar4",
            "co2e_calculation_origin":"source",
            "emission_factor":null,
            "constituent_gases":null,
            "activity_data":{
               "activity_value":0.09172400876814336,
               "activity_unit":"kWh"
            },
            "audit_trail":"disabled"
         },
         "cpu_estimate":{
            "co2e":0.011994083189760002,
            "co2e_unit":"kg",
            "co2e_calculation_method":"ar4",
            "co2e_calculation_origin":"source",
            "emission_factor":null,
            "constituent_gases":null,
            "activity_data":{
               "activity_value":0.064373568,
               "activity_unit":"kWh"
            },
            "audit_trail":"disabled"
         },
         "embodied_cpu_estimate":{
            "co2e":0.023270279999999997,
            "co2e_unit":"kg",
            "co2e_calculation_method":"ar4",
            "co2e_calculation_origin":"source",
            "emission_factor":null,
            "constituent_gases":null,
            "activity_data":{
               "activity_value":24.0,
               "activity_unit":"instance-hour"
            },
            "audit_trail":"disabled"
         },
         "calculation_details":{
            "instance":"m5.large",
            "instance_memory":8.589934592,
            "memory_unit":"GB",
            "vcpu_cores":2,
            "average_vcpu_utilization":0.16,
            "power_usage_effectiveness":1.135,
            "energy_used_cpu":0.064373568,
            "energy_used_memory":0.09172400876814336,
            "energy_unit":"kWh"
         }
      },
      {
         "total_co2e":0.10470876100688095,
         "total_co2e_unit":"kg",
         "memory_estimate":{
            "co2e":0.034180034627360946,
            "co2e_unit":"kg",
            "co2e_calculation_method":"ar4",
            "co2e_calculation_origin":"source",
            "emission_factor":null,
            "constituent_gases":null,
            "activity_data":{
               "activity_value":0.18344801753628673,
               "activity_unit":"kWh"
            },
            "audit_trail":"disabled"
         },
         "cpu_estimate":{
            "co2e":0.023988166379520004,
            "co2e_unit":"kg",
            "co2e_calculation_method":"ar4",
            "co2e_calculation_origin":"source",
            "emission_factor":null,
            "constituent_gases":null,
            "activity_data":{
               "activity_value":0.128747136,
               "activity_unit":"kWh"
            },
            "audit_trail":"disabled"
         },
         "embodied_cpu_estimate":{
            "co2e":0.046540559999999995,
            "co2e_unit":"kg",
            "co2e_calculation_method":"ar4",
            "co2e_calculation_origin":"source",
            "emission_factor":null,
            "constituent_gases":null,
            "activity_data":{
               "activity_value":24.0,
               "activity_unit":"instance-hour"
            },
            "audit_trail":"disabled"
         },
         "calculation_details":{
            "instance":"m5.xlarge",
            "instance_memory":17.179869184,
            "memory_unit":"GB",
            "vcpu_cores":4,
            "average_vcpu_utilization":0.16,
            "power_usage_effectiveness":1.135,
            "energy_used_cpu":0.128747136,
            "energy_used_memory":0.18344801753628673,
            "energy_unit":"kWh"
         }
      },
      {
         "total_co2e":0.2094175220137619,
         "total_co2e_unit":"kg",
         "memory_estimate":{
            "co2e":0.06836006925472189,
            "co2e_unit":"kg",
            "co2e_calculation_method":"ar4",
            "co2e_calculation_origin":"source",
            "emission_factor":null,
            "constituent_gases":null,
            "activity_data":{
               "activity_value":0.36689603507257346,
               "activity_unit":"kWh"
            },
            "audit_trail":"disabled"
         },
         "cpu_estimate":{
            "co2e":0.04797633275904001,
            "co2e_unit":"kg",
            "co2e_calculation_method":"ar4",
            "co2e_calculation_origin":"source",
            "emission_factor":null,
            "constituent_gases":null,
            "activity_data":{
               "activity_value":0.257494272,
               "activity_unit":"kWh"
            },
            "audit_trail":"disabled"
         },
         "embodied_cpu_estimate":{
            "co2e":0.09308111999999999,
            "co2e_unit":"kg",
            "co2e_calculation_method":"ar4",
            "co2e_calculation_origin":"source",
            "emission_factor":null,
            "constituent_gases":null,
            "activity_data":{
               "activity_value":24.0,
               "activity_unit":"instance-hour"
            },
            "audit_trail":"disabled"
         },
         "calculation_details":{
            "instance":"m5.2xlarge",
            "instance_memory":34.359738368,
            "memory_unit":"GB",
            "vcpu_cores":8,
            "average_vcpu_utilization":0.16,
            "power_usage_effectiveness":1.135,
            "energy_used_cpu":0.257494272,
            "energy_used_memory":0.36689603507257346,
            "energy_unit":"kWh"
         }
      },
      {
         "total_co2e":0.4188350440275238,
         "total_co2e_unit":"kg",
         "memory_estimate":{
            "co2e":0.13672013850944378,
            "co2e_unit":"kg",
            "co2e_calculation_method":"ar4",
            "co2e_calculation_origin":"source",
            "emission_factor":null,
            "constituent_gases":null,
            "activity_data":{
               "activity_value":0.7337920701451469,
               "activity_unit":"kWh"
            },
            "audit_trail":"disabled"
         },
         "cpu_estimate":{
            "co2e":0.09595266551808002,
            "co2e_unit":"kg",
            "co2e_calculation_method":"ar4",
            "co2e_calculation_origin":"source",
            "emission_factor":null,
            "constituent_gases":null,
            "activity_data":{
               "activity_value":0.514988544,
               "activity_unit":"kWh"
            },
            "audit_trail":"disabled"
         },
         "embodied_cpu_estimate":{
            "co2e":0.18616223999999998,
            "co2e_unit":"kg",
            "co2e_calculation_method":"ar4",
            "co2e_calculation_origin":"source",
            "emission_factor":null,
            "constituent_gases":null,
            "activity_data":{
               "activity_value":24.0,
               "activity_unit":"instance-hour"
            },
            "audit_trail":"disabled"
         },
         "calculation_details":{
            "instance":"m5.4xlarge",
            "instance_memory":68.719476736,
            "memory_unit":"GB",
            "vcpu_cores":16,
            "average_vcpu_utilization":0.16,
            "power_usage_effectiveness":1.135,
            "energy_used_cpu":0.514988544,
            "energy_used_memory":0.7337920701451469,
            "energy_unit":"kWh"
         }
      },
      {
         "total_co2e":0.3714833481088019,
         "total_co2e_unit":"kg",
         "memory_estimate":{
            "co2e":0.06836006925472189,
            "co2e_unit":"kg",
            "co2e_calculation_method":"ar4",
            "co2e_calculation_origin":"source",
            "emission_factor":null,
            "constituent_gases":null,
            "activity_data":{
               "activity_value":0.36689603507257346,
               "activity_unit":"kWh"
            },
            "audit_trail":"disabled"
         },
         "cpu_estimate":{
            "co2e":0.09595266551808002,
            "co2e_unit":"kg",
            "co2e_calculation_method":"ar4",
            "co2e_calculation_origin":"source",
            "emission_factor":null,
            "constituent_gases":null,
            "activity_data":{
               "activity_value":0.514988544,
               "activity_unit":"kWh"
            },
            "audit_trail":"disabled"
         },
         "embodied_cpu_estimate":{
            "co2e":0.207170613336,
            "co2e_unit":"kg",
            "co2e_calculation_method":"ar4",
            "co2e_calculation_origin":"source",
            "emission_factor":null,
            "constituent_gases":null,
            "activity_data":{
               "activity_value":24.0,
               "activity_unit":"instance-hour"
            },
            "audit_trail":"disabled"
         },
         "calculation_details":{
            "instance":"c5.4xlarge",
            "instance_memory":34.359738368,
            "memory_unit":"GB",
            "vcpu_cores":16,
            "average_vcpu_utilization":0.16,
            "power_usage_effectiveness":1.135,
            "energy_used_cpu":0.514988544,
            "energy_used_memory":0.36689603507257346,
            "energy_unit":"kWh"
         }
      }
   ]
}
```

</details>

<br>

Based on the Activity Value for CPU and Memory taken from the response above, we have the following Energy values:

| **Count** |  **Type**  |  **CPU**  | **Memory** | **Total** |
|:---------:|:----------:|:---------:|:----------:|:---------:|
| 2         | m5.xlarge  | 0.13 kWh  | 0.18 kWh   | 0.62 kWh  |
| 3         | c5.4xlarge | 0.51 kWh  | 0.37 kWh   | 2.64 kWh  |
| 3         | m5.4xlarge | 0.51 kWh  | 0.73 kWh   | 3.72 kWh  |
| 3         | m5.2xlarge | 0.26 kWh  | 0.37 kWh   | 1.89 kWh  |
| 3         | m5.large   | 0.064 kWh | 0.092 kWh  | 0.468 kWh |
| 3         | r5.4xlarge | 0.51 kWh  | 1.47 kWh   | 5.94 kWh  |
| 13        | t3a.large  | 0.092 kWh | 0.064 kWh  | 2.028 kWh |
| 6         | r5.2xlarge | 0.26 kWh  | 0.73 kWh   | 5.94 kWh  |
| 1         | t3a.xlarge | 0.13 kWh  | 0.18 kWh   | 0.31 kWh  |

Total energy consumption for the entire architecture is:

>**E** = 23.566 kWh

#### Energy Carbon Intensity (I)

For Carbon Intensity, we took our data from [Electricity Maps](https://app.electricitymaps.com/zone/DE) with the following parameters:  

* **Location**: Germany
* **Year**: 2022  

Germany was chosen as the location due to our AWS Region being ```eu_central_1``` which, as per this document ([Regions and Zones](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html)), is located in Frankfurt.

For the year we took the latest available data provided by Electricity Maps.

When considering future directions and initiatives, we take into account the fact that Electricity Maps offers forecasts for carbon intensity and power consumption, which means that it would be possible to forecast the carbon intensity of a given infrastructure for different locations in order determine the most suitable data center in terms of emissions.

Another important aspect to note is the different years the **E** and **I** values belong to. While ElectricityMaps offers the Carbon Intensity (I) data from as recent as 2022, the Climatiq API call that provides the Energy (E) data makes use of a calculation method named ```ar4```, which is documented in [CO2e - Methods of Calculation](https://www.climatiq.io/docs/guides/understanding/co2e-calculation) as referencing emissions from the year 2007.

With the disclaimers above, we consider the **I** variable as:

>**I** = 473 gCO₂eq/kWh

#### Embodied (M)

We calculated the embodied carbon of the software/hardware components of our cloud application by using a manual approach and the following equation provided by [SCI Guidance](https://sci-guide.greensoftware.foundation/M/):

**```M = TE * (TR/EL) * (RR/TR)```**

**TE** = Total Embodied Emissions, the sum of Life Cycle Assessment(LCA) emissions for all hardware components  
**TR** = Time Reserved, the length of time the hardware is reserved for use by the software  
**EL** = Expected Lifespan, the anticipated time that the equipment will be installed  
**RR** = Resources Reserved, the number of resources reserved for use by the software  
**TR** = Total Resources, the total number of resources available  

The sources for the values are:  

**TE** = data from [Cloud Carbon Footprint - Embodied Emissions constants](https://docs.google.com/spreadsheets/d/1k-6JtneEu4E9pXQ9QMCXAfyntNJl8MnV2YzO4aKHh-0/edit#gid=0)  
**TR** = number of hours used for Climatiq's ```/compute``` call  
**EL** = number of years of warranty provided by hardware manufacturer, which is 3 years
* _the corresponding hardware for each VM instance is documented in [AWS EC2 Carbon Footprint Dataset
](https://docs.google.com/spreadsheets/d/1DqYgQnEDLQVQm5acMAhLgHLD8xXCG9BIrk-_Nv6jF3k/edit#gid=504755275) and the list of manufacturers is comprised of AMD for the t3a instances and Intel for all the rest_
* _3 years mentioned in [AMD Processor Warranty](https://www.amd.com/system/files/documents/processor-warranty-update.pdf)_
* _3 years mentioned in [Warranty Guide for Intel® Processors](https://www.intel.com/content/www/us/en/support/articles/000005494/processors.html#:~:text=Intel%20Boxed%20Processors%20typically%20carry,Intel%20provides%20a%20product%20replacement.)_

**RR** = number of vCPUs for a given instance  
**TR** = the largest instance vCPUs for the given instance family


| **Instances** |  **Type**  | **TE (kgCO2eq)** | **TR (h)** | **EL (3y in h)** | **RR (vCPU)** |**TR (vCPU)**|
|:---------:|:----------:|:----------------:|:----------:  |:----------:|:-------------:|:-------------:|
| 2         | m5.xlarge  | 1610.4           | 24           | 26280          | 4             | 96            |
| 3         | c5.4xlarge | 1344,1           | 24           | 26280          | 16            | 96            |
| 3         | m5.4xlarge | 1610.4           | 24           | 26280          | 16            | 96            |
| 3         | m5.2xlarge | 1610.4           | 24           | 26280          | 8             | 96            |
| 3         | m5.large   | 1610.4           | 24           | 26280          | 2             | 96            |
| 3         | r5.4xlarge | 2142,9           | 24           | 26280          | 16            | 96            |
| 13        | t3a.large  | 1610.4           | 24           | 26280          | 2             | 8             |
| 6         | r5.2xlarge | 2142,9           | 24           | 26280          | 8             | 96            |
| 1         | t3a.xlarge | 1610.4           | 24           | 26280          | 4             | 8             |

| **Instances** |   **Type**  | **TE** | **TR/EL** | **RR/TR** | **M**     | **M x Instances** |
|:-------------:|:-----------:|--------|-----------|-----------|-----------|-------------------|
| 2             | m5.xlarge   | 1610.4 | 0.000913  | 0.041667  | 0.0612785 | 0.122557078       |
| 3             | c5.4xlarge  | 1344.1 | 0.000913  | 0.166667  | 0.2045814 | 0.613744292       |
| 3             | m5.4xlarge  | 1610.4 | 0.000913  | 0.166667  | 0.2451142 | 0.735342466       |
| 3             | m5.2xlarge  | 1610.4 | 0.000913  | 0.083333  | 0.1225571 | 0.367671233       |
| 3             | m5.large    | 1610.4 | 0.000913  | 0.020833  | 0.0306393 | 0.091917808       |
| 3             | r5.4xlarge  | 2142.9 | 0.000913  | 0.166667  | 0.3261644 | 0.978493151       |
| 13            | t3a.large   | 1610.4 | 0.000913  | 0.25      | 0.3676712 | 4.779726027       |
| 6             | r5.2xlarge  | 2142.9 | 0.000913  | 0.083333  | 0.1630822 | 0.978493151       |
| 1             | t3a.xlarge  | 1610.4 | 0.000913  | 0.5       | 0.7353425 | 0.735342466       |
| **Total M**   | -           | -      | -         | -         | -         | **9.403287671**   |

>**M** = 9.403287671 kgCO₂eq => 9403 gCO₂eq

### (Quantify) SCI Value Calculation

For the given formula ```SCI = (E * I) + M per R``` we have the following values:

**E** = 23.5 kWh  
**I** = 473 gCO₂eq/kWh  
**M** = 9403 gCO₂eq  
**R** = 1,728,000 API calls in 1 day

>**SCI** = (23.5 kWh * 473 gCO₂eq/kWh) + 9403 gCO₂eq = 20,549 gCO2e per R

>**SCI (CPU and Memory)** = **20.5 kgCO2e in 1 day**

This translates in 0.85 kgCO2e for a 1h period, with a 16% CPU average utilization.

### Conclusions

#### On infrastructure and scaling

It's worth noting that the current system is overprovisioned to ensure smooth running during usage spikes. We believe that the system could take double the load of current API calls without causing a significant impact in the emission factors. Essentially what this means is that the scaling of the application will not cause a linear increase in the carbon emissions.  

In addition, the Embodied Emission variable (**M**) represents the emissions for the creation and disposal of a hardware unit. These emissions will normally not increase during the total lifespan of a hardware device, which means that the longer the period of time the device is used, the lower the **M** variable will be and consequently the SCI score. In practice, the hardware units that are used in this infrastructure (AMD and Intel microprocessors such as *2.5 GHz AMD EPYC 7000 Series Processor*) are likely to be used for more than the estimated 3 years warranty we stated. This can can be seen by doubling the Estimated Lifetime (EL) for the calculation of **M**, from 3 years to 6 years, which results in the value being lowered from 9.4 kg to 4.7 kg, a significant drop.

#### Alternative data sources

As a possible alternative method for the obtaining **```M```**, the embodied emissions we received from Climatiq in the ```/compute``` call, ```embodied_cpu_estimate``` field are:

| **Count** |  **Type**  | **Embodied Emissions x 1** | **Grand Total** |
|:---------:|:----------:|:--------------------------:|:---------------:|
| 2         | m5.xlarge  | 0.046 kgCO2e               | 0.092 kgCO2e    |
| 3         | c5.4xlarge | 0.207 kgCO2e               | 0.621 kgCO2e    |
| 3         | m5.4xlarge | 0.186 kgCO2e               | 0.558 kgCO2e    |
| 3         | m5.2xlarge | 0.093 kgCO2e               | 0.279 kgCO2e    |
| 3         | m5.large   | 0.023 kgCO2e               | 0.069 kgCO2e    |
| 3         | r5.4xlarge | 0.247 kgCO2e               | 0.741 kgCO2e    |
| 13        | t3a.large  | 0.023 kgCO2e               | 0.299 kgCO2e    |
| 6         | r5.2xlarge | 0.123 kgCO2e               | 0.738 kgCO2e    |
| 1         | t3a.xlarge | 0.046 kgCO2e               | 0.046 kgCO2e    |

Adding up all the instance values would result in the following **```M```** for the total architecture:

**M** (alternative) = 3,44 kgCO2e

This value is significantly different than the one we obtained through manual calculation, which is **M** = 9403 gCO₂eq. We are hoping to investigate this further as to why the noticeable difference, in future PoC's.

#### Notes

* We judged that CPU and Memory have the biggest impact and focused our calculations on these two components
* We assume that Climatiq's value for Energy (**E**) does not include Carbon Intensity (**I**)
* The value for **E** pertains to the year 2007 and the value for **I** pertains to the year 2022
* We assume the Total Embodied Emissions (**TE**) provided by Cloud Carbon Footprint are still valid (and not old decommissioned data) for this exercise, but we are still to explore other sources such as the [Boavizta API](https://doc.api.boavizta.org/) referenced in the [AWS EC2 Carbon Footprint Dataset
](https://docs.google.com/spreadsheets/d/1DqYgQnEDLQVQm5acMAhLgHLD8xXCG9BIrk-_Nv6jF3k/edit#gid=224728652) spreadsheet, which is in turn referenced in the [Building an AWS EC2 Carbon Emissions Dataset](https://medium.com/teads-engineering/building-an-aws-ec2-carbon-emissions-dataset-3f0fd76c98ac) article from [Medium.org](https://medium.com)
* We assume the hardware lifespan to be 3 years based on the manufacturer warranty, even though we do not have lifespan data for Intel or AMD server racks and we do not know the amount of time the application will run for
* We approached a manual calculation of the **M** value instead of using Climatiq's response due to the lack of clarity/understanding of ```embodied_cpu_estimate``` field, which implies that only CPU, and not Memory, is taken into account
* We are unsure of why Climatiq's response returns null for the ```emission_factor``` field. It is documented in [How Climatiq handles data quality](https://www.climatiq.io/docs/guides/understanding/data-quality) that the emission factor is omitted when it is deemed to be unusable. However, we are not aware of the implications of this and we do not know what, if any, other emission factor is considered as a default option
* We assume that the **TE** values from the Cloud Carbon Footprint spreadsheet are largely unaffected by the time period considered, since they refer to the manufacturing and disposal of the hardware components
* For the purpose of this exercise and to simplify the calculation we consider all the instances to be part of the eu-central-1 region

Overall, while there is a breadth of data for part of the variables used in the SCI calculation, an alignment in terminology and clearer documentation would be immensely valuable in making uses cases more approachable and increasing the degree of confidence in the calculation resulted.

---
sidebar_position: 5
---

# Embodied (M)

Embodied carbon (also known as embedded carbon) is the amount of carbon emitted during the creation and disposal of a hardware device.

When software runs on a device, a fraction of the total embodied emissions of the device is allocated to the software. This is the value of M that you need to calculate in the SCI equation.

### What are the different techniques that can be used for getting the embodied carbon for your hardware resources running the software application?

Here are some of the techniques that can be used to get the embodied carbon value:

#### 1) [ Lookup Embodied Database ](Datasets.md)
 This is when you look up available database/sources to get embodied carbon for the server/hardware resources used by the software application.

#### 2) [ Manual Approach  ](ManualEmbodiedLookupProcess.md)
This is when you use manual processes to get the embodied carbon for the server/hardware resources used by the software application.

## How do you calculate your application’s share of embodied carbon?​

If your application is running on the cloud, the hardware resources would be shared by multiple applications. To calculate the share of embodied carbon (M) for your software application, you can use the following equation:

M = TE * TS * RS

TE = Total embodied emissions, meaning the sum of life cycle assessment (LCA) emissions for all hardware components 
`TS = Time-share, meaning the share of the total life span of the hardware reserved for use by the software 
`RS = Resource-share, meaning the share of the total available resources of the hardware reserved for use by the software.

We can further refine the equation:

M = TE * (TR/EL) * (RR/TR)

TE = Total embodied emissions, meaning the sum of LCA emissions for all hardware components  
TR = Time reserved, meaning the length of time the hardware is reserved for use by the software 
EL = Expected lifespan, meaning the anticipated time that the equipment will be installed
RR = Resources reserved, meaning the number of resources reserved for use by the software
TR = Total Resources, meaning the total number of resources available.

The explanation of each of the components in this formula is also given in the specification.

[Refer to these guidelines](https://sci-guide.greensoftware.foundation/M/MSubCalculations) to calculate the above values.

## Data Disclaimer
Please note, the embodied data provided by the above approaches are approximation-based. We expect the embodied carbon data to be made readily available by vendors (device manufacturers, cloud providers, etc.) in the future. For instance, some of the managed services like API Gateway provided by the cloud vendors, don't disclose their server type/configuration. In the absence of server details, it would be difficult to calculate the embodied carbon for the server/hardware resources used by the software application. In such cases, you can go with approximation-based methods i.e. attributing a percentage of the total application carbon emissions.

**Please submit any comments you have [here](https://github.com/Green-Software-Foundation/sci-data/issues/new?assignees=atg-abhishek%2C+srini1978%2C+Henry-WattTime%2C+navveenb&labels=Guidelines+Feedback&template=guidelines-feedback.md&title=Guidelines+Feedback)**

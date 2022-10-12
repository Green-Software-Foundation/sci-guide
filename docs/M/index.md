---
sidebar_position: 1
---

# Embodied

Embodied carbon (otherwise referred to as “embedded carbon”) is the amount of carbon emitted during the creation and disposal of a hardware device.

When software runs on a device, a fraction of the total embodied emissions of the device is allocated to the software. This is the value of M that you need to calculate in the SCI equation.

### What are the different techniques that can be used for getting the embodied carbon for your hardware resources running the software application ?

There are multiple techniques that can be used to get the value of embodied carbon. Some of the techniques are listed below. 


#### 1) [ Lookup Embodied Database ](EmbodiedDatabase.md)
 Refers to the approach of looking up available database/sources to get embodied carbon for the server/hardware resources used by the software application.

#### 2) [ Manual Approach  ](ManualEmbodiedLookupProcess.md)
 Refers to the manual process of getting the embodied carbon for the server/hardware resources used by the software application.

## What is the equation to calculate your application share of embodied carbon?

If your application is running on the cloud, the hardware resources would be shared by multiple applications.
To calculate the share of embodied carbon (M) for your software application, we use the equation:

M = TE * TS * RS

Where:

TE = Total Embodied Emissions, meaning the sum of Life Cycle Assessment (LCA) emissions for all hardware components.
`TS = Time-share, meaning the share of the total life span of the hardware reserved for use by the software.
`RS = Resource-share, meaning the share of the total available resources of the hardware reserved for use by the software.
We can further refine the equation:

M = TE * (TR/EL) * (RR/TR)

Where:

TE = Total Embodied Emissions, meaning the sum of LCA emissions for all hardware components.
TR = Time Reserved, meaning the length of time the hardware is reserved for use by the software.
EL = Expected Lifespan, meaning the anticipated time that the equipment will be installed.
RR = Resources Reserved, meaning the number of resources reserved for use by the software.
TR = Total Resources, meaning the total number of resources available.

The explanation of each of the components in this formula is also given in the specification.

[ Click Here ](MSubCalculations.md) for general guidelines to calculate the above values.

## Data Disclaimer
Please note, the embodied data provided by the above approaches are approximation based. We expect the embodied carbon data to be made readily available by vendors (device manufacturers, cloud providers etc.) in future.
For instance, some of the managed services like API Gateway provided by the cloud vendors, don't disclose their server type/configuration. In absence of server details, it would be difficult to calculate the embodied carbon for the server/hardware resources used by the software application. In such cases, you can go with approximation-based methods (i.e cost based, attribute a percentage of total application carbon emission).
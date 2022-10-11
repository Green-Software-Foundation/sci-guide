---
sidebar_position: 2
---


# Embodied Calculations

### How do you calculate EL or expected lifetime ?
EL is expected Lifespan, the anticipated time that the hatrdware server/equipment will be installed. 
For most cloud servers or consumer devices, consider expected lifetime of 4 years. 
Converting to hours, we get approximately use 35,040 hours as the value. 


### How do you define time reserved or TR or Time Reserved, the length of time the hardware is reserved for use by the software?

Time reserved is dependent on the length of time the hardware is reserved for use by the software. In some ways this is dependent on the length of time for which SCI score is reported. 
For example, if the SCI score is x kgCo2eq for a software per 500 users per 1 day then the time reserved should be 1 day or 24 hours. 
Hence the time reserved is dependent on one of the parameters of the compound functional unit, which is the time for which the SCI reporting is calculated. 


### How do you define RR or Resources Reserved, the number of resources reserved for use by the software? 
RR represents resources reserved for use. This is the number of hardware resources reserved for use by the software. 

There are many options to look at this. 

If you are running an application on a bare metal server exclusively, then the entire hardware resources are at the disposal of the application.

However in typical cloud scenarios this is not the case as the bare metal is split up into multiple VMs (in case of virtualization by cloud providers).

-- Add details --


#### References

Evaluating the carbon footprint of a software platform hosted in the cloud
- https://medium.com/teads-engineering/evaluating-the-carbon-footprint-of-a-software-platform-hosted-in-the-cloud-e716e14e060c
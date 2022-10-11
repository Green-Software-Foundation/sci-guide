---
sidebar_position: 2
---


# Embodied Calculations

### How do you calculate EL or expected lifetime ?
EL is expected Lifespan, the anticipated time that the hatrdware server/equipment will be installed. 
For most cloud servers or consumer devices, consider expected lifetime of 4 years. 
Converting to hours, we get approximately 35,040 hours as the value. 


### How do you define time reserved or TR or Time Reserved, the length of time the hardware is reserved for use by the software?

Time reserved is dependent on the length of time the hardware is reserved for use by the software. In some ways this is dependent on the length of time for which SCI score is reported. 
For example, if the SCI score is x kgCo2eq for a software per 500 users per 1 day then the time reserved should be 1 day or 24 hours. 
Hence the time reserved is dependent on one of the parameters of the compound functional unit, which is the time for which the SCI reporting is calculated. 


### How do you define RR or Resources Reserved, the number of resources reserved for use by the software? 
RR represents resources reserved for use. This is the number of hardware resources reserved for use by the software. 

If you are running an application on a bare metal server exclusively, then the entire hardware resources are at the disposal of the application. For a Cloud, this maps to number of vCPUs of the given instance being used for running the application

### How do you define TR or Total Resources, the total number of resources available?
Total resources refer to the total number of resources available.

If you are running an application on a bare metal server exclusively, then the entire hardware resources are at the disposal of the application.

For cloud applications, for TR (total resources), you can use the largest instance vCPUs for the given VM family type. In the case of burstable (AWS) or Shared-Core (AWS) families, you can use the largest instance in the closest family, as this is more accurate than using the largest in the burstable/Shared-Core families. For the Azure Constrained vCPUs capable instances, you can use the underlying vCPUs of each instance as the largest vCPU. For more details, refer - https://www.cloudcarbonfootprint.org/docs/embodied-emissions


#### References

Evaluating the carbon footprint of a software platform hosted in the cloud
- https://medium.com/teads-engineering/evaluating-the-carbon-footprint-of-a-software-platform-hosted-in-the-cloud-e716e14e060c
---
sidebar_position: 4
---


# Embodied Calculations

### How do you calculate EL or expected lifespan?​
EL is the length of time you anticipate the hardware server/equipment will be installed. For most cloud servers or consumer devices, the expected lifetime is 4 years. This translates to approximately 35,040 hours.


### How do you define time reserved or TR?​

Time reserved refers to the length of time the hardware is reserved for use by the software. In some ways, this is dependent on the length of time the SCI score is being reported for. For example, if the SCI score is x kgCo2eq for a software per 500 users per 1 day, then the time reserved should be 1 day or 24 hours. Hence, the time reserved is dependent on one of the parameters of the compound functional unit, which is the time for which the SCI reporting is calculated.


### How do you define RR or resources reserved?​

RR represents the number of hardware resources reserved for use by the software. 

If you are running an application on a bare metal server exclusively, then the entire hardware resources are at the disposal of the application. For a cloud, you need to consider the number of vCPUs of the given instance being used for running the application.


### How do you define TR or total resources?​

Total resources refer to the total number of resources available.

If you are running an application on a bare metal server exclusively, then the entire hardware resources are at the disposal of the application.

For cloud applications, you can use the largest instance vCPUs for the given VM family type. In the case of Burstable (AWS) or Shared-Core (AWS) families, you can use the largest instance in the closest family as this is more accurate than using the largest in the Burstable/Shared-Core families. For the Azure Constrained vCPUs capable instances, you can use the underlying vCPUs of each instance as the largest vCPU. You can find more details [here](https://www.cloudcarbonfootprint.org/docs/embodied-emissions)


#### References
[Evaluating the carbon footprint of a software platform hosted in the cloud](https://medium.com/teads-engineering/evaluating-the-carbon-footprint-of-a-software-platform-hosted-in-the-cloud-e716e14e060c)

---
sidebar_position: 2
---


# Network Infrastructure Energy Calculation

### For the networking infrastructure, how do you calculate energy?​
There are 2 types of energy associated with the networking infrastructure. 

1. Embodied emissions - These are the emissions associated with the manufacturing and end-of-life disposal of the networking equipment. Today we don't have any reference data values for this infrastructure and hence we can keep it out of scope for the calculations. 

2. Usage Emissions - This is the energy spent due to the software sending data back and forth from the application browser to the application server backbone/database server and back. The data values are available as data in/data out metrics for most IaaS, PaaS and serverless services.

Calculating these values and multiplying them by the reference value of energy spent/GB will provide the usage emissions for networking infrastructure.

For example, [we calculated the energy spent/GB](https://github.com/Green-Software-Foundation/sci-data/issues/13#issuecomment-1123962142) and came out with 0.001 KwH/GB.
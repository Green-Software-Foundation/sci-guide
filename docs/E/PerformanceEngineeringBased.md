---
sidebar_position: 2
---


# Performance Engineering techniques

### What is the process of calculating energy using the performance engineering ?

The main consumers of power on a server will be the CPU, the GPU, and the memory. Estimating how much each consumes will give you an estimate of how much power your server, or your application on a server, consumes. We consider energy spent to be directly proportional to Power as E= P*t and thus E can be calculated.


### What is the formula that can be used for power calculation ?


The formula is as follows:

`P[kWh]=(c∙P_c+ P_r+g∙P_g)/1000`

Where c is the number of cores , P_c the power consumption of the CPU, P_g is the power consumption of the GPU ,g is the number of Memory sticks, P_r is the power consumption of the memory.

### How do you get the power consumed value (P_c, P_g, P_r) in the above formula?

Using performance tests, we will calculate CPU utilization, Memory utilization values. However  energy is not a linear function of utilization. An idle computer, even one at zero percent utilization, still draws electricity. This static power draw varies by configuration and by hardware components, but all components have some static power draw. This is called energy proportionality principle

### Considering above, how do you convert utilization to power? 

The conversion is documented in the SCI open data project and is available here - [Utilization to power conversion] (        https://docs.google.com/spreadsheets/d/1Viv94rMKH-fJrfD9Nn9_qkiAg1PDfIfJUAHRX9slG7A/edit#gid=526989613)

The output is called TDP co-efficient. We need to multiply this TDP co-efficient by the Thermal design power rating on the specific component

#### What is Thermal Design Power or TDP ?

TDP is Thermal design power. This number is meant to help with designing what cooling the component needs, and not strictly for estimating energy consumption. But there is a correlation, even though it will be a simplification.

#### What is the dataset that can can be used for finding TDP of servers/memory?

 Hardware manufacturers provide a data sheet for all their components and on which you will find a number called TDP, Thermal Design Power. For example TDP of server used in Azure App server Premium configuration (P2v2 ) -2nd Generation Intel® Xeon® Platinum 8272CL is 205 Watts -  (https://ark.intel.com/content/www/us/en/ark/products/192482/intel-xeon-platinum-8270-processor-35-75m-cache-2-70-ghz.html)


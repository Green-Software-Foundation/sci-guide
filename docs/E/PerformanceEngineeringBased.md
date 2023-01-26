---
sidebar_position: 2
---


# Performance Engineering Techniques

### What is the process of calculating energy using performance engineering?​

The main consumers of power on a server will be the CPU, the GPU and the memory. Estimating how much each consumes will give you an estimate of how much power your server, or your application on a server, consumes. We consider energy spent to be directly proportional to power as E= P*t.


### What is the formula for power calculation?​

The power calculation formula is as follows:

`P[kWh]=(c∙P_c+ P_r+g∙P_g)/1000`

- c = the number of cores 
- P_c = the power consumption of the CPU
- P_g = the power consumption of the GPU
- g = the number of memory sticks 
- P_r = the power consumption of the memory


### How do you get the power consumed value (P_c, P_g, P_r) in the above formula?

We can use performance tests to calculate CPU and memory utilisation values. However, energy is not a linear function of utilisation: An idle computer, even one at zero percent utilisation, still draws electricity. This static power draw varies by configuration and by hardware components, but all components have some static power draw. This is called the energy proportionality principle.

### How do you convert utilisation to power?​

The conversion is documented in the SCI open data project and is available here - [Utilisation to power conversion](https://docs.google.com/spreadsheets/d/1Viv94rMKH-fJrfD9Nn9_qkiAg1PDfIfJUAHRX9slG7A/edit#gid=526989613)

The output is called the TDP coefficient. This TDP coefficient is then multiplied by the thermal design power rating on the specific component.

#### What is Thermal Design Power or TDP ?

The TDP number helps with designing what cooling the component needs. Although this has an impact on energy consumption, it does not contribute directly to the estimation. 

#### What is the dataset that can can be used for finding the TDP of servers/memory?​

Hardware manufacturers provide a data sheet for all their components which contain the TDP number. For example, [the TDP of the server used in Azure App server premium configuration (P2v2) -2nd Generation Intel® Xeon® Platinum 8272CL is 205 Watts](https://ark.intel.com/content/www/us/en/ark/products/192482/intel-xeon-platinum-8270-processor-35-75m-cache-2-70-ghz.html)


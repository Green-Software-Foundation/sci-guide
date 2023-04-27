## Overview

This document describes a system that can accurately measure the energy consumption of application software. Instead of relying on energy measurement circuits that are integrated into the computer’s motherboard the whole computer is treated as a black-box and the electrical energy provided to the device is accurately measured using a high-precision benchtop power supply. The precision of the energy measurements is 0.01 Watts. The first part of the document describes the hardware and software architecture of the system. It provides all the necessary details to build a complete system. Part 2 covers a typical use case and workflow for measuring the energy consumption of a software product.

## Architecture for the system under consideration

![image](https://user-images.githubusercontent.com/43015809/229924927-9eb33a85-c3eb-4f3f-aff0-e71069c4dc5b.png)
Figure 1: Hardware architecture

![image](https://user-images.githubusercontent.com/43015809/229926859-cd86bd11-335a-4cf8-b719-4a96533f7dac.png)
Figure 2: Hardware configuration as deployed in our demo lab

![image](https://user-images.githubusercontent.com/43015809/229927095-007b8c65-1990-4e17-8724-74524ea02941.png)
Figure 3: Raspberry PI, located at the back of the hardware cluster

### Technical details of the components in the architecture

The following table contains the hardware components needed for one system. The PC and power supply ship with all the necessary power and data cables except Ethernet CAT5 cables which need to be provided separately.

| Item  | Make | Specification |
| ------------- | ------------- | ------------- | 
| Small form factor PC  | Lenovo (ThinkCentre M80q Desktop Enterprise Compact PC) | i7 8core, 64GB RAM, 1TB Pcie SSD | 
| Power Supply  | Rigol (DP811A Programmable Linear Dc Power Supply) | 1 Channel (2 ranges),200W Total Power, Maximum Output Range 20V/10A or 40V/5A | 
| Raspberry PI 3 or Raspberry PI 4 |  Raspberry | Quad Core 1.2GHz Broadcom BCM2837 64bit CPU 1GB RAM | 

Table 1: Bill of hardware components

## Procedure

This section describes the setup:

### Setting up the hardware
The small form factor PCs will be powered by the bench top power supplies instead of the power bricks that ship with the PCs. To avoid injury and damage to the PCs, research into the power requirements of the PCs is recommended.[CH1] The power bricks in our example deliver a constant voltage of 20.0V and are rated for a maximum power of 135W. This means that they can provide a peak current of 6.575A. The Rigol DP811A power supplies have one channel that can support a peak current of 10A at 20V. Make sure to consult electrician or electronics engineer before proceeding with the hardware setup.
The DC power brick has two cables attached to it. One cable is supplying the bricks with 120V AC power. The other end of the PC power supply carries DC power to the Small Form Factor PC. It plugs into the PC using a 6 mm male barrel connector. 
This end of the Lenovo power supply can be reused. Cut this cord close to the power brink and measure the polarity and voltage using a multi-meter. Mark the polarity of the two wires. Connect the wires to the correct terminals of the 20V Channel of the Rigol power supply. (Caution: confusing the polarity will damage the PC).

![image](https://user-images.githubusercontent.com/43015809/229930372-9b561ded-3754-489f-9cba-c3ad72940644.png)
Figure 4: The wire with the white insulation connects to the plus terminal and the silver wire strands connect to the minus terminal of the power supply.

### Workflow/Methodology
To calculate the power consumption, two measurements are required:

1. Baseline: Power consumption of a system with just the operating system as it is provided by the hardware manufacturer or delivered by the IT team as a brand-new operating system deployment.
2. Loaded System: Power consumption of the Baseline system plus:
a. Product Pre-Requisites (e.g., SQL Server)
b. Product installation (e.g., System Platform – All-In-One) 
c. Application Deployment (e.g., Soak Test Application)
d. Data simulation if applicable.

The resulting energy consumption is the difference between both measurements. It is calculated as the average of the Power measurements times their duration.
The duration of the measurements is application specific and related to the typical application lifecycle.

### Configuration Options

#### One PC – Sequential measurement
The baseline measurement and the loaded system measurement can be performed on the same PC in sequential order. This has the advantage that only one PC is needed.

#### Two identical PCs – Parallel measurement
The baseline measurement and the loaded system measurement can be performed in parallel by running the baseline on the first PC and the loaded system on the identical second PC. The advantage of the second configuration is that the Power consumption can be calculated continuously and in real time.

#### Measurement data archival
A critical part of the system is its ability to archive data in AVEVA Data Hub. The following graphic shows the power measurements of the baseline and loaded system (parallel configuration) over time.

![image](https://user-images.githubusercontent.com/43015809/229930891-06669423-e113-4b92-ac75-431a2b596e1a.png)
Figure 6: Power trends of Baseline and Loaded system side by side

#### Data flow and system software
The measurements are collected by the Raspberry PI (Voltage, Current, Power and Energy) and stored in AVEVA Data Hub for data archival and further consumption and analysis. The following diagram illustrates the data flow in detail:

![image](https://user-images.githubusercontent.com/43015809/229931338-8341639d-3ae0-4d0a-8394-6cd5d08e8d9d.png)
Figure 7: Conceptual Data Flow Architecture for the power bench test

#### Power usage prediction
The power usage by an application can be predicted using supervised machine learning. Performance metrics like CPU, Memory and I/O transactions need to be recorded in addition to the power usage data. A supervised machine learning algorithm, e.g., a neural network or regression, can be trained using this data. Finally, predictions about the power consumption can be made based on given performance metrics using the trained machine learning model.

### (What) Software boundary
All software included in the small factor PC including OS, drivers and any other prerequisites required are included.
For distributed software systems a hypervisor is used to accommodate such scenarios.

### (Scale) Functional unit 
In our industry and products we have different functional units that can be used. Examples are:
* Number of tags
* Database transactions
* Client server interactions
* Number of objects, scripts, alarms, events

Due to the complexity and heterogeneity of systems we chose to load them based on a typical user deployment loads per license boundaries (varies per product targeted).
Due to the high lever nature and black box approach of this methodology, we will break down the total number to the functional per unit parameter in the future steps.

Emission Estimation Framework Before AVEVA worked with Green Software Foundation guidance on Software Carbon Intensity, we developed a preliminary estimation framework for our Scope 3 use of product sold emission. Based on GHG reporting protocols, the emission for business activities can be simplified as:

Emission = Activity x Emission Factor Per Activity

To AVEVA products, the “activity” refers to the power consumption incurred when our customers use AVEVA products on annual basis. Emission factor is the average global emission factor per power consumption without going to details of power consumption at each customer site. Based on purchased IEA data, global average emission factor for power consumption is 0.49 g CO2e/Wh in 2019. Following formular is developed further to better account for AVEVA product related footprint with effective usage count, additional power required for software execution and effective usage time per year.

![image](https://user-images.githubusercontent.com/43015809/234899002-aab71e4b-3493-4ce8-be10-ed6f8b54e067.png)

- Effective usage count refers to number of active running devices that customers use to access the software. E.g. the global software install base is 100 
- Additional Power is estimated by assigning a type of device and required energy intensity. A base power consumption value is assigned to following typical types of devices. E.g. software running on a server with idle power usage at 100W lead to 20% additional power use, so that the additional power use is 20W. If the device is server, then we also need to consider other IT device group power use as well as data center additional power use. E.g. consider 25% additional power use for network & storage, and data center PUE = 2.0. The total additional power use will be 20 x 1.25 x 2 = 50W per software use at server.
- Effective time of usage per year, reflect the software usage profile. E.g. the user use the software 24x7 with 95% availability. The yearly usage hour = 24x365x0.95=8322hr 
- The annual emission for the server-based software = 100 x 50 x 8322 x 0.49 /1000000 = 20.4tCO2e/yr

### (How) Quantification method

### (Quantify) SCI Value Calculation
SCI 	= (O+M) per R


#### Operational Emission
O= E x I
Where 
E =	( PL - PB ) x t 	= (16.009 W – 11.335W) x 8322h = 39 kwh
O = 39 kwh x 474.8 gCO2e/kwh = 18517.2 gCO2

O = operational emission
E = energy consumed by a software system for a functional unit of work
PL= Average of measured loaded system power consumption = 16.009 W
PB= Average of measured baseline system power consumption = 11.335W
t = annual usage hour. Assume the software will be used in operations full day with 95% availability in the year: t =  365 x 24 x 95% = 8322 hr
I = location based emission factor. For the case study, we will use 2019 global yearly average emission factor 0.4748 kgCO2e/kWh to represent a global average status I = 474.8 gCO2e/kwh

#### Embodied Emission
M = TE x TS x RS = 350000 gCO2 x 20% x 100% = 70000 gCO2

TE = Total Embodied Emissions; the sum of Life Cycle Assessment (LCA) emissions for all hardware components. Here we refer to the PC provider’s report on emission for PC from Dell. “Total greenhouse gas emissions for the Latitude E6400 = 350 kg CO2eq” 
TS = Time-share; the share of the total life span of the hardware reserved for use by the software. Here we assume the hardware total life span = 5 years. Share of one year to the lifespan is 20% 
RS = Resource-share; the share of the total available resources of the hardware reserved for use by the software. Here we assume the hardware is dedicated for the software. So the resource share = 100%

## Sites for Software Sustainability Actions

### Energy Efficiency 
1.  Measure and track energy consumption per product and version over time
2.  Incorporate this measurement to the CI/CD pipelines to automate scoring per release.
### Hardware Efficiency
N/A Since we do not control the HW on which our customers run our software.
### Carbon Awareness
N/A Since we do not control how our customers source their energy.




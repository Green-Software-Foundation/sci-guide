---
sidebar_position: 1
---

# Energy Carbon Intensity

The carbon intensity of electricity is a measure of how much carbon (CO2eq) emissions are produced per kilowatt-hour (kWh) of electricity consumed. 

The only value that matters if you’re trying to optimize the scheduling of your computing in real-time is the marginal emissions intensity. This is the emissions intensity of the marginal power plant which will be turned up if you schedule some computing (e.g. increase electricity demand from the grid) at that moment.

### What are the different techniques that can be used for getting the value of carbon intensity ?

There are multiple techniques that can be used to get the value of carbon intensity. Some of the techniques are listed below. 

#### 1) [ API based techniques ](APIBased.md)
 Refers to the approach of integrating your software with APIs that provide the marginal carbon intensity at run time or at delayed intervals (i.e every 15 minutes). 
#### 2) [ SDK Based ](SDKBased.md) 
Refers to the approach of integrating your software with SDK that provides the marginal carbon intensity at run time or delayed intervals (i.e every 15 minutes).  
#### 3) [ Lookup Carbon Intensity Database / Sources  ](Database.md)
 Refers to the approach of getting the value of marginal carbon intensity for various data sources or emission databases.

If the marginal carbon intensity is not available at runtime or delayed intervals for a given location/geography, you can go with monthly, quarterly or yearly average emission data based on data availability,
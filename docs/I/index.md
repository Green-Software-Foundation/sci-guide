---
sidebar_position: 3
---

# Energy Carbon Intensity (I)

The carbon intensity of electricity is a measure of how much carbon (CO2eq) emissions are produced per kilowatt-hour (kWh) of electricity consumed.

The only value that matters if you’re trying to optimise the scheduling of your computing in real-time is the marginal emissions intensity. This is the emissions intensity of the marginal power plant which will be turned up if you schedule some computing at that moment.

### What are the different ways of finding out the carbon intensity value?​

Here are some techniques you can use to find out the value of carbon intensity.  

#### 1) [ API based techniques ](APIBased.md)
 This is when you integrate your software with APIs that provide the marginal carbon intensity at runtime or at delayed intervals (i.e every 15 minutes).
#### 2) [ Lookup Carbon Intensity Database / Sources  ](IntensityDatabase.md)
 This is when you get the marginal carbon intensity value from data sources or emission databases.

If the marginal carbon intensity is not available at runtime or delayed intervals for a given location/geography, you can go with monthly, quarterly or yearly average emission data based on data availability.

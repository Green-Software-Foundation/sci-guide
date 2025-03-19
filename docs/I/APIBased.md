---
sidebar_position: 3
---


# API Based


### How we can get carbon itensity through the API based technique?

 ​The API-based technique is one of the simplest options to get carbon intensity based on the location/geography where your application is hosted and running. Providers like [WattTime API](https://www.watttime.org/) and [Electricity Maps](https://electricitymaps.com/) provide an API to get the carbon intensity based on location parameters. An in house project has been built and it is called carbon aware SDK. At its core the [Carbon Aware SDK ](https://github.com/Green-Software-Foundation/carbon-aware-sdk/blob/dev/docs/overview.md)is a WebApi and Command Line Interface (CLI) that is a wrapper on top of WattTime and/or Electricity Maps to help provide the region where carbon intensity is the least.

1) The WattTime API provides access to real-time, forecast and historical marginal emissions data for electric grids around the world. The [API documentation](https://www.watttime.org/api-documentation/#grid-emissions-data) shows how to get grid emission data based on location.

2) Electricity Maps provides access to real-time, forecasted and historical carbon-intensity and power mix data for electricity grids around the world. You can find more detail in the [API documentation](https://docs.electricitymaps.com/) or explore the data in their [free app](https://app.electricitymaps.com).

3) [Carbon Aware API ](https://github.com/Green-Software-Foundation/carbon-aware-sdk#the-webapi_) gives the ability for applications to tap into the information around which is the least carbon intense region to run their Azure workloads. Please look into the detailed documentation for usage .

---
sidebar_position: 2
---


# API Based


### What APIs can be used to calculate energy ?​

 The API-based technique is one of the simplest options to get energy consumption for the hardware resources running your application. Providers like [Climatiq](https://www.climatiq.io/docs) provide APIs that give you the CO2e for the power consumption for computing (CPU), storage and memory, based on location and resource utilisation. There can be an improvement in adding real-time (or delayed interval) marginal carbon intensity data.

The API documentation is available [here](https://www.climatiq.io/docs#cpu)

Let’s take a look at a sample request and response to get the energy consumption for a CPU with a 1 hour utilisation running in the uk_west region.


# Request:
```bash
 curl --request POST \
--url https://beta3.api.climatiq.io/compute/azure/cpu \
--header 'Authorization: Bearer API_KEY' \
--data '{
    "cpu_count": 1,
    "region": "uk_west",
    "cpu_load": 1,
    "duration": 1,
    "duration_unit": "h"
}'
```

# Response:
```bash
{
    "co2e": 0.00057841,
    "co2e_unit": "kg",
    "co2e_calculation_method": "ar4",
    "co2e_calculation_origin": "source",
    "emission_factor": {
        "activity_id": "cpu-provider_azure-region_uk_west",
        "uuid": "be353893-f270-43a3-9d0f-82b2a6c8b46c",
        "id": "cpu-provider_azure-region_uk_west",
        "access_type": "public",
        "source": "CCF",
        "year": "2021",
        "region": "GB-CDF",
        "category": "Cloud Computing - CPU",
        "lca_activity": "use_phase",
        "data_quality_flags": []
    },
    "constituent_gases": {
        "co2e_total": 0.00057841,
        "co2e_other": null,
        "co2": null,
        "ch4": null,
        "n2o": null
    }
}
```

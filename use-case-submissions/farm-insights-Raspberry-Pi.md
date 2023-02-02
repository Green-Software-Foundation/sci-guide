## Scope

Farm Insights - simple use case. 

.NET Core application running with temperature, humidity, sunlight, and soil moisture sensors. Running headless on a raspberry pi. I purchased a power meter and had the pi plugged into it. Ontology is device only.

Blog post located here - https://www.wonderfultinyfarm.com/wtfblog/software-carbon-intensity

### Energy Efficiency 
.003 kWh per day for both the PI and the application running on the PI.

### Margin Location Emissions

.713kg per kWh per Henry per day.

### Embodied Carbon

Discuss Raspberry PI and no such number exists. Used 55 Kg of CO2e, used for smartphone metrics.

### (What) Software boundary

Boundary identified as hardware device and application only.

### (Scale) Functional unit 
Per Raspberry Pi

### (Quantify) SCI Value Calculation

((.003 kWh/D x 365 days/year * .713 kg/kwh)) + 55 kg

(.003 x 365) = 1.095 - kilowatts to run the device/software for 1 year

.713 x 365 days/year = 260 - location based margin emissions for 1 year

1.095 * 260 = 284.7 - kilowatts to run the software for 1 year x location based margin emissions

((kilowatts to run the software for 1 year x location based margin emissions for 1 year) + embedded carbon of the device) for each instance of the device.

**((1.095 *260) + 55 =339.7 CO2e per year** 

# On-Premise Web system

## Overview

* We calculated SCI value for a web system following 3-tier architecture.
* Calculating SCI value through this case study involves measuring the behavior of components and their results based on scenarios.
* We deployed TPC-W implementation proposed by [Transaction Processing Performance Council](https://www.tpc.org/) as a workload.
    * TPC-W is designed for measuring performance and cost for performance in an environment where online transaction processing (OLTP) is set up for e-commerce.
* In areas where it is difficult to measure, it is estimated by publication from trusted institutions.
* We assume life span of this system is 4 years, then `M` is divided by 35040 [hours] (4 [years] * 365 [days] * 24 [hours])

## Architecture for the system under consideration

![architecture](https://user-images.githubusercontent.com/7421132/208831164-a1db282f-d9b4-46ed-b977-9b639d24ab68.png)

### Technical details of the components in the architecture

* The architecture is configured by several network switches, LB/Web servers, AP servers, and DB servers.
    * They have redundant components.
    * They are located at data center which PUE assumes 1.5 .
* The database server is based on PostgreSQL with [PG-REX](https://wiki.clusterlabs.org/wiki/PgSQL_Replicated_Cluster)
* Each servers has bonding network interface with active-backup.
    * Layer 2 network switch `#1` and `#3` are connected from active interface.
    * Layer 2 network switch `#2` and `#4` are connected from backup interface.
* In LB/Web servers, `#1` is active, `#2` is backup server.
* In database server, `#1` is primary, `#2` is secondary server.

## Procedure

### (What) Software boundary

#### Included

* Load Balacners/Web servers (piggyback)
* Application servers
* Database servers
* Layer 3 network switch (L3 switch)
* Layer 2 network switches (L2 switch)

#### Excluded

* Web clients (desktop, laptop, mobile, and so on)

### (Scale) Functional unit 

We define functional unit `R` as 1 [Web Interaction (WI)].

The result of TPC-W benchmark is Web Interactions Per Second (WIPS), which is the number of responses (throughput) from the web server per second. In this case study, we got 10564.65 [WIPS], which means 38032740 [Web Interaction per hour] (multiplied by 3600 [hour in seconds]).

We calculate ((E * I) + M) per 1 hour, then divide it by the number of web interactions per hour (="scale factor") to derive the SCI score for the functional unit.

```
[scale factor] = [WIPS] * [hour in seconds]
               = 10564.65 * 3600
               = 38032740 [WI per hour]
```
### (How) Quantification method

#### L3 switch ((1) in figure of architecture)

##### Energy (`E`)

Estimates from [data sheet of Cisco Catalyst 9300 Series](https://www.cisco.com/c/en/us/products/collateral/switches/catalyst-9300-series-switches/nb-06-cat9300-ser-data-sheet-cte-en.html) and from `5 minute input rate`/`5 minute output rate` on Cisco IOS.

From Table.22 of data sheet, our network switch consumes 92.5 [W] in full port 100% traffic. We use this value as base line.

`5 minute input rate` and `5 minute output rate` from `show interfaces` command on Cisco IOS shows mean an approximation of traffic per second during a given 5-minute period. We collect these values several times, and calculate median of sum of them because they are connected with full duplex. Note that we should collect values from ports which we used only.

```
>show interfaces Gi1/0/13
GigabitEthernet1/0/13 is up, line protocol is up (connected)

 ~snip~

  Full-duplex, 1000Mb/s, media type is 10/100/1000BaseTX

 ~snip~

  5 minute input rate 0 bits/sec, 0 packets/sec
  5 minute output rate 2000 bits/sec, 2 packets/sec

 ~snip~
```

We can estimate energy consumption with following:

```
[Max power consumption per port] = [value from ATIS] / [kW] * [hour] / [number of ports]
                                 = 92.5 / 1000 * 1 / 24
                                 = 3.85e-3 [kWh/port]
[E per port] = [Max power consumption per port] * median([5 minute input rate] + [5 minute output rate]) / 2 (full duplex) / [link speed (Gbps)]
             = 3.85e-3 * median([5 minute input rate] + [5 minute output rate]) / 2 / 1000000000

E = sum([E per port]) * [PUE]
  = sum([E per port]) * 1.5
```

##### Carbon Intensity (`I`)

* We use regional yearly averages.
* The region the application was run in was Yokohama, Japan.
* According to [publication from TEPCO](https://www.tepco.co.jp/ep/company/warming/) (electric power company in Japan: Japanese), carbon intensity in 2021 is 0.457 [kgCO2/kWh] = 457 [gCO2/kWh]

##### Embodied Carbon (`M`)

This was on-premise system, and it was occupied by this workload. So we can use PCF from manufacturers straightly.

However Cisco has not published PCF of Catalyst 9300 series (Nov, 2022 at least), so we use [emission factor database from Ministry of the Environment in Japan](https://www.env.go.jp/earth/ondanka/supply_chain/gvc/estimate_tool.html) (ver. 3.2, in Japanese).

According this database, network switch is categorized to “computer accessories”, and one switch's PCF is 0.251 [tCO2eq] in quantity-based emissions intensity (No.239, code 333103). Thus we can estimate embodied carbon in mesurement duration with following:

```
M = 0.251 [tCO2eq] / [4 years in hour]
  = 251000 [gCO2eq] / 35040 [hours]
  = 7.16 [gCO2eq/hour]
```

#### L2 switch ((2) in figure of architecture)

##### Energy (`E`)

As well as Catalyst 9300, estimates from [data sheet of Cisco Catalyst 1000 Series](https://www.cisco.com/c/en/us/products/collateral/switches/catalyst-1000-series-switches/nb-06-cat1k-ser-switch-ds-cte-en.html) and from `5 minute input rate`/`5 minute output rate` on Cisco IOS.

From Table 2 of data sheet, our network switch consumes 22.8 [W] in 1Gbps 100% traffic. We will use this value as base line.

We can estimate energy consumption with following:

```
[Max power consumption per port] = [value from data sheet] / [kW] * [hour] / [number of ports]
                                 = 22.8 / 1000 * 1 / 24
                                 = 9.50e-4 [kWh/port]
[E per port] = [Max power consumption per port] * median([5 minute input rate] + [5 minute output rate]) / 2 (full duplex) / [link speed (Gbps)]
             = 9.50e-4 * median([5 minute input rate] + [5 minute output rate]) / 2 / 1000000000

E = sum([E per port]) * [PUE]
  = sum([E per port]) * 1.5
```

##### Carbon Intensity (`I`)

This network switches are located at same datacenter with L3 switch, so we use 457 [gCO2/kWh] as well as it.

##### Embodied Carbon (`M`)

As well as L3 switch, we use emission factor database from Ministry of the Environment in Japan. So `M` is 7.16 [gCO2eq/hour].

#### Physical severs ((3) - (5) in figure of architecture)

##### Energy (`E`)

These servers support IPMI (Intelligent Platform Management Interface), so we can use [ipmitool](https://github.com/ipmitool/ipmitool).

```bash
$ ipmitool -I lanplus -H [host] -U [username] -P [passphrase] dcmi power reading

    Instantaneous power reading:                   176 Watts
    Minimum during sampling period:                  1 Watts
    Maximum during sampling period:               6560 Watts
    Average power reading over sample period:      113 Watts
    IPMI timestamp:                           Thu Dec  1 11:41:20 2022
    Sampling period:                          00000001 Seconds.
    Power reading state is:                   activated
```

The command is executed from remote host several times. We use average of `Instantaneous power reading` as power consumption.

We convert this value (Watt) to energy (kWh) with following formula:

```
E = [average of Instantaneous power reading] / [kW] * [hour] * [PUE]
  = [average of Instantaneous power reading] / 1000 * 1 * 1.5
```

##### Carbon Intensity (`I`)

These servers are located at same datacenter with network switches, so we use 457 [gCO2/kWh] as well as network switches.

##### Embodied Carbon (`M`)

In this system, we use HPE DL360 Gen10. According to [data sheet from HPE](https://www.hpe.com/psnow/doc/a50002430enw), PCF is 6270 [kgCO2eq]. Thus we can estimate embodied carbon in mesurement duration with following:

```
M = 6270 [kgCO2eq] / [4 years in hour]
  = 6270000 [gCO2eq] / 35040 [hours]
  = 178.93 [gCO2eq/hour]
```


### (Quantify) SCI Value Calculation

#### L3 switch ((1) in figure of architecture)

```
[Max power consumption per port] = [value from ATIS] / [kW] * [hour] / [number of ports]
                                 = 92.5 / 1000 * 1 / 24
                                 = 3.85e-3 [kWh/port]
[E per port] = [Max power consumption per port] * median([5 minute input rate] + [5 minute output rate]) / 2 (full duplex) / [link speed (Gbps)]
             = 3.85e-3 * median([5 minute input rate] + [5 minute output rate]) / 2 / 1000000000

E = sum([E per port]) * [PUE]
  = 3.31e-3 [kWh] * 1.5
  = 4.96e-3 [kWh]

SCI = ((E * I) + M) / [scale factor (WI)] per R
    = ((4.96e-3 [kWh] * 457 [gCO2/kWh]) + 7.16 [gCO2eq/hour]) / 38032740 [WI] per R
    = 2.47e-7 [gCO2eq] per R
```

#### L2 switch ((2) in figure of architecture)

```
[Max power consumption per port] = [value from data sheet] / [kW] * [hour] / [number of ports]
                                 = 22.8 / 1000 * 1 / 24
                                 = 9.50e-4 [kWh/port]
[E per port] = [Max power consumption per port] * median([5 minute input rate] + [5 minute output rate]) / 2 (full duplex) / [link speed (Gbps)]
             = 9.50e-4 * median([5 minute input rate] + [5 minute output rate]) / 2 / 1000000000

E = sum([E per port]) * [PUE]
  = sum([E per port]) * 1.5
```

##### L2 `#1`

```
E = sum([E per port]) * [PUE]
  = 5.41e-4 [kWh] * 1.5
  = 8.11e-4 [kWh]

SCI = ((E * I) + M) / [scale factor (WI)] per R
    = ((8.11e-4 [kWh] * 457 [gCO2/kWh]) + 7.16 [gCO2eq/hour]) / 38032740 per R
    = 1.98e-7 [gCO2eq] per R
```

##### L2 `#2`

No traffic because it was connected from backup interfaces, however we need to include it as a software boundary.

```
E = 0.00 [kWh]

SCI = ((E * I) + M) / [scale factor (WI)] per R
    = ((0.00 [kWh] * 457 [gCO2/kWh]) + 7.16 [gCO2eq/hour]) / 38032740 per R
    = 1.88e-7 [gCO2eq] per R
```

##### L2 `#3`

```
E = sum([E per port]) * [PUE]
  = 6.37e-4 [kWh] * 1.5
  = 9.55e-4 [kWh]

SCI = ((E * I) + M) / [scale factor (WI)] per R
    = ((9.55e-4 [kWh] * 457 [gCO2/kWh]) + 7.16 [gCO2eq/hour]) / 38032740 per R
    = 1.99e-7 [gCO2eq] per R
```

##### L2 `#4`

```
E = sum([E per port]) * [PUE]
  = 7.60e-9 [kWh] * 1.5
  = 1.14e-8 [kWh]

SCI = ((E * I) + M) / [scale factor (WI)] per R
    = ((1.14e-8 [kWh] * 457 [gCO2/kWh]) + 7.16 [gCO2eq/hour]) / 38032740 per R
    = 1.88e-7 [gCO2eq] per R
```

#### Physical severs ((3) - (5) in figure of architecture)

```
E = [average of Instantaneous power reading] / [kW] * [hour] * [PUE]
  = [average of Instantaneous power reading] / 1000 * 1 * 1.5
```

##### LB/Web server `#1`

```
SCI = ((E * I) + M) / [scale factor (WI)] per R
    = ((0.139 [kWh] * 457 [gCO2/kWh]) + 178.93 [gCO2eq/hour]) / 38032740 per R
    = 63.74e-7 [gCO2eq] per R
```

##### LB/Web server `#2`

```
SCI = ((E * I) + M) / [scale factor (WI)] per R
    = ((0.116 [kWh] * 457 [gCO2/kWh]) + 178.93 [gCO2eq/hour]) / 38032740 per R
    = 60.98e-7 [gCO2eq] per R
```

##### AP server `#1`

```
SCI = ((E * I) + M) / [scale factor (WI)] per R
    = ((0.149 [kWh] * 457 [gCO2/kWh]) + 178.93 [gCO2eq/hour]) / 38032740 per R
    = 64.95e-7 [gCO2eq] per R
```

##### AP server `#2`

```
SCI = ((E * I) + M) / [scale factor (WI)] per R
    = ((0.147 [kWh] * 457 [gCO2/kWh]) + 178.93 [gCO2eq/hour]) / 38032740 per R
    = 64.70e-7 [gCO2eq] per R
```

##### DB server `#1`

```
SCI = ((E * I) + M) / [scale factor (WI)] per R
    = ((0.258 [kWh] * 457 [gCO2/kWh]) + 178.93 [gCO2eq/hour]) / 38032740 per R
    = 78.04e-7 [gCO2eq] per R
```

##### DB server `#2`

```
SCI = ((E * I) + M) / [scale factor (WI)] per R
    = ((0.193 [kWh] * 457 [gCO2/kWh]) + 178.93 [gCO2eq/hour]) / 38032740 per R
    = 70.23e-7 [gCO2eq] per R
```

### SCI Total

The total SCI for the whole system.

```
SCI = [SCI of L3 switch] + sum([SCI of L2 switches]) + sum([SCI of physical servers])
    = 2.47e-7 + 7.73e-7 + 402.64e-7
    = 4.12e-5 [gCO2eq per R (1 WI)]
```

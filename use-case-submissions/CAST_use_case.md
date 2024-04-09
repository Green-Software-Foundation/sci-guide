## Overview

- CAST used a combination of the SCI formula and its own automated software intelligence technology (CAST Highlight) to measure the estimated reduction in carbon emissions after decarbonizing a software application.
- The results show that decarbonizing a single application could potentially reduce annual CO2 emissions by an estimated 400 kg.
- These results are being used to develop a model within CAST Highlight that can be used to automatically estimate the potential CO2 emissions savings for any application.
- A summary of the story is also attached as a PDF for reference in addition to the the details provided as part of this template.

### Attachments
- [CAST Green Impact Case Study - PDF.pdf](https://github.com/Green-Software-Foundation/sci-guide/files/14411320/CAST.Green.Impact.Case.Study.-.PDF.pdf)
- [CAST case study - using SCI and software intelligence to estimate CO2 emissions.pdf](https://github.com/Green-Software-Foundation/sci-guide/files/14721312/CAST.case.study.-.using.SCI.and.software.intelligence.to.estimate.CO2.emissions.pdf)

## Architecture for the system under consideration

- See included architecture diagram here

![SaaS Application Architecture Diagram](https://github.com/Green-Software-Foundation/sci-guide/assets/43577377/e0fd337f-433b-499c-8ecd-be11075e4da1)


### Technical details of the components in the architecture

- Desktop Client App - this is a locally installed end-user application used for analyzing local files and producing results of the analysis to be uploaded to the SaaS application for visualization. It is primarily developed in JavaScript and Node.js.
- Portal - this is a web-based user interface for browsing reports and dashboards summarizing the analysis results. It is running on Linux and developed using SpringBoot, JEE, Hibernate, Spring Security, Jersey.
- Database - this is a PostgreSQL database used to build the reports and dashboards.
- Storage - this is cloud-based storage that hosts the Desktop Client App installer.
- CVEDB - this is a reference database used by some reports that is updated from the National Vulnerability Database via API. It is developed in Java and SpringBoot.
- Knowledgebase - this is a proprietary database of metadata used by some of the reports and dashboards. It is developed in Java, NoSQL, and PostgreSQL.

## Sites for Software Sustainability Actions


### Energy Efficiency 

1. The source code of the application.
2. Green deficiencies (inefficient code patterns) were replaced with alternate code that was more efficient. In this specific study, 10 green deficiencies were fixed.

### Hardware Efficiency

1. N/A
2. N/A

### Carbon Awareness

1. N/A
2. N/A

## Procedure

### (What) Software boundary

- Portal
- Database

### (Scale) Functional unit 

- Selected functional unit is an stress-testing scenario representing a typical day of operations of the software. 
- The scenario is composed of roughly 10000 API endpoint invocations, accessing an anonymized copy of production data. 
- The invoked API endpoints relate to functional content access (all aspects of CRUD), computation triggering, and report generation. 
- The scenario could then be played 100s of times.
 
The choice of functional unit applies to all components in your software boundary. 

### (How) Quantification method

- The focus of the study is to measure real-world impacts on the duration of the functional unit scenario.
- Measurement was performed in isolation using dedicated hardware resources in the cloud.
- No reliable/available metric except duration (CSP own carbon estimation model would only care about the hardware being up-and-running or not).
- Aside from the goal to develop a model to estimate potential CO2 emissions savings, what would matter for the measured software is to be able to support growing user activity without requiring an hardware upgrade, which would cause a larger environmental footprint.

### (Quantify) SCI Value Calculation

- The SCI formula is used to provide a framework to turn duration reduction into CO2 emissions savings
- Duration impacts the SCI results in two places
 - O, via the E factor as the E for the measured software would stop requiring energy when all its operations are done
 - M, via the TiR factor as the measured software would allow using the resources for other software when all its operations are done

### (Report) 

- Duration reduction was computed as a percentage difference between the average duration of 200+ runs of the functional unit scenario using the software before and the average duration of 200+ runs of the functional unit scenario after its "decarbonizing".

- Duration reduction percentage is applied to both E and TiR in the SCI formula

- Regarding O
 - baseline E comes for hardware manufacturer specifications
 - I comes from outworldindata
- Regarding M
 - TE comes for hardware manufacturer specifications 
 - EL is a default 4 year lifespan
 - RR/ToR is 3 as this software relies on development, integration and production environments

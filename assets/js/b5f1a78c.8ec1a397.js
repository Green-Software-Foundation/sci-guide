"use strict";(self.webpackChunkgreen_software_training=self.webpackChunkgreen_software_training||[]).push([[427],{4137:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>p});var n=a(7294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var u=n.createContext({}),c=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},l=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,r=e.originalType,u=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),m=c(a),p=s,h=m["".concat(u,".").concat(p)]||m[p]||d[p]||r;return a?n.createElement(h,i(i({ref:t},l),{},{components:a})):n.createElement(h,i({ref:t},l))}));function p(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=a.length,i=new Array(r);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:s,i[1]=o;for(var c=2;c<r;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},1722:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var n=a(7462),s=(a(7294),a(4137));const r={sidebar_position:8},i="Case Study Submissions",o={unversionedId:"CaseStudies",id:"CaseStudies",title:"Case Study Submissions",description:"DOW / Microsoft submission - Graph DB Use Case",source:"@site/docs/CaseStudies.md",sourceDirName:".",slug:"/CaseStudies",permalink:"/CaseStudies",draft:!1,editUrl:"https://github.com/Green-Software-Foundation/sci-data-guidance/tree/web/docs/CaseStudies.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Functional Unit (R)",permalink:"/R/"},next:{title:"Review Process for SCI Open Data",permalink:"/Review Process/Data"}},u={},c=[{value:"DOW / Microsoft submission - Graph DB Use Case",id:"dow--microsoft-submission---graph-db-use-case",level:2},{value:"NTT DATA - On-Premise Web system",id:"ntt-data---on-premise-web-system",level:2},{value:"Microsoft - Ecommerce web application using eShoponWe",id:"microsoft---ecommerce-web-application-using-eshoponwe",level:2},{value:"Microsoft - GreenAI",id:"microsoft---greenai",level:2},{value:"Farm-insights-Raspberry-Pi",id:"farm-insights-raspberry-pi",level:2},{value:"Aveva Case Study",id:"aveva-case-study",level:2},{value:"Endava-Fraud Detection API case study",id:"endava-fraud-detection-api-case-study",level:2},{value:"UBS SCI case study",id:"ubs-sci-case-study",level:2},{value:"Automated SCI Measurements with Green Metrics Tool",id:"automated-sci-measurements-with-green-metrics-tool",level:2}],l={toc:c};function d(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"case-study-submissions"},"Case Study Submissions"),(0,s.kt)("h2",{id:"dow--microsoft-submission---graph-db-use-case"},"DOW / Microsoft submission - Graph DB Use Case"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Over view")),(0,s.kt)("p",null,"Collaborative use case with Dow and Microsoft performed by Tammy McClellan and Srinivasan Rakhunathan from Microsoft. Eric Friedeberg, Brandon Smith, and Samantha Beauchamp from Dow."),(0,s.kt)("p",null,"Solution chosen is a current solution in development and is the measurement of carbon in both Neo4J and TigerGraph graph databases. Information was collected via load tests by calling an API deployed in an app service."),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/Green-Software-Foundation/sci-data-guidance/blob/dev/use-case-submissions/dow-msft-Graph-DB.md"},"Review full Case Study and submit comments here")),(0,s.kt)("hr",null),(0,s.kt)("h2",{id:"ntt-data---on-premise-web-system"},"NTT DATA - On-Premise Web system"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Overview")),(0,s.kt)("p",null,"We calculated SCI value for a web system following 3-tier architecture.\nCalculating SCI value through this case study involves measuring the behavior of components and their results based on scenarios.\nWe deployed TPC-W implementation proposed by Transaction Processing Performance Council as a workload.\nTPC-W is designed for measuring performance and cost for performance in an environment where online transaction processing (OLTP) is set up for e-commerce.\nIn areas where it is difficult to measure, it is estimated by publication from trusted institutions.\nWe assume life span of this system is 4 years, then M is divided by 35040 ","[hours]"," (4 ","[years]"," ",(0,s.kt)("em",{parentName:"p"}," 365 ","[days]"," ")," 24 ","[hours]",")"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/Green-Software-Foundation/sci-data-guidance/blob/dev/use-case-submissions/nttdatta-On-Premise-Web-system.md"},"Review full Case Study and submit comments here")),(0,s.kt)("hr",null),(0,s.kt)("h2",{id:"microsoft---ecommerce-web-application-using-eshoponwe"},"Microsoft - Ecommerce web application using eShoponWe"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Overview")),(0,s.kt)("p",null,"The application is a web application that is used in an ecommerce scenario by customers. It is a sample ASP.NET Core reference application, powered by Microsoft, demonstrating a single-process (monolithic) application architecture and deployment model."),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/Green-Software-Foundation/sci-data-guidance/blob/dev/use-case-submissions/msft-eShoppen.md"},"Review full Case Study and submit comments here")),(0,s.kt)("hr",null),(0,s.kt)("h2",{id:"microsoft---greenai"},"Microsoft - GreenAI"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Overview")),(0,s.kt)("p",null,"Machine Learning training consumes vast amounts of energy. In this test case, we will calculate the SCI delta between two convolutional neural networks (InceptionV3 and DenseNet) for an image classification scenario."),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/Green-Software-Foundation/sci-data-guidance/blob/dev/use-case-submissions/msft-green-ai.md"},"Review full Case Study and submit comments here")),(0,s.kt)("hr",null),(0,s.kt)("h2",{id:"farm-insights-raspberry-pi"},"Farm-insights-Raspberry-Pi"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Overview")),(0,s.kt)("p",null,".NET Core application running with temperature, humidity, sunlight, and soil moisture sensors. Running headless on a raspberry pi. I purchased a power meter and had the pi plugged into it. Ontology is device only."),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/Green-Software-Foundation/sci-data-guidance/blob/dev/use-case-submissions/farm-insights-Raspberry-Pi.md"},"Review full Case Study and submit comments here")),(0,s.kt)("hr",null),(0,s.kt)("h2",{id:"aveva-case-study"},"Aveva Case Study"),(0,s.kt)("p",null,"This document describes a system that can accurately measure the energy consumption of application software. Instead of relying on energy measurement circuits that are integrated into the computer\u2019s motherboard the whole computer is treated as a black-box and the electrical energy provided to the device is accurately measured using a high-precision benchtop power supply. The precision of the energy measurements is 0.01 Watts. The first part of the document describes the hardware and software architecture of the system. It provides all the necessary details to build a complete system. Part 2 covers a typical use case and workflow for measuring the energy consumption of a software product."),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/Green-Software-Foundation/sci-guide/blob/dev/use-case-submissions/AVEVA_case_study.md"},"Review full Case Study and submit comments here")),(0,s.kt)("hr",null),(0,s.kt)("h2",{id:"endava-fraud-detection-api-case-study"},"Endava-Fraud Detection API case study"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Overview")),(0,s.kt)("p",null,"We analyzed a fraud detection tool, deployed and maintained by our organization, which scans online transactions and gives it a risk score.\xa0"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/Green-Software-Foundation/sci-guide/blob/a1df2ad6b4bfedd3743b716369edb8fabdd9f844/use-case-submissions/Endava-Fraud%20Detection%20API%20case%20study.md"},"Review the full Case Study and submit comments here")),(0,s.kt)("hr",null),(0,s.kt)("h2",{id:"ubs-sci-case-study"},"UBS SCI case study"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Overview"),"\nThis document describes the testing the SCI of two software applications. The first software application is for an Investment Bank and the other in Asset Management. We wanted to baseline the carbon emissions for these two software applications, to determine the data that is currently available in the organisation for the calculations."),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/Green-Software-Foundation/sci-guide/blob/dev/use-case-submissions/UBS_SCI_use_case.md"},"Review the full Case Study and submit comments here")),(0,s.kt)("hr",null),(0,s.kt)("h2",{id:"automated-sci-measurements-with-green-metrics-tool"},"Automated SCI Measurements with Green Metrics Tool"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Overview"),"\nThe Green Metrics Tool (GMT) is an open-source software solution designed to automate the generation of the Software Carbon Intensity (SCI) metric for a given software. It acts as a container native benchmarking tool, simulating typical software interactions and measuring parameters such as machine energy, CPU energy, and network traffic. In other words, the GMT mimics the software and inspects how much electricity the computer uses, how hard the processor (CPU) is working, and how much data is being sent over the internet."),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/Green-Software-Foundation/sci-guide/blob/dev/use-case-submissions/Automated_SCI_Measurements_with_Green_Metrics_Tool.md"},"Review the full Case Study and submit comments here")))}d.isMDXComponent=!0}}]);
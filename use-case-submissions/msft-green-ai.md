## Overview

Machine Learning training consumes vast amounts of energy. In this test case, we will calculate the SCI delta between two convolutional neural networks (InceptionV3 and DenseNet) for an image classification scenario. 

## Sites for Software Sustainability Actions

### Energy Efficiency 

1. Training to be run on Azure Machine Learning GPU
2. Prior analysis has shown that InceptionV3 Outperforms DenseNet:
- 10.3% higher accuracy than DenseNet
- 13.0% less $USD than DenseNet 
- 20.0% less energy than DenseNet
- 9.83% less time to train than DenseNet

### Hardware Efficiency (N/A)

This will not be an action taken in this test case. One could propose that a reduced training time would consequently reduce embodied carbon, but this is out of scope for the calculations. 

### Carbon Awareness

1. Time-shifting workloads 
2. Using WattTime's API and the GSF Carbon Aware SDK project, we will shift the workloads to the optimal time within a 24-hour period. 

## Procedure

### (What) Software boundary

- Cloud instance for containerized workload (containerized workloads) 

### (Scale) Functional unit 

r = Machine Learning training job

### (How) Quantification method

- energy measurement will be provided through new [GPU energy telemetry that is available in Azure Machine Learning](https://techcommunity.microsoft.com/t5/green-tech-blog/charting-the-path-towards-sustainable-ai-with-azure-machine/ba-p/2866923)
- carbon-aware data will leverage WattTime's marginal carbon intensity API 
- machine: Low priority GPU: NVIDIA T4 NC16as v3 @1.204/hr pay-as-you-go price
- dataset: Tiny ImageNet (1% subset of ImageNet): 100k images, 200 classes
- [repository](https://github.com/KangJay/Team2InceptionV3)
- Duration: 10 epochs


### (Quantify) SCI Value Calculation
Energy efficiency: 
![image](https://user-images.githubusercontent.com/8934290/146989554-3dbe61d4-cfea-4f0a-8ca6-10ef97a85e04.png)
carbon-aware findings: 
![image](https://user-images.githubusercontent.com/8934290/146989613-b5a004e8-6778-40bf-b4cd-b56573d7a6fe.png)


### (Report - WIP) 

_Disclose the software boundary and your calculation methodology, including items that you might not have included in the previous sections_
![image](https://user-images.githubusercontent.com/8934290/146991262-0c3300ed-aa77-4f2c-a3ef-91f4abc57a7d.png)

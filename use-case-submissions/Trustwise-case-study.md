## Overview

In the dynamic landscape of the insurance industry, companies are increasingly leveraging generative AI to enhance customer service,
streamline claims processing, and develop predictive models for risk assessment. However, the deployment of these AI models comes with
significant energy and carbon costs, raising concerns about their environmental impact and operational efficiency.

The ISO SCI 1.0 standard offers a framework to address these challenges by providing guidelines for sustainable computing. This use case
aims to demonstrate the practical implementation of the ISO SCI 1.0 standard in a high-stakes, real-world scenario within the insurance
sector.

### Proposal Objectives:
- Cost Reduction: Optimize target generative AI workload to achieve significant cost savings.
- Energy Efficiency: Implement strategies to minimize the energy consumption of AI operations.
- Carbon Footprint Reduction: Reduce the carbon emissions associated with the target AI workload.
- Regulatory Compliance: Assess adherence to ISO SCI 1.0 standard and regulatory requirements.

## Target Use Case
The project will focus on optimizing specific generative AI workloads with a UK-based banking and insurance company, encompassing the
following components:
- Customer Service Automation: Utilizing AI to handle customer inquiries, policy renewals, and other service-related tasks.
- Policy Operations: Enhancing the efficiency and accuracy of Policy search and customer support.
Expected outcomes of the project are:
- Cost Efficiency: Achieve a >30% reduction in operational costs through optimized AI workloads.
- Energy Savings: Decrease energy consumption by 30%+, contributing to a more sustainable AI deployment.
- Carbon Footprint Reduction: Lower carbon emissions, aligning with the insurance company's sustainability goals.
- Enhanced Compliance: Ensure compliance with the ISO SCI 1.0 standard and other relevant regulations.
This use case outlines a strategic approach to implementing the ISO SCI 1.0 standard in insurance generative AI workloads. By partnering
with the Green Software Foundation and leveraging the expertise of Trustwise and the Responsible AI Institute, this project aims to set a
benchmark for sustainable and efficient AI operations in the insurance industry

## Solution Implementation
1. Initial Assessment:
- Conduct a comprehensive assessment of the current AI workload, focusing on cost, energy consumption, and carbon footprint.
- Identify key areas where ISO SCI 1.0 standards can be applied.
2. Optimization Strategy:
- Deploy the Trustwise Optimize:ai API to optimize AI performance, reduce operational costs, and enhance energy efficiency.
- Implement algorithmic controls for model selection and pipeline tuning based on performance, cost, energy, safety, and compliance
requirements.
3. Implementation:
- Integrate the ISO SCI 1.0 standard into the AI workload through the Trustwise Optimization Hub.
- Monitor and adjust AI operations to ensure continuous improvement and adherence to the ISO SCI standard.
4. Evaluation and Reporting:
- Measure the impact of the optimization on cost, energy efficiency, and carbon footprint.
- Provide detailed reports to the Green Software Foundation, highlighting the outcomes and benefits of the implementation.
5. Ongoing Monitoring of Production
- Provide a mechanism to monitor production deployment and surfacing metrics for review.
- Provide alerts to show divergence from agreed metrics and their thresholds

### Customer Background
The Customer, a leading UK based banking and insurance services company serving over 25 million customers, is
heavily investing in generative AI technology to enhance both operational efficiency and customer experience. The
business operates under a number of distinct brands.

The company is focused on optimizing costs while ensuring that latency remains at or below 2 seconds per
evaluation, a critical factor for delivering real-time financial services. At the same time, they prioritize strict
adherence to safety and alignment metrics, ensuring that all AI outputs meet established thresholds set by the Subject
Matter Experts (SMEs).

### Customer Challenges
**Hallucination and Data Leak Risks:**
- The bank serves over 25 million customers, facing significant risks with hallucinations and data leaks in critical
operational processes like summarization, hindering GenAI adoption.

**Policy and Regulatory Alignment Issues:**
- Ongoing challenges in ensuring Gen AI responses align with the bank’s internal policies and the UK FCA
Consumer Duty Act, posing regulatory risks.

**Vulnerable Group Alignment:**
- Evaluating and validating alignment outputs for LLMs tested on different vulnerable group personas with varied
prompts remains a complex and critical task.

**Cost and Latency Concerns:**
- The bank is grappling with high infrastructure costs and long inference processing times for handling high
workloads of requests per day, necessitating a thorough investigation into performance and latency
improvements across different infrastructures like CPUs, GPUs, and TPUs.

**Sustainability Goals:**
- Energy Savings: Decrease energy consumption by 30%+, contributing to a more sustainable AI deployment.
- Carbon Footprint Reduction: Lower carbon emissions, aligning with the insurance company's sustainability
goals

### Solution: SCI Compliant - Trustwise Optimize:ai
**Trustwise Optimize:ai capabilities enabled the bank to:**
**Enhance Productivity**
- by streamlining LLM Ops workflows, automating processes, and improving LLM response evaluations while
maintaining accuracy and reducing AI hallucinations.

**Optimized AI Resource Utilization**
- by shifting from static, manual routing to dynamic, intelligent management, leading to significantly reduced
latency and carbon savings.

**Improved Visibility**
- into AI operations, including AI behavior, resource usage, performance metrics, and bottlenecks, to enable
better planning, cost management, and compliance with regulations.

**Strengthened Safety and Alignment**
- by implementing rigorous controls that ensure AI outputs meet safety requirements and align with both internal
policies and external regulations.

**Accelerate AI Model and Workload Deployment**
- by leveraging automated, real-time optimization of AI pipeline and resources, significantly speeding up model
training, LLM response evaluations, and deployment while helping to ensure alignment with business

### Trustwise Optimize:ai Solution - Key Features

**Cost Optimization**
- Selects the most cost-effective AI models and configurations to significantly reduce operational costs.

**Carbon Footprint Reduction**
- Uses energy-efficient algorithms to lower AI power consumption and support sustainability goals.

**AI Alignment**
- Aligns with internal business policies and top regulations to integrate them into AI outputs and minimize penalty
risks.

**Performance Enhancement**
- Uses advanced tuning to boost AI deployment speeds and performance, enhancing efficiency and competitive
edge.

**Scalability and Flexibility**
- Integrates smoothly via API, scales to business needs, and enhances AI capabilities without major new
investments.

### Optimization Methodology and Strategies

The Trustwise Optimize:ai solution is designed to optimize both the cost and carbon emissions of Generative AI
applications. The solution functions by taking in the user’s request and computing all possible iterations of the
Retrieval-Augmented Generation (RAG) pipeline that can be implemented. These iterations are unique
combinations of RAG configurations, with each configuration featuring a set of adjustable parameters.

The key configurations include:
- Chunking Strategies
- Retrieval Strategies
- Energy Use Strategies

This structured approach enables Trustwise Optimize:ai to deliver highly efficient and environmentally sustainable.
Generative AI solutions.

### User Inputs to run a Trustwise Optimize:ai Scan
As part of the Trustwise Optimize:ai scan request, the user includes the following information necessary for optimizing the Generative AI
workload:

**List of Large Language Models (LLMs) to Test**
- A comprehensive list of LLMs that will be tested as part of the evaluation process.

**List of Embedding Models**
- The specific embedding models that are being used in the RAG pipeline.

**Data Directory/Documents**
- The directory or documents that are ingested into the RAG pipeline for processing and retrieval.

**API Keys**
- API keys for the models and embedding models being tested.

**Test Queries**
- Queries to be asked of the documents ingested into the RAG pipeline for validation and assessment.

**Trustwise Safety Evaluation Toggle**
- A toggle switch to enable or disable Trustwise Functional Safety evaluations as part of the testing process.

**Trustwise Alignment Evaluation Toggle**
- A toggle switch to enable or disable Trustwise Functional Alignment evaluations during the testing.

### Gen AI Workload - Home Insurance Policy Booklet

The Gen AI Insurance workloads used for this scan replicate a production use case to keep a track of emissions and power consumed.
The workloads being run by Trustwise take a specific use case document, **"Home Insurance Policy Booklet"** and synthetically generated questions from this document.
A total of 291 questions were generated, out of which 50 were randomly chosen to run the optimization scans. The 50 selected questions are then processed through a retriever
pipeline. The context retrieved back from the document along with the question are stored as the composite prompts which are inputs to the LLMs - the workload tests prompting
similar to a RAG pipeline.
The insurance policy booklet titled **"Home Insurance Policy Booklet"**. The booklet outlines the terms and conditions of our customers home insurance policy, including both
buildings and contents insurance. Covering the following critical aspects:
- **Words and Phrases with Special Meanings:** Provides definitions for specific terms used throughout the policy, such as "buildings," "contents," "family," "home," etc.
- **Things You Need to Know:** Covers important legal aspects, including the applicable law, fraud prevention, maintaining client’s home, and what to do if you're having trouble
making payments.
- **How to Make a Claim:** Instructions on the steps to take before contacting the insurer, how to submit a claim, and what information you'll need to provide. The policy outlines
that claims should be made as soon as possible to avoid worsening damage or loss.
- **Buildings & Contents Insurance:** Describes what is covered under buildings insurance (e.g., damage from fire, storms, etc.) and contents insurance (e.g., theft, damage to
personal belongings), along with exclusions and limitations.
- Accidental Damage Cover: Optional coverage for accidents that cause damage to buildings or contents.
- **Away from Home Cover:** Extends coverage for specified items taken away from home, depending on the policy.
- **Exclusions:** The policy specifies what is not covered, such as routine maintenance, wear and tear, and certain types of loss or damage (detailed in a dedicated section).
- **Making Changes and Cancelling the Policy:** Information on how to make changes to clients policy, and the process and implications of cancelling it.
- **Complaints and Contact Information:** Instructions on how to file a complaint and contact details for further assistance.
- **Legal Expenses Cover:** Details about the legal expense coverage, including what it covers, how to claim, and relevant conditions.
The policy emphasizes the importance of understanding client’s coverage limits, keeping client’s information accurate, and following proper procedures to ensure claims are
processed smoothly.

### Gen AI Workload - Home Insurance Policy Booklet
**Sample Questions:**
- What if a vehicle crashes into my house, does my insurance cover the damage?
- Will you pay the full amount of a claim if I have other insurance, or just part of it?
- What's the rate you pay to law firms per hour?
- What's the maximum amount you guys will pay out for a single claim?
- What are your Standard Terms of Appointment all about?

**Sample Responses**
- Your insurance policy may cover the damage if a vehicle crashes into your house, as it includes coverage for
accidents that happen in the home and the legal liability as the owner of the home. However, you should check
your policy schedule for specific details and limits.
- The Standard Terms of Appointment set out the terms and conditions, including the amount that will be paid to
an Appointed Representative, that apply to the relevant type of claim. This could include a conditional fee
agreement such as “no-win, no-fee.”
- The maximum amount that will be paid out for a single claim is £50,000.
- The rate paid to law firms per hour is currently £130.
- If you have other insurance that also covers what you are claiming for, only a share of the claim will be paid
unless stated otherwise in your policy.

### Solution Implementation
![image](https://github.com/user-attachments/assets/5826e26c-4212-4491-8bb9-c5aeae0b617f)

### Calculating the SCI Score
1. Combine the operational and embodied emissions to compute the total carbon emissions (C) caused by the prototype.
2. Calculate the SCI score using the formula: SCI Equation = ((E×I) + M) per R

Trustwise Optimize:ai calculates the SCI score automatically using the above formula and the datasets mentioned earlier. The SCI Scores given below are calculated
manually to show that automatically calculated scores from Optimize:ai are verifiable.
![image](https://github.com/user-attachments/assets/cea7d469-a878-458b-8e97-3196dad501c0)

**Assumptions related to Carbon Calculations (SCI values)**
1. 100% Machine (CPU and GPU) usage when API call is running.
2. Assuming every model is deployed on the same selected infrastructure in Optimize:ai.
3. No carbon offsetting taken into account from the cloud providers.
4. Assumes that the OpenAI models are running on the same infrastructure as the other models (since no access to the target machines are given) - this is an estimation of the
infrastructure that OpenAI models run on and subsequently results in a very low carbon footprint that these models would have - gpt-4o model is used as the baseline to
compare the other models to.
5. SCI Guidance estimates hardware in use for 4 years, or 35040 hours. Our time unit is 1 hour, hence timeshare is 1/35040.
6. SCI per API call assumes the entire project has 10k calls made over 4 years (number of prompts for the entire project can be changed).
7. Selected Infrastructure is only used for this project throughout the infrastructure lifespan (No resource share taken into account).
8. API call has a latency of x seconds (hence 3600/x API calls per hour).

### Leaderboard (Iterations 0 to 26)
![image](https://github.com/user-attachments/assets/11651aef-dbf8-4f80-8f5b-8bdb39d893f4)

### Leaderboard (Iterations 27 to 44)
![image](https://github.com/user-attachments/assets/f6643809-a5f7-45e0-99cf-f65b8257e9eb)
![image](https://github.com/user-attachments/assets/1e5a8c73-4061-4470-9d77-df5fbc749ff0)

### Radar Chart
![image](https://github.com/user-attachments/assets/d8fe4d2f-7731-4c66-9359-0d696e74c231)

### Conclusion
As laid out in the project plan with the targets of achieving Cost Efficiency, Energy Savings, Carbon Footprint Reduction and Enhanced Compliance - We've run
Optimize:ai with the given 5 models.

Starting out with the baseline model **gpt-4o and a baseline RAG configuration of Chunk Size = 1024 and Number of Retrieved Chunks as 2** we've tested
45 different iterations for the 5 LLMs and have narrowed down the results to the most optimized pipeline in terms of not just Cost, Carbon and Energy but also
Safety and Alignment of the pipelines which is **Meta-Llama-3.1-8B-Instruct-Turbo with a Chunk Size of 256 and Number of Retrieved Chunks as 4.**

![image](https://github.com/user-attachments/assets/85ff3cdc-50ae-420c-86e4-e2011f3a6bd0)

The exact values where we see the Cost Efficiency and Carbon Footprint Reduction is as follows :
- **SCI for 10K API Calls for baseline : 8.7657704332**
- **SCI for 10K API Calls for picked pipeline : 4.3669117073**
- **Cost estimates for 10K prompts - baseline : USD 64.59**
- **Cost estimates for 10K prompts - picked pipeline : USD 2.01672**
Since, Carbon Emissions is directly proportional to the Energy Consumed we can hence conclude that the optimized pipeline has achieved the targets we set out for.

### About Trustwise
Trustwise helps organizations innovate confidently and efficiently with generative AI. Our flagship product,
Trustwise Optimize:ai, is a first-of-its-kind generative AI application performance and risk management API that
mitigates AI risks and reduces financial and environmental costs of deploying LLM systems in high stakes
enterprise environments.

Trusted by enterprises across various highly regulated industries, Optimize:ai API works with any AI model,
supports various cloud, on-premises, and edge architectures, and is capable of handling large-scale generative AI
operations and workloads. Headquartered in Austin, TX, with research labs in Cambridge, UK, and New York,
Trustwise is backed by Hitachi, Allstate and others. Learn more at Trustwise.ai.












# Review Process for SCI Open Data 

# Scope
Software Carbon Intensity Calculations require open datasets for Energy (E), Carbon intensity (I) and Embodied emissions (M). The other component “R” or functional unit may not require open datasets as this is more of a scaling factor for the SCI equation. 

The open datasets are required to provide reference values for E, I, M etc. These reference values are compared against the calculated values of E, I and M from the model to arrive at SCI numbers. Many private individuals, independent organizations and enterprises create these open datasets. 

The intent of the SCI open data project is to: 
- Identify intake channels and come up with a simple to use intake form 
- Come up with common review parameters for the datasets 
- Identify and agree on the different stages for the dataset review 
- Enable the creation of an API that can be used to provide the SCI values for the components 

# Intake Process - Components of SCI Open data 
Submitted SCI datasets should have the following constituents:

- Title: Title of Dataset
- Description: A full description of the dataset along with a overview of the methodology used.
- Type of dataset: Public/Private
- Environment/Context : Laptop/PC, Cloud
- Logic used for computation: 
- Submitted by: The name of the person(s) submitting the pattern
- Submitted Date : 
- Published Date: The date this version of the pattern is published. This will be provided by the SCI Data working group upon approval
- Tag Category : Select the most appropriate category from: Artificial Intelligence, Cloud, or Web which might apply to this dataset
- Tags: A pre-defined list of additional tags which might apply to the Dataset(e.g. Machine Learning, Gaming, Mobile).
- Solution: How will this dataset solve any open gap 
- Assumptions: What are the assumptions being made
- Not Applicable to : Briefly describe the scenarios where we shouldnt apply this dataset.

# Review Parameters for SCI Open data
When submitters submit a dataset, we need to come up with a common set of parameters that help provide a consistent basis for review. 

1) Has the dataset been used or endorsed by any of the cloud providers or OEMs? 
2) Is the dataset available as a project on github ? If on github, has there been any recent activity indicating active usage?
3) Is the dataset primarily used for E, I or M calculations or all of them?
4) What is the “Context” where the dataset is applicable ? Context - bare-metal, Public cloud (GCP/Azure/AWS/Alibaba etc), Laptop (OEM)
5) Is the dataset public or private?
6) Is there a detailed explanation of the methodology used within the dataset which helped them arrive at reference numbers?
7) Have the exclusion criteria been called out clearly where this dataset should not be used and is not applicable?

# Stages of SCI Open dataset Review

The catalog of SCI Open data  is an online open-source database of datasets reviewed and curated by the Green Software Foundation across a wide range of categories. Anyone can submit a dataset that triggers a detailed review process by the Foundation. 

# 1) Discussion
Anyone (member or non-members) can discuss patterns via the GitHub Issues tab of the repository (SCI-guidance). There will be an issue template to add a new dataset. Changes to existing datasets can be proposed via Discussion forum. Once they are ready then can go ahead and create a PR to add a dataset to the database.

# 2) Draft
Anyone (member or non-members) can create a PR matching the template for SCI Open datasets to be merged into the dev branch. This starts an internal process of review.

# 3) Initial Review
An initial review by one member of the SCI Guidance project. The goal of this stage is just to make sure the dataset is something that can be used reliably for SCI calculations. The initial reviewer will also decide what subject matter experts are required to review this pattern.

This needs an explicit approval from the initial reviewer before the dataset can move to the next stage.

# 4) Standards Group Review 
One or more subject matter experts in the GSF Standards Project are asked to review the dataset and give their feedback. This can be even done during the weekly standards call.

This needs an explicit approval from the Standards Project review before the dataset can be approved.

If approval is received, the PR can be approved and merged into dev. The dataset is merged into dev but is not published on our website.

# 5) Consistency Review
Every quarter the dev branch is merged to the main branch and this triggers a consistency review where anyone in the Foundation has 2 weeks to comment or object. We need GSF wide consensus for the dataset to be published.

This is done in batches every quarter to reduce the noise to the rest of the Foundation.

# Review Timelines
The working group will regularly review submitted patterns along the following timeline:

 Initial Review: 1 week
 Standards Group Review: 2 weeks (plus additional iteration time based on feedback)


# Outcome

Approved dataset with documented note of the context in which this dataset should be used.





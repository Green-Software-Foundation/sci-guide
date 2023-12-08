#  Simple and automated SCI measurements

## Executive Summary
The Green Metrics Tool (GMT) is an open-source software solution that provides the capabilities of automating the process
of generating an SCI metric for a given piece of software. 

The GMT is essentially a container native benchmarking tool that instruments a software according to a so called *usage scenario*. 
Which describes the usual interaction with the software in an computer executable fashion. 
While executing this scenario different measurement sources are polled like machine energy, cpu energy, network traffic etc. and then put into context with a unit of work.

When supplying the basic input variables to the SCI like (I, EL, RS, TE) and instrumenting the software so that it outputs the unit of work variable (R) to a standard output stream the tool automatically generates the SCI metric. 

All of this instrumentation is fixated in a typical DevOps like standard infrastructure as code (for instance Docker compose files) and can be part of the git repository. 
Thus, businesses can seamlessly integrate carbon footprint assessments into their software development pipelines, fostering a culture of sustainability.

## Description of problem

When talking about the energy efficiency of a software it is a common approach to look at the work done and also at the total energy cost and put these metrics in relation to one another. The SCI goes one step further and also adds the embodied carbon as well as the current carbon grid intensity. However so far the SCI has to be manually derived and there is no reference implementation in an open source software
that showcases the process and also makes it reproducible. This makes the SCI less approachable and also harder to replicate and validate. 
There is also no way to easily track SCI over time with a fine resolution as the measurement can not be automatically made.

## The solution / How the use case solves the problem

By using an automated benchmark approach the process of generating the SCI metric is not only easier, but also reproducible.
When the to be benchmarked software also is open source it additionally allows for the possbilty to validate the metrics by the open source community.

As a free and open-source software (FOSS) the Green Metrics Tool presents a first approach to an implementation of automatically and reproducible generating the SCI metric.

The tool not only provides all the software to set up a measurement locally, but also a [reference hardware](https://docs.green-coding.berlin/docs/installation/installation-cluster/) where
measurements can be [run for free](https://metrics.green-coding.berlin/request.html) with specialized measurement hardware and software.
This allows everyone to trace back claims and also generates better results as it is not feasible for an individual or small company to invest in a dedicated measurement cluster, when just starting with green software practices.

Starting with a *git* repository the software needs a simple *usage scenario* file which is
[extensively documented](https://docs.green-coding.berlin) and also [many example implementations](https://github.com/green-coding-berlin/example-applications) are provided. Once the *usage scenario* file has been added the repo can be submitted the the GMT cluster and will automatically benchmarked. It is also possible to run the benchmark on every commit or in any other timely matter. This enables a detailed tracking of the software over time. Also changes on the software are reflected right away in the SCI score published.

### Example case - Wagtail

Wagtail is a popular open-source CMS based on Django which comes with a detailed reference implementation: *The Bakery*.

In a clone of the repository we added the needed instrumentation files and defined the needed SCI variables.

To make it reproducible we used the machines that are freely usable in the [Green Metrics Tool measurement cluster](https://docs.green-coding.berlin/docs/installation/installation-cluster/)
and their respective lifetime and embodied carbon values.

As the unit of work in Wagtail we defined R as the *per page visited*, since it is a CMS and one of it's main use cases
is offering a framework that creates websites that are mainly visited by a browser.

The SCI value we are calculating here, as an example, is the cost *webpage viewed*. The SCI here is **0.02 gCO2e/page request**

Example case link: https://metrics.green-coding.berlin/stats.html?id=6e4936e0-2a78-4f5b-afe2-1299ed37a964

<figure>
<img width="1434" alt="Screenshot 2023-09-11 at 2 01 45 PM" src="https://github.com/Green-Software-Foundation/sci-guide/assets/250671/c5360e10-5e2f-41b4-8190-7bedf9e45292">
<figcaption>Exemplary SCI values for Wagtail page visits</figcaption>
</figure>

### Example case - Nextcloud Talk

Nextcloud is another very prominent open source software that allows to set up a Google Workspaces like platform on ones own infrastructure.

Here we used the standard Nextcloud docker images and then initiated a Talk session betwen multiple users. The scenario is run with Chrome browsers running in headless mode.

Also, to make it reproducible, we used one of the machines that are freely usable in the [Green Metrics Tool measurement cluster](https://docs.green-coding.berlin/docs/installation/installation-cluster/)
and their respective lifetime and embodied carbon values.

The SCI value we are calculating here as an example is the cost *per Talk message*. The SCI here is **0.15 gCO2e/Talk Message**

Example case link: https://metrics.green-coding.berlin/stats.html?id=84645f34-2195-43e2-8c61-dcb3afe37120

<figure>
<img width="1197" alt="Screenshot 2023-09-11 at 12 24 23 PM" src="https://github.com/Green-Software-Foundation/sci-guide/assets/250671/6da3b17f-a885-4d7e-b575-358ade8ea886">
<figcaption>Exemplary SCI values for Nextcloud Talk</figcaption>
</figure>



### Further example cases

We have started benchmarking various open source projects. With the aim to see how the SCI developes over time and how design decisions affect the benchmark. Also it illustrates how simple it is to add the the SCI to a piece of software. The idea to monitor various projects is called [Energy ID](https://www.green-coding.berlin/projects/energy-id/)

At the moment this includes:

- Wagtail
- Wordpress
- Django
- Nextcloud

However, we also have other example projects to highlight the broad applicability

- [Algorithmic / AI workloads](https://github.com/green-coding-berlin/example-applications/tree/main/green-software-foundation-sci/static-algorithm)
- [APIs](https://github.com/green-coding-berlin/example-applications/tree/main/green-software-foundation-sci/simple-api)
- [Idle scenarios](https://github.com/green-coding-berlin/example-applications/tree/main/green-software-foundation-sci/idle)

It's crucial to understand that energy consumption isn't a static metric but a dynamic one. As we now have a timeline over the development of the software we can create badges that showcase how the software performs in relation to resource usage. Thus hopefully making the metric a first class citizen in deployment.

<figure>
<img width="1195" alt="Screenshot 2023-09-19 at 12 07 21 PM" src="https://github.com/Green-Software-Foundation/sci-guide/assets/250671/41cd04dc-9b3e-42b0-810d-4e04d5f02d5b">
<figcaption>Looking at the SCI over time</figcaption>
</figure>

## Why should you use automation to generate your SCI metric?

In today's rapidly evolving tech landscape, the need for sustainable, energy-efficient solutions has never been more pressing.

The SCI provides an easily digestible metric to get a first glimpse at the energy and carbon profile of your application.

By levering open-source tools this democratizes access to this vital metric, allowing a wider community of developers, researchers, and institutions to leverage it.

The power of automation cannot be understated. With manual processes often proving cumbersome and error-prone, our software streamlines the process by automatically generating the SCI metric. This not only saves valuable time but also ensures precision and consistency.

---
layout: post
title: The State of Georgia DHS breach, and the bigger picture
date: 2020-10-13 # date of publication
categories: 
    - Analysis
    - Organization behavior
    - Privacy
    - Tips
tags: 
    - PHI
    - PII
    - WFH
    - Work from home
---

Late in the afternoon on Friday, October 9th, the Georgia Department of Human Services (DHS) announced a data breach of personally identifiable information (PII) and protected health information (PHI). You can read their public statement at <https://dhs.georgia.gov/press-releases/2020-10-09/dhs-notifies-customers-about-breach-confidential-information>

I was contacted by Matt Johnson at WSB TV to talk about the breach. You can view the coverage at <https://www.wsbtv.com/news/local/cyberattack-georgia-agency-exposed-private-information-parents-children/6OA4DKDTWNAQJFWXTRK26KVDIU/>. I am always happy to engage with media about information security matters, as I view it as an important component of my service requirements to my employer. It is important to help reporters understand the issues related to a security incident to inform the public accurately. Sadly, a lot of information I share with the reporter never makes it to the piece due to time or space constraints. This is a necessary evil, but I do not have to deal with writing blog entries like this one

Unfortunately, data breach announcements like this are an all-too-common occurrence today. What makes this particular breach more painful is that the DHS serves the most vulnerable and abused of our society, and the idea that they have once again been victimized is nothing short of nauseating.  As information security professionals, what can we learn from this data breach that may help prevent future attacks?

The first thing to note is the timeframe of the data breach.  According to DHS, the breach window was between May 3rd and May 15th, a total of 12 days.  It is essential to discuss this window in the context of COVID-19.  During this timeframe, firms across the globe struggled with conducting business with a remote, work-from-home (WFH) workforce.  DHS was no different here and was no doubt struggling with how to enable its people to work remotely.  A recent report from IBM found that the average time to identify and contain a data breach is 280 days (<https://www.ibm.com/security/digital-assets/cost-data-breach-report/>).  So, for DHS and the Georgia Technology Authority (GTA), keeping the window to 12 days is a silver lining in this otherwise bad situation.

As firms struggled with enabling a WFH workforce, they also faced issues related to allowing access to sensitive information (like PII and PHI) to their workers.  While many firms have processes to enable workers to access sensitive data securely, they are typically designed to address an “on-prem” scenario where workers are in the office. Allowing secure remote access to data is a solution that many firms simply have not addressed in their security operations.  The COVID-19 pandemic has forced many firms to reconsider this, and many other matters as workers shifted from on-prem to WFH.  Enabling secure remote access to data is a non-trivial matter and cannot be done overnight.  The public does not know what security controls and processes DHS had in place before the pandemic, so I am assuming that the DHS had an existing secure method for workers to access this data on-prem but not remotely.  Time may prove that assumption to be incorrect.

In this context, it is easy to understand why DHS employees were sharing PII and PHI via an insecure method like email.  This does not excuse the data breach, but it helps explain it and put it into context properly.  Now, here’s the “ah-ah” moment for all of us to consider:

## How many other firms are there like DHS? 

How many other firms are out there, struggling to enable a WFH workforce, and are sharing sensitive or legally-protected data via insecure processes like email?  While I have no data to support my position, I believe that DHS is just one of many firms that have workers sharing data in just this way.  In other words, there are plenty of ticking time bombs out there, just waiting to explode.  Friday just happened to be DHS’s day in the crosshairs, but there will almost certainly be other firms just like them.

So, how can firms work to lower their risk here?  Here are a few suggestions to consider:

* Develop and implement written policies regarding the sharing of legally protected or sensitive data, and train workers on them
* Develop and implement secure channels for workers to access legally protected or sensitive data from remote locations
* Develop and implement multi-factor authentication processes for all workers
* Develop and implement a data loss prevention (DLP) strategy to lessen the possibility of legally protected or sensitive data leaving the firm
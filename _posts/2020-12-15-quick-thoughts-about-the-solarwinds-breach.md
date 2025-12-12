---
layout: post
title: “Quick thoughts about the SolarWinds breach"
date: 2020-12-15 # date of publication
categories: 
    - Analysis
---

Over the weekend, SolarWinds announced a significant breach.  SolarWinds is a suite of tools that allows firms to manage and monitor their systems and networks.  SolarWinds says it provides services to:

More than 425 of the US Fortune 500
- All ten of the top ten US telecommunications companies
- All five branches of the US Military
- The US Pentagon, State Department, NASA, NSA, Postal Service, NOAA, Department of Justice, US Secret Service, the Federal Reserve Bank, US Department of Defense, US CDC, and the Office of the President of the United States
- All five of the top five US accounting firms
- Hundreds of universities and colleges worldwide

FireEye discovered evidence of the SolarWinds breach while investigating its own recent breach.  FireEye is a SolarWinds client and notified them along with law enforcement once they ascertained the nature of the breach.

In simple terms, attackers used a “supply chain” attack to place their malware within one of the support files SolarWinds pushes out to customers as part of its overall patching and updating process for their software.  Attackers were able to access SolarWinds’ code repository, add the malware to it, and just wait for the software to get pushed out to SolarWinds customers everywhere.  Even worse, because the attackers were able to add their malware directly to SolarWinds’ existing code base, the malware was digitally “signed,” which is a means of ensuring authenticity.  So, the software was implicitly trusted by all customers as they installed SolarWinds updates on their networks.

The attackers designed the malware to stay silent for two weeks post-installation.  After that quiet period, the malware would contact a command-and-control (C2) server to receive instructions.  The malware had the potential to download and install software, profile the system it was running on, reboot the host system, and disable system services.  Because attackers embedded the malware within SolarWinds itself, the malicious traffic masqueraded as legitimate activity associated with a trusted application.  In short, the malware operated in plain sight and under the cover of a trusted application.  Once the attackers were able to gain a foothold in the victim’s network, they were able to engage in traditional activities to target other systems in the victim network, exfiltrate data, and establish a persistent foothold in the network for long-term activity.

The potential scope of this breach is breathtaking, based on the partial client list above.  On Sunday evening, the United States Cybersecurity and Infrastructure Agency (CISA) issued Emergency Directive 22-01 regarding the SolarWinds breach.  That directive instructed all federal agencies under its purview to:

- forensically image all systems running known compromised versions of SolarWinds Orion and analyze for new system or user accounts
- analyze network traffic to look for indicators of compromise (IoC) 
- immediately disconnect any system running known compromised versions of SolarWinds Orion, and keep them offline pending further CISA guidance

We are very early in this incident.  We know that based on the partial customer list above, the potential for the size and scope of this breach is breathtaking.  All firms running this software must assume they’ve been breached at this point and take appropriate action.  Even though the CISA directive applies only to some federal agencies, it is trustworthy guidance that all firms running known compromised versions of the SolarWinds Orion software should follow.  However, dealing with SolarWinds Orion is only one part of the problem.  Firms must also take steps to determine whether an attacker has created a persistent “backdoor” foothold in their network and then take appropriate steps to remove it as soon as possible.  

At this point, “we don’t know what we don’t know.”  But one thing is sure – there are many incident response personnel working to assess the damage to their networks and systems, and we won’t know for a while (if ever) the extent of the actual damage.
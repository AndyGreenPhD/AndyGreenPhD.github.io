---
layout: post
title: They don&#8217;t put me on TV when good things&nbsp;happen&#8230;
date: 2018-03-25
categories:
    - Legislation
    - Privacy
tags:
    - Personal
    - Policy
---

So, it's been a busy few days for me. The city of Atlanta's ongoing ransomware attack has local media doing what they do, which has led to me doing on-camera interviews with all of the local TV stations.

A colleague said to me, tongue in cheek, "you're getting to the point where you'll need to stop teaching, just so you can do TV". I snarked right back at her, "Well, they don't put me on TV when good things happen…" and wandered back to my office.

This exchange has been rolling around the back of my head the past few days, and has me considering a few things. The world is a busy place, and at times I think about just how little it seems we are truly able to grasp what's happening at times.

In the past few days, for example - the following events have taken place:

  * Ransomware attack on the city of Atlanta, which appears to be the result of vulnerable systems being exposed to the Internet (think RDP and SMB v1)
  * The Georgia Legislature continues to move forward with Senate Bill 315
  * The IETF approved version 1.3 of the TLS protocol.
  * The CLOUD act was signed into law as part of an omnibus funding bill designed to prevent a partial government shutdown due to lack of funding.
  * Both SESTA and FOSTA bills are on their way to President Trump's desk for eventual signature.



Why should I - or any of us, for that matter - care about any of these things?

Ransomware is a large and growing problem. As organizations are targeted, some tough decisions will have to be made. I've heard - and made - arguments on both sides of the "do we pay or not" notion. There are no easy decisions here, as the factors that impact it are almost always different from situation to situation.

I've blogged enough about SB 315, so you can find my previous thoughts about it elsewhere on this site. tl;dr version - it's a bad bill and should not be turned into law. We should have a serious conversation with all shareholders in the room - business, law, security practitioners, security researchers, and academia. The current version of the bill shows input from some, but not all, of those constituencies. If Georgia really wants to be "pro business" and "anti-hacking" - phrases Senator Bruce Thompson seems to chant every time he is in front of a reporter - then let's be deliberate and intentional about it. You cannot embrace some truths, while ignoring others simply because you don't like them, or they make things difficult. As it currently stands, SB 315 will most likely cause security-related businesses to reconsider making Georgia their home. For most people, that is a far cry from being "pro business".

TLS v1.3 is a big leap forward in terms of end-to-end protection of data being transmitted. TLS is a frequently-used protocol in securing web traffic, so this is a big win for anyone who uses the Internet in that way (hint: that's most humans on the Internet today). However, organizations that utilize datacenters have real and legitimate concerns about this version being approved. Once v1.3 is put into production, organizations will have a nearly impossible task in front of them - how do they monitor traffic transiting their network? Organizations do have many legitimate reasons to read encrypted traffic on a daily basis, and TLS v1.3 will make that next to impossible to do, short of doing a "man in the middle" intervention on all traffic. This is a major technical issue for organizations to address, and will result in major technical overhauls to their existing monitoring processes.

The CLOUD act gives law enforcement the ability to access personal data stored by U.S. companies, on servers in foreign countries. Advocates of the bill claim law enforcement needs to be able to get at information as part of ongoing investigations, even if that data is on a server elsewhere. This is a legitimate concern, to be sure. However, groups like the ACLU and EFF have raised concerns that the bill effectively allows law enforcement to bypass constitutional requirements associated with the 4th amendment. Some technology experts claim that the bill actually strikes a good balance between privacy and law enforcement concerns.

SESTA/FOSTA is a bill that, to be honest, I'm not fully up to speed on. So, I probably shouldn't be writing about it at all - yet here I am, doing just that. Why am I doing so? The answer is simple - to raise awareness, and get you to think about them. I see some people who are much smarter than me, raising awareness on this, so I am of the opinion that I should probably do so as well. We are already seeing real-world impacts from this bill being passed, even before being signed into law. Craigslist shut down the "Personals" section of their website, and others have or will follow suit.

I'm still relatively early in my blogging evolution. To be honest, I'm really not sure who my audience is, other than myself. I know why I write (most days, anyway), but other than that I don't really have a specific reason other than it just "feels like the right thing to do".

The world continues to spin, my friends. Things are happening around us that we are not aware of, which I believe will have more than a marginal impact on our day-to-day lives. There are serious issues on the table, and decisions are being made by people every day that will, in small and large ways, change how we live.

Are you paying attention?
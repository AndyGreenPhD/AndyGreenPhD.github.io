---
layout: post
title: Thoughts after running a virtual conference
date: 2020-03-31 # date of publication
categories: 
    - Conferences
tags: 
    - BSides
    - Conference
    - Slack
    - Zoom
#excerpt: "A brief summary or excerpt of the blog post goes here."
---

In my “spare time”, I serve as one of the organizers for BSides Atlanta. We have hosted the conference for the last two years on the campus of Kennesaw State University, where I work as a faculty member. It’s been a great arrangement – lots of meeting space, tons of free parking, and easy to get to. We were looking forward to hosting the event on campus again this year, until COVID-19 struck. With less than two weeks’ before the event was scheduled to be held, the University System of Georgia closed all campuses in the state.

We were screwed. Or, were we?

After some internal discussion, we decided to move forward with the conference, but doing so virtually. Mind you, outside of being users of distributed meeting technologies, none of us had ever attempted to organize or host a virtual conference. We had no idea about service offerings, pricing, scalability – nothing. But hey – we’re smart, talented, tech-savvy folks. Why couldn’t we pull this off? So, we took the jump and made the decision to try and make this work.

I very quickly reached out to our campus IT and Security folks to talk with the Cisco rep for our campus to learn more about WebEx capabilities and pricing. Stephen Gay, our CISO ([@redpalmetto](https://twitter.com/redpalmetto) on teh Twitterz) didn’t hesitate to make the necessary introductions, and we were off and running – ON A SUNDAY! I quickly learned that Cisco was taking the “we’re in this together” approach with all of their existing clients. In no time at all, introductions were made and I had a conversation with a WebEx team member. I learned that Cisco was making some of their large-scale meeting packages available free to current customers. While we ended not going with Cisco and Webex, I thought it was really important to give them credit here. There was nothing but “how can we help, here’s what we have to offer” from Cisco and Webex personnel the entire time, and I couldn’t be more appreciative of everything they did to help us out.

Now, for what we actually ended up doing, and what we (or at least I) learned along the way:

After some testing, we went with Zoom as our distributed meeting platform. Zoom offers two basic flavors of events – “meeting” and “webinar”. The distinction is important because the feature set is different for each event. Webinars offer a stripped-down set of permission to participants by default, and we thought made better sense than meetings. You can see a feature set comparison here. The past two years, we have had well over 300 attendees at the physical conference, and had received some comments about lack of space in some talks. Zoom offers webinar seats starting at 100, and the next level jumps to 500. We decided to purchase four webinars with 500 seats, as this matched our existing schedule of four tracks. We wanted to have too many seats instead of not enough. If only we’d been thinking about livestreaming at this time, but we weren’t… (that’s coming up further below, however…)

Next, we discussed whether or not we should take the “one webinar per talk” approach or the “one webinar for all talks” approach. I was a firm advocate for the former, and looking back I am now happy that the other organizers wanted to go the other direction. My line of thinking was that if a talk ran late, had great conversation going, whatever, that we could just let that individual webinar run over, while not impacting the other talks in their own webinars. Turns out, I was dead wrong.

Each webinar requires a primary host to run the session. And, Zoom only allows hosts to run one event at a time. So, a host can’t start a webinar, leave it and start another one, unless you make an attendee or panelist the session host before you leave it. That presented too many technical issues in terms of recording and overall event management. So, we ended up with four daylong webinars that were managed by one of the organizers, and we shuttled the speakers in and out as it was their time to talk. Webinars make this pretty simple to do, actually. Everyone enters the webinar as an attendee – no mic or screen sharing privileges, so no “zoombombing” concerns here. Once the speaker entered the webinar, they simply had to notify the host they were in, and we elevated them to “panelist” privileges. A webinar can have any number of panelists, so you have all the flexibility you need to have a talk of 1-n number of speakers.

We also purchased additional cloud storage so that we wouldn’t have to be concerned about running out of storage for our four daylong webinar recordings. We really had no idea what the file sizes would look like, so we erred on the side of caution here. The default storage plan is 5GB, and we hit almost 14GB. So buying the extra storage space was the right decision.

Next – how to communicate during the event? We decided to use the free tier of Slack, which turned out to be a terrific decision. We decided not to enable Zoom’s Q&A functionality, and instead require all communication to flow through one of the channels we set up in the Slack workspace. We set up multiple channels for attendee, speaker, sponsor, and organizer use. A quick list of some (but not all) of those channels include:

- **announcements** – this was restricted to organizer use only, so we could push out items and have them not get lost in the general buzz
- **control-room** – this was organizer only
- **hiring-looking** – used to match up folks looking for a job, with those who were hiring
- **download-slides** – used to give all speakers a place to share their slide decks if they wanted to do so
- **general** – the catch-all channel for everyone to hang out in
- **raffle-giveaways** – used to announce upcoming raffle giveaways and winners. This worked in conjunction with a Google Form that attendees had to fill out with name, email, mailing address, phone # so that we could confirm details and mail winners their stuff
- **speakers** – this was all speakers and organizers only
- **sponsors** and **sponsors-private** – sponsors was a public channel for everyone to interact with sponsors, while the sponsors-private was sponsors and organizers only
- for each track, we had a public and a private channel. The public channel was the place for attendees to interact with speakers, post questions, and so forth. The private channel was speakers for that track only, and all organizers. We used the private track channel as the “bullpen” for speakers. They would join the webinar, then notify us in one of the two private channels they had done so, so that we could bump them to “Presenter” status

As we settled on these ideas, we came to the reality that instead of just thinking “locally”, we had the opportunity to invite anyone from across the globe to attend our little conference. We were confident we had the infrastructure in place, so why not? We then began to invite people to just grab a virtual “general admission” ticket so we could have a rough idea about the number of attendees. This is probably a good time to let you know that we’ve always had a core belief that BSides Atlanta should be free to attend. We offer the opportunity to become a “personal sponsor” for $20, but we don’t sell tickets – the event truly is free for all. So, we pushed the global invite out via social media (primarily Twitter) and invited everyone to join us.

Meanwhile, we realized we had to reconfirm speakers for a virtual conference. Some speakers just are not comfortable doing a virtual presentation, which is completely understandable. So, we lost some of them but replaced them with others. Overall, the schedule pretty much held up. Then, we realized that we needed to ensure that speakers could actually DO a virtual presentation from a technology perspective. So, we created daily Zoom meetings that ran from 9am-12pm each day. The meetings were configured to auto-start and auto-record to the cloud, and allow attendees to enter without a host. We then invited all speakers to attend these meetings as their schedule permitted, so they could do audio and video testing. We would review the recorded footage each afternoon and give feedback to the speakers as well as share a link to the recorded video with them, so they could self-critique ahead of time. This turned out to be another good idea, as some speakers experienced issues that they weren’t aware of while testing. As a result, we had no real audio or speaker issues during the day.

The Wednesday before the conference we sent out a summary document to all speakers. The summary document instructed the speakers on the necessary steps for the day (join the webinar, notify us in Slack once done), provided the URL to the four tracks, and gave host details for each track (name, cell phone#, email address, Slack handle) for any last-minute issues.

As we watched ticket count grow, we began to get concerned – would we be able to handle over a thousand registered attendees (we ultimately ended up with 1,140 registered attendees)?

![image from Jaws](/assets/img/2020-03-31-1.gif)

We scrambled the day before the conference to figure out an “overflow” plan for each webinar, and ultimately settled on Twitch. Each host set up a BSides Atlanta-specific Twitch account to use for their track. In retrospect, we could have gotten by with 100 seat webinars and using Twitch for overflow, thus saving us a few hundred dollars.

Turns out it’s fairly easy to configure webinars to livestream to Twitch, YouTube, and Facebook – as long as you know what you’re doing – which we didn’t. After a bit of thinking, testing, failing, cursing, and reading – we finally figured it all out. To livestream to Twitch, you need three pieces of information:

- Stream URL – this is the “listener” address, and was the most difficult piece to sort out. Turned out to be pretty simple – rtmp://live.twitch.tv/app/
- Private Stream key – this is the unique identifier for the account you want to stream to.
- Live streaming page URL – this is the page the public uses to view livestreaming content. The URL for my track was <https://twitch.tv/bsidesatl>

One more really cool thing we did was that we asked attendees to drop a virtual “pin in a map” so we could see where everyone was attending from. Hat tip to “kernelsndrs” in our Slack workspace for pointing us to an existing project we could fork to make this happen. You can see the map at <https://bsidesatl.github.io/bsidesatl_map/results/> (screencap below) and I have to say, it’s pretty damned cool to see the different countries and continents where attendees checked-in from.

![map image](/assets/img/2020-03-31-2.png)

We also interspersed 5 minute “speaker talks” in-between some of the sessions, as we wanted to make sure that we took care of them for sticking with us. Additionally, each host had a slide with sponsor logos and a script to read before each talk, so that we could be sure that each sponsor was acknowledged individually, by name, prior to introducing the speaker. We thought it was incredibly important to give our sponsors extra recognition this year, as none of them left us after the virtual transition. That made our jobs as organizers much easier, and we wanted to be sure that all attendees knew the story. Also, when you have great speakers who are prepared and punctual, running an event like this gets much easier. I’m happy to say that we were almost 100% on-time. No late speakers, no “long” speakers, no unprepared speakers. They were all great, and they also stuck around in their respective Slack channels to answer questions and interact with attendees afterwards!

I won’t lie – I was really nervous about how this would all unfold. As I said to several people, “this will either be glorious, or an absolute train wreck”. Turns out, I was really nervous for nothing. Speakers spoke, attendees came, prizes were given away, sponsors spoke, people built relationships, and everyone was distracted, at least for a few hours, from the COVID-19 mess all around us.

I am really proud of what we did, and I am really humbled at the outpouring of support, compliments, and positive impact BSides Atlanta 2020 has had around the planet.

I cannot wait to see what we do next year!
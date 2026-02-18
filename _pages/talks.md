---
layout: archive
title: Talks
permalink: /talks/
nav: true
nav_order: 5
---

{% if site.talkmap_link == true %}
<iframe src="/talkmap/map.html" height="700" width="850" style="border:none;"></iframe>
{% endif %}

{% for post in site.talks reversed %}
  {% include archive-single-talk.html %}
{% endfor %}
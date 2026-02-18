---
layout: page
title: Talks and Presentations
permalink: /talks/
nav: true
nav_order: 5
---

<iframe src="/talkmap/map.html" height="700" width="850" style="border:none;"></iframe>

{% for post in site.talks reversed %}
  {% include default.liquid %}
{% endfor %}
---
layout: 3d-view.njk
title: LiveTaste
data:
  - review
  - news
eleventyNavigation:
  key: Home
---

<video controls width="60%">
	<src="/img/livetaste_ad.webm" type="video/webm" />

	<a href="/img.livetaste_ad.webm">Download video</a>
</video>

## Innovation, Flavour, Technology

At Livetaste, we push the boundaries and challenge the standards of the culinary industry.
With humanitarian, animal-friendly livetaste pads, we are able to taste the flavour you love without worrying about animal or ecological harm; allowing you to indulge in your senses with none of the negative caloric side-effects.

Livetaste: Embrace every taste.

# LiveTaste News
{% for n in news %}
<article class="news">

<img src="{{ n.img }}" width="50%" >

<p class="date">{{ n.date }}</p>

## {{ n.headline }}

{{ n.excerpt }}
</article>
{% endfor %}

# Reviews
{% for r in review %}
<section class="review">
<u>{{ r.stars }}</u>

<b>{{ r.name }}</b>

{{ r.verified }}

{{ r.review | safe }}
</section>
{% endfor %}


---
layout: main.njk
title: News & Reviews
eleventyNavigation:
  key: Press
---

# LiveTaste News
{% for n in news %}
<section class="news">

<img src="{{ n.img }}" width="50%" >

<p class="date">{{ n.date }}</p>

## {{ n.headline }}

<p style="excerpt">{{ n.excerpt }}</p>
</section>
{% endfor %}



# Reviews
{% for r in review %}
<section class="review">

**{{ r.stars }}**

**__{{ r.name }}__**

<p style="font-size: 0.8rem;margin-top:0;">{{ r.verified }}</p>

{{ r.review | safe }}
</section>
{% endfor %}

<style>
section {
    border: 1px black solid;
    margin: 1rem 0 2rem;
    padding: 1rem;
    border-radius: 5px;

    h2 {
        padding: 0.5rem;
        margin-top: 0;
    }
    p.date {
        margin: 0;
        padding: 0.5rem;
        padding-bottom: 0;
        font-size: 0.9rem;
    }

    
}

</style>
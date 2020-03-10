---
title: Résumé
description: "Cory Birdsong is a front-end web developer that can do a bunch of cool stuff listed on this page. (this is how meta descriptions work, right?)"
permalink: /resume/
layout: layouts/page.njk
eleventyNavigation:
  key: Résumé
  order: 10
---

<section aria-label="Skills">

## Skills

**Expert**:

<abbr title="HyperText Markup Language">HTML</abbr> + templating languages, <abbr title="Cascading Stylesheets">CSS</abbr> + Sass/Less, JavaScript + jQuery, WordPress + <abbr title="Advanced Custom Fields">[ACF](advancedcustomfields.com/)</abbr> & [Timber](https://www.upstatement.com/timber/)

**Adept**:

Web accessbility, <abbr title="Scalable Vector Graphics">SVG</abbr>, Git, [Pattern Lab](https://patternlab.io/), custom HTML email development, Schema.org, Google Analytics / Google Tag Manager, [Eleventy](https://www.11ty.dev)

**Proficient**:

PHP, Shopify, HubSpot, [Netlify](https://netlify.com), [Parcel](https://parceljs.org/)

</section>

<section aria-label="Work">

## Work

<ul>
{%- for item in work.featured %}
<li>
<a href="{{ item.url | url }}" target="_blank" rel="noopener noreferrer" aria-label="{{ item.name }} (opens in new window)">{{ item.name }}</a><span class="icon icon-new-window" title="(opens in new window)" aria-hidden="true">&#8599;</span>
{%- if item.award -%} <small>(won {{ item.award.name }}, <time>{{ item.award.year }}</time>)</small>{%- endif -%}
</li>
{%- endfor %}
</ul>

<details>

<summary>Older Work</summary>

<p>Some of these probably aren't up to my modern standard. They also often use Typekit fonts, which do not work on archive.org.</p>

<ul>
{%- for item in work.old %}
<li>
<a href="{{ item.url | url }}" target="_blank" rel="noopener noreferrer" aria-label="{{ item.name }} (opens in new window)">{{ item.name }}</a><span class="icon icon-new-window" title="(opens in new window)" aria-hidden="true">&#8599;</span>
{%- if item.award -%} <small>(won {{ item.award.name }}, <time>{{ item.award.year }}</time>)</small>{%- endif -%}
</li>
{%- endfor %}
</ul>

</details>

</section>

<section aria-label="Experience">

## Experience

### [The Current](https://thecurrentla.com) <small>(<time>2018</time>-)

Helped (re)launch and run a WordPress-powered non-profit news organization. Customized and eventually replaced a prebuilt theme. Managed WordPress integrations and transitions between Mailchimp/Active Campaign and Memberful/Pico.

### [BBR Creative](https://bbrcreative.com) <small>(<time>2018</time>-<time>2020</time>)

Use modern web technologies to accessibly implement and extend designs. Collaborated with designers to make sites beautiful, accessible and user-friendly. Built a landing page template system leveraging CSS custom properties from scratch.

Worked with clients to maintains and improve their existing WordPress sites. Audited and optimized existing sites for performance. Built custom HTML email templates in HubSpot.

### [Wide Web Marketing](http://web.archive.org/web/20171021221327/https://www.widewebmarketing.com/) <small>(<time>2010</time>-<time>2018</time>)</small>

Implemented and extended designs originating in Photoshop or Illustrator. Worked with designers to make designs more responsive and user-friendly.

Customized and maintained a fork of Bootstrap to facilitate faster and higher-quality site production using Adobe Business Catalyst and the Liquid markup language. Became familiar with WordPress and its ecosystem.

</section>

<section aria-label="Education">

## Education

Bachelor of Arts in Mass Communication (Print Journalism Concentration), University of Louisiana at Lafayette. <time>2007</time>.

</section>

<section aria-label="Contact">

## Contact

- Phone: (985) 570-3709
- Email: resume@cory.birdsong.cc

</section>

<section class="center" aria-label="More info">

<strong><em><a href="/about/">More about me</a></em></strong>

</section>

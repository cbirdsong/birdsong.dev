---
title: Résumé
description: "Cory Birdsong is a front-end web developer that can do a bunch of cool stuff listed on this page. (this is how meta descriptions work, right?)"
permalink: /resume/
layout: page.njk
eleventyNavigation:
  key: Résumé
  order: 20
---

<section aria-label="Skills">

## Skills

### **Expert**:

<abbr title="HyperText Markup Language">HTML</abbr> + templating languages, <abbr title="Cascading Stylesheets">CSS</abbr> + Sass/Less, JavaScript + jQuery, WordPress + [<abbr title="Advanced Custom Fields">ACF</abbr>](https://advancedcustomfields.com) & [Timber](https://www.upstatement.com/timber/)

### **Adept**:

Web accessibility, <abbr title="Scalable Vector Graphics">SVG</abbr>, Git, [Pattern Lab](https://patternlab.io), custom <abbr title="HyperText Markup Language">HTML</abbr> email development, [Schema.org](https://schema.org), [Eleventy](https://www.11ty.dev), [Netlify](https://netlify.com)

### **Proficient**:

PHP, Shopify, MailChimp, HubSpot, npm, [Parcel](https://parceljs.org), Google Analytics, Google Tag Manager

</section>

<section aria-label="Work">

## Work

<ul>
{%- for item in work.featured %}
<li>
<a href="{{ item.url | url }}" target="_blank" rel="noopener noreferrer" aria-label="{{ item.name }} (opens in new window)">{{ item.name }}</a>
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
<a href="{{ item.url | url }}" target="_blank" rel="noopener noreferrer" aria-label="{{ item.name }} (opens in new window)">{{ item.name }}</a>
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

Use modern web technologies to accessibly implement and extend designs. Collaborated with designers to make sites beautiful, accessible and user-friendly. Built a landing page template system leveraging <abbr title="Cascading Stylesheets">CSS</abbr> custom properties from scratch.

Worked with clients to maintains and improve their existing WordPress sites. Audited and optimized existing sites for performance. Built custom <abbr title="HyperText Markup Language">HTML</abbr> email templates in HubSpot.

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
- Email: cory@birdsong.dev
- Github: github.com/cbirdsong

</section>

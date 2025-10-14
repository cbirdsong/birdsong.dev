---
title: Résumé
description: "Cory Birdsong is a front-end web developer that can do a bunch of cool stuff listed on this page. (this is how meta descriptions work, right?)"
permalink: /resume/
robots: noindex, nofollow
---

<section aria-label="Skills" id="skills">

## Skills

**Expert**: <abbr title="HyperText Markup Language">HTML</abbr> + templating languages, <abbr title="Cascading Stylesheets">CSS</abbr> + Sass/Less, JavaScript, WordPress + [<abbr title="Advanced Custom Fields">ACF</abbr>](https://advancedcustomfields.com) & [Timber](https://www.upstatement.com/timber/)

**Adept**: PHP, Web accessibility, <abbr title="Scalable Vector Graphics">SVG</abbr>, Git, [Schema.org](https://schema.org), [Eleventy](https://www.11ty.dev)

**Proficient**: [Craft CMS](https://www.craftcms.com), [Alpine](https://alpinejs.dev), [Vue](https://vuejs.org), Shopify, MailChimp, HubSpot, npm, [Parcel](https://parceljs.org), Google Analytics, Google Tag Manager, [GSAP](https://greensock.com), [Pattern Lab](https://patternlab.io), custom <abbr title="HyperText Markup Language">HTML</abbr> email development, Google Maps JavaScript API, [Netlify](https://netlify.com)

</section>

<section aria-label="Work" id="work">

## Work

<ul class="columns">
{%- for item in work.featured %}
{%- set print_label -%}
{%- if item.original_url -%}
data-print-label={{ item.original_url|replace("https://", "") }}
{%- else %}
data-print-label={{ item.url|replace("https://", "") }}
{%- endif %}
{%- endset %}
<li>
<a href="{{ item.url | url }}" target="_blank" rel="noopener noreferrer" aria-label="{{ item.name }} (opens in new window)" {{ print_label }}>{{ item.name }}</a>
{%- if item.award -%} <small><em>Winner: {{ item.award.name }}, <time>{{ item.award.year }}</time></em></small>{%- endif -%}
</li>
{%- endfor %}
</ul>

<details>

<summary>Older Work</summary>

<p>Some of these probably aren't up to my modern standard. They also often use Typekit fonts, which do not work on archive.org.</p>

<ul class="columns">
{%- for item in work.old %}
{%- set print_label -%}
{%- if item.original_url -%}
data-print-label={{ item.original_url|replace("https://", "") }}
{%- else %}
data-print-label={{ item.url|replace("https://", "") }}
{%- endif %}
{%- endset %}
<li>
<a href="{{ item.url | url }}" target="_blank" rel="noopener noreferrer" aria-label="{{ item.name }} (opens in new window)" {{ print_label }}>{{ item.name }}</a>
{%- if item.award -%} <small><em>Winner: {{ item.award.name }}, <time>{{ item.award.year }}</time></em></small>{%- endif -%}
</li>
{%- endfor %}
</ul>

</details>

</section>

<section aria-label="Experience" id="experience">

## Experience

### [MESH](https://whenwemesh.com) <small>(<time>2021</time>-)</small>

Continued developing a deep understanding of how to build and improve custom WordPress themes, including taking over maintenance of an enterprise-level site with complex external integrations. Mentored junior developers on problem solving.

### Freelance <small>(<time>2020</time>-<time>2022</time>)</small>

Worked with a number of agencies on projects using Eleventy, WordPress and Craft CMS. Collaborated with designers using Webflow, Sketch and Figma.

Built a custom starter toolkit for development of WordPress themes. Contributed to proposals around the development of the WordPress block editor.

### [The Current](https://thecurrentla.com) <small>(<time>2018</time>-)</small>

Helped launch and run a WordPress-powered non-profit news organization. Customized and eventually replaced a prebuilt theme. Managed WordPress integrations and transitions between Mailchimp/Active Campaign and Memberful/Pico.

### [BBR Creative](https://bbrcreative.com) <small>(<time>2018</time>-<time>2020</time>)</small>

Use modern web technologies to accessibly implement and extend designs. Collaborated with designers to make sites beautiful, accessible and user-friendly. Built a landing page template system leveraging <abbr title="Cascading Stylesheets">CSS</abbr> custom properties.

Worked with clients to maintain and improve their existing WordPress sites. Audited and optimized existing sites for performance. Built custom <abbr title="HyperText Markup Language">HTML</abbr> email templates in HubSpot.

### [Wide Web Marketing](http://web.archive.org/web/20171021221327/https://www.widewebmarketing.com) <small>(<time>2010</time>-<time>2018</time>)</small>

Implemented and extended designs originating in Photoshop or Illustrator. Worked with designers to make designs more responsive and user-friendly.

Customized and maintained a fork of Bootstrap to facilitate faster and higher-quality site production using Adobe Business Catalyst and the Liquid markup language. Became familiar with WordPress and its ecosystem.

</section>

<section aria-label="Education" id="education">

## Education

**Bachelor of Arts in Mass Communication** _(Print Journalism Concentration)_, University of Louisiana at Lafayette. <time>2007</time>.

</section>

<section aria-label="Contact" id="contact">

## Contact

<dl>
	
<dt class="print-visible">Web</dt>
<dd class="print-visible"><strong>birdsong.dev</strong></dd>
	
<dt>Email</dt>
<dd><strong>cory@birdsong.dev</strong></dd>

<dt>Phone</dt>
<dd><strong>(985) 570-3709</strong></dd>
	
<dt>Time Zone</dt>
<dd><strong>GMT-6</strong> (Central Standard Time)</dd>
	
<dt>Github</dt>
<dd><strong><a href="https://github.com/cbirdsong">github.com/cbirdsong</a></strong></dd>
	
</dl>

</section>

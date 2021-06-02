---
title: About
description: "I'm a front-end web developer that builds websites that are fast, functional and beautiful."
permalink: /about/
layout: about.njk
eleventyNavigation:
  key: About
  order: 10
---

{% include "_includes/section-about.njk" %}

<section aria-label="Skills">

## I've worked with:

- **Templating languages** (Liquid, Twig, Nunjucks, Smarty)
- **<abbr title="Cascading Stylesheets">CSS</abbr> preprocessors** (Sass and Less)
- **jQuery**
- **Git**, GitHub and BitBucket
- **<abbr title="Scalable Vector Graphics">SVG</abbr>**, hand-coding animations, transitions and optimizations
- **WordPress**, building themes from scratch in both standard PHP and using Twig via **[Timber](https://www.upstatement.com/timber/)**
- **[Netlify](https://netlify.com)**
- **[Eleventy](https://www.11ty.dev)**, building full sites, prototypes, landing pages and one-off page components
- **[Pattern Lab](https://patternlab.io/)**, building pattern libraries for design systems

<details>
<summary>I've also worked with:</summary>

- **npm**
- **Vue**
- **[Parcel](https://parceljs.org)**
- **[Craft CMS](https://www.craftcms.com/)**
- Many common **Wordpress plugins**, such as **[Advanced Custom Fields](https://advancedcustomfields.com)**, **Gravity Forms** and **WPForms**
- Image editors like **Photoshop**, **Illustrator**, **Pixelmator Pro** and **Affinity Designer**
- Design tools like **Sketch** and **Figma**
- **Google Analytics** and **Google Tag Manager** <small>(implemented as performantly as possible)</small>
- **Google Lighthouse** and **WebPageTest** for performance auditing
- **Schema.org**, **OpenGraph** and other similar metadata
- **Cloudflare**, as a DNS provider/CDN and doing edge <abbr title="search engine optimization">SEO</abbr> optimization via Cloudflare Workers
- **[Buddy](https://buddy.works)**, **[DeployHQ](https://deployhq.com)**, and **GitHub Actions**, for <abbr title="continuous integration and delivery">CI/CD</abbr> and deployment
- **Shopify**
- **MailChimp**
- **HubSpot**, building custom landing pages and email templates and customizing form embeds
- **[BrowserStack]()** and **[LambdaTest](https://www.lambdatest.com/)**, for browser compatibility testing
- **[Litmus](https://litmus.com)** and **[EmailOnAcid](https://emailonacid.com)**, for email client compatibility testing
</details>

<details>

<summary>I'd love to learn more about:</summary>

- **Web components**
- **[Svelte](https://svelte.dev/)**

</details>

</section>

<section id="work" aria-label="Sample Work">

## I've made:

<ul>
{%- for item in work.featured -%}
<li>
<a href="{{ item.url | url }}" target="_blank" rel="noopener noreferrer" aria-label="{{ item.name }} (opens in new window)">{{ item.name }}</a>
{%- if item.award -%} <small>(won {{ item.award.name }}, <time>{{ item.award.year }}</time>)</small>{%- endif -%}
</li>
{%- endfor -%}
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

<section id="more-info" class="text-center" aria-label="More information">

**[View my full resume](/resume/)**.

</section>

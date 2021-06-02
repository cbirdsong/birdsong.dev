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

- <abbr title="HTML">HTML</abbr> templating languages like **Liquid**, **Twig**, and **Nunjucks**
- <abbr title="Cascading Stylesheets">CSS</abbr> processing tools like **Sass**, **Less** and **PostCSS**
- **jQuery**
- **Git**, GitHub and BitBucket
- **<abbr title="Scalable Vector Graphics">SVG</abbr>**, hand-coding animations, transitions and optimizations
- **WordPress**, building themes from scratch in both standard PHP and using Twig via **[Timber](https://www.upstatement.com/timber/)** and building editor blocks using **[Advanced Custom Fields](https://advancedcustomfields.com)**
- **[Netlify](https://netlify.com)**
- **[Eleventy](https://11ty.dev)**, building full sites, landing pages and one-off page components
- **[Pattern Lab](https://patternlab.io/)**, building pattern libraries for design systems

<details>
<summary>I've also worked with:</summary>


- **Vue**
- **[Parcel](https://parceljs.org)**
- **Bootstrap** and other CSS frameworks <small>(compiled from source and customized to the project whenever possible)</small>
- Image editors like **Photoshop**, **Illustrator**, **Pixelmator Pro** and **Affinity Designer**
- Design tools like **Sketch** and **Figma**
- Performance auditing tools like **Google Lighthouse** and **WebPageTest**
- **Schema.org**, **OpenGraph** and other similar bits of metadata
- **Cloudflare**, as a DNS provider/CDN and doing edge <abbr title="search engine optimization">SEO</abbr> optimization via Cloudflare Workers
- **Google Analytics** and **Google Tag Manager** <small>(implemented as performantly as possible)</small>
- <abbr title="continuous integration and delivery">CI/CD</abbr> and deployment tools like **[Buddy](https://buddy.works)** and **[DeployHQ](https://deployhq.com)**
- **[Screaming Frog](https://www.screamingfrog.co.uk/)**, to audit sites for accessibility, performance and <abbr title="search engine optimization">SEO</abbr> issues
- **[BrowserStack](https://www.browserstack.com/)** and **[LambdaTest](https://www.lambdatest.com/)**, for browser compatibility testing
- **[Litmus](https://litmus.com)** and **[EmailOnAcid](https://emailonacid.com)**, for email client compatibility testing
- **Shopify**
- **MailChimp**
- **HubSpot**
- **Google Maps' JavaScript <abbr title="application programming interface">API</abbr>**
- **[Craft CMS](https://www.craftcms.com/)** 

</details>

<details>

<summary>I'd love to learn more about:</summary>

- **Web components**
- **[Svelte](https://svelte.dev/)**, and other similar tools that compile the framework away during the build process instead of delivering it to the client
- **[Craft CMS](https://www.craftcms.com/)** (I've worked with it a bit and really like what I saw)
- **Privacy-minded analytics tools**

</details>

</section>

<section id="work" aria-label="Sample Work">

## I've made:

<details open>

<summary>Recent Work</summary>

<ul>
{%- for item in work.featured -%}
<li>
<a href="{{ item.url | url }}" target="_blank" rel="noopener noreferrer" aria-label="{{ item.name }} (opens in new window)">{{ item.name }}</a>
{%- if item.award -%} <small>(won {{ item.award.name }}, <time>{{ item.award.year }}</time>)</small>{%- endif -%}
</li>
{%- endfor -%}
</ul>

</details>

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

<details>

<summary>Just for Fun</summary>

<ul>
{%- for item in work.fun -%}
<li>
<a href="{{ item.url | url }}" target="_blank" rel="noopener noreferrer" aria-label="{{ item.name }} (opens in new window)">{{ item.name }}</a>
{%- if item.desc -%} <small>({{ item.desc }})</small>{%- endif -%}
</li>
{%- endfor -%}
</ul>

</details>

</section>

<section id="more-info" class="text-center" aria-label="More information">

**[View my full resume](/resume/)**.

</section>

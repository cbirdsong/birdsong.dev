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

- <strong><abbr title="HTML">HTML</abbr></strong> templating languages like **Liquid**, **Twig**, and **Nunjucks**
- <strong>**<abbr title="Cascading Stylesheets">CSS</abbr></strong> processing tools like **Sass**, **Less** and **PostCSS\*\*
- **JavaScript** libraries like **Alpine**, **Vue** and **jQuery**
- **Git**, GitHub and BitBucket
- **<abbr title="Scalable Vector Graphics">SVG</abbr>**, hand-coding animations, transitions and optimizations
- **WordPress**, building themes from scratch in both standard PHP and using Twig via **[Timber](https://www.upstatement.com/timber/)** and building editor blocks using **[Advanced Custom Fields](https://advancedcustomfields.com)**
- **[Eleventy](https://11ty.dev)**, building full sites, landing pages and one-off page components

<details>
<summary>I've also worked with:</summary>

- **PHP**
- **Web components**
- **Shopify**
- **MailChimp**
- **HubSpot**
- **[Netlify](https://netlify.com)**
- **[Craft CMS](https://www.craftcms.com/)**
- **[Pattern Lab](https://patternlab.io/)**, building pattern libraries for design systems
- **Google Maps' JavaScript <abbr title="application programming interface">API</abbr>**
- **[Alpine](https://alpinejs.dev/)**
- **[Vue](https://vuejs.org/)**
- **[Parcel](https://parceljs.org)**
- **Bootstrap** and other <abbr title="Cascading Stylesheets">CSS</abbr> frameworks, compiled from source and customized to the project whenever possible
- Image editors like **Photoshop**, **Illustrator**, **Pixelmator Pro** and **Affinity Designer**
- Design tools like **Sketch**, **Figma** and **Adobe XD**
- Accessibility auditing tools like **[axe](https://www.deque.com/axe/)** and **[WAVE](https://wave.webaim.org/)**
- Performance auditing tools like **Google Lighthouse** and **WebPageTest**
- **Schema.org**, **OpenGraph** and other bits of metadata
- **Cloudflare**, as a DNS provider/CDN and doing edge <abbr title="search engine optimization">SEO</abbr> optimization via Cloudflare Workers
- **Google Analytics** and **Google Tag Manager**, implemented as performantly as possible
- <abbr title="continuous integration and delivery">CI/CD</abbr> and deployment tools like **[Buddy](https://buddy.works)** and **[DeployHQ](https://deployhq.com)**
- **[Screaming Frog](https://www.screamingfrog.co.uk/)**, to audit sites for accessibility, performance and <abbr title="search engine optimization">SEO</abbr> issues
- **[BrowserStack](https://www.browserstack.com/)** and **[LambdaTest](https://www.lambdatest.com/)**, for browser compatibility testing
- **[Litmus](https://litmus.com)** and **[EmailOnAcid](https://emailonacid.com)**, for email client compatibility testing

</details>

<details>

<summary>I'd love to learn more about:</summary>

- **[Svelte](https://svelte.dev/)**, and other similar tools that compile the framework away during the build process instead of delivering it to the client
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

<ul>
{%- for item in work.old %}
<li>
<a href="{{ item.url | url }}" target="_blank" rel="noopener noreferrer" aria-label="{{ item.name }} (opens in new window)">{{ item.name }}</a>
{%- if item.award -%} <small>(won {{ item.award.name }}, <time>{{ item.award.year }}</time>)</small>{%- endif -%}
</li>
{%- endfor %}
</ul>

<p><small>Some of these probably aren't up to my modern standard. They also often use Typekit fonts, which do not work on archive.org.</small></p>

</details>

<details>

<summary>Just for Fun</summary>

<ul>
{%- for item in work.fun -%}
<li>
<a href="{{ item.url | url }}" target="_blank" rel="noopener noreferrer" aria-label="{{ item.name }} (opens in new window)">{{ item.name }}</a>
{%- if item.desc -%} <small>, {{ item.desc }}</small>{%- endif -%}
</li>
{%- endfor -%}
</ul>

</details>

</section>

<section id="more-info" class="text-center" aria-label="More information">

**[View my full resume](/resume/)**.

</section>

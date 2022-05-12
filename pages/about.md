---
layout: about.njk
title: About
description: "I'm a front-end web developer that builds websites that are fast, functional and beautiful."
eleventyNavigation:
  key: About
  order: 10
---

<section id="skills" class="l-stack" aria-label="Skills">

## I've worked with:

- <strong><abbr title="HTML">HTML</abbr></strong>, including templating languages like **Liquid**, **Twig**, and **Nunjucks**
- <strong><abbr title="Cascading Stylesheets">CSS</abbr></strong>, including processing tools like **Sass**, **Less** and **PostCSS**
- **JavaScript**, including web components and libraries like **[Alpine](https://alpinejs.dev/)**, **[Vue](https://vuejs.org/)** and **jQuery**
- **<abbr title="Scalable Vector Graphics">SVG</abbr>**, hand-coding animations, transitions and optimizations
- **WordPress**, building themes from scratch in both standard PHP and using Twig via **[Timber](https://www.upstatement.com/timber/)** and building editor blocks using **[Advanced Custom Fields](https://advancedcustomfields.com)**
- **[Eleventy](https://11ty.dev)**, building full sites, landing pages and one-off page components

<details class="subsection | l-stack">
<summary>I've also worked with:</summary>

### Technologies and Frameworks:

- **Git**, GitHub and BitBucket
- **PHP**, primarily in the context of WordPress theming and templating
- **Node**, primarily in the context of Eleventy
- **Schema.org**, **OpenGraph** and other bits of metadata
- **[GSAP](https://greensock.com/)** framework for web animations
- **<abbr title="Cascading Stylesheets">CSS</abbr> frameworks** like **Bootstrap**, compiled from source and customized to the project whenever possible
- **Regular expressions** and **shell scripting**
- Developer tooling like **npm**, **[Parcel](https://parceljs.org)** and **[gulp](https://gulpjs.com/)**

### <abbr title="Content Management Systems">CMSes</abbr> and Platforms:

- **[Craft CMS](https://www.craftcms.com/)**
- **Shopify**
- **MailChimp**
- **HubSpot**
- **[Pattern Lab](https://patternlab.io/)**, building pattern libraries for design systems
- **[Netlify](https://netlify.com)**
- **Cloudflare**, as a DNS provider/CDN and doing edge <abbr title="search engine optimization">SEO</abbr> optimization via Cloudflare Workers
- **Google Maps' JavaScript <abbr title="application programming interface">API</abbr>**, for searches, geocoding and design customization
- **WP Engine** and **Flywheel**

### Software and Services:

- Image editors like **Photoshop**, **Illustrator**, **Pixelmator Pro** and **Affinity Designer**
- Design tools like **Sketch**, **Figma** and **Adobe XD**
- Accessibility auditing tools like **[axe](https://www.deque.com/axe/)** and **[WAVE](https://wave.webaim.org/)**
- Performance auditing tools like **Google Lighthouse** and **WebPageTest**
- **Google Analytics** and **Google Tag Manager**, implemented as performantly as possible (including via **[Cloudflare Zaraz](https://www.cloudflare.com/products/zaraz/)**)
- **[Screaming Frog](https://www.screamingfrog.co.uk/)**, to audit sites for accessibility, performance and <abbr title="search engine optimization">SEO</abbr> issues
- **[BrowserStack](https://www.browserstack.com/)** and **[LambdaTest](https://www.lambdatest.com/)**, for browser compatibility testing
- **[Litmus](https://litmus.com)** and **[EmailOnAcid](https://emailonacid.com)**, for email client compatibility testing

</details>

<details class="subsection | l-stack">

<summary>I'd love to learn more about:</summary>

- **[Svelte](https://svelte.dev/)**, and other similar tools that compile the framework away during the build process instead of delivering it to the client
- **[Storybook](https://storybook.js.org/)**
- **[Kirby CMS](https://getkirby.com/)**
- **Privacy-minded analytics tools**

</details>

</section>

<section id="work" class="l-stack" aria-label="Sample Work">

## I've made:

<ul>
{%- for item in work.featured -%}
<li>
<a href="{{ item.url | url }}" target="_blank" rel="noopener noreferrer" aria-label="{{ item.name }} (opens in new window)">{{ item.name }}</a>
{%- if item.award -%} <small>(won {{ item.award.name }}, <time>{{ item.award.year }}</time>)</small>{%- endif -%}
</li>
{%- endfor -%}
</ul>

<details class="subsection | l-stack">

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

<details class="subsection | l-stack">

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

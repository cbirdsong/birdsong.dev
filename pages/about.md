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

- **<abbr title="HTML">HTML</abbr>**, including templating languages like **[Liquid](https://shopify.github.io/liquid/)**, **[Twig](https://twig.symfony.com)**, and **[Nunjucks](https://mozilla.github.io/nunjucks/)**
- **<abbr title="Cascading Stylesheets">CSS</abbr>**, including processing tools like **[Sass](https://sass-lang.com)**, **Less** and **PostCSS**
- **JavaScript**, including [web components](https://developer.mozilla.org/en-US/docs/Web/API/Web_components) and libraries.
- **<abbr title="Scalable Vector Graphics">SVG</abbr>**, hand-coding animations, transitions and optimizations
- **[WordPress](https://wordpress.org)**, building block editor-first themes from scratch in both standard PHP and using **[Timber](https://www.upstatement.com/timber/)**, including custom editor blocks using **[Advanced Custom Fields](https://advancedcustomfields.com)**
- **[Eleventy](https://11ty.dev)**, building full sites, landing pages and one-off page components

<details class="subsection">
<summary>I've also worked with:</summary>
<div class="l-stack">

### Technologies and Frameworks:

- **Git**, GitHub and BitBucket
- **[PHP](https://www.php.net)**, primarily in the context of WordPress theming and templating
- **[Node.js](https://nodejs.org/en)**, primarily in the context of Eleventy
- **Regular expressions** and **shell scripting**
- **[Schema.org](https://schema.org)**, **OpenGraph** and other bits of metadata
- **[GSAP](https://greensock.com/)** animation library
- **JavaScript frameworks** like **[jQuery](https://jquery.com)**, **[Alpine](https://alpinejs.dev/)**, **[Vue](https://vuejs.org/)** and **[Svelte](https://svelte.dev/)**
- **<abbr title="Cascading Stylesheets">CSS</abbr> frameworks** like **[Bootstrap](https://getbootstrap.com)**, compiled from source and customized to the project whenever possible
- Developer tooling like **[npm](https://www.npmjs.com)**, **[Parcel](https://parceljs.org)** and **[Docker](https://www.docker.com)**

### <abbr title="Content Management Systems">CMSes</abbr> and Platforms:

- _Many_ common WordPress plugins like **[Gravity Forms](https://www.gravityforms.com)**, **[The Events Calendar](https://theeventscalendar.com)**, and **[Advanced Custom Fields](https://advancedcustomfields.com)**
- Managed hosts like **[Pantheon](https://pantheon.io)**, **[WP Engine](https://wpengine.com)** and **[Digital Ocean](https://www.digitalocean.com)**
- Static hosts like **[Netlify](https://netlify.com)**, **[Cloudflare Pages](https://pages.cloudflare.com)** and **[AWS Amplify](https://docs.amplify.aws)**
- **[Cloudflare](https://www.cloudflare.com)**, as a DNS provider/CDN and doing edge <abbr title="search engine optimization">SEO</abbr> optimization using [Cloudflare Workers](https://www.cloudflare.com/developer-platform/products/workers/)
- **[Google Maps Plaform](https://mapsplatform.google.com/)** <abbr title="application programming interfaces">APIs</abbr>, for searches, geocoding and customized map embeds
- **[Webflow](https://webflow.com/)**
- **[Craft CMS](https://www.craftcms.com/)**
- Email providers like **[MailChimp](https://mailchimp.com)** and **[HubSpot](https://www.hubspot.com)**
- **[Pattern Lab](https://patternlab.io/)**, building pattern libraries for design systems

### Software and Services:

- Image editors like **Adobe Photoshop**, **Adobe Illustrator**, **Pixelmator Pro** and **Affinity Designer**
- Design tools like **Sketch**, **Figma** and **Adobe XD**
- Accessibility auditing tools like **[axe](https://www.deque.com/axe/)** and **[WAVE](https://wave.webaim.org/)**
- Performance auditing tools like **Google Lighthouse** and **WebPageTest**
- **Google Analytics** and **Google Tag Manager**, implemented as performantly as possible
- **[Screaming Frog](https://www.screamingfrog.co.uk/)**, to audit sites for accessibility, performance and <abbr title="search engine optimization">SEO</abbr> issues
- **[BrowserStack](https://www.browserstack.com/)** and **[LambdaTest](https://www.lambdatest.com/)**, for browser compatibility testing
- **[Litmus](https://litmus.com)** and **[EmailOnAcid](https://emailonacid.com)**, for email client compatibility testing

</div>
</details>

<details class="subsection">
<summary>I'd love to learn more about:</summary>
<div class="l-stack">

- **WordPress' [site editor](https://wordpress.org/documentation/article/site-editor/)**
- **[Storybook](https://storybook.js.org/)**
- **[Kirby CMS](https://getkirby.com/)**
- **Privacy-minded analytics tools**

</div>
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

<p class="small"><em>Some of these probably aren't up to my modern standard. They also often use Typekit fonts, which do not work on archive.org.</em></p>

</details>

<details class="subsection | l-stack">

<summary>Just for Fun</summary>

<ul>
{%- for item in work.fun -%}
<li>
<a href="{{ item.url | url }}" target="_blank" rel="noopener noreferrer" aria-label="{{ item.name }} (opens in new window)">{{ item.name }}</a>
{%- if item.desc -%} <small>{{ item.desc }}</small>{%- endif -%}
</li>
{%- endfor -%}
</ul>

</details>

</section>

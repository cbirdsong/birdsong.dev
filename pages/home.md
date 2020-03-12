---
description: "Cory Birdsong is a front-end web developer that has given you one ticket (🎟) to see if anything chokes on emoji inside meta descriptions."
layout: home.njk
permalink: /
eleventyNavigation:
  key: About
  order: 1
---

<section class="lead" id="intro" aria-label="About Me">

# Hi.

<p class="lead">I build websites that are <strong>accessible</strong>, <strong>performant</strong>, <strong>responsive</strong>, <strong>user-centric</strong> and <strong>beautiful</strong>, using semantic <strong><abbr title="HyperText Markup Language">HTML</abbr></strong>, reusable and resilient <strong><abbr title="Cascading Stylesheets">CSS</abbr></strong>, and <em>just enough</em> <strong>JavaScript</strong>.
</p>

I have extensive experience collaborating with designers to strike the perfect balance between form and function.

I love learning about new capabilities in browsers and figuring out how to employ them as progressive enhancement.

I have a keen eye for detail and love laboring over sites to get them _just right_.

</section>

<section aria-label="Skills">

## I've worked with:

- **Templating languages** (Liquid, Twig, Nunjucks, Smarty) and `**Markdown**`
- **<abbr title="Cascading Stylesheets">CSS</abbr> preprocessors** (Sass and Less)
- **jQuery** and **npm** <small>(separately)</small>
- **Git**, GitHub and BitBucket
- **<abbr title="Scalable Vector Graphics">SVG</abbr>**, hand-coding animations, transitions and optimizations
- **WordPress**, building themes from scratch in both standard PHP and using Twig via **[Timber](https://www.upstatement.com/timber/)**
- **[Pattern Lab](https://patternlab.io/)**, building pattern libraries for design systems
- **HubSpot**, building custom landing pages and email templates, customizing form embeds

<details>
<summary>I've also worked with:</summary>

- **Photoshop**, **Illustrator** and **Sketch**
- **Google Analytics** and **Google Tag Manager** <small>(implemented as performantly as possible)</small>
- **Google Lighthouse** and **WebPageTest**
- **Schema.org** and other similar metadata
- **Cloudflare**, for doing edge <abbr title="search engine optimization">SEO</abbr> optimization via Cloudflare Workers
- **[Buddy](https://buddy.works)**, for <abbr title="continuous integration and delivery">CI/CD</abbr> and deployment
- **Shopify**
- **MailChimp**
- **[Netlify](https://netlify.com)**
- **[Eleventy](https://www.11ty.dev)**
- **[Parcel](https://parceljs.org/)**
  </details>

<details>

<summary>I'd love to learn more about:</summary>

- **Web components**
- **[Svelte](https://svelte.dev/)** and **[Sapper](https://sapper.svelte.dev/)**
- **[Craft CMS](https://www.craftcms.com/)**

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

<section id="more-info" aria-label="More information">

**[View my full resume](/resume/)**.

</section>

---
layout: layouts/home.njk
title: Home
permalink: /
---

<section class="lead" id="intro" aria-label="About Me">

<h1 class="visually-hidden">{{ metadata.title }}</h1>

<p class="lead">I build websites that are <strong>accessible</strong>, <strong>performant</strong>, <strong>responsive</strong>, <strong>user-centric</strong> and <strong>beautiful</strong>.</p>

I have a keen eye for detail and love laboring over sites to get them _just right_.

I have extensive experience collaborating with designers to strike the perfect balance between form and function.

I'm love learning about new capabilities in browsers and figuring out how to employ them as progressive enhancement.

</section>

<section aria-label="Skills">

## I write:

- accessible and semantic **<abbr title="HyperText Markup Language">HTML</abbr>**
- reusable and performant **<abbr title="Cascading Stylesheets">CSS</abbr>**
- just enough **JavaScript**

## I've worked with:

- **CSS preprocessors** (Sass and Less)
- **Templating languages** (Liquid, Twig, Nunjucks, Smarty)
- **Git**
- **<abbr title="Scalable Vector Graphics">SVG</abbr>**, hand-coding animations, transitions and optimizations
- **WordPress**, building themes from scratch in both standard PHP and using Twig via **[Timber](https://www.upstatement.com/timber/)**
- **[Pattern Lab](https://patternlab.io/)**, building pattern libraries for design systems
- **HubSpot**, building custom landing pages and email templates, customizing form embeds
- **Google Analytics** and **Google Tag Manager**, implemented as performantly as possible

<details>
<summary>I've also worked with:</summary>

- **Photoshop**, **Illustrator** and **Sketch**
- **Google Lighthouse** and **WebPageTest**
- **Schema.org** and other similar markup methods
- **Cloudflare**, for doing edge SEO optimization via Cloudflare Workers
- **[Buddy](https://buddy.works)**, for CI/CD and deployment
- **Shopify**
- **MailChimp**
- **WordPress page builders** like WP Bakery and Divi, on legacy projects I inherited
  </details>

<details>
<summary>I'd love to learn more about:</summary>

- **[Eleventy](https://www.11ty.dev)**
- **[Netlify](https://netlify.com)**
- **Web components**
- **[Svelte](https://svelte.dev/)** and **[Sapper](https://sapper.svelte.dev/)**
- **[Craft CMS](https://www.craftcms.com/)**
  </details>

</section>

<section id="work" aria-label="Sample Work">

## Sample Work

<ul>
{%- for item in work.featured -%}
	<li>
<a href="{{ item.url | url }}" target="_blank" rel="noopener noreferrer">{{ item.name }}<span class="visually-hidden">(opens in new window)</span></a><span class="icon icon-new-window" aria-hidden="true">&#8599;</span>
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
<a href="{{ item.url | url }}" target="_blank" rel="noopener noreferrer">{{ item.name }}<span class="visually-hidden">(opens in new window)</span></a><span class="icon icon-new-window" aria-hidden="true">&#8599;</span>
{%- if item.award -%} <small>(won {{ item.award.name }}, <time>{{ item.award.year }}</time>)</small>{%- endif -%}
	</li>
{%- endfor %}
</ul>

</details>

</section>

<section class="center" aria-label="More info">

<strong><em><a href="/resume/">View full résumé</em></a></strong>

</section>

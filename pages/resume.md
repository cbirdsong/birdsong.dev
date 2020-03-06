---
title: Résumé
permalink: /resume/
layout: layouts/page.njk
---

<section>

## Skills

**Expert**:

- HTML, including templating languages
- CSS, including Sass / Less
- WordPress, including [Timber](https://www.upstatement.com/timber/)
- JavaScript / jQuery (presentational)

**Adept**:

- Web accessbility
- SVG
- Git
- [Pattern Lab](https://patternlab.io/)
- Custom HTML email development
- Schema.org
- Google Analytics / Google Tag Manager

**Proficient**:

- HubSpot
- PHP
- Shopify
- [Netlify](https://netlify.com)
- [Eleventy](https://www.11ty.dev)

</section>

<section>

## Work

<ul>
{%- for item in work.featured %}
	<li>
<a href="{{ item.url | url }}" target="_blank" rel="noopener noreferrer">{{ item.name }}<span class="visually-hidden">(opens in new window)</span></a><span class="icon icon-new-window" aria-hidden="true">&#8599;</span>
{%- if item.award -%} <small>(won {{ item.award.name }}, <time>{{ item.award.year }}</time>)</small>{%- endif -%}
	</li>
{%- endfor %}
</ul>

<details>

<summary>Older Work</summary>

<p><small>Some of these probably aren't up to my modern standard. They also often use Typekit fonts, which do not work on archive.org.</small></p>

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

<section>

## Experience

### [The Current](https://thecurrentla.com) <small>(<time>2018</time>-)

Helped (re)launch and run a WordPress-powered non-profit news organization. Customized and eventually replaced a prebuilt theme. Managed WordPress integrations and transitions between Mailchimp/Active Campaign and Memberful/Pico.

### [BBR Creative](https://bbrcreative.com) <small>(<time>2018</time>-<time>2020</time>)

Use modern web technologies to accessibly implement and extend designs. Collaborated with designers to make sites beautiful, accessible and user-friendly. Built a landing page template system leveraging CSS custom properties from scratch.

Maintained and improved existing WordPress sites. Worked to optimize existing sites for performance. Built custom HTML email templates in HubSpot.

### [Wide Web Marketing](http://web.archive.org/web/20171021221327/https://www.widewebmarketing.com/) <small>(<time>2010</time>-<time>2018</time>)</small>

Implemented and extended designs originating in Photoshop or Illustrator. Worked with designers to make designs more responsive and user-friendly.

Customized and maintained a fork of Bootstrap to facilitate faster and higher-quality site production using Adobe Business Catalyst and the Liquid markup language. Became familiar with WordPress and its ecosystem.

</section>

<section>

## Education

Bachelor of Arts in Mass Communication (Print Journalism Concentration), University of Louisiana at Lafayette. <time>2007</time>.

</section>
<!-- 
<section>

## Contact

- [Email: resume@cory.birdsong.cc](mailto:resume@cory.birdsong.cc)
- [Telegram: cbirdsong](https://telegram.me/cbirdsong)
- [GitHub: cbirdsong](https://github.com/cbirdsong)
- [LinkedIn: cbirdsong](http://linkedin.com/in/cbirdsong)

</section> -->

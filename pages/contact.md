---
title: Contact
eleventyNavigation:
  key: Contact
  order: 90
---

<dl>
  {%- for item in contact %}
    <dt>
      {{ item.title }}
    </dt>
    <dd>
      <a href="{{ item.href | url }}">
        <strong>{{ item.value }}</strong>
      </a>
    </dd>
  {%- endfor %}
</dl>

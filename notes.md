---
title: Notes
layout: default
permalink: /notes/
---
<div class="h-feed">
<p class="post-meta">Short posts. Think tweets, minus the site. <a href="{{ "/notes.xml" | relative_url }}">Feed</a>.</p>
{%- assign date_format = site.minima.date_format | default: "%b %-d, %Y" -%}
{%- assign notes = site.notes | sort: "date" | reverse -%}
{%- for note in notes %}
<article class="note h-entry" style="margin: 0 0 2em 0; padding-bottom: 1.5em; border-bottom: 1px solid #e8e8e8;">
  <p class="post-meta" style="margin-bottom: .3em;">
    <a class="u-url" href="{{ note.url | relative_url }}"><time class="dt-published" datetime="{{ note.date | date_to_xmlschema }}">{{ note.date | date: date_format }}</time></a>
  </p>
  <div class="e-content">{{ note.content }}</div>
  <a class="p-author h-card" href="{{ "/" | absolute_url }}" hidden>{{ site.author }}</a>
</article>
{%- endfor %}
</div>

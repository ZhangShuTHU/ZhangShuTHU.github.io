---
layout: page
permalink: /publications/
title: 论著/Publications
description:
nav: true
nav_order: 1
---

An up-to-date list is available on my [Google scholar profile](https://scholar.google.com/citations?user=3dCECpgAAAAJ).

<!-- _pages/publications.md -->

<!-- Bibsearch Feature -->

{% include bib_search.liquid %}

<div class="publications">
 {% bibliography -f papers --group_by type --group_order ascending %}

</div>

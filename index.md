---
title: Главная страница
author: Василий Мазаев
date: 2023-10-16T14:30:00+03:00
layout: home
excerpt: >
  Главная страничка, план действий, место заметок.
---

## Личная страничка о моделизме

Всегда собирал масштабные модели, теперь решил еще и писать об этом в сети.

## 5 последних записей в жернале

{% for post in site.posts %}
[{{ post.title }}]({{ post.url }})
{% endfor %}

## Статьи

{% for article in site.articles %}
[{{ article.title }}]({{ article.url }})
{% endfor %}

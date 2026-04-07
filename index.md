---
title: Главная страница
author: Василий Мазаев
date: 2023-10-16T14:30:00+03:00
categories:
  - Blogs
tags:
  - Scalemodel
  - Creativity
layout: default
excerpt: >
  Главная страничка, план действий, место заметок.
draft: false
published: true
---

## Журнал хобби.

Все в том блоге в состоянии beta-test!

Всегда собирал масштабные модели, теперь решил еще и писать об этом в сети.

## 5 последних записей в жернале:

<h1>Latest Posts</h1>

<ul>
  {% for post in site.posts %}
    <li>
      <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
      {{ post.excerpt }}
    </li>
  {% endfor %}
</ul>

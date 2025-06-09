---
title: Моя вторая статья
author: Vasily Mazaev
date: 2023-10-16T14:30:00+03:00
categories:
  - Writing
  - Blogs
tags:
  - Content Creation
  - Creativity
layout: post
excerpt: >
  Вторая статья посвящена созданию качественного контента.
draft: false
published: true
---

# рабочий процесс

- рабочая папка `/root`
- стартовая страница `index.md`
- ссылки типа `[тест](/test.md)` ([тест](/test.md))
  > [!NOTE]
  > как интересно, index.md движок github pages оставил без изменений, а вот test.md заменил на test.html и в коде и в ссылке.
- настраиваем 404 страницу
  > Страница 404 работает. И это прекрасно. А вот [!NOTE] нет, надо почитать md-help
- Добавим YAML Front Matter к index.md

Так, ну со стандартным движком giyhub pages все практически ясно.
Давайте смотреть что там умеет jakyll

### Добавить Тему к сайту

Ого-ого! Он там сразу как нахреначил, надо рабираться.

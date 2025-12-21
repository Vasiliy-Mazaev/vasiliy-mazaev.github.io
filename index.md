---
title: Главная страница
author: Василий Мазаев
date: 2023-10-16T14:30:00+03:00
categories:
  - Blogs
tags:
  - Content Creation
  - Creativity
layout: default
excerpt: >
  Главная страничка, план действий, место заметок.
draft: false
published: true
---
## Оглавление

[Hobby Coin Bot](hobbycoin.md)

## [Тестовая страничка](test.md)

## Структура проекта

- рабочая папка `/root`
- стартовая страница `index.md`
- своя страничка для ошибка 404
- используем markdown ссылкы `[тест](/test.md)`. wiki-ссылки не работают.
- используем YAML Front Matter
- используем темы Jekyll

Так, ну со стандартным движком giyhub pages все практически ясно.
Давайте смотреть что там умеет jakyll

## Notes

Заменил у этой странички во Front matter YAML layout c *base* на *Default*
Написал Default с большой буквы, проверить зависит от регистра, подключит ли layout *default.html*
Результат: layout применился, а кнопка не появилась на главной странице, типа супер, но почему?

Напишу в front matter *default* с маленькой буквы

## Liquid

Отлично работает и в .md файлах

## Layout

Создал Default. Работает отлично, документация есть на сайте Jekyll

## Nav

- [ ] Пора создавать навигационную панель, как рекомендует Jekyll
- [ ] создать папку для Posts
- [x] выполненная задача

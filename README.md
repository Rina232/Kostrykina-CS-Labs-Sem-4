# ЛР 5. Добаление AJAX запросов к API

**Кострыкина Екатерина ИУ5-44Б**

## Содержание <!-- omit in toc -->

- [Цель работы](#цель-данной-лабораторной-работы)
- [Тема](#тема-онлайн-табло-аэропорта)
- [Сайт для вдохновения](#сайт-для-вдохновения-аэропорт-внуково)
- [Дополнительные задания](#дополнительные-задания)
- [План лабораторной работы](#план-лабораторной-работы)
- [Задание](#задание)

## Цель данной лабораторной работы

Цель данной лабораторной работы - взаимодействие с внешним API через XMLHttpRequest. В ходе выполнения работы, вам предстоит ознакомиться с кодом реализации простого взаимодействия с внешним API, получение данных и вывод их в интерфейс пользователя, и затем выполнить задания по варианту.

### Тема: Онлайн-табло аэропорта

### Сайт для вдохновения: [Аэропорт Внуково](https://www.vnukovo.ru/)

## Дополнительные задания

1. Разобраться в отличиях `XMLHttpRequest` и `fetch`
   ```javascript
   // XMLHttpRequest
   const xhr = new XMLHttpRequest();

   xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');

   xhr.onload = function () {
       if (xhr.status === 200) {
           console.log(JSON.parse(xhr.responseText));
       }
   };

   xhr.send();
   ```

   ```javascript
   // fetch
   fetch('https://jsonplaceholder.typicode.com/posts')
       .then(response => response.json())
       .then(data => console.log(data))
       .catch(error => console.error(error));
   ```

2. Добавить индикатор загрузки данных
   ```javascript
   showLoader() {
       const loader = document.createElement('div');

       loader.className = 'spinner-border text-primary';
       loader.role = 'status';

       loader.innerHTML = `
           <span class="visually-hidden">
               Loading...
           </span>
       `;

       document.body.append(loader);
   }
  

## План лабораторной работы

1. Инструменты для работы.
2. Что такое XMLHttpRequest.
3. Работа с API.
4. API главной страницы с карточками.
5. API страницы карточки.
6. Дополнительные материалы.

## Задание

Продолжение Лабораторной работы 3: добавить страницу добавления/редактирования и соответствующие кнопки, подключение к созданному API бэкенду. Запросы XHR, Cors обойти через расширение браузера CORS Unblock. Код 4ой лабораторной НЕ НУЖНО добавлять в ветку по 5ой, в 5ой и 6ой остается только фронтенд, как в 3ей.
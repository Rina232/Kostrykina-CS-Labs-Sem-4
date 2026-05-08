# ЛР 4. Методические указания по созданию бэкенда на Express.js

**Кострыкина Екатерина ИУ5-44Б**

## Содержание <!-- omit in toc -->

- [Цель работы](#цель-данной-лабораторной-работы)
- [Тема](#тема-регистрация-авиабагажа)
- [Сайт для вдохновения](#сайт-для-вдохновения-аэропорт-внуково)
- [Дополнительные задания](#дополнительные-задания)
- [План](#план)
- [Задание](#задание)

## Цель данной лабораторной работы 
Реализация на Node.js собственного веб-сервиса для API, данные хранятся в json файле. Тестирование через Postman/Insomnia 5 методов: список с фильтрацией, получение одной записи, добавление, редактирование, удаление

### Тема: Регистрация авиабагажа
 
### Сайт для вдохновения: [Аэропорт Внуково](https://www.vnukovo.ru/ru/?utm_source=google.com&utm_medium=organic&utm_campaign=google.com&utm_referrer=google.com)

## Дополнительные задания:
1. Добавить фильтрацию по описанию 
   ``` java script
        const findAll = (title, text) => {
        const stocks = fileService.readData(dataFilePath);

        return stocks.filter(stock => {
            const matchesTitle = title
                ? stock.title.toLowerCase().includes(title.toLowerCase())
                : true;

            const matchesText = text
                ? stock.text.toLowerCase().includes(text.toLowerCase())
                : true;

            return matchesTitle && matchesText;
        });
    };
   ```
   ``` java script
        const getAllStocks = (req, res) => {
        const { title, text } = req.query;

        const stocks = stocksService.findAll(title, text);

        res.json(stocks);
    };
    ```
  

## План
1. Введение в Express.js
2. Сравнение Express.js с чистым Node.js и NestJS
3. Создание проекта и базовая настройка
4. Архитектура приложения
5. Реализация REST API для карточек Stock
6. Тестирование работоспособности сервиса с помощью Postman
7. Дополнительные материалы

## Задание 
Разработать REST API сервис карточек c методами:
GET /stocks/ — получение всех карточек
POST /stocks — создание новой карточки
GET /stocks/:id — получение карточки по ID
PATCH /stocks/:id — обновление карточки по ID
DELETE /stocks/:id — удаление карточки по ID
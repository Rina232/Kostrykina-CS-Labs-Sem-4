# ЛР №6. Знакомство с promise и fetch, сборка клиентской части

**Кострыкина Екатерина ИУ5-44Б**

## Содержание <!-- omit in toc -->

- [Цель работы](#цель-данной-лабораторной-работы)
- [Тема](#тема)
- [Сайт для вдохновения](#сайт-для-вдохновения)
- [Дополнительные задания](#дополнительные-задания)
- [План](#план)
- [Задание](#задание)

## Цель данной лабораторной работы

Лабораторная состоит из 2-х частей:

Первая часть данной лабораторной работы заключается в изменении механизма взаимодействия с внешним API: в прошлой лабораторной работе использовался XMLHttpRequest, в этой - современный метод fetch. В ходе выполнения работы предстоит познакомиться с кратким полезным теоретическим материалом, кодом реализации простого взаимодействия с внешним API, получением данных и выводом их в интерфейс пользователя, и выполнить задания по варианту.

Вторая часть лабораторной работы заключается в сборке клиентской части приложения: необходимо "сбилдить" клиентскую часть (ЛР №3) с помощью системы сборки, а также добавить в серверную часть (ЛР №4) возможность раздачи клиентской части в качестве статики во избежание проблем с CORS.

## Тема
Онлайн-табло аэропорта

## Сайт для вдохновения
[Аэропорт Внуково](https://www.vnukovo.ru/)

## Дополнительные задания

1. Переделаны запросы с использованием async/await и fetch вместо XMLHttpRequest.
```js
class Ajax {
    async get(url, callback) {
        try {
            const response = await fetch(url)

            const data = await response.json()

            callback(data, response.status)
        } catch (e) {
            console.error(e)
            callback(null, 500)
        }
    }

    async post(url, data, callback) {
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })

            const result = await response.json()

            callback(result, response.status)
        } catch (e) {
            console.error(e)
            callback(null, 500)
        }
    }

    async patch(url, data, callback) {
        try {
            const response = await fetch(url, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })

            const result = await response.json()

            callback(result, response.status)
        } catch (e) {
            console.error(e)
            callback(null, 500)
        }
    }

    async delete(url, callback) {
        try {
            const response = await fetch(url, {
                method: 'DELETE'
            })

            const data = await response.json()

            callback(data, response.status)
        } catch (e) {
            console.error(e)
            callback(null, 500)
        }
    }
}
```

export const ajax = new Ajax()

## План лабораторной работы

1. Введение в Promise.
2. Использование Promise.
3. Что такое async await в JS
4. Пояснение про fetch и пример использования.
5. Сборка клиентской части через Vite.
6. Раздача фронтенда в качестве статики

## Задание

Замена коллбеков на промисы, запросы fetch. Сборка клиентской части через bundler, развертывание собранного фронтенда на сервере с API. Ветка по 6-ой лабораторной остается только с файлами исходного кода, а собранный bundle добавляется в ветку по 4-ой лабораторной.
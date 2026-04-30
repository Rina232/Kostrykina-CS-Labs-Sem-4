# ЛР 3. Простое веб-приложение. Верстка

**Кострыкина Екатерина ИУ5-44Б**

## Содержание <!-- omit in toc -->

- [Цель работы](#цель-данной-лабораторной-работы)
- [Тема](#тема-регистрация-авиабагажа)
- [Сайт для вдохновения](#сайт-для-вдохновения-аэропорт-внуково)
- [Дополнительные задания](#дополнительные-задания)
- [План](#план)
- [Задание](#задание)

## Цель данной лабораторной работы 
Знакомство с node, npm, написание простого приложения на JavaScript. В ходе выполнения работы, вам предстоит ознакомиться с кодом реализации простого интерфейса и вывода данных, и затем выполнить задания по варианту.

### Тема: Регистрация авиабагажа
 
### Сайт для вдохновения: [Аэропорт Внуково](https://www.vnukovo.ru/ru/?utm_source=google.com&utm_medium=organic&utm_campaign=google.com&utm_referrer=google.com)

## Дополнительные задания:
1. Добавить шапку сайта с прошлой лабораторной работы
   ``` html
       <header>
            <nav class="header-menu">
                <a href="main-page.html" class="logo-link">
                    <img class="logo" width="40" height="40" src="img/airport.png" alt="airport-building"/>
                </a>
                <ul>
                    <li><a href="main-page.html"><span>Об аэропорте</span></a></li>
                    <li><a href="calculator.html"><span>Расчет багажа</span></a></li>
                    <li><a href="index.html" data-action="go-main"><span>Маршруты</span></a></li>
                    <li><a href="author.html" class="end-href"><span>Об авторе</span></a></li>
                </ul>
            </nav>
        </header>
   ```

2. Реализовать переход по кнопке "Маршруты"
   ```javascript
    bindBackButton() { 
        const routesLinks = document.querySelectorAll('a[data-action="go-main"]');
        
        routesLinks.forEach(link => {
            const newLink = link.cloneNode(true);
            link.replaceWith(newLink);
            
            newLink.addEventListener('click', (e) => {
                e.preventDefault();
                const mainPage = new MainPage(this.parent);
                mainPage.render();
            });
        });
    }
   ```
3. На странице продукта заменить карточки на карусель
    ``` javascript
        getHTML(data) {
        return (
            `   
                <div id="carouselExampleCaptions" class="carousel slide mx-auto" style="width: 1000px; height: 500px; margin: 90px auto 50px auto !important;">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                        <img src="${data.src}" class="d-block mx-auto" alt="картинка">
                        <div class="carousel-caption d-none d-md-block">
                            <h5>${data.title}</h5>
                            <p>${data.text[0]}</p>
                        </div>
                        </div>
                        <div class="carousel-item">
                        <img src="${data.src}" class="d-block mx-auto" alt="картинка">
                        <div class="carousel-caption d-none d-md-block">
                            <h5>${data.title}</h5>
                            <p>${data.text[1]}</p>
                        </div>
                        </div>
                        <div class="carousel-item">
                        <img src="${data.src}" class="d-block mx-auto" alt="картинка">
                        <div class="carousel-caption d-none d-md-block">
                            <h5>${data.title}</h5>
                            <p>${data.text[2]}</p>
                        </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Предыдущий</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Следующий</span>
                    </button>
                </div>
            `
        )
    }
    ```

## План

1. Инструменты для работы
2. Что такое node, npm и package.json
3. Как работать с html в JS
4. Инициализация проекта
5. Создание главной страницы, подключение bootstrap
6. Простая кнопка на JavaScript
7. Структурирование проекта
8. Верстка главной страницы
9. Верстка страницы продукта

## Задание 
Знакомство с node, npm. Верстка интерфейса с карточками (страница списка с фильтрацией и страница подробнее), данные получать через mock объекты (коллекция). Добавить кнопку добавления (копировать первую карточку), кнопку удаления карточки. В хедере на обеих страницах должна быть кнопка Домой
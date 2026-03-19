# ЛР 1. Calculator. HTML/CSS

**Кострыкина Екатерина ИУ5-44Б**

**Цель** данной лабораторной работы - знакомство с инструментами построения пользовательских интерфейсов web-сайтов: HTML, CSS. В ходе выполнения работы, вам предстоит ознакомиться с кодом реализации простого калькулятора,  и затем выполнить задания по варианту.

**Тема:** Регистрация авиабагажа

**Сайт для вдохновения:** [Аэропорт Внуково](https://www.vnukovo.ru/ru/?utm_source=google.com&utm_medium=organic&utm_campaign=google.com&utm_referrer=google.com)
 
## План работы

1. Создание проекта
2. Верстка калькулятора с помощью HTML-разметка
3. Написание стилей через CSS
4. Стилизация верстки калькулятора с помощью CSS


**Дополнительные задания:**
Создать поле для хранения истории работы калькулятора

```html
<div id="history" class="history"></div>
```

```css
.history {
  width: 200px;
  height: 25px;
  padding-right: 15px;
  padding-left: 10px;
  padding-top: 15px;
  margin-left: 10px;
  background: rgb(168, 216, 255);
  opacity: 40%;
  border-radius: 30px 30px 0 0;
  border-bottom: 1px solid white;
  text-align: right;
  color: white;
  font-size: 1.5rem;
  font-family: 'Font';
}
```
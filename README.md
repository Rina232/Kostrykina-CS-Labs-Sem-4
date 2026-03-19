# ЛР 1. Calculator.JavaScript

**Кострыкина Екатерина ИУ5-44Б**

**Цель** данной лабораторной работы — знакомство с инструментами построения пользовательских интерфейсов web-сайтов: HTML, CSS, JavaScript. В ходе выполнения работы вам предстоит продолжить реализовывать простой калькулятор, а затем выполнить задания по варианту.

**Тема:** Регистрация авиабагажа

**Сайт для вдохновения:** [Аэропорт Внуково](https://www.vnukovo.ru/ru/?utm_source=google.com&utm_medium=organic&utm_campaign=google.com&utm_referrer=google.com)
 
## План работы

1. Программирование логики с помощью JavaScript
2. Предоставление доступ к HTML-элементам из JavaScript
3. Программирование кнопок калькулятора
4. Запуск калькулятора с помощью LiveServer


## Дополнительные задания:
1. Реализовать накапливаемые функции
   ``` javascript
       function calculate(val1, val2, op) {
           val1 = +val1;
           val2 = +val2;
           let result;
   
           switch(op) {
               case 'x': result = val1 * val2; break;
               case '+': result = val1 + val2; break;
               case '-': result = val1 - val2; break;
               case '/':
                   if (val2 === 0) return 'Error';
                   result = val1 / val2;
                   break;
               default: result = val2;
           }
   
           return formatNumber(result);
       }
   ```

2. Добавить реализацию хранения истории операций
   ```javascript
   function changeHistory(a, sign){
           if ((+a) < 0){
               historyElement.innerHTML += '(' + a + ')' + sign;
           }
           else historyElement.innerHTML += a + sign;
   
           if (historyElement.innerHTML.length > MAX_LENGTH) {
               historyElement.innerHTML = '...' + historyElement.innerHTML.slice(-10);
           }
       }
   ```
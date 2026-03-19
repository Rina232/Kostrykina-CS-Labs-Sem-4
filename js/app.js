const backgrounds = [
    'img/background-1.png',
    'img/background-2.png',
    'img/background-3.png',
];

const bgImages = document.querySelectorAll('.background-img .bg-img');
let currentIndex = 0;

function changeBackground() {
    bgImages.forEach(img => img.classList.remove('active'));

    const nextIndex = (currentIndex + 1) % bgImages.length;
    bgImages[nextIndex].src = backgrounds[nextIndex];

    setTimeout(() => {
        bgImages[nextIndex].classList.add('active');
    }, 50);

    currentIndex = nextIndex;
}

setInterval(changeBackground, 5000);


const themeChanger = document.querySelector('.theme-changer');

const ICON_SUN = 'img/sun.svg';
const ICON_MOON = 'img/moon.png';

let isDarkTheme = false;

themeChanger.addEventListener('click', () => {
    isDarkTheme = !isDarkTheme;

    themeChanger.src = isDarkTheme ? ICON_SUN : ICON_MOON;

    document.body.classList.toggle('dark-theme');

    localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');
});

document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'dark') {
        isDarkTheme = true;
        themeChanger.src = ICON_SUN;
        document.body.classList.add('dark-theme');
    }
});


const menuButton = document.querySelector('.button-menu');
const closeMenuButton = document.querySelector('.button-close');
const dropdownMenu = document.getElementById('dropdownMenu');

menuButton.addEventListener('click', (e) => {
    e.stopPropagation();
    dropdownMenu.classList.toggle('active');
});

closeMenuButton.addEventListener('click', () => {
    dropdownMenu.classList.remove('active');
});

document.addEventListener('click', (e) => {
    if (!dropdownMenu.contains(e.target)) {
        dropdownMenu.classList.remove('active');
    }
});

dropdownMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        dropdownMenu.classList.remove('active');
    });
});

window.onload = function(){
    const MAX_LENGTH = 11;
    let a = ''
    let b = ''
    let expressionResult = ''
    let selectedOperation = null
    const outputElement = document.getElementById("result")
    const historyElement = document.getElementById("history")
    const digitButtons = document.querySelectorAll('[id ^= "btn_digit_"]')

    function formatNumber(num) {
        let str = num.toString();

        if (str.length > MAX_LENGTH) {
            str = num.toExponential(6).replace(/\.?0+e/, 'e');
        }

        return str;
    }

    function changeHistory(a, sign){
        if ((+a) < 0){
            historyElement.innerHTML += '(' + a + ')' + sign;
        }
        else historyElement.innerHTML += a + sign;

        if (historyElement.innerHTML.length > MAX_LENGTH) {
            historyElement.innerHTML = '...' + historyElement.innerHTML.slice(-10);
        }
    }

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

    function onDigitButtonClicked(digit) {
        if (outputElement.innerHTML === 'Error'){
                outputElement.innerHTML = '';
                a = '';
                b = '';
                selectedOperation = null;
            }
        if (!selectedOperation) {
            if (a.length == MAX_LENGTH) return;

            if ((digit != '.') || (digit == '.' && !a.includes(digit))) {
                if (a === '' && (digit == '.' && !a.includes(digit))){
                    a = '0';
                }
                a += digit;
            }
            a = (+a).toString();
            outputElement.innerHTML = a;
        }
        else {
            if (b.length == MAX_LENGTH) return;
            if ((digit != '.') || (digit == '.' && !b.includes(digit))) {
                if (b === '' && (digit == '.' && !b.includes(digit))){
                    b = '0';
                }
                b += digit;
                b = (+b).toString();
                outputElement.innerHTML = b;
            }
        }
        }

    digitButtons.forEach(button => {
        button.onclick = function() {
            const digitValue = button.innerHTML;
            onDigitButtonClicked(digitValue);
        }
    });

    function handleOperationClick(newOp) {
    if (a === 'Error') {
        outputElement.innerHTML = '';
        a = '';
        }
        if (a === '') return;

        if (b !== '') {
            let result = calculate(a, b, selectedOperation);

            if (result === 'Error') {
                outputElement.innerHTML = 'Error';
                a = '';
                b = '';
                selectedOperation = null;
                return;
            }

            changeHistory(b, newOp);
            a = result;
            b = '';
        } else {
            changeHistory(a, newOp);
        }
        outputElement.innerHTML = '';
        selectedOperation = newOp;
    }

    document.getElementById("btn_op_mult").onclick = function() { handleOperationClick('x'); }
    document.getElementById("btn_op_plus").onclick = function() { handleOperationClick('+'); }
    document.getElementById("btn_op_minus").onclick = function() { handleOperationClick('-'); }
    document.getElementById("btn_op_div").onclick = function() { handleOperationClick('/'); }


    document.getElementById("btn_op_clear").onclick = function() {
        a = '';
        b = '';
        selectedOperation = '';
        expressionResult = '';
        outputElement.innerHTML = '';
        historyElement.innerHTML = '';
    }
    document.getElementById("btn_op_equal").onclick = function() {
        if (a === '' || b === '' || !selectedOperation) return;

        let result = calculate(a, b, selectedOperation);

        if (result === 'Error') {
            outputElement.innerHTML = 'Error';
            a = '';
            b = '';
            selectedOperation = null;
        } else {
            a = result;
            b = '';
            selectedOperation = null;
            outputElement.innerHTML = a;
        }

        historyElement.innerHTML = '';
    }
    document.getElementById("btn_op_sign").onclick = function() {
        if (outputElement.innerHTML == '') return;

        if (a === 'Error'){
            outputElement.innerHTML = '';
            a = '';
        }

        let target = (b !== '') ? 'b' : 'a';
        let currentVal = (target === 'b') ? b : a;

        if (currentVal === '') return;

        let newVal = ((+currentVal) * (-1)).toString();

        if (target === 'b') {
            b = newVal;
            outputElement.innerHTML = b;
        } else {
            a = newVal;
            outputElement.innerHTML = a;
        }
    }
    document.getElementById("btn_op_percent").onclick = function() {
        if (outputElement.innerHTML == '') return;

        if (a === 'Error'){
            outputElement.innerHTML = '';
            a = '';
        }
        let target = (b !== '') ? 'b' : 'a';
        let currentVal = (target === 'b') ? b : a;

        if (currentVal === '') return;

        let newVal = formatNumber((+currentVal) / (100));

        if (target === 'b') {
            b = newVal;
            outputElement.innerHTML = b;
        } else {
            a = newVal;
            outputElement.innerHTML = a;
        }
    }
};
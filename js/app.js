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

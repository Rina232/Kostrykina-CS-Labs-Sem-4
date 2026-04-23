/*import {BackButtonComponent} from "../../components/back-button/index.js";*/
import {ProductComponent} from "../../components/product/index.js";
import {MainPage} from "../main/index.js";

export class ProductPage {
    constructor(parent, id) {
        this.parent = parent
        this.id = id

    }

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

    getData() {
        if (this.id == 1) {
            return {
                id: 1,
                src: "https://images.unsplash.com/photo-1526821799652-2dc51675628e?q=80&w=2156&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                title: "Франция",
                text: [
                    "Париж с Эйфелевой башней, Лувром и Нотр-Дамом.",
                    "Винные туры в регионы Бордо и Шампань. Лазурный берег, Прованс и Версаль.",
                    "Французская кухня, мода и искусство. Индивидуальные и групповые туры. От 45 000 ₽"
                ]
            }
        }
        if (this.id == 2) {
            return {
                id: 2,
                src: "https://images.unsplash.com/photo-1570970168428-4e6347943681?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                title: "Италия",
                text: [
                    "Рим с Колизеем и Ватиканом, романтическая Венеция, живописная Флоренция.",
                    "Амальфитанское побережье и озёра Комо и Гарда. Настоящая итальянская кухня: пицца, паста, джелато.",
                    "Экскурсии, гастрономические и пляжные туры. От 42 000 ₽"
                ]
            }
        }
        if (this.id == 3) {
            return {
                id: 3,
                src: "https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                title: "Индонезия",
                text: [
                    "Остров Бали с храмами Улувату и Танах Лот. Рисовые террасы Тегалаланг и вулкан Батур.",
                    "Тропические пляжи, сноркелинг и дайвинг. Уникальная культура, традиционные танцы и спа-ритуалы.",
                    "Пакетные и авторские туры. От 65 000 ₽"
                ]
            }
        }
        if (this.id == 4) {
            return {
                id: 4,
                src: "https://plus.unsplash.com/premium_photo-1661963210464-73560a246e06?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                title: "Япония",
                text: [
                    "Современный Токио и древний Киото с тысячами храмов. Цветение сакуры весной и красные клёны осенью.",
                    "Традиционные онсэны, суши-мастер-классы и технология будущего.",
                    "Безопасность, чистота и уникальная культура. От 75 000 ₽"
                ]
            }
        }
        if (this.id == 5) {
            return {
                id: 5,
                src: "https://images.unsplash.com/photo-1569069438599-4b719f7463b4?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                title: "ОАЭ",
                text: [
                    "Дубай с Бурдж-Халифой, искусственными островами и крупнейшими торговыми центрами.",
                    "Сафари по пустыне, верблюжьи треки и ужин под звёздами. Абу-Даби с мечетью Шейха Зайда.",
                    "Роскошные отели, шопинг и круглогодичное солнце. От 38 000 ₽"
                ]
            }
        }
        if (this.id == 6) {
            return {
                id: 6,
                src: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=1439&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                title: "Таиланд",
                text: [
                    "Бангкок с Великим дворцом и храмом Изумрудного Будды. Пхукет, Самуи и острова с бирюзовой водой.",
                    "Тайский массаж, уличная еда и ночные рынки. Экскурсии к слонам, сноркелинг и тропическая природа.",
                    "От 48 000 ₽"
                ]
            }
        }
        return {
            id: 1,
            src: "https://images.unsplash.com/photo-1526821799652-2dc51675628e?q=80&w=2156&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Франция",
            text: [
                "Париж с Эйфелевой башней, Лувром и Нотр-Дамом.",
                "Винные туры в регионы Бордо и Шампань. Лазурный берег, Прованс и Версаль.",
                "Французская кухня, мода и искусство. Индивидуальные и групповые туры. От 45 000 ₽"
            ]
        }
    }

    get pageRoot() {
        return document.getElementById('product-page')
    }

    getHTML() {
        return (
            `
                <div id="product-page"></div>
            `
        )
    }

    /*clickBack() {
        const mainPage = new MainPage(this.parent)
        mainPage.render()
    }*/

    render() {
        this.parent.innerHTML = ''
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', html)

        /*const backButton = new BackButtonComponent(this.pageRoot)
        backButton.render(this.clickBack.bind(this))*/

        this.bindBackButton();

        const data = this.getData()
        const stock = new ProductComponent(this.pageRoot)
        stock.render(data)
    }
}
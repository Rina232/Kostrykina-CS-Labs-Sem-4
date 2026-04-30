import {ProductCardComponent} from "../../components/product-card/index.js";
import {ProductPage} from "../product/index.js";
import {ButtonGroupComponent} from "../../components/button-group/index.js";
import {MiniGamesPage} from "../../pages/game/index.js";

export class MainPage {
    static cardsData = [
        {
            id: 1,
            src: "https://images.unsplash.com/photo-1431274172761-fca41d930114?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Франция",
            text: "Париж, Эйфелева башня и невероятная кухня. От 45 000 ₽"
        },
        {
            id: 2,
            src: "https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?q=80&w=1467&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Италия",
            text: "Венеция, Рим и Колизей. Гастрономические туры. От 42 000 ₽"
        },
        {
            id: 3,
            src: "https://plus.unsplash.com/premium_photo-1730035378601-e4b6183f3398?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Индонезия",
            text: "Бали - райские пляжи и экзотика. От 65 000 ₽"
        },
        {
            id: 4,
            src: "https://images.unsplash.com/photo-1620149327305-791a9fe17111?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Япония",
            text: "Токио, Киото, сакура и древние храмы. От 75 000 ₽"
        },
        {
            id: 5,
            src: "https://images.unsplash.com/photo-1544092683-c0c9ebb368e5?q=80&w=1451&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "ОАЭ",
            text: "Дубай - роскошь и современные чудеса. От 38 000 ₽"
        },
        {
            id: 6,
            src: "https://plus.unsplash.com/premium_photo-1661962958462-9e52fda9954d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Таиланд",
            text: "Бангкок, Пхукет, тропики и буддийские храмы. От 48 000 ₽"
        }
    ];

    static firstUnusedId = 7;

    constructor(parent) {
        this.parent = parent;
    }
    
    get buttonPageRoot() {
        return document.getElementById('button-group')
    }

    get cardsPageRoot() {
        return document.getElementById('card-group')
    }
        
    getHTML() {
        if (MainPage.cardsData.length < 3) {
            return (
            `   
                <div class="routes">
                <h1>Популярные маршруты</h1>
                <div id="main-page" class="d-flex flex-wrap">
                    <div id="button-group" class="w-100 mb-3 d-flex justify-content-end" style="margin: 15px 25px 0 0;"></div>
                    <div id="card-group" class="row row-cols-1 row-cols-md-2 g-4" style="margin: 0 0 30px 0;"></div>
                </div>
                </div>
            `
        )
        }
        return (
            `   
                <div class="routes">
                <h1>Популярные маршруты</h1>
                <div id="main-page" class="d-flex flex-wrap">
                    <div id="button-group" class="w-100 mb-3 d-flex justify-content-end" style="margin: 15px 25px 0 0;"></div>
                    <div id="card-group" class="row row-cols-1 row-cols-md-3 g-4" style="margin: 0 0 30px 0;"></div>
                </div>
                </div>
            `
        )
    }
        
    getData() {
    return MainPage.cardsData
}

    clickCard(e) {
        const cardId = e.target.dataset.id

        const productPage = new ProductPage(this.parent, cardId)
        productPage.render()
    }

    clickAdd() {
        const newData = { id: MainPage.firstUnusedId++,
                        src: MainPage.cardsData[0].src,
                        title: MainPage.cardsData[0].title,
                        text: MainPage.cardsData[0].text }
        MainPage.cardsData.push(newData)

        this.render()
    }

    clickDelete() {
        if (MainPage.cardsData.length > 0) {
            MainPage.cardsData.pop();

            this.render()
        }
    }

    clickPlay() {
        const gamesPage = new MiniGamesPage(this.parent);
        gamesPage.render();
    }
        
    render() {
        this.parent.innerHTML = ''
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', html)

        const ButtonGroup = new ButtonGroupComponent(this.buttonPageRoot)
        ButtonGroup.render(this.clickAdd.bind(this), this.clickDelete.bind(this), this.clickPlay.bind(this))
        
        const data = this.getData()
        data.forEach((item) => {
            const productCard = new ProductCardComponent(this.cardsPageRoot)
            productCard.render(item, this.clickCard.bind(this))
        })
    }
}
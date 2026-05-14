import {ProductCardComponent} from "../../components/product-card/index.js";
import { FormComponent } from "../../components/form-modal/index.js";
import {ProductPage} from "../product/index.js";
import { MainButtonGroupComponent } from "../../components/main-button-group/index.js";
import {ajax} from "../../modules/ajax.js";
import {stockUrls} from "../../modules/stockUrls.js";

export class MainPage {
    //static firstUnusedId = 7;

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
        ajax.get(stockUrls.getStocks(), (data) => {
            this.renderData(data);
        })
    }

    clickCard(e) {
        const cardId = e.target.dataset.id

        const productPage = new ProductPage(this.parent, cardId)
        productPage.render()
    }

    clickAdd() {
        /*const newData = { id: MainPage.firstUnusedId++,
                        src: MainPage.cardsData[0].src,
                        title: MainPage.cardsData[0].title,
                        text: MainPage.cardsData[0].text }
        MainPage.cardsData.push(newData)*/

        this.modal.show()
    }

    clickDelete() {
        if (MainPage.cardsData.length > 0) {
            MainPage.cardsData.pop();

            this.render()
        }
    }

    clearForm() {
        const inputs = this.modalElement.querySelectorAll('input, textarea')

        inputs.forEach(input => {
            input.value = ''
            input.classList.remove('is-invalid')
        })

        const errors = this.modalElement.querySelectorAll('.invalid-feedback')

        errors.forEach(err => {
            err.innerText = ''
        })
    }
        
    render() {
        this.parent.innerHTML = ''
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', html)

        const ButtonGroup = new MainButtonGroupComponent(this.buttonPageRoot)
        ButtonGroup.render(this.clickAdd.bind(this), this.clickDelete.bind(this))

        const form = new FormComponent()
        form.render()

        this.modalElement = document.getElementById('addCardModal')
        this.modal = new bootstrap.Modal(this.modalElement)
        this.modalElement.addEventListener('hidden.bs.modal', () => {
            this.clearForm()
        })

        this.getData()
    }

    renderData(items) {
        this.cardsPageRoot.innerHTML = ''
        items.forEach((item) => {
            const productCard = new ProductCardComponent(this.cardsPageRoot)
            productCard.render(item, this.clickCard.bind(this))
        })
    }
}
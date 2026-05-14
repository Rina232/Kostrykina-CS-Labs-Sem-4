/*import {BackButtonComponent} from "../../components/back-button/index.js";*/
import {ProductComponent} from "../../components/product/index.js";
import {DetailButtonGroupComponent} from "../../components/detail-button-group/index.js";
import { FormComponent } from "../../components/form-modal/index.js";
import {MainPage} from "../main/index.js";
import {ajax} from "../../modules/ajax.js";
import {stockUrls} from "../../modules/stockUrls.js";
import { DeleteModalComponent } from "../../components/delete-modal/index.js";

export class ProductPage {
    constructor(parent, id) {
        this.parent = parent
        this.id = id

    }
    
    get buttonPageRoot() {
        return document.getElementById('button-group')
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
        ajax.get(stockUrls.getStockById(this.id), (data) => {
            this.data = data
            this.renderData(data)

            this.initModal(data)
        })
    }

    initModal(data) {
        const form = new FormComponent()
        form.render(data)

        this.modalElement = document.getElementById('addCardModal')
        this.modal = new bootstrap.Modal(this.modalElement)
    }

    get pageRoot() {
        return document.getElementById('product-page')
    }

    getHTML() {
        return (
            `
                <div id="product-page" class="d-flex flex-wrap">
                    <div id="button-group" class="w-100 mb-3 d-flex justify-content-end" style="margin: 90px 215px 0px 0;"></div>
                </div>
            `
        )
    }
    
    clickEdit() {
        this.modal.show()
    }
    
    clickDelete() {
        this.delete_modal.show()
    }

    deleteCard() {
        ajax.delete(stockUrls.removeStockById(this.id), (data) => {
            this.delete_modal.hide()
            const mainPage = new MainPage(this.parent);
            mainPage.render();
        });
    }

    /*clickBack() {
        const mainPage = new MainPage(this.parent)
        mainPage.render()
    }*/

    render() {
        this.parent.innerHTML = ''
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', html)
        
        const ButtonGroup = new DetailButtonGroupComponent(this.buttonPageRoot)
        ButtonGroup.render(this.clickEdit.bind(this), this.clickDelete.bind(this))

        const delete_form = new DeleteModalComponent()
        delete_form.render(this.deleteCard.bind(this))

        this.delete_modalElement = document.getElementById('deleteModal')
        this.delete_modal = new bootstrap.Modal(this.delete_modalElement)

        /*const backButton = new BackButtonComponent(this.pageRoot)
        backButton.render(this.clickBack.bind(this))*/

        this.bindBackButton();

        this.getData()
    }

    renderData(item) {
        const product = new ProductComponent(this.pageRoot)
        product.render(item)
    }

}
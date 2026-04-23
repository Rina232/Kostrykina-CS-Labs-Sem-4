export class BackButtonComponent {
    constructor(parent) {
        this.parent = parent;
    }

    addListeners(listener) {
        document
            .getElementById("back-button")
            .addEventListener("click", listener)
    }

    getHTML() {
        return (
            `   
                <div class="d-flex justify-content-end" style="margin: 30px 30px 0 0;">
                    <button id="back-button" class="btn btn-primary back-button" type="button" >Назад</button>
                </div>
            `
        )
    }

    render(listener) {
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', html)
        this.addListeners(listener)
    }
}
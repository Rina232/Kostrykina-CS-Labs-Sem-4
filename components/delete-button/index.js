export class DeleteButtonComponent {
    constructor(parent) {
        this.parent = parent;
    }

    addListeners(listener) {
        document
            .getElementById("delete-button")
            .addEventListener("click", listener)
    }

    getHTML() {
        return (
            `   
                <div class="d-flex justify-content-end" style="margin: 30px 30px 0 0;">
                    <button id="delete-button" class="btn btn-primary delete-button" type="button">Удалить маршрут</button>
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
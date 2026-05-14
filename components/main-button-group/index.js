export class MainButtonGroupComponent {
    constructor(parent) {
        this.parent = parent;
    }

    addListeners(addListener, deleteListener) {
        document
            .getElementById("add-button") 
            .addEventListener("click", addListener)
        document
            .getElementById("delete-button") 
            .addEventListener("click", deleteListener)
    }

    getHTML() {
        return (
            `   
                <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                    <button id="add-button" type="button" class="btn btn-success add-button">Добавить новый</button>
                    <button id="delete-button" type="button" class="btn btn-danger delete-button">Удалить последний</button>
                </div>
            `
        )
    }

    render(addListener, deleteListener) {
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', html)
        this.addListeners(addListener, deleteListener)
    }
}
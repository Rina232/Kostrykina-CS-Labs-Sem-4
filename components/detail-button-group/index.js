export class DetailButtonGroupComponent {
    constructor(parent) {
        this.parent = parent;
    }

    addListeners(editListener, deleteListener) {
        document
            .getElementById("edit-button") 
            .addEventListener("click", editListener)
        document
            .getElementById("delete-button") 
            .addEventListener("click", deleteListener)
    }

    getHTML() {
        return (
            `   
                <div class="btn-group" role="group">
                    <button id="edit-button" type="button" class="btn btn-success edit-button">Изменить</button>
                    <button id="delete-button" type="button" class="btn btn-danger delete-button">Удалить</button>
                </div>
            `
        )
    }

    render(editListener, deleteListener) {
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', html)
        this.addListeners(editListener, deleteListener)
    }
}
export class ButtonGroupComponent {
    constructor(parent) {
        this.parent = parent;
    }

    addListeners(addListener, deleteListener, playListener) {
        document
            .getElementById("add-button") 
            .addEventListener("click", addListener)
        document
            .getElementById("delete-button") 
            .addEventListener("click", deleteListener)
        document
            .getElementById("play-button") 
            .addEventListener("click", playListener)
    }

    getHTML() {
        return (
            `   
                <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                    <button id="add-button" type="button" class="btn btn-success add-button">Добавить</button>
                    <button id="delete-button" type="button" class="btn btn-danger delete-button">Удалить</button>
                    <button id="play-button" type="button" class="btn btn-info play-button">Мини-игра</button>
                </div>
            `
        )
    }

    render(addListener, deleteListener, playListener) {
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', html)
        this.addListeners(addListener, deleteListener, playListener)
    }
}
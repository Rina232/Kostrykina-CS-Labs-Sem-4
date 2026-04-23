export class ProductCardComponent {
    constructor(parent) {
        this.parent = parent;
    }

    getHTML(data) {
        return (
            `
                <div class="col" style="padding: 32px; margin: 0;">
                    <div class="card text-bg-dark text-end">
                        <img class="card-img" src="${data.src}" alt="картинка">
                        <div class="card-img-overlay" style="border-radius: 20px;">
                            <h5 class="card-title">${data.title}</h5>
                            <p class="card-text">${data.text}</p>
                            <button class="btn btn-primary btn-about" id="click-card-${data.id}" data-id="${data.id}">Подробнее</button>
                        </div>
                    </div>
                </div>
            `
        )
    }

    addListeners(data, listener) {
        document
            .getElementById(`click-card-${data.id}`)
            .addEventListener("click", listener)
    }

    render(data, listener) {
        const html = this.getHTML(data)
        this.parent.insertAdjacentHTML('beforeend', html)
        this.addListeners(data, listener)
    }
}
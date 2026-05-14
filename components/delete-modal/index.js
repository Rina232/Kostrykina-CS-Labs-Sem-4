export class DeleteModalComponent {
    getHTML() {
        return (
            `   
            <div class="modal fade" id="deleteModal" tabindex="-1">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-body">
                        <p>Вы уверены что хотите удалить маршрут?</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Нет</button>
                        <button id="successDeleteBtn" type="button" class="btn btn-primary">Да</button>
                    </div>
                    </div>
                </div>
            </div>
            `
        )
    }

    render(deleteCard) {
        const html = this.getHTML()
        document.body.insertAdjacentHTML('beforeend', html);


        const btn = document.getElementById("successDeleteBtn")
        btn.addEventListener("click", deleteCard, { once: true })

    }
}
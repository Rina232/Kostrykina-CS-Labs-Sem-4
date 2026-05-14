export class FormComponent {
    getHTML(data) {
        return (
            `   
            <div class="modal fade" id="addCardModal" tabindex="-1" aria-labelledby="modalLabel" aria-hidden="true"> 
                 <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="modalLabel">Добавление нового маршрута</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form id="addCardForm">
                                <div class="mb-3">
                                    <label for="titleInput" class="form-label">Название маршрута</label>
                                    <input type="text" class="form-control" id="titleInput" value="${data ? data.title : ''}" maxlength="50">
                                    <div id="titleError" class="invalid-feedback"></div>
                                </div>
                                <div class="mb-3">
                                    <label for="textInput" class="form-label">Короткий текст</label>
                                    <input type="text" class="form-control" id="textInput" value="${data ? data.text : ''}" maxlength="100">
                                    <div id="textError" class="invalid-feedback"></div>
                                </div>
                                <div class="mb-3">
                                    <label for="descriptionInput" class="form-label">Описание</label>
                                    <textarea class="form-control" id="descriptionInput" maxlength="200">${data ? data.description : ''}</textarea>
                                    <div id="descriptionError" class="invalid-feedback"></div>
                                </div>
                                
                                <div class="mb-3">
                                    <label for="srcInput" class="form-label">Ссылка на изображение</label>
                                    <input type="text" class="form-control" id="srcInput" value="${data ? data.src : ''}" maxlength="200">
                                    <div id="srcError" class="invalid-feedback"></div>
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Отмена</button>
                            <button type="button" class="btn btn-primary" id="saveCardBtn">Сохранить</button>
                        </div>
                    </div>
                </div>
            </div>
            `
        )
    }

    render(data = null) {
        const old = document.getElementById('addCardModal')
        if (old) old.remove()

        const html = this.getHTML(data)
        document.body.insertAdjacentHTML('beforeend', html);

        const saveBtn = document.getElementById('saveCardBtn');
        saveBtn.addEventListener('click', this.handleSave.bind(this));
    }

    
    handleSave() {
        const title = document.getElementById('titleInput').value.trim();
        const text = document.getElementById('textInput').value.trim();
        const description = document.getElementById('descriptionInput').value.trim();
        const src = document.getElementById('srcInput').value.trim();

  
        this.clearErrors();


        if (title === '') {
            this.showError('titleError', 'Название не может быть пустым');
        } else if (title.length > 50) {
            this.showError('titleError', 'Максимум 50 символов');
        }

        if (text === '') {
            this.showError('textError', 'Текст не может быть пустым');
        } else if (text.length > 100) {
            this.showError('textError', 'Максимум 200 символов');
        }
        
        if (description === '') {
            this.showError('descriptionError', 'Описание не может быть пустым');
        } else if (text.length > 200) {
            this.showError('descriptionError', 'Максимум 200 символов');
        }

        if (src === '') {
            this.showError('srcError', 'Ссылка на изображение не может быть пустым');
        } else if (src.length > 200) {
            this.showError('srcError', 'Максимум 200 символов');
        }
    }

    clearErrors() {
        const fields = ['titleInput', 'textInput', 'descriptionInput', 'srcInput'];
        fields.forEach(id => {
            const input = document.getElementById(id);
            if (input) input.classList.remove('is-invalid');
        });
        const errorDivs = ['titleError', 'textError', 'descriptionError', 'srcError'];
        errorDivs.forEach(id => {
            const div = document.getElementById(id);
            if (div) div.innerText = '';
        });
    }

    showError(errorId, message) {
        const errorDiv = document.getElementById(errorId);
        if (errorDiv) {
            errorDiv.innerText = message;
        }
        const fieldId = errorId.replace('Error', 'Input');
        const field = document.getElementById(fieldId);
        if (field) field.classList.add('is-invalid');
    }
}
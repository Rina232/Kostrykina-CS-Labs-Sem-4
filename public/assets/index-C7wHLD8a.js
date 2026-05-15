var e=(e,t)=>()=>(e&&(t=e(e=0)),t),t=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports);(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var n,r=e((()=>{n=class{constructor(e){this.parent=e}getHTML(e){return`
                <div class="col" style="padding: 32px; margin: 0;">
                    <div class="card text-bg-dark text-end">
                        <img class="card-img" src="${e.src}" alt="картинка">
                        <div class="card-img-overlay" style="border-radius: 20px;">
                            <h5 class="card-title">${e.title}</h5>
                            <p class="card-text">${e.text}</p>
                            <button class="btn btn-primary btn-about" id="click-card-${e.id}" data-id="${e.id}">Подробнее</button>
                        </div>
                    </div>
                </div>
            `}addListeners(e,t){document.getElementById(`click-card-${e.id}`).addEventListener(`click`,t)}render(e,t){let n=this.getHTML(e);this.parent.insertAdjacentHTML(`beforeend`,n),this.addListeners(e,t)}}})),i,a=e((()=>{i=class{getHTML(e){return`   
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
                                    <input type="text" class="form-control" id="titleInput" value="${e?e.title:``}" maxlength="50">
                                    <div id="titleError" class="invalid-feedback"></div>
                                </div>
                                <div class="mb-3">
                                    <label for="textInput" class="form-label">Короткий текст</label>
                                    <input type="text" class="form-control" id="textInput" value="${e?e.text:``}" maxlength="100">
                                    <div id="textError" class="invalid-feedback"></div>
                                </div>
                                <div class="mb-3">
                                    <label for="descriptionInput" class="form-label">Описание</label>
                                    <textarea class="form-control" id="descriptionInput" maxlength="200">${e?e.description:``}</textarea>
                                    <div id="descriptionError" class="invalid-feedback"></div>
                                </div>
                                
                                <div class="mb-3">
                                    <label for="srcInput" class="form-label">Ссылка на изображение</label>
                                    <input type="text" class="form-control" id="srcInput" value="${e?e.src:``}" maxlength="200">
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
            `}render(e=null){let t=document.getElementById(`addCardModal`);t&&t.remove();let n=this.getHTML(e);document.body.insertAdjacentHTML(`beforeend`,n),document.getElementById(`saveCardBtn`).addEventListener(`click`,this.handleSave.bind(this))}handleSave(){let e=document.getElementById(`titleInput`).value.trim(),t=document.getElementById(`textInput`).value.trim(),n=document.getElementById(`descriptionInput`).value.trim(),r=document.getElementById(`srcInput`).value.trim();this.clearErrors(),e===``?this.showError(`titleError`,`Название не может быть пустым`):e.length>50&&this.showError(`titleError`,`Максимум 50 символов`),t===``?this.showError(`textError`,`Текст не может быть пустым`):t.length>100&&this.showError(`textError`,`Максимум 200 символов`),n===``?this.showError(`descriptionError`,`Описание не может быть пустым`):t.length>200&&this.showError(`descriptionError`,`Максимум 200 символов`),r===``?this.showError(`srcError`,`Ссылка на изображение не может быть пустым`):r.length>200&&this.showError(`srcError`,`Максимум 200 символов`)}clearErrors(){[`titleInput`,`textInput`,`descriptionInput`,`srcInput`].forEach(e=>{let t=document.getElementById(e);t&&t.classList.remove(`is-invalid`)}),[`titleError`,`textError`,`descriptionError`,`srcError`].forEach(e=>{let t=document.getElementById(e);t&&(t.innerText=``)})}showError(e,t){let n=document.getElementById(e);n&&(n.innerText=t);let r=e.replace(`Error`,`Input`),i=document.getElementById(r);i&&i.classList.add(`is-invalid`)}}})),o,s=e((()=>{o=class{constructor(e){this.parent=e}getHTML(e){return`   
                <div id="carouselExampleCaptions" class="carousel slide mx-auto" style="width: 1000px; height: 500px; margin: 10px auto 50px auto !important;">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                        <img src="${e.srcDetail}" class="d-block mx-auto" alt="картинка">
                        <div class="carousel-caption d-none d-md-block">
                            <h5>${e.title}</h5>
                            <p>${e.description[0]}</p>
                        </div>
                        </div>
                        <div class="carousel-item">
                        <img src="${e.srcDetail}" class="d-block mx-auto" alt="картинка">
                        <div class="carousel-caption d-none d-md-block">
                            <h5>${e.title}</h5>
                            <p>${e.description[1]}</p>
                        </div>
                        </div>
                        <div class="carousel-item">
                        <img src="${e.srcDetail}" class="d-block mx-auto" alt="картинка">
                        <div class="carousel-caption d-none d-md-block">
                            <h5>${e.title}</h5>
                            <p>${e.description[2]}</p>
                        </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Предыдущий</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Следующий</span>
                    </button>
                </div>
            `}render(e){let t=this.getHTML(e);this.parent.insertAdjacentHTML(`beforeend`,t)}}})),c,l=e((()=>{c=class{constructor(e){this.parent=e}addListeners(e,t){document.getElementById(`edit-button`).addEventListener(`click`,e),document.getElementById(`delete-button`).addEventListener(`click`,t)}getHTML(){return`   
                <div class="btn-group" role="group">
                    <button id="edit-button" type="button" class="btn btn-success edit-button">Изменить</button>
                    <button id="delete-button" type="button" class="btn btn-danger delete-button">Удалить</button>
                </div>
            `}render(e,t){let n=this.getHTML();this.parent.insertAdjacentHTML(`beforeend`,n),this.addListeners(e,t)}}})),u,d,f=e((()=>{u=class{async get(e,t){try{let n=await fetch(e);t(await n.json(),n.status)}catch(e){console.error(e),t(null,500)}}async post(e,t,n){try{let r=await fetch(e,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify(t)});n(await r.json(),r.status)}catch(e){console.error(e),n(null,500)}}async patch(e,t,n){try{let r=await fetch(e,{method:`PATCH`,headers:{"Content-Type":`application/json`},body:JSON.stringify(t)});n(await r.json(),r.status)}catch(e){console.error(e),n(null,500)}}async delete(e,t){try{let n=await fetch(e,{method:`DELETE`});t(await n.json(),n.status)}catch(e){console.error(e),t(null,500)}}},d=new u})),p,m,h=e((()=>{p=class{constructor(){this.baseUrl=`http://localhost:3000`}getStocks(){return`${this.baseUrl}/stocks`}getStockById(e){return`${this.baseUrl}/stocks/${e}`}createStock(){return`${this.baseUrl}/stocks`}removeStockById(e){return`${this.baseUrl}/stocks/${e}`}updateStockById(e){return`${this.baseUrl}/stocks/${e}`}},m=new p})),g,_=e((()=>{g=class{getHTML(){return`   
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
            `}render(e){let t=this.getHTML();document.body.insertAdjacentHTML(`beforeend`,t),document.getElementById(`successDeleteBtn`).addEventListener(`click`,e,{once:!0})}}})),v,y=e((()=>{s(),l(),a(),C(),f(),h(),_(),v=class{constructor(e,t){this.parent=e,this.id=t}get buttonPageRoot(){return document.getElementById(`button-group`)}bindBackButton(){document.querySelectorAll(`a[data-action="go-main"]`).forEach(e=>{let t=e.cloneNode(!0);e.replaceWith(t),t.addEventListener(`click`,e=>{e.preventDefault(),new S(this.parent).render()})})}getData(){d.get(m.getStockById(this.id),e=>{this.data=e,this.renderData(e),this.initModal(e)})}initModal(e){new i().render(e),this.modalElement=document.getElementById(`addCardModal`),this.modal=new bootstrap.Modal(this.modalElement)}get pageRoot(){return document.getElementById(`product-page`)}getHTML(){return`
                <div id="product-page" class="d-flex flex-wrap">
                    <div id="button-group" class="w-100 mb-3 d-flex justify-content-end" style="margin: 90px 215px 0px 0;"></div>
                </div>
            `}clickEdit(){this.modal.show()}clickDelete(){this.delete_modal.show()}deleteCard(){d.delete(m.removeStockById(this.id),e=>{this.delete_modal.hide(),new S(this.parent).render()})}render(){this.parent.innerHTML=``;let e=this.getHTML();this.parent.insertAdjacentHTML(`beforeend`,e),new c(this.buttonPageRoot).render(this.clickEdit.bind(this),this.clickDelete.bind(this)),new g().render(this.deleteCard.bind(this)),this.delete_modalElement=document.getElementById(`deleteModal`),this.delete_modal=new bootstrap.Modal(this.delete_modalElement),this.bindBackButton(),this.getData()}renderData(e){new o(this.pageRoot).render(e)}}})),b,x=e((()=>{b=class{constructor(e){this.parent=e}addListeners(e,t){document.getElementById(`add-button`).addEventListener(`click`,e),document.getElementById(`delete-button`).addEventListener(`click`,t)}getHTML(){return`   
                <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                    <button id="add-button" type="button" class="btn btn-success add-button">Добавить новый</button>
                    <button id="delete-button" type="button" class="btn btn-danger delete-button">Удалить последний</button>
                </div>
            `}render(e,t){let n=this.getHTML();this.parent.insertAdjacentHTML(`beforeend`,n),this.addListeners(e,t)}}})),S,C=e((()=>{r(),a(),y(),x(),f(),h(),S=class e{constructor(e){this.parent=e}get buttonPageRoot(){return document.getElementById(`button-group`)}get cardsPageRoot(){return document.getElementById(`card-group`)}getHTML(){return`   
                <div class="routes">
                <h1>Популярные маршруты</h1>
                    <div id="main-page" class="d-flex flex-wrap">
                        <div id="button-group" class="w-100 mb-3 d-flex justify-content-end" style="margin: 15px 25px 0 0;"></div>
                        <div id="card-group" class="row row-cols-1 row-cols-md-3 g-4" style="margin: 0 0 30px 0;"></div>
                    </div>
                </div>
            `}getData(){d.get(m.getStocks(),e=>{this.renderData(e)})}clickCard(e){let t=e.target.dataset.id;new v(this.parent,t).render()}clickAdd(){this.modal.show()}clickDelete(){e.cardsData.length>0&&(e.cardsData.pop(),this.render())}clearForm(){this.modalElement.querySelectorAll(`input, textarea`).forEach(e=>{e.value=``,e.classList.remove(`is-invalid`)}),this.modalElement.querySelectorAll(`.invalid-feedback`).forEach(e=>{e.innerText=``})}render(){this.parent.innerHTML=``;let e=this.getHTML();this.parent.insertAdjacentHTML(`beforeend`,e),new b(this.buttonPageRoot).render(this.clickAdd.bind(this),this.clickDelete.bind(this)),new i().render(),this.modalElement=document.getElementById(`addCardModal`),this.modal=new bootstrap.Modal(this.modalElement),this.modalElement.addEventListener(`hidden.bs.modal`,()=>{this.clearForm()}),this.getData()}renderData(e){this.cardsPageRoot.innerHTML=``,e.forEach(e=>{new n(this.cardsPageRoot).render(e,this.clickCard.bind(this))})}}}));t((()=>{C(),new S(document.getElementById(`root`)).render()}))();
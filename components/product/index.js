export class ProductComponent {
    constructor(parent) {
        this.parent = parent
    }

    getHTML(data) {
        return (
            `   <div class="product-page-container" style="position: relative; display:flex; margin: 0 50px 0 50px;">
                    <div id="carouselExampleCaptions" class="carousel slide mx-auto" style="width: 700px; height: 500px; margin: 90px auto 50px auto !important;">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                            <img src="${data.src}" class="d-block mx-auto" alt="картинка">
                            <div class="carousel-caption d-none d-md-block">
                                <h5>${data.title}</h5>
                                <p>${data.text[0]}</p>
                            </div>
                            </div>
                            <div class="carousel-item">
                            <img src="${data.src}" class="d-block mx-auto" alt="картинка">
                            <div class="carousel-caption d-none d-md-block">
                                <h5>${data.title}</h5>
                                <p>${data.text[1]}</p>
                            </div>
                            </div>
                            <div class="carousel-item">
                            <img src="${data.src}" class="d-block mx-auto" alt="картинка">
                            <div class="carousel-caption d-none d-md-block">
                                <h5>${data.title}</h5>
                                <p>${data.text[2]}</p>
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

                    <div class="canvas-container">
                        <div id="viewer-controls" style="position: relative; z-index:10;display:flex;gap:12px;align-items:center;margin: 100px 0 0 30px;">
                            <button id="view-front">Вид спереди</button>
                            <button id="view-back">Сзади</button>
                        </div>
                        <canvas id="viewer-canvas" style="width: 100%; position: relative; z-index:5; margin: -40px 0 0 20px;"></canvas>

                        <div id="model-title" style="text-align:center;margin-top:2rem;font-size:1.4rem">Ваш самолёт</div>
                    </div>
                </div>
            `
        )
    }

    render(data) {
        const html = this.getHTML(data)
        this.parent.insertAdjacentHTML('beforeend', html)
    }
}
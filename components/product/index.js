export class ProductComponent {
    constructor(parent) {
        this.parent = parent
    }

    getHTML(data) {
        return (
            `   
                <div id="carouselExampleCaptions" class="carousel slide mx-auto" style="width: 1000px; height: 500px; margin: 10px auto 50px auto !important;">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                        <img src="${data.srcDetail}" class="d-block mx-auto" alt="картинка">
                        <div class="carousel-caption d-none d-md-block">
                            <h5>${data.title}</h5>
                            <p>${data.description[0]}</p>
                        </div>
                        </div>
                        <div class="carousel-item">
                        <img src="${data.srcDetail}" class="d-block mx-auto" alt="картинка">
                        <div class="carousel-caption d-none d-md-block">
                            <h5>${data.title}</h5>
                            <p>${data.description[1]}</p>
                        </div>
                        </div>
                        <div class="carousel-item">
                        <img src="${data.srcDetail}" class="d-block mx-auto" alt="картинка">
                        <div class="carousel-caption d-none d-md-block">
                            <h5>${data.title}</h5>
                            <p>${data.description[2]}</p>
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
            `
        )
    }

    render(data) {
        const html = this.getHTML(data)
        this.parent.insertAdjacentHTML('beforeend', html)
    }
}
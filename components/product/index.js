import { calculateDiagonalSum } from '../../js/utils.js';

const MATRIX_LABELS = ["Кухня", "Культура", "Природа", "Шопинг"];

export class ProductComponent {
    constructor(parent) {
        this.parent = parent;
    }

    getHTML(data) {
        const score = data.matrix ? calculateDiagonalSum(data.matrix) : 0;

        const table = data.matrix ? `
            <table class="table table-sm table-bordered text-center small">
                <thead class="table-light">
                    <tr><th></th>${MATRIX_LABELS.map(l => `<th><small>${l}</small></th>`).join('')}</tr>
                </thead>
                <tbody>
                    ${data.matrix.map((row, i) => `
                        <tr>
                            <th><small>${MATRIX_LABELS[i]}</small></th>
                            ${row.map((val, j) => {
                                const isDiagonal = (i === j) || (j === data.matrix.length - 1 - i);
                                return `<td class="${isDiagonal ? 'table-primary fw-bold' : ''}">${val}</td>`;
                            }).join('')}
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        ` : '';

        return `
           <div class="product-page-container" style="position: relative; display:flex; margin: 0 50px 0 50px;">
            <div class="left-column" style="flex: 0 0 700px;">
                    <div id="carouselExampleCaptions" class="carousel slide mx-auto" style="width: 700px; height: 500px; margin: 90px auto 50px auto !important;">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div class="carousel-inner">
                            ${data.text.map((txt, i) => `
                                <div class="carousel-item ${i === 0 ? 'active' : ''}">
                                    <img src="${data.src}" class="d-block w-100" style="height:500px;object-fit:cover;">
                                    <div class="carousel-caption d-none d-md-block">
                                        <h5>${data.title}</h5><p>${txt}</p>
                                    </div>
                                </div>
                            `).join('')}
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
                    
                    <div class="carousel-meta card p-2" style="display: flex; justify-content: space-between; align-items: center; flex-direction: row; width: 100%; margin-top: -40px;">
                        <span class="badge bg-info text-light fs-6" style="margin-left:10px;">Доступные даты: ${data.dateRanges}</span>
                        <span class="badge bg-warning text-light fs-6" style="margin-right:10px;">⭐ ${data.averageRating}</span>
                    </div>
                </div>
                
                <div class="right-column" style="flex: 1; min-width: 300px; display: flex; flex-direction: column; gap: 0px;">
                    <div class="canvas-container">
                        <div id="viewer-controls" style="position: relative; z-index:10;display:flex;gap:12px;align-items:center;margin: 100px 0 0 30px;">
                            <button id="view-front">Вид спереди</button>
                            <button id="view-back">Сзади</button>
                        </div>
                        <canvas id="viewer-canvas" style="width: 100%; height: 75%; position: relative; z-index:5; margin: -40px 0 0 20px;"></canvas>
                        <div id="model-title" style="position: relative;z-index:20;text-align:center;margin-top:-2.5rem;font-size:1.4rem">Ваш самолёт</div>
                    </div>
                
                    <div class="card mb-3 mx-auto border-success" style="width: 100%; max-width: 480px; height:250px;padding: 1rem; margin-top: 20px;">
                        <div class="card-header bg-success text-white">Индекс привлекательности: ${score}</div>
                        <div class="card-body">
                            ${table}
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    render(data) {
        this.parent.insertAdjacentHTML('beforeend', this.getHTML(data));
    }
}
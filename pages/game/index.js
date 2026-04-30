// Импортируем твои функции из утилит!
import { MainPage } from '../main/index.js';
import { formatDestinations, checkDestinationHint } from '../../js/utils.js'; // Проверь путь!

export class MiniGamesPage {
    static DESTINATIONS = [
        "Франция", "Италия", "Индонезия", 
        "Япония", "ОАЭ", "Таиланд"
    ];

    constructor(parent) {
        this.parent = parent;
        this.currentAnswer = null;
    }

    generateRound() {
        const randomIndex = Math.floor(Math.random() * MiniGamesPage.DESTINATIONS.length);
        const destination = MiniGamesPage.DESTINATIONS[randomIndex];
        this.currentAnswer = destination;

        const scrambled = formatDestinations(destination);

        return { scrambled, answer: destination };
    }

    getHTML() {
        const round = this.generateRound();
        
        return `
            <div class="container py-4">
                <div class="card mb-4 border-primary" style="margin-top:100px;">
                    <div class="card-header bg-primary text-white text-center">
                        Угадай направление
                    </div>
                    <div class="card-body text-center">
                        
                        <div class="alert alert-light border mb-4">
                            <code class="fs-3 fw-bold letter-spacing">${round.scrambled}</code>
                        </div>
                        
                        <div class="mb-3">
                            <label class="form-label">Введите название страны:</label>
                            <input type="text" id="guess-input" class="form-control form-control-lg text-center" autocomplete="off">
                        </div>
                        
                        <div class="d-flex justify-content-center gap-2">
                            <button id="check-guess" class="btn btn-primary btn-lg">Проверить</button>
                            <button id="skip-round" class="btn btn-outline-secondary btn-lg">Следующий</button>
                        </div>
                        
                        <div id="game-result" class="mt-4 fs-5 fw-bold"></div>
                    </div>
                </div>
            </div>
        `;
    }

    bindEvents() {
        let score = 0;

        const checkBtn = document.getElementById('check-guess');
        const guessInput = document.getElementById('guess-input');
        const resultBox = document.getElementById('game-result');
        const scoreEl = document.getElementById('score');
        
        const checkAnswer = () => {
            const userGuess = guessInput.value.trim();
            if (!userGuess) return;

            if (checkDestinationHint(userGuess, this.currentAnswer)) {
                resultBox.className = 'mt-4 fs-5 fw-bold text-success';
                resultBox.textContent = ` Верно! Это ${this.currentAnswer}!`;
                score++;
                scoreEl.textContent = score;
                setTimeout(() => this.render(), 1500);
            } else {
                resultBox.className = 'mt-4 fs-5 fw-bold text-danger';
                resultBox.textContent = ' Неверно, попробуй ещё раз!';
            }
            guessInput.value = '';
            guessInput.focus();
        };
        
        if (checkBtn && guessInput) {
            checkBtn.onclick = checkAnswer;
            guessInput.onkeypress = (e) => { if (e.key === 'Enter') checkAnswer(); };
        }

        const skipBtn = document.getElementById('skip-round');
        if (skipBtn) {
            skipBtn.onclick = () => {
                resultBox.className = 'mt-4 fs-5 fw-bold text-muted';
                resultBox.textContent = ` Ответ: ${this.currentAnswer}`;
                setTimeout(() => this.render(), 1200);
            };
        }
    }

    render() {
        this.parent.innerHTML = '';
        this.parent.insertAdjacentHTML('beforeend', this.getHTML());
        this.bindEvents();
        setTimeout(() => document.getElementById('guess-input')?.focus(), 50);
    }
}
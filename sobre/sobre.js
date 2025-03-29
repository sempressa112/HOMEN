function startTimer(duration, display) {
    let timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration; // Reinicia o cronômetro
        }
    }, 1000);
}

window.onload = function () {
    const duration = 600; // 10 minutos em segundos
    const display = document.querySelector('#timer');
    startTimer(duration, display);
};
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showNextSlide() {
    // Esconde o slide atual
    slides[currentSlide].classList.remove('active');

    // Avança para o próximo slide
    currentSlide = (currentSlide + 1) % totalSlides;

    // Mostra o próximo slide
    slides[currentSlide].classList.add('active');
}

// Inicia o slideshow
setInterval(showNextSlide, 2000); // Muda o slide a cada 2 segundos

// Mostra o primeiro slide ao carregar a página
slides[currentSlide].classList.add('active');
const ctaButton = document.querySelector('.cta');
const colors = ['#e67e22', '#3498db', '#2ecc71', '#9b59b6', '#e74c3c']; // Cores chamativas
let currentColorIndex = 0;

function changeButtonColor() {
    // Altera a cor de fundo do botão
    ctaButton.style.backgroundColor = colors[currentColorIndex];

    // Avança para a próxima cor
    currentColorIndex = (currentColorIndex + 1) % colors.length;
}

// Muda a cor a cada 2 segundos
setInterval(changeButtonColor, 2000);
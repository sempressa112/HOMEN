// Cronômetro
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

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const slideContainer = document.querySelector('.slides');

function showNextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides; // Avança para o próximo slide
    const offset = -currentSlide * 100; // Calcula o deslocamento
    slideContainer.style.transform = `translateX(${offset}%)`; // Aplica o deslocamento
}

// Inicia o slideshow
setInterval(showNextSlide, 5000); // Muda o slide a cada 5 segundos
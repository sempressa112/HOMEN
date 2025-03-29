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

window.onload = function () {
    const duration = 600; // 10 minutos em segundos
    const display = document.querySelector('#timer');
    startTimer(duration, display);
};

// Banner Rotativo
let currentSlide = 0;
    const slides = document.querySelectorAll('.banner-slide');
    
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? 'block' : 'none';
        });
    }

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

setInterval(nextSlide, 3000); // Troca de slide a cada 3 segundos
showSlide(currentSlide); // Mostra o primeiro slide

{let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    
    function showSlide(index) {
        // Esconde todos os slides
        slides.forEach((slide) => {
            slide.classList.remove('active');
        });
    
        // Mostra o slide atual
        slides[index].classList.add('active');
    }
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length; // Avança para o próximo slide
        showSlide(currentSlide);
    }
    
    // Inicia o slideshow
    setInterval(nextSlide, 3000); // Muda o slide a cada 3 segundos
    
    // Mostra o primeiro slide ao carregar a página
    showSlide(currentSlide);}
    const ctaButtons = document.querySelectorAll('.cta'); // Seleciona TODOS os botões com a classe .cta
    const colors = ['#e67e22', '#3498db', '#2ecc71', '#9b59b6', '#e74c3c']; // Cores chamativas
    let currentColorIndex = 0;
    
    function changeButtonColor() {
        // Itera sobre todos os botões
        ctaButtons.forEach((button) => {
            button.style.backgroundColor = colors[currentColorIndex]; // Altera a cor de fundo de cada botão
        });
    
        // Avança para a próxima cor
        currentColorIndex = (currentColorIndex + 1) % colors.length;
    }
    
    // Muda a cor a cada 2 segundos
    setInterval(changeButtonColor, 2000);
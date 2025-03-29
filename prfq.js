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


// Script para exibir as respostas ao clicar nas perguntas
document.addEventListener("DOMContentLoaded", function () {
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach((item) => {
        const question = item.querySelector(".faq-question");
        const answer = item.querySelector(".faq-answer");
        const toggleIcon = item.querySelector(".toggle-icon");

        question.addEventListener("click", () => {
            item.classList.toggle("active");
            if (item.classList.contains("active")) {
                toggleIcon.textContent = "-";
            } else {
                toggleIcon.textContent = "+";
            }
        });
    });
});

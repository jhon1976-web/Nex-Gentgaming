let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carrusel-item'); // Cambio de clase
    const totalSlides = slides.length;
    const itemsPerView = 4;

    if (index > totalSlides - itemsPerView) {
        currentIndex = totalSlides - itemsPerView;
    } else if (index < 0) {
        currentIndex = 0;
    } else {
        currentIndex = index;
    }

    document.querySelector('.carrusel-inner').style.transform = `translateX(${-currentIndex * (100 / itemsPerView)}%)`; // Cambio de clase
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentIndex);
});

/**Animaciones para el carrusel de objetos */
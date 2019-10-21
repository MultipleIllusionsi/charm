(function () {
    document.addEventListener("DOMContentLoaded", function () {
        sliderFunc("#main-slider");
    });

    let index = 0;
    const TIME_BETWEEN_IMG = 4000;

    const sliderFunc = (element) => {
        const el = document.querySelector(element);
        const slides = el.querySelectorAll(".slide");
        action(slides);
    }

    const action = (slides) => {
        setInterval(() => {
            index++;
            if (index == slides.length) {
                index = 0;
            }
            _slideTo(slides, index);
        }, TIME_BETWEEN_IMG);
    }

    const _slideTo = (slides, slideIndex) => {
        const currentSlide = slides[slideIndex];
        currentSlide.style.opacity = 1;

        for (let i = 0; i < slides.length; i++) {
            if (slides[i] !== currentSlide) {
                slides[i].style.opacity = 0;
            }
        }
    }
})();
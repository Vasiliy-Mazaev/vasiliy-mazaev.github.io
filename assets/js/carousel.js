document.querySelectorAll(".carousel").forEach(carousel => {

    const slides = carousel.querySelectorAll("figure");

    slides.forEach(slide => {
        const caption = slide.querySelector("figcaption");

        if (caption) {
            caption.dataset.original = caption.textContent;
        }
    });

    const prev = carousel.querySelector(".prev");
    const next = carousel.querySelector(".next");
    const counter = carousel.querySelector(".counter");

    if (slides.length === 0) return;

    let current = 0;

    showSlide(slides, current, counter);

    next.addEventListener("click", () => {
        current = (current + 1) % slides.length;
        showSlide(slides, current, counter);
    });

        prev.addEventListener("click", () => {
            current = (current - 1 + slides.length) % slides.length;
            showSlide(slides, current, counter);
    });

});

function showSlide(slides, current) {

    slides.forEach(slide => {
        slide.classList.remove("active");
    });

    const slide = slides[current];
    slide.classList.add("active");

    const caption = slide.querySelector("figcaption");

    if (caption) {
        caption.textContent =
            `${caption.dataset.original} (${current + 1} / ${slides.length})`;
    }
}

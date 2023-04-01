let curSlide = 0;

const nextSlide = document.querySelector(".btn-next");
const slides = document.querySelectorAll(".slide");
const maxSlide = slides.length - 1;

if (nextSlide) {
  nextSlide.addEventListener("click", function () {
    curSlide++;

    slides.forEach((slide, index) => {
      slide.style.transform = `translateX(${100 * (index - curSlide)}%)`;
      if (curSlide > maxSlide) curSlide = 1;
    });
  });
}

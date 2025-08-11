export function Carousel() {
  const initCarousels = () => {
    const carousels = document.querySelectorAll(".carousel");
    carousels.forEach(carousel => {
      const slides = carousel.querySelector(".slides");
      const slideElements = carousel.querySelectorAll(".slide");
      const leftArrow = carousel.querySelector(".left-arrow");
      const rightArrow = carousel.querySelector(".right-arrow");
      const dotsContainer = carousel.querySelector(".dots");
      let currentIndex = 0;
      const slideCount = slideElements.length;
      const slideWidth = carousel.offsetWidth;

      // Create dots
      for (let i = 0; i < slideCount; i++) {
        const dot = document.createElement("div");
        dot.classList.add("dot");
        dot.addEventListener("click", () => showSlide(i));
        dotsContainer.appendChild(dot);
      }
      const dots = dotsContainer.querySelectorAll(".dot");

      function showSlide(index) {
        currentIndex = (index + slideCount) % slideCount;
        slides.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
        dots.forEach(dot => dot.classList.remove("active"));
        dots[currentIndex].classList.add("active");
      }

      function nextSlide() {
        showSlide(currentIndex + 1);
      }

      function prevSlide() {
        showSlide(currentIndex - 1);
      }

      leftArrow.addEventListener("click", prevSlide);
      rightArrow.addEventListener("click", nextSlide);

      // Auto-advance
      const interval = setInterval(nextSlide, 5000);

      // Clean up interval on page unload (optional, for robustness)
      window.addEventListener("unload", () => clearInterval(interval));

      // Initial setup
      showSlide(0);
    });
  };

  return { initCarousels };
}
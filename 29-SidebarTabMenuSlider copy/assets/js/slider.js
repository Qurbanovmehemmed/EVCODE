let sliderContainer = document.querySelector(".sliderContainer");
let slide = document.querySelectorAll(".slide");
let slides = document.querySelector(".slides");

let =dotContainer = document.querySelector(".dot-container")

sliderContainer.addEventListener("mouseover", stopAutoSlide);
sliderContainer.addEventListener("mouseleave",startAutoSlide)

let currentIndex = 0;

let nextBTN = document.querySelector(".next");
let prevBTN = document.querySelector(".prev");

slide.forEach((slide, index) => {
    let dot = document.createElement("span");
    dot.classList.add("dot");
    if (index === currentIndex) {
        dot.classList.add("active");
    }
    dot.addEventListener("click", () => {
        currentIndex = index;
        updateSlider();
        updateDots();
    });
    dotContainer.appendChild(dot);
});



let nextSlide = () => {
  currentIndex = (currentIndex + 1) % slide.length;
  updateSlider();
  updateDots()

};
let prevSlide = () => {
  currentIndex = (currentIndex - 1 + slide.length) % slide.length;
  updateSlider();
  updateDots()
};
nextBTN.addEventListener("click", nextSlide);
prevBTN.addEventListener("click", prevSlide);

function updateSlider() {
  let newTransform = -currentIndex * 100 + "%";
  slides.style.transform = `translate(${newTransform})`;
}

let interval;

function startAutoSlide() {
  interval = setInterval(nextSlide, 2000);
}

function stopAutoSlide() {
  clearInterval(interval);
}
startAutoSlide();

function updateDots() {
    let dots = document.querySelectorAll(".dot");
    dots.forEach((dot, index) => {
        if (index === currentIndex) {
            dot.classList.add("active");
        } else {
            dot.classList.remove("active");
        }
    });
}




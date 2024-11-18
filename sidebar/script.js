

let side = document.querySelector(".side");
let burger = document.querySelector(".burger");
let closer = document.querySelector(".close");

burger.addEventListener("click", function () {
    side.classList.add("show"); // Add 'show' class to slide in the sidebar

    burger.style.display = "none"; // Hide the burger menu
    closer.style.display = "block"; // Show the closer (X) button
});

closer.addEventListener("click", function () {
    side.classList.remove("show"); // Remove 'show' class to hide the sidebar

    closer.style.display = "none"; // Hide the closer button
    burger.style.display = "block"; // Show the burger button again
});


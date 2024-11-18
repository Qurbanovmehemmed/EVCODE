let plusButtons = document.querySelectorAll(".plus");  
let minusButtons = document.querySelectorAll(".minus");  
let endSections = document.querySelectorAll(".end");  


plusButtons.forEach((plusButton, index) => {
  let minusButton = minusButtons[index];
  let endSection = endSections[index];

 
  plusButton.addEventListener("click", function() {
    plusButton.classList.add("none"); 
    minusButton.classList.remove("none");  
    endSection.style.display = "block";  
  });

  
  minusButton.addEventListener("click", function() {
    minusButton.classList.add("none");  
    plusButton.classList.remove("none"); 
    endSection.style.display = "none"; 
  });
});









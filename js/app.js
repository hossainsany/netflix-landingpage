let accordionBtn = document.querySelectorAll(".accordion-btn");
let accordionContent = document.querySelectorAll(".accordion-content");
let disclaimerBtn = document.querySelector("#disclaimer-btn");
let disclaimer = document.querySelector(".disclaimer");

for (let i = 0; i < accordionBtn.length; i++) {
    accordionBtn[i].addEventListener("click", () => {
        if (accordionContent[i].classList.contains("accordion-content-active")) {
            accordionContent[i].classList.remove("accordion-content-active");
        } else {
            accordionContent[i].classList.add("accordion-content-active");
        }
    });
}

disclaimerBtn.addEventListener("click", () => {
    if (disclaimer.classList.contains("close")) {
        disclaimer.classList.remove("close");
    } else {
        disclaimer.classList.add("close");
    }
});

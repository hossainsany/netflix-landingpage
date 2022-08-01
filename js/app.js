let accordionBtn = document.querySelectorAll(".accordion-btn");
let accordionContent = document.querySelectorAll(".accordion-content");

for (let i = 0; i < accordionBtn.length; i++) {
	accordionBtn[i].addEventListener("click", () => {
		if (accordionContent[i].classList.contains("accordion-content-active")) {
			accordionContent[i].classList.remove("accordion-content-active");
		} else {
			accordionContent[i].classList.add("accordion-content-active");
		}
	});
}

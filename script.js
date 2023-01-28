const accordionList = document.querySelectorAll("[data-faq] dt");

function toggleAccordion() {
  this.classList.toggle("active");
  this.nextElementSibling.classList.toggle("active");
}

accordionList.forEach((item) => {
  item.addEventListener("click", toggleAccordion);
});

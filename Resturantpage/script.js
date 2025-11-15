AOS.init();

window.addEventListener("scroll", function() {
  const navbar = document.querySelector(".navbar");
  navbar.classList.toggle("scrolled", window.scrollY > 50);
});

const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});
backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

document.getElementById("reservationForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thank you! Your table has been reserved successfully 🍽️");
  this.reset();
});

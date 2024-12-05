const button = document.getElementById("btn");
const closeIcon = document.getElementById("close");
const modal = document.getElementById("modal");

button.addEventListener("click", (e) => {
  modal.style.display = "flex";
});

closeIcon.addEventListener("click", (e) => {
  modal.style.display = "none";
});

// Close when clicking outside modal content
document.addEventListener("click", (e) => {
  if (!e.target.closest(".modal") && !e.target.matches("#btn")) {
    modal.style.display = "none";
  }
});

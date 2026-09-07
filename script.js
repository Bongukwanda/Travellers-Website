const turinBtn = document.getElementById("turinBtn");
const manchBtn = document.getElementById("manchBtn");
const madridBtn = document.getElementById("madridBtn");

function displayImage() {
  let madridPic = document.querySelector('.cityImages');
  madridPic.style.display = 'none';
}

madridBtn.addEventListener("click", () => displayImage);

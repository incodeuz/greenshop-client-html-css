const modal = document.getElementById("modal");
const body = document.getElementById("body");
const closeBtn = document.getElementById("close");
const open = document.getElementById("open");

modal.style.display = "none";
open.addEventListener("click", () => {
  modal.showModal();
  modal.style.display = "block";
  body.style.overflowY = "hidden";
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
  modal.close();
  body.style.overflowY = "scroll";
});

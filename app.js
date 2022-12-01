const modal = document.getElementById("modal");
const body = document.getElementById("body");
const closeBtn = document.getElementById("close");
const open = document.getElementById("open");

modal.style.display = "none";
open.addEventListener("click", () => {
  body.style.overflowY = "hidden";
  modal.style.display = "block";
  modal.showModal();
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
  body.style.overflowY = "scroll";
  modal.close();
});

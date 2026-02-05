const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("mouseover", () => {
  noBtn.style.position = "relative";
  noBtn.style.left = Math.random() * 200 + "px";
});

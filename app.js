const btn = document.getElementById("myBtn");

btn.addEventListener("click", () => {
  btn.textContent = "You clicked me!";
  document.body.style.backgroundColor = "lightgreen";
});
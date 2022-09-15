alert("Pop-up thanks to an external JS file.");
const buttons = document.querySelectorAll("button");
buttons.forEach((btn) => {
  btn.innerText = "Hacked!";
});

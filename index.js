const navbar = document.getElementById("navbar");
const links = document.querySelectorAll("nav a");

const colors = ["#444", "#0066cc", "#990000", "#228B22", "#800080"];
let last = -1;

links.forEach(link => {
  link.addEventListener("click", () => {
    let index;
    do {
      index = Math.floor(Math.random() * colors.length);
    } while (index === last);
    last = index;
    navbar.style.backgroundColor = colors[index];
  });
});

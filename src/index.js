import "./style.css";

const menu = document.querySelector(".menu");
const menuItem = document.querySelectorAll(".hidden");
menu.addEventListener("mouseover", function () {
  menuItem.forEach((item) => {
    item.style.display = "block";
  });
});
menu.addEventListener("mouseout", function () {
  menuItem.forEach((item) => {
    item.style.display = "none";
  });
});

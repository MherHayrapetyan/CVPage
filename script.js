const burgSvg = document.querySelector(".burgerSvg");
const burgBox = document.querySelector(".burgBox");
const burgMiniBox = document.querySelectorAll(".burgMiniBox");
const header = document.querySelector("header");
const logoBox = document.querySelector(".logoBox");

burgSvg.onclick = () => {
  burgBox.style.display = "flex";
};

burgMiniBox.forEach((item) => {
  item.onclick = () => {
    burgBox.style.display = "none";
  };
});

window.addEventListener("scroll", () => {
  if (window.pageYOffset === 0) {
    header.style.paddingTop = "15px";
    header.style.paddingBottom = "15px";
    logoBox.style.width = "55px";
    logoBox.style.height = "55px";
  } else {
    header.style.paddingTop = "7px";
    header.style.paddingBottom = "7px";
    logoBox.style.width = "45px";
    logoBox.style.height = "45px";
  }
});

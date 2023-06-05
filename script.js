const burgSvg = document.querySelector(".burgerSvg");
const burgBox = document.querySelector(".burgBox");
const burgMiniBox = document.querySelectorAll(".burgMiniBox");
const header = document.querySelector("header");
const logoBox = document.querySelector(".logoBox");
const cursor = document.querySelector(".cursor");
const contentOne = document.querySelector(".contentOne");

// Burger Menu

burgSvg.onclick = () => {
  burgBox.style.display = "flex";
};

burgMiniBox.forEach((item) => {
  item.onclick = () => {
    burgBox.style.display = "none";
  };
});

// Burger Menu End

// Header

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

// Header End

// Cursor

document.addEventListener("mousemove", (e) => {
  cursor.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
});

document.addEventListener("mousemove", (e) => {
  if (e.pageY > contentOne.clientHeight) {
    cursor.style.display = "none";
  }
});


// Cursor End

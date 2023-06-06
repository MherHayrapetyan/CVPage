const burgSvg = document.querySelector(".burgerSvg");
const burgBox = document.querySelector(".burgBox");
const burgMiniBox = document.querySelectorAll(".burgMiniBox");
const header = document.querySelector("header");
const logoBox = document.querySelector(".logoBox");
const cursor = document.querySelector(".cursor");
const contentOne = document.querySelector(".contentOne");
const contentTwo = document.querySelector(".contentTwo");
const contentThree = document.querySelector(".contentThree");
const contentFour = document.querySelector(".contentFour");
const contentFive = document.querySelector(".contentFive");
const homeTop = document.querySelectorAll(".homeTop");
const aboutTop = document.querySelectorAll(".aboutTop");
const skillsTop = document.querySelectorAll(".skillsTop");
const worksTop = document.querySelectorAll(".worksTop");
const contactsTop = document.querySelectorAll(".contactsTop");
const navOneLi = document.querySelectorAll(".navOne ul li");
const animImg = document.querySelector(".animImg");
const saytTop = document.querySelector(".saytTop");

// Burger Menu

burgSvg.onclick = () => {
  burgBox.style.display = "flex";
};

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

// Header Menu Top

homeTop.forEach((item) => {
  item.onclick = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    burgBox.style.display = "none";
  };
});

aboutTop.forEach((item) => {
  item.onclick = () => {
    window.scroll({
      top: contentTwo.offsetTop - 50,
      left: 0,
      behavior: "smooth",
    });
    burgBox.style.display = "none";
  };
});

skillsTop.forEach((item) => {
  item.onclick = () => {
    window.scroll({
      top: contentThree.offsetTop - 50,
      left: 0,
      behavior: "smooth",
    });
    burgBox.style.display = "none";
  };
});

worksTop.forEach((item) => {
  item.onclick = () => {
    window.scroll({
      top: contentFour.offsetTop - 50,
      left: 0,
      behavior: "smooth",
    });
    burgBox.style.display = "none";
  };
});

contactsTop.forEach((item) => {
  item.onclick = () => {
    window.scroll({
      top: contentFive.offsetTop - 50,
      left: 0,
      behavior: "smooth",
    });
    burgBox.style.display = "none";
  };
});

// Header Menu Top End

// Header li Border

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 0) {
    navOneLi.forEach((item) => {
      item.style.setProperty("--width", "25px");
    });
    navOneLi[0].style.setProperty("--width", "87px");
  }
  if (window.pageYOffset > contentTwo.offsetTop - 55) {
    navOneLi.forEach((item) => {
      item.style.setProperty("--width", "25px");
    });
    navOneLi[1].style.setProperty("--width", "87px");
  }
  if (window.pageYOffset > contentThree.offsetTop - 55) {
    navOneLi.forEach((item) => {
      item.style.setProperty("--width", "25px");
    });
    navOneLi[2].style.setProperty("--width", "87px");
  }
  if (window.pageYOffset > contentFour.offsetTop - 55) {
    navOneLi.forEach((item) => {
      item.style.setProperty("--width", "25px");
    });
    navOneLi[3].style.setProperty("--width", "87px");
  }
  if (window.pageYOffset > contentFive.offsetTop - 57) {
    navOneLi.forEach((item) => {
      item.style.setProperty("--width", "25px");
    });
    navOneLi[4].style.setProperty("--width", "87px");
  }
});

// Header li Border End

// Animation Scroll

const footer = document.querySelector("footer");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > contentFour.offsetTop - 300) {
    contentFour.style.animationPlayState = "running";
  }
  if (window.pageYOffset > contentFive.offsetTop - 300) {
    contentFive.style.animationPlayState = "running";
  }
  if (window.pageYOffset > contentThree.offsetTop - 300) {
    contentThree.style.animationPlayState = "running";
  }
  if (window.pageYOffset > contentTwo.offsetTop - 300) {
    contentTwo.style.animationPlayState = "running";
    animImg.style.display = "block";
  }
  if (window.pageYOffset > footer.offsetTop - 550) {
    footer.style.animationPlayState = "running";
  }
});

// Animation Scroll End

// Sayt Top

let i = true;

function saytTopFn() {
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
}

saytTop.onclick = () => {
  saytTopFn();
  i = true;
};

window.addEventListener("scroll", () => {
  if (i) {
    if (window.pageYOffset > 500) {
      saytTop.style.transform = "translateY(0)";
      saytTop.style.opacity = ".7";
      i = false;
    }
  } else {
    if (window.pageYOffset < 500) {
      saytTop.style.transform = "translateY(-700px)";
      saytTop.style.opacity = "0";
      i = true;
    }
  }
});

// Sayt Top End

// Information Media

function phoneFn() {
  alert(`Phone:   +374 (93)-333-414
              +374 (99)-712-487`);
}

function gmailFn() {
  alert(`Gmail:   hayrapetyanmher65@gmail.com`);
}

// Information Media End

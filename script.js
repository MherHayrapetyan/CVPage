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

const animTwoScroll = document.querySelector(".animTwoScroll")
const animThreeScroll = document.querySelector(".animThreeScroll")
const animFourScroll = document.querySelector(".animFourScroll")
const animFiveScroll = document.querySelector(".animFiveScroll")






const animImg = document.querySelector(".animImg")

console.log(contentFive.offsetTop)
console.log(window.pageYOffset)

window.addEventListener("scroll", () => {
  if(window.pageYOffset > contentFour.offsetTop - 300) {
    contentFour.style.animationPlayState = "running"
  }
})

window.addEventListener("scroll", () => {
  if(window.pageYOffset > contentFive.offsetTop - 300) {
    contentFive.style.animationPlayState = "running"
  }
})

window.addEventListener("scroll", () => {
  if(window.pageYOffset > contentThree.offsetTop - 300) {
    contentThree.style.animationPlayState = "running"
  }
})

window.addEventListener("scroll", () => {
  if(window.pageYOffset > contentTwo.offsetTop - 300) {
    contentTwo.style.animationPlayState = "running"
    animImg.style.display = "block"
  }
})

// Animation Scroll End

document.addEventListener("DOMContentLoaded", function () {
  const mainHeader = document.querySelector("#navButton");
  const slideInNav = document.querySelector(".main-nav");
  const body = document.querySelector("main");

  let timer;
  let isHovered = false;

  mainHeader.addEventListener("mouseenter", () => {
    clearTimeout(timer);
    slideInNav.style.right = "0";
    isHovered = true;
    body.style.filter = "blur(5px)";
  });

  slideInNav.addEventListener("mouseleave", () => {
    if (isHovered) {
      timer = setTimeout(() => {
        slideInNav.style.right = "-250px";
        body.style.filter = "none";
      }, 100);
    }
  });
});

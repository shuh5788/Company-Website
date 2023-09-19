document.addEventListener("DOMContentLoaded", function () {
  const mainHeader = document.querySelector("#navButton");
  const slideInNav = document.querySelector(".main-nav");
  console.log(mainHeader);

  let timer;
  let isHovered = false;

  mainHeader.addEventListener("mouseenter", () => {
    clearTimeout(timer);
    slideInNav.style.right = "0";
    isHovered = true;
  });

  slideInNav.addEventListener("mouseenter", () => {
    clearTimeout(timer);
    isHovered = true;
  });

  mainHeader.addEventListener("mouseleave", () => {
    if (isHovered) {
      timer = setTimeout(() => {
        slideInNav.style.right = "-250px";
      }, 100);
    }
  });

  slideInNav.addEventListener("mouseleave", () => {
    if (isHovered) {
      timer = setTimeout(() => {
        slideInNav.style.right = "-250px";
      }, 100);
    }
  });
});

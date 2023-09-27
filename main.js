document.addEventListener("DOMContentLoaded", function () {
  const mainHeader = document.querySelector("#navButton");
  const slideInNav = document.querySelector(".main-nav");
  const main = document.querySelector("main");
  const logo = document.querySelector(".index-logo-image");
  const slideContainer = document.querySelector(".carousel-slide");
  const images = document.querySelectorAll(".carousel-slide img");
  const prevButton = document.querySelector(".carousel-button.prev");
  const nextButton = document.querySelector(".carousel-button.next");

  let timer;
  let isHovered = false;
  let isLogoAnimated = false;
  const itemsPerPage = 3; // 3 items per slide
  let currentIndex = 0;

  function showImages(startIndex) {
    images.forEach((image, index) => {
      if (index >= startIndex && index < startIndex + itemsPerPage) {
        image.style.display = "block";
      } else {
        image.style.display = "none";
      }
    });
  }

  function goToSlide(index) {
    currentIndex = index;
    const translateX = -currentIndex * (100 / 30);
    slideContainer.style.transition = "transform 0.5s ease-in-out";
    slideContainer.style.transform = `translateX(${translateX}%)`;

    setTimeout(() => {
      slideContainer.style.transition = "none";
    }, 500);

    showImages(currentIndex);
  }

  if (nextButton && prevButton) {
    nextButton.addEventListener("click", () => {
      if (currentIndex < images.length - 1) {
        currentIndex += 1;
        goToSlide(currentIndex);
      }
    });

    prevButton.addEventListener("click", () => {
      if (currentIndex > 0) {
        currentIndex -= 1;
        goToSlide(currentIndex);
      }
    });
  }

  mainHeader.addEventListener("mouseenter", () => {
    clearTimeout(timer);
    slideInNav.style.right = "0";
    isHovered = true;
    main.style.filter = "blur(5px)";
  });

  slideInNav.addEventListener("mouseleave", () => {
    if (isHovered) {
      timer = setTimeout(() => {
        slideInNav.style.right = "-250px";
        main.style.filter = "none";
      }, 100);
    }
  });

  function handleLogoAnimation() {
    const isIndexPage =
      document.body.id === "index-page" ||
      document.body.classList.contains("index-page");

    if (isIndexPage && window.scrollY !== 0 && !isLogoAnimated) {
      setTimeout(() => {
        logo.style.transform = "translateX(0%) scale(1)";
        main.style.marginTop = "0px";
        isLogoAnimated = true;
      }, 300);
    } else if (isIndexPage && window.scrollY === 0 && isLogoAnimated) {
      logo.style.transform = "translate(382%, 120%) scale(2.5)";
      main.style.marginTop = "135px";
      isLogoAnimated = false;
    }
  }

  window.addEventListener("scroll", handleLogoAnimation);

  handleLogoAnimation();

  showImages(currentIndex);
});

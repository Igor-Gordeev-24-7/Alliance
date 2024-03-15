document.addEventListener("DOMContentLoaded", () => {
  const headerEl = document.querySelector(".header");
  const headerContactBurgerBtnEl = document.querySelector(
    ".header__contact-burger-btn"
  );
  headerContactBurgerBtnEl.addEventListener("click", () => {
    headerEl.classList.toggle("open");
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      headerEl.classList.remove("open");
    }
  });
});

function initSwiper() {
  if (window.innerWidth <= 1440) {
    var swiper = new Swiper(".servicesSwiper", {
      slidesPerView: 3,
      spaceBetween: 15,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

    var swiper = new Swiper(".blogSwiper", {
      slidesPerView: 2,
      spaceBetween: 15,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }
  if (window.innerWidth <= 1100) {
    var swiper = new Swiper(".servicesSwiper", {
      slidesPerView: 2,
      spaceBetween: 15,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }
  if (window.innerWidth <= 768) {
    var swiper = new Swiper(".blogSwiper", {
      slidesPerView: 1,
      spaceBetween: 0,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

    var swiper = new Swiper(".servicesSwiper", {
        slidesPerView: 1,
        spaceBetween: 15,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
  }
}

initSwiper();

window.addEventListener("resize", initSwiper);

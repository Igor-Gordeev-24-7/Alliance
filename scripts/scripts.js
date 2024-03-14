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


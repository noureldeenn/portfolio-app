document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll(".filter_btn");
  const filterItems = document.querySelectorAll(".filtered_item");

  function filterItemsByCategory(category) {
    filterItems.forEach((item) => {
      if (category === "new") {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
        if (item.classList.contains(category)) {
          item.classList.add("active");
        }
      }
    });
  }

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filterCategory = button.getAttribute("data-filter");

      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      filterItemsByCategory(filterCategory);
    });
  });

  filterItemsByCategory("new");
});

window.addEventListener("scroll", function () {
  const fixedItem = document.getElementById("navbar");
  const scrollPosition = window.scrollY;

  const revealPosition = 600;

  if (scrollPosition > revealPosition) {
    fixedItem.style.position = "fixed";
    fixedItem.style.top = "0%";
  } else {
    fixedItem.style.position = "relative";
    fixedItem.style.top = "none";
  }
});

// script.js
window.addEventListener("scroll", function () {
  const hiddenItem = document.getElementById("hiddenItem");
  const scrollPosition = window.scrollY || window.pageYOffset;

  const revealPosition = 600;

  if (scrollPosition > revealPosition) {
    hiddenItem.style.display = "none";
    hiddenItem.style.opacity = "0";
  } else {
    hiddenItem.style.display = "block";
    hiddenItem.style.opacity = "1";
  }
});

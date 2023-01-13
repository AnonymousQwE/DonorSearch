function app() {
  const buttons = document.querySelectorAll(".button");
  const cards = document.querySelectorAll(".card");

  function filter(category, items) {
    items.forEach((item) => {
      const itemFiltered = !item.classList.contains(category);
      if (itemFiltered) {
        item.classList.add("now");
      } else {
        item.classList.remove("now");
      }
    });
  }

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const filterCategory = button.dataset.filter;
      filter(filterCategory, cards);
    });
  });
}

app();

const btn = document.getElementById("comeIn");
const display = document.getElementById("pop__up");
const popUp = document.getElementById("close");

btn.addEventListener("click", function (e) {
  e.preventDefault();
  display.classList.add("active");
});

popUp.addEventListener("click", () => {
  display.classList.remove("active");
});

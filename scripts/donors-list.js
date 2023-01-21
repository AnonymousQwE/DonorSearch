function donorsList() {
  function filterTрroughButton() {
    console.log("FILTER!!");
    const buttons = document.querySelectorAll(".button-filter");
    const types = document.querySelectorAll(".type");

    function filterCategory(bloodType, item) {
      item.forEach((item) => {
        const currentItemBloodType =
          item.querySelector("#table-blood").innerHTML;
        const isItemFiltered = currentItemBloodType === bloodType;
        console.log(currentItemBloodType);
        const isShowAll = bloodType.toLowerCase() === "all";
        if (!isItemFiltered && !isShowAll) {
          item.classList.add("hide");
        } else {
          item.classList.remove("hide");
        }
      });
    }

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const demo = button.dataset.letter;
        console.log(types);
        filterCategory(demo, types);
      });
    });
  }

  filterTрroughButton();

  document.querySelectorAll(".accordion").forEach((el) => {
    el.addEventListener("click", () => {
      let content = el.nextElementSibling;
      // console.log(content);

      if (content.style.maxHeight) {
        document
          .querySelectorAll(".content")
          .forEach((el) => (el.style.maxHeight = null));
      } else {
        document
          .querySelectorAll(".content")
          .forEach((el) => (el.style.maxHeight = null));
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  });
}

const search = () => {
  const searchBox = document.getElementById("input").value.toUpperCase();
  const items = document.getElementById("table-users");
  const users = document.querySelectorAll(".type");
  const pname = items.querySelectorAll(".table-username");
  console.log("PNAME", pname);
  for (let i = 0; i < pname.length; i++) {
    let match = users[i].querySelector(".table-username");
    console.log("MATCH", users[i]);
    if (match) {
      let textValue = match.textContent || match.innerHTML;
      console.log(textValue.toUpperCase().indexOf(searchBox) > -1);
      if (textValue.toUpperCase().indexOf(searchBox) > -1) {
        users[i].style.display = "";
      } else {
        users[i].style.display = "none";
      }
    }
  }
};

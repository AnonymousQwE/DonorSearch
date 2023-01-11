const navItemsList = [
  { title: "Главная", link: "main" },
  { title: "Бонусы донорам", link: "donor-bonus" },
  { title: "Где сдать кровь", link: "where" },
];

const createNavButton = () => {
  const buttonsnav = navItemsList.map((navItem, i) => {
    const button = document.createElement("button");
    button.innerText = navItemsList[i].title;
    button.classList.add("button");
    return button;
  });
  console.log(buttonsnav);
  return buttonsnav;
};

const setNavLink = () => {
  console.log("SetNavLink");
  const loginBtn = document.querySelector(".login");
  const navList = document.querySelector("#navItems");
  loginBtn.addEventListener("click", () => {
    includeHTML("components/donor-bonus.html", root);
  });

  const buttons = createNavButton();
  console.log(buttons);

  buttons.map((b, i) => {
    navList.append(b);
    console.log(b);
    b.addEventListener("click", () => {
      includeHTML(`components/${navItemsList[i].link}.html`, root);
      console.log(b);
    });
  });
};

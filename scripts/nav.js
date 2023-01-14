navItemsList = [
  { title: "Главная", link: "main" },
  { title: "Бонусы донорам", link: "donor-bonus" },
  { title: "Где сдать кровь", link: "where" },
];
navAuthItems = [
  { title: "Список доступных доноров", link: "donor-list" },
  { title: "Список доступных клиник", link: "clinic-list" },
];

function createNavButtons(listBtn) {
  return listBtn.map((navItem) => {
    const button = document.createElement("button");
    button.innerText = navItem.title;
    button.classList.add("button");
    return button;
  });
}
function rerenderHome() {
  homeRender();
  currentUser.isAuth ? location.reload() : "";
}

function renderNavItems() {
  const navList = document.querySelector("#navItems");
  const currentNav = localUser.isAuth
    ? [].concat(navItemsList, navAuthItems)
    : navItemsList;
  buttons = createNavButtons(currentNav);
  buttons.map((b, i) => {
    navList.append(b);
    b.addEventListener("click", () => {
      i === 0 ? rerenderHome() : currentUser.renderPage(currentNav[i].link);
    });
  });

  const authButton = createAuthBtn();
  const authBlock = document.querySelector("#authBlock");

  authButton.addEventListener("click", () => {
    const dialogContent = document.querySelector("#dialog-content");
    dialogContent.innerHTML = "";

    currentUser.isAuth
      ? formAction("profile")
      : includeHTML("components/login-form.html", dialogContent, () =>
          formAction("login")
        );
  });
  authBlock.append(authButton);
}

function formAction(action) {
  let actionBtn;
  const dialogContent = document.querySelector("#dialog-content");
  let changeActionBtn;

  switch (action) {
    case "register":
      console.log("register")
      includeHTML("components/register-form.html", dialogContent, () => {
        actionBtn = document.querySelector("#actionBtn");
        changeActionBtn = document.getElementById("changeActionBtn");
        changeActionBtn.addEventListener("click", (e) => {
          e.preventDefault();
          formAction("login");
        });
        actionBtn.addEventListener("click", (e) => {
          e.preventDefault();
          const form = document.forms.register;
          const email = form.email.value;
          const username = form.username.value;
          const fullname = form.fullname.value;
          const password = form.password.value;
          const type = form.type.value;

          var user = new Parse.User();
          user.set("username", username);
          user.set("password", password);
          user.set("email", email);
          user.set("fullname", fullname);
          user.set("role", type);

          user
            .signUp()
            .then(function (user) {
              console.log(
                "User created successful with name: " +
                  user.get("username") +
                  " and email: " +
                  user.get("email")
              );
            })
            .catch(function (error) {
              console.log("Error: " + error.code + " " + error.message);
            });
        });
      });

      break;

    case "login":
      console.log("login")
      includeHTML("components/login-form.html", dialogContent, () => {
        actionBtn = document.querySelector("#actionBtn");
        changeActionBtn = document.getElementById("changeActionBtn");
        changeActionBtn.addEventListener("click", (e) => {
          e.preventDefault();
          formAction("register");
        });
        actionBtn.addEventListener("click", (e) => {
          e.preventDefault();
          const form = document.forms.login;
          const username = form.username.value;
          const password = form.password.value;

          var user = Parse.User;
          user
            .logIn(username, password)
            .then(function (user) {
              console.log(
                "User created successful with name: " +
                  user.get("username") +
                  " and email: " +
                  user.get("email")
              );
              currentUser.serverSet();
              location.reload();
            })
            .catch(function (error) {
              console.log("Error: " + error.code + " " + error.message);
            });
        });
      });
      break;
    case "profile":
      console.log("profile")
      includeHTML("components/user-profile.html", dialogContent, ProfileAction);
      break;
    default:
      console.log("default");
      break;
  }
}
function createAuthBtn() {
  let b;
  b = document.createElement("button");
  b.classList.add("login");
  b.dataset.fancybox = "dialog";
  b.dataset.src = "#dialog-content";
  b.id = "logIn";
  b.innerText = localUser.isAuth ? "Профиль" : "Войти";
  return b;
}

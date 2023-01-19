const root = document.getElementById("root");
const header = document.getElementById("header-nav");
const localUser = JSON.parse(localStorage.getItem("user"));
const currentPage =
  localUser?.currentPage || currentUser?.currentPage || "main";
function firstRender() {
  includeHTML("components/header-nav.html", header, renderNavItems);
  currentUser.renderPage(currentPage, () => {
    currentUser.serverSet();
    const bannerButton = document.querySelector("#bannerSignUp");
    bannerButton.addEventListener("click", () => {
      currentUser.renderPage("where");
    });
  });
}
function homeRender() {
  includeHTML("components/header-nav.html", header, renderNavItems);
  currentUser.renderPage("main", () => {
    const bannerButton = document.querySelector("#bannerSignUp");

    bannerButton.addEventListener("click", () => {
      currentUser.renderPage("donor-list");
    });
  });
}

firstRender();

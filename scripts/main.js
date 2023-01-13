const root = document.getElementById("root");
const header = document.getElementById("header-nav");
const localUser = JSON.parse(localStorage.getItem("user"));
const currentPage = localUser?.currentPage || currentUser?.currentPage || "main";
function firstRender() {
  includeHTML("components/header-nav.html", header, renderNavItems);
  currentUser.renderPage(currentPage, () => {
    currentUser.serverSet();
  });
}
function homeRender() {
  includeHTML("components/header-nav.html", header, renderNavItems);
  currentUser.renderPage("main");
}

firstRender();

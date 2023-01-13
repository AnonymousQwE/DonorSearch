const root = document.getElementById("root");
const header = document.getElementById("header-nav");
const localUser = JSON.parse(localStorage.getItem("user"));
const currentPage = localUser?.currentPage || currentUser.currentPage;
function firstRender() {
  includeHTML("components/header-nav.html", header, renderNavItems);
  currentUser.renderPage(localUser.currentPage, () => {
    currentUser.serverSet();
  });
}
function homeRender() {
  includeHTML("components/header-nav.html", header, renderNavItems);
  currentUser.renderPage("main");
}

firstRender();

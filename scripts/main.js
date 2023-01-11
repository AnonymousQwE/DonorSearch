const root = document.getElementById("root");
const header = document.getElementById("header-nav");

includeHTML("components/header-nav.html", header, function () {
  includeHTML("components/main.html", root);
  setNavLink();
});

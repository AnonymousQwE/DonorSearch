const ProfileAction = () => {
  formAction("profile");
  const usernameHTML = document.querySelector("#username");
  const typeHTML = document.querySelector("#type");
  const logOutBtn = document.getElementById("profileLogout");
  const profileAdminBtn = document.getElementById("profileAdmin");

  currentUser.isAdmin ? "" : profileAdminBtn.classList.add("none");
  usernameHTML.innerHTML = currentUser.user.attributes.fullname;
  typeHTML.innerHTML =
    currentUser.user.attributes.role === "donor"
      ? "Донором"
      : currentUser.user.attributes.role === "clinic"
      ? "Предст.Клиники"
      : "Админом";
  logOutBtn.addEventListener("click", () => {
    Parse.User.logOut();
    const serverUser = Parse.User.current();
    if (serverUser === null) {
      console.log("Success! No user is logged in anymore!");
    }
    currentUser.serverSet();
    firstRender();
    location.reload();
  });
};

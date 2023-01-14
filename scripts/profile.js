const ProfileAction = () => {
  const typeHTML = document.querySelector("#type");
  const logOutBtn = document.getElementById("profileLogout");
  const profileAdminBtn = document.getElementById("profileAdmin");
  const profileUsername = document.querySelector(".profile-username");

  currentUser.isAdmin ? "" : profileAdminBtn.classList.add("none");
  profileUsername.innerHTML =
    currentUser.user.attributes.role === "clinic"
      ? `Название клиники: <span class="profile-item__current" id="username"></span>`
      : `Ваше полное имя: <span class="profile-item__current" id="username"></span>`;
  const usernameHTML = document.querySelector("#username");
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

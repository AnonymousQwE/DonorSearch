const ProfileAction = () => {
  const typeHTML = document.querySelector("#type");
  const bloodHTML = document.querySelector(".profile-blood");
  const donationHTML = document.querySelector(".profile-donation");
  const logOutBtn = document.getElementById("profileLogout");
  const profileAdminBtn = document.getElementById("profileAdmin");
  const profileUsername = document.querySelector(".profile-username");
  const profilePhoto = document.querySelector(".profile-photo");
  const editPhotoBtn = document.querySelector(".profile-photo-text");
  const profilePhotoInput = document.querySelector(".profile-photo-input");
  const profilePhotoSaveBtn = document.querySelector(".profile-photo-save");

  profilePhoto.src = currentUser.user.attributes.image;

  currentUser.isAdmin ? "" : profileAdminBtn.classList.add("none");
  bloodHTML.innerHTML =
    currentUser.user.attributes.role === "donor"
      ? `<p>Ваша группа крови:</p> <p class="profile-item__current" id="blood">${currentUser.user.attributes.bloodType + currentUser.user.attributes.bloodRez}</p>`
      : "";
  donationHTML.innerHTML =
    currentUser.user.attributes.role === "donor"
      ? `<p>Колличество Донаций:</p> <p class="profile-item__current" id="donation">${currentUser.user.attributes.donationCount}</p>`
      : "";
  profileUsername.innerHTML =
    currentUser.user.attributes.role === "clinic"
      ? `<p>Название клиники:</p> <p class="profile-item__current" id="username">${currentUser.user.attributes.fullname}</p>`
      : `<p>Ваше полное имя:</p> <p class="profile-item__current" id="username">${currentUser.user.attributes.fullname}</p>`;
  typeHTML.innerHTML =
    currentUser.user.attributes.role === "donor"
      ? "Донором"
      : currentUser.user.attributes.role === "clinic"
      ? "<p>Предст.Клиники</p>"
      : "<p>Админом</p>";

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

  editPhotoBtn.addEventListener("click", () => {
    profilePhotoInput.classList.toggle("none");
    profilePhotoSaveBtn.classList.toggle("none");
  });
  profilePhotoSaveBtn.addEventListener("click", () => {
    const photoURL = profilePhotoInput.value
      ? profilePhotoInput.value
      : "/../img/newLogoIcon.svg";
    currentUser.updateUserData(photoURL, "image");
    currentUser.serverSet();
  });
};

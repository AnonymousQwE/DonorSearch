class User {
  constructor(isLoading, isAuth, isAdmin, user, currentPage) {
    this.isLoading = isLoading;
    this.isAuth = isAuth;
    this.isAdmin = isAdmin;
    this.user = user;
    this.currentPage = currentPage;
  }

  userSet() {
    const localUser = JSON.parse(localStorage.user.user);
    this.user = localUser;
    this.isLoading = false;
    this.user.isAdmin =
      localUser.user.attributes.role === "admin" ? true : false;
    this.isAuth = this.user ? true : false;
    return this.user;
  }

  async serverSet() {
    const user = await Parse.User.current();
    this.user = user;
    this.isLoading = false;
    this.isAdmin = !user
      ? false
      : user.attributes.role == "admin"
      ? true
      : false;

    this.isAuth = this.user ? true : false;
    localStorage.user = JSON.stringify(this);
    return this.user;
  }

  renderPage(component, scriptAfterLoading) {
    this.currentPage = component;
    localStorage.user = JSON.stringify(this);
    return includeHTML(
      `components/${component}.html`,
      root,
      scriptAfterLoading
    );
  }
}

const currentUser = new User(true, true, false, {}, "main");
currentUser.userSet;

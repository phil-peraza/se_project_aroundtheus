export default class UserInfo {
  constructor(nameSelector, descriptionSelector, avatarSelector) {
    this._name = document.querySelector(nameSelector);
    this._description = document.querySelector(descriptionSelector);
    this._userAvatar = document.querySelector(avatarSelector);
  }

  getUserInfo() {
    const userInfo = {
      name: this._name.textContent,
      description: this._description.textContent,
    };
    return userInfo;
  }

  setUserInfo(data) {
    this._name.textContent = data.title;
    this._description.textContent = data.description;
  }

  setUserAvatar(avatar) {
    this._userAvatar.src = avatar;
  }
}


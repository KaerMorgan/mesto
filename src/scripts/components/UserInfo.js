export default class UserInfo {
  constructor({ nameSelector, occupationSelector, avatarSelector }) {
    this._name = document.querySelector(nameSelector)
    this._nameInput = document.querySelector(`${nameSelector}-input`)
    this._occupation = document.querySelector(occupationSelector)
    this._occupationInput = document.querySelector(`${occupationSelector}-input`)
    this._avatar = document.querySelector(avatarSelector)
  }

  getUserInfo() {
    return {
      name: this._nameInput.value,
      occupation: this._occupationInput.value
    }
  }

  setUserInfo({ name, occupation, link }) {
    this._name.textContent = name;
    this._nameInput.textContent = name;
    this._occupation.textContent = occupation;
    this._occupationInput.textContent = occupation;
    this._avatar.src = link
  }
}
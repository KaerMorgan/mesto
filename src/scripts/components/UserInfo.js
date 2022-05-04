export default class UserInfo {
  constructor({ nameSelector, occupationSelector }) {
    this._name = document.querySelector(nameSelector)
    this._nameInput = document.querySelector(`${nameSelector}-input`)
    this._occupation = document.querySelector(occupationSelector)
    this._occupationInput = document.querySelector(`${occupationSelector}-input`)
  }

  getUserInfo() {
    return {
      name: this._nameInput.value,
      occupation: this._occupationInput.value
    }
  }

  setUserInfo({ name, occupation }) {
    this._name.textContent = name;
    this._nameInput.textContent = name;
    this._occupation.textContent = occupation;
    this._occupationInput.textContent = occupation;
  }
}

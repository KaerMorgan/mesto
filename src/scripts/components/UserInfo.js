export default class UserInfo {
  constructor({ nameSelector, occupationSelector }) {
    this._name = document.querySelector(nameSelector)
    this._nameInput = document.querySelector(`${nameSelector}-input`)
    this._occupation = document.querySelector(occupationSelector)
    this._occupationInput = document.querySelector(`${occupationSelector}`)
  }

  getUserInfo() {
    console.log(this._name)
    console.log(this._nameInput)
    console.log(this._occupation)
    console.log(this._occupationInput)
    return {
      name: this._nameInput.value,
      occupation: this._occupationInput.value
    }
  }

  setUserInfo({ name, occupation }) {
    this._nameInput.textContent = name;
    this._occupationInput.textContent = occupation;
  }
}

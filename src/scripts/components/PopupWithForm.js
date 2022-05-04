import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor({ popupSelector, submitCallback }) {
    super(popupSelector);
    this._inputList = this._popup.querySelectorAll('.popup__input');
    this._submitButton = this._popup.querySelector('.popup__submit');
    this._form = this._popup.querySelector('.popup__form');
    this._submitCallback = submitCallback
  }


  _getInputValues() {
    this._inputValues = {};
    this._inputList.forEach((input) => {
      this._inputValues[input.name] = input.value;
    });
  }

  setEventListeners() {
    this._form.addEventListener('submit', this._submitCallback)
    super.setEventListeners()
  }

  removeEventListeners() {
    this._form.removeEventListener('submit', this._submitCallback)
    super.removeEventListeners()
  }

  close() {
    super.close()
    this._form.reset();
  }
}

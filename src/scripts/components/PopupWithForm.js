import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitCallback) {
    super(popupSelector);
    this._inputList = this._popup.querySelectorAll('.popup__input')
  }

  _getInputValues() {
    this._formValues = {};
    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value;
    });
  }

  setEventListeners() {


    super.setEventListeners()
  }
  close() {}
}

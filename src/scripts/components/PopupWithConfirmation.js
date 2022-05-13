import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor({ popupSelector, submitCallback }) {
    super(popupSelector);
    this._submitButton = this._popup.querySelector('.popup__submit');
    this._submitCallback = submitCallback;
  }

}
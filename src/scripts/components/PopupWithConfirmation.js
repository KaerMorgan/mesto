import Popup from "./Popup.js";
import { api } from "../../pages/index.js";

export default class PopupWithConfirmation extends Popup {
  constructor({ popupSelector, submitCallback }) {
    super(popupSelector);
    this._submitButton = this._popup.querySelector('.popup__submit');
    this._submitCallback = submitCallback;
  }

  open(card) {
    this._card = card
    super.open()
  }

  setEventListeners() {
    this._submitButton.addEventListener('click', () => {
      this._submitCallback();
    })
    super.setEventListeners();
  }
}

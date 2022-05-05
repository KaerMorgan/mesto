import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {

  constructor(popupSelector) {
    super(popupSelector);
    this._image = this._popup.querySelector('.photo-view__image')
    this._caption = this._popup.querySelector('.photo-view__caption')
  }

  open({ name, link }) {
    this._caption.textContent = name
    this._image.src = link
    super.open()
  }
}

export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._closeButton = this._popup.querySelector('.popup__close')
    this.close = this.close.bind(this); // я потерял контекст 10000 раз пока не вспомнил про эту штуку
    this._handleEscClose = this._handleEscClose.bind(this);
    this._handleWrapperClose = this._handleWrapperClose.bind(this);
  }

  open() {
    this._popup.classList.add('popup_opened');
    this.setEventListeners();
  }

  close() {
    this._popup.classList.remove('popup_opened');
    this.removeEventListeners();
  }

  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.close()
    }
  }

  _handleWrapperClose(evt) {
    if (evt.target.classList.contains('popup_opened')) {
      this.close()
    }
  }

  setEventListeners() {
    document.addEventListener('keydown', this._handleEscClose);
    this._popup.addEventListener('mousedown', this._handleWrapperClose)
    this._closeButton.addEventListener('click', this.close);
  }

  removeEventListeners() {
    document.removeEventListener('keydown', this._handleEscClose);
    this._popup.removeEventListener('mousedown', this._handleWrapperClose)
    this._closeButton.removeEventListener('click', this.close);

  }

}

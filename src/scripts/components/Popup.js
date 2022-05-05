export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._closeButton = this._popup.querySelector('.popup__close');
    // без bind() в this оказывается то попап, то кнопка закрытия, то документ, и я представления не имею как это исправить придерживаясь брифа проектной работы ☹
    this.close = this.close.bind(this); // я потерял контекст 10000 раз пока не вспомнил про эту штуку
    this._handleEscClose = this._handleEscClose.bind(this);
    this._handleWrapperClose = this._handleWrapperClose.bind(this);
  }

  open() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
  }

  close() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
  }

  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      // console.log(this)
      this.close()
    }
  }

  _handleWrapperClose(evt) {
    if (evt.target.classList.contains('popup_opened')) {
      // console.log(this)
      this.close()
    }
  }

  setEventListeners() {
    this._popup.addEventListener('mousedown', this._handleWrapperClose)
    this._closeButton.addEventListener('click', this.close);
  }

}

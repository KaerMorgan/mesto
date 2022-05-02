export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);

  }

  open() {
    this._popup.classList.add('popup__opened');
  }

  close() {
    this._popup.classList.remove('popup__opened');
  }

  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.close()
    }
  }

  setEventListeners() {
    this._popup.addEventListener('keydown', (evt) => {
      this._handleEscClose(evt);
    })

    this._popup.addEventListener('mousedown', (evt) => {
      if (evt.target.classList.contains('popup_opened')) {
        this.close()
      }
      if (evt.target.classList.contains('popup__close-icon')) {
        this.close()
      }
    })

  }
}

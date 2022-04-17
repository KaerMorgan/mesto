import { photoPreviewImage, photoPreviewCaption, openPopup, photoPreview } from './index.js'

export default class Card {
  constructor(item, templateSelector) {
    this._name = item.name
    this._link = item.link
    this._templateSelector = templateSelector
  }

  _getTemplate() {
    const cardTemplate = document.querySelector(this._templateSelector).content.querySelector('.element').cloneNode(true);
    return cardTemplate
  }

  renderCard() {
    this._element = this._getTemplate();

    this._element.querySelector('.element__photo').src = this._link;
    this._element.querySelector('.element__photo').alt = this._name;
    this._element.querySelector('.element__caption').textContent = this._name;
    this._setEventListeners();

    return this._element
  }

  _setEventListeners() {
    this._element.querySelector('.element__photo').addEventListener('click', () => {
      this._previewCard();
    })

    this._element.querySelector('.element__like').addEventListener('click', () => {
      this._handleLikeCard();
    })

    this._element.querySelector('.element__delete').addEventListener('click', () => {
      this._handleDeleteCard();
    })

  }

  _previewCard() {
    photoPreviewImage.src = this._link;
    photoPreviewImage.alt = this._name;
    photoPreviewCaption.textContent = this._name;

    openPopup(photoPreview);
  }

  _handleLikeCard() {
    this._element.querySelector('.element__like').classList.toggle('element__like_pressed');
  }

  _handleDeleteCard() {
    this._element.remove();
  }

}

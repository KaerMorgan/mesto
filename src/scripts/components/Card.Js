import { photoPreviewImage, photoPreviewCaption, openPopup, photoPreview } from './index.js'

export default class Card {
  constructor(item, templateSelector, handleCardClick) {
    this._name = item.name
    this._link = item.link
    this._templateSelector = templateSelector
    this._handleCardClick = handleCardClick
  }

  _getTemplate() {
    const cardTemplate = document
      .querySelector(this._templateSelector)
      .content.querySelector('.element')
      .cloneNode(true);
    return cardTemplate
  }

  renderCard() {
    this._element = this._getTemplate();
    this._cardImage = this._element.querySelector('.element__photo');
    this._cardCaption = this._element.querySelector('.element__caption');
    this._cardLike = this._element.querySelector('.element__like');
    this._cardDelete = this._element.querySelector('.element__delete');


    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._cardCaption.textContent = this._name;
    this._setEventListeners();

    return this._element
  }

  _setEventListeners() {

    this._cardLike.addEventListener('click', () => {
      this._handleLikeCard();
    })

    this._cardDelete.addEventListener('click', () => {
      this._handleDeleteCard();
    })

    this._cardImage.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link)
    });

  }


  _handleLikeCard() {
    this._element.querySelector('.element__like').classList.toggle('element__like_pressed');
  }

  _handleDeleteCard() {
    this._element.remove();
  }

}
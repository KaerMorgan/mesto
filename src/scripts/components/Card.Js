export default class Card {
  constructor({ name, link, id }, templateSelector, handleCardClick, handleCardDelete, handleLikeCard) {
    this._name = name
    this._link = link
    this._templateSelector = templateSelector
    this._handleCardClick = handleCardClick
    this._handleCardDelete = handleCardDelete
    this._handleLikeCard = handleLikeCard
    this._id = id
      // this._likes = likes
  }

  _getTemplate() {
    const cardTemplate = document
      .querySelector(this._templateSelector)
      .content.querySelector('.element')
      .cloneNode(true);
    return cardTemplate
  }

  generateCard() {
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
      this._handleLikeCard(this);
    })

    this._cardDelete.addEventListener('click', () => {
      this._handleCardDelete(this);
    })

    this._cardImage.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link)
    });

  }


}


// _handleLikeCard() {
// }

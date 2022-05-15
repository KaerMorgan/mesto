export default class Card {
  constructor(cardData, currentUser, templateSelector, handleClickCard, handleDeleteCard, handleLikeCard) {
    this._name = cardData.name
    this._link = cardData.link
    this._templateSelector = templateSelector
    this._handleClickCard = handleClickCard
    this._handleDeleteCard = handleDeleteCard
    this._handleLikeCard = handleLikeCard
    this._currentUser = currentUser
    this._cardOwner = cardData.owner._id
    this._id = cardData._id
    this._likes = cardData.likes
  }

  _checkLike() {
    return this._likes.some(item => item._id === this._currentUser)
  }

  _setLikeState() {
    if (this._checkLike()) {
      this._setLike()
    } else {
      this._removeLike()
    }
  }

  _setLike() {
    this._cardLike.classList.add('element__like_pressed');
    this._cardLikeCounter.textContent = this._likes.length;
  }

  _removeLike() {
    this._cardLike.classList.remove('element__like_pressed');
    this._cardLikeCounter.textContent = this._likes.length;
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
    this._cardLikeCounter = this._element.querySelector('.element__like-counter');
    this._cardDelete = this._element.querySelector('.element__delete');
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._cardCaption.textContent = this._name;

    if (this._cardOwner !== this._currentUser) {
      this._cardDelete.remove()
    }

    this._setLikeState();
    this._setEventListeners();

    return this._element
  }

  _setEventListeners() {

    this._cardLike.addEventListener('click', () => {
      this._handleLikeCard(this);
    })

    this._cardDelete.addEventListener('click', () => {
      this._handleDeleteCard(this);
    })

    this._cardImage.addEventListener('click', () => {
      this._handleClickCard(this._name, this._link)
    });

  }
}

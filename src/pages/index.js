import '../pages/index.css'
import { formSelectors, avatarMask, avatarСontainer } from '../scripts/utils/constants.js';
import Api from '../scripts/components/Api.js';
import Card from '../scripts/components/Card.js';
import Section from '../scripts/components/Section.js'
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import PopupWithConfirmation from '../scripts/components/PopupWithConfirmation.js';
import UserInfo from '../scripts/components/UserInfo.js';
import FormValidator from "../scripts/components/FormValidator.js";

// Я не могу найти больше ни одного приватного метода :\

function createCard(cardData, currentUser) {
  const card = new Card(cardData, currentUser, "#card",
    () => photoPreview.open({ name: cardData.name, link: cardData.link }),
    (card) => popupDelete.open(card),
    (card) => {
      if (!card.checkLike()) {
        // Запрос на лайк
        api.likeCard(cardData._id)
          // Обновление массива с лайками
          .then((likeArrayResponse) => card.likes = likeArrayResponse.likes)
          // Отрисовка лайка и счётчика
          .then(() => card.setLike())
      } else {
        api.removeLike(cardData._id)
          .then((likeArrayResponse) => card.likes = likeArrayResponse.likes)
          .then(() => card.removeLike())
      }
    })
  return card.generateCard()
}

const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-41/',
  headers: {
    authorization: '1eb86aa4-a0d2-4f05-8adf-01200df0c7d3'
  }
})


const cardSection = new Section(
  (cardItem) => {
    cardSection.addItem(createCard(cardItem, "47bda8f44ba5fc95c27a71c9"))
  }, '.elements__grid')

const profile = new UserInfo({ nameSelector: '#profile__name', aboutSelector: '#profile__about', avatarSelector: ".profile__avatar", api })

// Popup initializers
const photoPreview = new PopupWithImage('.photo-view');

export const popupEdit = new PopupWithForm({
  popupSelector: '.popup_type_edit',
  submitCallback: (userData) => {
    popupEdit.setPending()
    api.changeUserInfo(userData)
      .then((userData) => {
        profile.setUserInfo(userData)
        popupEdit.close()
      }).catch(err => console.log(err))
      .finally(() => popupEdit.removePending('Сохранить'))
  }
});

export const popupAdd = new PopupWithForm({
  popupSelector: '.popup_type_add',
  submitCallback: (cardData) => {
    popupAdd.setPending()
    api.addCard(cardData)
      .then((responseWithCard) => {
        cardSection.addItem(createCard(responseWithCard, responseWithCard.owner._id));
        popupAdd.close();
      }).catch(err => console.log(err))
      .finally(() => popupAdd.removePending('Создать'))

  }
});

export const popupAvatar = new PopupWithForm({
  popupSelector: '.popup_type_avatar',
  submitCallback: (avatar) => {
    popupAvatar.setPending()
    api.changeAvatar(avatar)
      .then(() => {
        profile.setAvatar(avatar);
        popupAvatar.close()
      }).catch(err => console.log(err))
      .finally(() => popupAvatar.removePending('Сохранить'))

  }
});

const popupDelete = new PopupWithConfirmation({
  popupSelector: '.popup_type_delete',
  submitCallback: () => {
    api.deleteCard(popupDelete.card._id)
      .then(() => popupDelete.card.deleteCard())
      .then(() => popupDelete.close())
      .catch(err => console.log(err));
  }
});

const FormAddValidator = new FormValidator(formSelectors, '.popup__form_type_add', '.profile__add-button');
FormAddValidator.enableValidation()

const FormEditValidator = new FormValidator(formSelectors, '.popup__form_type_edit', '.profile__edit-button')
FormEditValidator.enableValidation()

const FormAvatarValidator = new FormValidator(formSelectors, '.popup__form_type_avatar', '.profile__avatar-container')
FormAvatarValidator.enableValidation()



Promise.all([api.getUserInfo(), api.getCardList()])
  .then((promiseResponseArray) => {
    profile.setAvatar(promiseResponseArray[0])
    profile.setUserInfo(promiseResponseArray[0])
    cardSection.renderItems(promiseResponseArray[1].reverse());
  }).catch(err => console.log(err));


avatarСontainer.addEventListener('mouseenter', () => avatarMask.classList.add('profile__avatar-mask_active'));
avatarСontainer.addEventListener('mouseleave', () => avatarMask.classList.remove('profile__avatar-mask_active'));
photoPreview.setEventListeners();
popupEdit.setEventListeners();
popupAdd.setEventListeners();
popupAvatar.setEventListeners();
popupDelete.setEventListeners();

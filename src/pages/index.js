// import '../pages/index.css'
import { formSelectors, avatarMask, avatarСontainer, profileId } from '../scripts/utils/constants.js';
import Api from '../scripts/components/Api.js';
import Card from '../scripts/components/Card.js';
import Section from '../scripts/components/Section.js'
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import PopupWithConfirmation from '../scripts/components/PopupWithConfirmation.js';
import UserInfo from '../scripts/components/UserInfo.js';
import FormValidator from "../scripts/components/FormValidator.js";
// Popup initializers


export const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-41/',
  headers: {
    authorization: '1eb86aa4-a0d2-4f05-8adf-01200df0c7d3'
  }
})

export const photoPreview = new PopupWithImage('.photo-view');
photoPreview.setEventListeners()

export const profile = new UserInfo({ nameSelector: '#profile__name', aboutSelector: '#profile__about', avatarSelector: ".profile__avatar", api })

export const popupEdit = new PopupWithForm({
  popupSelector: '.popup_type_edit',
  submitCallback: (userData) => {
    api._changeUserInfo(userData)
      .then(() => {
        profile.setUserInfo(userData);
        popupEdit.close()
      })
  }
});
popupEdit.setEventListeners()

export const popupAdd = new PopupWithForm({
  popupSelector: '.popup_type_add',
  submitCallback: (cardData) => {
    api._addCard(cardData)
      .then((responseWithCard) => {
        cardSection.addItem(responseWithCard);
        popupAdd.close()
      })
  }
});
popupAdd.setEventListeners();

export const popupAvatar = new PopupWithForm({
  popupSelector: '.popup_type_avatar',
  submitCallback: (avatar) => {
    api._changeAvatar(avatar)
      .then(() => {
        profile.setAvatar(avatar);
        popupAvatar.close()
      })
  }
});
popupAvatar.setEventListeners();

export const popupDelete = new PopupWithConfirmation({
  popupSelector: '.popup_type_delete',
  submitCallback: () => {
    api._deleteCard(popupDelete._card._id)
      .then(() => popupDelete._card._element.remove())
      .then(() => popupDelete.close())
  }
});
popupDelete.setEventListeners();

let cardSection

const FormAddValidator = new FormValidator(formSelectors, '.popup__form_type_add', '.profile__add-button');
FormAddValidator.enableValidation()

const FormEditValidator = new FormValidator(formSelectors, '.popup__form_type_edit', '.profile__edit-button')
FormEditValidator.enableValidation()

const FormAvatarValidator = new FormValidator(formSelectors, '.popup__form_type_avatar', '.profile__avatar')
FormAvatarValidator.enableValidation()



Promise.all([api._getUserInfo(), api._getCardList()])
  .then((promiseResponseArray) => {
    profile.setAvatar(promiseResponseArray[0])
    profile.setUserInfo(promiseResponseArray[0])
    cardSection = new Section({
        data: promiseResponseArray[1].reverse(), // Развернул массив, чтобы новые карточки добавлялись в начало. An elegant solution for more civilized times.😎
        renderer: (cardData) => {
          const card = new Card(cardData, promiseResponseArray[0]._id, "#card",
            () => photoPreview.open({ name: cardData.name, link: cardData.link }),
            (card) => popupDelete.open(card),
            (card) => {
              if (!card._checkLike()) {
                // Запрос на лайк
                api._likeCard(cardData._id)
                  // Обновление массива с лайками
                  .then((likeArrayResponse) => card._likes = likeArrayResponse.likes)
                  // Отрисовка лайка и счётчика
                  .then(() => card._setLike())
              } else {
                api._removeLike(cardData._id)
                  .then((likeArrayResponse) => card._likes = likeArrayResponse.likes)
                  .then(() => card._removeLike())
              }
            })
          return card.generateCard();
        }
      },
      '.elements__grid')
    cardSection.renderItems();
    // console.log(promiseResponseArray[1])
  }).catch((err) => console.log(err));

avatarСontainer.addEventListener('mouseenter', () => avatarMask.classList.add('profile__avatar-mask_active'))
avatarСontainer.addEventListener('mouseleave', () => avatarMask.classList.remove('profile__avatar-mask_active'))

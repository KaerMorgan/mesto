// import '../pages/index.css'
import { formSelectors } from '../scripts/utils/constants.js';
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

export const profile = new UserInfo({ nameSelector: '#profile__name', occupationSelector: '#profile__occupation', avatarSelector: ".profile__avatar" })

function renderCard(cardData) {
  const card = new Card({ name: cardData.name, link: cardData.link, id: cardData.id }, "#card", () => {
    photoPreview.open({ name: cardData.name, link: cardData.link });
  });
  return card.generateCard();
}

export const popupEdit = new PopupWithForm({
  popupSelector: '.popup_type_edit',
  submitCallback: (userData) => {
    profile.setUserInfo(userData);
    popupEdit.close()
  }
});
popupEdit.setEventListeners()

export const popupAdd = new PopupWithForm({
  popupSelector: '.popup_type_add',
  submitCallback: (cardData) => {
    api._addCard(cardData)
    initialCardList.addItem(renderCard(cardData));
    popupAdd.close()
  }
});

export const popupAvatar = new PopupWithForm({
  popupSelector: '.popup_type_avatar',
  submitCallback: (userData) => {
    profile.setUserInfo(userData);
    popupAvatar.close()
  }
});

export const popupDelete = new PopupWithConfirmation({
  popupSelector: '.popup_type_delete',
  submitCallback: () => {
    popupDelete.close()
  }
});

popupAdd.setEventListeners();

const FormAddValidator = new FormValidator(formSelectors, '.popup__form_type_add', '.profile__add-button');
FormAddValidator.enableValidation()

const FormEditValidator = new FormValidator(formSelectors, '.popup__form_type_edit', '.profile__edit-button')
FormEditValidator.enableValidation()

const FormAvatarValidator = new FormValidator(formSelectors, '.popup__form_type_avatar', '.profile__avatar')
FormAvatarValidator.enableValidation()

// const initialCardList = new Section({
//   data: initialCards,
//   renderer: (cardData) => {
//     initialCardList.addItem(renderCard(cardData));
//   }
// }, '.elements__grid')
const initialCards = api._getCardList()
  .then((cardsData) => {
    const initialCardList = new Section({
        data: cardsData.map((item) => ({ name: item.name, link: item.link, id: item._id })),
        renderer: (cardData) => {
          initialCardList.addItem(renderCard(cardData));
        }
      },
      '.elements__grid')
    initialCardList.renderItems();
  })
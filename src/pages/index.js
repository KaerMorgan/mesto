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

export const profile = new UserInfo({ nameSelector: '#profile__name', aboutSelector: '#profile__about', avatarSelector: ".profile__avatar", api })

function renderCard(cardData) {
  const card = new Card({ name: cardData.name, link: cardData.link, id: cardData._id },
    "#card",
    () => {
      photoPreview.open({ name: cardData.name, link: cardData.link })
    },
    (card) => {
      popupDelete.open(card)
    },
    (card) => {
      console.log(card)
      card._element.querySelector('.element__like').classList.toggle('element__like_pressed');
    }
  )
  return card.generateCard();
}

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
    cardSection.addItem(renderCard(cardData));
    popupAdd.close()
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
    popupDelete.close()
  }
});
popupDelete.setEventListeners();


const FormAddValidator = new FormValidator(formSelectors, '.popup__form_type_add', '.profile__add-button');
FormAddValidator.enableValidation()

const FormEditValidator = new FormValidator(formSelectors, '.popup__form_type_edit', '.profile__edit-button')
FormEditValidator.enableValidation()

const FormAvatarValidator = new FormValidator(formSelectors, '.popup__form_type_avatar', '.profile__avatar')
FormAvatarValidator.enableValidation()

const cardSection = new Section({
    data: {},
    renderer: (cardData) => {
      cardSection.addItem(renderCard(cardData));
    }
  },
  '.elements__grid')

api._getCardList()
  .then((cardsData) => {
    cardSection._renderedItems = cardsData.reverse() // Новые карточки добавляются в начало, а получаемый массив перебирается с конца. An elegant solution for more civilized times.😎
    console.log(cardSection._renderedItems)
    cardSection.renderItems();
  })

const initialProfileLoad = api._getUserInfo()
  .then((userData) => {
    profile.setAvatar(userData)
    profile.setUserInfo(userData)
  })

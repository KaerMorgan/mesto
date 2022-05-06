import '../pages/index.css'
import { initialCards, formSelectors } from '../scripts/utils/constants.js';
import Card from '../scripts/components/Card.js';
import Section from '../scripts/components/Section.js'
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import UserInfo from '../scripts/components/UserInfo.js';
import FormValidator from "../scripts/components/FormValidator.js";

// Popup initializers

export const photoPreview = new PopupWithImage('.photo-view');
photoPreview.setEventListeners()

export const profile = new UserInfo({ nameSelector: '#profile__name', occupationSelector: '#profile__occupation' })

function renderCard(cardData) {
  const card = new Card({ name: cardData.name, link: cardData.link }, "#card", () => {
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
    initialCardList.addItem(renderCard(cardData));
    popupAdd.close()
  }
});
popupAdd.setEventListeners()

const FormAddValidator = new FormValidator(formSelectors, '.popup__form_type_add', '.profile__add-button');
FormAddValidator.enableValidation()

const FormEditValidator = new FormValidator(formSelectors, '.popup__form_type_edit', '.profile__edit-button')
FormEditValidator.enableValidation()

const initialCardList = new Section({
  data: initialCards,
  renderer: (cardData) => {
    initialCardList.addItem(renderCard(cardData));
  }
}, '.elements__grid')

initialCardList.renderItems();

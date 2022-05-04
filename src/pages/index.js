import '../pages/index.css'
import { initialCards } from '../scripts/cards.js';
import Card from '../scripts/components/Card.js';
import Section from '../scripts/components/Section.js'
import Popup from '../scripts/components/Popup.js';
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import UserInfo from '../scripts/components/UserInfo.js';
import FormValidator from "../scripts/components/FormValidator.js";

// Popup initializers
export const addButton = document.querySelector('.profile__add-button')
export const editButton = document.querySelector('.profile__edit-button');

// Profile info
export const name = document.querySelector('.profile__name');
export const occupation = document.querySelector('.profile__occupation');

// Popup forms (to apply submit behavior)
export const formEdit = document.querySelector('.popup__form_type_edit')
export const formAdd = document.querySelector('.popup__form_type_add')

// Popup edit inputs
export const editNameInput = formEdit.querySelector('#profile__name-input');
export const editOccupationInput = formEdit.querySelector('#profile__occupation-input');

// Initial cards load
export const photoPreview = new PopupWithImage('.photo-view')
export const profile = new UserInfo({ nameSelector: '#profile__name', occupationSelector: '#profile__occupation' })

function handleCardClick(name, link) {
  photoPreview.open(name, link);
}

const initialCardList = new Section({
  data: initialCards,
  renderer: (cardData) => {
    const card = new Card(cardData, '#card', handleCardClick);
    const cardElement = card.generateCard();
    initialCardList.addItem(cardElement);
  }
}, '.elements__grid')

initialCardList.renderItems();

export const popupEdit = new PopupWithForm({
  popupSelector: '.popup_type_edit',
  submitCallback: () => {
    const infoData = profile.getUserInfo()
    profile.setUserInfo(infoData);
    popupEdit.close()
  }
});

export const popupAdd = new PopupWithForm({
  popupSelector: '.popup_type_add',
  submitCallback: () => {
    popupAdd._getInputValues();
    const card = new Card(popupAdd._inputValues, '#card', handleCardClick);
    const cardElement = card.generateCard();
    initialCardList.addItem(cardElement);
    popupAdd.close()
  }
});



const formSelectors = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
}

const FormAddValidator = new FormValidator(formSelectors, '.popup__form_type_add', '.profile__add-button');
FormAddValidator.enableValidation()

const FormEditValidator = new FormValidator(formSelectors, '.popup__form_type_edit', '.profile__edit-button')
FormEditValidator.enableValidation()

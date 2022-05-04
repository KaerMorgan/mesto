import '../pages/index.css';
import { initialCards } from '../scripts/cards.js';
import Card from '../scripts/components/Card.js';
import Section from '../scripts/components/Section.js'
import Popup from '../scripts/components/Popup.js';
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import UserInfo from '../scripts/components/UserInfo.js';

// Popup wrappers
// export const popupEdit = document.querySelector('.popup_type_edit');
// export const popupAdd = document.querySelector('.popup_type_add');
// export const photoPreview = document.querySelector('.photo-view')


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

// Popup add inputs
// const addNameInput = formAdd.querySelector('#add-input-name');
// const addLinkInput = formAdd.querySelector('#add-input-link');

// variable
// const cardData = {}

// function handleEditFormSubmit() {
//   // Data rewriting by submit
//   name.textContent = editNameInput.value;
//   occupation.textContent = editOccupationInput.value;

//   //Close popup by submit
//   closePopup(popupEdit)
// };

// function handleAddFormSubmit() {

//   cardData.name = addNameInput.value;
//   cardData.link = addLinkInput.value;

//   addCard(cardData)
//   closePopup(popupAdd);
// };

// Close popup by pressing Escape button
// const handleEscButton = (evt) => {
//   if (evt.key === 'Escape') {
//     const activePopup = document.querySelector('.popup_opened');
//     closePopup(activePopup);
//   }
// }

// function createCard(cardData) {
//   const card = new Card(cardData, '#card', handleCardClick);
//   const cardElement = card.renderCard();

//   return cardElement
// }

// function addCard(card) {
//   cardContainer.prepend(createCard(card));
// }


// formEdit.addEventListener('submit', handleEditFormSubmit);

// formAdd.addEventListener('submit', handleAddFormSubmit);

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
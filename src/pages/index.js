import { initialCards } from '../scripts/cards.js';
import Card from '../scripts/components/Card.js';
import Section from '../scripts/components/Section.js'
import Popup from '../scripts/components/Popup.js';
import PopupWithImage from '../scripts/components/PopupWithImage.js';

// Popup wrappers
export const popupEdit = document.querySelector('.popup_type_edit');
export const popupAdd = document.querySelector('.popup_type_add');
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
export const editNameInput = formEdit.querySelector('#edit-input-name');
export const editOccupationInput = formEdit.querySelector('#edit-input-occupation');

// Popup add inputs
const addNameInput = formAdd.querySelector('#add-input-name');
const addLinkInput = formAdd.querySelector('#add-input-link');

// Photo popup variables
// export const photoPreviewImage = photoPreview.querySelector('.photo-view__image');
// export const photoPreviewCaption = photoPreview.querySelector('.photo-view__caption');

// variable
// const cardData = {}

// export function openPopup(item) {
//   item.classList.add('popup_opened');
//   document.addEventListener('keydown', handleEscButton);
// }

// function closePopup(item) {
//   item.classList.remove('popup_opened');
//   document.removeEventListener('keydown', handleEscButton);
// }

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


// function handleCardClick(name, link) {
//   photoPreviewImage.src = link;
//   photoPreviewImage.alt = name;
//   photoPreviewCaption.textContent = name;

//   openPopup(photoPreview);
// }

export const photoPreview = new PopupWithImage('.photo-view')

const initialCardList = new Section({
  data: initialCards,
  renderer: (cardData) => {
    const card = new Card(cardData, '#card', handleCardClick)
    const cardElement = card.generateCard();
    initialCardList.addItem(cardElement);
  }
}, '.elements__grid')

initialCardList.renderItems();

function handleCardClick(name, link) {
  photoPreview.open(name, link)
}

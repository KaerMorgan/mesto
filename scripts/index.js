import Card from './Card.js';
import { initialCards } from './cards.js';

// Popup wrappers
export const popupEdit = document.querySelector('.popup_type_edit');
export const popupAdd = document.querySelector('.popup_type_add');
export const photoPreview = document.querySelector('.photo-view')
const popups = document.querySelectorAll('.popup')

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
export const photoPreviewImage = photoPreview.querySelector('.photo-view__image');
export const photoPreviewCaption = photoPreview.querySelector('.photo-view__caption');

// variable
const cardData = {}
const cardContainer = document.querySelector('.elements__grid');

export function openPopup(item) {
  item.classList.add('popup_opened');
  document.addEventListener('keydown', handleEscButton);
}

function closePopup(item) {
  item.classList.remove('popup_opened');
  document.removeEventListener('keydown', handleEscButton);
}

function handleEditFormSubmit() {
  // Data rewriting by submit
  name.textContent = editNameInput.value;
  occupation.textContent = editOccupationInput.value;

  //Close popup by submit
  closePopup(popupEdit)
};

function handleAddFormSubmit() {

  cardData.name = addNameInput.value;
  cardData.link = addLinkInput.value;

  addCard(cardData)
  closePopup(popupAdd);
};

// Close popup by pressing Escape button
const handleEscButton = (evt) => {
  if (evt.key === 'Escape') {
    const activePopup = document.querySelector('.popup_opened');
    closePopup(activePopup);
  }
}


function handleCardClick(name, link) {
  photoPreviewImage.src = link;
  photoPreviewImage.alt = name;
  photoPreviewCaption.textContent = name;

  openPopup(photoPreview);
}

function createCard(cardData) {
  const card = new Card(cardData, '#card', handleCardClick);
  const cardElement = card.renderCard();

  return cardElement
}

function addCard(card) {
  cardContainer.prepend(createCard(card));
}

// Close popup by click on wrapper
popups.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup_opened')) {
      closePopup(popup)
    }
    if (evt.target.classList.contains('popup__close-icon')) {
      closePopup(popup)
    }
  })
});

formEdit.addEventListener('submit', handleEditFormSubmit);

formAdd.addEventListener('submit', handleAddFormSubmit);

// // Initial card array render
// initialCards.forEach((item) => {
//   const card = new Card(item, '#card', handleCardClick);
//   const cardElement = card.renderCard();

//   // Добавляем в DOM
//   document.querySelector('.elements__grid').append(cardElement);
// });


initialCards.forEach((item) => {
  addCard(item);
})

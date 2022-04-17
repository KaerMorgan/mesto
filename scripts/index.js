import Card from './Card.js';
import { initialCards } from './cards.js';

// Popup wrappers
const popupEdit = document.querySelector('.popup_type_edit');
const popupAdd = document.querySelector('.popup_type_add');
export const photoPreview = document.querySelector('.photo-view')
const popups = document.querySelectorAll('.popup')

// Popup initializers
const addButton = document.querySelector('.profile__add-button')
const editButton = document.querySelector('.profile__edit-button');

// Profile info
const name = document.querySelector('.profile__name');
const occupation = document.querySelector('.profile__occupation');

// Popup forms (to apply submit behavior)
const formEdit = document.querySelector('.popup__form_type_edit')
const formAdd = document.querySelector('.popup__form_type_add')

// Popup edit inputs
const editNameInput = formEdit.querySelector('#edit-input-name');
const editOccupationInput = formEdit.querySelector('#edit-input-occupation');

// Popup add inputs
const addNameInput = formAdd.querySelector('#add-input-name');
const addLinkInput = formAdd.querySelector('#add-input-link');

// Photo popup variables
export const photoPreviewImage = photoPreview.querySelector('.photo-view__image');
export const photoPreviewCaption = photoPreview.querySelector('.photo-view__caption');

// variable
const cardData = {}


export function openPopup(item) {
  item.classList.add('popup_opened');
  document.addEventListener('keydown', handleEscButton);
}

function closePopup(item) {
  item.classList.remove('popup_opened');
  document.removeEventListener('keydown', handleEscButton);
}

function handleEditFormSubmit(evt) {
  // Data rewriting by submit
  name.textContent = editNameInput.value;
  occupation.textContent = editOccupationInput.value;

  //Close popup by submit
  closePopup(popupEdit)
};

function handleAddFormSubmit(evt) {
  cardData.name = addNameInput.value;
  cardData.link = addLinkInput.value;

  // renderCard(cardData);
  closePopup(popupAdd);
};

// Close popup by pressing Escape button
const handleEscButton = (evt) => {
  if (evt.key === 'Escape') {
    const activePopup = document.querySelector('.popup_opened');
    closePopup(activePopup);
  }
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

// Initial card array render
initialCards.forEach((item) => {
  const card = new Card(item, '#card');
  const cardElement = card.renderCard();

  // Добавляем в DOM
  document.querySelector('.elements__grid').append(cardElement);
});

// Popup initialize buttons
export const addButton = document.querySelector('.profile__add-button')
export const editButton = document.querySelector('.profile__edit-button');

// Profile info
export const name = document.querySelector('.profile__name');
export const about = document.querySelector('.profile__about');

// Popup forms (to apply submit behavior)
export const formEdit = document.querySelector('.popup__form_type_edit')
export const formAdd = document.querySelector('.popup__form_type_add')

// Popup edit inputs
export const editNameInput = formEdit.querySelector('#profile__name-input');
export const editOccupationInput = formEdit.querySelector('#profile__about-input');

export const avatarMask = document.querySelector('.profile__avatar-mask')
export const avatarСontainer = document.querySelector('.profile__avatar-container')

export const profileId = { _id: '47bda8f44ba5fc95c27a71c9' }

// Selectors for form validation
export const formSelectors = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
}

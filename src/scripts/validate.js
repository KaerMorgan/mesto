import FormValidator from "./components/FormValidator.js";
import { openPopup, photoPreview, photoPreviewCaption, photoPreviewImage, editButton, addButton, editNameInput, editOccupationInput, name, occupation, popupEdit, popupAdd, formEdit, formAdd } from "../pages/index.js";


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

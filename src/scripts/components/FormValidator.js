import { editNameInput, editOccupationInput, name, about } from "../utils/constants.js"
import { popupEdit, popupAdd, popupAvatar } from "../../pages/index.js"


export default class FormValidator {
  constructor(data, form, formButtonSelector) {
    this._formSelector = data.formSelector
    this._inputSelector = data.inputSelector
    this._submitButtonSelector = data.submitButtonSelector
    this._inactiveButtonClass = data.inactiveButtonClass
    this._inputErrorClass = data.inputErrorClass
    this._errorClass = data.errorClass
    this._formElement = document.querySelector(form)
    this._showFormButton = document.querySelector(formButtonSelector)
  }

  _showInputError(inputElement, errorMessage) {
    // Find error span
    const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(this._inputErrorClass);
    // Show error span
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._errorClass);
  }

  _hideInputError(inputElement) {
    const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = '';
  }

  _isValid(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage, this._inputErrorClass, this._errorClass);
    } else {
      this._hideInputError(inputElement, this._inputErrorClass, this._errorClass);
    }
  }

  _hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;;
    })
  }

  _toggleButtonState(inputList, buttonElement) {
    if (this._hasInvalidInput(inputList)) {
      // Disable if one of inputs is invalid
      buttonElement.classList.add(this._inactiveButtonClass);
      buttonElement.setAttribute("disabled", "true");
    } else {
      buttonElement.classList.remove(this._inactiveButtonClass);
      buttonElement.removeAttribute("disabled");

    }
  }

  _setEventListeners() {
    const inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
    // Get submit button from form
    const buttonElement = this._formElement.querySelector(this._submitButtonSelector);

    this._toggleButtonState(inputList, buttonElement);

    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        // Check validity on each input
        this._isValid(inputElement);
        // Disable submit button after validity check
        this._toggleButtonState(inputList, buttonElement);
      })
    });

    this._showFormButton.addEventListener('click', () => {
      if (this._showFormButton.classList.contains('profile__edit-button')) {
        // Clear inputs
        editNameInput.value = name.textContent
        editOccupationInput.value = about.textContent
        this._toggleButtonState(inputList, buttonElement)
        popupEdit.open();
      } else if (this._showFormButton.classList.contains('profile__add-button')) {
        this._toggleButtonState(inputList, buttonElement)
        popupAdd.open();
      } else if (this._showFormButton.classList.contains('profile__avatar-container')) {
        this._toggleButtonState(inputList, buttonElement)
        popupAvatar.open();
      }
    })
  }

  enableValidation() {
    this._formElement.addEventListener('submit', (evt) => {
      // Prevent page reload on submit
      evt.preventDefault();
    })
    this._setEventListeners();
  }

}

// Show error on invalid input
const showInputError = (formElement, inputElement, errorMessage, inputErrorClass, errorClass) => {
  // Find error span
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(inputErrorClass);
  // Show error span
  errorElement.textContent = errorMessage;
  errorElement.classList.add(errorClass);
}

//  Remove error on valid input
const hideInputError = (formElement, inputElement, inputErrorClass, errorClass) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(inputErrorClass)
  errorElement.classList.remove(errorClass);
  errorElement.textContent = ''
}

// Individual input validity check
const isValid = (formElement, inputElement, { inputErrorClass, errorClass }) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, inputErrorClass, errorClass);
  } else {
    hideInputError(formElement, inputElement);
  }
}

// Search for invaid input presence
const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;;
  })
}

// Button state handler
const toggleButtonState = (inputList, buttonElement, inactiveButtonClass) => {
  // Inputs validity check
  if (hasInvalidInput(inputList)) {
    // Disable if one of inputs is invalid
    buttonElement.classList.add(inactiveButtonClass);
  } else {
    buttonElement.classList.remove(inactiveButtonClass);
  }
}

// Apply validity check on inputs
const setEventListeners = (formElement, { inputSelector, submitButtonSelector, inactiveButtonClass, ...rest }) => {
  // Get inputs from form
  const inputList = Array.from(formElement.querySelectorAll(inputSelector));
  // Get submit button from form
  const buttonElement = formElement.querySelector(submitButtonSelector);
  // Disable submit on initial load
  toggleButtonState(inputList, buttonElement, inactiveButtonClass);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      // Check validity on each input
      isValid(formElement, inputElement, rest);
      // Disable submit button after validity check
      toggleButtonState(inputList, buttonElement, inactiveButtonClass)
    })
  });
}

// Start chain validation function
const enableValidation = ({ formSelector, ...rest }) => {
  // Get forms from page
  const formList = Array.from(document.querySelectorAll(formSelector))
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      // Prevent page reload on submit
      evt.preventDefault();
    })
    setEventListeners(formElement, rest);
  })
}
z
enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
});

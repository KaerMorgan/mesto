// Show error on invalid input
const showInputError = (formElement, inputElement, errorMessage) => {
  // Find error span
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add('popup__input_type_error');
  // Show error span
  errorElement.textContent = errorMessage;
  errorElement.classList.add('popup__input-error_active');
}

//  Remove error on valid input
const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove('popup__input_type_error')
  errorElement.classList.remove('popup__input-error_active');
  errorElement.textContent = ''
}

// Individual input validity check
const isValid = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
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
const toggleButtonState = (inputList, buttonElement) => {
  // Inputs validity check
  if (hasInvalidInput(inputList)) {
    // Disable if one of inputs is invalid
    buttonElement.classList.add('popup__submit_disabled');
  } else {
    buttonElement.classList.remove('popup__submit_disabled');
  }
}

// Apply validity check on inputs
const setEventListeners = (formElement) => {
  // Get inputs from form
  const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
  // Get submit button from form
  const buttonElement = formElement.querySelector('.popup__submit');
  // Disable submit on initial load
  toggleButtonState(inputList, buttonElement);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      // Check validity on each input
      isValid(formElement, inputElement);
      // Disable submit button after validity check
      toggleButtonState(inputList, buttonElement)
    })
  });
}

// Start chain validation function
const enableValidation = () => {
  // Get forms from page
  const formList = Array.from(document.querySelectorAll('.popup__form'))
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      // Prevent page reload on submit
      evt.preventDefault();
    })
    setEventListeners(formElement);
  })
}

enableValidation();

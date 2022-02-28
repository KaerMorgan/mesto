let popup = document.querySelector('.popup');
let popupOpen = document.querySelector('.profile-info__edit-button');
let popupClose = document.querySelector('.popup__close')

// открытие по кнопке
popupOpen.addEventListener('click', function() {
  popup.classList.add('popup__opened');
});

// закрытие по кнопке
popupClose.addEventListener('click', function() {
  popup.classList.remove('popup__opened');
});

// хитрый трюк которому я научился на проекте :)
document.addEventListener('click', (e) => {
  if (e.target === popup) {
    popup.classList.remove('popup__opened');
  }
})

let name = document.querySelector('.profile-info__name');
let occupation = document.querySelector('.profile-info__occupation');

let formElement = document.querySelector('.popup__container');
let nameInput = formElement.querySelector('.popup__name');
let occupationInput = formElement.querySelector('.popup__occupation');

function formSubmitHandler(evt) {
  evt.preventDefault();

  name.textContent = nameInput.value;
  occupation.textContent = occupationInput.value;
}

formElement.addEventListener('submit', formSubmitHandler);

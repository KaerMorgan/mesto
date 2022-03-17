let popup = document.querySelector('.popup');
let editButton = document.querySelector('.profile__edit-button');
let closeButton = document.querySelector('.popup__close')

let name = document.querySelector('.profile__name');
let occupation = document.querySelector('.profile__occupation');

let formElement = document.querySelector('.popup__form');
let nameInput = formElement.querySelector('#popup__input-name');
let occupationInput = formElement.querySelector('#popup__input-occupation');

// Popup open/close
function popupOpen() {
  popup.classList.toggle('popup_opened');

  nameInput.value = name.textContent
  occupationInput.value = occupation.textContent
}
editButton.addEventListener('click', popupOpen);
closeButton.addEventListener('click', popupOpen);

// Closing popup by click on wrapper feature
// document.addEventListener('click', (e) => {
//   if (e.target === popup) {
//     popup.classList.remove('popup_opened');
//   }
// });

// Saving input values
function formSubmitHandler(evt) {
  // Prevent page reload
  evt.preventDefault();

  // Data rewriting by submit
  name.textContent = nameInput.value;
  occupation.textContent = occupationInput.value;

  //Close popup by click on X
  popupOpen()
};
formElement.addEventListener('submit', formSubmitHandler);

// Like button behavior
let elements = document.querySelectorAll('.element__like');

for (let i = 0; i < elements.length; i++) {
  elements[i].addEventListener('click', function() {
    elements[i].classList.toggle('element__like_pressed');
  });
}

// Initial load cards array
const initialCards = [{
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

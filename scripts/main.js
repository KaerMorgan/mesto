const popup = document.querySelector('.popup');
const editButton = document.querySelector('.profile__edit-button');
const closeButton = document.querySelector('.popup__close')

const name = document.querySelector('.profile__name');
const occupation = document.querySelector('.profile__occupation');

const formElement = document.querySelector('.popup__form');
const nameInput = formElement.querySelector('#popup__input-name');
const occupationInput = formElement.querySelector('#popup__input-occupation');

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
const elements = document.querySelectorAll('.element__like');

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

// Template creating variables
const cardTemplate = document.querySelector('#card').content;
const cardContainer = document.querySelector('.elements__grid');


// Adding intial cards
initialCards.forEach(function(item, index, array) {
  const newCard = cardTemplate.querySelector('.element').cloneNode(true);
  const cardName = newCard.querySelector('.element__caption');
  const cardPhoto = newCard.querySelector('.element__photo');


  cardName.textContent = item.name
  cardPhoto.src = item.link

  cardContainer.append(newCard);
})

const popup = document.querySelector('.popup');

const addButton = document.querySelector('.profile__add-button')
const editButton = document.querySelector('.profile__edit-button');
const closeButton = document.querySelector('.popup__close')

const name = document.querySelector('.profile__name');
const occupation = document.querySelector('.profile__occupation');

const formEdit = document.querySelector('.popup__form-edit')
const formAdd = document.querySelector('.popup__form-add')
const editNameInput = formEdit.querySelector('#edit-input-name');
const editOccupationInput = formEdit.querySelector('#edit-input-occupation');

// Popup open/close
editButton.addEventListener('click', function() {
  popup.classList.toggle('popup_opened');
  formEdit.classList.toggle('popup__form_active')

  editNameInput.value = name.textContent
  editOccupationInput.value = occupation.textContent
});

addButton.addEventListener('click', function() {
  popup.classList.toggle('popup_opened');
  formAdd.classList.toggle('popup__form_active')
});

function popupClose() {
  popup.classList.remove('popup_opened');
  formEdit.classList.remove('popup__form_active')
  formAdd.classList.remove('popup__form_active')

  editNameInput.value = name.textContent
  editOccupationInput.value = occupation.textContent
}
closeButton.addEventListener('click', popupClose)

// Closing popup by click on wrapper feature
// document.addEventListener('click', (e) => {
//   if (e.target === popup) {
//     popup.classList.remove('popup_opened');
//   }
// });

// Saving input values
function formEditSubmitHandler(evt) {
  // Prevent page reload
  evt.preventDefault();

  // Data rewriting by submit
  name.textContent = editNameInput.value;
  occupation.textContent = editOccupationInput.value;

  //Close popup by submit
  popupClose()
};
formEdit.addEventListener('submit', formEditSubmitHandler);

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

// Adding new cards

const addNameInput = formAdd.querySelector('#add-input-name');
const addLinkInput = formAdd.querySelector('#add-input-link');

// Saving input values
function formAddSubmitHandler(evt) {
  // Prevent page reload
  evt.preventDefault();
  // Adding new card


  const newCard = cardTemplate.querySelector('.element').cloneNode(true);
  const cardName = newCard.querySelector('.element__caption');
  const cardPhoto = newCard.querySelector('.element__photo');

  cardName.textContent = addNameInput.value
  cardPhoto.src = addLinkInput.value

  cardContainer.prepend(newCard);

  popupClose()
};
formAdd.addEventListener('submit', formAddSubmitHandler);


// Like button behavior
// const likes = document.querySelectorAll('.element__like');

// likes.forEach()

// for (let i = 0; i < elements.length; i++) {
//   elements[i].addEventListener('click', function() {
//     elements[i].classList.toggle('element__like_pressed');
//   });
// }

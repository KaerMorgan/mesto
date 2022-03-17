const popupEdit = document.querySelector('.popup_type-edit');
const popupAdd = document.querySelector('.popup_type-add');
const photoPreview = document.querySelector('.photo-view')

const addButton = document.querySelector('.profile__add-button')
const editButton = document.querySelector('.profile__edit-button');

const closeEditButton = popupEdit.querySelector('.popup__close')
const closeAddButton = popupAdd.querySelector('.popup__close')
const closePreviewButton = document.querySelector('.photo-view__close')

const name = document.querySelector('.profile__name');
const occupation = document.querySelector('.profile__occupation');

const formEdit = document.querySelector('.popup__form-edit')
const formAdd = document.querySelector('.popup__form-add')
const editNameInput = formEdit.querySelector('#edit-input-name');
const editOccupationInput = formEdit.querySelector('#edit-input-occupation');

// Photo-preview open/close
closePreviewButton.addEventListener('click', function() {
  photoPreview.classList.toggle('photo-view_opened')
})

// Popup open/close
editButton.addEventListener('click', function() {
  popupEdit.classList.toggle('popup_opened');

  editNameInput.value = name.textContent
  editOccupationInput.value = occupation.textContent
});

addButton.addEventListener('click', function() {
  popupAdd.classList.toggle('popup_opened');
});

function popupClose() {
  popupEdit.classList.remove('popup_opened');
  popupAdd.classList.remove('popup_opened');
  formEdit.classList.remove('popup__form_active')
  formAdd.classList.remove('popup__form_active')

  editNameInput.value = name.textContent
  editOccupationInput.value = occupation.textContent

  addNameInput.value = ''
  addLinkInput.value = ''
}
closeEditButton.addEventListener('click', popupClose);
closeAddButton.addEventListener('click', popupClose);

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
  const deleteButton = newCard.querySelector('.element__delete')

  // Adding preview function
  cardPhoto.addEventListener('click', function(evt) {
    photoPreview.classList.toggle('photo-view_opened');

    const photoPreviewImage = photoPreview.querySelector('.photo-view__image');
    const photoPreviewCaption = photoPreview.querySelector('.photo-view__caption');

    photoPreviewImage.src = evt.target.src
    photoPreviewCaption.textContent = cardName.textContent
  })

  // Delete card function
  deleteButton.addEventListener('click', function() {
    newCard.remove()
  });

  cardName.textContent = item.name;
  cardPhoto.src = item.link;

  cardContainer.append(newCard);
})


// Like button behavior
const likeButtons = document.querySelectorAll('.element__like');

likeButtons.forEach(function(item) {
  item.addEventListener('click', function() {
    item.classList.toggle('element__like_pressed');
  });
});

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
  const likeButton = newCard.querySelector('.element__like');
  const deleteButton = newCard.querySelector('.element__delete')

  // Adding preview function
  cardPhoto.addEventListener('click', function(evt) {
    photoPreview.classList.toggle('photo-view_opened');

    const photoPreviewImage = photoPreview.querySelector('.photo-view__image');
    const photoPreviewCaption = photoPreview.querySelector('.photo-view__caption');

    photoPreviewImage.src = evt.target.src
    photoPreviewCaption.textContent = cardName.textContent
  })

  // Add delete function on new card
  deleteButton.addEventListener('click', function() {
    newCard.remove()
  });
  cardName.textContent = addNameInput.value
  cardPhoto.src = addLinkInput.value

  cardContainer.prepend(newCard);

  // Add like button behavior on new card
  likeButton.addEventListener('click', function(evt) {
    evt.target.classList.toggle('element__like_pressed');
  })

  popupClose()
};
formAdd.addEventListener('submit', formAddSubmitHandler);

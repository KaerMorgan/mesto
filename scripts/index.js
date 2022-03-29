// Popup wrappers
const popupEdit = document.querySelector('.popup_type_edit');
const popupAdd = document.querySelector('.popup_type_add');
const photoPreview = document.querySelector('.photo-view')

// Popup initializers
const addButton = document.querySelector('.profile__add-button')
const editButton = document.querySelector('.profile__edit-button');

// Popup closers
const closeEditButton = popupEdit.querySelector('.popup__close')
const closeAddButton = popupAdd.querySelector('.popup__close')
const closePreviewButton = document.querySelector('.photo-view__close')

// Profile info
const name = document.querySelector('.profile__name');
const occupation = document.querySelector('.profile__occupation');

// Popup forms (to apply submit behavior)
const formEdit = document.querySelector('.popup__form_type_edit')
const formAdd = document.querySelector('.popup__form_type_add')

// Popup edit inputs
const editNameInput = formEdit.querySelector('#edit-input-name');
const editOccupationInput = formEdit.querySelector('#edit-input-occupation');

// Template creating variables
const cardTemplate = document.querySelector('#card').content;
const cardContainer = document.querySelector('.elements__grid');

// Popup add inputs
const addNameInput = formAdd.querySelector('#add-input-name');
const addLinkInput = formAdd.querySelector('#add-input-link');

// Photo popup variables
const photoPreviewImage = photoPreview.querySelector('.photo-view__image');
const photoPreviewCaption = photoPreview.querySelector('.photo-view__caption');

// variable
const cardData = {}


function openPopup(item) {
  item.classList.add('popup_opened');
}

function closePopup(item) {
  item.classList.remove('popup_opened');
}

function likeCard(evt) {
  evt.target.classList.toggle('element__like_pressed');
}

function deleteCard(evt) {
  evt.target.closest('.element').remove();
}

function previewCard(item) {
  photoPreviewImage.src = item.link;
  photoPreviewImage.alt = item.name;
  photoPreviewCaption.textContent = item.name;

  openPopup(photoPreview);
}

function createCard(item) {
  const newCard = cardTemplate.querySelector('.element').cloneNode(true);
  const cardName = newCard.querySelector('.element__caption');
  const cardPhoto = newCard.querySelector('.element__photo');
  const likeButton = newCard.querySelector('.element__like');
  const deleteButton = newCard.querySelector('.element__delete')

  cardPhoto.addEventListener('click', () => previewCard(item));
  likeButton.addEventListener('click', likeCard);
  deleteButton.addEventListener('click', deleteCard);

  cardName.textContent = item.name;
  cardPhoto.src = item.link;
  cardPhoto.alt = item.name;

  return newCard;
};

function renderCard(card) {
  cardContainer.prepend(createCard(card));
}

function formEditSubmitHandler(evt) {
  // Prevent page reload
  evt.preventDefault();

  // Data rewriting by submit
  name.textContent = editNameInput.value;
  occupation.textContent = editOccupationInput.value;

  //Close popup by submit
  closePopup(popupEdit)
};

function formAddSubmitHandler(evt) {
  evt.preventDefault();

  cardData.name = addNameInput.value;
  cardData.link = addLinkInput.value;

  renderCard(cardData);
  closePopup(popupAdd);
};

initialCards.forEach(function(item, index, array) {
  renderCard(item)
});

// // Closing popup by click on wrapper feature
// document.addEventListener('click', (evt) => {
//   if (evt.target === popup) {
//     popup.classList.remove('popup_opened');
//   }
// });

editButton.addEventListener('click', function() {
  // Clear inputs
  editNameInput.value = name.textContent
  editOccupationInput.value = occupation.textContent

  openPopup(popupEdit);
});

addButton.addEventListener('click', function() {
  // Clear inputs
  addNameInput.value = ''
  addLinkInput.value = ''

  openPopup(popupAdd);
});

closeEditButton.addEventListener('click', () => closePopup(popupEdit));

closeAddButton.addEventListener('click', () => closePopup(popupAdd));

closePreviewButton.addEventListener('click', () => closePopup(photoPreview));

formEdit.addEventListener('submit', formEditSubmitHandler);

formAdd.addEventListener('submit', formAddSubmitHandler);

///// переменные ////////////////////////////////////////////////////////////////
const popupEdit = document.querySelector('.popup_type_edit');
const popupAdd = document.querySelector('.popup_type_add');
const photoPreview = document.querySelector('.photo-view')

const addButton = document.querySelector('.profile__add-button')
const editButton = document.querySelector('.profile__edit-button');

const closeEditButton = popupEdit.querySelector('.popup__close')
const closeAddButton = popupAdd.querySelector('.popup__close')
const closePreviewButton = document.querySelector('.photo-view__close')

const name = document.querySelector('.profile__name');
const occupation = document.querySelector('.profile__occupation');

const formEdit = document.querySelector('.popup__form_type_edit')
const formAdd = document.querySelector('.popup__form_type_add')
const editNameInput = formEdit.querySelector('#edit-input-name');
const editOccupationInput = formEdit.querySelector('#edit-input-occupation');

// Template creating variables
const cardTemplate = document.querySelector('#card').content;
const cardContainer = document.querySelector('.elements__grid');

// Adding new cards
const addNameInput = formAdd.querySelector('#add-input-name');
const addLinkInput = formAdd.querySelector('#add-input-link');








/// функции ////////////////////////////////////////////////////////////////

function openPopup(item) {
  editNameInput.value = name.textContent
  editOccupationInput.value = occupation.textContent

  item.classList.add('popup_opened');
}

function closePopup(item) {
  item.classList.remove('popup_opened');
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

function likeCard(evt) {
  evt.target.classList.toggle('element__like_pressed');
}

// function deleteCard(evt) {
//   evt.target.closest('.element').remove();
// }

// function previewCard(evt) {

//   const photoPreviewImage = photoPreview.querySelector('.photo-view__image');
//   const photoPreviewCaption = photoPreview.querySelector('.photo-view__caption');

//   photoPreviewImage.src = evt.target.src;
//   photoPreviewImage.alt = cardName.textContent;
//   photoPreviewCaption.textContent = cardName.textContent;

//   openPopup(photoPreview);
// }

function createCard(item) {
  const newCard = cardTemplate.querySelector('.element').cloneNode(true);
  const cardName = newCard.querySelector('.element__caption');
  const cardPhoto = newCard.querySelector('.element__photo');
  const likeButton = newCard.querySelector('.element__like');
  const deleteButton = newCard.querySelector('.element__delete')

  // cardPhoto.addEventListener('click', previewCard);

  likeButton.addEventListener('click', likeCard);

  // deleteButton.addEventListener('click', deleteCard);

  cardName.textContent = item.name;
  cardPhoto.src = item.link;
  cardPhoto.alt = item.name;

  return newCard;
};

function renderCard(card) {
  cardContainer.append(card);

}




// function formAddSubmitHandler(evt) {
//   evt.preventDefault();

//   cardName.textContent = addNameInput.value
//   cardPhoto.src = addLinkInput.value

//   closePopup(popupAdd)
// };

initialCards.forEach(function(item, index, array) {

  renderCard(createCard(item))

});

///// обработчики ////////////////////////////////////////////////////////////////
editButton.addEventListener('click', function() {
  openPopup(popupEdit);
});

addButton.addEventListener('click', function() {
  openPopup(popupAdd);
});

closeEditButton.addEventListener('click', function() {
  closePopup(popupEdit);
});

closeAddButton.addEventListener('click', function() {
  closePopup(popupAdd);
});

// Photo-preview open/close
closePreviewButton.addEventListener('click', function() {
  closePopup(photoPreview);
});

formEdit.addEventListener('submit', formEditSubmitHandler);

// formAdd.addEventListener('submit', formAddSubmitHandler);

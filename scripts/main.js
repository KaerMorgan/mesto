// Photo-preview open/close
// closePreviewButton.addEventListener('click', function() {
//   photoPreview.classList.toggle('photo-view_opened')
// })

// function popupClose() {
//   popupEdit.classList.remove('popup_opened');
//   popupAdd.classList.remove('popup_opened');
//   formEdit.classList.remove('popup__form_active')
//   formAdd.classList.remove('popup__form_active')

//   editNameInput.value = name.textContent
//   editOccupationInput.value = occupation.textContent

//   addNameInput.value = ''
//   addLinkInput.value = ''
// }
// closeEditButton.addEventListener('click', popupClose);
// closeAddButton.addEventListener('click', popupClose);

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


likeButtons.forEach(function(item) {
  item.addEventListener('click', function() {
    item.classList.toggle('element__like_pressed');
  });
});

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

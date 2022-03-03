let popup = document.querySelector('.popup');
let editButton = document.querySelector('.profile-info__edit-button');
let closeButton = document.querySelector('.popup__close')

let name = document.querySelector('.profile-info__name');
let occupation = document.querySelector('.profile-info__occupation');

let formElement = document.querySelector('.popup__form');
let nameInput = formElement.querySelector('#popup__input-name');
let occupationInput = formElement.querySelector('#popup__input-occupation');

// открытие по кнопке
function popupOpen() {
  popup.classList.add('popup_opened');

  nameInput.value = name.textContent
  occupationInput.value = occupation.textContent
}
editButton.addEventListener('click', popupOpen);

// закрытие по кнопке
function popupClose() {
  popup.classList.remove('popup_opened');

  // стираем введённые символы при закрытии
  nameInput.value = name.textContent;
  occupationInput.value = occupation.textContent;
}
closeButton.addEventListener('click', popupClose);

// закрытие попапа по клику на обложку игнорирующее всплытие до формы (не относится к заданию)
// document.addEventListener('click', (e) => {
//   if (e.target === popup) {
//     popup.classList.remove('popup_opened');
//   }
// });


// сохранение введённых данных
function formSubmitHandler(evt) {
  // отменяем перезагрузку страницы
  evt.preventDefault();

  // перезаписываем данные из инпутов при нажатии
  name.textContent = nameInput.value;
  occupation.textContent = occupationInput.value;

  popupClose()
};
formElement.addEventListener('submit', formSubmitHandler);


// изменение состояния картинки лайка при нажатии
let elements = document.querySelectorAll('.element__like');

elements.forEach(function(item) {
  item.addEventListener('click', function() {
    item.classList.toggle('element__like_pressed');
  });
});

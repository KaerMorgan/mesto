let popup = document.querySelector('.popup');
let editButton = document.querySelector('.profile__edit-button');
let closeButton = document.querySelector('.popup__close')

let name = document.querySelector('.profile__name');
let occupation = document.querySelector('.profile__occupation');

let formElement = document.querySelector('.popup__form');
let nameInput = formElement.querySelector('#popup__input-name');
let occupationInput = formElement.querySelector('#popup__input-occupation');

// открытие и закрытие по кнопке
function popupOpen() {
  popup.classList.toggle('popup_opened');

  nameInput.value = name.textContent
  occupationInput.value = occupation.textContent
}
editButton.addEventListener('click', popupOpen);
closeButton.addEventListener('click', popupOpen);

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

  //закрываем по нажатию на кнопку "сохранить"
  popupOpen()
};
formElement.addEventListener('submit', formSubmitHandler);

// Изменение состояния лайка при нажати,
// воспользовался перебором через forEach чтобы не писать 8 переменных и слушателей.
let elements = document.querySelectorAll('.element__like');

elements.forEach(function(item) {
  item.addEventListener('click', function() {
    item.classList.toggle('element__like_pressed');
  });
});

Токен: 1eb86aa4-a0d2-4f05-8adf-01200df0c7d3
Идентификатор группы: cohort-41

fetch('https://mesto.nomoreparties.co/v1/cohort-41/cards', {
  headers: {
    authorization: '1eb86aa4-a0d2-4f05-8adf-01200df0c7d3'
  }
})
  .then(res => res.json())
  .then((result) => {
    console.log(result);
  }); 
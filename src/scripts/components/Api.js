export default class Api {
  constructor(config) {
    this._url = config.url
    this._headers = config.headers
  }

  _checkErorr(res) {
    if (res.ok) {
      return res.json()
    }
    return Promise.reject('Ошибка');
  }

  // GET
  _getCardList() {
    return fetch(`${this._url}cards`, {
        method: 'GET',
        headers: this._headers
      })
      .then(this._checkErorr)
      .catch(err => console.log(err))
  }

  // POST
  _addCard(cardData) {
    return fetch(`${this._url}cards`, {
        method: 'GET',
        headers: this._headers,
        body: JSON.stringify(cardData)
      }).then(this._checkErorr)
      .catch(err => console.log(err))
  }

  // DELETE
  _deleteCard() {

  }

  // GET
  // _getUserInfo() {
  //   fetch(`${this._url}users/me`, {
  //       method: 'GET',
  //       headers: this._headers
  //     })
  //     .then(this._checkErorr)
  //     .then(result => console.log(result))
  //     .catch(err => console.log(err))
  // }

  // PATCH
  // _changeUserInfo() {
  //   fetch(`${this._url}users/me`, {
  //       method: 'GET',
  //       headers: this._headers
  //     })
  //     .then(this._checkErorr)
  //     .then(result => console.log(result))
  //     .catch(err => console.log(err))
  // }

  // PATCH
  _changeAvatar() {

  }

  // PUT
  _likeCard() {

  }

  // DELETE
  _removeLike() {

  }
}
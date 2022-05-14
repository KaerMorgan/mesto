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
        method: 'POST',
        headers: {
          authorization: '1eb86aa4-a0d2-4f05-8adf-01200df0c7d3',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(cardData)
      }).then(this._checkErorr)
      .catch(err => console.log(err))
  }

  // DELETE cards/cardId
  _deleteCard(id) {
    return fetch(`${this._url}cards/${id}`, {
        method: 'DELETE',
        headers: {
          authorization: '1eb86aa4-a0d2-4f05-8adf-01200df0c7d3',
        },
      }).then(this._checkErorr)
      .catch(err => console.log(err))
  }

  // GET
  _getUserInfo() {
    return fetch(`${this._url}users/me`, {
        method: 'GET',
        headers: this._headers
      })
      .then(this._checkErorr)
      .then(result => console.log(result))
      .catch(err => console.log(err))
  }

  // PATCH
  _changeUserInfo(userData) {
    return fetch(`${this._url}users/me`, {
        method: 'GET',
        headers: {
          authorization: '1eb86aa4-a0d2-4f05-8adf-01200df0c7d3',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      })
      .then(this._checkErorr)
      .then(result => console.log(result))
      .catch(err => console.log(err))
  }

  // PATCH
  _changeAvatar(avatar) {
    return fetch(`${this._url}users/me/avatar`, {
        method: 'PATCH',
        headers: {
          authorization: '1eb86aa4-a0d2-4f05-8adf-01200df0c7d3',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(avatar)
      }).then(this._checkErorr)
      .catch(err => console.log(err))
  }

  // PUT
  _likeCard(id) {
    return fetch(`${this._url}cards/${id}/likes`, {
        method: 'PUT',
        headers: {
          authorization: '1eb86aa4-a0d2-4f05-8adf-01200df0c7d3',
        },
      }).then(this._checkErorr)
      .catch(err => console.log(err))
  }

  // DELETE
  _removeLike() {
    return fetch(`${this._url}cards/${id}/likes`, {
        method: 'DELETE',
        headers: {
          authorization: '1eb86aa4-a0d2-4f05-8adf-01200df0c7d3',
        },
      }).then(this._checkErorr)
      .catch(err => console.log(err))
  }
}

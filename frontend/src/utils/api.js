class Api {
    constructor(options) {
        this._url = options.baseUrl;
        // this._headers = options.headers;
        // this._authorization = options.headers.authorization;
    }

    // _checkResponse(res) {return res.ok ? res.json() : Promise.reject}
    _checkResponse(res) {
        return res.ok ? res.json() : Promise.reject(`${res.status} ${res.statusText}`)
      }

    getInfo(token) {
        return fetch(`${this._url}/users/me`, {
            headers: {
                "Authorization" : `Bearer ${token}`
            }
        })
        .then(this._checkResponse)
    }

    getCards(token) {
        return fetch(`${this._url}/cards`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        .then(this._checkResponse)
    }

    setUserInfo(data, token) {
        return fetch(`${this._url}/users/me`, {
            method: 'PATCH', 
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({
                name:data.username,
                about:data.description,
            })
        })
        .then(this._checkResponse)
    }

    setNewAvatar(data, token) {
        return fetch(`${this._url}/users/me/avatar`, {
            method: 'PATCH', 
            headers: {
                "Content-Type" : "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({
                avatar: data.avatar,
            })
        })
        .then(this._checkResponse)
    }

    addNewCard(data, token) {
        return fetch(`${this._url}/cards`, {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({
                name:data.name,
                link:data.link,
            })
        })
        .then(this._checkResponse)
    }

    deleteCard(cardId, token) {
        return fetch(`${this._url}/cards/${cardId}`, {
            method: 'DELETE', 
            headers: {
                "Authorization": `Bearer ${token}`
            },
        })
        .then(this._checkResponse)
    }

    addCardLike(cardId, token) {
        return fetch(`${this._url}/cards/${cardId}/likes`, {
            method: 'PUT', 
            headers: {
                "Authorization": `Bearer ${token}`
            },
        })
        .then(this._checkResponse)
    }

    deleteLike(cardId, token) {
        return fetch(`${this._url}/cards/${cardId}/likes`, {
            method: 'DELETE', 
            headers: {
                "Authorization": `Bearer ${token}`
            },
        })
        .then(this._checkResponse)
    }
};

const api = new Api({
    // baseUrl: 'http://localhost:3000',
    baseUrl: 'https://api.mesto.grechkin.nomoredomainsicu.ru',
  });

  export default api; 
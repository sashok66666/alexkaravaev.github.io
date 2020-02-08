import {root,openButton,editButton,Card} from './card';
import {placelist,createCard,CardList} from './cardList';
import {editPopup,addNewCard,createImage,Popup,ProfileEditPopup,NewPlacePopup,ImagePopup} from './popup';
class Api {
  constructor(options, getUserInfo, render) {
    this.options = options;
    this.render = render;
    this.getUserInfo = getUserInfo;
  }

  getProfileInfo() {
    fetch(`${this.options.baseUrl + '/users/me'}`, {
      headers: {
        authorization: this.options.headers.authorization
      }
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .then((result) => {
        this.getUserInfo(result.name, result.about)
      })
      .catch((err) => {
        console.log(err);
      });
  }

  editProfile(name, about) {
    const getProfileInfo = this.getProfileInfo.bind(this);
    fetch(`${this.options.baseUrl + '/users/me'}`, {
      method: 'PATCH',
      headers: {
        authorization: this.options.headers.authorization,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        about: about
      })
    })
    .then(res => {
      if (res.ok) {
        return getProfileInfo();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
    .catch((err) => {
      console.log(err);
    }); 
  }

  getInitialCards() {
    fetch(`${this.options.baseUrl + '/cards'}`, {
      headers: {
        authorization: this.options.headers.authorization
      }
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .then((result) => {
        this.render(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

const renderCards = (cards) => placelist.render(cards);
const api = new Api({
  baseUrl: 'http://95.216.175.5/cohort6',
  headers: {
    authorization: 'ddc8dc74-2c41-47a9-8f3f-dae3c1869236',
    'Content-Type': 'application/json'
  }
}, editPopup, renderCards);


api.getProfileInfo();
api.getInitialCards();


const apiEditProfile = (name, about) => api.editProfile(name, about);
const getProfileInfo = () => api.getProfileInfo();








export {Api,apiEditProfile,getProfileInfo};

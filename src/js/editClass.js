import {editPopup,createImage,addNewCard,Popup,ProfileEditPopup,NewPlacePopup,ImagePopup} from './popup';
import {Api,apiEditProfile,getProfileInfo} from './api'

const editProfile = new ProfileEditPopup(document.querySelector('.popup-profile'), getProfileInfo, apiEditProfile);
const newPlace = new NewPlacePopup(document.querySelector('.popup-newplace'), addNewCard);
const imagePopup = new ImagePopup(document.querySelector('.popup-image'));

const createImg = (link) => {
    imagePopup.submitHandler(link);
    imagePopup.open()
  }
  
export {createImg,editProfile,newPlace,imagePopup};
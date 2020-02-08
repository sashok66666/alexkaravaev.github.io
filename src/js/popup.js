import {root,openButton,editButton,Card} from './card';
import {placelist,createCard,CardList} from './cardList';
/*import { imagePopup } from './editClass';*/


class Popup {
  constructor(element){
      this.element = element;
      this.close = this.close.bind(this);
  }
  open(){
      this.element.classList.add('popup_is-opened');
      this.element.querySelector('.popup__close').addEventListener('click',this.close);
  }
  close(){
      this.element.classList.remove('popup_is-opened');
      this.element.querySelector('.popup__close').removeEventListener('click',this.close);
  }
}

class ProfileEditPopup extends Popup { 
  constructor(element, saveProfileCallback, setProfileInfo) { 
    super(element);  
    this.setProfileInfo = setProfileInfo;
    this.saveProfileCallback = saveProfileCallback; 
    this.submitHandler = this.submitHandler.bind(this);   
    this.element.querySelector('form').addEventListener('submit', this.submitHandler);
  }
  open(name, job) {
    this.element.querySelector('[name="name"]').value = name ;
    this.element.querySelector('[name="link"]').value = job;
    super.open(); 
  }
  submitHandler(event) {
    event.preventDefault();
    this.setProfileInfo(
      this.element.querySelector('[name="name"]').value,
      this.element.querySelector('[name="link"]').value,
    );
    super.close(); 
  }
}

class NewPlacePopup extends Popup { 
  constructor(element, editNewCard) { 
    super(element);  
    this.editNewCard = editNewCard;
    this.submitHandler = this.submitHandler.bind(this);
    this.element.querySelector('form').addEventListener('submit', this.submitHandler);
  }
  submitHandler(event) {
    event.preventDefault();
    this.editNewCard(
      this.element.querySelector('[name="name"]').value,
      this.element.querySelector('[name="link"]').value,
    );
    super.close(); 
    this.element.querySelector('form').reset();  
  }
}

class ImagePopup extends Popup {
  submitHandler(link) {
    this.element.querySelector('.popup__bg').setAttribute('src',link)
  }
}


const editPopup = (name, job) => {
  root.querySelector('.user-info__name').textContent = name;
  root.querySelector('.user-info__job').textContent = job;
}
const addNewCard = (name,link) => placelist.addCard(name,link);



export {editPopup,addNewCard,Popup,ProfileEditPopup,NewPlacePopup,ImagePopup};


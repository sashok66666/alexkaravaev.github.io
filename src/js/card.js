import {createImg,imagePopup} from './editClass';

const root = document.querySelector('.root');
const openButton = root.querySelector('.user-info__button');
const editButton = root.querySelector('.user-info__edit-button');

console.log(createImg)

class Card {
  constructor(name, link) {
    this.cardElement = this.create(name, link);
    this.remove = this.remove.bind(this);
    this.like = this.like.bind(this);
    this.image = this.image.bind(this);
    this.link = link;
    this.addHandlers();
  }

  create(name, link) {
    const placeCard = document.createElement("div");
    placeCard.classList.add("place-card");
    placeCard.innerHTML = `
        <div class="place-card__image">
          <button class="place-card__delete-icon"></button>
        </div>
        <div class="place-card__description">
          <h3 class="place-card__name"></h3>
          <button class="place-card__like-icon"></button>
        </div>`;
    placeCard.querySelector(".place-card__name").textContent = name;
    placeCard.querySelector(".place-card__image").style.backgroundImage = `url(${link})`;
    return placeCard;
  }

  like() {
    this.cardElement.querySelector('.place-card__like-icon').classList.toggle('place-card__like-icon_liked');
  }

  remove(event) {
    event.stopPropagation();
    this.cardElement.parentNode.removeChild(this.cardElement);
    this.cardElement.querySelector('.place-card__delete-icon').removeEventListener('click', this.remove);
    this.cardElement.querySelector('.place-card__image').removeEventListener('click', this.image);
    this.cardElement.querySelector('.place-card__like-icon').removeEventListener('click', this.like);
  }

  image() {
    createImg(this.link);
  }

  addHandlers() {
    this.cardElement.querySelector('.place-card__delete-icon').addEventListener('click', this.remove);
    this.cardElement.querySelector('.place-card__image').addEventListener('click', this.image);
    this.cardElement.querySelector('.place-card__like-icon').addEventListener('click', this.like);
  }
}

 export {root,openButton,editButton,Card};

 
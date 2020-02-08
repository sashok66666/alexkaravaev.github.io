import {root,openButton,editButton,Card} from './card';

const createCard = (...arg) => new Card(...arg);

class CardList {
  constructor(container, createCard) {
    this.container = container;
    this.createCard = createCard;
  }
  render(defaultCards) {
    const addCard = this.addCard.bind(this);

    defaultCards.forEach(function (item) {
      const name = item.name;
      const link = item.link;
      return addCard(name, link);
    })
  }
  addCard(name, link) {
    const { cardElement } = this.createCard(name, link);
    this.container.appendChild(cardElement);
  }
}

const placelist = new CardList(document.querySelector('.places-list'), createCard);

export {placelist,createCard,CardList};


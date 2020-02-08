import {root,openButton,editButton,Card} from './card';
import {placelist,createCard,CardList} from './cardList';
import {editProfile,newPlace,imagePopup} from './editClass';

function inputHandler() {
    const name = this.element.querySelector('[name="name"]');
    const link = this.element.querySelector('[name="link"]'); 
    const hasName = name.value.length >= 2;
    const hasLink = link.value.length >= 2;
    if (hasName && hasLink) {
        this.element.querySelector('.popup__button').removeAttribute('disabled');
        this.element.querySelector('.popup__button').classList.remove('popup__button_disabled');
    } else {
        this.element.querySelector('.popup__button').setAttribute('disabled', '');
        this.element.querySelector('.popup__button').classList.add('popup__button_disabled');
    }
};


function validityForm(event) {
    const target = event.target;
    const error = event.target.nextElementSibling;
    if (target.validity.valueMissing && !target.validity.valid) {
        error.textContent = 'Это обязательное поле';
    } else if (!target.validity.valueMissing && !target.validity.valid) {
        error.textContent = 'Должно быть от 2 до 30 символов';
    } else if (!target.validity.valueMissing && target.validity.valid) {
        error.textContent = '';
    }
};

function resetError() {
    const error = this.element.querySelectorAll('.error');
    error.forEach(function (item) {
        item.textContent = '';
    });
};

const newPlaceHandler = inputHandler.bind(newPlace);
const validityNewPlace = validityForm.bind(newPlace);
const resetErrorNewPlace = resetError.bind(newPlace);
const editProfileHandler = inputHandler.bind(editProfile);
const validityEditProfile = validityForm.bind(editProfile);
const resetErrorEditProfile = resetError.bind(editProfile);


newPlace.element.querySelector('form').addEventListener('input', newPlaceHandler);
newPlace.element.querySelector('form').addEventListener('input', validityNewPlace);
newPlace.element.querySelector('.popup__close').addEventListener('click', resetErrorNewPlace);
editProfile.element.querySelector('form').addEventListener('input', editProfileHandler);
editProfile.element.querySelector('form').addEventListener('input', validityEditProfile);
editProfile.element.querySelector('.popup__close').addEventListener('click', resetErrorEditProfile);
editButton.addEventListener('click', function () {
    const name = root.querySelector('.user-info__name').textContent;
    const job = root.querySelector('.user-info__job').textContent;
    editProfile.open(name, job);
    editProfileHandler();
});

openButton.addEventListener('click', function (event) {
    newPlace.open();
    newPlaceHandler();
})
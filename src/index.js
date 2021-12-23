import './sass/main.scss';
import { creatMarkup } from './js/create-markup';
import { getFormData } from './js/get-form-data';

import users from './db.json';

export const refs = {
  ul: document.querySelector('.users-list'),
  form: document.querySelector('.form'),
  buttonForm: document.querySelector('.form__button'),
  inputsForm: document.querySelectorAll('.form__input'),
  buttonContact: '',
};

const arrMarkupRef = users.map(creatMarkup).join('');
console.log(arrMarkupRef);
refs.ul.insertAdjacentHTML('afterbegin', arrMarkupRef);

refs.form.addEventListener('submit', getFormData);

refs.buttonContact = document.querySelectorAll('.users-list__button');

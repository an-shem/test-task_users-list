import './sass/main.scss';
import { creatMarkup } from './js/markup/create-markup';
import { getFormData } from './js/get-form-data';
import { btnClickHandler } from './js/btn-click-handler';

import users from './db.json';

export const refs = {
  ul: document.querySelector('.users-list'),
  form: document.querySelector('.form'),
  buttonForm: document.querySelector('.form__button'),
  inputsForm: document.querySelectorAll('.form__input'),
  buttonsContact: '',
};

const arrMarkupRef = users.map(creatMarkup).join('');
refs.ul.insertAdjacentHTML('afterbegin', arrMarkupRef);

refs.form.addEventListener('submit', getFormData);
refs.ul.addEventListener('click', btnClickHandler);

refs.buttonsContact = document.querySelectorAll('.button');

import { refs } from '../index';
import { creatMarkup } from './markup/create-markup';
import { blockForm } from './block-form';
import { unblockForm } from './unblock-form';

export const addNewContact = contact => {
  blockForm();
  // При работе с базой данных тот же код, но без setTimeout
  setTimeout(() => {
    refs.ul.insertAdjacentHTML('afterbegin', creatMarkup(contact));
    refs.buttonsContact = document.querySelectorAll('.button');
    unblockForm();
  }, 2000);
};

import { refs } from '../index';
import { creatMarkup } from './create-markup';
import { blockForm } from './block-form';
import { unblockForm } from './unblock-form';

export const addNewContact = contact => {
  blockForm();
  setTimeout(() => {
    refs.ul.insertAdjacentHTML('afterbegin', creatMarkup(contact));
    refs.buttonsContact = document.querySelectorAll('.users-list__button');
    unblockForm();
  }, 2000);
};

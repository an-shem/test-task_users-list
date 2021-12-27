import { refs } from '..';
import { unblockForm } from './unblock-form';
import { createEditedMarkup } from './markup/create-edited-markup';

export const updateContact = (e, id, elem) => {
  const name = e.target.name.value;
  const number = e.target.number.value;

  setTimeout(() => {
    elem.innerHTML = createEditedMarkup({ name, number, id });
    refs.buttonsContact = document.querySelectorAll('.button');
    unblockForm();
  }, 2000);
};

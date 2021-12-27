import { refs } from '..';
import { blockForm } from './block-form';
import { creatingElementEditMarkup } from './element-edit-markup';
import { updateContact } from './update-contact';

export const btnClickHandler = e => {
  const name = e.target.name;
  const dataId = e.target.dataset.id;

  if (name === 'delete') {
    const deletedContact = document.getElementById(`${dataId}`);
    deletedContact.remove();
  }

  if (name === 'edit') {
    const editableElement = document.getElementById(`${dataId}`);
    const name = editableElement.firstElementChild.firstElementChild.textContent;
    const number = editableElement.firstElementChild.lastElementChild.textContent;

    editableElement.innerHTML = creatingElementEditMarkup({ name, number });
    const formEditRef = document.querySelector('.form-edit');
    const btnClearRef = document.querySelector('.clear');

    btnClearRef.addEventListener('click', () => {
      formEditRef.firstElementChild.firstElementChild.value = '';
      formEditRef.firstElementChild.lastElementChild.value = '';
    });

    blockForm();

    formEditRef.addEventListener('submit', e => {
      e.preventDefault();
      refs.buttonsContact = document.querySelectorAll('.users-list__button');
      blockForm();
      updateContact(e, dataId, editableElement);
    });
  }
};

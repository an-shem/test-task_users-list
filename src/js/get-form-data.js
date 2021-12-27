import { creatContact } from './create-contact';
import { addNewContact } from './add-new-contact';

export const getFormData = e => {
  e.preventDefault();
  console.log(e);
  const name = e.target.name.value;
  const number = e.target.number.value;
  e.target.reset();
  addNewContact(creatContact({ name, number }));
};

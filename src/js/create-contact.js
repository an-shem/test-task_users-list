import { nanoid } from 'nanoid';

export const creatContact = ({ name, number }) => {
  const newContact = {
    id: nanoid(),
    name,
    number,
  };

  return newContact;
};

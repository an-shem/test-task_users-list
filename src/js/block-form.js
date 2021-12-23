import { refs } from '../index';

export const blockForm = () => {
  refs.buttonForm.setAttribute('disabled', 'true');
  [...refs.inputsForm].map(input => input.setAttribute('disabled', 'true'));
  [...refs.buttonContact].map(button => button.setAttribute('disabled', 'true'));
};

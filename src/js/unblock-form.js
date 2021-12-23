import { refs } from '../index';

export const unblockForm = () => {
  refs.buttonForm.removeAttribute('disabled');
  [...refs.inputsForm].map(input => input.removeAttribute('disabled'));
  [...refs.buttonsContact].map(button => button.removeAttribute('disabled'));
};

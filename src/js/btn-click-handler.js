export const btnClickHandler = e => {
  console.log('btnClickHandler', e.target.name);
  console.log('btnClickHandler', e.target.dataset.id);
  console.log('btnClickHandler', e.currentTarget);
  const name = e.target.name;
  const dataId = e.target.dataset.id;

  if (name === 'delete') {
    const deletedContact = e.currentTarget.querySelector(`#${dataId}`);
    console.log('deletedContact >>>', deletedContact);
    deletedContact.remove();
  }
  if (name === 'edit') {
  }
};

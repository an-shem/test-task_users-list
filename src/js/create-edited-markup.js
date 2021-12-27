export const createEditedMarkup = ({ name, number, id }) => {
  return `
   <div class="users-list__text">
  <span class="users-list__name">${name}</span>
  <a class="users-list__phone-link" href="tel:${number}"
  ><span class="users-list__phone-text">${number}</span></a>
  </div>
  <div class="users-list__buttons">
  <button data-id=${id} name="delete" class="users-list__button delete" type="button">Удалить</button>
  </div>
   `;
};

import { nanoid } from 'nanoid';

export const creatMarkup = ({ name, number }) => {
  const id = nanoid();
  return `
  <li id=${id} class="users-list__item">
  <div class="users-list__text">
  <span class="users-list__name">${name}</span>
  <a class="users-list__phone-link" href="tel:${number}"
  ><span class="users-list__phone-text">${number}</span></a>
  </div>
  <div class="users-list__buttons">
  <button data-id=${id} name="edit" class="users-list__button edit" type="button">Редактировать</button>
  <button data-id=${id} name="delete" class="users-list__button delete" type="button">Удалить</button>
  </div>
  </li>
  `;
};

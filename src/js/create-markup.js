export const creatMarkup = ({ name, number }) => {
  return `
  <li class="users-list__item">
  <div class="users-list__text">
  <span class="users-list__name">${name}</span>
  <a class="users-list__phone-link" href="tel:${number}"
  ><span class="users-list__phone-text">${number}</span></a>
  </div>
  <div class="users-list__buttons">
  <button class="users-list__button edit" type="button">Редактировать</button>
  <button class="users-list__button delete" type="button">Удалить</button>
  </div>
  </li>
  `;
};

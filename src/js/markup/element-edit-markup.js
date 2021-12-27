export const creatingElementEditMarkup = ({ name, number }) => {
  return `
    <form class="form-edit" autocomplete="off">
          <div class="form-edit__input-wrapper">
            <input
              class="form-edit__input"
              type="text"
              name="name"
              value=${name}
              pattern="\^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$\"
              title="Имя может содержать только буквы, апостроф, тире и пробелы. Например Адриан, Якоб Мерсер, Шарль де Батц де Кастельмор д'Артаньян."
              required
            />
          
           <input
              class="form-edit__input"
              type="tel"
              name="number"
              value=${number}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять из цифр и может содержать пробелы, дефисы, круглые скобки и может начинаться с +."
              required
            />
        </div>
         
            <div class="users-list__buttons">
            <button name="save" class="button button__save"  type="submit" ">Сохранить</button>
            <button name="clear" class="button button__clear" type="button">Очистить</button>
            </div>
            </form>
  `;
};

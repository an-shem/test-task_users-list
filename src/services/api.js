import axios from 'axios';
const BASE_URL = 'https://qwqwqwqwqwqqw/api/v1';

const getAllContacts = async () => {
  const contacts = await axios.get(`${BASE_URL}/contacts`).then(({ data }) => data);
  return contacts;
};

const addContact = async contact => {
  const createdContact = await axios
    .post(`${BASE_URL}/contacts`, {
      data: contact,
    })
    .then(({ data }) => data);
  return createdContact;
};

const updateContact = async (contactId, data) => {
  const updatedContact = await axios
    .patch(`${BASE_URL}/contacts/${contactId}`, {
      data,
    })
    .then(({ data }) => data);
  return updatedContact;
};

const deleteContact = async contactId => {
  const RemoteContact = await axios
    .delete(`${BASE_URL}/contacts/${contactId}`)
    .then(({ data }) => data);
  return RemoteContact;
};

export default {
  getAllContacts,
  addContact,
  updateContact,
  deleteContact,
};

import axios from 'axios';

const instanceContacts = axios.create({
  baseURL: 'https://635a759438725a1746c6b6b3.mockapi.io/contacts',
  params: {
    _limit: 12,
  },
});

export const getContacts = async () => {
  const { data } = await instanceContacts.get('/');
  return data;
};

export const addContact = async data => {
  const { data: result } = await instanceContacts.post('/', data);
  return result;
};

export const removeContact = async id => {
  const { data } = await instanceContacts.delete(`/${id}`);
  return data;
};

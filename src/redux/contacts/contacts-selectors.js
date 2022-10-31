export const getContacts = ({ contacts }) => contacts.items;
export const getState = ({ contacts }) => ({
  isLoading: contacts.isLoading,
  error: contacts.error,
});
export const getFilteredContacts = ({ filter, contacts }) => {
  if (!filter) {
    return contacts.items;
  }
  const normalizedFilter = filter.toLocaleLowerCase();

  const filteredContacts = contacts.items.filter(({ name }) => {
    const normalizedName = name.toLocaleLowerCase();
    const result = normalizedName.includes(normalizedFilter);
    return result;
  });
  return filteredContacts;
};

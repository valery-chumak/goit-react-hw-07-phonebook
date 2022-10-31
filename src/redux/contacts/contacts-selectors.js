export const selectContacts = ({ contacts }) => contacts.items;
export const selectState = ({ contacts }) => ({
  isLoading: contacts.isLoading,
  error: contacts.error,
});
export const selectFilteredContacts = ({ filter, contacts }) => {
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

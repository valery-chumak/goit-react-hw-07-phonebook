import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  removeContact,
} from './contacts-operations';
import { pendingCallback, rejectedCallback } from 'shared/helpers/redux';
const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchContacts.pending]: pendingCallback,
    [fetchContacts.fulfilled]: (store, { payload }) => {
      store.isLoading = false;
      store.items = payload;
    },
    [fetchContacts.rejected]: rejectedCallback,
    [addContact.pending]: pendingCallback,
    [addContact.fulfilled]: (store, { payload }) => {
      store.isLoading = false;
      store.items.push(payload);
    },
    [addContact.rejected]: rejectedCallback,
    [removeContact.pending]: pendingCallback,
    [removeContact.fulfilled]: (store, { payload }) => {
      store.isLoading = false;
      store.items = store.items.filter(item => item.id !== payload);
    },
    [removeContact.rejected]: rejectedCallback,
  },
});
export default contactsSlice.reducer;

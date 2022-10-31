import { configureStore } from '@reduxjs/toolkit';

// reducers
import contactsReducer from './contacts/contacts-slice';
import filterReducer from './filter/filter-slice';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});

export default store;

import { useSelector, useDispatch } from 'react-redux';
import React from 'react';
import { useEffect } from 'react';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Loader from './Loader/Loader';
import Section from './Section/Section';
import css from '../components/ContactForm/ContactForm.module.css';
import {
  fetchContacts,
  addContact,
  removeContact,
} from 'redux/contacts/contacts-operations';
import { setFilter } from 'redux/filter/filter-slice';
import { selectFilter } from 'redux/filter/filter-selectors';
import {
  selectFilteredContacts,
  selectState,
} from 'redux/contacts/contacts-selectors';

export default function App() {
  const contacts = useSelector(selectFilteredContacts);
  const filter = useSelector(selectFilter);
  const { isLoading, error } = useSelector(selectState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleInputChange = event => {
    const { value } = event.target;
    dispatch(setFilter(value));
  };

  const onAddContact = contact => {
    const action = addContact(contact);
    dispatch(action);
  };

  const onRemoveContact = id => {
    const action = removeContact(id);
    dispatch(action);
  };

  return (
    <>
      <Section title="Phonebook">
        <ContactForm onSubmit={onAddContact} />
      </Section>
      <Section title="Contacts">
        <label className={css.block}>
          Find contacts by name
          <input
            type="text"
            name="filter"
            value={filter}
            placeholder="Enter the name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            required
            onChange={handleInputChange}
          />
        </label>
        {!isLoading && contacts.length > 0 && (
          <ContactList items={contacts} removeContact={onRemoveContact} />
        )}
        {isLoading && <Loader />}
        {error && <p>oops, something went wrong</p>}
      </Section>
    </>
  );
}

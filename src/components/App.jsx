import { nanoid } from 'nanoid';
import ContactList from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import css from './App.module.css';
import { useState, useEffect } from 'react';

const CONTACTS = 'contacts';

const initContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(window.localStorage.getItem(CONTACTS)) ?? initContacts
  );

  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem(CONTACTS, JSON.stringify(contacts));
  }, [contacts]);

  const onChangeInput = evt => {
    setFilter(evt.currentTarget.value);
  };

  const addContact = ({ name, number }) => {
    if (
      contacts.some(
        value => value.name.toLocaleLowerCase() === name.toLocaleLowerCase()
      )
    ) {
      alert(`${name} is alredy in contacts`);
    } else {
      setContacts(old => {
        const list = [...old];
        list.push({
          id: nanoid(),
          name: name,
          number: number,
        });
        return list;
      });
    }
  };

  const filterFu = () => {
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return filteredContacts;
  };

  const delContact = id => {
    const filtred = contacts.filter(item => item.id !== id);
    setContacts(filtred);
  };

  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm addContact={addContact} /> <h2>Contacts</h2>
      {contacts.length > 0 ? (
        <>
          <Filter filter={filter} onChangeInput={onChangeInput} />
          <ContactList onDelete={delContact} contacts={filterFu()} />
        </>
      ) : (
        <p>No contacts yet.</p>
      )}
    </div>
  );
};

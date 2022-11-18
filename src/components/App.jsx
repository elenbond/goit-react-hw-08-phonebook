import { nanoid } from "nanoid";
import { useState, useEffect } from 'react';
import Section from './Section/Section'
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

// let contacts = [
//     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//   ];

export const App = () => {

  const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem('contacts')) ?? []);
  const [filter, setFilter] = useState('');
  // const mounted = useRef(false);

  useEffect(() => {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      setContacts(parsedContacts);
    }
  }, []);

  useEffect(() => {
    // if (mounted.current) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    // };
    // mounted.current = true;
  }, [contacts]);

  const addContact = data => {
    const contact = {
      id: nanoid(),
      name: data.name,
      number: data.number,
    }

    const isExist = contacts.find(item =>
      item.name.toLowerCase() === contact.name.toLowerCase());
    
    if (isExist) {
      alert(`${contact.name} is already in contacts!`);
      return;
    }
    else {
      setContacts(state => {
        return [...state, contact];
      });
      console.log(data);
    }
  }

  const onChangeFilter = (event) => {
    return setFilter({ filter: event.currentTarget.value });
  }

  const onDeleteContact = (contactId) => {
    setContacts(state => state.filter(contact => contact.id !== contactId));
  }

  const normalizedFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter));
  
  return (
    <div>
      <Section title="Phonebook">
        <ContactForm
          onSubmit={addContact}
          // contactNames={contacts}
        />
      </Section>
      <Section title="Contacts">
        <Filter value={filter} onChange={onChangeFilter}/>
        <ContactList contacts={filteredContacts}
          onDeleteContact={onDeleteContact} />
      </Section>
    </div>
  );
};
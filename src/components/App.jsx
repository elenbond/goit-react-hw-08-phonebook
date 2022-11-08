import { nanoid } from "nanoid";
import React, { Component } from "react";
import Section from './Section/Section'
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

export class App extends Component  {

  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  }

  addContact = data => {
    const contact = {
      id: nanoid(),
      name: data.name,
      number: data.number,
    }

    const { contacts } = this.state;
    const isExist = contacts.find(item =>
      item.name.toLowerCase() === contact.name.toLowerCase());
    
    if (isExist) {
      alert(`${contact.name} is already in contacts!`);
      return;
    }
    else {
      this.setState(prevState => ({
        contacts: [...prevState.contacts, contact],
        }))
      console.log(data)
    }
  }

  onChangeFilter = (event) => {
    this.setState({filter: event.currentTarget.value})
  }

  onDeleteContact = (contactId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  }

  componentDidMount() { 
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }
  
  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    };
  }

  render() {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter));
    return (
      <div>
        <Section title="Phonebook">
          <ContactForm
            onSubmit={this.addContact}
            // contactNames={contacts}
          />
        </Section>
        
        <Section title="Contacts">
          <Filter value={filter} onChange={this.onChangeFilter}/>
          <ContactList contacts={filteredContacts}
            onDeleteContact={this.onDeleteContact} />
        </Section>
      </div>
    );
  }
};
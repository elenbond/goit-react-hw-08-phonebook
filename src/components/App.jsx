import { useSelector } from "react-redux";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Section from './Section/Section'
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { getContacts } from "redux/contactsSlice";

export const App = () => {
  const contacts = useSelector(getContacts);
  
  return (
    <div>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <Filter />
        {contacts.length !== 0 ? 
        <ContactList />
         : <p>You do not have any contacts yet(</p>
        }
      </Section>
      <ToastContainer autoClose={5000} />
    </div>
  );
};
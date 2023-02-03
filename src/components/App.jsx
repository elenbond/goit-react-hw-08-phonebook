import { useSelector, useDispatch } from "react-redux";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Section from './Section/Section'
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { Loader } from "./Loader/Loader";
import { selectContacts, selectIsLoading, selectError } from "redux/selectors";
import { useEffect } from "react";
import { fetchContacts } from "redux/operations";

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  
  return (
    <div>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <Filter />
        {isLoading && !error && <Loader />}
        {contacts.length > 0 && < ContactList />}
        {contacts.length === 0 && !isLoading && (<p>You do not have any contacts yet(</p>) }
      </Section>
      <ToastContainer autoClose={5000} />
    </div>
  );
};
import { useSelector } from "react-redux";
import Section from "components/Section/Section";
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import { Loader } from "components/Loader/Loader";
import { selectContacts, selectIsLoading, selectError } from "redux/contacts/contactsSelectors";


export const Phonebook = () => {
    const contacts = useSelector(selectContacts);
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);

    return (
        <div>
            <Section title="Phonebook">
                <ContactForm />
            </Section>
            <Section title="Contacts">
                <Filter />
                {isLoading && !error && <Loader />}
                {contacts.length > 0 && < ContactList />}
                {contacts.length === 0 && !isLoading && (<p>You don't have any contacts yet(</p>) }
            </Section>
        </div>
    )
}
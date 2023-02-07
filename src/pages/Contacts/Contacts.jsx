import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Phonebook } from "components/Phonebook/Phonebook";
import { fetchContacts } from "redux/contacts/contactsOperations";

const Contacts = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    return (
        <main>
            <Phonebook />
        </main>
    );
}

export default Contacts;
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { nanoid } from "nanoid";
// import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { addContact } from "redux/contacts/contactsOperations";
import { selectContacts } from "redux/contacts/contactsSelectors";
import css from './ContactForm.module.css';

export const ContactForm = () => { 

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const contacts = useSelector(selectContacts);
    const dispatch = useDispatch();

    const contactNameId = nanoid();
    const contactNumberId = nanoid();

    const handleChange = event => {
        const { name, value } = event.target;
        switch (name) {
            case 'name':
                return setName(value);
            case 'number':
                return setNumber(value);
            default:
                return;
        }
    };

    const handleSubmit = event => {
        event.preventDefault();
        if (isExist({ name, number })) {
            toast.error('This contact is already in your phonebook!');
            return;
        }
        dispatch(addContact({ name, number }));
        resetForm();
        event.target.reset();
    };

    const isExist = ({ name, number }) => {
        const normalizedName = name.toLowerCase();
        const result = contacts.find(
            contact => contact.name.toLowerCase() === normalizedName || contact.phone === number
        );
        return result;
    };

    const resetForm = () => {
        setName('');
        setNumber('');
    };

    return (
        <form onSubmit={handleSubmit} className={css.form}>
            <label htmlFor={contactNameId} className={css.label}> Name
                <input
                    type="text"
                    name="name"
                    id={contactNameId}
                    value ={name}
                    onChange = {handleChange}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    className={css.input}
                />
            </label>
            <label htmlFor={contactNumberId} className={css.label}> Number 
                <input
                    type="tel"
                    name="number"
                    id={contactNumberId}
                    value={number}
                    onChange = {handleChange}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    className={css.input}
                />
            </label>
            <button type="submit" className={css.button}>Add contact</button>
        </form>
    )
}

export default ContactForm;

// ContactForm.propTypes = {
//     name: PropTypes.string,
//     phone: PropTypes.string,
// }
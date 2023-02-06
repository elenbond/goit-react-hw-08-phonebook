// import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/contacts/contactsSelectors';
import ContactListItem from '../ContactListItem/ContactListItem';
import css from './ContactList.module.css';


const ContactList = () => { 
    const visibleContacts = useSelector(selectVisibleContacts);

    return (
        <ul className={css.list}>
            {visibleContacts.map(({ id, name, number }) => (
                <ContactListItem
                    key={id}
                    id={id}
                    name={name}
                    number={number}
                />
            ))}
        </ul>
    )
}

export default ContactList;

// ContactList.propTypes = {
//     contacts: PropTypes.arrayOf(PropTypes.shape({
//         id: PropTypes.string,
//         name: PropTypes.string.isRequired,
//         phone: PropTypes.string.isRequired,
//     }))
// }
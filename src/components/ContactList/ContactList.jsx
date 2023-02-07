// import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/contacts/contactsSelectors';
import ContactListItem from '../ContactListItem/ContactListItem';
import { List } from './ContactList.styled';


const ContactList = () => { 
    const visibleContacts = useSelector(selectVisibleContacts);

    return (
        <List>
            {visibleContacts.map(({ id, name, number }) => (
                <ContactListItem
                    key={id}
                    id={id}
                    name={name}
                    number={number}
                />
            ))}
        </List>
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
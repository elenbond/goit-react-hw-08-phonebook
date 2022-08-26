import PropTypes from 'prop-types';
import ContactListItem from '../ContactListItem/ContactListItem';
import css from './ContactList.module.css';


const ContactList = ({contacts, onDeleteContact}) => { 
    return (
        <ul className={css.list}>
            {contacts.map(({ id, name, number }) => (
                <ContactListItem
                    key={id}
                    id={id}
                    name={name}
                    number={number}
                    onDeleteContact={onDeleteContact}
                />
            ))}
          </ul>
    )
}

export default ContactList;

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    })),
    onDeleteContact: PropTypes.func,
}
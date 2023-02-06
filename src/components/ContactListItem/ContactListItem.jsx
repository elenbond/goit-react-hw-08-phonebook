import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactsOperations';
import css from './ContactListItem.module.css';

const ContactListItem = ({ id, name, number }) => { 
    const dispatch = useDispatch();

    const handleDeleteContact = (id) => {
        dispatch(deleteContact(id));
    }

    return (
        <li key={id} className={css.list_item}>{name} : {number}
            <button type='button' onClick={() => handleDeleteContact(id)}>
                Delete
            </button>
        </li>
    )
}

export default ContactListItem;

ContactListItem.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
}
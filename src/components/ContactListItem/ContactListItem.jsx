import PropTypes from 'prop-types';
import css from './ContactListItem.module.css';


const ContactListItem = ({ id, name, number, onDeleteContact }) => { 
    return (
        <li key={id}>{name}: {number}
            <button onClick={() => onDeleteContact(id)}>
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
    onDeleteContact: PropTypes.func.isRequired,
}
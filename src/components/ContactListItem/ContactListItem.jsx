import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactsOperations';
import { Item, Button } from './ContactListItem.styled';

const ContactListItem = ({ id, name, number }) => { 
    const dispatch = useDispatch();

    const handleDeleteContact = (id) => {
        dispatch(deleteContact(id));
    }

    return (
        <Item key={id}>{name} : {number}
            <Button type='button' onClick={() => handleDeleteContact(id)}>
                Delete
            </Button>
        </Item>
    )
}

export default ContactListItem;

ContactListItem.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
}
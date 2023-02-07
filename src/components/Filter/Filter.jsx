import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { setFilter } from 'redux/contacts/filtersSlice';
import { selectFilter } from 'redux/contacts/contactsSelectors';
import { Label, Input } from './Filter.styled';

const Filter = () => { 
    const filter = useSelector(selectFilter);
    const dispatch = useDispatch();
    const id = nanoid();

    const changeFilter = event => {
        const { value } = event.target;
        dispatch(setFilter( value ));
    }

    return (
        <>
            <Label> Find contact by name
                <Input
                    id={id}
                    type="text"
                    value={filter}
                    onChange={changeFilter}/>
            </Label>
        </>
    )
}

export default Filter;
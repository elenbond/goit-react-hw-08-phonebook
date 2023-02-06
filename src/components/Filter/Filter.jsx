import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { setFilter } from 'redux/contacts/filtersSlice';
import { selectFilter } from 'redux/contacts/contactsSelectors';
import css from './Filter.module.css';

const Filter = () => { 
    const filter = useSelector(selectFilter);
    const dispatch = useDispatch();
    const id = nanoid();

    const changeFilter = event => {
        const { value } = event.target;
        dispatch(setFilter( value ));
    }

    return (
        <label className={css.filter}> Find contact by name
            <input
                id={id}
                type="text"
                value={filter}
                onChange={changeFilter}/>
        </label>
    )
}

export default Filter;
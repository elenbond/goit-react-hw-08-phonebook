import { useSelector, useDispatch } from 'react-redux';
import { getFilter, setFilter } from 'redux/filtersSlice';
import css from './Filter.module.css';

const Filter = () => { 
    const filter = useSelector(getFilter);
    const dispatch = useDispatch();

    const changeFilter = event => {
        const { value } = event.target;
        dispatch(setFilter( value ));
    }

    return (
        <label className={css.filter}> Find contact by name
            <input type="text" value={filter}
                onChange={changeFilter}/>
        </label>
    )
}

export default Filter;
import PropTypes from 'prop-types';
import css from './Filter.module.css';

const Filter = ({value, onChange}) => { 
    return (
        <label className={css.filter}> Find contact by name
            <input type="text" value={value}
                onChange={onChange}/>
        </label>
    )
}

export default Filter;

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func,
}
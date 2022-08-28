import React, { Component } from "react";
import { nanoid } from "nanoid";
import PropTypes from 'prop-types';
import css from './ContactForm.module.css';

const INITIAL_STATE = {
    name: '',
    number: '',
}
class ContactForm extends Component { 
    state = {
        ...INITIAL_STATE,
    }
    contactNameId = nanoid();
    contactNumberId = nanoid();

    handleChange = event => {
        const { name, value } = event.currentTarget;
        this.setState({ [name]: value })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        const { name, number } = this.state;
        // if (this.props.contactNames.map(
        //     contact => contact === contact.name.toLowerCase())
        //     .includes(contactNames.name.toLowerCase())) {
        //         alert(`${contactNames.name} is already in contacts!`);
        //          return;
        // } else {
        //     this.props.onSubmit(this.state); 
        //     this.resetForm();
        // }
        this.props.onSubmit({ name, number, id: nanoid(10) }); 
        this.setState({ name, number });
        this.resetForm();
        event.target.reset();
    }

    resetForm = () => {
        this.setState({ ...INITIAL_STATE });
    }

    render () {
        return (
            <form onSubmit={this.handleSubmit} className={css.form}>
                <label htmlFor={this.contactNameId} className={css.label}> Name
                    <input
                        type="text"
                        name="name"
                        id={this.contactNameId}
                        value ={this.state.name}
                        onChange = {this.handleChange}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        className={css.input}
                    />
                </label>
                <label htmlFor={this.contactNumberId} className={css.label}> Number 
                    <input
                        type="tel"
                        name="number"
                        id={this.contactNumberId}
                        onChange = {this.handleChange}
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        className={css.input}
                    />
                </label>
                <button type="submit" className={css.button}>Add contact</button>
            </form>
        )
    }
}

export default ContactForm;

ContactForm.propTypes = {
    name: PropTypes.string,
    number: PropTypes.string,
    onSubmit: PropTypes.func,
}
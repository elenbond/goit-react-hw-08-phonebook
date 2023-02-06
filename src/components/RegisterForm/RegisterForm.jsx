import { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from 'react-router-dom';
import { register } from "redux/auth/authOperations";

export const RegisterForm = () => { 
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleChange = (event) => {
        const { name, value } = event.target;
        switch (name) {
            case 'name':
                return setName(value);
            case 'email':
                return setEmail(value);
            case 'password':
                return setPassword(value);
            default:
                return;
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(register({ name, email, password }));
        resetForm();
    }

    const resetForm = () => {
        setName('');
        setPassword('');
        setEmail('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <title>Registration to Contact Menager</title>
            <label> Name
                <input type="text" name="name" value={name} onChange={handleChange} />
            </label>
            <label> Email
                <input type="email" name="email" value={email} onChange={handleChange} />
            </label>
            <label> Password
                <input type="password" name="password" value={password} onChange={handleChange} />
            </label>
            <button type="submit">Register</button>
            <p>I already have an account <NavLink to='/login'>Log in</NavLink> </p>
        </form>
    )
}
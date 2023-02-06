import { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from 'react-router-dom';
import { logIn } from "redux/auth/authOperations";

export const LoginForm = () => { 
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = (event) => {
        const { name, value } = event.target;
        switch (name) {
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
        dispatch(logIn({ email, password }));
        resetForm();
    }

    const resetForm = () => {
        setPassword('');
        setEmail('');
    };

    return (
        <form onSubmit={handleSubmit} autoComplete='off'>
            <title>Log in to Contact Menager</title>
            <label> Email
                <input type="email" name="email" value={email} onChange={handleChange} />
            </label>
            <label> Password
                <input type="password" name="password" value={password} onChange={handleChange} />
            </label>
            <button type="submit">Log in</button>
            <p>Don't have an account? <NavLink to='/register'>Register</NavLink></p>
        </form>
    );
}
import { useState } from "react";
import { useDispatch } from "react-redux";
import { logIn } from "redux/auth/authOperations";
import { Form, FormTitle, Label, Input, Button, Paragraphe, Link } from './LoginForm.styled'

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
        <Form onSubmit={handleSubmit} autoComplete='off'>
            <FormTitle>Log in to Contact Menager</FormTitle>
            <Label> Email
                <Input type="email" name="email" value={email} onChange={handleChange} />
            </Label>
            <Label> Password
                <Input type="password" name="password" value={password} onChange={handleChange} />
            </Label>
            <Button type="submit">Log in</Button>
            <Paragraphe>Don't have an account? <Link to='/register'>Register</Link></Paragraphe>
        </Form>
    );
}
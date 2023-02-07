import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "redux/auth/authOperations";
import { Form, FormTitle, Label, Input, Button, Paragraphe, Link } from './RegisterForm.styled'

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
        <Form onSubmit={handleSubmit}>
            <FormTitle>Registration to Contact Menager</FormTitle>
            <Label> Name
                <Input type="text" name="name" value={name} onChange={handleChange} />
            </Label>
            <Label> Email
                <Input type="email" name="email" value={email} onChange={handleChange} />
            </Label>
            <Label> Password
                <Input type="password" name="password" value={password} onChange={handleChange} />
            </Label>
            <Button type="submit">Register</Button>
            <Paragraphe>I already have an account <Link to='/login'>Log in</Link> </Paragraphe>
        </Form>
    )
}
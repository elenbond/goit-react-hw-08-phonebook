import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
    // width: 400px;
`;

export const FormTitle = styled.title`
    font-size: 20px;
    font-weight: 500;
`;

export const Label = styled.label`
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 80px;
    margin-bottom: 10px;
    font-size: 20px;
    color: #F0E9D2;
`;

export const Input = styled.input`
    margin-top: 10px;
    height: 30px;
`;

export const Button = styled.button`
    font-size: 20px;
    padding: 10px;
    margin-top: 30px;
    width: 200px;
    border: none;
    border-radius: 5px;
    &:hover, &:focus{
        cursor: pointer;
        color: #F0E9D2;
        background-color: #181D31;
    }
`;

export const Paragraphe = styled.p`
    margin-top: 40px;
    font-size: 20px;
    color: #F0E9D2;
`;

export const Link = styled(NavLink)`
    font-size: 20px;
    font-weight: 500;
    color: #181D31;
    text-decoration: none;
    &:hover {
        color: #E6DDC4;
    }
`;
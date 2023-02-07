import styled from 'styled-components';

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
    // width: 400px;
`;

export const Label = styled.label`
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 80px;
    margin-bottom: 10px;
    font-size: 20px;
    color: #E6DDC4;
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
    color: #181D31;
    background-color: #F0E9D2;
    border: none;
    border-radius: 5px;
    &:hover, &:focus{
        cursor: pointer;
        color: #F0E9D2;
        background-color: #181D31;
    }
`;
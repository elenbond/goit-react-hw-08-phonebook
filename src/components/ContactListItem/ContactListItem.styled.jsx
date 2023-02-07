import styled from 'styled-components';

export const Item = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 18px;
    color: #E6DDC4;
    width: 400px;
    margin-top: 15px;
    &:first-child {
        margin-top: 0;
    }
`;

export const Button = styled.button`
    font-size: 16px;
    padding: 7px 10px;
    width: 100px;
    color: #181D31;
    background-color: #F0E9D2;
    border: none;
    border-radius: 5px;
    &:hover, &:focus {
        cursor: pointer;
        color: #F0E9D2;
        background-color: #181D31;
    }
`;
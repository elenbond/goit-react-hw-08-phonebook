import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    // padding: 25px 0;
`;

export const UserName = styled.p`
    font-size: 22px;
    line-height: 1.4;
    color: #F0E9D2;
`;

export const Button = styled.button`
    font-size: 16px;
    padding: 7px 10px;
    margin-left: 30px;
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
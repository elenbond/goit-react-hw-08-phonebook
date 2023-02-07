import styled from 'styled-components';

export const Container = styled.div`
    text-decoration: none;
    display: inline-flex;
    margin-right: 70px;
    padding: 25px 0;
    font-size: 25px;
    color: #F0E9D2;
    &:last-child {
        margin-right: 0;
    }
    &:hover, &:focus {
        color: #181D31;
        // background-color: #E6DDC4;
    }
`;

export const UserName = styled.p`
    font-size: 35px;
    line-height: 1.4;
    color: #F0E9D2;
`;

export const Button = styled.button`
    width: 200px;
`;
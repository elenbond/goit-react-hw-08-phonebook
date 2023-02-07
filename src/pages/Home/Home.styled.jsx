import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
    width: 1200px;
    margin: 0 auto;
    // padding: 0 15px;
    display: flex;
    flex-direction: column;
    padding-top: 100px;
    padding-bottom: 100px;
    background-color: #678983;
`;

export const Title = styled.h1`
    text-align: center;
    margin-bottom: 80px;
    font-size: 50px;
    line-height: 1.36;
    color: #F0E9D2;
`;

export const Heading = styled.h2`
    text-align: center;
    font-size: 35px;
    line-height: 1.4;
    color: #F0E9D2;
`;

export const Paragraphe = styled.p`
    text-align: center;
    font-size: 35px;
    line-height: 1.4;
    color: #F0E9D2;
`;

export const Link = styled(NavLink)`
    text-decoration: none;
    color: #F0E9D2;
    &:hover,
    &:focus {
        color: #181D31;
    };
`;
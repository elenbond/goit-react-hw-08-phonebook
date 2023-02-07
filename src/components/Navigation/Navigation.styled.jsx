import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
    text-decoration: none;
    display: inline-flex;
    margin-right: 70px;
    padding: 25px 0;
    font-size: 25px;
    font-weight: 600;
    color: #F0E9D2;
    &:last-child {
        margin-right: 0;
    }
    &:hover, &:focus {
        color: #181D31;
        // background-color: #E6DDC4;
    }
`;

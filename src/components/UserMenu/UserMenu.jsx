import { useSelector, useDispatch } from "react-redux";
import { selectName } from "redux/auth/authSelectors";
import { logOut } from "redux/auth/authOperations";
import { Container, UserName, Button } from './UserMenu.styled';

export const UserMenu = () => {
    const dispatch = useDispatch();
    const name = useSelector(selectName);
    return (
        <Container>
            <UserName>{name}</UserName>
            <Button type="button" onClick={() => dispatch(logOut())}>Log out</Button>
        </Container>
    )
}
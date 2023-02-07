import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "redux/auth/authSelectors";
import { Link } from './Navigation.styled';

export const Navigation = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
        <nav>
            <Link to='/'>Home</Link>
            {isLoggedIn && <Link to='/contacts'>Contacts</Link>}
        </nav>
    )
}
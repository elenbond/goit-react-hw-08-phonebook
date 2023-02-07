import { useSelector } from "react-redux";
import { Navigation } from "components/Navigation/Navigation";
import { selectIsLoggedIn } from "redux/auth/authSelectors";
import { AuthNav } from "components/AuthNav/AuthNav";
import { UserMenu } from "components/UserMenu/UserMenu";
import { Header } from './AppBar.styled';

export const AppBar = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
        <Header>
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Header>
    )
}
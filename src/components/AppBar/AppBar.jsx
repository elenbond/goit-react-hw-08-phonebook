import { useSelector } from "react-redux";
import { Navigation } from "components/Navigation/Navigation";
import { selectIsLoggedIn } from "redux/auth/authSelectors";
import { AuthNav } from "components/AuthNav/AuthNav";
import { UserMenu } from "components/UserMenu/UserMenu";

export const AppBar = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
        <header>
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </header>
    )
}
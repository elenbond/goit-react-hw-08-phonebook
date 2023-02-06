import { useSelector, useDispatch } from "react-redux";
import { selectName } from "redux/auth/authSelectors";
import { logOut } from "redux/auth/authOperations";

export const UserMenu = () => {
    const dispatch = useDispatch();
    const name = useSelector(selectName);
    return (
        <div>
            <p>${name}</p>
            <button type="button" onClick={() => dispatch(logOut())}>Log out</button>
        </div>
    )
}
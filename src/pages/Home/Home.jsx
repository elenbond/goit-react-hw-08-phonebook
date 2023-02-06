import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "redux/auth/authSelectors";
import { NavLink } from 'react-router-dom';

const Home = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    console.log(isLoggedIn);

    return (
        <div>
            <h1>Hello, I am your Contact Menager!</h1>
            {isLoggedIn && <h2>Here you can see and add new contacts to your phonebook, delete unactual contacts</h2> }
            {!isLoggedIn &&
                <p>To work with your contacts, <NavLink to='/register'>register</NavLink> <br />
                or, if you already have an account, <NavLink to='/login'>log in</NavLink> </p>
            }
        </div>
    )
}
export default Home;
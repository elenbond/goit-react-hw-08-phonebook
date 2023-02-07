import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "redux/auth/authSelectors";
import { Container, Title, Paragraphe, Link } from './Home.styled'

const Home = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
        <main>
            <Container>
            <Title>Hello, I am your Contact Menager!</Title>
            {isLoggedIn && <Paragraphe>Here you can see and add new contacts to your phonebook, delete unactual contacts</Paragraphe> }
            {!isLoggedIn &&
                <Paragraphe>To work with your contacts, <Link to='/register'>register</Link> <br />
                or, if you already have an account, <Link to='/login'>log in</Link> </Paragraphe>
            }
            </Container>
        </main>
    )
}
export default Home;
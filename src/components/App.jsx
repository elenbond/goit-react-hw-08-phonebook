import { useSelector, useDispatch } from "react-redux";
import { Routes, Route } from 'react-router-dom';

// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import Section from './Section/Section'
// import ContactForm from './ContactForm/ContactForm';
// import Filter from './Filter/Filter';
// import ContactList from './ContactList/ContactList';
import { Loader } from "./Loader/Loader";
// import { selectContacts, selectIsLoading, selectError } from "redux/contacts/contactsSelectors";
import { useEffect, lazy } from "react";
// import { fetchContacts } from "redux/contacts/contactsOperations";
import { selectIsRefreshing } from "redux/auth/authSelectors";
import { fetchCurrentUser } from "redux/auth/authOperations";
import { RestrictedRoute } from "./Route/RestrictedRoute";
import { PrivateRoute } from "./Route/PrivateRoute";
import { NotFound } from "./NotFound/NotFound";
import { Layout } from "./Layout/Layout";

// import HomePage from '../pages/Home/Home';
// import RegisterPage from '../pages/Register/Register';
// import LoginPage from '../pages/Login/Login';
// import ContactsPage from '../pages/Contacts/Contacts';

const HomePage = lazy(() => import('pages/Home/Home'));
const ContactsPage = lazy(() => import('pages/Contacts/Contacts'));
const LoginPage = lazy(() => import('pages/Login/Login'));
const RegisterPage = lazy(() => import('pages/Register/Register'))


export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  
  return isRefreshing ? (<Loader />) : (
    <div>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/register"
          element={<RestrictedRoute redirectTo="/contacts" component={<RegisterPage />} />} />
        <Route path="/login"
          element={<RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />} />
        <Route path="/contacts"
          element={<PrivateRoute redirectTo="/login" component={<ContactsPage />} />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
    </div>
  );
};
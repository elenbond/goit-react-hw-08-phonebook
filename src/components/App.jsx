import { useSelector, useDispatch } from "react-redux";
import { Routes, Route } from 'react-router-dom';

// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import Section from './Section/Section'
// import ContactForm from './ContactForm/ContactForm';
// import Filter from './Filter/Filter';
// import ContactList from './ContactList/ContactList';
// import { Loader } from "./Loader/Loader";
// import { selectContacts, selectIsLoading, selectError } from "redux/contacts/contactsSelectors";
import { useEffect } from "react";
// import { fetchContacts } from "redux/contacts/contactsOperations";
import { selectIsRefreshing } from "redux/auth/authSelectors";
import { fetchCurrentUser } from "redux/auth/authOperations";
import { RestrictedRoute } from "./Route/RestrictedRoute";
import { PrivateRoute } from "./Route/PrivateRoute";
import { NotFound } from "./NotFound/NotFound";

import { Layout } from "./Layout/Layout";
import { Home } from '../pages/Home/Home';
import { Register } from '../pages/Register/Register';
import { Login } from '../pages/Login/Login';
import { Contacts } from '../pages/Contacts/Contacts';

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  // const contacts = useSelector(selectContacts);
  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  
  return isRefreshing ? (<b>Refreshing user...</b>) : (
    // <div>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/register"
          element={<RestrictedRoute redirectTo="/contacts" component={<Register />} />} />
        <Route path="/login"
          element={<RestrictedRoute redirectTo="/contacts" component={<Login />} />} />
        <Route path="/contacts"
          element={<PrivateRoute redirectTo="/login" component={<Contacts />} />} />
        <Route path="*" element={<NotFound />} />
      </Route>
        {/* <Section title="Phonebook">
          <ContactForm />
        </Section>
        <Section title="Contacts">
          <Filter />
          {isLoading && !error && <Loader />}
          {contacts.length > 0 && < ContactList />}
          {contacts.length === 0 && !isLoading && (<p>You do not have any contacts yet(</p>) }
        </Section> */}
        {/* <ToastContainer autoClose={5000} /> */}
    </Routes>
    // </div>
  );
};
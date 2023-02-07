import { useSelector, useDispatch } from "react-redux";
import { Routes, Route } from 'react-router-dom';
import { useEffect, lazy } from "react";

import { selectIsRefreshing } from "redux/auth/authSelectors";
import { fetchCurrentUser } from "redux/auth/authOperations";

import { RestrictedRoute } from "./Route/RestrictedRoute";
import { PrivateRoute } from "./Route/PrivateRoute";

import { NotFound } from "./NotFound/NotFound";
import { Layout } from "./Layout/Layout";
import { Loader } from "./Loader/Loader";

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
    <div style={{width: '1200px', margin: '0 auto', padding: '0 15px'}}>
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
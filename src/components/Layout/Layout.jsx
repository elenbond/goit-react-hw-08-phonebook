import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AppBar } from 'components/AppBar/AppBar';

export const Layout = () => {
    return (
        <div>
            <AppBar />
            <Outlet />
            <ToastContainer autoClose={5000} />
        </div>
    )
}
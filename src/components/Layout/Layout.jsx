import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AppBar } from 'components/AppBar/AppBar';

export const Layout = () => {
    return (
        <div>
            <AppBar />
            <Suspense fallback={null}>
                <Outlet />
            </Suspense>
            <ToastContainer autoClose={5000} />
        </div>
    )
}
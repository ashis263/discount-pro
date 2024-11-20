import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Register from '../pages/Register/Register'
import Login from '../pages/Login/Login'
import PasswordReset from '../pages/PasswordReset/PasswordReset'
import Profile from "../components/Profile/Profile";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/profile",
                element: <Profile></Profile>
            }
        ]
    },
    {
        path: "/register",
        element: <Register></Register>
    },
    {
        path: "/login",
        element: <Login></Login>
    },
    {
        path: "/resetpass",
        element: <PasswordReset></PasswordReset>
    }
]);

export default router;
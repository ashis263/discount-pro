import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Register from '../pages/Register/Register'
import Login from '../pages/Login/Login'
import PasswordReset from '../pages/PasswordReset/PasswordReset'
import ErrorPage from '../pages/ErrorPage/ErrorPage'
import Profile from "../components/Profile/Profile";
import UpdateProfile from "../components/UpdateProfile/UpdateProfile";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/profile",
                element: <PrivateRoute><Profile></Profile></PrivateRoute>
            },
            {
                path: "/update",
                element: <UpdateProfile></UpdateProfile>
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
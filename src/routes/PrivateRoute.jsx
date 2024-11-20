import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({children}) => {
    const location = useLocation();
    const { user } = useContext(AuthContext);
    if(user){
        return children;
    }else{
        return <Navigate state={location.pathname} to="/login"></Navigate>;
    }
};

export default PrivateRoute;
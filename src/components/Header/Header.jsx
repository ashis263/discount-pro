import { useContext } from "react";
import Navbar from "../Navbar/Navbar";
import { AuthContext } from "../../providers/AuthProvider";
import 'animate.css';
import { useLocation } from "react-router-dom";

const Header = () => {
    const { user } = useContext(AuthContext);
    const location = useLocation();
    return (
        <div>
            {
                user && <div className={`text-center pt-5 text-secondary font-bold ${location.pathname === '/' ? '' : 'hidden'}`}>
                    <h3 className="animate__animated animate__zoomIn">Welcome, {user.displayName}</h3>
                </div>
            }
            <Navbar></Navbar>
        </div>
    );
};

export default Header;
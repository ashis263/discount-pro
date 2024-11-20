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
                user && <div className={`text-center py-2 text-secondary  shadow-sm ${location.pathname === '/' ? '' : 'hidden'}`}>
                    <h3 className="animate__animated animate__zoomIn">Welcome, <span className="font-bold">{user.displayName}</span></h3>
                </div>
            }
            <Navbar></Navbar>
        </div>
    );
};

export default Header;
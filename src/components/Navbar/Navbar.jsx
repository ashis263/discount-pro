import { Link, NavLink } from "react-router-dom";
import { TbHome } from "react-icons/tb";
import { FaLaptopCode } from "react-icons/fa";
import { MdOutlineExplore } from "react-icons/md";
import { BsPersonVcard } from "react-icons/bs";
import './navbar.css'
import { signOut } from "firebase/auth";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { HiUser } from "react-icons/hi2";
import { HiOutlineLogout } from "react-icons/hi";
import logo from '../../assets/logo.png'

const Navbar = () => {
    const { user, auth } = useContext(AuthContext);
    const navLinks = <>
        <NavLink to='/' className="flex items-center gap-1"><TbHome />
            Home</NavLink>
        <NavLink to='/brands' className="flex items-center gap-1"><MdOutlineExplore />Brands</NavLink>
        <NavLink to='/profile' className="flex items-center gap-1"><BsPersonVcard className="text-xs" />My Profile</NavLink>
        <NavLink to='/about' className="flex items-center gap-1"><FaLaptopCode className="text-xs" />About Dev</NavLink>
    </>
    const handleLogOut = () => {
        signOut(auth);
    }
    return (
        <div className="shadow-sm">
        <div className="navbar w-11/12 mx-auto py-1 sm:py-3">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navLinks}
                    </ul>
                </div>
                <div className="flex items-center gap-2">
                    <img className="w-8 sm:w-10" src={logo} alt="logo" />
                    <Link to="/" className="hidden sm:flex btn btn-ghost font-oldenburg text-primary text-2xl sm:text-3xl p-0 font-extrabold hover:bg-transparent">Discount Pro</Link>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-5">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user
                        ?
                        <div className="space-x-2 flex items-center">
                            <div>
                                <img className="w-6 sm:w-7 rounded-xl" src={user.photoURL} alt="" />
                            </div>
                            <p className="text-[10px] hidden sm:flex p-1 py-2 border rounded-md">{user.email}</p>
                            <button onClick={handleLogOut} className="btn btn-outline border-gray-200 btn-xs sm:btn-sm  hover:bg-transparent text-primary hover:text-primary">Logout<HiOutlineLogout /></button>
                        </div>
                        :
                        <div className="space-x-2 flex items-center text-primary">
                            <Link to="/login" className="btn hover:bg-transparent btn-xs sm:btn-sm btn-ghost"><HiUser />Login</Link >
                            <p>|</p>
                            <Link to="/register" className="btn hover:bg-transparent btn-xs sm:btn-sm btn-ghost"><HiUser />Registration</Link >
                        </div>
                }
            </div>
        </div>
        </div>
    );
};

export default Navbar;
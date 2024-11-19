import { Link, NavLink } from "react-router-dom";
import { TbHome } from "react-icons/tb";
import { FaLaptopCode } from "react-icons/fa";
import { MdOutlineExplore } from "react-icons/md";
import { BsPersonVcard } from "react-icons/bs";
import './navbar.css'

const Navbar = () => {
    const navLinks = <>
        <NavLink to='/' className="flex items-center gap-1"><TbHome />
            Home</NavLink>
        <NavLink to='/brands' className="flex items-center gap-1"><MdOutlineExplore />Brands</NavLink>
        <NavLink to='/profile' className="flex items-center gap-1"><BsPersonVcard className="text-xs" />My Profile</NavLink>
        <NavLink to='/about' className="flex items-center gap-1"><FaLaptopCode className="text-xs" />About Dev</NavLink>
    </>
    return (
        <div className="navbar w-11/12 mx-auto">
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
                <Link to="/" className="btn btn-ghost font-oldenburg text-primary text-x sm:text-2xl p-0 font-extrabold">Discount Pro</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-5">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">

            </div>
        </div>
    );
};

export default Navbar;
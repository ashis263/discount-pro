import { Link } from "react-router-dom";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer footer-center bg-gray-50 text-base-content rounded p-10">
            <nav className="grid grid-flow-col gap-4">
                <Link to="/about" className="link link-hover font-semibold">About us</Link>
                <Link className="link link-hover font-semibold">Contact</Link>
                <Link className="link link-hover font-semibold">Privacy policy</Link>
                <Link className="link link-hover font-semibold">Terms and conditions</Link>
            </nav>
            <nav>
                <div className="grid grid-flow-col gap-4">
                    <Link className="text-2xl text-primary" to="https://www.linkedin.com/in/ashis263/"><FaLinkedin /></Link>
                    <Link className="text-2xl text-primary" to="https://github.com/ashis263"><FaGithubSquare /></Link>
                </div>
            </nav>
            <aside>
                <p>Copyright © {new Date().getFullYear()} - All right reserved by Discount Pro</p>
            </aside>
        </footer>
    );
};

export default Footer;
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import 'animate.css';
import Projects from "../Projects/Projects";

const About = () => {
    return (
        <div className="">
            <div data-aos="flip-up" className="bg-primary pt-5 pb-28 sm:pt-10 sm:pb-36 lg:pb-52 space-y-3 text-gray-200 text-center mb-5 sm:mb-10">
                <h3 className="w-2/3 lg:w-1/2 mx-auto text-2xl sm:text-4xl font-bold">About Developer</h3>
                <p className="w-2/3 lg:w-1/2 mx-auto text-gray-300">Eager to learn and work with technologies. Skill includes C, Java, Javascript, ReactJs, SQL. Scroll down to see projects.</p>
            </div>
            <div className="animate__animated animate__pulse w-2/3 lg:w-1/2 rounded-xl mx-auto text-center relative -top-16 sm:-top-24 lg:-top-40 bg-white shadow-lg">
                <div className="flex justify-center">
                    <img className="w-16 relative -top-8 sm:-top-14 sm:w-28 rounded-full border-2 border-gray-200" src="https://lh3.googleusercontent.com/a/ACg8ocKX2CpCe4qvUZPi9XDPSI0Bgafnd4orSVlbtV6AAXYBIqzyf1wk-A=s96-c" alt="" />
                </div>
                <div className="relative -top-8 text-primary space-y-2">
                    <h3 className="w-2/3 mx-auto text-xl sm:text-4xl font-bold">Ashis Kumar Joy</h3>
                    <p className="w-2/3 mx-auto text-xs sm:text-lg">ashis263@gmail.com</p>
                    <div className="flex justify-center gap-5">
                        <Link className="text-2xl text-primary" to="https://www.linkedin.com/in/ashis263/"><FaLinkedin /></Link>
                        <Link className="text-2xl text-primary" to="https://github.com/ashis263"><FaGithubSquare /></Link>
                    </div>
                </div>
            </div>
            <Projects></Projects>
        </div>
    );
};

export default About;
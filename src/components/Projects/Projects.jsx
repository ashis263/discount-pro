import 'animate.css';
import { Link } from 'react-router-dom';

const Projects = () => {
    return (
        <div className="text-primary w-11/12 mx-auto mb-10 lg:mb-20">
            <div>
                <h3 className="relative -top-8 sm:-top-10 w-2/3 lg:w-1/2 mx-auto text-3xl sm:text-5xl font-bold text-center">Projects</h3>
                <div className="space-y-5 sm:space-y-10">
                    <div className="w-[90%] mx-auto rounded-xl shadow-2xl animate__animated animate__ border-2 p-5">
                        <p className="text-center text-primary mb-2 font-semibold text-xl sm:text-3xl">Gadget Heaven</p>
                        <div className="flex justify-center">
                            <Link to="https://github.com/ashis263/gadget-heaven" className="btn btn-sm btn-outline hover:bg-primary">See Repository</Link>
                        </div>
                        <iframe className="m-2 border rounded-xl w-[90%] h-[500px] mx-auto" src="https://gadget-heaven-ashis263.netlify.app/"></iframe>
                    </div>
                    <div className="w-[90%] mx-auto rounded-xl shadow-2xl animate__animated animate__ border-2 p-5">
                        <p className="text-center text-primary mb-2 font-semibold text-xl sm:text-3xl">Cricket Squad</p>
                        <div className="flex justify-center">
                        <Link to="https://github.com/ashis263/cricket-squad" className="btn btn-sm btn-outline hover:bg-primary">See Repository</Link>
                        </div>
                        <iframe className="m-2 border rounded-xl w-[90%] h-[500px] mx-auto" src="https://cricket-squad-ashis263.netlify.app/"></iframe>
                    </div>
                    <div className="w-[90%] mx-auto rounded-xl shadow-2xl animate__animated animate__ border-2 p-5">
                        <p className="text-center text-primary mb-2 font-semibold text-xl sm:text-3xl">Peddy</p>
                        <div className='flex justify-center'>
                            <Link to="https://github.com/ashis263/peddy" className="btn btn-sm btn-outline hover:bg-primary">See Repository</Link>
                        </div>
                        <iframe className="m-2 border rounded-xl w-[90%] h-[500px] mx-auto" src="https://peddy-ashis263.netlify.app/"></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
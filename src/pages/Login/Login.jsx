import { IoLogoGoogle } from "react-icons/io";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { ToastContainer, toast, Bounce } from 'react-toastify';
import { useContext, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth/cordova";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";


const Login = () => {
    const { handleGoogleSignin, setUser, auth, emailRef } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const [isPassShowing, setIsPassShowing] = useState(false);
    const handleShowPass = () => setIsPassShowing(!isPassShowing);
    const handleGoogleClick = () => {
        handleGoogleSignin()
            .then(result => {
                toast.success(`Welcome, ${result.user.displayName}`, {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                });
                setUser(result.user);
                setTimeout(() => location.state ? navigate(location.state) : navigate('/'), 2000);
            })
            .catch(error => {
                toast.error(`Error: ${error.code}!`, {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                });
            })
    }
    const handleFormSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user);
                toast.success(`Welcome, ${result.user.displayName}`, {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                });
                setUser(result.user);
                setTimeout(() => navigate('/'), 2000);
            })
            .catch(error => {
                toast.error(`Error: ${error.code}!`, {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                });
            })
    }
    return (
        <div className="flex flex-col items-center p-10">
            <h1 className="text-5xl sm:text-6xl font-bold py-5 sm:py-10 text-primary">Login</h1>
            <div className="w-full sm:w-1/2 lg:w-2/5 rounded-xl bg-gray-50 p-10 shadow-lg">
                <div className="flex justify-center">
                    <button onClick={handleGoogleClick} className="btn btn-sm btn-outline hover:bg-primary"><IoLogoGoogle />
                        Continue with Google</button>
                </div>
                <div className="">
                    <form onSubmit={handleFormSubmit} className="">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" ref={emailRef} placeholder="Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type={!isPassShowing ? 'password' : 'text'} name="password" placeholder="Password" className="input input-bordered" required />
                            <div onClick={handleShowPass} className="absolute right-6 text-gray-500 top-12 text-2xl">
                                {
                                    !isPassShowing ? <IoIosEye /> : <IoIosEyeOff />
                                }
                            </div>
                            <label className="label flext flex-col items-start gap-1 sm:gap-2">
                                <p>Forgot password? <Link to="/resetpass" className="font-semibold text-sky-600">Reset here</Link></p>
                                <p>Don&apos;t have an account? <Link to="/register" className="font-semibold text-sky-600">Register</Link></p>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn hover:bg-primary bg-primary text-white">Login</button>
                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}

export default Login;

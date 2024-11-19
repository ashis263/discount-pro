import { useContext, useState } from "react";
import { IoLogoGoogle } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { ToastContainer, toast, Bounce } from 'react-toastify';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";


const Register = () => {
    const [error, setError] = useState('');
    const { handleGoogleSignin, setUser, auth } = useContext(AuthContext);
    const navigate = useNavigate();
    const [isPassShowing, setIsPassShowing] = useState(false);
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
    const handleFormSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const password = e.target.password.value;
        if (password.length < 6) {
            toast.warn(`Password should be at least of 6 characters!`, {
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
            setError(`Password should be at least of 6 characters!`);
        } else if (!/^(?=.*[a-z])(?=.*[A-Z]).*$/.test(password)) {
            toast.warn(`Password should contain at least one uppercase and one lowercase letter!`, {
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
            setError(`Password should contain at least one uppercase and one lowercase letter!`,);
        } else {
            createUserWithEmailAndPassword(auth, email, password)
                .then(result => {
                    setUser(result.user)
                    updateProfile(auth.currentUser, { displayName: name, photoURL: photo })
                        .then(() => {
                            toast.success(`Welcome, ${name}`, {
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
    }
    const handleShowPass = () => setIsPassShowing(!isPassShowing);
    return (
        <div className="flex flex-col items-center pt-5">
            <h1 className="text-5xl sm:text-6xl font-bold py-5 text-primary">Register</h1>
            <div className="w-full sm:w-1/2 lg:w-2/5 rounded-xl bg-gray-50 p-10 shadow-lg">
                <div className="flex justify-center">
                    <button onClick={handleGoogleClick} className="btn hover:bg-primary btn-sm btn-outline"><IoLogoGoogle />
                        Continue with Google</button>
                </div>
                <div className="">
                    <form onSubmit={handleFormSubmit} className="">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" required />
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
                            <label className="label">
                                <p>Already have an account? <Link to="/login" className="font-bold text-sky-600">Login</Link></p>
                            </label>
                            <p className="text-red-500 text-center py-2 font-semibold w-2/3 mx-auto">{error}</p>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn  bg-primary hover:bg-primary text-white">Register</button>
                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}

export default Register;

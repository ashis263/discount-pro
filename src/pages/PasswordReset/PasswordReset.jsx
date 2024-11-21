import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { sendPasswordResetEmail, signOut } from "firebase/auth";
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'animate.css';
import { Helmet, HelmetProvider } from "react-helmet-async";

const PasswordReset = () => {
    const {auth, emailRef} = useContext(AuthContext);
    const handleFormSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        sendPasswordResetEmail(auth, email)
        .then(() => {
            toast.success(`Password reset mail sent, redirecting to Gmail.`, {
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
            signOut(auth);
            setTimeout(() => window.location.href = 'https://mail.google.com/mail/u/0/#inbox', 2000);
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
        <div className="flex flex-col items-center p-10 animate__animated animate__fadeIn">
            <HelmetProvider>
                <Helmet>
                    <title>Reset Password</title>
                </Helmet>
            <h1 className="text-5xl text-center sm:text-6xl font-bold py-5 sm:py-10 text-primary">Reset Password</h1>
            <div className="w-full sm:w-1/2 lg:w-2/5 rounded-xl bg-gray-50 p-10 shadow-lg">
                <form onSubmit={handleFormSubmit} className="">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email Your Email</span>
                        </label>
                        <input type="email" defaultValue={emailRef.current.value} name="email" placeholder="Email" className="input input-bordered" required />
                    </div>
                        <div className="form-control mt-6">
                            <button className="btn  bg-primary hover:bg-primary text-white">Reset Password</button>
                        </div>
                </form>
            </div>
            <ToastContainer/>
            </HelmetProvider>
        </div>
    );
};

export default PasswordReset;
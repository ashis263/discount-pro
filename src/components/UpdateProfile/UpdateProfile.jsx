import { updateProfile } from 'firebase/auth';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import { AuthContext } from '../../providers/AuthProvider';
import { Helmet, HelmetProvider } from "react-helmet-async";
import 'animate.css';

const UpdateProfile = () => {
    const navigate = useNavigate();
    const { auth } = useContext(AuthContext);
    const handleFormSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        updateProfile(auth.currentUser, { displayName: name, photoURL: photo })
            .then(() => {
                toast.success(`Profile updated successfully`, {
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
                setTimeout(() => navigate('/profile'), 2000);
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
        <div className="flex flex-col items-center pt-5  animate__animated animate__fadeIn">
            <HelmetProvider>
                <Helmet>
                    <title>Update Profile</title>
                </Helmet>
            <h1 className="text-5xl sm:text-6xl font-bold py-5 text-primary">Update Profile</h1>
            <div className="w-full sm:w-1/2 lg:w-2/5 rounded-xl bg-gray-50 p-10 shadow-lg">
                <form onSubmit={handleFormSubmit} className="">
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
                    <div className="form-control mt-6">
                        <button className="btn  bg-primary hover:bg-primary text-white">Update</button>
                    </div>
                </form>
            </div>
            <ToastContainer />
            </HelmetProvider>
        </div>
    );
}

export default UpdateProfile;

import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import 'animate.css';

const Profile = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    return (
        <div className="">
            <div className="bg-primary pt-5 pb-28 sm:pt-10 sm:pb-36 lg:pb-52 space-y-3 text-gray-200 text-center mb-5 sm:mb-10">
                <h3 className="w-2/3 lg:w-1/2 mx-auto text-2xl sm:text-4xl font-bold">My Profile</h3>
            </div>
            <div className="animate__animated animate__pulse w-2/3 lg:w-1/2 rounded-xl mx-auto text-center relative -top-16 sm:-top-24 lg:-top-40 bg-white shadow-lg">
                <div className="flex justify-center">
                    <img className="w-16 relative -top-8 sm:-top-14 sm:w-28 rounded-full border-2 border-gray-200" src={user.photoURL} alt="" />
                </div>
                <div className="relative -top-8 text-primary">
                    <h3 className="w-2/3 mx-auto text-xl sm:text-4xl font-bold">{user.displayName}</h3>
                    <p className="w-2/3 mx-auto text-xs sm:text-lg">{user.email}</p>
                    <button onClick={() => navigate('/update')} className="btn btn-sm sm:btn-md btn-wide mt-5 hover:bg-primary bg-primary text-white">Update Profile</button>
                </div>
            </div>
        </div>
    );
};

export default Profile;
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Profile = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className="">
            <div className="bg-primary pt-5 pb-32 sm:pt-10 sm:pb-32 space-y-3 text-gray-200 text-center">
                <h3 className="w-2/3 mx-auto text-2xl sm:text-4xl font-bold">Welcome to Discount Pro</h3>
                <p className="w-2/3 mx-auto text-gray-300">Your journey to amazing deals and savings starts here! Collect, browse, and redeem exclusive coupons for your favorite brands.</p>
            </div>
            <div className="w-2/3 rounded-xl mx-auto text-center relative -top-16 sm:-top-20 bg-white shadow-lg">
                <div className="flex justify-center">
                    <img className="w-16 relative -top-10 sm:w-20 rounded-full border-2 border-gray-200" src={user.photoURL} alt="" />
                </div>
                <div className="relative -top-8 text-primary">
                    <h3 className="w-2/3 mx-auto text-xl sm:text-4xl font-bold">{user.displayName}</h3>
                    <p className="w-2/3 mx-auto text-xs sm:text-lg">{user.email}</p>
                    <button className="btn btn-wide mt-5 hover:bg-primary bg-primary text-white">Update Profile</button>
                </div>
            </div>
        </div>
    );
};

export default Profile;
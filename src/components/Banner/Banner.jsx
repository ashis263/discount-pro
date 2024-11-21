import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import 'animate.css';

const Banner = () => {
    const {user} = useContext(AuthContext);
    return (
        <div>
            <div className="bg-primary pt-5 pb-28 sm:pt-10 sm:pb-36 lg:pb-52 space-y-3 text-gray-200 text-center mb-5 sm:mb-10">
                <h3 className="animate__animated animate__zoomIn w-2/3 lg:w-1/2 mx-auto text-2xl sm:text-4xl font-bold">Welcome{`${user ? ', ' + user.displayName : ''}`}</h3>
                <p className="w-2/3 lg:w-1/2 mx-auto text-gray-300">Your journey to amazing deals and savings starts here! Collect, browse, and redeem exclusive coupons for your favorite brands.</p>
            </div>
        </div>
    );
};

export default Banner;
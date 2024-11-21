import { useContext } from "react";
import { CouponContext } from "../../providers/AuthProvider";
import { IoIosStarHalf } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const TopBrands = () => {
    const navigate = useNavigate()
    const coupons = useContext(CouponContext);
    const tops = coupons.filter(coupon => coupon.rating > 4)
    return (
        <div>
            <h3 className="mb-2 rounded-xl sm:mb-5 text-xl sm:text-2xl font-bold text-center sm:text-start">Top Brands</h3>
            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 py-5 sm:py-10 bg-gray-100 rounded-xl">
                {
                    tops.map(top => <div onClick={() => navigate(`/brand/${top.id}`)} className="bg-white rounded-xl shadow-md p-5 place-self-center border border-dotted w-40 sm:w-44 lg:w-48 space-y-2" key={top.id}>
                        <img className="w-32 h-10 p-1 -ml-[2px] border rounded-lg" src={top.brandLogo} alt="" />
                        <h4 className="text-primary sm:text-2xl font-semibold">{top.brandName}</h4>
                        <h4 className="text-primary sm:text-xl font-semibold"><IoIosStarHalf className="inline -mt-[6px] text-yellow-400 mr-2" />{top.rating}</h4>
                    </div>)
                }
            </div>
        </div>
    );
};

export default TopBrands;
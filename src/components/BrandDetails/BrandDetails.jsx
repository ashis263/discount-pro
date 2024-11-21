import { useContext } from "react";
import { useParams } from "react-router-dom";
import { CouponContext } from "../../providers/AuthProvider";
import ReactStars from "react-rating-stars-component";
import Coupon from '../Coupon/Coupon'
import 'animate.css';

const BrandDetails = () => {
    const coupons = useContext(CouponContext);
    const { id } = useParams();
    const brand = coupons.find(coupon => coupon.id === id);
    const rating = {
        size: 30,
        value: brand.rating,
        edit: false,
        isHalf: true,
    };
    return (
        <div className="animate__animated animate__fadeIn">
            <div className="bg-primary py-5 sm:py-10 space-y-3 text-gray-200 text-center">
                <div className="flex justify-center">
                    <img className="bg-white w-20 h-8 p-1 -ml-[2px] rounded-lg" src={brand.brandLogo} alt="" />
                </div>
                <h3 className="w-2/3 lg:w-1/2 mx-auto text-2xl sm:text-4xl font-bold">{brand.brandName}</h3>
                <p className="w-2/3 lg:w-1/2 mx-auto text-gray-300">{brand.description}</p>
                <div className="flex justify-center">
                    <ReactStars {...rating} />
                </div>
            </div>
            <div className="py-5 sm:py-10">
                <h3 className="text-primary w-2/3 lg:w-1/2 mx-auto text-xl sm:text-2xl font-bold text-center">Available Coupons</h3>
                <div className="p-5 sm:p-10 mx-auto w-11/12 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                    {
                        brand.coupons.map(coupon => <Coupon key={"coupon-code"} shopLink={brand.shopLink} coupon={coupon}></Coupon>)
                    }
                </div>
            </div>
        </div>
    );
};

export default BrandDetails;
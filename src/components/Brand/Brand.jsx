import PropTypes from 'prop-types';
import { useContext } from "react";
import { CouponContext } from "../../providers/AuthProvider";
import ReactStars from "react-rating-stars-component";
import 'animate.css'
import { useNavigate } from 'react-router-dom';


const Brand = (brand) => {
    const navigate = useNavigate();
    const coupons = useContext(CouponContext);
    let brandData;
    if(coupons){
        brandData = coupons.find(coupon => coupon.brandName === brand.brand);
    }
    const rating = {
        size: 18,
        value: brandData.rating,
        edit: false,
        isHalf: true,
    };
    return (
        <div className="flex gap-5 justify-between items-start p-5 border rounded-xl shadow-md">
            <div>
                <img className="w-32 h-10 p-1 -ml-[2px] border rounded-lg" src={brandData.brandLogo} alt="" />
                <h4 className="text-primary sm:text-2xl font-semibold">{brandData.brandName}</h4>
                <ReactStars {...rating} />
            </div>
            <div className='w-3/5 sm:w-2/5'>
                <h4 className="text-primary sm:text-2xl font-semibold">{brandData.brandName}</h4>
                <p className="text-xs text-gray-500">{brandData.description}</p>
            </div>
            <div>
                <button onClick={() => navigate(`/brand/${brandData.id}`)} className="btn btn-sm hover:bg-primary bg-primary text-white">View coupons</button>
                <h3 className={brandData.isSaleOn ? "text-red-500 font-bold text-center sm:text-xl pt-7 animate__animated animate__bounce animate__infinite animate__slow" : 'hidden'}>Sale is on</h3>
            </div>
        </div>
    );
};

Brand.propTypes = {
    brand: PropTypes.string.isRequired
};

export default Brand;
import { useNavigate } from "react-router-dom";
import Banner from "../Banner/Banner";
import TopBrands from "../TopBrands/TopBrands";
import Marquee from "react-fast-marquee";
import { useContext } from "react";
import { CouponContext } from "../../providers/AuthProvider";
import BrandsOnSale from "../BrandsOnSale/BrandsOnSale";

const Home = () => {
    const navigate = useNavigate()
    const coupons = useContext(CouponContext);
    return (
        <div className="w-11/12 mx-auto">
            <Banner></Banner>
            <div className="pt-5 sm:pt-10 flex">
                <h4 className="text-xl sm:text-2xl w-1/5 bg-slate-500 rounded-l text-white font-medium text-center p-2">All Brands</h4>
                <Marquee className="bg-gray-100 rounded-r">
                    {
                        coupons.map(coupon => <img onClick={() => navigate(`/brand/${coupon.id}`)} className="w-28 h-10 mr-10 rounded bg-white" key={coupon.id} src={coupon.brandLogo}></img>)
                    }
                </Marquee>
            </div>
            <div className="sm:flex justify-between">
                <TopBrands></TopBrands>
                <BrandsOnSale></BrandsOnSale>
            </div>
        </div>
    );
};

export default Home;
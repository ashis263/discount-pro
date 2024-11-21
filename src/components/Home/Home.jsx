import { useNavigate } from "react-router-dom";
import Banner from "../Banner/Banner";
import TopBrands from "../TopBrands/TopBrands";
import Marquee from "react-fast-marquee";
import { useContext } from "react";
import { CouponContext } from "../../providers/AuthProvider";
import BrandsOnSale from "../BrandsOnSale/BrandsOnSale";
import BrandsByCategory from "../BrandsByCategory/BrandsByCategory";
import Newsletter from "../Newsletter/Newsletter";import { Helmet, HelmetProvider } from "react-helmet-async";

const Home = () => {
    const navigate = useNavigate()
    const coupons = useContext(CouponContext);
    return (
        <div>
            <HelmetProvider>
                <Helmet>
                    <title>Discount Pro</title>
                </Helmet>
            <Banner></Banner>
            <div  className="w-11/12 mx-auto">
                <div className="pt-5 sm:pt-10 flex">
                    <h4 className="text-xl sm:text-2xl w-1/5 bg-slate-500 rounded-l text-white font-medium text-center p-2">All Brands</h4>
                    <Marquee pauseOnHover className="bg-gray-100 rounded-r">
                        {
                           coupons && coupons.map(coupon => <img onClick={() => navigate(`/brand/${coupon.id}`)} className="w-28 h-10 mr-10 rounded bg-white" key={coupon.id} src={coupon.brandLogo}></img>)
                        }
                    </Marquee>
                </div>
                <div className="flex flex-col-reverse sm:flex-row justify-between">
                    <div className="py-5 sm:py-10 sm:w-3/5 lg:w-[70%] xl:w-3/4">
                        <TopBrands></TopBrands>
                        <BrandsByCategory></BrandsByCategory>
                        <Newsletter></Newsletter>
                    </div>
                    <BrandsOnSale></BrandsOnSale>
                </div>
                <hr />
                <br />
            </div>
            </HelmetProvider>
        </div>
    );
};

export default Home;
import { useContext } from "react";
import { CouponContext } from "../../providers/AuthProvider";
import Brand from "../Brand/Brand";
import 'animate.css';
import { Helmet, HelmetProvider } from "react-helmet-async";

const Brands = () => {
    const coupons = useContext(CouponContext);
    const brands = [];
    if (coupons) {
        coupons.map(coupon => {
            if (!brands.includes(coupon.brandName)) {
                brands.push(coupon.brandName);
            }
        });
    }
    return (
        <div className="animate__animated animate__fadeIn">
            <HelmetProvider>
                <Helmet>
                    <title>Brands</title>
                </Helmet>
                <div className="bg-bg py-5 sm:py-10 space-y-3 text-gray-200 text-center">
                    <h3 className="w-2/3 lg:w-1/2 mx-auto text-2xl sm:text-4xl font-bold">Brands</h3>
                    <p className="w-2/3 lg:w-1/2 mx-auto text-gray-300">Browse, collect and redeem exclusive coupons from different brands.</p>
                    <label className="w-1/2 mx-auto input input-sm lg:input-md input-bordered flex items-center gap-2">
                        <input type="text" className="grow text-textPrimary" placeholder="Search brand" />
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70 text-primary">
                            <path
                                fillRule="evenodd"
                                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                clipRule="evenodd" />
                        </svg>
                    </label>
                </div>
                <div className="py-5 sm:py-10 flex gap-10 w-11/12 mx-auto">
                    <section className="w-11/12 mx-auto sm:w-2/3 lg:3/5 space-y-5">
                        {
                            brands.map(brand => <Brand key={brand} brand={brand}></Brand>)
                        }
                    </section>
                </div>
            </HelmetProvider>
        </div>
    );
};

export default Brands;
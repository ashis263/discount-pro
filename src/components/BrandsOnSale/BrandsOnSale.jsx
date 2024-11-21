import { useContext } from "react";
import { CouponContext } from "../../providers/AuthProvider";
import { useNavigate } from "react-router-dom";

const BrandsOnSale = () => {
    const navigate = useNavigate()
    const coupons = useContext(CouponContext);
    const onSales = coupons.filter(coupon => coupon.isSaleOn === true);
    return (
        <aside className="py-5 sm:py-10 sm:w-1/3 lg:w-[25%] xl:w-1/5">
            <h3 className="mb-2 rounded-xl sm:mb-5 text-xl sm:text-2xl font-bold text-center sm:text-start text-red-500">Brands on sale</h3>
            <div className="grid grid-cols-2 sm:grid-cols-1 gap-5 py-5 sm:py-10 bg-gray-100 rounded-xl">
                {
                    onSales.map(onSale => <div onClick={() => navigate(`/brand/${onSale.id}`)} className="bg-white rounded-xl shadow-md p-5 place-self-center border border-dotted w-40 sm:w-44 lg:w-48 space-y-2" key={onSale.id}>
                        <img className="w-32 h-10 p-1 -ml-[2px] border rounded-lg" src={onSale.brandLogo} alt="" />
                        <h4 className="text-primary sm:text-2xl font-semibold">{onSale.brandName}</h4>
                        <p className="text-gray-500 font-mono">Total coupons: {onSale.coupons.length}</p>
                        <p className="font-sans font-bold text-secondary text-center"><span className="text-xs text-gray-500">Category: </span><br />{onSale.category}</p>
                    </div>)
                }
            </div>
        </aside>
    );
};

export default BrandsOnSale;
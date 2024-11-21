import { useContext, useState } from "react";
import { CouponContext } from "../../providers/AuthProvider";
import { useNavigate } from "react-router-dom";


const BrandsByCategory = () => {
    const navigate = useNavigate();
    const coupons = useContext(CouponContext);
    const [brands, setBrands] = useState(coupons);
    const [active, setActive] = useState('all');
    const categories = [];
    coupons.map(coupon => {
        if (!categories.includes(coupon.category)) {
            categories.push(coupon.category);
        }
    });
    const handleCategoryClick = (category) => {
        if (category === 'all') {
            setBrands(coupons);
            setActive('all');
        } else {
            const filtered = coupons.filter(coupon => coupon.category === category);
            setBrands(filtered);
            setActive(category);
        }
    }
    return (
        <div className="space-y-5 py-5 sm:py-10">
            <h4 className="text-center text-textPrimary sm:text-xl font-semibold">Brands by category</h4>
            <div className="flex place-items-start gap-10 justify-between">
            <div className="grid grid-cols-1 gap-2 w-[37%]">
                <button onClick={() => handleCategoryClick('all')} className={active === 'all' ? "btn btn-sm hover:bg-primary bg-primary text-white" : "btn btn-outline text-primary btn-sm hover:bg-primary"}>All</button>
                {
                    categories.map(category => <button onClick={() => handleCategoryClick(category)}  className={active === category ? "btn btn-sm hover:bg-primary bg-primary text-white" : "btn btn-outline text-primary btn-sm hover:bg-primary hover:border-primary"} key={category}>{category}</button>)
                }
            </div>
            <div className="w-4/5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-5">
                {
                    brands.map(brand => <div onClick={() => navigate(`/brand/${brand.id}`)} className="bg-white rounded-xl shadow-primary shadow p-2 mb-3" key={brand.id}>
                        <h4 className="text-primary sm:text-xl font-semibold">{brand.brandName}</h4>
                        <p className="text-gray-500 text-xs">{brand.description}</p>
                    </div>)
                }
            </div>
            </div>
        </div>
    );
};

export default BrandsByCategory;
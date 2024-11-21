import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FaRegCopy } from "react-icons/fa";
import PropTypes from 'prop-types';
import { ToastContainer, toast, Bounce } from 'react-toastify';

const Coupon = ({ coupon, shopLink }) => {
    const { "coupon-code": code, description, "expiry-date": date, condition, "coupon_type": type } = coupon;
    const handleCopy = () => {
        toast.success(`Coupon copied successfully`, {
            position: "top-center",
            autoClose: 500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
    }
    return (
        <div className="border rounded-xl shadow-md p-5 pr-0 text-center">
            <div className='flex'>
                <div className='border-r-4 pr-5 border-dashed'>
                    <div className='flex justify-center items-center gap-5 bg-gray-100 p-2 sm:p-0 lg:p-5 rounded-lg'>
                        <p className="text-center text-2xl sm:text-3xl text-secondary font-semibold"> {code}</p>
                        <CopyToClipboard text={code}>
                            <FaRegCopy onClick={handleCopy} className='text-xl' />
                        </CopyToClipboard>
                    </div>
                    <p className='sm:text-lg font-medium text-center'>Valid until {date}</p>
                    <p className='text-primary'>{description}</p>
                    <p className='text-xs'>{condition}</p>
                    <a target='_blank' className="btn btn-sm w-40 lg:btn-wide mt-5 hover:bg-primary bg-primary text-white" href={shopLink}>Use Now</a>
                </div>
                <div className='self-center place-items-center w-1/5'>
                    <p className="text-center text-lg sm:text-xl text-primary font-semibold rotate-90">{type}</p>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

Coupon.propTypes = {
    coupon: PropTypes.object.isRequired
}

export default Coupon;
import { VscMail } from "react-icons/vsc";

const Newsletter = () => {
    return (
        <div className="bg-bg text-[#e5e7eb]  rounded-xl shadow flex flex-col items-center py-10 lg:py-20 gap-5">
            <VscMail className="text-gray-200 font-semibold text-xl sm:text-4xl xl:text-7xl"/>
            <h4 className=" w-4/5 text-center text-xl lg:text-3xl xl:text-5xl font-semibold">Subscribe to our newsletter to get updated of new coupons.</h4>
            <div className="join">
                <input className="input input-wide input-sm xl:input-md input-bordered input-wide join-item" placeholder="Email" />
                <button className="btn btn-sm xl:btn-md  bg-primary hover:bg-primary text-white join-item">Subscribe</button>
            </div>
        </div>
    );
};

export default Newsletter;
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import 'animate.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import slider1 from '../../assets/slider/1.jpg' 
import slider2 from '../../assets/slider/2.webp' 
import slider3 from '../../assets/slider/3.webp' 
import slider4 from '../../assets/slider/4.jpg' 
import slider5 from '../../assets/slider/5.jpg' 

const Banner = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className="animate__animated animate__fadeInDown">
            <div className="bg-primary py-5 sm:py-10 space-y-3 text-gray-200 text-center">
                <h3 className="animate__animated animate__zoomIn w-2/3 lg:w-1/2 mx-auto text-2xl sm:text-4xl font-bold">Welcome{`${user ? ', ' + user.displayName : ''}`}</h3>
                <p className="w-2/3 lg:w-1/2 mx-auto text-gray-300 pb-5 sm:pb-10">Your journey to amazing deals and savings starts here! Collect, browse, and redeem exclusive coupons for your favorite brands.</p>
                <Carousel className="w-4/5 sm:w-1/2 mx-auto rounded-2xl text-center bg-white shadow-lg" showStatus="" showThumbs="" infiniteLoop autoPlay>
                    <div className="h-[50vh]">
                        <img className="rounded-2xl h-full" src={slider1} />
                    </div>
                    <div className="h-[50vh]">
                        <img className="rounded-2xl h-full" src={slider5} />
                    </div>
                    <div className="h-[50vh]">
                        <img className="rounded-2xl h-full" src={slider4} />
                    </div>
                    <div className="h-[50vh]">
                        <img className="rounded-2xl h-full" src={slider2} />
                    </div>
                    <div className="h-[50vh]">
                        <img className="rounded-2xl h-full" src={slider3} />
                    </div>
                </Carousel>
            </div>
        </div>
    );
};

export default Banner;
import { TiWarningOutline } from "react-icons/ti";
import { useNavigate } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";


const Errorpage = () => {
    const navigate = useNavigate();
    return (
        <div className="h-[90vh] pb-5 max-sm:text-center flex flex-col justify-center items-center ">
            <HelmetProvider>
                <Helmet>
                    <title>Oh oh!</title>
                </Helmet>
                <div className="w-4/5 gap-5 flex flex-col items-center">
                    <TiWarningOutline className="pt-0 text-[180px] sm:text-[250px] lg:text-[300px] text-primary" />
                    <div className="w-4/5 sm:w-1/2 space-y-2 sm:space-y-4 flex flex-col text-center items-center">
                        <h2 className="text-xl sm:text-5xl lg:text-6xl font-bold">Oh Oh!</h2>
                        <p className="text-gray-500 sm:text-xl">Error 404! The page you are looking for does not exist.</p>
                        <button onClick={() => navigate('/')} className="btn btn-wide l-5 btn-outline text-primary hover:bg-primary hover:text-white font-bold  max-sm:btn-sm rounded-xl">Go Back</button>
                    </div>
                </div>
            </HelmetProvider>
        </div>
    );
}

export default Errorpage;

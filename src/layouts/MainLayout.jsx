import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Footer from "../components/Footer/Footer";

const MainLayout = () => {
    const { isLoading } = useContext(AuthContext);
    if (isLoading) {
        return <div className="flex justify-center items-center h-svh">
            <span className="loading loading-bars flex justify-center loading-lg"></span>
        </div>
    }
    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
}

export default MainLayout;

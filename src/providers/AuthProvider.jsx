import { createContext, useEffect, useRef, useState } from "react";
import app from "../firebase/firebase.config";
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import 'react-toastify/dist/ReactToastify.css';

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();
// eslint-disable-next-line react-refresh/only-export-components
export const CouponContext = createContext();
// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
    const [coupons, setCoupons] = useState();
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const emailRef = useRef();
    const auth = getAuth(app)
    const provider = new GoogleAuthProvider();
    const handleGoogleSignin = () => {
        setIsLoading(false);
        return signInWithPopup(auth, provider)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setIsLoading(false);
        });
        return () => unsubscribe();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    useEffect(() => {
        fetch('coupons.json')
            .then(res => res.json())
            .then(data => setCoupons(data));
    }, []);
    const authData = {
        handleGoogleSignin,
        user,
        setUser,
        auth,
        isLoading,
        emailRef,
    }
    return (
        <AuthContext.Provider value={authData}>
            <CouponContext.Provider value={coupons}>
                {children}
            </CouponContext.Provider>
        </AuthContext.Provider>
    );
};

export default AuthProvider;
import { createContext, useState } from "react";
import app from "../firebase/firebase.config";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import 'react-toastify/dist/ReactToastify.css';

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();
// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const auth = getAuth(app)
    const provider = new GoogleAuthProvider();
    const handleGoogleSignin = () => {
        return signInWithPopup(auth, provider)
    }
    const authData = {
        handleGoogleSignin,
        user,
        setUser,
        auth,
    }
    return (
        <AuthContext.Provider value={authData}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
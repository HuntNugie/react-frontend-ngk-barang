import { AuthContext } from "../context/Auth.context";
import { useState,useEffect } from "react";
import axios from "axios";
export const AuthProvider = ({children}) => {
    const [isAuth, setIsAuth] = useState(false);
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    const api = import.meta.env.VITE_BACKEND_API;
    useEffect(() => {
        const request = async () => {
            try {
                const res = await axios.get(`${api}/api/auth/me`, {withCredentials: true});
                const data = res.data;
                setUser(data);
                setIsAuth(true);
            } catch (error) {
                setUser(null);
                setIsAuth(false);
                console.log(error);
            } finally {
                setLoading(false);
            }
        };
        request();
    }, []);

    return <AuthContext.Provider value={{user, loading, isAuth}}>{children}</AuthContext.Provider>;
};

import {AuthContext} from "../context/Auth.context";
import {useState, useEffect} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export const AuthProvider = ({children}) => {
    const [isAuth, setIsAuth] = useState(false);
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    const [isError, setIsError] = useState(false);
    const [error, setError] = useState(null);
   
    const api = import.meta.env.VITE_BACKEND_API;
   
    const navigateTo = useNavigate();
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

    /* global Swal */

    const register = async (payload) => {
        try {            
            await axios.post(`${api}/api/auth/register`, payload);
            setIsError(false);
            setError(null);
            Swal.fire({
                icon: "success",
                title: "Registrasi Berhasil",
                html: `
    <p>Akun kamu berhasil dibuat.</p>
    <p>Silakan login untuk melanjutkan.</p>
  `,
                confirmButtonText: "OK",
            });
            setTimeout(() => {
                navigateTo("/login", {replace: true});
            }, 1500);
        } catch (error) {
            setIsError(true);
            setError(error.response.data.error);
        } finally {
            setLoading(false);
        }
    };

    return <AuthContext.Provider value={{user, loading, isAuth, register,isError,error,setError,setIsError}}>{children}</AuthContext.Provider>;
};

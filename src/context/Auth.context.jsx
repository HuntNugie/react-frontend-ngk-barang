import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export const AuthContext = createContext();

export const AuthProvider = ({children})=>{
    const [isAuth,setIsAuth] = useState(false);
    const [loading,setLoading] = useState(true);
    const [User,setUser] = useState(null)
    const navigateTo = useNavigate();
    const api = import.meta.env.VITE_BACKEND_API;
    useEffect(()=>{
        const request = async()=>{
            try {
                const res = await axios.get(`${api}/api/auth/me`,{withCredentials:true})
                const data = res.data;
                setUser(data)
                setIsAuth(true)
            } catch (error) {
                setUser(null)
                setIsAuth(false)
                console.log(error)
                navigateTo("/login")
            }finally{
                setLoading(false)
            }
        }
        request();
    },[])

    return (
        <AuthContext.Provider value={{User,loading,isAuth}}>
            {children}
        </AuthContext.Provider>
    )   
}
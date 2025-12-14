import { useContext } from "react"
import { AuthContext } from "../context/Auth.context"

export const UseAuth = ()=>{
    const data = useContext(AuthContext)
    return data
}
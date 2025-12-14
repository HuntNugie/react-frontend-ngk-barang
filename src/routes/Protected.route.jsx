import {Navigate} from "react-router-dom";
import {UseAuth} from "../hooks/UseAuth";

export const ProtectedRoute = ({children}) => {
    const {isAuth} = UseAuth();
    if (!isAuth) {
        return <Navigate to={"/login"} replace />;
    }
    return children;
};

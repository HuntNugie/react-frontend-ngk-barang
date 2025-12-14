import { Link } from "react-router-dom";
export const Logout = () => {
    return (
        <>
            <Link href="login.html" className="list-group-item list-group-item-action text-danger">
                Logout
            </Link>
        </>
    );
};

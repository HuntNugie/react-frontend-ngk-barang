import {Outlet} from "react-router-dom";

export default function GuestLayout() {
    return (
        <>
            <div className="container vh-100 d-flex justify-content-center align-items-center">
                <div className="card shadow-lg p-4 col-11 col-sm-8 col-md-6 col-lg-4">
                    <Outlet/>
                </div>
            </div>
        </>
    );
}

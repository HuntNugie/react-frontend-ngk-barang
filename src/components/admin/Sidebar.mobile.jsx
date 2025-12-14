import { Link, useLocation } from "react-router-dom";

export const SidebarMobile = () => {
    const location = useLocation();
    return (
        <>
            {/* SIDEBAR VERSION DESKTOP */}
            <div className="col-lg-2 bg-light d-none d-lg-block border-end" style={{minHeight: "100vh"}}>
                <div className="list-group list-group-flush mt-3">
                    <Link to="/dashboard" className={location.pathname == "/dashboard" ? "list-group-item list-group-item-action active" : "list-group-item list-group-item-action"}>
                        Dashboard
                    </Link>
                    <Link to="/add-product" className={location.pathname == "/add-product" ? "list-group-item list-group-item-action active" : "list-group-item list-group-item-action"}>
                        Tambah Barang
                    </Link>
                    <Link href="login.html" className="list-group-item list-group-item-action text-danger">
                        Logout
                    </Link>
                </div>
            </div>
        </>
    );
};

import { Link } from "react-router-dom";
import { LinkNavigation } from "../Admin_partial/LinkNavigation";

export const SidebarMobile = () => {
    
    return (
        <>
            {/* SIDEBAR VERSION DESKTOP */}
            <div className="col-lg-2 bg-light d-none d-lg-block border-end" style={{minHeight: "100vh"}}>
                <div className="list-group list-group-flush mt-3">
                  <LinkNavigation path={"/dashboard"} name={"Dashboard"}/>
                  <LinkNavigation path={"/add-product"} name={"Tambah Barang"}/>
                    <Link href="login.html" className="list-group-item list-group-item-action text-danger">
                        Logout
                    </Link>
                </div>
            </div>
        </>
    );
};

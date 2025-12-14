import { Link } from "react-router-dom";
import { LinkNavigation } from "../Admin_partial/LinkNavigation";
import { Logout } from "../Admin_partial/Logout";

export const Sidebar = () => {

    return (
        <div className="offcanvas offcanvas-start bg-light" tabIndex={-1} id="sidebar">
            <div className="offcanvas-header">
                <h5 className="offcanvas-title">Menu</h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" />
            </div>
            <div className="offcanvas-body p-0">
                <div className="list-group list-group-flush">
                    <LinkNavigation path="/dashboard" name="Dashboard"/>
                    <LinkNavigation path="/add-product" name="Tambah barang"/>
                   <Logout/>
                </div>
            </div>
        </div>
    );
};

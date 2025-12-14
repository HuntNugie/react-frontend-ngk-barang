import { Outlet } from "react-router-dom";
import { Navbar } from "../components/admin/Navbar";
import { Sidebar } from "../components/admin/Sidebar";
import { SidebarMobile } from "../components/admin/Sidebar.mobile";

export default function ProtectedLayout() {
    return (
        <>
            {/* NAVBAR ATAS */}
            <Navbar/>
            {/* SIDEBAR / OFFCANVAS */}
           <Sidebar/>
            {/* MAIN CONTENT */}
            <div className="container-fluid">
                <div className="row">
            <SidebarMobile/>
                 <Outlet/>
                </div>
            </div>
        </>
    );
}

export const Sidebar = () => {
    return (
        <div className="offcanvas offcanvas-start bg-light" tabIndex={-1} id="sidebar">
            <div className="offcanvas-header">
                <h5 className="offcanvas-title">Menu</h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" />
            </div>
            <div className="offcanvas-body p-0">
                <div className="list-group list-group-flush">
                    <a href="dashboard.html" className="list-group-item list-group-item-action active">
                        Dashboard
                    </a>
                    <a href="form_barang.html" className="list-group-item list-group-item-action">
                        Tambah Barang
                    </a>
                    <a href="login.html" className="list-group-item list-group-item-action text-danger">
                        Logout
                    </a>
                </div>
            </div>
        </div>
    );
};

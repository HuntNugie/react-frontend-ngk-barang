export const Navbar = () => {
    return (
        <nav className="navbar navbar-dark bg-primary">
            <div className="container-fluid">
                <button
                    className="btn btn-outline-light me-3 d-lg-none"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#sidebar"
                >
                    ☰
                </button>
                <a className="navbar-brand">Dashboard</a>
                <div className="d-flex align-items-center">
                    <img src="https://via.placeholder.com/35" className="rounded-circle me-2" alt="User" />
                    <span className="text-white fw-semibold">Nama User</span>
                </div>
            </div>
        </nav>
    );
};

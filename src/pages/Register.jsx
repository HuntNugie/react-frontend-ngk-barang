import { Link } from "react-router-dom";

export const Register = () => {
    return (
        <>
            <h2 className="text-center mb-4">Register</h2>
            <form>
                <div className="mb-3">
                    <label htmlFor="nama" className="form-label">
                        Nama
                    </label>
                    <input type="text" className="form-control" id="nama" placeholder="Nama lengkap" required="" />
                </div>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">
                        Username
                    </label>
                    <input type="text" className="form-control" id="username" placeholder="Username" required="" />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                        Password
                    </label>
                    <input type="password" className="form-control" id="password" placeholder="Password" required="" />
                </div>
                <div className="mb-3">
                    <label htmlFor="confirm_password" className="form-label">
                        Confirm Password
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="confirm_password"
                        placeholder="Ulangi password"
                        required=""
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="jenis_kelamin" className="form-label">
                        Jenis Kelamin
                    </label>
                    <select className="form-select" id="jenis_kelamin" required="">
                        <option value="">Pilih...</option>
                        <option value="L">Laki-laki</option>
                        <option value="P">Perempuan</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="tgl_lahir" className="form-label">
                        Tanggal Lahir
                    </label>
                    <input type="date" className="form-control" id="tgl_lahir" required="" />
                </div>
                <button type="submit" className="btn btn-success w-100 mb-3">
                    Register
                </button>
                <p className="text-center">
                    Sudah punya akun? <Link to="/login">Login</Link>
                </p>
            </form>
        </>
    );
};

import axios from "axios";
import {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {Loading} from "../components/Loading";

export const Register = () => {
    const [form, setForm] = useState({
        username: "",
        password: "",
        confirm_password: "",
        nama: "",
        jenis_kelamin: "",
        tgl_lahir: "",
    });
    const navigateTo = useNavigate();
    const [loading, setLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [error, setError] = useState([]);
    const api = import.meta.env.VITE_BACKEND_API;

    const handleChage = (e) => {
        setForm((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();

            setLoading(true);
            await axios.post(`${api}/api/auth/register`, form);
            setIsError(false);
            setError(null);
            Swal.fire({
                icon: "success",
                title: "Registrasi Berhasil",
                html: `
    <p>Akun kamu berhasil dibuat.</p>
    <p>Silakan login untuk melanjutkan.</p>
  `,
                confirmButtonText: "OK",
            });
            setTimeout(()=>{
                navigateTo("/login", {replace: true});
            },1500);
        } catch (error) {
            setIsError(true);
            setError(error.response.data.error);
        } finally {
            setLoading(false);
        }
    };
    // untuk error dengan sweet alert
    useEffect(() => {
        if (!isError) return;
        Swal.fire({
            icon: "error",
            title: "Terjadi Kesalahan",
            html: `
            <ul>
            ${error
            .map((el) => {
                return `<li>
                ${el.msg}
                </li>`;
            })
            .join("")}
            </ul>
      `,
            confirmButtonText: "ok",
        }).then(() => {
            setIsError(false);
            setError(null);
        });
    }, [isError, error]);
    // untuk loading
    if (loading) {
        return <Loading />;
    }

    return (
        <>
            <h2 className="text-center mb-4">Register</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="nama" className="form-label">
                        Nama
                    </label>
                    <input
                        type="text"
                        onChange={handleChage}
                        className="form-control"
                        id="nama"
                        name="nama"
                        placeholder="Nama lengkap"
                        required={true}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">
                        Username
                    </label>
                    <input
                        type="text"
                        onChange={handleChage}
                        name="username"
                        className="form-control"
                        id="username"
                        placeholder="Username"
                        required={true}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                        Password
                    </label>
                    <input
                        name="password"
                        type="password"
                        onChange={handleChage}
                        className="form-control"
                        id="password"
                        placeholder="Password"
                        required={true}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="confirm_password" className="form-label">
                        Confirm Password
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        onChange={handleChage}
                        name="confirm_password"
                        id="confirm_password"
                        placeholder="Ulangi password"
                        required={true}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="jenis_kelamin" className="form-label">
                        Jenis Kelamin
                    </label>
                    <select
                        className="form-select"
                        id="jenis_kelamin"
                        name="jenis_kelamin"
                        onChange={handleChage}
                        required={true}
                    >
                        <option value="">Pilih...</option>
                        <option value="laki_laki">Laki-laki</option>
                        <option value="perempuan">Perempuan</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="tgl_lahir" className="form-label">
                        Tanggal Lahir
                    </label>
                    <input
                        type="date"
                        name="tgl_lahir"
                        onChange={handleChage}
                        className="form-control"
                        id="tgl_lahir"
                        required={true}
                    />
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

export const Login = () => {
    return (
        <>
            <h2 className="text-center mb-4">Login</h2>

            <form>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">
                        Username
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="username"
                        placeholder="Masukkan username"
                        required=""
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                        Password
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Masukkan password"
                        required=""
                    />
                </div>
                <button type="submit" className="btn btn-primary w-100 mb-3">
                    Login
                </button>
                <p className="text-center">
                    Belum punya akun? <a href="register.html">Register</a>
                </p>
            </form>
        </>
    );
};

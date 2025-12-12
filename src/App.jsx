import {Routes, Route, BrowserRouter, Navigate} from "react-router-dom";
import GuestLayout from "./layouts/Guest.layout";
import {Login} from "./pages/Login";
import {Register} from "./pages/Register";
function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Navigate to="/login" replace />} />
                    <Route element={<GuestLayout />}>
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;

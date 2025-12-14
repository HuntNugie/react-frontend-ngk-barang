import {Routes, Route, BrowserRouter, Navigate} from "react-router-dom";
import GuestLayout from "./layouts/Guest.layout";
import {Login} from "./pages/Login";
import {Register} from "./pages/Register";
import ProtectedLayout from "./layouts/Protected.layout";
import {Dashboard} from "./pages/admin/Dashboard";
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
                    <Route element={<ProtectedLayout />}>
                        <Route path="/dashboard" element={<Dashboard />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;

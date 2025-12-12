import {Routes, Route, BrowserRouter, Navigate} from "react-router-dom";
import GuestLayout from "./layouts/Guest.layout";
import {Login} from "./pages/Login";
function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                  <Route path="/" element={
                    <Navigate to="/login" replace/>
                  } />
                    <Route element={<GuestLayout />}>
                        <Route path="/login" element={<Login/>} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;

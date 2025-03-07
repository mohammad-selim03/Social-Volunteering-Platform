import { Routes, Route } from "react-router-dom";  // ✅ Correct import
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import App from "../App";

const Router = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/auth/login" element={<Login />} />
                <Route path="/auth/register" element={<Register />} />  {/* ✅ Fixed Typo */}
            </Routes>
        </div>
    );
};

export default Router;

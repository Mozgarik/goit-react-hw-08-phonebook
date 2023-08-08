import RegisterPage from "pages/RegisterPage/RegisterPage";
import { NavLink, Route, Routes } from "react-router-dom";
import LoginPage from "pages/LoginPage/LoginPage";
import HomePage from "pages/HomePage/HomePage";



export const App = () => {
  return (
    <div>


      <Routes>
        <Route path="/goit-react-hw-08-phonebook/" element={<HomePage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/register" element={<RegisterPage/>} />
      </Routes>
      
    </div>
  );
};


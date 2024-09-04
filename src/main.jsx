import { GoogleOAuthProvider } from "@react-oauth/google";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cadastro from "./Pages/Cadastro/index";
import Login from "./Pages/Login/index";
import Home from "./Pages/home/index";
import "./index.css";

export default function App() {
  return (
    <GoogleOAuthProvider clientId="28272921009-3aott21t7m8t6g79pnibsvd8fe7pro6q.apps.googleusercontent.com">
      <BrowserRouter>
        <Routes>
            <Route index element={<Home />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Cadastro" element={<Cadastro />} />
        </Routes>
      </BrowserRouter>
    </GoogleOAuthProvider>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

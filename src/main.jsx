import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Home from "./Pages/home/index";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <GoogleOAuthProvider clientId="28272921009-3aott21t7m8t6g79pnibsvd8fe7pro6q.apps.googleusercontent.com">
    <StrictMode>
      <Home />
    </StrictMode>
  </GoogleOAuthProvider>
);

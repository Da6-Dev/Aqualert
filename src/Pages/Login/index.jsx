import "./style.css";
import { GoogleLogin } from "@react-oauth/google";
import AqualertLogoMin from "../../assets/images/Aqualert-Logo-Min.png";
import AqualertLogo from "../../assets/images/Aqualert-Logo.png";

function Login() {
  return (
    <div className="Container-Full">
      <div className="Background-Login-Card">
        <div className="Login-Card">
          <img
            src={AqualertLogoMin}
            alt="Logo minima do projeto Aqualert"
            className="Login-Card-Logo-Min"
          />
          <img
            src={AqualertLogo}
            alt="Logo completa do projeto Aqualert"
            className="Login-Card-Logo-Full"
          />
          <h1 className="Login-Card-Title title is-4">Login</h1>
          <p className="Login-Card-Description">Entre com sua conta agora</p>
          <GoogleLogin
            className="Login-Card-Button-Google"
            onSuccess={(res) => {
              console.log("Login Efetuado com Sucesso! " + res);
            }}
            onError={(res) => {
              console.log("O Login Falhou : " + res);
            }}
            width={300}
          />
          <button className="Login-Card-Button-Aqualert-Account button">
            <img src={AqualertLogoMin} alt="Logo minima do projeto Aqualert" className="Login-Card-Button-Aqualert-Account-Image"/>
            <span className="Login-Card-Button-Aqualert-Account-Text">Conta Aqualert</span>
          </button>
          <a href="" className="Login-Card-Button-Create-Account">
            Não possui uma conta?
          </a>
        </div>
      </div>
    </div>
  );
}

export default Login;

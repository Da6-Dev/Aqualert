import "./style.css";
import { GoogleLogin } from "@react-oauth/google";

function Home() {
  return (
    <GoogleLogin
      onSuccess={(res) => {
        console.log("Login Efetuado com Sucesso! " + res);
      }}
      onError={(res) => {
        console.log("O Login Falhou : " + res);
      }}
    />
  );
}

export default Home;

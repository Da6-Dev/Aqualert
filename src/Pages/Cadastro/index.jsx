import './style.css'
import logoMin from "../../assets/images/Aqualert-Logo-min.png"

function Cadastro() {

  return (
    <div className='Container-Full'>
      <div className="Background-Fomulario-Cadastro">
        <form className='Formulario-cadastro'>
          <div className='Formulario-cadastro-logo'>
            <img src={logoMin} alt="Logo-Aqualert-Min"/>
          </div>
          <h1 className='Formulario-cadastro-titulo'>Crie sua conta</h1>
          <div className='Formulario-cadasreo-inputbox'>
            <label className='Formulario-cadastro-label' htmlFor="Nome">NOME</label>
            <input className='Formulario-cadastro-input' placeholder='Joao' name="nome" type='text' />
          </div>
          <div className='Formulario-cadasreo-inputbox'>
            <label className='Formulario-cadastro-label' htmlFor="Idade">IDADE</label>
            <input className='Formulario-cadastro-input' placeholder='18' name="idade" type='number' />
          </div>
          <div className='Formulario-cadasreo-inputbox'>
            <label className='Formulario-cadastro-label' htmlFor="E-mail">E-MAIL</label>
            <input className='Formulario-cadastro-input' placeholder='4886.116@educacao.org.br' name="email" type='email' />
          </div>
          <div className='Formulario-cadasreo-inputbox'>
            <label className='Formulario-cadastro-label' htmlFor="Senha">SENHA</label>
            <input className='Formulario-cadastro-input' placeholder='******' name="senha" type='password' />
          </div>
          <button className='Formulario-cadastro-submit' type='submit'>Cadastrar</button>
          <a href="" className='Formulario-cadastro-Login-Redirect'>Você já tem uma conta? <br/> Login</a>
        </form>
      </div>
    </div>


  )
}

export default Cadastro

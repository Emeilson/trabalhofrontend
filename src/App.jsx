import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import ListaAlunos from './ListaAlunos.jsx'
import Alerta from './Alerta.jsx'
import Acoes from './Acoes.jsx'
import CartaoPerfil from './CartaoPerfil.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
       <div>
        <Header />
        </div>
        <div>
         <Footer />
        </div>
       <div>
        <ListaAlunos />
      </div>
      <div>
        <Alerta tipo="sucesso" />
        <Alerta tipo="erro" />
        <Alerta tipo="info" />
      </div>
      <div>
        <Acoes texto="Salvar" />
        <Acoes texto="Cancelar" />
        <Acoes texto="Excluir" />
      </div>
      <div>
        <CartaoPerfil nome="Pedro" idade={21} profissao="Estudante" />
        <CartaoPerfil nome="Maria" idade={22} profissao="Estudante" />
        <CartaoPerfil nome="Joana" idade={20} profissao="Estudante" />
        <CartaoPerfil nome="Carlos" idade={23} profissao="Estudante" />
        <CartaoPerfil nome="Julia" idade={21} profissao="Estudante" />
      </div>
      </div>
      <h1>Boas vindas Pedro</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Você clicou {count} vezes
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

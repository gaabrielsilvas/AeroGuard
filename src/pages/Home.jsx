import { GlobalStyle } from "../styles/global";
import { HomeConteudo } from '../styles/Home.styles'
import { useState } from 'react';
import { NavLink } from "react-router-dom";
import HomeLight from "/HomeLight.png"
import HomeDark from "/HomeDark.png"
import Botao from "../components/Botao";


export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }
  return (
    <HomeConteudo $darkMode={darkMode}>
      <Botao darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>

      <div className="titulo">
        <img className={darkMode ? 'oculto' : ''} src={HomeLight} alt="" />
        <img className={darkMode ? '' : 'oculto'} src={HomeDark} alt="" />
        <h1>AeroGuard Tech</h1>
      </div>

      <div className="textos">
        <h2>Sobre o Produto</h2>
        <p>Apresentamos nossa solução inovadora para problemas respiratórios, projetada para transformar a maneira como você cuida da sua saúde. Junte-se a nós nesta jornada de avanço tecnológico em prol de uma melhor qualidade de vida.</p>
        <h2>Publico alvo</h2>
        <p>Nosso produto é feito especificamente para pessoas com problemas respiratórios, sejam elas crianças, adultos ou idosos. fizemos pensando em dar uma melhor qualidade de vida para todos.</p>
      </div>

      <h3>Saiba Mais</h3>
      <div className="mais">
        <NavLink to="/sobre-nos">Sobre nós</NavLink>
        <NavLink to="/materiais">Materiais</NavLink>
        <NavLink to="/referencias">Referências</NavLink>
        <NavLink to="/guia">Guia</NavLink>
      </div>
      
      <GlobalStyle />
    </HomeConteudo>
  )
}